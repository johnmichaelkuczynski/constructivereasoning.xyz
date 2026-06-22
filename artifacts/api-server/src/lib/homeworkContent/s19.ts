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
      "A laptop shuts off at random with no warning. Two live explanations remain: it overheats under load, or its battery is failing. Which move best decides between them?",
    mcOptions: [
      {
        text: "Log the CPU temperature at the instant of each shutoff: overheating predicts the temperature is pinned at the thermal limit right before it dies, while a failing battery predicts shutoffs at ordinary temperatures, typically when a load spike draws current.",
        credit: 1.0,
      },
      {
        text: "Swap in a brand-new battery and watch for a week to see whether the shutoffs stop.",
        credit: 0.6,
      },
      {
        text: "Run the built-in diagnostics and read through the logs for anything unusual.",
        credit: 0.3,
      },
      {
        text: "Laptops fail for countless reasons, so there is no reliable way to tell overheating from a battery problem.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Log the CPU temperature at the instant of each shutoff: overheating predicts the temperature is pinned at the thermal limit right before it dies, while a failing battery predicts shutoffs at ordinary temperatures, typically when a load spike draws current.",
    explanation:
      "The crucial experiment finds the one observation where the two rivals predict opposite things — temperature at shutoff splits them in a single reading. The battery swap only tests one rival and confounds time; 'no way to tell' refuses to design any test and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A baker's loaves won't rise. Two explanations survive: the yeast is dead, or the kitchen is too cold for it to act. Which single test decides it?",
    mcOptions: [
      {
        text: "There are too many baking variables to separate dead yeast from a cold room with any one check.",
        credit: 0,
      },
      {
        text: "Stir a pinch of the same yeast into warm sugar water and watch: dead yeast cannot foam at any temperature, so foaming proves the yeast is alive and indicts the cold kitchen, while no foam indicts the yeast.",
        credit: 1.0,
      },
      {
        text: "Buy a fresh packet of yeast and bake again to see whether the loaves rise this time.",
        credit: 0.6,
      },
      {
        text: "Try baking once more and pay closer attention to the dough.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Stir a pinch of the same yeast into warm sugar water and watch: dead yeast cannot foam at any temperature, so foaming proves the yeast is alive and indicts the cold kitchen, while no foam indicts the yeast.",
    explanation:
      "Proofing in warm water removes temperature as a factor, so the two rivals predict opposite outcomes from one observation — foam or no foam. Buying fresh yeast changes two things at once; 'too many variables' designs nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "A shop's weekly sales dropped sharply. Two causes are live: a competitor opened nearby the same week, or the owner's price increase took effect that week. Which observation best separates them?",
    mcOptions: [
      {
        text: "Check whether out-of-town online orders, which never see the local competitor, fell by the same proportion: the price increase predicts the online channel drops too, while the new competitor predicts only local foot-traffic sales fall.",
        credit: 1.0,
      },
      {
        text: "Pull the total sales figures for the last few weeks and look for the trend.",
        credit: 0.3,
      },
      {
        text: "Lower the prices back for a week and see whether sales recover.",
        credit: 0.6,
      },
      {
        text: "Sales swings have so many drivers that pinning this on one cause is hopeless.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Check whether out-of-town online orders, which never see the local competitor, fell by the same proportion: the price increase predicts the online channel drops too, while the new competitor predicts only local foot-traffic sales fall.",
    explanation:
      "The online channel is exposed to the price change but not the competitor, so it is exactly the datum on which the two rivals diverge. Reverting prices is slower and confounded by the competitor's continued presence; 'hopeless' designs no test.",
  },
  {
    itemType: "mc",
    prompt:
      "A dog scratches constantly. The vet narrows it to two: a flea-bite allergy or a food allergy. Which observation most cleanly decides between them?",
    mcOptions: [
      {
        text: "Note exactly where the dog scratches: a flea-bite allergy concentrates itching at the base of the tail and rump, while a food allergy concentrates it on the face, ears, and paws — opposite signatures from one look.",
        credit: 1.0,
      },
      {
        text: "Itchy dogs have many possible causes, so there is no dependable way to choose between fleas and food.",
        credit: 0,
      },
      {
        text: "Put the dog on a strict elimination diet for eight weeks and see whether the scratching eases.",
        credit: 0.6,
      },
      {
        text: "Watch the dog more closely over the next few days for clues.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Note exactly where the dog scratches: a flea-bite allergy concentrates itching at the base of the tail and rump, while a food allergy concentrates it on the face, ears, and paws — opposite signatures from one look.",
    explanation:
      "Itch location is the variable on which the two allergies make opposite predictions, settling it in one observation. The elimination diet tests only the food rival and takes weeks; the refusal designs nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "A houseplant's leaves are yellowing. Two explanations remain: nitrogen deficiency or overwatering. Which check best splits them?",
    mcOptions: [
      {
        text: "Look at which leaves yellow first and feel the soil: nitrogen deficiency drains the oldest, lowest leaves first in dry soil, while overwatering yellows leaves broadly with soggy soil and a sour root smell.",
        credit: 1.0,
      },
      {
        text: "Repot the plant with fresh soil and a balanced fertilizer and watch it for a month.",
        credit: 0.6,
      },
      {
        text: "Keep an eye on the plant and water it when it looks thirsty.",
        credit: 0.3,
      },
      {
        text: "Plants yellow for endless reasons, so it is not really possible to tell these two apart.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Look at which leaves yellow first and feel the soil: nitrogen deficiency drains the oldest, lowest leaves first in dry soil, while overwatering yellows leaves broadly with soggy soil and a sour root smell.",
    explanation:
      "Leaf-order plus soil moisture is the joint datum on which the rivals predict opposite patterns. Repotting changes several things at once and is slow; the 'endless reasons' answer abandons the design.",
  },
  {
    itemType: "mc",
    prompt:
      "A website loads slowly. Two explanations are live: the server's CPU is overloaded, or a database query is the bottleneck. Which test decides it?",
    mcOptions: [
      {
        text: "Watch the system more and see if the slowness comes and goes.",
        credit: 0.3,
      },
      {
        text: "Compare load times for a fully cached page that never touches the database against a database-driven page: a query bottleneck predicts the cached page is fast while the dynamic page is slow, whereas CPU overload predicts even the cached page is slow.",
        credit: 1.0,
      },
      {
        text: "Performance has too many moving parts to isolate CPU from the database with one comparison.",
        credit: 0,
      },
      {
        text: "Upgrade the server to a larger instance and check whether response times improve.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Compare load times for a fully cached page that never touches the database against a database-driven page: a query bottleneck predicts the cached page is fast while the dynamic page is slow, whereas CPU overload predicts even the cached page is slow.",
    explanation:
      "A cached page exercises the CPU but not the database, so it is precisely where the rivals diverge. Upgrading the instance is costly and could mask the database issue; the dodge designs nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "A car won't start and only clicks when the key turns. Two explanations survive: a dead battery or a bad starter motor. Which single observation decides?",
    mcOptions: [
      {
        text: "Cars fail to start for so many reasons that telling a battery from a starter is guesswork.",
        credit: 0,
      },
      {
        text: "Turn on the headlights and dome light while cranking: a dead battery predicts the lights are dim or fade with the click, while a bad starter predicts the lights stay bright even as it clicks.",
        credit: 1.0,
      },
      {
        text: "Charge the battery overnight and try to start it in the morning.",
        credit: 0.6,
      },
      {
        text: "Have someone listen to the engine while you crank it again.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Turn on the headlights and dome light while cranking: a dead battery predicts the lights are dim or fade with the click, while a bad starter predicts the lights stay bright even as it clicks.",
    explanation:
      "Light brightness during cranking is the datum on which the two rivals make opposite predictions, deciding it instantly. Charging the battery only probes one rival and wastes a night; the refusal designs nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "A student's grades fell this term. Two explanations are live: she stopped doing homework, or a new vision problem keeps her from reading the board. Which comparison best separates them?",
    mcOptions: [
      {
        text: "Compare her scores on take-home assignments against her in-class, board-dependent quizzes: a vision problem predicts in-class work suffers while take-home work stays fine, whereas skipped homework predicts both decline together.",
        credit: 1.0,
      },
      {
        text: "Ask her teachers for a general impression of how she's been doing.",
        credit: 0.3,
      },
      {
        text: "Have her eyes examined and get reading glasses if needed, then watch next term's grades.",
        credit: 0.6,
      },
      {
        text: "Grades depend on too many factors to separate effort from eyesight here.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Compare her scores on take-home assignments against her in-class, board-dependent quizzes: a vision problem predicts in-class work suffers while take-home work stays fine, whereas skipped homework predicts both decline together.",
    explanation:
      "Take-home versus board-dependent work is the split where the rivals predict opposite patterns, decided from existing records. The eye exam only tests one rival and delays a term; the dodge designs nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "A restaurant's average review score dropped this month. Two explanations remain: a new chef changed the food, or a single viral one-star review dragged the mean down. Which look decides it?",
    mcOptions: [
      {
        text: "Reviews are noisy enough that you can't really tell a recipe change from one bad review.",
        credit: 0,
      },
      {
        text: "Plot the distribution of recent ratings rather than the average: a viral review predicts a lone outlier with most fresh ratings still high, while a new chef predicts a sustained downward shift across many recent reviews.",
        credit: 1.0,
      },
      {
        text: "Read the most recent reviews and get a feel for the complaints.",
        credit: 0.3,
      },
      {
        text: "Ask the new chef to revert a few dishes and see whether scores climb back.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Plot the distribution of recent ratings rather than the average: a viral review predicts a lone outlier with most fresh ratings still high, while a new chef predicts a sustained downward shift across many recent reviews.",
    explanation:
      "The shape of the distribution — one outlier versus a shifted mass — is exactly where the rivals diverge, settled from data already in hand. Reverting dishes is slow and confounded; the dodge designs nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "A gardener's tomatoes keep cracking. Two explanations are live: irregular watering after dry spells, or a spreading fungal disease. Which observation best splits them?",
    mcOptions: [
      {
        text: "Tomatoes crack for many reasons, so there's no real way to choose between watering and disease.",
        credit: 0,
      },
      {
        text: "Track the timing and spread: irregular watering predicts cracks appear on otherwise healthy fruit right after a heavy soak following dryness, while disease predicts spreading lesions that jump to neighboring plants regardless of watering.",
        credit: 1.0,
      },
      {
        text: "Switch to a steady drip-irrigation schedule and see whether the cracking eases.",
        credit: 0.6,
      },
      {
        text: "Keep checking the plants each morning for new damage.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Track the timing and spread: irregular watering predicts cracks appear on otherwise healthy fruit right after a heavy soak following dryness, while disease predicts spreading lesions that jump to neighboring plants regardless of watering.",
    explanation:
      "Timing-relative-to-watering plus spread-to-neighbors is the joint datum on which the rivals predict opposite signatures. Switching to drip tests only the watering rival; the refusal designs nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "An app crashes for some users. Two explanations survive: a slow memory leak, or one user's corrupted save file. Which observation decides it?",
    mcOptions: [
      {
        text: "Push out a general bug-fix update and see whether crash reports drop.",
        credit: 0.6,
      },
      {
        text: "Check whether crashes track session length or track the user: a memory leak predicts crashes for everyone after similar uptime regardless of who they are, while a corrupt file predicts crashes only for one user no matter how briefly they run it.",
        credit: 1.0,
      },
      {
        text: "Pull the crash logs and skim them for patterns.",
        credit: 0.3,
      },
      {
        text: "Software crashes are too unpredictable to attribute to either cause confidently.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Check whether crashes track session length or track the user: a memory leak predicts crashes for everyone after similar uptime regardless of who they are, while a corrupt file predicts crashes only for one user no matter how briefly they run it.",
    explanation:
      "Crashes-by-uptime versus crashes-by-user is the contrast on which the rivals make opposite predictions. A blanket update changes too much to learn anything; the dodge designs nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "A cyclist develops knee pain on long rides. The fit specialist narrows it to two: the saddle is too low, or a cleat is angled wrong. Which observation best separates them?",
    mcOptions: [
      {
        text: "Knee pain has too many possible sources to pin on saddle height versus cleat angle.",
        credit: 0,
      },
      {
        text: "Pinpoint where the pain sits: a too-low saddle drives pain to the front of the kneecap from over-flexing, while a misaligned cleat drives it to the side of the knee from twisting — opposite locations from one report.",
        credit: 1.0,
      },
      {
        text: "Raise the saddle a centimeter and ride a few times to see whether the pain fades.",
        credit: 0.6,
      },
      {
        text: "Pay attention to the knee on the next ride and note how it feels.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Pinpoint where the pain sits: a too-low saddle drives pain to the front of the kneecap from over-flexing, while a misaligned cleat drives it to the side of the knee from twisting — opposite locations from one report.",
    explanation:
      "Front-of-knee versus side-of-knee is the datum on which the two rivals predict opposite things, decided in one observation. Raising the saddle tests only one rival; the refusal designs nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "Fish are dying in a pond. Two explanations are live: low oxygen from an algae bloom, or chemical runoff from a nearby field. Which observation best decides it?",
    mcOptions: [
      {
        text: "Note when and where the fish die: an oxygen crash predicts deaths concentrated at dawn when oxygen is lowest, hitting the largest fish first across species, while runoff predicts deaths clustered near the inflow and spiking right after rain.",
        credit: 1.0,
      },
      {
        text: "Test the water once and read the chemistry report.",
        credit: 0.3,
      },
      {
        text: "Run an aerator in the pond for a week and see whether the die-off slows.",
        credit: 0.6,
      },
      {
        text: "Fish kills have so many causes that separating oxygen from runoff isn't really feasible.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Note when and where the fish die: an oxygen crash predicts deaths concentrated at dawn when oxygen is lowest, hitting the largest fish first across species, while runoff predicts deaths clustered near the inflow and spiking right after rain.",
    explanation:
      "The timing-and-location signature is exactly where the two rivals diverge, readable from observation. Running an aerator tests only the oxygen rival and is slow; the dodge designs nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "A bakery's cookies come out wildly different sizes. Two explanations remain: inconsistent dough scooping, or uneven oven heat. Which observation decides it?",
    mcOptions: [
      {
        text: "Cookie sizing varies for too many reasons to blame scooping or the oven specifically.",
        credit: 0,
      },
      {
        text: "Weigh the raw dough balls before baking and map where the small cookies land: uneven scooping predicts the dough weights already vary on the tray, while an uneven oven predicts equal dough weights but small cookies clustered in one region of the oven.",
        credit: 1.0,
      },
      {
        text: "Buy a calibrated cookie scoop and see whether sizes even out over the next few batches.",
        credit: 0.6,
      },
      {
        text: "Bake another batch and compare how they come out.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Weigh the raw dough balls before baking and map where the small cookies land: uneven scooping predicts the dough weights already vary on the tray, while an uneven oven predicts equal dough weights but small cookies clustered in one region of the oven.",
    explanation:
      "Pre-bake weight plus position is the joint datum on which the rivals predict opposite results. A calibrated scoop tests only the scooping rival; the refusal designs nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "A newsletter's open rate fell this month. Two explanations are live: the subject lines got weaker, or the emails are now landing in spam folders. Which observation best splits them?",
    mcOptions: [
      {
        text: "Send the next issue and hope the numbers recover.",
        credit: 0.3,
      },
      {
        text: "Check the inbox-placement (delivery) rate, not just opens: spam filtering predicts fewer emails reaching the inbox at all, while weak subject lines predict normal inbox delivery but fewer of those delivered emails getting opened.",
        credit: 1.0,
      },
      {
        text: "Open rates depend on too many things to separate subject lines from spam filtering.",
        credit: 0,
      },
      {
        text: "Rewrite the subject lines and see whether opens climb next issue.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Check the inbox-placement (delivery) rate, not just opens: spam filtering predicts fewer emails reaching the inbox at all, while weak subject lines predict normal inbox delivery but fewer of those delivered emails getting opened.",
    explanation:
      "Inbox-placement rate is the variable on which the two rivals make opposite predictions, available without waiting. Rewriting subject lines tests only one rival and risks confounding; the dodge designs nothing.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A marketing team launched a campaign that beat its target, but on the same day it changed two things: a bolder ad creative and a much broader audience. Two explanations survive for the win: the new creative, or the wider targeting. Which move best decides between them?",
    mcOptions: [
      {
        text: "Run two clean cells: the new creative shown to the old audience and the old creative shown to the new audience. The creative-wins story predicts the new-creative/old-audience cell carries the lift, while the targeting-wins story predicts the old-creative/new-audience cell does — opposite cells light up.",
        credit: 1.0,
      },
      {
        text: "Marketing outcomes have too many drivers to ever credit the creative over the targeting.",
        credit: 0,
      },
      {
        text: "Keep running the combined campaign and watch whether the strong numbers hold.",
        credit: 0.3,
      },
      {
        text: "Revert to the old creative while keeping the new audience and see whether results dip.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest cell that would most distinguish your 'creative drove the win' lead from the rival 'the wider audience drove it,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest split: show the new creative to the old, narrow audience for a few days — if the creative is what worked, that cell should beat the old creative's historical numbers despite the small audience. My lead is refuted if the new-creative/old-audience cell performs no better than the old baseline, which would point to the wider targeting instead.",
      yieldAnchors: [
        "The campaign beat its target",
        "A bolder creative changed that day",
        "A much broader audience changed the same day",
      ],
      riskAnchors: [
        "New creative shown to the old audience carries the lift",
        "Old creative shown to the new audience does not lift",
        "The two factors can be isolated in separate cells",
      ],
      defeatedBy: [
        "Both changes are inseparable so nothing can be concluded",
        "Watching the combined campaign reveals which factor mattered",
      ],
    },
    correctAnswer:
      "Run two clean cells: the new creative shown to the old audience and the old creative shown to the new audience. The creative-wins story predicts the new-creative/old-audience cell carries the lift, while the targeting-wins story predicts the old-creative/new-audience cell does — opposite cells light up.",
    explanation:
      "Crossing the two changes into separate cells is the crucial design: each rival predicts a different cell wins, so one run decides. Reverting only the creative tests half the question; the refusal designs nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A beekeeper finds a hive growing weak. Two explanations are live: the queen is failing, or a mite infestation is sapping the colony. Which inspection best decides it?",
    mcOptions: [
      {
        text: "Open the hive and check two things at once: look for fresh eggs and young larvae, and examine capped drone brood for mites. A failing queen predicts no new eggs but clean brood, while a mite problem predicts a laying queen but mites visible in the brood — opposite findings.",
        credit: 1.0,
      },
      {
        text: "Hives weaken for endless reasons, so you can't really tell a queen problem from mites.",
        credit: 0,
      },
      {
        text: "Requeen the hive with a new mated queen and watch whether it recovers over the season.",
        credit: 0.6,
      },
      {
        text: "Keep observing the hive entrance for a sense of activity.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'failing queen' lead from the rival 'mite infestation,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: pull a brood frame and look for fresh eggs and young larvae — a healthy laying pattern means the queen is fine and points to mites instead. My 'failing queen' lead is refuted if the frame shows a strong, even pattern of new eggs and larvae, especially alongside mites on the drone brood.",
      yieldAnchors: [
        "The hive is growing weak",
        "A queen could be failing",
        "A mite infestation could be sapping the colony",
      ],
      riskAnchors: [
        "Fresh eggs and larvae are present or absent",
        "Drone brood shows mites or stays clean",
        "Laying status and mite load can be read on one frame",
      ],
      defeatedBy: [
        "Hive decline is too multi-causal to diagnose",
        "Requeening alone reveals which cause was at work",
      ],
    },
    correctAnswer:
      "Open the hive and check two things at once: look for fresh eggs and young larvae, and examine capped drone brood for mites. A failing queen predicts no new eggs but clean brood, while a mite problem predicts a laying queen but mites visible in the brood — opposite findings.",
    explanation:
      "Egg-laying status and mite presence are the two readings on which the rivals predict opposite combinations, settling it in one inspection. Requeening is a slow intervention that tests only one rival; the refusal designs nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A soccer team keeps losing leads in the second half. Two explanations survive: the players fade physically late in games, or opponents adjust to a predictable tactic at halftime. Which observation best decides it?",
    mcOptions: [
      {
        text: "Compare the first fifteen minutes after halftime with the last fifteen of the first half: a tactical-adjustment story predicts a sharp drop right after the break, while a fitness story predicts a gradual decline that tracks total minutes played regardless of the break.",
        credit: 1.0,
      },
      {
        text: "Run extra conditioning drills and see whether the team holds leads better.",
        credit: 0.6,
      },
      {
        text: "Watch a few more matches and get a general sense of when things slip.",
        credit: 0.3,
      },
      {
        text: "Match outcomes hinge on too many factors to separate fitness from tactics.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest comparison that would most distinguish your 'tactical adjustment' lead from the rival 'physical fade,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare performance in the fifteen minutes right after halftime against the closing fifteen of the first half — a tactics problem should show a sudden post-break drop, not a smooth decline. My lead is refuted if the dip is gradual and tracks minutes played with no step-change at halftime, which points to fitness.",
      yieldAnchors: [
        "The team loses leads in the second half",
        "Players might fade physically",
        "Opponents might adjust at halftime",
      ],
      riskAnchors: [
        "A sharp drop right after halftime appears or doesn't",
        "Decline tracks total minutes or the break point",
        "Post-break and pre-break windows can be compared",
      ],
      defeatedBy: [
        "Too many match factors to separate the rivals",
        "More conditioning reveals which cause was at work",
      ],
    },
    correctAnswer:
      "Compare the first fifteen minutes after halftime with the last fifteen of the first half: a tactical-adjustment story predicts a sharp drop right after the break, while a fitness story predicts a gradual decline that tracks total minutes played regardless of the break.",
    explanation:
      "Whether the drop is a step-change at halftime or a smooth fade is the datum on which the rivals diverge. Extra conditioning tests only the fitness rival; the refusal designs nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A nightly batch report on a server runs slow only after 11 p.m. Two explanations are live: a scheduled backup job hogs disk I/O, or a surge of traffic from another time zone overloads it. Which test best decides it?",
    mcOptions: [
      {
        text: "There are too many nighttime processes to ever isolate the backup from the traffic.",
        credit: 0,
      },
      {
        text: "Disable the backup job for one night while leaving everything else unchanged: the backup story predicts the slowness vanishes that night, while the traffic story predicts it persists because the foreign-time-zone load is untouched.",
        credit: 1.0,
      },
      {
        text: "Move the report to run earlier in the evening and see whether it speeds up.",
        credit: 0.6,
      },
      {
        text: "Watch the server graphs for a few more nights to spot a pattern.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest manipulation that would most distinguish your 'backup job' lead from the rival 'foreign traffic surge,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: skip the backup job for exactly one night while leaving traffic untouched — if the backup is the culprit, the report should run fast that night. My lead is refuted if the report stays slow with the backup disabled, which points to the overnight traffic surge.",
      yieldAnchors: [
        "The report runs slow only after 11 p.m.",
        "A backup job is scheduled at night",
        "Foreign-time-zone traffic surges at night",
      ],
      riskAnchors: [
        "Slowness vanishes or persists with the backup off",
        "Traffic load is left unchanged by the test",
        "One night isolates the backup variable",
      ],
      defeatedBy: [
        "Too many nightly processes to isolate a cause",
        "Moving the report alone reveals the culprit",
      ],
    },
    correctAnswer:
      "Disable the backup job for one night while leaving everything else unchanged: the backup story predicts the slowness vanishes that night, while the traffic story predicts it persists because the foreign-time-zone load is untouched.",
    explanation:
      "Turning off exactly one variable while holding traffic constant makes the rivals predict opposite outcomes for that night. Moving the report changes timing and confounds both causes; the dodge designs nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A propagator's plant cuttings keep dying before they root. Two explanations survive: the rooting hormone has expired and is inert, or the cuttings are sitting in too much water and rotting. Which test best decides it?",
    mcOptions: [
      {
        text: "Cuttings fail for so many reasons that telling old hormone from rot is hopeless.",
        credit: 0,
      },
      {
        text: "Split one batch: half rooted in airy, just-moist medium with the same hormone, half in soggy medium with the same hormone. The rot story predicts only the soggy half dies, while the dead-hormone story predicts both halves fail equally.",
        credit: 1.0,
      },
      {
        text: "Buy fresh rooting hormone and try again with the next batch.",
        credit: 0.6,
      },
      {
        text: "Keep taking cuttings and watch them more carefully this time.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest split that would most distinguish your 'too much water' lead from the rival 'dead hormone,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: root half the cuttings in airy, barely-moist medium and half in soggy medium, using the same hormone on both — if water is the problem, only the soggy half should die. My lead is refuted if both halves die at the same rate despite the drainage difference, which points to inert hormone.",
      yieldAnchors: [
        "Cuttings die before rooting",
        "The hormone could be expired",
        "The medium could be too wet",
      ],
      riskAnchors: [
        "Only the soggy half dies, or both halves do",
        "Hormone is held identical across the split",
        "Drainage is the only thing varied",
      ],
      defeatedBy: [
        "Cutting failure is too multi-causal to diagnose",
        "Buying fresh hormone alone reveals the cause",
      ],
    },
    correctAnswer:
      "Split one batch: half rooted in airy, just-moist medium with the same hormone, half in soggy medium with the same hormone. The rot story predicts only the soggy half dies, while the dead-hormone story predicts both halves fail equally.",
    explanation:
      "Holding the hormone fixed and varying only moisture makes the rivals predict opposite survival patterns. Buying fresh hormone changes a variable and tests only one rival; the refusal designs nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "One team at a company has unusually high turnover. Two explanations are live: a bad manager, or pay that lags the market. Which observation best decides it?",
    mcOptions: [
      {
        text: "Trace where the leavers go: a bad-manager story predicts many transfer to other internal teams at similar pay, while a pay story predicts they leave the company entirely for higher-paying roles elsewhere.",
        credit: 1.0,
      },
      {
        text: "Turnover has too many causes to separate management from compensation.",
        credit: 0,
      },
      {
        text: "Give the team a pay raise and see whether attrition slows next year.",
        credit: 0.6,
      },
      {
        text: "Send out a general engagement survey and read the responses.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'bad manager' lead from the rival 'lagging pay,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check the destinations of people who quit — if many move to other internal teams at comparable pay, the manager is the issue, since they fled the team but not the company. My lead is refuted if leavers overwhelmingly exit for higher-paying jobs elsewhere, which points to compensation.",
      yieldAnchors: [
        "One team has unusually high turnover",
        "The manager could be the cause",
        "Pay could lag the market",
      ],
      riskAnchors: [
        "Leavers transfer internally or exit the company",
        "Destination pay is comparable or higher",
        "Exit destinations are already on record",
      ],
      defeatedBy: [
        "Turnover is too multi-causal to attribute",
        "A raise alone reveals whether pay was the cause",
      ],
    },
    correctAnswer:
      "Trace where the leavers go: a bad-manager story predicts many transfer to other internal teams at similar pay, while a pay story predicts they leave the company entirely for higher-paying roles elsewhere.",
    explanation:
      "Exit destination is the datum on which the two rivals predict opposite patterns, available from existing HR records. A raise is costly and tests only one rival; the dodge designs nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An aquarium keeps developing heavy algae. Two explanations survive: too much light, or excess nutrients from overfeeding. Which test best decides it?",
    mcOptions: [
      {
        text: "Keep the lighting schedule exactly the same but cut feeding sharply for two weeks: the overfeeding story predicts the algae recedes despite unchanged light, while the light story predicts the algae persists because the real driver is untouched.",
        credit: 1.0,
      },
      {
        text: "Algae blooms have too many drivers to separate light from feeding.",
        credit: 0,
      },
      {
        text: "Shorten the light period and cut feeding at the same time and see if it clears.",
        credit: 0.6,
      },
      {
        text: "Keep watching the tank and scrub the glass when it gets bad.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest change that would most distinguish your 'overfeeding' lead from the rival 'too much light,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: cut feeding hard for two weeks while leaving the light schedule untouched — if nutrients drive the algae, it should recede on the unchanged light. My lead is refuted if the algae persists with feeding slashed, which points to the lighting.",
      yieldAnchors: [
        "The tank develops heavy algae",
        "Light could be excessive",
        "Overfeeding could add nutrients",
      ],
      riskAnchors: [
        "Algae recedes or persists with feeding cut",
        "Light schedule is held constant",
        "Only feeding is varied",
      ],
      defeatedBy: [
        "Blooms are too multi-causal to attribute",
        "Changing light and feeding together reveals the cause",
      ],
    },
    correctAnswer:
      "Keep the lighting schedule exactly the same but cut feeding sharply for two weeks: the overfeeding story predicts the algae recedes despite unchanged light, while the light story predicts the algae persists because the real driver is untouched.",
    explanation:
      "Varying only feeding while holding light fixed makes the rivals predict opposite outcomes. Cutting both at once confounds the two; the dodge designs nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Birds have suddenly stopped visiting a backyard feeder. Two explanations are live: the seed has gone stale, or a hawk has started hunting the yard. Which observation best decides it?",
    mcOptions: [
      {
        text: "Bird behavior is too unpredictable to tell stale seed from a predator.",
        credit: 0,
      },
      {
        text: "Set out a second feeder with fresh seed a few yards away and watch both: the stale-seed story predicts birds flock to the fresh feeder while shunning the old one, while the hawk story predicts birds avoid the whole yard regardless of which feeder.",
        credit: 1.0,
      },
      {
        text: "Replace all the seed with a fresh bag and wait to see if the birds come back.",
        credit: 0.6,
      },
      {
        text: "Keep watching the yard over the next few days for activity.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest setup that would most distinguish your 'stale seed' lead from the rival 'a hawk is hunting the yard,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: put a second feeder with fresh seed nearby and compare visits to the two — if seed is the issue, birds should crowd the fresh feeder while ignoring the stale one. My lead is refuted if birds avoid both feeders and the whole yard, which points to a predator.",
      yieldAnchors: [
        "Birds stopped visiting the feeder",
        "The seed could be stale",
        "A hawk could be hunting the yard",
      ],
      riskAnchors: [
        "Birds use the fresh feeder or shun both",
        "Yard-wide avoidance appears or doesn't",
        "Two feeders isolate seed from predator",
      ],
      defeatedBy: [
        "Bird behavior is too unpredictable to diagnose",
        "Replacing all seed alone reveals the cause",
      ],
    },
    correctAnswer:
      "Set out a second feeder with fresh seed a few yards away and watch both: the stale-seed story predicts birds flock to the fresh feeder while shunning the old one, while the hawk story predicts birds avoid the whole yard regardless of which feeder.",
    explanation:
      "Fresh-feeder-versus-old in the same yard is the contrast on which the rivals predict opposite results. Replacing all the seed erases the comparison and tests only one rival; the dodge designs nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A photographer's shots keep coming out blurry. Two explanations survive: camera shake from too slow a shutter, or the autofocus is locking onto the wrong plane. Which observation best decides it?",
    mcOptions: [
      {
        text: "Examine the blur in one frame at full magnification: camera shake predicts the whole image is smeared in a single direction with nothing sharp, while a focus miss predicts some other plane — the background or a nearer object — is razor sharp while the subject is soft.",
        credit: 1.0,
      },
      {
        text: "Photos blur for too many reasons to tell shake from a focus error.",
        credit: 0,
      },
      {
        text: "Mount the camera on a tripod and reshoot to see whether the blur disappears.",
        credit: 0.6,
      },
      {
        text: "Take several more shots and look them over afterward.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'autofocus miss' lead from the rival 'camera shake,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: zoom into one blurry frame and look for any sharp plane — if the background or a nearer object is crisp while the subject is soft, the focus landed in the wrong place. My lead is refuted if nothing in the frame is sharp and the whole image is smeared in one direction, which points to camera shake.",
      yieldAnchors: [
        "Shots keep coming out blurry",
        "The shutter could be too slow",
        "The autofocus could be missing the plane",
      ],
      riskAnchors: [
        "Some other plane is razor sharp, or nothing is",
        "Blur is directional and uniform, or localized",
        "One magnified frame reveals the signature",
      ],
      defeatedBy: [
        "Blur is too multi-causal to diagnose",
        "A tripod test alone reveals the cause",
      ],
    },
    correctAnswer:
      "Examine the blur in one frame at full magnification: camera shake predicts the whole image is smeared in a single direction with nothing sharp, while a focus miss predicts some other plane — the background or a nearer object — is razor sharp while the subject is soft.",
    explanation:
      "Whether any plane is sharp is the datum on which the two rivals predict opposite things, readable from one frame. A tripod test probes only the shake rival; the refusal designs nothing.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A school has two sections of the same algebra course taught by different teachers. Section A consistently outscores Section B on identical exams. Two explanations survive: Teacher A is simply more effective, or Section A meets at 9 a.m. while Section B meets right after lunch when students are drowsy. In one paragraph, propose a crucial experiment that would force the two explanations to predict opposite results, and say what each would predict.",
    writtenRubric: {
      modelAnswer:
        "The crucial move is to swap the time slots without swapping the teachers for one grading period: have Teacher A teach the post-lunch slot and Teacher B teach the 9 a.m. slot, keeping curriculum and exams identical. The two explanations now predict opposite outcomes. If the teacher is the real cause, Teacher A's class should keep outscoring Teacher B's even after moving to the drowsy afternoon slot, so the advantage travels with the teacher. If the time slot is the cause, the 9 a.m. class should score higher regardless of who teaches it, so the advantage stays with the morning time and Teacher B's morning section now leads. I would run the swap for one unit, compare exam scores by slot and by teacher, and treat a result where the gap follows the teacher as confirming effectiveness and a result where the gap follows the time as confirming the alertness story. To guard against a one-unit fluke I would repeat the swap for a second unit before committing.",
      yieldAnchors: [
        "Section A outscores Section B on identical exams",
        "The two sections have different teachers",
        "Section A meets at 9 a.m. and Section B meets after lunch",
      ],
      riskAnchors: [
        "After a slot swap the gap follows the teacher",
        "After a slot swap the gap follows the time",
        "A repeated swap reproduces the same pattern",
      ],
      defeatedBy: [
        "Both factors are entangled so nothing can be concluded",
        "The teacher must be better because Section A scores higher",
        "More exams under the current setup will reveal the cause",
      ],
    },
    correctAnswer:
      "The crucial move is to swap the time slots without swapping the teachers for one grading period: have Teacher A teach the post-lunch slot and Teacher B teach the 9 a.m. slot, keeping curriculum and exams identical. The two explanations now predict opposite outcomes. If the teacher is the real cause, Teacher A's class should keep outscoring Teacher B's even after moving to the drowsy afternoon slot, so the advantage travels with the teacher. If the time slot is the cause, the 9 a.m. class should score higher regardless of who teaches it, so the advantage stays with the morning time and Teacher B's morning section now leads. I would run the swap for one unit, compare exam scores by slot and by teacher, and treat a result where the gap follows the teacher as confirming effectiveness and a result where the gap follows the time as confirming the alertness story. To guard against a one-unit fluke I would repeat the swap for a second unit before committing.",
    explanation:
      "A crucial experiment is engineered so the two surviving rivals must disagree on one outcome — here, whether the score gap follows the teacher or the time slot after a swap. The cautious 'both are entangled, nothing can be concluded' earns near-zero because it designs no decisive test; assuming the teacher is better just because Section A scores higher commits past the data and also loses.",
  },
  {
    itemType: "written",
    prompt:
      "A factory machine produces a defect intermittently. Two explanations remain: vibration from a heavy press that runs on the adjacent line, or heat and humidity that build up in the afternoon. In one paragraph, propose a crucial experiment that splits the two and state what each predicts.",
    writtenRubric: {
      modelAnswer:
        "The crucial experiment is to vary the two suspected causes independently rather than letting them ride together. On a cool morning, deliberately run the adjacent press at full tempo and watch the defect rate; on a hot, humid afternoon, idle the adjacent press and watch again. The rivals now predict opposite results. If vibration is the cause, defects should spike in the morning when the press runs and fall in the afternoon when it is idle, tracking the press rather than the weather. If heat and humidity are the cause, defects should stay low in the cool morning despite the running press and spike in the hot afternoon even with the press idle, tracking the climate rather than the machine. I would log defect counts against press state and against a thermometer-hygrometer reading, and conclude vibration if defects follow the press and climate if they follow the temperature. A clean separation in a single day's two runs would decide it, and I would repeat once to rule out a fluke.",
      yieldAnchors: [
        "The defect appears intermittently",
        "A heavy press runs on the adjacent line",
        "Heat and humidity build up in the afternoon",
      ],
      riskAnchors: [
        "Defects track the press regardless of weather",
        "Defects track temperature regardless of the press",
        "Independent runs reproduce the pattern",
      ],
      defeatedBy: [
        "The two causes can't be separated so judgment must be withheld",
        "It must be vibration because the press is loud",
        "Logging more defects under normal operation will settle it",
      ],
    },
    correctAnswer:
      "The crucial experiment is to vary the two suspected causes independently rather than letting them ride together. On a cool morning, deliberately run the adjacent press at full tempo and watch the defect rate; on a hot, humid afternoon, idle the adjacent press and watch again. The rivals now predict opposite results. If vibration is the cause, defects should spike in the morning when the press runs and fall in the afternoon when it is idle, tracking the press rather than the weather. If heat and humidity are the cause, defects should stay low in the cool morning despite the running press and spike in the hot afternoon even with the press idle, tracking the climate rather than the machine. I would log defect counts against press state and against a thermometer-hygrometer reading, and conclude vibration if defects follow the press and climate if they follow the temperature. A clean separation in a single day's two runs would decide it, and I would repeat once to rule out a fluke.",
    explanation:
      "Crossing press-state against climate breaks the two causes apart so each rival predicts a different pattern — defects follow the press or follow the temperature. 'They can't be separated, withhold judgment' earns near-zero, and 'it must be vibration because the press is loud' overreaches past the data.",
  },
  {
    itemType: "written",
    prompt:
      "A runner's GPS watch shows her recent training paces as much slower than a month ago, and she fears she's losing fitness. But she also recently switched to a new route that runs under heavy tree cover and along a canyon wall, which can scramble GPS signals. Two explanations survive: real fitness decline, or GPS error inflating her times on the new route. In one paragraph, propose a crucial experiment that decides between them and state what each predicts.",
    writtenRubric: {
      modelAnswer:
        "The crucial experiment is to measure her pace by a method the GPS cannot corrupt and compare it across routes. I would have her run a known, accurately measured distance — a track or a course she paces with a calibrated foot-pod or simple stopwatch over a marked mile — and also re-run the tree-and-canyon route. The rivals predict opposite results. If fitness is truly declining, her stopwatch-measured pace on the clean track should be slower than a month ago too, since real slowdown shows up regardless of how it's measured. If GPS error is the culprit, her track and foot-pod paces should match her old fitness while only the canyon route reads slow, revealing the gap as a measurement artifact tied to that route. I would compare track time, foot-pod pace, and watch pace on the same days, and conclude fitness loss if all three agree she's slower and GPS error if only the canyon-route GPS disagrees with the ground truth.",
      yieldAnchors: [
        "Recent watch paces are much slower than a month ago",
        "She switched to a tree-covered, canyon route",
        "Such routes can scramble GPS signals",
      ],
      riskAnchors: [
        "A stopwatch-measured track pace is also slower",
        "Track and foot-pod paces match old fitness",
        "Only the canyon-route GPS reads slow",
      ],
      defeatedBy: [
        "There's no way to know whether it's fitness or the watch",
        "She must be losing fitness because the watch says so",
        "Logging more GPS runs on the new route will clarify it",
      ],
    },
    correctAnswer:
      "The crucial experiment is to measure her pace by a method the GPS cannot corrupt and compare it across routes. I would have her run a known, accurately measured distance — a track or a course she paces with a calibrated foot-pod or simple stopwatch over a marked mile — and also re-run the tree-and-canyon route. The rivals predict opposite results. If fitness is truly declining, her stopwatch-measured pace on the clean track should be slower than a month ago too, since real slowdown shows up regardless of how it's measured. If GPS error is the culprit, her track and foot-pod paces should match her old fitness while only the canyon route reads slow, revealing the gap as a measurement artifact tied to that route. I would compare track time, foot-pod pace, and watch pace on the same days, and conclude fitness loss if all three agree she's slower and GPS error if only the canyon-route GPS disagrees with the ground truth.",
    explanation:
      "Bringing in a measurement the GPS can't distort creates the crucial split: real fitness loss shows up on every measure, while GPS error shows up only on the corrupted route. 'No way to know' earns near-zero, and trusting the watch just because it 'says so' takes the corrupted instrument at face value and overreaches.",
  },
  {
    itemType: "written",
    prompt:
      "A cafe's Wi-Fi keeps dropping in the early afternoon. Two explanations are live: too many customers overload the router at the lunch rush, or the espresso machine's grinder and a nearby microwave throw radio interference when they run. In one paragraph, propose a crucial experiment that forces the two to predict opposite results and say what each predicts.",
    writtenRubric: {
      modelAnswer:
        "The crucial experiment is to separate device load from appliance interference, which normally peak together at lunch. After hours, with no customers on the network, I would deliberately run the grinder and microwave repeatedly while a single laptop streams a connection-quality test; then, during a moderately busy but appliance-quiet stretch, I would load the router with many connected devices while keeping the grinder and microwave off. The rivals now predict opposite outcomes. If interference is the cause, the connection should stutter during the empty-cafe appliance test and stay solid under the device load with appliances off. If router overload is the cause, the connection should hold fine during the appliance-only test and degrade only when many devices are connected. I would log packet loss and drop events against device count and against appliance state, concluding interference if drops track the appliances and overload if they track the device count. A clean separation across the two controlled windows would decide it.",
      yieldAnchors: [
        "Wi-Fi drops in the early afternoon",
        "Many customers crowd the network at lunch",
        "The grinder and microwave run at the same time",
      ],
      riskAnchors: [
        "Drops occur during the appliance-only test",
        "Drops occur only under heavy device load",
        "Controlled windows reproduce the pattern",
      ],
      defeatedBy: [
        "Wi-Fi is too flaky to ever pin down the cause",
        "It must be overload because it happens at the busy time",
        "Watching more lunch rushes will reveal the cause",
      ],
    },
    correctAnswer:
      "The crucial experiment is to separate device load from appliance interference, which normally peak together at lunch. After hours, with no customers on the network, I would deliberately run the grinder and microwave repeatedly while a single laptop streams a connection-quality test; then, during a moderately busy but appliance-quiet stretch, I would load the router with many connected devices while keeping the grinder and microwave off. The rivals now predict opposite outcomes. If interference is the cause, the connection should stutter during the empty-cafe appliance test and stay solid under the device load with appliances off. If router overload is the cause, the connection should hold fine during the appliance-only test and degrade only when many devices are connected. I would log packet loss and drop events against device count and against appliance state, concluding interference if drops track the appliances and overload if they track the device count. A clean separation across the two controlled windows would decide it.",
    explanation:
      "Pulling apart device count from appliance use — which usually move together — is the crucial design, since each rival then predicts a different controlled window fails. 'Too flaky to know' earns near-zero, and assuming overload just because it happens at the busy time confuses correlation with cause and overreaches.",
  },
  {
    itemType: "written",
    prompt:
      "A novelist's blog traffic dropped by half this quarter. Two explanations survive: a search-engine algorithm update buried her older posts, or she simply published far less often this quarter. In one paragraph, propose a crucial experiment or decisive observation that splits the two and say what each predicts.",
    writtenRubric: {
      modelAnswer:
        "The crucial step is to break traffic down by source and by post age, because the two rivals leave opposite fingerprints there. I would pull analytics separating search-driven visits to older evergreen posts from direct and subscriber visits to new posts, and compare this quarter to last. The rivals predict opposite patterns. If an algorithm update is the cause, search traffic to older posts should collapse while direct and email traffic to whatever new posts exist holds steady, since the drop is concentrated in search rankings. If posting less is the cause, search traffic to old posts should be roughly unchanged while total traffic falls because there are fewer new posts pulling in fresh and subscriber visits. To make it decisive I would also publish a short burst of new posts for two weeks: if traffic rebounds with frequency restored, low output was the driver; if search traffic to old posts stays buried regardless, the algorithm change was. I would conclude based on which channel actually moved.",
      yieldAnchors: [
        "Blog traffic dropped by half this quarter",
        "A search-engine update may have buried older posts",
        "She published far less often this quarter",
      ],
      riskAnchors: [
        "Search traffic to old posts collapses or holds",
        "Direct and subscriber traffic tracks posting frequency",
        "A burst of new posts restores traffic or doesn't",
      ],
      defeatedBy: [
        "Traffic swings are too murky to attribute to either cause",
        "It must be the algorithm because everyone blames updates",
        "Waiting for traffic to recover on its own will explain it",
      ],
    },
    correctAnswer:
      "The crucial step is to break traffic down by source and by post age, because the two rivals leave opposite fingerprints there. I would pull analytics separating search-driven visits to older evergreen posts from direct and subscriber visits to new posts, and compare this quarter to last. The rivals predict opposite patterns. If an algorithm update is the cause, search traffic to older posts should collapse while direct and email traffic to whatever new posts exist holds steady, since the drop is concentrated in search rankings. If posting less is the cause, search traffic to old posts should be roughly unchanged while total traffic falls because there are fewer new posts pulling in fresh and subscriber visits. To make it decisive I would also publish a short burst of new posts for two weeks: if traffic rebounds with frequency restored, low output was the driver; if search traffic to old posts stays buried regardless, the algorithm change was. I would conclude based on which channel actually moved.",
    explanation:
      "Splitting traffic by source and post age — plus a deliberate posting burst — is the crucial experiment, because each rival predicts a different channel moved. The cautious 'too murky to attribute' earns near-zero, and blaming the algorithm just because 'everyone blames updates' commits past the evidence and loses.",
  },
];

export const section: SectionContent = {
  slug: "crucial-experiment",
  title: "The Crucial Experiment",
  weekNumber: 3,
  blurb:
    "When two explanations both survive the evidence so far, don't gather more of the same — engineer the single observation on which they must disagree, so one datum decides between them.",
  lectureTitle:
    "3.3 The Crucial Experiment: engineering the datum on which two models must disagree",
  body: `# The Crucial Experiment

You've narrowed the field to two explanations that both fit everything you've seen. Reflexive caution stalls here — "they both fit, so we can't say." Constructive Critical Reasoning does the opposite: it goes looking for the one place where the two stories *must* part ways. A crucial experiment is the observation engineered so that the rivals predict **opposite** results. Whatever you see, one of them dies. That is how a single datum can do the work of a hundred ambiguous ones.

## Find where the rivals must disagree

Two models that fit the same data still differ somewhere — there is always a question they answer differently. The whole skill is finding it. Lay the rivals side by side and ask: *Is there an observation where one says "yes" and the other says "no"?* If your laptop dies from overheating, the temperature is pinned at the thermal limit at shutoff; if it dies from a failing battery, it dies at ordinary temperatures. The reading at the moment of failure splits them. You are not collecting more evidence — you are collecting the *right* evidence, the one piece they can't both survive.

## Confirming evidence is cheap; discriminating evidence decides

The trap is to keep gathering data that fits your favorite. Data consistent with both rivals tells you nothing about which is right, no matter how much of it you pile up. The crucial experiment is valuable precisely because it is *discriminating*: it is the observation each rival has staked an opposite bet on. Always prefer the test that could refute one of them over the test that merely agrees with both.

## Isolate one variable at a time

When two suspected causes always travel together — the lunch rush brings both more devices and a running microwave — you can't tell them apart by watching. The crucial move is to pull them apart: run the appliances with no customers, then load the devices with the appliances off. Hold everything else fixed and vary the one thing the rivals disagree about. A clean experiment changes exactly one factor so the result points at exactly one cause.

## Why "they both fit, so we can't decide" loses

Saying the rivals are indistinguishable is almost always a failure of imagination, not a fact about the world. It earns zero because it designs no test — it mistakes "I haven't found the splitting observation yet" for "no splitting observation exists." Two genuinely different mechanisms nearly always diverge somewhere checkable; your job is to locate that divergence, not to declare a tie.

## Overreach still loses

The opposite error is to crown a winner before running the decisive test — "it must be the louder press" or "the watch says I'm slower, so I am." Picking a rival on vividness or convenience, while the crucial datum sits uncollected, is reckless. The crucial experiment matters *because* you don't yet know; commit only after the observation the rivals disagree on comes back.

## In the real world

A team's campaign won the day it changed both a bolder creative and a wider audience. The dodge: "both changed, so we'll never know which worked." The crucial experiment: cross them — show the new creative to the old audience and the old creative to the new audience. If the creative is the cause, the new-creative/old-audience cell carries the lift; if targeting is the cause, the old-creative/new-audience cell does. One crossed test, and the rivals can no longer both be right.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
