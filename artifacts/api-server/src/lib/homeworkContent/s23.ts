import type { SectionContent, HomeworkItem } from "./types";

const mcq: HomeworkItem[] = [
  {
    itemType: "mc",
    prompt:
      "A bistro's two new dinner specials both sell slowly. The owner can't tell whether the menu descriptions are flat or the $29 price is too high — both fit the weak sales. Service starts in three hours. Which move is strongest?",
    mcOptions: [
      {
        text: "Until we run a full month of pricing data we genuinely can't say which it is, so leave both specials exactly as they are.",
        credit: 0,
      },
      {
        text: "Tonight, reprint one special with a vivid description at the same price and drop the other to $24 with its old wording — whichever moves splits price from copy by morning; meanwhile push the dish with the better margin so the night isn't wasted.",
        credit: 1.0,
      },
      {
        text: "We can't separate the two yet, so keep watching sales and revisit the menu later.",
        credit: 0.3,
      },
      {
        text: "Rewrite both descriptions tonight and see whether sales pick up over the week.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Tonight, reprint one special with a vivid description at the same price and drop the other to $24 with its old wording — whichever moves splits price from copy by morning; meanwhile push the dish with the better margin so the night isn't wasted.",
    explanation:
      "The evidence truly can't yet decide between price and copy, so the winning move names a cheap split test that decides AND commits to a provisional bet meanwhile; freezing 'until a full month' is the zero-credit dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "An app started crashing this week. Two live suspects fit equally: a library the team upgraded Monday, or a slow memory leak that finally crossed a threshold. A release is due Friday. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Roll back the library on a canary build while leaving the leak instrumentation on the rest; if the canary stops crashing it's the upgrade, if both keep crashing it's the leak — and ship the rollback now as the safer provisional bet.",
        credit: 1.0,
      },
      {
        text: "Both are plausible, so wait for more crash reports before touching anything.",
        credit: 0,
      },
      {
        text: "It could be either; keep an eye on the crash dashboard for now.",
        credit: 0.3,
      },
      {
        text: "Roll the library back and hope that fixes it before Friday.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Roll back the library on a canary build while leaving the leak instrumentation on the rest; if the canary stops crashing it's the upgrade, if both keep crashing it's the leak — and ship the rollback now as the safer provisional bet.",
    explanation:
      "A canary cleanly separates the two rivals the data can't yet split, while the rollback is the cheap provisional commitment; 'wait for more reports' commits to nothing and ships nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "A gardener's pepper plants are wilting. Overwatering and a root fungus both produce drooping, yellowing leaves, and the evidence so far fits each equally. The plants are declining daily. Which lead is strongest?",
    mcOptions: [
      {
        text: "The cause is genuinely ambiguous, so the safest course is to make no changes until the plants either recover or die.",
        credit: 0,
      },
      {
        text: "Something is wrong with the roots; keep watering as usual and watch.",
        credit: 0.3,
      },
      {
        text: "Pull one plant and inspect the roots — mushy brown roots mean fungus, healthy waterlogged soil means overwatering; meanwhile stop watering all of them, since drying out helps both cases and harms neither.",
        credit: 1.0,
      },
      {
        text: "Probably overwatering — cut back the water and see if they bounce back.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Pull one plant and inspect the roots — mushy brown roots mean fungus, healthy waterlogged soil means overwatering; meanwhile stop watering all of them, since drying out helps both cases and harms neither.",
    explanation:
      "Inspecting roots is the cheap decisive test, and pausing the water is the provisional move that's safe under either rival; 'make no changes until they recover or die' is the freeze that loses the plants.",
  },
  {
    itemType: "mc",
    prompt:
      "A basketball team keeps losing in the final three minutes. Two rivals fit: the starters are gassed by then, or the late-game playcalling collapses. The next game is tomorrow. Which move opens the most while acting now?",
    mcOptions: [
      {
        text: "We can't know which it is from the box scores, so run the same rotation and lineups tomorrow.",
        credit: 0,
      },
      {
        text: "Tomorrow, rest the starters two extra minutes in the third quarter but keep the exact same late-game sets; if the collapse persists it's tactics, if it eases it's fatigue — and bank a simpler, rehearsed closing play as the provisional fix either way.",
        credit: 1.0,
      },
      {
        text: "The late minutes are clearly the problem; keep monitoring how the team closes games.",
        credit: 0.3,
      },
      {
        text: "Give the starters more rest and assume fatigue is the cause.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Tomorrow, rest the starters two extra minutes in the third quarter but keep the exact same late-game sets; if the collapse persists it's tactics, if it eases it's fatigue — and bank a simpler, rehearsed closing play as the provisional fix either way.",
    explanation:
      "Changing only rest while holding the plays fixed isolates fatigue from tactics, and a rehearsed closing set is the bet that helps now; running the same thing 'because we can't know' guarantees another loss.",
  },
  {
    itemType: "mc",
    prompt:
      "A home baker's loaves stopped rising. The yeast is months old, and the kitchen has also been cold lately — either could explain dead-flat dough, and the current evidence fits both. She bakes again tonight. Which is the strongest plan?",
    mcOptions: [
      {
        text: "Bloom a pinch of the old yeast in warm water on the counter: foam in ten minutes means the yeast is alive and the cold room is the culprit, no foam means dead yeast — and proof tonight's dough in the warm oven-with-light-on as a fix that covers both.",
        credit: 1.0,
      },
      {
        text: "Hard to say between cold and old yeast; bake as usual and see if it rises.",
        credit: 0.3,
      },
      {
        text: "Both are possible and there's no way to tell, so don't bake again until spring warms the kitchen.",
        credit: 0,
      },
      {
        text: "Buy fresh yeast and assume the old yeast was the problem.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Bloom a pinch of the old yeast in warm water on the counter: foam in ten minutes means the yeast is alive and the cold room is the culprit, no foam means dead yeast — and proof tonight's dough in the warm oven-with-light-on as a fix that covers both.",
    explanation:
      "A ten-minute proofing test decisively separates dead yeast from a cold room, and warm-proofing is the move that rescues the loaf under either; waiting for spring is the unfruitful freeze.",
  },
  {
    itemType: "mc",
    prompt:
      "A worker gets recurring afternoon headaches. Long screen sessions and low water intake both fit — both spike in the afternoon. He wants relief this week, not a diagnosis someday. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Headaches have countless causes, so nothing useful can be concluded without a doctor's full workup.",
        credit: 0,
      },
      {
        text: "For three days hold screen habits constant but drink a liter more by 2 p.m.; if headaches ease it's hydration, if not it points to screens — and take short eye-rest breaks now, which costs nothing and helps either way.",
        credit: 1.0,
      },
      {
        text: "It might be screens or water; pay attention to when the headaches come.",
        credit: 0.3,
      },
      {
        text: "Drink more water and assume dehydration is the cause.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "For three days hold screen habits constant but drink a liter more by 2 p.m.; if headaches ease it's hydration, if not it points to screens — and take short eye-rest breaks now, which costs nothing and helps either way.",
    explanation:
      "Varying only water while holding screen time fixed is the cheap discriminating test, and eye-rest breaks are the harmless provisional hedge; demanding a full workup before acting is the dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A class's quiz scores dropped this unit. The new material is genuinely harder, but a new seating chart also put chatty students together — both fit the dip. The next quiz is Friday. Which move is strongest?",
    mcOptions: [
      {
        text: "Without controlled testing we can't attribute the drop, so change nothing and grade the next quiz as is.",
        credit: 0,
      },
      {
        text: "Something is off this unit; keep teaching and watch the scores.",
        credit: 0.3,
      },
      {
        text: "For Friday, restore the old quiet seating but keep the hard material; if scores recover it was the chatter, if they stay low it's the difficulty — and add one extra worked example now, which helps regardless.",
        credit: 1.0,
      },
      {
        text: "Reseat the talkers and assume the seating chart caused the drop.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "For Friday, restore the old quiet seating but keep the hard material; if scores recover it was the chatter, if they stay low it's the difficulty — and add one extra worked example now, which helps regardless.",
    explanation:
      "Reverting only the seating while holding content fixed separates the two live causes, and an extra worked example is the no-regret provisional move; 'change nothing' freezes through another low quiz.",
  },
  {
    itemType: "mc",
    prompt:
      "An online shop's cart abandonment jumped this week. Two changes landed together: a new $7 shipping fee and a checkout page that now loads slowly. Both fit the spike. Sales are bleeding daily. Which lead opens the most while acting now?",
    mcOptions: [
      {
        text: "Show half of shoppers free shipping on the same slow page and the other half the $7 fee on a fast page; whichever group abandons less names the driver — and temporarily speed-cache the checkout now, since faster pages never hurt.",
        credit: 1.0,
      },
      {
        text: "Both changes could matter; keep tracking the abandonment rate before deciding.",
        credit: 0.3,
      },
      {
        text: "Two variables changed at once, so the data can't tell us anything; revert nothing until we have a clean week.",
        credit: 0,
      },
      {
        text: "Drop the shipping fee and assume that fixes the abandonment.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Show half of shoppers free shipping on the same slow page and the other half the $7 fee on a fast page; whichever group abandons less names the driver — and temporarily speed-cache the checkout now, since faster pages never hurt.",
    explanation:
      "Crossing the two changes in a split test decides between fee and speed, and caching is the cheap provisional bet; 'revert nothing until a clean week' lets the bleeding continue.",
  },
  {
    itemType: "mc",
    prompt:
      "A machine shop's parts are failing inspection. Two suspects fit: a new supplier's metal stock or a recently changed cutting-speed setting. A big order ships in two days. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The failure could come from either source, so halt the line until a metallurgist can study it fully.",
        credit: 0,
      },
      {
        text: "Run one batch with the OLD setting on the NEW metal and one with the new setting on leftover OLD metal; whichever batch fails isolates the cause — and ship from the run that passes as the provisional safe stock.",
        credit: 1.0,
      },
      {
        text: "It's one of those two; keep inspecting parts and see which fail.",
        credit: 0.3,
      },
      {
        text: "Switch back to the old supplier and assume the metal was bad.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Run one batch with the OLD setting on the NEW metal and one with the new setting on leftover OLD metal; whichever batch fails isolates the cause — and ship from the run that passes as the provisional safe stock.",
    explanation:
      "Crossing metal against setting cleanly separates the rivals the data can't split, and shipping the passing run meets the deadline; halting for a full metallurgical study is the freeze that misses the order.",
  },
  {
    itemType: "mc",
    prompt:
      "A guitarist's low string buzzes. A slightly warped neck and a loose string at the tuning peg both produce buzz, and the evidence fits each. He plays a gig tonight. Which move is strongest?",
    mcOptions: [
      {
        text: "Buzz can come from many things, so don't adjust anything until a luthier inspects it next week.",
        credit: 0,
      },
      {
        text: "It's probably the neck; keep playing and notice when it buzzes.",
        credit: 0.3,
      },
      {
        text: "Retune and reseat that one string first — if the buzz vanishes it was the loose string, if it persists across the fretboard it's the neck; and capo up a fret tonight as a quick workaround if the neck's the issue.",
        credit: 1.0,
      },
      {
        text: "Loosen the truss rod and assume the neck is warped.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Retune and reseat that one string first — if the buzz vanishes it was the loose string, if it persists across the fretboard it's the neck; and capo up a fret tonight as a quick workaround if the neck's the issue.",
    explanation:
      "Reseating the string is the thirty-second test that decides between the two, and the capo is the cheap provisional fix for the gig; waiting a week for a luthier abandons tonight's performance.",
  },
  {
    itemType: "mc",
    prompt:
      "A commuter's car suddenly gets worse gas mileage. Underinflated tires and a clogged air filter both fit the drop, and so far the evidence can't separate them. She drives daily. Which lead is strongest?",
    mcOptions: [
      {
        text: "Check and reinflate the tires today — a one-minute job — then watch the next two tanks; if mileage recovers it was the tires, if not it's likely the filter, which you then swap. Reinflating helps either way and costs almost nothing.",
        credit: 1.0,
      },
      {
        text: "Could be tires or filter; keep filling up and tracking the mileage.",
        credit: 0.3,
      },
      {
        text: "Many things affect mileage, so there's no point changing anything until a mechanic runs diagnostics.",
        credit: 0,
      },
      {
        text: "Replace the air filter and assume that was the cause.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Check and reinflate the tires today — a one-minute job — then watch the next two tanks; if mileage recovers it was the tires, if not it's likely the filter, which you then swap. Reinflating helps either way and costs almost nothing.",
    explanation:
      "Doing the cheap, reversible action first sequences the test so each tank discriminates, and reinflating is a no-regret provisional move; waiting for full diagnostics is the costly freeze.",
  },
  {
    itemType: "mc",
    prompt:
      "A corner bakery's foot traffic fell this month. Two live causes fit: sidewalk construction now hides the storefront, or a rival bakery opened two blocks away. The owner needs customers back soon. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Either could explain it, so wait for the construction to end and the picture to clear before acting.",
        credit: 0,
      },
      {
        text: "Foot traffic is down for some reason; keep the doors open and watch.",
        credit: 0.3,
      },
      {
        text: "Put a sandwich board past the construction fencing this week and survey new customers on whether they tried the rival; the board tests visibility while the survey tests competition — and run a loyalty punch card now to hold regulars either way.",
        credit: 1.0,
      },
      {
        text: "Assume the construction is hiding the shop and just wait it out with a bigger sign.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Put a sandwich board past the construction fencing this week and survey new customers on whether they tried the rival; the board tests visibility while the survey tests competition — and run a loyalty punch card now to hold regulars either way.",
    explanation:
      "The board and the survey each probe a different rival, splitting them, while the punch card is the provisional move that retains customers under either cause; 'wait for the picture to clear' surrenders the month.",
  },
  {
    itemType: "mc",
    prompt:
      "A dog keeps scratching. A food allergy (the owner switched kibble recently) and fleas both fit the itching. The dog is miserable now. Which move opens the most while giving relief?",
    mcOptions: [
      {
        text: "Itching has too many possible causes to act on, so wait and see whether it stops on its own.",
        credit: 0,
      },
      {
        text: "Run a flea comb over the coat today — finding flea dirt confirms fleas; if it's clean, switch back to the old kibble for two weeks to test the food — and start a vet-approved flea treatment now, since it helps in the flea case and is harmless otherwise.",
        credit: 1.0,
      },
      {
        text: "It's the food or fleas; keep watching the scratching for now.",
        credit: 0.3,
      },
      {
        text: "Switch back to the old food and assume it was an allergy.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Run a flea comb over the coat today — finding flea dirt confirms fleas; if it's clean, switch back to the old kibble for two weeks to test the food — and start a vet-approved flea treatment now, since it helps in the flea case and is harmless otherwise.",
    explanation:
      "A flea comb is the instant decisive check, and a precautionary treatment is the provisional move safe under either rival; 'wait and see if it stops' leaves the dog suffering and learns nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "A team's weekly meetings keep running long. Two live causes fit: too many attendees, or the lack of a written agenda. The next meeting is Monday. Which lead is strongest?",
    mcOptions: [
      {
        text: "Either could be it, so leave the meeting unchanged until we've timed several more.",
        credit: 0,
      },
      {
        text: "Monday, keep the full invite list but circulate a tight timed agenda; if it ends on time the agenda was the fix, if it still drags the room is too big — and set a hard stop now, which curbs overruns either way.",
        credit: 1.0,
      },
      {
        text: "Meetings just run long; keep noticing when they overrun.",
        credit: 0.3,
      },
      {
        text: "Cut the invite list and assume too many people was the problem.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Monday, keep the full invite list but circulate a tight timed agenda; if it ends on time the agenda was the fix, if it still drags the room is too big — and set a hard stop now, which curbs overruns either way.",
    explanation:
      "Adding only an agenda while holding attendance fixed isolates the two causes, and a hard stop is the provisional control that helps regardless; 'leave it unchanged until we've timed more' just burns more hours.",
  },
  {
    itemType: "mc",
    prompt:
      "A hobbyist's photos keep coming out blurry. Camera shake from slow shutter speeds and autofocus missing the subject both fit the blur. There's a family event tomorrow. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Shoot a few test frames tonight on a tripod at a fast shutter: still blurry points to autofocus, sharp means it was shake — and tomorrow bump the shutter speed and use single-point focus, which guards against both.",
        credit: 1.0,
      },
      {
        text: "Blur could be shake or focus; keep shooting and check the results later.",
        credit: 0.3,
      },
      {
        text: "There's no way to know which it is, so don't change settings until a pro reviews the photos.",
        credit: 0,
      },
      {
        text: "Raise the shutter speed and assume camera shake was the issue.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Shoot a few test frames tonight on a tripod at a fast shutter: still blurry points to autofocus, sharp means it was shake — and tomorrow bump the shutter speed and use single-point focus, which guards against both.",
    explanation:
      "A tripod-plus-fast-shutter test removes shake so the result fingers the real cause, and using both fixes tomorrow is the provisional hedge; waiting for a pro review abandons the event.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A microbrewery's last two batches turned sour. Wild-yeast contamination and an unusually warm fermentation room both fit the off-flavor, and the brewer can't yet tell which. The next batch is pitched tomorrow. Which lead is strongest?",
    mcOptions: [
      {
        text: "Split tomorrow's wort: ferment half in the warm room and half in a temperature-controlled chamber, both with a fresh sealed yeast pitch; sour in both points to contamination upstream, sour only in the warm half points to temperature — and clean-and-sanitize all gear now as the move that helps either way.",
        credit: 1.0,
      },
      {
        text: "Sourness has many causes, so don't brew again until a lab cultures the tanks.",
        credit: 0,
      },
      {
        text: "It's contamination or heat; keep brewing and taste each batch.",
        credit: 0.3,
      },
      {
        text: "Cool the room and assume the warm fermentation caused the sourness.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your temperature lead from the rival 'wild yeast contaminated the gear,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: ferment one half of the same wort cold with a fresh sealed pitch while the other half stays warm, and compare. My temperature lead is refuted if the cold half turns sour too, since clean yeast at a controlled temperature should not sour unless something is contaminating the equipment.",
      yieldAnchors: [
        "The last two batches turned sour",
        "The fermentation room has been unusually warm",
        "Wild-yeast contamination is also possible",
      ],
      riskAnchors: [
        "The cold-chamber half ferments clean while the warm half sours",
        "A fresh sealed pitch still sours in the warm room",
        "Sanitizing the gear alone does not fix sourness",
      ],
      defeatedBy: [
        "Nothing can be brewed until a lab fully cultures the tanks",
        "Both batches sour identically regardless of temperature",
      ],
    },
    correctAnswer:
      "Split tomorrow's wort: ferment half in the warm room and half in a temperature-controlled chamber, both with a fresh sealed yeast pitch; sour in both points to contamination upstream, sour only in the warm half points to temperature — and clean-and-sanitize all gear now as the move that helps either way.",
    explanation:
      "The split-temperature batch with clean yeast decides between heat and contamination, and sanitizing is the no-regret provisional act; refusing to brew until a full lab culture is the freeze CCR penalizes.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A small farm's hens are laying fewer eggs. The days are getting shorter, and the farmer also switched feed brands last week — both fit the decline. She wants eggs back soon. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Egg production is complex, so make no changes until the season turns and the picture is clear.",
        credit: 0,
      },
      {
        text: "Add a timed coop light to restore 14 hours of daylight while keeping the new feed; if laying recovers it was daylight, if it stays low switch the feed back next — and the light is cheap and reversible, so it's a safe first bet.",
        credit: 1.0,
      },
      {
        text: "It's daylight or the feed; keep collecting eggs and watch the count.",
        credit: 0.3,
      },
      {
        text: "Switch the feed back and assume the new brand hurt laying.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your daylight lead from the rival 'the new feed cut laying,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: add a timer light to restore long daylight while leaving the new feed in place, and watch laying for a week. My daylight lead is refuted if egg counts stay low under restored light, which would point to the feed instead.",
      yieldAnchors: [
        "Hens are laying fewer eggs",
        "Daylight hours are shrinking",
        "The feed brand changed last week",
      ],
      riskAnchors: [
        "Restoring 14 hours of light revives laying",
        "Laying stays flat under added light",
        "Reverting feed later changes nothing if light already fixed it",
      ],
      defeatedBy: [
        "No change should be made until the season turns",
        "Eggs drop equally regardless of light or feed",
      ],
    },
    correctAnswer:
      "Add a timed coop light to restore 14 hours of daylight while keeping the new feed; if laying recovers it was daylight, if it stays low switch the feed back next — and the light is cheap and reversible, so it's a safe first bet.",
    explanation:
      "Changing only daylight while holding feed fixed splits the two rivals, and the cheap reversible light is the provisional move; waiting for the season is the unproductive freeze.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A warehouse's shipping errors doubled this month. Two changes coincided: three new hires joined picking, and the bin-labeling system was reorganized. Both fit the error spike. Peak season starts in a week. Which move is strongest?",
    mcOptions: [
      {
        text: "Two things changed at once, so the data can't tell us anything; revert nothing until errors settle on their own.",
        credit: 0,
      },
      {
        text: "Put the new hires on the OLD-labeled aisles and veterans on the NEW-labeled aisles for a few days; if errors follow the new labels it's the system, if they follow the new pickers it's training — and add a scan-confirm step now, which cuts mispicks either way.",
        credit: 1.0,
      },
      {
        text: "It's the hires or the labels; keep logging errors and see.",
        credit: 0.3,
      },
      {
        text: "Retrain the new hires and assume inexperience caused the errors.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your labeling lead from the rival 'the new hires are still learning,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: assign veterans to the newly relabeled aisles and new hires to the old-label aisles, then see where errors land. My labeling lead is refuted if errors track the new hires regardless of which aisle they work, pointing to training rather than the labels.",
      yieldAnchors: [
        "Shipping errors doubled this month",
        "Three new hires joined picking",
        "The bin-labeling system was reorganized",
      ],
      riskAnchors: [
        "Errors follow the new labels even for veterans",
        "Errors follow the new hires regardless of aisle",
        "A scan-confirm step reduces errors immediately",
      ],
      defeatedBy: [
        "Nothing can be concluded until errors settle on their own",
        "Errors are random and unrelated to either change",
      ],
    },
    correctAnswer:
      "Put the new hires on the OLD-labeled aisles and veterans on the NEW-labeled aisles for a few days; if errors follow the new labels it's the system, if they follow the new pickers it's training — and add a scan-confirm step now, which cuts mispicks either way.",
    explanation:
      "Crossing pickers against labels separates training from the system, and a scan-confirm step is the provisional safeguard before peak; 'revert nothing until errors settle' invites a disastrous season.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A gym's 6 p.m. spin class lost half its attendance. Two changes landed together: the class moved from 5:30 to 6, and a new instructor took over. Both fit the drop. Which lead opens the most while acting now?",
    mcOptions: [
      {
        text: "Attendance swings for many reasons, so leave the class as-is until a full quarter of data comes in.",
        credit: 0,
      },
      {
        text: "For two weeks, move the class back to 5:30 but keep the new instructor; if attendance returns it was the time, if it stays low it's the instructor — and email the old roster a 'we miss you' free-class pass now to win some back either way.",
        credit: 1.0,
      },
      {
        text: "It's the time or the instructor; keep watching sign-ups.",
        credit: 0.3,
      },
      {
        text: "Bring back the old instructor and assume that was the issue.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your time-slot lead from the rival 'members dislike the new instructor,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: restore the 5:30 slot while keeping the new instructor and watch attendance for two weeks. My time-slot lead is refuted if attendance stays low at 5:30, which would point to the instructor rather than the hour.",
      yieldAnchors: [
        "The spin class lost half its attendance",
        "The class moved from 5:30 to 6 p.m.",
        "A new instructor took over",
      ],
      riskAnchors: [
        "Attendance rebounds at the restored 5:30 slot",
        "Attendance stays low despite the time change",
        "A free-class pass brings back some lapsed members",
      ],
      defeatedBy: [
        "No change should be made until a full quarter of data arrives",
        "Attendance is unrelated to both time and instructor",
      ],
    },
    correctAnswer:
      "For two weeks, move the class back to 5:30 but keep the new instructor; if attendance returns it was the time, if it stays low it's the instructor — and email the old roster a 'we miss you' free-class pass now to win some back either way.",
    explanation:
      "Reverting only the time while holding the instructor fixed splits the rivals, and the free-pass email is the provisional win-back; waiting a full quarter is the freeze that loses the class.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A startup's signups fell sharply this week. Two things changed: the landing page was redesigned, and a paid ad campaign ended. Both fit the drop. Runway is tight. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The signup funnel has many inputs, so don't touch anything until next month's numbers clarify it.",
        credit: 0,
      },
      {
        text: "It's the page or the ads; keep an eye on the signup dashboard.",
        credit: 0.3,
      },
      {
        text: "Restore the old landing page to organic traffic only while the ads stay off; if organic signups recover it was the redesign, if they stay flat the ads were carrying volume — and turn a small ad budget back on now as the provisional bet to stabilize signups.",
        credit: 1.0,
      },
      {
        text: "Roll back the redesign and assume the new page hurt conversion.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your redesign lead from the rival 'signups fell because the ads stopped,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: revert the landing page for organic (non-ad) visitors while leaving the ads off, and compare organic signup rate before and after. My redesign lead is refuted if organic signups stay flat on the old page, which would mean the lost ad traffic, not the page, drove the drop.",
      yieldAnchors: [
        "Signups fell sharply this week",
        "The landing page was redesigned",
        "A paid ad campaign ended",
      ],
      riskAnchors: [
        "Organic signups recover on the restored old page",
        "Organic signups stay flat regardless of page",
        "Restarting a small ad budget lifts total signups",
      ],
      defeatedBy: [
        "Nothing can be decided until next month's numbers come in",
        "Signups are unrelated to both the page and the ads",
      ],
    },
    correctAnswer:
      "Restore the old landing page to organic traffic only while the ads stay off; if organic signups recover it was the redesign, if they stay flat the ads were carrying volume — and turn a small ad budget back on now as the provisional bet to stabilize signups.",
    explanation:
      "Isolating organic traffic on the old page tests the redesign independently of ad spend, and a small ad restart is the provisional stabilizer; 'don't touch anything until next month' wastes scarce runway.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An orchard's apples are arriving bruised at the packhouse. Two things changed this season: a new picking crew, and switched-to harder plastic crates. Both fit the bruising. The harvest is ongoing. Which move is strongest?",
    mcOptions: [
      {
        text: "Bruising can come from many handling steps, so halt picking until an agronomist studies the whole chain.",
        credit: 0,
      },
      {
        text: "Have the new crew fill a run of the OLD padded crates and the veteran crew fill the new hard crates; bruising following the crates blames the containers, bruising following the new crew blames handling — and line the hard crates with foam now, which reduces bruising either way.",
        credit: 1.0,
      },
      {
        text: "It's the crew or the crates; keep picking and check the bruising rate.",
        credit: 0.3,
      },
      {
        text: "Go back to the old crates and assume the hard plastic caused it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your crate lead from the rival 'the new crew handles fruit roughly,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have the new crew use the old padded crates and the veterans use the new hard crates, then compare bruise rates by crate type. My crate lead is refuted if bruising follows the new crew no matter which crate they fill, pointing to handling rather than the containers.",
      yieldAnchors: [
        "Apples are arriving bruised",
        "A new picking crew started this season",
        "The orchard switched to harder plastic crates",
      ],
      riskAnchors: [
        "Bruising follows the hard crates across both crews",
        "Bruising follows the new crew across both crate types",
        "Foam-lining the hard crates cuts bruising",
      ],
      defeatedBy: [
        "Picking must stop until an agronomist studies the whole chain",
        "Bruising is random and tied to neither change",
      ],
    },
    correctAnswer:
      "Have the new crew fill a run of the OLD padded crates and the veteran crew fill the new hard crates; bruising following the crates blames the containers, bruising following the new crew blames handling — and line the hard crates with foam now, which reduces bruising either way.",
    explanation:
      "Crossing crew against crate splits handling from containers, and foam-lining is the provisional mitigation during harvest; halting all picking for a full study is the freeze that loses the crop.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A community theater's matinee ticket sales dropped. Two things changed: the nearby lot started charging for parking, and this season's show lineup is less known. Both fit the slump. The next matinee is this weekend. Which lead is strongest?",
    mcOptions: [
      {
        text: "Ticket sales depend on too much to single out a cause, so wait until the season ends to review it.",
        credit: 0,
      },
      {
        text: "It's parking or the lineup; keep selling and watch the matinee numbers.",
        credit: 0.3,
      },
      {
        text: "Offer validated free parking for this weekend's matinee only and survey buyers on why they came; if sales jump with free parking it's the lot, if they don't it's the lineup — and bundle a familiar crowd-pleaser into the matinee now to hedge either way.",
        credit: 1.0,
      },
      {
        text: "Validate parking and assume the new fees scared off the matinee crowd.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your parking lead from the rival 'the lineup is weaker this season,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: validate free parking for one matinee and see whether sales jump versus the unchanged lineup. My parking lead is refuted if sales stay flat even with free parking, which would point to the show lineup rather than the lot fees.",
      yieldAnchors: [
        "Matinee ticket sales dropped",
        "The nearby lot began charging for parking",
        "This season's lineup is less known",
      ],
      riskAnchors: [
        "Free validated parking lifts matinee sales",
        "Sales stay flat despite free parking",
        "A familiar crowd-pleaser draws buyers regardless",
      ],
      defeatedBy: [
        "No conclusion can be drawn until the season ends",
        "Matinee sales are unrelated to parking and lineup alike",
      ],
    },
    correctAnswer:
      "Offer validated free parking for this weekend's matinee only and survey buyers on why they came; if sales jump with free parking it's the lot, if they don't it's the lineup — and bundle a familiar crowd-pleaser into the matinee now to hedge either way.",
    explanation:
      "One-weekend free parking plus a buyer survey separately probes both rivals, and the crowd-pleaser bundle is the provisional hedge; 'wait until the season ends' surrenders the run.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A biology lab's cell cultures keep dying. Two suspects fit: a recently opened bottle of growth media, or an incubator whose temperature has been drifting. The grad student needs live cells for an experiment this week. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Split a fresh plating: grow half in the new media and half in a known-good media bottle, both placed in a borrowed, verified incubator; deaths only in the new-media dish blame the media, deaths in both point to something else — and log the incubator temperature now to catch any drift.",
        credit: 1.0,
      },
      {
        text: "It's the media or the incubator; keep plating cells and see what survives.",
        credit: 0.3,
      },
      {
        text: "Cell death has countless causes, so run nothing until the core facility audits every reagent and machine.",
        credit: 0,
      },
      {
        text: "Toss the new media bottle and assume it was contaminated.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your media lead from the rival 'the incubator temperature is drifting,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: plate cells in the new media versus a known-good media bottle, both in a verified incubator, and compare survival. My media lead is refuted if cells die in both bottles under a stable incubator, which would implicate the incubator or another factor rather than the media.",
      yieldAnchors: [
        "Cell cultures keep dying",
        "A new growth-media bottle was recently opened",
        "The incubator temperature has been drifting",
      ],
      riskAnchors: [
        "Cells die only in the new-media dish under a verified incubator",
        "Cells survive in known-good media in a borrowed incubator",
        "A temperature log reveals the incubator drifting out of range",
      ],
      defeatedBy: [
        "Nothing can be run until the facility audits everything",
        "Cells die identically regardless of media or incubator",
      ],
    },
    correctAnswer:
      "Split a fresh plating: grow half in the new media and half in a known-good media bottle, both placed in a borrowed, verified incubator; deaths only in the new-media dish blame the media, deaths in both point to something else — and log the incubator temperature now to catch any drift.",
    explanation:
      "Holding the incubator fixed while varying the media isolates the rivals, and a temperature log is the cheap provisional check; refusing to run anything pending a full facility audit is the freeze.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A bike shop notices one tire model keeps coming back with flats. Two live causes fit: a stretch of glass-strewn road most of these riders use, or a possibly defective batch of inner tubes. Customers are frustrated now. Which move is strongest?",
    mcOptions: [
      {
        text: "Flats happen for many reasons, so don't change suppliers or routes until a much larger sample of returns accumulates.",
        credit: 0,
      },
      {
        text: "It's the road or the tubes; keep logging the flats and watch the pattern.",
        credit: 0.3,
      },
      {
        text: "Pressure-test a sample from the suspect tube batch in the shop and ask returning riders which roads they ride; batch failures on the bench blame the tubes, while flats clustering on the glassy route blame debris — and hand out a free puncture-resistant liner now, which helps under either cause.",
        credit: 1.0,
      },
      {
        text: "Swap to a different tube supplier and assume the batch was defective.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your defective-tube lead from the rival 'riders are crossing a glass-strewn road,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: bench-pressure-test a sample of the suspect batch and ask returning riders which routes they use. My defective-tube lead is refuted if the sampled tubes hold pressure fine and the flats instead cluster among riders on the glassy road, pointing to debris rather than the batch.",
      yieldAnchors: [
        "One tire model keeps returning with flats",
        "Many of these riders use a glass-strewn road",
        "The inner tubes may be a defective batch",
      ],
      riskAnchors: [
        "Sampled tubes fail a bench pressure test",
        "Flats cluster among riders on the glassy route",
        "A puncture-resistant liner cuts the flat rate",
      ],
      defeatedBy: [
        "No action until a much larger sample accumulates",
        "Flats are random and tied to neither tubes nor road",
      ],
    },
    correctAnswer:
      "Pressure-test a sample from the suspect tube batch in the shop and ask returning riders which roads they ride; batch failures on the bench blame the tubes, while flats clustering on the glassy route blame debris — and hand out a free puncture-resistant liner now, which helps under either cause.",
    explanation:
      "Bench-testing tubes plus a route survey probes each rival separately, and the liner is the provisional fix that helps under both; waiting for a much larger sample is the freeze that frustrates customers.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "An independent bookstore's monthly sales dropped 20%. Two live causes fit equally: the city closed the main road past the shop for repairs three weeks ago, and a wave of cheap e-reader deals hit the same month. The owner can't yet tell which is doing the damage, and rent is due. In one paragraph, propose the strongest way to act under this genuine uncertainty and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest move is not to freeze but to run a cheap test that separates the two live causes while placing a provisional bet that helps under either. Because the road closure is local and the e-reader trend is not, I'd compare in-store walk-in counts (which the closure should crush) against online and phone orders (which the e-reader trend should hit but the closure should not): if walk-ins collapsed while online held, the road is the culprit; if both fell, e-readers are eating demand. Meanwhile I'd act now — post clear 'we're still open, enter from the back' signage and a sandwich board past the construction, and launch a small loyalty or local-author event to defend foot traffic regardless of cause. This is fecund because it predicts checkable consequences: walk-ins should rebound when the road reopens if the closure is to blame; online orders should keep sliding if the e-reader trend is real; and the signage should lift walk-ins specifically, not online sales. I'd test it by tracking the two sales channels separately for two weeks, by watching whether walk-ins recover the week the road reopens, and by measuring whether the signage moves in-store but not online numbers.",
      yieldAnchors: [
        "Monthly sales dropped 20%",
        "The main road past the shop was closed for repairs",
        "A wave of cheap e-reader deals hit the same month",
      ],
      riskAnchors: [
        "Walk-in counts collapsed while online orders held steady",
        "Walk-ins rebound the week the road reopens",
        "Signage lifts in-store traffic but not online sales",
      ],
      defeatedBy: [
        "Nothing can be concluded until the road reopens, so do nothing",
        "It is obviously the e-readers, so stop stocking print entirely",
        "The two causes can never be separated",
      ],
    },
    correctAnswer:
      "The strongest move is not to freeze but to run a cheap test that separates the two live causes while placing a provisional bet that helps under either. Because the road closure is local and the e-reader trend is not, I'd compare in-store walk-in counts (which the closure should crush) against online and phone orders (which the e-reader trend should hit but the closure should not): if walk-ins collapsed while online held, the road is the culprit; if both fell, e-readers are eating demand. Meanwhile I'd act now — post clear 'we're still open, enter from the back' signage and a sandwich board past the construction, and launch a small loyalty or local-author event to defend foot traffic regardless of cause. This is fecund because it predicts checkable consequences: walk-ins should rebound when the road reopens if the closure is to blame; online orders should keep sliding if the e-reader trend is real; and the signage should lift walk-ins specifically, not online sales. I'd test it by tracking the two sales channels separately for two weeks, by watching whether walk-ins recover the week the road reopens, and by measuring whether the signage moves in-store but not online numbers.",
    explanation:
      "Under genuine underdetermination the cautious 'do nothing until the road reopens' earns near-zero, and the overreach 'obviously e-readers, drop print' is reckless; top credit goes to splitting the channels to decide while acting on a provisional bet that's safe under either cause.",
  },
  {
    itemType: "written",
    prompt:
      "A web team sees intermittent server slowdowns several times a day. Two live explanations fit: an unoptimized database query that fires under load, or a 'noisy neighbor' on the shared hosting plan stealing CPU. The logs so far fit both, and customers are complaining. In one paragraph, propose the strongest way to act under the uncertainty and how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest move is to run a test that pulls the two causes apart while making a provisional change that helps either way, rather than waiting for the logs to 'eventually' reveal the answer. The noisy-neighbor story predicts slowdowns that correlate with host-level CPU steal and that strike even when our own traffic is low; the slow-query story predicts slowdowns that track our request volume and that show up as long query times in the database profiler. So I'd turn on query profiling and host CPU-steal monitoring together for a day and see which signal the slowdowns ride. Meanwhile I'd act now by adding a short-lived cache in front of the suspect query and provisioning a small read replica — both blunt the slow-query case and buy headroom that softens a noisy neighbor too. This is fecund because it predicts checkable consequences: if it's the query, slowdowns should track our traffic peaks and the profiler should flag it, and the cache should erase most of them; if it's the neighbor, CPU-steal spikes should line up with the slowdowns independent of our load, and only moving to an isolated plan would fully fix it. I'd test it by correlating slowdown timestamps with both signals, by watching whether the cache removes the slowdowns, and by scheduling a brief move to a dedicated instance to confirm the neighbor hypothesis if the cache doesn't.",
      yieldAnchors: [
        "Server slowdowns happen several times a day",
        "An unoptimized query could be firing under load",
        "A noisy neighbor on shared hosting could be stealing CPU",
      ],
      riskAnchors: [
        "Slowdowns track our own traffic peaks and the profiler flags the query",
        "CPU-steal spikes align with slowdowns independent of our load",
        "Adding a cache erases most of the slowdowns",
      ],
      defeatedBy: [
        "We can't know the cause, so just keep restarting the server",
        "It must be the host, so migrate everything immediately at great cost",
        "The slowdowns are unpredictable and untestable",
      ],
    },
    correctAnswer:
      "The strongest move is to run a test that pulls the two causes apart while making a provisional change that helps either way, rather than waiting for the logs to 'eventually' reveal the answer. The noisy-neighbor story predicts slowdowns that correlate with host-level CPU steal and that strike even when our own traffic is low; the slow-query story predicts slowdowns that track our request volume and that show up as long query times in the database profiler. So I'd turn on query profiling and host CPU-steal monitoring together for a day and see which signal the slowdowns ride. Meanwhile I'd act now by adding a short-lived cache in front of the suspect query and provisioning a small read replica — both blunt the slow-query case and buy headroom that softens a noisy neighbor too. This is fecund because it predicts checkable consequences: if it's the query, slowdowns should track our traffic peaks and the profiler should flag it, and the cache should erase most of them; if it's the neighbor, CPU-steal spikes should line up with the slowdowns independent of our load, and only moving to an isolated plan would fully fix it. I'd test it by correlating slowdown timestamps with both signals, by watching whether the cache removes the slowdowns, and by scheduling a brief move to a dedicated instance to confirm the neighbor hypothesis if the cache doesn't.",
    explanation:
      "The 'we can't know, just keep restarting' refusal earns near-zero and the 'migrate everything immediately' overreach is costly recklessness; credit goes to monitoring both signals to decide while shipping a cache that helps under either cause.",
  },
  {
    itemType: "written",
    prompt:
      "A swim coach sees a promising swimmer's times plateau over six weeks. Two live causes fit: accumulated overtraining fatigue, or a flaw in her stroke that's capping her speed. A qualifying meet is a month away. In one paragraph, propose the strongest way to act under the uncertainty and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest move is to design the next two weeks so they separate fatigue from technique while making a change that helps under either, instead of either panicking or waiting passively for the plateau to lift. Overtraining predicts that her times improve after a deliberate taper and rest, and that her power numbers are down across all strokes; a stroke flaw predicts that even when rested her times stall on the specific stroke, and that underwater video shows a consistent breakdown — say, a dropped elbow on the catch. So I'd give her a planned recovery week and film her stroke at race pace before and after it. Meanwhile I'd act now by trimming junk yardage and adding two focused technique drills, since both lighten load and sharpen form regardless of which cause dominates. This is fecund because it predicts checkable consequences: if it's fatigue, the taper week should drop her times and her power should rebound; if it's technique, video should reveal a repeatable flaw and her times should stay capped despite rest; and correcting the filmed flaw should lift her times if technique is the cap. I'd test it by comparing timed swims before and after the recovery week, by reviewing the slow-motion video for a consistent mechanical break, and by isolating the suspect stroke phase in drills to see whether fixing it moves the clock.",
      yieldAnchors: [
        "The swimmer's times plateaued over six weeks",
        "Accumulated overtraining fatigue is possible",
        "A stroke flaw capping her speed is possible",
      ],
      riskAnchors: [
        "Times improve after a planned taper and power rebounds",
        "Video shows a consistent mechanical flaw and times stay capped despite rest",
        "Correcting the filmed flaw lifts her times",
      ],
      defeatedBy: [
        "Her times will plateau no matter what, so just keep her current program",
        "She is obviously burned out, so pull her from the meet now",
        "A plateau can never be diagnosed without lab testing",
      ],
    },
    correctAnswer:
      "The strongest move is to design the next two weeks so they separate fatigue from technique while making a change that helps under either, instead of either panicking or waiting passively for the plateau to lift. Overtraining predicts that her times improve after a deliberate taper and rest, and that her power numbers are down across all strokes; a stroke flaw predicts that even when rested her times stall on the specific stroke, and that underwater video shows a consistent breakdown — say, a dropped elbow on the catch. So I'd give her a planned recovery week and film her stroke at race pace before and after it. Meanwhile I'd act now by trimming junk yardage and adding two focused technique drills, since both lighten load and sharpen form regardless of which cause dominates. This is fecund because it predicts checkable consequences: if it's fatigue, the taper week should drop her times and her power should rebound; if it's technique, video should reveal a repeatable flaw and her times should stay capped despite rest; and correcting the filmed flaw should lift her times if technique is the cap. I'd test it by comparing timed swims before and after the recovery week, by reviewing the slow-motion video for a consistent mechanical break, and by isolating the suspect stroke phase in drills to see whether fixing it moves the clock.",
    explanation:
      "Doing nothing or pulling her from the meet are the freeze and the overreach; top credit goes to a taper-plus-video plan that decides between fatigue and technique while making a provisional load-and-drill change safe under either.",
  },
  {
    itemType: "written",
    prompt:
      "A restaurant's negative reviews spiked over two weeks. Two live causes fit: a newly hired chef changed how dishes are cooked, and the restaurant just started using a third-party delivery app that may be mishandling food in transit. The owner can't yet tell which, and reputation is slipping fast. In one paragraph, propose the strongest way to act under the uncertainty and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest move is to split the reviews along the one dimension that separates the two causes and act provisionally to protect the restaurant either way, not to wait for the reviews to 'speak for themselves.' The chef story predicts that dine-in and delivery reviews both sour and that complaints cite taste, seasoning, or doneness; the delivery story predicts that only delivery orders draw complaints and that those cite cold, soggy, spilled, or late food while dine-in stays fine. So I'd tag each recent review as dine-in versus delivery and read what it complains about. Meanwhile I'd act now by having the chef and owner re-plate and taste-check a sample of dishes against the old recipes, and by adding tamper-proof, insulated delivery packaging — covering both suspects at once. This is fecund because it predicts checkable consequences: if it's the chef, dine-in reviews should be just as negative and cite flavor, and a recipe re-check should surface the change; if it's delivery, dine-in scores should hold while delivery complaints cite transit damage, and better packaging plus a fixed handoff should lift delivery ratings. I'd test it by comparing dine-in versus delivery review scores and keywords, by blind-tasting current dishes against the prior recipes, and by watching whether improved packaging specifically raises delivery ratings.",
      yieldAnchors: [
        "Negative reviews spiked over two weeks",
        "A newly hired chef changed how dishes are cooked",
        "A third-party delivery app may be mishandling food",
      ],
      riskAnchors: [
        "Dine-in and delivery reviews both sour and cite flavor",
        "Only delivery orders draw complaints citing transit damage",
        "Better packaging raises delivery ratings specifically",
      ],
      defeatedBy: [
        "We can't tell the cause, so wait and hope the reviews recover",
        "The new chef is obviously the problem, so fire them immediately",
        "Review spikes are random and impossible to diagnose",
      ],
    },
    correctAnswer:
      "The strongest move is to split the reviews along the one dimension that separates the two causes and act provisionally to protect the restaurant either way, not to wait for the reviews to 'speak for themselves.' The chef story predicts that dine-in and delivery reviews both sour and that complaints cite taste, seasoning, or doneness; the delivery story predicts that only delivery orders draw complaints and that those cite cold, soggy, spilled, or late food while dine-in stays fine. So I'd tag each recent review as dine-in versus delivery and read what it complains about. Meanwhile I'd act now by having the chef and owner re-plate and taste-check a sample of dishes against the old recipes, and by adding tamper-proof, insulated delivery packaging — covering both suspects at once. This is fecund because it predicts checkable consequences: if it's the chef, dine-in reviews should be just as negative and cite flavor, and a recipe re-check should surface the change; if it's delivery, dine-in scores should hold while delivery complaints cite transit damage, and better packaging plus a fixed handoff should lift delivery ratings. I'd test it by comparing dine-in versus delivery review scores and keywords, by blind-tasting current dishes against the prior recipes, and by watching whether improved packaging specifically raises delivery ratings.",
    explanation:
      "Waiting and hoping is the near-zero freeze and firing the chef on a hunch is the overreach; credit goes to segmenting reviews by channel to decide while taking provisional steps that protect the restaurant under either cause.",
  },
  {
    itemType: "written",
    prompt:
      "A teacher notices a normally strong student's grades fall over a month, with sloppy, incomplete work. Two live causes fit: trouble at home that's distracting him, or an undiagnosed vision problem making board work and reading hard. The teacher wants to help now, not after a semester of decline. In one paragraph, propose the strongest way to act under the uncertainty and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest move is to gather the one kind of observation that separates the two causes and take a gentle provisional step that helps under either, rather than freezing for lack of certainty. A vision problem predicts that errors concentrate on copying from the board, reading small print, and far-distance tasks while close-up oral work stays sharp, and that he squints or sits closer when he can; trouble at home predicts a broad, mood-linked dip across all work regardless of distance, with signs of fatigue or withdrawal. So I'd quietly watch where his errors cluster, move him to a front-row seat, and give him a short large-print versus normal-print task to compare. Meanwhile I'd act now by checking in privately and warmly and looping in the family and school nurse — a step that supports him whether the cause is stress or eyesight. This is fecund because it predicts checkable consequences: if it's vision, front-row seating and large print should sharply improve his board and reading work; if it's home stress, the dip should persist across all tasks and track his mood rather than print size; and a nurse's vision screen should settle the eyesight question cheaply. I'd test it by comparing his accuracy on near versus far and large versus small print, by noting whether a front seat helps, and by arranging a quick vision screening while gently checking on how things are at home.",
      yieldAnchors: [
        "A strong student's grades fell over a month",
        "His work is sloppy and incomplete",
        "Either home trouble or an undiagnosed vision problem could explain it",
      ],
      riskAnchors: [
        "Errors concentrate on board-copying and far/small-print tasks",
        "A front-row seat and large print sharply improve his work",
        "The dip persists across all tasks and tracks his mood if it's home stress",
      ],
      defeatedBy: [
        "We can't know what's wrong, so just wait and see if grades recover",
        "It's clearly a home problem, so refer him to discipline without checking",
        "A grade drop can never be explained without a full evaluation first",
      ],
    },
    correctAnswer:
      "The strongest move is to gather the one kind of observation that separates the two causes and take a gentle provisional step that helps under either, rather than freezing for lack of certainty. A vision problem predicts that errors concentrate on copying from the board, reading small print, and far-distance tasks while close-up oral work stays sharp, and that he squints or sits closer when he can; trouble at home predicts a broad, mood-linked dip across all work regardless of distance, with signs of fatigue or withdrawal. So I'd quietly watch where his errors cluster, move him to a front-row seat, and give him a short large-print versus normal-print task to compare. Meanwhile I'd act now by checking in privately and warmly and looping in the family and school nurse — a step that supports him whether the cause is stress or eyesight. This is fecund because it predicts checkable consequences: if it's vision, front-row seating and large print should sharply improve his board and reading work; if it's home stress, the dip should persist across all tasks and track his mood rather than print size; and a nurse's vision screen should settle the eyesight question cheaply. I'd test it by comparing his accuracy on near versus far and large versus small print, by noting whether a front seat helps, and by arranging a quick vision screening while gently checking on how things are at home.",
    explanation:
      "Waiting to see if grades recover is the freeze and referring him to discipline on a guess is the overreach; top credit goes to comparing near/far and print-size work to decide while taking the gentle, supportive provisional steps that help under either cause.",
  },
];

export const section: SectionContent = {
  slug: "underdetermination-trap",
  title: "The Underdetermination Trap",
  weekNumber: 3,
  blurb:
    "When the evidence in hand genuinely can't yet decide between live rivals, don't freeze — name the cheapest test that would decide and act on the best provisional bet meanwhile.",
  lectureTitle:
    "3.7 The Underdetermination Trap: acting when the evidence genuinely fails to decide",
  body: `# The Underdetermination Trap

Sometimes the evidence really is split: two live explanations fit everything you've seen, and nothing on the table breaks the tie. This is the one place where caution feels vindicated — "see, we *can't* know." But underdetermination is a trap precisely because it tempts you to freeze, and freezing is still the failure mode. The constructive move is not to declare the question unanswerable; it is to name the cheapest observation that *would* answer it and, until that observation comes in, to commit to the best provisional bet.

## Underdetermination is temporary, not permanent

The reflexive skeptic treats "the current data can't decide" as if it meant "nothing can ever decide." Almost always it doesn't. Two rivals that fit today's evidence equally usually make *different* predictions about some observation you haven't made yet. The work is to find that observation. Underdetermination is a to-do item — go get the discriminating datum — not a verdict of permanent ignorance.

## Name the cheapest decisive test

When you're genuinely stuck, ask: *What is the one cheap thing I could observe that the two rivals predict differently?* Pull a wilting plant and look at the roots; bloom a pinch of yeast; restore the old seating but keep the hard material; cross the new metal against the old cutting speed. A good underdetermination move always points to a concrete, affordable observation that splits the rivals — not "gather more data" in the abstract, but *this* datum, which decides.

## Act on the best provisional bet meanwhile

You rarely get to suspend life while the test runs. Service is in three hours; the gig is tonight; rent is due. So alongside the decisive test, commit to a provisional action — ideally a *no-regret* one that helps under either rival. Stop watering (safe whether it's fungus or overwatering); reinflate the tires first (cheap and helps either way); add insulated packaging (covers both chef and delivery). Provisional commitment is not the same as belief; it's acting on the best current bet while the decisive datum is still in the mail.

## Why the freeze loses

"We can't know which it is, so do nothing" earns zero here for the same reason it does everywhere in this course: it names no lead, runs no test, and lets the damage continue. The plants die, the order ships late, the customers leave. Worse, it usually isn't even true — there *was* a cheap test available; the freezer just declined to look. Refusing to decide is itself a decision, and under genuine uncertainty it's almost always the worst one.

## Overreach still loses

The opposite error is just as wrong: grabbing one rival and acting as if it were settled. "Obviously it's the e-readers — stop stocking print." "Fire the new chef." When the evidence truly hasn't decided, committing *past* it is reckless, and you'll often pay for fixing the wrong thing. The correct posture is the narrow path between freezing and overreaching: provisional commitment plus a named test, with the trigger that would flip you ready in advance.

## In the real world

A web team faces daily slowdowns that fit two stories equally: a slow database query or a noisy neighbor on shared hosting. The freeze: "intermittent bugs are impossible to pin down — just restart it." The overreach: "must be the host — migrate everything today." The constructive move: turn on query profiling and CPU-steal monitoring together so the next slowdown reveals which signal it rides, and meanwhile drop a cache in front of the suspect query — a no-regret bet that blunts the slow-query case and buys headroom against a noisy neighbor too. Within a day the data that was "undecidable" has decided, and you never stopped shipping.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
