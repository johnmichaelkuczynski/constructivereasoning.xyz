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
      "A clothing store redesigned its floor layout and revenue rose 25% the next month, so the owner concludes the new layout drove the gain. Which response best strengthens the reasoning?",
    mcOptions: [
      {
        text: "The conclusion silently assumes foot traffic and the product mix stayed the same; surface and test it by comparing per-visitor spend before and after, by checking whether a nearby office reopening raised traffic, and by watching a non-redesigned sister store over the same month.",
        credit: 1.0,
      },
      {
        text: "The claim leans on the assumption that traffic was steady; we could pull the door-counter numbers for the two months and compare.",
        credit: 0.6,
      },
      {
        text: "There are probably some unstated assumptions behind the layout claim worth keeping in mind.",
        credit: 0.3,
      },
      {
        text: "Revenue rose right after the redesign, so the layout clearly caused it and no further checking is needed.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The conclusion silently assumes foot traffic and the product mix stayed the same; surface and test it by comparing per-visitor spend before and after, by checking whether a nearby office reopening raised traffic, and by watching a non-redesigned sister store over the same month.",
    explanation:
      "Top credit names the load-bearing hidden assumption (traffic and mix held constant) and three cheap checks that could refute it; the 'it clearly caused it' option blindly accepts the conclusion without auditing what it depends on.",
  },
  {
    itemType: "mc",
    prompt:
      "After deploying a code change, an engineer sees average page-load time fell from 1.8s to 1.1s and reports that her optimization made the site faster. What best sharpens the claim?",
    mcOptions: [
      {
        text: "Load time dropped after the deploy, so the optimization worked and measuring again would just waste time.",
        credit: 0,
      },
      {
        text: "The conclusion may rest on some background assumptions worth noting.",
        credit: 0.3,
      },
      {
        text: "The conclusion assumes traffic volume, dataset size, and server hardware were unchanged between measurements; test it by benchmarking the old and new code on identical inputs and hardware, by checking whether a CDN or caching change shipped the same day, and by replaying a fixed request trace against both versions.",
        credit: 1.0,
      },
      {
        text: "It assumes nothing else changed in the deploy; we could read the release notes to see what else went out.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The conclusion assumes traffic volume, dataset size, and server hardware were unchanged between measurements; test it by benchmarking the old and new code on identical inputs and hardware, by checking whether a CDN or caching change shipped the same day, and by replaying a fixed request trace against both versions.",
    explanation:
      "The richest answer surfaces the 'measured under identical conditions' assumption and names three tests that isolate it; the credulous 'it worked, don't remeasure' option ignores the scaffolding the claim rides on.",
  },
  {
    itemType: "mc",
    prompt:
      "A home baker switches to an artisan flour, her next loaf rises noticeably higher, and she concludes the flour has stronger gluten. Which response is strongest?",
    mcOptions: [
      {
        text: "Her claim assumes the yeast was equally fresh both times; she could check the expiry date on each yeast packet.",
        credit: 0.6,
      },
      {
        text: "The conclusion quietly assumes yeast freshness, dough temperature, hydration, and proof time were identical; surface and test it by baking both flours side by side with the same yeast, water ratio, and proof time, by measuring dough rise with a marked container, and by repeating with a third loaf to rule out a one-off.",
        credit: 1.0,
      },
      {
        text: "The loaf rose higher with the new flour, so the flour is clearly better and there is nothing left to question.",
        credit: 0,
      },
      {
        text: "There may be hidden factors behind the rise besides the flour.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The conclusion quietly assumes yeast freshness, dough temperature, hydration, and proof time were identical; surface and test it by baking both flours side by side with the same yeast, water ratio, and proof time, by measuring dough rise with a marked container, and by repeating with a third loaf to rule out a one-off.",
    explanation:
      "Full credit pins the load-bearing assumption (every other baking variable held fixed) and a controlled side-by-side test; the 'flour is clearly better' option swallows the conclusion without surfacing what it smuggles in.",
  },
  {
    itemType: "mc",
    prompt:
      "A man starts a magnesium supplement, notices his resting heart rate is 6 bpm lower two weeks later, and concludes the supplement calmed his heart. What best improves the reasoning?",
    mcOptions: [
      {
        text: "Some unstated assumptions probably sit behind that conclusion.",
        credit: 0.3,
      },
      {
        text: "It assumes his training load held steady; he could glance at his workout log for the two weeks.",
        credit: 0.6,
      },
      {
        text: "His heart rate fell after he started the supplement, so it obviously works and no further test is warranted.",
        credit: 0,
      },
      {
        text: "The conclusion assumes his sleep, caffeine intake, stress, and training load were unchanged; test it by tracking those variables alongside heart rate, by stopping the supplement for two weeks to see whether the rate climbs back, and by resuming it to check the drop returns.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The conclusion assumes his sleep, caffeine intake, stress, and training load were unchanged; test it by tracking those variables alongside heart rate, by stopping the supplement for two weeks to see whether the rate climbs back, and by resuming it to check the drop returns.",
    explanation:
      "The winning answer names the hidden 'all my other habits held still' assumption and a stop-and-restart test that could refute it; 'it obviously works' accepts the claim without checking its scaffolding.",
  },
  {
    itemType: "mc",
    prompt:
      "A soccer club adopts a new dynamic warmup and records half as many muscle injuries this season, so the coach credits the warmup. Which response best strengthens it?",
    mcOptions: [
      {
        text: "The claim assumes match load, field conditions, and squad fitness matched last season; surface and test it by comparing minutes played and games on hard pitches across seasons, by checking whether a rival club without the warmup also saw fewer injuries this year, and by tracking whether players who skipped the warmup got hurt more.",
        credit: 1.0,
      },
      {
        text: "Injuries dropped after the warmup changed, so the warmup is the cause and the matter is settled.",
        credit: 0,
      },
      {
        text: "It assumes the schedule was as tough as last year's; we could compare the two fixture lists.",
        credit: 0.6,
      },
      {
        text: "There are likely some background assumptions in that conclusion.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The claim assumes match load, field conditions, and squad fitness matched last season; surface and test it by comparing minutes played and games on hard pitches across seasons, by checking whether a rival club without the warmup also saw fewer injuries this year, and by tracking whether players who skipped the warmup got hurt more.",
    explanation:
      "Top credit surfaces the 'this season was as demanding as last' assumption and three discriminating checks; the 'matter is settled' option commits the post-hoc fallacy by never auditing what the claim assumes.",
  },
  {
    itemType: "mc",
    prompt:
      "A plant switches lubricants and monthly machine downtime falls from 12 hours to 5, so the manager concludes the new lubricant is better. What sharpens the claim?",
    mcOptions: [
      {
        text: "The conclusion assumes production volume was the same; he could compare units run each month.",
        credit: 0.6,
      },
      {
        text: "There may be unstated assumptions worth keeping in view.",
        credit: 0.3,
      },
      {
        text: "It quietly assumes production volume, machine age, and maintenance schedule were unchanged; test it by comparing downtime per running-hour rather than per month, by reverting one machine to the old lubricant as a control, and by checking whether a major part was also replaced when the lubricant changed.",
        credit: 1.0,
      },
      {
        text: "Downtime fell after the switch, so the lubricant clearly did it and no control is needed.",
        credit: 0,
      },
    ],
    correctAnswer:
      "It quietly assumes production volume, machine age, and maintenance schedule were unchanged; test it by comparing downtime per running-hour rather than per month, by reverting one machine to the old lubricant as a control, and by checking whether a major part was also replaced when the lubricant changed.",
    explanation:
      "The strongest answer exposes the hidden 'same workload and upkeep' assumption and a control machine that could refute it; 'no control is needed' blindly trusts a raw before/after.",
  },
  {
    itemType: "mc",
    prompt:
      "A farmer applies a new fertilizer and harvests 20% more wheat than last year, concluding the fertilizer raised the yield. Which response is strongest?",
    mcOptions: [
      {
        text: "Yield rose after the fertilizer, so it caused the gain and there is no reason to look further.",
        credit: 0,
      },
      {
        text: "The conclusion assumes rainfall, soil starting condition, and seed variety matched last year; surface and test it by leaving an unfertilized strip as a control this season, by comparing rainfall logs across the two years, and by checking whether neighboring farms using the old fertilizer also gained.",
        credit: 1.0,
      },
      {
        text: "Some hidden assumptions probably underlie that yield claim.",
        credit: 0.3,
      },
      {
        text: "It assumes the weather was similar; he could pull the season's rainfall totals.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The conclusion assumes rainfall, soil starting condition, and seed variety matched last year; surface and test it by leaving an unfertilized strip as a control this season, by comparing rainfall logs across the two years, and by checking whether neighboring farms using the old fertilizer also gained.",
    explanation:
      "Full credit names the load-bearing 'weather and soil were the same' assumption and a control strip that could disprove it; the no-look-further option ignores the scaffolding entirely.",
  },
  {
    itemType: "mc",
    prompt:
      "A school adopts a new reading program and this year's third-graders score higher on the state reading test, so the principal credits the program. What best improves the reasoning?",
    mcOptions: [
      {
        text: "There are probably unstated assumptions behind the score gain.",
        credit: 0.3,
      },
      {
        text: "Scores rose the year the program started, so the program raised them and that is conclusive.",
        credit: 0,
      },
      {
        text: "It assumes the test was as hard as last year's; we could check whether the state changed the exam.",
        credit: 0.6,
      },
      {
        text: "The conclusion assumes this cohort's incoming ability and the test's difficulty matched last year's; test it by comparing these students' second-grade baseline scores, by checking whether the state rescaled the test, and by seeing whether a neighboring school on the old program saw similar gains.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The conclusion assumes this cohort's incoming ability and the test's difficulty matched last year's; test it by comparing these students' second-grade baseline scores, by checking whether the state rescaled the test, and by seeing whether a neighboring school on the old program saw similar gains.",
    explanation:
      "Top credit surfaces the twin hidden assumptions of comparable cohort and comparable test, with checks for each; 'that is conclusive' accepts the gain without auditing what it leans on.",
  },
  {
    itemType: "mc",
    prompt:
      "An online shop turns on free shipping and its checkout conversion rate climbs, so the team concludes free shipping convinced shoppers to buy. Which response is strongest?",
    mcOptions: [
      {
        text: "The claim assumes the visitor mix and traffic sources were the same before and after; surface and test it by comparing conversion within each traffic source, by checking whether a paid-ad push arrived at the same time, and by A/B testing free shipping against paid shipping on matched visitors.",
        credit: 1.0,
      },
      {
        text: "It assumes the kind of shoppers arriving did not change; we could compare traffic-source breakdowns for the two periods.",
        credit: 0.6,
      },
      {
        text: "Conversion rose once free shipping launched, so free shipping caused it and testing further is pointless.",
        credit: 0,
      },
      {
        text: "Some background assumptions likely sit under that conclusion.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The claim assumes the visitor mix and traffic sources were the same before and after; surface and test it by comparing conversion within each traffic source, by checking whether a paid-ad push arrived at the same time, and by A/B testing free shipping against paid shipping on matched visitors.",
    explanation:
      "The richest answer exposes the hidden 'same shoppers arriving' assumption and an A/B test that could refute it; 'testing further is pointless' is the blind-acceptance failure.",
  },
  {
    itemType: "mc",
    prompt:
      "A photographer buys a pricier lens, finds her next shots noticeably sharper, and concludes the lens is optically superior. What best sharpens the claim?",
    mcOptions: [
      {
        text: "The new lens gave sharper shots, so it is better glass and there is nothing more to check.",
        credit: 0,
      },
      {
        text: "There may be some hidden assumptions behind the sharpness claim.",
        credit: 0.3,
      },
      {
        text: "The conclusion assumes lighting, shutter speed, tripod use, and focus technique were the same with both lenses; test it by shooting the same scene with both on a tripod at identical settings, by comparing only photos taken in matched light, and by checking whether the old lens looked soft mainly in handheld low-light shots.",
        credit: 1.0,
      },
      {
        text: "It assumes she shot under the same conditions; she could compare the EXIF settings on both sets.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The conclusion assumes lighting, shutter speed, tripod use, and focus technique were the same with both lenses; test it by shooting the same scene with both on a tripod at identical settings, by comparing only photos taken in matched light, and by checking whether the old lens looked soft mainly in handheld low-light shots.",
    explanation:
      "Full credit names the 'shot under identical conditions' assumption and a controlled tripod test; the 'nothing more to check' option ignores that handheld light could explain the softness.",
  },
  {
    itemType: "mc",
    prompt:
      "A clinic adds telehealth visits and its no-show rate drops, so the director concludes telehealth keeps patients from missing appointments. Which response is strongest?",
    mcOptions: [
      {
        text: "It assumes the patient population stayed the same; she could compare patient demographics across the two periods.",
        credit: 0.6,
      },
      {
        text: "The conclusion assumes the patient mix and appointment types were unchanged; surface and test it by comparing no-shows for in-person versus telehealth among the same patients, by checking whether a new reminder system launched alongside telehealth, and by seeing whether telehealth's edge holds for the appointment types it actually replaced.",
        credit: 1.0,
      },
      {
        text: "Some unstated assumptions probably underlie that conclusion.",
        credit: 0.3,
      },
      {
        text: "No-shows fell after telehealth arrived, so telehealth fixed them and no comparison is needed.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The conclusion assumes the patient mix and appointment types were unchanged; surface and test it by comparing no-shows for in-person versus telehealth among the same patients, by checking whether a new reminder system launched alongside telehealth, and by seeing whether telehealth's edge holds for the appointment types it actually replaced.",
    explanation:
      "Top credit surfaces the hidden 'same patients and visit types' assumption plus a within-patient comparison that could refute it; the no-comparison option swallows the conclusion whole.",
  },
  {
    itemType: "mc",
    prompt:
      "A cafe cuts its sandwich price by a dollar, sells more sandwiches, and the owner concludes the price cut raised profit. What best improves the reasoning?",
    mcOptions: [
      {
        text: "There are likely hidden assumptions behind that profit claim.",
        credit: 0.3,
      },
      {
        text: "It assumes ingredient costs held steady; he could check supplier invoices for the period.",
        credit: 0.6,
      },
      {
        text: "More sandwiches sold after the price cut, so profit rose and the matter is closed.",
        credit: 0,
      },
      {
        text: "The conclusion assumes the extra volume outweighed the thinner per-sandwich margin and that no high-margin items were displaced; surface and test it by computing margin per sandwich times volume rather than counting units, by checking whether the cheaper sandwiches cannibalized pricier menu items, and by comparing total weekly margin before and after.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The conclusion assumes the extra volume outweighed the thinner per-sandwich margin and that no high-margin items were displaced; surface and test it by computing margin per sandwich times volume rather than counting units, by checking whether the cheaper sandwiches cannibalized pricier menu items, and by comparing total weekly margin before and after.",
    explanation:
      "Full credit exposes the load-bearing 'volume gain beats the margin loss' assumption that 'more sandwiches sold' silently smuggles in; the closed-matter option mistakes unit count for profit.",
  },
  {
    itemType: "mc",
    prompt:
      "A man moves his orchid to a sunnier window and it finally blooms, so he concludes it needed more light. Which response is strongest?",
    mcOptions: [
      {
        text: "The conclusion assumes his watering, temperature, and feeding stayed the same when he moved it; test it by moving it back to the old spot to see whether blooming stops, by keeping a second orchid in the dim spot with identical care as a control, and by checking whether he also changed its watering when he relocated it.",
        credit: 1.0,
      },
      {
        text: "Some background assumptions probably sit under that conclusion.",
        credit: 0.3,
      },
      {
        text: "It assumes he did not change the watering at the same time; he could review his watering schedule.",
        credit: 0.6,
      },
      {
        text: "It bloomed after moving to the light, so light was the cause and nothing else needs checking.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The conclusion assumes his watering, temperature, and feeding stayed the same when he moved it; test it by moving it back to the old spot to see whether blooming stops, by keeping a second orchid in the dim spot with identical care as a control, and by checking whether he also changed its watering when he relocated it.",
    explanation:
      "Top credit names the hidden 'only light changed when I moved it' assumption and a move-it-back test that could refute it; the 'nothing else needs checking' option ignores that relocation often changes watering too.",
  },
  {
    itemType: "mc",
    prompt:
      "A team makes its 'Buy' button green for half of users, sees that half click more, and concludes green buttons get more clicks. What best sharpens the claim?",
    mcOptions: [
      {
        text: "The green group clicked more, so green wins and there is nothing left to verify.",
        credit: 0,
      },
      {
        text: "It assumes the two groups were otherwise alike; they could check that the split was random.",
        credit: 0.6,
      },
      {
        text: "There may be unstated assumptions behind the result.",
        credit: 0.3,
      },
      {
        text: "The conclusion assumes the two groups were balanced in device, traffic source, and time of visit; surface and test it by checking that randomization balanced those factors, by confirming the green group was not skewed toward desktop or a sale period, and by rerunning the test on a fresh cohort to see whether the lift repeats.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The conclusion assumes the two groups were balanced in device, traffic source, and time of visit; surface and test it by checking that randomization balanced those factors, by confirming the green group was not skewed toward desktop or a sale period, and by rerunning the test on a fresh cohort to see whether the lift repeats.",
    explanation:
      "Full credit surfaces the hidden 'the two arms were comparable' assumption every A/B test rides on and a replication that could refute it; 'green wins' trusts the split without auditing it.",
  },
  {
    itemType: "mc",
    prompt:
      "A bistro hires a new chef and its online review scores climb, so the owner credits the chef's cooking. Which response is strongest?",
    mcOptions: [
      {
        text: "It assumes the menu and prices were unchanged; she could compare the menus from before and after.",
        credit: 0.6,
      },
      {
        text: "Reviews rose after the chef arrived, so the chef caused it and no further look is needed.",
        credit: 0,
      },
      {
        text: "The conclusion assumes the menu, prices, service staff, and season stayed the same; surface and test it by reading whether new reviews praise the food specifically rather than ambiance or service, by checking whether a renovation or new manager arrived at the same time, and by seeing whether scores dip on the chef's days off.",
        credit: 1.0,
      },
      {
        text: "Some hidden assumptions probably underlie the review gain.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The conclusion assumes the menu, prices, service staff, and season stayed the same; surface and test it by reading whether new reviews praise the food specifically rather than ambiance or service, by checking whether a renovation or new manager arrived at the same time, and by seeing whether scores dip on the chef's days off.",
    explanation:
      "Top credit names the 'nothing but the chef changed' assumption and a days-off test that could refute it; the no-further-look option accepts the conclusion without examining its scaffolding.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A product team adds a welcome email to onboarding and sees week-one activation rise from 40% to 55%, concluding the email drives activation. Which response is strongest?",
    mcOptions: [
      {
        text: "The conclusion assumes the incoming user cohort and the product itself were unchanged when the email launched; surface and test it by holding the email back from a random half of new users and comparing activation, by checking whether an onboarding UI change shipped the same week, and by seeing whether activation rises only among users who actually open the email.",
        credit: 1.0,
      },
      {
        text: "There are probably some unstated assumptions behind the activation gain.",
        credit: 0.3,
      },
      {
        text: "Activation rose right after the email launched, so the email caused it and a test would be redundant.",
        credit: 0,
      },
      {
        text: "It assumes nothing else in onboarding changed; the team could review that week's release log.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the email caused activation' lead from the rival 'this week's users were simply higher-intent,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: withhold the email from a random half of incoming users for one week and compare their activation to the half that got it — if the email matters, the emailed half should activate more. My lead is refuted if both halves activate at the same rate, showing the cohort, not the email, moved the number.",
      yieldAnchors: [
        "Activation rose from 40% to 55%",
        "The rise came the week the email launched",
        "The email was added to onboarding",
      ],
      riskAnchors: [
        "A random no-email half activates less",
        "No other onboarding change shipped that week",
        "Activation rises only among email openers",
      ],
      defeatedBy: [
        "This week's users were simply higher-intent",
        "The email had no effect at all",
      ],
    },
    correctAnswer:
      "The conclusion assumes the incoming user cohort and the product itself were unchanged when the email launched; surface and test it by holding the email back from a random half of new users and comparing activation, by checking whether an onboarding UI change shipped the same week, and by seeing whether activation rises only among users who actually open the email.",
    explanation:
      "Full credit surfaces the hidden 'same users, same product' assumption and a randomized holdout that names its own refutation; the 'a test would be redundant' option blindly accepts a before/after.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A brewery swaps in a new hop variety and its next batch earns higher flavor ratings from its tasting panel, so the brewer concludes the new hops improved the beer. Which response is strongest?",
    mcOptions: [
      {
        text: "Ratings rose with the new hops, so the hops improved the beer and there is nothing more to settle.",
        credit: 0,
      },
      {
        text: "The conclusion assumes the malt, yeast, fermentation temperature, and the tasting panel were the same across batches; surface and test it by brewing two otherwise-identical batches differing only in hops, by having a blind panel score them, and by checking whether the same panelists tasted both rounds under matched conditions.",
        credit: 1.0,
      },
      {
        text: "It assumes the recipe was otherwise unchanged; the brewer could compare the two batch sheets.",
        credit: 0.6,
      },
      {
        text: "Some hidden assumptions likely sit behind the rating gain.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the new hops improved it' lead from the rival 'this panel was just in a more generous mood,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have the same panel blind-taste the old-hop and new-hop beers side by side in one sitting — if the hops matter, they should rate the new one higher without knowing which is which. My lead is refuted if the blind scores come out equal, pointing to panel mood rather than the hops.",
      yieldAnchors: [
        "The new-hop batch earned higher flavor ratings",
        "Only the hop variety was deliberately changed",
        "The same tasting panel scored it",
      ],
      riskAnchors: [
        "A blind side-by-side favors the new-hop beer",
        "Two batches differing only in hops score apart",
        "The same panelists rate both rounds alike otherwise",
      ],
      defeatedBy: [
        "The panel was simply in a more generous mood",
        "The hop variety made no difference",
      ],
    },
    correctAnswer:
      "The conclusion assumes the malt, yeast, fermentation temperature, and the tasting panel were the same across batches; surface and test it by brewing two otherwise-identical batches differing only in hops, by having a blind panel score them, and by checking whether the same panelists tasted both rounds under matched conditions.",
    explanation:
      "Full credit names the 'everything but the hops held constant' assumption and a blind side-by-side that could refute it; 'nothing more to settle' ignores the panel-mood scaffolding.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A courier company installs route-planning software and average delivery time drops by 15 minutes, so the operations lead credits the software. Which response is strongest?",
    mcOptions: [
      {
        text: "It assumes the delivery volume was the same; he could compare daily package counts.",
        credit: 0.6,
      },
      {
        text: "There are probably unstated assumptions behind the time drop.",
        credit: 0.3,
      },
      {
        text: "The conclusion assumes package volume, traffic conditions, and the driver roster were unchanged when the software launched; surface and test it by comparing delivery time per stop rather than per route, by checking whether the change coincided with a quieter season or new vans, and by running some routes on the old manual planning as a control.",
        credit: 1.0,
      },
      {
        text: "Delivery times fell after the software went live, so the software did it and no control is warranted.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the software cut delivery time' lead from the rival 'traffic was just lighter this month,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: run a sample of routes with the old manual planning during the same weeks and compare their times to software-planned routes — if the software helps, its routes should be faster under the same traffic. My lead is refuted if manual and software routes finish in the same time, pointing to lighter traffic.",
      yieldAnchors: [
        "Average delivery time dropped 15 minutes",
        "The drop came after installing the software",
        "Routes are now planned by software",
      ],
      riskAnchors: [
        "Software routes beat manual routes in the same weeks",
        "Volume and season held steady through the change",
        "Time-per-stop improved, not just time-per-route",
      ],
      defeatedBy: [
        "Traffic was simply lighter this month",
        "The software changed nothing about the routes",
      ],
    },
    correctAnswer:
      "The conclusion assumes package volume, traffic conditions, and the driver roster were unchanged when the software launched; surface and test it by comparing delivery time per stop rather than per route, by checking whether the change coincided with a quieter season or new vans, and by running some routes on the old manual planning as a control.",
    explanation:
      "Full credit surfaces the 'same volume and traffic' assumption and a manual-planning control that could refute it; 'no control is warranted' accepts the drop without auditing it.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A gym hires a new head trainer and member retention rises over the next quarter, so the manager credits the trainer. Which response is strongest?",
    mcOptions: [
      {
        text: "The conclusion assumes membership pricing, class schedule, and the local market were unchanged when the trainer started; surface and test it by checking whether retention rose specifically among members who attend the new trainer's classes, by seeing whether a price freeze or new equipment arrived at the same time, and by comparing retention at a sister branch with the old staff.",
        credit: 1.0,
      },
      {
        text: "It assumes pricing did not change in the quarter; she could check whether any membership deal ran.",
        credit: 0.6,
      },
      {
        text: "Some background assumptions probably underlie the retention gain.",
        credit: 0.3,
      },
      {
        text: "Retention climbed after the trainer arrived, so the trainer caused it and there is nothing to test.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the trainer lifted retention' lead from the rival 'a quarter-long membership promo did it,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare retention between members who actually attend the new trainer's sessions and those who never do — if the trainer is the cause, attendees should retain better. My lead is refuted if both groups retain equally, which would point to a gym-wide factor like a promo rather than the trainer.",
      yieldAnchors: [
        "Retention rose over the quarter",
        "The rise followed the new trainer's hire",
        "The trainer leads classes at the gym",
      ],
      riskAnchors: [
        "The trainer's attendees retain better than non-attendees",
        "No promo or equipment change coincided",
        "A sister branch with old staff did not improve",
      ],
      defeatedBy: [
        "A quarter-long membership promo caused the lift",
        "The trainer had no effect on retention",
      ],
    },
    correctAnswer:
      "The conclusion assumes membership pricing, class schedule, and the local market were unchanged when the trainer started; surface and test it by checking whether retention rose specifically among members who attend the new trainer's classes, by seeing whether a price freeze or new equipment arrived at the same time, and by comparing retention at a sister branch with the old staff.",
    explanation:
      "Full credit exposes the 'nothing but the trainer changed' assumption and an attender-versus-non-attender split that could refute it; 'nothing to test' is the blind-acceptance failure.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A publisher gives a slow-selling novel a new cover and its monthly sales triple, so the marketer concludes the cover sells the book. Which response is strongest?",
    mcOptions: [
      {
        text: "There may be unstated assumptions behind the sales jump.",
        credit: 0.3,
      },
      {
        text: "The conclusion assumes the price, promotion, and reviews around the book held steady when the cover changed; surface and test it by checking whether a price drop or ad campaign launched alongside the new cover, by comparing sales in stores that kept the old cover, and by seeing whether the bump fades after the relaunch buzz.",
        credit: 1.0,
      },
      {
        text: "Sales tripled after the cover changed, so the cover did it and further checking is pointless.",
        credit: 0,
      },
      {
        text: "It assumes the price stayed the same; the marketer could pull the price history.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the new cover sold the book' lead from the rival 'a simultaneous price cut drove sales,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare sales between retailers that switched to the new cover and ones still showing the old cover at the same price — if the cover matters, the new-cover stores should sell more. My lead is refuted if both sell alike, pointing to the price cut or promotion instead.",
      yieldAnchors: [
        "Monthly sales tripled",
        "The jump came when the cover changed",
        "The book had been slow-selling",
      ],
      riskAnchors: [
        "New-cover stores outsell old-cover stores at equal price",
        "No price drop or ad push coincided",
        "The bump persists past the relaunch buzz",
      ],
      defeatedBy: [
        "A simultaneous price cut drove the sales",
        "The cover made no difference",
      ],
    },
    correctAnswer:
      "The conclusion assumes the price, promotion, and reviews around the book held steady when the cover changed; surface and test it by checking whether a price drop or ad campaign launched alongside the new cover, by comparing sales in stores that kept the old cover, and by seeing whether the bump fades after the relaunch buzz.",
    explanation:
      "Full credit names the 'price and promotion unchanged' assumption and an old-cover store comparison that could refute it; 'further checking is pointless' swallows the conclusion whole.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A lab switches to a new reagent supplier and its assay yields rise, so the technician concludes the new reagent is purer. Which response is strongest?",
    mcOptions: [
      {
        text: "Yields rose with the new reagent, so it is purer and there is nothing more to verify.",
        credit: 0,
      },
      {
        text: "It assumes the samples were comparable; she could check the sample batch records.",
        credit: 0.6,
      },
      {
        text: "The conclusion assumes the samples, instrument calibration, and ambient conditions were unchanged when the reagent changed; surface and test it by running old and new reagents on splits of the same sample, by checking whether the instrument was recalibrated around the switch, and by repeating across several sample batches to rule out a lucky lot.",
        credit: 1.0,
      },
      {
        text: "Some hidden assumptions probably underlie the yield rise.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the new reagent is purer' lead from the rival 'the instrument was recalibrated at the same time,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: split one sample and run it with both the old and new reagent on the same calibrated instrument — if the reagent matters, the new-reagent split should yield more. My lead is refuted if both splits yield the same, pointing to the recalibration rather than reagent purity.",
      yieldAnchors: [
        "Assay yields rose after the switch",
        "Only the reagent supplier changed on paper",
        "The lab runs the same assay",
      ],
      riskAnchors: [
        "A split-sample run favors the new reagent",
        "No recalibration coincided with the switch",
        "The gain repeats across several sample batches",
      ],
      defeatedBy: [
        "The instrument was recalibrated at the same time",
        "The reagent change made no difference",
      ],
    },
    correctAnswer:
      "The conclusion assumes the samples, instrument calibration, and ambient conditions were unchanged when the reagent changed; surface and test it by running old and new reagents on splits of the same sample, by checking whether the instrument was recalibrated around the switch, and by repeating across several sample batches to rule out a lucky lot.",
    explanation:
      "Full credit surfaces the 'same samples and calibration' assumption and a split-sample test that could refute it; 'nothing more to verify' ignores the recalibration scaffolding.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A call center rolls out a new support script and customer-satisfaction scores rise, so the supervisor credits the script. Which response is strongest?",
    mcOptions: [
      {
        text: "It assumes call volume stayed the same; he could compare the weekly call counts.",
        credit: 0.6,
      },
      {
        text: "There are probably background assumptions behind the satisfaction gain.",
        credit: 0.3,
      },
      {
        text: "Scores rose after the script launched, so the script raised them and no test is needed.",
        credit: 0,
      },
      {
        text: "The conclusion assumes call volume, staffing, and the mix of issues were unchanged when the script launched; surface and test it by giving the new script to half the agents and comparing scores, by checking whether wait times also fell that week, and by seeing whether satisfaction rose only on the call types the script actually covers.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the script raised satisfaction' lead from the rival 'shorter wait times that week did it,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have half the agents use the new script and half the old one in the same week and compare their satisfaction scores — if the script matters, scripted agents should score higher under the same wait times. My lead is refuted if both groups score the same, pointing to wait times rather than the script.",
      yieldAnchors: [
        "Satisfaction scores rose",
        "The rise followed the new script",
        "Agents now read the new script",
      ],
      riskAnchors: [
        "Scripted agents outscore unscripted ones the same week",
        "Wait times did not also fall",
        "Gains appear only on script-covered call types",
      ],
      defeatedBy: [
        "Shorter wait times that week raised scores",
        "The script changed nothing",
      ],
    },
    correctAnswer:
      "The conclusion assumes call volume, staffing, and the mix of issues were unchanged when the script launched; surface and test it by giving the new script to half the agents and comparing scores, by checking whether wait times also fell that week, and by seeing whether satisfaction rose only on the call types the script actually covers.",
    explanation:
      "Full credit names the 'volume and wait times held steady' assumption and a split-agent test that could refute it; 'no test is needed' is the post-hoc dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An orchard hangs reflective tape and bird damage to its cherries drops by half this season, so the grower credits the tape. Which response is strongest?",
    mcOptions: [
      {
        text: "The conclusion assumes the bird population, crop size, and weather matched last season; surface and test it by leaving some untaped rows as a control this year, by checking whether the regional bird count was simply lower, and by seeing whether damage rises again in rows where the tape later falls down.",
        credit: 1.0,
      },
      {
        text: "Damage dropped after the tape went up, so the tape worked and there is nothing to control for.",
        credit: 0,
      },
      {
        text: "Some unstated assumptions probably sit behind the damage drop.",
        credit: 0.3,
      },
      {
        text: "It assumes the bird numbers were the same as last year; the grower could check local birding counts.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the tape deterred birds' lead from the rival 'there were simply fewer birds this year,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: leave a block of rows untaped this season and compare their bird damage to the taped rows under the same bird population — if the tape works, taped rows should suffer less. My lead is refuted if taped and untaped rows take equal damage, pointing to a smaller bird population.",
      yieldAnchors: [
        "Bird damage dropped by half",
        "The drop came the season the tape went up",
        "Reflective tape now hangs in the orchard",
      ],
      riskAnchors: [
        "Untaped control rows take more damage",
        "The regional bird count was not simply lower",
        "Damage returns where tape falls down",
      ],
      defeatedBy: [
        "There were simply fewer birds this year",
        "The tape deterred nothing",
      ],
    },
    correctAnswer:
      "The conclusion assumes the bird population, crop size, and weather matched last season; surface and test it by leaving some untaped rows as a control this year, by checking whether the regional bird count was simply lower, and by seeing whether damage rises again in rows where the tape later falls down.",
    explanation:
      "Full credit surfaces the 'same number of birds as last year' assumption and an untaped control that could refute it; 'nothing to control for' trusts the raw year-over-year drop.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A SaaS company redesigns its pricing page and free-trial signups climb 30%, so the growth team credits the new page. Which response is strongest?",
    mcOptions: [
      {
        text: "There may be hidden assumptions behind the signup rise.",
        credit: 0.3,
      },
      {
        text: "It assumes ad spend held steady; the team could check the marketing budget for the period.",
        credit: 0.6,
      },
      {
        text: "The conclusion assumes traffic volume, ad spend, and the visitor mix were unchanged when the page changed; surface and test it by A/B testing the new page against the old on split traffic, by checking whether a campaign or press mention drove extra visitors that week, and by comparing signup rate per visitor rather than raw signups.",
        credit: 1.0,
      },
      {
        text: "Signups rose after the redesign, so the page caused it and a split test would be a waste.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the new page lifted signups' lead from the rival 'a press mention sent extra traffic that week,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: split incoming traffic between the old and new page in the same week and compare signup rate per visitor — if the page matters, the new-page visitors should convert better. My lead is refuted if both pages convert at the same per-visitor rate, pointing to the traffic spike rather than the design.",
      yieldAnchors: [
        "Free-trial signups climbed 30%",
        "The rise came with the redesign",
        "The pricing page was redesigned",
      ],
      riskAnchors: [
        "The new page beats the old in a split test",
        "No press or campaign drove extra traffic",
        "Signup rate per visitor rose, not just raw signups",
      ],
      defeatedBy: [
        "A press mention sent extra traffic that week",
        "The redesign changed nothing",
      ],
    },
    correctAnswer:
      "The conclusion assumes traffic volume, ad spend, and the visitor mix were unchanged when the page changed; surface and test it by A/B testing the new page against the old on split traffic, by checking whether a campaign or press mention drove extra visitors that week, and by comparing signup rate per visitor rather than raw signups.",
    explanation:
      "Full credit exposes the 'same traffic, same visitors' assumption that raw-signup counts hide and a split test that could refute it; 'a split test would be a waste' is the blind-acceptance failure.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A school district gives every fifth-grader a tablet loaded with a math app, and this year's fifth-grade math scores rise 8 points over last year's class. The superintendent announces the tablet program raised achievement. In one paragraph, identify the load-bearing assumption this conclusion silently depends on and describe how you would test whether it holds.",
    writtenRubric: {
      modelAnswer:
        "The conclusion's load-bearing assumption is that this year's fifth-graders were comparable to last year's and the test measured the same thing at the same difficulty — that nothing but the tablets distinguished the two classes. That assumption is checkable, which makes the claim worth defending rather than abandoning: I would compare the two cohorts' fourth-grade baseline scores to see whether this year's group was already stronger, check whether the state rescaled or changed the exam, and look at whether a neighboring district without tablets saw a similar bump. The strongest test is to withhold tablets from a randomly chosen set of classrooms this year and compare their gains to the tablet rooms, so cohort and test differences cancel out. If the no-tablet rooms gain just as much, the assumption fails and the tablets get no credit; if the tablet rooms clearly outgain them, the assumption holds and the program earns the claim.",
      yieldAnchors: [
        "Math scores rose 8 points",
        "Every fifth-grader received a tablet",
        "The comparison is this year's class versus last year's",
      ],
      riskAnchors: [
        "This year's cohort had a higher fourth-grade baseline",
        "The state rescaled the exam",
        "A neighboring district without tablets gained similarly",
      ],
      defeatedBy: [
        "The tablets obviously caused the gain with no need to check the cohort",
        "Nothing can be concluded about the program at all",
        "The tablets surely transformed every subject too",
      ],
    },
    correctAnswer:
      "The conclusion's load-bearing assumption is that this year's fifth-graders were comparable to last year's and the test measured the same thing at the same difficulty — that nothing but the tablets distinguished the two classes. That assumption is checkable, which makes the claim worth defending rather than abandoning: I would compare the two cohorts' fourth-grade baseline scores to see whether this year's group was already stronger, check whether the state rescaled or changed the exam, and look at whether a neighboring district without tablets saw a similar bump. The strongest test is to withhold tablets from a randomly chosen set of classrooms this year and compare their gains to the tablet rooms, so cohort and test differences cancel out. If the no-tablet rooms gain just as much, the assumption fails and the tablets get no credit; if the tablet rooms clearly outgain them, the assumption holds and the program earns the claim.",
    explanation:
      "Under CCR's inverted standard, both the credulous 'the tablets obviously did it' and the limp 'nothing can be concluded' lose; top credit goes to naming the cohort-and-test comparability assumption and proposing the randomized check that would confirm or kill it.",
  },
  {
    itemType: "written",
    prompt:
      "A trucking company fits its fleet with a new low-rolling-resistance tire and its fuel cost per mile falls 6% over the next quarter, so the fleet manager credits the tires. In one paragraph, identify the load-bearing assumption behind this conclusion and describe how you would test whether it holds.",
    writtenRubric: {
      modelAnswer:
        "The load-bearing assumption is that everything else affecting fuel use — load weights, routes, driver behavior, fuel prices, and the season — stayed constant between the two quarters, so the tires are the only plausible difference. Because that assumption is concrete, the claim is testable rather than hopeless: I would compare loaded miles and average cargo weight across the quarters, check whether fuel prices or a milder season lowered consumption, and see whether a new idle-reduction policy or driver-training push coincided with the tire change. The cleanest test is to run half the fleet on the old tires and half on the new over the same routes and weeks, comparing fuel per ton-mile. If both halves burn the same fuel, the assumption is false and the tires get no credit; if the new-tire trucks consistently save, the assumption holds and the tires earn the claim.",
      yieldAnchors: [
        "Fuel cost per mile fell 6%",
        "The whole fleet got new tires",
        "The comparison spans two quarters",
      ],
      riskAnchors: [
        "Cargo weights and routes were heavier last quarter",
        "Fuel prices or a milder season cut consumption",
        "A driver-training push coincided with the change",
      ],
      defeatedBy: [
        "The tires clearly caused the savings, no comparison needed",
        "Fuel use is too complex to attribute to anything",
        "The tires must improve braking and tread life too",
      ],
    },
    correctAnswer:
      "The load-bearing assumption is that everything else affecting fuel use — load weights, routes, driver behavior, fuel prices, and the season — stayed constant between the two quarters, so the tires are the only plausible difference. Because that assumption is concrete, the claim is testable rather than hopeless: I would compare loaded miles and average cargo weight across the quarters, check whether fuel prices or a milder season lowered consumption, and see whether a new idle-reduction policy or driver-training push coincided with the tire change. The cleanest test is to run half the fleet on the old tires and half on the new over the same routes and weeks, comparing fuel per ton-mile. If both halves burn the same fuel, the assumption is false and the tires get no credit; if the new-tire trucks consistently save, the assumption holds and the tires earn the claim.",
    explanation:
      "The credulous 'no comparison needed' and the defeatist 'too complex to attribute' both earn near-zero; credit rewards isolating the 'all else held constant across quarters' assumption and the split-fleet test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A hospital ward launches a hand-washing campaign and its rate of patient infections falls by a third over six months, so the infection-control team credits the campaign. In one paragraph, identify the load-bearing assumption the conclusion depends on and describe how you would test whether it holds.",
    writtenRubric: {
      modelAnswer:
        "The load-bearing assumption is that the ward's patient population and everything else about infection risk — patient acuity, antibiotic protocols, cleaning routines, and the season — were unchanged, so improved hand-washing is the only thing that could have lowered infections. That assumption is checkable, which keeps the claim defensible: I would compare patient case-mix and average length of stay across the two periods, check whether a new cleaning contractor or antibiotic protocol started alongside the campaign, and see whether infections fell only for the pathogens hand-washing actually interrupts. The strongest test is to compare this ward against a similar ward that ran no campaign over the same months. If the control ward's infections fell just as much, the assumption is false and the campaign gets no credit; if only the campaign ward improved and measured hand-washing compliance tracks the drop, the assumption holds and the campaign earns the claim.",
      yieldAnchors: [
        "Infections fell by a third",
        "A hand-washing campaign was launched",
        "The window is six months",
      ],
      riskAnchors: [
        "Patient acuity or case-mix shifted between periods",
        "A new cleaning contractor started with the campaign",
        "Infections fell only for hand-spread pathogens",
      ],
      defeatedBy: [
        "The campaign obviously caused the drop, no control needed",
        "Infection rates are too multi-causal to say anything",
        "The campaign surely cut readmissions and costs too",
      ],
    },
    correctAnswer:
      "The load-bearing assumption is that the ward's patient population and everything else about infection risk — patient acuity, antibiotic protocols, cleaning routines, and the season — were unchanged, so improved hand-washing is the only thing that could have lowered infections. That assumption is checkable, which keeps the claim defensible: I would compare patient case-mix and average length of stay across the two periods, check whether a new cleaning contractor or antibiotic protocol started alongside the campaign, and see whether infections fell only for the pathogens hand-washing actually interrupts. The strongest test is to compare this ward against a similar ward that ran no campaign over the same months. If the control ward's infections fell just as much, the assumption is false and the campaign gets no credit; if only the campaign ward improved and measured hand-washing compliance tracks the drop, the assumption holds and the campaign earns the claim.",
    explanation:
      "Both the credulous 'no control needed' and the defeatist 'too multi-causal' lose under CCR; top credit goes to surfacing the 'same patients and same infection risk' assumption and the parallel-ward control that would confirm or kill it.",
  },
  {
    itemType: "written",
    prompt:
      "A coffee roaster changes its house-blend roast profile to a lighter roast and its bagged-coffee sales rise 18% the following month, so the owner concludes customers prefer the lighter roast. In one paragraph, identify the load-bearing assumption behind this conclusion and describe how you would test whether it holds.",
    writtenRubric: {
      modelAnswer:
        "The load-bearing assumption is that nothing else about the blend's appeal or availability changed — same price, packaging, shelf placement, promotions, and customer traffic — so taste preference is the only explanation for the sales rise. Because that assumption is concrete, the claim can be defended rather than dropped: I would check whether a price change, new label, or seasonal traffic bump coincided with the roast change, compare repeat-purchase rates of the light roast against the old dark roast, and run a blind in-store tasting to see whether customers actually pick the lighter cup. The cleanest test is to offer both roasts side by side at the same price and placement for a month and compare which sells. If they sell equally, the assumption fails and preference gets no credit; if the lighter roast clearly outsells and wins blind tastings, the assumption holds and the preference claim earns its keep.",
      yieldAnchors: [
        "Bagged-coffee sales rose 18%",
        "The roast profile was changed to lighter",
        "The rise came the following month",
      ],
      riskAnchors: [
        "A price, label, or placement change coincided",
        "The light roast wins a blind tasting",
        "The light roast outsells the dark at equal price and placement",
      ],
      defeatedBy: [
        "Customers obviously prefer the lighter roast, no test needed",
        "Taste is too subjective to conclude anything",
        "The lighter roast must boost cafe drink sales too",
      ],
    },
    correctAnswer:
      "The load-bearing assumption is that nothing else about the blend's appeal or availability changed — same price, packaging, shelf placement, promotions, and customer traffic — so taste preference is the only explanation for the sales rise. Because that assumption is concrete, the claim can be defended rather than dropped: I would check whether a price change, new label, or seasonal traffic bump coincided with the roast change, compare repeat-purchase rates of the light roast against the old dark roast, and run a blind in-store tasting to see whether customers actually pick the lighter cup. The cleanest test is to offer both roasts side by side at the same price and placement for a month and compare which sells. If they sell equally, the assumption fails and preference gets no credit; if the lighter roast clearly outsells and wins blind tastings, the assumption holds and the preference claim earns its keep.",
    explanation:
      "The credulous 'no test needed' and the defeatist 'taste is too subjective' both earn near-zero; credit goes to naming the 'only the roast changed' assumption and the side-by-side and blind-tasting tests that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A youth soccer club introduces a new pre-game nutrition plan and notices its players cover more distance in the second half of matches across the next month, so the coach credits the diet. In one paragraph, identify the load-bearing assumption this conclusion silently relies on and describe how you would test whether it holds.",
    writtenRubric: {
      modelAnswer:
        "The load-bearing assumption is that the players' training load, sleep, opponents, weather, and fitness trend were otherwise unchanged, so the nutrition plan is the only new factor that could explain the extra second-half distance. That assumption is testable, which keeps the claim worth pursuing: I would check whether training intensity or pre-season conditioning ramped up at the same time, compare the strength of the month's opponents and the match-day temperatures, and see whether GPS distance rose only for players who actually followed the plan. The strongest test is to put half the squad on the new plan and half on their usual routine for a month and compare their second-half distances. If both groups improve equally, the assumption is false and the diet gets no credit; if only the plan-followers gain, the assumption holds and the nutrition plan earns the claim.",
      yieldAnchors: [
        "Players cover more second-half distance",
        "A new pre-game nutrition plan was introduced",
        "The change spans the next month",
      ],
      riskAnchors: [
        "Training load or conditioning ramped up at the same time",
        "Opponents were weaker or weather cooler that month",
        "Only plan-followers gained distance",
      ],
      defeatedBy: [
        "The diet obviously boosted stamina, no comparison needed",
        "Match performance is too variable to attribute to anything",
        "The diet must also be improving their skills and scoring",
      ],
    },
    correctAnswer:
      "The load-bearing assumption is that the players' training load, sleep, opponents, weather, and fitness trend were otherwise unchanged, so the nutrition plan is the only new factor that could explain the extra second-half distance. That assumption is testable, which keeps the claim worth pursuing: I would check whether training intensity or pre-season conditioning ramped up at the same time, compare the strength of the month's opponents and the match-day temperatures, and see whether GPS distance rose only for players who actually followed the plan. The strongest test is to put half the squad on the new plan and half on their usual routine for a month and compare their second-half distances. If both groups improve equally, the assumption is false and the diet gets no credit; if only the plan-followers gain, the assumption holds and the nutrition plan earns the claim.",
    explanation:
      "Under CCR, the credulous 'no comparison needed' and the defeatist 'too variable to attribute' both score near-zero; top credit goes to isolating the 'nothing but the diet changed' assumption and the split-squad test that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "auxiliary-assumptions",
  title: "Auxiliary Assumptions",
  weekNumber: 2,
  blurb:
    "Every conclusion rests on a quiet scaffolding of unstated assumptions. The strong reasoner surfaces the load-bearing one a claim silently depends on and tests whether it actually holds.",
  lectureTitle:
    "2.2 Auxiliary Assumptions: seeing the hidden scaffolding a model smuggles in",
  body: `# Auxiliary Assumptions

Every conclusion you draw rests on more than the evidence in front of you. It rests on a quiet scaffolding of unstated *auxiliary assumptions* — the "all else being equal" clauses you never said out loud. "Sales rose after we changed the layout, so the layout worked" only follows if traffic, prices, season, and product mix stayed the same. Reflexive caution stops at the conclusion and either swallows it whole or throws up its hands. The constructive move is to drag the hidden scaffolding into the light, find the beam the claim cannot stand without, and go test it.

## Every model smuggles in scaffolding

No inference travels alone. A before/after comparison assumes nothing else changed between the two measurements. A lab result assumes the instrument was calibrated the same way both times. An A/B test assumes the two groups were otherwise alike. These auxiliary assumptions are not flaws — they are unavoidable. The flaw is leaving them unspoken, because an unspoken assumption can never be checked, and an unchecked assumption is exactly where a confident conclusion quietly goes wrong.

## Find the load-bearing assumption

Not every assumption matters equally. Some are decorative — drop them and the conclusion barely shifts. One or two are *load-bearing*: if they fail, the whole claim collapses. The skill is to ask, of each hidden assumption, "If this were false, would the conclusion survive?" The one that answers "no" is where to aim. For the store layout, the load-bearing assumption is "foot traffic held constant"; if a new office reopened next door, the layout gets no credit. Spend your attention there, not on the trivia.

## Surface it, then test it

Naming the assumption is half the work; the other half is converting it into a cheap test. "This assumes traffic was steady" becomes "compare per-visitor spend before and after, and watch a sister store that wasn't redesigned." A good test makes the assumption *fail loudly* if it is false — a control group, a side-by-side, a within-subject comparison, a check of the release log. The richest answer always pairs the surfaced assumption with the concrete observation that would expose it.

## Why blind acceptance loses

The zero-credit move here is the credulous shrug: "it happened right after, so it caused it — nothing more to check." That swallows the conclusion together with every hidden assumption it rides on, and it is just the post-hoc fallacy in confident clothing. (Its mirror image, the defeatist "performance is too multi-causal to say anything," is equally empty — it never bothers to name *which* assumption is the weak one.) Neither one does the actual work: locating the load-bearing beam and putting weight on it.

## Overreach still loses

Surfacing assumptions is not the same as inventing doubts. You do not earn credit by listing twenty far-fetched what-ifs, and you do not get to declare the conclusion dead just because *some* assumption exists. The point is to find the *one* assumption the claim genuinely depends on and check it — and if the check passes, the conclusion earns its keep. A reasoner who never lets any assumption survive scrutiny is as useless as one who never questions any.

## In the real world

A team ships a code optimization and load times drop from 1.8s to 1.1s. The credulous version: "my code made it faster, done." The constructive version: surface the load-bearing assumption — "this only follows if traffic, dataset size, and hardware were the same across the two measurements." Then test it: benchmark old and new code on identical inputs, check whether a CDN change shipped the same day, and replay a fixed request trace against both versions. If the optimization still wins under matched conditions, the claim is now bulletproof. That is what auditing the hidden scaffolding buys you: a conclusion that has survived the one test that could have toppled it.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
