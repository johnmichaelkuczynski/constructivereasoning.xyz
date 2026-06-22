import { db } from "@workspace/db";
import {
  topicsTable,
  lecturesTable,
  assignmentsTable,
  problemsTable,
  seedMetaTable,
} from "@workspace/db";
import { eq, sql } from "drizzle-orm";
import { logger } from "./logger";
import { SECTIONS, type HomeworkItem } from "./homeworkContent";

// Content version of the seeded curriculum. BUMP THIS whenever the TOPICS or
// ASSIGNMENTS content below changes. On boot, seedIfEmpty compares this against
// the value stored in seed_meta; a mismatch forces a full re-seed, so content
// edits self-heal in every environment (including a republished production)
// without a manual database wipe.
const SEED_CONTENT_VERSION = "2026-06-22-ccr-4unit-v1";

// First CCR section slug — used as the marker topic that signals the current
// curriculum is seeded. A database holding the prior curriculum will lack this
// slug, so the seed reconciler replaces it on boot.
const MARKER_TOPIC_SLUG = SECTIONS[0]!.slug;

type SeedTopic = {
  slug: string;
  title: string;
  weekNumber: number;
  blurb: string;
  lectureTitle: string;
  body: string;
};

// The 32 Constructive Critical Reasoning sections become the course topics.
// Each section's lecture is the short-depth body; medium/long are generated on
// demand by the lecture route.
const TOPICS: SeedTopic[] = SECTIONS.map((s) => ({
  slug: s.slug,
  title: s.title,
  weekNumber: s.weekNumber,
  blurb: s.blurb,
  lectureTitle: s.lectureTitle,
  body: s.body,
}));

type SeedProblem = {
  topicSlug: string;
  format: "mcq" | "hybrid" | "written";
  itemType: "mc" | "written" | "hybrid";
  maxPoints: number;
  prompt: string;
  correctAnswer: string;
  explanation: string;
  hint?: string;
  mcOptions?: { text: string; credit: number }[] | null;
  writtenRubric?: HomeworkItem["writtenRubric"] | null;
};

type SeedAssignment = {
  kind: "homework";
  title: string;
  weekNumber: number;
  isTimed: boolean;
  timeLimitMinutes: number | null;
  instructions: string;
  problems: SeedProblem[];
};

const HOMEWORK_INSTRUCTIONS =
  "One homework for this section. At the start you pick a single answer format — " +
  "Multiple choice (15 questions), Hybrid (9 questions: multiple choice plus a short written follow-up), " +
  "or Written (5 questions) — and you get one attempt that locks the moment you submit. " +
  "Constructive Critical Reasoning rewards the boldest conclusion the evidence actually supports: " +
  "name a concrete mechanism and the cheap test that would disconfirm it. The cautious " +
  "\"you can't really conclude anything\" answer is a dodge and earns no credit; florid answers that " +
  "commit to nothing score low.";

// Flatten one authored homework item into a stored problem of the given format.
function toSeedProblem(
  item: HomeworkItem,
  topicSlug: string,
  format: "mcq" | "hybrid" | "written",
): SeedProblem {
  const usesOptions = item.itemType === "mc" || item.itemType === "hybrid";
  const usesRubric = item.itemType === "written" || item.itemType === "hybrid";
  return {
    topicSlug,
    format,
    itemType: item.itemType,
    maxPoints: 1,
    prompt: item.prompt,
    correctAnswer: item.correctAnswer,
    explanation: item.explanation,
    hint: item.hint,
    mcOptions: usesOptions && item.mcOptions ? item.mcOptions : null,
    writtenRubric: usesRubric && item.writtenRubric ? item.writtenRubric : null,
  };
}

// One graded homework per section. All three answer formats are authored up
// front and stored together; the student chooses ONE at start and only that
// format's problems are shown and graded.
const ASSIGNMENTS: SeedAssignment[] = SECTIONS.map((s, i) => {
  const problems: SeedProblem[] = [
    ...s.homework.mcq.map((it) => toSeedProblem(it, s.slug, "mcq")),
    ...s.homework.hybrid.map((it) => toSeedProblem(it, s.slug, "hybrid")),
    ...s.homework.written.map((it) => toSeedProblem(it, s.slug, "written")),
  ];
  return {
    kind: "homework" as const,
    title: `Homework ${i + 1} — ${s.title}`,
    weekNumber: s.weekNumber,
    isTimed: false,
    timeLimitMinutes: null,
    instructions: HOMEWORK_INSTRUCTIONS,
    problems,
  };
});

// Any primer / practice-prep lecture from earlier (pre-CCR) designs is obsolete.
// The course now uses the 32 CCR sections for content and a separate
// phase-based diagnostic for assessment, so these stray topics are removed on
// every boot to self-heal databases seeded under an older design.
const LEGACY_PRIMER_SLUGS = [
  "reasoning-primer-subject",
  "reasoning-primer-reasoning",
  "reasoning-primer-ethical",
  "reasoning-primer-critical",
];

export async function seedReasoningPrimersIfMissing(): Promise<void> {
  let removed = 0;
  for (const slug of LEGACY_PRIMER_SLUGS) {
    const rows = await db
      .delete(topicsTable)
      .where(eq(topicsTable.slug, slug))
      .returning({ id: topicsTable.id });
    removed += rows.length;
  }
  if (removed > 0) logger.info({ removed }, "Legacy reasoning primers removed");
}

