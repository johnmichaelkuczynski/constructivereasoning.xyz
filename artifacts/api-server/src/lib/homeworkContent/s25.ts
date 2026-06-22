import type { SectionContent, HomeworkItem } from "./types";

const mcq: HomeworkItem[] = [
  {
    itemType: "mc",
    prompt:
      "A caterer's thermometer reads 160°F in a tray of chicken for 200 guests, just under the 165°F safe mark, and the tray is due out in ten minutes. Which decision best follows?",
    mcOptions: [
      {
        text: "The reading is only five degrees low and the chicken is probably fine, so send it out to stay on schedule.",
        credit: 0,
      },
      {
        text: "Because a wrong 'it's fine' call could sicken 200 people while a wrong 'reheat it' call costs ten minutes, default to the error that is cheap to reverse: hold the tray, re-probe several thick pieces, and reheat to 165°F before serving — running the survivable test first.",
        credit: 1.0,
      },
      {
        text: "Serving bad chicken is far worse than a delay, so reheat it before sending it out.",
        credit: 0.6,
      },
      {
        text: "Undercooked chicken is risky, so be careful with the tray.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Because a wrong 'it's fine' call could sicken 200 people while a wrong 'reheat it' call costs ten minutes, default to the error that is cheap to reverse: hold the tray, re-probe several thick pieces, and reheat to 165°F before serving — running the survivable test first.",
    explanation:
      "Top credit lets the lopsided cost of a wrong 'serve it' call govern the decision and runs the cheap check first; serving on probability alone ignores the asymmetry and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A small team has a fix ready Friday at 5 p.m. for a bug that mis-totals 0.5% of invoices, but everyone leaves for the weekend with no on-call coverage. The fix probably works. Which decision best follows?",
    mcOptions: [
      {
        text: "Friday deploys feel dangerous, so probably hold off.",
        credit: 0.3,
      },
      {
        text: "A weekend outage with nobody watching would be far costlier than a minor bug, so wait and deploy Monday.",
        credit: 0.6,
      },
      {
        text: "The fix passed tests and the bug is annoying, so ship it now regardless of timing.",
        credit: 0,
      },
      {
        text: "Because a botched deploy with no one watching could break all invoicing for two unmonitored days while waiting only delays a minor fix, deploy Monday with staff present; but first replay this weekend's transactions against the fix in staging to learn whether the Friday risk is even real.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "Because a botched deploy with no one watching could break all invoicing for two unmonitored days while waiting only delays a minor fix, deploy Monday with staff present; but first replay this weekend's transactions against the fix in staging to learn whether the Friday risk is even real.",
    explanation:
      "The richest answer weighs the unmonitored-outage cost against a trivial delay and runs the staging replay to size the risk; shipping because tests passed treats a catastrophic error like a cheap one.",
  },
  {
    itemType: "mc",
    prompt:
      "A hiker reaches a river at dusk; the water looks knee-deep but the current is strong, and a slip would sweep her toward rapids downstream. A dry alternate trail adds forty minutes. Which decision best follows?",
    mcOptions: [
      {
        text: "Because a misjudged crossing risks drowning while the detour costs only forty minutes, let the catastrophic-if-wrong error dominate: take the dry trail, and if she must cross, first float a stick to gauge the true current and probe depth with a pole.",
        credit: 1.0,
      },
      {
        text: "Drowning is far worse than arriving late, so take the longer dry trail.",
        credit: 0.6,
      },
      {
        text: "The river looks only knee-deep, so wade across to save the forty minutes.",
        credit: 0,
      },
      {
        text: "The crossing seems sketchy, so be careful.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Because a misjudged crossing risks drowning while the detour costs only forty minutes, let the catastrophic-if-wrong error dominate: take the dry trail, and if she must cross, first float a stick to gauge the true current and probe depth with a pole.",
    explanation:
      "Full credit lets the irreversible drowning risk outweigh a small time cost and names cheap probes; wading because it 'looks' shallow bets footing against a fatal downside.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient's chest pain is about 80% likely indigestion and 5% likely a heart attack. An ECG takes ten minutes and costs little. Which decision best follows?",
    mcOptions: [
      {
        text: "Chest pain can be serious, so keep an eye on him.",
        credit: 0.3,
      },
      {
        text: "It's 80% likely just indigestion, so treat that and send him home without the test.",
        credit: 0,
      },
      {
        text: "Because missing the unlikely heart attack could be fatal while an extra ECG costs ten minutes, weight the call by cost of error, not probability alone: run the ECG to rule out the catastrophic branch first, then treat the likely indigestion.",
        credit: 1.0,
      },
      {
        text: "A missed heart attack is far worse than a wasted test, so order the ECG before he leaves.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Because missing the unlikely heart attack could be fatal while an extra ECG costs ten minutes, weight the call by cost of error, not probability alone: run the ECG to rule out the catastrophic branch first, then treat the likely indigestion.",
    explanation:
      "Top credit ranks the cheap test against the fatal error rather than acting on the 80% figure; treating indigestion on probability alone is the stakes-blind move that earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A forecast gives a 30% chance a wildfire reaches a neighborhood by morning. Evacuating tonight means a motel; staying risks being trapped if the wind turns. Which decision best follows?",
    mcOptions: [
      {
        text: "It's only 30% likely to reach the neighborhood, so stay home and save the motel cost.",
        credit: 0,
      },
      {
        text: "A fire nearby is frightening, so think about leaving.",
        credit: 0.3,
      },
      {
        text: "Being trapped is far worse than a wasted night away, so evacuate now.",
        credit: 0.6,
      },
      {
        text: "Because being trapped by fire is irreversible while a needless motel night is cheap, let the asymmetry govern: leave tonight, and first check the one signal that bounds the worst case — the fire's current direction and whether the single road out is still open.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "Because being trapped by fire is irreversible while a needless motel night is cheap, let the asymmetry govern: leave tonight, and first check the one signal that bounds the worst case — the fire's current direction and whether the single road out is still open.",
    explanation:
      "Full credit lets the irreversible trapped-by-fire outcome override the low probability and checks the road status first; staying on the 30% figure ignores how lopsided the costs are.",
  },
  {
    itemType: "mc",
    prompt:
      "A startup has one month of runway. A proven channel returns modest steady leads; an untested channel might 5x growth but might return nothing and burn the whole budget. Which decision best follows?",
    mcOptions: [
      {
        text: "The untested channel has the highest possible upside, so put the whole budget on it.",
        credit: 0,
      },
      {
        text: "Going broke is far worse than growing slowly, so keep funding the proven channel.",
        credit: 0.6,
      },
      {
        text: "Because spending all the cash on the untested channel and being wrong kills the company while being wrong on the proven one only means slow growth, cap the bet: fund the proven channel and spend a small fixed slice testing the new one, so a wrong bet stays survivable.",
        credit: 1.0,
      },
      {
        text: "Betting it all is risky, so be careful with the money.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Because spending all the cash on the untested channel and being wrong kills the company while being wrong on the proven one only means slow growth, cap the bet: fund the proven channel and spend a small fixed slice testing the new one, so a wrong bet stays survivable.",
    explanation:
      "Top credit sizes the bet so a wrong call is survivable and tests cheaply first; chasing the highest upside ignores that one error is fatal and the other is merely slow.",
  },
  {
    itemType: "mc",
    prompt:
      "Inspectors find that perhaps 1 in 5,000 brake calipers from one lot could crack. Recalling the lot costs $200,000; a crack could cause a crash. Which decision best follows?",
    mcOptions: [
      {
        text: "It's only 1 in 5,000, so the recall isn't worth $200,000 — keep them in service.",
        credit: 0,
      },
      {
        text: "Because a single failed brake could kill someone — an irreversible cost — while a recall is merely expensive, let the deadly downside dominate: recall the lot, and first crack-test a sample under load to learn the true failure rate and which VINs are affected.",
        credit: 1.0,
      },
      {
        text: "A crash is far worse than $200,000, so recall the lot.",
        credit: 0.6,
      },
      {
        text: "Brakes are important parts, so look into it.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Because a single failed brake could kill someone — an irreversible cost — while a recall is merely expensive, let the deadly downside dominate: recall the lot, and first crack-test a sample under load to learn the true failure rate and which VINs are affected.",
    explanation:
      "Full credit lets the fatal, irreversible outcome outweigh a finite dollar cost and samples to learn the real rate; weighing only the 1-in-5,000 odds is the stakes-blind error.",
  },
  {
    itemType: "mc",
    prompt:
      "A student's essay closely matches a website, about 70% likely copied — but a false accusation could derail an honest student. Which decision best follows?",
    mcOptions: [
      {
        text: "It's 70% likely copied, so report it as plagiarism now.",
        credit: 0,
      },
      {
        text: "A false accusation would harm the student badly, so verify before saying anything.",
        credit: 0.6,
      },
      {
        text: "Cheating is a serious matter, so handle it carefully.",
        credit: 0.3,
      },
      {
        text: "Because wrongly branding an honest student a cheat is hard to undo while a quiet check costs little, let the asymmetric harm set the order: before any accusation, run the cheap disconfirming checks — diff the draft history, ask her to explain a passage, compare timestamps — and only act if they hold up.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "Because wrongly branding an honest student a cheat is hard to undo while a quiet check costs little, let the asymmetric harm set the order: before any accusation, run the cheap disconfirming checks — diff the draft history, ask her to explain a passage, compare timestamps — and only act if they hold up.",
    explanation:
      "Top credit weighs the hard-to-undo reputational harm against a cheap check and verifies first; reporting on the 70% figure ignores how costly a false accusation is.",
  },
  {
    itemType: "mc",
    prompt:
      "A grape crop is a week from peak ripeness, but tonight carries a 40% frost risk that could destroy it; picking now shaves a little sugar. Which decision best follows?",
    mcOptions: [
      {
        text: "Because a frost wipes out the whole crop while picking a week early only shaves sugar, let the loss asymmetry decide: harvest the most exposed low rows tonight, and first check the vineyard's own min-temp sensors and dew point, which bound the real frost risk.",
        credit: 1.0,
      },
      {
        text: "Losing everything is far worse than slightly lower sugar, so harvest now.",
        credit: 0.6,
      },
      {
        text: "It's only 40% likely to frost, so wait the week for peak ripeness.",
        credit: 0,
      },
      {
        text: "Frost could be a problem, so keep watch tonight.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Because a frost wipes out the whole crop while picking a week early only shaves sugar, let the loss asymmetry decide: harvest the most exposed low rows tonight, and first check the vineyard's own min-temp sensors and dew point, which bound the real frost risk.",
    explanation:
      "Full credit lets total crop loss outweigh a small sugar penalty and reads the local sensors first; waiting on the 40% figure treats a wipeout like a minor setback.",
  },
  {
    itemType: "mc",
    prompt:
      "A private pilot faces a 250-foot cloud ceiling, right at his personal minimum, for a non-urgent flight. Which decision best follows?",
    mcOptions: [
      {
        text: "It meets his minimums on paper, so go.",
        credit: 0,
      },
      {
        text: "A crash is far worse than a delay, so postpone the flight.",
        credit: 0.6,
      },
      {
        text: "The weather looks marginal, so be cautious.",
        credit: 0.3,
      },
      {
        text: "Because pressing into marginal weather risks a fatal outcome while scrubbing a non-urgent flight costs only a delay, let the irreversibility govern: wait, and first pull the latest hourly observations and a pilot report from the route to see whether the ceiling is actually lifting.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "Because pressing into marginal weather risks a fatal outcome while scrubbing a non-urgent flight costs only a delay, let the irreversibility govern: wait, and first pull the latest hourly observations and a pilot report from the route to see whether the ceiling is actually lifting.",
    explanation:
      "Top credit weighs a fatal outcome against a mere delay and gathers the cheap weather updates first; flying because it 'meets minimums on paper' ignores how lopsided the stakes are.",
  },
  {
    itemType: "mc",
    prompt:
      "A 1,000-liter beer batch carries a faint off-smell that might be contamination. Dumping it costs $4,000, but shipping a tainted batch could sicken customers and wreck the brand. Which decision best follows?",
    mcOptions: [
      {
        text: "It's probably just a faint hop aroma, so ship it and save the $4,000.",
        credit: 0,
      },
      {
        text: "An off-smell is concerning, so look into it.",
        credit: 0.3,
      },
      {
        text: "Because shipping tainted beer could poison customers and destroy the brand — both hard to reverse — while dumping merely costs $4,000, let the asymmetry steer the order: hold the batch and run a same-day microbiology plate and taste panel on samples before any decision to ship.",
        credit: 1.0,
      },
      {
        text: "A poisoning scandal is far worse than $4,000, so hold the batch until it's checked.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Because shipping tainted beer could poison customers and destroy the brand — both hard to reverse — while dumping merely costs $4,000, let the asymmetry steer the order: hold the batch and run a same-day microbiology plate and taste panel on samples before any decision to ship.",
    explanation:
      "Full credit weighs irreversible harm against a finite dump cost and tests samples first; shipping on a guess that it's 'just hops' treats a brand-ending error as if it were cheap.",
  },
  {
    itemType: "mc",
    prompt:
      "Before a 600-mile highway trip, a driver sees one tire near the wear bars. A blowout at speed could be deadly; a new tire costs $150. Which decision best follows?",
    mcOptions: [
      {
        text: "The tire looks worn, so keep an eye on it during the drive.",
        credit: 0.3,
      },
      {
        text: "A blowout is far worse than $150, so replace the tire before leaving.",
        credit: 0.6,
      },
      {
        text: "Because a high-speed blowout risks a fatal crash while a tire costs $150, let the lopsided downside set the priority: replace the tire before the trip, and first check the tread-depth gauge and inflation on all four so the worst failure is handled first.",
        credit: 1.0,
      },
      {
        text: "It hasn't failed yet and will probably hold, so drive on it to save the money.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Because a high-speed blowout risks a fatal crash while a tire costs $150, let the lopsided downside set the priority: replace the tire before the trip, and first check the tread-depth gauge and inflation on all four so the worst failure is handled first.",
    explanation:
      "Top credit weighs a fatal crash against $150 and checks all four first; driving because the tire 'will probably hold' bets a deadly error against a trivial cost.",
  },
  {
    itemType: "mc",
    prompt:
      "A finance clerk gets an email from 'the CEO' asking to wire $80,000 urgently. It's about 90% likely genuine, but wire-fraud spoofing happens. Which decision best follows?",
    mcOptions: [
      {
        text: "Because wiring $80,000 to a scammer is irreversible while a 30-second confirmation call costs almost nothing, let the cost of a wrong 'it's legit' call dominate: call the CEO on a known number to verify before sending.",
        credit: 1.0,
      },
      {
        text: "Losing $80,000 is far worse than a quick call, so verify before wiring.",
        credit: 0.6,
      },
      {
        text: "It's 90% likely the real CEO and marked urgent, so send the wire now.",
        credit: 0,
      },
      {
        text: "Wire requests can be sketchy, so be careful.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Because wiring $80,000 to a scammer is irreversible while a 30-second confirmation call costs almost nothing, let the cost of a wrong 'it's legit' call dominate: call the CEO on a known number to verify before sending.",
    explanation:
      "Full credit runs the near-free verification against an irreversible loss; sending on the 90% figure and the word 'urgent' ignores how cheaply the catastrophic error can be ruled out.",
  },
  {
    itemType: "mc",
    prompt:
      "A daycare is unsure whether a snack contains peanuts, and one child has a severe peanut allergy. Reading the full label takes a minute. Which decision best follows?",
    mcOptions: [
      {
        text: "It probably doesn't have peanuts, so go ahead and serve it.",
        credit: 0,
      },
      {
        text: "Allergies are serious, so be mindful at snack time.",
        credit: 0.3,
      },
      {
        text: "An allergic reaction is far worse than skipping one snack, so check the label first.",
        credit: 0.6,
      },
      {
        text: "Because giving a peanut to an allergic child could be fatal while withholding one snack costs almost nothing, let the asymmetry rule: don't serve it until you read the full ingredient list and check for a 'may contain' warning.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "Because giving a peanut to an allergic child could be fatal while withholding one snack costs almost nothing, let the asymmetry rule: don't serve it until you read the full ingredient list and check for a 'may contain' warning.",
    explanation:
      "Top credit weighs a fatal reaction against a trivial missed snack and reads the label first; serving on a guess treats a deadly error as if it were costless.",
  },
  {
    itemType: "mc",
    prompt:
      "An investor is about 65% confident a small biotech will double on an upcoming trial result, but if the trial fails the stock could fall 90%. Which decision best follows?",
    mcOptions: [
      {
        text: "The downside is frightening and the outcome is uncertain, so avoid the stock entirely and make no decision.",
        credit: 0,
      },
      {
        text: "A 90% loss would hurt far more than a double would help, so keep the position small.",
        credit: 0.6,
      },
      {
        text: "Because a wrong bet loses almost everything staked while a right one merely doubles it, size the position so even a total loss is survivable: take a small position, and first check the trial's prior-phase data and enrollment to see whether the 65% is even well-grounded.",
        credit: 1.0,
      },
      {
        text: "Biotech bets are risky, so don't go overboard.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Because a wrong bet loses almost everything staked while a right one merely doubles it, size the position so even a total loss is survivable: take a small position, and first check the trial's prior-phase data and enrollment to see whether the 65% is even well-grounded.",
    explanation:
      "Top credit sizes the bet to survive the worst case and checks the prior data; refusing to act at all because the downside is scary is the freeze dodge that names no test and no provisional move.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "An ER patient arrives with possible stroke symptoms; a clot-buster drug could restore function if it's a clot, but could cause fatal bleeding if it's actually a brain bleed. A CT scan takes fifteen minutes. Which decision best follows?",
    mcOptions: [
      {
        text: "Stroke symptoms are an emergency, so act fast.",
        credit: 0.3,
      },
      {
        text: "Because giving the clot-buster into an undetected bleed could kill the patient while a fifteen-minute CT only slightly delays treatment, let the fatal error set the order: scan first to rule out a bleed, then give the drug if it's a clot — testing the catastrophic branch before committing.",
        credit: 1.0,
      },
      {
        text: "Symptoms look like a clot, so give the clot-buster immediately to save time.",
        credit: 0,
      },
      {
        text: "Causing a bleed is far worse than a short delay, so get the CT before the drug.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your scan-first approach from the rival 'just treat the likely clot now,' and say what result would refute your approach.",
      modelAnswer:
        "Cheapest test: run the fifteen-minute CT before giving any drug — if it shows a bleed, withholding the clot-buster prevents a fatal error, and if it shows a clot, treatment proceeds with little lost. My approach is refuted if the delay itself measurably worsens outcomes more than the bleed risk it prevents, in which case immediate treatment would be the better bet.",
      yieldAnchors: [
        "A clot-buster helps a clot but can be fatal in a brain bleed",
        "A CT scan takes only fifteen minutes",
        "The symptoms could be either cause",
      ],
      riskAnchors: [
        "The CT shows whether it is a clot or a bleed",
        "Withholding the drug prevents a fatal bleed if confirmed",
        "The fifteen-minute delay does not materially worsen a clot outcome",
      ],
      defeatedBy: [
        "Treat the likely clot immediately without scanning",
        "Refuse to treat at all because both options are dangerous",
      ],
    },
    correctAnswer:
      "Because giving the clot-buster into an undetected bleed could kill the patient while a fifteen-minute CT only slightly delays treatment, let the fatal error set the order: scan first to rule out a bleed, then give the drug if it's a clot — testing the catastrophic branch before committing.",
    explanation:
      "Full credit lets the fatal-bleed downside order the steps and runs the scan first; treating immediately ignores the asymmetry, and refusing to treat at all freezes when a cheap test would resolve it.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A city engineer spots a hairline crack on a bridge carrying 20,000 cars a day. It's probably cosmetic, but if it's structural a collapse could be deadly. Closing one lane for inspection snarls traffic for a day. Which decision best follows?",
    mcOptions: [
      {
        text: "Because a structural failure could kill drivers while a day of traffic is merely annoying, let the catastrophic downside govern: close the affected lane and run an immediate ultrasonic and load inspection before reopening it to full traffic.",
        credit: 1.0,
      },
      {
        text: "A collapse is far worse than a day of traffic, so close the lane and inspect.",
        credit: 0.6,
      },
      {
        text: "The crack is probably cosmetic, so leave the bridge fully open and avoid the traffic mess.",
        credit: 0,
      },
      {
        text: "Cracks on bridges are worth noting, so watch it.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your close-and-inspect approach from the rival 'it's just cosmetic, leave it open,' and say what result would refute your approach.",
      modelAnswer:
        "Cheapest test: run an ultrasonic scan and a controlled load measurement on the cracked member while one lane is closed — if it reveals depth or movement under load, the closure was justified. My approach is refuted if the scan shows only surface scoring with no internal propagation or deflection, meaning the crack truly is cosmetic and full traffic can resume.",
      yieldAnchors: [
        "The bridge carries 20,000 cars a day",
        "A structural crack could cause a deadly collapse",
        "Closing a lane costs one day of traffic",
      ],
      riskAnchors: [
        "Ultrasonic scanning reveals crack depth",
        "Load testing shows whether the member deflects abnormally",
        "Inspection distinguishes surface scoring from propagation",
      ],
      defeatedBy: [
        "Leave the bridge fully open assuming it is cosmetic",
        "Close the whole bridge indefinitely without testing",
      ],
    },
    correctAnswer:
      "Because a structural failure could kill drivers while a day of traffic is merely annoying, let the catastrophic downside govern: close the affected lane and run an immediate ultrasonic and load inspection before reopening it to full traffic.",
    explanation:
      "Top credit lets a deadly collapse outweigh a day of traffic and inspects before reopening; leaving it open on a guess ignores the stakes, and closing the whole bridge with no test over-commits past what the data warrant.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A clinic's fridge alarm shows the vaccine cooler may have warmed above the safe range overnight. The vaccines are probably still potent, but injecting spoiled doses would leave patients unprotected without their knowing. Discarding the batch costs $6,000. Which decision best follows?",
    mcOptions: [
      {
        text: "Vaccine storage matters, so be careful with the batch.",
        credit: 0.3,
      },
      {
        text: "Silently failed protection is far worse than $6,000, so don't use the batch until it's verified.",
        credit: 0.6,
      },
      {
        text: "The alarm is probably a glitch and the doses are likely fine, so keep using them and save the $6,000.",
        credit: 0,
      },
      {
        text: "Because injecting spoiled vaccine leaves patients silently unprotected — a harm discovered only when they fall ill — while discarding merely costs $6,000, let the hidden, high-cost error rule: quarantine the batch and read the cooler's continuous temperature log before any dose is given.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your quarantine approach from the rival 'the alarm is a glitch, keep using them,' and say what result would refute your approach.",
      modelAnswer:
        "Cheapest test: pull the cooler's continuous temperature log to see whether the doses actually crossed the threshold and for how long. My approach is refuted if the log shows the temperature stayed in range the entire night, meaning the alarm was spurious and the batch is safe to use.",
      yieldAnchors: [
        "The cooler may have warmed above the safe range overnight",
        "Spoiled doses leave patients unprotected without their knowing",
        "Discarding the batch costs $6,000",
      ],
      riskAnchors: [
        "The temperature log shows whether the threshold was crossed",
        "The log shows how long any excursion lasted",
        "Quarantine prevents silent under-protection",
      ],
      defeatedBy: [
        "Keep using the doses assuming the alarm is a glitch",
        "Discard every batch on any alarm without reading the log",
      ],
    },
    correctAnswer:
      "Because injecting spoiled vaccine leaves patients silently unprotected — a harm discovered only when they fall ill — while discarding merely costs $6,000, let the hidden, high-cost error rule: quarantine the batch and read the cooler's continuous temperature log before any dose is given.",
    explanation:
      "Full credit weighs silent under-protection against a finite dollar loss and reads the log first; using the doses on a hunch ignores the hidden cost, while discarding on every alarm over-commits without checking.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An e-commerce team wants to run a risky database migration that would speed the site, but it falls during the week before the year's biggest sale, when an outage would cost millions. The migration probably succeeds. Which decision best follows?",
    mcOptions: [
      {
        text: "Because a failed migration during peak week could cost millions while delaying it only postpones a speedup, let the cost asymmetry decide: run it after the sale, and first rehearse the migration on a full production clone to learn whether the failure risk is real.",
        credit: 1.0,
      },
      {
        text: "A peak-week outage is far worse than a delayed speedup, so postpone the migration.",
        credit: 0.6,
      },
      {
        text: "Migrations are risky, so think it over.",
        credit: 0.3,
      },
      {
        text: "The migration will probably succeed and the speedup helps the sale, so run it now.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your delay-and-rehearse approach from the rival 'it'll probably work, run it now,' and say what result would refute your approach.",
      modelAnswer:
        "Cheapest test: replay the migration against a full production clone under simulated peak load and watch for failures or rollback time. My approach is refuted if the rehearsal completes cleanly and rolls back instantly under load, showing the peak-week risk is negligible and the speedup could safely help the sale.",
      yieldAnchors: [
        "A failed migration during peak week could cost millions",
        "Delaying only postpones a speedup",
        "The migration probably succeeds",
      ],
      riskAnchors: [
        "A production-clone rehearsal reveals failure modes",
        "Rollback time under load can be measured",
        "Peak-load simulation shows whether the risk is real",
      ],
      defeatedBy: [
        "Run the migration during peak week because it'll probably work",
        "Never attempt the migration at all out of fear",
      ],
    },
    correctAnswer:
      "Because a failed migration during peak week could cost millions while delaying it only postpones a speedup, let the cost asymmetry decide: run it after the sale, and first rehearse the migration on a full production clone to learn whether the failure risk is real.",
    explanation:
      "Top credit weighs a multimillion-dollar peak outage against a postponed speedup and rehearses first; running because it 'probably works' ignores the timing cost, while never migrating over-corrects.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A backcountry skier eyes a slope after fresh snow. The avalanche bulletin rates it 'considerable,' a slide is unlikely on this aspect but would be deadly, and a mellow ridge route reaches the same hut. Which decision best follows?",
    mcOptions: [
      {
        text: "Avalanche terrain demands respect, so be cautious out there.",
        credit: 0.3,
      },
      {
        text: "Burial is far worse than a longer route, so take the mellow ridge.",
        credit: 0.6,
      },
      {
        text: "Because a slide on this slope could bury and kill while the ridge route only adds time, let the fatal downside choose the line: ski the low-angle ridge, and before stepping onto any steep aspect dig a quick snow pit to test for the weak layer the bulletin warns of.",
        credit: 1.0,
      },
      {
        text: "A slide is unlikely on this aspect, so ski the steep slope to save effort.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your ridge-route approach from the rival 'a slide is unlikely, ski the steep slope,' and say what result would refute your approach.",
      modelAnswer:
        "Cheapest test: dig a quick snow pit and run a compression test to see whether the buried weak layer the bulletin describes actually fails. My approach is refuted if the column holds under hard taps with no clean shear, indicating the slope is well-bonded and the steeper line carries little real burial risk.",
      yieldAnchors: [
        "The bulletin rates the hazard 'considerable'",
        "A slide on this slope would be deadly",
        "A mellow ridge reaches the same hut",
      ],
      riskAnchors: [
        "A snow pit reveals the weak layer",
        "A compression test shows whether the column shears",
        "The ridge route avoids the avalanche path entirely",
      ],
      defeatedBy: [
        "Ski the steep slope because a slide is statistically unlikely",
        "Abandon the trip entirely despite a safe ridge option",
      ],
    },
    correctAnswer:
      "Because a slide on this slope could bury and kill while the ridge route only adds time, let the fatal downside choose the line: ski the low-angle ridge, and before stepping onto any steep aspect dig a quick snow pit to test for the weak layer the bulletin warns of.",
    explanation:
      "Full credit lets a deadly burial outweigh a low probability and tests the snowpack first; skiing the steep slope on 'unlikely' ignores the stakes, while abandoning a trip with a safe ridge over-reacts.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A snack brand discovers a supplier may have introduced trace sesame into a product not labeled for it. It's uncertain, but an unlabeled allergen could send a sensitive customer to the ER. Relabeling and a hold cost $50,000. Which decision best follows?",
    mcOptions: [
      {
        text: "Allergen labeling is important, so look into the supplier change.",
        credit: 0.3,
      },
      {
        text: "Because an unlabeled allergen could cause an anaphylactic reaction — irreversible harm — while a hold and relabel cost $50,000, let the medical downside lead: hold distribution and lab-test samples for sesame protein before any further shipment.",
        credit: 1.0,
      },
      {
        text: "It's only a trace and uncertain, so keep shipping and save the $50,000.",
        credit: 0,
      },
      {
        text: "An ER visit is far worse than $50,000, so hold the product until it's tested.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your hold-and-test approach from the rival 'it's only a trace, keep shipping,' and say what result would refute your approach.",
      modelAnswer:
        "Cheapest test: run an ELISA assay on samples for sesame protein and confirm the supplier's line-changeover records. My approach is refuted if the assay detects no sesame above the reaction threshold and the records show no shared equipment, meaning the existing label is accurate and shipping can continue.",
      yieldAnchors: [
        "A supplier may have introduced trace sesame",
        "An unlabeled allergen could send a customer to the ER",
        "A hold and relabel cost $50,000",
      ],
      riskAnchors: [
        "An ELISA assay detects sesame protein",
        "Supplier changeover records show shared-equipment risk",
        "Testing confirms whether the label is accurate",
      ],
      defeatedBy: [
        "Keep shipping because the contamination is only a trace",
        "Destroy all stock on suspicion without ever testing it",
      ],
    },
    correctAnswer:
      "Because an unlabeled allergen could cause an anaphylactic reaction — irreversible harm — while a hold and relabel cost $50,000, let the medical downside lead: hold distribution and lab-test samples for sesame protein before any further shipment.",
    explanation:
      "Top credit weighs anaphylaxis against a finite cost and tests before shipping; continuing to ship because it's 'only a trace' ignores the stakes, while destroying all stock untested over-commits.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A bank's system flags a customer's $40,000 transfer as possibly fraudulent. It's about 75% likely the customer's own legitimate transfer, but releasing a fraudulent one is unrecoverable while a brief hold merely inconveniences a real customer. Which decision best follows?",
    mcOptions: [
      {
        text: "Because releasing a fraudulent transfer is unrecoverable while a short hold only inconveniences a real customer, let the irreversible loss set the order: hold the transfer and place a two-minute verification call to the customer's registered number before releasing it.",
        credit: 1.0,
      },
      {
        text: "An unrecoverable loss is worse than a minor inconvenience, so hold and verify.",
        credit: 0.6,
      },
      {
        text: "It's 75% likely legitimate, so release the transfer to avoid annoying the customer.",
        credit: 0,
      },
      {
        text: "Fraud flags are worth attention, so review it.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your hold-and-verify approach from the rival 'it's probably legit, release it,' and say what result would refute your approach.",
      modelAnswer:
        "Cheapest test: call the customer's registered number and confirm they initiated the transfer. My approach is refuted if such verification calls almost always confirm legitimacy and routinely cost the bank more in lost customers than the rare fraud they catch, in which case auto-release with post-hoc review would be better.",
      yieldAnchors: [
        "The transfer is flagged as possibly fraudulent",
        "Releasing a fraudulent transfer is unrecoverable",
        "A hold only briefly inconveniences a real customer",
      ],
      riskAnchors: [
        "A verification call confirms the customer initiated it",
        "The hold prevents an irreversible payout if fraudulent",
        "The two-minute check costs little against the loss",
      ],
      defeatedBy: [
        "Release the transfer because it's probably legitimate",
        "Freeze the account permanently without contacting the customer",
      ],
    },
    correctAnswer:
      "Because releasing a fraudulent transfer is unrecoverable while a short hold only inconveniences a real customer, let the irreversible loss set the order: hold the transfer and place a two-minute verification call to the customer's registered number before releasing it.",
    explanation:
      "Full credit weighs an unrecoverable payout against a brief inconvenience and verifies first; releasing on the 75% figure ignores the asymmetry, while a permanent freeze over-commits past the evidence.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A construction crew is set to pour a large concrete foundation, but the forecast gives a 35% chance of heavy rain in the next hours; rain during curing could ruin the pour and force costly demolition. Delaying loses a day of scheduled crew time. Which decision best follows?",
    mcOptions: [
      {
        text: "Weather can affect concrete, so keep an eye on the sky.",
        credit: 0.3,
      },
      {
        text: "A ruined pour is far worse than a lost day, so wait for a clearer window.",
        credit: 0.6,
      },
      {
        text: "It's only 35% likely to rain, so pour now and keep the schedule.",
        credit: 0,
      },
      {
        text: "Because a rained-out pour means demolition and a re-pour while delaying only costs a day of crew time, let the lopsided cost decide: wait for a clear window, and first check the radar and hourly precipitation odds to see whether a safe gap is actually opening.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your wait-for-a-window approach from the rival 'it's only 35%, pour now,' and say what result would refute your approach.",
      modelAnswer:
        "Cheapest test: check live radar and hour-by-hour precipitation probability across the full curing window. My approach is refuted if the radar shows the cells moving away and the next several hours read near-zero rain probability, in which case pouring now safely keeps the schedule.",
      yieldAnchors: [
        "A rained-out pour forces demolition and a re-pour",
        "Delaying costs one day of crew time",
        "The forecast gives a 35% chance of rain",
      ],
      riskAnchors: [
        "Radar shows whether cells are approaching or leaving",
        "Hourly precipitation odds cover the curing window",
        "A clear gap can be confirmed before pouring",
      ],
      defeatedBy: [
        "Pour now because rain is only 35% likely",
        "Cancel the pour indefinitely regardless of the forecast",
      ],
    },
    correctAnswer:
      "Because a rained-out pour means demolition and a re-pour while delaying only costs a day of crew time, let the lopsided cost decide: wait for a clear window, and first check the radar and hourly precipitation odds to see whether a safe gap is actually opening.",
    explanation:
      "Top credit weighs an expensive re-pour against one lost day and reads the radar first; pouring on the 35% figure ignores the asymmetry, while canceling indefinitely over-reacts to a checkable forecast.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A chemical plant's sensor shows a reactor running slightly hot, possibly a faulty probe but possibly an early runaway that could rupture the vessel. A controlled shutdown costs a day of lost output. Which decision best follows?",
    mcOptions: [
      {
        text: "Because a runaway reaction could rupture the vessel and injure workers while a shutdown only costs a day's output, let the catastrophic branch lead: begin a controlled shutdown and cross-check a second independent temperature probe and the coolant flow to confirm whether the reading is real.",
        credit: 1.0,
      },
      {
        text: "An explosion is far worse than a day of output, so shut down and check.",
        credit: 0.6,
      },
      {
        text: "It's probably just a flaky probe, so keep running to avoid losing output.",
        credit: 0,
      },
      {
        text: "Reactor readings matter, so monitor it closely.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your shutdown approach from the rival 'it's just a flaky probe, keep running,' and say what result would refute your approach.",
      modelAnswer:
        "Cheapest test: read a second independent temperature probe and the coolant-flow rate on the same reactor. My approach is refuted if the independent probe reads normal and coolant flow is steady, indicating the first sensor is faulty and a full shutdown is unnecessary.",
      yieldAnchors: [
        "The sensor shows the reactor running hot",
        "A runaway could rupture the vessel and injure workers",
        "A controlled shutdown costs a day of output",
      ],
      riskAnchors: [
        "A second independent probe confirms or denies the reading",
        "Coolant-flow data shows whether cooling has failed",
        "A controlled shutdown prevents a rupture if real",
      ],
      defeatedBy: [
        "Keep running because the probe is probably faulty",
        "Trigger an emergency dump on a single reading without cross-checking",
      ],
    },
    correctAnswer:
      "Because a runaway reaction could rupture the vessel and injure workers while a shutdown only costs a day's output, let the catastrophic branch lead: begin a controlled shutdown and cross-check a second independent temperature probe and the coolant flow to confirm whether the reading is real.",
    explanation:
      "Full credit weighs a vessel rupture against a day's output and cross-checks an independent probe; running because the probe is 'probably flaky' ignores the stakes, while a panicked emergency dump on one reading over-commits.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A small water utility's monitor shows a possible spike in a harmful contaminant serving 30,000 residents. The reading might be a sensor error, but if real, untreated exposure could cause illness; a boil-water notice causes public disruption and costs the utility's credibility if it's a false alarm. In one paragraph, propose the strongest course of action and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest move is to let the asymmetric cost of a wrong 'all clear' — sickening thousands, which is far harder to undo than a precautionary notice — govern the decision: issue a precautionary boil-water advisory now while running the fast confirmatory tests, rather than waiting for certainty. This commits hard yet stays reversible, and it spawns checkable steps: pull a fresh grab sample and run a same-day lab assay to confirm the contaminant, cross-check a second independent sensor at the same point to rule out probe failure, and review the treatment logs and source data for an event that would explain a real spike. I would lift the advisory the moment the lab assay and the independent sensor both read clean, and escalate to full treatment if they confirm the spike — so the action scales with both the probability and the stakes rather than freezing on either.",
      yieldAnchors: [
        "The monitor shows a possible contaminant spike",
        "30,000 residents are served by the system",
        "A false alarm costs disruption and credibility",
      ],
      riskAnchors: [
        "A same-day lab assay confirms or denies the contaminant",
        "An independent sensor rules out probe failure",
        "Treatment and source logs explain a real spike",
      ],
      defeatedBy: [
        "Wait for full certainty before warning anyone because it's probably a sensor error",
        "Do nothing at all because the data are ambiguous",
        "Permanently shut the whole system on one unconfirmed reading",
      ],
    },
    correctAnswer:
      "The strongest move is to let the asymmetric cost of a wrong 'all clear' — sickening thousands, which is far harder to undo than a precautionary notice — govern the decision: issue a precautionary boil-water advisory now while running the fast confirmatory tests, rather than waiting for certainty. This commits hard yet stays reversible, and it spawns checkable steps: pull a fresh grab sample and run a same-day lab assay to confirm the contaminant, cross-check a second independent sensor at the same point to rule out probe failure, and review the treatment logs and source data for an event that would explain a real spike. I would lift the advisory the moment the lab assay and the independent sensor both read clean, and escalate to full treatment if they confirm the spike — so the action scales with both the probability and the stakes rather than freezing on either.",
    explanation:
      "Under CCR, waiting for certainty because it's 'probably a sensor error' scores near-zero, and so does freezing on ambiguity; top credit takes the cheap, reversible protective action whose wrong version is survivable and names the tests that resolve it.",
  },
  {
    itemType: "written",
    prompt:
      "A surgeon faces a patient with borderline appendicitis: imaging is equivocal, an appendix that bursts is dangerous, but an unnecessary operation carries its own surgical risk. In one paragraph, propose the strongest course of action and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest move is to let the relative cost of each error, not the bare coin-flip odds, drive the decision: a missed appendicitis that perforates is far more dangerous and harder to reverse than a short period of close observation, so admit the patient for active monitoring rather than either operating immediately or sending them home. This commits to a plan while keeping it cheaply revisable, and it generates discriminating checks: re-examine for worsening localized pain and rebound tenderness over the next few hours, repeat the white-cell count to see whether inflammation is climbing, and obtain a focused ultrasound or CT to resolve the equivocal imaging. I would move to surgery the moment the trend or the rescan confirms appendicitis, and discharge if the labs settle and pain resolves — escalating the commitment in step with both the rising probability and the high cost of being wrong.",
      yieldAnchors: [
        "Imaging is equivocal",
        "A burst appendix is dangerous",
        "An unnecessary operation carries surgical risk",
      ],
      riskAnchors: [
        "Serial exams show whether pain is localizing and worsening",
        "A repeat white-cell count shows whether inflammation is climbing",
        "A focused rescan resolves the equivocal imaging",
      ],
      defeatedBy: [
        "Operate immediately despite equivocal imaging",
        "Send the patient home because it's only borderline",
        "Refuse to decide because both options carry risk",
      ],
    },
    correctAnswer:
      "The strongest move is to let the relative cost of each error, not the bare coin-flip odds, drive the decision: a missed appendicitis that perforates is far more dangerous and harder to reverse than a short period of close observation, so admit the patient for active monitoring rather than either operating immediately or sending them home. This commits to a plan while keeping it cheaply revisable, and it generates discriminating checks: re-examine for worsening localized pain and rebound tenderness over the next few hours, repeat the white-cell count to see whether inflammation is climbing, and obtain a focused ultrasound or CT to resolve the equivocal imaging. I would move to surgery the moment the trend or the rescan confirms appendicitis, and discharge if the labs settle and pain resolves — escalating the commitment in step with both the rising probability and the high cost of being wrong.",
    explanation:
      "Sending the patient home because it's 'only borderline' and refusing to decide both earn near-zero; top credit chooses the monitored path whose wrong version is cheap to correct and names the serial tests that decide it.",
  },
  {
    itemType: "written",
    prompt:
      "A device maker learns a small fraction of a shipped laptop battery model may overheat. A full recall is expensive and damages the brand; a firmware patch that caps charging is cheap but only works if the cause is charge-related, and an overheating battery could cause a fire. In one paragraph, propose the strongest course of action and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest move is to let the fire risk — an irreversible, potentially injurious outcome — outweigh the brand and cost concerns and to act before knowing the exact mechanism: push the cheap charge-capping firmware patch immediately as a reversible stopgap while investigating, since it cannot make things worse and may remove the hazard if charging is the trigger. This commits without over-committing, and it spawns tests that decide the larger question: pull field telemetry to see whether overheating events cluster at high charge levels, teardown-test returned units to find whether the fault is a cell defect or a charge-control issue, and run a sample of patched units under stress to confirm the cap actually suppresses the thermal events. I would escalate to a full recall if teardown shows an intrinsic cell defect the patch can't address, and hold at the patch if telemetry and stress tests show it eliminates the events — scaling the response to both the evidence and the cost of a fire.",
      yieldAnchors: [
        "A small fraction of batteries may overheat",
        "A full recall is expensive and damages the brand",
        "A firmware patch is cheap but only helps if charge-related",
      ],
      riskAnchors: [
        "Field telemetry shows whether events cluster at high charge",
        "Teardown reveals a cell defect versus a charge-control fault",
        "Stress-testing patched units confirms the cap suppresses events",
      ],
      defeatedBy: [
        "Do nothing until the exact cause is known because overheating is rare",
        "Ignore the fire risk and keep selling on the low failure rate",
        "Launch a full recall before checking whether a cheap patch suffices",
      ],
    },
    correctAnswer:
      "The strongest move is to let the fire risk — an irreversible, potentially injurious outcome — outweigh the brand and cost concerns and to act before knowing the exact mechanism: push the cheap charge-capping firmware patch immediately as a reversible stopgap while investigating, since it cannot make things worse and may remove the hazard if charging is the trigger. This commits without over-committing, and it spawns tests that decide the larger question: pull field telemetry to see whether overheating events cluster at high charge levels, teardown-test returned units to find whether the fault is a cell defect or a charge-control issue, and run a sample of patched units under stress to confirm the cap actually suppresses the thermal events. I would escalate to a full recall if teardown shows an intrinsic cell defect the patch can't address, and hold at the patch if telemetry and stress tests show it eliminates the events — scaling the response to both the evidence and the cost of a fire.",
    explanation:
      "Waiting for the exact cause because failures are rare and selling on the low rate both score near-zero against a fire risk; top credit takes the cheap reversible safeguard now and names the tests that decide whether a costlier recall is warranted.",
  },
  {
    itemType: "written",
    prompt:
      "An airline notices a single altitude-sensor anomaly on one aircraft in its fleet of forty. Grounding all forty for inspection is enormously costly and strands thousands of passengers; but if the anomaly reflects a systemic flaw, a failure in flight could be catastrophic. In one paragraph, propose the strongest course of action and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest move is to let the catastrophic, irreversible cost of an in-flight failure shape a graduated response rather than treating a fleet grounding as all-or-nothing: ground and inspect the one affected aircraft immediately, and require a quick targeted check of the same sensor on the rest before their next flights, rather than either grounding all forty outright or dismissing it as a one-off. This commits proportionally and generates discriminating evidence: download the affected jet's flight-data recorder to see whether the anomaly was a true sensor fault or a transient, pull maintenance records to check whether the suspect sensors share a batch or service interval, and run the targeted bench check that would reveal a systemic defect cheaply. I would escalate to a full grounding only if the data or shared-batch records point to a fleet-wide flaw, and clear aircraft that pass the targeted check — letting the depth of the response track both the probability of a systemic cause and the cost of a crash.",
      yieldAnchors: [
        "One aircraft in forty showed a sensor anomaly",
        "Grounding all forty is enormously costly",
        "A systemic flaw could cause a catastrophic in-flight failure",
      ],
      riskAnchors: [
        "The flight-data recorder shows a true fault versus a transient",
        "Maintenance records reveal a shared batch or service interval",
        "A targeted bench check exposes a systemic defect cheaply",
      ],
      defeatedBy: [
        "Dismiss it as a one-off and keep the whole fleet flying",
        "Ground all forty aircraft immediately without any triage",
        "Refuse to fly any aircraft ever again out of fear",
      ],
    },
    correctAnswer:
      "The strongest move is to let the catastrophic, irreversible cost of an in-flight failure shape a graduated response rather than treating a fleet grounding as all-or-nothing: ground and inspect the one affected aircraft immediately, and require a quick targeted check of the same sensor on the rest before their next flights, rather than either grounding all forty outright or dismissing it as a one-off. This commits proportionally and generates discriminating evidence: download the affected jet's flight-data recorder to see whether the anomaly was a true sensor fault or a transient, pull maintenance records to check whether the suspect sensors share a batch or service interval, and run the targeted bench check that would reveal a systemic defect cheaply. I would escalate to a full grounding only if the data or shared-batch records point to a fleet-wide flaw, and clear aircraft that pass the targeted check — letting the depth of the response track both the probability of a systemic cause and the cost of a crash.",
    explanation:
      "Dismissing the anomaly as a one-off risks a catastrophe and scores near-zero, while a blanket grounding over-commits past one data point; top credit grounds the affected jet, runs cheap targeted checks first, and names what would justify escalation.",
  },
  {
    itemType: "written",
    prompt:
      "A school must decide whether to hold its outdoor graduation as a line of thunderstorms approaches with a 40% chance of arriving during the ceremony. Moving indoors cramps the event and disappoints families; lightning over an open field full of people could be deadly. In one paragraph, propose the strongest course of action and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest move is to let the deadly, irreversible cost of a lightning strike on a crowd outweigh the disappointment of a cramped indoor venue and to commit to the safe default while staying ready to revise: plan to hold the ceremony indoors (or move it earlier ahead of the front) rather than gambling the open field on a 40% miss. This commits firmly yet keeps a cheap off-ramp, and it generates checkable triggers: watch high-resolution radar and lightning-detection feeds for the storm's speed and track, monitor the National Weather Service timing window against the ceremony schedule, and set an explicit rule that any detected strike within a fixed radius forces immediate shelter. I would keep the event outdoors only if the radar shows the line clearly slowing or veering away with a comfortable buffer, and move in the moment the trigger trips — scaling the decision to both the probability and the lethal stakes rather than freezing or hoping.",
      yieldAnchors: [
        "A line of storms has a 40% chance of arriving during the ceremony",
        "Moving indoors cramps the event and disappoints families",
        "Lightning over a crowded open field could be deadly",
      ],
      riskAnchors: [
        "Radar and lightning feeds show the storm's speed and track",
        "The NWS timing window can be matched to the schedule",
        "A strike-within-radius rule forces immediate shelter",
      ],
      defeatedBy: [
        "Hold it outdoors because the storm will probably miss",
        "Cancel graduation entirely rather than move it indoors",
        "Put off deciding because the forecast is uncertain",
      ],
    },
    correctAnswer:
      "The strongest move is to let the deadly, irreversible cost of a lightning strike on a crowd outweigh the disappointment of a cramped indoor venue and to commit to the safe default while staying ready to revise: plan to hold the ceremony indoors (or move it earlier ahead of the front) rather than gambling the open field on a 40% miss. This commits firmly yet keeps a cheap off-ramp, and it generates checkable triggers: watch high-resolution radar and lightning-detection feeds for the storm's speed and track, monitor the National Weather Service timing window against the ceremony schedule, and set an explicit rule that any detected strike within a fixed radius forces immediate shelter. I would keep the event outdoors only if the radar shows the line clearly slowing or veering away with a comfortable buffer, and move in the moment the trigger trips — scaling the decision to both the probability and the lethal stakes rather than freezing or hoping.",
    explanation:
      "Holding it outdoors because the storm 'will probably miss' bets lives on a 40% chance and earns near-zero, as does freezing on uncertainty; top credit takes the safe default, keeps a cheap off-ramp, and names the radar triggers that would change the call.",
  },
];

export const section: SectionContent = {
  slug: "cost-of-being-wrong",
  title: "The Cost of Being Wrong",
  weekNumber: 4,
  blurb:
    "Commitment should scale with both probability and the asymmetric cost of error: a likely-but-catastrophic-if-wrong call demands more hedging and a different first test than an unlikely-but-cheap one.",
  lectureTitle:
    "4.1 The Cost of Being Wrong: letting stakes, not just probability, govern commitment",
  body: `# The Cost of Being Wrong

Two reasoners look at the same uncertain situation. One freezes — "it's too risky, let's not decide." The other charges ahead on the raw odds — "it's 80% likely fine, so go." Both are wrong, because both ignore the same thing: **the cost of being wrong is rarely the same in each direction.** Constructive reasoning commits, but it lets that commitment scale with *both* how probable a conclusion is *and* how expensive it would be to act on it and be wrong.

## Two errors are rarely equal

Every real decision risks two errors: acting when you shouldn't have, and not acting when you should have. The lazy move treats them as symmetric and decides on probability alone. The strong move asks: *if I'm wrong this way, what does it cost — and if I'm wrong that way?* A wrong "the chicken is fine" can sicken hundreds; a wrong "reheat it" costs ten minutes. When the costs are that lopsided, a 5% chance of the catastrophic error can outweigh an 80% chance of the trivial one. Probability sets the odds; stakes set what each outcome is worth.

## Run the cheap test against the costly error first

Once you see which error is catastrophic, your *first* test should be the one that bounds it. A clinician facing chest pain that's probably indigestion still runs the ECG first, because the cheap ten-minute test rules out the one error that could kill. Don't sequence your checks by likelihood; sequence them by the cost of getting that branch wrong. The constructive question is not just "what's most probable?" but "what's the cheapest thing I can do right now that caps the worst outcome?"

## Size the commitment to what a wrong call would cost

Stakes don't only choose *whether* to act — they choose *how hard* to commit. A startup shouldn't bet its last month of cash on an unproven channel even at good odds, because a wrong bet is fatal while a wrong conservative choice is merely slow. So you cap the bet: act on the best model, but size the action so that being wrong is survivable. Reversible, bounded commitments let you commit harder; irreversible ones demand more hedging and verification before you pull the trigger.

## Why probability-only loses — and why freezing loses too

Deciding on the bare odds ("it'll probably hold") is reckless: it treats a deadly error as if it were cheap. But the opposite failure — refusing to decide because the downside is scary — is just as empty. The freeze names no test, makes no provisional bet, and learns nothing. Both earn zero here. The constructive move never says "we can't know"; it says "here is the safe default, here is the cheap test that would change it, and here is what I'll do meanwhile."

## Overreach still loses

Letting stakes govern is not a license to over-react. Grounding an entire fleet over a single sensor blip, or destroying every batch on any alarm, commits far past what one data point supports. The disciplined response is *graduated*: handle the one confirmed problem, run the cheap targeted check on the rest, and escalate only if the evidence grows. Match the size of the response to both the probability and the cost — neither under nor over.

## In the real world

A finance clerk gets an "urgent" email from the CEO to wire $80,000. It's 90% likely real. The reckless move wires it; the frozen move sits on it. The constructive move sees that a wrong "it's legit" is irreversible while a 30-second call costs nothing — so it runs that one cheap check against the catastrophic branch first, then acts. That is what letting stakes govern looks like: not more caution everywhere, but the right test, in the right order, sized to what being wrong would actually cost.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
