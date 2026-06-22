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
      "A clothing brand boasts its new ad campaign drove sales: revenue rose 20% the month it launched. But sales also rose 20% at competitors who ran no campaign, the launch fell on a seasonal holiday weekend, and click data shows the ad itself sent almost no traffic to the site. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Revenue jumped 20% the month the ad launched, so the campaign was a clear success.",
        credit: 0,
      },
      {
        text: "The industry-wide holiday surge, not the ad, likely drove the lift, since competitors rose equally and the ad sent almost no traffic; test whether the brand's gain beats the category benchmark, whether regions with heavier ad spend outperformed, and whether a holiday-adjusted baseline erases the bump.",
        credit: 1.0,
      },
      {
        text: "The ad probably didn't add much given competitors rose too; we could compare against the category next season.",
        credit: 0.6,
      },
      {
        text: "Sales went up around the campaign, so the campaign seems to have done something.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The industry-wide holiday surge, not the ad, likely drove the lift, since competitors rose equally and the ad sent almost no traffic; test whether the brand's gain beats the category benchmark, whether regions with heavier ad spend outperformed, and whether a holiday-adjusted baseline erases the bump.",
    explanation:
      "Top credit accounts for the inconvenient data — equal competitor gains and flat ad traffic — and names tests; the zero answer cherry-picks the flattering revenue figure and ignores everything that points the other way.",
  },
  {
    itemType: "mc",
    prompt:
      "A coach credits a new pre-game speech for a five-game win streak. But all five wins came against bottom-table teams, the team's shot-quality metrics were unchanged, and during the same window they lost their one match against a top side. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The streak likely reflects an easy schedule rather than the speech, since wins came only against weak teams, the lone strong opponent won, and underlying shot quality didn't move; test whether results against equal-strength opponents improve, whether shot-quality metrics rise going forward, and whether dropping the speech changes outcomes against weak teams.",
        credit: 1.0,
      },
      {
        text: "Five straight wins after the speech prove the speech is working.",
        credit: 0,
      },
      {
        text: "The easy schedule probably explains most of it; we could wait to see results against tougher teams.",
        credit: 0.6,
      },
      {
        text: "The team won a lot after the speech, so something positive seems to be happening.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The streak likely reflects an easy schedule rather than the speech, since wins came only against weak teams, the lone strong opponent won, and underlying shot quality didn't move; test whether results against equal-strength opponents improve, whether shot-quality metrics rise going forward, and whether dropping the speech changes outcomes against weak teams.",
    explanation:
      "The winning lead weighs the schedule, the loss, and the flat shot quality together; the zero option counts only the wins and discards the opponent strength that explains them.",
  },
  {
    itemType: "mc",
    prompt:
      "A blogger says her green-smoothie cleanse caused her eight-pound loss in two weeks. She also cut 600 daily calories, started walking 10,000 steps a day, and most of the drop came in the first week (the usual water-weight pattern). Which lead is strongest?",
    mcOptions: [
      {
        text: "She lost weight while doing the cleanse, so the cleanse seems involved.",
        credit: 0.3,
      },
      {
        text: "The calorie cut and new walking, plus early water-weight loss, likely explain the drop rather than the smoothie itself; test whether people who add the smoothie without cutting calories lose weight, whether the loss continues past the water-weight week, and whether matched dieters with no smoothie lose the same.",
        credit: 1.0,
      },
      {
        text: "She lost eight pounds on the cleanse, so the cleanse caused the loss.",
        credit: 0,
      },
      {
        text: "The calorie cut and walking probably did most of the work; we could test the smoothie alone later.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The calorie cut and new walking, plus early water-weight loss, likely explain the drop rather than the smoothie itself; test whether people who add the smoothie without cutting calories lose weight, whether the loss continues past the water-weight week, and whether matched dieters with no smoothie lose the same.",
    explanation:
      "The strong lead binds the calorie cut, the walking, and the water-weight timing; the zero answer isolates the cleanse and ignores the three confounds sitting in plain sight.",
  },
  {
    itemType: "mc",
    prompt:
      "A manager argues remote work tanked productivity: total tickets closed fell 15% after the team went remote. But headcount also fell 15% from attrition, the remaining staff inherited a harder backlog, and per-person output actually rose. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Tickets dropped 15% after remote work, so remote work hurt productivity.",
        credit: 0,
      },
      {
        text: "Tickets fell around the remote switch, so remote work might be a factor.",
        credit: 0.3,
      },
      {
        text: "Per-person output rose while headcount fell 15%, so the ticket drop reflects fewer people on a harder backlog, not remote work; test whether per-capita throughput held or rose, whether ticket difficulty increased, and whether refilling headcount restores total volume.",
        credit: 1.0,
      },
      {
        text: "The smaller team probably explains the drop; we could normalize by headcount next quarter.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Per-person output rose while headcount fell 15%, so the ticket drop reflects fewer people on a harder backlog, not remote work; test whether per-capita throughput held or rose, whether ticket difficulty increased, and whether refilling headcount restores total volume.",
    explanation:
      "The top lead incorporates the headcount drop and rising per-person output; the zero answer reads only the headline total and suppresses the data that reverse its meaning.",
  },
  {
    itemType: "mc",
    prompt:
      "A teacher claims her new reading app raised test scores: her class averaged 85, up from 78. But she also began after-school tutoring, this year's test was easier (school-wide scores rose six points), and usage logs show half her class never opened the app. Which lead is strongest?",
    mcOptions: [
      {
        text: "The easier test and new tutoring, plus half the class never using the app, point away from the app as the cause; test whether app-users outscored non-users in her class, whether her gain beats the school-wide six-point rise, and whether tutored-only students improved just as much.",
        credit: 1.0,
      },
      {
        text: "Her class average rose seven points with the app, so the app raised scores.",
        credit: 0,
      },
      {
        text: "The easier test and tutoring probably account for most of it; we could compare app-users to non-users.",
        credit: 0.6,
      },
      {
        text: "Scores went up while the app was in use, so the app seems to help.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The easier test and new tutoring, plus half the class never using the app, point away from the app as the cause; test whether app-users outscored non-users in her class, whether her gain beats the school-wide six-point rise, and whether tutored-only students improved just as much.",
    explanation:
      "The strong answer faces the easier test, the tutoring, and the non-users; the zero option keeps only the seven-point gain and drops the evidence that the app may have done nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "An e-commerce founder says free shipping boosted conversion from 2% to 3% after launch. But the company also cut prices 10%, ran a TV spot the same week, and conversion on items excluded from free shipping rose just as much. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Conversion rose after free shipping, so free shipping seems to matter.",
        credit: 0.3,
      },
      {
        text: "Items excluded from free shipping rose just as much while prices were cut and a TV spot aired, so the broader promotion — not free shipping specifically — likely drove conversion; test whether free-shipping items beat excluded items, whether TV-spot regions converted more, and whether conversion holds when only shipping changes.",
        credit: 1.0,
      },
      {
        text: "Conversion went from 2% to 3% when free shipping launched, so free shipping caused it.",
        credit: 0,
      },
      {
        text: "The price cut and TV spot probably did most of the lift; we could isolate shipping in a clean test.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Items excluded from free shipping rose just as much while prices were cut and a TV spot aired, so the broader promotion — not free shipping specifically — likely drove conversion; test whether free-shipping items beat excluded items, whether TV-spot regions converted more, and whether conversion holds when only shipping changes.",
    explanation:
      "Top credit uses the excluded-items datum that the cherry-pick omits; the zero answer credits free shipping while ignoring the simultaneous price cut, TV spot, and matching rise on excluded items.",
  },
  {
    itemType: "mc",
    prompt:
      "A gardener insists a new fertilizer doubled her tomato yield. But she also moved the plants to a sunnier bed, it rained more this summer, and her untreated pepper plants in the same bed also yielded far more. Which lead is strongest?",
    mcOptions: [
      {
        text: "The untreated peppers in the same bed also surged, and there was more sun and rain, so bed and weather likely explain the yield rather than fertilizer; test whether fertilized and unfertilized tomatoes in the same bed differ, whether last year's bed with fertilizer matches, and whether the pepper boost tracks the tomato boost.",
        credit: 1.0,
      },
      {
        text: "The sunnier bed and extra rain probably explain most of it; we could run a side-by-side fertilizer trial.",
        credit: 0.6,
      },
      {
        text: "Yield doubled after she used the fertilizer, so the fertilizer doubled it.",
        credit: 0,
      },
      {
        text: "The tomatoes did better with the fertilizer, so it seems to have worked.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The untreated peppers in the same bed also surged, and there was more sun and rain, so bed and weather likely explain the yield rather than fertilizer; test whether fertilized and unfertilized tomatoes in the same bed differ, whether last year's bed with fertilizer matches, and whether the pepper boost tracks the tomato boost.",
    explanation:
      "The untreated peppers are the inconvenient datum that decides the case; the zero answer counts only the treated tomatoes and discards the sun, rain, and pepper evidence.",
  },
  {
    itemType: "mc",
    prompt:
      "A city says new speed cameras cut crashes 30% at monitored intersections. But crashes fell 28% citywide including on uncameraed roads, the year had record-low rainfall, and a major commuter route closed, thinning traffic everywhere. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Crashes dropped 30% at camera intersections, so the cameras cut crashes.",
        credit: 0,
      },
      {
        text: "Crashes fell almost as much citywide where there are no cameras, amid record-dry weather and a big route closure, so the cameras likely added little beyond the general drop; test whether camera intersections beat the citywide trend, whether the dry-year baseline accounts for it, and whether crashes rebound when traffic returns.",
        credit: 1.0,
      },
      {
        text: "Crashes fell where cameras were installed, so cameras seem to help.",
        credit: 0.3,
      },
      {
        text: "The citywide drop and weather probably explain most of it; we could compare cameras against matched control intersections.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Crashes fell almost as much citywide where there are no cameras, amid record-dry weather and a big route closure, so the cameras likely added little beyond the general drop; test whether camera intersections beat the citywide trend, whether the dry-year baseline accounts for it, and whether crashes rebound when traffic returns.",
    explanation:
      "The strong lead nets out the near-identical citywide drop, the dry year, and the closure; the zero answer compares the cameras only to their own before-figure and ignores the matching trend everywhere else.",
  },
  {
    itemType: "mc",
    prompt:
      "A startup says its referral program is the growth engine: 40% of new users arrived via referral links. But signups did not accelerate when the program launched, those links were also embedded in a paid newsletter, and referred users churn faster than average. Which lead is strongest?",
    mcOptions: [
      {
        text: "Growth didn't accelerate at launch, the links rode a paid newsletter, and referred users churn faster, so referrals likely relabel paid-channel signups rather than drive net growth; test whether the growth rate changed at launch, whether tagging newsletter clicks separately shrinks the referral share, and whether genuine peer referrals retain better.",
        credit: 1.0,
      },
      {
        text: "A big share of users came through referral links, so referrals seem important.",
        credit: 0.3,
      },
      {
        text: "The paid newsletter probably accounts for much of the referral share; we could separate the channels.",
        credit: 0.6,
      },
      {
        text: "40% of new users came via referrals, so the referral program drives growth.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Growth didn't accelerate at launch, the links rode a paid newsletter, and referred users churn faster, so referrals likely relabel paid-channel signups rather than drive net growth; test whether the growth rate changed at launch, whether tagging newsletter clicks separately shrinks the referral share, and whether genuine peer referrals retain better.",
    explanation:
      "Top credit confronts the flat launch curve, the newsletter overlap, and the worse churn; the zero answer trumpets the 40% share and buries the three facts that gut it.",
  },
  {
    itemType: "mc",
    prompt:
      "A pundit claims a tax cut grew the economy: GDP rose 3% the year after. But the global economy also grew 3%, oil prices fell sharply that year, and business investment — the channel the cut was meant to spur — stayed flat. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The global growth and cheap oil probably explain most of it; we could compare against peer economies.",
        credit: 0.6,
      },
      {
        text: "GDP matched global growth amid an oil windfall while the targeted business investment stayed flat, so the cut likely added little; test whether domestic growth exceeded peer economies, whether investment moved in the cut-affected sectors, and whether an oil-adjusted baseline erases the gain.",
        credit: 1.0,
      },
      {
        text: "GDP rose 3% after the tax cut, so the tax cut grew the economy.",
        credit: 0,
      },
      {
        text: "The economy grew after the cut, so the cut seems to have helped.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "GDP matched global growth amid an oil windfall while the targeted business investment stayed flat, so the cut likely added little; test whether domestic growth exceeded peer economies, whether investment moved in the cut-affected sectors, and whether an oil-adjusted baseline erases the gain.",
    explanation:
      "The winning lead weighs the matching global growth, the oil windfall, and the flat investment together; the zero answer keeps only the 3% headline and ignores the cut's own dead channel.",
  },
  {
    itemType: "mc",
    prompt:
      "A trainer says his protein supplement built his client's muscle: she gained six pounds of muscle in twelve weeks. But she also started lifting heavy for the first time, doubled her total food intake, and a comparison client taking no supplement gained the same amount. Which lead is strongest?",
    mcOptions: [
      {
        text: "She gained six pounds of muscle while taking the supplement, so the supplement built it.",
        credit: 0,
      },
      {
        text: "A no-supplement client gained the same while she began heavy lifting and doubled her eating, so training and total intake likely explain the gain, not the supplement; test whether supplement and placebo clients differ at matched training, whether intake alone predicts gains, and whether stopping the supplement changes the trajectory.",
        credit: 1.0,
      },
      {
        text: "The new lifting and extra food probably did the work; we could run a placebo comparison.",
        credit: 0.6,
      },
      {
        text: "She built muscle on the supplement, so it seems to contribute.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "A no-supplement client gained the same while she began heavy lifting and doubled her eating, so training and total intake likely explain the gain, not the supplement; test whether supplement and placebo clients differ at matched training, whether intake alone predicts gains, and whether stopping the supplement changes the trajectory.",
    explanation:
      "The matched no-supplement client is the decisive datum; the zero answer credits the supplement and ignores the equal-gaining control plus the new training and doubled diet.",
  },
  {
    itemType: "mc",
    prompt:
      "A principal says smaller classes raised graduation rates, which hit 92% after the change. But the district lifted graduation everywhere by easing requirements, the school also added counselors, and within the school the smallest classes graduated no better than the largest. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The smallest classes did no better than the largest, requirements changed district-wide, and counselors were added, so class size is likely not the driver; test whether rates correlate with class size within the school, whether the school beat the district trend, and whether counselor caseload predicts graduation.",
        credit: 1.0,
      },
      {
        text: "Graduation rose after classes shrank, so smaller classes seem to help.",
        credit: 0.3,
      },
      {
        text: "The district-wide requirement change probably explains most of it; we could compare to peer districts.",
        credit: 0.6,
      },
      {
        text: "Graduation hit 92% after classes shrank, so smaller classes raised it.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The smallest classes did no better than the largest, requirements changed district-wide, and counselors were added, so class size is likely not the driver; test whether rates correlate with class size within the school, whether the school beat the district trend, and whether counselor caseload predicts graduation.",
    explanation:
      "The within-school non-correlation directly defeats the class-size story; the zero answer ignores it along with the district change and the added counselors.",
  },
  {
    itemType: "mc",
    prompt:
      "A restaurant owner credits a celebrity visit for a record month. But the visit fell the same week as a food festival next door, every nearby restaurant set records too, and bookings traceable to the celebrity's social post were negligible. Which lead is strongest?",
    mcOptions: [
      {
        text: "The neighboring food festival probably explains most of it; we could compare to non-festival months.",
        credit: 0.6,
      },
      {
        text: "Every nearby restaurant set records during a festival next door while the celebrity's post drove negligible bookings, so festival foot traffic likely drove the month; test whether this restaurant beat the block average, whether bookings traced to the post, and whether records vanish in a festival-free month.",
        credit: 1.0,
      },
      {
        text: "Business was great around the visit, so the visit seems to have mattered.",
        credit: 0.3,
      },
      {
        text: "It was a record month right after the celebrity visit, so the visit caused it.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Every nearby restaurant set records during a festival next door while the celebrity's post drove negligible bookings, so festival foot traffic likely drove the month; test whether this restaurant beat the block average, whether bookings traced to the post, and whether records vanish in a festival-free month.",
    explanation:
      "The strong lead absorbs the block-wide records and the dead post; the zero answer fixes on the visit and discards the festival that lifted everyone equally.",
  },
  {
    itemType: "mc",
    prompt:
      "An analyst says a stock-picking newsletter beats the market: its picks rose 25% last year. But the index rose 24%, the newsletter quietly dropped its losing picks from the published tally, and the few picks it held for the full year underperformed. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The newsletter's picks rose 25%, so it beats the market.",
        credit: 0,
      },
      {
        text: "With losers dropped from the tally, full-year holds underperforming, and the index up 24%, the newsletter likely does not beat the market once every pick counts; test whether including the dropped picks pulls the return below 24%, whether audited full-period holds beat the index, and whether next year's picks beat a matched fund.",
        credit: 1.0,
      },
      {
        text: "Its picks went up a lot, so the newsletter seems skilled.",
        credit: 0.3,
      },
      {
        text: "Counting only the kept picks probably inflates it; we could audit the full pick list.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "With losers dropped from the tally, full-year holds underperforming, and the index up 24%, the newsletter likely does not beat the market once every pick counts; test whether including the dropped picks pulls the return below 24%, whether audited full-period holds beat the index, and whether next year's picks beat a matched fund.",
    explanation:
      "The dropped losers are exactly the omitted evidence total-evidence reasoning demands; the zero answer accepts the curated 25% and the near-identical index return is ignored too.",
  },
  {
    itemType: "mc",
    prompt:
      "A parent says a tutoring program fixed her son's math, which rose from a C to an A. But he also switched to an easier teacher mid-year, joined a study group, and his unrelated history grade rose just as much. Which lead is strongest?",
    mcOptions: [
      {
        text: "His untutored history grade rose just as much, and he changed teachers and joined a study group, so a broader change in habits or grading likely lifted both, not math tutoring alone; test whether tutored subjects rose more than untutored ones, whether the new teacher grades more leniently, and whether dropping the study group affects grades.",
        credit: 1.0,
      },
      {
        text: "The study group and easier teacher probably explain much of it; we could compare tutored and untutored subjects.",
        credit: 0.6,
      },
      {
        text: "His math grade went from C to A during tutoring, so tutoring fixed it.",
        credit: 0,
      },
      {
        text: "His grades improved while being tutored, so tutoring seems to help.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "His untutored history grade rose just as much, and he changed teachers and joined a study group, so a broader change in habits or grading likely lifted both, not math tutoring alone; test whether tutored subjects rose more than untutored ones, whether the new teacher grades more leniently, and whether dropping the study group affects grades.",
    explanation:
      "The parallel rise in the untutored subject is the inconvenient evidence that reframes the case; the zero answer credits tutoring and ignores the teacher swap, study group, and history grade.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A drug rep says a new painkiller works: 70% of trial patients improved. But the placebo group also improved 68%, all outcomes were self-reported, and the drug arm started with milder baseline pain. Which lead is strongest?",
    mcOptions: [
      {
        text: "With placebo improving 68%, self-reported outcomes, and milder baseline pain in the drug arm, the drug likely adds little beyond placebo; test whether the drug beats placebo on an objective measure, whether matching baseline pain erases the gap, and whether blinded raters still see a difference.",
        credit: 1.0,
      },
      {
        text: "Most patients improved on the drug, so the drug seems effective.",
        credit: 0.3,
      },
      {
        text: "The placebo response probably accounts for most of it; we could rerun with objective measures.",
        credit: 0.6,
      },
      {
        text: "70% improved on the drug, so the drug works.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'no benefit beyond placebo' lead from the rival 'the drug genuinely works,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare the drug and placebo arms on an objective marker (e.g., rescue-medication use or grip-strength) after matching baseline pain — my lead predicts no meaningful gap. It is refuted if the drug arm shows a clear objective advantage once baseline pain is equalized, meaning the effect is real rather than placebo plus a softer starting point.",
      yieldAnchors: [
        "70% improved on the drug",
        "Placebo improved 68%",
        "Outcomes self-reported and drug arm had milder baseline pain",
      ],
      riskAnchors: [
        "Drug beats placebo on an objective measure",
        "Matching baseline pain erases the gap",
        "Blinded raters still see a difference",
      ],
      defeatedBy: [
        "70% improvement alone proves the drug works",
        "Placebo and baseline differences can be ignored",
      ],
    },
    correctAnswer:
      "With placebo improving 68%, self-reported outcomes, and milder baseline pain in the drug arm, the drug likely adds little beyond placebo; test whether the drug beats placebo on an objective measure, whether matching baseline pain erases the gap, and whether blinded raters still see a difference.",
    explanation:
      "Full credit weighs the placebo arm and the baseline imbalance, then names a matched objective test that could refute it; the zero option cites the 70% figure and ignores the near-equal placebo response.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A social-media manager says a viral post built the brand: it drew two million views. But sales were flat that week, 90% of viewers were outside the product's only market, and follower count barely moved. Which lead is strongest?",
    mcOptions: [
      {
        text: "The post hit two million views, so it built the brand.",
        credit: 0,
      },
      {
        text: "Sales stayed flat, most viewers were out-of-market, and followers barely moved, so the views likely didn't translate into brand impact; test whether in-market viewers converted at all, whether follower growth tracks the post, and whether sales move when a similar post is targeted to the home market.",
        credit: 1.0,
      },
      {
        text: "The out-of-market audience probably blunted the impact; we could target the next post locally.",
        credit: 0.6,
      },
      {
        text: "The post got huge reach, so it seems to have helped the brand.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'reach without impact' lead from the rival 'the viral post built the brand,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: segment the two million views by country and check conversions and follows among the in-market 10% — my lead predicts negligible movement even there. It is refuted if in-market viewers converted or followed at a strong rate, showing the post did build brand among the audience that matters.",
      yieldAnchors: [
        "Post drew two million views",
        "Sales flat and 90% of viewers out-of-market",
        "Follower count barely moved",
      ],
      riskAnchors: [
        "In-market viewers converted at a meaningful rate",
        "Follower growth tracks the post",
        "A locally targeted post moves sales",
      ],
      defeatedBy: [
        "View count alone proves brand impact",
        "Flat sales and out-of-market reach can be dismissed",
      ],
    },
    correctAnswer:
      "Sales stayed flat, most viewers were out-of-market, and followers barely moved, so the views likely didn't translate into brand impact; test whether in-market viewers converted at all, whether follower growth tracks the post, and whether sales move when a similar post is targeted to the home market.",
    explanation:
      "The strong lead accounts for the flat sales, the foreign audience, and the static followers; the zero answer celebrates raw reach and omits every downstream metric.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A farmer says crop rotation raised his yield 15%. But neighbors who ran no rotation also rose about 15% in an unusually wet year, his rotated field got new irrigation this season, and his one non-rotated field rose by the same amount. Which lead is strongest?",
    mcOptions: [
      {
        text: "His own non-rotated field rose just as much, amid a region-wide wet year and new irrigation, so water and weather likely explain the lift rather than rotation; test whether rotated and non-rotated fields differ at equal water, whether the wet-year baseline accounts for it, and whether rotation alone helps in a dry year.",
        credit: 1.0,
      },
      {
        text: "His yield rose 15% after he rotated, so rotation raised it.",
        credit: 0,
      },
      {
        text: "The wet year and new irrigation probably explain most of it; we could run a controlled rotation trial.",
        credit: 0.6,
      },
      {
        text: "The rotated field did better, so rotation seems to work.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'water and weather' lead from the rival 'rotation raised the yield,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare the rotated and non-rotated fields under the same irrigation next season — my lead predicts they end up close. It is refuted if the rotated field clearly out-yields the non-rotated one at equal water, isolating rotation as the cause.",
      yieldAnchors: [
        "Rotated yield up 15%",
        "Neighbors and the non-rotated field rose about the same in a wet year",
        "Rotated field also got new irrigation",
      ],
      riskAnchors: [
        "Rotated and non-rotated fields differ at equal water",
        "The wet-year baseline accounts for the gain",
        "Rotation helps even in a dry year",
      ],
      defeatedBy: [
        "The 15% rise alone proves rotation works",
        "The matching non-rotated field can be ignored",
      ],
    },
    correctAnswer:
      "His own non-rotated field rose just as much, amid a region-wide wet year and new irrigation, so water and weather likely explain the lift rather than rotation; test whether rotated and non-rotated fields differ at equal water, whether the wet-year baseline accounts for it, and whether rotation alone helps in a dry year.",
    explanation:
      "The matching non-rotated field is the omitted datum that decides it; the zero answer cites the 15% and ignores the wet year, the irrigation, and the control field.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A bank says its new fraud-detection AI cut losses 40%. But card-fraud losses fell 38% industry-wide after a new chip standard, the bank also added a manual review team, and the AI's logs show it caught few cases manual review missed. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Industry losses fell 38% from the new chip standard while manual review was added and the AI caught few unique cases, so the AI likely contributed little; test whether the bank beat the industry drop, whether AI-only catches exceed manual review, and whether removing the AI changes losses.",
        credit: 1.0,
      },
      {
        text: "Losses dropped 40% after the AI launched, so the AI cut fraud.",
        credit: 0,
      },
      {
        text: "The chip standard probably explains most of the drop; we could compare the bank to the industry.",
        credit: 0.6,
      },
      {
        text: "Fraud fell once the AI was running, so the AI seems to help.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'AI added little' lead from the rival 'the AI cut fraud,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: tally the cases the AI caught that manual review would have missed and compare the bank's 40% to the 38% industry drop — my lead predicts the unique AI contribution is tiny. It is refuted if the AI uniquely caught a large block of losses and the bank's drop clearly exceeds the industry's, showing real added value.",
      yieldAnchors: [
        "Bank losses down 40%",
        "Industry down 38% after a chip standard",
        "Manual review added; AI caught few unique cases",
      ],
      riskAnchors: [
        "The bank beat the industry drop",
        "AI-only catches exceed manual review",
        "Removing the AI changes losses",
      ],
      defeatedBy: [
        "The 40% drop alone proves the AI worked",
        "The industry trend and manual team can be ignored",
      ],
    },
    correctAnswer:
      "Industry losses fell 38% from the new chip standard while manual review was added and the AI caught few unique cases, so the AI likely contributed little; test whether the bank beat the industry drop, whether AI-only catches exceed manual review, and whether removing the AI changes losses.",
    explanation:
      "Top credit weighs the industry drop, the manual team, and the thin unique catch rate; the zero answer keeps only the 40% and ignores the near-identical industry baseline.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A professor says his lecture style boosts learning: students rate the course 4.8 out of 5. But the high ratings track his unusually lenient grading, his sections' exam scores match every other section, and students who skipped his lectures scored the same as those who attended. Which lead is strongest?",
    mcOptions: [
      {
        text: "Exam scores match other sections and lecture-skippers scored the same, while the high ratings track lenient grading, so the style likely doesn't boost learning; test whether his exam scores beat other sections at equal difficulty, whether attendance predicts scores, and whether blind-graded exams hold the pattern.",
        credit: 1.0,
      },
      {
        text: "Students rate the course 4.8, so his lecture style boosts learning.",
        credit: 0,
      },
      {
        text: "The lenient grading probably inflates the ratings; we could compare exam scores across sections.",
        credit: 0.6,
      },
      {
        text: "Students love the course, so his style seems to be working.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'ratings, not learning' lead from the rival 'his style boosts learning,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare his section's blind-graded exam scores to other sections and check whether attendance predicts scores within his class — my lead predicts no learning edge. It is refuted if his students out-score other sections on identical blind-graded exams and attendees clearly beat skippers, showing real learning gains.",
      yieldAnchors: [
        "Course rated 4.8 out of 5",
        "Exam scores match other sections",
        "Lecture-skippers scored the same; ratings track lenient grading",
      ],
      riskAnchors: [
        "His exam scores beat other sections at equal difficulty",
        "Attendance predicts scores",
        "Blind-graded exams hold the pattern",
      ],
      defeatedBy: [
        "High ratings alone prove better learning",
        "Equal exam scores and the skipper data can be ignored",
      ],
    },
    correctAnswer:
      "Exam scores match other sections and lecture-skippers scored the same, while the high ratings track lenient grading, so the style likely doesn't boost learning; test whether his exam scores beat other sections at equal difficulty, whether attendance predicts scores, and whether blind-graded exams hold the pattern.",
    explanation:
      "The strong lead binds the equal exam scores and the indifferent skippers; the zero answer leans on satisfaction ratings and ignores the learning measures that contradict them.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A runner says new carbon-plate shoes cut her marathon time by eight minutes. But she also trained six extra months, this year's course was flatter so the whole field ran faster, and her training-run pace in the old shoes had already improved. Which conclusion best follows?",
    mcOptions: [
      {
        text: "A flatter course sped the whole field, she trained six more months, and her old-shoe training pace already improved, so the shoes likely aren't the main cause; test whether her improvement beats the field's course-adjusted average, whether old-shoe time trials match, and whether the shoes help at equal fitness.",
        credit: 1.0,
      },
      {
        text: "She ran eight minutes faster in the new shoes, so the shoes cut her time.",
        credit: 0,
      },
      {
        text: "The flatter course and extra training probably explain most of it; we could test the shoes at equal fitness.",
        credit: 0.6,
      },
      {
        text: "She improved with the new shoes, so they seem to help.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'training and course' lead from the rival 'the shoes cut her time,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare her time drop to the field's average drop on the flatter course and run a same-day old-versus-new shoe time trial at current fitness — my lead predicts most of the gain is course and training. It is refuted if she gained far more than the field and the new shoes clearly beat the old in a matched trial.",
      yieldAnchors: [
        "Time cut by eight minutes",
        "Flatter course sped the whole field; six extra months of training",
        "Old-shoe training pace already improved",
      ],
      riskAnchors: [
        "Her gain beats the field's course-adjusted average",
        "Old-shoe time trials match the new shoes",
        "The shoes help at equal fitness",
      ],
      defeatedBy: [
        "The eight-minute drop alone proves the shoes worked",
        "The course and training improvements can be ignored",
      ],
    },
    correctAnswer:
      "A flatter course sped the whole field, she trained six more months, and her old-shoe training pace already improved, so the shoes likely aren't the main cause; test whether her improvement beats the field's course-adjusted average, whether old-shoe time trials match, and whether the shoes help at equal fitness.",
    explanation:
      "Full credit nets out the flatter course, the extra training, and the prior old-shoe gains; the zero answer credits the shoes and ignores everything else that changed.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A SaaS team says a UI redesign raised engagement 25%. But it shipped the same week as a new onboarding email sequence, only the most active power users got it first, and engagement rose just as much among users who never received the redesign. Which lead is strongest?",
    mcOptions: [
      {
        text: "Engagement rose just as much among users who never saw the redesign, it shipped with new onboarding emails, and power users were sampled first, so the redesign likely isn't the driver; test whether redesigned and non-redesigned cohorts differ, whether the email alone lifts engagement, and whether matching for user type erases the gap.",
        credit: 1.0,
      },
      {
        text: "Engagement rose 25% after the redesign, so the redesign raised it.",
        credit: 0,
      },
      {
        text: "The onboarding email probably accounts for much of it; we could test the redesign on its own.",
        credit: 0.6,
      },
      {
        text: "Engagement went up with the redesign, so it seems to work.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'not the redesign' lead from the rival 'the redesign raised engagement,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare engagement between matched users who did and didn't receive the redesign, holding the onboarding email constant — my lead predicts little difference. It is refuted if redesigned users clearly out-engage matched non-redesigned users with the email held fixed, isolating the redesign.",
      yieldAnchors: [
        "Engagement up 25%",
        "New onboarding email shipped the same week; power users got the redesign first",
        "Non-recipients of the redesign rose just as much",
      ],
      riskAnchors: [
        "Redesigned and non-redesigned cohorts differ",
        "The email alone lifts engagement",
        "Matching for user type erases the gap",
      ],
      defeatedBy: [
        "The 25% rise alone proves the redesign worked",
        "The email and the non-recipient rise can be ignored",
      ],
    },
    correctAnswer:
      "Engagement rose just as much among users who never saw the redesign, it shipped with new onboarding emails, and power users were sampled first, so the redesign likely isn't the driver; test whether redesigned and non-redesigned cohorts differ, whether the email alone lifts engagement, and whether matching for user type erases the gap.",
    explanation:
      "The rise among non-recipients is the inconvenient datum the cherry-pick drops; top credit also weighs the email and the biased rollout.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A mayor says a city jobs program cut unemployment from 8% to 5%. But national unemployment fell by the same amount, a large factory opened independently that year, and the program's graduates were hired at the same rate as non-participants. Which conclusion best follows?",
    mcOptions: [
      {
        text: "National unemployment fell equally, a factory opened on its own, and graduates were hired no more than non-participants, so the program likely added little; test whether the city beat the national trend, whether graduates out-hire matched non-participants, and whether unemployment tracks the factory's hiring.",
        credit: 1.0,
      },
      {
        text: "Unemployment dropped from 8% to 5% after the program, so the program cut it.",
        credit: 0,
      },
      {
        text: "The national trend and the new factory probably explain most of it; we could compare the city to the nation.",
        credit: 0.6,
      },
      {
        text: "Joblessness fell while the program ran, so the program seems to help.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'program added little' lead from the rival 'the program cut unemployment,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare the city's drop to the national drop and compare graduates' hire rate to matched non-participants — my lead predicts the city merely matched the nation and graduates gained no edge. It is refuted if the city clearly out-performed the national trend and graduates were hired far more than comparable non-participants.",
      yieldAnchors: [
        "Unemployment fell from 8% to 5%",
        "National unemployment fell the same; a factory opened independently",
        "Graduates hired at the same rate as non-participants",
      ],
      riskAnchors: [
        "The city beat the national trend",
        "Graduates out-hire matched non-participants",
        "Unemployment tracks the factory's hiring",
      ],
      defeatedBy: [
        "The three-point drop alone proves the program worked",
        "The national trend and factory can be ignored",
      ],
    },
    correctAnswer:
      "National unemployment fell equally, a factory opened on its own, and graduates were hired no more than non-participants, so the program likely added little; test whether the city beat the national trend, whether graduates out-hire matched non-participants, and whether unemployment tracks the factory's hiring.",
    explanation:
      "The matched national drop and the indifferent graduate hire rate are the decisive omitted facts; the zero answer keeps only the local headline.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A skincare brand says its serum cleared acne: 80% of users reported improvement in eight weeks. But acne commonly improves on its own over an eight-week stretch, users also received a free cleanser and diet advice, and a no-serum comparison group improved 75%. Which lead is strongest?",
    mcOptions: [
      {
        text: "A no-serum comparison group improved 75% amid natural eight-week clearing and added cleanser and diet advice, so the serum likely adds little; test whether the serum beats the comparison group, whether removing the cleanser and advice changes results, and whether users improve even off-season.",
        credit: 1.0,
      },
      {
        text: "80% improved on the serum, so the serum cleared their acne.",
        credit: 0,
      },
      {
        text: "The free cleanser and natural clearing probably explain most of it; we could compare serum to no serum.",
        credit: 0.6,
      },
      {
        text: "Skin improved while using the serum, so it seems to work.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'serum adds little' lead from the rival 'the serum cleared the acne,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare the serum users' 80% to the no-serum group's 75% with the cleanser and advice held equal — my lead predicts the gap is small. It is refuted if serum users clearly out-improve the comparison group once cleanser and advice are matched, showing a real serum effect.",
      yieldAnchors: [
        "80% of serum users improved",
        "No-serum group improved 75% over eight weeks of natural clearing",
        "Users also got a free cleanser and diet advice",
      ],
      riskAnchors: [
        "Serum beats the comparison group",
        "Removing the cleanser and advice changes results",
        "Users improve even off-season",
      ],
      defeatedBy: [
        "The 80% figure alone proves the serum worked",
        "The 75% comparison group and natural clearing can be ignored",
      ],
    },
    correctAnswer:
      "A no-serum comparison group improved 75% amid natural eight-week clearing and added cleanser and diet advice, so the serum likely adds little; test whether the serum beats the comparison group, whether removing the cleanser and advice changes results, and whether users improve even off-season.",
    explanation:
      "The 75% comparison group is the inconvenient evidence that nearly closes the gap; top credit also weighs natural clearing and the extra products, while the zero option keeps only the 80%.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A regional sales director claims her new bonus scheme lifted the team's quarterly revenue, which rose 18%. But the whole industry had a strong quarter, with peer firms up 16%; her team onboarded two senior hires that quarter; a long-planned contract with a major client finally closed; and reps who opted out of the bonus scheme hit their numbers just as well as those who opted in. In one paragraph, propose the strongest lead for the revenue rise and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the 18% reflects an industry tailwind (peers up 16%) plus two one-off boosts — the two senior hires' incoming books and the large client contract — rather than the bonus scheme, which the opt-out reps' equal performance further undercuts. This lead binds all the evidence: it accounts for the near-matching peer growth, the new hires, the one-time contract, and the indifference of bonus participation. I would test it by comparing the team's growth against the peer benchmark (expecting only a few points of excess), by stripping the one-time contract and the new hires' existing pipelines to see whether organic growth remains, and by comparing the quarter-over-quarter growth of opt-in reps against opt-out reps; if the bonus mattered, opt-ins should clearly outpace opt-outs and the team should beat the 16% peer average even after removing the one-offs.",
      yieldAnchors: [
        "Revenue rose 18%",
        "Peer firms rose 16% in a strong industry quarter",
        "Two senior hires and a long-planned major contract closed; opt-out reps performed just as well",
      ],
      riskAnchors: [
        "The team's growth barely exceeds the 16% peer benchmark",
        "Organic growth disappears once the one-time contract and new hires are removed",
        "Opt-in reps do not outpace opt-out reps",
      ],
      defeatedBy: [
        "The 18% rise alone proves the bonus scheme worked",
        "The peer trend, new hires, and big contract can be set aside",
        "Nothing can be concluded about the bonus at all",
      ],
    },
    correctAnswer:
      "The strongest lead is that the 18% reflects an industry tailwind (peers up 16%) plus two one-off boosts — the two senior hires' incoming books and the large client contract — rather than the bonus scheme, which the opt-out reps' equal performance further undercuts. This lead binds all the evidence: it accounts for the near-matching peer growth, the new hires, the one-time contract, and the indifference of bonus participation. I would test it by comparing the team's growth against the peer benchmark (expecting only a few points of excess), by stripping the one-time contract and the new hires' existing pipelines to see whether organic growth remains, and by comparing the quarter-over-quarter growth of opt-in reps against opt-out reps; if the bonus mattered, opt-ins should clearly outpace opt-outs and the team should beat the 16% peer average even after removing the one-offs.",
    explanation:
      "Cherry-picking the 18% and crediting the bonus earns near-zero because it ignores the peer trend, the hires, the contract, and the opt-out reps; the cautious 'nothing can be concluded' also scores low. Top credit goes to the lead that accounts for every datum and names tests that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A clinic director says a new triage protocol cut average ER wait times from 45 to 30 minutes. But patient volume also dropped 20% after a nearby urgent-care clinic opened, the hospital added two nurses the same month, and on the busiest shifts — when triage should matter most — waits did not improve at all. In one paragraph, propose the strongest lead for the shorter waits and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the lower average wait comes mainly from the 20% volume drop and the two extra nurses rather than the triage protocol, a reading reinforced by the fact that the busiest shifts — where triage should help most — saw no improvement. This lead binds all the evidence: the new urgent-care siphoning patients, the added staffing, and the telling absence of any gain when load is highest. I would test it by adjusting wait times for patient volume and staffing to see whether any improvement remains, by comparing busy-shift waits before and after the protocol (expecting no change), and by holding volume and nurse count fixed in a controlled stretch to isolate the protocol's effect; if triage truly worked, the busiest shifts should improve and the gain should survive controlling for volume and staffing.",
      yieldAnchors: [
        "Average wait fell from 45 to 30 minutes",
        "Patient volume dropped 20% after a nearby urgent-care opened; two nurses were added",
        "Busiest shifts showed no improvement",
      ],
      riskAnchors: [
        "Improvement vanishes after adjusting for volume and staffing",
        "Busy-shift waits are unchanged before and after",
        "Waits hold steady when volume and nurse count are fixed",
      ],
      defeatedBy: [
        "The 15-minute average drop alone proves the protocol worked",
        "The volume drop and added nurses can be ignored",
        "Wait times are too noisy to conclude anything",
      ],
    },
    correctAnswer:
      "The strongest lead is that the lower average wait comes mainly from the 20% volume drop and the two extra nurses rather than the triage protocol, a reading reinforced by the fact that the busiest shifts — where triage should help most — saw no improvement. This lead binds all the evidence: the new urgent-care siphoning patients, the added staffing, and the telling absence of any gain when load is highest. I would test it by adjusting wait times for patient volume and staffing to see whether any improvement remains, by comparing busy-shift waits before and after the protocol (expecting no change), and by holding volume and nurse count fixed in a controlled stretch to isolate the protocol's effect; if triage truly worked, the busiest shifts should improve and the gain should survive controlling for volume and staffing.",
    explanation:
      "Crediting the protocol from the average drop alone is the cherry-pick CCR penalizes; so is the 'too noisy to say' refusal. Top credit accounts for the volume drop, the added nurses, and the unimproved busy shifts, and names tests that could refute the lead.",
  },
  {
    itemType: "written",
    prompt:
      "A coach credits a new training regimen for the team's improved record (12-4, up from 7-9). But the league expanded by adding three weak teams the squad played twice each; two star players returned from season-ending injuries; and against the eventual playoff teams the squad's results were unchanged from last year. In one paragraph, propose the strongest lead for the better record and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the improved record comes mainly from a softer schedule (six games against three newly added weak teams) and the return of two star players, not the new regimen — a reading sharpened by the unchanged results against the genuinely strong playoff teams. This lead binds all the evidence: the expansion games, the returning stars, and the flat performance where competition stayed tough. I would test it by recomputing the record against only same-strength opponents faced in both seasons, by checking whether the two returning stars account for most of the added wins through their on-court impact metrics, and by comparing point differential against playoff teams year over year; if the regimen worked, the team should improve specifically against strong opponents and the gain should survive removing the expansion games and adjusting for the stars' return.",
      yieldAnchors: [
        "Record improved to 12-4 from 7-9",
        "League added three weak teams played twice each; two stars returned from injury",
        "Results against playoff teams were unchanged",
      ],
      riskAnchors: [
        "The record is no better against same-strength opponents faced both years",
        "The two returning stars account for most of the added wins",
        "Point differential against playoff teams is flat year over year",
      ],
      defeatedBy: [
        "The win total alone proves the regimen worked",
        "The expansion games and returning stars can be ignored",
        "A single season says nothing, so withhold any judgment",
      ],
    },
    correctAnswer:
      "The strongest lead is that the improved record comes mainly from a softer schedule (six games against three newly added weak teams) and the return of two star players, not the new regimen — a reading sharpened by the unchanged results against the genuinely strong playoff teams. This lead binds all the evidence: the expansion games, the returning stars, and the flat performance where competition stayed tough. I would test it by recomputing the record against only same-strength opponents faced in both seasons, by checking whether the two returning stars account for most of the added wins through their on-court impact metrics, and by comparing point differential against playoff teams year over year; if the regimen worked, the team should improve specifically against strong opponents and the gain should survive removing the expansion games and adjusting for the stars' return.",
    explanation:
      "Reading only the win total credits the regimen by ignoring the soft schedule, the returning stars, and the flat results against strong teams; the blanket 'one season says nothing' refusal also scores low. Top credit accounts for all of it and names refutable tests.",
  },
  {
    itemType: "written",
    prompt:
      "A product manager says a 15% price increase didn't hurt sales because total revenue held steady afterward. But unit sales fell 12%; a competitor simultaneously had a multi-week stockout that pushed its customers over; and the post-increase revenue came almost entirely from loyal repeat buyers, while new-customer acquisition dropped sharply. In one paragraph, propose the strongest lead for what the price increase actually did and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the price increase did hurt demand — units fell 12% and new-customer acquisition collapsed — but the damage was masked by higher per-unit revenue and a temporary windfall from the competitor's stockout that propped up volume. This lead binds all the evidence: the unit decline, the acquisition drop, the loyal-buyer concentration, and the competitor's outage. I would test it by tracking revenue and units after the competitor restocks (expecting both to fall), by separating repeat-buyer revenue from new-customer revenue to confirm acquisition cratered, and by running the old price in a holdout region to compare unit sales and new sign-ups; if the increase were harmless, units and acquisition should hold even after the competitor returns and in the holdout comparison.",
      yieldAnchors: [
        "Total revenue held steady after a 15% price increase",
        "Unit sales fell 12% and new-customer acquisition dropped sharply",
        "Post-increase revenue came mostly from loyal repeat buyers during a competitor stockout",
      ],
      riskAnchors: [
        "Revenue and units fall once the competitor restocks",
        "New-customer revenue cratered while repeat revenue held",
        "A holdout region at the old price keeps more units and sign-ups",
      ],
      defeatedBy: [
        "Steady total revenue alone proves the increase didn't hurt",
        "The unit drop, acquisition collapse, and competitor stockout can be ignored",
        "Sales data is too entangled to conclude anything",
      ],
    },
    correctAnswer:
      "The strongest lead is that the price increase did hurt demand — units fell 12% and new-customer acquisition collapsed — but the damage was masked by higher per-unit revenue and a temporary windfall from the competitor's stockout that propped up volume. This lead binds all the evidence: the unit decline, the acquisition drop, the loyal-buyer concentration, and the competitor's outage. I would test it by tracking revenue and units after the competitor restocks (expecting both to fall), by separating repeat-buyer revenue from new-customer revenue to confirm acquisition cratered, and by running the old price in a holdout region to compare unit sales and new sign-ups; if the increase were harmless, units and acquisition should hold even after the competitor returns and in the holdout comparison.",
    explanation:
      "Concluding 'no harm' from steady revenue is the cherry-pick — it suppresses the unit drop, the acquisition collapse, and the competitor's stockout; the 'too entangled to say' refusal also scores low. Top credit binds every datum and names tests that could refute the lead.",
  },
  {
    itemType: "written",
    prompt:
      "A teacher says her flipped-classroom method raised average exam scores from 74 to 82. But she also dropped the two hardest questions from this year's exam, added an extra review session before it, taught a smaller honors-track cohort this year, and students who never watched the flipped videos scored the same as those who did. In one paragraph, propose the strongest lead for the higher average and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the eight-point rise comes mainly from an easier exam (two hardest questions dropped), the extra review session, and a stronger honors cohort rather than the flipped method, a reading clinched by the fact that video-watchers and non-watchers scored the same. This lead binds all the evidence: the changed test, the added review, the cohort shift, and the indifference to actually using the flipped videos. I would test it by rescoring this year's exam on the common questions shared with last year's, by comparing video-watchers to non-watchers within the class (expecting no gap if the method is inert), and by holding cohort ability and the review session constant — ideally randomizing the flipped videos — to isolate the method; if flipping worked, watchers should outscore non-watchers and the gain should survive equalizing the exam, the review, and the cohort.",
      yieldAnchors: [
        "Average rose from 74 to 82",
        "The two hardest questions were dropped, an extra review session was added, and the cohort was a smaller honors track",
        "Video-watchers scored the same as non-watchers",
      ],
      riskAnchors: [
        "The gain shrinks when scored on questions common to both years",
        "Video-watchers do not outscore non-watchers",
        "The improvement disappears once cohort and the review session are held constant",
      ],
      defeatedBy: [
        "The eight-point rise alone proves the flipped method worked",
        "The easier exam, extra review, and honors cohort can be ignored",
        "Test scores vary too much to conclude anything",
      ],
    },
    correctAnswer:
      "The strongest lead is that the eight-point rise comes mainly from an easier exam (two hardest questions dropped), the extra review session, and a stronger honors cohort rather than the flipped method, a reading clinched by the fact that video-watchers and non-watchers scored the same. This lead binds all the evidence: the changed test, the added review, the cohort shift, and the indifference to actually using the flipped videos. I would test it by rescoring this year's exam on the common questions shared with last year's, by comparing video-watchers to non-watchers within the class (expecting no gap if the method is inert), and by holding cohort ability and the review session constant — ideally randomizing the flipped videos — to isolate the method; if flipping worked, watchers should outscore non-watchers and the gain should survive equalizing the exam, the review, and the cohort.",
    explanation:
      "Crediting the flipped method from the raw average ignores the easier exam, the extra review, the honors cohort, and the indifferent video usage; the 'scores vary too much' refusal also scores low. Top credit accounts for all the evidence and names tests that could refute the lead.",
  },
];

export const section: SectionContent = {
  slug: "total-evidence",
  title: "Total Evidence",
  weekNumber: 3,
  blurb:
    "Judge a model against ALL the relevant evidence, not the flattering subset that happens to confirm your favorite — the strong conclusion is the one that also accounts for the inconvenient data.",
  lectureTitle:
    "3.8 Total Evidence: refusing to cherry-pick the subset that flatters your favorite",
  body: `# Total Evidence

A conclusion is only as strong as the evidence it is willing to face. The constructive reasoner commits hard — but to the model that accounts for *everything relevant*, including the data that stings. The failure mode here is not timidity; it is the opposite of rigor dressed as confidence: grabbing the flattering subset, declaring victory, and quietly looking away from the facts that complicate the story.

## The flattering subset is the trap

Almost any pleasing claim can be supported if you are allowed to choose which evidence counts. "Revenue rose 20% the month our ad launched" sounds decisive — until you notice competitors with no campaign rose the same, the month held a holiday, and the ad sent no traffic. The number wasn't false; it was *partial*. Cherry-picking is rarely a lie. It is the silent omission of the inconvenient datum that would have changed the verdict.

## Hunt for the datum that would hurt

Before you commit, ask the uncomfortable question: *what evidence here cuts against my favorite, and have I accounted for it?* The strongest conclusion is the one that survives its own worst data point. When a control group improved almost as much, when the untreated plants surged too, when the busiest shifts showed no gain — those are the load-bearing facts. A model that can absorb them earns credence; a model that must ignore them is hollow.

## Confounds and baselines are part of the evidence

Total evidence means counting the alternatives the world supplies for free: the industry trend, the seasonal baseline, the simultaneous price cut, the easier exam. "Our scores rose seven points" means little when the school-wide test got easier by six. The honest comparison is never to your own before-figure alone; it is to what would have happened anyway. Net out the baseline, then ask what your favored cause actually added.

## Why the cherry-pick earns zero

Selecting only the confirming slice is not a cautious move — it is a confident wrong one. It commits hard to a conclusion the *full* dataset does not support, which is exactly the reckless overreach this discipline penalizes. Citing "70% improved" while the placebo arm improved 68% isn't a partial truth worth partial credit; under total evidence it earns zero, because the omitted datum reverses the meaning.

## Overreach in the other direction still loses

Total evidence is not an excuse to freeze. Once you have weighed *all* of it, you still must commit to the best-supported lead and name the test that would settle it. "There are too many factors, so nothing can be concluded" is just cherry-picking the absence of certainty — it ignores the evidence that *does* point somewhere. The goal is the richest conclusion the whole body of data supports, with the cheap test that could refute it.

## In the real world

A manager sees tickets closed fall 15% after the team went remote and concludes remote work hurts productivity. The total-evidence move surfaces the omitted facts: headcount also fell 15%, the backlog got harder, and per-person output actually rose. Account for all of it and the verdict flips — output per worker improved. The test follows directly: track per-capita throughput, measure ticket difficulty, and refill headcount to see if total volume returns. The strong conclusion isn't the one that flatters a prior; it's the one still standing after every datum has had its say.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
