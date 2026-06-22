import type {
  SectionContent,
  HomeworkItem,
  McOption,
  WrittenRubric,
} from "./types";

const mcq: HomeworkItem[] = [
  {
    itemType: "mc",
    prompt:
      "A diet coach says her plan 'always works for the committed' and points out that everyone who lost weight had stuck to it, while everyone who failed 'wasn't truly committed.' A client asks whether the plan is actually effective. Which reasoning is strongest?",
    mcOptions: [
      {
        text: "The success stories prove the plan works, since every committed person lost weight.",
        credit: 0,
      },
      {
        text: "The 'committed' label is assigned after the result, so the claim can't fail and that evidence is worthless; run a severe test by defining commitment in advance (logged meals, attendance) and checking whether pre-labeled committed dieters on this plan outlose an equally committed group on a different plan, whether dropouts are reclassified only after gaining, and whether the plan beats a simple calorie target.",
        credit: 1.0,
      },
      {
        text: "Since failures get redefined as 'not committed,' the win rate is suspect; we should compare this plan against another plan in committed dieters.",
        credit: 0.6,
      },
      {
        text: "There seems to be something circular about how she counts successes.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The 'committed' label is assigned after the result, so the claim can't fail and that evidence is worthless; run a severe test by defining commitment in advance (logged meals, attendance) and checking whether pre-labeled committed dieters on this plan outlose an equally committed group on a different plan, whether dropouts are reclassified only after gaining, and whether the plan beats a simple calorie target.",
    explanation:
      "Top credit spots that the after-the-fact 'committed' relabeling makes the claim unfalsifiable, then designs a test that could actually fail; treating the rigged success rate as proof is the fallacy the setup defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A fund manager's newsletter brags that it 'predicted the downturn' by warning, every quarter for years, that 'a correction could come at any time.' A subscriber wonders if the calls show real skill. Which conclusion best follows?",
    mcOptions: [
      {
        text: "A standing 'a correction could come anytime' warning is true in every market, so its eventual match refutes nothing; test skill severely by logging dated, specific calls (direction and a window) and scoring whether they beat a coin flip, whether the manager ever issued an all-clear that markets then defied, and whether timed entries from the calls outperform buy-and-hold.",
        credit: 1.0,
      },
      {
        text: "Calling the downturn shows the manager clearly has forecasting skill.",
        credit: 0,
      },
      {
        text: "The vague warnings make the hit unimpressive; we should grade only specific dated calls going forward.",
        credit: 0.6,
      },
      {
        text: "The prediction feels a little too safe to count for much.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "A standing 'a correction could come anytime' warning is true in every market, so its eventual match refutes nothing; test skill severely by logging dated, specific calls (direction and a window) and scoring whether they beat a coin flip, whether the manager ever issued an all-clear that markets then defied, and whether timed entries from the calls outperform buy-and-hold.",
    explanation:
      "The winning answer sees that a perpetual warning could never have been wrong and builds a test that risks failure; crediting the 'prediction' as skill swallows evidence that could not have refuted the claim.",
  },
  {
    itemType: "mc",
    prompt:
      "A car owner installs a 'fuel-saver' chip and reports better mileage. He measured by topping off and watching the gauge on his usual commute, on a stretch he now drives more gently to 'give it a fair chance.' Which lead is strongest?",
    mcOptions: [
      {
        text: "Driving more gently during the test guarantees better mileage chip or not, so this measurement could not have refuted the chip; run a severe test by alternating chip-on and chip-off tanks with identical routes and cruise-control speeds, blinding the driver to which state is active, and checking whether the gap survives when driving style is held fixed.",
        credit: 1.0,
      },
      {
        text: "His careful before-and-after shows the chip is saving fuel.",
        credit: 0,
      },
      {
        text: "The gentler driving muddies it; we should retest holding speed steadier.",
        credit: 0.6,
      },
      {
        text: "The result seems a bit unreliable somehow.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Driving more gently during the test guarantees better mileage chip or not, so this measurement could not have refuted the chip; run a severe test by alternating chip-on and chip-off tanks with identical routes and cruise-control speeds, blinding the driver to which state is active, and checking whether the gap survives when driving style is held fixed.",
    explanation:
      "Full credit isolates that the changed driving made improvement inevitable and designs a blinded, style-controlled comparison that could fail; accepting the rigged measurement as proof is the defeated move.",
  },
  {
    itemType: "mc",
    prompt:
      "A startup claims its hiring quiz 'identifies top performers.' Reviewers see the quiz scores only after they already know who got promoted, and they rate the quiz 'accurate' because high scorers were promoted. Which reasoning is strongest?",
    mcOptions: [
      {
        text: "Reviewers seeing outcomes first means the quiz couldn't look inaccurate, so this validation is empty; test it severely by scoring new hires' quizzes before any promotions, sealing the scores, and checking whether high scorers are later promoted more, whether the quiz beats a coin flip, and whether blinded managers can't guess scores from performance.",
        credit: 1.0,
      },
      {
        text: "The reviewers confirmed it, so the quiz predicts top performers.",
        credit: 0,
      },
      {
        text: "Knowing outcomes first taints the rating; we should score quizzes before promotions are decided.",
        credit: 0.6,
      },
      {
        text: "There's a whiff of bias in how they judged the quiz.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Reviewers seeing outcomes first means the quiz couldn't look inaccurate, so this validation is empty; test it severely by scoring new hires' quizzes before any promotions, sealing the scores, and checking whether high scorers are later promoted more, whether the quiz beats a coin flip, and whether blinded managers can't guess scores from performance.",
    explanation:
      "Top credit recognizes the hindsight rating could never have disconfirmed the quiz and proposes a sealed prospective test that risks failure; trusting the contaminated review is the fallacy the setup defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A water dowser finds underground water 'every time' in a valley where well-drillers say almost any spot hits water within thirty feet. Locals cite his record as proof of his gift. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Dowsing seems to have a real track record worth respecting.",
        credit: 0.3,
      },
      {
        text: "His perfect record is meaningless where nearly any spot finds water, so the test couldn't fail; test him severely by marking spots where water is genuinely patchy, blinding him to known well data, and checking whether his picks beat random spots and whether he can flag the rare dry zones.",
        credit: 1.0,
      },
      {
        text: "His flawless success rate proves dowsing works.",
        credit: 0,
      },
      {
        text: "His record is unimpressive given easy water; we should try him on harder ground.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "His perfect record is meaningless where nearly any spot finds water, so the test couldn't fail; test him severely by marking spots where water is genuinely patchy, blinding him to known well data, and checking whether his picks beat random spots and whether he can flag the rare dry zones.",
    explanation:
      "The strongest lead sees that success was guaranteed by the easy terrain and moves the test to ground where dowsing could be refuted; citing the inevitable record as proof is the defeated reasoning.",
  },
  {
    itemType: "mc",
    prompt:
      "A teacher says her new method 'raises every student.' Her evidence: she taught it only to her honors section, who all scored above the school average, as honors students usually do. Which lead is strongest?",
    mcOptions: [
      {
        text: "An honors class beating the average was a near-certainty regardless of method, so this result couldn't have failed; test it severely by randomly assigning the method across mixed-ability classes, comparing matched students who did and didn't get it, and checking whether gains exceed those classes' own past trajectories.",
        credit: 1.0,
      },
      {
        text: "Her honors students' high scores show the method lifts everyone.",
        credit: 0,
      },
      {
        text: "Honors kids would score high anyway; we should try the method in regular classes too.",
        credit: 0.6,
      },
      {
        text: "The evidence looks a little stacked in her favor.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "An honors class beating the average was a near-certainty regardless of method, so this result couldn't have failed; test it severely by randomly assigning the method across mixed-ability classes, comparing matched students who did and didn't get it, and checking whether gains exceed those classes' own past trajectories.",
    explanation:
      "Full credit notes that high honors scores were guaranteed and designs a randomized comparison that could refute the method; treating the foregone result as evidence is the fallacy the data defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A psychic emails a thousand subscribers, telling half a stock will rise and half that it will fall, then next week mails only the group she 'got right' a new split call. After five rounds, a survivor marvels that she nailed five predictions in a row. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Five correct calls in a row is strong proof of her ability.",
        credit: 0,
      },
      {
        text: "Because some recipient was guaranteed to receive five straight hits by chance, that streak couldn't have failed to appear for someone; test her severely by having her commit one public dated call to all subscribers at once and checking whether her hit rate across everyone beats chance.",
        credit: 1.0,
      },
      {
        text: "Mailing different calls to different people inflates the streak; we should make her predict publicly to all at once.",
        credit: 0.6,
      },
      {
        text: "Something about the five-in-a-row feels engineered.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Because some recipient was guaranteed to receive five straight hits by chance, that streak couldn't have failed to appear for someone; test her severely by having her commit one public dated call to all subscribers at once and checking whether her hit rate across everyone beats chance.",
    explanation:
      "Top credit sees the split-mailing makes a five-hit survivor inevitable, so the streak is no test, and proposes a single public call that could fail; awe at the streak is the defeated reasoning.",
  },
  {
    itemType: "mc",
    prompt:
      "A supplement maker's label promises 'supports a healthy immune system.' In a year of sales, most customers reported they 'felt supported' and didn't get seriously ill, which the company calls confirmation. Which lead is strongest?",
    mcOptions: [
      {
        text: "Most people stay healthy in a given year anyway, and 'feeling supported' can't be wrong, so this confirms nothing; test it severely with a randomized placebo trial tracking objective outcomes (infection rate, sick days, antibody markers) and checking whether the supplement group beats placebo.",
        credit: 1.0,
      },
      {
        text: "Customers felt supported and stayed well, so the supplement works.",
        credit: 0,
      },
      {
        text: "Self-reports are weak; we should run a controlled trial with real outcomes.",
        credit: 0.6,
      },
      {
        text: "The claim seems too soft to really verify.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Most people stay healthy in a given year anyway, and 'feeling supported' can't be wrong, so this confirms nothing; test it severely with a randomized placebo trial tracking objective outcomes (infection rate, sick days, antibody markers) and checking whether the supplement group beats placebo.",
    explanation:
      "Full credit flags both the vague unfalsifiable claim and the high base rate of staying well, then builds a placebo-controlled test that could fail; counting the foregone outcome as proof is the defeated move.",
  },
  {
    itemType: "mc",
    prompt:
      "A coach insists his pre-game ritual 'guarantees the team plays its best.' Asked how he'd know a bad game, he says any loss means the players 'didn't believe in the ritual.' A skeptic asks whether the ritual does anything. Which reasoning is strongest?",
    mcOptions: [
      {
        text: "There seems to be no way the ritual could ever look bad.",
        credit: 0.3,
      },
      {
        text: "Wins confirm the ritual works as he claims.",
        credit: 0,
      },
      {
        text: "Because losses are explained away as disbelief, the claim can't be refuted and proves nothing; test it severely by running the ritual before a random half of games without telling players which, and checking whether performance metrics differ between ritual and no-ritual games.",
        credit: 1.0,
      },
      {
        text: "The disbelief excuse is a problem; we should compare games with and without the ritual.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Because losses are explained away as disbelief, the claim can't be refuted and proves nothing; test it severely by running the ritual before a random half of games without telling players which, and checking whether performance metrics differ between ritual and no-ritual games.",
    explanation:
      "Top credit identifies the unfalsifiable escape hatch and designs a blinded on/off comparison that could fail; accepting wins as confirmation ignores that the claim was rigged to never lose.",
  },
  {
    itemType: "mc",
    prompt:
      "A landlord claims his tenant screening 'never lets in a bad tenant.' He only ever rents to applicants the screening approves, so by definition no rejected applicant ever becomes a tenant to go bad. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Since approved tenants rarely cause trouble, the screening clearly works.",
        credit: 0,
      },
      {
        text: "Never renting to rejects means the screen can't be caught wrong about them, so 'no bad tenants' is hollow; test it severely by tracking outcomes for a sample of borderline applicants admitted anyway and checking whether the screen's rejects truly default more than its approvals.",
        credit: 1.0,
      },
      {
        text: "We can't see the rejects' outcomes, so we should admit some borderline cases and follow them.",
        credit: 0.6,
      },
      {
        text: "The claim seems to dodge any real check.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Never renting to rejects means the screen can't be caught wrong about them, so 'no bad tenants' is hollow; test it severely by tracking outcomes for a sample of borderline applicants admitted anyway and checking whether the screen's rejects truly default more than its approvals.",
    explanation:
      "Full credit sees that excluding the rejected cases makes the screen unfalsifiable and proposes admitting borderline cases to expose it to failure; the approval-rate boast is the defeated reasoning.",
  },
  {
    itemType: "mc",
    prompt:
      "A weather app advertises '95% accuracy.' Its forecasts in a desert town nearly always say 'no rain,' which is right almost every day because it rarely rains there. A resident wonders if the app is genuinely good. Which lead is strongest?",
    mcOptions: [
      {
        text: "Predicting 'no rain' where it almost never rains can't fail, so 95% accuracy is meaningless; test it severely by scoring only the rare rainy days and stretches when rain was plausible, and checking whether the app beats simply always guessing the climatological default.",
        credit: 1.0,
      },
      {
        text: "A 95% accuracy rate shows the app forecasts well.",
        credit: 0,
      },
      {
        text: "The dry climate inflates accuracy; we should grade it on the days rain was possible.",
        credit: 0.6,
      },
      {
        text: "The accuracy figure seems a little too flattering.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Predicting 'no rain' where it almost never rains can't fail, so 95% accuracy is meaningless; test it severely by scoring only the rare rainy days and stretches when rain was plausible, and checking whether the app beats simply always guessing the climatological default.",
    explanation:
      "Top credit sees that the default 'no rain' guess was almost guaranteed correct and re-scores the app on cases that could refute it; quoting the inflated accuracy is the fallacy the base rate defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A safety officer says a new helmet 'prevents concussions,' citing that no rider wearing it reported a concussion last season. But concussions are self-reported and often go unrecognized, and ridership fell sharply that year. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Zero reported concussions could happen from underreporting and fewer riders alone, so the helmet wasn't really tested; test it severely with impact-sensor data on matched falls, clinician-confirmed diagnoses, and a head-to-head comparison against the old helmet at equal ridership.",
        credit: 1.0,
      },
      {
        text: "No concussions were reported, so the helmet prevents them.",
        credit: 0,
      },
      {
        text: "The numbers are shaky; we should compare it directly to the old helmet.",
        credit: 0.6,
      },
      {
        text: "The zero-concussion claim looks a bit too convenient.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Zero reported concussions could happen from underreporting and fewer riders alone, so the helmet wasn't really tested; test it severely with impact-sensor data on matched falls, clinician-confirmed diagnoses, and a head-to-head comparison against the old helmet at equal ridership.",
    explanation:
      "Full credit recognizes that underreporting and falling ridership could produce zero reports with no real protection, then builds measurements that could refute the helmet; the zero count as proof is the defeated move.",
  },
  {
    itemType: "mc",
    prompt:
      "A guru claims his meditation 'brings whatever you most need.' A follower who wanted calm got calm; another who wanted energy got energy; one who got nothing was told he 'wasn't ready.' Which reasoning is strongest?",
    mcOptions: [
      {
        text: "The varied successes show the meditation truly delivers what people need.",
        credit: 0,
      },
      {
        text: "Because any outcome — including 'not ready' — counts as consistent, the claim can't fail and explains nothing; test it severely by pre-registering specific measurable goals per person and checking whether meditators hit them more than a matched relaxation control.",
        credit: 1.0,
      },
      {
        text: "The 'not ready' excuse is suspicious; we should set measurable goals and compare to a control.",
        credit: 0.6,
      },
      {
        text: "The claim seems to bend to fit every case.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Because any outcome — including 'not ready' — counts as consistent, the claim can't fail and explains nothing; test it severely by pre-registering specific measurable goals per person and checking whether meditators hit them more than a matched relaxation control.",
    explanation:
      "Top credit sees that every possible result was pre-counted as success, making the claim unfalsifiable, and proposes pre-registered goals against a control that could fail; the varied 'wins' are no evidence.",
  },
  {
    itemType: "mc",
    prompt:
      "A vitamin-water brand runs a taste test where tasters are told which cup is the 'premium' vitamin water before sipping, and most rate it tastier. Marketing calls this proof of superior taste. Which lead is strongest?",
    mcOptions: [
      {
        text: "Tasters told which cup is premium will tend to favor it regardless of contents, so this test couldn't really fail; run it severely as a blind triangle test with unlabeled cups and check whether tasters pick the premium above chance.",
        credit: 1.0,
      },
      {
        text: "Most tasters preferred the premium, so it tastes better.",
        credit: 0,
      },
      {
        text: "Knowing the labels skews things; we should hide which cup is which.",
        credit: 0.6,
      },
      {
        text: "The taste test seems a little rigged.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Tasters told which cup is premium will tend to favor it regardless of contents, so this test couldn't really fail; run it severely as a blind triangle test with unlabeled cups and check whether tasters pick the premium above chance.",
    explanation:
      "Full credit sees that labeling guaranteed a premium preference and proposes a blind test that could refute the claim; the labeled result as proof is the defeated reasoning.",
  },
  {
    itemType: "mc",
    prompt:
      "A consultant says his strategy 'works whenever leadership fully commits.' Every client that thrived is cited as commitment; every client that struggled is dismissed as 'never truly committed.' A board member asks whether to hire him. Which conclusion best follows?",
    mcOptions: [
      {
        text: "His record of committed clients thriving shows the strategy works.",
        credit: 0,
      },
      {
        text: "Defining commitment by the outcome makes the claim unfalsifiable, so the record is no evidence; test it severely by rating each client's commitment in advance on observable actions and checking whether high-commitment clients on his strategy outperform equally committed clients using a different approach.",
        credit: 1.0,
      },
      {
        text: "He grades commitment after the fact; we should measure commitment up front and compare results.",
        credit: 0.6,
      },
      {
        text: "His success criterion looks circular.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Defining commitment by the outcome makes the claim unfalsifiable, so the record is no evidence; test it severely by rating each client's commitment in advance on observable actions and checking whether high-commitment clients on his strategy outperform equally committed clients using a different approach.",
    explanation:
      "Top credit identifies the outcome-defined 'commitment' as an unfalsifiable dodge and designs a prospective comparison that could fail; crediting the curated record is the defeated move.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A gym's personal trainer claims his program 'builds muscle for anyone who trains hard enough.' His proof: clients who gained muscle are praised as hard trainers, while those who didn't are said to have 'not trained hard enough.' A prospective client asks whether the program actually works. Which lead is strongest?",
    mcOptions: [
      {
        text: "Because effort is judged by the result, no client could ever disprove the program, so this evidence is empty; test it severely by tracking objective training load (logged sets, weights, attendance) set in advance and checking whether equally hard-training clients gain more on this program than on a standard one, and whether any hard trainer fails to gain.",
        credit: 1.0,
      },
      {
        text: "His muscle-gaining clients prove the program builds muscle.",
        credit: 0,
      },
      {
        text: "He defines effort after the fact; we should measure training load up front and compare programs.",
        credit: 0.6,
      },
      {
        text: "The way he counts successes seems circular.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the claim is unfalsifiable' lead from the rival 'the program really does build muscle in hard trainers,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: log each client's training load before results are known, then check whether clients who demonstrably trained hard still failed to gain on this program — if even hard-by-the-numbers trainers fail, the 'works for anyone hard enough' claim is exposed as protected by relabeling. My lead is refuted if every client whose logged effort is high gains muscle and high-effort clients gain more here than on a matched standard program, which would mean the program, not the relabeling, is doing the work.",
      yieldAnchors: [
        "Muscle-gainers are praised as hard trainers",
        "Non-gainers are dismissed as not training hard enough",
        "Effort is assessed only after the result is known",
      ],
      riskAnchors: [
        "Some clients with high logged training load still fail to gain",
        "Equally hard-training clients gain no more here than on a standard program",
        "Pre-measured effort, not the program, predicts gains",
      ],
      defeatedBy: [
        "Every client who gained proves the program works",
        "Effort can only be known from whether someone gained",
      ],
    },
    correctAnswer:
      "Because effort is judged by the result, no client could ever disprove the program, so this evidence is empty; test it severely by tracking objective training load (logged sets, weights, attendance) set in advance and checking whether equally hard-training clients gain more on this program than on a standard one, and whether any hard trainer fails to gain.",
    explanation:
      "Full credit goes to the lead that exposes the outcome-defined 'effort' as unfalsifiable and pairs it with a prospective, load-controlled test that could fail; the curated success stories prove nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A small airline boasts its on-time record 'proves' its scheduling software. But it pads every flight's scheduled time by 40 minutes, so flights are marked 'on time' even when they leave and arrive later than the old schedule promised. An analyst is asked if the software improved punctuality. Which lead is strongest?",
    mcOptions: [
      {
        text: "The on-time record clearly shows the software made flights more punctual.",
        credit: 0,
      },
      {
        text: "Padding the schedule guarantees 'on time' regardless of real performance, so the record couldn't have failed; test it severely against fixed reference times by comparing actual gate-to-gate and arrival times before and after the software at unchanged padding, and checking whether real delays shrank.",
        credit: 1.0,
      },
      {
        text: "The padding inflates the record; we should compare real arrival times before and after.",
        credit: 0.6,
      },
      {
        text: "The on-time number seems gamed.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'padding rigged the metric' lead from the rival 'the software genuinely improved punctuality,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: ignore the padded labels and compare raw actual departure-to-arrival clock times for the same routes before and after the software at constant padding — if real times didn't shrink, the improved 'on-time' record is an artifact of padding. My lead is refuted if actual clock times genuinely dropped after the software with padding held fixed, which would show real punctuality gains rather than a relabeled metric.",
      yieldAnchors: [
        "Flights are marked on time despite leaving later than the old schedule",
        "Every flight's scheduled time was padded by 40 minutes",
        "The on-time record is cited as proof of the software",
      ],
      riskAnchors: [
        "Actual clock times did not shrink after the software at fixed padding",
        "The same routes run no faster than before",
        "Removing the padding collapses the on-time rate",
      ],
      defeatedBy: [
        "The high on-time rate proves the software worked",
        "Padded schedules are a fair measure of punctuality",
      ],
    },
    correctAnswer:
      "Padding the schedule guarantees 'on time' regardless of real performance, so the record couldn't have failed; test it severely against fixed reference times by comparing actual gate-to-gate and arrival times before and after the software at unchanged padding, and checking whether real delays shrank.",
    explanation:
      "Top credit sees the padded schedule made 'on time' near-automatic and re-tests against fixed clock times that could refute the claim; the inflated record is the defeated reasoning.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A 'memory expert' is shown a long list of items and later recites them perfectly. The catch: he wrote the list himself moments before, choosing items he already had mnemonics for, and was allowed to glance at it during recall. The audience is dazzled. Which conclusion best follows?",
    mcOptions: [
      {
        text: "His flawless recall proves an extraordinary memory.",
        credit: 0,
      },
      {
        text: "Writing his own list and glancing at it made success unavoidable, so nothing was tested; run a severe test with a list chosen by others, no peeking, and a recall delay, checking whether he still beats an ordinary person.",
        credit: 1.0,
      },
      {
        text: "The self-made list and peeking spoil it; we should give him an unfamiliar list with no glancing.",
        credit: 0.6,
      },
      {
        text: "The demonstration seems too easy to be impressive.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the demonstration was rigged to succeed' lead from the rival 'he has a genuinely exceptional memory,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: hand him a list compiled by strangers, remove the chance to look during recall, and impose a short delay — if his accuracy collapses to ordinary levels, the original feat was an artifact of choosing and glancing. My lead is refuted if he still recalls a stranger's list near-perfectly with no peeking after a delay, which would demonstrate a real memory skill that the rigged version merely flattered.",
      yieldAnchors: [
        "He wrote the list himself moments before",
        "He chose items he already had mnemonics for",
        "He could glance at the list during recall",
      ],
      riskAnchors: [
        "Accuracy drops to ordinary levels on a stranger's list",
        "Removing the glance during recall sharply lowers his score",
        "A recall delay erases his advantage",
      ],
      defeatedBy: [
        "Perfect recall here proves an exceptional memory",
        "How the list was chosen doesn't matter to the result",
      ],
    },
    correctAnswer:
      "Writing his own list and glancing at it made success unavoidable, so nothing was tested; run a severe test with a list chosen by others, no peeking, and a recall delay, checking whether he still beats an ordinary person.",
    explanation:
      "Full credit recognizes the self-chosen, glance-able list made the feat guaranteed and designs an externally controlled test that could fail; the dazzling recall as proof is defeated.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A factory's quality team reports 'zero defects shipped' all quarter. Investigation shows their inspection only checks the one feature that is never out of spec and ignores the three features customers actually complain about. A manager asks whether quality is truly high. Which lead is strongest?",
    mcOptions: [
      {
        text: "The 'zero defects' record proves quality is excellent.",
        credit: 0,
      },
      {
        text: "Checking only a feature that never fails guarantees zero defects, so the record couldn't have caught a problem; test it severely by inspecting the three complaint-driving features, auditing returned units, and checking whether the defect rate on those matches customer complaints.",
        credit: 1.0,
      },
      {
        text: "The narrow inspection misses real issues; we should inspect the features customers complain about.",
        credit: 0.6,
      },
      {
        text: "The zero-defect figure looks misleading.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the inspection couldn't catch defects' lead from the rival 'quality genuinely is near-perfect,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: pull a sample of shipped units and inspect the three complaint-driving features the current process ignores — if those show real defects, the 'zero defects' record was an artifact of measuring only what never fails. My lead is refuted if a full inspection of the neglected features and a check of returns also find essentially no defects, which would mean quality really is high rather than the metric being rigged.",
      yieldAnchors: [
        "Inspection checks only the one feature never out of spec",
        "Three complaint-driving features are not inspected",
        "Customers complain about features the process ignores",
      ],
      riskAnchors: [
        "The neglected features show real defects on inspection",
        "Returned units reveal failures the process never checked",
        "Complaint rates match defects on the unmeasured features",
      ],
      defeatedBy: [
        "Zero defects shipped proves quality is excellent",
        "Inspecting one stable feature is enough to certify quality",
      ],
    },
    correctAnswer:
      "Checking only a feature that never fails guarantees zero defects, so the record couldn't have caught a problem; test it severely by inspecting the three complaint-driving features, auditing returned units, and checking whether the defect rate on those matches customer complaints.",
    explanation:
      "Top credit sees the inspection was scoped to never find a defect and re-tests the features that could refute the claim; the empty zero-defect record is the defeated move.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A 'lie detector' app claims high accuracy because in trials it labeled almost everyone 'truthful,' and almost everyone in the trial was in fact telling the truth. A court is asked whether to trust it on actual suspects. Which conclusion best follows?",
    mcOptions: [
      {
        text: "An app that says 'truthful' when most people are truthful can score high without detecting lies at all, so the trial couldn't reveal failure; test it severely on a balanced set with known liars and truth-tellers and check whether it catches lies above chance and how often it falsely flags the honest.",
        credit: 1.0,
      },
      {
        text: "Its high trial accuracy shows it reliably detects lies.",
        credit: 0,
      },
      {
        text: "The trial had too few liars; we should test it where lies and truths are balanced.",
        credit: 0.6,
      },
      {
        text: "The accuracy claim feels overstated.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the trial couldn't reveal failure' lead from the rival 'the app genuinely detects lies,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: run the app on a balanced set with a known 50/50 mix of liars and truth-tellers and look specifically at its hit rate on the liars — if it misses most lies while still scoring 'accurate' overall, its accuracy was an artifact of a mostly-truthful sample. My lead is refuted if it catches a high fraction of the known liars while rarely flagging the honest, which would show real detection rather than a base-rate illusion.",
      yieldAnchors: [
        "The app labeled almost everyone 'truthful'",
        "Almost everyone in the trial was truthful",
        "Its accuracy is cited as proof it detects lies",
      ],
      riskAnchors: [
        "On a balanced set it misses most known liars",
        "It flags many honest people as lying",
        "Its lie-catch rate is no better than chance",
      ],
      defeatedBy: [
        "High overall accuracy proves it detects lies",
        "A mostly-truthful trial is a fair test of lie detection",
      ],
    },
    correctAnswer:
      "An app that says 'truthful' when most people are truthful can score high without detecting lies at all, so the trial couldn't reveal failure; test it severely on a balanced set with known liars and truth-tellers and check whether it catches lies above chance and how often it falsely flags the honest.",
    explanation:
      "Full credit sees that a mostly-truthful trial made high accuracy automatic and re-tests on cases that could refute the app; the inflated accuracy as proof is defeated.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A street performer guesses strangers' birth months and 'gets it right' often, but watchers notice he keeps guessing until he hits, counts near-misses as hits, and quietly drops the people he gets wrong. A bystander says it's clearly a gift. Which lead is strongest?",
    mcOptions: [
      {
        text: "His many correct guesses show a real ability.",
        credit: 0,
      },
      {
        text: "Multiple tries, counting near-misses, and dropping failures make a 'hit' nearly unavoidable, so this isn't a test; run it severely with one locked guess per person, a strict right/wrong rule, and every result recorded, then check whether he beats one-in-twelve.",
        credit: 1.0,
      },
      {
        text: "He's gaming the scoring; we should allow one guess each and record every outcome.",
        credit: 0.6,
      },
      {
        text: "The act seems to inflate his hit rate.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the act is rigged to hit' lead from the rival 'he has a real talent,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: require exactly one locked guess per person, score it strictly right or wrong, and record everyone including the misses — if his hit rate falls toward one-in-twelve, the apparent gift was an artifact of retries and selective counting. My lead is refuted if, under one strict guess each with all results logged, he still names birth months far above chance, which would point to a genuine skill.",
      yieldAnchors: [
        "He keeps guessing until he hits",
        "He counts near-misses as hits",
        "He drops the people he gets wrong",
      ],
      riskAnchors: [
        "With one locked guess his hit rate falls toward one-in-twelve",
        "Recording every result erases his apparent edge",
        "A strict right/wrong rule sharply lowers his score",
      ],
      defeatedBy: [
        "His frequent correct guesses prove a real gift",
        "Retries and near-misses are fair ways to score the act",
      ],
    },
    correctAnswer:
      "Multiple tries, counting near-misses, and dropping failures make a 'hit' nearly unavoidable, so this isn't a test; run it severely with one locked guess per person, a strict right/wrong rule, and every result recorded, then check whether he beats one-in-twelve.",
    explanation:
      "Top credit sees retries and selective scoring made hits inevitable and imposes a single strict guess that could fail; the curated hit rate as proof is defeated.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A school markets that '100% of our graduates succeed.' It turns out the school quietly counts only students who complete all four years, and any student who would have failed is asked to leave before graduating. A parent asks if the school produces success. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Removing likely-failures before graduation guarantees a perfect graduate success rate, so the statistic couldn't have come out lower; test it severely by following every enrolled student from day one, including those who left, and comparing outcomes to similar students at schools that keep everyone.",
        credit: 1.0,
      },
      {
        text: "A 100% success rate proves the school produces successful graduates.",
        credit: 0,
      },
      {
        text: "Counting only completers inflates it; we should track all enrollees including dropouts.",
        credit: 0.6,
      },
      {
        text: "The 100% figure seems hand-picked.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the statistic was rigged by attrition' lead from the rival 'the school genuinely produces success,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compute the success rate over everyone who ever enrolled, including the students pushed out, and compare it to similar students at schools that keep all comers — if including the departed students collapses the rate, the 100% figure was an artifact of selective attrition. My lead is refuted if, counting all enrollees from day one, the school's success rate still clearly exceeds comparable schools, which would mean it really does produce success.",
      yieldAnchors: [
        "Only four-year completers are counted",
        "Students likely to fail are asked to leave before graduating",
        "The 100% rate excludes everyone who left",
      ],
      riskAnchors: [
        "Counting all enrollees collapses the success rate",
        "Departed students fare worse than peers elsewhere",
        "Schools that keep everyone post similar all-enrollee outcomes",
      ],
      defeatedBy: [
        "A 100% graduate success rate proves the school works",
        "Excluding students who left is a fair way to measure success",
      ],
    },
    correctAnswer:
      "Removing likely-failures before graduation guarantees a perfect graduate success rate, so the statistic couldn't have come out lower; test it severely by following every enrolled student from day one, including those who left, and comparing outcomes to similar students at schools that keep everyone.",
    explanation:
      "Full credit sees selective attrition made the perfect rate inevitable and re-tests on all enrollees, a measure that could fail; the curated statistic as proof is defeated.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A trader credits his 'gut' for a great year. Reviewing his log, you find he recorded only the trades that worked, deleting losers as 'mistakes that don't count.' He says the surviving record proves his instinct. Which lead is strongest?",
    mcOptions: [
      {
        text: "There seems to be a hole in how he keeps his record.",
        credit: 0.3,
      },
      {
        text: "His winning log proves his gut is reliable.",
        credit: 0,
      },
      {
        text: "Deleting the losers means the log could never look bad, so it's no test of his gut; reconstruct every trade he actually made from account statements and check whether his full hit rate and net return beat a simple index.",
        credit: 1.0,
      },
      {
        text: "The missing losers are a problem; we should rebuild the complete trade history.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the log was rigged by deletion' lead from the rival 'his gut really is reliable,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: pull his brokerage statements to reconstruct every trade he actually placed, winners and deleted losers alike, and compute his true hit rate and net return — if including the losers drags him to chance or below an index, the surviving log was an artifact of deletion. My lead is refuted if the complete account-based record still shows a hit rate and net return clearly above a passive index, which would support a real edge.",
      yieldAnchors: [
        "He recorded only the trades that worked",
        "Losing trades were deleted as 'mistakes that don't count'",
        "He cites the surviving log as proof of his instinct",
      ],
      riskAnchors: [
        "The full account-based record shows a chance-level hit rate",
        "Net return after including losers trails a simple index",
        "Reconstructed history erases the apparent edge",
      ],
      defeatedBy: [
        "The winning log proves his gut is reliable",
        "Deleted losing trades are fair to exclude from the record",
      ],
    },
    correctAnswer:
      "Deleting the losers means the log could never look bad, so it's no test of his gut; reconstruct every trade he actually made from account statements and check whether his full hit rate and net return beat a simple index.",
    explanation:
      "Top credit sees that deleting losers made the log unfalsifiable and rebuilds the complete record, a test that could fail; the surviving log as proof is defeated.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A pest-control firm guarantees 'no termites after treatment' but defines a 'sighting' so narrowly — live winged termites caught indoors during daylight and photographed — that almost no real infestation would ever qualify. A homeowner asks if the treatment works. Which conclusion best follows?",
    mcOptions: [
      {
        text: "No qualifying sightings were reported, so the treatment clearly works.",
        credit: 0,
      },
      {
        text: "A definition that almost no real infestation can meet guarantees 'no sightings' regardless of treatment, so the guarantee couldn't have failed; test it severely by inspecting for mud tubes, hollow wood, and frass on a schedule, and comparing infestation found by a neutral inspector in treated versus untreated homes.",
        credit: 1.0,
      },
      {
        text: "The narrow definition hides infestations; we should have a neutral inspector check treated and untreated homes.",
        credit: 0.6,
      },
      {
        text: "The guarantee seems defined to never trigger.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the guarantee can't fail' lead from the rival 'the treatment genuinely stops termites,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have a neutral inspector check treated and untreated homes for ordinary infestation signs — mud tubes, hollow-sounding wood, frass — rather than the firm's narrow 'sighting,' and compare rates; if treated homes show as much hidden infestation, the clean guarantee was an artifact of its definition. My lead is refuted if treated homes show clearly less real infestation than untreated ones under a normal inspection, which would mean the treatment works rather than the metric being rigged.",
      yieldAnchors: [
        "A 'sighting' requires live winged termites caught indoors in daylight and photographed",
        "Almost no real infestation would meet that definition",
        "The guarantee rests on having no qualifying sightings",
      ],
      riskAnchors: [
        "A neutral inspection finds infestation signs in treated homes",
        "Treated and untreated homes show similar hidden infestation",
        "Mud tubes and frass appear despite 'no sightings'",
      ],
      defeatedBy: [
        "No qualifying sightings proves the treatment works",
        "The narrow sighting definition fairly measures infestation",
      ],
    },
    correctAnswer:
      "A definition that almost no real infestation can meet guarantees 'no sightings' regardless of treatment, so the guarantee couldn't have failed; test it severely by inspecting for mud tubes, hollow wood, and frass on a schedule, and comparing infestation found by a neutral inspector in treated versus untreated homes.",
    explanation:
      "Full credit sees the unmeetable definition made the guarantee automatic and re-tests with ordinary inspection that could refute it; the empty 'no sightings' record is defeated.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A homeopathy clinic advertises that '90% of patients improve after treatment.' Most patients arrive with self-limiting colds and minor aches that fade on their own within a week, and the clinic counts any patient who feels better at the follow-up as 'improved,' including those who also took ordinary medicine. In one paragraph, propose the strongest lead for whether the treatment itself does anything, and describe how you would test it severely.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the 90% improvement figure is a non-test: self-limiting conditions were going to resolve anyway, and counting anyone who feels better — including those on real medicine — means the result could not have come out poorly whether or not the remedy does anything. To put it to a severe test that could actually fail, I would run a randomized, placebo-controlled trial in which patients with a defined condition get either the remedy or an identical placebo, with no other treatment and outcomes scored against a fixed objective measure; I would compare recovery against the known natural time-course of the illness rather than against arrival, and check whether the remedy group beats placebo at all. The remedy earns belief only if it outperforms placebo on conditions that don't simply self-resolve.",
      yieldAnchors: [
        "Most patients have self-limiting conditions that fade on their own",
        "Anyone feeling better at follow-up is counted as 'improved'",
        "Improved patients include those who also took ordinary medicine",
      ],
      riskAnchors: [
        "The remedy group beats an identical placebo on a fixed objective measure",
        "Improvement exceeds the illness's known natural time-course",
        "Patients on the remedy alone, with no other medicine, still improve",
      ],
      defeatedBy: [
        "The 90% improvement rate proves the remedy works",
        "Counting any patient who feels better is a fair measure",
        "Nothing can ever be known about such treatments",
      ],
    },
    correctAnswer:
      "The strongest lead is that the 90% improvement figure is a non-test: self-limiting conditions were going to resolve anyway, and counting anyone who feels better — including those on real medicine — means the result could not have come out poorly whether or not the remedy does anything. To put it to a severe test that could actually fail, I would run a randomized, placebo-controlled trial in which patients with a defined condition get either the remedy or an identical placebo, with no other treatment and outcomes scored against a fixed objective measure; I would compare recovery against the known natural time-course of the illness rather than against arrival, and check whether the remedy group beats placebo at all. The remedy earns belief only if it outperforms placebo on conditions that don't simply self-resolve.",
    explanation:
      "Under CCR's inverted standard, both the credulous 'the 90% proves it works' and the 'nothing can ever be known' refusal earn near-zero; top credit goes to seeing the figure couldn't have failed and designing a placebo-controlled test that could.",
  },
  {
    itemType: "written",
    prompt:
      "A manager rolls out a 'productivity dashboard' and declares it a success because output rose the next quarter. But that quarter the team also hired two people, a major client ramped up orders, and the slow holiday period ended. The only evidence offered is 'output went up after we launched it.' In one paragraph, propose the strongest lead for whether the dashboard helped, and describe how you would test it severely.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that 'output rose after launch' was almost guaranteed by the other changes — new hires, a ramping client, and the end of the holiday lull — so this evidence could not have come out against the dashboard and tests it not at all. To test severely, I would stagger the dashboard's rollout across comparable teams, giving it to some and withholding it from others during the same period, so any common seasonal or client effect hits both groups equally; I would track output per worker rather than raw output to net out headcount, and check whether the dashboard teams pull ahead of the controls. I would also look for a within-team dose-response, asking whether individuals who actually used the dashboard improved more than colleagues who ignored it. The dashboard earns credit only if it beats controls once the confounds are held fixed.",
      yieldAnchors: [
        "Two new people were hired the same quarter",
        "A major client ramped up orders",
        "The slow holiday period ended",
      ],
      riskAnchors: [
        "Staggered-rollout teams with the dashboard beat withheld controls",
        "Output per worker, not just raw output, rises with the dashboard",
        "Heavy dashboard users improve more than colleagues who ignore it",
      ],
      defeatedBy: [
        "Output rose after launch, so the dashboard worked",
        "Raw output is a fair measure despite the new hires",
        "Too many factors changed to learn anything at all",
      ],
    },
    correctAnswer:
      "The strongest lead is that 'output rose after launch' was almost guaranteed by the other changes — new hires, a ramping client, and the end of the holiday lull — so this evidence could not have come out against the dashboard and tests it not at all. To test severely, I would stagger the dashboard's rollout across comparable teams, giving it to some and withholding it from others during the same period, so any common seasonal or client effect hits both groups equally; I would track output per worker rather than raw output to net out headcount, and check whether the dashboard teams pull ahead of the controls. I would also look for a within-team dose-response, asking whether individuals who actually used the dashboard improved more than colleagues who ignored it. The dashboard earns credit only if it beats controls once the confounds are held fixed.",
    explanation:
      "The credulous 'output rose, so it worked' and the 'too many factors to learn anything' dodge both score near-zero; credit goes to spotting that the rise was foregone and building a staggered, per-worker comparison that could refute the dashboard.",
  },
  {
    itemType: "written",
    prompt:
      "A self-help author claims his '30-day mindset method' transforms lives, citing testimonials from buyers who report feeling more positive. He notes that the only people who write in are graduates who finished all 30 days and chose to send feedback, and that the program tells participants 'real change is felt, not measured.' In one paragraph, propose the strongest lead for whether the method works, and describe how you would test it severely.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the testimonials are a non-test on two counts: only satisfied finishers self-select into writing in, and a claim defined as 'felt, not measured' can never be shown false. Because the method is built so no result could refute it, the glowing feedback is worthless as evidence. To test severely, I would recruit all buyers up front, randomize half to the method and half to a credible control activity of equal time and attention, and score everyone — including dropouts — on pre-registered measurable outcomes such as validated mood scales, sleep, or work attendance assessed by someone blind to their group. I would compare the method group to the control on those fixed measures, not on volunteered praise, so the program faces a result that could actually come out against it. It earns belief only if it beats the control on outcomes set in advance.",
      yieldAnchors: [
        "Only graduates who finished all 30 days write in",
        "Feedback comes only from those who chose to send it",
        "The program says real change is 'felt, not measured'",
      ],
      riskAnchors: [
        "The method group beats a matched control on pre-registered measures",
        "Including dropouts, outcomes still favor the method",
        "Blinded assessors find objective gains, not just volunteered praise",
      ],
      defeatedBy: [
        "The positive testimonials prove the method transforms lives",
        "Change that is 'felt, not measured' is fair evidence",
        "Inner change can never be tested, so we can't say anything",
      ],
    },
    correctAnswer:
      "The strongest lead is that the testimonials are a non-test on two counts: only satisfied finishers self-select into writing in, and a claim defined as 'felt, not measured' can never be shown false. Because the method is built so no result could refute it, the glowing feedback is worthless as evidence. To test severely, I would recruit all buyers up front, randomize half to the method and half to a credible control activity of equal time and attention, and score everyone — including dropouts — on pre-registered measurable outcomes such as validated mood scales, sleep, or work attendance assessed by someone blind to their group. I would compare the method group to the control on those fixed measures, not on volunteered praise, so the program faces a result that could actually come out against it. It earns belief only if it beats the control on outcomes set in advance.",
    explanation:
      "Both the credulous 'the testimonials prove it' and the 'inner change can never be tested, so we can't say anything' refusal earn near-zero; top credit exposes the self-selected, unfalsifiable feedback and designs a randomized, pre-registered test that could fail.",
  },
  {
    itemType: "written",
    prompt:
      "A city installs a new traffic-light timing system and announces that accidents at the upgraded intersections dropped 25% the following year. It chose to upgrade the twelve intersections that had freak accident spikes the prior year — the worst in a decade. The only evidence is the year-over-year drop at those intersections. In one paragraph, propose the strongest lead for whether the system reduced accidents, and describe how you would test it severely.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the drop was largely guaranteed by regression to the mean: intersections picked precisely because they had freak record-high spikes would tend to fall back toward normal the next year even if nothing were done, so a 25% decline could not have failed to appear and tests the system weakly. To test severely, I would compare the upgraded intersections against a matched control group of similar intersections that also had high accident counts but were left unchanged, so any regression-to-the-mean effect shows up in both; I would use several years of baseline data rather than the single peak year, and check whether the upgraded sites fall faster than the controls. I would also look for a mechanism-specific signature, such as a drop concentrated in the turn-phase crashes the new timing targets. The system earns credit only if its decline clearly exceeds the controls' natural fallback.",
      yieldAnchors: [
        "The chosen intersections had the worst accident spikes in a decade",
        "Sites were selected because of those record-high counts",
        "The only evidence is a year-over-year drop at those sites",
      ],
      riskAnchors: [
        "Upgraded sites fall faster than matched high-accident controls",
        "The decline exceeds a multi-year baseline, not just the peak year",
        "The drop concentrates in the turn-phase crashes the timing targets",
      ],
      defeatedBy: [
        "The 25% drop proves the timing system reduced accidents",
        "Comparing to the single peak year is a fair baseline",
        "Traffic is too chaotic to ever evaluate the system",
      ],
    },
    correctAnswer:
      "The strongest lead is that the drop was largely guaranteed by regression to the mean: intersections picked precisely because they had freak record-high spikes would tend to fall back toward normal the next year even if nothing were done, so a 25% decline could not have failed to appear and tests the system weakly. To test severely, I would compare the upgraded intersections against a matched control group of similar intersections that also had high accident counts but were left unchanged, so any regression-to-the-mean effect shows up in both; I would use several years of baseline data rather than the single peak year, and check whether the upgraded sites fall faster than the controls. I would also look for a mechanism-specific signature, such as a drop concentrated in the turn-phase crashes the new timing targets. The system earns credit only if its decline clearly exceeds the controls' natural fallback.",
    explanation:
      "The credulous 'the 25% drop proves it' and the 'traffic is too chaotic to evaluate' dodge both earn near-zero; credit goes to spotting that the decline was a near-certain regression effect and building a matched-control test that could refute the system.",
  },
  {
    itemType: "written",
    prompt:
      "A software vendor boasts its security tool 'blocks 99.99% of attacks.' Its test fed the tool a stream of well-known, years-old malware samples it was explicitly trained to recognize, and counted every block — with no novel or disguised threats and no measure of how many legitimate files it wrongly blocked. A buyer asks whether the tool offers real protection. In one paragraph, propose the strongest lead, and describe how you would test it severely.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the 99.99% figure is a non-test: feeding a tool only the old threats it was trained to catch, with no novel or disguised attacks and no false-positive count, all but guarantees a near-perfect block rate whether or not the tool generalizes to real-world threats. To test severely, I would evaluate it against fresh, never-before-seen and deliberately obfuscated malware alongside a large set of benign files, so the tool faces threats it could genuinely miss and clean files it could wrongly block; I would report the catch rate on the novel threats and the false-positive rate on the benign files together, and benchmark both against a competing product on the identical set. I would also red-team it with simple evasions to see whether trivial repackaging slips past. The tool earns belief only if it catches unseen threats without choking on legitimate files.",
      yieldAnchors: [
        "The test used only years-old malware the tool was trained on",
        "No novel or disguised threats were included",
        "False positives on legitimate files were never measured",
      ],
      riskAnchors: [
        "The tool catches fresh, obfuscated malware it has never seen",
        "Its false-positive rate on benign files stays low",
        "It beats a competing product on an identical novel-threat set",
      ],
      defeatedBy: [
        "The 99.99% block rate proves the tool protects well",
        "Testing only known malware is a fair measure of protection",
        "Security is unknowable, so no test could tell us anything",
      ],
    },
    correctAnswer:
      "The strongest lead is that the 99.99% figure is a non-test: feeding a tool only the old threats it was trained to catch, with no novel or disguised attacks and no false-positive count, all but guarantees a near-perfect block rate whether or not the tool generalizes to real-world threats. To test severely, I would evaluate it against fresh, never-before-seen and deliberately obfuscated malware alongside a large set of benign files, so the tool faces threats it could genuinely miss and clean files it could wrongly block; I would report the catch rate on the novel threats and the false-positive rate on the benign files together, and benchmark both against a competing product on the identical set. I would also red-team it with simple evasions to see whether trivial repackaging slips past. The tool earns belief only if it catches unseen threats without choking on legitimate files.",
    explanation:
      "The credulous '99.99% proves it works' and the 'security is unknowable' refusal both score near-zero; top credit sees that testing only known, trained-on threats made success automatic and designs a novel-threat, false-positive-aware test that could fail.",
  },
];

export const section: SectionContent = {
  slug: "severe-test",
  title: "The Severe Test",
  weekNumber: 2,
  blurb:
    "Evidence only supports a claim if it COULD have refuted it. A result the model was guaranteed to produce — whatever the truth — is worthless; the constructive move is to design the test that risks failure.",
  lectureTitle:
    "2.4 The Severe Test: distinguishing evidence that could have refuted from evidence that couldn't",
  body: `# The Severe Test

When someone says "the evidence confirms it," ask the question that does all the work: *could that evidence have come out the other way?* A test that the claim was bound to pass — no matter whether the claim is true — tells you nothing. Reflexive caution stalls at "well, we can't be sure of anything." Constructive Critical Reasoning makes the sharper move: it separates evidence that genuinely put the claim at risk from evidence that could never have refuted it, and it goes and builds the test that could fail.

## A confirmation counts only if it risked failure

A prediction that would be "confirmed" under every possible outcome is not a prediction at all. "The market could correct at any time" is true in every market; its eventual match is no achievement. The strength of a confirmation is exactly the strength of the disconfirmation it escaped — if there was no way to fail, there was no test. So the first thing to locate is the result that *would have* shown the claim wrong, and ask whether that result was ever genuinely on the table.

## How claims get rigged to never fail

Watch for the machinery that drains a test of severity. *Vagueness*: a claim so loose ("you'll face a challenge and find strength") that any life confirms it. *After-the-fact relabeling*: redefining the cases that would have refuted you ("they weren't truly committed") so failures don't count. *Selection*: keeping the hits and quietly dropping the misses, or testing only on cases that were bound to pass. *Guaranteed outcomes*: predicting "no rain" where it almost never rains, or "improvement" for conditions that resolve on their own. Each makes success automatic — and automatic success is empty.

## How to engineer a severe test

Make the claim stick its neck out. Specify the result that would refute it *before* you look. Then strip the guarantees: blind the people involved so expectation can't manufacture the result; use a control or comparison so common causes hit both sides equally; pre-register the outcome and the measure so nothing gets relabeled later; and test where the claim could genuinely lose, not where it was always going to win. The richest answer names the mechanism, the cheap test, and the exact result that would kill the claim.

## Why "it was confirmed" is the failure mode

Treating a foregone confirmation as support is the zero-credit move here — it mistakes the *absence of a possible failure* for the *presence of evidence*. A perfect record on an unfalsifiable claim is not a strong record; it is no record at all. The dodge isn't only the credulous "it came true, so it's true"; it's also the lazy shrug that refuses to design the test that would settle it. Both leave you exactly where you started.

## Overreach still loses

Severity cuts the other way too. A single severe test that the claim *passes* is real evidence — don't dismiss a genuine confirmation just because you can imagine doubts. And don't demand impossible certainty as the only "severe enough" bar; that is just caution wearing a lab coat. The goal is a test that could realistically have failed and didn't — not an unmeetable standard that lets you reject everything.

## In the real world

A vendor claims its antivirus "blocks 99.99% of attacks." The trap: it was tested only on old malware it was trained to recognize, with no novel threats and no count of legitimate files wrongly blocked — a score it could not have missed. The credulous read accepts the number; the lazy read says "security is unknowable." The severe test does neither: feed it fresh, disguised malware it has never seen, mixed with benign files, and report both the catch rate and the false-positive rate against a rival product. Now the tool can fail — and only if it doesn't have you learned anything.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
