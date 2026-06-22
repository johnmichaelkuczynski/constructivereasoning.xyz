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
      "A café has separately confirmed three things: commuters drive the 7–9 a.m. espresso rush, midmorning remote workers buy most of the pastries and stay for hours, and the loyalty app's reorder feature is used almost entirely by the midmorning crowd. Which conclusion best assembles these into one working picture?",
    mcOptions: [
      {
        text: "These three are separate findings about different times of day; there's no reason to fold them into a single account.",
        credit: 0,
      },
      {
        text: "They fit one standing model: the café runs two engines — a fast commuter engine and a slow remote-worker engine — and the app mainly deepens the second; this frame predicts that pushing app adoption lifts pastry-and-dwell revenue but barely touches the espresso rush, that a commuter-only app feature sees low uptake, and that cutting midmorning seating hurts app reorders more than espresso sales — and it strains if commuters turn out to use the app heavily, which we should watch.",
        credit: 1.0,
      },
      {
        text: "The rush, the pastry buyers, and the app all point to one loyal-customer story; we could promote the app to everyone and watch total revenue.",
        credit: 0.6,
      },
      {
        text: "All three findings seem related to the café's busy customers somehow.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "They fit one standing model: the café runs two engines — a fast commuter engine and a slow remote-worker engine — and the app mainly deepens the second; this frame predicts that pushing app adoption lifts pastry-and-dwell revenue but barely touches the espresso rush, that a commuter-only app feature sees low uptake, and that cutting midmorning seating hurts app reorders more than espresso sales — and it strains if commuters turn out to use the app heavily, which we should watch.",
    explanation:
      "Top credit binds all three vetted findings into one two-engine frame that makes a joint prediction no single finding makes alone and names where it could strain; refusing to combine them is the zero-credit dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A hospital has independently verified that surgical patients who walk on day one go home sooner, that patients on a new anti-nausea protocol eat solid food sooner, and that early eaters regain strength faster. Which conclusion best integrates these?",
    mcOptions: [
      {
        text: "Walking, anti-nausea care, and early eating are unrelated wins logged by different teams; they shouldn't be linked.",
        credit: 0,
      },
      {
        text: "The three findings seem to add up to faster recovery overall.",
        credit: 0.3,
      },
      {
        text: "They chain into one recovery pathway: controlling nausea lets patients eat, eating restores strength, and strength enables the early walking that shortens stays; the combined frame predicts that adding the anti-nausea protocol should raise day-one walking rates, that patients who eat but can't walk gain less, and that the whole chain collapses if a patient is kept on IV nutrition — and it strains for patients whose nausea is well controlled yet still won't eat.",
        credit: 1.0,
      },
      {
        text: "The findings combine into a recovery story; we could roll all three practices out together and see if stays drop.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "They chain into one recovery pathway: controlling nausea lets patients eat, eating restores strength, and strength enables the early walking that shortens stays; the combined frame predicts that adding the anti-nausea protocol should raise day-one walking rates, that patients who eat but can't walk gain less, and that the whole chain collapses if a patient is kept on IV nutrition — and it strains for patients whose nausea is well controlled yet still won't eat.",
    explanation:
      "The winning answer assembles the three vetted findings into a causal chain with a joint prediction (nausea control should propagate to walking) and a named strain point; treating them as unrelated wins is the dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A game studio has confirmed three things separately: players who clear the tutorial retain far better, players who join a guild in week one rarely quit, and players who customize their avatar spend more. Which conclusion best assembles them?",
    mcOptions: [
      {
        text: "These are three different metrics owned by three teams; bundling them risks a false story, so keep them apart.",
        credit: 0,
      },
      {
        text: "Tutorial, guild, and avatar findings all seem tied to engaged players.",
        credit: 0.3,
      },
      {
        text: "All three are facets of one investment ladder — competence (tutorial), belonging (guild), and identity (avatar) — each raising a player's stake in the game; the frame predicts that a player who hits all three should be the stickiest of all, that nudging tutorial-finishers toward guilds should compound retention, and that avatar customization alone, without competence or belonging, should convert weakly — and it strains if heavy customizers turn out to churn despite spending.",
        credit: 1.0,
      },
      {
        text: "The three behaviors stack into an engagement story; we could push all of them and watch retention rise.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "All three are facets of one investment ladder — competence (tutorial), belonging (guild), and identity (avatar) — each raising a player's stake in the game; the frame predicts that a player who hits all three should be the stickiest of all, that nudging tutorial-finishers toward guilds should compound retention, and that avatar customization alone, without competence or belonging, should convert weakly — and it strains if heavy customizers turn out to churn despite spending.",
    explanation:
      "Top credit unifies the verified behaviors under one investment-ladder mechanism, predicts a compounding effect across them, and flags a strain; refusing to bundle them at all earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "An orchard owner has verified that bees pollinate best on calm mornings, that a cover-crop strip boosted local bee counts, and that trees nearest the strip set the most fruit. Which conclusion best integrates the three?",
    mcOptions: [
      {
        text: "The cover crop feeds and shelters more bees, whose calm-morning visits to the nearest trees raise fruit set; the joined frame predicts fruit set should fall off with distance from the strip, that adding strips between rows should lift the orchard's interior, and that a windy spring should blunt the strip's benefit — and it strains if distant trees with their own wind shelter set just as much fruit.",
        credit: 1.0,
      },
      {
        text: "Bees, cover crop, and fruit set seem to be parts of the same healthy-orchard picture.",
        credit: 0.3,
      },
      {
        text: "The three findings are about insects, plants, and yield — different domains that shouldn't be merged into one explanation.",
        credit: 0,
      },
      {
        text: "The cover crop probably helps the whole system; we could plant more strips and watch total yield.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The cover crop feeds and shelters more bees, whose calm-morning visits to the nearest trees raise fruit set; the joined frame predicts fruit set should fall off with distance from the strip, that adding strips between rows should lift the orchard's interior, and that a windy spring should blunt the strip's benefit — and it strains if distant trees with their own wind shelter set just as much fruit.",
    explanation:
      "The strongest answer links the three vetted findings through one bee-mediated mechanism and predicts a distance gradient plus a weather dependency; calling them different domains that can't merge is the dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A logistics firm has separately confirmed that routes with a single mid-shift break finish faster, that drivers who pre-load the van the night before start sooner, and that vans serviced on schedule break down least. Which conclusion best assembles these?",
    mcOptions: [
      {
        text: "Break timing, pre-loading, and maintenance are three independent operational facts; combining them invents a pattern that isn't there.",
        credit: 0,
      },
      {
        text: "They cohere into one on-time-delivery model where preventable friction is removed at three stages — start (pre-load), mid-day (one efficient break), and the road (no breakdowns); the frame predicts a route doing all three should hit the highest on-time rate, that fixing only one stage gives partial gains, and that the worst routes are those failing all three — and it strains if a well-maintained, pre-loaded route with a good break still runs late, pointing to traffic instead.",
        credit: 1.0,
      },
      {
        text: "The three practices all seem to be about running deliveries more smoothly.",
        credit: 0.3,
      },
      {
        text: "These habits add up to better delivery performance; we could mandate all three and track on-time rates.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "They cohere into one on-time-delivery model where preventable friction is removed at three stages — start (pre-load), mid-day (one efficient break), and the road (no breakdowns); the frame predicts a route doing all three should hit the highest on-time rate, that fixing only one stage gives partial gains, and that the worst routes are those failing all three — and it strains if a well-maintained, pre-loaded route with a good break still runs late, pointing to traffic instead.",
    explanation:
      "Top credit maps the three vetted findings onto stages of one delivery process and predicts additive gains plus a strain that would expose an uncontrolled factor; calling them independent facts that shouldn't combine is the zero dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A school has verified that students who sleep more score higher, that students who eat breakfast concentrate longer, and that the after-lunch dip hits hardest in lecture-heavy classes. Which conclusion best integrates them?",
    mcOptions: [
      {
        text: "Sleep, breakfast, and the post-lunch dip are separate studies; they don't belong in one explanation.",
        credit: 0,
      },
      {
        text: "All three are about students doing better, broadly speaking.",
        credit: 0.3,
      },
      {
        text: "They unify under one alertness-budget model: performance tracks how much usable attention students have at a given moment, set by sleep and fuel and spent fastest in passive lectures; the frame predicts the dip should be smallest for well-slept, fed students in interactive classes, that improving sleep should help most in the morning while breakfast helps most before lunch, and that making afternoon classes active should rescue tired students best — and it strains if well-rested, fed students still crash after lunch regardless of format.",
        credit: 1.0,
      },
      {
        text: "The findings point to alertness mattering; we could push sleep, breakfast, and active lessons and watch scores.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "They unify under one alertness-budget model: performance tracks how much usable attention students have at a given moment, set by sleep and fuel and spent fastest in passive lectures; the frame predicts the dip should be smallest for well-slept, fed students in interactive classes, that improving sleep should help most in the morning while breakfast helps most before lunch, and that making afternoon classes active should rescue tired students best — and it strains if well-rested, fed students still crash after lunch regardless of format.",
    explanation:
      "The winning answer fuses the three confirmed findings under one alertness-budget mechanism that predicts interaction effects between them; refusing to relate them is the dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A retailer has confirmed that a wider main aisle raised browsing time, that eye-level placement lifted impulse buys, and that a slower checkout queue let people add last-minute items. Which conclusion best assembles these?",
    mcOptions: [
      {
        text: "Aisle width, shelf placement, and queue speed are three unrelated tweaks; merging them into one story overreaches.",
        credit: 0,
      },
      {
        text: "All three seem to be about getting shoppers to buy more.",
        credit: 0.3,
      },
      {
        text: "They form one exposure-time model: every change works by keeping the shopper in front of merchandise longer, so impulse buying scales with dwell at decision points; the frame predicts the three effects should compound in a store with all of them, that any single change helps proportionally to the dwell it adds, and that a fast self-checkout would erase the queue-driven gains — and it strains if the wide aisle speeds shoppers through rather than slowing them, which we should measure.",
        credit: 1.0,
      },
      {
        text: "The three tweaks add up to more sales; we could apply all of them and watch the basket size.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "They form one exposure-time model: every change works by keeping the shopper in front of merchandise longer, so impulse buying scales with dwell at decision points; the frame predicts the three effects should compound in a store with all of them, that any single change helps proportionally to the dwell it adds, and that a fast self-checkout would erase the queue-driven gains — and it strains if the wide aisle speeds shoppers through rather than slowing them, which we should measure.",
    explanation:
      "Top credit unifies the three vetted tweaks under one exposure-time mechanism and predicts both a compounding effect and a way the frame could fail; calling them unrelated tweaks that overreach to merge is the dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A factory has verified that machines warmed up for ten minutes hold tolerance better, that operators on the morning shift report fewer errors, and that parts cut from a fresh blade pass inspection most. Which conclusion best integrates them?",
    mcOptions: [
      {
        text: "Warm-up, shift timing, and blade wear are three different causes logged separately; there's no single explanation tying them.",
        credit: 0,
      },
      {
        text: "They converge on one 'readiness' model of quality: a part passes when the machine, the operator, and the tooling are each at peak — thermally stable, alert, and sharp; the frame predicts the best parts come when all three align (warm machine, morning, fresh blade), that defects rise as any one degrades, and that a worn blade can sink even a warm machine run by a fresh operator — and it strains if morning parts fail even with a warm machine and new blade, pointing to a fourth factor.",
        credit: 1.0,
      },
      {
        text: "Quality seems to depend on several things being right at once.",
        credit: 0.3,
      },
      {
        text: "The three factors all affect quality; we could enforce warm-ups, morning runs, and fresh blades and watch defects.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "They converge on one 'readiness' model of quality: a part passes when the machine, the operator, and the tooling are each at peak — thermally stable, alert, and sharp; the frame predicts the best parts come when all three align (warm machine, morning, fresh blade), that defects rise as any one degrades, and that a worn blade can sink even a warm machine run by a fresh operator — and it strains if morning parts fail even with a warm machine and new blade, pointing to a fourth factor.",
    explanation:
      "The strongest answer assembles the three confirmed findings into one readiness model that predicts how the factors interact and where the frame would crack; logging them as separate untied causes is the zero dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A streaming service has confirmed that personalized thumbnails raise click-through, that autoplay previews raise click-through, and that a 'because you watched' row raises completion. Two of these were tested on the home screen, the third on the detail page. Which conclusion best integrates them?",
    mcOptions: [
      {
        text: "These are three isolated experiment results on different screens; forcing them into one theory is unjustified.",
        credit: 0,
      },
      {
        text: "All three seem to be about getting people to watch more.",
        credit: 0.3,
      },
      {
        text: "They cohere into one relevance-signaling model: each feature works by making the next title feel personally apt, lowering the cost of choosing; the frame predicts the features should help most for users with rich watch histories, that they may overlap rather than fully add (all signaling the same relevance), and that a brand-new user with no history should gain least from any of them — and it strains if the features help cold-start users just as much, which would point to novelty, not relevance.",
        credit: 1.0,
      },
      {
        text: "The three features all lift viewing; we could ship all of them and watch total watch time.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "They cohere into one relevance-signaling model: each feature works by making the next title feel personally apt, lowering the cost of choosing; the frame predicts the features should help most for users with rich watch histories, that they may overlap rather than fully add (all signaling the same relevance), and that a brand-new user with no history should gain least from any of them — and it strains if the features help cold-start users just as much, which would point to novelty, not relevance.",
    explanation:
      "Top credit binds the three vetted results under one relevance-signaling mechanism and even predicts they may overlap rather than add — a non-obvious joint consequence — plus a strain; refusing to theorize across screens is the dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A marathon coach has verified that runners who carb-load finish stronger, that those who pace evenly avoid the wall, and that those who train at race pace fade least in the final miles. Which conclusion best assembles these?",
    mcOptions: [
      {
        text: "Fueling, pacing, and training are three separate areas; they shouldn't be combined into one account.",
        credit: 0,
      },
      {
        text: "They unify under one fuel-budget model of the late race: the wall is glycogen running out, so each practice protects the same finite store — loading fills it, even pacing spends it slowly, and race-pace training teaches the body to burn it efficiently; the frame predicts the strongest finishes come from runners doing all three, that even pacing matters most for the under-fueled, and that a loaded runner who sprints early should still hit the wall — and it strains if a well-trained, evenly paced runner fades despite full glycogen, pointing to hydration or heat.",
        credit: 1.0,
      },
      {
        text: "All three habits seem to help runners finish well.",
        credit: 0.3,
      },
      {
        text: "The practices add up to a better finish; we could have runners do all three and watch their final-mile splits.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "They unify under one fuel-budget model of the late race: the wall is glycogen running out, so each practice protects the same finite store — loading fills it, even pacing spends it slowly, and race-pace training teaches the body to burn it efficiently; the frame predicts the strongest finishes come from runners doing all three, that even pacing matters most for the under-fueled, and that a loaded runner who sprints early should still hit the wall — and it strains if a well-trained, evenly paced runner fades despite full glycogen, pointing to hydration or heat.",
    explanation:
      "The winning answer fuses the three confirmed practices under one glycogen-budget mechanism that predicts how they trade off and where the frame fails; treating them as separate areas is the dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A SaaS team has confirmed that users who invite a teammate retain better, that users who connect a data source retain better, and that users who build a custom dashboard retain best of all. Which conclusion best integrates them?",
    mcOptions: [
      {
        text: "Invites, integrations, and dashboards are three separate retention signals; bundling them into one model isn't warranted.",
        credit: 0,
      },
      {
        text: "All three actions seem to mark engaged accounts.",
        credit: 0.3,
      },
      {
        text: "They assemble into one switching-cost model: each action embeds the product deeper into the customer's workflow (people, data, and views), so retention rises with how much would have to be rebuilt to leave; the frame predicts accounts doing all three should be nearly impossible to churn, that the actions compound rather than substitute, and that an account with a dashboard but no teammates or data should be more fragile than the order alone suggests — and it strains if solo, source-less dashboard users retain just as well.",
        credit: 1.0,
      },
      {
        text: "The three actions all boost retention; we could prompt all of them and watch churn fall.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "They assemble into one switching-cost model: each action embeds the product deeper into the customer's workflow (people, data, and views), so retention rises with how much would have to be rebuilt to leave; the frame predicts accounts doing all three should be nearly impossible to churn, that the actions compound rather than substitute, and that an account with a dashboard but no teammates or data should be more fragile than the order alone suggests — and it strains if solo, source-less dashboard users retain just as well.",
    explanation:
      "Top credit unifies the three vetted signals under one switching-cost mechanism and predicts compounding plus a fragility case; refusing to bundle the signals is the zero dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "An ecologist has verified that a reintroduced wolf pack cut deer numbers, that willow saplings rebounded along the river, and that beavers returned to dam the recovered streams. Which conclusion best assembles these?",
    mcOptions: [
      {
        text: "Wolves, willows, and beavers are different species studied by different observers; there's no single chain linking them.",
        credit: 0,
      },
      {
        text: "They form one trophic-cascade model: wolves reduce deer browsing, which lets willows recover, which gives beavers food and material to dam, reshaping the streams; the frame predicts willow rebound should appear first where deer pressure dropped most, that beaver return should lag willow recovery, and that removing the wolves again should reverse the chain top-down — and it strains if willows rebounded in stretches the deer never left, pointing to rainfall instead.",
        credit: 1.0,
      },
      {
        text: "The three changes all seem part of the ecosystem recovering.",
        credit: 0.3,
      },
      {
        text: "The recovery seems connected; we could keep the wolves and monitor the river over years.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "They form one trophic-cascade model: wolves reduce deer browsing, which lets willows recover, which gives beavers food and material to dam, reshaping the streams; the frame predicts willow rebound should appear first where deer pressure dropped most, that beaver return should lag willow recovery, and that removing the wolves again should reverse the chain top-down — and it strains if willows rebounded in stretches the deer never left, pointing to rainfall instead.",
    explanation:
      "The strongest answer chains the three confirmed findings into one trophic cascade with ordered predictions (lags, spatial pattern, reversibility) and a named strain; denying any link between the species is the dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A bookstore has confirmed that a front-table display lifts sales of featured titles, that staff handwritten recommendation cards lift sales, and that an in-store book club drives repeat visits. Which conclusion best integrates them?",
    mcOptions: [
      {
        text: "Displays, staff cards, and the book club are three different programs; tying them to one cause is reading in a pattern.",
        credit: 0,
      },
      {
        text: "All three seem to be about selling more books.",
        credit: 0.3,
      },
      {
        text: "They cohere under one human-curation model: customers buy more when a trusted person, not an algorithm, vouches for a book, so each program works by amplifying staff taste; the frame predicts the front table should sell best when paired with a staff card, that titles the staff genuinely love should outsell mandated picks, and that club selections chosen by staff should move more copies than publisher-pushed ones — and it strains if a purely algorithmic display sells just as well as the staff-curated one.",
        credit: 1.0,
      },
      {
        text: "The three programs all help sales; we could run all of them and watch revenue.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "They cohere under one human-curation model: customers buy more when a trusted person, not an algorithm, vouches for a book, so each program works by amplifying staff taste; the frame predicts the front table should sell best when paired with a staff card, that titles the staff genuinely love should outsell mandated picks, and that club selections chosen by staff should move more copies than publisher-pushed ones — and it strains if a purely algorithmic display sells just as well as the staff-curated one.",
    explanation:
      "Top credit unifies the three vetted programs under one human-curation mechanism and predicts interactions plus a disconfirming case; calling the pattern imaginary is the zero dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A city transit agency has verified that real-time arrival signs reduced perceived wait, that heated shelters raised winter ridership, and that a frequency boost on one line raised its ridership most of all. Which conclusion best assembles these?",
    mcOptions: [
      {
        text: "Signs, shelters, and frequency are three separate investments; combining them into one theory of ridership isn't supported.",
        credit: 0,
      },
      {
        text: "They integrate under one wait-cost model: ridership rises as the felt cost of waiting falls, whether by shortening the wait (frequency), making it feel shorter (signs), or making it more comfortable (shelters); the frame predicts frequency should beat the other two because it cuts the real wait, that signs and shelters help most on infrequent lines where waits are long, and that on a high-frequency line signs add little — and it strains if signs lift ridership even where buses already come every three minutes.",
        credit: 1.0,
      },
      {
        text: "All three improvements seem to make transit more appealing.",
        credit: 0.3,
      },
      {
        text: "The three upgrades all raise ridership; we could deploy all of them and track boardings.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "They integrate under one wait-cost model: ridership rises as the felt cost of waiting falls, whether by shortening the wait (frequency), making it feel shorter (signs), or making it more comfortable (shelters); the frame predicts frequency should beat the other two because it cuts the real wait, that signs and shelters help most on infrequent lines where waits are long, and that on a high-frequency line signs add little — and it strains if signs lift ridership even where buses already come every three minutes.",
    explanation:
      "The winning answer fuses the three confirmed investments under one wait-cost mechanism that ranks them and predicts where each helps most, with a strain; treating them as unrelated investments is the dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A bakery chain has confirmed that stores baking on-site sell more bread, that stores with a visible oven window sell more, and that the morning baking smell coincides with the day's sales peak. Which conclusion best integrates them?",
    mcOptions: [
      {
        text: "On-site baking, the oven window, and the smell are three separate observations; there's no good reason to merge them.",
        credit: 0,
      },
      {
        text: "All three seem connected to fresh bread selling well.",
        credit: 0.3,
      },
      {
        text: "They assemble into one freshness-cue model: sales rise with how vividly the store signals 'baked here, now' through sight, smell, and the act itself; the frame predicts a store with all three cues should outsell one with only fresh bread but no visible or fragrant baking, that piping the smell without on-site baking should give a partial lift, and that the sales peak should track baking times, not just foot traffic — and it strains if a windowless, scent-free store selling identical on-site bread sells just as much.",
        credit: 1.0,
      },
      {
        text: "The three factors all help bread sales; we could add windows and on-site baking everywhere and watch sales.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "They assemble into one freshness-cue model: sales rise with how vividly the store signals 'baked here, now' through sight, smell, and the act itself; the frame predicts a store with all three cues should outsell one with only fresh bread but no visible or fragrant baking, that piping the smell without on-site baking should give a partial lift, and that the sales peak should track baking times, not just foot traffic — and it strains if a windowless, scent-free store selling identical on-site bread sells just as much.",
    explanation:
      "Top credit binds the three vetted observations under one freshness-cue mechanism and predicts a partial-cue test plus a timing check; refusing to merge them is the zero-credit dodge.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A pediatric clinic has separately verified that a text-reminder system cut missed vaccinations, that a walk-in Saturday slot raised attendance among working parents, and that bundling shots into one visit reduced repeat trips. Which conclusion best assembles these into one standing model?",
    mcOptions: [
      {
        text: "Reminders, Saturday slots, and bundling are three unrelated fixes from different staff; they shouldn't be unified.",
        credit: 0,
      },
      {
        text: "They cohere into one access-friction model: vaccination rises as the practical cost of getting a child in falls — remembering (reminders), timing (Saturday), and trip count (bundling); the frame predicts the gains should be largest among working parents who face all three frictions, that reminders help least where access is already easy, and that bundling plus Saturday slots should compound for families who previously needed multiple weekday trips — and it strains if reminders alone close the gap even without the other two.",
        credit: 1.0,
      },
      {
        text: "All three seem to be about getting more kids vaccinated.",
        credit: 0.3,
      },
      {
        text: "The three fixes add up to better coverage; we could run all of them and watch vaccination rates.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your unified access-friction model from the rival 'each fix works on its own unrelated cause,' and say what result would refute your model.",
      modelAnswer:
        "Cheapest test: segment the gains by working vs. non-working parents — my model predicts working parents, who face remembering, timing, and trip-count frictions at once, should benefit most from the combined program. It is refuted if the three fixes give the same lift to everyone regardless of how many frictions they faced, which would mean they tap separate, unrelated causes rather than one access-friction dimension.",
      yieldAnchors: [
        "Text reminders cut missed vaccinations",
        "A Saturday walk-in slot raised attendance among working parents",
        "Bundling shots into one visit reduced repeat trips",
      ],
      riskAnchors: [
        "Gains are largest among working parents facing all three frictions",
        "Reminders help least where access is already easy",
        "Saturday slots plus bundling compound for multi-trip families",
      ],
      defeatedBy: [
        "The three fixes work through separate unrelated causes",
        "Reminders alone close the gap with no role for the others",
      ],
    },
    correctAnswer:
      "They cohere into one access-friction model: vaccination rises as the practical cost of getting a child in falls — remembering (reminders), timing (Saturday), and trip count (bundling); the frame predicts the gains should be largest among working parents who face all three frictions, that reminders help least where access is already easy, and that bundling plus Saturday slots should compound for families who previously needed multiple weekday trips — and it strains if reminders alone close the gap even without the other two.",
    explanation:
      "Full credit unifies the three vetted fixes under one access-friction dimension, predicts who benefits most and where they compound, and is paired with a segmentation test that names its own refutation; calling them unrelated fixes is the dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A vineyard has confirmed that east-facing rows ripen sweeter, that drip irrigation raised yield on sandy blocks, and that a late-season leaf-pull improved color. Which conclusion best assembles these into one standing model?",
    mcOptions: [
      {
        text: "Slope aspect, irrigation, and leaf-pulling are three different vineyard practices; merging them into one theory overreaches.",
        credit: 0,
      },
      {
        text: "All three seem to improve the grapes somehow.",
        credit: 0.3,
      },
      {
        text: "They assemble into one sunlight-and-water model of ripening: sugar and color track light reaching the fruit while yield tracks water reaching the roots, so aspect and leaf-pull act on the light channel and drip acts on the water channel; the frame predicts leaf-pull should help shaded west rows most, that drip should help sweetness little on already-moist clay, and that an east row with a leaf-pull and adequate water should be the best block overall — and it strains if a leaf-pulled west row never matches an untouched east row.",
        credit: 1.0,
      },
      {
        text: "The three practices all help the harvest; we could apply them all and taste the result.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your two-channel (light and water) model from the rival 'each practice just generally helps,' and say what result would refute your model.",
      modelAnswer:
        "Cheapest test: do a leaf-pull on shaded west rows and on already-sunny east rows and compare the color gain — my model predicts the light-starved west rows should improve far more. It is refuted if leaf-pulling helps east and west rows equally, which would mean the practices aren't sorting cleanly into a light channel versus a water channel.",
      yieldAnchors: [
        "East-facing rows ripen sweeter",
        "Drip irrigation raised yield on sandy blocks",
        "A late-season leaf-pull improved color",
      ],
      riskAnchors: [
        "Leaf-pull helps shaded west rows most",
        "Drip adds little sweetness on already-moist clay",
        "An east row with leaf-pull and water is the best block",
      ],
      defeatedBy: [
        "Each practice just generally helps with no channel structure",
        "Leaf-pulling helps east and west rows equally",
      ],
    },
    correctAnswer:
      "They assemble into one sunlight-and-water model of ripening: sugar and color track light reaching the fruit while yield tracks water reaching the roots, so aspect and leaf-pull act on the light channel and drip acts on the water channel; the frame predicts leaf-pull should help shaded west rows most, that drip should help sweetness little on already-moist clay, and that an east row with a leaf-pull and adequate water should be the best block overall — and it strains if a leaf-pulled west row never matches an untouched east row.",
    explanation:
      "Full credit organizes the three vetted practices into two clean channels with predictions about where each acts and a refuting test; calling the merge an overreach is the zero dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An e-commerce team has confirmed that free returns raised conversion, that detailed size charts cut returns, and that customer photo reviews both raised conversion and cut returns. Which conclusion best assembles these into one standing model?",
    mcOptions: [
      {
        text: "Free returns, size charts, and photo reviews are three separate levers measured at different times; they don't form one model.",
        credit: 0,
      },
      {
        text: "They cohere into one uncertainty model: buyers hesitate when unsure a product will fit, so conversion rises and returns fall as fit-uncertainty drops — size charts and photo reviews reduce it before purchase, while free returns just remove the penalty for guessing wrong; the frame predicts photo reviews should beat free returns on the returns metric because they prevent bad orders rather than absorb them, that size charts help most in fit-sensitive categories like shoes, and that free returns alone should raise conversion but barely move returns — and it strains if free returns turn out to cut returns as much as size charts do.",
        credit: 1.0,
      },
      {
        text: "All three seem to help the store sell more and take back less.",
        credit: 0.3,
      },
      {
        text: "The three levers all improve the funnel; we could use all of them and watch conversion and returns.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your fit-uncertainty model from the rival 'all three just generally improve the funnel,' and say what result would refute your model.",
      modelAnswer:
        "Cheapest test: compare each lever's effect on returns specifically — my model predicts the pre-purchase levers (size charts, photo reviews) should cut returns far more than free returns, which only absorbs bad guesses. It is refuted if free returns cut returns as much as the informational levers, which would break the distinction between preventing and absorbing uncertainty.",
      yieldAnchors: [
        "Free returns raised conversion",
        "Detailed size charts cut returns",
        "Photo reviews raised conversion and cut returns",
      ],
      riskAnchors: [
        "Photo reviews beat free returns on the returns metric",
        "Size charts help most in fit-sensitive categories",
        "Free returns raise conversion but barely move returns",
      ],
      defeatedBy: [
        "All three just generally improve the funnel",
        "Free returns cut returns as much as size charts do",
      ],
    },
    correctAnswer:
      "They cohere into one uncertainty model: buyers hesitate when unsure a product will fit, so conversion rises and returns fall as fit-uncertainty drops — size charts and photo reviews reduce it before purchase, while free returns just remove the penalty for guessing wrong; the frame predicts photo reviews should beat free returns on the returns metric because they prevent bad orders rather than absorb them, that size charts help most in fit-sensitive categories like shoes, and that free returns alone should raise conversion but barely move returns — and it strains if free returns turn out to cut returns as much as size charts do.",
    explanation:
      "Full credit fuses the three confirmed levers under one fit-uncertainty mechanism that separates preventing from absorbing uncertainty and predicts divergent metric effects; treating them as separate levers is the dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A brewery has verified that fermenting at a steady temperature gives cleaner flavor, that pitching more yeast shortens lag time, and that oxygenating the wort before pitching improves attenuation. Which conclusion best assembles these into one standing model?",
    mcOptions: [
      {
        text: "Temperature, yeast quantity, and oxygenation are three independent brewing variables; there's no unifying account.",
        credit: 0,
      },
      {
        text: "All three seem to make better beer.",
        credit: 0.3,
      },
      {
        text: "They unify under one healthy-yeast model: clean, complete fermentation depends on a yeast population that is large enough, well-fed with oxygen, and not stressed by temperature swings, so each practice removes a different stressor on the same colony; the frame predicts a batch doing all three should ferment cleanest and most completely, that under-oxygenated wort should stall even with plenty of yeast, and that a temperature spike should add off-flavors regardless of pitch rate — and it strains if a stressed, low-oxygen batch still attenuates and tastes clean.",
        credit: 1.0,
      },
      {
        text: "The three practices all help fermentation; we could do all of them and taste the batch.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your single healthy-yeast model from the rival 'three independent variables,' and say what result would refute your model.",
      modelAnswer:
        "Cheapest test: under-oxygenate one batch while giving it ample yeast and a steady temperature — my model predicts it should still stall on attenuation because the same colony is starved, not because of an unrelated cause. It is refuted if an under-oxygenated batch attenuates fully whenever yeast and temperature are right, which would mean oxygen acts independently rather than on the shared yeast-health channel.",
      yieldAnchors: [
        "Steady fermentation temperature gives cleaner flavor",
        "More yeast shortens lag time",
        "Oxygenating wort improves attenuation",
      ],
      riskAnchors: [
        "A batch doing all three ferments cleanest and most completely",
        "Under-oxygenated wort stalls even with plenty of yeast",
        "A temperature spike adds off-flavors regardless of pitch rate",
      ],
      defeatedBy: [
        "The three are independent variables with no shared channel",
        "A stressed, low-oxygen batch attenuates and tastes clean anyway",
      ],
    },
    correctAnswer:
      "They unify under one healthy-yeast model: clean, complete fermentation depends on a yeast population that is large enough, well-fed with oxygen, and not stressed by temperature swings, so each practice removes a different stressor on the same colony; the frame predicts a batch doing all three should ferment cleanest and most completely, that under-oxygenated wort should stall even with plenty of yeast, and that a temperature spike should add off-flavors regardless of pitch rate — and it strains if a stressed, low-oxygen batch still attenuates and tastes clean.",
    explanation:
      "Full credit assembles the three vetted practices as stressors on one shared yeast colony and predicts how each failure shows up; calling them independent variables with no unifying account is the dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A call center has confirmed that shorter hold times raise satisfaction, that agents who can resolve issues without a transfer raise satisfaction, and that a callback option (instead of holding) raises satisfaction. Which conclusion best assembles these into one standing model?",
    mcOptions: [
      {
        text: "Hold time, transfer rate, and callbacks are three separate satisfaction drivers; combining them invents a pattern.",
        credit: 0,
      },
      {
        text: "They cohere into one wasted-effort model: callers are satisfied to the degree their problem is solved without their time being squandered, so each finding reflects either less waiting (hold, callback) or fewer hand-offs (no transfer); the frame predicts first-contact resolution should matter most because it removes the largest chunk of wasted effort, that the callback option should help most on long-wait queues, and that a fast pickup that still ends in a transfer should leave callers unhappy — and it strains if quick-but-transferred calls score as well as slow-but-resolved ones.",
        credit: 1.0,
      },
      {
        text: "All three seem to make callers happier.",
        credit: 0.3,
      },
      {
        text: "The three changes all lift satisfaction; we could implement them all and watch the scores.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your wasted-effort model from the rival 'three independent satisfaction drivers,' and say what result would refute your model.",
      modelAnswer:
        "Cheapest test: compare calls that were answered fast but transferred against calls that waited but resolved on first contact — my model predicts the resolved-but-slow calls should score higher because wasted effort, not raw speed, drives satisfaction. It is refuted if the fast-but-transferred calls score just as high, which would mean speed matters on its own apart from whether the problem actually got solved.",
      yieldAnchors: [
        "Shorter hold times raise satisfaction",
        "Resolving without a transfer raises satisfaction",
        "A callback option raises satisfaction",
      ],
      riskAnchors: [
        "First-contact resolution matters most",
        "The callback option helps most on long-wait queues",
        "A fast pickup that ends in a transfer leaves callers unhappy",
      ],
      defeatedBy: [
        "The three are independent satisfaction drivers",
        "Fast-but-transferred calls score as high as slow-but-resolved ones",
      ],
    },
    correctAnswer:
      "They cohere into one wasted-effort model: callers are satisfied to the degree their problem is solved without their time being squandered, so each finding reflects either less waiting (hold, callback) or fewer hand-offs (no transfer); the frame predicts first-contact resolution should matter most because it removes the largest chunk of wasted effort, that the callback option should help most on long-wait queues, and that a fast pickup that still ends in a transfer should leave callers unhappy — and it strains if quick-but-transferred calls score as well as slow-but-resolved ones.",
    explanation:
      "Full credit unifies the three vetted drivers under one wasted-effort dimension, ranks them, and pairs a discriminating test with its refutation; calling the unification an invented pattern is the dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A wildlife refuge has verified that a new culvert let salmon reach upstream spawning beds, that osprey nests increased near those beds, and that streamside soil nitrogen rose after the first big salmon run. Which conclusion best assembles these into one standing model?",
    mcOptions: [
      {
        text: "Fish passage, bird nesting, and soil chemistry are three different measurements; there's no single chain joining them.",
        credit: 0,
      },
      {
        text: "All three seem like signs of a recovering stream.",
        credit: 0.3,
      },
      {
        text: "They form one salmon-subsidy chain: the culvert restores spawning runs, the returning fish feed ospreys and, as carcasses decay, fertilize the streamside soil with ocean-derived nitrogen; the frame predicts osprey gains and nitrogen rise should both track run size year to year, that the nitrogen signature should be marine in origin, and that a year with a failed run should see both effects fade — and it strains if soil nitrogen rose just as much in stretches the salmon never reached.",
        credit: 1.0,
      },
      {
        text: "The changes seem connected to the salmon returning; we could keep monitoring the refuge.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your salmon-subsidy chain from the rival 'three separate signs of recovery,' and say what result would refute your model.",
      modelAnswer:
        "Cheapest test: chemically fingerprint the streamside soil nitrogen — my model predicts a marine isotopic signature carried inland by the salmon carcasses. It is refuted if the added nitrogen is terrestrial in origin or rose equally in salmon-free stretches, which would sever the link between the fish run and the soil enrichment.",
      yieldAnchors: [
        "A new culvert let salmon reach upstream spawning beds",
        "Osprey nests increased near those beds",
        "Streamside soil nitrogen rose after the first big run",
      ],
      riskAnchors: [
        "Osprey gains and nitrogen rise track run size year to year",
        "The added nitrogen carries a marine isotopic signature",
        "A failed-run year sees both effects fade",
      ],
      defeatedBy: [
        "The three are separate, unlinked signs of recovery",
        "Soil nitrogen rose equally where salmon never reached",
      ],
    },
    correctAnswer:
      "They form one salmon-subsidy chain: the culvert restores spawning runs, the returning fish feed ospreys and, as carcasses decay, fertilize the streamside soil with ocean-derived nitrogen; the frame predicts osprey gains and nitrogen rise should both track run size year to year, that the nitrogen signature should be marine in origin, and that a year with a failed run should see both effects fade — and it strains if soil nitrogen rose just as much in stretches the salmon never reached.",
    explanation:
      "Full credit chains the three vetted measurements through one salmon-subsidy mechanism and offers an isotopic test that would refute it; denying any joining chain is the zero dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A B2B marketing team has confirmed that webinar attendees convert better than ad clickers, that prospects who read three or more blog posts convert better, and that those who talk to sales after a free trial convert best. Which conclusion best assembles these into one standing model?",
    mcOptions: [
      {
        text: "Webinars, blog reading, and sales calls are three separate channels owned by three teams; unifying them isn't justified.",
        credit: 0,
      },
      {
        text: "They assemble into one earned-confidence model: a prospect converts as their confidence that the product fits their problem grows, and each touch adds confidence in proportion to its depth — a 30-second ad adds little, a webinar more, a hands-on trial plus sales call the most; the frame predicts conversion should rise with cumulative touch depth rather than touch count, that a single deep touch (trial) should beat several shallow ones, and that a prospect who only ever clicks ads should convert worst — and it strains if many shallow ad clicks convert as well as one deep trial.",
        credit: 1.0,
      },
      {
        text: "All three seem to be about warmer leads converting.",
        credit: 0.3,
      },
      {
        text: "The three touchpoints all help conversion; we could push all of them and track close rates.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your earned-confidence (touch-depth) model from the rival 'more touches of any kind convert better,' and say what result would refute your model.",
      modelAnswer:
        "Cheapest test: compare prospects with one deep touch (a free trial plus sales call) against prospects with many shallow touches (repeated ad clicks) — my model predicts the single deep touch should convert better despite fewer interactions. It is refuted if many shallow touches convert as well as one deep touch, which would mean raw touch count, not depth, drives conversion.",
      yieldAnchors: [
        "Webinar attendees convert better than ad clickers",
        "Reading three or more blog posts predicts conversion",
        "Talking to sales after a free trial converts best",
      ],
      riskAnchors: [
        "Conversion rises with cumulative touch depth, not count",
        "A single deep touch beats several shallow ones",
        "Ad-only prospects convert worst",
      ],
      defeatedBy: [
        "More touches of any kind convert better",
        "Many shallow ad clicks convert as well as one deep trial",
      ],
    },
    correctAnswer:
      "They assemble into one earned-confidence model: a prospect converts as their confidence that the product fits their problem grows, and each touch adds confidence in proportion to its depth — a 30-second ad adds little, a webinar more, a hands-on trial plus sales call the most; the frame predicts conversion should rise with cumulative touch depth rather than touch count, that a single deep touch (trial) should beat several shallow ones, and that a prospect who only ever clicks ads should convert worst — and it strains if many shallow ad clicks convert as well as one deep trial.",
    explanation:
      "Full credit fuses the three vetted channels under one touch-depth mechanism that predicts depth beats count and pairs it with a refuting test; treating the channels as un-unifiable is the dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A community garden has verified that raised beds drain better and warm earlier, that a compost program raised yields, and that beds nearest the water spigot are the most productive. Which conclusion best assembles these into one standing model?",
    mcOptions: [
      {
        text: "Drainage, compost, and water access are three different garden factors; folding them into one explanation overreaches.",
        credit: 0,
      },
      {
        text: "All three seem to make the garden grow better.",
        credit: 0.3,
      },
      {
        text: "They integrate under one root-environment model: yield tracks how favorable the soil is for roots — warm and drained (raised beds), fed (compost), and watered (spigot proximity) — so each finding improves a different limiting input to the same roots; the frame predicts the best beds should be raised, composted, and near water, that compost should help parched far beds least until they're watered, and that a cold, soggy bed should underperform even when composted — and it strains if a low, un-composted bed by the spigot outproduces a raised, composted one.",
        credit: 1.0,
      },
      {
        text: "The three factors all help yields; we could improve all of them and watch the harvest.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your single root-environment model from the rival 'three separate garden factors,' and say what result would refute your model.",
      modelAnswer:
        "Cheapest test: add compost to a dry, far bed and to a well-watered bed and compare the yield gain — my model predicts the parched bed should gain little until it's also watered, because the inputs feed one limited root system. It is refuted if compost lifts dry and watered beds equally, which would mean the factors act independently rather than as inputs to a shared root environment.",
      yieldAnchors: [
        "Raised beds drain better and warm earlier",
        "A compost program raised yields",
        "Beds nearest the spigot are most productive",
      ],
      riskAnchors: [
        "The best beds are raised, composted, and near water",
        "Compost helps parched far beds least until watered",
        "A cold, soggy bed underperforms even when composted",
      ],
      defeatedBy: [
        "The three are separate factors with no shared root system",
        "Compost lifts dry and watered beds equally",
      ],
    },
    correctAnswer:
      "They integrate under one root-environment model: yield tracks how favorable the soil is for roots — warm and drained (raised beds), fed (compost), and watered (spigot proximity) — so each finding improves a different limiting input to the same roots; the frame predicts the best beds should be raised, composted, and near water, that compost should help parched far beds least until they're watered, and that a cold, soggy bed should underperform even when composted — and it strains if a low, un-composted bed by the spigot outproduces a raised, composted one.",
    explanation:
      "Full credit assembles the three vetted factors as inputs to one root environment, predicts an interaction (compost gated by water), and names a refuting test; calling the merge an overreach is the dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An airline has separately confirmed three things: gate agents who pre-assign overhead bin space speed up boarding; boarding from the back of the plane forward speeds up boarding; and charging for checked bags slows boarding by flooding the cabin with carry-ons. Which conclusion best assembles these into one standing model?",
    mcOptions: [
      {
        text: "Bin assignment, boarding order, and bag fees are three separate operational facts; tying them to one cause reads a pattern into them.",
        credit: 0,
      },
      {
        text: "They cohere into one carry-on-congestion model: boarding time is governed by how long passengers spend competing for and stowing bags in the aisle, so every finding traces back to bin contention — pre-assignment removes the search, back-to-front spreads the stowing over the cabin, and bag fees worsen it by adding carry-ons; the frame predicts the three should compound, that bag fees should hurt most on full flights where bins are already scarce, and that on a half-empty flight with ample bins none of the three should matter much — and it strains if boarding stays slow even on a lightly loaded flight with assigned bins.",
        credit: 1.0,
      },
      {
        text: "All three seem to be about boarding the plane faster or slower.",
        credit: 0.3,
      },
      {
        text: "The three factors all affect boarding time; we could change all of them and watch the clock.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your carry-on-congestion model from the rival 'three independent boarding factors,' and say what result would refute your model.",
      modelAnswer:
        "Cheapest test: compare boarding times on full flights versus half-empty ones with plenty of open bins — my model predicts all three factors should barely matter when bin space is abundant, because contention is what they all act on. It is refuted if bag fees and boarding order slow boarding just as much on a half-empty plane with open bins, which would mean they work through something other than bin congestion.",
      yieldAnchors: [
        "Pre-assigning overhead bin space speeds up boarding",
        "Back-to-front boarding speeds up boarding",
        "Checked-bag fees slow boarding by adding carry-ons",
      ],
      riskAnchors: [
        "The three factors compound on full flights",
        "Bag fees hurt most when bins are already scarce",
        "On a half-empty flight with ample bins, none matters much",
      ],
      defeatedBy: [
        "The three are independent boarding factors with no shared cause",
        "Boarding stays slow even on a lightly loaded flight with assigned bins",
      ],
    },
    correctAnswer:
      "They cohere into one carry-on-congestion model: boarding time is governed by how long passengers spend competing for and stowing bags in the aisle, so every finding traces back to bin contention — pre-assignment removes the search, back-to-front spreads the stowing over the cabin, and bag fees worsen it by adding carry-ons; the frame predicts the three should compound, that bag fees should hurt most on full flights where bins are already scarce, and that on a half-empty flight with ample bins none of the three should matter much — and it strains if boarding stays slow even on a lightly loaded flight with assigned bins.",
    explanation:
      "Full credit unifies the three vetted findings under one bin-contention mechanism, predicts they should compound and fade together when bins are abundant, and pairs that with a refuting test; calling them independent facts is the dodge.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A regional grocery chain has, over a year, separately confirmed three things: stores that moved fresh produce to the entrance saw higher overall basket sizes; stores that added a staffed cheese-and-deli counter saw more repeat visits; and stores that switched to warmer lighting saw shoppers linger longer. Each was tested in isolation and held up. In one paragraph, propose the strongest single standing model that assembles these three vetted findings into one coherent picture, and describe how you would test the assembled model.",
    writtenRubric: {
      modelAnswer:
        "The strongest synthesis is that all three findings are facets of one 'market-feel' model: shoppers spend more and return more when a store feels like a fresh, human food market rather than a warehouse, and produce-at-entry, a staffed counter, and warm lighting each push the same dimension — sensory freshness, human service, and unhurried comfort. This frame is strong because it makes joint predictions no single finding makes alone: a store with all three should beat the sum of the individual lifts because they reinforce one impression; the effects should be largest in neighborhoods that currently shop elsewhere for 'real food'; and a store that adopts warm lighting but keeps produce hidden and self-checkout-only should gain least, since the cues conflict. I would test it by converting a few stores to the full package and checking for super-additive gains against single-change stores, by segmenting the lift by how 'warehouse-like' each store felt at baseline, and by deliberately building one mismatched store (warm lights, no fresh cues) to confirm the model strains exactly where its dimensions disagree — and I would watch for the strain case where a bright, counter-less store still posts the same numbers, which would break the unifying account.",
      yieldAnchors: [
        "Produce at the entrance raised basket sizes",
        "A staffed cheese-and-deli counter raised repeat visits",
        "Warmer lighting made shoppers linger longer",
      ],
      riskAnchors: [
        "A store with all three beats the sum of the individual lifts",
        "Gains are largest in neighborhoods that shop elsewhere for fresh food",
        "A mismatched store (warm lights, hidden produce, self-checkout) gains least",
      ],
      defeatedBy: [
        "The three findings are unrelated and should never be combined",
        "Any one change alone fully explains the others' effects",
        "A bright, counter-less store posts the same numbers anyway",
      ],
    },
    correctAnswer:
      "The strongest synthesis is that all three findings are facets of one 'market-feel' model: shoppers spend more and return more when a store feels like a fresh, human food market rather than a warehouse, and produce-at-entry, a staffed counter, and warm lighting each push the same dimension — sensory freshness, human service, and unhurried comfort. This frame is strong because it makes joint predictions no single finding makes alone: a store with all three should beat the sum of the individual lifts because they reinforce one impression; the effects should be largest in neighborhoods that currently shop elsewhere for 'real food'; and a store that adopts warm lighting but keeps produce hidden and self-checkout-only should gain least, since the cues conflict. I would test it by converting a few stores to the full package and checking for super-additive gains against single-change stores, by segmenting the lift by how 'warehouse-like' each store felt at baseline, and by deliberately building one mismatched store (warm lights, no fresh cues) to confirm the model strains exactly where its dimensions disagree — and I would watch for the strain case where a bright, counter-less store still posts the same numbers, which would break the unifying account.",
    explanation:
      "Under CCR, refusing to integrate ('keep the three findings separate') earns near-zero and a vague 'they're all connected' scores low; top credit goes to the synthesis that unifies the vetted findings under one mechanism, predicts a super-additive joint effect, and names the strain case that would break it.",
  },
  {
    itemType: "written",
    prompt:
      "A hospital quality team has, in separate audits, verified three findings: a bedside-handoff checklist cut medication errors; a policy of one nurse per patient through a shift cut errors; and color-coded, single-dose packaging cut errors. Each held up on its own. In one paragraph, propose the strongest single standing model that assembles these vetted findings into one coherent picture of why errors fall, and describe how you would test the assembled model.",
    writtenRubric: {
      modelAnswer:
        "The strongest synthesis is a single 'information-handoff integrity' model: medication errors arise when knowledge about a patient's drugs gets lost or garbled as it passes between people and steps, and all three measures protect that same information path — the checklist preserves it across shift changes, one-nurse-per-patient minimizes the number of hand-offs, and single-dose color coding makes the information legible at the point of administration. The frame is strong because it predicts things no single audit does: the three should overlap rather than fully add, since they guard the same path, so a unit with all three should not cut errors three times as much; the checklist should help most precisely on units with many hand-offs and least on one-nurse units; and color coding should help most for look-alike drugs where information is hardest to read. I would test it by measuring whether the combined effect is sub-additive as the model predicts, by checking that the checklist's benefit shrinks where continuity of care is already high, and by confirming that the packaging benefit concentrates on look-alike, sound-alike medications — and I would treat the model as strained if errors persisted on a unit that had all three but had simply hired inexperienced staff, since that points to a competence factor outside the information path.",
      yieldAnchors: [
        "A bedside-handoff checklist cut medication errors",
        "One nurse per patient per shift cut errors",
        "Color-coded single-dose packaging cut errors",
      ],
      riskAnchors: [
        "The three measures overlap, so combined gains are sub-additive",
        "The checklist helps most on high-hand-off units",
        "Color coding helps most for look-alike, sound-alike drugs",
      ],
      defeatedBy: [
        "The three findings are unrelated and shouldn't be unified",
        "The combined effect is simply the three added together",
        "Errors persist with all three because of an unrelated staffing factor",
      ],
    },
    correctAnswer:
      "The strongest synthesis is a single 'information-handoff integrity' model: medication errors arise when knowledge about a patient's drugs gets lost or garbled as it passes between people and steps, and all three measures protect that same information path — the checklist preserves it across shift changes, one-nurse-per-patient minimizes the number of hand-offs, and single-dose color coding makes the information legible at the point of administration. The frame is strong because it predicts things no single audit does: the three should overlap rather than fully add, since they guard the same path, so a unit with all three should not cut errors three times as much; the checklist should help most precisely on units with many hand-offs and least on one-nurse units; and color coding should help most for look-alike drugs where information is hardest to read. I would test it by measuring whether the combined effect is sub-additive as the model predicts, by checking that the checklist's benefit shrinks where continuity of care is already high, and by confirming that the packaging benefit concentrates on look-alike, sound-alike medications — and I would treat the model as strained if errors persisted on a unit that had all three but had simply hired inexperienced staff, since that points to a competence factor outside the information path.",
    explanation:
      "The cautious 'these are three separate audit results, leave them alone' earns near-zero; top credit goes to the synthesis that ties the vetted findings to one information-path mechanism and even predicts a counter-intuitive sub-additivity, plus names a strain case.",
  },
  {
    itemType: "written",
    prompt:
      "A mid-size software company has separately confirmed three things about its release quality: teams that write tests before code ship fewer bugs; teams that keep pull requests small merge with fewer defects; and teams that deploy daily have shorter outage times. Each finding was validated independently. In one paragraph, propose the strongest single standing model that assembles these vetted findings into one coherent picture, and describe how you would test the assembled model.",
    writtenRubric: {
      modelAnswer:
        "The strongest synthesis is a single 'small-feedback-loop' model: quality rises as the gap between making a change and learning whether it was wrong shrinks, and all three practices tighten that same loop — tests-first catches a defect within minutes, small pull requests keep the change small enough to reason about, and daily deploys surface failures in hours rather than weeks. The frame is strong because it makes joint predictions: the practices should reinforce each other, so a team doing all three should localize and fix problems fastest of all; tests-first should pay off most for teams that still ship large pull requests, where the change is hardest to debug; and daily deploys should reduce outage time chiefly because each release is small enough to revert cleanly, meaning daily deploys of huge batches should help far less. I would test it by checking whether time-to-detect and time-to-fix, not just bug counts, drop across all three practices, by measuring whether daily-deploy benefits vanish when batch size is large, and by confirming that teams combining the three have the shortest defect-to-resolution loop — and I would treat the model as strained if a team with tiny, daily, test-first changes still suffered long outages, which would point to a brittle architecture the loop model doesn't cover.",
      yieldAnchors: [
        "Tests-before-code teams ship fewer bugs",
        "Small pull requests merge with fewer defects",
        "Daily-deploying teams have shorter outage times",
      ],
      riskAnchors: [
        "Teams doing all three localize and fix problems fastest",
        "Tests-first pays off most where pull requests are large",
        "Daily deploys help little when batch size is large",
      ],
      defeatedBy: [
        "The three practices are unrelated and shouldn't be combined",
        "Bug counts alone, with no role for feedback speed, explain everything",
        "A tiny-batch, test-first team still suffers long outages from brittle architecture",
      ],
    },
    correctAnswer:
      "The strongest synthesis is a single 'small-feedback-loop' model: quality rises as the gap between making a change and learning whether it was wrong shrinks, and all three practices tighten that same loop — tests-first catches a defect within minutes, small pull requests keep the change small enough to reason about, and daily deploys surface failures in hours rather than weeks. The frame is strong because it makes joint predictions: the practices should reinforce each other, so a team doing all three should localize and fix problems fastest of all; tests-first should pay off most for teams that still ship large pull requests, where the change is hardest to debug; and daily deploys should reduce outage time chiefly because each release is small enough to revert cleanly, meaning daily deploys of huge batches should help far less. I would test it by checking whether time-to-detect and time-to-fix, not just bug counts, drop across all three practices, by measuring whether daily-deploy benefits vanish when batch size is large, and by confirming that teams combining the three have the shortest defect-to-resolution loop — and I would treat the model as strained if a team with tiny, daily, test-first changes still suffered long outages, which would point to a brittle architecture the loop model doesn't cover.",
    explanation:
      "CCR gives near-zero to 'three separate practices, don't unify them' and low marks to a vague 'they all improve quality'; top credit goes to the feedback-loop synthesis that ties the vetted findings to one mechanism, predicts interactions, and names a strain case.",
  },
  {
    itemType: "written",
    prompt:
      "A youth soccer academy has, in separate seasons, verified three findings: players who do small-sided (3-on-3) drills improve their passing fastest; players who watch film of their own games improve their positioning fastest; and players who play multiple sports have fewer overuse injuries. Each held up on its own. In one paragraph, propose the strongest single standing model that assembles these vetted findings into one coherent development picture, and describe how you would test the assembled model.",
    writtenRubric: {
      modelAnswer:
        "The strongest synthesis is a single 'varied, high-touch repetition' model of skill development: players improve fastest and stay healthiest when they get many meaningful, varied repetitions rather than few monotonous ones, and the three findings are facets of that — small-sided games multiply touches and decisions per minute, film turns each game into extra reflective repetitions of reading the field, and multiple sports vary the physical load so no single tissue is over-repeated. The frame is strong because it predicts more than any one finding alone: the development gains should track touches-and-decisions per session rather than total hours; film should help positioning most for players who already get many live reps to interpret; and the injury benefit should come specifically from load variety, so two sports with identical movement patterns should protect less than two contrasting ones. I would test it by counting touches and decisions per drill and correlating them with improvement, by checking whether film's benefit is largest for high-volume players, and by comparing injury rates across athletes whose second sport is biomechanically similar versus different — and I would treat the model as strained if a player getting few but very high-quality coached touches improved just as fast, which would put quality above quantity in a way the repetition model understates.",
      yieldAnchors: [
        "Small-sided drills improve passing fastest",
        "Watching one's own game film improves positioning fastest",
        "Multi-sport players have fewer overuse injuries",
      ],
      riskAnchors: [
        "Gains track touches-and-decisions per session, not total hours",
        "Film helps positioning most for high-volume players",
        "Injury protection comes from biomechanically contrasting second sports",
      ],
      defeatedBy: [
        "The three findings are unrelated and shouldn't be combined",
        "Total practice hours alone explain everything",
        "Few high-quality coached touches improve players just as fast",
      ],
    },
    correctAnswer:
      "The strongest synthesis is a single 'varied, high-touch repetition' model of skill development: players improve fastest and stay healthiest when they get many meaningful, varied repetitions rather than few monotonous ones, and the three findings are facets of that — small-sided games multiply touches and decisions per minute, film turns each game into extra reflective repetitions of reading the field, and multiple sports vary the physical load so no single tissue is over-repeated. The frame is strong because it predicts more than any one finding alone: the development gains should track touches-and-decisions per session rather than total hours; film should help positioning most for players who already get many live reps to interpret; and the injury benefit should come specifically from load variety, so two sports with identical movement patterns should protect less than two contrasting ones. I would test it by counting touches and decisions per drill and correlating them with improvement, by checking whether film's benefit is largest for high-volume players, and by comparing injury rates across athletes whose second sport is biomechanically similar versus different — and I would treat the model as strained if a player getting few but very high-quality coached touches improved just as fast, which would put quality above quantity in a way the repetition model understates.",
    explanation:
      "The dodge 'these are three unrelated training findings' earns near-zero; top credit goes to the synthesis that unifies the vetted findings under a varied-repetition mechanism, predicts cross-finding interactions, and names the strain case where quality could outweigh quantity.",
  },
  {
    itemType: "written",
    prompt:
      "A city has, through separate pilot programs, verified three findings: protected bike lanes raised cycling rates; a bike-share system raised cycling rates; and secure bike parking at transit stations raised cycling rates. Each pilot succeeded on its own. In one paragraph, propose the strongest single standing model that assembles these vetted findings into one coherent picture of what drives cycling, and describe how you would test the assembled model.",
    writtenRubric: {
      modelAnswer:
        "The strongest synthesis is a single 'remove the binding barrier' model: people cycle when the largest remaining obstacle for them is removed, and the three programs each dissolve a different binding barrier — protected lanes remove fear of traffic, bike-share removes not owning a bike, and secure parking removes fear of theft and the last-mile gap to transit. The frame is strong because it predicts more than any one pilot: the gains should not simply add, because each program only helps the subset for whom that barrier was binding, so a neighborhood already covered by one program should see little extra from a second that solves the same barrier; protected lanes should move the most riders in areas where surveys cite traffic fear; and bike-share should help most where bike ownership is low. I would test it by surveying non-cyclists for their single biggest barrier and checking that each program's local uptake tracks the prevalence of the matching barrier, by looking for diminishing returns when a second program addresses an already-solved barrier, and by confirming that combining programs that solve different barriers (lanes plus share) outperforms doubling down on one — and I would treat the model as strained if adding a redundant program in a saturated area still produced a large uptick, which the binding-barrier logic says it shouldn't.",
      yieldAnchors: [
        "Protected bike lanes raised cycling rates",
        "A bike-share system raised cycling rates",
        "Secure transit-station bike parking raised cycling rates",
      ],
      riskAnchors: [
        "Each program's uptake tracks the prevalence of its matching barrier",
        "Protected lanes move the most riders where traffic fear is cited",
        "Combining programs that solve different barriers beats doubling one",
      ],
      defeatedBy: [
        "The three findings are unrelated and shouldn't be combined",
        "The effects simply add regardless of which barrier was binding",
        "A redundant program in a saturated area still produces a large uptick",
      ],
    },
    correctAnswer:
      "The strongest synthesis is a single 'remove the binding barrier' model: people cycle when the largest remaining obstacle for them is removed, and the three programs each dissolve a different binding barrier — protected lanes remove fear of traffic, bike-share removes not owning a bike, and secure parking removes fear of theft and the last-mile gap to transit. The frame is strong because it predicts more than any one pilot: the gains should not simply add, because each program only helps the subset for whom that barrier was binding, so a neighborhood already covered by one program should see little extra from a second that solves the same barrier; protected lanes should move the most riders in areas where surveys cite traffic fear; and bike-share should help most where bike ownership is low. I would test it by surveying non-cyclists for their single biggest barrier and checking that each program's local uptake tracks the prevalence of the matching barrier, by looking for diminishing returns when a second program addresses an already-solved barrier, and by confirming that combining programs that solve different barriers (lanes plus share) outperforms doubling down on one — and I would treat the model as strained if adding a redundant program in a saturated area still produced a large uptick, which the binding-barrier logic says it shouldn't.",
    explanation:
      "Under CCR, 'three separate successful pilots, leave them be' earns near-zero; top credit goes to the binding-barrier synthesis that unifies the vetted findings, predicts barrier-matched and diminishing-return effects, and names the strain case that would refute it.",
  },
];

export const section: SectionContent = {
  slug: "constructive-synthesis",
  title: "The Constructive Synthesis",
  weekNumber: 4,
  blurb:
    "Once several models have each earned their keep, the final move is to assemble them into one coherent standing explanation — checking that they fit together, predict more jointly than separately, and noting honestly where they still strain.",
  lectureTitle:
    "4.8 The Constructive Synthesis: assembling vetted models into a standing explanatory frame",
  body: `# The Constructive Synthesis

You have spent the course learning to vet single models: to pose the question well, surface assumptions, run severe tests, weigh rivals, and update under fire. But knowledge does not arrive as a tidy list of separate verified facts. The final constructive move is **synthesis** — taking several individually-vetted models and assembling them into one coherent standing explanation that fits together and predicts more jointly than any piece does alone. Reflexive caution stops at the list: "here are three separate findings; who's to say how they relate?" That is the dodge. The constructive reasoner asks what single picture would make all three findings fall into place at once.

## Why a pile of facts is not an explanation

Three confirmed findings sitting side by side are inert. They tell you what happened three times; they don't tell you how the world works. A synthesis converts the pile into a *frame*: one mechanism, or one dimension, under which each separate finding becomes a facet of the same thing. The payoff is leverage — a good frame predicts things no single finding predicted, because it tells you how the parts interact. If "produce at the door," "a staffed counter," and "warm lighting" are all facets of "feeling like a fresh food market," then the frame predicts the three should reinforce each other, which no one finding could tell you.

## A real synthesis pays rent in joint predictions

The test of a synthesis is whether it earns its keep with **joint predictions** — claims that only follow once you've combined the pieces. Do the parts compound (super-additive), overlap (sub-additive), or chain in sequence? Does fixing one input gate the benefit of another? A synthesis that merely restates the findings under a fancy label is decorative. A synthesis that says "because these guard the same information path, the combined effect should be sub-additive, and the checklist should help most where hand-offs are many" has bought you new, checkable knowledge.

## Check the seams, and name where it strains

Honest synthesis means inspecting the joints. Do the vetted models actually fit, or does one quietly contradict another? The strong reasoner states plainly where the frame is load-bearing and where it still strains — the case the unified picture does not yet cover. Naming the strain is not weakness; it is what separates a standing explanation from a slogan. "This holds unless a bright, counter-less store posts the same numbers" tells your future self exactly what observation would crack the frame.

## Why refusing to integrate is the failure mode

"These are separate findings owned by separate teams; combining them isn't justified" feels rigorous, but it forfeits all the leverage. It leaves you unable to predict interactions, unable to spend effort where it compounds, unable to see when two programs are solving the same barrier and one is wasted. Refusing to synthesize is the zero-credit move precisely because the data are begging to be unified and you have declined the offer.

## Overreach still loses

The opposite error is forcing a synthesis the evidence won't bear — hammering three findings into one story when one of them actually points elsewhere, or claiming the parts compound when they plainly overlap. A synthesis that ignores an inconvenient finding to keep its tidiness is reckless, not bold. The winning frame is the richest one the *whole* set of vetted findings actually supports, stated with its joint predictions and its honest strain points.

## In the real world

A transit agency has separately confirmed that real-time signs, heated shelters, and added frequency each raise ridership. The dodge: "three different investments, no single theory." The synthesis: all three lower the *felt cost of waiting* — by making the wait shorter, feel shorter, or feel more comfortable. Notice the leverage that buys: frequency should beat the others because it cuts the real wait; signs and shelters should help most on infrequent lines where waits are long; and on a line that already runs every three minutes, signs should add little. One frame, three new predictions, and a clear strain case — that is what assembling vetted models into a standing explanation gives you.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
