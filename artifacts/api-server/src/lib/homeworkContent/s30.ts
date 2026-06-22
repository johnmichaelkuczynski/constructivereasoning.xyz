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
      "A startup's spreadsheet shows it turns profitable in 18 months, but the whole timeline rests on a single typed-in assumption that revenue grows 5% every month forever. Which lead best follows?",
    mcOptions: [
      {
        text: "Growth can swing in any direction, so financial models are guesswork and no timeline can be planned around.",
        credit: 0,
      },
      {
        text: "The 18-month date is propped up almost entirely by the 5% figure, so re-run the model across 3%, 4%, 6%, and 7%, and across a band of churn and pricing values; trust the timeline only if profitability still lands near 18 months across that range, and flag it as fragile if dropping to 4% alone pushes break-even past 30 months.",
        credit: 1.0,
      },
      {
        text: "Re-run the model once at a slightly lower growth rate to see whether it still works.",
        credit: 0.6,
      },
      {
        text: "The forecast looks solid enough to plan around.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The 18-month date is propped up almost entirely by the 5% figure, so re-run the model across 3%, 4%, 6%, and 7%, and across a band of churn and pricing values; trust the timeline only if profitability still lands near 18 months across that range, and flag it as fragile if dropping to 4% alone pushes break-even past 30 months.",
    explanation:
      "Top credit isolates the one shaky input and stress-tests the conclusion across a plausible band, keeping it only if it survives; the 'guesswork, can't plan anything' option refuses to test and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A coach concludes a new warm-up drill cut his sprinters' 40-meter times, but the times were taken with handheld stopwatches placed by a different assistant each week. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The drill clearly works, so make every athlete on the team do it starting tomorrow.",
        credit: 0,
      },
      {
        text: "The drill seems to be helping the sprinters.",
        credit: 0.3,
      },
      {
        text: "The improvement could be timing noise from inconsistent stopwatch starts, so re-measure with electronic gates, re-check whether the gain survives a ±0.15s placement allowance, and compare drill-doers against a matched group who skipped it; keep the conclusion only if the edge holds once the measurement wobble is removed.",
        credit: 1.0,
      },
      {
        text: "Re-time the sprinters once more by hand to confirm the gain.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The improvement could be timing noise from inconsistent stopwatch starts, so re-measure with electronic gates, re-check whether the gain survives a ±0.15s placement allowance, and compare drill-doers against a matched group who skipped it; keep the conclusion only if the edge holds once the measurement wobble is removed.",
    explanation:
      "The strongest lead perturbs the shaky measurement assumption and only trusts the result if it survives; rolling the drill out to everyone treats a fragile, possibly-noise result as solid and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A home baker triples a cake recipe for a party and the batter looks perfect, so she concludes the scaled-up cake will bake in the same 35 minutes — assuming her oven heats a triple batch as evenly as a single one. Which lead is strongest?",
    mcOptions: [
      {
        text: "Bake the triple batch and test the center with a skewer at 30, 35, and 45 minutes, since the 35-minute figure leans on the assumption of even heating; a larger mass holds cold longer, so trust the time only if the center sets near 35 minutes and treat it as fragile if the middle is still wet then.",
        credit: 1.0,
      },
      {
        text: "Set a timer for 35 minutes and pull the cake out then.",
        credit: 0.3,
      },
      {
        text: "Baking times are unpredictable with big batches, so there's no point estimating and you just have to wing it.",
        credit: 0,
      },
      {
        text: "Check the cake once near the 35-minute mark before deciding.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Bake the triple batch and test the center with a skewer at 30, 35, and 45 minutes, since the 35-minute figure leans on the assumption of even heating; a larger mass holds cold longer, so trust the time only if the center sets near 35 minutes and treat it as fragile if the middle is still wet then.",
    explanation:
      "Top credit names the load-bearing 'even heating' assumption and probes whether the time survives a tripled mass; the 'unpredictable, just wing it' option refuses to test and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "An online store's A/B test reports that a new checkout button lifted average order value by 22%, but one customer who bought a $9,000 order happened to land in the new-button group. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The button raised order value by 22%, so ship it to all users today.",
        credit: 0,
      },
      {
        text: "The new button seems to lift order value.",
        credit: 0.3,
      },
      {
        text: "The 22% rests heavily on one $9,000 outlier, so recompute the lift with that order removed, recompute using the median rather than the mean, and check whether the effect holds across the first and second halves of the test window; keep the claim only if it survives dropping the outlier.",
        credit: 1.0,
      },
      {
        text: "Recompute the average once without the big order to sanity-check it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The 22% rests heavily on one $9,000 outlier, so recompute the lift with that order removed, recompute using the median rather than the mean, and check whether the effect holds across the first and second halves of the test window; keep the claim only if it survives dropping the outlier.",
    explanation:
      "The richest lead perturbs the single data point the conclusion leans on and only trusts it if the lift persists; shipping immediately treats an outlier-driven result as robust and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A machine shop calculates that a new cutting feed-rate will hold parts within tolerance, but the calculation assumes the shop's lone caliper, last calibrated two years ago, reads true. Which lead is strongest?",
    mcOptions: [
      {
        text: "Re-measure a batch of finished parts with a freshly calibrated gauge and a second independent gauge, since the tolerance claim rests on the uncalibrated caliper; trust the feed-rate only if the parts pass under both gauges and treat it as fragile if a small calibration offset would push parts out of spec.",
        credit: 1.0,
      },
      {
        text: "The parts seem to be within tolerance.",
        credit: 0.3,
      },
      {
        text: "Measurement always has error, so you can never really know if parts are in tolerance and shouldn't bother checking.",
        credit: 0,
      },
      {
        text: "Have someone re-measure a few parts with the same caliper to confirm.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Re-measure a batch of finished parts with a freshly calibrated gauge and a second independent gauge, since the tolerance claim rests on the uncalibrated caliper; trust the feed-rate only if the parts pass under both gauges and treat it as fragile if a small calibration offset would push parts out of spec.",
    explanation:
      "Top credit perturbs the unverified instrument assumption with independent gauges and accepts the result only if it holds; the 'can never know, don't bother' option refuses the test and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A gardener finds that wide plant spacing gave the biggest tomato yield this season and concludes wide spacing is best — but this was an unusually dry, sunny summer. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Wide spacing is best, so commit the whole plot to it next year.",
        credit: 0,
      },
      {
        text: "Wide spacing seemed to do better this year.",
        credit: 0.3,
      },
      {
        text: "The win may hinge on this season's dry weather, so trial wide and narrow spacing side by side again under a normal-rainfall year, check whether wide spacing's edge shrinks when it's wet and crowding helps retain moisture, and watch whether the ranking flips; commit only if wide spacing wins across both weather types.",
        credit: 1.0,
      },
      {
        text: "Try wide spacing again next year to see if it wins twice.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The win may hinge on this season's dry weather, so trial wide and narrow spacing side by side again under a normal-rainfall year, check whether wide spacing's edge shrinks when it's wet and crowding helps retain moisture, and watch whether the ranking flips; commit only if wide spacing wins across both weather types.",
    explanation:
      "The strongest lead perturbs the unstated 'typical weather' assumption and keeps the conclusion only if it survives a wetter year; betting the whole plot on one dry season treats a fragile result as solid and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A man records that a magnesium supplement lowered his blood pressure, but he measured before the pill each morning and after it each evening — comparing readings taken at different times of day. Which lead is strongest?",
    mcOptions: [
      {
        text: "Re-test by measuring at the same time of day on and off the supplement, since the drop may just reflect morning-vs-evening swings; alternate supplement and placebo weeks with matched timing, and keep the conclusion only if the reduction survives once the time-of-day difference is removed.",
        credit: 1.0,
      },
      {
        text: "The supplement appears to lower his blood pressure.",
        credit: 0.3,
      },
      {
        text: "Blood pressure bounces around so much that you can't conclude anything from home readings, so there's nothing to test.",
        credit: 0,
      },
      {
        text: "Take a few more evening readings to confirm the lower numbers.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Re-test by measuring at the same time of day on and off the supplement, since the drop may just reflect morning-vs-evening swings; alternate supplement and placebo weeks with matched timing, and keep the conclusion only if the reduction survives once the time-of-day difference is removed.",
    explanation:
      "Top credit perturbs the confounded measurement-timing assumption and trusts the result only if it persists with matched timing; the 'can't conclude anything, nothing to test' option refuses and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A school reports that its after-school tutoring program raised math scores versus a comparison class, but no one checked whether the two classes started the year at the same level. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The program raised scores, so expand it to every grade immediately.",
        credit: 0,
      },
      {
        text: "Tutoring seems to have improved math scores.",
        credit: 0.3,
      },
      {
        text: "The gain rests on the assumption the classes were equal going in, so pull each class's prior-year baseline, recompute the effect as change-from-baseline rather than end score, and re-check it within students matched on starting level; keep the conclusion only if the advantage survives controlling for the starting gap.",
        credit: 1.0,
      },
      {
        text: "Glance at last year's averages to roughly confirm the classes were similar.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The gain rests on the assumption the classes were equal going in, so pull each class's prior-year baseline, recompute the effect as change-from-baseline rather than end score, and re-check it within students matched on starting level; keep the conclusion only if the advantage survives controlling for the starting gap.",
    explanation:
      "The richest lead perturbs the 'equal baseline' assumption and only trusts the effect if it holds after matching; expanding immediately treats a possibly-baseline-driven result as robust and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A photographer concludes a new lens is sharper than her old one after comparing two handheld shots — but each was a single frame and she isn't sure the shutter speed was high enough to freeze camera shake. Which lead is strongest?",
    mcOptions: [
      {
        text: "Lens tests are too dependent on technique to ever say one lens is sharper, so it isn't worth comparing.",
        credit: 0,
      },
      {
        text: "Re-shoot both lenses on a tripod with a remote release at several apertures and multiple frames each, since the verdict may just reflect a shaky handheld frame; keep the 'sharper' conclusion only if the new lens still wins once camera shake is removed and across the frames.",
        credit: 1.0,
      },
      {
        text: "The new lens looks sharper in the photo.",
        credit: 0.3,
      },
      {
        text: "Take one more handheld pair to double-check the new lens looks sharper.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Re-shoot both lenses on a tripod with a remote release at several apertures and multiple frames each, since the verdict may just reflect a shaky handheld frame; keep the 'sharper' conclusion only if the new lens still wins once camera shake is removed and across the frames.",
    explanation:
      "Top credit removes the shaky-frame assumption and accepts the verdict only if it survives a controlled retest; the 'too dependent on technique to ever say' option refuses to test and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A retailer rearranged a store's layout in November, saw December sales jump, and concluded the new layout works — assuming this holiday season was comparable to last year's. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The layout works, so roll it out chain-wide right away.",
        credit: 0,
      },
      {
        text: "The new layout seems to have boosted sales.",
        credit: 0.3,
      },
      {
        text: "December's jump may be the holiday tide, so compare this December against last December's lift, hold the new layout into a quiet non-holiday month to see if the gain persists, and test it in a twin store that kept the old layout; keep the conclusion only if the new layout still leads outside the holiday surge.",
        credit: 1.0,
      },
      {
        text: "Compare December's sales to November's to check the layout helped.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "December's jump may be the holiday tide, so compare this December against last December's lift, hold the new layout into a quiet non-holiday month to see if the gain persists, and test it in a twin store that kept the old layout; keep the conclusion only if the new layout still leads outside the holiday surge.",
    explanation:
      "The strongest lead perturbs the 'comparable season' assumption and only trusts the layout if its edge survives outside the holiday surge; a chain-wide rollout treats a seasonally-flattered result as robust and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "An engineer's load test shows the web service handles 10,000 requests per second, but the test ran with a fully warmed cache that served almost every request from memory. Which lead is strongest?",
    mcOptions: [
      {
        text: "Re-run the load test from a cold cache and at realistic cache-hit rates, since the 10k figure leans on a warm-cache assumption that won't hold after a deploy or restart; trust the capacity number only if it survives the cache-miss conditions the service will actually face.",
        credit: 1.0,
      },
      {
        text: "The service seems to handle the load fine.",
        credit: 0.3,
      },
      {
        text: "Real traffic is too unpredictable to capacity-plan for, so load tests don't tell you anything actionable.",
        credit: 0,
      },
      {
        text: "Run the same warm-cache test again to confirm the 10k number.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Re-run the load test from a cold cache and at realistic cache-hit rates, since the 10k figure leans on a warm-cache assumption that won't hold after a deploy or restart; trust the capacity number only if it survives the cache-miss conditions the service will actually face.",
    explanation:
      "Top credit perturbs the warm-cache assumption to match real conditions and accepts the number only if it holds; the 'too unpredictable, tells you nothing' option refuses to test and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A trader backtests a strategy that shows 30% annual returns, but the backtest ignores trading commissions and starts on a date right after a market crash. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The strategy returns 30% a year, so move the whole portfolio into it now.",
        credit: 0,
      },
      {
        text: "The strategy looks profitable in the backtest.",
        credit: 0.3,
      },
      {
        text: "The 30% may hinge on a flattering start date and zero costs, so re-run the backtest with realistic commissions and slippage, slide the start date across several months and market regimes, and check whether returns stay positive; trust it only if profit survives the costs and start-date shifts.",
        credit: 1.0,
      },
      {
        text: "Re-run the backtest once with commissions subtracted to be safe.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The 30% may hinge on a flattering start date and zero costs, so re-run the backtest with realistic commissions and slippage, slide the start date across several months and market regimes, and check whether returns stay positive; trust it only if profit survives the costs and start-date shifts.",
    explanation:
      "The richest lead perturbs both shaky assumptions and keeps the result only if profit persists; moving the whole portfolio in treats a fragile, assumption-flattered backtest as solid and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A logistics planner's software says a new delivery route saves 40 minutes, but the estimate uses a single fixed travel-time figure for every road regardless of the hour. Which lead is strongest?",
    mcOptions: [
      {
        text: "Re-estimate the route using time-of-day traffic profiles for the actual delivery window and across a few typical and heavy-traffic days, since the 40-minute saving rests on a constant-speed assumption; keep the route only if it still beats the old one once rush-hour slowdowns are folded in.",
        credit: 1.0,
      },
      {
        text: "The new route appears to save time.",
        credit: 0.3,
      },
      {
        text: "Traffic is so variable that route estimates are meaningless and there's nothing worth modeling.",
        credit: 0,
      },
      {
        text: "Drive the new route once to check it feels faster.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Re-estimate the route using time-of-day traffic profiles for the actual delivery window and across a few typical and heavy-traffic days, since the 40-minute saving rests on a constant-speed assumption; keep the route only if it still beats the old one once rush-hour slowdowns are folded in.",
    explanation:
      "Top credit perturbs the constant-speed assumption with realistic traffic and trusts the saving only if it survives; the 'meaningless, nothing to model' option refuses to test and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A home brewer concludes a new yeast ferments his beer in exactly five days, but his garage where the carboy sits swung between 18°C and 26°C during that batch and he assumed a steady temperature. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The yeast ferments in five days, so schedule every future batch on a strict five-day plan.",
        credit: 0,
      },
      {
        text: "Five days seems about right for this yeast.",
        credit: 0.3,
      },
      {
        text: "The five-day figure leans on an unstated steady-temperature assumption, so re-run the batch in a temperature-controlled space and at a cooler and warmer setpoint, track gravity readings rather than the calendar, and keep the five-day claim only if fermentation completes near five days across the temperature band.",
        credit: 1.0,
      },
      {
        text: "Brew one more batch in the garage to see if it finishes in five days again.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The five-day figure leans on an unstated steady-temperature assumption, so re-run the batch in a temperature-controlled space and at a cooler and warmer setpoint, track gravity readings rather than the calendar, and keep the five-day claim only if fermentation completes near five days across the temperature band.",
    explanation:
      "The strongest lead perturbs the steady-temperature assumption and trusts the timing only if it holds across the band; locking every batch to a strict five days treats a temperature-sensitive result as fixed and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A company's customer-satisfaction survey reports 85% satisfied, but only 12% of customers responded, and the report assumes non-responders feel the same as responders. Which lead is strongest?",
    mcOptions: [
      {
        text: "Test the no-difference assumption by sampling a random slice of non-responders with a short follow-up, comparing satisfaction of late versus early responders, and bounding the worst case if every non-responder were unhappy; trust the 85% only if it holds up when non-responders are probed.",
        credit: 1.0,
      },
      {
        text: "Customers are about 85% satisfied.",
        credit: 0.3,
      },
      {
        text: "Surveys never reach everyone, so satisfaction is fundamentally unknowable and the number tells you nothing.",
        credit: 0,
      },
      {
        text: "Send the survey out one more time to gather a few more responses.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Test the no-difference assumption by sampling a random slice of non-responders with a short follow-up, comparing satisfaction of late versus early responders, and bounding the worst case if every non-responder were unhappy; trust the 85% only if it holds up when non-responders are probed.",
    explanation:
      "Top credit perturbs the 'non-responders are the same' assumption and accepts the figure only if it survives probing; the 'fundamentally unknowable, tells you nothing' option refuses to test and earns zero.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A structural engineer signs off that a pedestrian bridge is safe because its calculated load capacity exceeds expected foot traffic by 30%, but that 30% margin assumes everyone weighs the textbook-average value and never bunches up at the center. Which lead best follows?",
    mcOptions: [
      {
        text: "Re-run the load case with a heavier average weight and a crowd packed at midspan, since the 30% margin rests on average-weight and even-spacing assumptions; keep the safe verdict only if the bridge still clears its limit under a dense, heavier worst-case crowd and treat it as unsafe if a plausible packed crowd erases the margin.",
        credit: 1.0,
      },
      {
        text: "The bridge has a 30% margin, so it's clearly safe to open.",
        credit: 0,
      },
      {
        text: "The bridge seems to have enough margin.",
        credit: 0.3,
      },
      {
        text: "Re-do the calculation once with slightly heavier people to be safe.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'fragile margin' worry from the rival 'the 30% buffer makes it safe regardless,' and say what result would refute your worry.",
      modelAnswer:
        "Cheapest test: recompute the same bridge under a dense midspan crowd at a heavier average body weight and see whether the load still sits under the limit. My worry is refuted if the bridge clears its capacity even in that packed, heavier worst case, meaning the 30% margin is robust rather than an artifact of optimistic assumptions.",
      yieldAnchors: [
        "Calculated capacity exceeds expected traffic by 30%",
        "The margin assumes textbook-average body weight",
        "The margin assumes people never bunch at the center",
      ],
      riskAnchors: [
        "A heavier average weight shrinks or erases the margin",
        "A crowd packed at midspan pushes load over the limit",
        "The verdict holds only under the optimistic spacing",
      ],
      defeatedBy: [
        "The 30% buffer makes it safe no matter how the crowd behaves",
        "Bridge safety can't be assessed so there's no point checking",
      ],
    },
    correctAnswer:
      "Re-run the load case with a heavier average weight and a crowd packed at midspan, since the 30% margin rests on average-weight and even-spacing assumptions; keep the safe verdict only if the bridge still clears its limit under a dense, heavier worst-case crowd and treat it as unsafe if a plausible packed crowd erases the margin.",
    explanation:
      "Full credit perturbs the optimistic weight and spacing assumptions and pairs it with a cheap recompute that names its own refutation; declaring it safe because '30% margin' treats a fragile buffer as robust and earns zero.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A marketing team concludes that paid search drives most of their sales because their last-click attribution model credits it for 60% of conversions — but that model gives all the credit to whatever ad a buyer clicked last. Which lead is strongest?",
    mcOptions: [
      {
        text: "Paid search drives the most sales, so shift the whole budget into it.",
        credit: 0,
      },
      {
        text: "Re-score the same conversions under first-click and multi-touch models and run a geo holdout where paid search is paused, since the 60% rests on the last-click rule; keep the 'paid search drives sales' conclusion only if its share stays high across attribution models and sales actually drop when it's paused.",
        credit: 1.0,
      },
      {
        text: "Paid search looks like the biggest sales driver.",
        credit: 0.3,
      },
      {
        text: "Try a different attribution model once to compare the numbers.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'attribution-artifact' worry from the rival 'paid search genuinely drives the sales,' and say what result would refute your worry.",
      modelAnswer:
        "Cheapest test: pause paid search in a few matched regions for two weeks and see whether sales there actually fall relative to control regions. My worry is refuted if sales drop sharply where paid search is off, showing the channel really drives conversions rather than just catching credit at the last click.",
      yieldAnchors: [
        "Last-click model credits paid search with 60% of conversions",
        "The model assigns all credit to the final ad clicked",
        "The conclusion drives a budget shift",
      ],
      riskAnchors: [
        "First-click or multi-touch models cut paid search's share",
        "A geo holdout shows little sales drop when it's paused",
        "Other channels seed the buyers paid search closes",
      ],
      defeatedBy: [
        "Paid search genuinely drives most sales regardless of model",
        "Attribution is hopeless so no channel can be judged",
      ],
    },
    correctAnswer:
      "Re-score the same conversions under first-click and multi-touch models and run a geo holdout where paid search is paused, since the 60% rests on the last-click rule; keep the 'paid search drives sales' conclusion only if its share stays high across attribution models and sales actually drop when it's paused.",
    explanation:
      "Full credit perturbs the attribution assumption across models and a holdout, and names a pause test that could refute it; shifting the whole budget on one model's number treats a model-dependent result as solid and earns zero.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A baker's recipe says a loaf doubles in size in 90 minutes of proofing, a figure he worked out assuming his bread flour's protein content matches the bag he used that day. He's now switching to a cheaper flour. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Proof a test loaf of the new flour and judge rise by volume rather than the clock, and proof a second loaf of the old flour alongside it, since the 90-minute figure leans on the original flour's protein; keep the 90-minute rule only if the cheaper flour also doubles near 90 minutes and treat it as flour-specific if it lags.",
        credit: 1.0,
      },
      {
        text: "Proofing time depends on too many things to predict, so just set a timer and hope.",
        credit: 0,
      },
      {
        text: "The dough should still take about 90 minutes.",
        credit: 0.3,
      },
      {
        text: "Give the new flour a bit longer just in case before baking.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'flour-dependent timing' worry from the rival '90 minutes works for any flour,' and say what result would refute your worry.",
      modelAnswer:
        "Cheapest test: proof a loaf of the cheap flour next to a loaf of the original and compare how long each takes to double in volume. My worry is refuted if the cheaper flour also doubles by about 90 minutes, showing the proofing time is robust to the flour swap rather than tied to the original's protein.",
      yieldAnchors: [
        "The loaf doubles in 90 minutes with the original flour",
        "The 90-minute figure assumes a specific protein content",
        "He is switching to a cheaper flour",
      ],
      riskAnchors: [
        "The cheaper flour doubles noticeably slower than 90 minutes",
        "Judging by volume reveals under-proofing at 90 minutes",
        "The original flour still doubles near 90 in the side test",
      ],
      defeatedBy: [
        "90 minutes works for any flour regardless of protein",
        "Proofing is unpredictable so timing it is pointless",
      ],
    },
    correctAnswer:
      "Proof a test loaf of the new flour and judge rise by volume rather than the clock, and proof a second loaf of the old flour alongside it, since the 90-minute figure leans on the original flour's protein; keep the 90-minute rule only if the cheaper flour also doubles near 90 minutes and treat it as flour-specific if it lags.",
    explanation:
      "Full credit perturbs the flour-protein assumption with a side-by-side proof that names its refutation; the 'too many things to predict, just hope' option refuses to test and earns zero.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A clinic concludes that a new check-in kiosk cut average wait times from 25 to 15 minutes, but the before-and-after comparison assumes the mix of patients (routine vs. complex visits) stayed the same across the two months. Which lead is strongest?",
    mcOptions: [
      {
        text: "The kiosk cut waits by 10 minutes, so install one in every clinic now.",
        credit: 0,
      },
      {
        text: "The kiosk seems to have shortened waits.",
        credit: 0.3,
      },
      {
        text: "Split the wait times by visit type and recompute within routine and complex visits separately, since the 10-minute drop assumes a stable patient mix; check whether the after-period simply had more routine visits, and keep the kiosk conclusion only if waits fell within each visit type.",
        credit: 1.0,
      },
      {
        text: "Look at the overall patient counts to roughly check the mix held.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'patient-mix shift' worry from the rival 'the kiosk really cut waits,' and say what result would refute your worry.",
      modelAnswer:
        "Cheapest test: recompute the average wait separately for routine and complex visits in both months and see whether each type's wait fell. My worry is refuted if waits dropped within both visit types, showing the kiosk improved flow rather than the after-period just carrying easier patients.",
      yieldAnchors: [
        "Average wait fell from 25 to 15 minutes",
        "The comparison assumes a stable routine-vs-complex mix",
        "The two periods are different months",
      ],
      riskAnchors: [
        "The after-period had a higher share of routine visits",
        "Within-type waits barely changed",
        "Complex-visit waits stayed flat despite the kiosk",
      ],
      defeatedBy: [
        "The kiosk cut waits regardless of who showed up",
        "Wait times are too noisy to evaluate at all",
      ],
    },
    correctAnswer:
      "Split the wait times by visit type and recompute within routine and complex visits separately, since the 10-minute drop assumes a stable patient mix; check whether the after-period simply had more routine visits, and keep the kiosk conclusion only if waits fell within each visit type.",
    explanation:
      "Full credit perturbs the stable-mix assumption by recomputing within visit types and names the refuting check; installing kiosks everywhere on the raw average treats a mix-sensitive result as robust and earns zero.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An analyst's model says a basketball team is title-favorite, but the rating leans almost entirely on the team's strong home record and assumes home-court advantage stays as large in the neutral-court playoffs. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Re-rate the team using only road and neutral-site games and shrink the home-court bonus toward the playoff reality, since the favorite tag rests on a large home edge; keep the favorite conclusion only if the team still rates on top once home advantage is dialed down.",
        credit: 1.0,
      },
      {
        text: "The team looks like the favorite.",
        credit: 0.3,
      },
      {
        text: "Playoffs are a coin flip anyway, so ratings are pointless and no favorite can be named.",
        credit: 0,
      },
      {
        text: "Glance at the team's road record to loosely sanity-check the rating.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'home-court-inflated rating' worry from the rival 'they're the genuine favorite,' and say what result would refute your worry.",
      modelAnswer:
        "Cheapest test: recompute the team's rating from road and neutral-court games only and see where it lands. My worry is refuted if the team still rates first using just road and neutral games, showing the favorite tag is robust rather than propped up by home-court advantage that vanishes in the playoffs.",
      yieldAnchors: [
        "The rating makes the team title-favorite",
        "It leans heavily on the home record",
        "It assumes home-court advantage persists at neutral sites",
      ],
      riskAnchors: [
        "The road-only rating drops the team out of first",
        "Shrinking the home bonus flips the favorite",
        "Neutral-site results undercut the home dominance",
      ],
      defeatedBy: [
        "They are the genuine favorite regardless of venue",
        "Playoffs are random so no favorite can be assessed",
      ],
    },
    correctAnswer:
      "Re-rate the team using only road and neutral-site games and shrink the home-court bonus toward the playoff reality, since the favorite tag rests on a large home edge; keep the favorite conclusion only if the team still rates on top once home advantage is dialed down.",
    explanation:
      "Full credit perturbs the home-court assumption and names a road-only recompute that could refute it; the 'playoffs are a coin flip, ratings pointless' option refuses to test and earns zero.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A data scientist reports a fraud-detection model is 95% accurate, but that figure comes from a test set drawn from last year's transactions and assumes this year's spending patterns look the same. Which lead is strongest?",
    mcOptions: [
      {
        text: "The model is 95% accurate, so deploy it to score live transactions immediately.",
        credit: 0,
      },
      {
        text: "The model seems accurate enough to use.",
        credit: 0.3,
      },
      {
        text: "Re-evaluate the model on the most recent transactions and on slices with new merchant types and spending shifts, since the 95% assumes the data distribution is unchanged; check accuracy by month, and deploy only if the score holds on current data rather than just last year's.",
        credit: 1.0,
      },
      {
        text: "Re-test the model on a fresh sample once before deploying.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'distribution-shift' worry from the rival 'the model is genuinely 95% accurate now,' and say what result would refute your worry.",
      modelAnswer:
        "Cheapest test: score the most recent month of transactions with known outcomes and measure accuracy there. My worry is refuted if the model still scores near 95% on current data, showing its accuracy is robust to the shift rather than tied to last year's spending patterns.",
      yieldAnchors: [
        "Reported accuracy is 95%",
        "The test set is last year's transactions",
        "The figure assumes spending patterns are unchanged",
      ],
      riskAnchors: [
        "Accuracy drops on the most recent month",
        "New merchant types degrade performance",
        "Month-by-month accuracy trends downward",
      ],
      defeatedBy: [
        "The model is 95% accurate now no matter how spending changed",
        "Model accuracy can't be known so testing is futile",
      ],
    },
    correctAnswer:
      "Re-evaluate the model on the most recent transactions and on slices with new merchant types and spending shifts, since the 95% assumes the data distribution is unchanged; check accuracy by month, and deploy only if the score holds on current data rather than just last year's.",
    explanation:
      "Full credit perturbs the unchanged-distribution assumption with fresh data and names the refuting recheck; deploying on last year's number treats a stale, fragile metric as robust and earns zero.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A homeowner calculates that rooftop solar pays for itself in 7 years, but the payback assumes today's electricity price holds flat for the whole period. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Recompute payback across a range of electricity-price paths — flat, slowly rising, and falling — since the 7-year figure hinges on a flat-price assumption; treat 7 years as solid only if payback stays close across the plausible price band and as fragile if a modest price drop stretches it past 12 years.",
        credit: 1.0,
      },
      {
        text: "Solar pays back in 7 years, so it's obviously worth installing.",
        credit: 0,
      },
      {
        text: "The payback looks reasonable.",
        credit: 0.3,
      },
      {
        text: "Redo the math once assuming prices rise a little.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'price-sensitive payback' worry from the rival '7 years holds regardless of prices,' and say what result would refute your worry.",
      modelAnswer:
        "Cheapest test: recompute the payback under a flat, a rising, and a falling electricity-price scenario and compare the years. My worry is refuted if payback stays near 7 years across all three price paths, showing the result is robust rather than dependent on prices never moving.",
      yieldAnchors: [
        "Payback is calculated at 7 years",
        "The figure assumes today's price holds flat",
        "The period spans many years of price uncertainty",
      ],
      riskAnchors: [
        "A modest price drop stretches payback past 12 years",
        "A rising-price path shortens payback sharply",
        "Payback swings widely across plausible price paths",
      ],
      defeatedBy: [
        "7-year payback holds regardless of future prices",
        "Future prices are unknowable so payback can't be estimated",
      ],
    },
    correctAnswer:
      "Recompute payback across a range of electricity-price paths — flat, slowly rising, and falling — since the 7-year figure hinges on a flat-price assumption; treat 7 years as solid only if payback stays close across the plausible price band and as fragile if a modest price drop stretches it past 12 years.",
    explanation:
      "Full credit perturbs the flat-price assumption across scenarios and names the refuting comparison; treating 7 years as obvious ignores a price-sensitive result and earns zero.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A professor sets a grading curve that he says is fair because the top 20% of each section get an A, an approach that assumes the two sections faced equally hard exams. Which lead is strongest?",
    mcOptions: [
      {
        text: "Compare the two sections' raw score distributions and the difficulty of their exam versions before curving, since the fairness rests on equal-difficulty exams; keep the top-20% curve only if the two exams scored comparably and switch to a difficulty-adjusted cutoff if one version was clearly harder.",
        credit: 1.0,
      },
      {
        text: "The curve seems fair.",
        credit: 0.3,
      },
      {
        text: "Grading fairness is subjective, so there's no way to check it and any curve is as good as another.",
        credit: 0,
      },
      {
        text: "Spot-check a couple of scores across sections to feel out fairness.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'unequal-difficulty' worry from the rival 'the top-20% curve is fair regardless,' and say what result would refute your worry.",
      modelAnswer:
        "Cheapest test: compare the two sections' raw score distributions and median scores on their exam versions. My worry is refuted if the distributions line up closely, showing the exams were of comparable difficulty and the top-20% curve is robust rather than rewarding whoever happened to get the easier paper.",
      yieldAnchors: [
        "The curve gives the top 20% of each section an A",
        "Fairness assumes equally hard exams",
        "There are two separate sections",
      ],
      riskAnchors: [
        "One section's raw scores run systematically lower",
        "The exam versions differ in median difficulty",
        "Equal cutoffs would shift who earns an A",
      ],
      defeatedBy: [
        "The top-20% curve is fair regardless of exam difficulty",
        "Fairness is subjective so no curve can be evaluated",
      ],
    },
    correctAnswer:
      "Compare the two sections' raw score distributions and the difficulty of their exam versions before curving, since the fairness rests on equal-difficulty exams; keep the top-20% curve only if the two exams scored comparably and switch to a difficulty-adjusted cutoff if one version was clearly harder.",
    explanation:
      "Full credit perturbs the equal-difficulty assumption by comparing distributions and names the refuting check; the 'fairness is subjective, nothing to check' option refuses to test and earns zero.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A house-flipper projects a 25% return on a renovation, but the figure assumes the rehab costs come in exactly at the contractor's initial estimate. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The flip returns 25%, so buy the house and start the rehab now.",
        credit: 0,
      },
      {
        text: "Recompute the return with rehab costs running 15% and 30% over the estimate and the sale price a notch below comps, since the 25% leans on the costs landing exactly as bid; proceed treating the deal as solid only if it still clears a worthwhile return under those overruns and as fragile if a routine 20% overrun wipes the profit out.",
        credit: 1.0,
      },
      {
        text: "The return looks good enough to go ahead.",
        credit: 0.3,
      },
      {
        text: "Pad the budget a little for overruns and re-check the return once.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'cost-overrun-fragile' worry from the rival 'the 25% return is solid,' and say what result would refute your worry.",
      modelAnswer:
        "Cheapest test: recompute the return assuming rehab costs come in 15–30% over the estimate and the sale lands slightly under comps. My worry is refuted if the deal still clears a healthy return under those routine overruns, showing the 25% is robust rather than hanging on the costs landing exactly as bid.",
      yieldAnchors: [
        "Projected return is 25%",
        "The figure assumes costs hit the initial estimate exactly",
        "Rehab estimates routinely run over",
      ],
      riskAnchors: [
        "A 20% cost overrun erases the profit",
        "A slightly lower sale price flips the deal negative",
        "The return swings wildly across plausible cost paths",
      ],
      defeatedBy: [
        "The 25% return holds no matter what the rehab costs",
        "Renovation costs are unknowable so flips can't be evaluated",
      ],
    },
    correctAnswer:
      "Recompute the return with rehab costs running 15% and 30% over the estimate and the sale price a notch below comps, since the 25% leans on the costs landing exactly as bid; proceed treating the deal as solid only if it still clears a worthwhile return under those overruns and as fragile if a routine 20% overrun wipes the profit out.",
    explanation:
      "Full credit perturbs the on-budget assumption across realistic overruns and names the refuting recompute; buying on the headline 25% treats a cost-fragile projection as solid and earns zero.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A 40-year-old uses a retirement calculator that projects she'll have enough to retire comfortably at 65, but the projection assumes her investments return a steady 8% every year with no bad stretches. In one paragraph, propose the strongest lead for how much to trust this projection and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the 'retire comfortably at 65' conclusion is only as trustworthy as its 8%-forever assumption, so the right move is to perturb that single load-bearing input and see whether the comfortable-retirement verdict survives. This is robust reasoning because it predicts checkable consequences: re-running the plan at 5%, 6%, and 7% average returns should show whether the verdict flips or merely shifts the retirement date by a year or two; running sequences with a market crash early versus late should reveal whether the order of returns, not just the average, breaks the plan; and stress cases with higher inflation should expose hidden fragility. I would test it by recomputing the projection across a band of return assumptions, by running historical and Monte-Carlo sequences that include bad stretches, and by checking how far returns can fall before the plan fails — then trusting 'retire at 65' only if it holds across most of that range and treating it as fragile, with a larger savings buffer, if a single point of lower return sinks it.",
      yieldAnchors: [
        "The calculator projects a comfortable retirement at 65",
        "It assumes a steady 8% annual return",
        "It assumes no bad market stretches",
      ],
      riskAnchors: [
        "The verdict survives recomputing at 5–7% returns",
        "An early crash sequence breaks the plan despite the same average",
        "The plan fails once returns drop below a modest threshold",
      ],
      defeatedBy: [
        "The plan is sound because the calculator said 8% works",
        "Markets are unknowable so retirement can't be planned at all",
        "Just assume 12% returns and retire even earlier",
      ],
    },
    correctAnswer:
      "The strongest lead is that the 'retire comfortably at 65' conclusion is only as trustworthy as its 8%-forever assumption, so the right move is to perturb that single load-bearing input and see whether the comfortable-retirement verdict survives. This is robust reasoning because it predicts checkable consequences: re-running the plan at 5%, 6%, and 7% average returns should show whether the verdict flips or merely shifts the retirement date by a year or two; running sequences with a market crash early versus late should reveal whether the order of returns, not just the average, breaks the plan; and stress cases with higher inflation should expose hidden fragility. I would test it by recomputing the projection across a band of return assumptions, by running historical and Monte-Carlo sequences that include bad stretches, and by checking how far returns can fall before the plan fails — then trusting 'retire at 65' only if it holds across most of that range and treating it as fragile, with a larger savings buffer, if a single point of lower return sinks it.",
    explanation:
      "Under CCR's inverted standard, 'markets are unknowable so you can't plan' earns near-zero and 'assume 12% and retire early' is the overreach the data doesn't support; top credit goes to perturbing the 8% assumption and trusting the verdict only insofar as it survives.",
  },
  {
    itemType: "written",
    prompt:
      "A restaurant owner's one downtown location is wildly profitable, and she's about to sign a lease on a second site in a quiet suburb, concluding the concept will succeed there too. Her profit estimate assumes the suburb gets the same lunchtime office-worker rush that drives the downtown store. In one paragraph, propose the strongest lead and how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the 'it'll succeed in the suburb too' conclusion rests almost entirely on assuming the downtown lunch rush transfers, so the move is to perturb that assumption and see whether profitability survives without it. This is robust reasoning because it generates checkable predictions: if the lunch rush is load-bearing, recomputing the second site's projection with suburban foot-traffic and weak midday demand should turn the profit negative; the downtown store's own sales should be concentrated in the lunch window, which receipts can confirm; and comparable suburban restaurants should show flat lunches and dinner-driven revenue. I would test it by pulling the downtown store's sales by hour to size the lunch dependence, by gathering foot-traffic and competitor revenue patterns for the specific suburb, and by re-running the second-site model under suburban demand — signing the lease only if the concept still pencils out when the lunch-rush assumption is removed, and otherwise redesigning around dinner or delivery before committing.",
      yieldAnchors: [
        "The downtown location is wildly profitable",
        "The profit estimate assumes the same lunch-rush demand",
        "The second site is in a quiet suburb",
      ],
      riskAnchors: [
        "The suburban projection goes negative without the lunch rush",
        "Downtown sales are concentrated in the lunch window",
        "Comparable suburban restaurants show weak midday traffic",
      ],
      defeatedBy: [
        "The concept worked downtown so it will obviously work anywhere",
        "Restaurant success is pure luck so there's nothing to estimate",
        "Open five suburban locations at once to capture the market",
      ],
    },
    correctAnswer:
      "The strongest lead is that the 'it'll succeed in the suburb too' conclusion rests almost entirely on assuming the downtown lunch rush transfers, so the move is to perturb that assumption and see whether profitability survives without it. This is robust reasoning because it generates checkable predictions: if the lunch rush is load-bearing, recomputing the second site's projection with suburban foot-traffic and weak midday demand should turn the profit negative; the downtown store's own sales should be concentrated in the lunch window, which receipts can confirm; and comparable suburban restaurants should show flat lunches and dinner-driven revenue. I would test it by pulling the downtown store's sales by hour to size the lunch dependence, by gathering foot-traffic and competitor revenue patterns for the specific suburb, and by re-running the second-site model under suburban demand — signing the lease only if the concept still pencils out when the lunch-rush assumption is removed, and otherwise redesigning around dinner or delivery before committing.",
    explanation:
      "The cautious 'success is pure luck, nothing to estimate' earns near-zero and 'open five at once' is the overreach the evidence defeats; top credit goes to perturbing the transferred-lunch-rush assumption and committing only if the conclusion survives it.",
  },
  {
    itemType: "written",
    prompt:
      "A researcher reports that a new fertilizer significantly raised crop yield, with the statistical test hinging on the assumption that the plot-by-plot yields follow a normal bell-curve distribution. A colleague notices a few plots had freakishly high yields. In one paragraph, propose the strongest lead for how much to trust the result and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the 'significant effect' verdict may rest on the fragile normality assumption, since a few extreme plots can drive a bell-curve test to significance, so the move is to perturb that assumption and see whether the conclusion holds. This is robust reasoning because it predicts checkable consequences: re-running the analysis with a method that doesn't assume normality, like a rank-based or permutation test, should reproduce the significant effect if it's real; recomputing with the extreme plots removed or down-weighted should leave the effect standing if it isn't an artifact of a few outliers; and examining the residuals should reveal whether the bell-curve assumption was reasonable at all. I would test it by running a nonparametric and a permutation test alongside the original, by repeating the analysis with outliers trimmed and winsorized, and by plotting the yield distribution — accepting 'the fertilizer works' only if the effect survives every method and treating it as fragile if it depends on a normality assumption the data violate.",
      yieldAnchors: [
        "The test reports a significant yield increase",
        "Significance hinges on a normal-distribution assumption",
        "A few plots had freakishly high yields",
      ],
      riskAnchors: [
        "A nonparametric test reproduces the significant effect",
        "Removing the extreme plots leaves the effect standing",
        "Residual plots show the normality assumption was violated",
      ],
      defeatedBy: [
        "The test was significant so the fertilizer definitely works",
        "Statistics can't be trusted so no agricultural claim is knowable",
        "Declare the fertilizer a breakthrough and sell it nationwide",
      ],
    },
    correctAnswer:
      "The strongest lead is that the 'significant effect' verdict may rest on the fragile normality assumption, since a few extreme plots can drive a bell-curve test to significance, so the move is to perturb that assumption and see whether the conclusion holds. This is robust reasoning because it predicts checkable consequences: re-running the analysis with a method that doesn't assume normality, like a rank-based or permutation test, should reproduce the significant effect if it's real; recomputing with the extreme plots removed or down-weighted should leave the effect standing if it isn't an artifact of a few outliers; and examining the residuals should reveal whether the bell-curve assumption was reasonable at all. I would test it by running a nonparametric and a permutation test alongside the original, by repeating the analysis with outliers trimmed and winsorized, and by plotting the yield distribution — accepting 'the fertilizer works' only if the effect survives every method and treating it as fragile if it depends on a normality assumption the data violate.",
    explanation:
      "The 'statistics can't be trusted, nothing knowable' refusal earns near-zero and 'sell it nationwide' is the overreach the outliers undercut; credit rewards perturbing the normality assumption and keeping the result only if it survives alternative methods.",
  },
  {
    itemType: "written",
    prompt:
      "A city retimed the traffic lights on a busy corridor and measured a 20% drop in congestion over the following week, concluding the new timing works. That week happened to have unusually mild, dry weather, and the before-period included two rainy days. In one paragraph, propose the strongest lead and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the 20% improvement conclusion leans on the unstated assumption that weather and travel demand were comparable across the two periods, so the move is to perturb that assumption and see whether the congestion drop survives. This is robust reasoning because it predicts checkable consequences: comparing only dry days before and after should preserve the improvement if the timing is what helped, while the gap should shrink toward zero if mild weather did the work; congestion on a parallel corridor that kept its old timing should be flat if the timing change is the real cause; and the improvement should persist into later weeks that include rain rather than evaporating. I would test it by recomputing congestion on weather-matched days, by using an untouched corridor as a control, and by tracking the corridor over several more weeks across varied weather — crediting the retiming only if the drop holds once the weather difference is removed and treating it as a weather artifact if matched-day congestion is unchanged.",
      yieldAnchors: [
        "Congestion fell 20% the week after retiming",
        "That week had unusually mild, dry weather",
        "The before-period included two rainy days",
      ],
      riskAnchors: [
        "Dry-day-only comparison preserves the improvement",
        "A control corridor with old timing stays unchanged",
        "The drop persists into later weeks that include rain",
      ],
      defeatedBy: [
        "Congestion dropped so the new timing obviously works",
        "Traffic is too chaotic to evaluate any timing change",
        "Roll the new timing out to every corridor in the city at once",
      ],
    },
    correctAnswer:
      "The strongest lead is that the 20% improvement conclusion leans on the unstated assumption that weather and travel demand were comparable across the two periods, so the move is to perturb that assumption and see whether the congestion drop survives. This is robust reasoning because it predicts checkable consequences: comparing only dry days before and after should preserve the improvement if the timing is what helped, while the gap should shrink toward zero if mild weather did the work; congestion on a parallel corridor that kept its old timing should be flat if the timing change is the real cause; and the improvement should persist into later weeks that include rain rather than evaporating. I would test it by recomputing congestion on weather-matched days, by using an untouched corridor as a control, and by tracking the corridor over several more weeks across varied weather — crediting the retiming only if the drop holds once the weather difference is removed and treating it as a weather artifact if matched-day congestion is unchanged.",
    explanation:
      "Under CCR, 'traffic is too chaotic to evaluate' earns near-zero and a citywide rollout is the overreach the weather confound forbids; top credit goes to perturbing the comparable-weather assumption and trusting the result only if it survives weather-matched comparison and a control.",
  },
  {
    itemType: "written",
    prompt:
      "A manufacturer is about to switch to a cheaper bolt supplier that quotes a price saving the purchasing team says will cut unit costs 8%, a figure that assumes the new bolts perform identically to the current ones with no extra failures or rework. In one paragraph, propose the strongest lead and how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the 8% savings conclusion rests entirely on the assumption that the cheaper bolts perform identically, so the move is to perturb that assumption with even a small quality difference and see whether the saving survives. This is robust reasoning because it predicts checkable consequences: recomputing the net saving with a modest increase in failure or rework rates should show whether the 8% holds or collapses, since warranty claims and line stoppages can dwarf the per-bolt price gap; lab testing of the cheap bolts for tensile strength and fatigue should reveal whether identical performance is even plausible; and a limited production run using the new bolts should expose real-world defect rates before a full switch. I would test it by stress-testing samples of both bolts to failure, by running a pilot batch and tracking defects and rework, and by recomputing total cost across a band of plausible failure rates — committing to the switch only if the saving stays positive even when the new bolts perform somewhat worse, and holding off if a slight quality drop erases the 8%.",
      yieldAnchors: [
        "The cheaper supplier quotes an 8% unit-cost saving",
        "The figure assumes identical bolt performance",
        "It assumes no extra failures or rework",
      ],
      riskAnchors: [
        "A small rise in failure rate erases the net saving",
        "Lab tests show the cheap bolts are weaker",
        "A pilot batch reveals higher defect or rework rates",
      ],
      defeatedBy: [
        "The bolts are cheaper so switching obviously saves 8%",
        "Quality is unknowable until production so don't bother testing",
        "Switch all product lines to the cheap bolt immediately",
      ],
    },
    correctAnswer:
      "The strongest lead is that the 8% savings conclusion rests entirely on the assumption that the cheaper bolts perform identically, so the move is to perturb that assumption with even a small quality difference and see whether the saving survives. This is robust reasoning because it predicts checkable consequences: recomputing the net saving with a modest increase in failure or rework rates should show whether the 8% holds or collapses, since warranty claims and line stoppages can dwarf the per-bolt price gap; lab testing of the cheap bolts for tensile strength and fatigue should reveal whether identical performance is even plausible; and a limited production run using the new bolts should expose real-world defect rates before a full switch. I would test it by stress-testing samples of both bolts to failure, by running a pilot batch and tracking defects and rework, and by recomputing total cost across a band of plausible failure rates — committing to the switch only if the saving stays positive even when the new bolts perform somewhat worse, and holding off if a slight quality drop erases the 8%.",
    explanation:
      "The 'don't bother testing' refusal earns near-zero and an immediate all-lines switch is the overreach the untested quality assumption forbids; credit rewards perturbing the identical-performance assumption and committing only if the saving is robust to a realistic quality drop.",
  },
];

export const section: SectionContent = {
  slug: "robustness-perturbation",
  title: "Robustness Under Perturbation",
  weekNumber: 4,
  blurb:
    "Trust the conclusions that survive when you jiggle the shaky assumptions and inputs they rest on; a conclusion that flips under a small, reasonable change is fragile, not strong.",
  lectureTitle:
    "4.6 Robustness Under Perturbation: trusting conclusions that survive changed assumptions",
  body: `# Robustness Under Perturbation

A conclusion is never just the data — it is the data run through a stack of assumptions. Change one assumption and the conclusion can stand firm or topple. Reflexive caution says "since the assumptions might be wrong, we can't conclude anything." The reckless opposite says "the model gave an answer, so the answer is true." Constructive Critical Reasoning takes the middle, harder path: find the shaky assumptions, *perturb* them, and trust the conclusion exactly as far as it survives the jiggling. A result that holds across a band of reasonable inputs has earned your confidence; one that flips when you nudge a single number has not.

## Shaky assumptions are where conclusions break

Every forecast, test, and estimate smuggles in inputs that could have been otherwise: a growth rate, a calibration, an even-heating oven, a stable patient mix, returns that never crash. The first move is to *name* the load-bearing ones — the assumptions the conclusion would not survive losing. You don't audit the decorative inputs; you find the one or two that are carrying the whole result and that you are least sure about.

## Perturb the inputs, watch the output

Robustness is tested by deliberately varying the shaky input and re-running the conclusion. Re-run the financial model at 3% and 7% as well as 5%. Recompute the average with the outlier removed. Re-time the sprinters with electronic gates. Re-score the conversions under three attribution models. The question is always the same: *does the conclusion stay put, or does it move?* Naming the specific perturbations — and the band of values you tried — is the work, exactly as naming concrete tests was the work in earlier sections.

## Robust vs. fragile: the flip test

A conclusion is **robust** if it survives every reasonable perturbation and **fragile** if a small, plausible change flips it. "Profitable in 18 months whether growth is 4% or 6%" is robust. "Profitable in 18 months at 5%, but break-even slides past 30 months at 4%" is fragile, and you should treat it as such — hedge it, buffer it, or withhold the strong claim. Robustness is not all-or-nothing: map the boundary where the conclusion breaks, because that boundary tells you how much to trust it and how much margin to keep.

## Why the "we can't know" dodge loses

"The assumptions might be wrong, so nothing can be concluded" earns zero because it refuses to do the one thing that would settle the matter: vary the assumption and look. You don't escape fragile assumptions by throwing up your hands; you escape them by testing whether they actually drive the answer. Often the conclusion turns out to be perfectly robust, and the shrug would have thrown away a real result.

## Overreach still loses

The opposite failure is just as wrong: taking a model's output at face value and acting on it hard when it rests on one untested assumption — shipping the A/B winner that hangs on a single big order, opening five stores on one season's data, switching every product line to an untested bolt. Trusting a fragile conclusion as if it were robust is reckless overreach, and the data that exposes the fragility defeats it.

## In the real world

A team's backtest shows a 30% annual return and they want to move the whole portfolio in. The dodge: "markets are unknowable, so don't bother." The overreach: "30% — go all in." The robust move: re-run the backtest with realistic commissions, slide the start date across several market regimes, and add slippage. If the strategy still clears a solid return across all of that, commit with confidence; if profit evaporates the moment costs are real or the start date moves a month, you've learned the 30% was an artifact — and the perturbation, not a shrug, is what told you.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
