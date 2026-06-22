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
      "A seller claims his 'focus' pill sharpens concentration. Each time a buyer reports no change, he adds a new condition that was never mentioned before: first 'take it on an empty stomach,' then 'also cut sugar,' then 'give it a full ninety days.' Which lead best follows?",
    mcOptions: [
      {
        text: "Every new condition is probably a real requirement, so keep adding them until the pill finally works for everyone.",
        credit: 0,
      },
      {
        text: "The growing list of after-the-fact conditions looks a little suspicious.",
        credit: 0.3,
      },
      {
        text: "The pill likely does nothing and the new conditions are patches added only to dodge each failure; test it by running a double-blind comparison the seller can't influence, by checking whether any condition was ever stated before a complaint, and by seeing whether 'cut sugar' alone produces the same reported focus.",
        credit: 1.0,
      },
      {
        text: "The pill probably has no real effect; we could ask a few more buyers whether it worked.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The pill likely does nothing and the new conditions are patches added only to dodge each failure; test it by running a double-blind comparison the seller can't influence, by checking whether any condition was ever stated before a complaint, and by seeing whether 'cut sugar' alone produces the same reported focus.",
    explanation:
      "Top credit spots that the conditions only appear after failures — the hallmark of a degenerating model — and proposes a blind test plus a before/after-the-complaint check; choosing to keep bolting on patches is exactly the move the pattern defeats and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A youth soccer coach insists his 'possession-only' system is winning football. After each loss he blames a different one-off: the referee, the wet pitch, a sick striker, the early kickoff. The wins he credits entirely to the system. Which conclusion opens the most checkable inquiry?",
    mcOptions: [
      {
        text: "The system seems to get a lot of excuses when it loses.",
        credit: 0.3,
      },
      {
        text: "The system probably isn't the cause of wins, since it only ever explains them after the fact; test whether results track the opponent's strength rather than the system, whether the coach predicted any loss in advance, and whether a measurable in-game stat the system claims to produce (more passes in the final third) actually rises in wins but not losses.",
        credit: 1.0,
      },
      {
        text: "Football has too many variables to judge whether any system works.",
        credit: 0,
      },
      {
        text: "The system likely isn't doing much; we could watch a few more matches.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The system probably isn't the cause of wins, since it only ever explains them after the fact; test whether results track the opponent's strength rather than the system, whether the coach predicted any loss in advance, and whether a measurable in-game stat the system claims to produce (more passes in the final third) actually rises in wins but not losses.",
    explanation:
      "A theory that claims every win and explains away every loss with a fresh excuse makes no risky prediction; top credit forces it to predict something in advance, while 'too many variables' refuses to test anything and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A newsletter promises to 'beat the market.' When a pick falls, the author says it was 'a long-term hold,' when another falls he says 'the thesis just needs more time,' and when one rises he takes full credit. He never states a sell point in advance. Which lead is strongest?",
    mcOptions: [
      {
        text: "The strategy probably has no real edge and the explanations are patches that make it unfalsifiable; test it by forcing a written buy-and-sell rule stated in advance, by comparing the picks against a coin-flip or index over the same window, and by checking whether 'needs more time' ever resolves into a gain.",
        credit: 1.0,
      },
      {
        text: "The author seems to make excuses whenever a pick drops.",
        credit: 0.3,
      },
      {
        text: "Markets are too unpredictable to ever say whether a strategy works.",
        credit: 0,
      },
      {
        text: "The newsletter probably has no edge; we could track the next few picks.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The strategy probably has no real edge and the explanations are patches that make it unfalsifiable; test it by forcing a written buy-and-sell rule stated in advance, by comparing the picks against a coin-flip or index over the same window, and by checking whether 'needs more time' ever resolves into a gain.",
    explanation:
      "When every loss is rebranded 'long-term' and only gains count, the model can never fail — the cure is a pre-committed rule and a benchmark; 'markets are unpredictable' is the dodge that runs no test.",
  },
  {
    itemType: "mc",
    prompt:
      "A mechanic keeps telling a driver her engine knock is fixed. After the first failure he says 'it was the spark plugs after all'; after the second, 'must be bad fuel'; after the third, 'probably the cold weather.' Each diagnosis arrives only after the previous fix fails. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Each new guess might be right, so keep paying for the next fix until the knock stops.",
        credit: 0,
      },
      {
        text: "The shifting diagnoses suggest he hasn't found the cause.",
        credit: 0.3,
      },
      {
        text: "He probably doesn't know the cause and is patching guesses after each failure; the real fix should be found by a test that predicts in advance — have him state which condition reproduces the knock before driving, log when the knock occurs against engine load and temperature, and get a second shop's diagnosis blind to his guesses.",
        credit: 1.0,
      },
      {
        text: "He likely hasn't found it; we could give him one more try.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "He probably doesn't know the cause and is patching guesses after each failure; the real fix should be found by a test that predicts in advance — have him state which condition reproduces the knock before driving, log when the knock occurs against engine load and temperature, and get a second shop's diagnosis blind to his guesses.",
    explanation:
      "A diagnosis that only ever names the cause after the last fix fails is degenerating; top credit demands an advance prediction and an independent check, while paying for endless patches is the trap the pattern exposes.",
  },
  {
    itemType: "mc",
    prompt:
      "A diet guru claims his plan melts fat. When a follower doesn't lose weight he says 'you must have cheated,' when another doesn't he says 'your metabolism is unusual,' and when a third doesn't he says 'you needed to also fast.' Which lead opens the most inquiry?",
    mcOptions: [
      {
        text: "The plan seems to come with a lot of reasons it didn't work.",
        credit: 0.3,
      },
      {
        text: "Weight loss is too personal to ever credit or blame a single plan.",
        credit: 0,
      },
      {
        text: "The plan likely has no special effect and the excuses are patches that shield it from any failure; test it by measuring weight loss against calories actually eaten rather than the plan label, by checking whether followers who stick to the plan exactly still stall, and by seeing whether the same calorie deficit on any diet produces equal loss.",
        credit: 1.0,
      },
      {
        text: "The plan probably isn't special; we could survey more followers.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The plan likely has no special effect and the excuses are patches that shield it from any failure; test it by measuring weight loss against calories actually eaten rather than the plan label, by checking whether followers who stick to the plan exactly still stall, and by seeing whether the same calorie deficit on any diet produces equal loss.",
    explanation:
      "Blaming the follower every time the plan fails is the ad hoc rescue; the strong move tests the deficit mechanism directly, while 'too personal to credit any plan' is the barren refusal.",
  },
  {
    itemType: "mc",
    prompt:
      "An office's IT lead keeps blaming 'the cache' for a recurring outage. He clears it; the site crashes again. He says 'a different cache layer.' It crashes again. He says 'the browser cache this time.' He has never predicted when the next crash will hit. Which conclusion is strongest?",
    mcOptions: [
      {
        text: "The cache explanation is being patched after each crash and probably isn't the real cause; force it to predict — have him state in advance which action will stop the next crash, log crashes against server memory and request volume, and roll back recent code to see whether crashes stop regardless of cache.",
        credit: 1.0,
      },
      {
        text: "He seems to blame a new cache every time it crashes.",
        credit: 0.3,
      },
      {
        text: "Outages have so many possible causes that nothing useful can be said.",
        credit: 0,
      },
      {
        text: "The cache probably isn't it; we could wait for the next crash.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The cache explanation is being patched after each crash and probably isn't the real cause; force it to predict — have him state in advance which action will stop the next crash, log crashes against server memory and request volume, and roll back recent code to see whether crashes stop regardless of cache.",
    explanation:
      "A diagnosis that relocates to a new 'cache' after every failure makes no risky prediction; top credit makes it commit in advance and checks a rival (recent code), while 'too many causes' tests nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "A gardener swears planting by the moon's phase boosts yield. When a moon-timed crop fails he says 'the soil was off that month'; when another fails, 'pests interfered'; when one thrives, it proves the moon. He never says beforehand which beds will do best. Which lead best follows?",
    mcOptions: [
      {
        text: "The moon claim absorbs every failure with a new excuse, so it probably adds nothing; test it by planting matched beds on- and off-phase and predicting the winners in advance, by tracking yield against actual soil and water rather than phase, and by having a neighbor guess which beds were moon-timed from the harvest alone.",
        credit: 1.0,
      },
      {
        text: "The moon explanation seems to have an answer for every outcome.",
        credit: 0.3,
      },
      {
        text: "Gardening outcomes vary too much to test a planting method at all.",
        credit: 0,
      },
      {
        text: "The moon probably doesn't matter; we could grow another season and see.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The moon claim absorbs every failure with a new excuse, so it probably adds nothing; test it by planting matched beds on- and off-phase and predicting the winners in advance, by tracking yield against actual soil and water rather than phase, and by having a neighbor guess which beds were moon-timed from the harvest alone.",
    explanation:
      "A theory that explains thriving and failing crops equally well, only after the fact, risks nothing; the fix is a pre-registered prediction and a blind check, not another season of unfalsifiable storytelling.",
  },
  {
    itemType: "mc",
    prompt:
      "A dog trainer markets a 'calm energy' method. When a dog stays anxious he says the owner 'projected stress'; when another stays anxious he says it 'needs more sessions'; when a dog calms down he credits the method entirely. Which conclusion opens the most inquiry?",
    mcOptions: [
      {
        text: "The owner's stress and 'more sessions' are probably the real fixes, so keep buying sessions until it works.",
        credit: 0,
      },
      {
        text: "The method seems to blame the owner whenever a dog stays anxious.",
        credit: 0.3,
      },
      {
        text: "The method likely isn't the active ingredient and the excuses are patches; test it by predicting in advance which dogs will calm, by comparing it against a standard reward-based protocol on matched dogs, and by checking whether dogs improve at the same rate with sessions led by an untrained handler.",
        credit: 1.0,
      },
      {
        text: "The method probably isn't special; we could try a few more dogs.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The method likely isn't the active ingredient and the excuses are patches; test it by predicting in advance which dogs will calm, by comparing it against a standard reward-based protocol on matched dogs, and by checking whether dogs improve at the same rate with sessions led by an untrained handler.",
    explanation:
      "Crediting successes and blaming owners for failures is the ad hoc rescue; top credit demands an advance prediction and a controlled comparison, while paying for endless sessions is the very trap the pattern reveals.",
  },
  {
    itemType: "mc",
    prompt:
      "A restaurant owner believes his 'secret sauce' drives all repeat business. When sales dip he blames the weather, then a nearby road closure, then a bad review. When sales rise it's the sauce. He won't test removing it. Which lead is strongest?",
    mcOptions: [
      {
        text: "The sauce gets the credit for good weeks and nothing the blame in bad ones, so its role is untested; test it by quietly running a sauce-free week and comparing repeat visits, by tracking repeat business against the road and review events he blames, and by surveying regulars on what actually brings them back.",
        credit: 1.0,
      },
      {
        text: "The sauce theory seems to dodge blame whenever sales fall.",
        credit: 0.3,
      },
      {
        text: "Restaurant traffic depends on too much to ever credit one dish.",
        credit: 0,
      },
      {
        text: "The sauce probably isn't the whole story; we could watch sales longer.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The sauce gets the credit for good weeks and nothing the blame in bad ones, so its role is untested; test it by quietly running a sauce-free week and comparing repeat visits, by tracking repeat business against the road and review events he blames, and by surveying regulars on what actually brings them back.",
    explanation:
      "A theory immunized against every bad week by a fresh external excuse risks nothing; the constructive move is the sauce-free week that could refute it, not the refusal that 'too much' is in play.",
  },
  {
    itemType: "mc",
    prompt:
      "A teacher attributes every result to her 'learning-styles' grouping. When visual-grouped kids do poorly she says 'they were mislabeled'; when another group lags she says 'they need more time in the style'; gains always confirm the styles. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The labels seem to shift whenever a group underperforms.",
        credit: 0.3,
      },
      {
        text: "The styles model is rescued by relabeling after each failure, so it likely isn't driving results; test it by predicting in advance which kids will gain, by teaching matched groups in their 'wrong' style to see whether scores really drop, and by checking whether gains track time-on-task rather than style.",
        credit: 1.0,
      },
      {
        text: "Classroom outcomes are too complex to evaluate any grouping method.",
        credit: 0,
      },
      {
        text: "The styles probably aren't the cause; we could try another term.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The styles model is rescued by relabeling after each failure, so it likely isn't driving results; test it by predicting in advance which kids will gain, by teaching matched groups in their 'wrong' style to see whether scores really drop, and by checking whether gains track time-on-task rather than style.",
    explanation:
      "Relabeling a child whenever the prediction fails is the ad hoc patch; a progressive version would predict who gains and risk a mismatched-style test, while 'too complex' evaluates nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "A homeopath says her remedy cures colds. When a patient stays sick she says the dose was 'too diluted'; when another stays sick, 'not diluted enough'; when a third recovers (as colds do) it proves the remedy. Which lead opens the most inquiry?",
    mcOptions: [
      {
        text: "Adjusting the dilution in opposite directions after each failure means the remedy can't fail, so it's untested; test it by predicting recovery times in advance, by comparing the remedy against an identical-looking placebo in a blind trial, and by checking whether recovery tracks the cold's normal course rather than the remedy.",
        credit: 1.0,
      },
      {
        text: "The dilution explanation seems to change to fit each outcome.",
        credit: 0.3,
      },
      {
        text: "Colds are too variable to ever test a remedy.",
        credit: 0,
      },
      {
        text: "The remedy probably doesn't work; we could ask more patients.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Adjusting the dilution in opposite directions after each failure means the remedy can't fail, so it's untested; test it by predicting recovery times in advance, by comparing the remedy against an identical-looking placebo in a blind trial, and by checking whether recovery tracks the cold's normal course rather than the remedy.",
    explanation:
      "When 'too diluted' and 'not diluted enough' both excuse failure, no result can refute it; the cure is a blind placebo comparison and an advance prediction, not the dodge that colds are too variable.",
  },
  {
    itemType: "mc",
    prompt:
      "A factory's quality manager keeps a pet theory that humidity causes a recurring paint defect. When dry days also show defects he says 'residual moisture'; when humid days don't he says 'the new dehumidifier helped'; he never predicts a defect rate from the forecast. Which conclusion is strongest?",
    mcOptions: [
      {
        text: "The humidity theory has an answer for both wet and dry results, so it predicts nothing; make it risk a forecast — log defect rate against measured booth humidity and have him predict tomorrow's rate, then check whether a rival like batch age or nozzle wear tracks defects better.",
        credit: 1.0,
      },
      {
        text: "The humidity story seems to bend to fit every day's result.",
        credit: 0.3,
      },
      {
        text: "Paint defects have too many causes to single one out.",
        credit: 0,
      },
      {
        text: "Humidity probably isn't the whole cause; we could record more days.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The humidity theory has an answer for both wet and dry results, so it predicts nothing; make it risk a forecast — log defect rate against measured booth humidity and have him predict tomorrow's rate, then check whether a rival like batch age or nozzle wear tracks defects better.",
    explanation:
      "A theory that explains both humid and dry defects with separate add-ons is degenerating; top credit forces an advance forecast and pits it against a rival, while 'too many causes' tests nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "A self-styled forecaster claims his aching knee predicts rain. On dry days after an ache he says 'it'll rain within a week'; on rainy days with no ache, 'the storm came from far off'; on hits he is vindicated. Which lead best follows?",
    mcOptions: [
      {
        text: "Each new caveat might be valid, so keep trusting the knee and stretching the window until it's right.",
        credit: 0,
      },
      {
        text: "The knee claim seems to widen its window whenever it misses.",
        credit: 0.3,
      },
      {
        text: "The knee 'forecast' is patched after every miss, so it isn't really predicting; pin it down — have him log a specific rain probability for a fixed next-day window before the weather, then score those calls against a coin flip and against the published forecast.",
        credit: 1.0,
      },
      {
        text: "The knee probably isn't predictive; we could track it a while.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The knee 'forecast' is patched after every miss, so it isn't really predicting; pin it down — have him log a specific rain probability for a fixed next-day window before the weather, then score those calls against a coin flip and against the published forecast.",
    explanation:
      "Stretching 'within a week' or invoking a distant storm absorbs every miss; the strong move is a scored, pre-committed forecast, while trusting the ever-widening window is the trap the pattern exposes.",
  },
  {
    itemType: "mc",
    prompt:
      "An inventor sells a fuel additive he says cuts gas use 30%. When a tester sees no savings he says 'your engine's too new'; the next, 'yours is too old'; the next, 'you drive too gently.' Which conclusion opens the most inquiry?",
    mcOptions: [
      {
        text: "The additive seems to have an excuse for every car that shows no savings.",
        credit: 0.3,
      },
      {
        text: "The additive probably does nothing and the excuses are patches covering each null result; test it by measuring fuel use on a dynamometer with and without the additive on the same car, by predicting in advance which cars should benefit, and by checking whether any tester's savings exceed normal measurement noise.",
        credit: 1.0,
      },
      {
        text: "Fuel economy varies so much that an additive can't really be judged.",
        credit: 0,
      },
      {
        text: "The additive probably doesn't help; we could test more cars.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The additive probably does nothing and the excuses are patches covering each null result; test it by measuring fuel use on a dynamometer with and without the additive on the same car, by predicting in advance which cars should benefit, and by checking whether any tester's savings exceed normal measurement noise.",
    explanation:
      "Calling engines both 'too new' and 'too old' to explain failures shields the additive from any null; top credit runs a controlled same-car test, while 'can't really be judged' is the refusal.",
  },
  {
    itemType: "mc",
    prompt:
      "Two beekeepers explain a hive's strength. One credits her 'lunar feeding schedule' and, after each weak month, adds a reason it didn't show. The other predicted in advance that hives near the new clover field would gain weight fastest — and they did. Which lead is strongest?",
    mcOptions: [
      {
        text: "The clover explanation earned credit by predicting the result before seeing it, while the lunar one only patches misses afterward; back the clover-forage lead and test it further — move some hives toward and away from the clover and predict the weight changes, weigh hives weekly against bloom timing, and check whether lunar-fed hives off the clover gain nothing.",
        credit: 1.0,
      },
      {
        text: "The clover idea seems to fit the hive data better than the moon one.",
        credit: 0.3,
      },
      {
        text: "Both keepers might be right, so keep following the lunar schedule too.",
        credit: 0,
      },
      {
        text: "The clover lead is probably better; we could weigh the hives again later.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The clover explanation earned credit by predicting the result before seeing it, while the lunar one only patches misses afterward; back the clover-forage lead and test it further — move some hives toward and away from the clover and predict the weight changes, weigh hives weekly against bloom timing, and check whether lunar-fed hives off the clover gain nothing.",
    explanation:
      "The progressive model made a risky forecast that came true; the degenerating one only ever explains failures after the fact — backing both would reward the model that risks nothing, which the contrast defeats.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A vitamin brand claims its daily pill prevents colds. When a customer catches one anyway, the brand says 'you started too late'; when another does, 'you skipped a day'; when a third does, 'stress overrode it.' It never says who should stay cold-free. Which lead best follows?",
    mcOptions: [
      {
        text: "The pill likely has no preventive effect and the excuses are patches that absorb every cold; test it by predicting in advance which takers stay well, by comparing the pill against an identical placebo over a winter, and by checking whether perfect daily takers get colds at the same rate as non-takers.",
        credit: 1.0,
      },
      {
        text: "The brand seems to find a reason whenever someone still gets sick.",
        credit: 0.3,
      },
      {
        text: "Colds have too many causes to test a vitamin at all.",
        credit: 0,
      },
      {
        text: "The pill probably doesn't prevent colds; we could ask more customers.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the pill does nothing and the excuses are patches' lead from the rival 'the pill works but only under the stated conditions,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: run a blind comparison giving matched people the pill or an identical placebo all winter and count colds — if the pill truly works, takers should get fewer even without any new caveats. My lead is refuted if the pill group gets significantly fewer colds than the placebo group under identical conditions.",
      yieldAnchors: [
        "Customers catch colds while taking the pill",
        "A new excuse follows each failure",
        "The brand never says who should stay cold-free",
      ],
      riskAnchors: [
        "Pill and placebo groups get colds at the same rate",
        "Perfect daily takers still catch colds like non-takers",
        "The brand cannot predict who stays well in advance",
      ],
      defeatedBy: [
        "The pill genuinely cuts colds in a blind trial",
        "Every excuse was a condition stated before the failures",
      ],
    },
    correctAnswer:
      "The pill likely has no preventive effect and the excuses are patches that absorb every cold; test it by predicting in advance which takers stay well, by comparing the pill against an identical placebo over a winter, and by checking whether perfect daily takers get colds at the same rate as non-takers.",
    explanation:
      "Full credit spots the after-the-fact excuses as ad hoc rescues and pairs the verdict with a blind placebo test that names its own refutation; 'too many causes' tests nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A tarot reader says her spreads foresee careers. When a client's predicted promotion never comes she says 'the energy shifted'; when a foretold move falls through, 'you blocked it'; correct guesses are proof. Which conclusion is strongest?",
    mcOptions: [
      {
        text: "The readings seem to explain away every miss.",
        credit: 0.3,
      },
      {
        text: "The readings are unfalsifiable because every miss gets a new excuse, so they likely carry no real information; test them by recording specific, dated predictions before events, by scoring those against chance, and by having a second reader interpret the same spread blind to see if they agree.",
        credit: 1.0,
      },
      {
        text: "The future is too uncertain to ever check a prediction method.",
        credit: 0,
      },
      {
        text: "The readings probably aren't predictive; we could note a few more.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'unfalsifiable, no real information' lead from the rival 'the readings are accurate when energy permits,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have her log specific dated predictions before the events and score the hits against random guessing — genuine foresight should beat chance without any after-the-fact excuses. My lead is refuted if her pre-committed, dated predictions reliably beat chance.",
      yieldAnchors: [
        "Predicted promotions and moves fail to occur",
        "Each miss gets a fresh excuse",
        "Only correct guesses are counted as proof",
      ],
      riskAnchors: [
        "Pre-dated predictions score no better than chance",
        "A second reader's blind interpretation disagrees",
        "Hits vanish once excuses are disallowed",
      ],
      defeatedBy: [
        "Pre-committed dated predictions beat chance",
        "Independent readers agree on the same spread",
      ],
    },
    correctAnswer:
      "The readings are unfalsifiable because every miss gets a new excuse, so they likely carry no real information; test them by recording specific, dated predictions before events, by scoring those against chance, and by having a second reader interpret the same spread blind to see if they agree.",
    explanation:
      "Top credit names the unfalsifiability and demands scored, pre-committed predictions; the dodge that 'the future is too uncertain' refuses any test.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A productivity influencer credits his 5 a.m. routine for his success. Whenever a follower tries it and burns out, he says 'you skipped the journaling,' then 'you didn't add cold showers,' then 'you weren't consistent enough.' The routine keeps growing. Which lead opens the most inquiry?",
    mcOptions: [
      {
        text: "Each add-on is probably essential, so keep stacking them until the routine finally pays off.",
        credit: 0,
      },
      {
        text: "The routine seems to gain a new required piece every time it fails.",
        credit: 0.3,
      },
      {
        text: "The growing routine is being patched after each failure, so its core probably isn't what drives success; test it by comparing matched people on the bare routine versus a normal schedule, by predicting in advance who will benefit, and by checking whether output tracks total sleep rather than the early start.",
        credit: 1.0,
      },
      {
        text: "The routine probably isn't magic; we could ask more followers.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the routine is patched and its core does nothing' lead from the rival 'the full stacked routine genuinely works,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have matched volunteers follow the original bare routine while a control keeps their normal schedule, and compare measured output — if the core works, the bare-routine group should pull ahead without any added pieces. My lead is refuted if the bare routine alone produces a real, repeatable performance gain.",
      yieldAnchors: [
        "Followers burn out on the routine",
        "A new required component follows each failure",
        "The routine keeps growing",
      ],
      riskAnchors: [
        "The bare routine beats a normal schedule for no one",
        "Output tracks total sleep, not the early start",
        "The influencer can't predict who benefits",
      ],
      defeatedBy: [
        "The original bare routine produces a real gain",
        "The added pieces were specified before any failure",
      ],
    },
    correctAnswer:
      "The growing routine is being patched after each failure, so its core probably isn't what drives success; test it by comparing matched people on the bare routine versus a normal schedule, by predicting in advance who will benefit, and by checking whether output tracks total sleep rather than the early start.",
    explanation:
      "Full credit recognizes the ever-growing routine as serial patching and isolates the core with a controlled test; stacking more components forever is the trap the pattern exposes.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A fertilizer brand promises bigger blooms. When a gardener's roses don't respond it says 'wrong soil pH'; the next, 'too much shade'; the next, 'watered wrong.' It never tells a gardener beforehand what to expect. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The product probably adds nothing beyond ordinary care, and the excuses are patches for each null result; test it by predicting bloom size in advance for given conditions, by feeding matched plants the brand versus a generic feed, and by checking whether 'fixing' the blamed factor without the product produces the same blooms.",
        credit: 1.0,
      },
      {
        text: "The brand seems to blame something different every time it fails.",
        credit: 0.3,
      },
      {
        text: "Gardens vary too much to test any fertilizer.",
        credit: 0,
      },
      {
        text: "The product probably isn't special; we could try more gardens.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'adds nothing, excuses are patches' lead from the rival 'it works only when conditions are right,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: feed matched plants under identical good conditions the brand versus a generic feed and compare blooms — if the product truly works, it should beat the generic when nothing is blamed. My lead is refuted if the brand reliably outperforms a generic feed under the same conditions.",
      yieldAnchors: [
        "Roses fail to respond to the product",
        "A different factor is blamed each time",
        "No expectation is stated in advance",
      ],
      riskAnchors: [
        "Brand and generic feed produce equal blooms",
        "Fixing the blamed factor alone matches the product",
        "The brand can't predict bloom size beforehand",
      ],
      defeatedBy: [
        "The product beats a generic feed under equal conditions",
        "Every blamed factor was warned about in advance",
      ],
    },
    correctAnswer:
      "The product probably adds nothing beyond ordinary care, and the excuses are patches for each null result; test it by predicting bloom size in advance for given conditions, by feeding matched plants the brand versus a generic feed, and by checking whether 'fixing' the blamed factor without the product produces the same blooms.",
    explanation:
      "Top credit treats the rotating blame as ad hoc rescue and runs a head-to-head test that states its refutation; 'gardens vary too much' refuses to test.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A trainer sells a 'fat-burning zone' heart-rate plan. When a client doesn't lean out he says 'you drifted out of the zone'; the next, 'you ate back the calories'; the next, 'your monitor was off.' Which lead is strongest?",
    mcOptions: [
      {
        text: "The zone plan probably has no special fat-loss effect and the excuses patch each failure; test it by comparing the zone plan against equal-calorie-burn interval work in matched clients, by predicting in advance who loses fat, and by checking whether fat loss tracks total energy burned rather than the zone.",
        credit: 1.0,
      },
      {
        text: "The trainer seems to find a reason each time a client doesn't slim down.",
        credit: 0.3,
      },
      {
        text: "Bodies differ too much to evaluate any training plan.",
        credit: 0,
      },
      {
        text: "The zone probably isn't special; we could follow more clients.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'no special effect, excuses are patches' lead from the rival 'the zone works when followed exactly,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: match two groups on total calories burned and diet, one training in the zone and one doing intervals, and compare fat loss — equal energy expenditure should mean equal loss if the zone has no special power. My lead is refuted if the zone group loses meaningfully more fat at the same total energy burn.",
      yieldAnchors: [
        "Clients don't lean out on the plan",
        "A fresh excuse follows each failure",
        "Blame lands on drift, diet, or the monitor",
      ],
      riskAnchors: [
        "Fat loss tracks total energy burned, not the zone",
        "Interval work matches the zone at equal burn",
        "The trainer can't predict who loses fat",
      ],
      defeatedBy: [
        "The zone beats intervals at equal energy burn",
        "Each excuse was a rule stated before the failures",
      ],
    },
    correctAnswer:
      "The zone plan probably has no special fat-loss effect and the excuses patch each failure; test it by comparing the zone plan against equal-calorie-burn interval work in matched clients, by predicting in advance who loses fat, and by checking whether fat loss tracks total energy burned rather than the zone.",
    explanation:
      "Full credit isolates total energy burn as the real driver with a matched comparison that names its refutation; 'bodies differ too much' is the barren refusal.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A marketing agency credits its billboard campaign for a client's sales. When a launch month flops it cites 'long ad memory lag'; when the next flops, 'a competitor's promo'; when sales rise, the billboards. It never forecasts a month's lift. Which conclusion opens the most inquiry?",
    mcOptions: [
      {
        text: "The campaign claim absorbs every flat month with a new excuse, so its effect is untested; make it predict — have the agency forecast a specific monthly lift before the data, run billboards in some regions and not others, and check whether sales rise only where the ads ran.",
        credit: 1.0,
      },
      {
        text: "The agency seems to explain away every weak month.",
        credit: 0.3,
      },
      {
        text: "Sales depend on too much to ever credit advertising.",
        credit: 0,
      },
      {
        text: "The billboards probably aren't the whole driver; we could track longer.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'untested, excuse-driven' lead from the rival 'the billboards genuinely drive sales,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: run the billboards in some regions and withhold them in comparable ones, then compare sales — real ad lift should appear only where the ads ran. My lead is refuted if billboard regions consistently outsell the withheld regions by the forecast amount.",
      yieldAnchors: [
        "Flat months get a new excuse each time",
        "Rising sales are credited to billboards",
        "No monthly lift is ever forecast",
      ],
      riskAnchors: [
        "Billboard and no-billboard regions sell the same",
        "The agency can't forecast a month's lift",
        "Sales track the competitor's promo, not the ads",
      ],
      defeatedBy: [
        "Billboard regions outsell withheld regions as forecast",
        "Each excuse was a documented prior prediction",
      ],
    },
    correctAnswer:
      "The campaign claim absorbs every flat month with a new excuse, so its effect is untested; make it predict — have the agency forecast a specific monthly lift before the data, run billboards in some regions and not others, and check whether sales rise only where the ads ran.",
    explanation:
      "Top credit converts the unfalsifiable claim into a regional A/B test with an advance forecast; 'too much to credit advertising' refuses the test entirely.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A wine seller insists a single 'magic vintage year' explains quality. When a bottle from that year disappoints he says 'poor storage'; when an off-year bottle excels, 'a lucky barrel.' He never predicts which bottles will score well blind. Which lead best follows?",
    mcOptions: [
      {
        text: "The seller seems to have a save for every bottle that breaks the rule.",
        credit: 0.3,
      },
      {
        text: "The vintage rule is rescued case by case, so it isn't really predicting quality; test it with a blind tasting where he scores bottles without knowing the year, by predicting scores in advance, and by checking whether storage and barrel — his excuses — predict quality better than the year does.",
        credit: 1.0,
      },
      {
        text: "Wine quality is too subjective to test any theory about it.",
        credit: 0,
      },
      {
        text: "The vintage probably isn't the whole story; we could taste more bottles.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'rescued case by case, not predictive' lead from the rival 'the vintage really predicts quality,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have him score bottles blind, not knowing the year, and check whether his ratings line up with the supposed magic vintage — genuine vintage quality should show up without label cues. My lead is refuted if his blind scores reliably rank the magic-year bottles highest.",
      yieldAnchors: [
        "A magic-year bottle disappoints",
        "An off-year bottle excels",
        "A fresh excuse covers each anomaly",
      ],
      riskAnchors: [
        "Blind scores don't favor the magic year",
        "Storage and barrel predict quality better than year",
        "He can't predict blind scores in advance",
      ],
      defeatedBy: [
        "Blind scores rank the magic year highest",
        "The excuses were factors flagged before tasting",
      ],
    },
    correctAnswer:
      "The vintage rule is rescued case by case, so it isn't really predicting quality; test it with a blind tasting where he scores bottles without knowing the year, by predicting scores in advance, and by checking whether storage and barrel — his excuses — predict quality better than the year does.",
    explanation:
      "Full credit converts the per-bottle rescue into a blind test that names its refutation and pits the year against rivals; 'too subjective' refuses to test.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A backyard inventor claims his wheel is nearly perpetual motion. When it slows he says 'friction stole the energy'; when it stops, 'a draft pushed back'; when measured, 'the meter draws power.' Each failure gets a new loss to blame. Meanwhile a skeptic predicted in advance the exact rate it would slow. Which conclusion is strongest?",
    mcOptions: [
      {
        text: "Each new loss might be real, so keep refining the wheel until it runs forever.",
        credit: 0,
      },
      {
        text: "The wheel's excuses pile up while the skeptic's energy-loss model predicted the slowdown in advance.",
        credit: 0.3,
      },
      {
        text: "The skeptic's model earned credit by forecasting the exact slowdown, while the wheel only patches each failure; back the energy-loss account and test it — predict the coast-down time from measured friction, vary the load and predict the new rate, and check whether the measured output ever exceeds the input.",
        credit: 1.0,
      },
      {
        text: "The wheel probably loses energy; we could let it run again and watch.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'energy-loss model, the wheel just patches' lead from the rival 'the wheel really approaches perpetual motion,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: measure the wheel's energy in and out over one run — a genuine near-perpetual machine would return nearly all its input, while a normal one loses to friction as the skeptic predicts. My lead is refuted if measured output ever matches or exceeds measured input.",
      yieldAnchors: [
        "The wheel slows and stops",
        "A new loss is blamed each time",
        "The skeptic predicted the slowdown in advance",
      ],
      riskAnchors: [
        "Measured output stays below input",
        "Coast-down time matches the friction prediction",
        "Changing the load shifts the rate as forecast",
      ],
      defeatedBy: [
        "Measured output meets or exceeds input",
        "The wheel runs without slowing as claimed",
      ],
    },
    correctAnswer:
      "The skeptic's model earned credit by forecasting the exact slowdown, while the wheel only patches each failure; back the energy-loss account and test it — predict the coast-down time from measured friction, vary the load and predict the new rate, and check whether the measured output ever exceeds the input.",
    explanation:
      "The energy-loss model risked an exact advance prediction and hit it; the wheel's story only ever names a new loss after failing — refining it forever rewards the model that risks nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A clinic markets an 'immune boost' IV drip. When a patient still gets the flu it says 'you needed a booster drip'; the next, 'your levels were already low'; the next, 'timing was off.' It never says who the drip will protect. Which lead opens the most inquiry?",
    mcOptions: [
      {
        text: "The drip probably has no real protective effect and the excuses patch each failure; test it by predicting in advance who stays well, by comparing the drip against a saline placebo in a blind trial, and by checking whether recipients get the flu at the same rate as non-recipients.",
        credit: 1.0,
      },
      {
        text: "The clinic seems to have a reason ready whenever the drip fails.",
        credit: 0.3,
      },
      {
        text: "Immune health is too complex to test any treatment.",
        credit: 0,
      },
      {
        text: "The drip probably doesn't protect; we could ask more patients.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'no real effect, excuses are patches' lead from the rival 'the drip works for the right patients,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: in a blind trial give matched patients the drip or saline and count flu cases — a real effect should show fewer cases in the drip group without any new caveats. My lead is refuted if the drip group gets significantly fewer infections than the saline group.",
      yieldAnchors: [
        "Patients still get the flu after the drip",
        "A new excuse follows each failure",
        "The clinic never says who is protected",
      ],
      riskAnchors: [
        "Drip and saline groups get flu at the same rate",
        "Recipients fare no better than non-recipients",
        "The clinic can't predict who stays well",
      ],
      defeatedBy: [
        "The drip cuts flu cases in a blind trial",
        "Each excuse was a condition stated beforehand",
      ],
    },
    correctAnswer:
      "The drip probably has no real protective effect and the excuses patch each failure; test it by predicting in advance who stays well, by comparing the drip against a saline placebo in a blind trial, and by checking whether recipients get the flu at the same rate as non-recipients.",
    explanation:
      "Full credit names the serial excuses as ad hoc rescue and runs a blind placebo trial that states its refutation; 'too complex to test' refuses the experiment.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A multivitamin company says its formula 'optimizes wellness.' Whenever a customer reports no benefit, support replies with a new reason: 'you need to take it with food,' then 'allow three months,' then 'your baseline was unusual,' then 'you must also reduce stress.' None of these conditions appeared in the original marketing, and the company has never said in advance who should feel a benefit. In one paragraph, propose the strongest lead for what is going on and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the formula has no specific wellness effect and the company is keeping its claim alive with ad hoc patches — each new condition appears only after a failure, so no result can ever disconfirm it, which marks a degenerating rather than progressive model. This is fecund because it predicts checkable consequences: the company should be unable to name in advance which customers will benefit; takers who follow every stated condition perfectly should report benefit no more often than people given an identical placebo; and the listed conditions, applied without the product, should produce the same 'wellness' reports. I would test it by demanding a pre-registered prediction of who benefits before any trial, by running a blind placebo-controlled comparison over the company's own three-month window, and by checking whether the conditions alone (food, stress reduction) reproduce the reported effect without the pills.",
      yieldAnchors: [
        "Each null report triggers a new condition",
        "The conditions were absent from original marketing",
        "The company never predicts who will benefit",
      ],
      riskAnchors: [
        "Perfect compliers report benefit no more than placebo takers",
        "The company cannot predict beneficiaries in advance",
        "The conditions alone reproduce the reported effect",
      ],
      defeatedBy: [
        "The formula beats placebo in a blind trial",
        "Every condition was published before any complaints",
        "Nothing can be concluded without years more data",
      ],
    },
    correctAnswer:
      "The strongest lead is that the formula has no specific wellness effect and the company is keeping its claim alive with ad hoc patches — each new condition appears only after a failure, so no result can ever disconfirm it, which marks a degenerating rather than progressive model. This is fecund because it predicts checkable consequences: the company should be unable to name in advance which customers will benefit; takers who follow every stated condition perfectly should report benefit no more often than people given an identical placebo; and the listed conditions, applied without the product, should produce the same 'wellness' reports. I would test it by demanding a pre-registered prediction of who benefits before any trial, by running a blind placebo-controlled comparison over the company's own three-month window, and by checking whether the conditions alone (food, stress reduction) reproduce the reported effect without the pills.",
    explanation:
      "Under CCR's inverted standard, 'nothing can be concluded without years more data' earns near-zero; top credit recognizes the after-the-fact conditions as patches and commits to a placebo test that would catch a real effect if one existed.",
  },
  {
    itemType: "written",
    prompt:
      "A day trader runs an algorithm he calls 'market-beating.' Every time it loses money he 'retunes a parameter' and explains the loss after the fact: once it was 'unusual volatility,' once 'a news shock,' once 'a holiday week.' He shows only the equity curve after each retune and has never published a forward prediction. In one paragraph, propose the strongest lead and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the algorithm has no genuine edge and is being kept alive by curve-fitting — retuning after each loss and explaining failures only in hindsight is the signature of a degenerating model that never risks a forward prediction. This is fecund because it predicts checkable things: the system should perform far worse on out-of-sample data it was not tuned on; its live, pre-committed trades should not beat a simple index or a coin flip after costs; and freezing the parameters and forbidding retunes should make the apparent edge collapse. I would test it by locking the current parameters and running them forward on unseen data with no further tuning, by logging time-stamped trades before they execute and scoring them against a buy-and-hold benchmark, and by checking whether each 'explained' loss was predicted in advance or only rationalized afterward.",
      yieldAnchors: [
        "The algorithm is retuned after every loss",
        "Losses are explained only in hindsight",
        "No forward prediction has ever been published",
      ],
      riskAnchors: [
        "Frozen parameters fail on out-of-sample data",
        "Live pre-committed trades don't beat a benchmark after costs",
        "Forbidding retunes collapses the apparent edge",
      ],
      defeatedBy: [
        "Frozen parameters keep winning on unseen data",
        "Each loss was forecast before it happened",
        "Markets are unknowable so no test is possible",
      ],
    },
    correctAnswer:
      "The strongest lead is that the algorithm has no genuine edge and is being kept alive by curve-fitting — retuning after each loss and explaining failures only in hindsight is the signature of a degenerating model that never risks a forward prediction. This is fecund because it predicts checkable things: the system should perform far worse on out-of-sample data it was not tuned on; its live, pre-committed trades should not beat a simple index or a coin flip after costs; and freezing the parameters and forbidding retunes should make the apparent edge collapse. I would test it by locking the current parameters and running them forward on unseen data with no further tuning, by logging time-stamped trades before they execute and scoring them against a buy-and-hold benchmark, and by checking whether each 'explained' loss was predicted in advance or only rationalized afterward.",
    explanation:
      "The cautious 'markets are unknowable, no test is possible' earns near-zero; credit rewards spotting the retune-after-loss pattern and committing to an out-of-sample, pre-committed test that could refute the supposed edge.",
  },
  {
    itemType: "written",
    prompt:
      "A basketball coach is sure his zone defense is the key to winning. After each loss he points to a different fluke: 'their shooter got hot,' 'the refs called it tight,' 'we were tired from travel.' Wins are always the zone working. He has never said before a game how the zone should change a measurable stat. In one paragraph, propose the strongest lead and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the zone's true effect is untested because the coach's account is degenerating — every loss is absorbed by a fresh one-off excuse and every win is credited to the zone, so the theory makes no risky prediction. This is fecund because it generates checkable consequences: if the zone works, it should measurably suppress a specific stat such as opponent points in the paint, and it should do so in losses as well as wins; results should track opponent strength more than the zone; and the coach should be able to forecast that stat before tip-off. I would test it by having him predict the opponent's paint points under the zone before each game and scoring those forecasts, by comparing the same opponents faced with and without the zone, and by checking whether the blamed flukes (hot shooting, foul rates) actually differ between wins and losses.",
      yieldAnchors: [
        "Every loss gets a different fluke excuse",
        "Wins are always credited to the zone",
        "No measurable effect is predicted before games",
      ],
      riskAnchors: [
        "The zone fails to suppress paint points in losses",
        "Results track opponent strength, not the zone",
        "The coach can't forecast the key stat in advance",
      ],
      defeatedBy: [
        "The zone reliably suppresses a stat in wins and losses",
        "Each fluke was predicted before the game",
        "Basketball is too chaotic to evaluate any scheme",
      ],
    },
    correctAnswer:
      "The strongest lead is that the zone's true effect is untested because the coach's account is degenerating — every loss is absorbed by a fresh one-off excuse and every win is credited to the zone, so the theory makes no risky prediction. This is fecund because it generates checkable consequences: if the zone works, it should measurably suppress a specific stat such as opponent points in the paint, and it should do so in losses as well as wins; results should track opponent strength more than the zone; and the coach should be able to forecast that stat before tip-off. I would test it by having him predict the opponent's paint points under the zone before each game and scoring those forecasts, by comparing the same opponents faced with and without the zone, and by checking whether the blamed flukes (hot shooting, foul rates) actually differ between wins and losses.",
    explanation:
      "Under CCR, 'basketball is too chaotic to evaluate any scheme' earns near-zero; top credit forces the win-claiming, loss-excusing theory to risk a pre-game forecast on a measurable stat.",
  },
  {
    itemType: "written",
    prompt:
      "A wellness coach sells a 'cellular detox' tea she says clears toxins and lifts energy. When a client feels no different she says 'the toxins are deep, keep going,' then 'you're in a healing crisis, that's the toxins leaving,' then 'cut more foods so it can work.' Feeling worse and feeling nothing are both taken as proof it's working. In one paragraph, propose the strongest lead and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the tea has no specific detox effect and the claim is unfalsifiable by design — when both 'no change' and 'feeling worse' are counted as the tea working, no possible result can refute it, the defining trait of a degenerating model propped up by patches. This is fecund because it predicts checkable consequences: a blind comparison against an identical-tasting placebo tea should show equal reported energy in both groups; no specific 'toxin' the coach can name should actually fall on a lab test after the tea; and the dietary cuts she keeps adding, made without the tea, should produce the same reported effects. I would test it by running a blind placebo-tea trial with energy rated on a fixed scale, by measuring a named biomarker before and after to see whether anything specific changes, and by checking whether her account can specify in advance any result that would count as the tea failing.",
      yieldAnchors: [
        "No change and feeling worse both count as success",
        "Each failure adds a new instruction",
        "No named toxin or measure is ever specified",
      ],
      riskAnchors: [
        "Placebo tea matches the real tea on reported energy",
        "No named biomarker changes after the tea",
        "The coach can name no result that would count as failure",
      ],
      defeatedBy: [
        "The tea beats placebo on a fixed energy scale",
        "A named toxin measurably falls after the tea",
        "Detox effects are too subtle to ever test",
      ],
    },
    correctAnswer:
      "The strongest lead is that the tea has no specific detox effect and the claim is unfalsifiable by design — when both 'no change' and 'feeling worse' are counted as the tea working, no possible result can refute it, the defining trait of a degenerating model propped up by patches. This is fecund because it predicts checkable consequences: a blind comparison against an identical-tasting placebo tea should show equal reported energy in both groups; no specific 'toxin' the coach can name should actually fall on a lab test after the tea; and the dietary cuts she keeps adding, made without the tea, should produce the same reported effects. I would test it by running a blind placebo-tea trial with energy rated on a fixed scale, by measuring a named biomarker before and after to see whether anything specific changes, and by checking whether her account can specify in advance any result that would count as the tea failing.",
    explanation:
      "The dodge 'detox effects are too subtle to ever test' earns near-zero; credit goes to seeing that a claim treating every outcome as confirmation risks nothing, and to the placebo-and-biomarker test that would expose it.",
  },
  {
    itemType: "written",
    prompt:
      "A plant manager keeps a favored theory that a recurring weld crack comes from 'operator error.' After retraining, cracks continue; he says 'a few operators still rush.' After a strict checklist, they continue; he says 'someone skipped it.' He has never measured cracks against weld temperature or steel batch, and the cracks cluster on parts from one supplier. In one paragraph, propose the strongest lead and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the operator-error theory is degenerating — it survives only by adding 'someone rushed' or 'someone skipped' after each failed fix, while the clustering of cracks on one supplier's parts points to a material or process cause the theory ignores. This is progressive and fecund because it makes risky predictions: cracks should track the suspect supplier's steel batches regardless of who welds them; they should correlate with measured weld temperature or steel composition rather than operator; and parts from a different supplier run by the same 'rushing' operators should crack far less. I would test it by sorting crack rates by supplier and batch while holding operators constant, by logging weld temperature and steel chemistry against cracking, and by running a blind batch swap so welders don't know which supplier's steel they're using to see whether cracks follow the metal, not the person.",
      yieldAnchors: [
        "Cracks persist after retraining and a checklist",
        "Each fix's failure gets a new 'someone rushed' excuse",
        "Cracks cluster on one supplier's parts",
      ],
      riskAnchors: [
        "Cracks track the supplier's batches regardless of welder",
        "Cracks correlate with weld temperature or steel chemistry",
        "A blind batch swap makes cracks follow the metal, not the operator",
      ],
      defeatedBy: [
        "Cracks follow specific operators across all suppliers",
        "A blind swap shows cracks ignore the supplier",
        "Weld cracks have too many causes to investigate",
      ],
    },
    correctAnswer:
      "The strongest lead is that the operator-error theory is degenerating — it survives only by adding 'someone rushed' or 'someone skipped' after each failed fix, while the clustering of cracks on one supplier's parts points to a material or process cause the theory ignores. This is progressive and fecund because it makes risky predictions: cracks should track the suspect supplier's steel batches regardless of who welds them; they should correlate with measured weld temperature or steel composition rather than operator; and parts from a different supplier run by the same 'rushing' operators should crack far less. I would test it by sorting crack rates by supplier and batch while holding operators constant, by logging weld temperature and steel chemistry against cracking, and by running a blind batch swap so welders don't know which supplier's steel they're using to see whether cracks follow the metal, not the person.",
    explanation:
      "The cautious 'weld cracks have too many causes to investigate' earns near-zero; top credit abandons the patched operator-error theory for the supplier-batch lead that the clustering supports and names a blind swap that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "degenerating-model",
  title: "The Degenerating Model",
  weekNumber: 2,
  blurb:
    "A theory that survives only by bolting on a fresh excuse after every failure has stopped earning its keep. Prefer the model that risks new predictions — and learn to catch the one kept alive by patches.",
  lectureTitle:
    "2.7 The Degenerating Model: catching a theory that survives only by bolting on patches",
  body: `# The Degenerating Model

Some theories never lose. Not because they're true, but because their owner reaches for a new excuse every time a prediction fails — "the conditions were off," "you did it wrong," "it just needs more time." Reflexive caution says you can never really tell whether such a theory is right. Constructive Critical Reasoning says you usually can: a theory that buys its survival with after-the-fact patches has stopped paying its way, and the better move is to back the rival that risks fresh predictions instead.

## Progressive vs. degenerating

A *progressive* model earns its keep by predicting new facts you didn't already know — it sticks its neck out, and the world sometimes confirms it. A *degenerating* model makes no new predictions; it only retreats, adding an excuse after each failure so that nothing could ever count against it. The tell is the direction of the explaining: a strong theory tells you what to expect *before* the data arrive; a degenerating one only tells you why it was right *after* the data disappoint.

## The patch is the warning sign

Watch for excuses that appear only once a prediction misses and were never stated up front. "Take it on an empty stomach," "you must have cheated," "the energy shifted" — each one rescues the theory from a specific failure while quietly removing any way to test it. One reasonable caveat is fine; a *growing pile* of them, each arriving just in time to absorb the latest miss, means the theory is being kept alive by hand rather than by evidence.

## Make it predict in advance

The cleanest cure is to force a forward prediction. Ask: *Before the result, what does this theory say will happen, and what result would it count as a failure?* If the owner can name neither, the theory is unfalsifiable and tells you nothing. A model that can predict tomorrow's defect rate, this season's winners, or who will benefit — and that would be embarrassed by the wrong outcome — is risking something real. That risk is exactly what makes a confirmation worth having.

## Why "you can't ever tell" loses

Throwing up your hands — "the future's uncertain, who's to say" — is the zero-credit dodge here. You usually *can* tell, by demanding a pre-committed prediction, a blind comparison, or a benchmark like a coin flip or a placebo. The degenerating theory's whole defense is that no test is possible; refusing to test simply hands it the win. The constructive move is to design the one observation it can't explain away.

## Overreach still loses

The opposite error is just as wrong: don't keep paying for the next patch on the bet that this excuse, finally, is the real one. "Each new condition might be genuine, so keep adding them until it works" is the trap the pattern sets. Endless patching is not open-mindedness; it's how a dead theory drains your time and money. Drop the model that only ever retreats, and back the one that has actually predicted something and survived.

## In the real world

A trader's algorithm loses, and each time he "retunes a parameter" and blames volatility, then a news shock, then a holiday week. He shows a beautiful curve — but only after every retune, and he has never posted a trade in advance. The dodge: "markets are unknowable, you can't judge it." The constructive lead: this is curve-fitting, a degenerating model that never risks a forward call. Freeze the parameters, run them on unseen data, and score live time-stamped trades against a simple index. If the edge survives that, it was real; if it evaporates the moment it can't be patched, you've caught the theory living on borrowed excuses.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
