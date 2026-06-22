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
      "A forecaster's new storm model made two calls for Tuesday: that it would rain (every other service also forecast rain) and that a brief hailstorm would strike one specific town at 3 p.m. (no other service predicted hail). Both happened. Which confirmation better supports the model?",
    mcOptions: [
      {
        text: "The hail call is the telling confirmation because almost nothing but this model expected it; check whether it keeps flagging rare events rivals miss, whether its hail-timing holds across other towns, and whether disabling its key humidity variable destroys the hail skill while leaving the rain call intact.",
        credit: 1.0,
      },
      {
        text: "The hail call counts more since it was unusual; we could see whether the model calls hail again next storm.",
        credit: 0.6,
      },
      {
        text: "The hail prediction feels more impressive, so it probably matters more.",
        credit: 0.3,
      },
      {
        text: "Both predictions came true, so each one equally confirms that the model works.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The hail call is the telling confirmation because almost nothing but this model expected it; check whether it keeps flagging rare events rivals miss, whether its hail-timing holds across other towns, and whether disabling its key humidity variable destroys the hail skill while leaving the rain call intact.",
    explanation:
      "Top credit weights a confirmation by how improbable it was beforehand and names tests; the zero-credit dodge treats the rain call — which every model made — as equally strong, the exact error this skill targets.",
  },
  {
    itemType: "mc",
    prompt:
      "A backyard astronomer claims a faint star has an unseen orbiting planet. Her model predicts the star will dim again next month (dust clouds and sunspots also cause dimming) and that the star's light will shift very slightly toward red on one precise night, then back (a pull almost nothing but an orbiting planet would produce). Both occurred. Which confirmation more strongly supports the planet model?",
    mcOptions: [
      {
        text: "Both events were predicted and both happened, so they confirm the model equally.",
        credit: 0,
      },
      {
        text: "The red-shift result seems more convincing somehow.",
        credit: 0.3,
      },
      {
        text: "The exact red-shift-then-return is the telling confirmation because hardly anything but an orbiting planet would produce it; test whether the shift recurs on the planet's predicted period, whether its size matches the implied mass, and whether the ordinary dimming can be reproduced by dust alone without any planet.",
        credit: 1.0,
      },
      {
        text: "The red-shift counts for more because it was unusual; we could watch for it again.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The exact red-shift-then-return is the telling confirmation because hardly anything but an orbiting planet would produce it; test whether the shift recurs on the planet's predicted period, whether its size matches the implied mass, and whether the ordinary dimming can be reproduced by dust alone without any planet.",
    explanation:
      "The strongest answer leans on the confirmation that was improbable under the rivals and names checks; equal-weighting both confirmations ignores that dimming was expected anyway.",
  },
  {
    itemType: "mc",
    prompt:
      "A baker theorizes that her sourdough rises higher because of wild yeast strain X. Her theory predicts the dough will rise (any active yeast makes dough rise) and predicts a distinctive sour-cherry aroma that strain X alone produces among the local strains. Both appear. Which confirmation better supports the strain-X theory?",
    mcOptions: [
      {
        text: "The cherry aroma matters more because it's distinctive; she could bake again and sniff.",
        credit: 0.6,
      },
      {
        text: "The sour-cherry aroma is the decisive confirmation because strain X is the only local yeast known to produce it; test whether cultures of strain X reproduce the aroma in plain water, whether removing strain X kills the aroma but not the rise, and whether other bakers using strain X report the same note.",
        credit: 1.0,
      },
      {
        text: "The aroma is a more striking sign, so it probably counts more.",
        credit: 0.3,
      },
      {
        text: "Both the rise and the aroma showed up as predicted, so each equally proves strain X is responsible.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The sour-cherry aroma is the decisive confirmation because strain X is the only local yeast known to produce it; test whether cultures of strain X reproduce the aroma in plain water, whether removing strain X kills the aroma but not the rise, and whether other bakers using strain X report the same note.",
    explanation:
      "The rise was expected under any yeast and discriminates nothing; the aroma is improbable unless strain X is present, so it carries the weight, and the top option exposes it to refutation.",
  },
  {
    itemType: "mc",
    prompt:
      "A coach believes his new defensive scheme works by forcing opponents to the left. The scheme predicts his team will allow fewer points (many changes can lower points) and predicts that opponents' shot attempts will cluster on the left side of the court far more than league average. Both happen. Which confirmation better supports the scheme's mechanism?",
    mcOptions: [
      {
        text: "The leftward clustering is the telling confirmation because nothing but the scheme would push shots so specifically; test whether the cluster vanishes in games the scheme is dropped, whether left-side defenders' positioning predicts the shift, and whether opponents who counter-adjust restore the normal shot spread.",
        credit: 1.0,
      },
      {
        text: "The shot-location result seems more specific, so it likely counts more.",
        credit: 0.3,
      },
      {
        text: "The shot clustering is the better evidence since it's unexpected; we could chart shots next game.",
        credit: 0.6,
      },
      {
        text: "Points dropped and shots clustered as predicted, so both equally confirm the scheme.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The leftward clustering is the telling confirmation because nothing but the scheme would push shots so specifically; test whether the cluster vanishes in games the scheme is dropped, whether left-side defenders' positioning predicts the shift, and whether opponents who counter-adjust restore the normal shot spread.",
    explanation:
      "Lower points was expected under any improvement; the leftward shot cluster is what the scheme alone predicts, so it is the surprising — and therefore telling — confirmation.",
  },
  {
    itemType: "mc",
    prompt:
      "An engineer suspects a vibration from Pump 3 is cracking welds. Her model predicts more cracks over time (welds fatigue for many reasons) and predicts cracks will appear only at the exact resonant frequency of Pump 3's housing, spaced to match that frequency. Both are found. Which confirmation better supports the Pump-3 model?",
    mcOptions: [
      {
        text: "Cracks increased and matched a frequency, so both observations confirm the model equally well.",
        credit: 0,
      },
      {
        text: "The frequency-matched spacing matters more because it's surprising; we could measure spacing again.",
        credit: 0.6,
      },
      {
        text: "The frequency detail looks more telling than the general increase.",
        credit: 0.3,
      },
      {
        text: "The crack spacing matching Pump 3's exact resonant frequency is the decisive confirmation because almost no other cause would imprint that precise signature; test whether retuning Pump 3 changes the spacing, whether welds far from the pump lack the pattern, and whether shutting the pump halts new cracks while ordinary fatigue continues elsewhere.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The crack spacing matching Pump 3's exact resonant frequency is the decisive confirmation because almost no other cause would imprint that precise signature; test whether retuning Pump 3 changes the spacing, whether welds far from the pump lack the pattern, and whether shutting the pump halts new cracks while ordinary fatigue continues elsewhere.",
    explanation:
      "More cracks over time was expected under generic fatigue; the frequency-matched spacing is improbable unless Pump 3 is the cause, so it is the confirmation worth weighting.",
  },
  {
    itemType: "mc",
    prompt:
      "A developer thinks a memory leak is caused by the image-cache module. His theory predicts memory use will keep climbing (leaks have countless sources) and predicts memory will jump by exactly the size of a thumbnail each time a gallery page loads, never on other pages. Both are observed. Which confirmation better supports the image-cache theory?",
    mcOptions: [
      {
        text: "The per-thumbnail jump seems more specific and probably matters more.",
        credit: 0.3,
      },
      {
        text: "The exact thumbnail-sized jump tied to gallery loads is the telling confirmation because hardly any other bug would match that precise size and trigger; test whether disabling the image cache removes the jumps, whether jump size tracks thumbnail dimensions, and whether non-gallery pages stay flat under the same load.",
        credit: 1.0,
      },
      {
        text: "Memory climbed and jumped on gallery loads as predicted, so both equally confirm the theory.",
        credit: 0,
      },
      {
        text: "The thumbnail-sized jump is better evidence because it's unusual; we could reload the gallery and watch memory.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The exact thumbnail-sized jump tied to gallery loads is the telling confirmation because hardly any other bug would match that precise size and trigger; test whether disabling the image cache removes the jumps, whether jump size tracks thumbnail dimensions, and whether non-gallery pages stay flat under the same load.",
    explanation:
      "Climbing memory was expected under any leak; the thumbnail-sized jump confined to gallery loads is improbable under other bugs, so that is the high-weight confirmation.",
  },
  {
    itemType: "mc",
    prompt:
      "A store owner believes a new window display drives sales by drawing teenagers. The theory predicts higher total sales (a dozen things lift sales) and predicts a spike specifically in the skateboard-brand items shown in the window, among teen shoppers, on the days the display is up. Both occur. Which confirmation better supports the display theory?",
    mcOptions: [
      {
        text: "The skateboard-brand spike counts more because it's pointed; we could keep the display and watch those items.",
        credit: 0.6,
      },
      {
        text: "The targeted spike feels more convincing than the overall lift.",
        credit: 0.3,
      },
      {
        text: "The spike confined to the displayed skateboard brand among teens on display days is the decisive confirmation because little else would single out exactly those items and shoppers; test whether swapping the window product moves the spike to the new item, whether non-teen sales stay flat, and whether covering the window erases the spike while overall sales hold.",
        credit: 1.0,
      },
      {
        text: "Total sales rose and the brand spiked as predicted, so both confirmations support the theory equally.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The spike confined to the displayed skateboard brand among teens on display days is the decisive confirmation because little else would single out exactly those items and shoppers; test whether swapping the window product moves the spike to the new item, whether non-teen sales stay flat, and whether covering the window erases the spike while overall sales hold.",
    explanation:
      "A general sales rise was expected from many causes; the spike pinpointed to the displayed brand, the teen segment, and the display days is improbable otherwise, so it carries the inference.",
  },
  {
    itemType: "mc",
    prompt:
      "A naturalist proposes that a frog's new call evolved to attract mates over rushing water. The hypothesis predicts the frogs will keep breeding (frogs breed regardless) and predicts the call's pitch will sit exactly in the narrow frequency band that cuts through this stream's roar, unlike calls of the same frogs at quiet ponds. Both hold. Which confirmation better supports the hypothesis?",
    mcOptions: [
      {
        text: "The call's pitch landing precisely in the stream-piercing band is the telling confirmation because nothing but adaptation to this noise would tune it so exactly; test whether pond frogs of the species lack the band, whether playback in the stream band draws more mates, and whether masking that band with noise collapses mating success.",
        credit: 1.0,
      },
      {
        text: "The frogs bred and the call matched a frequency, so both observations confirm the hypothesis equally.",
        credit: 0,
      },
      {
        text: "The matched pitch is stronger evidence because it's unexpected; we could record more calls.",
        credit: 0.6,
      },
      {
        text: "The precise pitch seems more meaningful than the fact that they bred.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The call's pitch landing precisely in the stream-piercing band is the telling confirmation because nothing but adaptation to this noise would tune it so exactly; test whether pond frogs of the species lack the band, whether playback in the stream band draws more mates, and whether masking that band with noise collapses mating success.",
    explanation:
      "That the frogs bred was expected on any account; the pitch landing in the exact noise-piercing band is improbable unless the call adapted to the stream, making it the decisive confirmation.",
  },
  {
    itemType: "mc",
    prompt:
      "A doctor suspects a patient's afternoon headaches come from jaw clenching, not screens. Her model predicts the headaches will continue (headaches have many causes) and predicts soreness localized to the jaw muscles that peaks on the patient's high-deadline days. Both are reported. Which confirmation better supports the clenching model?",
    mcOptions: [
      {
        text: "Headaches persisted and jaw soreness appeared as predicted, so both equally confirm the model.",
        credit: 0,
      },
      {
        text: "The jaw-muscle soreness peaking on high-stress deadline days is the decisive confirmation because few rivals would localize pain there and time it to stress; test whether a night guard reduces both soreness and headaches, whether soreness tracks logged clenching, and whether screen time on low-deadline days fails to trigger the pattern.",
        credit: 1.0,
      },
      {
        text: "The jaw soreness seems like the more telling sign.",
        credit: 0.3,
      },
      {
        text: "The stress-timed jaw soreness counts more because it's specific; we could track soreness against deadlines.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The jaw-muscle soreness peaking on high-stress deadline days is the decisive confirmation because few rivals would localize pain there and time it to stress; test whether a night guard reduces both soreness and headaches, whether soreness tracks logged clenching, and whether screen time on low-deadline days fails to trigger the pattern.",
    explanation:
      "Continuing headaches was expected under any cause; jaw-localized soreness timed to deadlines is improbable unless clenching is the driver, so it is the surprising — high-weight — confirmation.",
  },
  {
    itemType: "mc",
    prompt:
      "A teacher claims her new method works by improving students' note-summarizing, not their effort. The claim predicts higher test scores (many things raise scores) and predicts that the gain will show up only on questions requiring synthesis, not on simple recall items. Both appear. Which confirmation better supports her claim?",
    mcOptions: [
      {
        text: "The synthesis-only gain seems more relevant than the overall rise.",
        credit: 0.3,
      },
      {
        text: "The synthesis-specific gain matters more because it's pointed; we could compare question types again.",
        credit: 0.6,
      },
      {
        text: "Scores rose and synthesis questions improved, so both results confirm the method equally.",
        credit: 0,
      },
      {
        text: "The gain appearing only on synthesis questions and not on recall is the telling confirmation because a general effort boost would lift both; test whether students' note quality predicts the synthesis gain, whether withholding the method erases the synthesis edge alone, and whether recall scores stay flat across versions.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The gain appearing only on synthesis questions and not on recall is the telling confirmation because a general effort boost would lift both; test whether students' note quality predicts the synthesis gain, whether withholding the method erases the synthesis edge alone, and whether recall scores stay flat across versions.",
    explanation:
      "A general score rise was expected under any improvement; the gain confined to synthesis items is improbable unless summarizing is the mechanism, so it carries the weight.",
  },
  {
    itemType: "mc",
    prompt:
      "An archaeologist argues a buried structure was a granary, not a dwelling. Her model predicts the site will contain artifacts (any site does) and predicts a specific chemical residue of stored grain concentrated in the floor's corner pits. Both are found. Which confirmation better supports the granary model?",
    mcOptions: [
      {
        text: "The grain residue counts more because it's specific; we could test more soil samples.",
        credit: 0.6,
      },
      {
        text: "The grain residue concentrated in the corner storage pits is the decisive confirmation because little but stored grain would leave that signature in exactly those features; test whether the residue's chemistry matches local grains, whether dwellings of the era lack such pits, and whether residue density falls off away from the pits.",
        credit: 1.0,
      },
      {
        text: "The residue seems more meaningful than just finding artifacts.",
        credit: 0.3,
      },
      {
        text: "Artifacts turned up and grain residue was found, so both equally confirm the granary model.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The grain residue concentrated in the corner storage pits is the decisive confirmation because little but stored grain would leave that signature in exactly those features; test whether the residue's chemistry matches local grains, whether dwellings of the era lack such pits, and whether residue density falls off away from the pits.",
    explanation:
      "Finding artifacts was expected at any site; grain residue concentrated in storage pits is improbable unless the building stored grain, so it is the confirmation to weight.",
  },
  {
    itemType: "mc",
    prompt:
      "An analyst theorizes a retailer's sales are secretly driven by a rival's stockouts. The theory predicts the retailer's revenue will fluctuate (revenue always does) and predicts revenue spikes will line up, store by store, with weeks the nearby rival ran out of a key product. Both patterns appear. Which confirmation better supports the theory?",
    mcOptions: [
      {
        text: "The store-by-store alignment of spikes with the rival's exact stockout weeks is the telling confirmation because almost nothing else would synchronize so precisely; test whether stores far from that rival show no alignment, whether the rival restocking ends the spikes, and whether the matched product, not others, drives the lift.",
        credit: 1.0,
      },
      {
        text: "The stockout alignment is the stronger sign because it's surprising; we could track more stockout weeks.",
        credit: 0.6,
      },
      {
        text: "Revenue moved and spikes lined up with stockouts, so both observations confirm the theory equally.",
        credit: 0,
      },
      {
        text: "The alignment looks more convincing than ordinary revenue swings.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The store-by-store alignment of spikes with the rival's exact stockout weeks is the telling confirmation because almost nothing else would synchronize so precisely; test whether stores far from that rival show no alignment, whether the rival restocking ends the spikes, and whether the matched product, not others, drives the lift.",
    explanation:
      "Fluctuating revenue was expected anyway; spikes that align store-by-store with the rival's exact stockout weeks are improbable by chance, so that alignment is the high-weight confirmation.",
  },
  {
    itemType: "mc",
    prompt:
      "A game designer believes a boss is too hard because of one unfair attack, not overall difficulty. The belief predicts many players will die to the boss (bosses kill players) and predicts deaths will cluster in the half-second after that specific attack's wind-up animation. Both are seen in the data. Which confirmation better supports the one-attack theory?",
    mcOptions: [
      {
        text: "Players died a lot and deaths followed the attack, so both findings confirm the theory equally.",
        credit: 0,
      },
      {
        text: "The death-timing cluster seems more telling than the high death count.",
        credit: 0.3,
      },
      {
        text: "The clustering after that attack counts more because it's specific; we could re-check the death logs.",
        credit: 0.6,
      },
      {
        text: "Deaths clustering in the half-second after that one attack's wind-up is the decisive confirmation because general difficulty would spread deaths evenly; test whether nerfing only that attack flattens the cluster, whether deaths elsewhere stay constant, and whether players who dodge the wind-up survive at normal rates.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "Deaths clustering in the half-second after that one attack's wind-up is the decisive confirmation because general difficulty would spread deaths evenly; test whether nerfing only that attack flattens the cluster, whether deaths elsewhere stay constant, and whether players who dodge the wind-up survive at normal rates.",
    explanation:
      "A high death count was expected on any hard boss; deaths clustered after one attack's wind-up are improbable under general difficulty, so that timing cluster is the telling confirmation.",
  },
  {
    itemType: "mc",
    prompt:
      "A producer claims a song went viral because of its three-second intro hook, not the chorus. The claim predicts high stream counts (popular songs stream a lot) and predicts an unusually low skip rate in the first three seconds specifically, far below typical. Both show up. Which confirmation better supports the intro-hook claim?",
    mcOptions: [
      {
        text: "The low early-skip rate seems more relevant than the raw streams.",
        credit: 0.3,
      },
      {
        text: "The song streamed heavily and had low early skips, so both metrics confirm the claim equally.",
        credit: 0,
      },
      {
        text: "The unusually low skip rate in exactly the first three seconds is the telling confirmation because little but a gripping intro would suppress skips right there; test whether songs given the same intro inherit the low early-skip rate, whether replacing the intro raises it, and whether later-section skip rates stay ordinary.",
        credit: 1.0,
      },
      {
        text: "The low early-skip rate is stronger evidence because it's surprising; we could look at skip data for more songs.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The unusually low skip rate in exactly the first three seconds is the telling confirmation because little but a gripping intro would suppress skips right there; test whether songs given the same intro inherit the low early-skip rate, whether replacing the intro raises it, and whether later-section skip rates stay ordinary.",
    explanation:
      "High streams were expected of any hit; an abnormally low skip rate in just the first three seconds is improbable unless the intro grips listeners, so it is the surprising confirmation.",
  },
  {
    itemType: "mc",
    prompt:
      "A farmer believes a new cover crop boosts yield by fixing nitrogen, not by retaining water. The belief predicts higher yield (many practices raise yield) and predicts soil nitrogen will rise specifically in the cover crop's root zone, by an amount matching known fixation rates. Both are measured. Which confirmation better supports the nitrogen mechanism?",
    mcOptions: [
      {
        text: "The root-zone nitrogen rise counts more because it's specific; we could sample soil again.",
        credit: 0.6,
      },
      {
        text: "The nitrogen result seems more convincing than the yield bump.",
        credit: 0.3,
      },
      {
        text: "Yield rose and nitrogen rose, so both measurements confirm the nitrogen mechanism equally.",
        credit: 0,
      },
      {
        text: "Nitrogen rising specifically in the cover crop's root zone by the predicted fixation amount is the decisive confirmation because water retention would not add nitrogen at all; test whether irrigated plots without the cover crop fail to gain nitrogen, whether yield gains track the nitrogen rise rather than soil moisture, and whether a non-fixing cover crop gives water benefits but no nitrogen.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "Nitrogen rising specifically in the cover crop's root zone by the predicted fixation amount is the decisive confirmation because water retention would not add nitrogen at all; test whether irrigated plots without the cover crop fail to gain nitrogen, whether yield gains track the nitrogen rise rather than soil moisture, and whether a non-fixing cover crop gives water benefits but no nitrogen.",
    explanation:
      "Higher yield was expected under either mechanism; a root-zone nitrogen rise matching fixation rates is improbable under water retention, so it is the confirmation that discriminates and carries weight.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A city's health team thinks a stomach-illness outbreak came from one food cart, not general summer heat. Their model predicts more cases will appear (outbreaks grow) and predicts that the sick will share one improbable trait: nearly all bought the cart's iced horchata in a two-hour window on Saturday. Both hold. Which lead best follows?",
    mcOptions: [
      {
        text: "The shared two-hour horchata purchase is the telling confirmation because random summer illness would never concentrate so tightly; test whether the horchata batch carries the pathogen, whether non-buyers in the same heat stayed well, and whether cases stop once that cart is closed.",
        credit: 1.0,
      },
      {
        text: "The horchata link seems more convincing than the rising case count.",
        credit: 0.3,
      },
      {
        text: "Cases rose and many drank horchata, so both facts confirm the food-cart model equally.",
        credit: 0,
      },
      {
        text: "The narrow horchata window is stronger evidence because it's unlikely by chance; we could interview more patients.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your food-cart lead from the rival 'summer heat is sickening people generally,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare illness rates between Saturday horchata buyers and matched people who endured the same heat but didn't buy it — my lead predicts only the buyers got sick. It is refuted if non-buyers fell ill at the same rate, which would point to heat or another shared source.",
      yieldAnchors: [
        "The sick share a two-hour Saturday horchata purchase",
        "The case count is rising",
        "The illness is a stomach ailment",
      ],
      riskAnchors: [
        "The horchata batch tests positive for the pathogen",
        "Non-buyers in the same heat stayed well",
        "Closing the cart halts new cases",
      ],
      defeatedBy: [
        "Summer heat is sickening people in general",
        "The case rise and the horchata link prove the source equally",
      ],
    },
    correctAnswer:
      "The shared two-hour horchata purchase is the telling confirmation because random summer illness would never concentrate so tightly; test whether the horchata batch carries the pathogen, whether non-buyers in the same heat stayed well, and whether cases stop once that cart is closed.",
    explanation:
      "A rising case count was expected in any outbreak; near-everyone sharing one two-hour purchase is wildly improbable by chance, so that tight window — not the bare case rise — carries the inference.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An inspector argues a footbridge sways because pedestrians unconsciously sync their steps, not because of wind. His model predicts the bridge will sway on busy days (bridges flex) and predicts that the sway will suddenly lock into a single rhythm once the crowd passes a specific density, even on perfectly still days. Both are recorded. Which lead best follows?",
    mcOptions: [
      {
        text: "The bridge swayed and the rhythm locked in, so both observations confirm the sync model equally.",
        credit: 0,
      },
      {
        text: "The sway snapping into one rhythm above a crowd-density threshold on windless days is the telling confirmation because wind could never produce a crowd-triggered lock-in; test whether the lock-in appears at the predicted density each time, whether asking walkers to break stride kills it, and whether empty windy days produce no such rhythm.",
        credit: 1.0,
      },
      {
        text: "The rhythm lock-in counts more because it's surprising; we could watch the bridge on more busy days.",
        credit: 0.6,
      },
      {
        text: "The synchronized rhythm seems more telling than ordinary swaying.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your step-sync lead from the rival 'wind drives the sway,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: measure sway on a windless day as the crowd crosses the predicted density threshold — my lead says the rhythm should lock in with no wind at all. It is refuted if the lock-in only ever appears when it's windy, which would restore wind as the driver.",
      yieldAnchors: [
        "Sway locks into one rhythm above a crowd density",
        "The lock-in occurs on still days",
        "The bridge flexes on busy days",
      ],
      riskAnchors: [
        "The lock-in appears at the predicted density each time",
        "Asking walkers to break stride stops it",
        "Empty windy days produce no rhythm",
      ],
      defeatedBy: [
        "Wind drives the sway",
        "The general swaying and the lock-in confirm the model equally",
      ],
    },
    correctAnswer:
      "The sway snapping into one rhythm above a crowd-density threshold on windless days is the telling confirmation because wind could never produce a crowd-triggered lock-in; test whether the lock-in appears at the predicted density each time, whether asking walkers to break stride kills it, and whether empty windy days produce no such rhythm.",
    explanation:
      "Swaying on busy days was expected under either cause; a rhythm that locks in at a crowd-density threshold on still days is improbable under wind, so that lock-in is the high-weight confirmation.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A brewer claims a batch's off-flavor comes from a wild bacterium, not old hops. Her model predicts the beer will taste different (many faults do that) and predicts a specific buttery compound will appear only in tanks that sat above 20°C for over a day. Both are confirmed by lab tests. Which lead best follows?",
    mcOptions: [
      {
        text: "The temperature-linked buttery compound counts more because it's specific; we could test more tanks.",
        credit: 0.6,
      },
      {
        text: "The beer tasted off and the compound appeared, so both findings confirm the bacterium model equally.",
        credit: 0,
      },
      {
        text: "The buttery-compound result seems more telling than the general off-flavor.",
        credit: 0.3,
      },
      {
        text: "The buttery compound appearing only in warm-held tanks is the decisive confirmation because old hops would taint every tank regardless of temperature; test whether inoculating a clean tank with the bacterium at 22°C reproduces the compound, whether cold-held tanks stay clean, and whether fresh hops in a warm tank still go buttery.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your bacterium lead from the rival 'old hops caused the off-flavor,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare the buttery compound between identical tanks held cold versus above 20°C — my lead says only the warm ones go buttery. It is refuted if cold tanks develop the same compound, which would point back to the hops.",
      yieldAnchors: [
        "The buttery compound appears only in warm-held tanks",
        "The beer tastes off",
        "The compound is detected by lab test",
      ],
      riskAnchors: [
        "Inoculating a clean warm tank reproduces the compound",
        "Cold-held tanks stay clean",
        "Fresh hops in a warm tank still go buttery",
      ],
      defeatedBy: [
        "Old hops caused the off-flavor",
        "The off-taste and the compound confirm the model equally",
      ],
    },
    correctAnswer:
      "The buttery compound appearing only in warm-held tanks is the decisive confirmation because old hops would taint every tank regardless of temperature; test whether inoculating a clean tank with the bacterium at 22°C reproduces the compound, whether cold-held tanks stay clean, and whether fresh hops in a warm tank still go buttery.",
    explanation:
      "An off-flavor was expected under either fault; the buttery compound restricted to warm-held tanks is improbable if old hops were to blame, so that temperature-specific result carries the weight.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A trainer believes a sprinter's late-race fade is a breathing-pattern problem, not fitness. The model predicts the runner will slow at the end (most sprinters do) and predicts her stride length will collapse precisely at the meter where her breath-hold habit forces an exhale, every race. Both are filmed. Which lead best follows?",
    mcOptions: [
      {
        text: "The stride collapse at the breath point seems more meaningful than the general fade.",
        credit: 0.3,
      },
      {
        text: "The stride collapsing at the exact meter of her forced exhale every race is the telling confirmation because a fitness fade would set in gradually, not at one fixed point; test whether coaching a new breathing rhythm moves or removes the collapse, whether her oxygen levels dip right there, and whether fresh-legs time trials still show the same fixed-point drop.",
        credit: 1.0,
      },
      {
        text: "The fixed-point collapse counts more because it's specific; we could film more races.",
        credit: 0.6,
      },
      {
        text: "She faded and her stride dropped, so both observations confirm the breathing model equally.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your breathing lead from the rival 'she simply runs out of fitness,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have her run with a coached breathing rhythm and watch whether the fixed-point stride collapse disappears — my lead says fixing the breath fixes the drop. It is refuted if the collapse stays put at the same meter despite new breathing, pointing to fitness.",
      yieldAnchors: [
        "Stride collapses at the exact meter of her forced exhale",
        "It happens every race",
        "She fades late in the race",
      ],
      riskAnchors: [
        "A new breathing rhythm moves or removes the collapse",
        "Her oxygen dips right at that point",
        "Fresh-legs trials still show the fixed-point drop",
      ],
      defeatedBy: [
        "She simply runs out of fitness",
        "The fade and the collapse confirm the model equally",
      ],
    },
    correctAnswer:
      "The stride collapsing at the exact meter of her forced exhale every race is the telling confirmation because a fitness fade would set in gradually, not at one fixed point; test whether coaching a new breathing rhythm moves or removes the collapse, whether her oxygen levels dip right there, and whether fresh-legs time trials still show the same fixed-point drop.",
    explanation:
      "A late fade was expected under either cause; a stride collapse pinned to one fixed meter every race is improbable under gradual fitness loss, so that fixed-point drop is the confirmation to weight.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A security analyst suspects a breach came from a phishing email, not a server flaw. Her model predicts there will be signs of intrusion (breaches leave traces) and predicts the first unauthorized login will trace to the exact minute one specific employee clicked a flagged link, from the same foreign IP in the email's headers. Both check out. Which lead best follows?",
    mcOptions: [
      {
        text: "The first intrusion matching the click's exact minute and the email's IP is the telling confirmation because a random server flaw would not line up with one employee's click; test whether that account's session shows the foreign IP, whether other employees who ignored the email stayed clean, and whether patching the suspected server flaw fails to stop a re-test phishing click.",
        credit: 1.0,
      },
      {
        text: "The click-timed login counts more because it's surprising; we could review more access logs.",
        credit: 0.6,
      },
      {
        text: "There were intrusion signs and a matching login, so both confirm the phishing model equally.",
        credit: 0,
      },
      {
        text: "The timed login seems more convincing than general intrusion traces.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your phishing lead from the rival 'a server flaw was exploited,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the first unauthorized login's IP and timing match the flagged email and that one employee's click — my lead predicts a tight match. It is refuted if the intrusion came from a different IP before anyone clicked, which would point to the server flaw.",
      yieldAnchors: [
        "The first login matches the click's exact minute",
        "The login used the email's foreign IP",
        "There are signs of intrusion",
      ],
      riskAnchors: [
        "The account session shows the foreign IP",
        "Employees who ignored the email stayed clean",
        "Patching the server flaw doesn't stop a re-test click",
      ],
      defeatedBy: [
        "A server flaw was exploited",
        "The intrusion signs and the matching login confirm the model equally",
      ],
    },
    correctAnswer:
      "The first intrusion matching the click's exact minute and the email's IP is the telling confirmation because a random server flaw would not line up with one employee's click; test whether that account's session shows the foreign IP, whether other employees who ignored the email stayed clean, and whether patching the suspected server flaw fails to stop a re-test phishing click.",
    explanation:
      "Signs of intrusion were expected in any breach; the first login matching the click's exact minute and the email's IP is improbable under a server flaw, so that match is the high-weight confirmation.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A marketer claims a coupon lifted sales by reactivating lapsed customers, not by attracting new ones. The claim predicts a sales bump (coupons usually bump sales) and predicts that redemptions will concentrate among customers who hadn't purchased in over a year, at a rate far above their usual activity. Both appear. Which lead best follows?",
    mcOptions: [
      {
        text: "Sales rose and coupons were redeemed, so both results confirm the reactivation claim equally.",
        credit: 0,
      },
      {
        text: "The lapsed-customer redemptions seem more telling than the overall bump.",
        credit: 0.3,
      },
      {
        text: "Redemptions concentrating among year-plus-lapsed customers far above their baseline is the decisive confirmation because a generic sales bump would draw mostly active or new buyers; test whether those reactivated buyers keep purchasing afterward, whether new-customer signups stayed flat, and whether withholding the coupon from a lapsed segment leaves them dormant.",
        credit: 1.0,
      },
      {
        text: "The lapsed-customer skew counts more because it's specific; we could segment redemptions again.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your reactivation lead from the rival 'the coupon mainly pulled in new customers,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: segment redemptions by how long since each buyer's last purchase — my lead predicts a heavy skew toward year-plus-lapsed customers. It is refuted if most redemptions came from brand-new accounts, which would support the new-customer story.",
      yieldAnchors: [
        "Redemptions skew to year-plus-lapsed customers",
        "The skew far exceeds their baseline activity",
        "Sales rose after the coupon",
      ],
      riskAnchors: [
        "Reactivated buyers keep purchasing afterward",
        "New-customer signups stayed flat",
        "Withholding the coupon leaves a lapsed segment dormant",
      ],
      defeatedBy: [
        "The coupon mainly pulled in new customers",
        "The sales bump and the redemptions confirm the claim equally",
      ],
    },
    correctAnswer:
      "Redemptions concentrating among year-plus-lapsed customers far above their baseline is the decisive confirmation because a generic sales bump would draw mostly active or new buyers; test whether those reactivated buyers keep purchasing afterward, whether new-customer signups stayed flat, and whether withholding the coupon from a lapsed segment leaves them dormant.",
    explanation:
      "A sales bump was expected from any coupon; redemptions skewed to long-lapsed customers far above baseline are improbable under the new-customer story, so that skew carries the inference.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A ranger argues a lake's fish die-off is from lawn-fertilizer runoff, not a natural algae bloom. His model predicts fish will die (die-offs happen) and predicts dead zones will appear first and worst exactly where the storm drains from the new housing tract empty, peaking after rains. Both are mapped. Which lead best follows?",
    mcOptions: [
      {
        text: "The drain-aligned dead zones count more because they're specific; we could map more of the shore.",
        credit: 0.6,
      },
      {
        text: "Dead zones concentrating at the new tract's storm-drain outlets and peaking after rain is the telling confirmation because a natural bloom would not align with human drainage and rainfall; test whether nitrate levels spike at those outlets post-rain, whether shorelines without drains stay healthy, and whether a fertilizer ban upstream shrinks the dead zones.",
        credit: 1.0,
      },
      {
        text: "The drain-linked pattern seems more convincing than the die-off itself.",
        credit: 0.3,
      },
      {
        text: "Fish died and dead zones formed, so both observations confirm the runoff model equally.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your runoff lead from the rival 'a natural algae bloom killed the fish,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: measure nitrate at the tract's storm-drain outlets right after a rain and compare with drain-free shoreline — my lead predicts a sharp outlet spike. It is refuted if nitrate is uniform lake-wide regardless of drains, which fits a natural bloom.",
      yieldAnchors: [
        "Dead zones cluster at the new tract's storm drains",
        "They peak after rains",
        "Fish are dying off",
      ],
      riskAnchors: [
        "Nitrate spikes at the outlets after rain",
        "Drain-free shorelines stay healthy",
        "An upstream fertilizer ban shrinks the dead zones",
      ],
      defeatedBy: [
        "A natural algae bloom killed the fish",
        "The die-off and the dead zones confirm the model equally",
      ],
    },
    correctAnswer:
      "Dead zones concentrating at the new tract's storm-drain outlets and peaking after rain is the telling confirmation because a natural bloom would not align with human drainage and rainfall; test whether nitrate levels spike at those outlets post-rain, whether shorelines without drains stay healthy, and whether a fertilizer ban upstream shrinks the dead zones.",
    explanation:
      "A die-off was expected under either cause; dead zones aligned to storm-drain outlets and timed to rainfall are improbable under a natural bloom, so that alignment is the confirmation worth weighting.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A researcher claims a memory app helps by spacing reviews, not by adding study time. Her model predicts users will remember more (more study helps) and predicts the biggest retention gains will fall exactly on items the app scheduled at expanding intervals, not on items reviewed in massed blocks. Both are found. Which lead best follows?",
    mcOptions: [
      {
        text: "The spacing-specific gains seem more meaningful than overall retention.",
        credit: 0.3,
      },
      {
        text: "Users remembered more and spaced items improved, so both results confirm the spacing claim equally.",
        credit: 0,
      },
      {
        text: "The interval-matched gains count more because they're specific; we could compare item types again.",
        credit: 0.6,
      },
      {
        text: "Retention gains landing only on expanding-interval items and not on massed ones is the telling confirmation because extra study time would lift both equally; test whether matching total study time preserves the spacing edge, whether gains track each item's interval length, and whether forcing massed review erases the advantage.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your spacing lead from the rival 'the app just makes people study more,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: hold total study time equal across spaced and massed items and compare retention — my lead says spaced items still win. It is refuted if, at equal time, spaced and massed items are remembered equally, pointing to study volume.",
      yieldAnchors: [
        "Gains fall on expanding-interval items",
        "Massed-block items show little gain",
        "Users remember more overall",
      ],
      riskAnchors: [
        "Equal total study time preserves the spacing edge",
        "Gains track each item's interval length",
        "Forcing massed review erases the advantage",
      ],
      defeatedBy: [
        "The app just makes people study more",
        "The overall retention and the spaced gains confirm the claim equally",
      ],
    },
    correctAnswer:
      "Retention gains landing only on expanding-interval items and not on massed ones is the telling confirmation because extra study time would lift both equally; test whether matching total study time preserves the spacing edge, whether gains track each item's interval length, and whether forcing massed review erases the advantage.",
    explanation:
      "Remembering more was expected from any added study; gains confined to spaced items are improbable if study volume were the driver, so that interval-specific result carries the weight.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An economist argues a town's shop closures stem from a new highway bypass, not online shopping. Her model predicts some shops will close (shops close everywhere) and predicts closures will hit hardest among businesses that depended on through-traffic, dropping sharply the month the bypass opened. Both are documented. Which lead best follows?",
    mcOptions: [
      {
        text: "Closures concentrating among through-traffic businesses and stepping down the month the bypass opened is the decisive confirmation because online shopping would erode all retail gradually, not punish roadside trade on one date; test whether destination shops customers seek out stayed open, whether traffic counts on Main Street fell by the predicted amount, and whether towns without a bypass lost fewer roadside shops.",
        credit: 1.0,
      },
      {
        text: "The traffic-dependent closures seem more telling than the general decline.",
        credit: 0.3,
      },
      {
        text: "Shops closed and through-traffic ones suffered, so both facts confirm the bypass model equally.",
        credit: 0,
      },
      {
        text: "The bypass-timed closures count more because they're specific; we could review more shop records.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your bypass lead from the rival 'online shopping is killing the shops,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare closure rates between through-traffic shops and destination shops customers deliberately seek out — my lead predicts only the traffic-dependent ones collapsed at the bypass date. It is refuted if destination shops closed just as fast, which fits the online-shopping story.",
      yieldAnchors: [
        "Closures hit through-traffic businesses hardest",
        "They dropped sharply the month the bypass opened",
        "Some shops are closing",
      ],
      riskAnchors: [
        "Destination shops stayed open",
        "Main Street traffic fell by the predicted amount",
        "Bypass-free towns lost fewer roadside shops",
      ],
      defeatedBy: [
        "Online shopping is killing the shops",
        "The closures and the traffic-shop pattern confirm the model equally",
      ],
    },
    correctAnswer:
      "Closures concentrating among through-traffic businesses and stepping down the month the bypass opened is the decisive confirmation because online shopping would erode all retail gradually, not punish roadside trade on one date; test whether destination shops customers seek out stayed open, whether traffic counts on Main Street fell by the predicted amount, and whether towns without a bypass lost fewer roadside shops.",
    explanation:
      "Some closures were expected anywhere; closures concentrated in through-traffic shops and stepping down on the bypass date are improbable under a gradual online-shopping decline, so that pattern carries the inference.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "An amateur astronomer predicts that a newly spotted dim object is a comet, not an asteroid. Over a month she notes two things her comet model called for: the object kept moving across the sky (asteroids move too) and it grew a faint tail pointing directly away from the sun, brightening as it neared the sun — something an inert asteroid would never do. In one paragraph, propose the strongest lead for what the object is, describe how you would test it, and make clear which confirmation matters more and why.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the object is a comet whose ices vaporize as it nears the sun, and the decisive confirmation is the sun-pointed tail that brightened on approach — not the mere fact that it moved, which any asteroid would also do. That movement was expected under both rivals, so it barely discriminates; the tail was highly improbable unless the comet model is right, so it carries almost all the weight. I would test it by checking whether the tail always points anti-sunward as the object's angle changes, whether its brightness tracks distance to the sun, and whether a spectrum shows water or gas emission that bare rock could not produce; if the 'tail' turned out to be a fixed smear from my optics rather than a sun-aligned, distance-responsive feature, the comet lead would fall.",
      yieldAnchors: [
        "The object grew a sun-pointed tail",
        "The tail brightened as it neared the sun",
        "The object moved across the sky",
      ],
      riskAnchors: [
        "The tail always points anti-sunward as the geometry changes",
        "Brightness tracks distance to the sun",
        "A spectrum shows water or gas emission",
      ],
      defeatedBy: [
        "The movement alone proves it's a comet",
        "Both confirmations count equally",
        "Nothing can be said until it's watched for years",
      ],
    },
    correctAnswer:
      "The strongest lead is that the object is a comet whose ices vaporize as it nears the sun, and the decisive confirmation is the sun-pointed tail that brightened on approach — not the mere fact that it moved, which any asteroid would also do. That movement was expected under both rivals, so it barely discriminates; the tail was highly improbable unless the comet model is right, so it carries almost all the weight. I would test it by checking whether the tail always points anti-sunward as the object's angle changes, whether its brightness tracks distance to the sun, and whether a spectrum shows water or gas emission that bare rock could not produce; if the 'tail' turned out to be a fixed smear from my optics rather than a sun-aligned, distance-responsive feature, the comet lead would fall.",
    explanation:
      "Under CCR, the cautious 'watch for years' refusal and the equal-weighting of both confirmations earn near-zero; top credit goes to the answer that weights the improbable sun-pointed tail over the freebie of mere motion and names tests that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A plant manager suspects a batch of failing motors was caused by one supplier's bearings, not by assembly errors. Reviewing records, she sees two things her bearing theory predicted: the motors failed during testing (motors fail for many reasons) and every failed motor traced back to bearings from one supplier's lot shipped in a single week, while motors with other bearings passed. In one paragraph, propose the strongest lead, describe how you would test it, and make clear which confirmation matters more and why.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the one supplier's bad bearing lot caused the failures, and the telling confirmation is that every failure traces to that single week's lot while other-bearing motors passed — not the bare fact that some motors failed, which assembly errors or anything else could explain. The general failures were expected under every rival and discriminate poorly; the perfect sorting by bearing lot was improbable unless the bearings are the cause, so it carries the weight. I would test it by inspecting the suspect bearings for a defect, by building motors with that lot versus a clean lot under identical assembly to see if only the suspect lot fails, and by checking whether assembly workers and steps were the same across passing and failing units; if failures turned out spread across many bearing lots, the supplier lead would collapse.",
      yieldAnchors: [
        "Every failed motor used the one supplier's single-week lot",
        "Motors with other bearings passed",
        "Motors failed during testing",
      ],
      riskAnchors: [
        "The suspect bearings show a physical defect",
        "Identical assembly with the bad lot still fails",
        "Passing and failing units shared assembly steps",
      ],
      defeatedBy: [
        "The failures alone prove the bearings are at fault",
        "Both confirmations count equally",
        "Too few motors failed to suspect any cause",
      ],
    },
    correctAnswer:
      "The strongest lead is that the one supplier's bad bearing lot caused the failures, and the telling confirmation is that every failure traces to that single week's lot while other-bearing motors passed — not the bare fact that some motors failed, which assembly errors or anything else could explain. The general failures were expected under every rival and discriminate poorly; the perfect sorting by bearing lot was improbable unless the bearings are the cause, so it carries the weight. I would test it by inspecting the suspect bearings for a defect, by building motors with that lot versus a clean lot under identical assembly to see if only the suspect lot fails, and by checking whether assembly workers and steps were the same across passing and failing units; if failures turned out spread across many bearing lots, the supplier lead would collapse.",
    explanation:
      "The 'too few motors failed to suspect anything' refusal and the equal-weighting dodge earn near-zero; credit goes to weighting the improbable lot-perfect sorting over the freebie that motors failed, and naming a controlled-assembly test.",
  },
  {
    itemType: "written",
    prompt:
      "A field biologist proposes that a songbird's recent population boom is due to a new nesting-box design, not a mild winter. He records two predicted results: the population rose (mild winters also raise survival) and fledgling success jumped specifically in the new boxes, whose narrow entrance keeps out a predator that raids open nests, while nearby old boxes saw no such jump. In one paragraph, propose the strongest lead, describe how you would test it, and make clear which confirmation matters more and why.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the new boxes' narrow entrances exclude the nest-raiding predator and thereby boosted fledging, and the decisive confirmation is the success jump confined to the new boxes while old boxes nearby gained nothing — not the overall population rise, which a mild winter would equally explain. The population rise was expected under both rivals and discriminates weakly; the box-specific jump was improbable unless the design is doing the work. I would test it by checking whether predator raids dropped only at new boxes, whether retrofitting old boxes with narrow entrances reproduces the jump, and whether camera traps show the predator turned away by the new entrance; if old and new boxes had identical fledging once weather is accounted for, the design lead would fail.",
      yieldAnchors: [
        "Fledgling success jumped only in the new boxes",
        "Old boxes nearby saw no jump",
        "The population rose overall",
      ],
      riskAnchors: [
        "Predator raids dropped only at new boxes",
        "Retrofitting old boxes reproduces the jump",
        "Cameras show the predator blocked by the entrance",
      ],
      defeatedBy: [
        "The population rise alone proves the boxes worked",
        "Both confirmations count equally",
        "One season is too little to conclude anything",
      ],
    },
    correctAnswer:
      "The strongest lead is that the new boxes' narrow entrances exclude the nest-raiding predator and thereby boosted fledging, and the decisive confirmation is the success jump confined to the new boxes while old boxes nearby gained nothing — not the overall population rise, which a mild winter would equally explain. The population rise was expected under both rivals and discriminates weakly; the box-specific jump was improbable unless the design is doing the work. I would test it by checking whether predator raids dropped only at new boxes, whether retrofitting old boxes with narrow entrances reproduces the jump, and whether camera traps show the predator turned away by the new entrance; if old and new boxes had identical fledging once weather is accounted for, the design lead would fail.",
    explanation:
      "The 'one season is too little' shrug and the equal-weighting dodge earn near-zero; top credit weights the box-specific fledging jump — improbable under a mild winter — over the freebie of a population rise, and names a retrofit test.",
  },
  {
    itemType: "written",
    prompt:
      "A logistics lead believes late deliveries spiked because of one new sorting machine, not driver shortages. The data show two things her theory predicted: deliveries ran late (many things cause delays) and the delays appeared only for parcels routed through the new machine's lane, beginning the day it was installed, while the other lanes stayed on time. In one paragraph, propose the strongest lead, describe how you would test it, and make clear which confirmation matters more and why.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the new sorting machine is the bottleneck, and the telling confirmation is that delays struck only its lane and started on its install date while other lanes stayed on time — not the general lateness, which driver shortages or weather could equally produce. The overall delays were expected under every rival and discriminate poorly; the lane-and-date specificity was improbable unless the machine is the cause. I would test it by timing parcels through that lane versus others, by rerouting its volume to a known-good lane to see whether delays follow the parcels or stay with the machine, and by checking driver counts across lanes to rule out staffing; if delays were spread evenly across all lanes regardless of the machine, the bottleneck lead would fall apart.",
      yieldAnchors: [
        "Delays appear only in the new machine's lane",
        "They began the day it was installed",
        "Other lanes stayed on time",
      ],
      riskAnchors: [
        "Parcels measurably slow in that lane",
        "Rerouting its volume moves the delay",
        "Driver counts are equal across lanes",
      ],
      defeatedBy: [
        "The general lateness alone proves the machine is at fault",
        "Both confirmations count equally",
        "Delays are too complex to attribute to anything",
      ],
    },
    correctAnswer:
      "The strongest lead is that the new sorting machine is the bottleneck, and the telling confirmation is that delays struck only its lane and started on its install date while other lanes stayed on time — not the general lateness, which driver shortages or weather could equally produce. The overall delays were expected under every rival and discriminate poorly; the lane-and-date specificity was improbable unless the machine is the cause. I would test it by timing parcels through that lane versus others, by rerouting its volume to a known-good lane to see whether delays follow the parcels or stay with the machine, and by checking driver counts across lanes to rule out staffing; if delays were spread evenly across all lanes regardless of the machine, the bottleneck lead would fall apart.",
    explanation:
      "The 'too complex to attribute' refusal and the equal-weighting dodge earn near-zero; credit goes to weighting the lane-and-date-specific delays — improbable under staffing — over the freebie that deliveries ran late, plus a rerouting test.",
  },
  {
    itemType: "written",
    prompt:
      "A physician suspects a patient's recurring rashes come from a specific laundry detergent, not seasonal allergies. The chart shows two predicted results: the rashes recurred (allergies recur too) and each flare began two days after the patient did laundry with that detergent, always on skin covered by freshly washed clothing, clearing when she switched brands on vacation. In one paragraph, propose the strongest lead, describe how you would test it, and make clear which confirmation matters more and why.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is a contact reaction to that detergent, and the decisive confirmation is the flares tracking laundry days and appearing only under freshly washed fabric, then clearing on a brand switch — not the bare recurrence, which seasonal allergies would equally produce. The recurrence was expected under both rivals and discriminates weakly; the tight coupling to laundry timing and covered skin was improbable unless the detergent is the trigger. I would test it by having her stop the detergent and watch the rashes resolve, by a small patch test of the detergent on a clear area of skin, and by reintroducing it once to see whether a flare returns on schedule; if rashes kept appearing on unwashed-fabric areas and ignored which detergent she used, the contact-reaction lead would be refuted.",
      yieldAnchors: [
        "Flares begin two days after using that detergent",
        "Rashes appear only under freshly washed clothing",
        "The rash cleared when she switched brands",
      ],
      riskAnchors: [
        "Stopping the detergent resolves the rashes",
        "A patch test of the detergent provokes a reaction",
        "Reintroducing it brings a flare back on schedule",
      ],
      defeatedBy: [
        "The recurrence alone proves it's the detergent",
        "Both confirmations count equally",
        "Skin problems are too individual to pin down",
      ],
    },
    correctAnswer:
      "The strongest lead is a contact reaction to that detergent, and the decisive confirmation is the flares tracking laundry days and appearing only under freshly washed fabric, then clearing on a brand switch — not the bare recurrence, which seasonal allergies would equally produce. The recurrence was expected under both rivals and discriminates weakly; the tight coupling to laundry timing and covered skin was improbable unless the detergent is the trigger. I would test it by having her stop the detergent and watch the rashes resolve, by a small patch test of the detergent on a clear area of skin, and by reintroducing it once to see whether a flare returns on schedule; if rashes kept appearing on unwashed-fabric areas and ignored which detergent she used, the contact-reaction lead would be refuted.",
    explanation:
      "The 'too individual to pin down' refusal and the equal-weighting dodge earn near-zero; top credit weights the flares' tight coupling to laundry timing and covered skin — improbable under seasonal allergies — over the freebie of recurrence, and names a stop-and-rechallenge test.",
  },
];

export const section: SectionContent = {
  slug: "surprise-metric",
  title: "Surprise as a Metric",
  weekNumber: 2,
  blurb:
    "A confirmation counts for more the more improbable its result was beforehand under every rival explanation; weight your evidence by how surprising each success was, and lean on the prediction that could most easily have failed.",
  lectureTitle:
    "2.5 Surprise as a Metric: weighting a confirmation by how unlikely it was beforehand",
  body: `# Surprise as a Metric

When your model makes a prediction and it comes true, how much should that cheer you? Reflexive caution says "a confirmation is a confirmation — but you still can't really conclude anything." Constructive Critical Reasoning says something sharper: a confirmation is worth exactly as much as it was *improbable beforehand*. The result that almost nothing but your model could have produced is worth a hundred easy results that anything would have produced.

## A confirmation is worth what it risked

A prediction earns credence in proportion to how surprising its success was. If your model and every rival predict the same boring outcome, observing that outcome tells you nothing about which model is right — it was going to happen either way. But if your model predicts a specific, unlikely result that the rivals do *not* expect, and that result appears, the rivals are in trouble and your model has earned its keep. Weight each confirmation by one question: *how likely was this, if my model were false?*

## The "of course" trap

The commonest error is being impressed by a prediction that was bound to come true. "My theory predicted the patient would have symptoms — and she does!" Of course she does; she's sick. "My storm model predicted rain, and it rained" — when every service forecast rain. These confirmations feel like support but carry almost no weight, because they discriminate nothing: the result was expected under every story. Counting them as strong evidence is how a weak model fools its owner.

## Hunt for the improbable confirmation

The strong reasoner looks past the easy hits and asks which of a model's successes was *least* expected on its own. A model that predicts rain (likely anyway) and also pinpoints a rare hailstorm in one town (likely under nothing else) lives or dies on the hail. So when you weigh your evidence, find the prediction that stuck its neck out — the narrow time window, the exact location, the specific compound, the effect that shows up *only* where the mechanism says it should — and lean on that. Better still, *design* tests that could easily have failed, because only those can confirm strongly.

## Why equal-weighting and the shrug both lose

Two failure modes flank the truth. One treats every verified prediction as equal proof — the dodge that says "all my predictions came true, so they all confirm the model," ignoring that most were freebies. The other is the blanket shrug — "a confirmation doesn't prove anything." Both refuse the real work, which is to *rank* confirmations by their prior improbability and act on the most telling one. The cheap confirmations are nearly free; the surprising one is where the information lives.

## Overreach still loses

Weighting by surprise is not worshipping any shocking result. A surprising confirmation only counts if it was genuinely improbable *under the rivals* and was genuinely *predicted in advance* — not cherry-picked after the fact, not a fluke you would have accepted whatever happened. A bold post-hoc story the data don't actually single out is overreach, not evidence.

## In the real world

A health team chasing a stomach bug notes two facts: more people are getting sick (expected in any outbreak) and nearly every patient drank one cart's horchata in a two-hour Saturday window (expected under almost nothing else). The rising case count barely discriminates; the tight horchata window is wildly improbable unless that cart is the source — so it carries the case. Weight the surprising confirmation, run the cheap test that could refute it, and you reach the answer fastest.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
