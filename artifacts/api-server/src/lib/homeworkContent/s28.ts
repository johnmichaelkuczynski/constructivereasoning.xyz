import type { SectionContent, HomeworkItem } from "./types";

const mcq: HomeworkItem[] = [
  {
    itemType: "mc",
    prompt:
      "A baker switched to a new flour expecting taller loaves, but they came out flat. The plan assumed the yeast would proof, the dough would rise, and the loaf would hold in the oven. This batch's dough barely rose in the bowl before baking. Which response best follows?",
    mcOptions: [
      {
        text: "The rise failed before the oven, so the proofing step is the suspect; test whether the yeast foams in warm sugar water, whether a known-good yeast lifts this same flour, and whether the kitchen was cold enough to stall the proof.",
        credit: 1.0,
      },
      {
        text: "Something in the proofing likely went wrong; proof another batch and see if it rises.",
        credit: 0.6,
      },
      {
        text: "Some step in the process must have broken somewhere.",
        credit: 0.3,
      },
      {
        text: "The new flour clearly can't make good bread, so abandon the whole recipe and go back to the old one.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The rise failed before the oven, so the proofing step is the suspect; test whether the yeast foams in warm sugar water, whether a known-good yeast lifts this same flour, and whether the kitchen was cold enough to stall the proof.",
    explanation:
      "The dough barely rose, which pinpoints the proofing link, and the top answer tests exactly that assumption; junking the whole recipe discards the parts that may be fine, the zero-credit dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A marketer expected a redesigned newsletter to lift clicks: emails would be delivered, opened, then clicked. After launch clicks were flat — but the dashboard shows the open rate held at its usual 30%, while delivery fell from 98% to 70%. Which response best follows?",
    mcOptions: [
      {
        text: "Some part of the email funnel underperformed.",
        credit: 0.3,
      },
      {
        text: "Delivery, not the design, is the broken link since opens held steady; test whether the new template trips spam filters, whether the undelivered 28% share a domain or provider, and whether a plain-text send restores delivery.",
        credit: 1.0,
      },
      {
        text: "The redesign failed, so revert every change and treat the new template as a dead idea.",
        credit: 0,
      },
      {
        text: "Delivery probably slipped; resend the campaign and watch the numbers.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Delivery, not the design, is the broken link since opens held steady; test whether the new template trips spam filters, whether the undelivered 28% share a domain or provider, and whether a plain-text send restores delivery.",
    explanation:
      "Steady opens but collapsed delivery isolates the delivery assumption, and the top answer probes that link; reverting everything ignores that the design (open rate) actually worked.",
  },
  {
    itemType: "mc",
    prompt:
      "Engineers predicted a steel footbridge's strain gauge would read higher stress at midday as the deck heats and expands: deck heats, steel expands, gauge registers strain. On a hot day the reading stayed flat. A separate thermocouple confirms the deck reached 50°C. Which response best follows?",
    mcOptions: [
      {
        text: "Heating clearly happened, so the break is downstream at the gauge or its mount; test whether the gauge responds to a known test load, whether its wiring is intact, and whether a second gauge on the same span shows the expected midday rise.",
        credit: 1.0,
      },
      {
        text: "The thermal-expansion theory is wrong, so discard the model and stop monitoring the bridge.",
        credit: 0,
      },
      {
        text: "The gauge probably failed; swap in a new one and re-measure.",
        credit: 0.6,
      },
      {
        text: "Part of the measurement chain didn't work as expected.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Heating clearly happened, so the break is downstream at the gauge or its mount; test whether the gauge responds to a known test load, whether its wiring is intact, and whether a second gauge on the same span shows the expected midday rise.",
    explanation:
      "Confirmed heating rules out the early links and points at the gauge, which the top answer tests; discarding well-established thermal expansion overreaches from a single flat reading.",
  },
  {
    itemType: "mc",
    prompt:
      "A gardener added nitrogen fertilizer expecting bigger tomato yields: nutrients dissolve, roots absorb them, fruiting increases. Yield was unchanged, the leaves stayed pale green, and a soil test reads pH 8.2. Which response best follows?",
    mcOptions: [
      {
        text: "Absorption probably failed; apply more fertilizer next season.",
        credit: 0.6,
      },
      {
        text: "Something in the nutrient pathway didn't work.",
        credit: 0.3,
      },
      {
        text: "Pale leaves plus high pH point to blocked uptake, not the dosing; test whether lowering soil pH with sulfur greens the leaves, whether a foliar nitrogen spray that bypasses the roots boosts growth, and whether potted plants in neutral soil respond to the same fertilizer.",
        credit: 1.0,
      },
      {
        text: "Fertilizer obviously does nothing for tomatoes, so stop fertilizing altogether.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Pale leaves plus high pH point to blocked uptake, not the dosing; test whether lowering soil pH with sulfur greens the leaves, whether a foliar nitrogen spray that bypasses the roots boosts growth, and whether potted plants in neutral soil respond to the same fertilizer.",
    explanation:
      "Pale leaves and alkaline soil localize the failure to root uptake, and the foliar bypass cleanly tests it; 'fertilizer does nothing' ignores that uptake, not the nutrient, is the implicated link.",
  },
  {
    itemType: "mc",
    prompt:
      "A developer added a cache expecting faster page loads: requests hit the cache, skip the database, and return quickly. Load times barely moved. Logs show a 95% cache hit rate, yet every page still waits on a slow 400ms call to a third-party API. Which response best follows?",
    mcOptions: [
      {
        text: "The cache works at 95% hits, so the bottleneck is the external API call instead; test whether stubbing that API drops load time, whether caching its response too helps, and whether the remaining slow loads all wait on that one call.",
        credit: 1.0,
      },
      {
        text: "Some piece of the request path is still slow.",
        credit: 0.3,
      },
      {
        text: "The bottleneck is probably elsewhere; profile the page and look around.",
        credit: 0.6,
      },
      {
        text: "Caching clearly doesn't help this app, so rip it out and try something else entirely.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The cache works at 95% hits, so the bottleneck is the external API call instead; test whether stubbing that API drops load time, whether caching its response too helps, and whether the remaining slow loads all wait on that one call.",
    explanation:
      "A high hit rate exonerates the cache and the API timing names the real link, which the top answer tests; ripping out a working cache throws away a sound part of the model.",
  },
  {
    itemType: "mc",
    prompt:
      "A coach sent runners to altitude expecting faster sea-level 10Ks: thin air raises red-blood-cell count, oxygen delivery improves, times drop. Times were unchanged. Blood tests show red-cell counts never rose, and the athletes stayed only nine days. Which response best follows?",
    mcOptions: [
      {
        text: "Altitude training is a myth, so drop the whole approach for the team.",
        credit: 0,
      },
      {
        text: "The first link failed — red cells never rose, likely because nine days is too short; test whether a three-week camp raises red-cell counts, whether those who do show a rise also run faster, and whether low iron status blunted the response.",
        credit: 1.0,
      },
      {
        text: "The blood adaptation probably didn't happen; try another altitude camp.",
        credit: 0.6,
      },
      {
        text: "Some stage of the adaptation didn't occur.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The first link failed — red cells never rose, likely because nine days is too short; test whether a three-week camp raises red-cell counts, whether those who do show a rise also run faster, and whether low iron status blunted the response.",
    explanation:
      "Flat red-cell counts pin the break at the adaptation link, not the oxygen-to-speed logic, and the top answer tests duration and iron; calling it a myth discards a chain whose first step simply never fired.",
  },
  {
    itemType: "mc",
    prompt:
      "A teacher rolled out a flashcard app expecting higher test scores: students drill daily, retain more, score better. Scores were flat. Analytics show most students opened the app only twice all term, but the few who used it daily did score higher. Which response best follows?",
    mcOptions: [
      {
        text: "The usage link broke — almost no one drilled daily, yet daily users improved; test whether assigning in-class app time raises scores, whether reminders lift daily use, and whether higher usage tracks higher gains across students.",
        credit: 1.0,
      },
      {
        text: "Students probably didn't use it enough; encourage them to use it more.",
        credit: 0.6,
      },
      {
        text: "The app doesn't improve scores, so cancel the program.",
        credit: 0,
      },
      {
        text: "Some part of the study plan didn't take hold.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The usage link broke — almost no one drilled daily, yet daily users improved; test whether assigning in-class app time raises scores, whether reminders lift daily use, and whether higher usage tracks higher gains across students.",
    explanation:
      "Low usage plus the daily-users' gains localize the failure to adoption, not the app's effect, and the top answer tests adoption levers; cancelling ignores that the chain worked where it was actually followed.",
  },
  {
    itemType: "mc",
    prompt:
      "A plant switched lubricants expecting less downtime: smoother bearings cut friction, reduce wear, and lower breakdowns. Downtime held steady. The maintenance log shows nearly all stoppages this quarter were electrical faults, not bearing failures. Which response best follows?",
    mcOptions: [
      {
        text: "Something about the downtime assumption was off.",
        credit: 0.3,
      },
      {
        text: "The new lubricant is useless, so revert and forget the idea.",
        credit: 0,
      },
      {
        text: "The chain targeted the wrong failure mode — stoppages are electrical, not mechanical; test whether bearing-related downtime specifically fell, whether electrical faults cluster on certain lines, and whether the lubricant still cut measured bearing wear even though total downtime didn't move.",
        credit: 1.0,
      },
      {
        text: "Downtime probably has another cause; look into the electrical side.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The chain targeted the wrong failure mode — stoppages are electrical, not mechanical; test whether bearing-related downtime specifically fell, whether electrical faults cluster on certain lines, and whether the lubricant still cut measured bearing wear even though total downtime didn't move.",
    explanation:
      "The log shows the predicted lever (bearing wear) was not what caused stoppages, so the model's premise about the failure mode broke; the top answer isolates that and still checks whether the lubricant did its narrow job.",
  },
  {
    itemType: "mc",
    prompt:
      "A shop launched a points program expecting more repeat visits: customers sign up, earn points, and return to redeem. Repeat visits were flat. Sign-ups were strong, but a survey shows most members don't know how to redeem their points. Which response best follows?",
    mcOptions: [
      {
        text: "The redemption step probably failed; explain the program better.",
        credit: 0.6,
      },
      {
        text: "Sign-up worked but the redemption link broke — members don't know how to redeem; test whether a redemption tutorial lifts return visits, whether members who have redeemed once return more, and whether simplified auto-redemption closes the gap.",
        credit: 1.0,
      },
      {
        text: "Some stage between joining and returning didn't work.",
        credit: 0.3,
      },
      {
        text: "Loyalty programs don't drive repeat business, so scrap it.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Sign-up worked but the redemption link broke — members don't know how to redeem; test whether a redemption tutorial lifts return visits, whether members who have redeemed once return more, and whether simplified auto-redemption closes the gap.",
    explanation:
      "Strong sign-ups but redemption confusion pin the break at the redemption link, which the top answer tests; scrapping the program ignores that the earlier links worked fine.",
  },
  {
    itemType: "mc",
    prompt:
      "Astronomers predicted a comet would peak in brightness on a set date as it neared the Sun: solar heat sublimates its ice into a glowing coma. It stayed dim. Spectra near the date show almost no water vapor but a lot of dust around the nucleus. Which response best follows?",
    mcOptions: [
      {
        text: "The sublimation assumption broke — little water vapor appeared, suggesting a dust-crusted or ice-poor nucleus; test whether the coma brightens after perihelion if a crust cracks, whether the spectrum stays dust-dominated, and whether its non-gravitational acceleration from outgassing is unusually small.",
        credit: 1.0,
      },
      {
        text: "Cometary brightening models are unreliable, so abandon predicting this object.",
        credit: 0,
      },
      {
        text: "The ice probably didn't sublimate as expected; keep watching it.",
        credit: 0.6,
      },
      {
        text: "Some part of the brightening process didn't happen.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The sublimation assumption broke — little water vapor appeared, suggesting a dust-crusted or ice-poor nucleus; test whether the coma brightens after perihelion if a crust cracks, whether the spectrum stays dust-dominated, and whether its non-gravitational acceleration from outgassing is unusually small.",
    explanation:
      "Low vapor plus dust localize the failure to the sublimation premise, and the top answer tests the crust idea through outgassing signs; abandoning the model overreaches from one missed call.",
  },
  {
    itemType: "mc",
    prompt:
      "A bistro added online reservations expecting fewer no-shows: a booking triggers a reminder text and reminded guests show up. No-shows held steady. The system shows reminders queued, but the SMS provider's logs show none were actually delivered this month. Which response best follows?",
    mcOptions: [
      {
        text: "Some step in the reminder flow isn't working.",
        credit: 0.3,
      },
      {
        text: "The reminders probably aren't getting through; check the texting setup.",
        credit: 0.6,
      },
      {
        text: "Reminders don't reduce no-shows, so drop the reservation system.",
        credit: 0,
      },
      {
        text: "The delivery link is broken — reminders queue but never send; test whether fixing the SMS integration makes texts arrive, whether guests who do receive a text show up more, and whether the provider rejected the sender number.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The delivery link is broken — reminders queue but never send; test whether fixing the SMS integration makes texts arrive, whether guests who do receive a text show up more, and whether the provider rejected the sender number.",
    explanation:
      "Queued-but-undelivered texts pinpoint the delivery link, which the top answer fixes and tests; dropping the system blames the concept for a plumbing fault.",
  },
  {
    itemType: "mc",
    prompt:
      "A trial expected antibody levels to jump after the second dose: the booster re-stimulates immune cells and raises titers. One clinic's participants showed no rise while every other clinic's did. That clinic's fridge logged a temperature excursion the week its doses arrived. Which response best follows?",
    mcOptions: [
      {
        text: "The break is local to that clinic's doses, likely a cold-chain failure rather than the booster biology; test whether re-dosing those participants with properly stored vaccine raises titers, whether the affected vials show degraded antigen, and whether the non-responders all came from the warmed batch.",
        credit: 1.0,
      },
      {
        text: "That clinic's doses were probably bad; revaccinate those people.",
        credit: 0.6,
      },
      {
        text: "The booster strategy doesn't work, so halt the second-dose protocol everywhere.",
        credit: 0,
      },
      {
        text: "Something went wrong at that one site.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The break is local to that clinic's doses, likely a cold-chain failure rather than the booster biology; test whether re-dosing those participants with properly stored vaccine raises titers, whether the affected vials show degraded antigen, and whether the non-responders all came from the warmed batch.",
    explanation:
      "One clinic plus a fridge excursion localize the failure to dose handling, not immunology, and the top answer tests the cold-chain hypothesis; halting everywhere ignores that every other clinic confirmed the model.",
  },
  {
    itemType: "mc",
    prompt:
      "A homebrewer fermented cooler expecting a cleaner beer: low temperature suppresses the harsh fusel alcohols of hot, fast fermentation. The beer still tasted solventy. A calibration check shows the fermentation-fridge thermostat reads 5°C low, so the beer actually fermented warm. Which response best follows?",
    mcOptions: [
      {
        text: "Temperature has no effect on beer flavor, so stop bothering with fermentation control.",
        credit: 0,
      },
      {
        text: "Something about the temperature plan didn't pan out.",
        credit: 0.3,
      },
      {
        text: "The cool-fermentation step never actually happened — the thermostat ran 5°C warm; test whether a calibrated probe confirms the true temperature, whether a batch held at a verified cool temperature comes out clean, and whether the off-flavors match warm-fermentation fusels rather than an infection.",
        credit: 1.0,
      },
      {
        text: "The temperature was probably off; recalibrate and brew again.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The cool-fermentation step never actually happened — the thermostat ran 5°C warm; test whether a calibrated probe confirms the true temperature, whether a batch held at a verified cool temperature comes out clean, and whether the off-flavors match warm-fermentation fusels rather than an infection.",
    explanation:
      "The miscalibration shows the intended cool step never occurred, so the model was never tested rather than refuted; concluding 'temperature doesn't matter' is exactly backwards, while the top answer verifies the step and reruns it.",
  },
  {
    itemType: "mc",
    prompt:
      "A courier firm deployed route-optimization software expecting lower fuel use: shorter routes mean fewer miles and less fuel. Fuel use was flat. Telematics show the trucks drove the same total miles as before — drivers mostly overrode the suggested routes. Which response best follows?",
    mcOptions: [
      {
        text: "Drivers probably aren't following the routes; ask them to comply.",
        credit: 0.6,
      },
      {
        text: "The adoption link broke — miles never fell because drivers overrode the routes; test whether trucks that did follow the software used less fuel, whether enforcing route adherence cuts miles, and whether overrides cluster on familiar areas.",
        credit: 1.0,
      },
      {
        text: "Route software doesn't save fuel, so cancel the contract.",
        credit: 0,
      },
      {
        text: "Some link between the software and fuel use failed.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The adoption link broke — miles never fell because drivers overrode the routes; test whether trucks that did follow the software used less fuel, whether enforcing route adherence cuts miles, and whether overrides cluster on familiar areas.",
    explanation:
      "Unchanged miles plus overrides localize the break to adoption, not the optimization logic, and the top answer tests compliant trucks; cancelling blames the tool for being ignored.",
  },
  {
    itemType: "mc",
    prompt:
      "A club player studied endgames hard expecting a rating climb: better endgame technique converts more games into wins. His rating stalled. Reviewing his losses shows almost all of them were decided in the opening, where he fell into bad positions before any endgame arose. Which response best follows?",
    mcOptions: [
      {
        text: "The training targeted a link that wasn't failing — his losses come from the opening, not the endgame; test whether the few games that reach endgames now score better, whether studying openings reduces early collapses, and whether his rating moves once opening blunders fall.",
        credit: 1.0,
      },
      {
        text: "Some part of his game still isn't working.",
        credit: 0.3,
      },
      {
        text: "His weakness is probably elsewhere; study a different phase.",
        credit: 0.6,
      },
      {
        text: "Studying chess doesn't raise rating, so give up on improving.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The training targeted a link that wasn't failing — his losses come from the opening, not the endgame; test whether the few games that reach endgames now score better, whether studying openings reduces early collapses, and whether his rating moves once opening blunders fall.",
    explanation:
      "Losses arising in the opening show the endgame link was not the broken one, so the top answer redirects testing to the actual failure while checking that endgame skill did improve; giving up overgeneralizes from a misaimed effort.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A vertical farm switched its LEDs to a red-heavy spectrum expecting faster lettuce growth: more usable light raises photosynthesis and speeds growth. Growth was unchanged. Sensors show light levels rose as planned, but the nutrient reservoir's nitrogen has been running low all month. Which response best follows?",
    mcOptions: [
      {
        text: "Light improved but the limiting factor is nitrogen, not photons; test whether topping up nitrogen unlocks the spectrum's benefit, whether trays on full nutrients grow faster under the new light, and whether tissue tests show a nitrogen deficiency.",
        credit: 1.0,
      },
      {
        text: "Some other input is probably limiting; check the nutrients.",
        credit: 0.6,
      },
      {
        text: "Something besides the light is holding growth back.",
        credit: 0.3,
      },
      {
        text: "The new spectrum doesn't help lettuce, so revert the lighting.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'nitrogen is limiting' lead from the rival 'the new spectrum simply doesn't help,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: restore nitrogen on half the trays while keeping the new light on all of them and compare growth — my lead predicts only the nitrogen-restored trays speed up. It is refuted if both halves stay equally slow, which would show the spectrum, not nitrogen, is the dead link.",
      yieldAnchors: [
        "Growth was unchanged after the spectrum switch",
        "Light levels rose as planned",
        "Reservoir nitrogen ran low all month",
      ],
      riskAnchors: [
        "Topping up nitrogen unlocks the spectrum's benefit",
        "Full-nutrient trays grow faster under the new light",
        "Tissue tests show a nitrogen deficiency",
      ],
      defeatedBy: [
        "The new spectrum simply doesn't help lettuce",
        "Light intensity never actually rose",
      ],
    },
    correctAnswer:
      "Light improved but the limiting factor is nitrogen, not photons; test whether topping up nitrogen unlocks the spectrum's benefit, whether trays on full nutrients grow faster under the new light, and whether tissue tests show a nitrogen deficiency.",
    explanation:
      "Confirmed light rules out the photon link and low nitrogen names the real bottleneck; the cheap split-tray test isolates it and states its own refutation, while reverting the light blames a step that worked.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A call center rolled out a new sales script expecting higher conversion: a tighter pitch persuades more callers to buy. Conversion was flat. Quality monitoring shows most agents are still working from the old script in their heads, and the few using the new one convert noticeably better. Which response best follows?",
    mcOptions: [
      {
        text: "The new script doesn't work, so go back to the old one.",
        credit: 0,
      },
      {
        text: "Some link between the script and sales broke.",
        credit: 0.3,
      },
      {
        text: "The break is adoption — most agents never switched, yet new-script users convert better; test whether coaching agents to use it raises their conversion, whether adherence scores track conversion, and whether reading from an on-screen prompt lifts use.",
        credit: 1.0,
      },
      {
        text: "Agents probably aren't using it; remind them to.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'agents didn't adopt it' lead from the rival 'the script itself is no better,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare conversion between calls scored as using the new script and those using the old one — my lead predicts the new-script calls convert higher. It is refuted if adherent and non-adherent agents convert the same, which would show the script, not adoption, is the failed link.",
      yieldAnchors: [
        "Conversion was flat after rollout",
        "Most agents still use the old script",
        "New-script users convert better",
      ],
      riskAnchors: [
        "Coaching agents to use it raises their conversion",
        "Adherence scores track conversion",
        "On-screen prompting lifts use",
      ],
      defeatedBy: [
        "The new script is no better than the old",
        "Conversion is fixed by lead quality alone",
      ],
    },
    correctAnswer:
      "The break is adoption — most agents never switched, yet new-script users convert better; test whether coaching agents to use it raises their conversion, whether adherence scores track conversion, and whether reading from an on-screen prompt lifts use.",
    explanation:
      "Low adoption plus the new-script users' edge localize the break to whether the script was used at all; the cheap adherence comparison isolates it, while reverting blames a script that worked where it was followed.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A cyclist fitted deep aero wheels expecting faster laps: less drag means more speed for the same effort. Lap times were unchanged. His power meter shows he held the same wattage, but his GPS shows every test session fell on a notably windier week than his baseline. Which response best follows?",
    mcOptions: [
      {
        text: "Conditions probably masked the gain; test on a calmer day.",
        credit: 0.6,
      },
      {
        text: "The wind likely confounded the test rather than the wheels failing; test whether laps in an indoor velodrome or on a calm day beat the old wheels at equal power, whether a coast-down test shows lower drag, and whether the slowdown scales with the headwind segments.",
        credit: 1.0,
      },
      {
        text: "Aero wheels make no difference, so sell them.",
        credit: 0,
      },
      {
        text: "Something kept the expected speed-up from showing.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'wind masked the gain' lead from the rival 'the wheels give no real benefit,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: ride back-to-back laps with the old and new wheels on the same calm day at equal power — my lead predicts the aero wheels are faster once wind is removed. It is refuted if they tie on a windless day too, which would show the wheels, not the weather, are the dead link.",
      yieldAnchors: [
        "Lap times unchanged with the aero wheels",
        "Wattage held steady",
        "Every session fell on a windier week",
      ],
      riskAnchors: [
        "Calm-day or indoor laps beat the old wheels at equal power",
        "A coast-down test shows lower drag",
        "The slowdown scales with the headwind segments",
      ],
      defeatedBy: [
        "Aero wheels give no real benefit",
        "He actually rode at lower power",
      ],
    },
    correctAnswer:
      "The wind likely confounded the test rather than the wheels failing; test whether laps in an indoor velodrome or on a calm day beat the old wheels at equal power, whether a coast-down test shows lower drag, and whether the slowdown scales with the headwind segments.",
    explanation:
      "Equal power plus a windier test week implicate the test conditions, not the wheels; the calm-day back-to-back isolates the wheel effect and names its refutation, while selling the wheels acts on an uncontrolled comparison.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A ward installed hand-sanitizer stations expecting fewer infections: easy access raises hand hygiene and cuts transmission. Infection rates held steady. Audits show usage of the stations is near zero, and the dispensers are mounted behind a supply cart where staff can't reach them. Which response best follows?",
    mcOptions: [
      {
        text: "The hygiene link never engaged — the dispensers are blocked, so usage stayed near zero; test whether relocating them to the doorway raises usage, whether wards with accessible stations see fewer infections, and whether usage and infection rates move together once access improves.",
        credit: 1.0,
      },
      {
        text: "Something between the stations and infections didn't work.",
        credit: 0.3,
      },
      {
        text: "Hand sanitizer doesn't prevent infections, so remove the stations.",
        credit: 0,
      },
      {
        text: "Staff probably aren't using them; encourage hand hygiene.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'access blocked usage' lead from the rival 'sanitizing doesn't cut infections here,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: move the dispensers to the doorway and watch whether usage climbs and infections follow — my lead predicts both improve once access is fixed. It is refuted if usage rises but infections hold steady, which would point past hand hygiene to another source.",
      yieldAnchors: [
        "Infection rates held steady",
        "Station usage is near zero",
        "Dispensers are mounted out of reach",
      ],
      riskAnchors: [
        "Relocating to the doorway raises usage",
        "Wards with accessible stations see fewer infections",
        "Usage and infection rates move together",
      ],
      defeatedBy: [
        "Sanitizing doesn't reduce infections here",
        "Infections come only from an environmental source",
      ],
    },
    correctAnswer:
      "The hygiene link never engaged — the dispensers are blocked, so usage stayed near zero; test whether relocating them to the doorway raises usage, whether wards with accessible stations see fewer infections, and whether usage and infection rates move together once access improves.",
    explanation:
      "Near-zero usage from blocked dispensers shows the hygiene step never happened, so the model was never run; the relocation test engages the link and names its refutation, while removing the stations concludes from an untried intervention.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A publisher commissioned a bolder cover expecting higher sales: a striking cover catches browsers' eyes and lifts purchases. Sales were flat. The print run shipped on time, but the online retailer's listing still shows the old cover thumbnail, and most sales are online. Which response best follows?",
    mcOptions: [
      {
        text: "The new cover probably isn't being seen; update the listings.",
        credit: 0.6,
      },
      {
        text: "A new cover doesn't move sales, so stop redesigning covers.",
        credit: 0,
      },
      {
        text: "Online buyers never saw the new cover — the thumbnail wasn't updated; test whether refreshing the online image lifts sales, whether in-store sales with the new cover already rose, and whether the sales bump appears only after the thumbnail changes.",
        credit: 1.0,
      },
      {
        text: "Some part of the cover plan didn't reach customers.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the new cover wasn't shown online' lead from the rival 'the cover doesn't affect sales,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare in-store sales, which show the new cover, against online sales, which still show the old one — my lead predicts in-store already rose. It is refuted if in-store sales with the new cover are also flat, which would show the cover itself is the dead link.",
      yieldAnchors: [
        "Sales were flat",
        "The print run shipped on time",
        "The online thumbnail still shows the old cover",
      ],
      riskAnchors: [
        "Refreshing the online image lifts sales",
        "In-store sales with the new cover already rose",
        "The bump appears only after the thumbnail changes",
      ],
      defeatedBy: [
        "A new cover doesn't affect sales",
        "The new cover never actually printed",
      ],
    },
    correctAnswer:
      "Online buyers never saw the new cover — the thumbnail wasn't updated; test whether refreshing the online image lifts sales, whether in-store sales with the new cover already rose, and whether the sales bump appears only after the thumbnail changes.",
    explanation:
      "A stale online thumbnail means most buyers never saw the cover, so the display link broke rather than the cover idea; the in-store-versus-online split isolates it, while abandoning redesigns reacts to a channel that never showed the change.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A winery aged a batch in oak barrels expecting vanilla notes: oak releases vanillin into the wine over months of contact. Tasters detected no vanilla. The barrels turn out to be ten-year-old neutral barrels that have already given up most of their extractable compounds. Which response best follows?",
    mcOptions: [
      {
        text: "Some part of the oak-aging process didn't deliver.",
        credit: 0.3,
      },
      {
        text: "The flavor source was depleted — the barrels are neutral, not the chemistry failing; test whether new oak barrels or fresh oak staves add vanilla to the same wine, whether longer contact with fresh oak helps, and whether the spent barrels impart any measurable vanillin.",
        credit: 1.0,
      },
      {
        text: "Oak aging doesn't add vanilla, so abandon barrel programs.",
        credit: 0,
      },
      {
        text: "The barrels were probably exhausted; try aging again.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'the barrels are spent' lead from the rival 'oak doesn't add vanilla,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: age a portion of the same wine on fresh oak staves alongside the neutral barrels — my lead predicts only the fresh-oak portion gains vanilla. It is refuted if fresh oak also adds none, which would undercut the oak-to-vanillin chain itself.",
      yieldAnchors: [
        "Tasters detected no vanilla",
        "The wine aged in oak barrels for months",
        "The barrels are ten-year-old neutral barrels",
      ],
      riskAnchors: [
        "New oak or fresh oak staves add vanilla to the same wine",
        "Longer contact with fresh oak helps",
        "The spent barrels impart little measurable vanillin",
      ],
      defeatedBy: [
        "Oak aging never adds vanilla",
        "The wine never actually contacted oak",
      ],
    },
    correctAnswer:
      "The flavor source was depleted — the barrels are neutral, not the chemistry failing; test whether new oak barrels or fresh oak staves add vanilla to the same wine, whether longer contact with fresh oak helps, and whether the spent barrels impart any measurable vanillin.",
    explanation:
      "Neutral, exhausted barrels mean the vanillin source was missing, so the supply link broke rather than the oak chemistry; the fresh-oak comparison isolates it and names its refutation, while abandoning barrels generalizes from depleted stock.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A district pushed the high-school start time an hour later expecting better attendance: more sleep means fewer tardies and absences. Attendance was flat. A survey shows students still wake at the same time because the bus routes were never rescheduled, so they leave home as early as before. Which response best follows?",
    mcOptions: [
      {
        text: "The sleep link never engaged — unchanged buses mean unchanged wake times; test whether rescheduling buses lets students sleep later, whether students who already sleep in attend better, and whether attendance improves only once wake times actually shift.",
        credit: 1.0,
      },
      {
        text: "Students probably aren't sleeping more; look into the schedule.",
        credit: 0.6,
      },
      {
        text: "Something between the later start and attendance broke.",
        credit: 0.3,
      },
      {
        text: "Later start times don't help attendance, so revert the bell schedule.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'wake times never changed' lead from the rival 'later starts don't help attendance,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare attendance for students who drive themselves and now actually sleep later against bus riders who still wake early — my lead predicts the later-waking group improved. It is refuted if even genuinely later-waking students show no attendance gain, which would point past sleep to another cause.",
      yieldAnchors: [
        "Attendance was flat",
        "Students still wake at the same time",
        "Bus routes were never rescheduled",
      ],
      riskAnchors: [
        "Rescheduling buses lets students sleep later",
        "Students who already sleep in attend better",
        "Attendance improves once wake times shift",
      ],
      defeatedBy: [
        "Later start times don't help attendance",
        "Students were already sleeping in",
      ],
    },
    correctAnswer:
      "The sleep link never engaged — unchanged buses mean unchanged wake times; test whether rescheduling buses lets students sleep later, whether students who already sleep in attend better, and whether attendance improves only once wake times actually shift.",
    explanation:
      "Unchanged buses mean the extra sleep the model depends on never happened, so the chain was never run; the self-driving-versus-bus comparison isolates the wake-time link, while reverting the schedule concludes from an intervention that never reached students.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A team added push notifications expecting more re-engagement: a nudge reminds lapsed users to open the app. Re-opens were flat. Analytics show notifications were sent to the whole list, but 80% of recipients have notifications disabled at the OS level so they never appeared, while the 20% who got them re-opened sharply. Which response best follows?",
    mcOptions: [
      {
        text: "Push notifications don't drive re-engagement, so turn the feature off.",
        credit: 0,
      },
      {
        text: "Some step between sending and re-opening failed.",
        credit: 0.3,
      },
      {
        text: "Most notifications probably aren't landing; look into delivery.",
        credit: 0.6,
      },
      {
        text: "Delivery broke for most users since notifications are disabled, while the 20% who saw them re-opened sharply; test whether prompting users to enable notifications grows the reachable group, whether re-opens scale with the enabled share, and whether an email fallback reaches the disabled majority.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'most notifications never appeared' lead from the rival 'notifications don't drive re-engagement,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare re-open rates between users with notifications enabled and those with them disabled — my lead predicts the enabled group re-opened far more. It is refuted if enabled users re-open no more than disabled ones, which would show the nudge itself does nothing.",
      yieldAnchors: [
        "Re-opens were flat overall",
        "80% of recipients have notifications disabled",
        "Re-opens rose sharply among the 20% who got them",
      ],
      riskAnchors: [
        "Prompting users to enable notifications grows the reachable group",
        "Re-opens scale with the enabled share",
        "An email fallback reaches the disabled majority",
      ],
      defeatedBy: [
        "Notifications don't drive re-engagement",
        "Notifications reached everyone equally",
      ],
    },
    correctAnswer:
      "Delivery broke for most users since notifications are disabled, while the 20% who saw them re-opened sharply; test whether prompting users to enable notifications grows the reachable group, whether re-opens scale with the enabled share, and whether an email fallback reaches the disabled majority.",
    explanation:
      "Disabled notifications mean the nudge never reached most users, so delivery broke while the message worked for those who saw it; the enabled-versus-disabled split isolates the link, and turning the feature off concludes from messages that were never delivered.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A farmer installed drip irrigation expecting higher corn yield: steady moisture prevents the stress that cuts kernel set. Yield was flat. Walking the field, he finds many emitters clogged with mineral scale, and soil-moisture probes read as dry as the old furrow-irrigated plots. Which response best follows?",
    mcOptions: [
      {
        text: "The watering probably isn't reaching the plants; service the system.",
        credit: 0.6,
      },
      {
        text: "The moisture link never delivered — clogged emitters left the soil as dry as before; test whether clearing or replacing emitters raises soil-moisture readings, whether rows with working emitters out-yield clogged ones, and whether an upstream filter prevents the scale buildup.",
        credit: 1.0,
      },
      {
        text: "Drip irrigation doesn't help corn, so go back to furrows.",
        credit: 0,
      },
      {
        text: "Something about the irrigation didn't work as hoped.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'clogged emitters starved the soil' lead from the rival 'drip irrigation doesn't help corn,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare yield and soil moisture in rows with verified-working emitters against rows with clogged ones — my lead predicts the working rows are wetter and higher-yielding. It is refuted if well-watered drip rows yield no more than the dry furrow plots, which would undercut the moisture-to-yield link.",
      yieldAnchors: [
        "Yield was flat",
        "Many emitters are clogged with scale",
        "Soil reads as dry as the old furrow plots",
      ],
      riskAnchors: [
        "Clearing emitters raises soil-moisture readings",
        "Working-emitter rows out-yield clogged ones",
        "An upstream filter prevents scale buildup",
      ],
      defeatedBy: [
        "Drip irrigation doesn't help corn",
        "The soil was actually well-watered",
      ],
    },
    correctAnswer:
      "The moisture link never delivered — clogged emitters left the soil as dry as before; test whether clearing or replacing emitters raises soil-moisture readings, whether rows with working emitters out-yield clogged ones, and whether an upstream filter prevents the scale buildup.",
    explanation:
      "Clogged emitters and dry soil show the steady moisture the model needs never arrived, so the delivery link broke; the working-versus-clogged row comparison isolates it and names its refutation, while returning to furrows blames an intervention that never functioned.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A specialty roaster slowed its roast curve expecting less bitterness: a gentler development phase avoids scorching the beans and the harsh compounds it creates. Cupping still found the coffee bitter. The roaster also recalls the grinder was set two notches finer than usual, and the brew water tested at a near-boiling 99°C. In one paragraph, propose the strongest lead for which link in the chain actually broke and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the bitterness is coming from over-extraction at the brewing step, not from the roast, since a much finer grind and near-boiling water both drive harsh compounds into the cup regardless of how gently the beans were roasted. This is the better diagnosis because it predicts checkable consequences: brewing the same slow-roasted beans at the normal grind and a cooler 93°C should taste markedly less bitter; a side-by-side of the slow roast and the old roast brewed identically should taste similar if the roast was not the culprit; and measuring extraction yield should show the finer grind pushed it too high. I would test it by re-brewing the identical batch at the correct grind and temperature, by holding all brew variables fixed while comparing the old and new roasts, and by measuring extraction yield to confirm whether the brew, not the roast, broke the chain.",
      yieldAnchors: [
        "The roast curve was slowed to reduce bitterness",
        "The grind was set two notches finer than usual",
        "Brew water was a near-boiling 99°C",
      ],
      riskAnchors: [
        "Brewing at normal grind and 93°C tastes far less bitter",
        "Old and new roasts taste similar when brewed identically",
        "Measured extraction yield was too high",
      ],
      defeatedBy: [
        "The slow roast itself failed, so roasting can't fix bitterness",
        "Nothing can be concluded without re-roasting many batches",
        "Coffee bitterness is unfixable, so abandon the roast change",
      ],
    },
    correctAnswer:
      "The strongest lead is that the bitterness is coming from over-extraction at the brewing step, not from the roast, since a much finer grind and near-boiling water both drive harsh compounds into the cup regardless of how gently the beans were roasted. This is the better diagnosis because it predicts checkable consequences: brewing the same slow-roasted beans at the normal grind and a cooler 93°C should taste markedly less bitter; a side-by-side of the slow roast and the old roast brewed identically should taste similar if the roast was not the culprit; and measuring extraction yield should show the finer grind pushed it too high. I would test it by re-brewing the identical batch at the correct grind and temperature, by holding all brew variables fixed while comparing the old and new roasts, and by measuring extraction yield to confirm whether the brew, not the roast, broke the chain.",
    explanation:
      "Under CCR's inverted standard, 'nothing can be concluded' and 'abandon the roast change' earn near-zero because the failed prediction has two untested confounds at the brewing step; top credit goes to locating the broken link — over-extraction — and naming controlled brews that would confirm or refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A startup launched a referral program expecting a surge of sign-ups: happy users share a link, friends click, and those friends register. Sign-ups barely moved. The dashboard shows users generated thousands of links and click-through to the landing page was healthy, but almost no one completed the registration form, which now asks for a credit card up front. In one paragraph, propose the strongest lead for which link broke and how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the chain broke at the final registration step, not at sharing or clicking, because the new credit-card-up-front requirement is scaring off referred visitors who arrived willing to try but not to pay immediately. This diagnosis is strong because it predicts checkable things: the funnel should show a sharp drop precisely at the payment field; removing or deferring the card request for a test group should lift completed sign-ups toward the healthy click rate; and referred visitors should abandon at the card step more than direct visitors who came expecting to buy. I would test it by instrumenting the form to see exactly where users drop, by A/B testing a no-card free trial against the current flow, and by comparing completion rates of referred versus direct traffic at the payment step.",
      yieldAnchors: [
        "Sign-ups barely moved",
        "Users generated thousands of links and click-through was healthy",
        "Registration now asks for a credit card up front",
      ],
      riskAnchors: [
        "The funnel drop concentrates on the payment field",
        "Deferring the card request lifts completed sign-ups",
        "Referred visitors abandon the card step more than direct ones",
      ],
      defeatedBy: [
        "The referral idea failed and should be scrapped",
        "Word-of-mouth simply doesn't work for this product",
        "We can't learn anything until far more users try it",
      ],
    },
    correctAnswer:
      "The strongest lead is that the chain broke at the final registration step, not at sharing or clicking, because the new credit-card-up-front requirement is scaring off referred visitors who arrived willing to try but not to pay immediately. This diagnosis is strong because it predicts checkable things: the funnel should show a sharp drop precisely at the payment field; removing or deferring the card request for a test group should lift completed sign-ups toward the healthy click rate; and referred visitors should abandon at the card step more than direct visitors who came expecting to buy. I would test it by instrumenting the form to see exactly where users drop, by A/B testing a no-card free trial against the current flow, and by comparing completion rates of referred versus direct traffic at the payment step.",
    explanation:
      "Healthy sharing and clicking exonerate the early links, so junking the whole referral idea — the zero dodge — ignores where the funnel actually breaks; top credit isolates the registration and payment step and names funnel and A/B tests that would confirm or refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A sports-physio clinic adopted a new eccentric-strengthening protocol expecting fewer hamstring re-injuries: stronger, more resilient muscle should withstand sprinting loads. Re-injury rates were unchanged after a season. Records show most athletes attended only the first two of the eight prescribed sessions, and several re-injuries happened in players who returned to full sprinting two weeks earlier than the protocol allows. In one paragraph, propose the strongest lead for which assumption broke and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the protocol's strengthening logic was never actually delivered: athletes did only a quarter of the sessions and many returned to sprinting early, so the muscle adaptation the model depends on never had time to form. This is the better diagnosis because it makes checkable predictions: re-injuries should cluster among the low-adherence and early-return players rather than spread evenly; the few athletes who completed all eight sessions and respected the return timeline should re-injure less; and tracking measured hamstring strength should show no gain in the dropouts. I would test it by splitting re-injury rates by sessions completed and return timing, by following a fully compliant cohort for a season, and by measuring strength gains to confirm whether the adaptation occurred where the protocol was actually followed.",
      yieldAnchors: [
        "Re-injury rates were unchanged",
        "Most athletes attended only two of eight sessions",
        "Several re-injured players returned to sprinting two weeks early",
      ],
      riskAnchors: [
        "Re-injuries cluster among low-adherence and early-return players",
        "Fully compliant athletes re-injure less",
        "Measured strength shows no gain in the dropouts",
      ],
      defeatedBy: [
        "The new protocol doesn't work and should be dropped",
        "Hamstring re-injury is just bad luck, so there's nothing to learn",
        "We can't conclude anything from a single season",
      ],
    },
    correctAnswer:
      "The strongest lead is that the protocol's strengthening logic was never actually delivered: athletes did only a quarter of the sessions and many returned to sprinting early, so the muscle adaptation the model depends on never had time to form. This is the better diagnosis because it makes checkable predictions: re-injuries should cluster among the low-adherence and early-return players rather than spread evenly; the few athletes who completed all eight sessions and respected the return timeline should re-injure less; and tracking measured hamstring strength should show no gain in the dropouts. I would test it by splitting re-injury rates by sessions completed and return timing, by following a fully compliant cohort for a season, and by measuring strength gains to confirm whether the adaptation occurred where the protocol was actually followed.",
    explanation:
      "Low adherence and early return mean the strengthening step never happened, so the model was un-run rather than refuted; CCR gives near-zero to 'drop the protocol' and 'just bad luck,' and top credit to locating the adherence and return link and testing a compliant cohort.",
  },
  {
    itemType: "written",
    prompt:
      "A greenhouse enriched its air with extra CO2 expecting faster tomato ripening: more CO2 boosts photosynthesis and pushes fruit to mature sooner. Ripening time was unchanged. The grower notes the sensor confirms CO2 levels did rise, but the vents open automatically on warm afternoons and the night temperature has been running cold, well below the range tomatoes need to ripen. In one paragraph, propose the strongest lead for which link broke and how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that temperature, not carbon supply, is the limiting link: ripening is temperature-driven, and with the vents releasing the enriched air on warm afternoons and cold nights stalling maturation, the extra CO2 cannot express itself. This diagnosis is strong because it predicts checkable consequences: holding the night temperature in the proper range should speed ripening with or without enrichment; sealing the vents to retain CO2 should do little while temperatures stay cold; and fruit on the warmest benches should ripen faster than identical fruit on cold ones. I would test it by warming the nights for one block and comparing ripening, by logging fruit temperature against ripening rate, and by running CO2 enrichment only after the temperature is corrected to see whether it then adds anything.",
      yieldAnchors: [
        "Ripening time was unchanged",
        "The sensor confirms CO2 levels rose",
        "Vents release the air on warm afternoons and nights run cold",
      ],
      riskAnchors: [
        "Holding the night temperature in range speeds ripening",
        "Warmest-bench fruit ripens faster than cold-bench fruit",
        "Enrichment helps only after the temperature is corrected",
      ],
      defeatedBy: [
        "CO2 enrichment is useless for tomatoes, so stop it",
        "Ripening can't be influenced at all, so there's nothing to do",
        "We can't say anything until many seasons pass",
      ],
    },
    correctAnswer:
      "The strongest lead is that temperature, not carbon supply, is the limiting link: ripening is temperature-driven, and with the vents releasing the enriched air on warm afternoons and cold nights stalling maturation, the extra CO2 cannot express itself. This diagnosis is strong because it predicts checkable consequences: holding the night temperature in the proper range should speed ripening with or without enrichment; sealing the vents to retain CO2 should do little while temperatures stay cold; and fruit on the warmest benches should ripen faster than identical fruit on cold ones. I would test it by warming the nights for one block and comparing ripening, by logging fruit temperature against ripening rate, and by running CO2 enrichment only after the temperature is corrected to see whether it then adds anything.",
    explanation:
      "Confirmed CO2 plus cold nights and venting localize the failure to temperature, a downstream requirement the model assumed was met; top credit corrects and tests that link rather than dismissing enrichment as 'useless' or freezing on 'can't say anything.'",
  },
  {
    itemType: "written",
    prompt:
      "A city synchronized the traffic lights on a main avenue expecting shorter commutes: a 'green wave' lets cars move steadily without stopping at every light. Average commute times were unchanged. Engineers find the signal timings were programmed correctly and the corridor flows freely until a single bottleneck — a railroad crossing midway that closes for long freight trains during rush hour, breaking the wave every few minutes. In one paragraph, propose the strongest lead for which assumption broke and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the green-wave model assumed uninterrupted flow, and that assumption is broken by the mid-corridor rail crossing whose long rush-hour closures repeatedly stop traffic and reset the wave, so the synchronized timing can't pay off. This is the better diagnosis because it predicts checkable consequences: commute times during hours with no freight trains should drop as the synchronization predicts; the queues should build specifically at the crossing rather than evenly along the avenue; and a segment-by-segment travel-time breakdown should show the loss concentrated around the rail closure. I would test it by comparing travel times during freight-free windows against train-blocked windows, by mapping where delay accumulates along the route, and by piloting a signal hold or train rescheduling around peak hours to see whether the wave then delivers.",
      yieldAnchors: [
        "Average commute times were unchanged",
        "Signal timings were programmed correctly",
        "A mid-corridor rail crossing closes for long freight trains during rush hour",
      ],
      riskAnchors: [
        "Commutes drop during freight-free windows",
        "Queues build at the crossing rather than evenly",
        "Segment travel-time data concentrates delay at the rail closure",
      ],
      defeatedBy: [
        "Light synchronization doesn't reduce commutes, so abandon it",
        "Traffic is unpredictable, so nothing can be concluded",
        "The corridor is hopeless and should be left alone",
      ],
    },
    correctAnswer:
      "The strongest lead is that the green-wave model assumed uninterrupted flow, and that assumption is broken by the mid-corridor rail crossing whose long rush-hour closures repeatedly stop traffic and reset the wave, so the synchronized timing can't pay off. This is the better diagnosis because it predicts checkable consequences: commute times during hours with no freight trains should drop as the synchronization predicts; the queues should build specifically at the crossing rather than evenly along the avenue; and a segment-by-segment travel-time breakdown should show the loss concentrated around the rail closure. I would test it by comparing travel times during freight-free windows against train-blocked windows, by mapping where delay accumulates along the route, and by piloting a signal hold or train rescheduling around peak hours to see whether the wave then delivers.",
    explanation:
      "Correct timings plus a free-flowing corridor except at one crossing isolate the broken assumption of uninterrupted flow; CCR rewards locating that link and testing freight-free windows over scrapping synchronization or declaring traffic unknowable.",
  },
];

export const section: SectionContent = {
  slug: "diagnosing-failure",
  title: "Diagnosing the Failure",
  weekNumber: 4,
  blurb:
    "When a prediction misses, don't junk the whole model — a model is a chain of assumptions, and usually only one link broke. Find which assumption failed and test that.",
  lectureTitle:
    "4.4 Diagnosing the Failure: locating which assumption broke when a prediction misses",
  body: `# Diagnosing the Failure

A prediction you trusted just missed. The reflexive response is to throw the whole model out: "I was wrong about everything." Constructive Critical Reasoning treats that as waste. A model is almost never a single claim — it is a chain of linked assumptions, and a missed prediction usually means exactly one link snapped, not that the entire chain was rotten. The skilled move is to locate the broken link and test *that*, salvaging everything that still holds.

## Every prediction rides on a chain

"This fertilizer will raise yield" is shorthand for a sequence: the nutrient dissolves, the roots absorb it, the plant builds more fruit. "This cache will speed the page" means requests hit the cache, skip the database, and return fast. When the end result fails, one of those steps failed — and they are not equally likely suspects. Write the chain out explicitly; you cannot diagnose a failure whose links you never named.

## Read the failure for its fingerprint

A failed prediction usually leaves evidence of where it broke. Yield flat but the leaves pale and the soil alkaline? The dosing worked; uptake didn't. Clicks flat but the open rate normal and delivery down? The content link held; delivery snapped. Sales flat but in-store fine and the online thumbnail stale? The product worked; the channel didn't. Each intermediate measurement narrows the suspect list. The data sitting *between* input and missed output is where the diagnosis lives.

## Test the suspect link in isolation

Once you have a prime suspect, design the cheapest probe that loads only that link. Bypass the roots with a foliar spray to test uptake. Stub the third-party API to test whether it is the bottleneck. Compare compliant trucks against override trucks to test adoption. A good diagnostic changes one suspected link and holds the rest fixed, so a clean result points at one assumption rather than the whole tangle.

## "Never run" is not "refuted"

The subtlest failure is a step that never actually happened. The fermentation thermostat read 5°C low, so the cool ferment was never performed; the buses were never rescheduled, so students never slept later. Here the model was not tested and beaten — it was never run. Concluding "temperature doesn't matter" or "later starts don't help" inverts the truth. Always check that the intervention you *think* you applied actually reached the system.

## Why "scrap it all" is the failure mode

Junking the entire model on one miss is the zero-credit dodge: it discards the links that still work, learns nothing about which assumption is fragile, and forfeits the fix. Equally empty is the shrug — "too many things could have gone wrong, who can say." Both refuse the diagnostic work. The whole value of a failed prediction is the information it carries about where your model is weak; throwing the model away throws that information away too.

## Overreach still loses

Diagnosis can also overreach. Don't blame a link the evidence clears — if the open rate held steady, the headline isn't your culprit. And don't certify a fix you haven't run; "it must be the gauge" is a hypothesis until the gauge fails a known test load. Name the suspect the data actually implicates, then test it.

## In the real world

A team ships a feature predicted to lift retention; retention is flat. The dodge: "guess users don't want it — revert." The diagnostic move: trace the funnel. Discovery is healthy, activation is healthy, but the feature crashes on older phones that make up 40% of the base. One link broke. Fix the crash, re-measure, and the prediction finally gets its real test — instead of a working idea buried by a misread failure.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
