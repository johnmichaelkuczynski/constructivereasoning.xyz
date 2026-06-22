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
      "A college student in a packed dorm wakes during peak flu season with a headache, mild fever, and aches; half his hallmates are out sick this week. A friend insists it sounds like a rare tropical fever he read about online, though the student hasn't traveled. Which lead best follows?",
    mcOptions: [
      {
        text: "It's most likely the seasonal virus already sweeping the dorm, since that's overwhelmingly the common cause here; confirm by checking whether his symptoms match the sick hallmates', whether a rapid flu swab comes back positive, and whether he improves on the same timeline they did before chasing anything exotic.",
        credit: 1.0,
      },
      {
        text: "The symptoms fit that rare tropical fever the friend described, so he should assume he has it and look up its treatments.",
        credit: 0,
      },
      {
        text: "It's probably whatever is going around; he could rest and see how it goes.",
        credit: 0.6,
      },
      {
        text: "There seems to be something making him sick like the others.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "It's most likely the seasonal virus already sweeping the dorm, since that's overwhelmingly the common cause here; confirm by checking whether his symptoms match the sick hallmates', whether a rapid flu swab comes back positive, and whether he improves on the same timeline they did before chasing anything exotic.",
    explanation:
      "Top credit weights the explanation by its base rate — a circulating dorm virus is far more probable than a travel-linked tropical fever in someone who never traveled — and names cheap confirming tests; leaping to the vivid rare disease is base-rate neglect and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "An ops engineer sees a web server suddenly responding slowly at 2 a.m. A teammate suggests it's a sophisticated targeted cyberattack. The server has filled its disk with logs twice before, both times causing the same slowdown. Which conclusion opens the most checkable inquiry?",
    mcOptions: [
      {
        text: "Server performance has too many possible causes to commit to one overnight.",
        credit: 0,
      },
      {
        text: "Given this exact slowdown was a full disk twice before, that mundane cause is the most probable culprit; check current disk usage, see whether clearing logs restores speed, and confirm no new traffic spike preceded it before suspecting an attack.",
        credit: 1.0,
      },
      {
        text: "It's probably the disk again; we could clear some files and watch.",
        credit: 0.6,
      },
      {
        text: "Something is slowing the server down tonight.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Given this exact slowdown was a full disk twice before, that mundane cause is the most probable culprit; check current disk usage, see whether clearing logs restores speed, and confirm no new traffic spike preceded it before suspecting an attack.",
    explanation:
      "The prior strongly favors the cause that has produced this exact symptom twice; the winning lead checks the high-base-rate cause first with three quick tests, while 'too many causes' refuses to weight anything and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A car won't start on the first hard freeze of winter. The owner left the headlights on yesterday, the battery is four years old, and dead batteries are by far the most common no-start cause in cold weather. A neighbor speculates it's a rare engine-computer fault. Which lead is strongest?",
    mcOptions: [
      {
        text: "Cold-weather no-starts are most often a weak battery, and here an old battery plus lights left on makes that the high-odds cause; test by checking the dash voltage, trying a jump-start, and seeing whether a charged battery cranks it before suspecting the computer.",
        credit: 1.0,
      },
      {
        text: "A rare engine-computer fault would explain it, so the owner should plan on replacing that module.",
        credit: 0,
      },
      {
        text: "It's likely the battery; the owner could try a jump and see.",
        credit: 0.6,
      },
      {
        text: "The cold seems to be keeping the car from starting.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Cold-weather no-starts are most often a weak battery, and here an old battery plus lights left on makes that the high-odds cause; test by checking the dash voltage, trying a jump-start, and seeing whether a charged battery cranks it before suspecting the computer.",
    explanation:
      "The base rate plus the specific clues (old battery, lights left on) make a dead battery far more plausible than a rare module fault; the top lead tests the common cause first, while jumping to the exotic module is base-rate neglect.",
  },
  {
    itemType: "mc",
    prompt:
      "A homeowner finds the bird feeder emptied overnight, the lid knocked askew, and claw scratches on the pole. Squirrels raid feeders constantly in this yard; a rare large migratory bird was seen in the county once last year. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Feeders empty for all sorts of reasons, so nothing definite can be said.",
        credit: 0,
      },
      {
        text: "Squirrels are by far the usual raiders here, and the scratches and knocked lid fit them; confirm by greasing the pole to see if raids stop, checking a night camera for squirrels, and noting whether a baffle ends it before crediting the rare bird.",
        credit: 1.0,
      },
      {
        text: "It's probably squirrels; we could put up a baffle and see.",
        credit: 0.6,
      },
      {
        text: "Some animal seems to be getting into the feeder.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Squirrels are by far the usual raiders here, and the scratches and knocked lid fit them; confirm by greasing the pole to see if raids stop, checking a night camera for squirrels, and noting whether a baffle ends it before crediting the rare bird.",
    explanation:
      "The richest lead weights the common local raider over a once-seen rare bird and names three cheap tests; the refusal to commit ignores that the base rate plainly favors squirrels.",
  },
  {
    itemType: "mc",
    prompt:
      "A small shop's cash drawer is $20 short at closing. Miscounts and a forgotten un-rung sale happen a few times a month; theft has never been documented in three years. The new clerk closed alone tonight. Which lead opens the most inquiry?",
    mcOptions: [
      {
        text: "The clerk is new and closed alone, so theft is the obvious explanation and the manager should write them up.",
        credit: 0,
      },
      {
        text: "Routine counting and un-rung-sale errors are common here while theft has never occurred, so a mundane error is the high-odds first guess; recount the drawer, match receipts to the register tape, and review the camera before treating it as theft.",
        credit: 1.0,
      },
      {
        text: "It's probably just a counting slip; we could recount and move on.",
        credit: 0.6,
      },
      {
        text: "The drawer being short seems tied to tonight's closing.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Routine counting and un-rung-sale errors are common here while theft has never occurred, so a mundane error is the high-odds first guess; recount the drawer, match receipts to the register tape, and review the camera before treating it as theft.",
    explanation:
      "Top credit weights a common bookkeeping error over an unprecedented theft and names three checks; accusing the new clerk leaps past a strong base rate to the dramatic explanation and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A houseplant's lower leaves are yellowing and soft. The owner waters it daily and the pot has no drainage holes. Overwatering is the leading killer of houseplants; a rare trace-mineral deficiency is also possible. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Plant health is too complex to single out one cause.",
        credit: 0,
      },
      {
        text: "Daily watering in a pot with no drainage points to overwatering, by far the most common cause of soft yellow leaves; test by checking whether the soil is soggy, letting it dry and repotting with drainage, and seeing whether new growth firms up before suspecting a mineral deficiency.",
        credit: 1.0,
      },
      {
        text: "It's likely too much water; the owner could ease off and watch.",
        credit: 0.6,
      },
      {
        text: "The plant seems unhappy about something.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Daily watering in a pot with no drainage points to overwatering, by far the most common cause of soft yellow leaves; test by checking whether the soil is soggy, letting it dry and repotting with drainage, and seeing whether new growth firms up before suspecting a mineral deficiency.",
    explanation:
      "The base rate and the specific clue (no drainage, daily water) make overwatering far more plausible than a rare deficiency; the strongest lead tests the common cause with three checks, while 'too complex' refuses to weight the odds.",
  },
  {
    itemType: "mc",
    prompt:
      "A blog's reported daily visitors drop 30% overnight. Yesterday a developer edited the site template. Broken analytics tags are a routine cause of sudden reporting drops; a genuine collapse in real readership is comparatively rare and gradual. Which lead is strongest?",
    mcOptions: [
      {
        text: "A real audience exodus is the likeliest story, so the team should overhaul its content strategy now.",
        credit: 0,
      },
      {
        text: "Because the template was just edited and tag breakage commonly causes overnight reporting drops, a measurement glitch is the high-odds cause; check whether the analytics snippet still loads, compare against server logs of actual hits, and confirm signups held steady before concluding readers left.",
        credit: 1.0,
      },
      {
        text: "It's probably a tracking issue from the edit; we could re-check the code.",
        credit: 0.6,
      },
      {
        text: "The numbers seem off since the template change.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Because the template was just edited and tag breakage commonly causes overnight reporting drops, a measurement glitch is the high-odds cause; check whether the analytics snippet still loads, compare against server logs of actual hits, and confirm signups held steady before concluding readers left.",
    explanation:
      "A sudden cliff right after a code change fits a broken tag (common) far better than a real overnight audience loss (rare); the top lead checks measurement first, while overhauling strategy assumes the rare cause and ignores the base rate.",
  },
  {
    itemType: "mc",
    prompt:
      "A previously trusted supplier has now shipped three consecutive batches that fail incoming inspection with the identical defect — an off-spec weld at the same joint. They were flawless for two years. A manager says 'they've always been reliable, so it must be our test rig.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "Their long track record means our equipment is surely at fault, so we should leave the supplier alone.",
        credit: 0,
      },
      {
        text: "Three straight batches with the same specific weld defect is strong enough evidence to override the good prior and conclude a real process change at the supplier; verify by inspecting the welds with a second gauge, checking whether older stock still passes, and asking the supplier what changed on that line.",
        credit: 1.0,
      },
      {
        text: "Something probably changed at the supplier; we could ask them about it.",
        credit: 0.6,
      },
      {
        text: "The batches seem to be failing more than before.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Three straight batches with the same specific weld defect is strong enough evidence to override the good prior and conclude a real process change at the supplier; verify by inspecting the welds with a second gauge, checking whether older stock still passes, and asking the supplier what changed on that line.",
    explanation:
      "A strong prior should not be tyrannical: three consistent, specific failures are strong evidence that overrides 'they've always been fine'; clinging to the prior and blaming the test rig is letting priors smother decisive data, which earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A baker's loaves won't rise. She used a jar of yeast opened eight months ago and stored warm; dead yeast is the most common cause of failure to rise. She wonders if a rare problem with the new flour is to blame. Which lead opens the most inquiry?",
    mcOptions: [
      {
        text: "Bread failures are too finicky to attribute to any one thing.",
        credit: 0,
      },
      {
        text: "Old, warm-stored yeast is the overwhelmingly common reason dough won't rise, so that's the leading suspect; proof a spoonful of the yeast in warm sugar water to see if it foams, bake a test loaf with fresh yeast, and only then test the flour if the problem persists.",
        credit: 1.0,
      },
      {
        text: "It's probably the yeast; she could buy a fresh jar and retry.",
        credit: 0.6,
      },
      {
        text: "The dough seems to have trouble rising lately.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Old, warm-stored yeast is the overwhelmingly common reason dough won't rise, so that's the leading suspect; proof a spoonful of the yeast in warm sugar water to see if it foams, bake a test loaf with fresh yeast, and only then test the flour if the problem persists.",
    explanation:
      "The base rate plus the storage clue make dead yeast far likelier than a rare flour fault; the top lead runs a cheap proofing test on the common cause first, while 'too finicky' refuses to use the obvious odds.",
  },
  {
    itemType: "mc",
    prompt:
      "A driver has gotten three parking tickets in a month after years with none. She recently started staying late at work and parking past the 6 p.m. meter cutoff. A coworker suggests the city secretly hired a swarm of new enforcement officers. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The city must have launched a hidden enforcement blitz, so she should file a complaint with the council.",
        credit: 0,
      },
      {
        text: "The simplest high-odds explanation is her own changed routine — now parking past the paid hours — since that reliably draws tickets; check the times stamped on the tickets against her late departures, try paying the evening meter, and see whether parking by 5:45 ends them before blaming a secret crackdown.",
        credit: 1.0,
      },
      {
        text: "It's probably her new late schedule; she could leave earlier and see.",
        credit: 0.6,
      },
      {
        text: "She seems to be getting more tickets these days.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The simplest high-odds explanation is her own changed routine — now parking past the paid hours — since that reliably draws tickets; check the times stamped on the tickets against her late departures, try paying the evening meter, and see whether parking by 5:45 ends them before blaming a secret crackdown.",
    explanation:
      "A changed personal behavior is a far more probable cause than a covert city hiring spree; the strongest lead ties the tickets to her own routine and tests it, while the enforcement-blitz theory leaps to a rare, unevidenced cause.",
  },
  {
    itemType: "mc",
    prompt:
      "A second-grader gets a stomachache most school mornings but feels fine on weekends and during summer. Stress-linked tummy aches tied to school are very common at this age; a rare digestive disease is conceivable. Which lead is strongest?",
    mcOptions: [
      {
        text: "It could be a rare digestive disease, so the parents should book a full battery of invasive tests immediately.",
        credit: 0,
      },
      {
        text: "Aches that vanish on weekends and in summer fit common school-related anxiety far better than a constant disease; test by noting whether the pain eases once he's settled at school, whether worries about a class or kid line up with bad mornings, and whether a teacher chat reduces it before pursuing medical workups.",
        credit: 1.0,
      },
      {
        text: "It's probably school stress; the parents could talk to his teacher.",
        credit: 0.6,
      },
      {
        text: "Something about school mornings seems to bother his stomach.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Aches that vanish on weekends and in summer fit common school-related anxiety far better than a constant disease; test by noting whether the pain eases once he's settled at school, whether worries about a class or kid line up with bad mornings, and whether a teacher chat reduces it before pursuing medical workups.",
    explanation:
      "The school-only timing plus the high base rate of childhood school anxiety make it the leading lead; jumping to invasive tests for a rare disease ignores both the pattern and the base rate.",
  },
  {
    itemType: "mc",
    prompt:
      "A free home test kit screens for a condition that affects about 1 in 2,000 people; the kit flags positives in 5% of healthy users. A worried user gets a positive. Which conclusion best follows?",
    mcOptions: [
      {
        text: "A positive on this rare-condition test is far more likely to be one of the many false positives than a true case, so the right move is a confirmatory clinical test; estimate how many of 2,000 users test positive without the condition, repeat with a more specific test, and avoid acting on the screen alone.",
        credit: 1.0,
      },
      {
        text: "The test came back positive, so the user almost certainly has the condition and should start treatment.",
        credit: 0,
      },
      {
        text: "It's probably a false alarm; the user could just retest later.",
        credit: 0.6,
      },
      {
        text: "The result seems to suggest a possible problem.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "A positive on this rare-condition test is far more likely to be one of the many false positives than a true case, so the right move is a confirmatory clinical test; estimate how many of 2,000 users test positive without the condition, repeat with a more specific test, and avoid acting on the screen alone.",
    explanation:
      "With a rare condition and a 5% false-positive rate, the vast majority of positives are false; the top answer reasons from the base rate to a confirmatory test, while concluding you have the condition is textbook base-rate neglect.",
  },
  {
    itemType: "mc",
    prompt:
      "A phone's battery now dies by mid-afternoon. The phone is three years old, and the user just installed a popular game that runs in the background. Aging batteries and heavy new apps are the routine causes of fast drain; phone malware is rare. Which lead opens the most inquiry?",
    mcOptions: [
      {
        text: "Battery drain has countless causes, so there's no safe lead to act on.",
        credit: 0,
      },
      {
        text: "A three-year-old battery plus a newly installed background-heavy game are the common, high-odds causes; check the battery-health screen, look at which app tops the usage list, and uninstall the game for a day to see if drain eases before suspecting malware.",
        credit: 1.0,
      },
      {
        text: "It's probably the aging battery or the new app; the user could check settings.",
        credit: 0.6,
      },
      {
        text: "The battery seems to run down faster now.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "A three-year-old battery plus a newly installed background-heavy game are the common, high-odds causes; check the battery-health screen, look at which app tops the usage list, and uninstall the game for a day to see if drain eases before suspecting malware.",
    explanation:
      "The base rate strongly favors an old battery or a heavy app over rare malware, and the recent install is a clue; the top lead tests the common causes first, while 'countless causes' refuses to weight the odds.",
  },
  {
    itemType: "mc",
    prompt:
      "A town of 30,000 notices three cases of the same cancer on one street within two years. A blogger blames a nearby factory. Statisticians note that small clusters of common cancers arise by chance in many neighborhoods given normal background rates. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Three cases on one street proves the factory is poisoning residents and it should be shut down at once.",
        credit: 0,
      },
      {
        text: "Because small clusters of a common cancer occur by chance fairly often, the cluster alone is weak evidence; estimate how many such clusters the town's background rate predicts, check whether the rate truly exceeds expectation, and look for a shared exposure before blaming the factory.",
        credit: 1.0,
      },
      {
        text: "It might just be coincidence; the town could keep an eye on it.",
        credit: 0.6,
      },
      {
        text: "There seems to be more cancer on that street.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Because small clusters of a common cancer occur by chance fairly often, the cluster alone is weak evidence; estimate how many such clusters the town's background rate predicts, check whether the rate truly exceeds expectation, and look for a shared exposure before blaming the factory.",
    explanation:
      "Top credit weights the cluster against the base rate of chance clusters and proposes a real excess-rate test; declaring the factory guilty on three cases ignores how often small clusters appear by chance.",
  },
  {
    itemType: "mc",
    prompt:
      "A bank's fraud model flags a card for review after a single $4 coffee purchase in the cardholder's own city. The cardholder buys coffee daily; genuine fraud almost never looks like a tiny local charge. Which lead is strongest?",
    mcOptions: [
      {
        text: "A flagged transaction means fraud, so the bank should freeze the card immediately.",
        credit: 0,
      },
      {
        text: "A small local coffee charge matches the cardholder's everyday pattern far more than rare fraud, so this is most likely a false flag; compare the charge to her routine purchases, check whether the merchant is one she frequents, and confirm no out-of-pattern charges before locking the card.",
        credit: 1.0,
      },
      {
        text: "It's probably a normal purchase; the bank could send a quick verification text.",
        credit: 0.6,
      },
      {
        text: "The charge seems to have triggered the system.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "A small local coffee charge matches the cardholder's everyday pattern far more than rare fraud, so this is most likely a false flag; compare the charge to her routine purchases, check whether the merchant is one she frequents, and confirm no out-of-pattern charges before locking the card.",
    explanation:
      "Given how common normal coffee buys are and how unlike fraud a tiny local charge is, the base rate says false alarm; the top lead tests that, while freezing the card treats a flag as proof and ignores the prior.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A machined-parts line shows a defect-rate jump this morning. The cutting tool is near the end of its rated life and tool wear routinely causes exactly this drift; a contaminated raw-material batch is a rarer possibility. Which lead best follows?",
    mcOptions: [
      {
        text: "Since the tool is near end-of-life and wear commonly causes this drift, worn tooling is the high-odds cause; measure the tool edge, swap in a fresh tool to see if defects drop, and check whether the bad parts cluster as wear would predict before suspecting the material.",
        credit: 1.0,
      },
      {
        text: "The defects seem worse today.",
        credit: 0.3,
      },
      {
        text: "Defect causes are too entangled to commit to one this shift.",
        credit: 0,
      },
      {
        text: "It's probably the tool; we could change it and watch.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your worn-tool lead from the rival 'a contaminated material batch,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: swap in a fresh tool while keeping the same material lot and watch the defect rate — if wear is the cause, defects should fall back to normal. My lead is refuted if defects persist with the new tool on the same material, pointing instead to the raw-material batch.",
      yieldAnchors: [
        "The tool is near the end of its rated life",
        "Tool wear routinely causes this exact drift",
        "The defect rate jumped this morning",
      ],
      riskAnchors: [
        "A fresh tool drops the defect rate",
        "The tool edge measures out of spec",
        "Bad parts cluster as wear would predict",
      ],
      defeatedBy: [
        "The contaminated material batch is the cause despite a fresh tool fixing it",
        "Nothing can be said until many more parts are measured",
      ],
    },
    correctAnswer:
      "Since the tool is near end-of-life and wear commonly causes this drift, worn tooling is the high-odds cause; measure the tool edge, swap in a fresh tool to see if defects drop, and check whether the bad parts cluster as wear would predict before suspecting the material.",
    explanation:
      "The base rate plus the end-of-life clue make wear the leading suspect, and the cheap tool-swap test names its own refutation; refusing to weight the causes earns zero.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A mobile app's crash reports spike sharply the hour after a new version ships. New releases commonly introduce crashing bugs; a coincidental phone-OS update is a rarer alternative. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Crashes have so many causes that no lead is safe yet.",
        credit: 0,
      },
      {
        text: "Because crashes commonly follow new releases and these began right after the ship, the new build is the high-odds cause; check whether crashes hit only the new version, roll back to confirm they stop, and read the top crash stack before blaming an OS update.",
        credit: 1.0,
      },
      {
        text: "The app seems crashier since the update.",
        credit: 0.3,
      },
      {
        text: "It's probably the new release; we could look into a rollback.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your new-release lead from the rival 'a coincidental OS update,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare crash rates between users on the new version and users still on the old one across the same phones — my lead predicts only new-version users crash. It is refuted if old-version users on the updated OS crash just as much, which would point to the OS, not the build.",
      yieldAnchors: [
        "Crashes spiked the hour after the new version shipped",
        "New releases commonly introduce crashing bugs",
        "The spike was sharp and immediate",
      ],
      riskAnchors: [
        "Only the new version's users crash",
        "Rolling back stops the crashes",
        "The crash stack points to new code",
      ],
      defeatedBy: [
        "A coincidental OS update caused it despite the rollback fixing crashes",
        "The release is unrelated to the crash spike",
      ],
    },
    correctAnswer:
      "Because crashes commonly follow new releases and these began right after the ship, the new build is the high-odds cause; check whether crashes hit only the new version, roll back to confirm they stop, and read the top crash stack before blaming an OS update.",
    explanation:
      "A sharp spike right after a release fits the common 'new build broke it' prior far better than a coincidental OS update; the version-split test names its refutation, while 'too many causes' refuses to weight anything.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A neighborhood diner gets a sudden run of one-star reviews complaining about slow service. The diner just lost two veteran servers and is training replacements; understaffing routinely slows service. A rival owner suggests competitors are posting fake reviews to sabotage them. Which lead is strongest?",
    mcOptions: [
      {
        text: "Review swings are too random to attribute to anything in particular.",
        credit: 0,
      },
      {
        text: "Losing two veterans amid training makes a real service slowdown the high-odds cause, since understaffing commonly does this; check whether ticket times actually rose, whether complaints name the new shifts, and whether speed recovers as trainees ramp up before alleging sabotage.",
        credit: 1.0,
      },
      {
        text: "Service seems to have gotten slower lately.",
        credit: 0.3,
      },
      {
        text: "It's probably the staffing change; we could watch the next few weeks.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your understaffing lead from the rival 'fake sabotage reviews,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: pull the kitchen's actual ticket-to-table times for the review dates — my lead predicts they genuinely rose during the trainee shifts. It is refuted if measured service times were normal while the complaints poured in, which would support fabricated reviews.",
      yieldAnchors: [
        "The diner just lost two veteran servers",
        "Replacements are still being trained",
        "Understaffing routinely slows service",
      ],
      riskAnchors: [
        "Measured ticket times rose on the review dates",
        "Complaints name the new trainees' shifts",
        "Speed recovers as trainees ramp up",
      ],
      defeatedBy: [
        "Competitors fabricated the reviews despite real service times being slow",
        "Nothing can be concluded from a handful of reviews",
      ],
    },
    correctAnswer:
      "Losing two veterans amid training makes a real service slowdown the high-odds cause, since understaffing commonly does this; check whether ticket times actually rose, whether complaints name the new shifts, and whether speed recovers as trainees ramp up before alleging sabotage.",
    explanation:
      "A genuine slowdown from a known staffing loss is far likelier than a coordinated sabotage campaign; the ticket-time test names its refutation, while 'too random' refuses to weight the obvious cause.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A normally B-average student scores at the very top of the class on four straight exams across different formats — multiple choice, essay, and oral. Her teacher's prior is that she's an average student. A tutor was hired two months ago. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She's always been average, so the high scores must be flukes the teacher can ignore.",
        credit: 0,
      },
      {
        text: "Four consistent top scores across formats — including a proctored oral — is strong enough evidence to override the 'average student' prior and conclude real improvement; confirm by checking whether the gains began after tutoring, whether her oral answers show deep grasp, and whether her homework now matches the exam level.",
        credit: 1.0,
      },
      {
        text: "Her grades seem to have gone up recently.",
        credit: 0.3,
      },
      {
        text: "She probably improved; the teacher could keep watching her scores.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your genuine-improvement lead from the rival 'she's cheating,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: weight her proctored oral exam, where copying is impossible — my lead predicts she reasons fluently and deeply in person. It is refuted if she cannot explain her own written answers aloud, which would point to cheating rather than real gains.",
      yieldAnchors: [
        "Top scores on four straight exams",
        "The gains span multiple formats including a proctored oral",
        "A tutor was hired two months ago",
      ],
      riskAnchors: [
        "The gains began after tutoring started",
        "Her oral answers show deep grasp",
        "Her homework now matches the exam level",
      ],
      defeatedBy: [
        "Her past average grades prove these scores are flukes",
        "She is cheating despite acing the proctored oral",
      ],
    },
    correctAnswer:
      "Four consistent top scores across formats — including a proctored oral — is strong enough evidence to override the 'average student' prior and conclude real improvement; confirm by checking whether the gains began after tutoring, whether her oral answers show deep grasp, and whether her homework now matches the exam level.",
    explanation:
      "Strong, consistent evidence across formats should override a modest prior; treating the scores as flukes lets the prior tyrannize the data, while the oral-exam test names its own refutation.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A dog limps the evening after a long rocky hike. Paw soreness and a thorn or cut are the routine causes of post-hike limping in a young, healthy dog; rare joint disease is possible. Which lead opens the most inquiry?",
    mcOptions: [
      {
        text: "It could be a rare joint disease, so the owner should schedule major imaging right away.",
        credit: 0,
      },
      {
        text: "A young dog limping right after a rough hike most likely has a sore or cut paw, the common cause; inspect the pads and between the toes for a thorn or scrape, see whether rest and a day off resolve it, and watch whether the limp is worst on the rocky-terrain paw before pursuing joint disease.",
        credit: 1.0,
      },
      {
        text: "The dog seems sore after the hike.",
        credit: 0.3,
      },
      {
        text: "It's probably a sore paw; the owner could rest the dog and see.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your sore-paw lead from the rival 'a joint problem,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: examine the pads and between the toes for a thorn, cut, or tenderness — my lead predicts a visible or palpable paw issue. It is refuted if the paw is clean and pain-free while the joint is swollen or the limp worsens with rest, pointing to a joint problem.",
      yieldAnchors: [
        "The limp began the evening after a long rocky hike",
        "The dog is young and healthy",
        "Paw soreness and cuts are the common post-hike cause",
      ],
      riskAnchors: [
        "A thorn, cut, or tender pad is found on inspection",
        "Rest and a day off resolve the limp",
        "The limp is worst on the rocky-terrain paw",
      ],
      defeatedBy: [
        "It is a rare joint disease despite a clean, pain-free paw",
        "Nothing can be judged without immediate imaging",
      ],
    },
    correctAnswer:
      "A young dog limping right after a rough hike most likely has a sore or cut paw, the common cause; inspect the pads and between the toes for a thorn or scrape, see whether rest and a day off resolve it, and watch whether the limp is worst on the rocky-terrain paw before pursuing joint disease.",
    explanation:
      "The base rate and the rocky-hike timing make a sore paw far likelier than joint disease; the cheap paw inspection names its refutation, while leaping to major imaging ignores the prior.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An accountant finds a budget spreadsheet's grand total is off by exactly $1,000. Manual entry slips and a mistyped formula are by far the most common causes of such round-number errors; a bug in the well-tested spreadsheet software is rare. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The spreadsheet program is probably buggy, so the team should switch software immediately.",
        credit: 0,
      },
      {
        text: "A clean $1,000 discrepancy fits a common entry or formula error far better than a rare software bug; trace the total to its cells, look for a transposed or mis-ranged figure, and recompute the column by hand before suspecting the program.",
        credit: 1.0,
      },
      {
        text: "The total seems wrong somewhere.",
        credit: 0.3,
      },
      {
        text: "It's probably a typo; the accountant could re-check the entries.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your entry-error lead from the rival 'a software bug,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: re-add the column by hand or on a calculator and compare to the cells — my lead predicts a specific wrong or mis-ranged entry will surface. It is refuted if every entry is correct and the formula range is right yet the program still totals them wrong, pointing to a software bug.",
      yieldAnchors: [
        "The total is off by a round $1,000",
        "Entry slips and formula errors are the common causes",
        "The software is well-tested and widely used",
      ],
      riskAnchors: [
        "A transposed or mis-ranged figure is found",
        "Hand-recomputing reveals the discrepancy's source",
        "Fixing the entry corrects the total",
      ],
      defeatedBy: [
        "The well-tested software has a bug despite all entries being correct",
        "Nothing can be concluded without auditing every formula",
      ],
    },
    correctAnswer:
      "A clean $1,000 discrepancy fits a common entry or formula error far better than a rare software bug; trace the total to its cells, look for a transposed or mis-ranged figure, and recompute the column by hand before suspecting the program.",
    explanation:
      "Human entry errors vastly outnumber bugs in mature spreadsheet software, so the base rate favors a typo; the hand-recompute test names its refutation, while blaming the software leaps to the rare cause.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A homeowner's lights flicker during a windy storm; neighbors up and down the block report the same flicker. Utility-side disturbances in storms are the common cause of whole-block flicker; a fault in one house's own wiring is rarer and would be local. Which lead is strongest?",
    mcOptions: [
      {
        text: "Power issues are too unpredictable to point at any one source.",
        credit: 0,
      },
      {
        text: "Because the whole block flickers during a storm, a utility-side disturbance is the high-odds cause, not one home's wiring; check whether the flicker times match wind gusts, whether it stops when the storm passes, and whether the utility reports line issues before opening up the breaker panel.",
        credit: 1.0,
      },
      {
        text: "The lights seem to flicker in the wind.",
        credit: 0.3,
      },
      {
        text: "It's probably a utility issue; the owner could call the power company.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your utility-side lead from the rival 'this house's own wiring is faulty,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: ask whether neighbors flicker at the same instants — my lead predicts the whole block dips together, which home wiring could not cause. It is refuted if only this house flickers while neighbors stay steady, pointing to its own wiring or panel.",
      yieldAnchors: [
        "Lights flicker during a windy storm",
        "Neighbors across the block report the same flicker",
        "Utility disturbances commonly cause whole-block flicker",
      ],
      riskAnchors: [
        "Flicker times match the wind gusts",
        "It stops when the storm passes",
        "The utility reports line issues",
      ],
      defeatedBy: [
        "Only this house's wiring is at fault despite the whole block flickering",
        "Nothing can be said about flickering lights at all",
      ],
    },
    correctAnswer:
      "Because the whole block flickers during a storm, a utility-side disturbance is the high-odds cause, not one home's wiring; check whether the flicker times match wind gusts, whether it stops when the storm passes, and whether the utility reports line issues before opening up the breaker panel.",
    explanation:
      "Block-wide, storm-timed flicker fits the common utility cause far better than a rare per-house fault; the neighbor-sync test names its refutation, while 'too unpredictable' refuses to weight the shared evidence.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An online craft seller sees daily sales of one item triple this week. She launched a 30%-off promotion on it three days ago, and promotions reliably lift sales; a rare unprompted viral mention is also conceivable. Which conclusion best follows?",
    mcOptions: [
      {
        text: "It must be going viral somewhere, so she should drop the discount and raise the price.",
        credit: 0,
      },
      {
        text: "Since she just launched a discount and promotions commonly triple sales, the promo is the high-odds driver; check whether the sales jump began the day the discount went live, whether buyers used the promo, and whether sales fall back when it ends before crediting a viral mention.",
        credit: 1.0,
      },
      {
        text: "Sales seem to be way up this week.",
        credit: 0.3,
      },
      {
        text: "It's probably the promotion; she could see what happens when it ends.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your promotion lead from the rival 'it went viral,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether buyers applied the discount and whether sales started exactly when it launched — my lead predicts yes on both. It is refuted if most buyers paid full price or the surge began before the promo, which would suggest organic viral traffic instead.",
      yieldAnchors: [
        "Daily sales of the item tripled this week",
        "A 30%-off promotion launched three days ago",
        "Promotions reliably lift sales",
      ],
      riskAnchors: [
        "The jump began the day the discount went live",
        "Most buyers applied the promo code",
        "Sales fall back when the promo ends",
      ],
      defeatedBy: [
        "The item went viral despite buyers using the discount and timing matching the promo",
        "Nothing can explain a one-week sales change",
      ],
    },
    correctAnswer:
      "Since she just launched a discount and promotions commonly triple sales, the promo is the high-odds driver; check whether the sales jump began the day the discount went live, whether buyers used the promo, and whether sales fall back when it ends before crediting a viral mention.",
    explanation:
      "A live promotion is a far more probable cause of a sales triple than a rare spontaneous viral moment; the timing-and-code test names its refutation, while assuming virality and raising the price ignores the obvious base rate.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An office building's badge system logs one employee entering at 3 a.m. The employee is a known early-shift cleaner whose badge is used at odd hours nightly; a stolen-badge intrusion is rare. Security wonders whether to lock the building down. Which lead is strongest?",
    mcOptions: [
      {
        text: "Any 3 a.m. entry is an intrusion, so security should lock down and call police now.",
        credit: 0,
      },
      {
        text: "A cleaner whose badge normally pings at odd hours makes routine night work the high-odds explanation; check whether tonight's entry matches the cleaner's usual pattern, whether the hallway camera shows that employee, and whether the badge moves on its normal cleaning route before treating it as a breach.",
        credit: 1.0,
      },
      {
        text: "Someone seems to have come in late at night.",
        credit: 0.3,
      },
      {
        text: "It's probably the cleaner; security could glance at the camera.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your routine-cleaner lead from the rival 'a stolen-badge intruder,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: pull up the entry camera and check whether the person is the known cleaner — my lead predicts it is. It is refuted if the footage shows an unknown person or the badge takes a path the cleaner never uses, which would indicate a stolen badge.",
      yieldAnchors: [
        "The badge belongs to a known early-shift cleaner",
        "That badge is used at odd hours nightly",
        "Stolen-badge intrusions are rare",
      ],
      riskAnchors: [
        "Tonight's entry matches the cleaner's usual pattern",
        "The camera shows the known employee",
        "The badge follows its normal cleaning route",
      ],
      defeatedBy: [
        "It is a stolen-badge intruder despite footage showing the known cleaner",
        "Nothing about a single badge log can be interpreted",
      ],
    },
    correctAnswer:
      "A cleaner whose badge normally pings at odd hours makes routine night work the high-odds explanation; check whether tonight's entry matches the cleaner's usual pattern, whether the hallway camera shows that employee, and whether the badge moves on its normal cleaning route before treating it as a breach.",
    explanation:
      "Given the cleaner's nightly pattern, a routine entry is far likelier than a rare intrusion; the camera check names its refutation, while a full lockdown treats a single log as proof and ignores the base rate.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A small clinic sees three patients in one week with the same unusual rash. Two are gardeners who handled a new mulch; the third helped them spread it. A nurse worries about a rare contagious outbreak, while contact irritation from a shared substance is a far more common cause of clustered rashes. In one paragraph, propose the strongest lead for the rashes and describe how you would test it, weighing how plausible each explanation was going in.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is a shared contact irritant from the new mulch, because all three patients handled the same material and contact dermatitis from a common substance is a far more probable cause of a tight cluster than a rare contagious outbreak with no other spread. This lead is fecund because it predicts checkable consequences: the rash should appear only on skin that touched the mulch, it should resolve with washing and barrier creams rather than spreading person-to-person, and patch-testing the mulch should reproduce a reaction while household contacts who never touched it stay clear. I would test it by mapping each rash to exposed skin areas, by asking whether anyone who avoided the mulch got the rash, and by checking whether the cluster stops once handling stops — reserving outbreak protocols for the case where untouched contacts also fall ill.",
      yieldAnchors: [
        "Three patients in one week have the same unusual rash",
        "Two are gardeners who handled new mulch and the third helped spread it",
        "Contact irritation from a shared substance commonly causes clustered rashes",
      ],
      riskAnchors: [
        "The rash appears only on skin that touched the mulch",
        "It resolves with washing rather than spreading person-to-person",
        "Untouched household contacts stay rash-free",
      ],
      defeatedBy: [
        "It is a rare contagious outbreak despite no spread to untouched contacts",
        "All three rashes are pure coincidence",
        "Nothing can be concluded until dozens more cases appear",
      ],
    },
    correctAnswer:
      "The strongest lead is a shared contact irritant from the new mulch, because all three patients handled the same material and contact dermatitis from a common substance is a far more probable cause of a tight cluster than a rare contagious outbreak with no other spread. This lead is fecund because it predicts checkable consequences: the rash should appear only on skin that touched the mulch, it should resolve with washing and barrier creams rather than spreading person-to-person, and patch-testing the mulch should reproduce a reaction while household contacts who never touched it stay clear. I would test it by mapping each rash to exposed skin areas, by asking whether anyone who avoided the mulch got the rash, and by checking whether the cluster stops once handling stops — reserving outbreak protocols for the case where untouched contacts also fall ill.",
    explanation:
      "Under CCR's inverted standard, the cautious 'wait for dozens of cases' and the dramatic leap to a rare outbreak both lose; top credit weights the common shared-exposure cause by its base rate and the specific clue that all three handled the mulch, then names tests that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A subscription app's monthly churn ticks up from 4% to 6%. Last month the team raised prices and redesigned the cancellation flow, and pricing changes are a routine driver of churn jumps; a competitor launching is a rarer, splashier story a teammate favors. In one paragraph, propose the strongest lead for the churn rise and describe how you would test it, weighting each explanation by its prior plausibility.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the recent price increase pushed marginal subscribers to cancel, since a fresh pricing change is a common, high-base-rate cause of a churn jump and one landed right before the rise. This lead is fecund because it predicts checkable consequences: cancellations should concentrate among users on the newly raised plan and among price-sensitive segments, exit-survey reasons should cite cost, and a grandfathered or discounted cohort should churn at the old 4% rate. I would test it by segmenting churn by plan and tenure, by reading the cancellation-flow survey answers, and by offering a small retention discount to a random slice to see whether their churn falls back — turning to the competitor theory only if cancellers cite the rival and price-protected users churn just as much.",
      yieldAnchors: [
        "Monthly churn rose from 4% to 6%",
        "The team raised prices last month",
        "Pricing changes routinely drive churn jumps",
      ],
      riskAnchors: [
        "Cancellations concentrate among newly-raised-plan users",
        "Exit surveys cite cost as the reason",
        "A grandfathered cohort still churns at 4%",
      ],
      defeatedBy: [
        "A competitor's launch caused it even though price-protected users churn the same",
        "The churn rise is meaningless noise",
        "Nothing can be inferred from a two-point churn change",
      ],
    },
    correctAnswer:
      "The strongest lead is that the recent price increase pushed marginal subscribers to cancel, since a fresh pricing change is a common, high-base-rate cause of a churn jump and one landed right before the rise. This lead is fecund because it predicts checkable consequences: cancellations should concentrate among users on the newly raised plan and among price-sensitive segments, exit-survey reasons should cite cost, and a grandfathered or discounted cohort should churn at the old 4% rate. I would test it by segmenting churn by plan and tenure, by reading the cancellation-flow survey answers, and by offering a small retention discount to a random slice to see whether their churn falls back — turning to the competitor theory only if cancellers cite the rival and price-protected users churn just as much.",
    explanation:
      "CCR gives near-zero to 'it's just noise' and to the splashy competitor leap; top credit weights the recent price change by its high base rate as a churn driver and names a grandfathered-cohort test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A bank's fraud team sees a long-loyal customer's card suddenly run five rapid purchases in another country within twenty minutes, while she has never traveled abroad and just reported her wallet missing this morning. Their prior treats her as low-risk, but the evidence is striking. In one paragraph, propose the strongest lead and describe how you would test it, explaining how you balance her low-risk prior against the strength of the evidence.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the card was stolen and is being used fraudulently abroad, because five rapid foreign purchases in twenty minutes from someone who never travels and just reported a missing wallet is strong, specific evidence that overrides her otherwise low-risk prior. This lead is fecund because it predicts checkable consequences: the charge locations should be inconsistent with her phone's location, the merchants and amounts should fit a typical card-testing-then-spending pattern, and she should confirm she made none of them. I would test it by comparing the transaction geolocations against her phone and home network, by calling her to verify the purchases, and by checking whether the spending escalates as fraud usually does — declining to let 'she's always been reliable' suppress evidence this strong, while still confirming before permanently closing the account.",
      yieldAnchors: [
        "Five rapid foreign purchases within twenty minutes",
        "The customer has never traveled abroad",
        "She reported her wallet missing this morning",
      ],
      riskAnchors: [
        "Charge locations conflict with her phone's location",
        "She confirms she made none of the purchases",
        "The spending escalates in a card-testing pattern",
      ],
      defeatedBy: [
        "Her loyal, low-risk history proves these must be her own charges",
        "It is harmless because she occasionally shops online",
        "Nothing can be judged from a card's location data",
      ],
    },
    correctAnswer:
      "The strongest lead is that the card was stolen and is being used fraudulently abroad, because five rapid foreign purchases in twenty minutes from someone who never travels and just reported a missing wallet is strong, specific evidence that overrides her otherwise low-risk prior. This lead is fecund because it predicts checkable consequences: the charge locations should be inconsistent with her phone's location, the merchants and amounts should fit a typical card-testing-then-spending pattern, and she should confirm she made none of them. I would test it by comparing the transaction geolocations against her phone and home network, by calling her to verify the purchases, and by checking whether the spending escalates as fraud usually does — declining to let 'she's always been reliable' suppress evidence this strong, while still confirming before permanently closing the account.",
    explanation:
      "Here a low base rate of fraud for this customer must yield to strong, specific evidence; letting the 'she's reliable' prior override the data is prior-tyranny and earns near-zero, while the top lead commits to fraud and names confirming tests.",
  },
  {
    itemType: "written",
    prompt:
      "A homeowner's water bill doubles in one month. Nothing in the household routine changed, but the toilet has been running intermittently for weeks and a silent leak is the most common cause of a sudden bill spike; a faulty meter is a rarer alternative. In one paragraph, propose the strongest lead for the bill jump and describe how you would test it, weighting the explanations by how likely each was going in.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is a hidden leak — most likely the intermittently running toilet — because a silent leak is by far the most common cause of a sudden water-bill spike and there is already a known dripping fixture, making it far more probable than a rare meter fault. This lead is fecund because it predicts checkable consequences: the meter should keep creeping when all fixtures are off, dye dropped in the toilet tank should appear in the bowl without flushing, and fixing the flapper should drop usage back to baseline next cycle. I would test it by reading the meter before and after a few hours with everything shut off, by running the toilet dye test, and by checking other fixtures and the water-heater pan for damp — calling the utility to verify the meter only if usage reads high with every fixture confirmed dry.",
      yieldAnchors: [
        "The water bill doubled in one month",
        "Household routine did not change",
        "The toilet has been running intermittently for weeks",
      ],
      riskAnchors: [
        "The meter creeps with all fixtures off",
        "Tank dye appears in the bowl without flushing",
        "Fixing the flapper returns usage to baseline",
      ],
      defeatedBy: [
        "A rare faulty meter caused it despite a running toilet and a creeping meter",
        "The bill jump is random and not worth investigating",
        "Nothing can be concluded without months of bills",
      ],
    },
    correctAnswer:
      "The strongest lead is a hidden leak — most likely the intermittently running toilet — because a silent leak is by far the most common cause of a sudden water-bill spike and there is already a known dripping fixture, making it far more probable than a rare meter fault. This lead is fecund because it predicts checkable consequences: the meter should keep creeping when all fixtures are off, dye dropped in the toilet tank should appear in the bowl without flushing, and fixing the flapper should drop usage back to baseline next cycle. I would test it by reading the meter before and after a few hours with everything shut off, by running the toilet dye test, and by checking other fixtures and the water-heater pan for damp — calling the utility to verify the meter only if usage reads high with every fixture confirmed dry.",
    explanation:
      "The base rate plus the known running toilet make a leak far likelier than a rare meter fault; CCR penalizes the 'it's random' refusal and the leap to the rare meter cause, rewarding the leak lead that names a cheap meter-and-dye test.",
  },
  {
    itemType: "written",
    prompt:
      "A principal notices that one of a school's eight third-grade classes scored noticeably lower on the year-end reading test. The classes have similar students and the same curriculum, and small score differences between classes arise by chance every year; the principal is tempted to declare that class's teacher ineffective. In one paragraph, propose the strongest lead and describe how you would test it, weighting the 'real teacher effect' against the base rate of chance variation.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that this single low score may well be ordinary year-to-year variation rather than a real teacher effect, because with eight classes some spread is expected by chance every year and one dip is exactly what randomness produces, so the gap should be weighed against that base rate before blaming the teacher. This lead is fecund because it predicts checkable consequences: a real teacher effect should persist across multiple years and subjects and show up in mid-year benchmarks, whereas chance variation should not repeat; the low class's incoming scores may already have been lower; and the gap may shrink to non-significance once class size and prior achievement are accounted for. I would test it by comparing this teacher's classes over several years, by checking whether the class started the year behind, and by running a simple significance check on the gap — concluding a real teacher problem only if the shortfall recurs and survives those controls.",
      yieldAnchors: [
        "One of eight classes scored noticeably lower",
        "Classes have similar students and the same curriculum",
        "Small between-class differences arise by chance every year",
      ],
      riskAnchors: [
        "A real effect should recur across years and subjects",
        "The low class may have started the year behind",
        "The gap may vanish once prior achievement is controlled",
      ],
      defeatedBy: [
        "One low score proves the teacher is ineffective",
        "The difference is automatically meaningless and needs no follow-up",
        "Nothing about teaching quality can ever be assessed",
      ],
    },
    correctAnswer:
      "The strongest lead is that this single low score may well be ordinary year-to-year variation rather than a real teacher effect, because with eight classes some spread is expected by chance every year and one dip is exactly what randomness produces, so the gap should be weighed against that base rate before blaming the teacher. This lead is fecund because it predicts checkable consequences: a real teacher effect should persist across multiple years and subjects and show up in mid-year benchmarks, whereas chance variation should not repeat; the low class's incoming scores may already have been lower; and the gap may shrink to non-significance once class size and prior achievement are accounted for. I would test it by comparing this teacher's classes over several years, by checking whether the class started the year behind, and by running a simple significance check on the gap — concluding a real teacher problem only if the shortfall recurs and survives those controls.",
    explanation:
      "Declaring the teacher ineffective on a single year's dip neglects the base rate of chance variation across eight classes; top credit weighs the gap against that base rate and names multi-year and control tests, rather than either condemning the teacher or refusing to look.",
  },
];

export const section: SectionContent = {
  slug: "base-rates-priors",
  title: "Base Rates and Priors",
  weekNumber: 3,
  blurb:
    "The strength of an explanation depends not only on how well it fits the evidence but on how plausible it was going in. Weight each rival by its base rate — favor the common cause over the exotic one when the evidence is weak, but let strong, specific evidence override a low prior.",
  lectureTitle:
    "3.5 Base Rates and Priors: weighting an explanation by what was plausible going in",
  body: `# Base Rates and Priors

When two explanations both fit your data, the fit is only half the story. The other half is how plausible each was *before* you saw the data — its base rate, or prior. A clue that "matches" a rare disease still usually points to a common one, because the common one was vastly more likely to begin with. Constructive Critical Reasoning insists you combine both numbers: how *expected* the evidence was under each rival (its likelihood) and how *plausible* that rival was going in (its prior). Ignore either and you reason badly.

## Two numbers, not one

Every diagnosis multiplies a likelihood by a prior. A test result, a symptom, a coincidence — each is more or less expected under each candidate explanation, and each candidate started out more or less common. The strongest conclusion is the one that scores well on *both*: it fits the evidence and it wasn't a long shot to begin with. When you find yourself excited that the evidence "is consistent with" some dramatic cause, stop and ask how rare that cause is. Consistency is cheap; a vivid story can be consistent with the data and still be a thousand times less likely than the boring one.

## The vivid-rare trap

The classic error is base-rate neglect: leaping to the exotic explanation because it feels like a vivid match, while forgetting how rare it is. A positive screen for a one-in-a-thousand condition is usually a false alarm. A slow server is usually a full disk, not a nation-state hacker. A short cash drawer is usually a miscount, not theft. The mundane cause is mundane *because* it happens constantly — that frequency is evidence, and refusing to use it is not caution but a mistake.

## But don't let the prior tyrannize the evidence

The opposite error is just as real: clinging to a comfortable prior when the evidence has grown overwhelming. "She's always been reliable, so these five rapid foreign charges must be hers." "Our supplier never fails, so it must be our test rig." A strong prior is a starting weight, not a veto. When evidence is specific and piles up — three identical defects, four top scores across formats, transactions that contradict the cardholder's own location — it should override the prior. The skill is to update *proportionally*: shift a lot when the evidence is strong and specific, shift little when it's weak and generic.

## How to combine them in practice

Start with the high-base-rate explanation and test it first, because it's the cheapest path to being right most of the time. Escalate to the rare explanation only when the common one fails its test or when the evidence becomes specific enough to outweigh its rarity. Name the test that would move you in each direction: "If clearing the disk fixes it, mundane cause confirmed; if not, escalate." That is what separates disciplined base-rate reasoning from both panic and complacency.

## Why the dodge loses

"There are too many possibilities to say" earns zero because it refuses to use the base rate you already have — and you almost always have one. Throwing up your hands when a common cause is staring at you is not humility; it's neglecting free information.

## Overreach still loses

Committing to the rare cause on weak evidence is reckless, and so is declaring the common cause proven without testing it. The winning move names the higher-prior lead, runs the cheap test, and stays ready to flip when specific evidence earns the flip.

## In the real world

A worried patient gets a positive result on a home screen for a rare condition. The base-rate-neglect move is to assume the worst and start treatment. The disciplined move notes that with the condition rare and the test's false-positive rate high, most positives are false — so the lead is "probably a false alarm," and the test is a more specific confirmatory assay. If *that* comes back positive too, the evidence has now overridden the low prior, and commitment is warranted. Same numbers, two updates: weak evidence bows to the base rate, strong evidence overturns it.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