export async function seedIfEmpty(): Promise<void> {
  // The course was migrated to the Constructive Critical Reasoning syllabus. Detect the marker topic;
  // if present and the content version matches, the content is current and we
  // skip. This makes the seed self-healing across environments: a database that
  // still holds older content (e.g. a previous curriculum) is detected and
  // replaced on boot.
  const markerTopic = await db
    .select({ id: topicsTable.id })
    .from(topicsTable)
    .where(eq(topicsTable.slug, MARKER_TOPIC_SLUG));
  // Read the stored content version. Tolerate the seed_meta table not yet
  // existing (e.g. a boot that races ahead of schema migration): treat that as
  // "no version recorded", which forces a reseed once the table is present.
  let currentVersion: string | null = null;
  try {
    const storedVersion = await db
      .select({ value: seedMetaTable.value })
      .from(seedMetaTable)
      .where(eq(seedMetaTable.key, "content_version"));
    currentVersion = storedVersion[0]?.value ?? null;
  } catch (err) {
    logger.warn({ err: (err as Error).message }, "Seed: seed_meta unavailable, treating version as unset");
    currentVersion = null;
  }
  if (markerTopic.length > 0 && currentVersion === SEED_CONTENT_VERSION) {
    logger.info("Seed: course content present and current, skipping");
    return;
  }
  if (markerTopic.length > 0) {
    logger.warn(
      { storedVersion: currentVersion, expected: SEED_CONTENT_VERSION },
      "Seed: course content present but out of date — re-seeding with the current curriculum",
    );
  }

  // No current content. Either the database is empty (fresh) or it still holds
  // an older curriculum. Do the (optional) wipe and the full reseed in a SINGLE
  // transaction so the marker topic only ever becomes visible once the entire
  // curriculum has committed. A crash mid-seed rolls back, so the next boot
  // retries instead of leaving partial content that the marker check would
  // wrongly treat as healthy. TRUNCATE also takes an ACCESS EXCLUSIVE lock, so
  // concurrent readers never observe a half-empty course during the replace
  // window. The diagnostic tables are truncated here too so the (non
  // version-gated) diagnostic seed repopulates them with the current content on
  // the same boot.
  await db.transaction(async (tx) => {
    const existing = await tx.execute(sql`select count(*)::int as n from topics`);
    const row = (existing.rows[0] ?? {}) as { n?: number };
    if ((row.n ?? 0) > 0) {
      logger.warn(
        "Seed: stale course content detected — replacing with the Constructive Critical Reasoning curriculum",
      );
      await tx.execute(
        sql`TRUNCATE TABLE answers, attempts, practice_attempts, practice_problems, practice_sessions, problems, assignments, lectures, topics, diagnostic_responses, diagnostic_attempts, diagnostic_items, diagnostic_assessments RESTART IDENTITY CASCADE`,
      );
    } else {
      logger.info("Seed: populating course content");
    }

    // Topics + lectures
    const slugToTopicId = new Map<string, number>();
    for (let i = 0; i < TOPICS.length; i++) {
      const t = TOPICS[i]!;
      const [inserted] = await tx
        .insert(topicsTable)
        .values({
          slug: t.slug,
          title: t.title,
          weekNumber: t.weekNumber,
          blurb: t.blurb,
          position: i,
        })
        .returning();
      if (!inserted) throw new Error(`Failed to insert topic ${t.slug}`);
      slugToTopicId.set(t.slug, inserted.id);
      await tx.insert(lecturesTable).values({
        topicId: inserted.id,
        weekNumber: t.weekNumber,
        title: t.lectureTitle,
        body: t.body,
      });
    }

    // Assignments + problems
    for (let i = 0; i < ASSIGNMENTS.length; i++) {
      const a = ASSIGNMENTS[i]!;
      const [inserted] = await tx
        .insert(assignmentsTable)
        .values({
          kind: a.kind,
          title: a.title,
          weekNumber: a.weekNumber,
          position: i,
          isTimed: a.isTimed,
          timeLimitMinutes: a.timeLimitMinutes,
          instructions: a.instructions,
        })
        .returning();
      if (!inserted) throw new Error(`Failed to insert assignment ${a.title}`);
      for (let p = 0; p < a.problems.length; p++) {
        const prob = a.problems[p]!;
        const topicId = slugToTopicId.get(prob.topicSlug);
        if (!topicId) throw new Error(`Unknown topic slug ${prob.topicSlug}`);
        await tx.insert(problemsTable).values({
          assignmentId: inserted.id,
          topicId,
          position: p,
          format: prob.format,
          itemType: prob.itemType,
          maxPoints: prob.maxPoints,
          prompt: prob.prompt,
          correctAnswer: prob.correctAnswer,
          explanation: prob.explanation,
          hint: prob.hint ?? null,
          mcOptions: prob.mcOptions ?? null,
          writtenRubric: prob.writtenRubric ?? null,
        });
      }
    }

    // Stamp the content version last, inside the same transaction, so the
    // marker check on the next boot only treats the course as "current" once
    // the entire curriculum has committed.
    await tx
      .insert(seedMetaTable)
      .values({ key: "content_version", value: SEED_CONTENT_VERSION })
      .onConflictDoUpdate({
        target: seedMetaTable.key,
        set: { value: SEED_CONTENT_VERSION, updatedAt: new Date() },
      });
  });

  logger.info(
    { topics: TOPICS.length, assignments: ASSIGNMENTS.length, version: SEED_CONTENT_VERSION },
    "Seed complete",
  );
}
