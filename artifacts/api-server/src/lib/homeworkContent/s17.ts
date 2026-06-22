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
      "A bistro's Tuesday-dinner revenue fell by a third last month while every other night held steady. Three things changed around then: a rival opened two blocks away, the regular Tuesday chef went on leave, and the city began Tuesday-night road work on the main approach. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Restaurant revenue swings for countless reasons, so this drop isn't worth chasing.",
        credit: 0,
      },
      {
        text: "Something about Tuesdays is now hurting sales.",
        credit: 0.3,
      },
      {
        text: "The three live rivals are the new competitor, the substitute chef, and the road work; separate them by checking whether the loss is concentrated in walk-ins (road work), in repeat diners who ask for the usual chef (chef), or in customers who mention the competitor, and by watching whether revenue rebounds the week the chef returns or the road reopens.",
        credit: 1.0,
      },
      {
        text: "It is probably the road work; we could see if revenue returns when it ends.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The three live rivals are the new competitor, the substitute chef, and the road work; separate them by checking whether the loss is concentrated in walk-ins (road work), in repeat diners who ask for the usual chef (chef), or in customers who mention the competitor, and by watching whether revenue rebounds the week the chef returns or the road reopens.",
    explanation:
      "Top credit names the three explanations actually in contention and a test that splits them; the 'countless reasons' option refuses to frame any rivals and so can adjudicate nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "After a release, an app's crash rate tripled, but only on Android, only on devices older than three years, and only when the user opens the in-app camera. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The clues leave three real candidates — a new camera API call unsupported on older Android, a memory ceiling old devices hit when the camera loads, or a changed permission flow — so compare crash logs for API errors versus out-of-memory traces, roll back just the camera code on a test build, and try to reproduce it on a brand-new Android phone.",
        credit: 1.0,
      },
      {
        text: "Crashes have too many possible sources after a release to single anything out.",
        credit: 0,
      },
      {
        text: "The new camera code is probably the cause; we could revert it and watch.",
        credit: 0.6,
      },
      {
        text: "The camera seems tied to the crashes somehow.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The clues leave three real candidates — a new camera API call unsupported on older Android, a memory ceiling old devices hit when the camera loads, or a changed permission flow — so compare crash logs for API errors versus out-of-memory traces, roll back just the camera code on a test build, and try to reproduce it on a brand-new Android phone.",
    explanation:
      "The richest answer lets the three constraints (Android, old, camera) carve out the live rival set and proposes checks that discriminate; 'too many sources' names no contenders and dies there.",
  },
  {
    itemType: "mc",
    prompt:
      "A club soccer team loses almost all its away matches but wins at home. The losses cluster on grass pitches (they train on turf), and the goals against pile up in the second half. Which lead is strongest?",
    mcOptions: [
      {
        text: "Away form just seems weaker.",
        credit: 0.3,
      },
      {
        text: "Three explanations stay live given the pattern — travel fatigue draining the second half, poor footing on unfamiliar grass, and an away tactical setup that leaks late — so check whether second-half collapses also happen in long-travel home cup ties, whether a grass training week lifts away results, and whether the same lineup concedes late at home.",
        credit: 1.0,
      },
      {
        text: "Soccer results depend on so many intangibles that picking a cause is guesswork.",
        credit: 0,
      },
      {
        text: "Travel fatigue is probably it; we could see if rest before away games helps.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Three explanations stay live given the pattern — travel fatigue draining the second half, poor footing on unfamiliar grass, and an away tactical setup that leaks late — so check whether second-half collapses also happen in long-travel home cup ties, whether a grass training week lifts away results, and whether the same lineup concedes late at home.",
    explanation:
      "Full credit uses the grass and second-half clues to name the genuine contenders and tests that pull them apart; 'too many intangibles' is the framing-free dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A home baker's sourdough rises beautifully in summer but barely in winter. Two other things differ in winter: the dough proofs in a colder corner of the kitchen, and she switched to a cheaper bread flour in the fall. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Bread is finicky, so winter failures are just one of those things.",
        credit: 0,
      },
      {
        text: "Three rivals are in play — a cold proofing spot slowing fermentation, a weaker flour with less gluten, and a sluggish starter in cold weather — so proof one loaf in a warm oven-with-light-on, bake one batch with the old flour, and feed the starter twice before baking, changing one variable at a time.",
        credit: 1.0,
      },
      {
        text: "The cold is probably the problem; we could try a warmer spot.",
        credit: 0.6,
      },
      {
        text: "Winter seems to work against the dough.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Three rivals are in play — a cold proofing spot slowing fermentation, a weaker flour with less gluten, and a sluggish starter in cold weather — so proof one loaf in a warm oven-with-light-on, bake one batch with the old flour, and feed the starter twice before baking, changing one variable at a time.",
    explanation:
      "The strongest answer enumerates the real competing causes and isolates each with a single-variable test; 'just one of those things' frames nothing and chases nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "A backyard pond's fish die off overnight after a stretch of hot days. Only the bottom-dwelling fish die, and it follows heavy fertilizer runoff from the farm uphill. Which lead opens the most inquiry?",
    mcOptions: [
      {
        text: "Pond die-offs are unpredictable, so there's little point assigning a cause.",
        credit: 0,
      },
      {
        text: "Three explanations fit the clues — low dawn oxygen from a fertilizer-fed algae bloom, heat-driven oxygen loss at the warm bottom, or a toxin in the runoff — so measure dissolved oxygen at dawn versus midday, test the water for ammonia and algae, and check whether aeration overnight prevents the next die-off.",
        credit: 1.0,
      },
      {
        text: "The runoff probably did it; we could test the water once.",
        credit: 0.6,
      },
      {
        text: "The hot days and runoff seem bad for the fish.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Three explanations fit the clues — low dawn oxygen from a fertilizer-fed algae bloom, heat-driven oxygen loss at the warm bottom, or a toxin in the runoff — so measure dissolved oxygen at dawn versus midday, test the water for ammonia and algae, and check whether aeration overnight prevents the next die-off.",
    explanation:
      "Top credit reads the bottom-dweller and overnight clues into a live rival set and tests that separate oxygen from toxin; 'unpredictable' declines to frame and learns nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "An office worker's headaches strike only on workdays, only in the afternoon, and began the month new fluorescent lights and a new espresso machine both arrived. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Afternoons at work seem to bring on the headaches.",
        credit: 0.3,
      },
      {
        text: "Headaches have endless triggers, so the cause can't really be pinned down.",
        credit: 0,
      },
      {
        text: "The workday-afternoon pattern leaves three live rivals — flicker from the new lights, a caffeine swing from heavier afternoon espresso, and screen strain that builds through the day — so try a week with the old desk lamp only, a week capping coffee at one morning cup, and logging whether headaches track screen hours.",
        credit: 1.0,
      },
      {
        text: "The new lights are probably it; we could switch them off and see.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The workday-afternoon pattern leaves three live rivals — flicker from the new lights, a caffeine swing from heavier afternoon espresso, and screen strain that builds through the day — so try a week with the old desk lamp only, a week capping coffee at one morning cup, and logging whether headaches track screen hours.",
    explanation:
      "The fecund answer names the contenders the timing keeps alive and a separate probe for each; 'endless triggers' is the refusal that frames no contest.",
  },
  {
    itemType: "mc",
    prompt:
      "In one school, students bomb the fractions unit every year but do fine on every other math topic. The same teacher covers all units, and fractions land during the same week as the science fair. Which lead is strongest?",
    mcOptions: [
      {
        text: "Math is hard for some kids, so a weak unit is to be expected.",
        credit: 0,
      },
      {
        text: "Fractions just seem to be a sticking point.",
        credit: 0.3,
      },
      {
        text: "Three explanations stay live — the teacher may teach fractions less well than other topics, the textbook's fractions chapter may be weak, or the science-fair week may steal study time — so compare this teacher's fractions results to another teacher's, swap in supplementary fractions materials, and move the unit off science-fair week to see which change closes the gap.",
        credit: 1.0,
      },
      {
        text: "The science-fair clash is probably the cause; we could reschedule the unit.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Three explanations stay live — the teacher may teach fractions less well than other topics, the textbook's fractions chapter may be weak, or the science-fair week may steal study time — so compare this teacher's fractions results to another teacher's, swap in supplementary fractions materials, and move the unit off science-fair week to see which change closes the gap.",
    explanation:
      "Top credit frames the three genuine rivals and a test apiece; 'math is hard' accepts a non-live truism instead of naming what is actually in contention.",
  },
  {
    itemType: "mc",
    prompt:
      "A furniture shop sees paint bubbling on finished pieces, but only on humid days, only on the spray line (never the brushed pieces), and only with the dark stains. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Three candidates survive the clues — humidity trapping moisture under fast-spray coats, a bad batch in the spray gun's reservoir, or dark pigments holding more heat and off-gassing — so run the spray line with a dehumidifier on, spray from a fresh stain can, and spray a light color under the same conditions to see which removes the bubbling.",
        credit: 1.0,
      },
      {
        text: "Finishes are sensitive, so occasional bubbling is just part of the trade.",
        credit: 0,
      },
      {
        text: "Humidity probably causes it; we could run a dehumidifier.",
        credit: 0.6,
      },
      {
        text: "Damp days seem to bring on the bubbles.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Three candidates survive the clues — humidity trapping moisture under fast-spray coats, a bad batch in the spray gun's reservoir, or dark pigments holding more heat and off-gassing — so run the spray line with a dehumidifier on, spray from a fresh stain can, and spray a light color under the same conditions to see which removes the bubbling.",
    explanation:
      "The humid/spray/dark triad defines the live set, and each test isolates one rival; 'part of the trade' refuses to compete the explanations at all.",
  },
  {
    itemType: "mc",
    prompt:
      "An online store's cart abandonment spikes only on mobile, only at the shipping-options step, and only for international addresses. Which lead opens the most inquiry?",
    mcOptions: [
      {
        text: "Checkout drop-off seems worse for some shoppers.",
        credit: 0.3,
      },
      {
        text: "Three explanations fit — a sticker-shock international shipping fee, a mobile form bug that breaks on international fields, or a slow rate-lookup that times out — so screen-record a mobile international checkout, compare abandonment before and after the fee is shown, and check load times at that step.",
        credit: 1.0,
      },
      {
        text: "Online shopping behavior is too fickle to attribute this to one thing.",
        credit: 0,
      },
      {
        text: "High shipping cost is probably it; we could lower international rates.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Three explanations fit — a sticker-shock international shipping fee, a mobile form bug that breaks on international fields, or a slow rate-lookup that times out — so screen-record a mobile international checkout, compare abandonment before and after the fee is shown, and check load times at that step.",
    explanation:
      "Top credit lets the mobile/shipping/international clues frame the rivals and tests each; the 'too fickle' option names no contest and stalls.",
  },
  {
    itemType: "mc",
    prompt:
      "Roses on the south edge of a garden have started wilting, but only after a tall fence went up there last spring, and only in the afternoons. The north-bed roses are thriving. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Gardens are unpredictable, so some wilting is to be expected.",
        credit: 0,
      },
      {
        text: "The fence and afternoon timing leave three rivals — the fence radiating afternoon heat onto the bed, roots from the fence-line hedge stealing water, or the fence blocking the sprinkler's reach — so check soil moisture at midday, hand-water the bed for a week, and shade it from the fence on a hot afternoon to see which revives the roses.",
        credit: 1.0,
      },
      {
        text: "The fence is probably the trouble; we could move the roses.",
        credit: 0.6,
      },
      {
        text: "The south side just seems harder on roses now.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The fence and afternoon timing leave three rivals — the fence radiating afternoon heat onto the bed, roots from the fence-line hedge stealing water, or the fence blocking the sprinkler's reach — so check soil moisture at midday, hand-water the bed for a week, and shade it from the fence on a hot afternoon to see which revives the roses.",
    explanation:
      "The strongest answer turns the fence/afternoon clues into a live rival set with a discriminating test each; 'unpredictable' refuses to name what competes.",
  },
  {
    itemType: "mc",
    prompt:
      "A company's website traffic dropped, but only from organic search, only to one product page, and it started the same week the site was redesigned and a Google algorithm update rolled out. Which lead is strongest?",
    mcOptions: [
      {
        text: "Search traffic is volatile, so a dip like this isn't really diagnosable.",
        credit: 0,
      },
      {
        text: "The page seems to be getting less search traffic.",
        credit: 0.3,
      },
      {
        text: "Two real rivals stay live — the redesign broke that page's on-page SEO, or the algorithm update demoted its content type — so check the page's crawlability and load speed against the old version, compare whether competitor pages of the same type also fell, and watch whether restoring the old template recovers rankings.",
        credit: 1.0,
      },
      {
        text: "The redesign probably broke it; we could roll the page back.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Two real rivals stay live — the redesign broke that page's on-page SEO, or the algorithm update demoted its content type — so check the page's crawlability and load speed against the old version, compare whether competitor pages of the same type also fell, and watch whether restoring the old template recovers rankings.",
    explanation:
      "Full credit isolates the two explanations the single-page, organic-only pattern keeps alive and a test that separates them; 'volatile, not diagnosable' is the framing-free dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "An office printer jams, but only from the bottom tray, only with heavy cardstock, and only in the first hour of the morning. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Printers are temperamental, so morning jams are just bad luck.",
        credit: 0,
      },
      {
        text: "Three rivals fit the pattern — overnight humidity making the cardstock limp, a worn pickup roller on that one tray, or cold stiff paper that won't feed until it warms — so try cardstock stored in a dry sealed bin, run the same stock through a different tray, and warm a stack before the first print to see which stops the jams.",
        credit: 1.0,
      },
      {
        text: "The bottom tray's roller is probably worn; we could replace it.",
        credit: 0.6,
      },
      {
        text: "Mornings seem to bring on the jams.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Three rivals fit the pattern — overnight humidity making the cardstock limp, a worn pickup roller on that one tray, or cold stiff paper that won't feed until it warms — so try cardstock stored in a dry sealed bin, run the same stock through a different tray, and warm a stack before the first print to see which stops the jams.",
    explanation:
      "Top credit names the contenders the tray/cardstock/morning clues leave standing and a clean test for each; 'bad luck' frames no competition.",
  },
  {
    itemType: "mc",
    prompt:
      "A lifter's progress stalled, but only on the squat (his other lifts still climb), and only after he switched gyms last month. Which lead opens the most inquiry?",
    mcOptions: [
      {
        text: "The squat just seems stuck lately.",
        credit: 0.3,
      },
      {
        text: "Strength plateaus have too many causes to chase one.",
        credit: 0,
      },
      {
        text: "Because only the squat stalled after the move, three rivals stay live — the new gym's bar and plates may weigh differently, the squat rack setup may change his form, or his squat-day programming changed with the move — so weigh the new plates, film his squat in both setups, and re-run his old squat program to see which restores progress.",
        credit: 1.0,
      },
      {
        text: "The new equipment is probably off; we could weigh the plates.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Because only the squat stalled after the move, three rivals stay live — the new gym's bar and plates may weigh differently, the squat rack setup may change his form, or his squat-day programming changed with the move — so weigh the new plates, film his squat in both setups, and re-run his old squat program to see which restores progress.",
    explanation:
      "The squat-only, post-move clues frame the genuine rivals, and each test isolates one; 'too many causes' refuses the contest entirely.",
  },
  {
    itemType: "mc",
    prompt:
      "A song shows a sharp skip spike right at the 0:45 mark, but only when it plays inside one curated playlist, and only for first-time listeners (repeat fans don't skip). Which conclusion best follows?",
    mcOptions: [
      {
        text: "Skips happen for all sorts of reasons, so this one isn't worth dissecting.",
        credit: 0,
      },
      {
        text: "New listeners seem to drop off partway in.",
        credit: 0.3,
      },
      {
        text: "The 0:45/playlist/new-listener pattern leaves three rivals — a dull bridge that loses newcomers, a jarring transition from the prior playlist track, or autoplay skipping for idle new users — so check what's happening musically at 0:45, reorder the playlist so a different song precedes it, and compare skip rates for active versus idle sessions.",
        credit: 1.0,
      },
      {
        text: "The bridge at 0:45 is probably weak; we could shorten it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The 0:45/playlist/new-listener pattern leaves three rivals — a dull bridge that loses newcomers, a jarring transition from the prior playlist track, or autoplay skipping for idle new users — so check what's happening musically at 0:45, reorder the playlist so a different song precedes it, and compare skip rates for active versus idle sessions.",
    explanation:
      "Top credit reads the three clues into a live rival set and tests each; 'all sorts of reasons' names no contenders and adjudicates nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "One of a beekeeper's ten hives is declining, but only since a new hive was placed right beside it, and its returning foragers come back unusually light (little nectar). The other hives are fine. Which lead is strongest?",
    mcOptions: [
      {
        text: "Beekeeping just seems to have started going wrong for that hive.",
        credit: 0.3,
      },
      {
        text: "Hives fail for so many reasons that pinning a cause is futile.",
        credit: 0,
      },
      {
        text: "Three rivals fit the clues — the new neighbor hive robbing its stores, a failing queen cutting the workforce, or nearby pesticide thinning foragers — so watch the entrance for fighting and robbing, inspect for a laying queen and brood, and check whether foragers from healthy hives also return light to rule out a forage problem.",
        credit: 1.0,
      },
      {
        text: "The new hive is probably robbing it; we could move the hives apart.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Three rivals fit the clues — the new neighbor hive robbing its stores, a failing queen cutting the workforce, or nearby pesticide thinning foragers — so watch the entrance for fighting and robbing, inspect for a laying queen and brood, and check whether foragers from healthy hives also return light to rule out a forage problem.",
    explanation:
      "The strongest answer frames the three explanations the timing and light-forager clues keep live and discriminates among them; 'futile' refuses to set up the contest.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A museum's gift-shop sales fell sharply, but only on weekends, only at the register near the new exit, and only since the museum rerouted visitors to leave through a different door. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Three explanations stay live — the reroute now sends weekend crowds past a different register, the near-exit register is understaffed at peak, or the new exit bypasses the shop's best displays — so count foot traffic at each register, staff the slow one fully for a weekend, and check whether sales of the bypassed displays specifically dropped.",
        credit: 1.0,
      },
      {
        text: "Gift-shop sales rise and fall for too many reasons to single one out.",
        credit: 0,
      },
      {
        text: "Weekend sales seem to be slipping at that register.",
        credit: 0.3,
      },
      {
        text: "The reroute probably hurt sales; we could change the exit back.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'reroute changed traffic flow' lead from the rival 'the near-exit register is simply understaffed,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: count weekend foot traffic past each register before and after the reroute — my lead predicts the near-exit register now sees far fewer browsers, not just slow service. It is refuted if traffic past that register is unchanged yet sales still lag, which would point to staffing or layout rather than the reroute's flow.",
      yieldAnchors: [
        "Sales fell only on weekends",
        "The drop is at the register near the new exit",
        "It started when visitors were rerouted to a different door",
      ],
      riskAnchors: [
        "Foot traffic past the near-exit register dropped after the reroute",
        "Fully staffing the slow register doesn't recover sales",
        "Sales of the bypassed displays fell specifically",
      ],
      defeatedBy: [
        "Gift-shop sales are inherently random",
        "The reroute had no effect on where visitors walk",
      ],
    },
    correctAnswer:
      "Three explanations stay live — the reroute now sends weekend crowds past a different register, the near-exit register is understaffed at peak, or the new exit bypasses the shop's best displays — so count foot traffic at each register, staff the slow one fully for a weekend, and check whether sales of the bypassed displays specifically dropped.",
    explanation:
      "Full credit frames the three rivals the weekend/register/reroute clues keep live, pairs each with a test, and adds a cheap traffic count that names its own refutation; 'too many reasons' competes nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A warehouse's picking errors jumped, but only on the night shift, only in one aisle, and only after bins in that aisle were relabeled with a new code scheme. Which lead is strongest?",
    mcOptions: [
      {
        text: "Picking accuracy is too variable to attribute errors to any one change.",
        credit: 0,
      },
      {
        text: "The night/aisle/relabel pattern leaves three rivals — the new codes are confusing under dim night lighting, the night crew was never trained on them, or two new codes look alike and get mixed up — so test the codes under day lighting on a night-style task, give one night picker a five-minute code refresher, and check whether errors cluster on specific look-alike code pairs.",
        credit: 1.0,
      },
      {
        text: "Night-shift errors seem to be up in that aisle.",
        credit: 0.3,
      },
      {
        text: "The new labels probably caused it; we could revert the codes.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'confusing new codes' lead from the rival 'the night crew was simply never trained,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: give one untrained night picker a brief code refresher and see whether their error rate falls — if training fixes it, the problem is training, not the codes themselves. My lead is refuted if a refreshed picker still errs at the same rate, pointing to genuinely confusing codes regardless of training.",
      yieldAnchors: [
        "Errors jumped only on the night shift",
        "Errors are confined to one aisle",
        "It started after that aisle's bins were relabeled",
      ],
      riskAnchors: [
        "Errors persist under good lighting on the new codes",
        "A short refresher cuts a picker's errors",
        "Errors cluster on specific look-alike code pairs",
      ],
      defeatedBy: [
        "Picking errors are inherently unpredictable",
        "The relabeling had nothing to do with the errors",
      ],
    },
    correctAnswer:
      "The night/aisle/relabel pattern leaves three rivals — the new codes are confusing under dim night lighting, the night crew was never trained on them, or two new codes look alike and get mixed up — so test the codes under day lighting on a night-style task, give one night picker a five-minute code refresher, and check whether errors cluster on specific look-alike code pairs.",
    explanation:
      "Top credit names the three live explanations and tests them, with a refresher trial that states its own refutation; 'too variable' refuses to frame the contest.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A newsletter's unsubscribes spiked, but only among readers who joined over a year ago, only right after a redesign that added a daily-digest option, and only for those who never opened the new digest. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Three rivals fit — the redesign quietly opted long-time readers into a daily flood they didn't want, the new format alienated readers used to the old style, or older subscribers had simply gone stale and the redesign was the nudge — so check whether unsubscribers were switched to daily without asking, survey a few on what changed, and compare staleness (open rates before redesign) across the groups.",
        credit: 1.0,
      },
      {
        text: "Email lists churn for too many reasons to blame the redesign.",
        credit: 0,
      },
      {
        text: "Long-time readers seem to be leaving after the redesign.",
        credit: 0.3,
      },
      {
        text: "The redesign probably drove them off; we could undo it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'unwanted daily flood' lead from the rival 'these old subscribers were already stale and ready to leave,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the redesign silently switched these readers to the daily digest and compare their pre-redesign open rates — my lead predicts they were active before but were auto-enrolled into more email than they wanted. It is refuted if the unsubscribers already had near-zero opens for months before the redesign, which points to staleness rather than the new frequency.",
      yieldAnchors: [
        "Unsubscribes spiked only among year-plus subscribers",
        "It started right after the digest redesign",
        "Only those who never opened the new digest left",
      ],
      riskAnchors: [
        "Unsubscribers were auto-switched to the daily digest",
        "Surveyed leavers cite frequency, not content",
        "Leavers had healthy open rates before the redesign",
      ],
      defeatedBy: [
        "Newsletter churn is essentially random",
        "The redesign played no role in the departures",
      ],
    },
    correctAnswer:
      "Three rivals fit — the redesign quietly opted long-time readers into a daily flood they didn't want, the new format alienated readers used to the old style, or older subscribers had simply gone stale and the redesign was the nudge — so check whether unsubscribers were switched to daily without asking, survey a few on what changed, and compare staleness (open rates before redesign) across the groups.",
    explanation:
      "Full credit frames the three live explanations the timing and segment clues allow, with a pre-redesign open-rate check that names its own refutation; 'too many reasons' frames no rivals.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A greenhouse grower finds tomatoes cracking, but only on the vines nearest the misting nozzles, only on the days after a heat spike, and only on the thin-skinned variety. Which lead is strongest?",
    mcOptions: [
      {
        text: "Tomatoes crack for too many reasons to point to anything here.",
        credit: 0,
      },
      {
        text: "The nozzle/heat/variety clues leave three rivals — a sudden water surge from the misters after fruit firmed in the heat, the thin skin simply failing under any swing, or heat stress weakening skins near the warmest spot — so meter water to the near-nozzle vines, grow the thick-skinned variety in the same spot, and log cracking against the size of each day's temperature and moisture swing.",
        credit: 1.0,
      },
      {
        text: "The misters probably cause it; we could water less.",
        credit: 0.6,
      },
      {
        text: "The near-nozzle tomatoes seem prone to cracking.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'water surge after firming' lead from the rival 'this variety's thin skin just cracks under any swing,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: grow the thin-skinned variety away from the nozzles and the thick-skinned variety beside them, then compare cracking — my lead predicts proximity to the misters, not variety alone, drives the splits. It is refuted if the thin-skinned fruit cracks just as much far from the nozzles, which would make skin type the real cause.",
      yieldAnchors: [
        "Cracking is worst on vines nearest the misters",
        "It follows days after a heat spike",
        "It hits only the thin-skinned variety",
      ],
      riskAnchors: [
        "Metering water to near-nozzle vines reduces cracking",
        "Thick-skinned fruit by the nozzles cracks less",
        "Cracking tracks the size of the moisture swing",
      ],
      defeatedBy: [
        "Tomato cracking is essentially random",
        "Misting and heat have no bearing on the splits",
      ],
    },
    correctAnswer:
      "The nozzle/heat/variety clues leave three rivals — a sudden water surge from the misters after fruit firmed in the heat, the thin skin simply failing under any swing, or heat stress weakening skins near the warmest spot — so meter water to the near-nozzle vines, grow the thick-skinned variety in the same spot, and log cracking against the size of each day's temperature and moisture swing.",
    explanation:
      "Top credit enumerates the live rivals and crosses variety against location to separate them, naming its own refutation; 'too many reasons' competes nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A call center's average handle time climbed, but only for one product line, only after a new help article was published, and only among agents hired in the last quarter. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Three rivals fit the pattern — the new help article is confusing and slows agents who lean on it, new hires lack experience on this complex line, or the article changed the recommended (longer) resolution steps — so compare handle time for new hires who do and don't open the article, check tenured agents' times on the same line, and see whether the article's steps are genuinely longer.",
        credit: 1.0,
      },
      {
        text: "Handle time drifts for too many reasons to chase one cause.",
        credit: 0,
      },
      {
        text: "New agents seem slower on that product line.",
        credit: 0.3,
      },
      {
        text: "The new article probably slows them; we could rewrite it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'confusing article' lead from the rival 'new hires are just inexperienced on this line,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: among new hires, compare handle time on calls where they opened the article versus calls where they didn't — my lead predicts the article-using calls run longer. It is refuted if new hires are equally slow whether or not they open the article, which points to inexperience rather than the article.",
      yieldAnchors: [
        "Handle time rose only for one product line",
        "It started after a new help article",
        "Only recent hires are affected",
      ],
      riskAnchors: [
        "New hires who open the article take longer than those who don't",
        "Tenured agents' times on the line are unchanged",
        "The article's recommended steps are genuinely longer",
      ],
      defeatedBy: [
        "Handle time is inherently noisy",
        "The new article has no effect on call length",
      ],
    },
    correctAnswer:
      "Three rivals fit the pattern — the new help article is confusing and slows agents who lean on it, new hires lack experience on this complex line, or the article changed the recommended (longer) resolution steps — so compare handle time for new hires who do and don't open the article, check tenured agents' times on the same line, and see whether the article's steps are genuinely longer.",
    explanation:
      "Full credit names the three live explanations and a within-group comparison that names its refutation; 'too many reasons' sets up no contest.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A youth swim team's times got slower, but only in the 50-meter freestyle, only since they moved to a new pool, and only for the sprinters (distance swimmers improved). Which lead is strongest?",
    mcOptions: [
      {
        text: "Swim times depend on too much to blame the pool switch.",
        credit: 0,
      },
      {
        text: "The sprint times just seem off lately.",
        credit: 0.3,
      },
      {
        text: "The sprint-only, new-pool clues leave three rivals — the new pool may be slightly long or have weaker walls for push-offs that only sprints feel, the blocks may differ and hurt starts, or sprint training changed with the move — so measure the lane length, film starts and turns in both pools, and re-run the old sprint workout to see which restores times.",
        credit: 1.0,
      },
      {
        text: "The new pool is probably slower; we could re-measure the lanes.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the pool/blocks hurt starts and push-offs' lead from the rival 'their sprint training changed after the move,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: film the sprinters' starts and turns in the new pool and compare push-off and reaction times to the old pool's footage — my lead predicts the loss shows up at the walls and blocks, not in mid-pool speed. It is refuted if start and turn metrics match the old pool yet times are still slow, pointing to the training change.",
      yieldAnchors: [
        "Times slowed only in the 50m freestyle",
        "It began with the move to the new pool",
        "Only sprinters slowed; distance swimmers improved",
      ],
      riskAnchors: [
        "The new lane measures slightly long",
        "Start and turn footage shows weaker push-offs",
        "Re-running the old sprint workout restores times",
      ],
      defeatedBy: [
        "Swim times are inherently variable",
        "The pool change is unrelated to the slowdown",
      ],
    },
    correctAnswer:
      "The sprint-only, new-pool clues leave three rivals — the new pool may be slightly long or have weaker walls for push-offs that only sprints feel, the blocks may differ and hurt starts, or sprint training changed with the move — so measure the lane length, film starts and turns in both pools, and re-run the old sprint workout to see which restores times.",
    explanation:
      "Top credit frames the rivals the sprint-only and pool-move clues keep live and films the walls to test one against another; 'too much' frames no competition.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A bakery's cookies started spreading too thin, but only the chocolate-chip batches, only since a new oven was installed, and only on the trays baked on the lower rack. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Three rivals survive the clues — the new oven runs hotter on the bottom and melts the butter too fast, the chocolate-chip recipe's butter ratio is uniquely sensitive, or the lower rack sits too close to the heating element — so put an oven thermometer on each rack, bake a sturdier recipe on the lower rack, and move the chocolate-chip trays up to see which fixes the spread.",
        credit: 1.0,
      },
      {
        text: "Cookie results vary so much that the cause can't be isolated.",
        credit: 0,
      },
      {
        text: "The chocolate-chip cookies seem to spread now.",
        credit: 0.3,
      },
      {
        text: "The new oven probably runs hot; we could lower the temperature.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'lower rack runs too hot' lead from the rival 'the chocolate-chip recipe is just butter-sensitive,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: bake the chocolate-chip trays on an upper rack and a sturdier cookie on the lower rack, then compare spread — my lead predicts the chocolate-chip cookies bake fine higher up while the lower rack over-spreads whatever sits there. It is refuted if chocolate-chip cookies still spread on the upper rack, pointing to the recipe rather than rack heat.",
      yieldAnchors: [
        "Only chocolate-chip batches spread thin",
        "It started with the new oven",
        "Only the lower-rack trays are affected",
      ],
      riskAnchors: [
        "An oven thermometer shows the lower rack runs hotter",
        "A sturdier recipe also over-spreads on the lower rack",
        "Moving the trays up fixes the spread",
      ],
      defeatedBy: [
        "Cookie spread is inherently unpredictable",
        "The new oven and rack position don't matter",
      ],
    },
    correctAnswer:
      "Three rivals survive the clues — the new oven runs hotter on the bottom and melts the butter too fast, the chocolate-chip recipe's butter ratio is uniquely sensitive, or the lower rack sits too close to the heating element — so put an oven thermometer on each rack, bake a sturdier recipe on the lower rack, and move the chocolate-chip trays up to see which fixes the spread.",
    explanation:
      "Full credit names the live rivals and crosses recipe against rack to separate them, stating its refutation; 'can't be isolated' refuses the contest.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A mobile game sees a drop-off spike at level 8, but only on phones (not tablets), only since an update that added a timed boss there, and only for free players (subscribers pass it fine). Which lead is strongest?",
    mcOptions: [
      {
        text: "Player drop-off has too many causes to pin on level 8.",
        credit: 0,
      },
      {
        text: "Players seem to quit around level 8 now.",
        credit: 0.3,
      },
      {
        text: "The phone/update/free-player clues leave three rivals — the timed boss is too hard on a small phone screen, free players lack the boosts subscribers use to beat it, or the timer is unfair without the update's new controls — so compare clear rates on phones versus tablets for the same players, give a sample of free players a trial boost, and check whether removing the timer lifts free-player clears.",
        credit: 1.0,
      },
      {
        text: "The timed boss is probably too hard; we could ease the timer.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'free players lack the boosts to beat the boss' lead from the rival 'the boss is just too hard on a small phone screen,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: grant a random sample of free players a one-time boost on level 8 and see whether their clear rate jumps toward the subscribers' — my lead predicts the boost, not the screen size, closes the gap. It is refuted if boosted free players still fail at the same rate, which would point to the phone-screen difficulty instead.",
      yieldAnchors: [
        "Drop-off spikes at level 8",
        "It hits phones but not tablets",
        "Free players stall while subscribers pass",
      ],
      riskAnchors: [
        "A trial boost lifts free players' clear rate",
        "Phone and tablet clear rates differ for the same players",
        "Removing the timer raises free-player clears",
      ],
      defeatedBy: [
        "Player drop-off is essentially random",
        "The level-8 boss update has no effect on quitting",
      ],
    },
    correctAnswer:
      "The phone/update/free-player clues leave three rivals — the timed boss is too hard on a small phone screen, free players lack the boosts subscribers use to beat it, or the timer is unfair without the update's new controls — so compare clear rates on phones versus tablets for the same players, give a sample of free players a trial boost, and check whether removing the timer lifts free-player clears.",
    explanation:
      "Top credit frames the rivals the device, update, and tier clues keep live and a boost trial that names its refutation; 'too many causes' competes nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A small farm's egg production dropped, but only from the older flock, only since a new rooster joined that coop, and only during the recent shorter daylight of late autumn. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Three rivals fit — shorter autumn daylight naturally curbing the older hens' laying, stress from the new rooster disrupting the flock, or the older hens simply aging out of peak production — so add supplemental coop light to mimic longer days, separate the rooster for a week, and compare the drop to last autumn's records for the same hens.",
        credit: 1.0,
      },
      {
        text: "Egg output swings for too many reasons to point at any one.",
        credit: 0,
      },
      {
        text: "The older hens seem to be laying less.",
        credit: 0.3,
      },
      {
        text: "The new rooster probably stresses them; we could remove him.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'shorter daylight curbs laying' lead from the rival 'the new rooster is stressing the flock,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: add supplemental light to extend the coop's day to summer length and watch production over a week or two — my lead predicts output recovers with the longer light even while the rooster stays. It is refuted if laying stays low under extended light but jumps once the rooster is removed, which points to rooster stress instead.",
      yieldAnchors: [
        "Production dropped only in the older flock",
        "It began when a new rooster joined",
        "It coincides with shorter autumn daylight",
      ],
      riskAnchors: [
        "Supplemental light restores laying",
        "Removing the rooster restores laying",
        "Last autumn's records show the same seasonal dip",
      ],
      defeatedBy: [
        "Egg production is inherently unpredictable",
        "Neither daylight nor the rooster affects laying",
      ],
    },
    correctAnswer:
      "Three rivals fit — shorter autumn daylight naturally curbing the older hens' laying, stress from the new rooster disrupting the flock, or the older hens simply aging out of peak production — so add supplemental coop light to mimic longer days, separate the rooster for a week, and compare the drop to last autumn's records for the same hens.",
    explanation:
      "Full credit names the three live explanations and uses light, separation, and prior-year records to separate them, stating its refutation; 'too many reasons' frames no rivals.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A small contract manufacturer finds that one CNC machine's downtime has tripled this quarter. Three things changed in that window: the shop switched to a cheaper coolant, a newly hired operator now runs that machine on the late shift, and the machine is overdue for its annual spindle service. Downtime logs show most stoppages are late-shift coolant-flow alarms. In one paragraph, identify the explanations actually in contention and propose the strongest lead, describing how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The live contrast set here is three rivals, not one: the cheaper coolant may be clogging the flow lines and tripping alarms, the new late-shift operator may be setting up or loading the machine in a way that starves coolant flow, or the overdue spindle service may be causing failures the alarms only indirectly flag. The coolant-flow alarms concentrated on the late shift make the first two leads the strongest contenders, and the cleanest way to adjudicate is to vary one factor at a time: run the old coolant for a week and see if alarms fall; have an experienced operator run the same late-shift jobs to see if downtime drops with the person rather than the fluid; and inspect the spindle and flow lines directly to check whether the service issue produces these specific alarms. I would track alarm counts under each condition, because the strongest lead is the one whose single change most reduces the late-shift flow alarms while leaving the rival explanations unsupported.",
      yieldAnchors: [
        "Downtime tripled on one machine this quarter",
        "Three things changed: cheaper coolant, new late-shift operator, overdue spindle service",
        "Most stoppages are late-shift coolant-flow alarms",
      ],
      riskAnchors: [
        "Reverting to the old coolant cuts the flow alarms",
        "An experienced operator on the same jobs lowers downtime",
        "Direct inspection ties (or fails to tie) the spindle service to these alarms",
      ],
      defeatedBy: [
        "Machine downtime is random and not worth diagnosing",
        "The cause must be the spindle service alone, ignoring the coolant and operator",
        "Nothing can be said until a full year of data accrues",
      ],
    },
    correctAnswer:
      "The live contrast set here is three rivals, not one: the cheaper coolant may be clogging the flow lines and tripping alarms, the new late-shift operator may be setting up or loading the machine in a way that starves coolant flow, or the overdue spindle service may be causing failures the alarms only indirectly flag. The coolant-flow alarms concentrated on the late shift make the first two leads the strongest contenders, and the cleanest way to adjudicate is to vary one factor at a time: run the old coolant for a week and see if alarms fall; have an experienced operator run the same late-shift jobs to see if downtime drops with the person rather than the fluid; and inspect the spindle and flow lines directly to check whether the service issue produces these specific alarms. I would track alarm counts under each condition, because the strongest lead is the one whose single change most reduces the late-shift flow alarms while leaving the rival explanations unsupported.",
    explanation:
      "Under CCR, refusing to name rivals ('downtime is random') or fixating on one untested rival both score near-zero; top credit goes to the answer that frames the genuine contenders and tests that separate them.",
  },
  {
    itemType: "written",
    prompt:
      "A district finds that fourth-grade reading scores fell at one elementary school while every other grade and school held steady. That year the school adopted a new reading curriculum, lost two veteran fourth-grade teachers to retirement, and moved fourth grade into portable classrooms during a renovation. In one paragraph, identify the explanations genuinely in contention and propose the strongest lead, describing how you would test it.",
    writtenRubric: {
      modelAnswer:
        "Because the drop is confined to one grade at one school, the live contrast set is three rivals: the new curriculum may suit fourth-grade reading poorly, the loss of two veteran teachers may have left less effective instruction, or the disruptive move into portable classrooms may have hurt learning conditions. The constructive move is to compete these explanations rather than crown one, so I would compare this school's new-curriculum fourth graders to fourth graders at another school using the same curriculum (if the curriculum is the culprit, both should dip); compare the replacement teachers' classes to those still taught by any remaining experienced staff; and check whether other subjects taught in the same portables also slipped, which would implicate the room move rather than reading instruction. The strongest lead is whichever rival its discriminating test confirms while the others fail theirs — for example, if same-curriculum schools held steady but the new teachers' classes drove the entire drop, the teaching-change lead wins. I would gather class-level scores split by teacher, curriculum, and room to make those comparisons clean.",
      yieldAnchors: [
        "Scores fell only in fourth grade at one school",
        "Three changes: new curriculum, two retirements, move to portables",
        "Other grades and schools held steady",
      ],
      riskAnchors: [
        "Other schools on the same curriculum also dipped",
        "The replacement teachers' classes drove most of the drop",
        "Other subjects taught in the portables also slipped",
      ],
      defeatedBy: [
        "Test scores bounce around, so nothing can be inferred",
        "It must be the curriculum, without comparing same-curriculum schools",
        "We can't judge until several more years of scores arrive",
      ],
    },
    correctAnswer:
      "Because the drop is confined to one grade at one school, the live contrast set is three rivals: the new curriculum may suit fourth-grade reading poorly, the loss of two veteran teachers may have left less effective instruction, or the disruptive move into portable classrooms may have hurt learning conditions. The constructive move is to compete these explanations rather than crown one, so I would compare this school's new-curriculum fourth graders to fourth graders at another school using the same curriculum (if the curriculum is the culprit, both should dip); compare the replacement teachers' classes to those still taught by any remaining experienced staff; and check whether other subjects taught in the same portables also slipped, which would implicate the room move rather than reading instruction. The strongest lead is whichever rival its discriminating test confirms while the others fail theirs — for example, if same-curriculum schools held steady but the new teachers' classes drove the entire drop, the teaching-change lead wins. I would gather class-level scores split by teacher, curriculum, and room to make those comparisons clean.",
    explanation:
      "CCR penalizes both the 'scores just bounce' refusal and the leap to a single untested cause; credit rewards naming the real rivals the grade-and-school pattern leaves live and the comparisons that decide among them.",
  },
  {
    itemType: "written",
    prompt:
      "A SaaS company's monthly churn is fine overall but has spiked in one segment: small e-commerce accounts on the cheapest plan. That same month, the company raised the cheapest plan's price, a competitor launched a free e-commerce tier, and a bug briefly broke order-sync for small stores. In one paragraph, identify the explanations actually competing and propose the strongest lead, describing how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The live contrast set for this segment-specific churn is three rivals: the price increase may have pushed cost-sensitive small stores out, the competitor's free tier may be poaching exactly this segment, or the order-sync bug may have burned trust with the stores it hit. Rather than guess, I would let the rivals carve discriminating tests: survey or interview churned accounts and look at whether they cite price, a switch to the competitor, or the sync failure; check whether the churn rate is higher among the specific accounts the bug actually affected than among unaffected accounts on the same plan; and compare cancellation timing to the exact dates of the price change versus the competitor's launch. The strongest lead is the one whose signature shows up — for instance, if churn clusters among bug-hit accounts and they cite broken sync, that beats the price and competitor stories. I would pull cancellation reasons, bug-exposure flags, and cancel timestamps for the segment so the three explanations can be compared head to head rather than assumed.",
      yieldAnchors: [
        "Churn spiked only among cheap-plan small e-commerce accounts",
        "Three changes: price increase, competitor's free tier, order-sync bug",
        "Overall churn is unchanged",
      ],
      riskAnchors: [
        "Churned accounts disproportionately cite one of the three causes",
        "Bug-affected accounts churn more than unaffected same-plan accounts",
        "Cancellation timing aligns with one event's date, not the others",
      ],
      defeatedBy: [
        "Churn is noisy, so no cause can be identified",
        "It must be the price hike, without checking the bug or competitor",
        "We should wait for more months before looking at all",
      ],
    },
    correctAnswer:
      "The live contrast set for this segment-specific churn is three rivals: the price increase may have pushed cost-sensitive small stores out, the competitor's free tier may be poaching exactly this segment, or the order-sync bug may have burned trust with the stores it hit. Rather than guess, I would let the rivals carve discriminating tests: survey or interview churned accounts and look at whether they cite price, a switch to the competitor, or the sync failure; check whether the churn rate is higher among the specific accounts the bug actually affected than among unaffected accounts on the same plan; and compare cancellation timing to the exact dates of the price change versus the competitor's launch. The strongest lead is the one whose signature shows up — for instance, if churn clusters among bug-hit accounts and they cite broken sync, that beats the price and competitor stories. I would pull cancellation reasons, bug-exposure flags, and cancel timestamps for the segment so the three explanations can be compared head to head rather than assumed.",
    explanation:
      "The 'churn is noisy' refusal and the jump to a single unexamined cause both earn near-zero; top credit goes to framing the three live rivals the segment pattern allows and the tests that separate them.",
  },
  {
    itemType: "written",
    prompt:
      "A community garden finds that one raised bed's lettuce is being shredded overnight, while the dozen neighboring beds are untouched. That bed is nearest the compost pile, it was the only one not covered with netting, and it sits beside a gap in the perimeter fence. In one paragraph, identify the explanations genuinely in contention and propose the strongest lead, describing how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The live contrast set is three rivals worth naming before blaming any one: the bed's proximity to the compost may attract pests like slugs or rodents, its lack of netting may simply leave it the one bed any animal can reach, or the nearby fence gap may funnel a larger animal such as a rabbit straight to it. Because these overlap, I would force them apart: add netting to that bed alone and see whether the damage stops (testing the cover rival), set a cheap motion camera overnight to identify the actual culprit and whether it enters through the fence gap (testing the access rival), and check the damage pattern — slug slime trails and small ragged holes point to compost-drawn pests, while clean bites and droppings point to a mammal. The strongest lead is whichever its test confirms; for example, if the camera shows a rabbit slipping through the gap and netting stops the damage, the access-plus-cover explanation wins over the compost story. I would run the camera and the netting trial together so the rivals can be compared directly rather than assumed.",
      yieldAnchors: [
        "Only one bed's lettuce is shredded overnight",
        "That bed is nearest the compost, uncovered, and beside a fence gap",
        "The dozen other beds are untouched",
      ],
      riskAnchors: [
        "Netting that bed stops the damage",
        "A motion camera identifies the culprit and its entry point",
        "Damage signs (slime trails versus clean bites and droppings) point to one culprit",
      ],
      defeatedBy: [
        "Garden pests are random, so there's nothing to diagnose",
        "It must be the compost, without checking access or the cover",
        "We can't say anything until it happens to several beds",
      ],
    },
    correctAnswer:
      "The live contrast set is three rivals worth naming before blaming any one: the bed's proximity to the compost may attract pests like slugs or rodents, its lack of netting may simply leave it the one bed any animal can reach, or the nearby fence gap may funnel a larger animal such as a rabbit straight to it. Because these overlap, I would force them apart: add netting to that bed alone and see whether the damage stops (testing the cover rival), set a cheap motion camera overnight to identify the actual culprit and whether it enters through the fence gap (testing the access rival), and check the damage pattern — slug slime trails and small ragged holes point to compost-drawn pests, while clean bites and droppings point to a mammal. The strongest lead is whichever its test confirms; for example, if the camera shows a rabbit slipping through the gap and netting stops the damage, the access-plus-cover explanation wins over the compost story. I would run the camera and the netting trial together so the rivals can be compared directly rather than assumed.",
    explanation:
      "Under CCR, 'pests are random' and the leap to one untested culprit both score near-zero; credit goes to the answer that frames the genuine rivals the three clues leave live and tests that discriminate among them.",
  },
  {
    itemType: "written",
    prompt:
      "A regional restaurant chain finds that one location's online review scores dropped from 4.6 to 3.9 over two months, while its other locations held steady. In that window, that location got a new kitchen manager, switched to a cheaper produce supplier, and had its dining room torn up for a remodel. In one paragraph, identify the explanations actually competing and propose the strongest lead, describing how you would test it.",
    writtenRubric: {
      modelAnswer:
        "Because only this location slipped, the live contrast set is three rivals: the new kitchen manager may have changed food quality or consistency, the cheaper produce supplier may have lowered ingredient quality, or the remodel may have hurt the dining experience through noise, dust, and limited seating. The constructive move is to let the reviews themselves separate these, so I would read the recent one-to-three-star reviews and tag whether complaints are about food taste/consistency, ingredient freshness, or atmosphere/wait — each rival predicts a different complaint signature. I would also check timing: did scores drop the week the manager started, the week the supplier changed, or the week construction began? And I would compare specific dishes' ratings, since a produce problem should hit salad-heavy dishes hardest while a manager problem should span the menu. The strongest lead is the rival whose signature dominates the complaints and whose start date aligns with the drop — for instance, if reviews overwhelmingly cite construction noise and dust and the dip tracks the remodel start, the remodel lead beats the food explanations. I would pull tagged review text, dish-level ratings, and event dates to compare the three head to head.",
      yieldAnchors: [
        "One location's reviews fell from 4.6 to 3.9 in two months",
        "Three changes: new kitchen manager, cheaper produce supplier, dining-room remodel",
        "Other locations held steady",
      ],
      riskAnchors: [
        "Recent complaints cluster on one theme (food, ingredients, or atmosphere)",
        "The score drop's timing matches one event's start date",
        "Dish-level ratings implicate produce-heavy items or the whole menu",
      ],
      defeatedBy: [
        "Review scores are random, so no cause can be found",
        "It must be the new manager, without reading the complaints",
        "We should wait for the scores to recover on their own before judging",
      ],
    },
    correctAnswer:
      "Because only this location slipped, the live contrast set is three rivals: the new kitchen manager may have changed food quality or consistency, the cheaper produce supplier may have lowered ingredient quality, or the remodel may have hurt the dining experience through noise, dust, and limited seating. The constructive move is to let the reviews themselves separate these, so I would read the recent one-to-three-star reviews and tag whether complaints are about food taste/consistency, ingredient freshness, or atmosphere/wait — each rival predicts a different complaint signature. I would also check timing: did scores drop the week the manager started, the week the supplier changed, or the week construction began? And I would compare specific dishes' ratings, since a produce problem should hit salad-heavy dishes hardest while a manager problem should span the menu. The strongest lead is the rival whose signature dominates the complaints and whose start date aligns with the drop — for instance, if reviews overwhelmingly cite construction noise and dust and the dip tracks the remodel start, the remodel lead beats the food explanations. I would pull tagged review text, dish-level ratings, and event dates to compare the three head to head.",
    explanation:
      "CCR gives near-zero to 'scores are random' and to crowning one cause without comparing the complaint signatures; top credit goes to framing the three live rivals and the discriminating reads that decide among them.",
  },
];

export const section: SectionContent = {
  slug: "live-contrast-set",
  title: "The Live Contrast Set",
  weekNumber: 3,
  blurb:
    "A conclusion is only ever 'best' relative to the rivals actually in contention. Before you adjudicate, name the live set of genuine explanations the evidence leaves standing — then test among them.",
  lectureTitle:
    "3.1 The Live Contrast Set: framing which explanations are actually competing",
  body: `# The Live Contrast Set

Ask "is this explanation true?" and you have already lost the thread. The right question is "is it the best of the explanations actually in contention?" — and that question is meaningless until you name the contenders. Reflexive caution looks at a tangle of possible causes and freezes: "too many things could explain this." Constructive Critical Reasoning does the opposite. It treats the messy field of possibilities as the starting material and frames it into a **live contrast set** — the short list of genuine rivals the evidence leaves standing — because only against that set can any conclusion earn the word "best."

## "Best" is a relative word

No explanation is good or bad in a vacuum; it is better or worse than its rivals. A lead that sounds compelling alone can be the weakest in a field once you write the others down. So the first move is never to evaluate one story — it is to enumerate the field. What are the two, three, or four explanations that actually fit the clues in front of you? Until that set exists, "this is the best explanation" is a sentence with no meaning, like calling a runner "fastest" before naming the race.

## Let the clues prune the field

A live contrast set is not every conceivable cause — that way lies paralysis. It is the explanations that survive the specific evidence. When an app crashes only on old Android phones only when the camera opens, "the server is down" is not a live rival; the clues already killed it. The discipline is to use each constraint to cross candidates off, leaving a small set of survivors worth testing. A good contrast set is short because the evidence did real work narrowing it.

## A rival must be genuinely in play

Two failure modes shrink the set wrongly. One is the **strawman**: pitting your favorite against a weak or already-excluded explanation so it wins by default. Beating a dead rival proves nothing. The other is the **lonely hypothesis**: evaluating one explanation with no rivals at all, so "it fits the data" masquerades as "it's the best." A real contrast set holds explanations that each genuinely fit the clues, so the test between them is informative.

## Why the "too many factors" dodge loses

"There are too many possible causes to say anything" feels rigorous and is in fact the abdication this whole skill exists to prevent. It refuses to do the framing work — to ask which possibilities the evidence actually leaves live — and so it can never adjudicate anything. The constructive reasoner converts that same overwhelming field into a short, ranked set of rivals and a test that separates them. Naming three live explanations and one discriminating observation beats throwing up your hands every time.

## Overreach still loses

Framing the set is not the same as crowning a winner prematurely. If you name the rivals and then declare one the answer before any discriminating test has run, you have overreached — committed past what the evidence yet supports. The strong move is to frame the live set *and* to name the observation that would decide among its members, holding your lead provisionally until that test speaks.

## In the real world

A bistro's Tuesday revenue drops a third the same month a competitor opens nearby, the Tuesday chef goes on leave, and the city starts Tuesday road work. The dodge: "restaurants lose business for a hundred reasons — who can say?" The constructive move: the evidence leaves exactly three live rivals, and each predicts a different fingerprint. Road work should hurt walk-ins; a missing chef should cost repeat diners who ask for the usual; a competitor should show up in customers who mention it. Name the set, assign each rival its tell, and watch whether revenue rebounds the week the chef returns or the road reopens. That is how a hopeless tangle becomes a decidable question.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
