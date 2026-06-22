import type { SectionContent, HomeworkItem } from "./types";

const mcq: HomeworkItem[] = [
  {
    itemType: "mc",
    prompt:
      "A town's health office gets fifteen reports that a deli's potato salad caused illness. Twelve of them quote the same viral tweet word-for-word; the other three come from a hospital lab that cultured a specific bacterium, an unrelated clinic across town that found the same bug, and the deli's own log showing its cooler failed overnight. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Fifteen separate complaints all point to the deli, so sheer volume settles that the potato salad is the source.",
        credit: 0,
      },
      {
        text: "The lab culture, the unrelated clinic, and the broken-cooler log are causally independent and converge on one cause, so the potato salad is very likely the source; weight those three over the twelve tweet-echoes, and confirm by matching the lab's strain to a cooler swab and checking whether eaters who never saw the tweet also fell ill.",
        credit: 1.0,
      },
      {
        text: "The potato salad is probably the culprit; we could collect more complaints next week to be sure.",
        credit: 0.6,
      },
      {
        text: "There seems to be some connection between the deli and the illnesses.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The lab culture, the unrelated clinic, and the broken-cooler log are causally independent and converge on one cause, so the potato salad is very likely the source; weight those three over the twelve tweet-echoes, and confirm by matching the lab's strain to a cooler swab and checking whether eaters who never saw the tweet also fell ill.",
    explanation:
      "Top credit recognizes that three causally disjoint sources agreeing multiplies credence, while twelve copies of one tweet are a single source repeated; the 'volume settles it' option commits the echo-chamber fallacy and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A bike maker weighs a brake recall. Hundreds of angry forum posts all link back to one reviewer's video. Separately, the warranty database shows a spike in brake-cable returns, a supplier's quality team flagged a bad batch of cable, and a metallurgy test found that batch's cable brittle. Which lead is strongest?",
    mcOptions: [
      {
        text: "The warranty spike, the supplier's batch flag, and the brittleness test arose independently yet agree, so the bad cable batch is very likely the cause; recall that lot and confirm by tracing failed brakes to the lot numbers and stress-testing cable from other batches as a control.",
        credit: 1.0,
      },
      {
        text: "Hundreds of forum posts can't all be wrong, so that alone proves the brakes are defective.",
        credit: 0,
      },
      {
        text: "The cable batch is probably bad; we could read more forum threads to confirm.",
        credit: 0.6,
      },
      {
        text: "It looks like the brakes might have an issue.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The warranty spike, the supplier's batch flag, and the brittleness test arose independently yet agree, so the bad cable batch is very likely the cause; recall that lot and confirm by tracing failed brakes to the lot numbers and stress-testing cable from other batches as a control.",
    explanation:
      "Three independent lines converging on one lot batch is strong; the forum posts all derive from one video, so their number adds nothing. 'Hundreds can't be wrong' treats one source's echoes as independent and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A lake's trout are dying. A county water sample shows high nitrate, a university team's separate sampling finds the same nitrate spike, a fish necropsy shows nitrate-poisoning damage, and the only upstream change this year was a new fertilizer operation. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Fish kills have so many possible causes that nothing can responsibly be concluded here.",
        credit: 0,
      },
      {
        text: "There appears to be a tie between the farm and the dying fish.",
        credit: 0.3,
      },
      {
        text: "Two independent water samplings, a necropsy, and the lone upstream change all point to fertilizer nitrate, so that is very likely the cause; confirm by testing nitrate at points above and below the operation and checking whether kills track its discharge schedule.",
        credit: 1.0,
      },
      {
        text: "Fertilizer nitrate is probably killing the fish; we could take another water sample to be sure.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Two independent water samplings, a necropsy, and the lone upstream change all point to fertilizer nitrate, so that is very likely the cause; confirm by testing nitrate at points above and below the operation and checking whether kills track its discharge schedule.",
    explanation:
      "Independent methods (two samplings, a necropsy, an exposure record) converging on nitrate multiply credence far past any single line; the 'too many possible causes' refusal commits to no lead and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "Archaeologists date a buried hearth three ways: radiocarbon on the charcoal, thermoluminescence on the fired clay, and the style of pottery shards beside it. All three land near 1200 CE. Which lead is strongest?",
    mcOptions: [
      {
        text: "Dating methods are notoriously imperfect, so we really can't say when the hearth was used.",
        credit: 0,
      },
      {
        text: "Three methods that fail in unrelated ways agree on roughly 1200 CE, so that date is very likely right; firm it up by dating a second charcoal sample blind and checking whether nearby sealed layers give consistent ages.",
        credit: 1.0,
      },
      {
        text: "The hearth is probably from around 1200 CE; we could run the radiocarbon test again to be sure.",
        credit: 0.6,
      },
      {
        text: "The hearth seems to be roughly medieval.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Three methods that fail in unrelated ways agree on roughly 1200 CE, so that date is very likely right; firm it up by dating a second charcoal sample blind and checking whether nearby sealed layers give consistent ages.",
    explanation:
      "Methods with unrelated error sources agreeing is the textbook case of independent corroboration multiplying confidence; the 'methods are imperfect, so we can't say' dodge ignores that their independence is exactly what makes the agreement strong.",
  },
  {
    itemType: "mc",
    prompt:
      "A web team hunts a checkout crash. Five bug tickets were filed, but four are duplicates auto-created from one user's single error report. The fifth is independent: a server log shows a null-payment exception, a database trace shows a missing customer record, and a load test reproduces the crash when the record is absent. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The server log, the database trace, and the reproducing load test independently converge on a missing customer record, so that is very likely the cause; fix the lookup and confirm the crash vanishes in the load test and that real crash timestamps line up with missing-record events.",
        credit: 1.0,
      },
      {
        text: "Five tickets means five users hit this, so the bug is clearly widespread and urgent.",
        credit: 0,
      },
      {
        text: "A missing record is probably the cause; we could wait for more tickets to confirm.",
        credit: 0.6,
      },
      {
        text: "Something about the checkout seems broken.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The server log, the database trace, and the reproducing load test independently converge on a missing customer record, so that is very likely the cause; fix the lookup and confirm the crash vanishes in the load test and that real crash timestamps line up with missing-record events.",
    explanation:
      "Three independent diagnostics agreeing nails the cause; the four duplicate tickets are one report counted four times. 'Five tickets means five users' mistakes duplicates for independent confirmation and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A basketball coach claims her new fast-break offense is working. The shot-tracking system shows more transition points, the opposing coaches' scouting notes (gathered separately) complain about her fast breaks, and an independent stats site ranks her team's pace top-five. Which lead is strongest?",
    mcOptions: [
      {
        text: "Basketball results swing on too many factors to credit any one offense.",
        credit: 0,
      },
      {
        text: "The fast break seems to be helping.",
        credit: 0.3,
      },
      {
        text: "Three independent sources—her tracking system, rival scouts, and an outside stats site—agree the fast break is producing points, so it is very likely working; confirm by checking whether her wins cluster in high-pace games and whether slowing the pace on purpose drops scoring.",
        credit: 1.0,
      },
      {
        text: "The offense is probably working; we could play more games and watch.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Three independent sources—her tracking system, rival scouts, and an outside stats site—agree the fast break is producing points, so it is very likely working; confirm by checking whether her wins cluster in high-pace games and whether slowing the pace on purpose drops scoring.",
    explanation:
      "Her own system, adversarial scouts, and a neutral site are causally disjoint, so their agreement multiplies credence; the 'too many factors' refusal opens no inquiry and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A marketer credits a radio ad for a sales jump. But the radio reach numbers, the 'how did you hear about us' survey, and the website referral data are all pulled from the same analytics dashboard the agency built and feeds. A separate point-of-sale spike in the ad's airing region is the only outside signal. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Three dashboard metrics plus a sales spike means four sources agree, so the radio ad's effect is proven beyond doubt.",
        credit: 0,
      },
      {
        text: "The three dashboard figures share one source, so they aren't independent; the region-specific POS spike is the one outside line, so treat the ad as a promising lead and earn real independence by checking whether sales rose only where the ad aired and not in matched non-aired regions.",
        credit: 1.0,
      },
      {
        text: "The radio ad probably helped; we could pull another report from the same dashboard.",
        credit: 0.6,
      },
      {
        text: "The ad seems to have done something for sales.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The three dashboard figures share one source, so they aren't independent; the region-specific POS spike is the one outside line, so treat the ad as a promising lead and earn real independence by checking whether sales rose only where the ad aired and not in matched non-aired regions.",
    explanation:
      "Top credit sees that three metrics from one dashboard are a single source dressed up as three, then engineers a genuinely independent regional control. Counting them as four agreeing sources is the fallacy the setup defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A new painkiller is suspected of causing dizziness. The randomized trial's adverse-event log, a national pharmacovigilance database fed by unrelated clinics, and a lab study showing the drug lowers blood pressure all point the same way. Which lead is strongest?",
    mcOptions: [
      {
        text: "Drug effects are too variable across people to draw a firm conclusion.",
        credit: 0,
      },
      {
        text: "The trial log, the independent reporting database, and the blood-pressure mechanism converge, so the drug very likely causes the dizziness; confirm by testing whether dizziness reports track dose and whether they coincide with measured pressure drops.",
        credit: 1.0,
      },
      {
        text: "The drug probably causes dizziness; we could enroll more patients in the trial.",
        credit: 0.6,
      },
      {
        text: "There seems to be a link between the drug and feeling dizzy.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The trial log, the independent reporting database, and the blood-pressure mechanism converge, so the drug very likely causes the dizziness; confirm by testing whether dizziness reports track dose and whether they coincide with measured pressure drops.",
    explanation:
      "A controlled trial, spontaneous real-world reports, and a plausible mechanism are independent lines; their agreement multiplies credence. The 'too variable to conclude' answer is the zero-credit refusal.",
  },
  {
    itemType: "mc",
    prompt:
      "A vineyard owner says one low corner suffers frost while the rest escapes. He cites ten neighbors who all 'heard it gets frost down there'—but every one of them got the idea from him at the same dinner. Independently, a logger recorded sub-zero readings only in that corner, the vines there leaf out later, and cold-air-drainage maps mark it a frost pocket. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The temperature logger, the delayed leaf-out, and the drainage map are independent and all single out the corner, so it is very likely a frost pocket; confirm by placing a second logger there for a season and checking whether covering the vines on cold nights prevents damage.",
        credit: 1.0,
      },
      {
        text: "Ten neighbors say the corner gets frost, so that consensus alone proves it.",
        credit: 0,
      },
      {
        text: "The corner probably gets frost; he could ask a few more neighbors.",
        credit: 0.6,
      },
      {
        text: "That corner seems frost-prone.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The temperature logger, the delayed leaf-out, and the drainage map are independent and all single out the corner, so it is very likely a frost pocket; confirm by placing a second logger there for a season and checking whether covering the vines on cold nights prevents damage.",
    explanation:
      "An instrument reading, a plant-phenology sign, and a physical map are causally disjoint, so their agreement is strong. The ten neighbors all trace to one dinner remark, so their 'consensus' is one source—counting it as proof earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A factory blames warped panels on a humid storeroom. Three measurements—a hygrometer, a moisture probe in the panels, and warp severity by storage location—all rise together. But a worker insists the warping must come from the cutting machine, even though panels warp before they ever reach the cutter. Which lead is strongest?",
    mcOptions: [
      {
        text: "The cutting machine is the real cause, since machines are the usual suspects for defects.",
        credit: 0,
      },
      {
        text: "Three independent measures—room humidity, panel moisture, and warp-by-location—converge on damp storage, and panels warp before reaching the cutter, so humidity is very likely the cause; confirm by drying one storage zone and seeing whether warping falls only there.",
        credit: 1.0,
      },
      {
        text: "Humidity is probably the cause; we could read the hygrometer more often.",
        credit: 0.6,
      },
      {
        text: "The damp room seems to be part of the problem.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Three independent measures—room humidity, panel moisture, and warp-by-location—converge on damp storage, and panels warp before reaching the cutter, so humidity is very likely the cause; confirm by drying one storage zone and seeing whether warping falls only there.",
    explanation:
      "Three disjoint measurements agreeing, plus timing that rules out the cutter, makes humidity strong. The cutting-machine answer is an overreach the data actively defeats—panels warp before they reach it—so it earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A gallery questions a painting's attribution. Pigment analysis shows a paint not invented until decades after the supposed artist died, the provenance paperwork has a forged stamp confirmed by an archivist, and an X-ray reveals a hidden underdrawing in a later style. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Art authentication is subjective, so no firm judgment is possible.",
        credit: 0,
      },
      {
        text: "The painting seems questionable.",
        credit: 0.3,
      },
      {
        text: "Pigment chemistry, document forensics, and the X-ray underdrawing are independent and all indicate a later hand, so the attribution is very likely wrong; confirm by dating the canvas fibers and checking whether the pigment appears in any securely dated work by the artist.",
        credit: 1.0,
      },
      {
        text: "The attribution is probably wrong; we could get a second opinion on the pigment.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Pigment chemistry, document forensics, and the X-ray underdrawing are independent and all indicate a later hand, so the attribution is very likely wrong; confirm by dating the canvas fibers and checking whether the pigment appears in any securely dated work by the artist.",
    explanation:
      "Chemistry, paperwork, and imaging fail in completely different ways, so their agreement multiplies credence; the 'authentication is subjective' refusal ignores that very independence and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A boutique loses stock and suspects a register clerk. The reported shortfall comes only from one manager's three emails about the same week. Independently, the security camera shows unscanned items leaving, the inventory audit finds exactly those SKUs missing, and the POS log shows voided sales on that clerk's shifts. Which lead is strongest?",
    mcOptions: [
      {
        text: "Three emails from the manager all flag the clerk, so that repetition is enough to act.",
        credit: 0,
      },
      {
        text: "The clerk seems to be involved in the losses.",
        credit: 0.3,
      },
      {
        text: "The camera footage, the audit, and the voided-sale log are independent and all implicate that clerk's shifts, so the clerk is very likely responsible; confirm by checking whether shortfalls vanish on shifts the clerk doesn't work and whether the voided items match the camera footage.",
        credit: 1.0,
      },
      {
        text: "The clerk is probably responsible; the manager could send a more detailed email.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The camera footage, the audit, and the voided-sale log are independent and all implicate that clerk's shifts, so the clerk is very likely responsible; confirm by checking whether shortfalls vanish on shifts the clerk doesn't work and whether the voided items match the camera footage.",
    explanation:
      "Footage, audit, and transaction logs are disjoint sources whose agreement is strong; the manager's three emails are one account repeated. Acting on that repetition is the echo fallacy and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A district pilots a phonics program and reports it raised reading scores. The 'evidence' is three glowing write-ups—but all three describe the very same flagship classroom. Separately, two other schools that adopted it independently also posted gains, and a state test (scored elsewhere) confirmed the rise. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Three write-ups praise the program, so it clearly works across the district.",
        credit: 0,
      },
      {
        text: "Two unrelated schools' gains plus an externally scored state test are independent and agree the program raised reading, so it very likely works; confirm by comparing adopting and non-adopting schools with similar students and watching whether gains persist a second year.",
        credit: 1.0,
      },
      {
        text: "The program probably works; we could write up the flagship classroom again in more detail.",
        credit: 0.6,
      },
      {
        text: "The phonics program seems to help reading.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Two unrelated schools' gains plus an externally scored state test are independent and agree the program raised reading, so it very likely works; confirm by comparing adopting and non-adopting schools with similar students and watching whether gains persist a second year.",
    explanation:
      "Two separate schools and an outside-scored test are independent lines; three reports of one classroom are a single case in triplicate. Treating that triplicate as district-wide proof is the zero-credit fallacy.",
  },
  {
    itemType: "mc",
    prompt:
      "A wildlife group investigates a sudden songbird decline in one valley. A necropsy finds pesticide residue, an independent water test shows the same pesticide in the stream, and a separate insect survey shows the birds' prey insects have crashed. Which lead is strongest?",
    mcOptions: [
      {
        text: "Wildlife declines have countless causes, so it's irresponsible to name one.",
        credit: 0,
      },
      {
        text: "The necropsy residue, the water test, and the collapsed insect prey are independent and all point to the pesticide, so it is very likely the driver; confirm by checking whether decline severity tracks distance from the sprayed fields and whether unsprayed valleys kept their birds.",
        credit: 1.0,
      },
      {
        text: "The pesticide is probably to blame; we could necropsy a few more birds.",
        credit: 0.6,
      },
      {
        text: "The pesticide seems connected to the bird losses.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The necropsy residue, the water test, and the collapsed insect prey are independent and all point to the pesticide, so it is very likely the driver; confirm by checking whether decline severity tracks distance from the sprayed fields and whether unsprayed valleys kept their birds.",
    explanation:
      "A direct toxicology finding, an environmental measurement, and a food-web signal are causally disjoint, so their convergence multiplies credence; 'countless causes, so name none' is the barren refusal that earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A bank's fraud team flags an account. One analyst's hunch was forwarded around until six people 'agreed,' but it all came from her single note. Independently, the velocity model flagged rapid transfers, a device-fingerprint check found a known-fraud device, and the merchant reported a stolen card. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Six people on the team agree it's fraud, so the consensus is enough to freeze the account.",
        credit: 0,
      },
      {
        text: "The account seems suspicious.",
        credit: 0.3,
      },
      {
        text: "The velocity model, the device fingerprint, and the merchant's stolen-card report are independent and all flag fraud, so it is very likely fraud; confirm by checking whether the flagged device touched other confirmed-fraud accounts and whether the transfers match known fraud patterns.",
        credit: 1.0,
      },
      {
        text: "It's probably fraud; the analyst could rewrite her note more clearly.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The velocity model, the device fingerprint, and the merchant's stolen-card report are independent and all flag fraud, so it is very likely fraud; confirm by checking whether the flagged device touched other confirmed-fraud accounts and whether the transfers match known fraud patterns.",
    explanation:
      "An automated model, a device check, and an outside merchant report are disjoint signals whose agreement is strong; six people relaying one analyst's note is a single source. Counting that as six-way consensus earns zero.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A coffee roaster suspects one supplier's beans are stale. The complaint volume comes mostly from one café owner posting in several groups, but separately a moisture meter reads the beans dry, a cupping panel scores them flat, and the roast-date stamps show the lot is months old. Which lead best follows?",
    mcOptions: [
      {
        text: "The same café owner posting in many groups proves the staleness, since the complaints are everywhere.",
        credit: 0,
      },
      {
        text: "The moisture reading, the blind cupping score, and the old roast dates are independent and agree the lot is stale, so it very likely is; confirm by cupping a fresh lot from the same supplier blind and checking whether moisture tracks roast date across lots.",
        credit: 1.0,
      },
      {
        text: "The beans are probably stale; the café owner could post in more groups.",
        credit: 0.6,
      },
      {
        text: "The beans seem past their prime.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'genuinely independent corroboration' lead from the rival 'it's really just one café owner's complaint amplified,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: run a blind cupping and moisture check on a fresh lot from the same supplier alongside the suspect lot, with no one knowing which is which—if the suspect lot scores flat and dry only when it's genuinely old, the independent measures hold up. My lead is refuted if the fresh lot scores just as flat and dry, meaning the meter and panel aren't really tracking staleness and the signal collapses to the one owner's complaint.",
      yieldAnchors: [
        "Moisture meter reads the beans dry",
        "Blind cupping panel scores them flat",
        "Roast-date stamps show a months-old lot",
      ],
      riskAnchors: [
        "A fresh lot cups well and reads moist under the same blind test",
        "Moisture tracks roast date across multiple lots",
        "Staleness scores fall when fresh beans are substituted",
      ],
      defeatedBy: [
        "One owner's reposts count as many independent complaints",
        "Roast date is unrelated to the cupping and moisture readings",
      ],
    },
    correctAnswer:
      "The moisture reading, the blind cupping score, and the old roast dates are independent and agree the lot is stale, so it very likely is; confirm by cupping a fresh lot from the same supplier blind and checking whether moisture tracks roast date across lots.",
    explanation:
      "Three disjoint measures agreeing multiply credence, while one owner's reposts are a single source; the cheap blind test names the result that would refute the lead. 'Complaints are everywhere' is the echo fallacy.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A homeowner thinks a slow leak is rotting a wall. The plumber, the home inspector, and the insurance adjuster all wrote it up—but each just copied the first plumber's report. Independently, a moisture meter spikes inside the wall, a thermal camera shows a cold wet patch, and the water bill jumped. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The moisture meter, the thermal image, and the higher water bill are independent and all point to a leak in that wall, so there very likely is one; confirm by shutting the main and watching whether the meter and bill stop climbing.",
        credit: 1.0,
      },
      {
        text: "Three professionals signed off on the leak, so three experts agreeing settles it.",
        credit: 0,
      },
      {
        text: "There's probably a leak; we could get the plumber's report reviewed again.",
        credit: 0.6,
      },
      {
        text: "The wall seems to have a moisture problem.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'three independent instruments agree' lead from the rival 'three professionals merely echoed one plumber's report,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: shut off the water main and watch the moisture meter and water bill—if both stop rising, the instruments are tracking a real, active leak independent of anyone's paperwork. My lead is refuted if the meter keeps climbing with the water off, meaning the moisture has another source and the 'leak' rests only on the copied reports.",
      yieldAnchors: [
        "Moisture meter spikes inside the wall",
        "Thermal camera shows a cold wet patch",
        "The water bill jumped",
      ],
      riskAnchors: [
        "Shutting the main halts the rising meter and bill",
        "The wet patch dries after the leak is fixed",
        "Moisture readings fall as the repaired wall dries",
      ],
      defeatedBy: [
        "Three copied reports count as three expert opinions",
        "The moisture is unrelated to any plumbing leak",
      ],
    },
    correctAnswer:
      "The moisture meter, the thermal image, and the higher water bill are independent and all point to a leak in that wall, so there very likely is one; confirm by shutting the main and watching whether the meter and bill stop climbing.",
    explanation:
      "Three instruments with unrelated failure modes agreeing is strong; three reports copied from one plumber are one source. The shut-off test would cleanly refute the leak, so the lead pays its rent.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A startup believes a feature drove a usage spike. The growth dashboard, the weekly email digest, and the investor deck all show the spike—but every chart is generated from the same events table the same way. Separately, a server log records the feature being invoked and support tickets mention it by name. Which lead is strongest?",
    mcOptions: [
      {
        text: "Four artifacts show the spike, so four independent sources confirm the feature drove it.",
        credit: 0,
      },
      {
        text: "The spike seems tied to the new feature.",
        credit: 0.3,
      },
      {
        text: "The dashboard, digest, and deck all derive from one events table, so they aren't independent; the server log and the support mentions are the genuine outside lines, so treat the feature as a strong lead and earn independence by checking whether usage rose only for users who actually invoked it.",
        credit: 1.0,
      },
      {
        text: "The feature probably drove the spike; we could regenerate the dashboard chart.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'find a truly independent line' lead from the rival 'the dashboard, digest, and deck already confirm it three times,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: split users into those who invoked the feature and those who didn't (from the server log, not the shared dashboard) and compare their usage change—if the feature drives the spike, only invokers should jump. My lead is refuted if non-invokers spiked just as much, showing the dashboard's three views were one signal and the feature wasn't the cause.",
      yieldAnchors: [
        "The dashboard, digest, and deck all draw from one events table",
        "A server log records the feature being invoked",
        "Support tickets mention the feature by name",
      ],
      riskAnchors: [
        "Only users who invoked the feature show the usage jump",
        "Non-invokers show no spike over the same window",
        "Usage falls back when the feature is briefly disabled",
      ],
      defeatedBy: [
        "Three views of one events table count as three confirmations",
        "The feature is unrelated to the usage spike",
      ],
    },
    correctAnswer:
      "The dashboard, digest, and deck all derive from one events table, so they aren't independent; the server log and the support mentions are the genuine outside lines, so treat the feature as a strong lead and earn independence by checking whether usage rose only for users who actually invoked it.",
    explanation:
      "Top credit unmasks three views of one table as a single source and engineers a real independent comparison; calling the three artifacts independent confirmation is the fallacy the scenario defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A hiker claims a trail bridge is unsafe. Several online warnings all trace back to one old blog post. Independently, a ranger's inspection logged rotted beams, a load test showed excess flex, and a recent photo shows a cracked support. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The trail bridge seems risky.",
        credit: 0.3,
      },
      {
        text: "The ranger's rot log, the load-test flex, and the cracked-support photo are independent and all flag the bridge, so it is very likely unsafe; confirm by re-testing flex after a wet spell and checking whether the crack widens under load.",
        credit: 1.0,
      },
      {
        text: "Many websites warn about the bridge, so the widespread warnings prove it's unsafe.",
        credit: 0,
      },
      {
        text: "The bridge is probably unsafe; we could find more blog posts about it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'independent inspections agree' lead from the rival 'the warnings are just one old blog post recycled,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: run a fresh load test and watch the cracked support under weight—if real beams flex and the crack widens, the inspection findings stand on their own regardless of any blog. My lead is refuted if the bridge holds firm with no flex or crack movement, meaning the danger claim collapses back to the single recycled post.",
      yieldAnchors: [
        "Ranger inspection logged rotted beams",
        "Load test showed excess flex",
        "A recent photo shows a cracked support",
      ],
      riskAnchors: [
        "A fresh load test reproduces the excess flex",
        "The crack widens measurably under load",
        "Flex worsens after a wet spell as rot would predict",
      ],
      defeatedBy: [
        "Many sites recycling one blog post count as many warnings",
        "The rot, flex, and crack are unrelated to bridge safety",
      ],
    },
    correctAnswer:
      "The ranger's rot log, the load-test flex, and the cracked-support photo are independent and all flag the bridge, so it is very likely unsafe; confirm by re-testing flex after a wet spell and checking whether the crack widens under load.",
    explanation:
      "Three physical findings with unrelated origins agreeing is strong; many sites recycling one post are a single source. The load re-test names the result that would refute the danger claim.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A teacher suspects a student plagiarized an essay. A plagiarism scanner flags matched passages, the writing style abruptly shifts mid-essay, and the document's edit history shows a large block pasted in at once. Which lead is strongest?",
    mcOptions: [
      {
        text: "Catching plagiarism is too subjective to claim confidently.",
        credit: 0,
      },
      {
        text: "The essay seems not entirely the student's own.",
        credit: 0.3,
      },
      {
        text: "The scanner match, the mid-essay style shift, and the paste in the edit history are independent and converge, so the passage is very likely copied; confirm by asking the student to explain the pasted section's argument in person and checking whether the source predates the assignment.",
        credit: 1.0,
      },
      {
        text: "It's probably plagiarized; we could run the scanner a second time.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'three independent signals converge' lead from the rival 'the scanner just over-flags common phrases,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: ask the student to explain, in person and in their own words, the argument and sources of the suspect passage—genuine authorship survives that, copied text usually doesn't, and this is independent of the scanner. My lead is refuted if the student fluently reconstructs the passage's reasoning and the 'matched' source actually postdates their draft, leaving only over-eager scanner hits.",
      yieldAnchors: [
        "Plagiarism scanner flags matched passages",
        "Writing style shifts abruptly mid-essay",
        "Edit history shows a large block pasted at once",
      ],
      riskAnchors: [
        "The student cannot explain the pasted passage in person",
        "The matched source predates the assignment",
        "Other students' essays don't trip the same scanner matches",
      ],
      defeatedBy: [
        "The scanner over-flags common phrases on its own",
        "The style shift and paste are unrelated to authorship",
      ],
    },
    correctAnswer:
      "The scanner match, the mid-essay style shift, and the paste in the edit history are independent and converge, so the passage is very likely copied; confirm by asking the student to explain the pasted section's argument in person and checking whether the source predates the assignment.",
    explanation:
      "A text-matching tool, a stylistic signal, and a forensic edit trail fail in unrelated ways, so their agreement multiplies credence; 'too subjective to claim' is the refusal that earns zero.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An airline thinks a gate's delays come from slow baggage handling. The ground crew's own logs, the supervisor's summary, and the team's shift report all say so—but the supervisor and report just restate the crew logs. Independently, the bag-belt sensors show long load times, the jet bridge camera shows late carts, and on-time data dips only at that gate. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The belt sensors, the gate camera, and the gate-specific on-time dip are independent and all point to slow bag handling, so it is very likely the cause; confirm by adding a handler on that gate and checking whether its delays alone improve.",
        credit: 1.0,
      },
      {
        text: "Three crew documents agree, so that's enough to blame baggage handling.",
        credit: 0,
      },
      {
        text: "Baggage is probably the cause; the supervisor could rewrite the summary.",
        credit: 0.6,
      },
      {
        text: "Bag handling seems to slow that gate.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'independent operational data agree' lead from the rival 'three crew documents that just restate each other,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: add one baggage handler to that gate for a week and watch its on-time rate against the unchanged gates—if slow handling is the cause, only that gate should improve, independent of any paperwork. My lead is refuted if delays persist at the gate despite the extra handler, meaning the bottleneck is elsewhere and the three crew documents were one account in triplicate.",
      yieldAnchors: [
        "Bag-belt sensors show long load times",
        "Jet bridge camera shows late carts",
        "On-time data dips only at that gate",
      ],
      riskAnchors: [
        "Adding a handler improves only that gate's on-time rate",
        "Load-time sensor readings fall with the extra handler",
        "Camera shows carts arriving on time after the change",
      ],
      defeatedBy: [
        "Three restated crew documents count as three sources",
        "Bag handling is unrelated to the gate's delays",
      ],
    },
    correctAnswer:
      "The belt sensors, the gate camera, and the gate-specific on-time dip are independent and all point to slow bag handling, so it is very likely the cause; confirm by adding a handler on that gate and checking whether its delays alone improve.",
    explanation:
      "Sensors, camera, and gate-level performance are disjoint, so their agreement is strong; the supervisor summary and shift report merely echo the crew logs. The added-handler test would cleanly refute the lead.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A brewery thinks a batch went sour from a contaminated tank. A pH meter reads low, a taste panel calls it sour, and a lab culture grows lactic bacteria—all three from that one tank. Which lead is strongest?",
    mcOptions: [
      {
        text: "Brewing is finicky, so it's hard to say what went wrong.",
        credit: 0,
      },
      {
        text: "The low pH, the panel's sour verdict, and the lactic-bacteria culture are independent and converge on contamination, so the tank very likely soured the batch; confirm by swabbing the tank for the same strain and checking whether the next batch in a cleaned tank stays sound.",
        credit: 1.0,
      },
      {
        text: "The tank is probably contaminated; we could taste the batch again.",
        credit: 0.6,
      },
      {
        text: "The batch seems off.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'contaminated tank' lead from the rival 'the souring came from the ingredients, not the tank,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: swab the suspect tank and culture it—if the same lactic strain that soured the beer is living on the tank, the tank is the source independent of the ingredients. My lead is refuted if the tank swab is clean yet a fresh batch from the same ingredients in a different vessel still sours, pointing to the ingredients instead.",
      yieldAnchors: [
        "pH meter reads low",
        "Taste panel calls the batch sour",
        "Lab culture grows lactic bacteria",
      ],
      riskAnchors: [
        "A tank swab grows the same lactic strain",
        "A fresh batch in a cleaned tank stays sound",
        "Other tanks' batches show normal pH",
      ],
      defeatedBy: [
        "The souring came from the ingredients regardless of the tank",
        "The pH, taste, and culture results are unrelated to each other",
      ],
    },
    correctAnswer:
      "The low pH, the panel's sour verdict, and the lactic-bacteria culture are independent and converge on contamination, so the tank very likely soured the batch; confirm by swabbing the tank for the same strain and checking whether the next batch in a cleaned tank stays sound.",
    explanation:
      "A chemical reading, a sensory panel, and a microbiological culture fail in unrelated ways, so their agreement multiplies credence; 'brewing is finicky' is the zero-credit refusal.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A city blames a junction's crashes on a confusing new sign. The 911 transcripts, the police report, and the news article all say so—but the report and article both quote the 911 calls. Independently, the crash diagrams show a consistent wrong-turn pattern, the traffic camera catches drivers braking late at the sign, and complaints to the DMV name the sign. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Three accounts all blame the sign, so that agreement is enough to act.",
        credit: 0,
      },
      {
        text: "The sign seems to be causing trouble.",
        credit: 0.3,
      },
      {
        text: "The crash diagrams, the camera footage, and the DMV complaints are independent and all implicate the sign, so it is very likely the cause; confirm by temporarily covering or replacing the sign and watching whether the wrong-turn crashes drop.",
        credit: 1.0,
      },
      {
        text: "The sign is probably the cause; we could re-read the 911 transcripts.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'independent evidence agrees' lead from the rival 'the report and article just quote the same 911 calls,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: cover or swap the confusing sign for a few weeks and track the wrong-turn crash rate at that junction—if the sign causes them, the rate should fall, independent of any 911-based reporting. My lead is refuted if crashes continue at the same rate with the sign changed, meaning the cause lies elsewhere and the three accounts were one source.",
      yieldAnchors: [
        "Crash diagrams show a consistent wrong-turn pattern",
        "Traffic camera catches late braking at the sign",
        "DMV complaints name the sign",
      ],
      riskAnchors: [
        "Covering or replacing the sign lowers the crash rate",
        "Wrong-turn diagrams stop appearing after the change",
        "Camera shows drivers no longer braking late",
      ],
      defeatedBy: [
        "A report and article quoting one 911 set count as independent sources",
        "The sign is unrelated to the crash pattern",
      ],
    },
    correctAnswer:
      "The crash diagrams, the camera footage, and the DMV complaints are independent and all implicate the sign, so it is very likely the cause; confirm by temporarily covering or replacing the sign and watching whether the wrong-turn crashes drop.",
    explanation:
      "Diagrams, camera, and a separate complaint stream are disjoint, so their agreement is strong; the report and article merely re-quote the 911 calls. The cover-the-sign test would cleanly refute the lead.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A museum debates whether a meteorite claim is real. A magnetometer shows strong magnetism, a density test matches iron-nickel, and a cut face reveals the crosshatched crystal pattern meteorites form over eons. Which lead is strongest?",
    mcOptions: [
      {
        text: "Rocks are easy to misidentify, so we can't really say it's a meteorite.",
        credit: 0,
      },
      {
        text: "The magnetism, the iron-nickel density, and the crystal pattern are independent and all fit a meteorite, so it very likely is one; confirm by testing for the trace nickel signature and checking whether a known terrestrial rock could fake all three.",
        credit: 1.0,
      },
      {
        text: "It's probably a meteorite; we could run the magnetometer again.",
        credit: 0.6,
      },
      {
        text: "The rock seems unusual.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'three independent properties converge' lead from the rival 'an ordinary iron-rich rock mimicking a meteorite,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: assay the cut face for the trace nickel concentration typical of meteoritic iron, since terrestrial iron rocks rarely match it and this is independent of magnetism or density. My lead is refuted if the nickel level falls in the ordinary terrestrial range, meaning a common iron-rich rock could produce the magnetism and density without being a meteorite.",
      yieldAnchors: [
        "Magnetometer shows strong magnetism",
        "Density test matches iron-nickel",
        "Cut face reveals the crosshatched crystal pattern",
      ],
      riskAnchors: [
        "Trace nickel matches the meteoritic range",
        "No common terrestrial rock reproduces all three properties",
        "The crystal pattern survives closer microscopy",
      ],
      defeatedBy: [
        "An ordinary iron-rich rock can fake all three properties",
        "The three tests share a hidden common error",
      ],
    },
    correctAnswer:
      "The magnetism, the iron-nickel density, and the crystal pattern are independent and all fit a meteorite, so it very likely is one; confirm by testing for the trace nickel signature and checking whether a known terrestrial rock could fake all three.",
    explanation:
      "Magnetism, density, and crystal structure are unrelated properties, so their joint fit multiplies credence; 'easy to misidentify, so we can't say' is the refusal that earns zero.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A small online shop sees a sudden surge in five-star reviews and is thrilled. On closer look, most of the new reviews were posted within the same hour, from accounts created the same week, using oddly similar phrasing. Meanwhile, genuine signals—repeat-purchase rate, support-ticket sentiment, and time-on-site—have not moved at all. In one paragraph, propose the strongest lead for what's really happening and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the review surge is not independent corroboration of a real quality jump but a single coordinated source—likely bought or bot reviews—because the reviews cluster in one hour, come from freshly minted accounts, and share phrasing, while every causally independent quality signal stayed flat. This is the constructive read because it spawns checkable consequences: if the praise were genuine, at least one disjoint measure (repeat purchases, support sentiment, time-on-site) should have risen too; the suspect accounts should show no purchase history tied to the product; and their writing should cluster on shared templates. I would test it by checking whether the new reviewers actually bought the item, by comparing the timing and IP/account-age fingerprints of the surge against the store's normal review trickle, and by watching whether any independent metric moves in the following weeks—if all stay flat, the surge is one fake source multiplied, not many real customers.",
      yieldAnchors: [
        "New reviews cluster within the same hour",
        "Accounts were created the same week with similar phrasing",
        "Repeat-purchase rate, support sentiment, and time-on-site are flat",
      ],
      riskAnchors: [
        "The suspect reviewers have no matching purchase history",
        "Account-age and timing fingerprints differ sharply from normal reviews",
        "No independent quality metric moves in the following weeks",
      ],
      defeatedBy: [
        "A flood of same-source reviews proves a real quality jump",
        "More reviews always means more independent customers",
        "Nothing can be judged until even more reviews arrive",
      ],
    },
    correctAnswer:
      "The strongest lead is that the review surge is not independent corroboration of a real quality jump but a single coordinated source—likely bought or bot reviews—because the reviews cluster in one hour, come from freshly minted accounts, and share phrasing, while every causally independent quality signal stayed flat. This is the constructive read because it spawns checkable consequences: if the praise were genuine, at least one disjoint measure (repeat purchases, support sentiment, time-on-site) should have risen too; the suspect accounts should show no purchase history tied to the product; and their writing should cluster on shared templates. I would test it by checking whether the new reviewers actually bought the item, by comparing the timing and IP/account-age fingerprints of the surge against the store's normal review trickle, and by watching whether any independent metric moves in the following weeks—if all stay flat, the surge is one fake source multiplied, not many real customers.",
    explanation:
      "Under CCR, treating one coordinated source as many independent endorsements is the failure mode, and 'wait for more reviews' commits to nothing; top credit goes to the lead that distinguishes a single multiplied source from genuine independent signals and names tests that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A regional power utility is told a particular substation is overloading. The claim is supported by an operator's note, a manager's email, and a maintenance ticket—but the email and ticket both just forward the operator's note. Separately, the substation's load meters read near capacity at peak, thermal cameras show the transformers running hot, and customers on that line report dimming lights at dinnertime. In one paragraph, propose the strongest lead and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the substation genuinely overloads at peak demand, because three causally independent lines—the load meters, the thermal cameras, and the customer-reported dimming—all converge on it, whereas the operator note, email, and ticket are one account forwarded three times and add nothing. This read is constructive because it predicts checkable consequences: the meter peaks, transformer temperatures, and dimming reports should coincide in time at the same dinnertime window; shifting some load to a neighboring substation should cool the transformers and end the dimming; and the dimming should be confined to customers on that line. I would test it by overlaying the meter, thermal, and customer-complaint timestamps to confirm they line up independently, by temporarily rerouting part of the load and watching whether temperatures and complaints both fall, and by checking that adjacent-line customers report no dimming—if all three independent signals track together and respond to load shedding, the overload is real, not a single echoed note.",
      yieldAnchors: [
        "Load meters read near capacity at peak",
        "Thermal cameras show transformers running hot",
        "Customers on that line report dimming at dinnertime",
      ],
      riskAnchors: [
        "Meter peaks, transformer heat, and dimming coincide in time",
        "Shedding load cools the transformers and ends the dimming",
        "Only customers on that line report dimming",
      ],
      defeatedBy: [
        "One operator note forwarded three times counts as three sources",
        "The dimming, heat, and meter readings are unrelated coincidences",
        "Overloading can never be confirmed without shutting the grid down",
      ],
    },
    correctAnswer:
      "The strongest lead is that the substation genuinely overloads at peak demand, because three causally independent lines—the load meters, the thermal cameras, and the customer-reported dimming—all converge on it, whereas the operator note, email, and ticket are one account forwarded three times and add nothing. This read is constructive because it predicts checkable consequences: the meter peaks, transformer temperatures, and dimming reports should coincide in time at the same dinnertime window; shifting some load to a neighboring substation should cool the transformers and end the dimming; and the dimming should be confined to customers on that line. I would test it by overlaying the meter, thermal, and customer-complaint timestamps to confirm they line up independently, by temporarily rerouting part of the load and watching whether temperatures and complaints both fall, and by checking that adjacent-line customers report no dimming—if all three independent signals track together and respond to load shedding, the overload is real, not a single echoed note.",
    explanation:
      "CCR rewards seeing that three forwarded copies are one source while three disjoint instruments agreeing multiply credence; the load-shedding test names a clean refutation, and the 'can't confirm without shutting the grid down' refusal earns near-zero.",
  },
  {
    itemType: "written",
    prompt:
      "A field biologist concludes that a wetland's frog population is recovering. Her evidence: her own spring call-survey counts are up, a volunteer group's separate transect walks found more frogs, and automated acoustic recorders logged more calling nights. A skeptic objects that 'three counts could all be flukes.' In one paragraph, propose the strongest lead and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the frog population really is recovering, because three methods with completely different error sources—human call surveys, volunteer transect walks, and automated acoustic recorders—independently agree, and it is implausible that unrelated flukes would all err upward in the same season. This read is constructive because it makes checkable predictions: the recovery should show up in a fourth independent measure such as egg-mass counts; it should persist across a second season rather than vanish; and the rise should be largest where habitat was restored. I would test it by adding an egg-mass or tadpole survey as a fresh independent line, by repeating all the counts next spring to see whether the gain holds, and by comparing restored versus untouched patches—if the independent lines keep converging and a new method agrees, the recovery is real, not a coincidence of three flukes.",
      yieldAnchors: [
        "Call-survey counts are up",
        "Volunteer transect walks found more frogs",
        "Acoustic recorders logged more calling nights",
      ],
      riskAnchors: [
        "An independent egg-mass count also shows a rise",
        "The gain persists into a second season",
        "Recovery is largest where habitat was restored",
      ],
      defeatedBy: [
        "Three independent methods could all be flukes at once",
        "Agreement across disjoint methods means nothing",
        "Population trends can never be known from surveys",
      ],
    },
    correctAnswer:
      "The strongest lead is that the frog population really is recovering, because three methods with completely different error sources—human call surveys, volunteer transect walks, and automated acoustic recorders—independently agree, and it is implausible that unrelated flukes would all err upward in the same season. This read is constructive because it makes checkable predictions: the recovery should show up in a fourth independent measure such as egg-mass counts; it should persist across a second season rather than vanish; and the rise should be largest where habitat was restored. I would test it by adding an egg-mass or tadpole survey as a fresh independent line, by repeating all the counts next spring to see whether the gain holds, and by comparing restored versus untouched patches—if the independent lines keep converging and a new method agrees, the recovery is real, not a coincidence of three flukes.",
    explanation:
      "The 'three counts could all be flukes' objection ignores that independent error sources make simultaneous same-direction flukes very unlikely; CCR gives top credit to committing to the recovery while adding a fresh independent line that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A product manager argues that a price increase did NOT hurt sales, citing three charts from the company's BI tool that all show steady revenue. A colleague points out the three charts are built from the same revenue table, just sliced differently. The only outside data are a competitor's flat traffic estimate and a customer-survey firm's churn report (both purchased separately). In one paragraph, propose the strongest lead and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the three BI charts are one source in three outfits and cannot independently confirm anything, so the real test of whether the price rise hurt sales rests on the two genuinely outside lines—the competitor traffic estimate and the third-party churn report—plus a clean internal comparison. This read is constructive because it spawns checkable consequences: if the increase were harmless, churn from the outside survey firm should be flat after the change, the competitor's relative traffic should not have climbed at our expense, and customers who faced the new price should retain as well as a held-back control still on the old price. I would test it by running a holdout where some customers keep the old price and comparing their retention and spend, by checking whether the independent churn report ticks up only among price-exposed segments, and by watching the competitor estimate for a shift—rather than re-slicing the same revenue table a fourth way, which would add no independence.",
      yieldAnchors: [
        "Three BI charts all come from the same revenue table",
        "A competitor's traffic estimate is flat",
        "A third-party churn report was purchased separately",
      ],
      riskAnchors: [
        "A price holdout group retains and spends like the price-exposed group",
        "The independent churn report rises only among price-exposed customers",
        "The competitor's relative traffic shifts after the change",
      ],
      defeatedBy: [
        "Three slices of one table count as three independent confirmations",
        "Re-slicing the same data again adds new evidence",
        "Sales impact can't be judged at all here",
      ],
    },
    correctAnswer:
      "The strongest lead is that the three BI charts are one source in three outfits and cannot independently confirm anything, so the real test of whether the price rise hurt sales rests on the two genuinely outside lines—the competitor traffic estimate and the third-party churn report—plus a clean internal comparison. This read is constructive because it spawns checkable consequences: if the increase were harmless, churn from the outside survey firm should be flat after the change, the competitor's relative traffic should not have climbed at our expense, and customers who faced the new price should retain as well as a held-back control still on the old price. I would test it by running a holdout where some customers keep the old price and comparing their retention and spend, by checking whether the independent churn report ticks up only among price-exposed segments, and by watching the competitor estimate for a shift—rather than re-slicing the same revenue table a fourth way, which would add no independence.",
    explanation:
      "CCR penalizes mistaking three slices of one table for independent confirmation; top credit goes to identifying the genuinely disjoint lines and engineering a price holdout that could cleanly refute the 'no harm' claim.",
  },
  {
    itemType: "written",
    prompt:
      "A homeowner is convinced raccoons are raiding the attic. The signal: scratching sounds at night, droppings in the insulation, and chewed wiring. A pest-control salesman insists it 'must be' raccoons and quotes a big removal job. In one paragraph, propose the strongest lead for what's in the attic and describe how you would test it using independent lines of evidence.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that a specific animal is living in the attic and that its identity can be pinned by gathering causally independent evidence rather than trusting the salesman's say-so, because the scratching, droppings, and chewed wiring are real but each is individually ambiguous between raccoons, squirrels, and rats. This read is constructive because each clue points to a checkable discriminator: dropping size and shape identify the species under a guide; the timing and pitch of the sounds separate a heavy nocturnal raccoon from lighter daytime squirrels; and entry-hole diameter and gnaw marks fit some animals and not others. I would test it by setting a motion camera at the suspected entry to get direct independent footage, by measuring the droppings and entry hole against a species key, and by noting when the noises occur—if the camera, the dropping morphology, and the activity timing all converge on one species, that identification is far stronger than the salesman's single confident assertion, and it tells me exactly which exclusion method to buy.",
      yieldAnchors: [
        "Scratching sounds at night",
        "Droppings in the insulation",
        "Chewed wiring in the attic",
      ],
      riskAnchors: [
        "A motion camera captures the species directly",
        "Dropping size and entry-hole diameter match one species key",
        "Activity timing fits the identified animal's habits",
      ],
      defeatedBy: [
        "The salesman's confident say-so settles the species",
        "Any single clue alone identifies the animal",
        "We can't know what's up there without tearing out the ceiling",
      ],
    },
    correctAnswer:
      "The strongest lead is that a specific animal is living in the attic and that its identity can be pinned by gathering causally independent evidence rather than trusting the salesman's say-so, because the scratching, droppings, and chewed wiring are real but each is individually ambiguous between raccoons, squirrels, and rats. This read is constructive because each clue points to a checkable discriminator: dropping size and shape identify the species under a guide; the timing and pitch of the sounds separate a heavy nocturnal raccoon from lighter daytime squirrels; and entry-hole diameter and gnaw marks fit some animals and not others. I would test it by setting a motion camera at the suspected entry to get direct independent footage, by measuring the droppings and entry hole against a species key, and by noting when the noises occur—if the camera, the dropping morphology, and the activity timing all converge on one species, that identification is far stronger than the salesman's single confident assertion, and it tells me exactly which exclusion method to buy.",
    explanation:
      "CCR rewards replacing one interested party's confident assertion with several independent discriminators that converge on a species; the 'salesman's say-so settles it' and 'can't know without tearing out the ceiling' options earn near-zero.",
  },
];

export const section: SectionContent = {
  slug: "independent-support",
  title: "Independent Lines of Support",
  weekNumber: 2,
  blurb:
    "Agreement from causally independent sources multiplies your credence far more than the same source repeated. Learn to tell genuine convergence from a single voice echoed many times—and to engineer the disjoint check that would settle a question.",
  lectureTitle:
    "2.6 Independent Lines of Support: why convergence from disjoint sources multiplies credence",
  body: `# Independent Lines of Support

When several pieces of evidence point the same way, how much should that move you? Reflexive caution counts heads and stops there: "lots of sources agree, so it must be true," or, just as lazily, "you can never trust agreement." Constructive Critical Reasoning asks a sharper question first: *are these sources actually independent?* Agreement among causally disjoint lines—measures that would fail in unrelated ways—multiplies your credence. Agreement that is really one voice repeated adds almost nothing.

## Independence is what does the work

Two error-prone methods that share no common failure mode are powerful together precisely because, for both to err in the same direction by chance, two unrelated accidents would have to coincide. A radiocarbon date and a pottery style agreeing on 1200 CE is strong: the ways carbon dating goes wrong have nothing to do with the ways ceramic typology goes wrong. The strength lives in the *disjointness*, not the count. Three thermometers built on the same chip agreeing tells you the chip is consistent, not that the temperature is right.

## One source wearing many hats

The commonest mistake is mistaking copies for corroboration. Twelve tweets quoting one viral post are one source. A manager's email and a maintenance ticket that both forward the operator's note are one source. Three dashboard charts sliced from the same table are one source. Before you let agreement raise your confidence, trace each line back to its origin and ask: *would this have said the same thing if the others were wrong?* If the answer is no—because they all drink from the same well—their number is an illusion.

## Engineering independence

You don't have to wait for disjoint evidence to arrive; you can go get it. Faced with a promising-but-correlated body of evidence, ask what check would fail for *different reasons* than the ones you already have. If your signals are all self-reported, add an instrument reading. If they're all from your own system, add an outside or adversarial source. If they all rest on one dataset, run a controlled comparison that generates fresh data. The best next test is the one whose failure mode is unrelated to everything you already believe.

## Why the head-count dodge loses

"Hundreds of posts can't be wrong" and "lots of experts agree" earn zero when the hundreds and the experts trace to a single origin. Counting echoes as votes is a fallacy, and it is a *constructive* failure too: it stops you from seeking the one genuinely independent check that would actually settle the matter. The cautious twin—"agreement could always be coincidence, so conclude nothing"—is equally barren; it ignores that independent agreement makes coincidence wildly improbable.

## Overreach still loses

Independence can be faked in the other direction. Sources that look different may share a hidden common cause—different analysts all using the same flawed instrument, or "separate" reports secretly seeded by one rumor. Convergence only multiplies credence once you have actually verified the lines don't share an origin. Claiming strong support from "independent" sources you haven't checked for a common root is its own overreach.

## In the real world

A health office gets fifteen illness complaints about a deli. Twelve quote the same tweet; three are a lab culture, an unrelated clinic, and a broken-cooler log. The head-counter says "fifteen reports settle it." The constructive reasoner sees one tweet echoed twelve times beside three causally disjoint lines that converge—and weights those three, then confirms by matching the lab's strain to a cooler swab. Same data, far better inference: not because there was more of it, but because the reasoner knew which agreement was real.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
