import { Link } from "wouter";
import {
  BarChart3,
  BookOpen,
  MessagesSquare,
  Target,
  ClipboardCheck,
  ShieldCheck,
  Search,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Three-Depth Lessons",
    body: "Read any topic Short, Medium, or Long — same ideas, your pace.",
  },
  {
    icon: MessagesSquare,
    title: "Section-Scoped Tutor",
    body: "Ask about the exact passage you're on and get a live, grounded answer.",
  },
  {
    icon: Target,
    title: "Adaptive Practice",
    body: "Questions that get harder on a streak and ease off after a miss.",
  },
  {
    icon: ClipboardCheck,
    title: "Partial-Credit Homework",
    body: "One graded homework per section — pick your format, get written feedback.",
  },
  {
    icon: ShieldCheck,
    title: "Built-In Integrity",
    body: "Every submission is screened for AI authorship, with a clear verdict.",
  },
  {
    icon: BarChart3,
    title: "Four Units, 32 Sections",
    body: "From spotting a fecund lead all the way to synthesizing vetted models into a standing explanation.",
  },
];

const units = [
  {
    n: 1,
    title: "Foundations of Constructive Reasoning",
    topics: [
      { n: "1.1", title: "The Fecund Lead" },
      { n: "1.2", title: "Model Selection by Explanatory Yield" },
      { n: "1.3", title: "Parsimony as a Live Constraint" },
      { n: "1.4", title: "Abductive Commitment" },
      { n: "1.5", title: "From Correlation to Mechanism" },
      { n: "1.6", title: "The Anomaly Cluster" },
      { n: "1.7", title: "The Cheap Decisive Test" },
      { n: "1.8", title: "Calibrated Boldness" },
    ],
  },
  {
    n: 2,
    title: "Building and Stress-Testing the Model",
    topics: [
      { n: "2.1", title: "The Generative Question" },
      { n: "2.2", title: "Auxiliary Assumptions" },
      { n: "2.3", title: "Load-Bearing vs. Decorative" },
      { n: "2.4", title: "The Severe Test" },
      { n: "2.5", title: "Surprise as a Metric" },
      { n: "2.6", title: "Independent Lines of Support" },
      { n: "2.7", title: "The Degenerating Model" },
      { n: "2.8", title: "Productive vs. Hollow Complexity" },
    ],
  },
  {
    n: 3,
    title: "Adjudicating Among Rivals",
    topics: [
      { n: "3.1", title: "The Live Contrast Set" },
      { n: "3.2", title: "Differential Diagnosis" },
      { n: "3.3", title: "The Crucial Experiment" },
      { n: "3.4", title: "Likelihood Reasoning" },
      { n: "3.5", title: "Base Rates and Priors" },
      { n: "3.6", title: "Screening Off" },
      { n: "3.7", title: "The Underdetermination Trap" },
      { n: "3.8", title: "Total Evidence" },
    ],
  },
  {
    n: 4,
    title: "Commitment, Revision, and Decision",
    topics: [
      { n: "4.1", title: "The Cost of Being Wrong" },
      { n: "4.2", title: "Provisional Acceptance" },
      { n: "4.3", title: "The Update That Hurts" },
      { n: "4.4", title: "Diagnosing the Failure" },
      { n: "4.5", title: "The Reasoner's Self-Audit" },
      { n: "4.6", title: "Robustness Under Perturbation" },
      { n: "4.7", title: "Knowing When to Stop" },
      { n: "4.8", title: "The Constructive Synthesis" },
    ],
  },
];

export default function Landing() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col">
      <header className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-primary-foreground">
            <Search className="w-4 h-4" />
          </div>
          <span className="font-serif font-semibold text-lg tracking-tight">
            Constructive Critical Reasoning
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/sign-in">
            <button
              className="px-4 py-2 rounded-md text-sm font-medium border border-border hover:bg-secondary transition-colors"
              data-testid="button-sign-in"
            >
              Sign in
            </button>
          </Link>
          <Link href="/sign-up">
            <button
              className="px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              data-testid="button-sign-up"
            >
              Get started
            </button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-6">
            <BarChart3 className="w-3.5 h-3.5" />
            A four-unit course in constructive critical reasoning
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight mb-5">
            Don't just doubt. Commit to the strongest conclusion.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A self-paced course that teaches, tutors, drills, and grades you on
            reasoning that builds — drawing the boldest, most-testable conclusion
            the evidence supports, instead of the safe "you can't really know" dodge.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link href="/sign-up">
              <button
                className="px-6 py-3 rounded-md text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                data-testid="button-cta-start"
              >
                Sign in with Google to start
              </button>
            </Link>
            <Link href="/sign-in">
              <button
                className="px-6 py-3 rounded-md text-base font-medium border border-border hover:bg-secondary transition-colors"
                data-testid="button-cta-signin"
              >
                I already have an account
              </button>
            </Link>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-lg border border-border bg-card p-6 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center text-primary">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-semibold text-lg">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 pb-24">
          <h2 className="text-center font-serif font-semibold text-xl mb-6">
            The Curriculum
          </h2>
          <div className="flex flex-col gap-10">
            {units.map((u) => (
              <div key={u.n}>
                <div className="mb-4 flex items-baseline gap-3">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    Unit {u.n}
                  </span>
                  <h3 className="font-serif font-semibold text-lg">{u.title}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {u.topics.map((t) => (
                    <div
                      key={t.n}
                      className="flex items-center gap-4 rounded-lg border border-border bg-card p-5"
                    >
                      <div className="w-10 h-10 shrink-0 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-sm">
                        {t.n}
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-muted-foreground">
                          Section {t.n}
                        </div>
                        <div className="font-medium">{t.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-6 text-center text-sm text-muted-foreground">
        Constructive Critical Reasoning — where reasoning that commits hardest
        and tests cleanest earns the most credit.
      </footer>
    </div>
  );
}
