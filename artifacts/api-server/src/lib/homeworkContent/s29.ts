import type { SectionContent, HomeworkItem } from "./types";

const mcq: HomeworkItem[] = [
  {
    itemType: "mc",
    prompt:
      "A product manager who fought hard to ship a new checkout flow reviews the launch and concludes it was a clear win, citing a 4% rise in completed orders. Sales also ran a holiday promo that week. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The checkout flow lifted orders; the promo was minor and the numbers speak for themselves.",
        credit: 0,
      },
      {
        text: "Because she pushed for this flow, she should treat her read as suspect and run a self-audit: check whether she would credit a rival's flow on the same 4% with a promo running, strip out promo-period orders to see if the lift survives, and ask a colleague blind to authorship to judge the same dashboard.",
        credit: 1.0,
      },
      {
        text: "She has a stake in this, so she should double-check the result somehow before celebrating.",
        credit: 0.3,
      },
      {
        text: "Since she's biased, she should compare the lift against the same week last year to see whether 4% is unusual.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Because she pushed for this flow, she should treat her read as suspect and run a self-audit: check whether she would credit a rival's flow on the same 4% with a promo running, strip out promo-period orders to see if the lift survives, and ask a colleague blind to authorship to judge the same dashboard.",
    explanation:
      "Top credit catches her own motivation and names concrete self-checks (the symmetry test, a confound strip-out, a blind reviewer); the 'numbers speak for themselves' option is the motivated reading the promo confound defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "An analyst who recommended buying a stock now argues the latest earnings prove him right, quoting three upbeat lines from the report while skipping its weak guidance. Which lead is strongest?",
    mcOptions: [
      {
        text: "The earnings confirm the call; the upbeat lines are what matter.",
        credit: 0,
      },
      {
        text: "He should notice he quoted only the flattering lines and audit himself: read the full report scoring each line for and against, ask whether he'd have led with the weak guidance if he'd shorted the stock, and have someone summarize the report without knowing his position.",
        credit: 1.0,
      },
      {
        text: "He picked the stock, so he should reread the report more carefully before claiming victory.",
        credit: 0.3,
      },
      {
        text: "Since he may be cherry-picking, he should also tally the bearish lines he skipped and weigh both sides.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "He should notice he quoted only the flattering lines and audit himself: read the full report scoring each line for and against, ask whether he'd have led with the weak guidance if he'd shorted the stock, and have someone summarize the report without knowing his position.",
    explanation:
      "The richest answer detects his own selective quoting and proposes a balanced re-scoring, a stake-flip test, and a blind summarizer; 'the upbeat lines are what matter' is the motivated cherry-pick the skipped guidance defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A teacher who designed a new reading program is sure it works because her favorite class improved. She mentions, almost in passing, that a second class on the same program slid backward. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Teaching outcomes are too tangled to ever tell whether your own program worked, so no verdict is possible.",
        credit: 0,
      },
      {
        text: "The improving class proves the program; the other class had other problems.",
        credit: 0.3,
      },
      {
        text: "She should suspect she's anchoring on the class she loves and audit it: weight both classes equally, ask whether she'd dismiss the sliding class so fast if a colleague had built the program, and pre-state now what result across both classes would make her drop it.",
        credit: 1.0,
      },
      {
        text: "Because the classes disagree, she should track both for another term before deciding.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "She should suspect she's anchoring on the class she loves and audit it: weight both classes equally, ask whether she'd dismiss the sliding class so fast if a colleague had built the program, and pre-state now what result across both classes would make her drop it.",
    explanation:
      "Top credit names her authorship bias and lists self-checks (equal weighting, a stake-flip, a pre-committed kill condition); the blanket 'no verdict is possible' is the defeatist dodge, and 'the other class had other problems' is the convenient excuse the data flags.",
  },
  {
    itemType: "mc",
    prompt:
      "A startup founder concludes users love the feature he personally designed, pointing to glowing comments. The comments all came from a beta group he hand-picked from friends. Which lead opens the most inquiry?",
    mcOptions: [
      {
        text: "The praise is real, so the feature is loved; the source of the comments doesn't change that.",
        credit: 0,
      },
      {
        text: "He should flag that he chose the reviewers and audit the claim: collect feedback from a random non-friend cohort, check whether usage actually rises after the feature ships, and ask whether he'd trust friend testimonials for a competitor's feature.",
        credit: 1.0,
      },
      {
        text: "He built it, so he ought to get a bit more feedback before trusting the praise.",
        credit: 0.3,
      },
      {
        text: "Since the testers are friends, he should also survey a few regular users to see if they agree.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "He should flag that he chose the reviewers and audit the claim: collect feedback from a random non-friend cohort, check whether usage actually rises after the feature ships, and ask whether he'd trust friend testimonials for a competitor's feature.",
    explanation:
      "The strongest lead spots the rigged sample plus his designer stake and names a random cohort, a behavioral check, and a stake-flip; 'the source doesn't change that' is the motivated read the hand-picked sample defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A backend engineer who advocated for a rewrite says the rewrite is why the service got faster. The team also doubled the server memory that same sprint. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Performance work is so multi-causal that you can never know if your own change helped, so claiming nothing is the only honest move.",
        credit: 0,
      },
      {
        text: "The rewrite clearly did it; the memory bump is a detail.",
        credit: 0.3,
      },
      {
        text: "He should treat his pro-rewrite stake as a red flag and audit it: revert the memory bump on a staging copy to isolate the rewrite, profile which code paths actually sped up, and ask whether he'd credit a teammate's rewrite while ignoring the same memory change.",
        credit: 1.0,
      },
      {
        text: "Because two things changed, he should test the rewrite alone on a copy before crediting it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "He should treat his pro-rewrite stake as a red flag and audit it: revert the memory bump on a staging copy to isolate the rewrite, profile which code paths actually sped up, and ask whether he'd credit a teammate's rewrite while ignoring the same memory change.",
    explanation:
      "Top credit catches his stake and proposes isolating the rewrite, profiling, and a stake-flip; the 'you can never know' line is the defeatist dodge and 'the memory bump is a detail' is the convenient dismissal the confound defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A restaurant owner who invented a new dish is convinced it's a hit because it sold out on opening night. It was the cheapest item on a special-launch menu with half-price drinks. Which lead is strongest?",
    mcOptions: [
      {
        text: "It sold out, so it's a hit; the owner's pride in it doesn't matter.",
        credit: 0,
      },
      {
        text: "She should recognize she's rooting for her own dish and audit it: track reorders once it's full price beside normal items, check whether other cheap dishes also sold out that night, and ask whether she'd call a supplier's dish a hit on one discounted night.",
        credit: 1.0,
      },
      {
        text: "It's her creation, so she should watch sales a little longer before calling it a hit.",
        credit: 0.3,
      },
      {
        text: "Because the launch was discounted, she should see how the dish sells next week at full price.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "She should recognize she's rooting for her own dish and audit it: track reorders once it's full price beside normal items, check whether other cheap dishes also sold out that night, and ask whether she'd call a supplier's dish a hit on one discounted night.",
    explanation:
      "The fecund answer names her creator bias and lists a full-price reorder check, a peer-dish comparison, and a stake-flip; 'her pride doesn't matter' is the motivated read the discount-and-price confound defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A grad student finds her own pet hypothesis supported after she dropped two 'outlier' subjects whose data went the other way. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Dropping outliers is standard, so the hypothesis stands.",
        credit: 0,
      },
      {
        text: "She should worry she dropped exactly the points that hurt her and audit it: rerun the analysis with the outliers kept, pre-define an outlier rule blind to which way each point cuts, and ask whether she'd have removed those subjects if they had supported her.",
        credit: 1.0,
      },
      {
        text: "Since it's her hypothesis, she should look at those two subjects again before publishing.",
        credit: 0.3,
      },
      {
        text: "Because she removed data, she should report the results both with and without the two subjects.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "She should worry she dropped exactly the points that hurt her and audit it: rerun the analysis with the outliers kept, pre-define an outlier rule blind to which way each point cuts, and ask whether she'd have removed those subjects if they had supported her.",
    explanation:
      "Top credit detects the convenient exclusion and names a keep-all rerun, a direction-blind exclusion rule, and a stake-flip; 'dropping outliers is standard' is the rationalization the timing of the exclusions defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A hiring manager who championed a candidate now reads the new hire's first month as a triumph, recalling the wins and waving off two missed deadlines as 'ramp-up.' Which lead opens the most inquiry?",
    mcOptions: [
      {
        text: "First-month performance is too noisy to ever judge your own hire, so withhold any view.",
        credit: 0,
      },
      {
        text: "The wins show he was the right pick; the misses are just ramp-up.",
        credit: 0.3,
      },
      {
        text: "He should notice he's defending his own pick and audit it: score the month against the same bar he'd use for someone else's hire, ask whether he'd excuse two missed deadlines if a rival had pushed for this candidate, and have a neutral lead review the record blind to who hired him.",
        credit: 1.0,
      },
      {
        text: "Because he chose the candidate, he should get a second manager's read on the first month.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "He should notice he's defending his own pick and audit it: score the month against the same bar he'd use for someone else's hire, ask whether he'd excuse two missed deadlines if a rival had pushed for this candidate, and have a neutral lead review the record blind to who hired him.",
    explanation:
      "The richest answer catches the self-justifying read and names a common-bar test, a stake-flip, and a blind reviewer; the 'too noisy to judge' line is the dodge and 'just ramp-up' is the convenient excuse the misses flag.",
  },
  {
    itemType: "mc",
    prompt:
      "A columnist who predicted a candidate would win now says the election proved her instincts right, even though her candidate barely squeaked through after she'd forecast a landslide. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She called the winner, so her instincts were vindicated.",
        credit: 0,
      },
      {
        text: "She should separate 'called the winner' from 'forecast a landslide' and audit herself: score her actual prediction (the margin) not just the binary, ask whether she'd grade a rival pundit's blown-margin call as a win, and log this forecast against her past ones to see her real hit rate.",
        credit: 1.0,
      },
      {
        text: "Because it's her own prediction, she should review what she actually wrote before claiming a win.",
        credit: 0.3,
      },
      {
        text: "Since the margin was off, she should check how close her predicted vote share was to the result.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "She should separate 'called the winner' from 'forecast a landslide' and audit herself: score her actual prediction (the margin) not just the binary, ask whether she'd grade a rival pundit's blown-margin call as a win, and log this forecast against her past ones to see her real hit rate.",
    explanation:
      "Top credit catches her redefining the prediction after the fact and names margin scoring, a stake-flip, and a track-record log; 'she called the winner' is the motivated reframing her own landslide forecast defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A marketer who lobbied for a billboard campaign credits it for a sales bump, mentioning only that the bump began the week the billboards went up — the same week a competitor's store closed nearby. Which lead is strongest?",
    mcOptions: [
      {
        text: "Marketing attribution is hopeless, so you can never tell whether your own campaign worked; say nothing.",
        credit: 0,
      },
      {
        text: "The timing lines up with the billboards, so they caused the bump.",
        credit: 0.3,
      },
      {
        text: "He should flag that he's invested in the billboards and audit it: compare sales in towns with billboards but no competitor closure, check whether the bump concentrates near the closed store, and ask whether he'd still credit billboards if a rival had proposed them.",
        credit: 1.0,
      },
      {
        text: "Because two things happened that week, he should look at sales in a town that only got the billboards.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "He should flag that he's invested in the billboards and audit it: compare sales in towns with billboards but no competitor closure, check whether the bump concentrates near the closed store, and ask whether he'd still credit billboards if a rival had proposed them.",
    explanation:
      "The strongest lead names his stake and proposes a clean-comparison town, a geographic check, and a stake-flip; 'the timing lines up' is the motivated read the competitor closure defeats, and 'attribution is hopeless' is the dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A cyclist who spent a lot on aero wheels insists they made him faster, citing a personal-best ride — which was also on a day with a strong tailwind and fresh legs after a rest week. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He set a PR on the new wheels, so the wheels delivered.",
        credit: 0,
      },
      {
        text: "He should admit he wants the pricey wheels to be worth it and audit it: repeat the segment on old and new wheels in matched wind and rest conditions, compare power-to-speed across runs, and ask whether he'd credit wheels for a friend's tailwind-aided PR.",
        credit: 1.0,
      },
      {
        text: "Since he paid for them, he should ride a few more times before trusting the PR.",
        credit: 0.3,
      },
      {
        text: "Because wind and rest were factors, he should retest the wheels on a calm day with normal legs.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "He should admit he wants the pricey wheels to be worth it and audit it: repeat the segment on old and new wheels in matched wind and rest conditions, compare power-to-speed across runs, and ask whether he'd credit wheels for a friend's tailwind-aided PR.",
    explanation:
      "Top credit names the sunk-cost motivation and lists a matched-condition swap, a power-normalized comparison, and a stake-flip; 'the wheels delivered' is the motivated read the tailwind and rest-week confounds defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A department head who proposed a four-day week reports it 'obviously worked' because the team seems happier in his one-on-ones. He hasn't looked at output or at the anonymous survey results sitting in his inbox. Which lead opens the most inquiry?",
    mcOptions: [
      {
        text: "Morale is impossible to measure objectively, so no honest conclusion about your own policy is possible.",
        credit: 0,
      },
      {
        text: "He should notice he's reading happiness into his own pet policy and audit it: open the anonymous survey he's been avoiding, check output and error rates against the prior month, and ask whether he'd accept 'they seem happier in one-on-ones' as proof from a manager he disagreed with.",
        credit: 1.0,
      },
      {
        text: "It's his proposal, so he should gather a bit more evidence before declaring success.",
        credit: 0.3,
      },
      {
        text: "Because one-on-ones can be skewed, he should also read the anonymous survey before concluding.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "He should notice he's reading happiness into his own pet policy and audit it: open the anonymous survey he's been avoiding, check output and error rates against the prior month, and ask whether he'd accept 'they seem happier in one-on-ones' as proof from a manager he disagreed with.",
    explanation:
      "The richest answer flags his avoidance of the survey and names reading it, checking hard output, and a stake-flip; 'morale is impossible to measure' is the dodge that excuses ignoring the data he already has.",
  },
  {
    itemType: "mc",
    prompt:
      "A coach who built the team's defensive scheme says it's clearly the best in the league after a three-game win streak. All three opponents were the bottom three teams in the standings. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Three wins in a row prove the scheme; the streak is the streak.",
        credit: 0,
      },
      {
        text: "He should suspect pride in his own scheme is talking and audit it: look at points allowed adjusted for opponent strength, check how the defense did against the top teams earlier, and ask whether he'd call a rival's scheme elite after beating only the bottom three.",
        credit: 1.0,
      },
      {
        text: "Since it's his scheme, he should wait for tougher games before crowning it.",
        credit: 0.3,
      },
      {
        text: "Because the opponents were weak, he should compare the defense's stats against strong and weak teams.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "He should suspect pride in his own scheme is talking and audit it: look at points allowed adjusted for opponent strength, check how the defense did against the top teams earlier, and ask whether he'd call a rival's scheme elite after beating only the bottom three.",
    explanation:
      "Top credit names his authorship pride and proposes strength-adjusted stats, a top-team check, and a stake-flip; 'the streak is the streak' is the motivated read the weak schedule defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A homeowner who chose a costly air purifier swears it fixed her allergies, noting her symptoms eased after she switched it on — at the start of a season when local pollen counts naturally collapse. Which lead is strongest?",
    mcOptions: [
      {
        text: "Allergy causes are too entangled to ever credit your own purchase, so draw no conclusion.",
        credit: 0,
      },
      {
        text: "Her symptoms eased after switching it on, so the purifier fixed them.",
        credit: 0.3,
      },
      {
        text: "She should admit she wants the purchase justified and audit it: track symptoms against published pollen counts, turn the purifier off for a fortnight during steady pollen, and ask whether she'd credit a neighbor's purifier whose timing matched a pollen drop.",
        credit: 1.0,
      },
      {
        text: "Because pollen was falling anyway, she should test her symptoms with the purifier off for a while.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "She should admit she wants the purchase justified and audit it: track symptoms against published pollen counts, turn the purifier off for a fortnight during steady pollen, and ask whether she'd credit a neighbor's purifier whose timing matched a pollen drop.",
    explanation:
      "The strongest lead names the purchase-justification motive and lists a pollen-tracking check, an off-period test, and a stake-flip; 'it eased after switching it on' is the motivated read the seasonal pollen collapse defeats, and 'too entangled' is the dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A blogger who staked his reputation on a diet claims his readers' before-and-after photos prove it works, though he only published the success stories and quietly archived the people who quit. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The photos are real transformations, so the diet works.",
        credit: 0,
      },
      {
        text: "He should see that he's been showcasing only the wins and audit it: report outcomes for everyone who started including quitters, ask whether he'd accept survivor-only photos from a diet he'd criticized, and have someone compute the completion and success rate from the full roster.",
        credit: 1.0,
      },
      {
        text: "Since his reputation rides on it, he should be more careful about how he presents the photos.",
        credit: 0.3,
      },
      {
        text: "Because he left people out, he should also account for the readers who didn't finish.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "He should see that he's been showcasing only the wins and audit it: report outcomes for everyone who started including quitters, ask whether he'd accept survivor-only photos from a diet he'd criticized, and have someone compute the completion and success rate from the full roster.",
    explanation:
      "Top credit detects the survivorship filter driven by his stake and names a full-roster report, a stake-flip, and an independent rate calculation; 'they're real transformations' is the motivated read the archived quitters defeat.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A school principal who pushed for a new phonics program announces it raised reading scores, citing a 6-point gain. That same year the district cut class sizes and the test was made easier. The principal mentions neither in her memo. Which lead best follows?",
    mcOptions: [
      {
        text: "Scores rose under her program, so the program raised them.",
        credit: 0,
      },
      {
        text: "She should treat her authorship as a bias flag and audit the claim: compare schools that got smaller classes but not phonics, re-score this year's test on the old scale, and ask whether she'd attribute a 6-point gain to a rival's program while ignoring the same two changes.",
        credit: 1.0,
      },
      {
        text: "It's her program, so she should look a little harder before crediting it.",
        credit: 0.3,
      },
      {
        text: "Because other things changed, she should compare against schools that only changed class size.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'self-audit / confounded gain' lead from the rival 'the phonics program drove the 6 points,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: look at the schools that cut class sizes and got the easier test but did NOT adopt phonics — if they gained a similar 6 points, the program isn't what moved the score. My lead is refuted if those phonics-free schools showed no gain while only the phonics schools rose, which would credit the program after all.",
      yieldAnchors: [
        "Reading scores rose 6 points",
        "Class sizes were cut the same year",
        "The test was made easier the same year",
      ],
      riskAnchors: [
        "Class-size-only schools gain about as much",
        "Re-scoring on the old scale shrinks the gain",
        "She'd not credit a rival's program ignoring the same changes",
      ],
      defeatedBy: [
        "Scores rose under her program so it caused the gain",
        "The two other changes are irrelevant",
      ],
    },
    correctAnswer:
      "She should treat her authorship as a bias flag and audit the claim: compare schools that got smaller classes but not phonics, re-score this year's test on the old scale, and ask whether she'd attribute a 6-point gain to a rival's program while ignoring the same two changes.",
    explanation:
      "Full credit catches her omission and stake, names a clean comparison, a rescaling, and a stake-flip, and the written test isolates the confound; 'scores rose so it caused them' is the motivated read the class-size and test changes defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A researcher excited by his own theory ran the same experiment eleven times, got nothing in the first ten, a positive result on the eleventh, and now reports only the eleventh as confirmation. Which lead is strongest?",
    mcOptions: [
      {
        text: "Replication is so hard that you can never trust your own positive result, so conclude nothing.",
        credit: 0,
      },
      {
        text: "The eleventh run worked, so the theory is confirmed.",
        credit: 0.3,
      },
      {
        text: "He should recognize he's reporting the one run that flatters him and audit it: report all eleven runs and compute how often a positive appears by chance, pre-register the next run's success criterion, and ask whether he'd accept a rival's '1-of-11' as confirmation.",
        credit: 1.0,
      },
      {
        text: "Because ten runs failed, he should disclose all eleven results, not just the last.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'self-audit / cherry-picked run' lead from the rival 'the eleventh run confirms the theory,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: pre-register one fresh run with a fixed success criterion before peeking, and see whether it succeeds — a real effect should reproduce, not appear once in twelve. My lead is refuted if the pre-registered run cleanly confirms the theory, showing the earlier failures were setup noise rather than a true null.",
      yieldAnchors: [
        "Ten of eleven runs showed nothing",
        "Only the eleventh was positive",
        "He reports only the eleventh as confirmation",
      ],
      riskAnchors: [
        "One positive in eleven is what chance predicts",
        "A pre-registered fresh run fails to reproduce",
        "He'd reject a rival's 1-of-11 as confirmation",
      ],
      defeatedBy: [
        "The eleventh run confirms the theory",
        "The ten failures can be ignored",
      ],
    },
    correctAnswer:
      "He should recognize he's reporting the one run that flatters him and audit it: report all eleven runs and compute how often a positive appears by chance, pre-register the next run's success criterion, and ask whether he'd accept a rival's '1-of-11' as confirmation.",
    explanation:
      "The richest answer catches the selective reporting and names full disclosure, pre-registration, and a stake-flip; 'the eleventh confirms it' is the motivated read the ten nulls defeat, and 'you can never trust a result' is the dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A founder who bet the company on a pivot reads a flat month as 'early signs of traction,' highlighting a 2% signup uptick while skipping that revenue and retention both fell. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Early-stage metrics are too noisy to judge your own pivot, so no read is possible.",
        credit: 0,
      },
      {
        text: "Signups ticked up, so the pivot is gaining traction.",
        credit: 0.3,
      },
      {
        text: "She should suspect she's hunting for any sign her pivot worked and audit it: weigh revenue and retention alongside signups in one scorecard, pre-state the metric thresholds that would mean the pivot failed, and ask whether she'd call 2% signups 'traction' for a pivot she'd opposed.",
        credit: 1.0,
      },
      {
        text: "Because other metrics fell, she should look at the full dashboard before claiming traction.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'self-audit / motivated traction read' lead from the rival 'the 2% signup uptick shows the pivot is working,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: put signups, revenue, and retention on one scorecard against pre-set thresholds and see whether the bundle is net positive — real traction lifts more than one cherry-picked metric. My lead is refuted if, on a balanced scorecard, the pivot clears the thresholds she set in advance, showing the optimism was warranted.",
      yieldAnchors: [
        "Signups rose 2%",
        "Revenue fell",
        "Retention fell",
      ],
      riskAnchors: [
        "A balanced scorecard is net negative",
        "Pre-set failure thresholds are breached",
        "She'd not call 2% signups traction for a pivot she opposed",
      ],
      defeatedBy: [
        "The signup uptick shows the pivot is working",
        "Falling revenue and retention can be set aside",
      ],
    },
    correctAnswer:
      "She should suspect she's hunting for any sign her pivot worked and audit it: weigh revenue and retention alongside signups in one scorecard, pre-state the metric thresholds that would mean the pivot failed, and ask whether she'd call 2% signups 'traction' for a pivot she'd opposed.",
    explanation:
      "Full credit detects the metric cherry-pick and names a balanced scorecard, pre-set kill thresholds, and a stake-flip; 'signups show traction' is the motivated read the falling revenue and retention defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An editor convinced her favorite author's new novel is brilliant dismisses three negative early reviews as 'readers who didn't get it,' while quoting the two glowing ones at length. Which lead opens the most inquiry?",
    mcOptions: [
      {
        text: "The glowing reviews are right; the negative reviewers simply missed the point.",
        credit: 0,
      },
      {
        text: "She should notice she's discounting only the reviews that disagree and audit it: read all five reviews scoring each criticism on its merits, ask whether she'd wave off three pans for an author she disliked, and have a colleague rank the reviews' arguments blind to her favorite.",
        credit: 1.0,
      },
      {
        text: "Since she's a fan, she should reread the negative reviews more fairly.",
        credit: 0.3,
      },
      {
        text: "Because she ignored the pans, she should weigh the negative reviews alongside the positive ones.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'self-audit / motivated dismissal' lead from the rival 'the negative reviewers just missed the point,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have a colleague who doesn't know which author you love rank the five reviews purely on argument quality — if the pans are well-argued, your dismissal was motivated. My lead is refuted if the blind colleague also finds the three negative reviews weak and the two positive ones strong, vindicating your read.",
      yieldAnchors: [
        "Three early reviews were negative",
        "Two early reviews were glowing",
        "She quotes only the glowing ones",
      ],
      riskAnchors: [
        "A blind colleague rates the pans well-argued",
        "She'd not wave off three pans for a disliked author",
        "Scoring each criticism on merit holds up the negatives",
      ],
      defeatedBy: [
        "The negative reviewers simply missed the point",
        "Only the glowing reviews count",
      ],
    },
    correctAnswer:
      "She should notice she's discounting only the reviews that disagree and audit it: read all five reviews scoring each criticism on its merits, ask whether she'd wave off three pans for an author she disliked, and have a colleague rank the reviews' arguments blind to her favorite.",
    explanation:
      "The richest answer catches the asymmetric discounting and names merit-scoring, a stake-flip, and a blind ranker; 'they missed the point' is the motivated dismissal the three reasoned pans defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A gardener who swears by his homemade compost credits it for a bumper tomato crop, though this was also the year he moved the bed into full sun and switched to a disease-resistant variety. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Gardens have too many variables to ever credit your own compost, so claim nothing.",
        credit: 0,
      },
      {
        text: "The crop boomed with his compost, so the compost did it.",
        credit: 0.3,
      },
      {
        text: "He should admit he's proud of the compost and audit it: grow next year's beds in a grid of compost-yes/no crossed with the new variety and sun, ask whether he'd credit compost if a neighbor had also changed sun and seed, and compare a compost-only bed against the others.",
        credit: 1.0,
      },
      {
        text: "Because sun and variety changed too, he should run a bed with only the compost varied.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'self-audit / confounded crop' lead from the rival 'the compost produced the bumper crop,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: grow two matched beds in the new sunny spot with the new variety, one with compost and one without, and compare yields — if compost is the cause, only the composted bed should boom. My lead is refuted if the composted bed dramatically out-yields the identical no-compost bed, isolating compost as the driver.",
      yieldAnchors: [
        "The tomato crop was a bumper one",
        "The bed was moved into full sun that year",
        "He switched to a disease-resistant variety",
      ],
      riskAnchors: [
        "A no-compost bed in the same sun and variety yields the same",
        "He'd not credit compost if a neighbor changed sun and seed too",
        "A compost-only contrast separates the factors",
      ],
      defeatedBy: [
        "The compost produced the bumper crop",
        "The sun and variety changes don't matter",
      ],
    },
    correctAnswer:
      "He should admit he's proud of the compost and audit it: grow next year's beds in a grid of compost-yes/no crossed with the new variety and sun, ask whether he'd credit compost if a neighbor had also changed sun and seed, and compare a compost-only bed against the others.",
    explanation:
      "Full credit names his pride and proposes a factorial grid, a stake-flip, and a compost-only contrast; 'the compost did it' is the motivated read the simultaneous sun and variety changes defeat, and 'too many variables' is the dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A consultant who recommended a reorg presents it as a triumph, citing a survey where she personally chose which questions to show the board — all the favorable ones. Which lead is strongest?",
    mcOptions: [
      {
        text: "The shown results are positive, so the reorg succeeded.",
        credit: 0,
      },
      {
        text: "She should flag that she picked the questions that flatter her recommendation and audit it: present every survey item including the ones she withheld, have a neutral party select which items the board sees, and ask whether she'd accept a hand-picked subset from a consultant she distrusted.",
        credit: 1.0,
      },
      {
        text: "Since she chose the questions, she should show the board a few more results.",
        credit: 0.3,
      },
      {
        text: "Because she filtered the survey, she should also report the questions she left out.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'self-audit / cherry-picked survey' lead from the rival 'the survey shows the reorg succeeded,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have a neutral party publish the full survey, every item included, and see whether the overall picture is still positive — real success survives showing all the questions. My lead is refuted if the complete, unfiltered survey is just as favorable as her chosen subset, meaning the selection didn't change the story.",
      yieldAnchors: [
        "She chose which survey questions to show",
        "Only favorable items were presented",
        "She presents the reorg as a triumph",
      ],
      riskAnchors: [
        "The full survey is markedly less favorable",
        "A neutral selector shows different items",
        "She'd reject a hand-picked subset from a distrusted source",
      ],
      defeatedBy: [
        "The shown results prove the reorg succeeded",
        "The withheld questions are irrelevant",
      ],
    },
    correctAnswer:
      "She should flag that she picked the questions that flatter her recommendation and audit it: present every survey item including the ones she withheld, have a neutral party select which items the board sees, and ask whether she'd accept a hand-picked subset from a consultant she distrusted.",
    explanation:
      "The richest answer catches the self-serving selection and names full disclosure, a neutral selector, and a stake-flip; 'the shown results prove it' is the motivated read the withheld unfavorable items defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A day trader who is sure his system works points to a great month, but he counts only the trades he 'meant' to take and ignores the impulsive losing trades as 'not really part of the system.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "Markets are too random to ever evaluate your own system, so no judgment is possible.",
        credit: 0,
      },
      {
        text: "His intended trades won, so the system works.",
        credit: 0.3,
      },
      {
        text: "He should see he's defining losers out of his own record and audit it: score every trade he actually placed under one fixed rule, ask whether he'd let a rival exclude his impulsive losses, and have his broker statement, not his memory, define the trade set.",
        credit: 1.0,
      },
      {
        text: "Because he excluded trades, he should also include the impulsive losers in the tally.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'self-audit / redefined record' lead from the rival 'the intended trades show the system works,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: pull the broker statement and compute the month's return over every trade actually placed, with no after-the-fact 'not part of the system' exclusions — a working system should still be net positive. My lead is refuted if the full, unedited statement is just as profitable as his curated subset, showing the exclusions didn't flatter the result.",
      yieldAnchors: [
        "He counts only the trades he meant to take",
        "Impulsive losing trades are excluded",
        "He reports a great month",
      ],
      riskAnchors: [
        "The full broker statement is net negative",
        "He'd reject a rival excluding his own losses",
        "A fixed rule scoring all trades changes the verdict",
      ],
      defeatedBy: [
        "The intended trades prove the system works",
        "The impulsive losers aren't part of the system",
      ],
    },
    correctAnswer:
      "He should see he's defining losers out of his own record and audit it: score every trade he actually placed under one fixed rule, ask whether he'd let a rival exclude his impulsive losses, and have his broker statement, not his memory, define the trade set.",
    explanation:
      "Full credit catches the after-the-fact exclusion and names a full-statement tally, a stake-flip, and an external record; 'the intended trades show it works' is the motivated read the excluded impulsive losses defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A volunteer who designed a charity's fundraising email is sure it outperformed the old one, citing more clicks — but the new email went to recent donors while the old one went to a cold list. Which lead opens the most inquiry?",
    mcOptions: [
      {
        text: "The new email got more clicks, so his design is better.",
        credit: 0,
      },
      {
        text: "He should notice the lists weren't comparable and that he wants his design to win, then audit it: A/B test both emails on the same randomly split list, ask whether he'd accept a warm-vs-cold comparison for a rival's email, and check click rates within the recent-donor segment only.",
        credit: 1.0,
      },
      {
        text: "Since he made the email, he should run another test before claiming it's better.",
        credit: 0.3,
      },
      {
        text: "Because the lists differ, he should compare the two emails on similar audiences.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'self-audit / mismatched lists' lead from the rival 'his email design drove the extra clicks,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: send both emails to one list split at random and compare click rates head to head — equal audiences isolate the design. My lead is refuted if his email still wins clearly on the randomly split list, showing the design, not the warmer audience, earned the clicks.",
      yieldAnchors: [
        "The new email got more clicks",
        "The new email went to recent donors",
        "The old email went to a cold list",
      ],
      riskAnchors: [
        "On a randomly split list the gap disappears",
        "He'd reject a warm-vs-cold comparison for a rival",
        "Within recent donors only, the designs tie",
      ],
      defeatedBy: [
        "More clicks prove his design is better",
        "The warm-vs-cold list difference doesn't matter",
      ],
    },
    correctAnswer:
      "He should notice the lists weren't comparable and that he wants his design to win, then audit it: A/B test both emails on the same randomly split list, ask whether he'd accept a warm-vs-cold comparison for a rival's email, and check click rates within the recent-donor segment only.",
    explanation:
      "The richest answer catches both the confound and his stake, naming a clean A/B test, a stake-flip, and a same-segment check; 'more clicks prove it' is the motivated read the warm-vs-cold list mismatch defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A team lead who proposed switching to a new project tool declares it a success because the two engineers who praised it loudest are the ones he asked. The four who went quiet, he assumes, are 'just busy.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "Tool preferences are too subjective to ever judge your own pick, so withhold any view.",
        credit: 0,
      },
      {
        text: "Two engineers love it, so the switch was a success.",
        credit: 0.3,
      },
      {
        text: "He should see he polled only likely supporters and read silence in his own favor, then audit it: run an anonymous survey of all six, check objective signals like task throughput before and after, and ask whether he'd treat four silences as approval for a tool he'd opposed.",
        credit: 1.0,
      },
      {
        text: "Because he only asked two, he should get input from the other four engineers too.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'self-audit / biased polling' lead from the rival 'the two enthusiasts show the switch succeeded,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: send an anonymous one-question survey to all six engineers so the quiet four can answer freely — real success shows up across the whole team, not just the two he chose. My lead is refuted if the anonymous survey comes back broadly positive, meaning the silence wasn't disapproval after all.",
      yieldAnchors: [
        "The two praising engineers are the ones he asked",
        "Four engineers stayed quiet",
        "He assumes the quiet ones are just busy",
      ],
      riskAnchors: [
        "An anonymous all-team survey is lukewarm or negative",
        "Throughput didn't improve after the switch",
        "He'd not read four silences as approval for a disliked tool",
      ],
      defeatedBy: [
        "The two enthusiasts prove the switch succeeded",
        "The four silences mean approval",
      ],
    },
    correctAnswer:
      "He should see he polled only likely supporters and read silence in his own favor, then audit it: run an anonymous survey of all six, check objective signals like task throughput before and after, and ask whether he'd treat four silences as approval for a tool he'd opposed.",
    explanation:
      "Full credit catches the selective polling and the self-serving reading of silence, naming an anonymous full survey, an objective check, and a stake-flip; 'two enthusiasts prove it' is the motivated read the four silences defeat.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A wine writer who has long championed natural wines runs a 'blind' tasting at home and reports that the natural wines won. But he poured the glasses himself, knew which was which, and scored them on the spot. He concludes his preference is objectively justified. In one paragraph, propose the strongest lead for how he should evaluate his own conclusion and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that his result is contaminated by motivated scoring — knowing which glass held the natural wine he favors, he plausibly nudged the scores toward the conclusion he already holds, so the tasting tells us about his bias more than about the wine. This lead is fecund because it predicts checkable consequences: if a truly blind pour (a third party codes the glasses so he can't tell which is which) erases the natural-wine advantage, motivation was driving it; the gap should shrink most for the wines he most strongly identifies as natural; and asking him in advance to write down what result would change his mind should expose whether any outcome could. I would test it by rerunning the tasting with an assistant coding the glasses and revealing identities only after scoring, by comparing his blind ranks to his sighted ones, and by recruiting tasters with no stake in the natural-wine debate to score the same coded set as a check on his palate.",
      yieldAnchors: [
        "He poured the glasses himself and knew which was which",
        "He has long championed natural wines",
        "He scored them on the spot",
      ],
      riskAnchors: [
        "A truly coded-blind pour erases the natural-wine advantage",
        "His blind ranks diverge from his sighted ranks",
        "Stake-free tasters don't reproduce his ranking",
      ],
      defeatedBy: [
        "His preference is objectively justified by this tasting",
        "Knowing the glasses doesn't affect his scores",
        "You can never trust any tasting so conclude nothing",
      ],
    },
    correctAnswer:
      "The strongest lead is that his result is contaminated by motivated scoring — knowing which glass held the natural wine he favors, he plausibly nudged the scores toward the conclusion he already holds, so the tasting tells us about his bias more than about the wine. This lead is fecund because it predicts checkable consequences: if a truly blind pour (a third party codes the glasses so he can't tell which is which) erases the natural-wine advantage, motivation was driving it; the gap should shrink most for the wines he most strongly identifies as natural; and asking him in advance to write down what result would change his mind should expose whether any outcome could. I would test it by rerunning the tasting with an assistant coding the glasses and revealing identities only after scoring, by comparing his blind ranks to his sighted ones, and by recruiting tasters with no stake in the natural-wine debate to score the same coded set as a check on his palate.",
    explanation:
      "Under CCR, 'his preference is objectively justified' is the motivated conclusion the non-blind pour defeats, and 'you can never trust any tasting' is the near-zero dodge; top credit goes to the self-audit lead that names a truly blind rerun able to refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A manager has decided an employee she clashes with is 'careless.' Reviewing the quarter, she vividly recalls his two mistakes and barely registers his on-time, error-free deliveries; she also forgives identical mistakes from an employee she likes as 'bad luck.' She files him for a low rating. In one paragraph, propose the strongest lead for auditing her own judgment and how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that her 'careless' verdict is motivated reasoning — a dislike-driven asymmetry in which she over-remembers his errors, under-weights his clean work, and applies a harsher standard to him than to an employee she favors. This lead is fecund because it generates checkable predictions: a complete error log scored by a fixed rule should show his rate is no worse, and maybe better, than peers'; applying the exact same incidents to the liked employee's name should change the rating she'd give; and counting his on-time, error-free deliveries should swamp the two mistakes she fixates on. I would test it by pulling objective records (defect counts, on-time rates) for both employees and comparing them against one rubric, by running a name-blinded review where a neutral colleague rates the anonymized records, and by checking whether she excuses his mistakes once they're attributed to the employee she likes.",
      yieldAnchors: [
        "She vividly recalls his two mistakes",
        "She barely registers his error-free deliveries",
        "She forgives identical mistakes from an employee she likes",
      ],
      riskAnchors: [
        "A fixed-rule error log shows his rate is no worse than peers'",
        "A name-blinded review rates him higher",
        "She'd excuse the same mistakes under the liked employee's name",
      ],
      defeatedBy: [
        "He is objectively careless and the low rating is fair",
        "Her memory of his mistakes is unbiased",
        "Performance is too subjective to rate anyone",
      ],
    },
    correctAnswer:
      "The strongest lead is that her 'careless' verdict is motivated reasoning — a dislike-driven asymmetry in which she over-remembers his errors, under-weights his clean work, and applies a harsher standard to him than to an employee she favors. This lead is fecund because it generates checkable predictions: a complete error log scored by a fixed rule should show his rate is no worse, and maybe better, than peers'; applying the exact same incidents to the liked employee's name should change the rating she'd give; and counting his on-time, error-free deliveries should swamp the two mistakes she fixates on. I would test it by pulling objective records (defect counts, on-time rates) for both employees and comparing them against one rubric, by running a name-blinded review where a neutral colleague rates the anonymized records, and by checking whether she excuses his mistakes once they're attributed to the employee she likes.",
    explanation:
      "The 'he is objectively careless' read is the motivated conclusion her own double standard defeats, and 'too subjective to rate anyone' is the near-zero dodge; credit goes to the self-audit lead that names a name-blinded review able to refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A scientist's grant depends on her drug showing an effect. Her trial barely missed significance, so she tries several different statistical tests until one crosses the line, then reports that one. She tells herself she simply 'found the right analysis.' In one paragraph, propose the strongest lead for evaluating her own conclusion and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the 'significant' result is an artifact of analytic flexibility under a clear incentive — by running test after test and reporting only the one that crossed the line, she has all but guaranteed a false positive, so her conclusion reflects her grant motivation more than the drug. This lead is fecund because it predicts checkable consequences: reporting every test she ran, with the count, should show that getting one 'hit' by chance was likely; pre-registering a single analysis plan for a fresh sample should fail to reproduce the effect if it isn't real; and a colleague blind to which result she wants, given the raw data and asked to pick the appropriate test in advance, should not land on her chosen one. I would test it by disclosing the full set of analyses and computing the chance of a spurious hit, by pre-registering one primary endpoint and replicating in a new cohort, and by having an independent statistician specify the analysis before seeing the outcome.",
      yieldAnchors: [
        "Her grant depends on the drug showing an effect",
        "The trial barely missed significance",
        "She tried several tests and reported only the one that crossed the line",
      ],
      riskAnchors: [
        "Disclosing all tests shows a chance hit was likely",
        "A pre-registered replication fails to reproduce the effect",
        "A blind statistician wouldn't pick her chosen test",
      ],
      defeatedBy: [
        "She simply found the right analysis and the drug works",
        "Trying many tests until one works is fine",
        "Statistics is so flexible that no drug effect can ever be known",
      ],
    },
    correctAnswer:
      "The strongest lead is that the 'significant' result is an artifact of analytic flexibility under a clear incentive — by running test after test and reporting only the one that crossed the line, she has all but guaranteed a false positive, so her conclusion reflects her grant motivation more than the drug. This lead is fecund because it predicts checkable consequences: reporting every test she ran, with the count, should show that getting one 'hit' by chance was likely; pre-registering a single analysis plan for a fresh sample should fail to reproduce the effect if it isn't real; and a colleague blind to which result she wants, given the raw data and asked to pick the appropriate test in advance, should not land on her chosen one. I would test it by disclosing the full set of analyses and computing the chance of a spurious hit, by pre-registering one primary endpoint and replicating in a new cohort, and by having an independent statistician specify the analysis before seeing the outcome.",
    explanation:
      "Under CCR, 'she found the right analysis' is the motivated conclusion the many discarded tests defeat, and 'no drug effect can ever be known' is the near-zero dodge; top credit goes to the self-audit lead that names a pre-registered replication able to refute it.",
  },
  {
    itemType: "written",
    prompt:
      "An investor holding a large position in a company reads its mixed quarterly report and comes away reassured, dwelling on the strong revenue line and explaining away the cash burn and falling margins as 'temporary.' He notices he reads bad news about companies he's shorted far more harshly. In one paragraph, propose the strongest lead for auditing his own reaction and how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that his reassurance is position-driven motivated reading — owning the stock makes him inflate the good line and discount the bad as 'temporary,' the mirror image of how he savages news about his shorts. This lead is fecund because it predicts checkable consequences: if he rewrote the same report with the company name hidden and his position unknown, he should rate it less rosily; the items he labels 'temporary' should, on a fixed checklist, weigh as heavily as the revenue he celebrates; and handing the identical numbers to an analyst with no position should yield a more balanced verdict than his. I would test it by anonymizing the report and scoring each line on a pre-set rubric before he knows it's his holding, by asking whether he'd call the same cash burn 'temporary' for a company he'd shorted, and by comparing his read to a neutral analyst's on the same figures.",
      yieldAnchors: [
        "He holds a large position in the company",
        "He explains away cash burn and falling margins as temporary",
        "He reads bad news about his shorts far more harshly",
      ],
      riskAnchors: [
        "An anonymized read of the same report is less rosy",
        "On a fixed rubric the 'temporary' items weigh heavily",
        "A neutral analyst reaches a more balanced verdict",
      ],
      defeatedBy: [
        "The report objectively justifies his reassurance",
        "Owning the stock doesn't color his reading",
        "Earnings are too ambiguous to judge any company",
      ],
    },
    correctAnswer:
      "The strongest lead is that his reassurance is position-driven motivated reading — owning the stock makes him inflate the good line and discount the bad as 'temporary,' the mirror image of how he savages news about his shorts. This lead is fecund because it predicts checkable consequences: if he rewrote the same report with the company name hidden and his position unknown, he should rate it less rosily; the items he labels 'temporary' should, on a fixed checklist, weigh as heavily as the revenue he celebrates; and handing the identical numbers to an analyst with no position should yield a more balanced verdict than his. I would test it by anonymizing the report and scoring each line on a pre-set rubric before he knows it's his holding, by asking whether he'd call the same cash burn 'temporary' for a company he'd shorted, and by comparing his read to a neutral analyst's on the same figures.",
    explanation:
      "The 'report justifies his reassurance' read is the motivated conclusion his own asymmetry toward shorts defeats, and 'earnings are too ambiguous to judge' is the near-zero dodge; credit goes to the self-audit lead that names an anonymized, stake-flipped review able to refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A documentary maker convinced a town's illness cluster was caused by a nearby factory interviewed forty residents but used only the eight whose stories fit the factory theory, cutting the rest. He feels the film 'tells the truth.' In one paragraph, propose the strongest lead for auditing his own conclusion and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that his certainty rests on selection driven by the conclusion he wanted — by keeping only the eight of forty interviews that fit the factory theory, he engineered the appearance of support rather than discovering it, so the film reflects his thesis more than the town's reality. This lead is fecund because it predicts checkable consequences: reviewing all forty interviews against a fixed coding scheme should show many cases that don't fit, deflating the pattern; if he'd hold an opponent to the standard of using 8 of 40 cherry-picked clips, he should reject his own edit; and comparing the illness rate and onset dates of factory-blaming residents against the cut ones, plus an actual exposure map, should test whether proximity to the factory tracks illness at all. I would test it by coding every interview blind to whether it supports the theory and reporting the full tally, by pulling health-department incidence data and overlaying it on distance from the factory, and by asking whether he'd accept a rival film built from 8 of 40 hand-picked subjects.",
      yieldAnchors: [
        "He interviewed forty residents",
        "He used only the eight whose stories fit the factory theory",
        "He cut the rest",
      ],
      riskAnchors: [
        "Coding all forty interviews shows many cases don't fit",
        "Incidence data doesn't track distance from the factory",
        "He'd reject a rival's 8-of-40 hand-picked edit",
      ],
      defeatedBy: [
        "The film tells the truth because the eight stories are real",
        "Cutting the thirty-two non-fitting interviews is fair",
        "Illness clusters are too complex to ever attribute to anything",
      ],
    },
    correctAnswer:
      "The strongest lead is that his certainty rests on selection driven by the conclusion he wanted — by keeping only the eight of forty interviews that fit the factory theory, he engineered the appearance of support rather than discovering it, so the film reflects his thesis more than the town's reality. This lead is fecund because it predicts checkable consequences: reviewing all forty interviews against a fixed coding scheme should show many cases that don't fit, deflating the pattern; if he'd hold an opponent to the standard of using 8 of 40 cherry-picked clips, he should reject his own edit; and comparing the illness rate and onset dates of factory-blaming residents against the cut ones, plus an actual exposure map, should test whether proximity to the factory tracks illness at all. I would test it by coding every interview blind to whether it supports the theory and reporting the full tally, by pulling health-department incidence data and overlaying it on distance from the factory, and by asking whether he'd accept a rival film built from 8 of 40 hand-picked subjects.",
    explanation:
      "The 'film tells the truth' read is the motivated conclusion the thirty-two discarded interviews defeat, and 'too complex to attribute to anything' is the near-zero dodge; top credit goes to the self-audit lead that codes all forty cases and checks exposure data able to refute it.",
  },
];

export const section: SectionContent = {
  slug: "reasoner-self-audit",
  title: "The Reasoner's Self-Audit",
  weekNumber: 4,
  blurb:
    "Your hardest case to crack is your own. When a conclusion happens to be the one you wanted, run a self-audit — the deliberate check designed to expose your own motivated reasoning before you act on it.",
  lectureTitle:
    "4.5 The Reasoner's Self-Audit: detecting motivated inference in your own model choice",
  body: `# The Reasoner's Self-Audit

Most of this course trains you to interrogate evidence. This section turns the lens around: the most dangerous bias in any inquiry is the one riding inside the reasoner. When the conclusion you reach happens to be the one that flatters you, pays you, or vindicates a past decision, you cannot simply trust that the evidence led you there. The constructive move is not to throw up your hands and say "we can never trust our own minds" — that defeatism is the zero-credit dodge. It is to run a **self-audit**: a deliberate, concrete check engineered to catch your own motivated reasoning before it costs you.

## Motivation leaves fingerprints

Motivated reasoning rarely feels like bias from the inside; it feels like being right. But it leaves detectable fingerprints. You quote the favorable lines and skip the unfavorable ones. You demand airtight proof for claims you dislike and wave through flimsy support for claims you want. You remember the hits and forget the misses. You drop the "outlier" that happened to cut against you. You redefine success after the fact so that whatever happened counts as a win. The first audit skill is learning to spot these moves *in yourself* — especially when you have a stake in the answer.

## The stake-flip test

The single cheapest self-audit is the stake-flip: ask whether you would accept this same evidence for the *opposite* conclusion, or for a rival's proposal instead of your own. If a 4% bump with a confound running would convince you of your own project's success but you'd dismiss it as noise for a competitor's, the evidence isn't doing the work — your stake is. Would you forgive these mistakes from someone you liked? Would you call this a "win" if a pundit you disagreed with had made the same blown forecast? When your standard moves with your preference, you've found motivated reasoning.

## Build in the blind

Wherever you can, strip your own knowledge of "which answer is mine" out of the judgment. Have a colleague score the data without knowing your position. Anonymize the records before rating them. Let a third party code the samples or pick which results get shown. Pre-register what result would change your mind *before* you see the outcome, so you can't move the goalposts afterward. Blinding works precisely because it removes the channel through which motivation operates: you can't tilt toward the answer you want if you can't tell which one it is.

## Account for everything, not the flattering subset

A favored conclusion survives by hiding its inconvenient evidence — the discarded trials, the quiet teammates, the data points dropped as outliers, the people who quit. The self-audit insists on the full record: every trade on the broker statement, every survey question, every interview, every run of the experiment. If your conclusion only holds once you remove the parts that hurt it, the conclusion belongs to your motivation, not to the data.

## Why the "you can't trust yourself, so conclude nothing" move loses

Recognizing your own bias is not a license to refuse all judgment. "Nobody can be objective, so any conclusion is as good as any other" is just the cautious dodge wearing humility's clothes — it names no audit and changes no decision. The point of catching motivated reasoning is to *correct* it and reach a better-supported commitment, not to abandon commitment altogether. A self-audit that ends in "and therefore I still act, but on the conclusion that survives the blind check" is the goal.

## Overreach still loses

The mirror error is to assume that because you have a stake, your conclusion must be wrong, and to flip to its opposite as a show of fairness. That is just a new motivated move — performing objectivity. The audit doesn't tell you to disbelieve yourself; it tells you to *test* yourself. Sometimes the conclusion you wanted is also the one the blind, full-record, stake-flipped analysis supports — and then you commit to it, having earned it.

## In the real world

An engineer who fought for a rewrite sees the service speed up and wants to claim the win — but the team also doubled the memory that sprint. The dodge: "performance is multi-causal, who can say." The motivated read: "obviously my rewrite did it." The self-audit: notice the stake, then revert the memory bump on a staging copy to isolate the rewrite, profile which code paths actually got faster, and ask flatly whether he'd hand a teammate the credit while ignoring the same memory change. If the rewrite still wins under that scrutiny, he's earned the claim. If it doesn't, he just saved himself from shipping a false lesson — which is exactly what the audit is for.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
