import type { SectionContent, HomeworkItem } from "./types";

const mcq: HomeworkItem[] = [
  {
    itemType: "mc",
    prompt:
      "A neighborhood diner's online rating slid from 4.6 to 4.1 over two months, and the owner keeps asking 'why don't people like us anymore?' The recent one-star reviews all mention slow service on weekend nights, and the diner added a popular brunch special eight weeks ago. Which way of posing the problem will actually let an explanation form?",
    mcOptions: [
      {
        text: "Ask the answerable, mechanism-seeking question: 'Did weekend-night wait times rise once the brunch special drew bigger crowds, and is that what's driving the one-star reviews?' — then compare ticket times before and after the special, check whether one-star reviews cluster on the busiest nights, and see whether adding a weekend server restores the rating.",
        credit: 1.0,
      },
      {
        text: "Ask 'Is our service too slow on weekends?' and have a manager watch the floor on Saturday to judge whether it feels slow.",
        credit: 0.6,
      },
      {
        text: "Ask 'Is something about our service off lately?' and keep an eye on the reviews.",
        credit: 0.3,
      },
      {
        text: "Ask 'Why don't people like us anymore?' — tastes change and there are far too many reasons a rating moves to single any one out.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Ask the answerable, mechanism-seeking question: 'Did weekend-night wait times rise once the brunch special drew bigger crowds, and is that what's driving the one-star reviews?' — then compare ticket times before and after the special, check whether one-star reviews cluster on the busiest nights, and see whether adding a weekend server restores the rating.",
    explanation:
      "Top credit reframes the vague 'why don't people like us' into a specific, answerable question that names a mechanism (crowds raise wait times, which provoke bad reviews) and spawns concrete comparisons; the broad 'why don't people like us anymore' framing is so unfocused it can generate no testable answer and ends in a shrug.",
  },
  {
    itemType: "mc",
    prompt:
      "A mobile game's support inbox is full of 'the app is broken!' complaints and installs are down, so the team keeps asking 'is our app just bad now?' Crash logs show 90% of crashes hit devices with under 2 GB of RAM, all during the animated loading screen shipped last week. Which way of posing the problem will let an explanation form?",
    mcOptions: [
      {
        text: "Ask 'Is our app just bad now?' — software quality is subjective and there's no way to turn vague complaints into a single cause.",
        credit: 0,
      },
      {
        text: "Ask the sharp question: 'Is the new animated loading screen exhausting memory on low-RAM phones and crashing them?' — then check whether crashes vanish when the animation is disabled, whether crash rate climbs as device RAM drops, and whether rolling back last week's build stops the reports.",
        credit: 1.0,
      },
      {
        text: "Ask 'Is there a problem with the app somewhere?' and keep reading the crash logs.",
        credit: 0.3,
      },
      {
        text: "Ask 'Are low-memory phones crashing more?' and have one tester try the app on an old phone.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Ask the sharp question: 'Is the new animated loading screen exhausting memory on low-RAM phones and crashing them?' — then check whether crashes vanish when the animation is disabled, whether crash rate climbs as device RAM drops, and whether rolling back last week's build stops the reports.",
    explanation:
      "The strongest framing turns 'is our app bad' into a precise, falsifiable question about one mechanism (memory pressure from the animation on weak devices) with three checkable tests; the subjective 'is our app just bad now' question admits no answer at all.",
  },
  {
    itemType: "mc",
    prompt:
      "A gym's new members quit within a month at a high rate, and the owner asks 'are people just lazy?' Sign-in data shows quitters almost all stopped coming right after their third visit, and the gym's guided intro program ends after exactly three sessions. Which question best frames the inquiry?",
    mcOptions: [
      {
        text: "Ask 'Do members drop off because the guided intro program ends after the third session and leaves them without a plan?' — then check whether quit visits cluster right after session three, whether extending the program delays the drop-off, and whether members handed a follow-up plan stay longer.",
        credit: 1.0,
      },
      {
        text: "Ask 'Does something happen around the third visit?' and skim a few quitters' attendance records.",
        credit: 0.6,
      },
      {
        text: "Ask 'Are new members just too lazy to stick with it?' — motivation is personal, so there's nothing here to investigate.",
        credit: 0,
      },
      {
        text: "Ask 'Are people leaving for some reason?' and watch next month's numbers.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Ask 'Do members drop off because the guided intro program ends after the third session and leaves them without a plan?' — then check whether quit visits cluster right after session three, whether extending the program delays the drop-off, and whether members handed a follow-up plan stay longer.",
    explanation:
      "Pinning the question to the exact moment the program ends makes the problem answerable and names a mechanism; the 'are people just lazy' framing blames an untestable trait and forecloses inquiry.",
  },
  {
    itemType: "mc",
    prompt:
      "A middle school's eighth-grade math scores dropped this year, and administrators keep asking 'are students getting worse?' The dip is entirely in one unit — fractions — taught for the first time by video instead of in person, while every other unit held steady. Which way of posing the problem lets an explanation form?",
    mcOptions: [
      {
        text: "Ask 'Is something wrong with how we teach math?' and review the curriculum in general.",
        credit: 0.3,
      },
      {
        text: "Ask 'Did switching the fractions unit specifically to video lessons cause the drop?' — then compare fractions scores in classes that kept in-person teaching, confirm the gap is confined to fractions, and see whether re-teaching fractions live recovers the scores.",
        credit: 1.0,
      },
      {
        text: "Ask 'Did the fractions unit go badly this year?' and ask the teacher how it felt.",
        credit: 0.6,
      },
      {
        text: "Ask 'Why are kids these days getting worse at math?' — a generation's ability has countless causes and can't be pinned down.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Ask 'Did switching the fractions unit specifically to video lessons cause the drop?' — then compare fractions scores in classes that kept in-person teaching, confirm the gap is confined to fractions, and see whether re-teaching fractions live recovers the scores.",
    explanation:
      "The winning question isolates the one thing that changed (video delivery of fractions) and proposes a clean comparison; 'why are kids getting worse' is too sweeping to ever resolve and points at no testable cause.",
  },
  {
    itemType: "mc",
    prompt:
      "A clothing store's revenue per customer fell while foot traffic stayed steady, and the manager asks 'is the economy hurting us?' Receipts show shoppers still buy the same number of items but almost no one adds accessories anymore — and the accessory display moved from the register to the back wall during a remodel two months ago. Which question best frames the inquiry?",
    mcOptions: [
      {
        text: "Ask 'Did moving the accessory display away from the register kill the impulse add-ons that lifted basket size?' — then check whether accessory sales fell exactly when the display moved, whether a register-side accessory rack revives them, and whether non-accessory spending is unchanged.",
        credit: 1.0,
      },
      {
        text: "Ask 'Is the economy just bad for us right now?' — macro forces are beyond our data, so no internal cause can be identified.",
        credit: 0,
      },
      {
        text: "Ask 'Are accessories selling worse?' and glance at the accessory totals.",
        credit: 0.6,
      },
      {
        text: "Ask 'Is spending down for some reason?' and keep watching the receipts.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Ask 'Did moving the accessory display away from the register kill the impulse add-ons that lifted basket size?' — then check whether accessory sales fell exactly when the display moved, whether a register-side accessory rack revives them, and whether non-accessory spending is unchanged.",
    explanation:
      "The best framing converts 'is the economy hurting us' into a question the store's own data can answer, naming the impulse-purchase mechanism; blaming the economy points outside anything the store can measure and stops the investigation.",
  },
  {
    itemType: "mc",
    prompt:
      "A community garden's tomato beds yielded poorly while the squash thrived, and volunteers ask 'is our soil just bad?' The weak tomato beds are all in the corner shaded by a fence built in spring; sun-exposed beds with the same soil and seed did fine. Which way of posing the problem lets an explanation form?",
    mcOptions: [
      {
        text: "Ask 'Are the shaded beds doing worse?' and look at where the poor plants are.",
        credit: 0.6,
      },
      {
        text: "Ask 'Is something off with our tomatoes?' and try different fertilizer next year.",
        credit: 0.3,
      },
      {
        text: "Ask 'Is the new fence's shade starving the corner tomato beds of the sun they need to fruit?' — then check whether yield tracks daily sun hours per bed, whether potted tomatoes moved into full sun recover, and whether the shade-tolerant squash is rightly unaffected.",
        credit: 1.0,
      },
      {
        text: "Ask 'Is our garden just cursed this year?' — gardens have endless variables, so the bad tomatoes can't be traced to anything.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Ask 'Is the new fence's shade starving the corner tomato beds of the sun they need to fruit?' — then check whether yield tracks daily sun hours per bed, whether potted tomatoes moved into full sun recover, and whether the shade-tolerant squash is rightly unaffected.",
    explanation:
      "Asking about the fence's shade names a mechanism and predicts a sun-hours-versus-yield pattern that can be checked; 'is the garden cursed' is unanswerable and surrenders the inquiry before it starts.",
  },
  {
    itemType: "mc",
    prompt:
      "A bottling plant's reject rate doubled, and the supervisor asks 'is the equipment wearing out?' The rejects are all under-filled bottles, they began the week a new CO2 supplier was switched in, and only the carbonated line is affected — the still-water line is fine. Which question best frames the inquiry?",
    mcOptions: [
      {
        text: "Ask 'Did the new CO2 supplier's gas change the fill behavior on the carbonated line and cause the under-fills?' — then check whether rejects began exactly at the supplier switch, whether reverting to the old supplier clears them, and whether the unaffected still-water line confirms the cause is carbonation-specific.",
        credit: 1.0,
      },
      {
        text: "Ask 'Is something wrong on the line?' and inspect the machines.",
        credit: 0.3,
      },
      {
        text: "Ask 'Did the CO2 change cause this?' and ask the supplier if anything's different.",
        credit: 0.6,
      },
      {
        text: "Ask 'Why does this plant keep having problems?' — manufacturing is complex and reject spikes can't really be attributed.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Ask 'Did the new CO2 supplier's gas change the fill behavior on the carbonated line and cause the under-fills?' — then check whether rejects began exactly at the supplier switch, whether reverting to the old supplier clears them, and whether the unaffected still-water line confirms the cause is carbonation-specific.",
    explanation:
      "The sharp question ties the defect type, the timing, and the affected line to one suspect and proposes a revert test; 'why does this plant keep having problems' is too diffuse to point at any cause.",
  },
  {
    itemType: "mc",
    prompt:
      "A youth soccer team that won all season suddenly lost three straight, and the coach asks 'did the kids stop trying?' All three losses were on the same artificial-turf away field, the team's passing completion dropped only in those games, and they kept winning on grass. Which way of posing the problem lets an explanation form?",
    mcOptions: [
      {
        text: "Ask 'Have the players just lost their drive?' — effort is a mindset and there's no way to test what's in their heads.",
        credit: 0,
      },
      {
        text: "Ask 'Is the faster artificial turf throwing off the team's passing timing on away games?' — then check whether completion drops only on turf, whether a practice session on turf restores it, and whether the slump disappears back on grass.",
        credit: 1.0,
      },
      {
        text: "Ask 'Do they play worse on that field?' and rewatch one of the away games.",
        credit: 0.6,
      },
      {
        text: "Ask 'Is the team just in a slump?' and hope they bounce back.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Ask 'Is the faster artificial turf throwing off the team's passing timing on away games?' — then check whether completion drops only on turf, whether a practice session on turf restores it, and whether the slump disappears back on grass.",
    explanation:
      "Framing the question around the turf binds the passing data and the surface pattern to a testable mechanism; 'did they lose their drive' asks about an inner state nothing in the data can probe.",
  },
  {
    itemType: "mc",
    prompt:
      "A dental practice sees more patients reporting pain after cleanings this quarter, and the dentist asks 'are our patients getting more sensitive?' The complaints all come from afternoon appointments, began when a new hygienist who works only afternoons was hired, and morning patients report nothing unusual. Which question best frames the inquiry?",
    mcOptions: [
      {
        text: "Ask 'Is something different about afternoon cleanings?' and watch an afternoon appointment.",
        credit: 0.6,
      },
      {
        text: "Ask 'Why are people so sensitive these days?' — pain tolerance varies person to person and can't be investigated.",
        credit: 0,
      },
      {
        text: "Ask 'Is the new afternoon hygienist's technique causing the post-cleaning pain?' — then check whether complaints track her schedule, whether they stop on her days off, and whether technique coaching reduces them.",
        credit: 1.0,
      },
      {
        text: "Ask 'Are cleanings bothering people lately?' and note it for later.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Ask 'Is the new afternoon hygienist's technique causing the post-cleaning pain?' — then check whether complaints track her schedule, whether they stop on her days off, and whether technique coaching reduces them.",
    explanation:
      "The strongest question links the timing of the complaints to the one staffing change and proposes a schedule-tracking test; 'why are people so sensitive these days' blames the patients and yields no checkable lead.",
  },
  {
    itemType: "mc",
    prompt:
      "A charity's email donations dropped sharply, and the director asks 'are people just less generous now?' Open rates are normal but click-through to the donate page collapsed the same week a redesign buried the donate button below a long story, while direct-mail gifts stayed steady. Which way of posing the problem lets an explanation form?",
    mcOptions: [
      {
        text: "Ask 'Did burying the donate button below a long story cut the clicks that drive email gifts?' — then check whether click-through fell exactly at the redesign, whether restoring a top button recovers it, and whether steady direct-mail gifts confirm donors aren't simply less generous.",
        credit: 1.0,
      },
      {
        text: "Ask 'Did the email redesign hurt donations?' and look at the new layout.",
        credit: 0.6,
      },
      {
        text: "Ask 'Is giving down somehow?' and keep sending emails.",
        credit: 0.3,
      },
      {
        text: "Ask 'Why has everyone stopped caring about charity?' — generosity is a cultural mood no single nonprofit can analyze.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Ask 'Did burying the donate button below a long story cut the clicks that drive email gifts?' — then check whether click-through fell exactly at the redesign, whether restoring a top button recovers it, and whether steady direct-mail gifts confirm donors aren't simply less generous.",
    explanation:
      "The answerable question targets the button placement and uses the steady direct-mail channel as a built-in control; 'why has everyone stopped caring about charity' is a mood question no data could settle.",
  },
  {
    itemType: "mc",
    prompt:
      "A bakery's sourdough loaves have come out dense for two weeks, and the baker asks 'am I losing my touch?' The dense loaves all rose in the new walk-in proofing room kept at 62°F, while loaves proofed on the old warm counter still turn out airy. Which question best frames the inquiry?",
    mcOptions: [
      {
        text: "Ask 'Is my bread off lately?' and try a new flour.",
        credit: 0.3,
      },
      {
        text: "Ask 'Is the cooler 62°F proofing room slowing the yeast so loaves underproof and bake dense?' — then check whether only walk-in loaves are dense, whether warming the room or extending the proof restores the rise, and whether counter-proofed loaves stay airy.",
        credit: 1.0,
      },
      {
        text: "Ask 'Why can't I bake anymore?' — baking has too many variables to ever say what changed.",
        credit: 0,
      },
      {
        text: "Ask 'Is the new proofing room the problem?' and feel whether it seems cold.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Ask 'Is the cooler 62°F proofing room slowing the yeast so loaves underproof and bake dense?' — then check whether only walk-in loaves are dense, whether warming the room or extending the proof restores the rise, and whether counter-proofed loaves stay airy.",
    explanation:
      "The good question names a fermentation mechanism (cool room slows yeast) and a temperature-versus-rise test; 'why can't I bake anymore' is a despairing framing that admits no answer.",
  },
  {
    itemType: "mc",
    prompt:
      "A podcast's average listen-through time fell by half, and the host asks 'are my episodes getting boring?' Drop-off analytics show most listeners now quit at the 90-second mark — exactly where a new 60-second sponsor read was inserted at the top of each episode three weeks ago. Which way of posing the problem lets an explanation form?",
    mcOptions: [
      {
        text: "Ask 'Is the new sponsor read losing listeners?' and listen to the intro yourself.",
        credit: 0.6,
      },
      {
        text: "Ask 'Are people tuning out for some reason?' and try to be more engaging.",
        credit: 0.3,
      },
      {
        text: "Ask 'Why doesn't anyone have an attention span anymore?' — listening habits are a societal trend beyond one show.",
        credit: 0,
      },
      {
        text: "Ask 'Is the front-loaded 60-second sponsor read driving listeners away at the 90-second mark?' — then check whether drop-off spikes exactly at the ad, whether moving the read mid-episode recovers listen time, and whether ad-free back-catalog episodes hold listeners longer.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "Ask 'Is the front-loaded 60-second sponsor read driving listeners away at the 90-second mark?' — then check whether drop-off spikes exactly at the ad, whether moving the read mid-episode recovers listen time, and whether ad-free back-catalog episodes hold listeners longer.",
    explanation:
      "Anchoring the question to the exact drop-off point and the new ad makes it answerable and names a mechanism; 'why doesn't anyone have an attention span' is a generational complaint no test could resolve.",
  },
  {
    itemType: "mc",
    prompt:
      "An online shop's cart-abandonment rate jumped, and the founder asks 'are our prices too high?' Session recordings show most shoppers leave on the shipping page, where a new mandatory account-creation step was added last month; prices are unchanged. Which question best frames the inquiry?",
    mcOptions: [
      {
        text: "Ask 'Is the new forced account-creation step at shipping driving shoppers to abandon their carts?' — then check whether exits cluster on that page, whether a guest-checkout option lowers abandonment, and whether unchanged prices rule out cost as the cause.",
        credit: 1.0,
      },
      {
        text: "Ask 'Why are online shoppers so flaky?' — abandonment is just how the internet works and can't be traced.",
        credit: 0,
      },
      {
        text: "Ask 'Is the checkout flow causing drop-off?' and click through it once.",
        credit: 0.6,
      },
      {
        text: "Ask 'Is something pushing people away?' and consider running a sale.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Ask 'Is the new forced account-creation step at shipping driving shoppers to abandon their carts?' — then check whether exits cluster on that page, whether a guest-checkout option lowers abandonment, and whether unchanged prices rule out cost as the cause.",
    explanation:
      "The sharp question targets the page where shoppers actually leave and proposes a guest-checkout test; 'why are shoppers so flaky' treats abandonment as inexplicable and shuts down inquiry — and the unchanged prices already defeat the price framing.",
  },
  {
    itemType: "mc",
    prompt:
      "A hotel's cleanliness scores dropped on review sites, and the manager asks 'is our staff slacking off?' The low scores are all from rooms on floors 4–6, which switched to a new contract cleaning crew last month, while floors 1–3, cleaned by the original staff, score as high as ever. Which way of posing the problem lets an explanation form?",
    mcOptions: [
      {
        text: "Ask 'Are the upper floors cleaned worse now?' and inspect a few rooms up there.",
        credit: 0.6,
      },
      {
        text: "Ask 'Is the new contract crew on floors 4–6 cleaning to a lower standard than the original staff?' — then check whether low scores map exactly to those floors, whether retraining or replacing the crew lifts them, and whether floors 1–3 stay high as a control.",
        credit: 1.0,
      },
      {
        text: "Ask 'Is housekeeping off lately?' and remind everyone to try harder.",
        credit: 0.3,
      },
      {
        text: "Ask 'Why is it so hard to keep a hotel clean?' — guest standards vary endlessly, so the scores can't be explained.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Ask 'Is the new contract crew on floors 4–6 cleaning to a lower standard than the original staff?' — then check whether low scores map exactly to those floors, whether retraining or replacing the crew lifts them, and whether floors 1–3 stay high as a control.",
    explanation:
      "Mapping the question to the exact floors the new crew cleans makes it answerable with a built-in control; 'why is it so hard to keep a hotel clean' is too vague to point at anyone and ends inquiry.",
  },
  {
    itemType: "mc",
    prompt:
      "A beekeeper's hives produce less honey this year, and she asks 'are my bees just weaker?' The low-output hives are all the ones she moved beside a newly sprayed canola field in spring, while hives left by the wildflower meadow produce as much as ever. Which question best frames the inquiry?",
    mcOptions: [
      {
        text: "Ask 'Why are bees everywhere dying off?' — colony health is a global mystery no single keeper can untangle.",
        credit: 0,
      },
      {
        text: "Ask 'Is something wrong with my hives?' and feed them more sugar water.",
        credit: 0.3,
      },
      {
        text: "Ask 'Are the canola-field hives doing worse?' and compare their honey weights.",
        credit: 0.6,
      },
      {
        text: "Ask 'Is pesticide exposure from the sprayed canola field suppressing output in the hives moved beside it?' — then check whether output drops only in relocated hives, whether moving them back to the meadow restores it, and whether forager bees from those hives show higher die-off.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "Ask 'Is pesticide exposure from the sprayed canola field suppressing output in the hives moved beside it?' — then check whether output drops only in relocated hives, whether moving them back to the meadow restores it, and whether forager bees from those hives show higher die-off.",
    explanation:
      "The strong question links the output drop to the one thing that changed — the move beside the sprayed field — and proposes a move-back test; 'why are bees everywhere dying off' is a global question her own hives can't answer.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A coffee shop's afternoon revenue is sliding, and the owner asks 'is foot traffic just down?' Counts show the same number of customers, but average spend dropped after free unlimited Wi-Fi was added, as laptop campers now occupy tables for hours on a single drink. Which question best frames the inquiry?",
    mcOptions: [
      {
        text: "Ask 'Are long-staying laptop campers, drawn by unlimited Wi-Fi, occupying tables that used to turn over to higher-spending customers?' — then check whether table dwell time rose after Wi-Fi launched, whether a two-hour Wi-Fi limit lifts afternoon spend, and whether customer counts stayed flat while revenue per table fell.",
        credit: 1.0,
      },
      {
        text: "Ask 'Are people staying too long now?' and watch how long tables stay occupied.",
        credit: 0.6,
      },
      {
        text: "Ask 'Is afternoon business off?' and run a promotion.",
        credit: 0.3,
      },
      {
        text: "Ask 'Why won't people spend money anymore?' — consumer spending is an economy-wide force we can't analyze in one café.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'Wi-Fi campers reduce table turnover' framing from the rival 'customers are simply spending less per visit,' and say what result would refute your framing.",
      modelAnswer:
        "Cheapest test: measure average table dwell time before and after free Wi-Fi launched — if camping is the cause, dwell time should have jumped while customer counts held steady. My framing is refuted if dwell time is unchanged and spend fell evenly across quick and long visits, which would point to a general spending drop rather than table-hogging.",
      yieldAnchors: [
        "Customer counts are unchanged",
        "Average spend dropped after free Wi-Fi was added",
        "Laptop campers occupy tables for hours on one drink",
      ],
      riskAnchors: [
        "Table dwell time rose after Wi-Fi launched",
        "A two-hour Wi-Fi limit lifts afternoon spend",
        "Revenue per table fell while customer counts stayed flat",
      ],
      defeatedBy: [
        "Foot traffic is simply down",
        "People everywhere are spending less and it can't be examined",
      ],
    },
    correctAnswer:
      "Ask 'Are long-staying laptop campers, drawn by unlimited Wi-Fi, occupying tables that used to turn over to higher-spending customers?' — then check whether table dwell time rose after Wi-Fi launched, whether a two-hour Wi-Fi limit lifts afternoon spend, and whether customer counts stayed flat while revenue per table fell.",
    explanation:
      "Full credit reframes the vague spending worry into an answerable turnover question with a dwell-time test and a refutation; 'why won't people spend money anymore' is an economy-wide framing the café cannot test.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A warehouse's minor-injury reports rose this quarter, and the safety lead asks 'are workers getting careless?' Reports cluster in the last hour of shifts, began when overtime was extended to push holiday orders, and the day shift with no overtime shows no rise. Which way of posing the problem lets an explanation form?",
    mcOptions: [
      {
        text: "Ask 'Why are workers so careless lately?' — attention is personal and there's nothing measurable behind an injury spike.",
        credit: 0,
      },
      {
        text: "Ask 'Is the added overtime fatiguing workers in the final hour and causing the injuries?' — then check whether injuries cluster in the last overtime hour, whether capping overtime reduces them, and whether the no-overtime day shift stays flat as a control.",
        credit: 1.0,
      },
      {
        text: "Ask 'Is the warehouse less safe lately?' and post more safety signs.",
        credit: 0.3,
      },
      {
        text: "Ask 'Is overtime making people tired?' and ask a few workers if they feel worn out.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'overtime fatigue' framing from the rival 'workers have simply gotten careless,' and say what result would refute your framing.",
      modelAnswer:
        "Cheapest test: chart each injury's timestamp against hours worked — if fatigue is the driver, injuries should spike in the final overtime hour and be absent on the no-overtime shift. My framing is refuted if injuries are spread evenly across the shift and appear just as often on the day shift, which would point away from overtime.",
      yieldAnchors: [
        "Injury reports cluster in the last hour of shifts",
        "The rise began when overtime was extended",
        "The no-overtime day shift shows no rise",
      ],
      riskAnchors: [
        "Injuries cluster in the final overtime hour",
        "Capping overtime reduces injuries",
        "The day shift stays flat as a control",
      ],
      defeatedBy: [
        "Workers have simply become careless",
        "Injury rates can't be tied to any cause",
      ],
    },
    correctAnswer:
      "Ask 'Is the added overtime fatiguing workers in the final hour and causing the injuries?' — then check whether injuries cluster in the last overtime hour, whether capping overtime reduces them, and whether the no-overtime day shift stays flat as a control.",
    explanation:
      "The strong framing ties the timing and the overtime change to a fatigue mechanism with a control shift; 'why are workers so careless' blames an untestable trait and generates no test.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A language app's daily-active users fell, and the product manager asks 'is the app getting stale?' Retention dropped only among streak users, right after an update made a single missed day break a long streak with no freeze option; non-streak users are unchanged. Which question best frames the inquiry?",
    mcOptions: [
      {
        text: "Ask 'Did the streak change upset users?' and read some app-store reviews.",
        credit: 0.6,
      },
      {
        text: "Ask 'Are people losing interest?' and add new lessons.",
        credit: 0.3,
      },
      {
        text: "Ask 'Did removing the streak-freeze option make a single missed day feel so punishing that long-streak users quit?' — then check whether churn spikes the day after a user's streak breaks, whether reinstating a freeze recovers them, and whether unaffected non-streak users confirm the cause is streak-specific.",
        credit: 1.0,
      },
      {
        text: "Ask 'Why is everyone so addicted to and then bored by apps?' — user attention is fickle and impossible to pin down.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'punishing streak-break' framing from the rival 'the app's content simply got stale,' and say what result would refute your framing.",
      modelAnswer:
        "Cheapest test: look at when streak users churn relative to their streak breaking — if the harsh reset is the cause, quits should spike the day after a streak ends rather than drift gradually. My framing is refuted if streak users leave at a steady rate unrelated to streak breaks and non-streak users churn just as much, which would point to stale content.",
      yieldAnchors: [
        "Retention dropped only among streak users",
        "The drop followed removing the streak-freeze option",
        "Non-streak users are unchanged",
      ],
      riskAnchors: [
        "Churn spikes the day after a streak breaks",
        "Reinstating a freeze recovers users",
        "Non-streak users confirm the cause is streak-specific",
      ],
      defeatedBy: [
        "The app's content simply got stale",
        "User attention can't be analyzed at all",
      ],
    },
    correctAnswer:
      "Ask 'Did removing the streak-freeze option make a single missed day feel so punishing that long-streak users quit?' — then check whether churn spikes the day after a user's streak breaks, whether reinstating a freeze recovers them, and whether unaffected non-streak users confirm the cause is streak-specific.",
    explanation:
      "The good question pins churn to the streak-break event and uses non-streak users as a control; 'why is everyone fickle' is an unanswerable framing that yields no test.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A taxi fleet's fuel costs jumped, and the owner asks 'are gas prices killing us?' Pump prices are flat, but fuel use per mile rose only in the ten cars that got new low-cost tires last month; the rest of the fleet is unchanged. Which way of posing the problem lets an explanation form?",
    mcOptions: [
      {
        text: "Ask 'Is the new low-cost tires' higher rolling resistance raising fuel use in exactly those ten cars?' — then check whether the mileage drop is confined to the re-tired cars, whether swapping back to the old tire spec restores efficiency, and whether pressure and alignment are normal so the tire compound is the suspect.",
        credit: 1.0,
      },
      {
        text: "Ask 'Why is it so expensive to run a fleet now?' — operating costs rise for a hundred reasons no one can isolate.",
        credit: 0,
      },
      {
        text: "Ask 'Did the new tires hurt mileage?' and check one car's fuel log.",
        credit: 0.6,
      },
      {
        text: "Ask 'Is fuel costing more somehow?' and tell drivers to ease off the gas.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'high-resistance tires' framing from the rival 'gas prices are simply up,' and say what result would refute your framing.",
      modelAnswer:
        "Cheapest test: compare fuel use per mile between the ten re-tired cars and the rest of the fleet — if the tires are the cause, only those ten should show the rise while pump prices stay equal for all. My framing is refuted if every car's fuel cost rose together regardless of tires, which would point to fuel prices rather than the tires.",
      yieldAnchors: [
        "Pump prices are flat",
        "Fuel use per mile rose only in the ten re-tired cars",
        "The rest of the fleet is unchanged",
      ],
      riskAnchors: [
        "The mileage drop is confined to the re-tired cars",
        "Swapping back the old tire spec restores efficiency",
        "Pressure and alignment are normal, isolating the tire compound",
      ],
      defeatedBy: [
        "Gas prices are simply up",
        "Fleet costs can't be traced to anything",
      ],
    },
    correctAnswer:
      "Ask 'Is the new low-cost tires' higher rolling resistance raising fuel use in exactly those ten cars?' — then check whether the mileage drop is confined to the re-tired cars, whether swapping back to the old tire spec restores efficiency, and whether pressure and alignment are normal so the tire compound is the suspect.",
    explanation:
      "The strong framing exploits that only ten cars changed, so a per-car comparison can decide it; 'why is it so expensive to run a fleet' is too broad to test, and the flat pump prices already defeat the gas-price framing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A greenhouse's seedlings are growing leggy and weak, and the grower asks 'is my seed stock bad?' The leggy trays are all on the new lower shelf far from the grow lights, while top-shelf trays under the lights are stocky and strong, with identical seed and soil. Which question best frames the inquiry?",
    mcOptions: [
      {
        text: "Ask 'Are my seedlings unhealthy?' and try a new fertilizer.",
        credit: 0.3,
      },
      {
        text: "Ask 'Is the lower shelf the problem?' and look at where the weak trays are.",
        credit: 0.6,
      },
      {
        text: "Ask 'Are the lower-shelf seedlings stretching because they're too far from the grow lights to get enough intensity?' — then check whether legginess tracks distance from the lights, whether raising those trays closer fixes it, and whether identical top-shelf trays staying stocky rules out the seed.",
        credit: 1.0,
      },
      {
        text: "Ask 'Why is growing from seed always so unpredictable?' — seedlings fail for endless reasons that can't be singled out.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'insufficient light intensity' framing from the rival 'the seed stock is simply bad,' and say what result would refute your framing.",
      modelAnswer:
        "Cheapest test: compare trays by their distance from the grow lights — if light is the cause, legginess should worsen with distance while same-seed top-shelf trays stay stocky. My framing is refuted if trays are equally leggy regardless of shelf position, which would point to the seed or soil instead of light.",
      yieldAnchors: [
        "Leggy trays are all on the lower shelf far from the lights",
        "Top-shelf trays are stocky and strong",
        "Seed and soil are identical across shelves",
      ],
      riskAnchors: [
        "Legginess tracks distance from the lights",
        "Raising the trays closer fixes it",
        "Identical top-shelf trays stay stocky, ruling out seed",
      ],
      defeatedBy: [
        "The seed stock is simply bad",
        "Seedling failure can't be explained",
      ],
    },
    correctAnswer:
      "Ask 'Are the lower-shelf seedlings stretching because they're too far from the grow lights to get enough intensity?' — then check whether legginess tracks distance from the lights, whether raising those trays closer fixes it, and whether identical top-shelf trays staying stocky rules out the seed.",
    explanation:
      "The good question names a light-intensity mechanism and uses the same-seed top shelf as a control; 'why is growing from seed unpredictable' is a resigned framing that points nowhere.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A call center's customer-satisfaction scores fell, and the director asks 'are agents getting worse?' Scores dropped only for calls routed through a new automated menu that adds four minutes of prompts before a human answers; calls to the direct line score as high as before. Which way of posing the problem lets an explanation form?",
    mcOptions: [
      {
        text: "Ask 'Why are customers always so angry these days?' — public mood sours for reasons a call center can't measure.",
        credit: 0,
      },
      {
        text: "Ask 'Is the new phone menu annoying callers?' and call in to try it.",
        credit: 0.6,
      },
      {
        text: "Ask 'Is the four-minute automated menu frustrating callers before agents even pick up, dragging down scores?' — then check whether low scores are confined to menu-routed calls, whether shortening the menu lifts them, and whether direct-line calls staying high rules out the agents.",
        credit: 1.0,
      },
      {
        text: "Ask 'Is service slipping?' and coach the agents to be friendlier.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'frustrating phone menu' framing from the rival 'agents have simply gotten worse,' and say what result would refute your framing.",
      modelAnswer:
        "Cheapest test: split satisfaction scores by whether the call came through the new menu or the direct line — if the menu is the cause, only menu-routed calls should score low while direct-line calls handled by the same agents stay high. My framing is refuted if direct-line calls dropped just as much, which would point to the agents rather than the menu.",
      yieldAnchors: [
        "Scores dropped only for menu-routed calls",
        "The menu adds four minutes of prompts",
        "Direct-line calls score as high as before",
      ],
      riskAnchors: [
        "Low scores are confined to menu-routed calls",
        "Shortening the menu lifts scores",
        "Direct-line calls staying high rules out the agents",
      ],
      defeatedBy: [
        "Agents have simply gotten worse",
        "Customer anger can't be measured",
      ],
    },
    correctAnswer:
      "Ask 'Is the four-minute automated menu frustrating callers before agents even pick up, dragging down scores?' — then check whether low scores are confined to menu-routed calls, whether shortening the menu lifts them, and whether direct-line calls staying high rules out the agents.",
    explanation:
      "The strong question splits the data by routing, with the direct line as a built-in control; 'why are customers always angry' is a mood question the center cannot test.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A craft brewery's latest batches taste sour, and the brewer asks 'is my recipe off?' The sour batches were all fermented in the two new plastic fermenters bought last month, while batches in the old steel tanks, with the same recipe and yeast, taste clean. Which question best frames the inquiry?",
    mcOptions: [
      {
        text: "Ask 'Are the new plastic fermenters harboring bacteria the steel tanks don't, souring only their batches?' — then check whether sourness maps exactly to the plastic tanks, whether deep-sanitizing or switching back to steel clears it, and whether same-recipe steel batches staying clean rules out the recipe.",
        credit: 1.0,
      },
      {
        text: "Ask 'Are the new fermenters causing the sourness?' and smell inside one.",
        credit: 0.6,
      },
      {
        text: "Ask 'Why is brewing such a finicky art?' — fermentation has countless variables and off-flavors can't be traced.",
        credit: 0,
      },
      {
        text: "Ask 'Is the beer off lately?' and tweak the hops.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'contaminated plastic fermenters' framing from the rival 'the recipe itself is off,' and say what result would refute your framing.",
      modelAnswer:
        "Cheapest test: compare batches by which vessel fermented them — if the plastic tanks are the cause, only their batches should sour while identical-recipe steel batches stay clean. My framing is refuted if steel-tank batches sour just as much, which would point to the recipe or yeast rather than the fermenters.",
      yieldAnchors: [
        "Sour batches were all in the new plastic fermenters",
        "Steel-tank batches taste clean",
        "Recipe and yeast are the same across tanks",
      ],
      riskAnchors: [
        "Sourness maps exactly to the plastic tanks",
        "Deep-sanitizing or switching back to steel clears it",
        "Clean steel batches rule out the recipe",
      ],
      defeatedBy: [
        "The recipe itself is off",
        "Off-flavors can't be traced at all",
      ],
    },
    correctAnswer:
      "Ask 'Are the new plastic fermenters harboring bacteria the steel tanks don't, souring only their batches?' — then check whether sourness maps exactly to the plastic tanks, whether deep-sanitizing or switching back to steel clears it, and whether same-recipe steel batches staying clean rules out the recipe.",
    explanation:
      "The good question contrasts the two vessel types with recipe held constant, making it answerable; 'why is brewing finicky' is a complaint that points at no cause.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A bookstore's weekly author events draw thin crowds lately, and the owner asks 'do people just not read anymore?' Attendance fell only after events moved from Saturday afternoon to Tuesday evening three months ago; the newsletter list and author lineup are unchanged. Which way of posing the problem lets an explanation form?",
    mcOptions: [
      {
        text: "Ask 'Are events getting less popular?' and try booking bigger-name authors.",
        credit: 0.3,
      },
      {
        text: "Ask 'Why doesn't anyone read books anymore?' — reading's decline is a cultural tide one shop can't study.",
        credit: 0,
      },
      {
        text: "Ask 'Did moving events from Saturday afternoon to a Tuesday work night cut attendance by clashing with people's schedules?' — then check whether the drop began exactly at the schedule change, whether a trial Saturday event refills the room, and whether the unchanged lineup and list rule out fading interest.",
        credit: 1.0,
      },
      {
        text: "Ask 'Did the new time slot hurt turnout?' and ask a regular if Tuesday works for them.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'inconvenient time slot' framing from the rival 'interest in author events is simply fading,' and say what result would refute your framing.",
      modelAnswer:
        "Cheapest test: run one event back on a Saturday afternoon with a comparable author and compare turnout — if the time slot is the cause, the Saturday crowd should rebound. My framing is refuted if the Saturday event draws just as thin a crowd, which would point to fading interest rather than the schedule.",
      yieldAnchors: [
        "Attendance fell only after the move to Tuesday evening",
        "The newsletter list is unchanged",
        "The author lineup is unchanged",
      ],
      riskAnchors: [
        "The drop began exactly at the schedule change",
        "A trial Saturday event refills the room",
        "The unchanged lineup and list rule out fading interest",
      ],
      defeatedBy: [
        "Interest in author events is simply fading",
        "Reading's decline can't be studied by one shop",
      ],
    },
    correctAnswer:
      "Ask 'Did moving events from Saturday afternoon to a Tuesday work night cut attendance by clashing with people's schedules?' — then check whether the drop began exactly at the schedule change, whether a trial Saturday event refills the room, and whether the unchanged lineup and list rule out fading interest.",
    explanation:
      "The strong framing ties the drop to the schedule change and proposes a one-day Saturday test; 'why doesn't anyone read anymore' is a cultural framing the shop cannot resolve.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An office's video calls keep freezing, and IT asks 'is our internet just bad?' The freezes happen only on calls from the third-floor conference room, started when a new microwave was installed in the adjacent kitchen, and occur only during lunch hours when it is used. Which question best frames the inquiry?",
    mcOptions: [
      {
        text: "Ask 'Is the conference room's connection flaky?' and run a speed test in there.",
        credit: 0.6,
      },
      {
        text: "Ask 'Is the new kitchen microwave interfering with the third-floor room's Wi-Fi during lunch and freezing the calls?' — then check whether freezes occur only when the microwave runs, whether a wired connection or different channel stops them, and whether other rooms staying stable rules out the wider internet.",
        credit: 1.0,
      },
      {
        text: "Ask 'Is something wrong with our network?' and reboot the router.",
        credit: 0.3,
      },
      {
        text: "Ask 'Why is office tech always so unreliable?' — networks fail for endless reasons that can't be pinned down.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'microwave interference' framing from the rival 'the office internet is simply unreliable,' and say what result would refute your framing.",
      modelAnswer:
        "Cheapest test: log call freezes against when the microwave is running — if interference is the cause, freezes should occur only during microwave use in that one room. My framing is refuted if calls freeze across all rooms regardless of the microwave, which would point to the broader internet connection.",
      yieldAnchors: [
        "Freezes happen only on third-floor conference-room calls",
        "They started when the kitchen microwave was installed",
        "They occur only during lunch hours when it is used",
      ],
      riskAnchors: [
        "Freezes occur only when the microwave runs",
        "A wired connection or different channel stops them",
        "Other rooms staying stable rules out the wider internet",
      ],
      defeatedBy: [
        "The office internet is simply unreliable",
        "Network failures can't be pinned down",
      ],
    },
    correctAnswer:
      "Ask 'Is the new kitchen microwave interfering with the third-floor room's Wi-Fi during lunch and freezing the calls?' — then check whether freezes occur only when the microwave runs, whether a wired connection or different channel stops them, and whether other rooms staying stable rules out the wider internet.",
    explanation:
      "The good question binds the room, the timing, and the new appliance into a testable interference hypothesis; 'why is office tech unreliable' is too broad to ever resolve.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A farmers-market honey vendor's sales have halved over the past month, and she keeps asking herself 'are people just tired of honey?' She recalls that a month ago the market reorganized and moved her stall from the busy entrance to a quiet back corner, and that a second honey vendor set up near the new entrance around the same time. In one paragraph, reframe her vague worry into a sharp, answerable question, propose the strongest lead, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest move is to drop the unanswerable 'are people tired of honey?' and instead ask the specific question: 'Did losing my high-traffic entrance spot — and ceding it to a new rival — cut the foot traffic past my stall and so my sales?' That framing is fertile because it predicts checkable things: a footfall count should show far fewer people passing the back corner than the old entrance; my decline should track that traffic drop rather than overall market attendance; and a one-day trial back near the entrance should rebound sales even with the rival present. I would test it by tallying passersby at both locations for a week, by comparing my decline against total market attendance to rule out a honey-wide slump, and by renting an entrance spot for one market day to see whether sales recover.",
      yieldAnchors: [
        "Sales halved over the past month",
        "Her stall was moved from the entrance to a quiet back corner",
        "A second honey vendor set up near the new entrance",
      ],
      riskAnchors: [
        "A footfall count shows fewer people pass the back corner",
        "Her decline tracks the traffic drop, not overall attendance",
        "A one-day trial near the entrance rebounds sales",
      ],
      defeatedBy: [
        "People are simply tired of honey",
        "Total market attendance fell, not her traffic specifically",
        "Nothing can be concluded without a full season of data",
      ],
    },
    correctAnswer:
      "The strongest move is to drop the unanswerable 'are people tired of honey?' and instead ask the specific question: 'Did losing my high-traffic entrance spot — and ceding it to a new rival — cut the foot traffic past my stall and so my sales?' That framing is fertile because it predicts checkable things: a footfall count should show far fewer people passing the back corner than the old entrance; my decline should track that traffic drop rather than overall market attendance; and a one-day trial back near the entrance should rebound sales even with the rival present. I would test it by tallying passersby at both locations for a week, by comparing my decline against total market attendance to rule out a honey-wide slump, and by renting an entrance spot for one market day to see whether sales recover.",
    explanation:
      "Under CCR's inverted standard, the vague 'are people tired of honey?' is unanswerable and earns near-zero because it can generate no test; top credit goes to reframing it into the specific traffic-and-location question that names a mechanism and several cheap checks.",
  },
  {
    itemType: "written",
    prompt:
      "A teacher's afternoon class has grown disruptive and inattentive this term, and she keeps wondering 'are kids today just harder to teach?' She notes the disruption spikes in the half hour before lunch, that the class was moved this term to a windowless room over the heating vents, and that her identical morning class in a different room stays calm. In one paragraph, reframe her worry into a sharp, answerable question, propose the strongest lead, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest move is to abandon the unanswerable 'are kids today harder to teach?' and ask the pointed question: 'Is the stuffy, overheated windowless room making the afternoon class restless and hungry right before lunch?' That framing is fertile because it predicts checkable consequences: the disruption should peak with the room's temperature and the pre-lunch hunger window; the same students should behave like her calm morning class when taught in a cooler, ventilated room; and venting or cooling the room should reduce disruption with no change in discipline. I would test it by logging room temperature against disruptive incidents by time of day, by swapping the afternoon class into a well-ventilated room for a week, and by comparing the same kids' behavior across the two rooms to rule out the 'kids these days' story.",
      yieldAnchors: [
        "Disruption spikes in the half hour before lunch",
        "The class moved to a windowless room over the heating vents",
        "Her identical morning class in another room stays calm",
      ],
      riskAnchors: [
        "Disruption peaks with room temperature and pre-lunch hunger",
        "The same students are calm in a ventilated room",
        "Cooling the room reduces disruption without new discipline",
      ],
      defeatedBy: [
        "Kids today are simply harder to teach",
        "The students are inherently unruly regardless of room",
        "No conclusion is possible from a single term",
      ],
    },
    correctAnswer:
      "The strongest move is to abandon the unanswerable 'are kids today harder to teach?' and ask the pointed question: 'Is the stuffy, overheated windowless room making the afternoon class restless and hungry right before lunch?' That framing is fertile because it predicts checkable consequences: the disruption should peak with the room's temperature and the pre-lunch hunger window; the same students should behave like her calm morning class when taught in a cooler, ventilated room; and venting or cooling the room should reduce disruption with no change in discipline. I would test it by logging room temperature against disruptive incidents by time of day, by swapping the afternoon class into a well-ventilated room for a week, and by comparing the same kids' behavior across the two rooms to rule out the 'kids these days' story.",
    explanation:
      "The resigned 'kids today are just harder to teach' is an unanswerable framing that earns near-zero; credit rewards reframing the problem into the specific room-and-timing question with a same-students room-swap test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "An online furniture seller's return rate is climbing, and the founder keeps asking 'is our quality slipping?' The returns are almost all one chair model, the complaints all cite a wobbly leg, and the returns began the month a new flat-pack assembly instruction sheet replaced the old one. In one paragraph, reframe the worry into a sharp, answerable question, propose the strongest lead, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest move is to replace the diffuse 'is our quality slipping?' with the specific question: 'Is the new assembly instruction sheet leading customers to attach that chair's leg wrong, producing the wobble they return it for?' That framing is fertile because it predicts checkable things: the returns should be confined to the one chair whose instructions changed; returned chairs should show a misassembled rather than a defective leg; and customers given a corrected or video instruction should return far fewer. I would test it by checking whether the spike is limited to the model with the new sheet, by inspecting returned chairs for assembly error versus manufacturing defect, and by A/B testing a clearer instruction sheet against the new one to see whether returns fall.",
      yieldAnchors: [
        "Returns are almost all one chair model",
        "Complaints cite a wobbly leg",
        "Returns began when the new instruction sheet replaced the old one",
      ],
      riskAnchors: [
        "Returns are confined to the model whose instructions changed",
        "Returned chairs show misassembly, not a defect",
        "A clearer instruction sheet cuts returns",
      ],
      defeatedBy: [
        "Overall manufacturing quality is slipping",
        "The chairs are simply defective",
        "Return rates are random and can't be explained",
      ],
    },
    correctAnswer:
      "The strongest move is to replace the diffuse 'is our quality slipping?' with the specific question: 'Is the new assembly instruction sheet leading customers to attach that chair's leg wrong, producing the wobble they return it for?' That framing is fertile because it predicts checkable things: the returns should be confined to the one chair whose instructions changed; returned chairs should show a misassembled rather than a defective leg; and customers given a corrected or video instruction should return far fewer. I would test it by checking whether the spike is limited to the model with the new sheet, by inspecting returned chairs for assembly error versus manufacturing defect, and by A/B testing a clearer instruction sheet against the new one to see whether returns fall.",
    explanation:
      "CCR gives near-zero to the broad 'is our quality slipping?' framing because it points at no testable cause; top credit goes to the sharp instructions-and-assembly question that names a mechanism with an inspection and an A/B test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A man has been sleeping poorly for three weeks and keeps asking 'is my insomnia just getting worse with age?' He recalls the bad nights began when he started drinking an after-dinner espresso to get through evening work, that he sleeps fine on weekends when he skips it, and that nothing else in his routine changed. In one paragraph, reframe his worry into a sharp, answerable question, propose the strongest lead, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest move is to drop the unanswerable 'is my insomnia getting worse with age?' and ask the specific question: 'Is the new after-dinner espresso's caffeine keeping me awake on exactly the nights I drink it?' That framing is fertile because it predicts checkable consequences: the bad nights should line up precisely with espresso nights and the good nights with the espresso-free weekends; cutting the espresso should restore sleep within days; and switching to decaf should leave sleep intact, isolating caffeine rather than the evening ritual. I would test it by logging sleep quality against whether I had the espresso each evening, by going two weeks without it to see whether sleep recovers, and by trying decaf to confirm the caffeine, not the habit, is the cause.",
      yieldAnchors: [
        "Bad nights began with the after-dinner espresso",
        "He sleeps fine on weekends when he skips it",
        "Nothing else in his routine changed",
      ],
      riskAnchors: [
        "Bad nights line up with espresso nights",
        "Cutting the espresso restores sleep within days",
        "Decaf leaves sleep intact, isolating caffeine",
      ],
      defeatedBy: [
        "Insomnia is just an unavoidable part of aging",
        "His sleep is randomly variable",
        "Nothing can be concluded without a sleep-lab study",
      ],
    },
    correctAnswer:
      "The strongest move is to drop the unanswerable 'is my insomnia getting worse with age?' and ask the specific question: 'Is the new after-dinner espresso's caffeine keeping me awake on exactly the nights I drink it?' That framing is fertile because it predicts checkable consequences: the bad nights should line up precisely with espresso nights and the good nights with the espresso-free weekends; cutting the espresso should restore sleep within days; and switching to decaf should leave sleep intact, isolating caffeine rather than the evening ritual. I would test it by logging sleep quality against whether I had the espresso each evening, by going two weeks without it to see whether sleep recovers, and by trying decaf to confirm the caffeine, not the habit, is the cause.",
    explanation:
      "Under CCR, the resigned 'is my insomnia just aging?' framing earns near-zero because it invites no test; top credit goes to the precise espresso-and-caffeine question that binds the weekend evidence, names a mechanism, and proposes a cut-it-out and decaf test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A blogger's traffic has dropped by half over six weeks, and she keeps asking 'has my writing gotten worse?' Her analytics show the loss is almost entirely from search engines, the decline began the week she migrated to a new site template, and the new pages take eight seconds to load on mobile versus one second before. In one paragraph, reframe her worry into a sharp, answerable question, propose the strongest lead, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest move is to set aside the unanswerable 'has my writing gotten worse?' and ask the specific question: 'Did the new template's slow mobile load time cause search engines to demote my pages and cut my traffic?' That framing is fertile because it predicts checkable things: the traffic loss should be concentrated in search and in mobile visitors rather than spread evenly; it should date precisely to the template migration; and speeding the pages back up should recover the search rankings. I would test it by segmenting the drop by source and device to confirm it is search-and-mobile, by lining the decline up against the migration date, and by optimizing load time on a sample of pages to see whether their rankings and traffic rebound.",
      yieldAnchors: [
        "The loss is almost entirely from search engines",
        "The decline began the week of the template migration",
        "New pages load in eight seconds on mobile versus one before",
      ],
      riskAnchors: [
        "The loss is concentrated in search and mobile, not spread evenly",
        "The drop dates precisely to the migration",
        "Speeding pages back up recovers rankings",
      ],
      defeatedBy: [
        "Her writing has simply gotten worse",
        "Readers everywhere lost interest",
        "Traffic swings are random and can't be explained",
      ],
    },
    correctAnswer:
      "The strongest move is to set aside the unanswerable 'has my writing gotten worse?' and ask the specific question: 'Did the new template's slow mobile load time cause search engines to demote my pages and cut my traffic?' That framing is fertile because it predicts checkable things: the traffic loss should be concentrated in search and in mobile visitors rather than spread evenly; it should date precisely to the template migration; and speeding the pages back up should recover the search rankings. I would test it by segmenting the drop by source and device to confirm it is search-and-mobile, by lining the decline up against the migration date, and by optimizing load time on a sample of pages to see whether their rankings and traffic rebound.",
    explanation:
      "The self-blaming 'has my writing gotten worse?' is an unanswerable framing that earns near-zero; credit rewards reframing the problem into the specific load-speed-and-search question that names a mechanism and a segment-and-optimize test that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "generative-question",
  title: "The Generative Question",
  weekNumber: 2,
  blurb:
    "An explanation can only form around a question sharp enough to answer. Reframe the vague worry into a specific, mechanism-seeking, answerable question — that framing is what makes the evidence interpretable and the model testable.",
  lectureTitle:
    "2.1 The Generative Question: posing the problem so an explanation can even form",
  body: `# The Generative Question

Before any explanation can take shape, you have to ask a question it could be an answer to. Reflexive caution stalls here in two ways: it either refuses to commit to a question at all ("there's too much going on to say"), or it poses one so vague and sweeping that no observation could ever settle it. Constructive Critical Reasoning insists on the opposite move: sharpen the question until an answer can actually form around it. A well-posed question is half the explanation; a badly-posed one guarantees you stay lost no matter how much data you gather.

## A question is a hypothesis in disguise

How you frame the problem decides what counts as evidence. "Why don't people like us anymore?" admits no answer — there is nothing to measure, no comparison to run, no result that would close it. "Did weekend wait times rise after the new special drew bigger crowds, and is that what's driving the one-star reviews?" carries its own test inside it: compare ticket times, check which nights the bad reviews fall on, add a server and watch. The second question is generative because answering it is a finite, concrete task. The framing did the heavy lifting.

## Make it specific, mechanism-seeking, and answerable

Three properties turn a fog of worry into a working question. **Specific:** it names what changed and where, not "something's off." **Mechanism-seeking:** it asks *how* one thing would produce the other ("the slow menu frustrates callers before an agent picks up"), so the answer is a causal story, not a label. **Answerable:** an observation you could actually collect this week would move it one way or the other. If you can't say what result would settle your question, you haven't posed it yet — you've only named your unease.

## Why the vague question is the failure mode

The dodge is not always a refusal to investigate; often it's a question so loaded or so broad that it *feels* like inquiry while generating nothing. "Why are kids these days worse at math?" or "why won't people spend money anymore?" sound like real questions, but they point at no measurable cause and no checkable result, so they end in a shrug every time. A question you cannot answer is worth no more than refusing to ask one. The strong reasoner notices when a question is unanswerable as posed and rewrites it until it isn't.

## Let the data narrow the question

The evidence usually hands you a sharper question if you let it. One affected chair model, one shaded corner of beds, one drop-off point at the 90-second mark — each invites you to ask about *that* difference rather than the whole system. Use what varies to scope the question down to a comparison you can run. Narrowing is not timidity; it is what makes the question generative.

## Overreach still loses

Sharpening is not the same as smuggling your favorite answer into the question. "Why is our incompetent vendor ruining everything?" is specific but loaded — it assumes the conclusion and blinds you to rivals the data might support. The winning question is pointed enough to answer yet still open enough to be answered *either way*; it names a candidate mechanism while leaving room for the result to refute it.

## In the real world

A clinic's no-show rate climbs and the manager asks, "are patients just less reliable now?" — unanswerable, and it ends the conversation. Reframed: "did no-shows rise after we switched to text-only reminders, and is it worst among patients without smartphones?" Now there is work to do — compare no-show rates before and after the switch, break them out by reminder type, and pilot phone-call reminders for one group. Same facts, but the second framing turns a helpless worry into a short list of things to go measure. That is what posing the generative question buys you: a problem an explanation can finally form around.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
