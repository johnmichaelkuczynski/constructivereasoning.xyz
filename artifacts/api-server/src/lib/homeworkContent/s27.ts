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
      "A chef is certain his signature braised lamb is what brings diners back. New point-of-sale data shows that repeat customers rarely order the lamb; they keep returning for the cheap weekday noodle bowl. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The data must be tallying orders wrong, because the lamb is obviously what makes the place special.",
        credit: 0,
      },
      {
        text: "Repeat visits are likely driven by the affordable, fast noodle bowl rather than the lamb; test whether promoting the noodle bowl lifts return rate, whether repeat customers' receipts center on it, and whether quietly removing the lamb changes how often regulars come back.",
        credit: 1.0,
      },
      {
        text: "The noodle bowl probably matters more than the lamb; we could feature it and watch the regulars.",
        credit: 0.6,
      },
      {
        text: "The noodle bowl seems to have something to do with people coming back.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Repeat visits are likely driven by the affordable, fast noodle bowl rather than the lamb; test whether promoting the noodle bowl lifts return rate, whether repeat customers' receipts center on it, and whether quietly removing the lamb changes how often regulars come back.",
    explanation:
      "Top credit lets the receipt data overturn the cherished belief and names three checkable tests; insisting the count is wrong to save the lamb is the rationalizing dodge that earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A developer is convinced a memory leak causes the app's nightly crashes. After adding memory monitoring, usage stays flat all night, yet the crashes still strike at 2 a.m. — exactly when the database backup job runs. Which lead is strongest?",
    mcOptions: [
      {
        text: "The crash probably comes from the backup job contending for disk or locking tables, not a leak; test whether disabling the backup stops the crashes, whether crash timestamps track the backup's start, and whether moving the backup to 4 a.m. moves the crash with it.",
        credit: 1.0,
      },
      {
        text: "The monitoring tool is probably just missing the leak; the leak is still the real cause and we should keep hunting it.",
        credit: 0,
      },
      {
        text: "The backup job likely has something to do with it; we could turn it off one night and see.",
        credit: 0.6,
      },
      {
        text: "The crashes seem related to that 2 a.m. job somehow.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The crash probably comes from the backup job contending for disk or locking tables, not a leak; test whether disabling the backup stops the crashes, whether crash timestamps track the backup's start, and whether moving the backup to 4 a.m. moves the crash with it.",
    explanation:
      "Flat memory plus a backup-aligned crash time should retire the leak theory; the winning lead commits to the contention mechanism with three tests, while dismissing the monitor to protect the old hunch is the failure mode.",
  },
  {
    itemType: "mc",
    prompt:
      "A coach insists his team plays best after his fiery pre-game speeches. A volunteer charts the season and finds the team's wins cluster on weeks with two rest days before the game, regardless of whether a speech was given. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Wins seem to line up with rest more than speeches.",
        credit: 0.3,
      },
      {
        text: "Recovery from two rest days likely drives the wins, not the speech; test whether matched rested games without a speech still win, whether players' sprint times are higher after rest, and whether scheduling extra rest before key games raises the win rate.",
        credit: 1.0,
      },
      {
        text: "The chart can't capture intensity, so the speeches are surely still the deciding factor.",
        credit: 0,
      },
      {
        text: "Rest probably matters more than the speech; we could try guaranteeing rest before big games.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Recovery from two rest days likely drives the wins, not the speech; test whether matched rested games without a speech still win, whether players' sprint times are higher after rest, and whether scheduling extra rest before key games raises the win rate.",
    explanation:
      "The rest-aligned pattern should pull credence away from the cherished speech; top credit revises to the recovery mechanism with three probes, while waving away the chart to keep the speech in the spotlight scores zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A boutique owner believes her elaborate window display is what drives foot traffic. A new door counter shows that customers per hour barely change when she rotates the display, but jump sharply whenever the cafe next door has a line spilling onto the sidewalk. Which lead is strongest?",
    mcOptions: [
      {
        text: "The cafe's overflow line probably parks browsing customers right outside her door; test whether traffic tracks the cafe's queue length, whether a slow cafe day flattens her counter despite a fresh display, and whether adding a sidewalk bench during cafe rushes pulls more people in.",
        credit: 1.0,
      },
      {
        text: "The counter must be triggering on cafe customers by mistake, so the window display is still the real draw.",
        credit: 0,
      },
      {
        text: "The cafe line seems to bring her more visitors.",
        credit: 0.3,
      },
      {
        text: "The cafe overflow probably helps; we could watch traffic on busy cafe days.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The cafe's overflow line probably parks browsing customers right outside her door; test whether traffic tracks the cafe's queue length, whether a slow cafe day flattens her counter despite a fresh display, and whether adding a sidewalk bench during cafe rushes pulls more people in.",
    explanation:
      "The counter data defeats the display theory and points at the cafe spillover; the strongest answer revises and tests the new mechanism, while blaming the counter to rescue the display is the rationalizing dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A teacher is sure her flashcard drills are why her class aces vocabulary quizzes. This year she kept the drills but dropped the weekly read-aloud story time to save minutes, and quiz scores fell hard. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Vocabulary depends on too many things to blame any one classroom routine.",
        credit: 0,
      },
      {
        text: "The read-aloud story time, not the flashcards, likely carried the vocabulary gains by giving words in context; test whether restoring story time alone recovers the scores, whether words that appeared in stories were the best-learned, and whether a class with story time but no flashcards still scores well.",
        credit: 1.0,
      },
      {
        text: "Story time probably mattered more than she thought; we could add it back and watch scores.",
        credit: 0.6,
      },
      {
        text: "The story time seems to have been doing something for vocabulary.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The read-aloud story time, not the flashcards, likely carried the vocabulary gains by giving words in context; test whether restoring story time alone recovers the scores, whether words that appeared in stories were the best-learned, and whether a class with story time but no flashcards still scores well.",
    explanation:
      "Dropping story time while keeping flashcards isolated the real driver; top credit updates toward context-rich exposure with three tests, while the 'too many things' shrug refuses the update the evidence demands.",
  },
  {
    itemType: "mc",
    prompt:
      "A gardener credits his expensive fertilizer for his prize roses. One spring he forgets to fertilize a whole bed, yet those roses bloom just as well — and he realizes that bed is the one his neighbor's sprinkler reaches every evening. Which lead is strongest?",
    mcOptions: [
      {
        text: "The roses seem to do fine with the neighbor's water.",
        credit: 0.3,
      },
      {
        text: "Consistent evening watering, not the fertilizer, likely drives the blooms; test whether a hand-watered unfertilized bed matches them, whether beds outside the sprinkler's reach lag despite fertilizer, and whether matching the watering schedule everywhere evens out the blooms.",
        credit: 1.0,
      },
      {
        text: "The fertilizer is pricey and surely does something, so the unfertilized bed must have leftover nutrients from last year.",
        credit: 0,
      },
      {
        text: "The watering probably matters more than he assumed; we could water all beds the same and compare.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Consistent evening watering, not the fertilizer, likely drives the blooms; test whether a hand-watered unfertilized bed matches them, whether beds outside the sprinkler's reach lag despite fertilizer, and whether matching the watering schedule everywhere evens out the blooms.",
    explanation:
      "An unfertilized bed blooming just as well is direct disconfirmation; the winning answer revises to the watering mechanism with three checks, while inventing 'leftover nutrients' to protect the fertilizer is the ad hoc rescue that scores zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A factory manager blames the aging Machine A for a spike in cracked castings. He swaps in a brand-new machine, but the cracks continue at the same rate — and a technician notes the cracks all appeared after the plant switched to a cheaper metal alloy last month. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The new machine probably has hidden defects too, so worn equipment is still the cause.",
        credit: 0,
      },
      {
        text: "The cheaper alloy likely cracks under the same casting stresses; test whether running the old alloy on the new machine stops the cracks, whether crack onset matches the alloy switch date, and whether lab samples of the new alloy fail at lower stress.",
        credit: 1.0,
      },
      {
        text: "The alloy change probably explains it; we could switch back and watch the crack rate.",
        credit: 0.6,
      },
      {
        text: "The new alloy seems tied to the cracking.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The cheaper alloy likely cracks under the same casting stresses; test whether running the old alloy on the new machine stops the cracks, whether crack onset matches the alloy switch date, and whether lab samples of the new alloy fail at lower stress.",
    explanation:
      "Replacing the machine without fixing the cracks refutes the equipment theory; top credit updates to the alloy with three tests, while assuming the new machine is also faulty just to keep blaming the machines is rationalization.",
  },
  {
    itemType: "mc",
    prompt:
      "A marketer is certain Instagram is the studio's best signup channel and pours budget there. The team finally adds proper attribution, and it shows almost all signups actually come from a podcast ad, with Instagram clicks rarely converting. Which lead is strongest?",
    mcOptions: [
      {
        text: "The podcast ad likely reaches an audience already primed to sign up; test whether pausing the podcast ad drops signups sharply, whether promo codes confirm the podcast source, and whether shifting budget from Instagram to the podcast raises total signups.",
        credit: 1.0,
      },
      {
        text: "Attribution tools always undercount social, so Instagram is surely still the top channel.",
        credit: 0,
      },
      {
        text: "The podcast seems to bring in more signups than thought.",
        credit: 0.3,
      },
      {
        text: "The podcast probably deserves more credit; we could move some budget and see.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The podcast ad likely reaches an audience already primed to sign up; test whether pausing the podcast ad drops signups sharply, whether promo codes confirm the podcast source, and whether shifting budget from Instagram to the podcast raises total signups.",
    explanation:
      "Clean attribution overturns the Instagram belief; the strongest answer revises toward the podcast with three falsifiable tests, while dismissing the tool as always undercounting social is the dodge that protects the favored channel.",
  },
  {
    itemType: "mc",
    prompt:
      "A man blames his afternoon coffee for his insomnia and quits it for a month with no improvement. He then notices his sleepless nights are precisely the ones he scrolls his phone in bed past midnight. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Sleep is too individual and complex to pin on any single habit.",
        credit: 0,
      },
      {
        text: "Late-night phone use likely delays sleep through light and stimulation, not the coffee; test whether phone-free nights restore sleep, whether sleeplessness tracks screen-time logs, and whether a night with coffee but no phone still lets him sleep.",
        credit: 1.0,
      },
      {
        text: "The phone scrolling probably matters more; he could leave the phone outside the bedroom and see.",
        credit: 0.6,
      },
      {
        text: "The late-night phone seems connected to the bad nights.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Late-night phone use likely delays sleep through light and stimulation, not the coffee; test whether phone-free nights restore sleep, whether sleeplessness tracks screen-time logs, and whether a night with coffee but no phone still lets him sleep.",
    explanation:
      "A coffee-free month with no change refutes the caffeine theory; top credit updates to the phone-use mechanism with three tests, while 'too individual to pin down' refuses the update the data invites.",
  },
  {
    itemType: "mc",
    prompt:
      "A nonprofit director believes its heartfelt year-end email drives most donations. This year the email went out on schedule, but giving stayed flat until a local newspaper ran a story about the charity — after which donations surged. Which lead is strongest?",
    mcOptions: [
      {
        text: "The newspaper story seems to have moved donations.",
        credit: 0.3,
      },
      {
        text: "The newspaper coverage likely reached new donors the email never touched; test whether donation spikes align with the story's publication, whether new (not repeat) donors drove the surge, and whether pitching more local press next year reproduces the lift.",
        credit: 1.0,
      },
      {
        text: "The email's effect is probably just delayed every year, so it's still what really drives giving.",
        credit: 0,
      },
      {
        text: "The press coverage probably helped; we could seek more of it and watch donations.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The newspaper coverage likely reached new donors the email never touched; test whether donation spikes align with the story's publication, whether new (not repeat) donors drove the surge, and whether pitching more local press next year reproduces the lift.",
    explanation:
      "Flat giving until the press hit disconfirms the email theory; the winning answer revises to coverage with three tests, while claiming the email's effect is merely delayed is the unfalsifiable rescue that earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A band is convinced their crowd-pleasing encore song is what sells the most merch after shows. On nights they skip it because of curfew, merch sales are identical — but sales soar whenever they set up the merch table right by the exit instead of in a back corner. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Merch sales depend on mood and money, so it's not worth crediting any one thing.",
        credit: 0,
      },
      {
        text: "Merch sales likely depend on the table's location intercepting departing fans, not the encore; test whether the exit spot beats the corner on matched nights, whether sales track foot traffic past the table, and whether signage pointing to a back table closes the gap.",
        credit: 1.0,
      },
      {
        text: "The table location probably matters more; we could keep it by the exit and watch sales.",
        credit: 0.6,
      },
      {
        text: "Where the table sits seems to affect merch sales.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Merch sales likely depend on the table's location intercepting departing fans, not the encore; test whether the exit spot beats the corner on matched nights, whether sales track foot traffic past the table, and whether signage pointing to a back table closes the gap.",
    explanation:
      "Identical sales on no-encore nights refute the encore theory; top credit updates to the table-placement mechanism with three tests, while 'not worth crediting anything' is the refusal that dodges the update.",
  },
  {
    itemType: "mc",
    prompt:
      "A mechanic is sure a customer's weak battery is causing intermittent no-starts and replaces it, but the car still fails to start on cold mornings. He recalls every failure has happened below 40°F. Which lead is strongest?",
    mcOptions: [
      {
        text: "A cold-sensitive part — likely a failing starter relay or thickening that strains the starter — probably causes the no-starts; test whether the car starts fine when garaged warm overnight, whether failures vanish above 40°F, and whether warming the relay with a heat gun clears a stuck start.",
        credit: 1.0,
      },
      {
        text: "The replacement battery is probably a dud too, so it really was a battery problem all along.",
        credit: 0,
      },
      {
        text: "The cold seems to bring on the no-starts.",
        credit: 0.3,
      },
      {
        text: "Temperature probably plays a role; we could test the car on a few cold mornings.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "A cold-sensitive part — likely a failing starter relay or thickening that strains the starter — probably causes the no-starts; test whether the car starts fine when garaged warm overnight, whether failures vanish above 40°F, and whether warming the relay with a heat gun clears a stuck start.",
    explanation:
      "A new battery that still won't start in the cold refutes the battery theory; the strongest answer revises to a cold-sensitive component with three tests, while assuming the new battery is also bad is the rationalization that keeps a defeated diagnosis alive.",
  },
  {
    itemType: "mc",
    prompt:
      "A brewer credits a rare yeast strain for his beer's prized fruity aroma. He runs a batch with ordinary yeast and it comes out just as fruity — but he realizes both batches fermented in the same warm closet, hotter than his usual cellar. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Aroma in beer is too complex to trace to fermentation conditions.",
        credit: 0,
      },
      {
        text: "The warm fermentation temperature, not the yeast strain, likely produces the fruity esters; test whether the same yeast in the cool cellar loses the aroma, whether ordinary yeast kept warm stays fruity, and whether a temperature log tracks ester intensity across batches.",
        credit: 1.0,
      },
      {
        text: "Temperature probably matters more than the strain; we could brew warm and cool batches and compare.",
        credit: 0.6,
      },
      {
        text: "The warm closet seems to affect the aroma.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The warm fermentation temperature, not the yeast strain, likely produces the fruity esters; test whether the same yeast in the cool cellar loses the aroma, whether ordinary yeast kept warm stays fruity, and whether a temperature log tracks ester intensity across batches.",
    explanation:
      "Ordinary yeast yielding the same aroma defeats the strain theory; top credit updates to fermentation temperature with three tests, while 'too complex to trace' refuses the update the controlled comparison hands you.",
  },
  {
    itemType: "mc",
    prompt:
      "An e-commerce team believes free shipping is what drives their high conversion rate. They run a test charging $4 shipping and conversion barely moves, while a separate change — showing a delivery date at checkout — lifts conversion sharply. Which lead is strongest?",
    mcOptions: [
      {
        text: "Free shipping is industry gospel, so the test must be flawed and shipping is surely still the driver.",
        credit: 0,
      },
      {
        text: "Knowing a concrete delivery date likely reassures buyers and reduces checkout hesitation; test whether removing the date drops conversion back, whether carts abandon less once the date appears, and whether a faster promised date lifts conversion further.",
        credit: 1.0,
      },
      {
        text: "The delivery date seems to help conversion.",
        credit: 0.3,
      },
      {
        text: "The delivery date probably matters more; we could keep showing it and watch conversion.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Knowing a concrete delivery date likely reassures buyers and reduces checkout hesitation; test whether removing the date drops conversion back, whether carts abandon less once the date appears, and whether a faster promised date lifts conversion further.",
    explanation:
      "A shipping fee barely denting conversion while a delivery date lifts it disconfirms the free-shipping belief; the winning answer revises to delivery certainty with three tests, while calling the test flawed to protect 'gospel' is the dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A swim coach is convinced a strict low-carb diet is why her star swimmer dropped his times. The swimmer admits he ignored the diet for the last two months but also started a new dawn sleep schedule — and his times kept falling. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Improved, regular sleep likely drives the faster times, not the diet; test whether his splits track sleep-log hours, whether a poor-sleep week slows him despite eating well, and whether other swimmers improve on the same sleep schedule.",
        credit: 1.0,
      },
      {
        text: "He probably followed the diet more than he admits, so the diet is still what's working.",
        credit: 0,
      },
      {
        text: "His sleep seems linked to the faster times.",
        credit: 0.3,
      },
      {
        text: "The sleep schedule probably matters more; we could track his rest and his times.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Improved, regular sleep likely drives the faster times, not the diet; test whether his splits track sleep-log hours, whether a poor-sleep week slows him despite eating well, and whether other swimmers improve on the same sleep schedule.",
    explanation:
      "Times falling while the diet was abandoned refutes the diet theory; top credit updates to the sleep mechanism with three tests, while insisting he 'secretly followed the diet' is the rationalization that shields a beaten belief.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "An airline executive is sure extra legroom is what makes its frequent flyers loyal. A redesign cut legroom on half the fleet, yet loyalty held steady on those planes — while satisfaction tracked tightly with on-time arrival across the whole fleet. Which lead best follows?",
    mcOptions: [
      {
        text: "On-time performance, not legroom, likely drives loyalty; test whether routes with the worst delays lose loyalty regardless of legroom, whether satisfaction scores rise after punctuality improves, and whether the cramped-but-punctual planes keep their loyal flyers.",
        credit: 1.0,
      },
      {
        text: "Surveys can't really capture comfort, so legroom is surely still the loyalty driver.",
        credit: 0,
      },
      {
        text: "On-time arrival seems to matter for loyalty.",
        credit: 0.3,
      },
      {
        text: "Punctuality probably matters more; we could focus on on-time arrivals and watch loyalty.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your on-time-performance lead from the rival 'legroom still drives loyalty,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare loyalty on the cramped planes that run punctually against roomy planes that run late — if punctuality is the driver, the cramped-but-on-time flyers should stay more loyal. My lead is refuted if the roomy late planes keep their loyal flyers while the cramped punctual ones bleed them.",
      yieldAnchors: [
        "Loyalty held steady on planes with reduced legroom",
        "Satisfaction tracks on-time arrival across the fleet",
        "The legroom cut covered half the fleet",
      ],
      riskAnchors: [
        "Worst-delay routes lose loyalty regardless of legroom",
        "Satisfaction rises after punctuality improves",
        "Cramped-but-punctual planes keep loyal flyers",
      ],
      defeatedBy: [
        "Legroom still drives loyalty despite steady numbers after the cut",
        "Punctuality is unrelated to loyalty",
      ],
    },
    correctAnswer:
      "On-time performance, not legroom, likely drives loyalty; test whether routes with the worst delays lose loyalty regardless of legroom, whether satisfaction scores rise after punctuality improves, and whether the cramped-but-punctual planes keep their loyal flyers.",
    explanation:
      "Loyalty surviving the legroom cut refutes the comfort theory; full credit updates to punctuality with three tests and a clean refutation, while dismissing the surveys to save legroom is the rationalizing dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A baker swears her decades-old sourdough starter is what gives her loaves their signature tang. A new hire accidentally used a week-old starter for a batch, and tasters rated it equally tangy — but that batch had also proofed twice as long in the cool back room. Which lead is strongest?",
    mcOptions: [
      {
        text: "A longer, cooler proof, not the starter's age, likely builds the tang; test whether the old starter on a short proof loses the tang, whether a young starter on a long proof stays tangy, and whether measured acidity tracks proof time rather than starter age.",
        credit: 1.0,
      },
      {
        text: "The tasters' palates probably just weren't sharp that day, so the old starter is still what makes the tang.",
        credit: 0,
      },
      {
        text: "The longer proof seems to affect the tang.",
        credit: 0.3,
      },
      {
        text: "Proof time probably matters more than starter age; we could compare proof lengths and taste them.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your proof-time lead from the rival 'the old starter is what makes the tang,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: bake one loaf with the prized old starter on a short proof and one with a week-old starter on the long cool proof, then compare measured acidity — my lead predicts the long-proof loaf is tangier regardless of starter. It is refuted if the old-starter short-proof loaf is clearly tangier, pointing back to starter age.",
      yieldAnchors: [
        "A week-old starter produced equally tangy loaves",
        "That batch proofed twice as long in a cool room",
        "Tasters rated the tang equal",
      ],
      riskAnchors: [
        "Old starter on a short proof loses the tang",
        "Young starter on a long proof stays tangy",
        "Measured acidity tracks proof time, not starter age",
      ],
      defeatedBy: [
        "The decades-old starter is what creates the tang",
        "Proof time is irrelevant to acidity",
      ],
    },
    correctAnswer:
      "A longer, cooler proof, not the starter's age, likely builds the tang; test whether the old starter on a short proof loses the tang, whether a young starter on a long proof stays tangy, and whether measured acidity tracks proof time rather than starter age.",
    explanation:
      "An equally tangy young-starter batch disconfirms the starter-age belief; top credit revises to proof conditions with three tests and a stated refutation, while blaming the tasters' palates is the ad hoc rescue.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A product manager believes the slick onboarding video is what makes new users activate. The team A/B tested removing the video and activation didn't budge — but users who connected a data source in their first session activated at triple the rate either way. Which lead best follows?",
    mcOptions: [
      {
        text: "The video can't be measured fairly in an A/B test, so it must still be driving activation.",
        credit: 0,
      },
      {
        text: "Connecting a data source early, not watching the video, likely drives activation by making the product immediately useful; test whether prompting the connection raises activation, whether non-watchers who connect still activate, and whether activation tracks connection rate across cohorts.",
        credit: 1.0,
      },
      {
        text: "Connecting data seems to matter for activation.",
        credit: 0.3,
      },
      {
        text: "The data connection probably matters more; we could nudge users to connect and watch activation.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'early data connection' lead from the rival 'the onboarding video drives activation,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: among users who skipped the video entirely, check whether those who connected a data source still activate at the high rate — my lead predicts they do. It is refuted if skipping the video tanks activation even among data-connectors, which would restore the video as the driver.",
      yieldAnchors: [
        "Removing the video left activation unchanged",
        "Early data-source connectors activate at triple the rate",
        "The effect held with or without the video",
      ],
      riskAnchors: [
        "Prompting the connection raises activation",
        "Non-watchers who connect still activate",
        "Activation tracks connection rate across cohorts",
      ],
      defeatedBy: [
        "The onboarding video is what drives activation",
        "Data connection is unrelated to activation",
      ],
    },
    correctAnswer:
      "Connecting a data source early, not watching the video, likely drives activation by making the product immediately useful; test whether prompting the connection raises activation, whether non-watchers who connect still activate, and whether activation tracks connection rate across cohorts.",
    explanation:
      "A null video test plus a strong connection effect overturns the video belief; full credit updates to the data-connection mechanism with three tests, while calling the A/B test unfair is the dodge that protects a defeated assumption.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A farmer credits his pre-dawn irrigation schedule for his high corn yields. A broken timer left one field watered at noon all season, yet it yielded just as well — and that field happens to sit on the farm's only patch of deep, dark soil. Which lead is strongest?",
    mcOptions: [
      {
        text: "Deeper, richer soil, not the watering time, likely drives the yield; test whether dawn-watered fields on poorer soil still lag, whether soil tests predict yield better than irrigation timing, and whether amending a thin-soil field narrows the gap.",
        credit: 1.0,
      },
      {
        text: "The noon field probably got lucky weather, so pre-dawn watering is still the real reason for good yields.",
        credit: 0,
      },
      {
        text: "The deep soil seems to help the yield.",
        credit: 0.3,
      },
      {
        text: "Soil quality probably matters more than timing; we could compare soils and yields.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your soil-quality lead from the rival 'pre-dawn irrigation drives yield,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare yields of pre-dawn-watered fields on thin soil against the noon-watered field on deep soil — my lead predicts the deep-soil field wins regardless of watering time. It is refuted if the thin-soil dawn-watered fields match the deep-soil field, restoring timing as the driver.",
      yieldAnchors: [
        "The noon-watered field yielded just as well",
        "That field sits on the only deep, dark soil",
        "Watering time differed but yield did not",
      ],
      riskAnchors: [
        "Dawn-watered fields on poor soil still lag",
        "Soil tests predict yield better than timing",
        "Amending thin soil narrows the gap",
      ],
      defeatedBy: [
        "Pre-dawn irrigation is what drives the yield",
        "Soil quality is unrelated to yield",
      ],
    },
    correctAnswer:
      "Deeper, richer soil, not the watering time, likely drives the yield; test whether dawn-watered fields on poorer soil still lag, whether soil tests predict yield better than irrigation timing, and whether amending a thin-soil field narrows the gap.",
    explanation:
      "A noon-watered field yielding just as well refutes the schedule theory; top credit revises to soil quality with three tests and a refutation, while invoking 'lucky weather' is the rationalization that rescues the irrigation belief.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A call-center lead is convinced her tightly scripted greeting is what earns high satisfaction scores. A team that quietly dropped the script scored just as high — and that team also had the shortest hold times in the building. Which lead best follows?",
    mcOptions: [
      {
        text: "Short hold times, not the script, likely drive satisfaction; test whether long-hold teams score low despite the script, whether scores rise as hold times fall, and whether the no-script short-hold team keeps its high scores next quarter.",
        credit: 1.0,
      },
      {
        text: "The no-script team probably memorized the script anyway, so the script is still what's working.",
        credit: 0,
      },
      {
        text: "Hold times seem to affect satisfaction.",
        credit: 0.3,
      },
      {
        text: "Hold time probably matters more than the script; we could cut waits and watch scores.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your hold-time lead from the rival 'the script drives satisfaction,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare a scripted team with long holds against the no-script team with short holds — my lead predicts the short-hold team scores higher regardless of script. It is refuted if the scripted long-hold team matches or beats them, pointing back to the script.",
      yieldAnchors: [
        "The no-script team scored just as high",
        "That team had the shortest hold times",
        "Satisfaction held without the script",
      ],
      riskAnchors: [
        "Long-hold teams score low despite the script",
        "Scores rise as hold times fall",
        "The no-script short-hold team stays high next quarter",
      ],
      defeatedBy: [
        "The scripted greeting is what earns the scores",
        "Hold time is unrelated to satisfaction",
      ],
    },
    correctAnswer:
      "Short hold times, not the script, likely drive satisfaction; test whether long-hold teams score low despite the script, whether scores rise as hold times fall, and whether the no-script short-hold team keeps its high scores next quarter.",
    explanation:
      "A no-script team scoring just as high refutes the script theory; full credit updates to hold time with three tests and a refutation, while assuming the team 'memorized the script anyway' is the dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A gym owner credits a charismatic instructor for one class's packed attendance. When that instructor goes on leave, attendance stays full under a substitute — but the class is the only one offered at 6 p.m., right after the local commute ends. Which lead is strongest?",
    mcOptions: [
      {
        text: "Attendance depends on too many lifestyle factors to credit any one thing.",
        credit: 0,
      },
      {
        text: "The convenient post-commute 6 p.m. time slot, not the instructor, likely fills the class; test whether moving the class to an off-peak hour empties it, whether other 6 p.m. classes also fill, and whether the charismatic instructor draws a smaller crowd at an inconvenient time.",
        credit: 1.0,
      },
      {
        text: "The time slot seems to drive attendance.",
        credit: 0.3,
      },
      {
        text: "The 6 p.m. timing probably matters more; we could try other times and watch attendance.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your time-slot lead from the rival 'the instructor packs the class,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: schedule the charismatic instructor at an inconvenient mid-morning slot and the substitute at 6 p.m., then compare attendance — my lead predicts the 6 p.m. class fills regardless of instructor. It is refuted if the instructor draws a full house even at the bad hour while the 6 p.m. substitute class empties.",
      yieldAnchors: [
        "Attendance stayed full under a substitute",
        "The class is the only 6 p.m. offering",
        "6 p.m. lands right after the commute",
      ],
      riskAnchors: [
        "Moving the class off-peak empties it",
        "Other 6 p.m. classes also fill",
        "The star instructor draws fewer at a bad hour",
      ],
      defeatedBy: [
        "The charismatic instructor is what packs the class",
        "The time slot is unrelated to attendance",
      ],
    },
    correctAnswer:
      "The convenient post-commute 6 p.m. time slot, not the instructor, likely fills the class; test whether moving the class to an off-peak hour empties it, whether other 6 p.m. classes also fill, and whether the charismatic instructor draws a smaller crowd at an inconvenient time.",
    explanation:
      "A full house under the substitute refutes the instructor theory; top credit updates to the time slot with three tests and a refutation, while the 'too many lifestyle factors' shrug refuses the update.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A publisher is sure a bold new cover design is why a reissued novel suddenly sells. Stores that received the same book in its old cover sold just as many — and every strong-selling store had placed it on a front-table display. Which lead best follows?",
    mcOptions: [
      {
        text: "Covers are proven to sell books, so the old-cover stores must have other advantages; the new cover is still the cause.",
        credit: 0,
      },
      {
        text: "Front-table placement, not the cover, likely drives the sales; test whether back-shelf stores sell poorly regardless of cover, whether sales track display position, and whether putting the old cover on a front table sells just as well.",
        credit: 1.0,
      },
      {
        text: "The front-table display seems to boost sales.",
        credit: 0.3,
      },
      {
        text: "Placement probably matters more than the cover; we could vary display spots and watch sales.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your placement lead from the rival 'the new cover drives sales,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: in a few stores, put the OLD cover on the front table and the NEW cover on a back shelf, then compare sales — my lead predicts the front-table old cover outsells the shelved new one. It is refuted if the new cover sells more even from the back shelf, restoring the cover as the driver.",
      yieldAnchors: [
        "Old-cover stores sold just as many",
        "Every strong store used a front-table display",
        "Sales held without the new cover",
      ],
      riskAnchors: [
        "Back-shelf stores sell poorly regardless of cover",
        "Sales track display position",
        "Old cover on a front table sells just as well",
      ],
      defeatedBy: [
        "The new cover design is what drives the sales",
        "Display placement is unrelated to sales",
      ],
    },
    correctAnswer:
      "Front-table placement, not the cover, likely drives the sales; test whether back-shelf stores sell poorly regardless of cover, whether sales track display position, and whether putting the old cover on a front table sells just as well.",
    explanation:
      "Equal sales from the old cover refute the cover theory; full credit revises to placement with three tests and a refutation, while assuming old-cover stores have hidden advantages is the rationalization that protects the favored design.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A clinic director credits a new anti-inflammatory drug for patients' faster recovery. A records audit shows the improvement began two weeks before the drug was introduced — right when the clinic added a guided physical-therapy program. Which lead is strongest?",
    mcOptions: [
      {
        text: "The guided physical-therapy program, not the drug, likely drives the faster recovery; test whether patients on therapy but not the drug still improve, whether recovery speed tracks therapy attendance, and whether the improvement's start aligns with the program rather than the drug.",
        credit: 1.0,
      },
      {
        text: "The records are probably misdated, so the drug is surely still the reason patients improved.",
        credit: 0,
      },
      {
        text: "The therapy program seems to help recovery.",
        credit: 0.3,
      },
      {
        text: "The therapy probably matters more; we could compare therapy patients and watch recovery.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your physical-therapy lead from the rival 'the drug drives recovery,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare recovery in patients who got the therapy but not the drug against those who got the drug but skipped therapy — my lead predicts the therapy-only group recovers faster. It is refuted if the drug-only group recovers just as fast, restoring the drug as the driver.",
      yieldAnchors: [
        "Improvement began two weeks before the drug",
        "It started when the therapy program launched",
        "The timing precedes the drug's introduction",
      ],
      riskAnchors: [
        "Therapy-but-no-drug patients still improve",
        "Recovery speed tracks therapy attendance",
        "Improvement start aligns with the program, not the drug",
      ],
      defeatedBy: [
        "The new drug is what drives recovery",
        "Physical therapy is unrelated to recovery speed",
      ],
    },
    correctAnswer:
      "The guided physical-therapy program, not the drug, likely drives the faster recovery; test whether patients on therapy but not the drug still improve, whether recovery speed tracks therapy attendance, and whether the improvement's start aligns with the program rather than the drug.",
    explanation:
      "Improvement starting before the drug refutes the drug theory; top credit updates to the therapy program with three tests and a refutation, while claiming the records are misdated is the dodge that shields the credited drug.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A hotelier believes the property's beachfront location is what earns its glowing reviews. A sister hotel two blocks inland scores just as high — and both share the same front-desk team famous for remembering guests' names and preferences. Which lead best follows?",
    mcOptions: [
      {
        text: "Reviews depend on so many guest moods that no single factor is worth crediting.",
        credit: 0,
      },
      {
        text: "The attentive, personalized front-desk service, not the beachfront, likely earns the reviews; test whether the inland hotel's praise centers on staff, whether review scores dip when that team is off, and whether a third property with the same team scores high regardless of location.",
        credit: 1.0,
      },
      {
        text: "The front-desk team seems to drive the good reviews.",
        credit: 0.3,
      },
      {
        text: "The staff probably matters more than the location; we could study which hotels share the team.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your service lead from the rival 'the beachfront location earns the reviews,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: read what the inland hotel's five-star reviews actually praise — my lead predicts they cite the staff's personal attention, not the view. It is refuted if the inland reviews barely mention service and the praise everywhere centers on the beach, restoring location as the driver.",
      yieldAnchors: [
        "An inland sister hotel scores just as high",
        "Both share the same attentive front-desk team",
        "High reviews hold without a beachfront",
      ],
      riskAnchors: [
        "Inland praise centers on staff",
        "Scores dip when that team is off",
        "A third same-team property scores high regardless of location",
      ],
      defeatedBy: [
        "The beachfront location is what earns the reviews",
        "Front-desk service is unrelated to review scores",
      ],
    },
    correctAnswer:
      "The attentive, personalized front-desk service, not the beachfront, likely earns the reviews; test whether the inland hotel's praise centers on staff, whether review scores dip when that team is off, and whether a third property with the same team scores high regardless of location.",
    explanation:
      "An inland hotel scoring just as high refutes the location theory; full credit revises to the shared service team with three tests and a refutation, while the 'too many guest moods' shrug dodges the update.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A vineyard owner has long credited his expensive new French oak barrels for the rich vanilla notes that won his red wine its first medals. This year, to cut costs, he aged half the vintage in cheaper neutral barrels — and blind tasters could not tell the two halves apart. He also recalls that both halves came from the same hillside block he started picking a week riper than usual. In one paragraph, propose the strongest lead for the wine's character and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the riper grapes from that hillside block, picked a week later than usual, are what built the wine's rich character, while the costly oak barrels contribute far less than the owner assumed — the blind-tasting tie is direct disconfirmation of the barrel story, so the cherished belief must give way. This lead is fecund because it predicts checkable consequences: wine from earlier-picked, lower-ripeness fruit on the same block should taste leaner regardless of barrel; sugar and phenolic measurements at harvest should track the rich notes better than barrel type; and a small lot from a different block aged in the pricey oak should fail to reproduce the character. I would test it by aging matched lots of riper and less-ripe fruit in both barrel types and tasting them blind, by logging harvest ripeness against tasting scores across blocks, and by retiring the assumption that the oak is essential only after the riper-fruit lots confirm the effect.",
      yieldAnchors: [
        "Blind tasters could not tell oak-aged from neutral-barrel halves apart",
        "Both halves came from the same hillside block",
        "That block was picked a week riper than usual",
      ],
      riskAnchors: [
        "Earlier-picked fruit on the same block tastes leaner regardless of barrel",
        "Harvest ripeness measurements track the rich notes better than barrel type",
        "The pricey oak fails to reproduce the character with fruit from a different block",
      ],
      defeatedBy: [
        "The expensive French oak is still what creates the character despite the blind-tasting tie",
        "Wine quality is too complex to attribute to anything",
        "Ripeness alone now guarantees medals from any block",
      ],
    },
    correctAnswer:
      "The strongest lead is that the riper grapes from that hillside block, picked a week later than usual, are what built the wine's rich character, while the costly oak barrels contribute far less than the owner assumed — the blind-tasting tie is direct disconfirmation of the barrel story, so the cherished belief must give way. This lead is fecund because it predicts checkable consequences: wine from earlier-picked, lower-ripeness fruit on the same block should taste leaner regardless of barrel; sugar and phenolic measurements at harvest should track the rich notes better than barrel type; and a small lot from a different block aged in the pricey oak should fail to reproduce the character. I would test it by aging matched lots of riper and less-ripe fruit in both barrel types and tasting them blind, by logging harvest ripeness against tasting scores across blocks, and by retiring the assumption that the oak is essential only after the riper-fruit lots confirm the effect.",
    explanation:
      "Under CCR's inverted standard, insisting the oak still matters after a blind tie is the rationalizing dodge that earns near-zero, and 'wine is too complex to attribute' commits to nothing; top credit goes to letting the disconfirmation overturn the cherished barrel belief and naming tests that could refute the ripeness lead in turn.",
  },
  {
    itemType: "written",
    prompt:
      "A startup founder is certain her product's low price is what wins customers, and she has resisted every suggestion to raise it. A regional test bumped the price 20% in one territory, and sales there actually grew while support tickets dropped. She notices the higher-priced territory was also the one where the sales team started offering a free onboarding call. In one paragraph, propose the strongest lead and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the free onboarding call, not the low price, is what wins and keeps customers — it both lifts sales and cuts confusion-driven support tickets — and the price increase did no harm, so the founder's cherished low-price belief should be revised rather than defended. This lead is fecund because it generates checkable predictions: territories that add the onboarding call without changing price should see the same sales lift and ticket drop; customers who took the call should churn less and file fewer tickets than those who didn't; and a further price rise paired with the call should hold sales steady. I would test it by rolling out the onboarding call alone in a control territory, by segmenting churn and tickets by whether a customer took the call, and by running a second price step in a call-equipped territory to find where, if anywhere, price actually bites.",
      yieldAnchors: [
        "A 20% price increase grew sales rather than shrinking them",
        "Support tickets dropped in the higher-priced territory",
        "That territory also introduced a free onboarding call",
      ],
      riskAnchors: [
        "Adding the onboarding call without a price change reproduces the lift",
        "Customers who took the call churn less and file fewer tickets",
        "A further price rise with the call holds sales steady",
      ],
      defeatedBy: [
        "The low price is still the real driver despite sales rising after the increase",
        "Nothing can be concluded from a single territory",
        "Price no longer matters at any level whatsoever",
      ],
    },
    correctAnswer:
      "The strongest lead is that the free onboarding call, not the low price, is what wins and keeps customers — it both lifts sales and cuts confusion-driven support tickets — and the price increase did no harm, so the founder's cherished low-price belief should be revised rather than defended. This lead is fecund because it generates checkable predictions: territories that add the onboarding call without changing price should see the same sales lift and ticket drop; customers who took the call should churn less and file fewer tickets than those who didn't; and a further price rise paired with the call should hold sales steady. I would test it by rolling out the onboarding call alone in a control territory, by segmenting churn and tickets by whether a customer took the call, and by running a second price step in a call-equipped territory to find where, if anywhere, price actually bites.",
    explanation:
      "CCR gives near-zero to clinging to the low-price belief after sales grew on a price hike, and to 'nothing can be concluded from one territory'; top credit goes to updating toward the onboarding call while naming tests that expose the lead to refutation and locate where price truly matters.",
  },
  {
    itemType: "written",
    prompt:
      "A school principal has championed small class sizes for years, certain they explain her school's strong reading scores. A budget cut forced three classes up to 30 students, yet their reading scores held steady — and those three rooms all happen to use a new phonics curriculum she rolled out the same year. In one paragraph, propose the strongest lead and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the new phonics curriculum, not small class size, is carrying the reading scores, since the enlarged classes kept their results precisely where the phonics program was in use — the steady scores in big classes directly contradict the class-size belief and should force its revision. This lead is fecund because it predicts checkable consequences: small classes still using the old curriculum should lag the large phonics classes; reading gains should track phonics fidelity rather than class roster size; and introducing the phonics program in a previously old-curriculum class should lift its scores even at 30 students. I would test it by comparing reading growth across the four combinations of class size and curriculum, by auditing how faithfully each room delivers the phonics lessons and correlating that with scores, and by piloting the curriculum in a large old-curriculum class to confirm the gain transfers.",
      yieldAnchors: [
        "Reading scores held steady when three classes grew to 30 students",
        "Those three rooms use the new phonics curriculum",
        "The curriculum rolled out the same year as the budget cut",
      ],
      riskAnchors: [
        "Small classes on the old curriculum lag the large phonics classes",
        "Reading gains track phonics fidelity rather than class size",
        "Adding phonics to a large old-curriculum class lifts its scores",
      ],
      defeatedBy: [
        "Small class size is still the cause despite steady scores in big classes",
        "Reading outcomes are too multi-causal to attribute to anything",
        "Class size now has no effect on anything at all",
      ],
    },
    correctAnswer:
      "The strongest lead is that the new phonics curriculum, not small class size, is carrying the reading scores, since the enlarged classes kept their results precisely where the phonics program was in use — the steady scores in big classes directly contradict the class-size belief and should force its revision. This lead is fecund because it predicts checkable consequences: small classes still using the old curriculum should lag the large phonics classes; reading gains should track phonics fidelity rather than class roster size; and introducing the phonics program in a previously old-curriculum class should lift its scores even at 30 students. I would test it by comparing reading growth across the four combinations of class size and curriculum, by auditing how faithfully each room delivers the phonics lessons and correlating that with scores, and by piloting the curriculum in a large old-curriculum class to confirm the gain transfers.",
    explanation:
      "Holding a cherished class-size belief after big classes held steady is the failure mode CCR scores near-zero, as is 'too multi-causal to attribute'; top credit goes to revising toward the phonics curriculum and naming the four-cell comparison and fidelity tests that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A factory's quality chief is convinced a particular supplier's flawed bolts cause the assembly line's recurring failures, and he has pushed to drop that supplier. After switching to a new bolt supplier, the failures continue at the same rate — and an engineer points out every failure has occurred on units built during the humid afternoon hours, regardless of which bolts were used. In one paragraph, propose the strongest lead and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that afternoon humidity, not the bolts, drives the failures — perhaps by letting a sealant or adhesive cure improperly or by corroding a contact — since switching suppliers changed nothing while every failure clusters in the humid hours, which refutes the bolt theory the chief favored. This lead is fecund because it predicts checkable consequences: units built in a dehumidified bay should fail far less regardless of bolt source; failure rates should track measured afternoon humidity day to day; and morning-built units should stay reliable even using the supposedly flawed bolts. I would test it by logging humidity against failures across shifts, by running a controlled batch in a climate-controlled room with the old bolts, and by reintroducing the original supplier in dry conditions to confirm the bolts were never the cause.",
      yieldAnchors: [
        "Failures continued at the same rate after switching suppliers",
        "Every failure occurred during humid afternoon hours",
        "The pattern held regardless of which bolts were used",
      ],
      riskAnchors: [
        "Units built in a dehumidified bay fail far less regardless of bolt source",
        "Failure rates track measured afternoon humidity day to day",
        "Morning-built units stay reliable even with the original bolts",
      ],
      defeatedBy: [
        "The original supplier's bolts are still the cause despite the supplier switch failing to help",
        "The line's failures are too random to trace to anything",
        "Bolts never matter for any assembly failure ever",
      ],
    },
    correctAnswer:
      "The strongest lead is that afternoon humidity, not the bolts, drives the failures — perhaps by letting a sealant or adhesive cure improperly or by corroding a contact — since switching suppliers changed nothing while every failure clusters in the humid hours, which refutes the bolt theory the chief favored. This lead is fecund because it predicts checkable consequences: units built in a dehumidified bay should fail far less regardless of bolt source; failure rates should track measured afternoon humidity day to day; and morning-built units should stay reliable even using the supposedly flawed bolts. I would test it by logging humidity against failures across shifts, by running a controlled batch in a climate-controlled room with the old bolts, and by reintroducing the original supplier in dry conditions to confirm the bolts were never the cause.",
    explanation:
      "Continuing to blame the original supplier after a switch fixed nothing is the rationalization CCR penalizes to near-zero, as is the 'too random to trace' refusal; top credit goes to updating toward the humidity mechanism and naming the dehumidified-bay and humidity-logging tests that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A fitness coach swears by a high-intensity interval method he has built his brand on, certain it is why his clients get lean. He runs a careful three-month comparison: clients on his intervals and clients doing only steady walking lost the same amount of fat — but the walking group, by his own logs, ended up eating in a larger calorie deficit. In one paragraph, propose the strongest lead and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the calorie deficit, not the interval method itself, drives the fat loss — the two groups losing the same fat while the walkers ate at a bigger deficit disconfirms the idea that the intervals are the active ingredient, so the coach should revise his branded claim rather than rationalize it. This lead is fecund because it predicts checkable consequences: clients matched on deficit should lose similar fat whether they do intervals or walking; fat loss should track logged deficit more tightly than training type; and intervals at equal food intake should not beat walking at equal food intake. I would test it by pairing clients on identical measured deficits and comparing fat loss across the two workouts, by correlating each client's fat loss with their logged deficit, and by holding diet constant and varying only the workout to isolate any residual interval effect on body composition or strength.",
      yieldAnchors: [
        "Interval and steady-walking clients lost the same fat over three months",
        "The walking group ate in a larger calorie deficit",
        "The comparison was run carefully over a fixed period",
      ],
      riskAnchors: [
        "Clients matched on deficit lose similar fat regardless of workout",
        "Fat loss tracks logged deficit more tightly than training type",
        "Intervals at equal intake do not beat walking at equal intake",
      ],
      defeatedBy: [
        "The interval method is still the real driver despite equal fat loss at a smaller deficit",
        "Fat loss is too individual to attribute to anything",
        "Exercise type now has no effect on any outcome at all",
      ],
    },
    correctAnswer:
      "The strongest lead is that the calorie deficit, not the interval method itself, drives the fat loss — the two groups losing the same fat while the walkers ate at a bigger deficit disconfirms the idea that the intervals are the active ingredient, so the coach should revise his branded claim rather than rationalize it. This lead is fecund because it predicts checkable consequences: clients matched on deficit should lose similar fat whether they do intervals or walking; fat loss should track logged deficit more tightly than training type; and intervals at equal food intake should not beat walking at equal food intake. I would test it by pairing clients on identical measured deficits and comparing fat loss across the two workouts, by correlating each client's fat loss with their logged deficit, and by holding diet constant and varying only the workout to isolate any residual interval effect on body composition or strength.",
    explanation:
      "CCR scores near-zero for defending the branded interval method against equal results at a smaller deficit, and for the 'too individual to attribute' dodge; top credit goes to updating toward the calorie-deficit mechanism while naming deficit-matched tests that could still rescue or refute a real interval effect.",
  },
];

export const section: SectionContent = {
  slug: "update-that-hurts",
  title: "The Update That Hurts",
  weekNumber: 4,
  blurb:
    "When solid evidence contradicts a model you love, the constructive move is to revise toward what the new evidence supports — not to rationalize the disconfirmation away.",
  lectureTitle:
    "4.3 The Update That Hurts: revising a cherished model against incoming disconfirmation",
  body: `# The Update That Hurts

Every reasoner accumulates favorites: the diagnosis that made your reputation, the strategy that worked once, the explanation you have repeated so often it feels like yours. Then disconfirming evidence arrives. Reflexive defense says protect the model — find a reason the data is wrong. Constructive Critical Reasoning says the opposite: when good evidence contradicts a cherished model, the strong move is to **update toward what the evidence now supports**, and to do it without flinching.

## The update is the discipline

Changing your mind in response to evidence is not weakness; it is the entire point of gathering evidence. A model that can never be moved by data is not a belief, it's an attachment. The skill is to treat your own favorite hypothesis exactly as you would a stranger's: ask what observation would defeat it, and when that observation actually shows up, let it do its work. The update that costs you something — pride, a sunk investment, a tidy story — is the one that teaches you the most.

## Spot the disconfirmation cleanly

First, name precisely what the new evidence defeats. "I replaced the part and the failure continued" kills the part theory; "scores held steady when classes grew" kills the class-size theory; "the blind tasters couldn't tell the barrels apart" kills the barrel theory. Disconfirmation is information. Before you reach for any rescue, state plainly what the data has just ruled out, and let that retire the claim it contradicts.

## Then build the replacement, don't just demolish

Updating is not only dropping the old model — it is committing to the new lead the same evidence points at. The receipts that exonerate the signature dish also implicate the lunch special; the crash time that clears the memory leak also fingers the backup job. Top credit goes to naming that replacement mechanism *and* the cheap tests that would confirm or kill it. An update that says only "I was wrong" and proposes no new lead leaves you with nothing to chase.

## Why rationalizing the disconfirmation loses

The failure mode is motivated rescue: "the tool must be miscounting," "the tasters were off that day," "they probably followed the diet secretly," "the records are misdated." Each quietly assumes the conclusion it is trying to save and immunizes the cherished model against any test. That earns zero — not because the model is certainly false, but because refusing to be moved by clean evidence abandons reasoning altogether. The equally empty version is the shrug: "outcomes are too complex to attribute to anything," which dodges the update by refusing to commit at all.

## Overreach still loses

Revision is not stampede. One wobble does not mean junk the whole framework and swing to the opposite extreme — "price never matters," "exercise type is irrelevant to everything." Update as far as the evidence reaches and no further: revise the specific claim the data defeated, keep what still stands, and name the test that would tell you whether you have over-corrected.

## In the real world

A marketer is sure Instagram drives signups. Proper attribution shows almost all signups come from a podcast ad. The rationalizing dodge: "attribution always undercounts social, so Instagram is still king." The constructive update: accept that the data overturns the Instagram belief, commit to the podcast as the live lead, and test it — pause the podcast ad and watch signups fall, confirm the source with promo codes, shift budget and measure the total. The update hurt; it also pointed straight at the next experiment.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
