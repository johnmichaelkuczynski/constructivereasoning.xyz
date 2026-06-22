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
      "An online bookstore's web sales fell by half last month. Two live explanations stand out: the checkout page broke, or a rival undercut its prices. Which next step best separates them?",
    mcOptions: [
      {
        text: "The two leads predict drop-off at different stages, so pull the step-by-step funnel: a broken checkout should spike abandonment right at the payment step while browsing stays normal, whereas undercutting should show visitors comparing and leaving before they ever add to cart.",
        credit: 1.0,
      },
      {
        text: "It was probably the checkout; have a few staff try buying a book and see whether it works for them.",
        credit: 0.6,
      },
      {
        text: "Something in the buying process seems off.",
        credit: 0.3,
      },
      {
        text: "Online sales have too many drivers to untangle; just run a discount promo and hope the numbers recover.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The two leads predict drop-off at different stages, so pull the step-by-step funnel: a broken checkout should spike abandonment right at the payment step while browsing stays normal, whereas undercutting should show visitors comparing and leaving before they ever add to cart.",
    explanation:
      "Top credit picks the observation where the rivals disagree — the funnel stage — so one look decides between them; the promo-and-hope option chases neither rival and learns nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "A marathoner's training times got slower over three weeks. She suspects either accumulated fatigue from overtraining or the new, stiffer shoes she started wearing at the same time. Which check best tells them apart?",
    mcOptions: [
      {
        text: "Her pace and her shoes changed together, so just keep logging slow runs until the trend is undeniable.",
        credit: 0,
      },
      {
        text: "Run one workout in the old shoes after a full rest day: if she is fast again, fatigue plus shoes both lifted; if still slow only in the new shoes after resting, the shoes are the culprit, and if slow in either even when rested, it is fatigue.",
        credit: 1.0,
      },
      {
        text: "It's likely overtraining; take an easy week and watch whether times improve.",
        credit: 0.6,
      },
      {
        text: "The slowdown seems tied to her recent changes.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Run one workout in the old shoes after a full rest day: if she is fast again, fatigue plus shoes both lifted; if still slow only in the new shoes after resting, the shoes are the culprit, and if slow in either even when rested, it is fatigue.",
    explanation:
      "The winning move varies shoes and rest separately so each rival makes a different prediction; merely logging more slow runs cannot separate two causes that moved together.",
  },
  {
    itemType: "mc",
    prompt:
      "A greenhouse's seedlings are wilting. Two rivals fit: root rot from overwatering, or spider mites draining the leaves. Which observation discriminates best?",
    mcOptions: [
      {
        text: "Wilting plants are common; replace them and adjust care generally.",
        credit: 0,
      },
      {
        text: "The plants do look unwell.",
        credit: 0.3,
      },
      {
        text: "Lift a few plants to inspect the roots and check leaf undersides with a loupe: root rot shows brown, mushy roots with healthy leaves, while mites show fine webbing and stippling on leaves with firm white roots — the two leave opposite signatures.",
        credit: 1.0,
      },
      {
        text: "It's probably overwatering; cut back the watering schedule and see if they recover.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Lift a few plants to inspect the roots and check leaf undersides with a loupe: root rot shows brown, mushy roots with healthy leaves, while mites show fine webbing and stippling on leaves with firm white roots — the two leave opposite signatures.",
    explanation:
      "Top credit names the single inspection where the rivals predict opposite signs; replacing plants and adjusting care vaguely tests nothing and distinguishes nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "A mobile app's crash reports tripled this week. It could be the new operating-system update users are installing, or the app's own release that shipped the same day. Which check best separates the two?",
    mcOptions: [
      {
        text: "Split crashes by app version and OS version: if crashes hit only users on the new app build regardless of OS, it's the release; if they hit only the new OS regardless of app build, it's the OS — the crosstab forces the two apart.",
        credit: 1.0,
      },
      {
        text: "It's probably our release; roll it back and watch whether crashes fall.",
        credit: 0.6,
      },
      {
        text: "Crashes went up around the time things changed.",
        credit: 0.3,
      },
      {
        text: "Modern software has countless crash causes; just tell users to reinstall.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Split crashes by app version and OS version: if crashes hit only users on the new app build regardless of OS, it's the release; if they hit only the new OS regardless of app build, it's the OS — the crosstab forces the two apart.",
    explanation:
      "The crosstab is the discriminating cut because the rivals predict crashes in different populations; the reinstall dodge commits to no lead and gathers no separating data.",
  },
  {
    itemType: "mc",
    prompt:
      "A catering company gets food-poisoning complaints after one event. Two dishes are suspect: the chicken skewers and the shrimp salad. Which step most cleanly identifies the source?",
    mcOptions: [
      {
        text: "Buffets are risky; apologize and tighten kitchen rules across the board.",
        credit: 0,
      },
      {
        text: "Survey who got sick and who didn't, then compare what each group ate: the dish eaten by nearly all the sick guests and avoided by the well ones is the source, since the two suspects split the guests differently.",
        credit: 1.0,
      },
      {
        text: "It was probably the shrimp; pull shrimp from the menu and see if complaints stop at future events.",
        credit: 0.6,
      },
      {
        text: "The food seems to have made some people ill.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Survey who got sick and who didn't, then compare what each group ate: the dish eaten by nearly all the sick guests and avoided by the well ones is the source, since the two suspects split the guests differently.",
    explanation:
      "Comparing the meals of sick versus well guests is the discriminating observation that the rivals partition differently; blanket apology and rule-tightening never tests which dish did it.",
  },
  {
    itemType: "mc",
    prompt:
      "A car won't start on cold mornings but runs fine once going. Two leads: a weak battery struggling in the cold, or a failing starter motor. Which test discriminates?",
    mcOptions: [
      {
        text: "Old cars are unpredictable; just keep jump-starting it as needed.",
        credit: 0,
      },
      {
        text: "There's clearly a cold-start problem.",
        credit: 0.3,
      },
      {
        text: "Probably the battery; buy a new one and see if mornings improve.",
        credit: 0.6,
      },
      {
        text: "Put a voltmeter on the battery while cranking: a weak battery sags well below 10 volts and the dash lights dim, while a bad starter holds voltage but clicks or spins slowly — the meter reading points one way or the other.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "Put a voltmeter on the battery while cranking: a weak battery sags well below 10 volts and the dash lights dim, while a bad starter holds voltage but clicks or spins slowly — the meter reading points one way or the other.",
    explanation:
      "The cranking-voltage reading is the discriminating datum the two faults split on; buying a new battery on a hunch confirms nothing and may waste money if the starter is at fault.",
  },
  {
    itemType: "mc",
    prompt:
      "One class's average quiz score dropped sharply this unit. Two explanations: the quiz itself was harder, or a long-term substitute taught the unit. Which check best separates them?",
    mcOptions: [
      {
        text: "Compare this class to the parallel class that had the regular teacher but took the same quiz: if both classes dropped, the quiz was hard; if only the substitute's class fell, the teaching was the cause.",
        credit: 1.0,
      },
      {
        text: "The substitute probably hurt scores; give that class a retest with the regular teacher and see if they rise.",
        credit: 0.6,
      },
      {
        text: "Scores seem lower than usual this time.",
        credit: 0.3,
      },
      {
        text: "Test scores swing for endless reasons; just curve the grades and move on.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Compare this class to the parallel class that had the regular teacher but took the same quiz: if both classes dropped, the quiz was hard; if only the substitute's class fell, the teaching was the cause.",
    explanation:
      "The parallel class holds the quiz constant while varying the teacher, so the rivals predict different patterns; curving grades sidesteps the question entirely.",
  },
  {
    itemType: "mc",
    prompt:
      "A beekeeper's hive is losing bees fast. Two suspects: varroa mites infesting the brood, or pesticide drift from a neighboring farm. Which observation discriminates best?",
    mcOptions: [
      {
        text: "Hive losses happen; combine it with a stronger hive and hope it stabilizes.",
        credit: 0,
      },
      {
        text: "Open the brood comb and also look at the entrance: mites leave visible specks on larvae and deformed-wing bees emerging over weeks, while pesticide kill drops piles of fresh adult corpses at the entrance suddenly — the timing and location of death differ.",
        credit: 1.0,
      },
      {
        text: "The hive is clearly struggling.",
        credit: 0.3,
      },
      {
        text: "It's likely mites; apply a mite treatment and watch the population.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Open the brood comb and also look at the entrance: mites leave visible specks on larvae and deformed-wing bees emerging over weeks, while pesticide kill drops piles of fresh adult corpses at the entrance suddenly — the timing and location of death differ.",
    explanation:
      "Mites and pesticide leave opposite signatures in where and how fast bees die, so that inspection is the discriminating test; merging hives treats a symptom and resolves nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "A web service has gotten slow. Engineers float three rivals: the database is the bottleneck, the application servers are CPU-bound, or the network link is saturated. Which step best discriminates?",
    mcOptions: [
      {
        text: "Performance is multi-causal; just add more servers and see if it helps.",
        credit: 0,
      },
      {
        text: "Check the three meters at once during a slow spell: a DB bottleneck shows high query latency with idle app CPU, a CPU bottleneck shows pinned app cores with fast queries, and a saturated link shows high network wait with both otherwise idle — each rival pegs a different gauge.",
        credit: 1.0,
      },
      {
        text: "It's probably the database; add an index to the slowest query and see if things speed up.",
        credit: 0.6,
      },
      {
        text: "The system feels sluggish lately.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Check the three meters at once during a slow spell: a DB bottleneck shows high query latency with idle app CPU, a CPU bottleneck shows pinned app cores with fast queries, and a saturated link shows high network wait with both otherwise idle — each rival pegs a different gauge.",
    explanation:
      "Reading all three gauges in one slow window lets each rival declare itself, since they predict load on different resources; blindly adding servers tests nothing if the database or link is the real limit.",
  },
  {
    itemType: "mc",
    prompt:
      "A dog scratches constantly. Two leads compete: fleas, or a food allergy from a recently changed kibble. Which check separates them best?",
    mcOptions: [
      {
        text: "Itchy dogs are common; give an anti-itch bath and hope it settles.",
        credit: 0,
      },
      {
        text: "The dog is clearly uncomfortable.",
        credit: 0.3,
      },
      {
        text: "Comb the coat over white paper while also running an elimination diet: fleas leave moving specks and reddish 'flea dirt' that the comb catches, while a food allergy itches on regardless of a flea-clean coat and eases only when the new kibble is withdrawn.",
        credit: 1.0,
      },
      {
        text: "It's probably the new food; switch back to the old kibble and watch.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Comb the coat over white paper while also running an elimination diet: fleas leave moving specks and reddish 'flea dirt' that the comb catches, while a food allergy itches on regardless of a flea-clean coat and eases only when the new kibble is withdrawn.",
    explanation:
      "Combing settles the flea rival directly and the diet swap settles the food rival, so together they discriminate; an anti-itch bath masks the symptom without separating the causes.",
  },
  {
    itemType: "mc",
    prompt:
      "A baker's sourdough suddenly stopped rising. Two rivals: the starter died, or the kitchen got too cold for fermentation in winter. Which test discriminates best?",
    mcOptions: [
      {
        text: "Sourdough is finicky; toss the batch and try again next week.",
        credit: 0,
      },
      {
        text: "Feed a spoon of the starter and keep it in a warm spot like an oven with the light on: a live starter doubles in a few warm hours, proving the cold was the problem, while a starter that stays flat even when warm is dead.",
        credit: 1.0,
      },
      {
        text: "The dough just isn't rising right.",
        credit: 0.3,
      },
      {
        text: "It's probably too cold; move the bowl somewhere warmer and see if it rises.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Feed a spoon of the starter and keep it in a warm spot like an oven with the light on: a live starter doubles in a few warm hours, proving the cold was the problem, while a starter that stays flat even when warm is dead.",
    explanation:
      "The warm-fed starter test holds temperature favorable so the two rivals must diverge — a live starter rises, a dead one won't; tossing the batch gathers no separating evidence.",
  },
  {
    itemType: "mc",
    prompt:
      "One sales region badly trails the others. Two explanations: the leads handed to that region are low-quality, or the reps there are weaker closers. Which step best discriminates?",
    mcOptions: [
      {
        text: "Regions always vary; set the weak one a higher quota and push harder.",
        credit: 0,
      },
      {
        text: "Swap a batch of leads between the weak region and a strong one for a month: if the weak region's results jump on the strong region's leads, lead quality was the issue; if they stay low even with good leads, the reps are the cause.",
        credit: 1.0,
      },
      {
        text: "It's probably the reps; send them to a closing-skills workshop and watch sales.",
        credit: 0.6,
      },
      {
        text: "That region just seems to be lagging.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Swap a batch of leads between the weak region and a strong one for a month: if the weak region's results jump on the strong region's leads, lead quality was the issue; if they stay low even with good leads, the reps are the cause.",
    explanation:
      "The lead swap holds reps fixed while varying lead quality, the exact cut the two rivals disagree on; raising the quota assumes the reps are at fault without ever testing it.",
  },
  {
    itemType: "mc",
    prompt:
      "Fish are dying in a small lake. Two rivals: oxygen crash from a summer algae bloom, or chemical runoff from a nearby field after rain. Which measurement discriminates best?",
    mcOptions: [
      {
        text: "Fish kills are sad but happen; restock the lake later and monitor.",
        credit: 0,
      },
      {
        text: "Take a dawn dissolved-oxygen reading plus a quick water toxicity panel: an algae crash shows oxygen near zero before sunrise with low toxins, while runoff shows adequate oxygen but elevated nitrate or pesticide levels — the two leave different chemistry.",
        credit: 1.0,
      },
      {
        text: "The water seems to be killing the fish.",
        credit: 0.3,
      },
      {
        text: "It's probably the algae; treat the bloom and see if deaths slow.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Take a dawn dissolved-oxygen reading plus a quick water toxicity panel: an algae crash shows oxygen near zero before sunrise with low toxins, while runoff shows adequate oxygen but elevated nitrate or pesticide levels — the two leave different chemistry.",
    explanation:
      "Oxygen and toxin readings split the rivals because each predicts a distinct water profile; restocking later collects no evidence and lets the real cause keep killing fish.",
  },
  {
    itemType: "mc",
    prompt:
      "A phone's battery suddenly drains by lunchtime. Two leads: the battery itself is worn out, or a recently installed app is running in the background. Which check separates them?",
    mcOptions: [
      {
        text: "Open the battery-usage screen and the battery-health reading: a rogue app shows one app eating an outsized share of usage with health still high, while a worn battery shows usage spread normally but health far below 100% and rapid drain even when idle.",
        credit: 1.0,
      },
      {
        text: "It's probably the new app; uninstall it and watch the battery for a day.",
        credit: 0.6,
      },
      {
        text: "The battery doesn't last like it used to.",
        credit: 0.3,
      },
      {
        text: "Phones degrade; just carry a charger and stop worrying about why.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Open the battery-usage screen and the battery-health reading: a rogue app shows one app eating an outsized share of usage with health still high, while a worn battery shows usage spread normally but health far below 100% and rapid drain even when idle.",
    explanation:
      "Usage breakdown plus the health figure is the discriminating read because the two causes predict opposite patterns; carrying a charger sidesteps the diagnosis altogether.",
  },
  {
    itemType: "mc",
    prompt:
      "A factory pump has developed a strong vibration. Two suspects: a worn bearing, or an imbalance in the impeller after recent cleaning. Which test discriminates best?",
    mcOptions: [
      {
        text: "Machines vibrate; bolt it down tighter and run it until it fails.",
        credit: 0,
      },
      {
        text: "The pump is shaking more than normal.",
        credit: 0.3,
      },
      {
        text: "Run a vibration-frequency analysis: an imbalance peaks sharply at exactly the running speed (one-per-revolution), while a worn bearing shows high-frequency energy at the bearing's defect frequencies — the spectrum points to one fault, not the other.",
        credit: 1.0,
      },
      {
        text: "It's probably the bearing; replace it and see if the vibration stops.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Run a vibration-frequency analysis: an imbalance peaks sharply at exactly the running speed (one-per-revolution), while a worn bearing shows high-frequency energy at the bearing's defect frequencies — the spectrum points to one fault, not the other.",
    explanation:
      "The frequency spectrum is the discriminating signature because imbalance and bearing wear show up at different frequencies; swapping the bearing on a guess may leave an imbalance untouched.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A bakery's signature loaves have come out denser for two weeks. Two leads: a new bag of flour with lower protein, or an oven that is no longer reaching its set temperature. Which next step best separates them?",
    mcOptions: [
      {
        text: "Bake one test loaf with the old leftover flour and one with the new flour in the same oven session, with an oven thermometer inside: if both rise poorly, it's the oven; if only the new-flour loaf is dense while the thermometer reads correct, it's the flour.",
        credit: 1.0,
      },
      {
        text: "It's probably the flour; order a different brand and see if the loaves recover.",
        credit: 0.6,
      },
      {
        text: "The bread hasn't been as good lately.",
        credit: 0.3,
      },
      {
        text: "Baking varies day to day; just sell the denser loaves at a discount.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish the flour lead from the rival 'the oven is underheating,' and say what result would refute the flour lead.",
      modelAnswer:
        "Cheapest test: bake the old flour and the new flour side by side in the same oven with a thermometer inside, since only the flour differs between the two loaves. The flour lead is refuted if the old-flour loaf comes out just as dense or the thermometer reads below the set temperature, which would point to the oven.",
      yieldAnchors: [
        "Loaves have been denser for two weeks",
        "A new bag of flour was opened",
        "The oven's actual temperature is unverified",
      ],
      riskAnchors: [
        "The old-flour loaf rises while the new-flour loaf stays dense",
        "An in-oven thermometer reads the correct temperature",
        "Both loaves rise poorly when the oven runs cold",
      ],
      defeatedBy: [
        "Baking just varies and nothing can be pinned down",
        "The oven is fine because it looks hot enough",
      ],
    },
    correctAnswer:
      "Bake one test loaf with the old leftover flour and one with the new flour in the same oven session, with an oven thermometer inside: if both rise poorly, it's the oven; if only the new-flour loaf is dense while the thermometer reads correct, it's the flour.",
    explanation:
      "Full credit runs both rivals in one controlled bake so flour and temperature each make a different prediction; discounting the loaves abandons the diagnosis entirely.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A retail store's monthly inventory shows stock missing beyond sales. Three rivals: customer shoplifting, employee theft, or a receiving-count error at the loading dock. Which step best discriminates?",
    mcOptions: [
      {
        text: "Retail shrink is unavoidable; just write it off and raise prices a little.",
        credit: 0,
      },
      {
        text: "Cross-check where and when the gaps appear: shoplifting clusters on easily-pocketed items near exits during busy hours, employee theft shows after-hours gaps and voided transactions, and a receiving error shows the shortfall present from the moment goods arrive — each rival leaves a different trail.",
        credit: 1.0,
      },
      {
        text: "It's probably shoplifting; add security mirrors and see if shrink falls.",
        credit: 0.6,
      },
      {
        text: "Stock seems to be going missing somehow.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish the receiving-error lead from the rival 'someone is stealing it,' and say what result would refute the receiving-error lead.",
      modelAnswer:
        "Cheapest test: hand-count a few incoming shipments against the supplier's packing slips at the dock, since a receiving error means the stock was never there to steal. The receiving-error lead is refuted if deliveries match the slips exactly yet inventory still comes up short later, which points to theft after arrival.",
      yieldAnchors: [
        "Inventory is missing beyond recorded sales",
        "Three live causes are in play",
        "Losses could occur at intake or on the floor",
      ],
      riskAnchors: [
        "Hand-counted shipments fall short of the packing slip",
        "Gaps concentrate on small high-value items near exits",
        "Shortfalls appear in after-hours voided transactions",
      ],
      defeatedBy: [
        "Shrink is just unavoidable and uninvestigable",
        "It is definitely shoplifting before any counts are checked",
      ],
    },
    correctAnswer:
      "Cross-check where and when the gaps appear: shoplifting clusters on easily-pocketed items near exits during busy hours, employee theft shows after-hours gaps and voided transactions, and a receiving error shows the shortfall present from the moment goods arrive — each rival leaves a different trail.",
    explanation:
      "Mapping the timing and location of losses is the discriminating cut because the three rivals each leave a distinct trail; writing off shrink and raising prices learns nothing about which is at work.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A farmer's corn yield is down in one field only. Two leads: the soil there has turned too acidic, or that field's irrigation line is delivering too little water. Which test best separates them?",
    mcOptions: [
      {
        text: "Yields fluctuate; rotate to a different crop next year and hope it does better.",
        credit: 0,
      },
      {
        text: "That field just underproduced.",
        credit: 0.3,
      },
      {
        text: "Pull a cheap soil pH test and check soil moisture at depth in the same spots: low pH with adequate moisture points to acidity, while normal pH with dry subsoil points to under-irrigation — the two readings move independently.",
        credit: 1.0,
      },
      {
        text: "It's probably the water; run the irrigation longer next season and see if yield recovers.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish the acidity lead from the rival 'the field is under-watered,' and say what result would refute the acidity lead.",
      modelAnswer:
        "Cheapest test: take a pH strip reading and a moisture probe in the same low-yield spots, since acidity and dryness are independent measurements. The acidity lead is refuted if pH reads normal while the subsoil is clearly dry, pointing to irrigation rather than soil chemistry.",
      yieldAnchors: [
        "Yield is down in one field only",
        "Soil acidity is one suspect",
        "That field's irrigation line is the other suspect",
      ],
      riskAnchors: [
        "The pH test reads abnormally low with moist soil",
        "The moisture probe reads dry with normal pH",
        "Liming the soil restores yield where pH was low",
      ],
      defeatedBy: [
        "Yields just fluctuate and the cause is unknowable",
        "Rotating crops fixes it without finding the cause",
      ],
    },
    correctAnswer:
      "Pull a cheap soil pH test and check soil moisture at depth in the same spots: low pH with adequate moisture points to acidity, while normal pH with dry subsoil points to under-irrigation — the two readings move independently.",
    explanation:
      "Reading pH and moisture together is discriminating because the rivals predict different combinations; rotating crops blindly never identifies which factor is limiting the corn.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A subscription app's monthly churn has climbed. Two leads: a confusing new onboarding flow, or a recent price increase. Which step best separates them?",
    mcOptions: [
      {
        text: "Churn has endless causes; just spend more on ads to replace lost users.",
        credit: 0,
      },
      {
        text: "Split churn by user tenure and exit-survey reason: onboarding trouble shows up as brand-new users quitting in week one, while the price hike shows up as long-tenured users canceling right after their renewal bill — the two rivals churn different cohorts.",
        credit: 1.0,
      },
      {
        text: "It's probably the price; offer a discount and watch whether churn eases.",
        credit: 0.6,
      },
      {
        text: "More people are canceling than before.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish the onboarding lead from the rival 'the price hike drove people away,' and say what result would refute the onboarding lead.",
      modelAnswer:
        "Cheapest test: break the churned users down by how long they had been subscribed, since onboarding failure kills new users while a price hike hits established ones at renewal. The onboarding lead is refuted if the people leaving are mostly long-tenured users canceling right after the new bill, pointing to price.",
      yieldAnchors: [
        "Monthly churn has climbed",
        "A new onboarding flow shipped",
        "A price increase landed recently",
      ],
      riskAnchors: [
        "Churned users are concentrated in their first week",
        "Long-tenured users cancel at the renewal charge",
        "Exit surveys cite confusion versus cost differently",
      ],
      defeatedBy: [
        "Churn is unknowable and only ads can help",
        "It must be the price before any cohorts are checked",
      ],
    },
    correctAnswer:
      "Split churn by user tenure and exit-survey reason: onboarding trouble shows up as brand-new users quitting in week one, while the price hike shows up as long-tenured users canceling right after their renewal bill — the two rivals churn different cohorts.",
    explanation:
      "Slicing churn by tenure is the discriminating observation because the rivals lose different cohorts; buying ads to backfill never reveals which change is bleeding users.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A home aquarium has a sudden green-algae bloom. Two leads: the tank gets too much light by a sunny window, or excess nutrients from overfeeding. Which test discriminates best?",
    mcOptions: [
      {
        text: "Algae happens in tanks; scrub the glass and keep doing what you do.",
        credit: 0,
      },
      {
        text: "The tank has gone green.",
        credit: 0.3,
      },
      {
        text: "Run a nitrate/phosphate test kit and separately shade the tank for a few days: high nutrient readings point to overfeeding, while the bloom fading under shade despite the same feeding points to light — the two causes respond to different interventions.",
        credit: 1.0,
      },
      {
        text: "It's probably the light; move the tank away from the window and see if it clears.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish the nutrient lead from the rival 'too much light is fueling the algae,' and say what result would refute the nutrient lead.",
      modelAnswer:
        "Cheapest test: run a nitrate and phosphate kit on the water, since overfeeding drives those numbers up while a pure light problem leaves them normal. The nutrient lead is refuted if nitrate and phosphate read low yet the bloom only clears once the tank is shaded, pointing to light.",
      yieldAnchors: [
        "A sudden green-algae bloom appeared",
        "The tank sits by a sunny window",
        "Feeding may be excessive",
      ],
      riskAnchors: [
        "Nitrate and phosphate read high on the test kit",
        "The bloom fades under shade despite the same feeding",
        "Cutting feeding clears the water at constant light",
      ],
      defeatedBy: [
        "Algae is random and not worth diagnosing",
        "Light is the cause without measuring nutrients",
      ],
    },
    correctAnswer:
      "Run a nitrate/phosphate test kit and separately shade the tank for a few days: high nutrient readings point to overfeeding, while the bloom fading under shade despite the same feeding points to light — the two causes respond to different interventions.",
    explanation:
      "Testing nutrients and shading the tank are the discriminating manipulations because each rival reacts to only one; scrubbing the glass treats the symptom and tells you nothing about the cause.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A school bus has been arriving late all week. Three leads: heavier traffic on the route, a slower substitute driver, or a mechanical issue making the bus sluggish. Which step best discriminates?",
    mcOptions: [
      {
        text: "Buses run late sometimes; just tell families to expect delays.",
        credit: 0,
      },
      {
        text: "Compare the timestamped GPS logs across days: traffic shows delay concentrated at specific congested intersections, a slow driver shows uniformly longer dwell at every stop, and a mechanical fault shows reduced speed on open stretches — each rival distorts a different part of the trip.",
        credit: 1.0,
      },
      {
        text: "It's probably traffic; leave ten minutes earlier and see if it arrives on time.",
        credit: 0.6,
      },
      {
        text: "The bus keeps showing up late.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish the traffic lead from the rival 'a slow substitute driver,' and say what result would refute the traffic lead.",
      modelAnswer:
        "Cheapest test: read the GPS log to see where the time is lost, since traffic piles delay at specific congested intersections while a slow driver adds time evenly at every stop. The traffic lead is refuted if the log shows uniform extra time at all stops with smooth flow between them, pointing to the driver.",
      yieldAnchors: [
        "The bus is late all week",
        "Traffic, driver, and mechanics are all suspects",
        "Timestamped GPS data exists for the route",
      ],
      riskAnchors: [
        "Delay concentrates at known congested intersections",
        "Every stop shows uniformly longer dwell time",
        "Speed drops on open stretches with no traffic",
      ],
      defeatedBy: [
        "Lateness is just expected and uninvestigable",
        "It is obviously traffic without reading the log",
      ],
    },
    correctAnswer:
      "Compare the timestamped GPS logs across days: traffic shows delay concentrated at specific congested intersections, a slow driver shows uniformly longer dwell at every stop, and a mechanical fault shows reduced speed on open stretches — each rival distorts a different part of the trip.",
    explanation:
      "The GPS log is the discriminating record because each rival warps a different segment of the route; telling families to expect delays gives up on diagnosing it.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A podcast's downloads dropped 40% overnight. Two leads: the RSS feed broke so apps stopped fetching episodes, or the latest episode's topic simply flopped. Which check best separates them?",
    mcOptions: [
      {
        text: "Downloads bounce around; just promote the next episode harder.",
        credit: 0,
      },
      {
        text: "Numbers are down lately.",
        credit: 0.3,
      },
      {
        text: "Check whether the back catalog's automatic downloads also fell: a broken feed cuts downloads across all episodes at once including old ones, while a flop episode leaves the catalog's steady numbers intact and only the new episode underperforms.",
        credit: 1.0,
      },
      {
        text: "It's probably the topic; pick a safer subject next week and watch the numbers.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish the broken-feed lead from the rival 'the episode just flopped,' and say what result would refute the broken-feed lead.",
      modelAnswer:
        "Cheapest test: look at whether downloads of old back-catalog episodes also dropped, since a broken feed starves every episode while a flop only hits the new one. The broken-feed lead is refuted if the back catalog's downloads held steady and only the latest episode sank, pointing to weak content.",
      yieldAnchors: [
        "Downloads dropped 40% overnight",
        "The RSS feed may have broken",
        "The latest episode's topic may have flopped",
      ],
      riskAnchors: [
        "Old back-catalog episodes lost downloads too",
        "A feed validator flags an error in the feed",
        "Only the newest episode underperforms while the rest hold",
      ],
      defeatedBy: [
        "Downloads are random and not worth checking",
        "The topic flopped without checking the catalog",
      ],
    },
    correctAnswer:
      "Check whether the back catalog's automatic downloads also fell: a broken feed cuts downloads across all episodes at once including old ones, while a flop episode leaves the catalog's steady numbers intact and only the new episode underperforms.",
    explanation:
      "The back-catalog comparison is discriminating because a feed failure hits everything while a flop hits only the new episode; promoting harder skips the diagnosis and may waste effort on a feed that is still broken.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An office's Wi-Fi keeps dropping in the afternoons. Two leads: interference from the microwave and devices on a crowded channel, or the router being overloaded as more people connect after lunch. Which test discriminates best?",
    mcOptions: [
      {
        text: "Wi-Fi is flaky everywhere; just tell people to use a cable when it matters.",
        credit: 0,
      },
      {
        text: "Log the router's connected-device count and run a channel scan during a drop: overload shows drops rising with device count regardless of channel, while interference shows drops spiking when the microwave runs or a neighboring network crowds the channel, independent of how many people are online.",
        credit: 1.0,
      },
      {
        text: "It's probably overload; buy a bigger router and see if drops stop.",
        credit: 0.6,
      },
      {
        text: "The connection seems unreliable in the afternoon.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish the overload lead from the rival 'channel interference,' and say what result would refute the overload lead.",
      modelAnswer:
        "Cheapest test: log how the drops correlate with the number of connected devices versus microwave use, since overload tracks device count while interference tracks the interfering source. The overload lead is refuted if drops occur at low device counts but spike whenever the microwave runs, pointing to interference.",
      yieldAnchors: [
        "Wi-Fi drops in the afternoons",
        "Interference is one suspect",
        "Router overload after lunch is the other",
      ],
      riskAnchors: [
        "Drops scale with the connected-device count",
        "Drops coincide with microwave use or a crowded channel",
        "Drops occur even with few devices online",
      ],
      defeatedBy: [
        "Wi-Fi is just flaky and the cause is unknowable",
        "It is overload without checking interference",
      ],
    },
    correctAnswer:
      "Log the router's connected-device count and run a channel scan during a drop: overload shows drops rising with device count regardless of channel, while interference shows drops spiking when the microwave runs or a neighboring network crowds the channel, independent of how many people are online.",
    explanation:
      "Correlating drops with device count versus interference sources is the discriminating measurement because the rivals track different variables; buying a bigger router assumes overload and may not touch an interference problem.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A gardener's tomatoes keep splitting near the stem. Two leads: irregular watering that swells the fruit in bursts, or a thin-skinned variety prone to cracking. The garden has both this variety and a thicker-skinned one. Which step best separates them?",
    mcOptions: [
      {
        text: "Compare cracking across the two varieties under the same watering: if only the thin-skinned plants split while the thick-skinned ones beside them stay whole, it's the variety; if both varieties crack in step with rain-then-dry swings, it's the watering.",
        credit: 1.0,
      },
      {
        text: "It's probably the watering; put down mulch to even out moisture and see if cracking eases.",
        credit: 0.6,
      },
      {
        text: "The tomatoes keep splitting somehow.",
        credit: 0.3,
      },
      {
        text: "Tomatoes crack sometimes; just pick them a bit early and don't worry about why.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish the watering lead from the rival 'this variety is just thin-skinned,' and say what result would refute the watering lead.",
      modelAnswer:
        "Cheapest test: watch whether both varieties crack together after rain-then-dry swings, since uneven watering should hit every plant while a variety flaw should hit only the thin-skinned one. The watering lead is refuted if only the thin-skinned variety splits while the thick-skinned plants right beside it stay intact under the same moisture.",
      yieldAnchors: [
        "Tomatoes keep splitting near the stem",
        "Both a thin- and a thick-skinned variety grow together",
        "Watering may be irregular",
      ],
      riskAnchors: [
        "Both varieties crack in step with moisture swings",
        "Only the thin-skinned variety splits under even watering",
        "Mulching to steady moisture reduces cracking across varieties",
      ],
      defeatedBy: [
        "Cracking is random and not worth diagnosing",
        "It is the variety without comparing watering",
      ],
    },
    correctAnswer:
      "Compare cracking across the two varieties under the same watering: if only the thin-skinned plants split while the thick-skinned ones beside them stay whole, it's the variety; if both varieties crack in step with rain-then-dry swings, it's the watering.",
    explanation:
      "Comparing both varieties under identical watering is the discriminating cut because watering would hit both while a variety flaw hits only one; picking fruit early sidesteps the diagnosis entirely.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A small clinic sees several office workers reporting recurring afternoon headaches. Three rivals fit: dehydration, eye strain from long screen sessions, or poor sleep. The patients all sit at desks, drink little water, and report variable sleep. In one paragraph, propose the strongest lead for the headaches and describe how you would design observations so the rivals carve the evidence into discriminating tests.",
    writtenRubric: {
      modelAnswer:
        "The strongest move is not to bet on one cause blindly but to pick the lead — eye strain from sustained near-screen focus — and then arrange observations on which the three rivals must disagree, because they predict different patterns. Eye strain predicts headaches that track screen hours and ease with the 20-20-20 break routine; dehydration predicts headaches that track fluid intake and lift with steady water regardless of screen time; poor sleep predicts headaches that track the prior night's sleep and persist on low-screen days. I would have patients log screen hours, water intake, and sleep against headache timing for two weeks, then run targeted swaps: enforce regular screen breaks while holding water and sleep fixed, then push hydration while holding screens fixed. Whichever single change reliably removes the afternoon headache is the cause, and a result where breaks help but hydration does not would refute the dehydration rival and confirm eye strain.",
      yieldAnchors: [
        "Headaches recur in the afternoon",
        "Patients sit at screens and drink little water",
        "Sleep is variable across patients",
      ],
      riskAnchors: [
        "Headaches track screen hours and ease with screen breaks",
        "Headaches track fluid intake and lift with steady water",
        "Headaches track prior-night sleep and persist on low-screen days",
      ],
      defeatedBy: [
        "Headaches have too many causes to investigate at all",
        "It is definitely dehydration with no need to test the rivals",
        "All three causes must be acting equally so nothing can be isolated",
      ],
    },
    correctAnswer:
      "The strongest move is not to bet on one cause blindly but to pick the lead — eye strain from sustained near-screen focus — and then arrange observations on which the three rivals must disagree, because they predict different patterns. Eye strain predicts headaches that track screen hours and ease with the 20-20-20 break routine; dehydration predicts headaches that track fluid intake and lift with steady water regardless of screen time; poor sleep predicts headaches that track the prior night's sleep and persist on low-screen days. I would have patients log screen hours, water intake, and sleep against headache timing for two weeks, then run targeted swaps: enforce regular screen breaks while holding water and sleep fixed, then push hydration while holding screens fixed. Whichever single change reliably removes the afternoon headache is the cause, and a result where breaks help but hydration does not would refute the dehydration rival and confirm eye strain.",
    explanation:
      "Under CCR the cautious 'too many causes to investigate' earns near-zero; credit goes to using the rivals to design observations they disagree on — varying one factor at a time so the data cleanly separates eye strain, dehydration, and sleep.",
  },
  {
    itemType: "written",
    prompt:
      "A car-plant paint line is producing more orange-peel surface defects this month. Two rivals fit: high shop humidity affecting how the paint flows, or a worn spray nozzle atomizing the paint poorly. Defects appear on cars from both shifts. In one paragraph, propose the strongest lead and describe how you would let the rivals carve out a discriminating test.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is the worn nozzle, but the right move is to set up the one observation on which the nozzle and humidity rivals make opposite predictions rather than guessing. The nozzle predicts defects tied to a particular gun or booth regardless of the day's humidity, with the spray pattern visibly coarse on a test card; humidity predicts defects that rise and fall with the logged humidity across all booths alike, independent of which gun sprayed. I would tag each defective car with its booth and spray gun, overlay defect rate against the hourly humidity log, and spray test cards from each nozzle to inspect atomization. If defects concentrate on one gun's cars and that gun's test card shows coarse droplets while humidity stayed flat, the nozzle is confirmed and the humidity rival is refuted; if instead defects spike on humid hours across every booth, humidity is the cause. Swapping in a fresh nozzle on the suspect gun while humidity is unchanged is the clean crucial check.",
      yieldAnchors: [
        "Orange-peel defects rose this month",
        "Defects appear on cars from both shifts",
        "Humidity and nozzle wear are the two suspects",
      ],
      riskAnchors: [
        "Defects concentrate on one gun or booth regardless of humidity",
        "Defect rate tracks the hourly humidity log across all booths",
        "A test card shows coarse atomization from the suspect nozzle",
      ],
      defeatedBy: [
        "Paint defects are random and not worth tracing",
        "It is obviously humidity without tagging guns",
        "Nothing can be concluded because both factors are present",
      ],
    },
    correctAnswer:
      "The strongest lead is the worn nozzle, but the right move is to set up the one observation on which the nozzle and humidity rivals make opposite predictions rather than guessing. The nozzle predicts defects tied to a particular gun or booth regardless of the day's humidity, with the spray pattern visibly coarse on a test card; humidity predicts defects that rise and fall with the logged humidity across all booths alike, independent of which gun sprayed. I would tag each defective car with its booth and spray gun, overlay defect rate against the hourly humidity log, and spray test cards from each nozzle to inspect atomization. If defects concentrate on one gun's cars and that gun's test card shows coarse droplets while humidity stayed flat, the nozzle is confirmed and the humidity rival is refuted; if instead defects spike on humid hours across every booth, humidity is the cause. Swapping in a fresh nozzle on the suspect gun while humidity is unchanged is the clean crucial check.",
    explanation:
      "The cautious 'nothing can be concluded because both factors are present' scores near-zero; top credit goes to engineering the booth-and-humidity comparison the two rivals split on, plus the nozzle swap that could refute the lead.",
  },
  {
    itemType: "written",
    prompt:
      "An e-commerce site's checkout-error rate jumped right after a busy sales day. Two rivals fit: the third-party payment provider is failing under load, or a code change the team deployed that morning introduced a bug. Errors hit users across browsers and regions. In one paragraph, propose the strongest lead and describe how you would let the rivals carve the evidence into a discriminating test.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is the morning deploy, but the disciplined move is to find the observation on which the deploy and the payment-provider rivals disagree instead of assuming. The deploy predicts errors that begin precisely at the deploy timestamp, appear in the application's own error logs, and vanish when the change is rolled back; the failing provider predicts errors clustered at the provider's API calls, visible as timeouts or declines in the provider's status dashboard, and present even on the previous code version. I would overlay the error-rate graph against both the deploy time and the provider's status page, inspect whether the stack traces originate in our code or in the payment call, and roll back the deploy on a fraction of traffic. If errors started at the deploy minute, trace to our code, and stop on the rolled-back traffic while the provider reports healthy, the deploy is confirmed and the provider rival is refuted; if errors track provider timeouts and persist after rollback, it is the provider. The partial rollback is the crucial test that separates them.",
      yieldAnchors: [
        "Checkout errors jumped after a busy sales day",
        "A code change was deployed that morning",
        "Errors hit users across browsers and regions",
      ],
      riskAnchors: [
        "Errors begin exactly at the deploy timestamp and trace to our code",
        "Rolling back the deploy stops the errors",
        "Errors cluster at the payment API with provider-side timeouts",
      ],
      defeatedBy: [
        "Checkout errors are unpredictable and cannot be traced",
        "It must be the provider because the day was busy",
        "Both could be at fault so no test can decide",
      ],
    },
    correctAnswer:
      "The strongest lead is the morning deploy, but the disciplined move is to find the observation on which the deploy and the payment-provider rivals disagree instead of assuming. The deploy predicts errors that begin precisely at the deploy timestamp, appear in the application's own error logs, and vanish when the change is rolled back; the failing provider predicts errors clustered at the provider's API calls, visible as timeouts or declines in the provider's status dashboard, and present even on the previous code version. I would overlay the error-rate graph against both the deploy time and the provider's status page, inspect whether the stack traces originate in our code or in the payment call, and roll back the deploy on a fraction of traffic. If errors started at the deploy minute, trace to our code, and stop on the rolled-back traffic while the provider reports healthy, the deploy is confirmed and the provider rival is refuted; if errors track provider timeouts and persist after rollback, it is the provider. The partial rollback is the crucial test that separates them.",
    explanation:
      "CCR gives near-zero to 'both could be at fault so no test can decide'; credit rewards using the rivals to pick discriminating observations — deploy timing, stack-trace origin, and a partial rollback that could refute the lead.",
  },
  {
    itemType: "written",
    prompt:
      "Songbirds have largely vanished from a once-busy city park over one season. Three rivals fit: a surge in free-roaming cats, loss of insect food after the lawns were sprayed, or fewer nesting spots after old shrubs were cleared. In one paragraph, propose the strongest lead and describe how you would let the rivals carve the evidence into discriminating observations.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is the insecticide spraying cutting off the birds' food supply, but the right method is to set up observations on which the three rivals diverge rather than asserting one. The food-loss rival predicts a crash in insect counts on the sprayed lawns and birds still present in unsprayed corners with bugs; the cat rival predicts feathers, kills, and birds avoiding ground level while insects remain plentiful; the nesting rival predicts adults still foraging but no successful nests and birds concentrating where shrubs survived. I would run sweep-net insect counts in sprayed versus unsprayed patches, set a few cameras to log cat activity and predation, and survey remaining shrubs for active nests. If insect counts collapsed where spraying occurred and birds persist only in buggy unsprayed areas while cameras show few cats and old nests sit unused-but-intact, the food rival is confirmed and the cat and nesting rivals are refuted; the unsprayed-patch comparison is the cleanest discriminating test.",
      yieldAnchors: [
        "Songbirds vanished over one season",
        "Cats, lawn spraying, and shrub clearing are all suspects",
        "The park was previously full of birds",
      ],
      riskAnchors: [
        "Insect counts collapse on sprayed lawns but hold in unsprayed patches",
        "Cameras show cat predation with feathers and kills",
        "Surviving shrubs hold active nests while cleared areas have none",
      ],
      defeatedBy: [
        "Wildlife comes and goes for reasons we cannot know",
        "It is obviously the cats with no counts taken",
        "All three causes act together so none can be singled out",
      ],
    },
    correctAnswer:
      "The strongest lead is the insecticide spraying cutting off the birds' food supply, but the right method is to set up observations on which the three rivals diverge rather than asserting one. The food-loss rival predicts a crash in insect counts on the sprayed lawns and birds still present in unsprayed corners with bugs; the cat rival predicts feathers, kills, and birds avoiding ground level while insects remain plentiful; the nesting rival predicts adults still foraging but no successful nests and birds concentrating where shrubs survived. I would run sweep-net insect counts in sprayed versus unsprayed patches, set a few cameras to log cat activity and predation, and survey remaining shrubs for active nests. If insect counts collapsed where spraying occurred and birds persist only in buggy unsprayed areas while cameras show few cats and old nests sit unused-but-intact, the food rival is confirmed and the cat and nesting rivals are refuted; the unsprayed-patch comparison is the cleanest discriminating test.",
    explanation:
      "The 'wildlife comes and goes for reasons we cannot know' refusal earns near-zero; top credit goes to letting the three rivals predict different signatures — insect counts, predation cameras, nest surveys — and chasing the observation that separates them.",
  },
  {
    itemType: "written",
    prompt:
      "A subscription snack-box service sees cancellations rising. Two rivals fit: shipping has gotten slower and boxes arrive late, or the snack selection has gotten worse and customers are bored. Cancellations span new and old subscribers. In one paragraph, propose the strongest lead and describe how you would let the rivals carve the evidence into a discriminating test.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is slower shipping driving cancellations, but the disciplined move is to find the observation on which the shipping and product rivals make different predictions rather than guessing. The shipping rival predicts cancellations clustered among customers whose recent boxes were delivered late and exit comments about delays; the product rival predicts cancellations spread evenly regardless of delivery speed, with comments about repetitive or low-quality snacks and lower ratings on recent box contents. I would join each cancellation to that customer's last delivery time and box-rating, then read the exit-survey reasons coded into delay-versus-product buckets. If cancellations concentrate among the late-delivery customers and cite shipping while on-time customers stay and still rate the snacks well, the shipping rival is confirmed and the product rival refuted; if on-time customers cancel just as often while panning the snacks, it is the product. A small test that expedites shipping for a random subset, holding the snack lineup fixed, is the crucial check that separates them.",
      yieldAnchors: [
        "Cancellations are rising",
        "Cancellations span new and old subscribers",
        "Slow shipping and worse snacks are the two suspects",
      ],
      riskAnchors: [
        "Cancellations concentrate among late-delivery customers",
        "On-time customers stay and rate the snacks well",
        "Expediting shipping for a random subset lowers their cancellation",
      ],
      defeatedBy: [
        "Cancellations just happen and cannot be explained",
        "It is obviously the snacks without checking delivery times",
        "Both reasons apply so the cause cannot be isolated",
      ],
    },
    correctAnswer:
      "The strongest lead is slower shipping driving cancellations, but the disciplined move is to find the observation on which the shipping and product rivals make different predictions rather than guessing. The shipping rival predicts cancellations clustered among customers whose recent boxes were delivered late and exit comments about delays; the product rival predicts cancellations spread evenly regardless of delivery speed, with comments about repetitive or low-quality snacks and lower ratings on recent box contents. I would join each cancellation to that customer's last delivery time and box-rating, then read the exit-survey reasons coded into delay-versus-product buckets. If cancellations concentrate among the late-delivery customers and cite shipping while on-time customers stay and still rate the snacks well, the shipping rival is confirmed and the product rival refuted; if on-time customers cancel just as often while panning the snacks, it is the product. A small test that expedites shipping for a random subset, holding the snack lineup fixed, is the crucial check that separates them.",
    explanation:
      "Under CCR, 'both reasons apply so the cause cannot be isolated' scores near-zero; credit goes to using the rivals to design the discriminating join — delivery time versus box rating — and the expedited-shipping test that could refute the lead.",
  },
];

export const section: SectionContent = {
  slug: "differential-diagnosis",
  title: "Differential Diagnosis",
  weekNumber: 3,
  blurb:
    "When several explanations survive the evidence, don't pile up facts that fit your favorite — let the rivals themselves point you to the one observation on which they disagree, and chase that discriminating evidence.",
  lectureTitle:
    "3.2 Differential Diagnosis: letting rivals carve the evidence into discriminating tests",
  body: `# Differential Diagnosis

Once you have named the live rivals, the question is no longer "what fits my favorite?" but "what would tell my rivals apart?" Reflexive caution stalls here — "we can't be sure which one it is, so let's gather more data." But undirected data is wasted motion. Constructive Critical Reasoning makes the rivals do the work: each candidate explanation predicts something, and the strongest move is to chase the observation where they predict *different* things.

## Confirming evidence is cheap; discriminating evidence is gold

A fact that fits your favorite explanation usually fits the rivals too — so it moves nothing. If the car won't start, "the engine cranks slowly" is consistent with both a weak battery and a bad starter; collecting ten more slow cranks teaches you nothing. The voltmeter reading while cranking is different: a weak battery sags below ten volts, a bad starter holds voltage. That single number splits the rivals. Always ask: would this observation come out the same way under every live explanation? If yes, skip it.

## Let the rivals write your test

The trick is to take each rival in turn and finish the sentence "if *this* is the cause, then I should see ___, and I should *not* see ___." Lay those predictions side by side and look for the place they collide. That collision point is your discriminating test. In a food-poisoning outbreak you don't keep inspecting the kitchen; you compare what the sick guests ate against what the well guests ate, because the two suspect dishes partition the guests differently.

## Vary one thing, hold the rest

The cleanest discriminating tests change exactly the factor the rivals disagree about while holding everything else fixed. Bake the old flour and the new flour in the *same* oven; swap the leads between regions while keeping the reps; roll back the code on a *slice* of traffic while the payment provider runs unchanged. When only one variable moves, only one rival can claim the result.

## Why "we can't tell, so gather more" loses

"Gather more data" is the zero-credit dodge when it doesn't say *which* data. Two rivals can stay tied forever under a flood of evidence that fits both. The constructive reasoner doesn't ask for more data in general — they ask for the *one* observation the rivals split on, and often a single cheap check settles a question a thousand confirming facts could not.

## Overreach still loses

Discriminating hard is not the same as forcing a verdict the test can't support. If you run the crosstab and the pattern genuinely fits both rivals, you have not separated them — naming a winner anyway is reckless overreach. The right output is the *next* discriminating observation, not a confident guess the evidence doesn't license.

## In the real world

A SaaS team's crash reports triple the day a new OS update and their own app release both ship. The dodge: "software crashes for endless reasons — tell users to reinstall." The differential move: the two rivals predict crashes in different populations, so split the crashes by app version and OS version. If the new app build crashes on every OS, it's the release; if the new OS crashes every app build, it's the OS. One crosstab, built from the rivals' own predictions, decides what a mountain of raw crash logs never would.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
