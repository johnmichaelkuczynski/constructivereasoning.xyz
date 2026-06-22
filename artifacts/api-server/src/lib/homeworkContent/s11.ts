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
      "A bistro owner argues her new dinner menu will be profitable for four reasons: it uses seasonal local produce, the chef trained in Lyon, the plating photographs well for social media, and each dish carries a 70% gross margin at the expected covers. The profit forecast itself is built entirely on that 70% margin holding. Which claim is the load-bearing one, and how would you test it?",
    mcOptions: [
      {
        text: "The chef's Lyon training all but guarantees the menu succeeds, so the forecast is safe.",
        credit: 0,
      },
      {
        text: "The margin number is probably the key one; we could revisit the budget in a month.",
        credit: 0.6,
      },
      {
        text: "The 70% margin is the one claim the forecast cannot survive losing; price a week of real orders against actual ingredient cost and spoilage, check whether margin holds once popular low-margin dishes dominate the mix, and see whether the discounting needed to fill seats erodes it below the assumed line.",
        credit: 1.0,
      },
      {
        text: "Some of those reasons matter more than others for the profits.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The 70% margin is the one claim the forecast cannot survive losing; price a week of real orders against actual ingredient cost and spoilage, check whether margin holds once popular low-margin dishes dominate the mix, and see whether the discounting needed to fill seats erodes it below the assumed line.",
    explanation:
      "Top credit isolates the single claim the conclusion structurally depends on (margin) and proposes three cheap tests of it; treating the decorative training as a guarantee is the overreach the question is built to catch, and 'some matter more' names none.",
  },
  {
    itemType: "mc",
    prompt:
      "A SaaS team insists a 20% price hike won't cost them customers because competitors already charge more, the UI just got a redesign, support response times are fast, and 90% of revenue comes from enterprise accounts locked into multi-year contracts. Which claim does the 'no churn' conclusion actually rest on, and how would you check it?",
    mcOptions: [
      {
        text: "The lock-in claim is load-bearing; read the actual contracts to confirm they bar mid-term price changes, check renewal dates to see how many enterprise deals come up for negotiation this year, and watch whether the unlocked month-to-month small accounts churn when the new price hits.",
        credit: 1.0,
      },
      {
        text: "The pretty new UI will keep everyone happy, so churn won't move at all.",
        credit: 0,
      },
      {
        text: "Contract terms probably matter most here; we could survey customers about the price.",
        credit: 0.6,
      },
      {
        text: "Several of those factors are doing some work in the argument.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The lock-in claim is load-bearing; read the actual contracts to confirm they bar mid-term price changes, check renewal dates to see how many enterprise deals come up for negotiation this year, and watch whether the unlocked month-to-month small accounts churn when the new price hits.",
    explanation:
      "The conclusion lives or dies on whether enterprise revenue is truly contract-locked, so that is the claim to probe; crediting the redesigned UI is the decorative overreach, and 'several factors' commits to nothing testable.",
  },
  {
    itemType: "mc",
    prompt:
      "A running coach predicts his athlete will break three hours in the marathon because she trains 60 miles a week, has new carbon-plated shoes, eats carefully, and her recent half-marathon pace extrapolates straight to a 2:58 full. The whole prediction is the extrapolation from her half pace. Which claim is load-bearing, and how would you test it?",
    mcOptions: [
      {
        text: "Her disciplined diet by itself makes sub-three a lock, so the prediction holds.",
        credit: 0,
      },
      {
        text: "The half-to-full extrapolation is the load-bearing claim; have her run a 30K time trial to see whether that pace survives the extra distance, compare her own past full-versus-half ratio, and track how much she fades in the final miles of long runs.",
        credit: 1.0,
      },
      {
        text: "The pace projection is likely the main thing; she could just run the race and find out.",
        credit: 0.6,
      },
      {
        text: "Training and pace both feed into the forecast somehow.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The half-to-full extrapolation is the load-bearing claim; have her run a 30K time trial to see whether that pace survives the extra distance, compare her own past full-versus-half ratio, and track how much she fades in the final miles of long runs.",
    explanation:
      "The forecast is nothing but the extrapolation, so its validity is the load-bearing claim to test; the diet is decorative, and treating it as decisive is the overreach the data does not support.",
  },
  {
    itemType: "mc",
    prompt:
      "An engineer wants to spend $40,000 replacing a conveyor belt to cut a line's defect rate. Her case: the belt is the oldest on the floor, the rubber supplier changed last year, the belt vibrates audibly, and the defect spike began the same week vibration was first logged. The argument hinges on defects being caused by that vibration. Which claim is load-bearing, and how would you test it?",
    mcOptions: [
      {
        text: "The belt being the oldest equipment is reason enough; replacing it will obviously fix the defects.",
        credit: 0,
      },
      {
        text: "Vibration is probably the culprit; we could order the new belt and watch what happens.",
        credit: 0.6,
      },
      {
        text: "The claim that vibration causes the defects is load-bearing; measure defect rate against vibration amplitude across shifts, slow the belt to damp the vibration and see whether defects fall, and check whether the same defect type appears on lines that have no such belt.",
        credit: 1.0,
      },
      {
        text: "A few of those facts point toward the belt being the problem.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The claim that vibration causes the defects is load-bearing; measure defect rate against vibration amplitude across shifts, slow the belt to damp the vibration and see whether defects fall, and check whether the same defect type appears on lines that have no such belt.",
    explanation:
      "The $40K decision rests solely on the vibration-causes-defects link, which is therefore the claim to test; the belt's age is a decorative correlate, and assuming replacement must fix it is unearned overreach.",
  },
  {
    itemType: "mc",
    prompt:
      "A nonprofit's board says it can double annual donations because it landed a celebrity endorsement, redesigned its website, grew its email list 15%, and because last year's 40% repeat-donor rate will continue. The doubling math in the budget depends entirely on that repeat-donor rate holding. Which claim is load-bearing, and how would you test it?",
    mcOptions: [
      {
        text: "The repeat-donor rate is the load-bearing claim; check whether this year's early renewals are tracking near 40%, segment the list to see if repeat giving is concentrated in donors who may not return, and run a small renewal-appeal test to confirm the rate before betting the budget on it.",
        credit: 1.0,
      },
      {
        text: "The celebrity endorsement alone will surely double the money, so the plan is sound.",
        credit: 0,
      },
      {
        text: "The repeat rate probably carries the plan; we could wait and tally donations at year-end.",
        credit: 0.6,
      },
      {
        text: "Donations depend on a mix of those things working together.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The repeat-donor rate is the load-bearing claim; check whether this year's early renewals are tracking near 40%, segment the list to see if repeat giving is concentrated in donors who may not return, and run a small renewal-appeal test to confirm the rate before betting the budget on it.",
    explanation:
      "The forecast is arithmetically built on the 40% rate, making it the claim the conclusion cannot survive losing; the endorsement is decorative and treating it as sufficient is overreach.",
  },
  {
    itemType: "mc",
    prompt:
      "A house-flipper expects to clear $60,000 on a property because the neighborhood is gentrifying, the house has solid bones, comparable renovated homes nearby sold for $480,000, and his renovation estimate is $50,000. His profit figure assumes that $50,000 reno budget holds. Which claim is load-bearing, and how would you test it?",
    mcOptions: [
      {
        text: "Renovations always run close to estimate, so the budget claim needs no checking.",
        credit: 0,
      },
      {
        text: "Several of those points combine to make the deal look good.",
        credit: 0.3,
      },
      {
        text: "The $50,000 renovation estimate is the load-bearing claim; get three firm contractor bids on the actual scope, open a wall and inspect the plumbing and electrical for hidden costs, and price the specific finishes the comparable homes used rather than assuming the cheapest.",
        credit: 1.0,
      },
      {
        text: "The reno budget is likely the key risk; he could start the work and track spending.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The $50,000 renovation estimate is the load-bearing claim; get three firm contractor bids on the actual scope, open a wall and inspect the plumbing and electrical for hidden costs, and price the specific finishes the comparable homes used rather than assuming the cheapest.",
    explanation:
      "Profit equals resale minus reno, and the resale comps are observed while the reno figure is a guess, so the budget claim is the one most likely to break the conclusion and the one to test; 'always runs close' is the overreach.",
  },
  {
    itemType: "mc",
    prompt:
      "A clinic plans to hire a senior triage nurse to cut emergency-room wait times. The case: she is highly experienced, the waiting room was just refurbished, patients like her manner, and the team believes the slow step is the initial assessment she would take over. The plan only pays off if initial assessment is truly the bottleneck. Which claim is load-bearing, and how would you test it?",
    mcOptions: [
      {
        text: "The nurse's experience guarantees shorter waits no matter where the holdup is.",
        credit: 0,
      },
      {
        text: "The bottleneck claim probably matters most; we could hire her and see if waits drop.",
        credit: 0.6,
      },
      {
        text: "All of those reasons support hiring her about equally.",
        credit: 0.3,
      },
      {
        text: "The claim that initial assessment is the bottleneck is load-bearing; time each stage of a patient's visit to locate the longest queue, check whether the assessment line is actually where people wait, and see whether downstream bed availability, not assessment, is what caps throughput.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The claim that initial assessment is the bottleneck is load-bearing; time each stage of a patient's visit to locate the longest queue, check whether the assessment line is actually where people wait, and see whether downstream bed availability, not assessment, is what caps throughput.",
    explanation:
      "Speeding a step that is not the bottleneck saves nothing, so the bottleneck claim is what the conclusion depends on; experience and decor are decorative, and treating experience as a guarantee is overreach.",
  },
  {
    itemType: "mc",
    prompt:
      "A farmer argues switching to no-till will save money this year because fuel costs drop, the soil improves over several seasons, the practice is widely endorsed, and first-year yields will hold steady. Because the soil benefits take years, this year's savings hinge on yields holding in year one. Which claim is load-bearing, and how would you test it?",
    mcOptions: [
      {
        text: "First-year-yield stability is the load-bearing claim for this year's economics; run no-till on a few measured strips beside tilled control strips this season, compare their yields at harvest, and track weed pressure on the no-till strips to catch a yield hit early.",
        credit: 1.0,
      },
      {
        text: "Lower fuel cost alone makes the switch pay off, so yields are beside the point.",
        credit: 0,
      },
      {
        text: "Yields are probably the thing to watch; he could convert the whole farm and see.",
        credit: 0.6,
      },
      {
        text: "The savings come from a combination of those factors.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "First-year-yield stability is the load-bearing claim for this year's economics; run no-till on a few measured strips beside tilled control strips this season, compare their yields at harvest, and track weed pressure on the no-till strips to catch a yield hit early.",
    explanation:
      "Since soil gains are years out, this year's case rests entirely on yields not falling, so that is the claim to test cheaply on strips; ignoring a possible yield drop because fuel is cheaper is the overreach.",
  },
  {
    itemType: "mc",
    prompt:
      "A fund manager's thesis that a retailer's stock will rise rests on its strong brand, a respected new CEO, a 30% revenue-growth projection that drives his valuation model, and an ongoing buyback. The price target is essentially the output of that 30% growth assumption. Which claim is load-bearing, and how would you test it?",
    mcOptions: [
      {
        text: "The new CEO's reputation by itself justifies the target, so the growth number is secondary.",
        credit: 0,
      },
      {
        text: "Growth is probably central; we could hold the stock and watch the price.",
        credit: 0.6,
      },
      {
        text: "The 30% revenue-growth assumption is the load-bearing claim; check the order backlog and recent same-store sales for signs growth is already decelerating, run channel checks with suppliers on volume, and read the latest quarter to see whether year-over-year growth still supports 30%.",
        credit: 1.0,
      },
      {
        text: "Brand, CEO, and growth all prop up the thesis somewhat.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The 30% revenue-growth assumption is the load-bearing claim; check the order backlog and recent same-store sales for signs growth is already decelerating, run channel checks with suppliers on volume, and read the latest quarter to see whether year-over-year growth still supports 30%.",
    explanation:
      "The valuation is mathematically the growth assumption, so that single claim carries the thesis and must be tested; the CEO's reputation is decorative and treating it as decisive is overreach.",
  },
  {
    itemType: "mc",
    prompt:
      "A warehouse manager wants to build a second loading dock to speed up shipping. His reasons: order volume is rising, trucks visibly queue outside, the staff are skilled, and he believes dock scarcity is what makes trucks wait. The investment only helps if docks, not labor or staging, are the constraint. Which claim is load-bearing, and how would you test it?",
    mcOptions: [
      {
        text: "Rising volume makes a second dock worthwhile regardless of what causes the queue.",
        credit: 0,
      },
      {
        text: "The dock-constraint claim is load-bearing; log where trucks actually wait and for how long at each step, measure how often the existing dock sits idle while trucks queue, and trial a temporary extra dock for a week to see whether the queue clears.",
        credit: 1.0,
      },
      {
        text: "Dock capacity is probably the issue; he could build it and check the queue afterward.",
        credit: 0.6,
      },
      {
        text: "Volume and dock space together explain the waiting.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The dock-constraint claim is load-bearing; log where trucks actually wait and for how long at each step, measure how often the existing dock sits idle while trucks queue, and trial a temporary extra dock for a week to see whether the queue clears.",
    explanation:
      "If staging or labor is the real constraint, a second dock sits idle, so the dock-is-the-bottleneck claim is what the decision depends on; rising volume is a decorative motive, and acting on it regardless of cause is overreach.",
  },
  {
    itemType: "mc",
    prompt:
      "A brand attributes a national sales lift to its new TV campaign. Its evidence: the ad aired in March, total sales rose in March, brand searches ticked up, and the campaign was expensive. The 'the ad did it' conclusion really rests on the lift appearing where the ad ran. Which claim is load-bearing, and how would you test it?",
    mcOptions: [
      {
        text: "The campaign's high cost proves it must be responsible for the sales rise.",
        credit: 0,
      },
      {
        text: "A few of those signals back up the ad's effect.",
        credit: 0.3,
      },
      {
        text: "The claim that the lift is concentrated in ad markets is load-bearing; compare sales in regions where the ad aired against matched regions where it didn't, line up the daily sales rise against each market's air dates, and check whether the lift fades after the flight ends.",
        credit: 1.0,
      },
      {
        text: "The regional pattern probably matters; we could just run more ads and watch sales.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The claim that the lift is concentrated in ad markets is load-bearing; compare sales in regions where the ad aired against matched regions where it didn't, line up the daily sales rise against each market's air dates, and check whether the lift fades after the flight ends.",
    explanation:
      "National sales can rise for many reasons, so the conclusion depends on the lift tracking the ad's footprint; the price of the campaign is decorative, and reading cost as proof of effect is overreach.",
  },
  {
    itemType: "mc",
    prompt:
      "A principal credits a new reading program for a 10-point jump in fourth-grade test scores. Her support: the program is research-backed, teachers liked it, scores rose, and only fourth grade used it. The causal claim really rests on no other change explaining the same jump. Which claim is load-bearing, and how would you test it?",
    mcOptions: [
      {
        text: "Because the program is research-backed, the jump must be its doing.",
        credit: 0,
      },
      {
        text: "The no-other-cause claim is load-bearing; check whether grades that did not use the program rose by the same amount this year, see whether the gain came from a cohort that was already stronger entering fourth grade, and verify the test or scoring did not change between years.",
        credit: 1.0,
      },
      {
        text: "The causal claim is probably the crux; she could keep the program and watch next year.",
        credit: 0.6,
      },
      {
        text: "Teacher buy-in and the program both contributed to the rise.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The no-other-cause claim is load-bearing; check whether grades that did not use the program rose by the same amount this year, see whether the gain came from a cohort that was already stronger entering fourth grade, and verify the test or scoring did not change between years.",
    explanation:
      "The conclusion survives only if nothing else explains the jump, so the no-confound claim is load-bearing and a comparison grade tests it cheaply; 'research-backed, therefore it worked' is the overreach.",
  },
  {
    itemType: "mc",
    prompt:
      "A furniture maker explains why his chairs sell out: the rare walnut, the hand-rubbed finish, the ergonomic seat, and the price. He notices repeat buyers and referrals almost always mention how comfortable the chair is. The 'keep doing what works' plan really rests on comfort being the driver. Which claim is load-bearing, and how would you test it?",
    mcOptions: [
      {
        text: "Comfort is the load-bearing claim; offer the same ergonomic seat in a cheaper wood and a plainer finish at the same price and see whether sales hold, run a version with a flat seat to see whether referrals dry up, and ask buyers which single feature decided their purchase.",
        credit: 1.0,
      },
      {
        text: "The rare walnut is clearly what sells the chairs, so comfort is incidental.",
        credit: 0,
      },
      {
        text: "Comfort probably matters most; he could just keep making the chairs the same way.",
        credit: 0.6,
      },
      {
        text: "Wood, finish, and comfort all help move the chairs.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Comfort is the load-bearing claim; offer the same ergonomic seat in a cheaper wood and a plainer finish at the same price and see whether sales hold, run a version with a flat seat to see whether referrals dry up, and ask buyers which single feature decided their purchase.",
    explanation:
      "Buyer feedback points to comfort as the claim the sales depend on, so varying the decorative features while holding the seat tests it directly; assuming the expensive walnut is the driver is the overreach the feedback contradicts.",
  },
  {
    itemType: "mc",
    prompt:
      "A lab reports that a compound extends roundworm lifespan. The paper notes the compound is a known antioxidant, doses were carefully measured, treated and control worms were the same age, and treated worms lived 20% longer. The headline conclusion rests on the control worms being a genuinely comparable baseline. Which claim is load-bearing, and how would you test it?",
    mcOptions: [
      {
        text: "Since the compound is a known antioxidant, the lifespan gain is obviously real.",
        credit: 0,
      },
      {
        text: "Several of those details support the lifespan result.",
        credit: 0.3,
      },
      {
        text: "The comparability of the control group is the load-bearing claim; confirm treated and control worms came from the same batch and were kept at identical temperature and food, repeat the experiment with the experimenter blinded to which dish is which, and run a dose-response to see whether more compound yields proportionally more lifespan.",
        credit: 1.0,
      },
      {
        text: "The control comparison is likely important; the team could just publish and let others replicate.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The comparability of the control group is the load-bearing claim; confirm treated and control worms came from the same batch and were kept at identical temperature and food, repeat the experiment with the experimenter blinded to which dish is which, and run a dose-response to see whether more compound yields proportionally more lifespan.",
    explanation:
      "If the controls differ in batch or conditions, the 20% gain collapses, so their comparability is the claim the result depends on; 'it's an antioxidant, so it must work' is decorative reasoning and overreach.",
  },
  {
    itemType: "mc",
    prompt:
      "A subscription box startup tells investors it will be cash-flow positive in a year because its packaging is distinctive, its founders are seasoned, churn is a low 3% a month, and it acquires customers for less than they spend. The path to profit is built on the claim that customer lifetime value exceeds acquisition cost. Which claim is load-bearing, and how would you test it?",
    mcOptions: [
      {
        text: "The founders' track record alone makes profitability a near-certainty.",
        credit: 0,
      },
      {
        text: "The lifetime-value-over-acquisition-cost claim is load-bearing; recompute lifetime value using the actual observed churn rather than an assumed one, check whether acquisition cost stays low as the easy early customers run out, and trace a real cohort from signup to see whether its cumulative revenue passes what it cost to acquire.",
        credit: 1.0,
      },
      {
        text: "The unit economics probably carry the plan; they could keep growing and check the bank balance later.",
        credit: 0.6,
      },
      {
        text: "Low churn and cheap acquisition both feed the profit story.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The lifetime-value-over-acquisition-cost claim is load-bearing; recompute lifetime value using the actual observed churn rather than an assumed one, check whether acquisition cost stays low as the easy early customers run out, and trace a real cohort from signup to see whether its cumulative revenue passes what it cost to acquire.",
    explanation:
      "The entire profit path is the LTV-exceeds-CAC inequality, so that is the claim to stress-test with real cohort data; distinctive packaging is decorative and the founders' record is not a substitute for the unit economics.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A regional airline says a new direct route will be profitable because it serves a business hub, the planes are fuel-efficient, the crew is local, and 65% of seats are forecast to sell at full business fare. The profit model is entirely the 65%-at-full-fare assumption. Which claim is load-bearing, and how would you test it?",
    mcOptions: [
      {
        text: "The load factor at full fare is the load-bearing claim; pull advance-booking data for the first flights to see what share is buying at full fare, compare full-fare uptake on the airline's similar existing routes, and run a low-cost few weeks of flights to observe the real business-versus-discount mix before committing the schedule.",
        credit: 1.0,
      },
      {
        text: "A fuel-efficient fleet guarantees the route makes money, so the fare mix is a side detail.",
        credit: 0,
      },
      {
        text: "The fare assumption is probably key; they could launch the route and review the numbers next quarter.",
        credit: 0.6,
      },
      {
        text: "The hub location and the fares both help the route's case.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your load-bearing claim (65% selling at full business fare) from the rival 'the route fills, but mostly at discounted fares,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: read the advance-booking fare classes for the first scheduled flights and see what fraction is actually full business fare versus discounted. My lead is refuted if the plane fills but the full-fare share sits well below 65%, meaning seats sell but not at the price the profit model assumes.",
      yieldAnchors: [
        "Profit model assumes 65% of seats at full business fare",
        "The route serves a business hub",
        "Fuel-efficient planes and local crew",
      ],
      riskAnchors: [
        "Advance bookings show the full-fare share near 65%",
        "Comparable existing routes hit similar full-fare uptake",
        "A trial run reproduces the assumed business-fare mix",
      ],
      defeatedBy: [
        "A fuel-efficient fleet alone guarantees profitability",
        "Filling the seats at any fare proves the model",
      ],
    },
    correctAnswer:
      "The load factor at full fare is the load-bearing claim; pull advance-booking data for the first flights to see what share is buying at full fare, compare full-fare uptake on the airline's similar existing routes, and run a low-cost few weeks of flights to observe the real business-versus-discount mix before committing the schedule.",
    explanation:
      "The forecast is arithmetically the full-fare load factor, so that claim carries the conclusion and the booking mix tests it cheaply; an efficient fleet is decorative, and treating any full plane as vindication ignores the fare split the model depends on.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A gym chain plans to add a smoothie bar to every location, arguing members want healthy food, the brand looks premium, staff can upsell, and a pilot location's bar covered its costs within three months. The rollout case rests on the pilot's payback being representative of typical locations. Which claim is load-bearing, and how would you test it?",
    mcOptions: [
      {
        text: "The premium brand image makes the smoothie bars a sure win everywhere.",
        credit: 0,
      },
      {
        text: "The representativeness of the pilot is load-bearing; check whether the pilot gym has unusually high foot traffic or affluence versus the average location, open bars in two or three ordinary-traffic gyms and measure their payback, and see whether the pilot's sales came from new spending or just cannibalized other purchases.",
        credit: 1.0,
      },
      {
        text: "The pilot result probably generalizes; they could roll out everywhere and watch revenue.",
        credit: 0.6,
      },
      {
        text: "Member demand and the pilot both support the rollout.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your load-bearing claim (the pilot is representative) from the rival 'the pilot succeeded only because it sits in a high-traffic, affluent location,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: open a smoothie bar in a couple of average-traffic locations and compare their payback period to the pilot's three months. My lead is refuted if those ordinary gyms take far longer to break even or never do, showing the pilot's success rode on its unusual location rather than on the concept.",
      yieldAnchors: [
        "Pilot bar covered its costs within three months",
        "Rollout planned for every location",
        "Members are assumed to want healthy food",
      ],
      riskAnchors: [
        "Average-traffic gyms hit similar payback",
        "Pilot sales are new spending, not cannibalized purchases",
        "Pilot's traffic and affluence match the chain average",
      ],
      defeatedBy: [
        "A premium brand image alone guarantees success everywhere",
        "One profitable pilot proves every location will profit",
      ],
    },
    correctAnswer:
      "The representativeness of the pilot is load-bearing; check whether the pilot gym has unusually high foot traffic or affluence versus the average location, open bars in two or three ordinary-traffic gyms and measure their payback, and see whether the pilot's sales came from new spending or just cannibalized other purchases.",
    explanation:
      "The rollout only works if the typical location resembles the pilot, so the representativeness claim is what the conclusion cannot survive losing; the premium image is decorative and one pilot is not proof of a chain-wide outcome.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A craft brewery believes a hazy IPA is driving its taproom growth. Owners point to the beer's bold label, its high price, the social-media buzz, and the fact that taproom revenue rose 30% the quarter it launched. The 'lean into this beer' plan rests on the IPA, not some coincident change, causing the growth. Which claim is load-bearing, and how would you test it?",
    mcOptions: [
      {
        text: "The high price proves the IPA is what drove the revenue jump.",
        credit: 0,
      },
      {
        text: "The IPA-caused-the-growth claim is probably central; they could brew more of it and watch sales.",
        credit: 0.6,
      },
      {
        text: "The claim that the IPA caused the growth is load-bearing; check whether the IPA's own sales account for most of the 30% rise or whether other beers and walk-in traffic also jumped, see what else changed that quarter such as new hours or an event, and look at whether repeat visits cluster among IPA buyers.",
        credit: 1.0,
      },
      {
        text: "The label, the buzz, and the beer all play a part in the growth.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your load-bearing claim (the IPA caused the growth) from the rival 'a coincident change like new taproom hours drove the rise,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: break the 30% revenue rise down by product and see whether the new IPA's own sales make up most of it. My lead is refuted if the IPA is a small share of the increase while other beers and overall traffic rose just as much, pointing to a broader change rather than the beer.",
      yieldAnchors: [
        "Taproom revenue rose 30% the quarter the IPA launched",
        "The beer has a bold label and social-media buzz",
        "The IPA is priced high",
      ],
      riskAnchors: [
        "The IPA's own sales account for most of the rise",
        "Repeat visits cluster among IPA buyers",
        "No other major taproom change happened that quarter",
      ],
      defeatedBy: [
        "A high price proves the beer caused the growth",
        "Revenue rising in the same quarter proves causation",
      ],
    },
    correctAnswer:
      "The claim that the IPA caused the growth is load-bearing; check whether the IPA's own sales account for most of the 30% rise or whether other beers and walk-in traffic also jumped, see what else changed that quarter such as new hours or an event, and look at whether repeat visits cluster among IPA buyers.",
    explanation:
      "The strategy depends on the IPA, not a coincident change, being the cause, so that is the claim to isolate; the label and price are decorative correlates and same-quarter timing is not proof of causation.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An e-commerce team says a checkout redesign will lift conversions because it looks modern, loads faster, removes a shipping-cost surprise at the final step, and shoppers told them surprise fees are why they abandon carts. The conversion case rests on the surprise-fee removal being the real abandonment driver. Which claim is load-bearing, and how would you test it?",
    mcOptions: [
      {
        text: "A modern look guarantees more conversions, so the fee question hardly matters.",
        credit: 0,
      },
      {
        text: "The fee-surprise claim is load-bearing; pull funnel data to see whether most abandonments actually occur on the step where the fee appears, A/B test showing the shipping cost upfront against the old flow, and check whether carts that abandon are disproportionately those with high shipping fees.",
        credit: 1.0,
      },
      {
        text: "The fee issue is probably the key; they could ship the redesign and watch conversion.",
        credit: 0.6,
      },
      {
        text: "Speed, looks, and the fee fix together should raise conversions.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your load-bearing claim (the surprise fee causes abandonment) from the rival 'people abandon for unrelated reasons earlier in checkout,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: look at the funnel to see whether abandonments spike specifically on the step where the shipping fee is revealed. My lead is refuted if most carts are abandoned before that step or are spread evenly across the flow, meaning the surprise fee is not the load-bearing cause.",
      yieldAnchors: [
        "Shoppers say surprise fees cause cart abandonment",
        "The redesign removes the final-step shipping surprise",
        "The new checkout looks modern and loads faster",
      ],
      riskAnchors: [
        "Most abandonments occur on the fee-reveal step",
        "Showing the fee upfront beats the old flow in an A/B test",
        "High-fee carts abandon disproportionately",
      ],
      defeatedBy: [
        "A modern look alone guarantees higher conversion",
        "Self-reported reasons are taken as proven without funnel data",
      ],
    },
    correctAnswer:
      "The fee-surprise claim is load-bearing; pull funnel data to see whether most abandonments actually occur on the step where the fee appears, A/B test showing the shipping cost upfront against the old flow, and check whether carts that abandon are disproportionately those with high shipping fees.",
    explanation:
      "The redesign pays off only if the fee surprise is the real driver, so that claim is load-bearing and the funnel plus an A/B test probe it directly; the modern look is decorative and self-reports are a lead to test, not proof.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A vineyard owner plans to expand his rosé production, reasoning that rosé is trendy, the bottle design is striking, distributors are friendly, and his rosé already sells out every summer. The expansion case rests on the sell-out reflecting genuine excess demand rather than his simply bottling very little. Which claim is load-bearing, and how would you test it?",
    mcOptions: [
      {
        text: "Because rosé is trendy, expanding production is guaranteed to sell.",
        credit: 0,
      },
      {
        text: "The trend and the sell-out together justify expanding.",
        credit: 0.3,
      },
      {
        text: "The claim that the sell-out reflects unmet demand is load-bearing; check how small this year's bottling run was relative to the sell-out, raise the price a little and see whether it still sells out, and offer a limited additional batch midseason to see whether the extra bottles actually move.",
        credit: 1.0,
      },
      {
        text: "Unmet demand is probably the issue; he could triple production and see what happens.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your load-bearing claim (real excess demand) from the rival 'it sells out only because he bottles so little,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: release a limited extra batch midseason and see whether those additional bottles also sell. My lead is refuted if the extra bottles linger unsold, showing the sell-out was an artifact of tiny production rather than genuine excess demand.",
      yieldAnchors: [
        "The rosé sells out every summer",
        "Rosé is trendy and the bottle design is striking",
        "Production volume is currently small",
      ],
      riskAnchors: [
        "A midseason extra batch also sells out",
        "A modest price increase doesn't stop the sell-out",
        "Sell-out persists when bottling is meaningfully larger",
      ],
      defeatedBy: [
        "A market trend alone guarantees the expansion sells",
        "Selling out a tiny run proves large demand",
      ],
    },
    correctAnswer:
      "The claim that the sell-out reflects unmet demand is load-bearing; check how small this year's bottling run was relative to the sell-out, raise the price a little and see whether it still sells out, and offer a limited additional batch midseason to see whether the extra bottles actually move.",
    explanation:
      "Expansion only pays if demand truly exceeds supply, so that claim carries the decision; the trend and the bottle are decorative, and reading a small-batch sell-out as proof of large demand is the overreach to guard against.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A hospital wants to credit a new hand-hygiene poster campaign for a drop in infections. Support: the posters are eye-catching, staff approved them, infections fell 15% afterward, and the campaign targeted the high-risk ward. The conclusion rests on the poster campaign, not a coincident infection-control change, causing the drop. Which claim is load-bearing, and how would you test it?",
    mcOptions: [
      {
        text: "The campaign-caused-the-drop claim is load-bearing; check whether actual hand-washing rates rose where sensors or audits measure them, see whether wards without the posters saw the same 15% fall, and confirm no other change such as a new antiseptic or fewer admissions coincided with the campaign.",
        credit: 1.0,
      },
      {
        text: "Eye-catching posters obviously cut the infections, so no further check is needed.",
        credit: 0,
      },
      {
        text: "The causal claim is probably central; they could keep the posters up and watch infections.",
        credit: 0.6,
      },
      {
        text: "Staff approval and the posters both helped reduce infections.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your load-bearing claim (the posters caused the drop) from the rival 'a coincident change like a new antiseptic caused it,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare infection rates in wards that got the posters against similar wards that did not over the same period. My lead is refuted if the no-poster wards fell by the same 15%, showing a hospital-wide change rather than the campaign drove the improvement.",
      yieldAnchors: [
        "Infections fell 15% after the campaign",
        "Posters were eye-catching and staff-approved",
        "The campaign targeted the high-risk ward",
      ],
      riskAnchors: [
        "Measured hand-washing rates rose where the posters went up",
        "No-poster wards did not see the same drop",
        "No other infection-control change coincided",
      ],
      defeatedBy: [
        "Eye-catching posters obviously prove the cause",
        "An infection drop in the same period proves causation",
      ],
    },
    correctAnswer:
      "The campaign-caused-the-drop claim is load-bearing; check whether actual hand-washing rates rose where sensors or audits measure them, see whether wards without the posters saw the same 15% fall, and confirm no other change such as a new antiseptic or fewer admissions coincided with the campaign.",
    explanation:
      "The conclusion depends on the campaign rather than a coincident change being the cause, so that is the load-bearing claim to test with a no-poster comparison; the posters' look is decorative and a same-period drop is not proof.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A high-school basketball coach argues his new full-court press won the team its winning streak. His case: the press is aggressive, the gym crowd loves it, the team won six straight, and opponents committed more turnovers in those games. The conclusion rests on the press, not the run of weak opponents, driving the turnovers and wins. Which claim is load-bearing, and how would you test it?",
    mcOptions: [
      {
        text: "The press is exciting and the crowd loves it, so it clearly won the games.",
        credit: 0,
      },
      {
        text: "Several of those facts back up the press's value.",
        credit: 0.3,
      },
      {
        text: "The claim that the press, not weak opponents, caused the turnovers is load-bearing; check the strength of the six beaten teams against the schedule, see whether opponent turnovers spike specifically during press possessions on the game film, and watch whether the press still forces turnovers against a strong upcoming opponent.",
        credit: 1.0,
      },
      {
        text: "The press probably did it; he could keep running it and watch the record.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your load-bearing claim (the press caused the turnovers) from the rival 'the team just played six weak opponents,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: review the game film and see whether opponent turnovers actually occur during press possessions rather than in regular half-court play. My lead is refuted if the turnovers are scattered evenly regardless of the press, especially against weak teams, pointing to schedule strength rather than the press.",
      yieldAnchors: [
        "The team won six straight",
        "Opponents committed more turnovers in those games",
        "The press is aggressive and crowd-pleasing",
      ],
      riskAnchors: [
        "Turnovers spike specifically during press possessions on film",
        "The press forces turnovers against a strong opponent too",
        "The six beaten teams were not unusually weak",
      ],
      defeatedBy: [
        "An exciting, crowd-pleasing press obviously wins games",
        "Six wins in a row prove the tactic caused them",
      ],
    },
    correctAnswer:
      "The claim that the press, not weak opponents, caused the turnovers is load-bearing; check the strength of the six beaten teams against the schedule, see whether opponent turnovers spike specifically during press possessions on the game film, and watch whether the press still forces turnovers against a strong upcoming opponent.",
    explanation:
      "The conclusion depends on the press rather than a soft schedule being the cause, so that is the load-bearing claim and the film plus opponent strength test it; crowd excitement is decorative and a six-game streak alone is not proof.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A bookstore owner plans to triple her shelf space for cookbooks, reasoning that cookbooks have beautiful covers, customers browse them, the section is near the cafe, and cookbooks turn over faster than any other section. The expansion rests on the fast turnover reflecting strong demand rather than the section simply being tiny and constantly restocked. Which claim is load-bearing, and how would you test it?",
    mcOptions: [
      {
        text: "The fast-turnover-means-demand claim is load-bearing; compare cookbook sales per linear foot of shelf against other sections, expand cookbooks modestly first and see whether total cookbook sales actually rise rather than just spreading out, and check whether shoppers leave because cookbooks are out of stock.",
        credit: 1.0,
      },
      {
        text: "Cookbooks have gorgeous covers, so tripling the space is sure to pay off.",
        credit: 0,
      },
      {
        text: "Turnover is probably the signal; she could triple the space and see how sales go.",
        credit: 0.6,
      },
      {
        text: "Browsing, location, and turnover all favor the cookbook section.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your load-bearing claim (fast turnover reflects real demand) from the rival 'the section just turns over because it is tiny,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: expand the cookbook section modestly and see whether total cookbook sales rise rather than the same sales simply spreading across more shelf. My lead is refuted if sales stay flat as space grows, showing the high turnover was an artifact of a small, frequently restocked section, not unmet demand.",
      yieldAnchors: [
        "Cookbooks turn over faster than any other section",
        "The cookbook section is currently small",
        "Customers browse the cookbooks near the cafe",
      ],
      riskAnchors: [
        "Sales per linear foot beat other sections",
        "A modest expansion raises total cookbook sales",
        "Shoppers leave when cookbooks are out of stock",
      ],
      defeatedBy: [
        "Beautiful covers alone guarantee the expansion pays off",
        "High turnover of a tiny section proves large demand",
      ],
    },
    correctAnswer:
      "The fast-turnover-means-demand claim is load-bearing; compare cookbook sales per linear foot of shelf against other sections, expand cookbooks modestly first and see whether total cookbook sales actually rise rather than just spreading out, and check whether shoppers leave because cookbooks are out of stock.",
    explanation:
      "The expansion only works if turnover signals unmet demand, so that claim carries the decision and a modest expansion tests it cheaply; the covers and location are decorative, and reading rapid turnover of a tiny section as proof of demand is overreach.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A city transit office argues a new express bus reduced downtown car traffic because the bus is sleek, riders praise it, downtown car counts fell 8% after launch, and the bus runs the main corridor. The conclusion rests on the bus, rather than a coincident change like a gas-price spike, drawing those drivers off the road. Which claim is load-bearing, and how would you test it?",
    mcOptions: [
      {
        text: "A sleek, well-liked bus obviously cut the car traffic, so the 8% is settled.",
        credit: 0,
      },
      {
        text: "The bus-caused-the-drop claim is load-bearing; survey new bus riders on whether they previously drove that route, check whether the car-count drop is concentrated on the corridor the bus serves rather than citywide, and confirm no coincident change such as a fuel-price spike or a parking-fee hike hit at the same time.",
        credit: 1.0,
      },
      {
        text: "The bus probably drew the drivers; they could keep running it and watch car counts.",
        credit: 0.6,
      },
      {
        text: "Rider praise and the traffic drop both support the bus's effect.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your load-bearing claim (the bus drew the drivers off the road) from the rival 'a gas-price spike cut driving everywhere,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the 8% car-count drop is concentrated on the corridor the express bus serves rather than spread evenly across the whole city. My lead is refuted if car counts fell just as much on routes the bus doesn't serve, pointing to a citywide cause like fuel prices rather than the bus.",
      yieldAnchors: [
        "Downtown car counts fell 8% after the bus launched",
        "The bus runs the main corridor",
        "The bus is sleek and riders praise it",
      ],
      riskAnchors: [
        "Surveyed new riders previously drove that route",
        "The car-count drop concentrates on the bus corridor",
        "No coincident fuel-price or parking change occurred",
      ],
      defeatedBy: [
        "A sleek, well-liked bus obviously caused the drop",
        "An 8% fall after launch proves the bus caused it",
      ],
    },
    correctAnswer:
      "The bus-caused-the-drop claim is load-bearing; survey new bus riders on whether they previously drove that route, check whether the car-count drop is concentrated on the corridor the bus serves rather than citywide, and confirm no coincident change such as a fuel-price spike or a parking-fee hike hit at the same time.",
    explanation:
      "The conclusion depends on the bus rather than a coincident change drawing drivers off, so that claim is load-bearing and the corridor-versus-citywide comparison tests it; the bus's design is decorative and a post-launch dip is not proof.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A coworking startup pitches investors that it will be profitable within 18 months. Its deck rests on four claims: the location is desirable, the interior design wins awards, members refer friends often, and 85% desk occupancy will be sustained at the listed monthly rate. The financial model's break-even is computed directly from that 85%-occupancy-at-full-rate figure; the other points are color. In one paragraph, identify the load-bearing claim and describe how you would test it before investing.",
    writtenRubric: {
      modelAnswer:
        "The load-bearing claim is the sustained 85% desk occupancy at the listed rate, because the break-even date is arithmetically derived from it while the award-winning design and referral habit are decorative and could be dropped without touching the model. I would test it three ways: pull the actual signed-membership and daily badge-in data to see what occupancy the space is really running today versus the assumed 85%; check whether that occupancy holds at the full listed rate rather than at the introductory discounts that may be propping up early sign-ups; and look at the churn and seasonality of comparable coworking spaces to see whether 85% is sustainable rather than a launch-month peak. If occupancy is well under 85%, or only reaches it with discounts that break the rate assumption, the break-even claim collapses regardless of how beautiful the space is.",
      yieldAnchors: [
        "Break-even is computed from 85% occupancy at the listed rate",
        "The design and location are presented as selling points",
        "Members refer friends often",
      ],
      riskAnchors: [
        "Actual badge-in data shows occupancy near 85%",
        "Occupancy holds at the full listed rate, not just at discounts",
        "Comparable spaces sustain similar occupancy without seasonal collapse",
      ],
      defeatedBy: [
        "An award-winning interior guarantees profitability",
        "Every listed claim is equally important and must be tested at once",
        "Nothing can be judged until the company has years of data",
      ],
    },
    correctAnswer:
      "The load-bearing claim is the sustained 85% desk occupancy at the listed rate, because the break-even date is arithmetically derived from it while the award-winning design and referral habit are decorative and could be dropped without touching the model. I would test it three ways: pull the actual signed-membership and daily badge-in data to see what occupancy the space is really running today versus the assumed 85%; check whether that occupancy holds at the full listed rate rather than at the introductory discounts that may be propping up early sign-ups; and look at the churn and seasonality of comparable coworking spaces to see whether 85% is sustainable rather than a launch-month peak. If occupancy is well under 85%, or only reaches it with discounts that break the rate assumption, the break-even claim collapses regardless of how beautiful the space is.",
    explanation:
      "Under CCR the dodge 'every claim matters, test them all' and the 'can't judge without years of data' refusal earn near-zero; top credit isolates the one claim the conclusion cannot survive losing (occupancy at full rate) and names cheap tests that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A school district claims its new laptop program improved graduation rates, which rose from 82% to 88% over two years. The district cites that students liked the laptops, teachers received training, the laptops were modern, and the same cohort that got laptops also graduated at the higher rate. The causal conclusion really depends on no other change explaining the rise. In one paragraph, identify the load-bearing claim and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The load-bearing claim is that nothing besides the laptops explains the graduation jump, since the program-worked conclusion survives only if that holds; student enthusiasm, teacher training, and the laptops' modernity are decorative and could each be false without changing whether laptops caused the rise. I would test it by comparing graduation trends in neighboring districts that did not adopt laptops over the same two years to see whether they rose similarly; by checking whether the laptop cohort differed at intake — smaller class sizes, a new attendance policy, or stronger incoming grades — that could account for the gain; and by looking at whether the improvement concentrated among heavy laptop users rather than appearing uniformly. If comparison districts rose just as much, or a coincident policy change lines up with the gain, the causal claim falls even though everyone liked the laptops.",
      yieldAnchors: [
        "Graduation rose from 82% to 88% over two years",
        "The laptop cohort graduated at the higher rate",
        "Students liked the laptops and teachers were trained",
      ],
      riskAnchors: [
        "Comparison districts without laptops did not rise as much",
        "The cohort did not differ at intake or by a coincident policy",
        "The gain concentrated among heavy laptop users",
      ],
      defeatedBy: [
        "Students liking the laptops proves the program worked",
        "A rise during the program proves the laptops caused it",
        "Causes are too tangled to conclude anything",
      ],
    },
    correctAnswer:
      "The load-bearing claim is that nothing besides the laptops explains the graduation jump, since the program-worked conclusion survives only if that holds; student enthusiasm, teacher training, and the laptops' modernity are decorative and could each be false without changing whether laptops caused the rise. I would test it by comparing graduation trends in neighboring districts that did not adopt laptops over the same two years to see whether they rose similarly; by checking whether the laptop cohort differed at intake — smaller class sizes, a new attendance policy, or stronger incoming grades — that could account for the gain; and by looking at whether the improvement concentrated among heavy laptop users rather than appearing uniformly. If comparison districts rose just as much, or a coincident policy change lines up with the gain, the causal claim falls even though everyone liked the laptops.",
    explanation:
      "CCR gives near-zero to 'students liked them, so it worked' and to 'too tangled to conclude'; full credit isolates the no-confound claim the causal conclusion depends on and names a comparison-district test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "An investor is weighing a solar-panel installer that promises 25% annual returns. The pitch rests on the founder's charisma, a polished app, glowing early-customer reviews, and a projection that government rebates covering 30% of each install will continue for ten years. The return model is built entirely on those rebates persisting at 30%. In one paragraph, identify the load-bearing claim and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The load-bearing claim is that the 30% government rebate persists for the full ten years, because the 25% return is computed on top of that subsidy while the founder's charisma, the app, and the reviews are decorative and could vanish without changing the math if the rebate held. I would test it by reading the actual legislation and its sunset or step-down clauses to see how long 30% is guaranteed and when it is scheduled to taper; by checking the program's funding history and any pending budget proposals for signs the rebate is being cut; and by re-running the return model at a reduced or zero rebate to see whether the business clears even a modest return without the subsidy. If the rebate is set to step down in three years or is politically vulnerable, the 25% return claim collapses no matter how charismatic the founder is.",
      yieldAnchors: [
        "The 25% return is modeled on a persistent 30% rebate",
        "Early reviews are glowing and the app is polished",
        "The founder is charismatic",
      ],
      riskAnchors: [
        "The legislation guarantees 30% for the full ten years",
        "Funding history shows no scheduled step-down or cut",
        "The model still returns acceptably at a reduced rebate",
      ],
      defeatedBy: [
        "A charismatic founder makes the returns a sure thing",
        "Glowing early reviews prove the ten-year projection",
        "Policy is unpredictable, so no judgment is possible",
      ],
    },
    correctAnswer:
      "The load-bearing claim is that the 30% government rebate persists for the full ten years, because the 25% return is computed on top of that subsidy while the founder's charisma, the app, and the reviews are decorative and could vanish without changing the math if the rebate held. I would test it by reading the actual legislation and its sunset or step-down clauses to see how long 30% is guaranteed and when it is scheduled to taper; by checking the program's funding history and any pending budget proposals for signs the rebate is being cut; and by re-running the return model at a reduced or zero rebate to see whether the business clears even a modest return without the subsidy. If the rebate is set to step down in three years or is politically vulnerable, the 25% return claim collapses no matter how charismatic the founder is.",
    explanation:
      "The cautious 'policy is unpredictable, so no judgment is possible' earns near-zero, as does 'charismatic founder, sure thing'; top credit isolates the rebate-persistence claim the return depends on and names tests, including a zero-rebate stress test, that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A bakery owner concludes that her sourdough's popularity comes from her grandmother's heirloom starter. She points to the starter's age, its romantic backstory that customers love, the rustic crust, and the fact that the sourdough outsells every other loaf. Her plan to market the heritage starter rests on the starter, not the recipe or technique, being what makes the bread sell. In one paragraph, identify the load-bearing claim and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The load-bearing claim is that the heirloom starter itself, rather than the recipe, fermentation time, or baker's technique, is what makes the sourdough sell, because the heritage-marketing plan only pays off if the starter is the active ingredient; the backstory and rustic crust are decorative and could be dropped without touching the question. I would test it by running a blind taste test of loaves made with the heirloom starter against loaves made with a fresh starter but the same recipe and technique to see whether customers can tell or prefer the heirloom; by checking whether sales hold when a batch is quietly made with an ordinary starter; and by asking buyers what actually drives their purchase, separating those who cite taste from those who cite the story. If tasters can't distinguish the loaves and sales hold with a fresh starter, the starter is decorative and the recipe or technique is load-bearing instead.",
      yieldAnchors: [
        "The sourdough outsells every other loaf",
        "Customers love the starter's backstory",
        "The loaf has a rustic crust",
      ],
      riskAnchors: [
        "Blind tasters prefer the heirloom-starter loaf",
        "Sales drop when a batch uses an ordinary starter",
        "Buyers cite taste over the story as their reason",
      ],
      defeatedBy: [
        "The romantic backstory proves the starter sells the bread",
        "The starter being old proves it is the cause",
        "Taste is too subjective to test anything",
      ],
    },
    correctAnswer:
      "The load-bearing claim is that the heirloom starter itself, rather than the recipe, fermentation time, or baker's technique, is what makes the sourdough sell, because the heritage-marketing plan only pays off if the starter is the active ingredient; the backstory and rustic crust are decorative and could be dropped without touching the question. I would test it by running a blind taste test of loaves made with the heirloom starter against loaves made with a fresh starter but the same recipe and technique to see whether customers can tell or prefer the heirloom; by checking whether sales hold when a batch is quietly made with an ordinary starter; and by asking buyers what actually drives their purchase, separating those who cite taste from those who cite the story. If tasters can't distinguish the loaves and sales hold with a fresh starter, the starter is decorative and the recipe or technique is load-bearing instead.",
    explanation:
      "CCR penalizes 'the backstory proves it' and the 'taste is too subjective to test' refusal; full credit isolates the starter-is-the-cause claim the plan depends on and names a blind swap test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A logistics manager argues that buying a fleet of electric delivery vans will cut costs. His case: the vans are quiet, drivers like them, the brand looks green to customers, and fuel-and-maintenance savings of $9,000 per van per year will pay back the higher purchase price in four years. That payback rests entirely on the $9,000 annual savings figure. In one paragraph, identify the load-bearing claim and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The load-bearing claim is the $9,000-per-van annual savings, since the four-year payback is computed directly from it while the quiet ride, driver preference, and green image are decorative and could be false without changing the cost case. I would test it by running two or three electric vans alongside the existing diesel ones for a few months on the same routes and metering their real energy and maintenance costs rather than relying on the brochure figure; by checking whether the savings assume cheap depot charging that may not hold once electricity demand charges or public charging are factored in; and by accounting for battery degradation and resale value, which can erode the lifetime savings the payback ignores. If the measured savings come in well below $9,000 or charging costs more than assumed, the payback claim collapses even though everyone enjoys the quiet vans.",
      yieldAnchors: [
        "Four-year payback is computed from $9,000 annual savings per van",
        "Drivers like the quiet vans",
        "The fleet projects a green image",
      ],
      riskAnchors: [
        "A metered trial confirms savings near $9,000 per van",
        "Charging costs stay low after demand charges are included",
        "Battery degradation and resale don't erase the savings",
      ],
      defeatedBy: [
        "A green brand image proves the vans cut costs",
        "Drivers liking the vans proves the payback",
        "Future costs are too uncertain to decide anything",
      ],
    },
    correctAnswer:
      "The load-bearing claim is the $9,000-per-van annual savings, since the four-year payback is computed directly from it while the quiet ride, driver preference, and green image are decorative and could be false without changing the cost case. I would test it by running two or three electric vans alongside the existing diesel ones for a few months on the same routes and metering their real energy and maintenance costs rather than relying on the brochure figure; by checking whether the savings assume cheap depot charging that may not hold once electricity demand charges or public charging are factored in; and by accounting for battery degradation and resale value, which can erode the lifetime savings the payback ignores. If the measured savings come in well below $9,000 or charging costs more than assumed, the payback claim collapses even though everyone enjoys the quiet vans.",
    explanation:
      "The cautious 'future costs are too uncertain to decide' earns near-zero, as does crediting the green image; top credit isolates the savings figure the payback depends on and names a metered trial that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "load-bearing-claims",
  title: "Load-Bearing vs. Decorative",
  weekNumber: 2,
  blurb:
    "Most arguments carry one or two claims they cannot survive losing and several they could drop unharmed. Find the load-bearing claim and test that — not the decorative trim around it.",
  lectureTitle:
    "2.3 Load-Bearing vs. Decorative: isolating the claims a model cannot survive losing",
  body: `# Load-Bearing vs. Decorative

A model is not a flat list of equally important claims. Like a building, it has a few load-bearing members holding the whole thing up and a lot of decorative trim that could be stripped away without the roof falling. Reflexive caution treats every premise as equally suspect and either tests none of them ("too much to check") or sprays attention evenly across all of them. The constructive move is sharper: find the one or two claims the conclusion *cannot survive losing*, and aim your cheapest, hardest test straight at those.

## The wrecking-ball question

For each claim a conclusion rests on, ask: *if this turned out to be false, would the conclusion still stand?* If yes, the claim is decorative — interesting, maybe true, but not holding weight. If the conclusion collapses, the claim is load-bearing. A profit forecast that is arithmetically the product of one margin assumption is *that assumption* wearing a costume of supporting color. The chef's pedigree, the nice plating, the local produce — strip them all away and the forecast is unchanged. Strip away the margin and there is no forecast at all.

## Decoration often does the persuading

The trap is that decorative claims are usually the *vivid* ones — the charismatic founder, the award-winning design, the romantic backstory. They carry the emotional weight of the pitch while carrying none of the logical weight. A claim can be completely true, widely admired, and still irrelevant to whether the conclusion holds. Train yourself to feel the pull of a vivid claim and then ask whether the conclusion actually leans on it. Usually it doesn't.

## Test the beam, not the wallpaper

Once you've found the load-bearing claim, the work is to attack it cheaply. Name the observation that would show whether the beam holds: meter the real margin for a week, pull the actual occupancy data, read the contract for the lock-in clause, run the no-till strip beside a tilled control. A good test of the load-bearing claim is worth more than a hundred confirmations of decorative ones. If the beam holds, the conclusion is sound; if it cracks, you've saved yourself from acting on a pretty ruin.

## Why "every claim matters, check them all" loses

Spreading equal scrutiny across all premises *sounds* rigorous, but it is the zero-credit dodge: it names no priority, wastes the testing budget on trim, and often never gets to the beam at all. Inquiry has limited time and money. Refusing to rank the claims by how much they carry is refusing to do the actual reasoning. "We can't tell which one matters" is almost never true — the arithmetic of the conclusion usually points straight at the load-bearing claim.

## Overreach still loses

The opposite error is just as wrong: declaring a vivid decorative claim the cause and acting on it. "The founder is brilliant, so the returns are guaranteed" treats wallpaper as a foundation. The winning move names the genuinely load-bearing claim *the structure actually depends on* and tests that — never inflates a decorative one into a guarantee.

## In the real world

A startup tells investors it will be cash-flow positive in a year: great packaging, seasoned founders, 3% churn, and customers who spend more than they cost to acquire. Three of those are trim. The whole path to profit is the single inequality *lifetime value exceeds acquisition cost*. So you don't admire the packaging or the résumés — you recompute lifetime value with the real churn, watch whether acquisition cost rises as easy customers run out, and trace one real cohort from signup to see whether it ever earns back what it cost. Test the beam, ignore the wallpaper, and you learn in a week what the pitch deck hid behind its prettiest claims.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
