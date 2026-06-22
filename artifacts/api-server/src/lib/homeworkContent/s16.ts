import type { SectionContent, HomeworkItem } from "./types";

const mcq: HomeworkItem[] = [
  {
    itemType: "mc",
    prompt:
      "A meteorologist's simple rain model works well except it missed three coastal storms. One colleague proposes a 'coastal correction' term tuned to fix exactly those three misses and nothing else. Another proposes a sea-breeze term that fixes the misses and also predicts afternoon humidity spikes on calm days. Which lead is strongest?",
    mcOptions: [
      {
        text: "Just bolt on the coastal-correction term — it makes the model fit all the past storms, so it is now the better model.",
        credit: 0,
      },
      {
        text: "The sea-breeze term earns its added complexity because, beyond patching the misses, it predicts new things; adopt it only if afternoon humidity spikes show up, the next coastal storm is caught, and removing it breaks those new predictions.",
        credit: 1.0,
      },
      {
        text: "The more detailed sea-breeze model seems to fit the storms better.",
        credit: 0.3,
      },
      {
        text: "The sea-breeze idea probably helps; keep the more detailed model and watch the next few storms.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The sea-breeze term earns its added complexity because, beyond patching the misses, it predicts new things; adopt it only if afternoon humidity spikes show up, the next coastal storm is caught, and removing it breaks those new predictions.",
    explanation:
      "Added structure is worth its cost only when it buys new, checkable predictions; the top answer names them and tests them. The coastal-correction patch that fits only the cases it was tuned on is hollow complexity and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "An app's crash-prediction rule flags most crashes but misses some on older phones. An engineer adds a rule that simply lists the exact device IDs that crashed last week. A teammate instead adds a low-memory threshold that flags those devices and predicts new crashes on any phone under that memory line. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The low-memory threshold is the earned addition because it predicts crashes on phones not yet seen; keep it only if new low-memory phones crash as predicted and high-memory ones stay clean.",
        credit: 1.0,
      },
      {
        text: "The detailed device-ID list seems to catch more crashes.",
        credit: 0.3,
      },
      {
        text: "Crash causes are too tangled to say which addition is better.",
        credit: 0,
      },
      {
        text: "The memory idea probably helps; keep the longer rule set and monitor crashes.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The low-memory threshold is the earned addition because it predicts crashes on phones not yet seen; keep it only if new low-memory phones crash as predicted and high-memory ones stay clean.",
    explanation:
      "The memory threshold pays for its complexity by generalizing to unseen devices; the device-ID list only re-describes last week's crashes. The 'too tangled to say' refusal abandons a decidable question and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A retailer's sales model under-predicts a few odd weeks. The analyst can either add a separate dummy variable for each surprising week, or add a 'local sports event' factor that explains those weeks and forecasts spikes around future scheduled games. Which lead opens the most inquiry?",
    mcOptions: [
      {
        text: "Adding one dummy per odd week is fine — every past week now matches the model exactly.",
        credit: 0,
      },
      {
        text: "The detailed model with extra terms seems to track sales more closely.",
        credit: 0.3,
      },
      {
        text: "The sports-event factor justifies its complexity by forecasting spikes around upcoming games; adopt it only if those scheduled-game weeks actually spike and non-game odd weeks stay unexplained.",
        credit: 1.0,
      },
      {
        text: "The event factor probably matters; keep it in the model and see how forecasts go.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The sports-event factor justifies its complexity by forecasting spikes around upcoming games; adopt it only if those scheduled-game weeks actually spike and non-game odd weeks stay unexplained.",
    explanation:
      "A per-week dummy fits the past perfectly but predicts nothing new — pure curve-fitting. The event factor earns its structure by making out-of-sample forecasts; the dummy-per-week approach is the defeated hollow move.",
  },
  {
    itemType: "mc",
    prompt:
      "A cook's bread keeps coming out dense on some days. She could add a private list of 'bad days' to avoid baking, or adopt the theory that high kitchen humidity slackens the dough, which predicts dense loaves whenever a hygrometer reads high and lighter loaves when she cuts the water on humid days. Which lead is strongest?",
    mcOptions: [
      {
        text: "Humid air probably slackens the dough; this earns its added detail by predicting dense loaves at high hygrometer readings and lighter loaves when she reduces water on those days — test both before trusting it.",
        credit: 1.0,
      },
      {
        text: "The humidity idea seems to explain the dense days.",
        credit: 0.3,
      },
      {
        text: "Just keep a list of bad days and skip baking then — that accounts for every dense loaf so far.",
        credit: 0,
      },
      {
        text: "Humidity probably matters; she could track it and adjust as she goes.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Humid air probably slackens the dough; this earns its added detail by predicting dense loaves at high hygrometer readings and lighter loaves when she reduces water on those days — test both before trusting it.",
    explanation:
      "The humidity mechanism makes new, checkable predictions and even suggests a fix, so its complexity pays for itself. The 'list of bad days' merely records the anomalies without predicting or fixing anything — hollow.",
  },
  {
    itemType: "mc",
    prompt:
      "A coach's shot-quality model misjudges one player's makes. An assistant proposes a per-player fudge factor for everyone whose makes were mispredicted. The coach proposes adding shot-clock pressure, which fixes the misses and predicts lower accuracy for all players in the final four seconds. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The per-player fudge factors are best — once added, every player's past makes line up with the model.",
        credit: 0,
      },
      {
        text: "The shot-clock factor seems to improve the model.",
        credit: 0.3,
      },
      {
        text: "Shot-clock pressure probably matters; leave it in and watch the numbers.",
        credit: 0.6,
      },
      {
        text: "Shot-clock pressure earns its place because it predicts a league-wide drop in the final four seconds, not just one player's misses; keep it only if that late-clock dip appears across players and disappears in open early possessions.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "Shot-clock pressure earns its place because it predicts a league-wide drop in the final four seconds, not just one player's misses; keep it only if that late-clock dip appears across players and disappears in open early possessions.",
    explanation:
      "Shot-clock pressure is productive complexity: one added factor that predicts a broad new pattern. Per-player fudge factors add many parameters that explain only the cases they were fit to — hollow rescue.",
  },
  {
    itemType: "mc",
    prompt:
      "A birder's migration-timing model is off for one species. A friend suggests adding a unique arrival-date constant for that species. The birder suggests adding a 'food-peak tracking' rule, which fixes that species and predicts that several other insect-eating birds will also shift earlier in warm springs. Which lead opens the most inquiry?",
    mcOptions: [
      {
        text: "Add the species-specific arrival constant — it makes that bird's past arrivals fit perfectly.",
        credit: 0,
      },
      {
        text: "The food-peak rule earns its complexity by predicting earlier arrivals for other insect-eaters in warm springs; adopt it only if those species shift too and seed-eaters do not.",
        credit: 1.0,
      },
      {
        text: "The food-peak idea seems to fit the timing better.",
        credit: 0.3,
      },
      {
        text: "Food peaks probably matter; keep the rule and check next spring.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The food-peak rule earns its complexity by predicting earlier arrivals for other insect-eaters in warm springs; adopt it only if those species shift too and seed-eaters do not.",
    explanation:
      "The food-peak mechanism generalizes to other species and even names who should NOT shift, exposing it to refutation. The per-species constant only re-fits one case and buys no new prediction.",
  },
  {
    itemType: "mc",
    prompt:
      "A hospital's readmission model misses a cluster of patients. An analyst adds an indicator for the exact diagnoses in that cluster. A nurse proposes adding a 'lives alone' factor, which covers the cluster and predicts higher readmission for solitary patients across all diagnoses. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Readmissions have too many drivers to judge which addition is better.",
        credit: 0,
      },
      {
        text: "The 'lives alone' factor seems to explain the missed patients.",
        credit: 0.3,
      },
      {
        text: "The 'lives alone' factor justifies its complexity by predicting more readmissions for solitary patients in other diagnoses too; keep it only if that holds and falls away when home support is present.",
        credit: 1.0,
      },
      {
        text: "Living alone probably matters; add it and track readmissions.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The 'lives alone' factor justifies its complexity by predicting more readmissions for solitary patients in other diagnoses too; keep it only if that holds and falls away when home support is present.",
    explanation:
      "The social-isolation factor pays its way by predicting a pattern beyond the original cluster. The diagnosis indicator only labels the cluster it was built from; 'too many drivers to judge' ducks a question the data can settle.",
  },
  {
    itemType: "mc",
    prompt:
      "A teacher's quiz-score model under-predicts a handful of students. She can add a personal bonus term for each of those students, or add 'attends the after-school help session,' which explains them and predicts gains for anyone who starts attending. Which lead is strongest?",
    mcOptions: [
      {
        text: "The help-session factor earns its complexity by predicting score gains for new attendees; adopt it only if students who start attending improve and those who stop regress.",
        credit: 1.0,
      },
      {
        text: "Add a personal bonus for each surprising student — then the model matches every past score.",
        credit: 0,
      },
      {
        text: "Attending help sessions seems to explain the high scorers.",
        credit: 0.3,
      },
      {
        text: "The help session probably matters; keep the factor and watch the next quizzes.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The help-session factor earns its complexity by predicting score gains for new attendees; adopt it only if students who start attending improve and those who stop regress.",
    explanation:
      "The attendance factor makes a forward-looking, refutable prediction, so its added structure is productive. Per-student bonus terms fit the past with no predictive payoff — hollow complexity.",
  },
  {
    itemType: "mc",
    prompt:
      "A plant's defect model fails on certain batches. The quality team can add a flag for each problem batch number, or add a 'humidity above 60% during curing' factor that covers those batches and predicts defects in any future high-humidity cure. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The humidity factor earns its complexity by predicting defects in future high-humidity cures; keep it only if those batches fail and dehumidified cures come out clean.",
        credit: 1.0,
      },
      {
        text: "The humidity idea seems to line up with the bad batches.",
        credit: 0.3,
      },
      {
        text: "Flag each problem batch number — that accounts for every defect on record.",
        credit: 0,
      },
      {
        text: "Humidity probably matters; add it and keep an eye on defects.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The humidity factor earns its complexity by predicting defects in future high-humidity cures; keep it only if those batches fail and dehumidified cures come out clean.",
    explanation:
      "The humidity factor generalizes and suggests an intervention, so its complexity pays. Flagging individual batch numbers re-describes known failures and predicts nothing — the hollow patch the data should make you reject.",
  },
  {
    itemType: "mc",
    prompt:
      "An amateur astronomer's model of a star's brightness drifts off on some nights. He can add a separate offset for each off night, or add a 'thin high cloud' term tied to the night's haze reading, which fixes those nights and predicts dimming on any future hazy night. Which lead opens the most inquiry?",
    mcOptions: [
      {
        text: "Per-night offsets are fine — with one for each off night, the whole light curve fits.",
        credit: 0,
      },
      {
        text: "The haze term earns its added complexity by predicting dimming on future hazy nights; adopt it only if measured haze tracks the dimming and clear nights match the base model.",
        credit: 1.0,
      },
      {
        text: "The haze idea seems to explain the off nights.",
        credit: 0.3,
      },
      {
        text: "Haze probably matters; keep the term and check upcoming nights.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The haze term earns its added complexity by predicting dimming on future hazy nights; adopt it only if measured haze tracks the dimming and clear nights match the base model.",
    explanation:
      "The haze term ties the anomaly to a measurable cause and predicts new nights, so its structure is earned. Per-night offsets fit any data whatsoever and so explain nothing — the defeated move.",
  },
  {
    itemType: "mc",
    prompt:
      "A subscription firm's churn model misses some cancellations. A data scientist proposes adding interaction terms hand-picked to capture exactly the missed accounts. A colleague proposes a single 'support-ticket left unresolved over 7 days' feature that covers them and predicts churn for any account with a stale ticket. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The stale-ticket feature seems to catch the missed churners.",
        credit: 0.3,
      },
      {
        text: "The stale-ticket feature earns its complexity by predicting churn for any account with an unresolved ticket; keep it only if such accounts churn more and resolving tickets fast lowers churn.",
        credit: 1.0,
      },
      {
        text: "Add the hand-picked interaction terms — they make the model fit every past cancellation.",
        credit: 0,
      },
      {
        text: "Stale tickets probably matter; add the feature and watch churn.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The stale-ticket feature earns its complexity by predicting churn for any account with an unresolved ticket; keep it only if such accounts churn more and resolving tickets fast lowers churn.",
    explanation:
      "The stale-ticket feature is one interpretable addition that predicts and suggests a fix. Hand-picked interaction terms tuned to the missed accounts are classic overfitting — hollow complexity that buys no new prediction.",
  },
  {
    itemType: "mc",
    prompt:
      "A gardener's model of which seedlings sprout fails for a few trays. She can add a note marking those exact trays as 'duds,' or adopt 'trays nearest the cold window sprout slower,' which covers them and predicts slow sprouting for any tray placed by that window. Which lead is strongest?",
    mcOptions: [
      {
        text: "Mark the failing trays as duds — that explains every poor tray so far.",
        credit: 0,
      },
      {
        text: "The cold-window idea seems to fit the slow trays.",
        credit: 0.3,
      },
      {
        text: "The cold-window factor earns its complexity by predicting slow sprouting for any future tray by the window; adopt it only if moving a tray there slows it and moving it away speeds it up.",
        credit: 1.0,
      },
      {
        text: "The window probably matters; keep the factor and watch the next trays.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The cold-window factor earns its complexity by predicting slow sprouting for any future tray by the window; adopt it only if moving a tray there slows it and moving it away speeds it up.",
    explanation:
      "The cold-window rule predicts new cases and proposes a swap test, so its complexity is productive. Labeling trays 'duds' merely records failures and offers no test — the hollow patch.",
  },
  {
    itemType: "mc",
    prompt:
      "A coffee roaster's flavor model is off for several batches. He can add a unique tasting-note correction per off batch, or add a 'bean moisture at roast' factor that covers them and predicts flatter flavor for any batch roasted above a moisture line. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The moisture factor earns its complexity by predicting flat flavor in future high-moisture batches; keep it only if those batches taste flat and drying the beans first restores flavor.",
        credit: 1.0,
      },
      {
        text: "The moisture idea seems to explain the off batches.",
        credit: 0.3,
      },
      {
        text: "Flavor has too many inputs to judge which addition is better.",
        credit: 0,
      },
      {
        text: "Moisture probably matters; add the factor and taste the next batches.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The moisture factor earns its complexity by predicting flat flavor in future high-moisture batches; keep it only if those batches taste flat and drying the beans first restores flavor.",
    explanation:
      "The moisture factor predicts new batches and yields an intervention, so it pays for itself. 'Too many inputs to judge' refuses a question the moisture test can decide — the zero-credit dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A courier's delivery-time model under-predicts on certain routes. The planner can add a fixed delay constant for each slow route, or add a 'crosses two or more rail crossings' factor that covers them and predicts delays on any route with multiple crossings. Which lead opens the most inquiry?",
    mcOptions: [
      {
        text: "Add a delay constant per slow route — every past route then matches the model.",
        credit: 0,
      },
      {
        text: "The rail-crossing factor seems to explain the slow routes.",
        credit: 0.3,
      },
      {
        text: "Rail crossings probably matter; keep the factor and watch delivery times.",
        credit: 0.6,
      },
      {
        text: "The rail-crossing factor earns its complexity by predicting delays on any multi-crossing route, including new ones; adopt it only if such routes run late and rerouting around crossings restores the time.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The rail-crossing factor earns its complexity by predicting delays on any multi-crossing route, including new ones; adopt it only if such routes run late and rerouting around crossings restores the time.",
    explanation:
      "The crossing factor generalizes to unseen routes and suggests a reroute test, so its structure is earned. Per-route delay constants fit the known slow routes and predict nothing — the hollow rescue.",
  },
  {
    itemType: "mc",
    prompt:
      "A music app's skip-prediction model misjudges some tracks. A team can add a custom adjustment for each mispredicted song, or add a 'long instrumental intro' feature that covers them and predicts skips for any track with a 20-second-plus intro. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The intro-length feature earns its complexity by predicting skips for any long-intro track; keep it only if such tracks get skipped more and trimming the intro lowers skips.",
        credit: 1.0,
      },
      {
        text: "The intro-length idea seems to fit the skipped songs.",
        credit: 0.3,
      },
      {
        text: "Add a custom adjustment per mispredicted song — then every track's skip rate fits.",
        credit: 0,
      },
      {
        text: "Long intros probably matter; add the feature and watch the skip rates.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The intro-length feature earns its complexity by predicting skips for any long-intro track; keep it only if such tracks get skipped more and trimming the intro lowers skips.",
    explanation:
      "The intro-length feature predicts new tracks and proposes an edit test, so its complexity is productive. A custom per-song adjustment overfits the known cases and earns its keep nowhere new.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A SaaS team's revenue model under-predicts a few months. One option adds a one-off boost constant for each surprising month. The other adds an 'annual-plan renewal wave' term that explains those months and predicts revenue bumps each anniversary of a big sign-up cohort. Which lead best follows?",
    mcOptions: [
      {
        text: "The renewal-wave term earns its complexity by predicting bumps on future cohort anniversaries; adopt it only if revenue spikes on those dates and flattens when a cohort churns.",
        credit: 1.0,
      },
      {
        text: "The renewal-wave idea seems to explain the high months.",
        credit: 0.3,
      },
      {
        text: "Add a boost constant per surprising month — that fits every past month.",
        credit: 0,
      },
      {
        text: "Renewal waves probably matter; keep the term and watch revenue.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your renewal-wave lead from the rival 'those months were just lucky one-offs,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: line up the surprising months against the anniversaries of large sign-up cohorts and check the next anniversary date for a predicted bump — the wave lead says revenue should rise there. It is refuted if the upcoming cohort anniversary passes with no bump and the past spikes fall on dates unrelated to any cohort.",
      yieldAnchors: [
        "The model under-predicts a few specific months",
        "Those months can be matched to sign-up cohorts a year earlier",
        "Other months fit the base model",
      ],
      riskAnchors: [
        "Revenue spikes on future cohort anniversaries",
        "The spike flattens when a cohort churns",
        "Non-anniversary months stay on the base trend",
      ],
      defeatedBy: [
        "Each surprising month is an unrelated one-off",
        "A separate constant per month is the better model",
      ],
    },
    correctAnswer:
      "The renewal-wave term earns its complexity by predicting bumps on future cohort anniversaries; adopt it only if revenue spikes on those dates and flattens when a cohort churns.",
    explanation:
      "The renewal-wave term predicts future dated events, so its added structure pays for itself; per-month constants fit the past with no forward prediction and are the hollow rescue.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An angler's catch model is off on some trips. He can add a 'good day / bad day' tag for each surprising outing, or add a 'water clarity after rain' factor that covers them and predicts poor catches whenever runoff clouds the water. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Catch rates are too unpredictable to judge which addition is better.",
        credit: 0,
      },
      {
        text: "The clarity factor earns its complexity by predicting poor catches on future muddy-water days; keep it only if catches drop when clarity is low and recover once the water clears.",
        credit: 1.0,
      },
      {
        text: "Water clarity seems to explain the bad trips.",
        credit: 0.3,
      },
      {
        text: "Clarity probably matters; add the factor and keep fishing.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your water-clarity lead from the rival 'the fish just bite less on some random days,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: measure water clarity with a simple secchi disk at the start of each trip and compare catch against clarity — the lead predicts low catches on cloudy water and good ones on clear. It is refuted if catches are unrelated to the clarity reading, with poor trips on clear water and good trips on muddy water.",
      yieldAnchors: [
        "The catch model misses on certain trips",
        "The off trips followed rain",
        "Other trips fit the model",
      ],
      riskAnchors: [
        "Catch drops when clarity is low",
        "Catch recovers when the water clears",
        "Clarity readings track catch across trips",
      ],
      defeatedBy: [
        "Fish simply bite less on random days",
        "A per-trip good/bad tag is the better model",
      ],
    },
    correctAnswer:
      "The clarity factor earns its complexity by predicting poor catches on future muddy-water days; keep it only if catches drop when clarity is low and recover once the water clears.",
    explanation:
      "The clarity factor predicts new trips from a measurable cause, so its complexity is earned; per-trip tags explain only the trips they label, and 'too unpredictable to judge' ducks a measurable question.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A mechanic's fuel-economy model is wrong for several cars. He can add a personal correction per car, or add a 'underinflated tires' factor that covers them and predicts worse mileage for any car whose tire pressure is below spec. Which lead is strongest?",
    mcOptions: [
      {
        text: "The tire-pressure factor earns its complexity by predicting worse mileage on any low-pressure car; adopt it only if mileage falls with pressure and reinflating restores it.",
        credit: 1.0,
      },
      {
        text: "Tire pressure seems to explain the thirsty cars.",
        credit: 0.3,
      },
      {
        text: "Add a correction per car — that makes every car's mileage fit the model.",
        credit: 0,
      },
      {
        text: "Tire pressure probably matters; add the factor and watch mileage.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your tire-pressure lead from the rival 'those particular cars are just inefficient,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check tire pressure on the thirsty cars, reinflate to spec, and re-measure mileage — the lead predicts mileage should rise toward normal. It is refuted if the cars stay thirsty after correct inflation, showing the car, not the tires, is the cause.",
      yieldAnchors: [
        "The mileage model is wrong for several cars",
        "Those cars share low tire pressure",
        "Other cars fit the model",
      ],
      riskAnchors: [
        "Mileage falls as pressure drops below spec",
        "Reinflating restores mileage",
        "Correctly inflated cars match the base model",
      ],
      defeatedBy: [
        "Those specific cars are simply inefficient",
        "A per-car correction is the better model",
      ],
    },
    correctAnswer:
      "The tire-pressure factor earns its complexity by predicting worse mileage on any low-pressure car; adopt it only if mileage falls with pressure and reinflating restores it.",
    explanation:
      "The tire-pressure factor predicts new cars and offers a reinflate-and-remeasure test, so its complexity pays; per-car corrections fit the known cars and predict nothing new.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An e-commerce team's recommendation model misranks some products. An engineer adds boosts hand-tuned for those exact products, while a colleague adds a 'frequently bought together with a current bestseller' signal that covers them and predicts lift for other accessory items. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The bought-together signal seems to fix the misranked items.",
        credit: 0.3,
      },
      {
        text: "Add hand-tuned boosts for those products — the rankings then match every past sale.",
        credit: 0,
      },
      {
        text: "The bought-together signal earns its complexity by predicting lift for other accessory items, not just the ones it was built on; keep it only if those accessories sell more when surfaced and the signal fades when the bestseller does.",
        credit: 1.0,
      },
      {
        text: "The signal probably helps; add it and watch conversions.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your bought-together lead from the rival 'those particular products just needed a manual boost,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: apply the bought-together signal to accessories it was NOT tuned on and see whether their conversions rise when surfaced beside the matching bestseller. It is refuted if only the originally hand-picked products improve and the signal does nothing for new accessory items.",
      yieldAnchors: [
        "The model misranks some products",
        "Those products pair with current bestsellers",
        "Other rankings are fine",
      ],
      riskAnchors: [
        "Untuned accessories also convert better when surfaced",
        "The lift fades when the paired bestseller declines",
        "Non-accessory items show no lift",
      ],
      defeatedBy: [
        "Those products merely needed a manual boost",
        "Hand-tuned per-product boosts are the better model",
      ],
    },
    correctAnswer:
      "The bought-together signal earns its complexity by predicting lift for other accessory items, not just the ones it was built on; keep it only if those accessories sell more when surfaced and the signal fades when the bestseller does.",
    explanation:
      "The bought-together signal generalizes beyond its training cases, the mark of productive complexity; hand-tuned boosts overfit the picked products and predict nothing for new ones.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An epidemiologist's outbreak model under-predicts in some towns. She can add a town-specific bump for each, or add a 'large indoor gathering the prior week' factor that covers them and predicts surges after future big events. Which lead opens the most inquiry?",
    mcOptions: [
      {
        text: "Add a town-specific bump for each — every past surge then fits the model.",
        credit: 0,
      },
      {
        text: "The gathering factor earns its complexity by predicting surges after future large events; adopt it only if cases rise about a week after big gatherings and stay flat where none occur.",
        credit: 1.0,
      },
      {
        text: "Large gatherings seem to explain the surge towns.",
        credit: 0.3,
      },
      {
        text: "Gatherings probably matter; keep the factor and watch case counts.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your gathering lead from the rival 'those towns just surge unpredictably,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: take a scheduled upcoming large gathering and watch whether cases rise roughly a week later as the lead predicts. It is refuted if the post-event week shows no rise and the past surges fall in towns and weeks with no preceding gathering.",
      yieldAnchors: [
        "The model under-predicts in some towns",
        "Those towns held large indoor gatherings the prior week",
        "Other towns fit the model",
      ],
      riskAnchors: [
        "Cases rise about a week after a scheduled gathering",
        "Towns with no gatherings stay flat",
        "The lag length is consistent across events",
      ],
      defeatedBy: [
        "Those towns surge for no traceable reason",
        "A per-town bump is the better model",
      ],
    },
    correctAnswer:
      "The gathering factor earns its complexity by predicting surges after future large events; adopt it only if cases rise about a week after big gatherings and stay flat where none occur.",
    explanation:
      "The gathering factor predicts dated future surges with a consistent lag, earning its structure; per-town bumps fit the past and forecast nothing, the hollow rescue.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A bakery's daily-demand model misses on scattered days. The owner can add a one-day correction for each, or add a 'farmers' market across the street is open' factor that covers them and predicts higher demand on every future market day. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Demand has too many drivers to choose between the additions.",
        credit: 0,
      },
      {
        text: "Market days seem to explain the busy days.",
        credit: 0.3,
      },
      {
        text: "The market-day factor earns its complexity by predicting higher demand on every future market day; keep it only if sales rise on those days and drop back when the market is closed.",
        credit: 1.0,
      },
      {
        text: "The market probably matters; add the factor and watch sales.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your market-day lead from the rival 'those days were just busy by chance,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: look at the published market schedule and check whether the next few market days show the predicted demand spike while non-market days sit on the base trend. It is refuted if market days are no busier than ordinary days and the past spikes fall on dates with no market.",
      yieldAnchors: [
        "The demand model misses on scattered days",
        "Those days coincide with the farmers' market",
        "Other days fit the model",
      ],
      riskAnchors: [
        "Sales rise on scheduled market days",
        "Sales fall back when the market is closed",
        "Non-market days stay on the base trend",
      ],
      defeatedBy: [
        "Those days were busy purely by chance",
        "A per-day correction is the better model",
      ],
    },
    correctAnswer:
      "The market-day factor earns its complexity by predicting higher demand on every future market day; keep it only if sales rise on those days and drop back when the market is closed.",
    explanation:
      "The market-day factor predicts future scheduled days and is cheaply refutable, so its complexity pays; one-day corrections explain only their own days and 'too many drivers' ducks a settleable question.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A chess coach's engine-agreement model is off in certain positions. A student adds a per-position fudge for each, while the coach adds an 'open-file rook pressure' feature that covers them and predicts engine preference for rook moves in other open-file positions. Which lead is strongest?",
    mcOptions: [
      {
        text: "The rook-pressure feature earns its complexity by predicting engine choices in new open-file positions; adopt it only if it matches the engine there and fails to apply in closed positions.",
        credit: 1.0,
      },
      {
        text: "Add a fudge per position — the model then matches every analyzed game.",
        credit: 0,
      },
      {
        text: "The rook-pressure idea seems to explain the off positions.",
        credit: 0.3,
      },
      {
        text: "Rook pressure probably matters; add the feature and review more games.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your rook-pressure lead from the rival 'those positions are just one-off exceptions,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: take fresh open-file positions the feature was not tuned on and check whether the engine favors the rook move it predicts. It is refuted if the feature only matches the originally flagged positions and gives no better-than-chance prediction on new open-file cases.",
      yieldAnchors: [
        "The agreement model is off in certain positions",
        "Those positions share an open file with rook pressure",
        "Other positions fit the model",
      ],
      riskAnchors: [
        "The engine favors the predicted rook move in new open-file positions",
        "The feature does not apply in closed positions",
        "Prediction holds beyond the tuned set",
      ],
      defeatedBy: [
        "Those positions are isolated one-off exceptions",
        "A per-position fudge is the better model",
      ],
    },
    correctAnswer:
      "The rook-pressure feature earns its complexity by predicting engine choices in new open-file positions; adopt it only if it matches the engine there and fails to apply in closed positions.",
    explanation:
      "The rook-pressure feature predicts unseen positions, so its complexity is productive; a per-position fudge fits the analyzed games and generalizes nowhere.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An agronomist's yield model under-predicts in some fields. She can add a field-specific constant for each, or add a 'tile drainage installed' factor that covers them and predicts higher yields in any well-drained field, especially in wet years. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The drainage idea seems to explain the high-yield fields.",
        credit: 0.3,
      },
      {
        text: "Add a field-specific constant for each — every field's yield then fits the model.",
        credit: 0,
      },
      {
        text: "Drainage probably matters; add the factor and watch yields.",
        credit: 0.6,
      },
      {
        text: "The drainage factor earns its complexity by predicting higher yields in other drained fields and a bigger gap in wet years; keep it only if drained fields out-yield in wet seasons and the gap shrinks in dry ones.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your drainage lead from the rival 'those fields are just naturally more fertile,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare drained and undrained fields specifically in a wet year, where the lead predicts the drainage gap should be largest. It is refuted if drained fields show no yield advantage in wet years, or the advantage is identical in dry years, pointing to baseline fertility instead.",
      yieldAnchors: [
        "The model under-predicts in some fields",
        "Those fields have tile drainage",
        "Other fields fit the model",
      ],
      riskAnchors: [
        "Drained fields out-yield others in wet years",
        "The advantage shrinks in dry years",
        "Newly drained fields gain yield",
      ],
      defeatedBy: [
        "Those fields are simply more fertile by nature",
        "A per-field constant is the better model",
      ],
    },
    correctAnswer:
      "The drainage factor earns its complexity by predicting higher yields in other drained fields and a bigger gap in wet years; keep it only if drained fields out-yield in wet seasons and the gap shrinks in dry ones.",
    explanation:
      "The drainage factor predicts a weather-dependent pattern across fields, so its structure is earned; per-field constants fit the known fields and make no transferable prediction.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A call center's wait-time model is wrong on certain afternoons. The lead can add a correction for each bad afternoon, or add a 'second team on lunch break' factor that covers them and predicts longer waits during any overlapping break window. Which lead opens the most inquiry?",
    mcOptions: [
      {
        text: "Add a correction per bad afternoon — every past wait then matches the model.",
        credit: 0,
      },
      {
        text: "Lunch overlap seems to explain the slow afternoons.",
        credit: 0.3,
      },
      {
        text: "The break-overlap factor earns its complexity by predicting long waits in any overlapping break window; adopt it only if waits spike during overlaps and staggering breaks removes the spike.",
        credit: 1.0,
      },
      {
        text: "Break overlap probably matters; keep the factor and watch wait times.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your break-overlap lead from the rival 'those afternoons were just unusually busy,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: stagger the two teams' breaks for a week and see whether the afternoon wait spikes disappear as the lead predicts. It is refuted if waits stay high even with staggered breaks, or if the past spikes occurred on afternoons when breaks did not actually overlap.",
      yieldAnchors: [
        "The wait model is wrong on certain afternoons",
        "Those afternoons had overlapping team breaks",
        "Other afternoons fit the model",
      ],
      riskAnchors: [
        "Waits spike during overlapping break windows",
        "Staggering breaks removes the spike",
        "Non-overlap afternoons stay on the base trend",
      ],
      defeatedBy: [
        "Those afternoons were just unusually busy",
        "A per-afternoon correction is the better model",
      ],
    },
    correctAnswer:
      "The break-overlap factor earns its complexity by predicting long waits in any overlapping break window; adopt it only if waits spike during overlaps and staggering breaks removes the spike.",
    explanation:
      "The break-overlap factor predicts new windows and offers a staggering intervention, so its complexity pays; per-afternoon corrections re-describe known spikes and predict nothing.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A lake manager's algae-bloom model fits most summers but missed two big blooms. A consultant offers to fix it by adding a separate 'unexplained event' term for each of those two summers, which makes the historical curve match perfectly. The manager notices both missed blooms followed weeks when a nearby farm spread fertilizer before heavy rain. In one paragraph, propose the strongest lead for the blooms and describe how you would test it, judging whether any added complexity actually pays for itself.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that fertilizer runoff after heavy rain delivers a nutrient pulse that triggers the blooms, so the model should gain not two ad hoc 'event' terms but one runoff factor tied to rainfall-following-fertilization — added structure that earns its keep by predicting new blooms rather than just re-fitting the two it was built on. This is productive complexity because it makes checkable predictions: phosphorus readings should spike in the days after fertilize-then-rain sequences; future such sequences should be followed by blooms while dry-spell fertilization is not; and a buffer strip or timing change at the farm should reduce blooms. I would test it by sampling nutrient levels after the next fertilize-and-rain event, by watching whether the model's runoff factor forecasts the next bloom out-of-sample, and by checking that removing the factor only worsens fit where runoff occurred. The two-term patch is hollow: it fits the past exactly but predicts no new bloom and suggests no intervention.",
      yieldAnchors: [
        "The model missed two big blooms",
        "Both missed blooms followed fertilizer spread before heavy rain",
        "The base model fits other summers",
      ],
      riskAnchors: [
        "Phosphorus spikes after fertilize-then-rain sequences",
        "Future such sequences are followed by blooms; dry-spell fertilization is not",
        "A buffer strip or timing change reduces blooms",
      ],
      defeatedBy: [
        "Adding one 'unexplained event' term per missed summer is the better model",
        "The blooms are random and unconnected to runoff",
        "Nothing can be concluded from only two missed blooms",
      ],
    },
    correctAnswer:
      "The strongest lead is that fertilizer runoff after heavy rain delivers a nutrient pulse that triggers the blooms, so the model should gain not two ad hoc 'event' terms but one runoff factor tied to rainfall-following-fertilization — added structure that earns its keep by predicting new blooms rather than just re-fitting the two it was built on. This is productive complexity because it makes checkable predictions: phosphorus readings should spike in the days after fertilize-then-rain sequences; future such sequences should be followed by blooms while dry-spell fertilization is not; and a buffer strip or timing change at the farm should reduce blooms. I would test it by sampling nutrient levels after the next fertilize-and-rain event, by watching whether the model's runoff factor forecasts the next bloom out-of-sample, and by checking that removing the factor only worsens fit where runoff occurred. The two-term patch is hollow: it fits the past exactly but predicts no new bloom and suggests no intervention.",
    explanation:
      "Under CCR, adding one ad hoc term per anomaly earns near-zero because it buys no new prediction, and 'nothing can be concluded from two blooms' is the cautious dodge; top credit goes to the runoff factor whose extra structure pays for itself in out-of-sample forecasts and an intervention.",
  },
  {
    itemType: "written",
    prompt:
      "An airline's engine-maintenance model flags most failing parts but missed several. The vendor proposes adding a long list of specific part serial numbers that failed, so the model now 'catches' all past failures. An analyst notices every missed part came from engines that had logged the most cold-weather starts. In one paragraph, propose the strongest lead and how you would test it, deciding whether the proposed added complexity earns its place.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that repeated cold-weather starts stress the part through thermal cycling, so the model should add a cold-start-count factor rather than a roster of serial numbers — structure that earns its keep by predicting which not-yet-failed parts are at risk, not merely listing the ones already broken. This is productive because it generates checkable predictions: parts with high cold-start counts should fail sooner even in engines never seen before; inspecting high-cold-start parts should reveal more thermal-fatigue cracking; and pre-warming procedures should lower the failure rate. I would test it by ranking the current fleet by cold-start count and checking whether the high end fails first, by tearing down a sample of high-count parts for fatigue signatures, and by trialing pre-warm starts on one base and comparing failures. The serial-number list is hollow complexity: it perfectly fits known failures, predicts no future one, and offers no fix.",
      yieldAnchors: [
        "The model missed several failing parts",
        "Every missed part came from engines with the most cold-weather starts",
        "The base model catches most failures",
      ],
      riskAnchors: [
        "High cold-start parts fail sooner in unseen engines",
        "Teardowns of high-count parts show thermal-fatigue cracking",
        "Pre-warming starts lowers the failure rate",
      ],
      defeatedBy: [
        "A list of failed serial numbers is the better model",
        "The failures are random and tied to no condition",
        "Too few misses to suspect any cause",
      ],
    },
    correctAnswer:
      "The strongest lead is that repeated cold-weather starts stress the part through thermal cycling, so the model should add a cold-start-count factor rather than a roster of serial numbers — structure that earns its keep by predicting which not-yet-failed parts are at risk, not merely listing the ones already broken. This is productive because it generates checkable predictions: parts with high cold-start counts should fail sooner even in engines never seen before; inspecting high-cold-start parts should reveal more thermal-fatigue cracking; and pre-warming procedures should lower the failure rate. I would test it by ranking the current fleet by cold-start count and checking whether the high end fails first, by tearing down a sample of high-count parts for fatigue signatures, and by trialing pre-warm starts on one base and comparing failures. The serial-number list is hollow complexity: it perfectly fits known failures, predicts no future one, and offers no fix.",
    explanation:
      "A serial-number roster is a textbook hollow patch — perfect past fit, zero predictive yield — and 'too few misses to suspect anything' is the cautious refusal; credit rewards the cold-start factor whose added structure predicts unseen failures and names a teardown and a pre-warm test.",
  },
  {
    itemType: "written",
    prompt:
      "A school district's dropout-risk model misses some students. A consultant suggests adding hand-picked rules that exactly capture the students who already dropped out, boosting the model's accuracy on past data to near 100%. A counselor notices the missed students nearly all had a sharp rise in unexcused absences in a single month before leaving. In one paragraph, propose the strongest lead and how you would test it, judging whether the added complexity pays for itself.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that a sudden spike in unexcused absences marks a fast slide toward dropping out, so the model should add an absence-acceleration feature rather than rules reverse-engineered from past dropouts — added structure that earns its place by flagging at-risk students before they leave, not after. This is productive because it predicts checkable things: students whose absences spike this term should be likelier to drop out next term; an early outreach when the spike is detected should reduce dropout; and the feature should add little where absences are stable. I would test it by holding out a recent cohort and checking whether the absence-spike feature predicts their dropouts out-of-sample, by piloting counselor outreach triggered by the spike and comparing dropout rates, and by confirming the feature degrades gracefully (not perfectly) on past data, unlike the hand-picked rules. Those rules are hollow: 100% past accuracy that comes from fitting the very students they were drawn from predicts no new case.",
      yieldAnchors: [
        "The risk model misses some students",
        "Missed students had a sharp one-month rise in unexcused absences before leaving",
        "The base model fits most students",
      ],
      riskAnchors: [
        "Absence-spike students drop out more next term",
        "Early outreach on a detected spike lowers dropout",
        "The feature adds little where absences are stable",
      ],
      defeatedBy: [
        "Hand-picked rules fitting past dropouts are the better model",
        "Dropout is unpredictable and tied to no signal",
        "We can't say anything until every student is studied",
      ],
    },
    correctAnswer:
      "The strongest lead is that a sudden spike in unexcused absences marks a fast slide toward dropping out, so the model should add an absence-acceleration feature rather than rules reverse-engineered from past dropouts — added structure that earns its place by flagging at-risk students before they leave, not after. This is productive because it predicts checkable things: students whose absences spike this term should be likelier to drop out next term; an early outreach when the spike is detected should reduce dropout; and the feature should add little where absences are stable. I would test it by holding out a recent cohort and checking whether the absence-spike feature predicts their dropouts out-of-sample, by piloting counselor outreach triggered by the spike and comparing dropout rates, and by confirming the feature degrades gracefully (not perfectly) on past data, unlike the hand-picked rules. Those rules are hollow: 100% past accuracy that comes from fitting the very students they were drawn from predicts no new case.",
    explanation:
      "Near-100% accuracy bought by rules fit to known dropouts is the seductive hollow patch, and 'we can't say until every student is studied' is the dodge; top credit goes to the absence-spike feature that predicts unseen dropouts and supports an outreach test.",
  },
  {
    itemType: "written",
    prompt:
      "A game studio's economy model fails to explain why a few items keep crashing in price. A designer proposes adding a manual price floor for each crashing item, which stabilizes them one by one. A data analyst notices every crashing item is a reward from a quest that a popular guide started recommending players farm repeatedly. In one paragraph, propose the strongest lead and how you would test it, deciding whether added structure earns its keep.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the guide drove mass farming of one quest, flooding the market with its reward items and crashing their price, so the model should add a 'farming-supply surge' factor tied to drop sources rather than per-item price floors — structure that earns its keep by predicting which other items will crash if a guide targets their quest. This is productive because it predicts checkable consequences: drop-rate and farming logs should show a supply spike just before each crash; any newly recommended farm should crash its reward next; and capping or rotating the quest's drops should stabilize prices without manual floors. I would test it by correlating crash timing with farming-volume data, by watching the next guide-recommended quest to see whether its reward crashes as predicted, and by trialing a drop-rotation on one quest and comparing prices. The per-item price floor is hollow: it patches each symptom, predicts no future crash, and masks the underlying supply mechanism.",
      yieldAnchors: [
        "A few items keep crashing in price",
        "Every crashing item is a reward from a guide-recommended farmable quest",
        "Other items' prices are stable",
      ],
      riskAnchors: [
        "Farming logs show a supply spike before each crash",
        "The next guide-recommended quest's reward crashes",
        "Rotating or capping drops stabilizes prices",
      ],
      defeatedBy: [
        "A manual price floor per item is the better model",
        "The crashes are random market noise",
        "Nothing can be concluded without more crashing items",
      ],
    },
    correctAnswer:
      "The strongest lead is that the guide drove mass farming of one quest, flooding the market with its reward items and crashing their price, so the model should add a 'farming-supply surge' factor tied to drop sources rather than per-item price floors — structure that earns its keep by predicting which other items will crash if a guide targets their quest. This is productive because it predicts checkable consequences: drop-rate and farming logs should show a supply spike just before each crash; any newly recommended farm should crash its reward next; and capping or rotating the quest's drops should stabilize prices without manual floors. I would test it by correlating crash timing with farming-volume data, by watching the next guide-recommended quest to see whether its reward crashes as predicted, and by trialing a drop-rotation on one quest and comparing prices. The per-item price floor is hollow: it patches each symptom, predicts no future crash, and masks the underlying supply mechanism.",
    explanation:
      "Per-item price floors are hollow patches that treat symptoms without predicting the next crash, and 'random noise / need more crashes' is the refusal; credit goes to the supply-surge factor whose added structure predicts future crashes and names a drop-rotation test.",
  },
  {
    itemType: "written",
    prompt:
      "A marketing team's attribution model under-credits a few campaigns. An agency proposes adding a custom 'halo bonus' tuned to each underperforming campaign so the books balance. An analyst notices all the under-credited campaigns ran on connected-TV the same week their branded-search volume jumped. In one paragraph, propose the strongest lead and how you would test it, judging whether the added complexity buys real predictive yield.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that connected-TV ads drive viewers to search the brand later, so credit is leaking into branded search; the model should add a TV-to-search lift factor rather than per-campaign halo bonuses — structure that earns its keep by predicting branded-search jumps after future TV flights, not just balancing past books. This is productive because it makes checkable predictions: branded-search volume should rise within days of any TV flight, in markets that got TV and not in held-out ones; pausing TV in a test market should drop branded search; and the lift should scale with TV spend. I would test it with a geo holdout where some markets get TV and others don't, by tracking the search-lag pattern after the next flight, and by checking the factor forecasts lift on campaigns it wasn't fit to. The per-campaign halo bonus is hollow: it reconciles the past by construction, predicts no future lift, and can't be refuted.",
      yieldAnchors: [
        "The model under-credits a few campaigns",
        "All under-credited campaigns ran connected-TV the week branded search jumped",
        "Other campaigns are attributed correctly",
      ],
      riskAnchors: [
        "Branded search rises days after TV flights in treated markets only",
        "Pausing TV in a test market drops branded search",
        "The lift scales with TV spend",
      ],
      defeatedBy: [
        "A custom halo bonus per campaign is the better model",
        "The search jumps are coincidental and untied to TV",
        "Attribution is too complex to credit any channel",
      ],
    },
    correctAnswer:
      "The strongest lead is that connected-TV ads drive viewers to search the brand later, so credit is leaking into branded search; the model should add a TV-to-search lift factor rather than per-campaign halo bonuses — structure that earns its keep by predicting branded-search jumps after future TV flights, not just balancing past books. This is productive because it makes checkable predictions: branded-search volume should rise within days of any TV flight, in markets that got TV and not in held-out ones; pausing TV in a test market should drop branded search; and the lift should scale with TV spend. I would test it with a geo holdout where some markets get TV and others don't, by tracking the search-lag pattern after the next flight, and by checking the factor forecasts lift on campaigns it wasn't fit to. The per-campaign halo bonus is hollow: it reconciles the past by construction, predicts no future lift, and can't be refuted.",
    explanation:
      "A per-campaign halo bonus balances the books by construction and can never be refuted — hollow complexity — while 'attribution is too complex to credit any channel' is the cautious dodge; top credit goes to the TV-to-search factor whose added structure predicts geo-holdout lift and exposes itself to a clean test.",
  },
];

export const section: SectionContent = {
  slug: "productive-complexity",
  title: "Productive vs. Hollow Complexity",
  weekNumber: 2,
  blurb:
    "Added complexity is worth its cost only when it buys new explanatory or predictive yield; structure bolted on merely to rescue a model from an anomaly is hollow. Judge every addition by whether it pays for itself in fresh, checkable predictions.",
  lectureTitle:
    "2.8 Productive vs. Hollow Complexity: telling earned structure from ad hoc rescue",
  body: `# Productive vs. Hollow Complexity

Every model can be saved. When a theory hits an anomaly, you can almost always bolt on one more term, one more exception, one more special case until the data fit again. Reflexive caution treats all this added structure as progress — "look, now it explains everything." Constructive Critical Reasoning asks a sharper question: did the added complexity *pay for itself*? Structure is earned only when it buys new explanatory or predictive yield. Structure added merely to absorb an embarrassment is hollow — it makes the past fit and forecasts nothing.

## Complexity must buy new predictions

A good addition does more than patch the case that prompted it. It reaches beyond that case to predict things you have not yet seen — new instances, new conditions, a fix you can try. The sea-breeze term that fixes three missed storms *and* predicts afternoon humidity spikes has earned its place; the "coastal correction" tuned to those exact three storms has not. The test is simple: strip the addition away. If only the anomaly it was built for breaks, the complexity was hollow. If genuine new predictions collapse too, it was load-bearing and productive.

## The signature of a hollow patch

Hollow complexity has a tell: it fits the past *too* perfectly and the future *not at all*. A dummy variable for each surprising week, a constant per misbehaving car, a list of the exact serial numbers that failed — each makes historical accuracy soar precisely because it was fit to the cases it now "explains." Adding one free parameter per anomaly can fit any data set ever recorded, which is exactly why it explains nothing. Perfect hindsight with zero foresight is the fingerprint of a rescue, not an insight.

## Earned structure generalizes

Productive complexity points outward. One added factor — low memory, unresolved tickets, cold-weather starts, fertilizer-before-rain — covers the anomalies *and* predicts unseen cases governed by the same cause. You can hand it data it was never tuned on and watch it succeed or fail. That out-of-sample reach is what separates a real mechanism from a curve fitted to noise. When in doubt, ask: would this addition predict a case I have not yet looked at, and could that prediction be wrong?

## Why the rescue loses

The ad hoc patch feels responsible — "now the model accounts for everything." But a model that can absorb any result by growing a new exception has stopped being a model; it can no longer be surprised, and a claim that cannot be surprised cannot be tested. Refusing to choose — "the data are too tangled to say which addition is better" — is the same failure wearing humility's clothes. Both abandon the one move that creates knowledge: committing to structure that sticks its neck out.

## Overreach still loses

The cure is not to forbid complexity. A model kept artificially simple, ignoring a real cause the evidence demands, is its own error — refusing earned structure is as wrong as inventing hollow structure. The goal is calibration: add exactly the complexity the data buy you, no less and no more, and only when it pays rent in new predictions you could check this week.

## In the real world

A retailer's sales model under-predicts a few odd weeks. The hollow rescue adds a dummy for each odd week — the chart now fits perfectly and forecasts nothing. The productive move adds a single "local sports event" factor, which not only covers those weeks but predicts spikes around upcoming scheduled games. One addition you can test against next month's calendar; the other you can only admire in the rearview mirror. Back the structure that pays for itself — and be ready to drop it the moment its new predictions fail.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
