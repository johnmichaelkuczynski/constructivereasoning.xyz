import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout/Layout";
import {
  useListAssignments,
  useListAssignmentProblems,
  useRunGraderLab,
  GraderLabResult,
} from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { useAuthUser, userIsAdmin } from "@/lib/auth";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

type SeriesBucket = { label: string; count: number };

type VisitsResponse = {
  stats: {
    allTime: number;
    last24Hours: number;
    lastWeek: number;
    lastMonth: number;
    lastYear: number;
  };
  series: {
    last24Hours: SeriesBucket[];
    lastWeek: SeriesBucket[];
    lastMonth: SeriesBucket[];
    lastYear: SeriesBucket[];
    allTime: SeriesBucket[];
  };
  visits: Array<{ id: number; email: string | null; visitedAt: string }>;
};

type Period = "last24Hours" | "lastWeek" | "lastMonth" | "lastYear" | "allTime";

const PERIOD_LABELS: Record<Period, string> = {
  last24Hours: "Last 24 Hours",
  lastWeek: "Last 7 Days",
  lastMonth: "Last 30 Days",
  lastYear: "Last Year",
  allTime: "All Time",
};

function LoginChart({ data, label }: { data: SeriesBucket[]; label: string }) {
  const hasAny = data.some((d) => d.count > 0);
  if (!hasAny) {
    return (
      <div className="flex items-center justify-center h-32 text-muted-foreground text-sm">
        No logins in this period.
      </div>
    );
  }
  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart data={data} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis
          dataKey="label"
          tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
          interval="preserveStartEnd"
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          allowDecimals={false}
          tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          contentStyle={{
            background: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: 6,
            fontSize: 12,
          }}
          labelStyle={{ color: "hsl(var(--foreground))", fontWeight: 600 }}
          itemStyle={{ color: "hsl(var(--primary))" }}
          formatter={(value: number) => [value, "Logins"]}
        />
        <Bar dataKey="count" fill="hsl(var(--primary))" radius={[3, 3, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

function SignInAnalytics() {
  const [activePeriod, setActivePeriod] = useState<Period>("lastWeek");

  const { data, isLoading, isError } = useQuery<VisitsResponse>({
    queryKey: ["admin-visits"],
    queryFn: async () => {
      const res = await fetch(`${basePath}/api/admin/visits`, {
        credentials: "include",
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    },
  });

  if (isLoading) {
    return (
      <div className="text-muted-foreground text-sm py-6">
        Loading login data…
      </div>
    );
  }
  if (isError || !data) {
    return (
      <div className="rounded-md border border-destructive/50 bg-destructive/5 p-4 text-sm text-destructive">
        Could not load login data. You must be signed in as the administrator.
      </div>
    );
  }

  const statCards: Array<{ label: string; value: number; period: Period }> = [
    { label: "Last 24 hours", value: data.stats.last24Hours, period: "last24Hours" },
    { label: "Last 7 days", value: data.stats.lastWeek, period: "lastWeek" },
    { label: "Last 30 days", value: data.stats.lastMonth, period: "lastMonth" },
    { label: "Last year", value: data.stats.lastYear, period: "lastYear" },
    { label: "All time", value: data.stats.allTime, period: "allTime" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {statCards.map((c) => (
          <button
            key={c.period}
            onClick={() => setActivePeriod(c.period)}
            className={`rounded-lg border p-4 text-left transition-colors ${
              activePeriod === c.period
                ? "border-primary bg-primary/5"
                : "border-border bg-card hover:bg-secondary/50"
            }`}
          >
            <div className="text-xs uppercase tracking-wide text-muted-foreground">
              {c.label}
            </div>
            <div className="text-2xl font-bold mt-1">{c.value}</div>
          </button>
        ))}
      </div>

      <div className="rounded-lg border border-border bg-card p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-sm">
            Google Logins — {PERIOD_LABELS[activePeriod]}
          </h3>
          <div className="flex gap-1">
            {(Object.keys(PERIOD_LABELS) as Period[]).map((p) => (
              <button
                key={p}
                onClick={() => setActivePeriod(p)}
                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                  activePeriod === p
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary text-muted-foreground"
                }`}
              >
                {p === "last24Hours"
                  ? "24h"
                  : p === "lastWeek"
                  ? "7d"
                  : p === "lastMonth"
                  ? "30d"
                  : p === "lastYear"
                  ? "1y"
                  : "All"}
              </button>
            ))}
          </div>
        </div>
        <LoginChart
          data={data.series[activePeriod]}
          label={PERIOD_LABELS[activePeriod]}
        />
      </div>

      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <div className="px-4 py-3 border-b border-border bg-secondary/30">
          <h3 className="font-semibold text-sm">Login History</h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Most recent {data.visits.length} Google sign-ins
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-secondary/20 text-left">
              <tr>
                <th className="px-4 py-2.5 font-medium text-xs uppercase tracking-wide text-muted-foreground">
                  Gmail address
                </th>
                <th className="px-4 py-2.5 font-medium text-xs uppercase tracking-wide text-muted-foreground">
                  Signed in at
                </th>
              </tr>
            </thead>
            <tbody>
              {data.visits.length === 0 ? (
                <tr>
                  <td colSpan={2} className="px-4 py-6 text-muted-foreground">
                    No sign-ins recorded yet.
                  </td>
                </tr>
              ) : (
                data.visits.map((v) => (
                  <tr key={v.id} className="border-t border-border hover:bg-secondary/20">
                    <td className="px-4 py-2.5 font-mono text-xs">
                      {v.email ?? "(unknown)"}
                    </td>
                    <td className="px-4 py-2.5 text-muted-foreground text-xs">
                      {new Date(v.visitedAt).toLocaleString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

type Source = "problem" | "custom";

const CREDIT_TOLERANCE = 0.25;
function caseMatches(c: { credit: number; expectedCredit: number }): boolean {
  return Math.abs(c.credit - c.expectedCredit) <= CREDIT_TOLERANCE;
}

function GraderLab() {
  const [source, setSource] = useState<Source>("problem");
  const [assignmentId, setAssignmentId] = useState<number | null>(null);
  const [problemId, setProblemId] = useState<number | null>(null);
  const [customPrompt, setCustomPrompt] = useState("");
  const [customAnswer, setCustomAnswer] = useState("");
  const [result, setResult] = useState<GraderLabResult | null>(null);

  const { data: assignments } = useListAssignments();
  const { data: problems } = useListAssignmentProblems(assignmentId ?? 0, {
    query: {
      enabled: !!assignmentId,
      queryKey: ["assignment-problems", assignmentId],
    },
  });
  const runLab = useRunGraderLab();

  const canRun =
    source === "problem"
      ? problemId != null
      : customPrompt.trim().length > 0 && customAnswer.trim().length > 0;

  const handleRun = () => {
    const data =
      source === "problem"
        ? { problemId }
        : { prompt: customPrompt, correctAnswer: customAnswer };
    runLab.mutate(
      { data },
      { onSuccess: (r) => setResult(r) },
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-muted-foreground max-w-2xl text-sm">
        Generate a spread of candidate answers for a question and see exactly
        how the grader scores each. No AI detection runs here.
      </p>

      <div className="rounded-lg border border-border bg-card p-5 flex flex-col gap-4">
        <div className="flex gap-2">
          <button
            onClick={() => setSource("problem")}
            className={`px-3 py-1.5 rounded-md text-sm font-medium border ${
              source === "problem"
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border hover:bg-secondary"
            }`}
            data-testid="tab-problem"
          >
            Pick a real problem
          </button>
          <button
            onClick={() => setSource("custom")}
            className={`px-3 py-1.5 rounded-md text-sm font-medium border ${
              source === "custom"
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border hover:bg-secondary"
            }`}
            data-testid="tab-custom"
          >
            Custom question
          </button>
        </div>

        {source === "problem" ? (
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="flex flex-col gap-1 text-sm">
              <span className="font-medium">Assignment</span>
              <select
                className="border border-input rounded-md p-2 bg-background"
                value={assignmentId ?? ""}
                onChange={(e) => {
                  setAssignmentId(e.target.value ? Number(e.target.value) : null);
                  setProblemId(null);
                }}
                data-testid="select-assignment"
              >
                <option value="">Select an assignment…</option>
                {(assignments ?? []).map((a) => (
                  <option key={a.id} value={a.id}>
                    Unit {a.weekNumber} — {a.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1 text-sm">
              <span className="font-medium">Problem</span>
              <select
                className="border border-input rounded-md p-2 bg-background"
                value={problemId ?? ""}
                onChange={(e) =>
                  setProblemId(e.target.value ? Number(e.target.value) : null)
                }
                disabled={!assignmentId}
                data-testid="select-problem"
              >
                <option value="">Select a problem…</option>
                {(problems ?? []).map((p, idx) => (
                  <option key={p.id} value={p.id}>
                    {p.format} #{idx + 1}: {p.prompt.slice(0, 60)}
                    {p.prompt.length > 60 ? "…" : ""}
                  </option>
                ))}
              </select>
            </label>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <label className="flex flex-col gap-1 text-sm">
              <span className="font-medium">Question</span>
              <textarea
                className="border border-input rounded-md p-3 bg-background min-h-[80px]"
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="The exact question stem…"
                data-testid="input-custom-prompt"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm">
              <span className="font-medium">Model / correct answer</span>
              <textarea
                className="border border-input rounded-md p-3 bg-background min-h-[80px]"
                value={customAnswer}
                onChange={(e) => setCustomAnswer(e.target.value)}
                placeholder="The reference answer the grader compares against…"
                data-testid="input-custom-answer"
              />
            </label>
          </div>
        )}

        <div>
          <Button
            onClick={handleRun}
            disabled={!canRun || runLab.isPending}
            data-testid="button-run-lab"
          >
            {runLab.isPending ? "Generating & grading…" : "Run grader lab"}
          </Button>
        </div>
      </div>

      {runLab.isError && (
        <div className="rounded-md border border-destructive/50 bg-destructive/5 p-4 text-sm text-destructive">
          Something went wrong running the grader lab. Try again.
        </div>
      )}

      {result && (
        <div className="flex flex-col gap-4">
          <div className="rounded-lg border border-border bg-secondary/40 p-4">
            <div className="text-sm font-semibold mb-1">Question</div>
            <div className="text-sm mb-3">
              <MarkdownRenderer content={result.prompt} />
            </div>
            <div className="text-sm font-semibold mb-1">Model answer</div>
            <div className="text-sm">
              <MarkdownRenderer content={result.correctAnswer} />
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            {result.cases.filter((c) => caseMatches(c)).length} of{" "}
            {result.cases.length} cases graded within tolerance of the expected
            credit.
          </div>

          <div className="flex flex-col gap-3">
            {result.cases.map((c, i) => {
              const match = caseMatches(c);
              return (
                <div
                  key={i}
                  className={`rounded-lg border p-4 ${
                    match
                      ? "border-chart-2/40 bg-chart-2/5"
                      : "border-destructive/50 bg-destructive/5"
                  }`}
                  data-testid={`case-${c.kind}`}
                >
                  <div className="flex items-center justify-between gap-3 flex-wrap mb-2">
                    <div className="font-medium">{c.label}</div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2 py-0.5 rounded bg-secondary border border-border font-mono">
                        {c.kind}
                      </span>
                      <span>
                        expected:{" "}
                        <strong>{Math.round(c.expectedCredit * 100)}%</strong>
                      </span>
                      <span>
                        graded:{" "}
                        <strong
                          className={match ? "text-chart-2" : "text-destructive"}
                        >
                          {Math.round(c.credit * 100)}%
                        </strong>
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded font-semibold ${
                          match
                            ? "bg-chart-2/15 text-chart-2"
                            : "bg-destructive/15 text-destructive"
                        }`}
                      >
                        {match ? "MATCH" : "MISMATCH"}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm mb-2">
                    <span className="font-semibold">Answer: </span>
                    <span className="font-mono whitespace-pre-wrap">
                      {c.answer || "(blank)"}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold">Grader said: </span>
                    {c.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminMode() {
  const { data } = useAuthUser();
  const isAdmin = userIsAdmin(data);

  if (!isAdmin) {
    return (
      <Layout>
        <div className="p-8 max-w-3xl mx-auto w-full flex flex-col gap-6">
          <h1 className="text-3xl font-serif font-bold text-primary">
            Administrative
          </h1>
          <p className="text-muted-foreground">
            This page is restricted to the administrator account.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-8 max-w-5xl mx-auto w-full flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-serif font-bold text-primary">
            Administrative
          </h1>
          <p className="text-muted-foreground mt-1 max-w-2xl">
            Google login activity and site analytics.
          </p>
        </div>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-serif font-semibold border-b border-border pb-2">
            Login Analytics
          </h2>
          <SignInAnalytics />
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-serif font-semibold border-b border-border pb-2">
            Grader Lab
          </h2>
          <GraderLab />
        </section>
      </div>
    </Layout>
  );
}
