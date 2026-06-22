import type { SectionContent, HomeworkItem } from "./types";

const mcq: HomeworkItem[] = [
  {
    itemType: "mc",
    prompt:
      "A shop owner finds the cash drawer comes up short on every one of one cashier's shifts and never on anyone else's. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Plenty of things cause drawer shortfalls, so the pattern doesn't really point anywhere.",
        credit: 0,
      },
      {
        text: "A shortfall on every one of that cashier's shifts and none on others is exactly what skimming predicts but would be a wild coincidence under random miscounting; test whether shortfalls vanish on days she's off, whether the missing amounts are suspiciously round, and whether a second register she never touches ever comes up short.",
        credit: 1.0,
      },
      {
        text: "Skimming probably explains it; we could watch her shifts more closely.",
        credit: 0.6,
      },
      {
        text: "That cashier seems connected to the missing cash somehow.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "A shortfall on every one of that cashier's shifts and none on others is exactly what skimming predicts but would be a wild coincidence under random miscounting; test whether shortfalls vanish on days she's off, whether the missing amounts are suspiciously round, and whether a second register she never touches ever comes up short.",
    explanation:
      "The perfect correlation with one cashier was far more probable under skimming than under honest miscounting, so likelihood favors it; 'plenty of things cause shortfalls' refuses to compare how expected the pattern was under each rival.",
  },
  {
    itemType: "mc",
    prompt:
      "A birdwatcher logs that a rare warbler shows up in her city park only in the two or three days right after a strong south wind, and never otherwise. Which lead is strongest?",
    mcOptions: [
      {
        text: "The warbler is a northbound migrant carried in on south winds — a sighting clustered right after south winds is just what wind-assisted migration predicts, whereas it would be an odd coincidence if the bird's arrival were independent of the weather; check whether other south-wind migrants appear on the same days, whether radar shows northbound movement those nights, and whether years with few south winds bring fewer sightings.",
        credit: 1.0,
      },
      {
        text: "South winds probably bring the warbler in; she could keep logging winds and sightings.",
        credit: 0.6,
      },
      {
        text: "The warbler seems to show up around windy spells.",
        credit: 0.3,
      },
      {
        text: "Bird movements depend on countless variables, so the wind link is just as likely chance.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The warbler is a northbound migrant carried in on south winds — a sighting clustered right after south winds is just what wind-assisted migration predicts, whereas it would be an odd coincidence if the bird's arrival were independent of the weather; check whether other south-wind migrants appear on the same days, whether radar shows northbound movement those nights, and whether years with few south winds bring fewer sightings.",
    explanation:
      "The sighting pattern was far more probable under wind-assisted migration than under chance, so likelihood favors it; calling the link 'just as likely chance' ignores that the tight clustering would be a remarkable coincidence otherwise.",
  },
  {
    itemType: "mc",
    prompt:
      "A web team sees that an app's checkout page crashes only for users on one particular browser version, while every other browser works fine. Which conclusion best follows?",
    mcOptions: [
      {
        text: "That browser version seems to have trouble with checkout.",
        credit: 0.3,
      },
      {
        text: "The crash is confined to one browser version because that build handles a specific API differently — crashes hitting only that version is exactly what a browser-specific incompatibility predicts, but would be a strange coincidence under random server overload; test whether forcing that version into a compatibility mode stops the crashes, whether the error logs name that API call, and whether upgrading the browser clears it.",
        credit: 1.0,
      },
      {
        text: "Crashes have so many causes that singling out the browser is unwarranted.",
        credit: 0,
      },
      {
        text: "The browser version is probably the culprit; we could ask those users to switch.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The crash is confined to one browser version because that build handles a specific API differently — crashes hitting only that version is exactly what a browser-specific incompatibility predicts, but would be a strange coincidence under random server overload; test whether forcing that version into a compatibility mode stops the crashes, whether the error logs name that API call, and whether upgrading the browser clears it.",
    explanation:
      "Crashes confined to a single browser build were expected under an incompatibility but surprising under random overload, so likelihood points hard at the browser; the 'so many causes' option refuses the comparison and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A pastry chef notices her cakes sink in the middle only on mornings the bakery next door runs its heavy dough mixer, whose rumble she can feel through the shared wall. Which lead is strongest?",
    mcOptions: [
      {
        text: "Cakes sink for many reasons, so the mixer connection can't be trusted.",
        credit: 0,
      },
      {
        text: "Vibration from the mixer is disturbing the cakes' rise — sinking that happens on exactly the mixer mornings is what a vibration cause predicts, while it would be a coincidence under random oven variation; test whether cakes baked on a vibration-damping mat survive mixer mornings, whether the sinking tracks the minutes the mixer runs, and whether a cake set far from the shared wall stays level.",
        credit: 1.0,
      },
      {
        text: "The mixer's vibration probably sinks the cakes; she could bake earlier than the neighbor.",
        credit: 0.6,
      },
      {
        text: "Something about the neighbor's mixing seems to ruin the cakes.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Vibration from the mixer is disturbing the cakes' rise — sinking that happens on exactly the mixer mornings is what a vibration cause predicts, while it would be a coincidence under random oven variation; test whether cakes baked on a vibration-damping mat survive mixer mornings, whether the sinking tracks the minutes the mixer runs, and whether a cake set far from the shared wall stays level.",
    explanation:
      "Sinking timed precisely to the mixer was expected under a vibration cause but a fluke under random oven variation, so likelihood favors vibration; 'cakes sink for many reasons' declines to weigh how expected the timing was under each story.",
  },
  {
    itemType: "mc",
    prompt:
      "A darts player notices his scores are consistently higher on nights the pub uses its old warm lighting than on nights it switched to bright white LEDs. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The warm light may cut glare on the board so he aims better — higher scores landing on exactly the warm-light nights is what a glare-reduction effect predicts, but would be an odd fluke if lighting were irrelevant; test whether dimming the LEDs restores his scores, whether other players show the same warm-light edge, and whether a matte board that kills glare erases the difference.",
        credit: 1.0,
      },
      {
        text: "He seems to throw better under the old lights.",
        credit: 0.3,
      },
      {
        text: "The lighting probably helps; he could ask the pub to keep the warm bulbs.",
        credit: 0.6,
      },
      {
        text: "Both lighting and pure chance fit his scores equally, so there's nothing to act on.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The warm light may cut glare on the board so he aims better — higher scores landing on exactly the warm-light nights is what a glare-reduction effect predicts, but would be an odd fluke if lighting were irrelevant; test whether dimming the LEDs restores his scores, whether other players show the same warm-light edge, and whether a matte board that kills glare erases the difference.",
    explanation:
      "Scores tracking the lighting were expected under a glare effect and a coincidence under chance, so likelihood discriminates between them; 'both fit equally' is the dodge that pretends a predicted pattern and a coincidence are a toss-up.",
  },
  {
    itemType: "mc",
    prompt:
      "A print shop finds paper jams spike only on the most humid days and almost never on dry days, across all its machines. Which lead is strongest?",
    mcOptions: [
      {
        text: "Humidity probably causes the jams; we could run a dehumidifier.",
        credit: 0.6,
      },
      {
        text: "Humidity is swelling the paper so sheets stick and misfeed — jams clustering on humid days across every machine is what a moisture effect predicts, whereas mechanical wear would scatter jams regardless of weather; test whether sealed, pre-dried paper jams less on humid days, whether jam rate tracks the hygrometer reading, and whether a dehumidified room flattens the pattern.",
        credit: 1.0,
      },
      {
        text: "Damp days seem to bring more jams.",
        credit: 0.3,
      },
      {
        text: "Jams come from so many sources that blaming humidity is premature.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Humidity is swelling the paper so sheets stick and misfeed — jams clustering on humid days across every machine is what a moisture effect predicts, whereas mechanical wear would scatter jams regardless of weather; test whether sealed, pre-dried paper jams less on humid days, whether jam rate tracks the hygrometer reading, and whether a dehumidified room flattens the pattern.",
    explanation:
      "Jams concentrated on humid days across all machines were expected under a moisture cause but unexpected under mechanical wear, so likelihood favors humidity; 'so many sources' refuses to ask which cause made the data more probable.",
  },
  {
    itemType: "mc",
    prompt:
      "A teacher notices that five essays share the exact same three unusual misspellings and an identical odd phrasing that also appear in one online study guide. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Those students copied from the guide — three identical rare misspellings plus the same odd phrasing is overwhelmingly expected if they copied, but astronomically unlikely to arise independently; check whether the essays share the guide's unique sentence order, whether the students' drafts show no earlier versions of those passages, and whether students not using the guide ever reproduce the errors.",
        credit: 1.0,
      },
      {
        text: "They probably used the guide; the teacher could ask them about their sources.",
        credit: 0.6,
      },
      {
        text: "The matching mistakes seem to tie the essays to that guide.",
        credit: 0.3,
      },
      {
        text: "Many students make spelling errors, so shared mistakes prove nothing.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Those students copied from the guide — three identical rare misspellings plus the same odd phrasing is overwhelmingly expected if they copied, but astronomically unlikely to arise independently; check whether the essays share the guide's unique sentence order, whether the students' drafts show no earlier versions of those passages, and whether students not using the guide ever reproduce the errors.",
    explanation:
      "Identical rare errors were near-certain under copying and vanishingly improbable under independent writing, so likelihood is decisive; 'many students make errors' ignores how improbable matching rare mistakes are by chance.",
  },
  {
    itemType: "mc",
    prompt:
      "A gardener finds that seedlings on the windowsill lean toward the glass every morning, while seedlings under a centered grow light stand straight. Which lead is strongest?",
    mcOptions: [
      {
        text: "Plants do unpredictable things, so the leaning isn't worth explaining.",
        credit: 0,
      },
      {
        text: "The windowsill plants seem to bend toward the window.",
        credit: 0.3,
      },
      {
        text: "The seedlings are growing toward the directional light from the window — leaning that appears only with a side light source and not under a centered lamp is exactly what phototropism predicts, while a random-growth story wouldn't single out the window side; test whether rotating the pots reverses the lean within days, whether shading the window straightens them, and whether a side-mounted lamp reproduces the bend indoors.",
        credit: 1.0,
      },
      {
        text: "Light direction probably causes the lean; she could move them under the lamp.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The seedlings are growing toward the directional light from the window — leaning that appears only with a side light source and not under a centered lamp is exactly what phototropism predicts, while a random-growth story wouldn't single out the window side; test whether rotating the pots reverses the lean within days, whether shading the window straightens them, and whether a side-mounted lamp reproduces the bend indoors.",
    explanation:
      "Leaning only toward a side light source was expected under phototropism but a coincidence under random growth, so likelihood favors phototropism; 'plants do unpredictable things' declines to compare how expected the directional lean was under each story.",
  },
  {
    itemType: "mc",
    prompt:
      "A clinic finds that patients who report a metallic taste are almost all taking one particular medication, and the taste fades within days of stopping it. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The drug is causing the metallic taste — the taste concentrating among that drug's users and vanishing when it's stopped is just what a drug side effect predicts, whereas an unrelated cause wouldn't track starting and stopping the pill; test whether re-starting the drug brings the taste back, whether dose size tracks taste intensity, and whether a chemically similar drug causes it too.",
        credit: 1.0,
      },
      {
        text: "The medication seems linked to the taste.",
        credit: 0.3,
      },
      {
        text: "The drug probably causes it; we could switch some patients to an alternative.",
        credit: 0.6,
      },
      {
        text: "Taste complaints are too subjective to pin on any one medication.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The drug is causing the metallic taste — the taste concentrating among that drug's users and vanishing when it's stopped is just what a drug side effect predicts, whereas an unrelated cause wouldn't track starting and stopping the pill; test whether re-starting the drug brings the taste back, whether dose size tracks taste intensity, and whether a chemically similar drug causes it too.",
    explanation:
      "Taste that appears with the drug and fades when it stops was expected under a side effect but improbable under an unrelated cause, so likelihood favors the drug; 'too subjective to pin down' refuses to weigh the on-off pattern.",
  },
  {
    itemType: "mc",
    prompt:
      "A musician's streaming numbers jump sharply only in the week after each time one specific podcast mentions her, and stay flat otherwise. Which lead is strongest?",
    mcOptions: [
      {
        text: "The podcast probably drives the jumps; she could try to get mentioned again.",
        credit: 0.6,
      },
      {
        text: "Her streams seem to rise after that show talks about her.",
        credit: 0.3,
      },
      {
        text: "The podcast's audience is discovering her music — spikes landing in exactly the weeks after a mention, and nowhere else, is what podcast-driven discovery predicts, while organic growth wouldn't sync to the show's schedule; test whether listener locations match the podcast's known audience, whether a mention on a different show produces a similar spike, and whether the new streams trace to the specific tracks the host named.",
        credit: 1.0,
      },
      {
        text: "Streaming is driven by so many forces that crediting the podcast is guesswork.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The podcast's audience is discovering her music — spikes landing in exactly the weeks after a mention, and nowhere else, is what podcast-driven discovery predicts, while organic growth wouldn't sync to the show's schedule; test whether listener locations match the podcast's known audience, whether a mention on a different show produces a similar spike, and whether the new streams trace to the specific tracks the host named.",
    explanation:
      "Spikes synced to the mentions were expected under podcast-driven discovery but a coincidence under organic growth, so likelihood favors the podcast; 'so many forces' refuses to ask which hypothesis made the timing expected.",
  },
  {
    itemType: "mc",
    prompt:
      "An accountant notices that a vendor's invoices are always for amounts just under the $5,000 threshold that would require a second manager's sign-off. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Someone is splitting charges to dodge the approval threshold — invoices clustering just below $5,000 far more than chance would put them there is exactly what threshold-evasion predicts, whereas honest billing would scatter amounts around and above the line; test whether the same job was split into multiple sub-$5,000 invoices, whether the amounts bunch tightly at $4,900–$4,999, and whether raising the threshold shifts the clustering to the new line.",
        credit: 1.0,
      },
      {
        text: "The amounts probably dodge the threshold; we could review that vendor's invoices.",
        credit: 0.6,
      },
      {
        text: "The invoice amounts seem suspiciously close to the limit.",
        credit: 0.3,
      },
      {
        text: "Invoice amounts vary for many reasons, so the clustering is just as likely innocent.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Someone is splitting charges to dodge the approval threshold — invoices clustering just below $5,000 far more than chance would put them there is exactly what threshold-evasion predicts, whereas honest billing would scatter amounts around and above the line; test whether the same job was split into multiple sub-$5,000 invoices, whether the amounts bunch tightly at $4,900–$4,999, and whether raising the threshold shifts the clustering to the new line.",
    explanation:
      "Amounts bunched just under the sign-off line were expected under evasion but improbable under honest billing, so likelihood favors evasion; calling the clustering 'just as likely innocent' ignores how unlikely that bunching is by chance.",
  },
  {
    itemType: "mc",
    prompt:
      "A photographer finds her photos are blurry only when shot below a certain shutter speed handheld, and always sharp on a tripod at any speed. Which lead is strongest?",
    mcOptions: [
      {
        text: "Blur has many causes, so the shutter-speed pattern can't be singled out.",
        credit: 0,
      },
      {
        text: "Hand shake during long exposures is the cause — blur appearing only on slow handheld shots and never on the tripod is exactly what motion blur from shake predicts, while a focus problem would blur tripod shots too; test whether image stabilization rescues slow handheld shots, whether the blur streaks in the direction of hand movement, and whether bracing against a wall sharpens them.",
        credit: 1.0,
      },
      {
        text: "Slow handheld shots seem to come out blurry.",
        credit: 0.3,
      },
      {
        text: "Hand shake probably blurs the slow shots; she could use a tripod more.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Hand shake during long exposures is the cause — blur appearing only on slow handheld shots and never on the tripod is exactly what motion blur from shake predicts, while a focus problem would blur tripod shots too; test whether image stabilization rescues slow handheld shots, whether the blur streaks in the direction of hand movement, and whether bracing against a wall sharpens them.",
    explanation:
      "Blur confined to slow handheld shots was expected under hand shake but unexpected under a focus fault, which would blur tripod shots too, so likelihood favors shake; 'blur has many causes' refuses the comparison.",
  },
  {
    itemType: "mc",
    prompt:
      "A beekeeper notices his hives gain weight fastest in the weeks a nearby field of clover is in bloom, and barely at all once it's mowed. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The hives seem to do better when the clover blooms.",
        credit: 0.3,
      },
      {
        text: "The clover probably feeds the bees; he could plant more of it.",
        credit: 0.6,
      },
      {
        text: "The bees are foraging the clover for nectar — rapid weight gain confined to the bloom and stopping at the mow is just what a clover-nectar source predicts, whereas a general 'good weather' story wouldn't end the moment the field is cut; test whether pollen samples from the hive are mostly clover, whether a hive moved away from the field gains less, and whether weight gain tracks the bloom's intensity.",
        credit: 1.0,
      },
      {
        text: "Hive weight rises and falls for too many reasons to credit the clover.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The bees are foraging the clover for nectar — rapid weight gain confined to the bloom and stopping at the mow is just what a clover-nectar source predicts, whereas a general 'good weather' story wouldn't end the moment the field is cut; test whether pollen samples from the hive are mostly clover, whether a hive moved away from the field gains less, and whether weight gain tracks the bloom's intensity.",
    explanation:
      "Weight gain that stops at the mow was expected under a clover-nectar source but a coincidence under generic good weather, so likelihood favors clover; 'too many reasons' refuses to weigh how expected the cutoff was under each story.",
  },
  {
    itemType: "mc",
    prompt:
      "An online seller finds that returns for 'item not as described' come almost entirely from one product photo shot under unusually warm studio lighting. Which lead is strongest?",
    mcOptions: [
      {
        text: "The warm lighting misrepresents the product's true color, so buyers feel misled — returns concentrating on the one oddly-lit photo is what a color-mismatch cause predicts, while random dissatisfaction would spread returns across listings; test whether reshooting that item under neutral light cuts its returns, whether the returns specifically mention color, and whether other warm-lit photos show the same return spike.",
        credit: 1.0,
      },
      {
        text: "Returns happen for endless reasons, so blaming the photo lighting is a stretch.",
        credit: 0,
      },
      {
        text: "The lighting probably causes the returns; we could reshoot the photo.",
        credit: 0.6,
      },
      {
        text: "That photo seems to lead to more returns.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The warm lighting misrepresents the product's true color, so buyers feel misled — returns concentrating on the one oddly-lit photo is what a color-mismatch cause predicts, while random dissatisfaction would spread returns across listings; test whether reshooting that item under neutral light cuts its returns, whether the returns specifically mention color, and whether other warm-lit photos show the same return spike.",
    explanation:
      "Returns concentrated on the one mis-lit photo were expected under a color-mismatch cause but improbable under random dissatisfaction, so likelihood favors the lighting; 'endless reasons' refuses to compare how expected the concentration was.",
  },
  {
    itemType: "mc",
    prompt:
      "A café finds that customer complaints about bitter espresso cluster on the afternoons after the grinder's burrs have gone a full week without cleaning. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Dirty burrs probably make it bitter; we could clean them more often.",
        credit: 0.6,
      },
      {
        text: "The espresso seems worse when the grinder is overdue for cleaning.",
        credit: 0.3,
      },
      {
        text: "Taste complaints are too varied to tie to the grinder schedule.",
        credit: 0,
      },
      {
        text: "Built-up rancid coffee oils on the burrs are souring the shots — bitterness complaints landing on exactly the overdue-cleaning afternoons is what an oil-buildup cause predicts, whereas bean or barista variation wouldn't track the cleaning calendar; test whether a fresh cleaning immediately ends the complaints, whether bitterness rises steadily across the week since the last clean, and whether a second freshly-cleaned grinder draws no such complaints.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "Built-up rancid coffee oils on the burrs are souring the shots — bitterness complaints landing on exactly the overdue-cleaning afternoons is what an oil-buildup cause predicts, whereas bean or barista variation wouldn't track the cleaning calendar; test whether a fresh cleaning immediately ends the complaints, whether bitterness rises steadily across the week since the last clean, and whether a second freshly-cleaned grinder draws no such complaints.",
    explanation:
      "Complaints timed to the cleaning calendar were expected under oil buildup but a coincidence under bean or barista variation, so likelihood favors the buildup; 'too varied to tie down' refuses to ask which cause made the timing expected.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A bookstore owner finds that nearly all its missing inventory comes from one aisle that sits in a camera blind spot, while well-covered aisles rarely lose stock. Which lead is strongest?",
    mcOptions: [
      {
        text: "Theft is concentrating where it's least likely to be caught — losses clustering in the one unmonitored aisle is exactly what opportunistic shoplifting predicts, whereas miscounting or supplier errors would spread losses evenly; test whether adding a camera to that aisle cuts its losses, whether the missing titles are small easily-pocketed ones, and whether a staffed aisle nearby loses nothing.",
        credit: 1.0,
      },
      {
        text: "That aisle seems to lose the most stock.",
        credit: 0.3,
      },
      {
        text: "The blind spot probably invites theft; we could move a camera there.",
        credit: 0.6,
      },
      {
        text: "Inventory goes missing for many reasons, so the blind spot is just as likely innocent.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'theft in the blind spot' lead from the rival 'that aisle just has sloppier inventory counts,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: install one camera covering that aisle and watch whether its losses drop sharply over the next month while counting procedures stay the same — theft predicts a fall, sloppy counting predicts no change. My lead is refuted if losses continue unchanged once the aisle is fully covered, pointing to a counting error rather than theft.",
      yieldAnchors: [
        "Nearly all missing inventory comes from the blind-spot aisle",
        "Well-covered aisles rarely lose stock",
        "That aisle sits outside camera coverage",
      ],
      riskAnchors: [
        "Adding a camera cuts the aisle's losses",
        "The missing titles are small, easily pocketed ones",
        "A staffed nearby aisle loses nothing",
      ],
      defeatedBy: [
        "The aisle merely has sloppier inventory counts",
        "Losses are spread evenly and unrelated to camera coverage",
      ],
    },
    correctAnswer:
      "Theft is concentrating where it's least likely to be caught — losses clustering in the one unmonitored aisle is exactly what opportunistic shoplifting predicts, whereas miscounting or supplier errors would spread losses evenly; test whether adding a camera to that aisle cuts its losses, whether the missing titles are small easily-pocketed ones, and whether a staffed aisle nearby loses nothing.",
    explanation:
      "Losses concentrated in the blind spot were expected under theft but improbable under even miscounting, so likelihood favors theft; the camera test names its own refutation, while 'just as likely innocent' throws away the discriminating concentration.",
  },
  {
    itemType: "hybrid",
    prompt:
      "On a coral reef, a marine biologist finds that small fish flee to crevices within seconds whenever a particular grouper drifts overhead, but ignore similarly sized harmless fish. Which lead is strongest?",
    mcOptions: [
      {
        text: "Fish behavior is too erratic to attribute the fleeing to the grouper.",
        credit: 0,
      },
      {
        text: "The fish recognize the grouper as a predator — diving for cover specifically when that species appears, and not for harmless look-alikes, is exactly what predator recognition predicts, while random startling wouldn't single out the grouper; test whether a grouper silhouette towed overhead triggers the same flight, whether naive aquarium-raised fish lack the response, and whether the fleeing scales with how close the grouper passes.",
        credit: 1.0,
      },
      {
        text: "The grouper probably scares them; we could watch more grouper passes.",
        credit: 0.6,
      },
      {
        text: "The fish seem to react to that grouper.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'predator recognition' lead from the rival 'the fish flee from any large moving shape,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: tow a grouper-shaped silhouette and a same-sized harmless-fish silhouette overhead in turn and compare the flight response — recognition predicts they bolt mainly for the grouper shape. My lead is refuted if the fish flee equally from both shapes, showing they react to size and motion, not the predator's identity.",
      yieldAnchors: [
        "Fish flee within seconds when the grouper drifts over",
        "They ignore similarly sized harmless fish",
        "The response is specific to that species",
      ],
      riskAnchors: [
        "A grouper silhouette triggers the same flight",
        "Naive aquarium-raised fish lack the response",
        "Fleeing scales with the grouper's closeness",
      ],
      defeatedBy: [
        "The fish flee from any large moving shape",
        "The grouper has no effect and fleeing is random",
      ],
    },
    correctAnswer:
      "The fish recognize the grouper as a predator — diving for cover specifically when that species appears, and not for harmless look-alikes, is exactly what predator recognition predicts, while random startling wouldn't single out the grouper; test whether a grouper silhouette towed overhead triggers the same flight, whether naive aquarium-raised fish lack the response, and whether the fleeing scales with how close the grouper passes.",
    explanation:
      "Fleeing specific to the grouper and not its harmless look-alikes was expected under predator recognition but improbable under random startling, so likelihood favors recognition; 'too erratic' refuses to compare how expected the species-specific response was.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A bottling line's seal failures spike sharply for the first hour after each shift change, then settle, every single day. Which lead is strongest?",
    mcOptions: [
      {
        text: "Seal failures seem worse early in a shift.",
        credit: 0.3,
      },
      {
        text: "A fresh operator is mis-setting the capper until they dial it in — failures concentrated in the first hour after each handover is exactly what an operator-setup cause predicts, whereas worn machinery would fail steadily all shift; test whether a standardized handover checklist erases the early spike, whether the failures are all the same misalignment type, and whether keeping one operator across a shift change removes the bump.",
        credit: 1.0,
      },
      {
        text: "Seal failures have many causes, so the shift-change timing may be coincidence.",
        credit: 0,
      },
      {
        text: "The shift change probably causes the spike; we could retrain operators.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'operator setup' lead from the rival 'the machine needs to warm up after idling at the break,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have the outgoing operator keep running the line straight through one shift change with no handover and see whether the early-hour spike disappears — operator setup predicts no spike, machine warm-up predicts the spike persists. My lead is refuted if failures still spike after the break even without an operator change.",
      yieldAnchors: [
        "Seal failures spike in the first hour after each shift change",
        "They settle afterward",
        "The pattern repeats every day",
      ],
      riskAnchors: [
        "A handover checklist erases the early spike",
        "The failures are all the same misalignment type",
        "Keeping one operator through the change removes the bump",
      ],
      defeatedBy: [
        "The machine simply needs to warm up after the break",
        "The shift-change timing is coincidental",
      ],
    },
    correctAnswer:
      "A fresh operator is mis-setting the capper until they dial it in — failures concentrated in the first hour after each handover is exactly what an operator-setup cause predicts, whereas worn machinery would fail steadily all shift; test whether a standardized handover checklist erases the early spike, whether the failures are all the same misalignment type, and whether keeping one operator across a shift change removes the bump.",
    explanation:
      "Failures spiking right after each handover were expected under an operator-setup cause but improbable under steady wear, so likelihood favors setup; the no-handover test names its own refutation, while 'may be coincidence' discards the timing evidence.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A physiotherapist notices that runners who develop the same shin injury are almost all wearing shoes past 500 miles of use, while those in newer shoes rarely get it. Which lead is strongest?",
    mcOptions: [
      {
        text: "Worn-out cushioning is failing to absorb impact, stressing the shins — the injury concentrating among high-mileage shoes is just what a cushioning-breakdown cause predicts, while a training-error story wouldn't track shoe mileage so tightly; test whether swapping in fresh shoes prevents recurrence, whether lab-measured cushioning loss correlates with injury, and whether runners who rotate two pairs are spared.",
        credit: 1.0,
      },
      {
        text: "Old shoes probably cause it; we could advise runners to replace them sooner.",
        credit: 0.6,
      },
      {
        text: "Worn shoes seem connected to the injury.",
        credit: 0.3,
      },
      {
        text: "Running injuries are multi-causal, so shoe mileage proves nothing.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'worn cushioning' lead from the rival 'high-mileage shoes just mark runners who train harder,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have a group of high-mileage runners swap into fresh shoes while keeping their training identical and track injury rates — cushioning breakdown predicts the injuries drop, the training story predicts no change. My lead is refuted if fresh shoes don't reduce the injury among runners whose training stays the same.",
      yieldAnchors: [
        "The injury concentrates in shoes past 500 miles",
        "Runners in newer shoes rarely get it",
        "The same injury type recurs",
      ],
      riskAnchors: [
        "Fresh shoes prevent recurrence at equal training",
        "Measured cushioning loss correlates with injury",
        "Rotating two pairs spares runners",
      ],
      defeatedBy: [
        "High-mileage shoes merely mark harder trainers",
        "Shoe age is unrelated to the injury",
      ],
    },
    correctAnswer:
      "Worn-out cushioning is failing to absorb impact, stressing the shins — the injury concentrating among high-mileage shoes is just what a cushioning-breakdown cause predicts, while a training-error story wouldn't track shoe mileage so tightly; test whether swapping in fresh shoes prevents recurrence, whether lab-measured cushioning loss correlates with injury, and whether runners who rotate two pairs are spared.",
    explanation:
      "The injury tracking shoe mileage so tightly was more expected under cushioning breakdown than under a training-error story, so likelihood favors the shoes; the fresh-shoe swap names its own refutation, while 'multi-causal, proves nothing' refuses the comparison.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An IT team finds that failed login attempts on staff accounts come in bursts of thousands from a handful of foreign IP addresses, hitting common passwords in alphabetical order. Which lead is strongest?",
    mcOptions: [
      {
        text: "Login failures happen all the time, so this could just be forgetful employees.",
        credit: 0,
      },
      {
        text: "This is an automated credential-stuffing attack — thousands of ordered guesses from a few foreign IPs is exactly what a bot attack predicts, whereas real users forgetting passwords would be sporadic, local, and unordered; test whether the attempts stop when those IPs are blocked, whether the password list matches a known breach dump, and whether the timing is machine-regular rather than human.",
        credit: 1.0,
      },
      {
        text: "The login attempts seem to come from suspicious sources.",
        credit: 0.3,
      },
      {
        text: "It's probably an attack; we could block the foreign IPs.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'automated attack' lead from the rival 'a few employees abroad keep mistyping their passwords,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: examine the timing and ordering of the attempts — an attack predicts machine-regular intervals marching through an alphabetical password list, while mistyping employees produce a few irregular tries on their own usernames. My lead is refuted if the attempts are slow, sporadic, and confined to a few real staff usernames.",
      yieldAnchors: [
        "Failed logins come in bursts of thousands",
        "They originate from a handful of foreign IPs",
        "They try common passwords in alphabetical order",
      ],
      riskAnchors: [
        "Blocking those IPs stops the attempts",
        "The password list matches a known breach dump",
        "The timing is machine-regular, not human",
      ],
      defeatedBy: [
        "A few employees abroad keep mistyping passwords",
        "The bursts are normal and harmless",
      ],
    },
    correctAnswer:
      "This is an automated credential-stuffing attack — thousands of ordered guesses from a few foreign IPs is exactly what a bot attack predicts, whereas real users forgetting passwords would be sporadic, local, and unordered; test whether the attempts stop when those IPs are blocked, whether the password list matches a known breach dump, and whether the timing is machine-regular rather than human.",
    explanation:
      "Thousands of ordered guesses from few IPs were near-certain under a bot attack and absurd under forgetful employees, so likelihood is decisive; the timing-and-ordering test names its own refutation, while 'just forgetful employees' ignores how improbable the pattern is from humans.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A restaurant finds that diners send back the fish dish for being 'off' almost only on the days it arrives from a substitute supplier, never from the regular one. Which lead is strongest?",
    mcOptions: [
      {
        text: "The substitute supplier probably delivers worse fish; we could stop using them.",
        credit: 0.6,
      },
      {
        text: "The substitute's fish is less fresh on arrival — complaints landing on exactly the substitute-delivery days is what a freshness-difference cause predicts, while kitchen error would scatter complaints across all days; test whether the substitute's fish fails a smell-and-firmness check on arrival, whether its delivery temperature logs run warmer, and whether the same chefs draw no complaints on regular-supplier days.",
        credit: 1.0,
      },
      {
        text: "The fish seems worse when the substitute supplies it.",
        credit: 0.3,
      },
      {
        text: "Diners' palates vary so much that the supplier link is just as likely chance.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'less-fresh substitute fish' lead from the rival 'the kitchen just gets sloppy on substitute days,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: run a blind smell-and-firmness freshness check on each delivery before cooking and compare the two suppliers — the freshness lead predicts the substitute's raw fish scores worse on arrival, before any cooking happens. My lead is refuted if the substitute's raw fish passes the freshness check as well as the regular's, pointing to kitchen handling instead.",
      yieldAnchors: [
        "The fish is sent back mostly on substitute-supplier days",
        "Never on regular-supplier days",
        "The complaint is that it tastes 'off'",
      ],
      riskAnchors: [
        "The substitute's fish fails an on-arrival freshness check",
        "Its delivery temperature logs run warmer",
        "The same chefs draw no complaints on regular days",
      ],
      defeatedBy: [
        "The kitchen gets sloppy on substitute days",
        "Supplier choice is unrelated to the complaints",
      ],
    },
    correctAnswer:
      "The substitute's fish is less fresh on arrival — complaints landing on exactly the substitute-delivery days is what a freshness-difference cause predicts, while kitchen error would scatter complaints across all days; test whether the substitute's fish fails a smell-and-firmness check on arrival, whether its delivery temperature logs run warmer, and whether the same chefs draw no complaints on regular-supplier days.",
    explanation:
      "Complaints confined to substitute-delivery days were expected under a freshness difference but improbable under random kitchen error, so likelihood favors the supplier; the on-arrival freshness check names its own refutation, while 'just as likely chance' discards the supplier pattern.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A driving school finds that students who fail the road test on their first try almost all failed the same parallel-parking maneuver, while those who pass handle it cleanly. Which lead is strongest?",
    mcOptions: [
      {
        text: "Parallel parking is the specific skill gap sinking first-timers — failures concentrating on that one maneuver is exactly what a targeted skill deficit predicts, whereas general nervousness would spread errors across the whole test; test whether extra parallel-parking drills before the retest raise pass rates, whether the failing students' other maneuvers score fine, and whether instructors can predict failures from a pre-test parking attempt.",
        credit: 1.0,
      },
      {
        text: "Parallel parking seems to be where they struggle.",
        credit: 0.3,
      },
      {
        text: "Driving tests fail people for endless reasons, so the parking pattern means little.",
        credit: 0,
      },
      {
        text: "Parking probably trips them up; we could add more practice.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'specific parking-skill gap' lead from the rival 'these students are just generally more anxious test-takers,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: score each maneuver separately and check whether the first-time failers lose points almost only on parallel parking while performing normally elsewhere — a skill gap predicts an isolated parking deficit, general anxiety predicts errors spread across all maneuvers. My lead is refuted if the failing students also score poorly on the other maneuvers.",
      yieldAnchors: [
        "First-try failers almost all fail parallel parking",
        "Those who pass handle it cleanly",
        "The same maneuver recurs as the sticking point",
      ],
      riskAnchors: [
        "Extra parking drills raise retest pass rates",
        "Failing students' other maneuvers score fine",
        "A pre-test parking attempt predicts failure",
      ],
      defeatedBy: [
        "The students are simply more anxious test-takers",
        "The failed maneuver varies randomly",
      ],
    },
    correctAnswer:
      "Parallel parking is the specific skill gap sinking first-timers — failures concentrating on that one maneuver is exactly what a targeted skill deficit predicts, whereas general nervousness would spread errors across the whole test; test whether extra parallel-parking drills before the retest raise pass rates, whether the failing students' other maneuvers score fine, and whether instructors can predict failures from a pre-test parking attempt.",
    explanation:
      "Failures concentrated on one maneuver were expected under a specific skill gap but improbable under general anxiety, which would spread errors, so likelihood favors the skill gap; the per-maneuver scoring names its own refutation, while 'endless reasons' refuses the comparison.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A subscription app finds that cancellations cluster in the exact week each customer's free trial converts to a paid charge, and almost nowhere else in the lifecycle. Which lead is strongest?",
    mcOptions: [
      {
        text: "Cancellations have countless triggers, so the billing-week timing is probably coincidence.",
        credit: 0,
      },
      {
        text: "The first charge probably prompts cancellations; we could soften the billing email.",
        credit: 0.6,
      },
      {
        text: "Seeing the first real charge is making customers reassess the value — cancellations spiking in exactly the convert-to-paid week is what a sticker-shock cause predicts, whereas dissatisfaction with the product would scatter cancellations throughout use; test whether a reminder email three days before the charge changes the cancel rate, whether cancelers had low usage before the charge, and whether a lower trial-conversion price shrinks the spike.",
        credit: 1.0,
      },
      {
        text: "Cancellations seem to happen around the first payment.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'first-charge sticker shock' lead from the rival 'the product simply stops being useful after a week,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare usage in the days just before cancellation against the billing date — sticker shock predicts cancellations fire on the charge date even among still-active users, while a usefulness story predicts usage drops off first. My lead is refuted if cancelers had already stopped using the app well before the charge, regardless of the billing event.",
      yieldAnchors: [
        "Cancellations cluster in the convert-to-paid week",
        "Almost none occur elsewhere in the lifecycle",
        "The spike aligns with the first real charge",
      ],
      riskAnchors: [
        "A pre-charge reminder email changes the cancel rate",
        "Cancelers were still active before the charge",
        "A lower conversion price shrinks the spike",
      ],
      defeatedBy: [
        "The product simply stops being useful after a week",
        "Billing timing is unrelated to cancellation",
      ],
    },
    correctAnswer:
      "Seeing the first real charge is making customers reassess the value — cancellations spiking in exactly the convert-to-paid week is what a sticker-shock cause predicts, whereas dissatisfaction with the product would scatter cancellations throughout use; test whether a reminder email three days before the charge changes the cancel rate, whether cancelers had low usage before the charge, and whether a lower trial-conversion price shrinks the spike.",
    explanation:
      "Cancellations spiking exactly at the first charge were expected under sticker shock but improbable under steady dissatisfaction, so likelihood favors the charge; the usage-before-cancel test names its own refutation, while 'probably coincidence' discards the timing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A homeowner notices the upstairs smoke alarm chirps only on the coldest nights of the year, and never in mild weather. Which lead is strongest?",
    mcOptions: [
      {
        text: "The alarm seems to act up in the cold.",
        credit: 0.3,
      },
      {
        text: "Cold is dropping the battery's voltage below the alarm's low-power threshold, triggering the chirp — chirping confined to the coldest nights is exactly what a temperature-sensitive weak battery predicts, while a true smoke fault wouldn't depend on outdoor temperature; test whether a fresh battery stops the cold-night chirps, whether the chirps start once the hallway drops below a certain temperature, and whether briefly warming the unit silences it.",
        credit: 1.0,
      },
      {
        text: "Smoke alarms chirp for all sorts of reasons, so the cold connection may be chance.",
        credit: 0,
      },
      {
        text: "The cold probably weakens the battery; we could replace it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'cold-weakened battery' lead from the rival 'the alarm is just old and failing,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: put in a fresh battery and see whether the chirping stops on the next cold night — a weak battery predicts the chirps end, a failing unit predicts they continue. My lead is refuted if a brand-new battery still chirps on cold nights, pointing to a dying alarm rather than the battery.",
      yieldAnchors: [
        "The alarm chirps only on the coldest nights",
        "It never chirps in mild weather",
        "The chirp recurs with the cold",
      ],
      riskAnchors: [
        "A fresh battery stops the cold-night chirps",
        "Chirps begin below a certain hallway temperature",
        "Briefly warming the unit silences it",
      ],
      defeatedBy: [
        "The alarm is simply old and failing",
        "The cold has nothing to do with the chirping",
      ],
    },
    correctAnswer:
      "Cold is dropping the battery's voltage below the alarm's low-power threshold, triggering the chirp — chirping confined to the coldest nights is exactly what a temperature-sensitive weak battery predicts, while a true smoke fault wouldn't depend on outdoor temperature; test whether a fresh battery stops the cold-night chirps, whether the chirps start once the hallway drops below a certain temperature, and whether briefly warming the unit silences it.",
    explanation:
      "Chirping confined to the coldest nights was expected under a temperature-sensitive weak battery but improbable under a temperature-independent fault, so likelihood favors the battery; the fresh-battery test names its own refutation, while 'may be chance' refuses to weigh the cold pattern.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "An online retailer notices that its cart-abandonment rate jumped the same week it added a mandatory account-creation step to checkout, that abandonment is highest precisely at the account-creation screen, and that returning customers — who skip that step — abandon far less. In one paragraph, propose the strongest lead for the abandonment spike and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the forced account-creation step is the friction driving people away: the data are far more probable under this hypothesis than under any rival, because abandonment jumped in the very week the step was added, peaks at exactly that screen, and spares returning customers who never see it. This lead is fecund because it predicts checkable consequences: offering a guest-checkout option should pull abandonment back down toward its old level; the customers who quit should be overwhelmingly first-time buyers stopping at the account screen; and the abandonment spike should be absent on any flow where the step doesn't appear. I would test it by A/B testing guest checkout against the forced account step, by segmenting abandonment by new-versus-returning status and by the exact screen reached, and by confirming the spike vanishes wherever the account step is removed.",
      yieldAnchors: [
        "Abandonment jumped the week account-creation was added",
        "Abandonment peaks at the account-creation screen",
        "Returning customers who skip the step abandon far less",
      ],
      riskAnchors: [
        "Adding guest checkout pulls abandonment back down",
        "Quitters are overwhelmingly first-time buyers at the account screen",
        "The spike is absent wherever the step doesn't appear",
      ],
      defeatedBy: [
        "The abandonment rise is a seasonal coincidence",
        "All customers abandon equally regardless of the step",
        "Nothing can be concluded until a full year of data is in",
      ],
    },
    correctAnswer:
      "The strongest lead is that the forced account-creation step is the friction driving people away: the data are far more probable under this hypothesis than under any rival, because abandonment jumped in the very week the step was added, peaks at exactly that screen, and spares returning customers who never see it. This lead is fecund because it predicts checkable consequences: offering a guest-checkout option should pull abandonment back down toward its old level; the customers who quit should be overwhelmingly first-time buyers stopping at the account screen; and the abandonment spike should be absent on any flow where the step doesn't appear. I would test it by A/B testing guest checkout against the forced account step, by segmenting abandonment by new-versus-returning status and by the exact screen reached, and by confirming the spike vanishes wherever the account step is removed.",
    explanation:
      "Under CCR's inverted standard, 'we can't conclude anything until a full year of data' earns near-zero; top credit goes to the lead under which the timing, the peak screen, and the returning-customer contrast were all far more expected than under any rival, named with a guest-checkout A/B test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A park ranger finds that a trout stream's fish counts crashed the same season a new housing development began draining storm runoff into it, that the die-offs cluster downstream of the outflow pipe, and that fish upstream of the pipe are unharmed. In one paragraph, propose the strongest lead for the crash and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that contaminated storm runoff from the development is poisoning the stream below the outflow: this pattern is far more probable under the runoff hypothesis than under natural variation, because the crash began with the development, the deaths concentrate downstream of the pipe, and upstream fish are spared. This lead is fecund because it predicts checkable consequences: water sampled just below the pipe should show pollutants or low oxygen absent upstream; die-offs should spike right after heavy rains that flush the pipe; and fish health should recover if the runoff is filtered or diverted. I would test it by sampling water and sediment above and below the outflow, by correlating fish deaths with rainfall and discharge events, and by installing a runoff filter and watching whether downstream counts recover.",
      yieldAnchors: [
        "Fish counts crashed the season the development's runoff began",
        "Die-offs cluster downstream of the outflow pipe",
        "Fish upstream of the pipe are unharmed",
      ],
      riskAnchors: [
        "Water below the pipe shows pollutants or low oxygen absent upstream",
        "Die-offs spike right after heavy rains",
        "Filtering or diverting the runoff lets downstream counts recover",
      ],
      defeatedBy: [
        "The crash is normal year-to-year fluctuation",
        "The whole stream declined equally, not just downstream",
        "No conclusion is possible without years more monitoring",
      ],
    },
    correctAnswer:
      "The strongest lead is that contaminated storm runoff from the development is poisoning the stream below the outflow: this pattern is far more probable under the runoff hypothesis than under natural variation, because the crash began with the development, the deaths concentrate downstream of the pipe, and upstream fish are spared. This lead is fecund because it predicts checkable consequences: water sampled just below the pipe should show pollutants or low oxygen absent upstream; die-offs should spike right after heavy rains that flush the pipe; and fish health should recover if the runoff is filtered or diverted. I would test it by sampling water and sediment above and below the outflow, by correlating fish deaths with rainfall and discharge events, and by installing a runoff filter and watching whether downstream counts recover.",
    explanation:
      "CCR gives near-zero to 'it's just natural fluctuation' or 'we need years more data'; credit rewards the runoff lead, under which the timing, the downstream clustering, and the spared upstream fish were all far more expected than under chance, named with water sampling and a filter test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A warehouse manager finds that picking errors more than doubled after a new inventory layout was rolled out, that the errors concentrate among items moved to new shelf locations, and that items left in their old spots show no change in error rate. In one paragraph, propose the strongest lead for the error jump and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that workers are still reaching for items' old locations out of habit, so the relocation itself is causing the errors: the data are far more probable under this hypothesis than under a 'workers got careless' story, because errors doubled exactly when the layout changed, concentrate on the moved items, and spare items that stayed put. This lead is fecund because it predicts checkable consequences: error rates on the moved items should decay back toward normal as workers relearn the new spots; mistakes should disproportionately send pickers to the item's former shelf; and clear relabeling or a transition guide should speed the recovery. I would test it by tracking moved-item error rates week over week, by logging where mis-picks were actually taken from, and by piloting prominent 'moved to aisle X' signage to see whether errors fall faster.",
      yieldAnchors: [
        "Picking errors more than doubled after the new layout",
        "Errors concentrate among relocated items",
        "Items left in old spots show no change",
      ],
      riskAnchors: [
        "Moved-item errors decay as workers relearn locations",
        "Mis-picks disproportionately target the item's old shelf",
        "Relabeling or a transition guide speeds recovery",
      ],
      defeatedBy: [
        "The workforce simply became careless across the board",
        "The error rise is random month-to-month noise",
        "Nothing can be said until the layout has run for a year",
      ],
    },
    correctAnswer:
      "The strongest lead is that workers are still reaching for items' old locations out of habit, so the relocation itself is causing the errors: the data are far more probable under this hypothesis than under a 'workers got careless' story, because errors doubled exactly when the layout changed, concentrate on the moved items, and spare items that stayed put. This lead is fecund because it predicts checkable consequences: error rates on the moved items should decay back toward normal as workers relearn the new spots; mistakes should disproportionately send pickers to the item's former shelf; and clear relabeling or a transition guide should speed the recovery. I would test it by tracking moved-item error rates week over week, by logging where mis-picks were actually taken from, and by piloting prominent 'moved to aisle X' signage to see whether errors fall faster.",
    explanation:
      "Under CCR, the cautious 'we can't say until a year passes' and the 'workers just got careless' story both fare poorly because they make the moved-only, started-at-rollout pattern a coincidence; top credit goes to the habit-relocation lead under which that exact pattern is expected, named with a where-was-it-picked-from test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A pediatric clinic finds that a cluster of children with the same rash all attend one daycare, that the rash appears within days of starting there and fades over a weekend away, and that children at other nearby daycares are unaffected. In one paragraph, propose the strongest lead for the rash and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that something the children contact at that specific daycare — a new soap, cleaning product, mat, or material — is causing a contact rash: this pattern is far more probable under a daycare-exposure hypothesis than under coincidental illness, because the cases concentrate at one daycare, appear within days of starting, fade over weekends away, and spare children elsewhere. This lead is fecund because it predicts checkable consequences: the rash should map to skin areas that touch a particular surface or product; removing or substituting the suspect item should clear new cases; and a patch test of the suspected material should reproduce the reaction. I would test it by surveying what changed at the daycare and where on the body the rash sits, by trialing removal of the most likely irritant and watching new-case rates, and by patch-testing affected children against candidate materials.",
      yieldAnchors: [
        "The affected children all attend one daycare",
        "The rash appears within days of starting and fades over weekends away",
        "Children at other nearby daycares are unaffected",
      ],
      riskAnchors: [
        "The rash maps to skin that contacts a specific surface or product",
        "Removing the suspect irritant clears new cases",
        "A patch test reproduces the reaction",
      ],
      defeatedBy: [
        "The rashes are unrelated coincidental skin conditions",
        "A widespread seasonal virus explains it equally well",
        "Nothing can be concluded without testing every child in the city",
      ],
    },
    correctAnswer:
      "The strongest lead is that something the children contact at that specific daycare — a new soap, cleaning product, mat, or material — is causing a contact rash: this pattern is far more probable under a daycare-exposure hypothesis than under coincidental illness, because the cases concentrate at one daycare, appear within days of starting, fade over weekends away, and spare children elsewhere. This lead is fecund because it predicts checkable consequences: the rash should map to skin areas that touch a particular surface or product; removing or substituting the suspect item should clear new cases; and a patch test of the suspected material should reproduce the reaction. I would test it by surveying what changed at the daycare and where on the body the rash sits, by trialing removal of the most likely irritant and watching new-case rates, and by patch-testing affected children against candidate materials.",
    explanation:
      "CCR penalizes the 'just coincidental rashes' and 'we'd need to test the whole city' responses because they treat the tight daycare-and-timing clustering as an accident; top credit goes to the contact-exposure lead under which that clustering is exactly what we'd expect, paired with a remove-the-irritant and patch-test plan that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A youth soccer coach notices that his team concedes most of its goals in the final ten minutes of matches, that these late goals come overwhelmingly in games played without a halftime substitution rotation, and that on days the team rotates fresh players in, late goals nearly disappear. In one paragraph, propose the strongest lead for the late goals and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that late-game fatigue is breaking down the defense, and rotating fresh legs is what prevents it: the data are far more probable under a fatigue hypothesis than under 'the other teams just finish stronger,' because the goals cluster in the final ten minutes, concentrate in non-rotation games, and nearly vanish when the team substitutes. This lead is fecund because it predicts checkable consequences: players' tracked running speed and distance should fall in the final ten minutes of non-rotation games; conceded goals should follow defensive lapses by the most-tired players; and deliberately rotating in every match should flatten the late-goal spike. I would test it by logging late-game sprint speed with and without rotation, by reviewing whether late goals trace to fatigued defenders, and by running a stretch of always-rotate matches to see whether the final-ten-minutes goals stay suppressed.",
      yieldAnchors: [
        "Most goals are conceded in the final ten minutes",
        "Late goals come overwhelmingly in non-rotation games",
        "Late goals nearly disappear on rotation days",
      ],
      riskAnchors: [
        "Tracked running speed falls late in non-rotation games",
        "Late goals trace to the most-tired defenders",
        "Always rotating flattens the late-goal spike",
      ],
      defeatedBy: [
        "Opponents simply happen to finish stronger",
        "The late goals are random scattered bad luck",
        "No conclusion is possible without a full season of data",
      ],
    },
    correctAnswer:
      "The strongest lead is that late-game fatigue is breaking down the defense, and rotating fresh legs is what prevents it: the data are far more probable under a fatigue hypothesis than under 'the other teams just finish stronger,' because the goals cluster in the final ten minutes, concentrate in non-rotation games, and nearly vanish when the team substitutes. This lead is fecund because it predicts checkable consequences: players' tracked running speed and distance should fall in the final ten minutes of non-rotation games; conceded goals should follow defensive lapses by the most-tired players; and deliberately rotating in every match should flatten the late-goal spike. I would test it by logging late-game sprint speed with and without rotation, by reviewing whether late goals trace to fatigued defenders, and by running a stretch of always-rotate matches to see whether the final-ten-minutes goals stay suppressed.",
    explanation:
      "Under CCR's inverted standard, 'it's just random bad luck' and 'we'd need a whole season' score near-zero because they make the late, non-rotation clustering a coincidence; top credit goes to the fatigue lead under which that pattern is expected, named with a rotation test and sprint-speed check that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "likelihood-reasoning",
  title: "Likelihood Reasoning",
  weekNumber: 3,
  blurb:
    "When two explanations both fit the facts, back the one under which what you actually saw was the more expected — the hypothesis that needed the smaller coincidence, not merely the one that's compatible.",
  lectureTitle:
    "3.4 Likelihood Reasoning: asking which hypothesis made the data more expected",
  body: `# Likelihood Reasoning

When two explanations both "fit" the evidence, reflexive caution shrugs: "either could be true, so we can't choose." Constructive Critical Reasoning refuses that shrug. The right question is not *which story is compatible with the data* — usually several are — but *under which story were these exact observations most expected?* The hypothesis that made the data more probable is the one the data support, even when both are technically possible.

## Compatibility is cheap; likelihood discriminates

Almost any half-decent hypothesis can be stretched to *accommodate* what you saw. Compatibility is a low bar — it tells you a story isn't dead, not that it's winning. Likelihood is the sharper tool: ask how surprised each rival would have been by the actual result. If the pattern you observed would be ordinary under Hypothesis A but a remarkable coincidence under Hypothesis B, the evidence favors A — sometimes overwhelmingly — no matter how loudly B insists it "could still be true."

## The question that does the work

For every rival, ask: *If this were the truth, how expected was exactly what I'm seeing?* Run the data forward from each hypothesis. Five essays sharing three identical rare misspellings is mundane if they copied a common source and astronomically unlikely if they wrote independently — so copying wins by a landslide. Cash short on every one of one cashier's shifts and none of anyone else's is what skimming predicts and a freak coincidence under honest miscounting. Train your eye on the coincidence: the explanation that needs the smaller miracle is the better lead.

## Let surprising data carry the weight

Likelihood gets its power from *how unlikely the data were otherwise*. A result that almost any hypothesis would produce barely moves you; a sharp, specific, would-be-astonishing-by-chance pattern moves you a lot. Tight clustering — in time, in place, in form — is the signature of a real mechanism, because chance rarely bunches up that neatly. When you can say "this would almost never happen unless X," you have found a strong lead.

## Why "either could be true" loses

"Both explanations are compatible, so it's a toss-up" is the zero-credit dodge. It is true that both fit — and irrelevant, because fitting is not the contest. By treating a pattern that one hypothesis predicts and the other would call a one-in-a-million coincidence as a 50/50, the dodge throws away exactly the information likelihood is built to use. Refusing to compare is not caution; it is discarding the evidence.

## Overreach still loses

Likelihood is not the whole story. A hypothesis can make the data very expected and still be a poor bet if it was wildly implausible going in — a rare cause needs the evidence to overcome its low base rate. Do not declare a one-in-a-million disease from a symptom a common cold also produces. The winning move weighs how expected the data were *and* how plausible the cause was beforehand, then names the cheap test that would settle it.

## In the real world

A site's checkout crashes only on one browser version. "Crashes have many causes" is the dodge. Likelihood asks: how expected is a crash confined to a single browser build? Under a browser-specific incompatibility, exactly expected. Under random server overload, a strange coincidence. So the incompatibility wins — and it names its own tests: the logs should fingerprint that browser's API call, a compatibility shim should stop the crashes, and upgrading should clear it. Pick the explanation that made the data least surprising, then go try to break it.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
