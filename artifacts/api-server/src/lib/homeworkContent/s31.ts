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
      "A QA team has run 2,000 automated tests across five builds. The last three builds found zero new bugs after the first 1,800 tests, and the trailing 200 tests have never caught a defect in two years. The ship deadline is tomorrow. When should they stop testing?",
    mcOptions: [
      {
        text: "Software can always hide one more bug, so they should keep expanding the suite until no test ever fails before they dare release.",
        credit: 0,
      },
      {
        text: "The new-bug curve has flattened — three builds with zero finds past test 1,800 and a 200-test tail that has caught nothing in two years means more testing now buys almost no information; ship after one cheap smoke test of the top user flows, with the standing trigger that any field crash reopens the full suite.",
        credit: 1.0,
      },
      {
        text: "Testing seems to have hit diminishing returns; run the whole suite once more and then ship.",
        credit: 0.6,
      },
      {
        text: "They've probably tested enough by now; just ship it.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The new-bug curve has flattened — three builds with zero finds past test 1,800 and a 200-test tail that has caught nothing in two years means more testing now buys almost no information; ship after one cheap smoke test of the top user flows, with the standing trigger that any field crash reopens the full suite.",
    explanation:
      "Top credit reads the flat marginal-information curve and commits to closing now with one cheap confirm and a reopening trigger; the 'keep testing until nothing ever fails' option is the endless-doubt dodge that can never stop.",
  },
  {
    itemType: "mc",
    prompt:
      "A baker tuning a sourdough recipe has made 12 loaves varying hydration. The last four, at 72–74%, all scored within one point of each other on a 10-point panel and tasters could not tell them apart. Should she keep tuning hydration?",
    mcOptions: [
      {
        text: "Hydration seems dialed in; pick one and move on.",
        credit: 0.3,
      },
      {
        text: "A perfect loaf might sit at exactly 73.5%, so she should keep splitting the hydration range ever finer until no two loaves ever differ.",
        credit: 0,
      },
      {
        text: "The score curve has plateaued — four loaves clustered within a point and indistinguishable to tasters means further tweaks fall below the panel's detection threshold; lock in 73% now, bake one confirmation loaf for a fresh taster, and revisit only if the flour brand changes.",
        credit: 1.0,
      },
      {
        text: "She's probably close enough; settle on a value around 73%.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The score curve has plateaued — four loaves clustered within a point and indistinguishable to tasters means further tweaks fall below the panel's detection threshold; lock in 73% now, bake one confirmation loaf for a fresh taster, and revisit only if the flour brand changes.",
    explanation:
      "The strongest answer names the detection-threshold limit and stops with a single confirmation; chasing infinite precision below what tasters can perceive is the endless-doubt failure mode.",
  },
  {
    itemType: "mc",
    prompt:
      "A growth team's A/B test, after 200 visitors, has variant B ahead 12% to 9% — but that gap sits well inside the noise band, and the calculator says three more days reaches significance. The manager wants to call it now. What is the right move?",
    mcOptions: [
      {
        text: "Variant B is ahead, so call it now and ship B; collecting more data just wastes time.",
        credit: 0,
      },
      {
        text: "It's probably too early; wait a little longer before deciding.",
        credit: 0.6,
      },
      {
        text: "The current gap sits inside the noise band and the decisive data is only three cheap days away, so stopping now would mean acting on a coin-flip; run it to significance, then commit to the winner and stop.",
        credit: 1.0,
      },
      {
        text: "The numbers look close, so maybe keep watching for a while.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The current gap sits inside the noise band and the decisive data is only three cheap days away, so stopping now would mean acting on a coin-flip; run it to significance, then commit to the winner and stop.",
    explanation:
      "Here the cheap remaining test is high-yield, so the strong move is NOT to stop yet; calling a noise-band lead 'a win' is premature closure — the fallacy the data defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A factory inspects bolts by sampling 500 per batch. The last three batches landed at a 0.2% defect rate (±0.05%), and the customer spec allows up to 0.5%. An auditor proposes 100% inspection of every bolt going forward. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Three batches converging tightly at 0.2%, comfortably under the 0.5% spec, mean full inspection would cost enormously for near-zero new information; keep the 500-sample plan and add a control-chart trigger that any batch over 0.4% reopens full inspection.",
        credit: 1.0,
      },
      {
        text: "A single bad bolt could always slip through, so they should inspect 100% of every batch indefinitely to be certain.",
        credit: 0,
      },
      {
        text: "Sampling looks fine; stick with it.",
        credit: 0.3,
      },
      {
        text: "The defect rate seems safely low, so the sample plan is probably enough to continue.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Three batches converging tightly at 0.2%, comfortably under the 0.5% spec, mean full inspection would cost enormously for near-zero new information; keep the 500-sample plan and add a control-chart trigger that any batch over 0.4% reopens full inspection.",
    explanation:
      "Top credit weighs the cost of further inspection against its vanishing yield and keeps a clear reopening trigger; demanding certainty via 100% inspection forever is the never-stop dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A surgeon's patient has classic appendicitis on physical exam, a positive ultrasound, and labs consistent with the diagnosis. A resident suggests ordering three more imaging studies before operating. Each hour of delay raises rupture risk. Which lead is strongest?",
    mcOptions: [
      {
        text: "Imaging seems unnecessary; just operate.",
        credit: 0.3,
      },
      {
        text: "No diagnosis is ever certain without every possible scan, so they should run the full imaging panel first regardless of delay.",
        credit: 0,
      },
      {
        text: "The diagnosis looks well supported, so it's probably fine to proceed to surgery.",
        credit: 0.6,
      },
      {
        text: "Three independent lines — exam, ultrasound, and labs — already converge on appendicitis while delay risks rupture, so added imaging buys little and costs much; operate now, treating the intra-operative finding as the confirming-or-falsifying check.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "Three independent lines — exam, ultrasound, and labs — already converge on appendicitis while delay risks rupture, so added imaging buys little and costs much; operate now, treating the intra-operative finding as the confirming-or-falsifying check.",
    explanation:
      "The winner notes convergent evidence plus the rising cost of waiting and closes inquiry to act; demanding every scan before any action is the endless-doubt dodge that ignores the stakes of delay.",
  },
  {
    itemType: "mc",
    prompt:
      "A graduate student reviewing the literature has read 60 papers. The most recent 15 cited only sources she had already logged and raised no new themes. Her advisor asks whether she is done reading. Which conclusion best follows?",
    mcOptions: [
      {
        text: "There could always be one more relevant paper, so she must read everything ever published on the topic before she writes a word.",
        credit: 0,
      },
      {
        text: "Citation saturation has set in — 15 straight papers adding no new sources or themes signals the field's core is mapped, so further reading is low-yield; stop and start writing, keeping a saved-search alert for new publications as the reopening trigger.",
        credit: 1.0,
      },
      {
        text: "She seems to have read plenty; she can probably start writing.",
        credit: 0.6,
      },
      {
        text: "The reading looks like enough; move on.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Citation saturation has set in — 15 straight papers adding no new sources or themes signals the field's core is mapped, so further reading is low-yield; stop and start writing, keeping a saved-search alert for new publications as the reopening trigger.",
    explanation:
      "Top credit names the saturation signal and closes with a cheap ongoing alert; insisting on reading everything ever published is the never-stop refusal that prevents any output.",
  },
  {
    itemType: "mc",
    prompt:
      "A sprinter's reaction time off the blocks improved from 0.21s to 0.16s over six time trials, but the last three trials all sat at 0.16s despite extra start drills. Human-limit reaction is near 0.15s. Should the coach keep drilling starts? Which lead is strongest?",
    mcOptions: [
      {
        text: "Her starts seem maxed out; do something else.",
        credit: 0.3,
      },
      {
        text: "Reaction has plateaued at 0.16s across three trials, right against the human floor, so more start drills yield almost nothing; redirect that practice time to drive-phase mechanics where gains remain, and re-test starts monthly as a check.",
        credit: 1.0,
      },
      {
        text: "She should keep drilling starts every day until her reaction time reaches zero.",
        credit: 0,
      },
      {
        text: "The starts look about as good as they'll get, so it's probably fine to ease off.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Reaction has plateaued at 0.16s across three trials, right against the human floor, so more start drills yield almost nothing; redirect that practice time to drive-phase mechanics where gains remain, and re-test starts monthly as a check.",
    explanation:
      "The strongest answer reads the plateau against a hard floor and reallocates effort to where yield remains; drilling toward an impossible zero is the reckless never-stop dodge the physiology defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A buyer testing demand for a new mug has four weeks of sales: steady at 50 per week (±3), with holidays excluded. She wonders whether she must wait a full year before committing to a reorder quantity. Which conclusion best follows?",
    mcOptions: [
      {
        text: "A full year might reveal hidden seasonality, so she can't place any reorder until 12 months of data are in.",
        credit: 0,
      },
      {
        text: "Four weeks holding tight at 50/week is enough to set a baseline now; commit to restocking at about 50/week, flag holiday weeks as a known exception to re-measure, rather than freezing a year of shelf space waiting for certainty.",
        credit: 1.0,
      },
      {
        text: "Sales look stable, so she can probably set a reorder soon.",
        credit: 0.6,
      },
      {
        text: "The number seems steady enough to order against.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Four weeks holding tight at 50/week is enough to set a baseline now; commit to restocking at about 50/week, flag holiday weeks as a known exception to re-measure, rather than freezing a year of shelf space waiting for certainty.",
    explanation:
      "Top credit acts on a stabilized estimate while naming the one exception worth re-measuring; demanding a full year before any order is the over-cautious never-stop dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "An engineer believes she fixed a memory leak. After the patch, memory held flat for 20 minutes in one test run, and she wants to close the ticket. Historically, this leak only surfaces after several hours of sustained load. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Memory was flat for 20 minutes, so the leak is clearly gone; close the ticket now.",
        credit: 0,
      },
      {
        text: "A 20-minute run never exercises the hours-of-load condition where this leak appears, so closing now is premature; run one overnight soak test — cheap and decisive — then close if memory stays flat.",
        credit: 1.0,
      },
      {
        text: "It's probably too soon to close; maybe test a bit more first.",
        credit: 0.6,
      },
      {
        text: "The short run looked okay, so the fix seems alright.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "A 20-minute run never exercises the hours-of-load condition where this leak appears, so closing now is premature; run one overnight soak test — cheap and decisive — then close if memory stays flat.",
    explanation:
      "Stopping after a test that could not have triggered the bug is premature closure — the fallacy the scenario defeats; the strong move runs the one cheap test that actually probes the failure condition.",
  },
  {
    itemType: "mc",
    prompt:
      "A team polling a feature has 800 responses: approval sits at 64% with a ±3% margin, and the rolling average hasn't moved across the last 300 responses. A stakeholder wants 5,000 more responses. Which lead is strongest?",
    mcOptions: [
      {
        text: "A bigger sample is always better, so they should keep polling until the margin of error reaches zero.",
        credit: 0,
      },
      {
        text: "The poll looks settled; they can probably decide soon.",
        credit: 0.6,
      },
      {
        text: "The estimate has stabilized at 64% with a tight margin and a flat rolling average over 300 responses, so 5,000 more would barely move it; lock the decision at 64% approval and stop, reopening only if a major product change lands.",
        credit: 1.0,
      },
      {
        text: "The result seems stable, so it's fine to go with 64%.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The estimate has stabilized at 64% with a tight margin and a flat rolling average over 300 responses, so 5,000 more would barely move it; lock the decision at 64% approval and stop, reopening only if a major product change lands.",
    explanation:
      "Top credit recognizes that a stabilized estimate makes added sampling near-worthless and stops with a clear reopening condition; chasing a zero margin of error is the never-stop dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A gardener testing whether compost boosts yield has run three seasons: composted beds out-yielded controls by about 20% each year, consistently. She wonders whether to keep half the garden as a control for a fourth and fifth season. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The compost seems to work; she can probably use it everywhere now.",
        credit: 0.6,
      },
      {
        text: "One good run could be a fluke, so she should keep half the garden unfertilized indefinitely before ever trusting compost.",
        credit: 0,
      },
      {
        text: "Three consecutive seasons of a steady ~20% lift is a replicated effect, so a fourth trial mostly repeats known information; adopt compost across the beds now, keeping a single control strip as an ongoing check rather than delaying the whole garden.",
        credit: 1.0,
      },
      {
        text: "The pattern looks solid enough to act on.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Three consecutive seasons of a steady ~20% lift is a replicated effect, so a fourth trial mostly repeats known information; adopt compost across the beds now, keeping a single control strip as an ongoing check rather than delaying the whole garden.",
    explanation:
      "The winner treats a three-season replication as enough to commit while preserving a cheap ongoing control; keeping most of the garden frozen as a control forever is the never-stop dodge that forfeits known gains.",
  },
  {
    itemType: "mc",
    prompt:
      "An analyst backtested a trading rule over 10 years; it stayed stable across every two-year sub-window and across two independent markets. The boss insists on testing 30 more years of older data before risking any capital. Which lead is strongest?",
    mcOptions: [
      {
        text: "No backtest is ever long enough, so they should keep extending the historical window indefinitely before risking a cent.",
        credit: 0,
      },
      {
        text: "Stability across every sub-window and two independent markets is strong convergent evidence, and the truest remaining test is live behavior, not older data of fading relevance; deploy with small capital now and let live results be the falsifier.",
        credit: 1.0,
      },
      {
        text: "The backtest looks robust, so they could probably start trading soon.",
        credit: 0.6,
      },
      {
        text: "The rule seems to hold up across the data, so it's likely fine.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Stability across every sub-window and two independent markets is strong convergent evidence, and the truest remaining test is live behavior, not older data of fading relevance; deploy with small capital now and let live results be the falsifier.",
    explanation:
      "Top credit sees that more backtesting has diminishing relevance and that a small live deployment is the high-yield next test; endlessly extending the history before acting is the never-stop dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A chef piloted a new dish on one slow Tuesday and it sold just 4 plates, so he wants to cut it from the menu. Tuesday is the restaurant's slowest night, and the dish was never listed on the specials board. Which conclusion best follows?",
    mcOptions: [
      {
        text: "It sold only 4 plates, so cut it from the menu immediately.",
        credit: 0,
      },
      {
        text: "One slow, unadvertised Tuesday is far too thin to judge a dish, and a fair test is cheap; feature it on the specials board across one normal weekend, then decide — pulling it now is premature closure on near-zero data.",
        credit: 1.0,
      },
      {
        text: "The first night was weak, so it might be worth a bit more testing before cutting.",
        credit: 0.6,
      },
      {
        text: "Sales seemed low, so maybe give it another chance.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "One slow, unadvertised Tuesday is far too thin to judge a dish, and a fair test is cheap; feature it on the specials board across one normal weekend, then decide — pulling it now is premature closure on near-zero data.",
    explanation:
      "Closing inquiry after a single unrepresentative trial is premature closure — the fallacy defeated here; the strong move runs one cheap fair test before committing.",
  },
  {
    itemType: "mc",
    prompt:
      "An editor sent a manuscript to two independent proofreaders. The second flagged only typos the first had already caught and found zero new errors. The publisher asks whether to hire a third proofreader. Which lead is strongest?",
    mcOptions: [
      {
        text: "Two readers seem to have covered it; just publish.",
        credit: 0.3,
      },
      {
        text: "The second reader surfacing no new errors signals the error pool is nearly exhausted, so a third reader is low-yield; publish after a quick automated spell-check, with a reader-reported-errata channel as the post-launch safety net.",
        credit: 1.0,
      },
      {
        text: "A book can always hold one more typo, so they should keep hiring new proofreaders indefinitely no matter the cost.",
        credit: 0,
      },
      {
        text: "Coverage looks good, so it's probably ready to go.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The second reader surfacing no new errors signals the error pool is nearly exhausted, so a third reader is low-yield; publish after a quick automated spell-check, with a reader-reported-errata channel as the post-launch safety net.",
    explanation:
      "Top credit reads the zero-new-error signal as exhaustion of the easy finds and closes with a cheap safety net; hiring readers forever to chase a possible last typo is the never-stop dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A water utility samples a reservoir weekly. Contaminant readings have come back non-detectable at every site for 18 straight months. A consultant proposes tripling the sampling frequency permanently. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Contamination could appear at any moment, so they should sample continuously around the clock regardless of the spotless record.",
        credit: 0,
      },
      {
        text: "The readings look clean, so the current schedule is probably fine.",
        credit: 0.6,
      },
      {
        text: "Eighteen months of non-detects across every site is a stable clean baseline, so tripling routine sampling buys little; hold the weekly cadence and set a trigger that any single detection or upstream incident spikes frequency — matching effort to risk rather than testing maximally forever.",
        credit: 1.0,
      },
      {
        text: "The water seems consistently safe, so no big change is needed.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Eighteen months of non-detects across every site is a stable clean baseline, so tripling routine sampling buys little; hold the weekly cadence and set a trigger that any single detection or upstream incident spikes frequency — matching effort to risk rather than testing maximally forever.",
    explanation:
      "The strongest answer keeps effort proportional to a stable baseline and arms a clear escalation trigger; continuous round-the-clock sampling against a spotless record is the never-stop dodge.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A small pharma company's trial showed its drug beat placebo at p=0.001, and the effect replicated at two independent sites. A third site would cost a year and several million dollars. Should they keep adding sites or file for approval? Which lead is strongest?",
    mcOptions: [
      {
        text: "A drug can never be proven safe and effective enough, so they should keep adding trial sites indefinitely before filing.",
        credit: 0,
      },
      {
        text: "Two independent sites replicating a strong effect (p=0.001) is convergent evidence at the point of diminishing returns; file now while running cheaper post-market monitoring, rather than burning a year on a third site that would mostly repeat the known result.",
        credit: 1.0,
      },
      {
        text: "The evidence looks strong, so they could probably file before long.",
        credit: 0.6,
      },
      {
        text: "Two sites agreeing seems like enough to move ahead.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the evidence has saturated' lead from the rival 'a third site might overturn it,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the two completed sites agree not just on the headline result but across patient subgroups and dose levels — concordance there means a third site would mostly echo them. My lead is refuted if the two sites already disagree sharply in some subgroup, which would show the effect is unstable and a third site could genuinely flip the conclusion.",
      yieldAnchors: [
        "The drug beat placebo at p=0.001",
        "The effect replicated at two independent sites",
        "A third site costs a year and millions",
      ],
      riskAnchors: [
        "The two sites agree across subgroups and doses",
        "Post-market monitoring shows the same effect",
        "A third site would mostly repeat the known result",
      ],
      defeatedBy: [
        "No trial is ever conclusive, so testing must continue forever",
        "Two strong concordant sites tell us nothing about a third",
      ],
    },
    correctAnswer:
      "Two independent sites replicating a strong effect (p=0.001) is convergent evidence at the point of diminishing returns; file now while running cheaper post-market monitoring, rather than burning a year on a third site that would mostly repeat the known result.",
    explanation:
      "Top credit weighs strong convergent replication against the steep cost of a near-redundant third site and closes with cheaper ongoing monitoring; insisting on endless sites is the never-stop dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A designer tested a checkout flow with five users, then five more. The second batch hit only the same usability problems the first batch had already named. The product owner wants to test 50 users before any fixes. Which lead is strongest?",
    mcOptions: [
      {
        text: "The same five problems surfacing again in a fresh batch means the major usability issues are saturated, so testing more now is low-yield; fix the known issues and ship, re-testing only after the redesign changes the flow.",
        credit: 1.0,
      },
      {
        text: "Some users will always stumble somewhere, so they should keep running usability sessions until no participant ever hesitates.",
        credit: 0,
      },
      {
        text: "The testing looks like it's converging, so they could probably start fixing soon.",
        credit: 0.6,
      },
      {
        text: "Two rounds seem like enough to act on.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'usability issues are saturated' lead from the rival 'more users would reveal new problems,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: tally how many genuinely new problems each successive participant uncovers — if the second batch added none, the discovery curve has flattened. My lead is refuted if a third quick batch of five suddenly surfaces several new, distinct issues, which would show the problem space wasn't yet mapped.",
      yieldAnchors: [
        "Five users tested, then five more",
        "The second batch found only already-named problems",
        "Zero new issues in the second batch",
      ],
      riskAnchors: [
        "A third small batch finds no new distinct issues",
        "Fixing the named issues removes the observed stumbles",
        "Post-redesign testing surfaces a fresh, different set",
      ],
      defeatedBy: [
        "Testing must continue until no user ever hesitates",
        "Two batches of five can reveal nothing reliable",
      ],
    },
    correctAnswer:
      "The same five problems surfacing again in a fresh batch means the major usability issues are saturated, so testing more now is low-yield; fix the known issues and ship, re-testing only after the redesign changes the flow.",
    explanation:
      "The winner reads discovery saturation and acts on it; testing until no user ever stumbles is the endless-doubt dodge that defers every fix.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A manager interviewed her first candidate, who was excellent, and now wants to cancel the search. Two more candidates are already scheduled, and each interview takes only 30 minutes. Which lead is strongest?",
    mcOptions: [
      {
        text: "The first candidate is great, so cancel the other interviews and make the offer now.",
        credit: 0,
      },
      {
        text: "One interview can't tell you whether a candidate is the best available when two more, already booked and cheap, would settle it; run both this week, then decide — closing now is premature closure.",
        credit: 1.0,
      },
      {
        text: "The first candidate was strong, so maybe finish the others just to be safe.",
        credit: 0.6,
      },
      {
        text: "She seemed good, so it might be fine to wait on the rest.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'finish the cheap interviews' lead from the rival 'the first candidate is obviously the one,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: simply hold the two scheduled 30-minute interviews and compare — if neither matches the first candidate, you've confirmed the choice at trivial cost. My lead is refuted if the interviews were actually expensive or far in the future, so that the cost of waiting outweighs the value of the comparison.",
      yieldAnchors: [
        "The first candidate was excellent",
        "Two more candidates are already scheduled",
        "Each interview takes only 30 minutes",
      ],
      riskAnchors: [
        "The two remaining interviews finish within the week",
        "A second candidate matches or beats the first",
        "The comparison confirms or unseats the leader cheaply",
      ],
      defeatedBy: [
        "One strong interview proves the candidate is the best available",
        "The remaining interviews are too costly to bother with",
      ],
    },
    correctAnswer:
      "One interview can't tell you whether a candidate is the best available when two more, already booked and cheap, would settle it; run both this week, then decide — closing now is premature closure.",
    explanation:
      "Stopping after a single data point when cheap discriminating tests are already booked is premature closure; the strong move completes the low-cost comparison before committing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An engineer tuning injection-molding temperature cut the reject rate from 8% to 1.2% over six settings. The last three settings all landed between 1.1% and 1.3%. She wonders whether to keep tuning. Which lead is strongest?",
    mcOptions: [
      {
        text: "Rejects could always be lower, so she should keep adjusting the temperature forever until the reject rate hits zero.",
        credit: 0,
      },
      {
        text: "Three settings clustered at 1.1–1.3% means the reject rate has bottomed out within the process's natural variation, so further tuning buys little; lock the setting now and monitor with a control chart that flags any drift above 2%.",
        credit: 1.0,
      },
      {
        text: "The rejects look low and steady, so she could probably lock it in soon.",
        credit: 0.6,
      },
      {
        text: "The setting seems good enough to keep.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the reject rate has bottomed out' lead from the rival 'a better setting still exists,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: run two more batches at the current setting and see whether the reject rate stays in the 1.1–1.3% band — flat results mean she's hit the process floor. My lead is refuted if a small further temperature change drops rejects clearly below 1%, showing the curve hadn't actually flattened.",
      yieldAnchors: [
        "Reject rate fell from 8% to 1.2% over six settings",
        "The last three settings all sat at 1.1–1.3%",
        "The improvement curve has flattened",
      ],
      riskAnchors: [
        "Repeat batches stay within the 1.1–1.3% band",
        "A small further change fails to beat 1.1%",
        "A control chart catches any later drift",
      ],
      defeatedBy: [
        "Tuning should continue until rejects reach exactly zero",
        "A flattened curve says nothing about the best setting",
      ],
    },
    correctAnswer:
      "Three settings clustered at 1.1–1.3% means the reject rate has bottomed out within the process's natural variation, so further tuning buys little; lock the setting now and monitor with a control chart that flags any drift above 2%.",
    explanation:
      "Top credit reads the flattened curve against natural process variation and locks in with monitoring; chasing a literal zero reject rate is the never-stop dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A metrology lab measuring a physical constant has five runs that agree to four decimal places, and the instrument's own precision is now the limiting factor. The director asks whether to keep running. Which lead is strongest?",
    mcOptions: [
      {
        text: "More measurements always help, so they should keep running the same instrument indefinitely to push the value to infinite precision.",
        credit: 0,
      },
      {
        text: "Five runs agreeing to the instrument's precision floor means added runs can't sharpen the result; report the value with its uncertainty now and stop, upgrading the instrument only if a finer digit is actually needed.",
        credit: 1.0,
      },
      {
        text: "The runs look very consistent, so they could probably report soon.",
        credit: 0.6,
      },
      {
        text: "The measurements seem stable enough to write down.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'we've hit the instrument's precision floor' lead from the rival 'more runs will sharpen the value,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: take a few more runs and check whether the spread shrinks at all — if it stays pinned at the fourth decimal, the instrument, not the sample size, is the limit. My lead is refuted if added runs visibly tighten the value, meaning random noise, not the instrument, was still dominating.",
      yieldAnchors: [
        "Five runs agree to four decimal places",
        "Instrument precision is now the limiting factor",
        "The spread is no longer shrinking",
      ],
      riskAnchors: [
        "More runs leave the spread unchanged",
        "Only a better instrument moves the fifth digit",
        "Reported uncertainty matches the instrument's spec",
      ],
      defeatedBy: [
        "More runs on the same instrument yield infinite precision",
        "Five concordant runs are too few to report anything",
      ],
    },
    correctAnswer:
      "Five runs agreeing to the instrument's precision floor means added runs can't sharpen the result; report the value with its uncertainty now and stop, upgrading the instrument only if a finer digit is actually needed.",
    explanation:
      "The winner recognizes the instrument, not sample size, now bounds precision and stops accordingly; running forever for infinite precision is the never-stop dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A startup founder saw one large customer churn and concluded the product is failing, so he wants to pivot the whole company. Meanwhile retention across the other 200 customers is steady and slightly rising. Which lead is strongest?",
    mcOptions: [
      {
        text: "A big customer left, so the product is failing; pivot the company immediately.",
        credit: 0,
      },
      {
        text: "One churn against 200 steady-and-rising customers is noise, not a trend, so investigate that single account's specific reason cheaply before any drastic move; pivoting now is premature overreaction to one data point.",
        credit: 1.0,
      },
      {
        text: "Losing a big customer is worrying, so maybe look into it before pivoting.",
        credit: 0.6,
      },
      {
        text: "The churn seems bad, so perhaps reconsider the product.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'this is one-off noise' lead from the rival 'this churn signals systemic failure,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: a 20-minute exit conversation with the departed account plus a glance at the cohort retention curve — an idiosyncratic reason against a rising curve confirms it's noise. My lead is refuted if the exit reason matches complaints already spreading among the other 200 customers, which would mark the start of a real trend.",
      yieldAnchors: [
        "One large customer churned",
        "Retention across 200 others is steady and rising",
        "The founder wants to pivot the whole company",
      ],
      riskAnchors: [
        "The exit interview reveals an account-specific reason",
        "The broader cohort curve keeps rising",
        "No similar complaints appear among the other 200",
      ],
      defeatedBy: [
        "A single churn proves the product is failing",
        "A rising 200-customer cohort is irrelevant to the decision",
      ],
    },
    correctAnswer:
      "One churn against 200 steady-and-rising customers is noise, not a trend, so investigate that single account's specific reason cheaply before any drastic move; pivoting now is premature overreaction to one data point.",
    explanation:
      "Closing on a sweeping conclusion from a single outlier is premature closure; the strong move runs a cheap diagnostic before any pivot and weighs the whole cohort.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A farmer testing irrigation schedules has three years of data converging on watering every three days as optimal, with yields within 2% of each other across the last two seasons. An agronomist suggests continuing field experiments. Which lead is strongest?",
    mcOptions: [
      {
        text: "Conditions vary every year, so he should keep splitting his fields into competing experiments indefinitely rather than ever standardizing.",
        credit: 0,
      },
      {
        text: "Three years converging on every-three-days, with the last two within 2%, is a replicated optimum, so more whole-field experiments mostly repeat it; adopt the schedule across the farm now and keep one small test plot as an ongoing check.",
        credit: 1.0,
      },
      {
        text: "The schedule seems settled, so he could probably standardize soon.",
        credit: 0.6,
      },
      {
        text: "Three years looks like enough to pick a schedule.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the optimum has replicated' lead from the rival 'next year could differ,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: keep one small test plot running alternative schedules while the rest of the farm standardizes — a flat result there confirms the optimum holds. My lead is refuted if that plot shows a clearly better schedule under a normal season, meaning three years hadn't actually pinned the optimum.",
      yieldAnchors: [
        "Three years converge on every-three-days watering",
        "The last two seasons' yields are within 2%",
        "The result has replicated across years",
      ],
      riskAnchors: [
        "The retained test plot stays flat across schedules",
        "Farm-wide yield matches the experimental beds",
        "No normal-season schedule beats every-three-days",
      ],
      defeatedBy: [
        "Yearly variation means a schedule can never be chosen",
        "Three replicated seasons tell us nothing reliable",
      ],
    },
    correctAnswer:
      "Three years converging on every-three-days, with the last two within 2%, is a replicated optimum, so more whole-field experiments mostly repeat it; adopt the schedule across the farm now and keep one small test plot as an ongoing check.",
    explanation:
      "Top credit acts on a replicated optimum while keeping a cheap ongoing control; running every field as a perpetual experiment is the never-stop dodge that forfeits the known gain.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Before launch, a security team hired two independent penetration-testing firms. The second firm reported only vulnerabilities the first had already found. Management asks whether to hire a third firm before going live. Which lead is strongest?",
    mcOptions: [
      {
        text: "The second firm finding only the first's vulnerabilities suggests the easy attack surface is mapped, so a third firm is low-yield; patch the known issues and launch with a standing bug-bounty as ongoing coverage.",
        credit: 1.0,
      },
      {
        text: "Any system can eventually be hacked, so they should keep hiring new pen-test firms indefinitely and never launch.",
        credit: 0,
      },
      {
        text: "Two firms agreeing looks reassuring, so they could probably launch before long.",
        credit: 0.6,
      },
      {
        text: "The overlap seems like a good sign, so maybe go ahead.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the attack surface is mapped' lead from the rival 'a third firm would find new holes,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: stand up a bug-bounty for a short window after patching and watch whether outside researchers report anything beyond the known findings — silence confirms the surface is mapped. My lead is refuted if the bounty quickly surfaces fresh, serious vulnerabilities the two firms both missed, showing coverage was incomplete.",
      yieldAnchors: [
        "Two independent firms tested the system",
        "The second firm found only the first's vulnerabilities",
        "No new vulnerabilities in the second round",
      ],
      riskAnchors: [
        "A launch bug-bounty surfaces nothing new",
        "Patching the known issues holds up in production",
        "A third firm would mostly repeat the findings",
      ],
      defeatedBy: [
        "No system is ever secure enough to launch",
        "Two concordant firms reveal nothing about coverage",
      ],
    },
    correctAnswer:
      "The second firm finding only the first's vulnerabilities suggests the easy attack surface is mapped, so a third firm is low-yield; patch the known issues and launch with a standing bug-bounty as ongoing coverage.",
    explanation:
      "Top credit reads the overlap as coverage saturation and closes with continuous bounty coverage; serial firms forever before launch is the never-stop dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A teacher piloting a new method ran it in three classes and each showed a consistent 15-point gain over a control class. The district wants 10 more years of piloting before adopting it. Which lead is strongest?",
    mcOptions: [
      {
        text: "It can never be certain the method generalizes, so the district should pilot it indefinitely before ever adopting it.",
        credit: 0,
      },
      {
        text: "Three classes each showing a steady 15-point gain is a replicated effect strong enough to adopt now with ongoing monitoring; a decade of further piloting denies students a proven benefit for marginal extra certainty.",
        credit: 1.0,
      },
      {
        text: "The gains look real, so the district could probably adopt it soon.",
        credit: 0.6,
      },
      {
        text: "Three classes seems like decent evidence to act on.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the gain has replicated enough to adopt' lead from the rival 'more years are needed,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: adopt the method while tracking the same standardized scores against rolling control classes — a sustained gain confirms adoption was right at far lower cost than a decade of pure piloting. My lead is refuted if the gain collapses once the method scales beyond the three pilot classes, revealing the original effect was tied to those specific teachers.",
      yieldAnchors: [
        "Three classes each gained 15 points over control",
        "The gain was consistent across classes",
        "The effect has already replicated",
      ],
      riskAnchors: [
        "Scaled adoption keeps the 15-point gain",
        "Rolling control comparisons stay positive",
        "Monitoring catches any later regression",
      ],
      defeatedBy: [
        "The method must be piloted forever before adoption",
        "Three replicated classes prove nothing about generality",
      ],
    },
    correctAnswer:
      "Three classes each showing a steady 15-point gain is a replicated effect strong enough to adopt now with ongoing monitoring; a decade of further piloting denies students a proven benefit for marginal extra certainty.",
    explanation:
      "The winner adopts a replicated benefit while monitoring at scale; a decade of further piloting is the never-stop dodge that withholds a proven gain for negligible added certainty.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A café's head roaster is dialing in a new espresso. Over ten shots she adjusted the grind, and the last four shots at the same setting pulled within one second of her target time and tasted identical to her most experienced barista in a side-by-side. She is tempted to keep grinding finer and finer. In one paragraph, propose the strongest lead for whether to stop adjusting and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the shot has converged within the resolution of both the grinder's settings and the palate judging it: four shots clustered within a second of target and indistinguishable to a trained taster means further grind tweaks would change something no one can detect, so it is time to lock the setting and stop. This is the right place to close because the marginal information from another adjustment is essentially zero, while the cost of endless fiddling is real lost time and wasted beans. I would confirm it cheaply with a blind triangle test — pull the locked recipe twice and a slightly finer grind once, and have tasters pick the odd one out; if they can't, the difference is below perception and I stop, keeping the standing trigger that a new bean lot reopens the dial-in.",
      yieldAnchors: [
        "The last four shots pulled within a second of target",
        "They tasted identical to an experienced barista",
        "Ten shots of adjustment preceded the plateau",
      ],
      riskAnchors: [
        "A blind triangle test fails to distinguish finer grinds",
        "Repeat pulls stay within a second of target",
        "A new bean lot is the only thing that shifts the shot",
      ],
      defeatedBy: [
        "She should keep grinding finer forever to find a perfect shot",
        "Four matching shots prove nothing and she must start over",
        "The shot is fine, so no confirmation of any kind is needed",
      ],
    },
    correctAnswer:
      "The strongest lead is that the shot has converged within the resolution of both the grinder's settings and the palate judging it: four shots clustered within a second of target and indistinguishable to a trained taster means further grind tweaks would change something no one can detect, so it is time to lock the setting and stop. This is the right place to close because the marginal information from another adjustment is essentially zero, while the cost of endless fiddling is real lost time and wasted beans. I would confirm it cheaply with a blind triangle test — pull the locked recipe twice and a slightly finer grind once, and have tasters pick the odd one out; if they can't, the difference is below perception and I stop, keeping the standing trigger that a new bean lot reopens the dial-in.",
    explanation:
      "Under CCR the endless 'grind finer forever' refusal earns near-zero; top credit goes to the lead that reads the perception-floor convergence, closes inquiry, and names one cheap blind test plus a reopening trigger.",
  },
  {
    itemType: "written",
    prompt:
      "A developer pushed a hotfix for a crash that historically struck only at peak traffic. After deploying overnight, crash reports stayed at zero for two hours — but that window covered the app's lowest-traffic period. She wants to close the incident and go to bed. In one paragraph, propose the strongest lead for whether to close now and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that two quiet hours overnight cannot vindicate a fix for a bug that only appears under peak load, so closing now would be premature closure on a test that never exercised the failure condition. The constructive move is not to declare victory or to fret indefinitely, but to run the one cheap, decisive observation: hold the incident open through the next peak-traffic window and watch the crash dashboard. If crashes stay at zero across that peak — the very condition that used to trigger them — the fix is confirmed and I close with confidence; if even one recurs, the patch is wrong and the incident stays open. I would also set an automated alert that reopens the incident on any new crash of that signature, so closing the ticket does not blind us to a relapse.",
      yieldAnchors: [
        "Crash reports were zero for two hours",
        "The window was the lowest-traffic period",
        "The crash historically strikes only at peak traffic",
      ],
      riskAnchors: [
        "Crashes stay at zero across the next peak window",
        "An automated alert reopens on any matching crash",
        "The peak test reproduces the old trigger condition",
      ],
      defeatedBy: [
        "Two quiet hours prove the bug is fixed, so close it now",
        "No fix can ever be trusted, so the incident must stay open forever",
        "The fix can be judged without ever hitting peak load",
      ],
    },
    correctAnswer:
      "The strongest lead is that two quiet hours overnight cannot vindicate a fix for a bug that only appears under peak load, so closing now would be premature closure on a test that never exercised the failure condition. The constructive move is not to declare victory or to fret indefinitely, but to run the one cheap, decisive observation: hold the incident open through the next peak-traffic window and watch the crash dashboard. If crashes stay at zero across that peak — the very condition that used to trigger them — the fix is confirmed and I close with confidence; if even one recurs, the patch is wrong and the incident stays open. I would also set an automated alert that reopens the incident on any new crash of that signature, so closing the ticket does not blind us to a relapse.",
    explanation:
      "Closing after a test that could not have triggered the bug is premature closure and scores near-zero, as does the endless 'never trust any fix' refusal; top credit runs the one cheap test that actually probes the peak-load condition.",
  },
  {
    itemType: "written",
    prompt:
      "A buyer auditing a supplier samples each shipment for defects. Across four straight shipments the defect rate has held at 0.3%, well under the 1% contract spec, with little variation. A consultant urges switching to 100% inspection of every unit. In one paragraph, propose the strongest lead for whether to accept the sampling result or escalate, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that four shipments converging tightly at 0.3% against a 1% spec is a stable, comfortably-passing baseline, so escalating to 100% inspection would cost enormously while adding almost no information — the place to stop is here, with sampling plus a tripwire. Closing inquiry now is justified because the marginal defect that 100% inspection might catch is rare and well within the spec margin, whereas inspecting every unit is slow and expensive. I would keep the sampling plan but add a statistical control chart that escalates to tighter or full inspection only when a shipment crosses, say, 0.7%, and I would spot-audit one full shipment per quarter to confirm sampling isn't systematically undercounting; if a full audit ever shows a true rate far above the sample, the sampling assumption is refuted and the plan changes.",
      yieldAnchors: [
        "Four shipments held at a 0.3% defect rate",
        "The contract spec allows up to 1%",
        "Defect rate varied little across shipments",
      ],
      riskAnchors: [
        "A control chart escalates only above 0.7%",
        "A quarterly full audit matches the sampled rate",
        "Sampling does not systematically undercount defects",
      ],
      defeatedBy: [
        "Only 100% inspection of every unit is ever acceptable",
        "A stable under-spec rate tells us nothing useful",
        "The supplier can be cleared without any ongoing check",
      ],
    },
    correctAnswer:
      "The strongest lead is that four shipments converging tightly at 0.3% against a 1% spec is a stable, comfortably-passing baseline, so escalating to 100% inspection would cost enormously while adding almost no information — the place to stop is here, with sampling plus a tripwire. Closing inquiry now is justified because the marginal defect that 100% inspection might catch is rare and well within the spec margin, whereas inspecting every unit is slow and expensive. I would keep the sampling plan but add a statistical control chart that escalates to tighter or full inspection only when a shipment crosses, say, 0.7%, and I would spot-audit one full shipment per quarter to confirm sampling isn't systematically undercounting; if a full audit ever shows a true rate far above the sample, the sampling assumption is refuted and the plan changes.",
    explanation:
      "The 'only 100% inspection is acceptable' demand is the never-stop dodge that earns near-zero; top credit calibrates effort to a stable under-spec baseline and names an escalation tripwire plus a confirming spot-audit.",
  },
  {
    itemType: "written",
    prompt:
      "A researcher interviewing hospital nurses about burnout finds that interviews 18 through 22 produced no new themes — only restatements of patterns earlier interviews already established. Her funder will pay for 30 more interviews. In one paragraph, propose the strongest lead for whether to keep interviewing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the study has reached thematic saturation: five consecutive interviews adding no new themes means the marginal interview is now mostly echoing what she already knows, so the high-yield move is to stop around 22 and write up rather than spend 30 interviews confirming the obvious. Closing here is right because qualitative value comes from new themes, not raw counts, and the funder's money buys more insight redirected elsewhere. To make sure saturation is real and not an artifact of a narrow sample, I would deliberately run two or three more interviews targeting an under-represented subgroup — say night-shift or rural nurses — and check whether they surface genuinely new themes; if they don't, saturation holds and I stop, but if they do, the sample wasn't yet representative and inquiry reopens for that subgroup.",
      yieldAnchors: [
        "Interviews 18–22 produced no new themes",
        "Later interviews only restated established patterns",
        "The funder would pay for 30 more interviews",
      ],
      riskAnchors: [
        "A few targeted subgroup interviews add no new themes",
        "Coding shows the theme-discovery curve has flattened",
        "Under-represented shifts echo the existing patterns",
      ],
      defeatedBy: [
        "She must run all 30 funded interviews regardless of saturation",
        "Five themeless interviews prove nothing and she should keep going indefinitely",
        "She can stop without checking any under-sampled subgroup",
      ],
    },
    correctAnswer:
      "The strongest lead is that the study has reached thematic saturation: five consecutive interviews adding no new themes means the marginal interview is now mostly echoing what she already knows, so the high-yield move is to stop around 22 and write up rather than spend 30 interviews confirming the obvious. Closing here is right because qualitative value comes from new themes, not raw counts, and the funder's money buys more insight redirected elsewhere. To make sure saturation is real and not an artifact of a narrow sample, I would deliberately run two or three more interviews targeting an under-represented subgroup — say night-shift or rural nurses — and check whether they surface genuinely new themes; if they don't, saturation holds and I stop, but if they do, the sample wasn't yet representative and inquiry reopens for that subgroup.",
    explanation:
      "Both running all 30 interviews mechanically and interviewing forever are failure modes; top credit reads thematic saturation, closes inquiry, and names a cheap targeted check that could reopen it.",
  },
  {
    itemType: "written",
    prompt:
      "A baseball analyst is evaluating a hitter's new swing change. Over 150 plate appearances his average exit velocity is up a steady 3 mph, and the rolling average flattened after plate appearance 100. The manager wants to wait a full season before deciding whether to keep the change. In one paragraph, propose the strongest lead for whether the evidence is enough to commit and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that exit velocity is a stable, quick-to-stabilize metric and it has plateaued — a 3 mph gain holding flat from plate appearance 100 to 150 is a reliable signal, so the evidence is already enough to commit to keeping the swing change now rather than waiting a full season and risking the gain or the player's confidence. Closing here is justified because the rolling average stopped moving 50 plate appearances ago, meaning additional data is mostly confirming a settled estimate while delay carries real cost. I would commit to the change while monitoring the next 50 plate appearances as a cheap ongoing check: if exit velocity holds near the new level, the decision stands; if it regresses toward the old baseline, that is the pre-named trigger to revisit. Waiting an entire season would trade a small gain in certainty for a large opportunity cost.",
      yieldAnchors: [
        "Exit velocity is up a steady 3 mph",
        "The rolling average flattened after plate appearance 100",
        "150 plate appearances of data are in",
      ],
      riskAnchors: [
        "Exit velocity holds near the new level over the next 50 PAs",
        "The rolling average stays flat rather than drifting back",
        "Regression toward the old baseline is the reopening trigger",
      ],
      defeatedBy: [
        "He must wait a full season before trusting any change",
        "150 PAs with a flat curve prove nothing",
        "Three more good swings mean the change can never be undone",
      ],
    },
    correctAnswer:
      "The strongest lead is that exit velocity is a stable, quick-to-stabilize metric and it has plateaued — a 3 mph gain holding flat from plate appearance 100 to 150 is a reliable signal, so the evidence is already enough to commit to keeping the swing change now rather than waiting a full season and risking the gain or the player's confidence. Closing here is justified because the rolling average stopped moving 50 plate appearances ago, meaning additional data is mostly confirming a settled estimate while delay carries real cost. I would commit to the change while monitoring the next 50 plate appearances as a cheap ongoing check: if exit velocity holds near the new level, the decision stands; if it regresses toward the old baseline, that is the pre-named trigger to revisit. Waiting an entire season would trade a small gain in certainty for a large opportunity cost.",
    explanation:
      "Waiting a full season for a metric that stabilized 50 PAs ago is the never-stop dodge; top credit commits on the plateaued, reliable signal while naming a cheap monitoring check and a regression trigger.",
  },
];

export const section: SectionContent = {
  slug: "knowing-when-to-stop",
  title: "Knowing When to Stop",
  weekNumber: 4,
  blurb:
    "Inquiry has to close. The skill is reading the marginal-information curve — recognizing when more testing has flattened to near-zero yield and it is time to commit, while never closing before the data has actually decided.",
  lectureTitle:
    "4.7 Knowing When to Stop: closing inquiry without premature closure or endless doubt",
  body: `# Knowing When to Stop

Every inquiry faces a moment of decision: keep testing, or commit. Reflexive caution treats this as a trick question and answers "keep testing" forever — there is always one more check to run. Constructive Critical Reasoning treats stopping as a judgment you are obligated to make well: close inquiry when the next test would teach you almost nothing, and not a moment before the data has actually decided.

## The two cliffs

There are two ways to fail here, and they look like opposites. **Premature closure** stops too early — calling a noise-band lead a win, trusting a fix that was never stress-tested, judging a dish on one slow night. **Endless doubt** never stops — running tests until "nothing could ever fail," polling until the margin of error hits zero, piloting a proven method for another decade. Both are failures of the same skill. The constructive reasoner walks the ridge between them by watching one thing: how much each new test actually changes the picture.

## Watch the marginal-information curve

Early tests move your estimate a lot; later ones move it less. When three more builds find no new bugs, when the rolling average hasn't budged in 300 responses, when four loaves cluster within a point — the curve has flattened. Flatness is the signal to stop, because the cost of the next test now exceeds the information it returns. The question is never "could more testing conceivably help?" (it always could) but "is the expected yield of the next test worth its cost?"

## Saturation, replication, and the noise floor

Three concrete stop-signals recur. **Saturation**: new samples only repeat known findings — the fifteenth paper cites nothing new, the second proofreader finds no new errors. **Replication**: an effect holds across independent runs, sites, or seasons, so another repeat is largely redundant. **The noise floor**: you've hit the resolution of your instrument or your judges, so finer measurement changes something no one can detect. Any of these means added effort buys little.

## A stopping rule names its own reopening trigger

Stopping is not the same as deciding you can never be wrong. The strong move closes inquiry *and* arms a trigger: ship, but reopen the suite on any field crash; accept the sampling plan, but escalate if a batch crosses 0.7%; adopt the method, but monitor at scale. Naming the trigger is what lets you stop without recklessness — you commit to acting while staying ready to drop the conclusion if the world contradicts it.

## Why "we can never be sure" loses

The endless-doubt answer feels rigorous, but it is the zero-credit dodge: it converts a real decision into a refusal, paying unlimited cost for vanishing certainty while the gain you've already proven goes unclaimed. "Keep testing until nothing fails" names no stopping point at all, so it is not a method — it is paralysis dressed as caution.

## Overreach still loses

But stopping early is just as wrong. If the gap is inside the noise band, if the test never exercised the failure condition, if one slow Tuesday is your whole sample, then the cheap remaining test is high-yield and you must run it. Premature closure is not decisiveness; it is committing past what the data has actually shown.

## In the real world

A QA team faces a ship deadline. The dodge: "software can always hide a bug — keep testing." The premature error: "we're out of time, ship it." The constructive call reads the curve: three builds with zero new finds past test 1,800, a tail that has caught nothing in two years. That flatness says the next test is near-worthless — so ship after one cheap smoke test of the top flows, with a standing trigger that any field crash reopens the suite. That is knowing when to stop: not certainty, but the disciplined judgment that the evidence is now enough to act.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
