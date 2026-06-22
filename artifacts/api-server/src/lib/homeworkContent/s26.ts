import type { SectionContent, HomeworkItem } from "./types";

const mcq: HomeworkItem[] = [
  {
    itemType: "mc",
    prompt:
      "A bistro's two-week trial of a $14 mushroom risotto shows it outselling the dish it replaced and lifting average check size, though its food cost runs higher. The chef must decide what to do. Which approach best acts on the evidence while staying ready to reverse?",
    mcOptions: [
      {
        text: "Keep the risotto on the menu now, since it is outselling and raising checks, but set an explicit drop trigger: pull it if its margin per cover falls below the old dish's for two straight weeks or if its share of orders sinks under 8%.",
        credit: 1.0,
      },
      {
        text: "Keep the risotto for now because it is selling well, and look at the numbers again sometime next quarter.",
        credit: 0.6,
      },
      {
        text: "The risotto seems to be working, so leave it on and see how it goes.",
        credit: 0.3,
      },
      {
        text: "Sales can swing for countless reasons, so don't commit to keeping it until a full year of data is in.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Keep the risotto on the menu now, since it is outselling and raising checks, but set an explicit drop trigger: pull it if its margin per cover falls below the old dish's for two straight weeks or if its share of orders sinks under 8%.",
    explanation:
      "Top credit acts on the best current evidence and names a concrete, observable trigger that would reverse the call; the 'wait a full year' option freezes and acts on nothing, earning zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A web team's new checkout flow cut cart abandonment from 38% to 29% over a five-day A/B test with strong sample size. Leadership wants a recommendation. Which decision best fits acting now while staying ready to drop it?",
    mcOptions: [
      {
        text: "Roll the new flow out to everyone, since the lift is large and clean, but commit in advance to revert if abandonment climbs back above 34% for three consecutive days or if refund requests rise after launch.",
        credit: 1.0,
      },
      {
        text: "Ship the new flow permanently and turn off the abandonment dashboard so the team can focus on other features.",
        credit: 0,
      },
      {
        text: "Ship the new flow because the test looked good, and we can always revisit it later if something seems off.",
        credit: 0.6,
      },
      {
        text: "The numbers look better, so just launch it.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Roll the new flow out to everyone, since the lift is large and clean, but commit in advance to revert if abandonment climbs back above 34% for three consecutive days or if refund requests rise after launch.",
    explanation:
      "The strongest move commits to the win and writes down a specific reversal condition before launch; turning off the dashboard locks the choice in with no exit and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A farmer's side-by-side plots show a new slow-release fertilizer yielding 12% more wheat than her usual blend across one season, at slightly higher cost. She plans next year's order. Which approach best fits the evidence?",
    mcOptions: [
      {
        text: "Switch most of next year's acreage to the new fertilizer, given the clear yield gain, but keep two control strips on the old blend and drop the switch if the new fertilizer's yield edge disappears or net profit per acre falls below the old blend's.",
        credit: 1.0,
      },
      {
        text: "One season proves nothing about soil, so keep buying the old blend until many years confirm the result.",
        credit: 0,
      },
      {
        text: "The new fertilizer looks better, so order it for next year and trust it.",
        credit: 0.3,
      },
      {
        text: "Buy the new fertilizer for next year because it yielded more, and reassess after harvest.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Switch most of next year's acreage to the new fertilizer, given the clear yield gain, but keep two control strips on the old blend and drop the switch if the new fertilizer's yield edge disappears or net profit per acre falls below the old blend's.",
    explanation:
      "Top credit acts on the real yield gain while keeping a control and a named profit trigger to reverse; 'one season proves nothing, keep waiting' refuses to act on a clear signal and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A basketball coach finds that a small-ball lineup outscored opponents by 14 points per 100 possessions over six games, though it gives up more offensive rebounds. He sets the rotation for the next stretch. Which approach best fits acting while staying ready to drop it?",
    mcOptions: [
      {
        text: "The lineup seems strong, so use it more and watch what happens.",
        credit: 0.3,
      },
      {
        text: "Make the small-ball group the starting unit now, given the scoring margin, but pull it if its net rating falls negative over the next four games or if second-chance points allowed exceed a set threshold.",
        credit: 1.0,
      },
      {
        text: "Six games is a tiny sample, so don't change the rotation until a full season's data settles it.",
        credit: 0,
      },
      {
        text: "Start the small-ball lineup because it has been outscoring people, and look at the box scores down the road.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Make the small-ball group the starting unit now, given the scoring margin, but pull it if its net rating falls negative over the next four games or if second-chance points allowed exceed a set threshold.",
    explanation:
      "The winning choice commits to the lineup and pre-names two measurable reversal conditions; 'wait for a full season' forfeits a real edge by refusing to act, earning zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A manufacturer's trial of a cheaper bearing supplier shows identical defect rates and a 9% cost saving over 5,000 units. Procurement must choose for the next quarter. Which approach best fits the evidence?",
    mcOptions: [
      {
        text: "Adopt the cheaper supplier for the next quarter, since defects held flat while costs dropped, but commit to switching back if the defect rate rises above the incumbent's baseline in any monthly batch or if on-time delivery slips below 95%.",
        credit: 1.0,
      },
      {
        text: "The savings are real, so move all orders to the new supplier and consider the question closed.",
        credit: 0,
      },
      {
        text: "Try the new supplier for the quarter because it looked fine, and check in later.",
        credit: 0.6,
      },
      {
        text: "The cheaper supplier seems okay, so go with it.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Adopt the cheaper supplier for the next quarter, since defects held flat while costs dropped, but commit to switching back if the defect rate rises above the incumbent's baseline in any monthly batch or if on-time delivery slips below 95%.",
    explanation:
      "Top credit acts on the saving while naming defect and delivery triggers that would reverse it; 'consider the question closed' commits with no exit and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A hardware store moved its impulse-buy rack to the register queue and saw add-on sales jump 22% over three weeks. The owner plans the permanent layout. Which approach best fits acting while staying ready to drop it?",
    mcOptions: [
      {
        text: "Layouts always shift sales temporarily, so don't make it permanent until a year rules out novelty.",
        credit: 0,
      },
      {
        text: "Make the queue rack the standing layout now, given the add-on lift, but move it back if add-on sales fall to within 5% of the old layout's for a full month or if checkout-line complaints rise.",
        credit: 1.0,
      },
      {
        text: "Keep the rack at the register because sales went up, and revisit it at some point.",
        credit: 0.6,
      },
      {
        text: "The new spot seems to help, so leave it there.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Make the queue rack the standing layout now, given the add-on lift, but move it back if add-on sales fall to within 5% of the old layout's for a full month or if checkout-line complaints rise.",
    explanation:
      "The strongest move adopts the layout and pre-names a sales-and-complaint trigger to reverse; 'wait a year to rule out novelty' freezes on a clear gain and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A startup's ads on a new podcast network drove signups at half the cost-per-acquisition of its usual channels across a $20k test. The marketing lead sets next month's budget. Which approach best fits the evidence?",
    mcOptions: [
      {
        text: "The podcast ads seem cheaper, so spend more there.",
        credit: 0.3,
      },
      {
        text: "Shift a large share of next month's budget to the podcast network, given the lower cost-per-acquisition, but cut it back if CPA rises above the usual channels' or if podcast-sourced users churn faster in their first 30 days.",
        credit: 1.0,
      },
      {
        text: "Move the whole budget to podcasts permanently since they win on cost, and stop comparing channels.",
        credit: 0,
      },
      {
        text: "Put more into the podcast network because it performed well, and we can look again later.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Shift a large share of next month's budget to the podcast network, given the lower cost-per-acquisition, but cut it back if CPA rises above the usual channels' or if podcast-sourced users churn faster in their first 30 days.",
    explanation:
      "Top credit reallocates toward the cheaper channel while naming a CPA-and-churn trigger to reverse; moving everything 'permanently' and ending comparison locks in with no exit and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A hospital's pilot of a new sepsis-screening checklist cut time-to-antibiotics by 40 minutes over two months in one ward, with no rise in unnecessary antibiotic use. Administrators weigh a hospital-wide rollout. Which approach best fits acting while staying ready to drop it?",
    mcOptions: [
      {
        text: "Roll the checklist out hospital-wide now, given the faster treatment with no overuse, but commit to suspending it if antibiotic overuse climbs above the prior baseline or if nurses' alert-override rate signals alarm fatigue.",
        credit: 1.0,
      },
      {
        text: "Medicine is too complex to trust a two-month pilot, so keep the old process until years of data accumulate.",
        credit: 0,
      },
      {
        text: "The checklist seems to help, so put it everywhere.",
        credit: 0.3,
      },
      {
        text: "Roll out the checklist because the pilot went well, and audit it eventually.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Roll the checklist out hospital-wide now, given the faster treatment with no overuse, but commit to suspending it if antibiotic overuse climbs above the prior baseline or if nurses' alert-override rate signals alarm fatigue.",
    explanation:
      "The winning move acts on a clear clinical gain while naming overuse and alarm-fatigue triggers to suspend it; 'wait years' withholds a treatment-speeding tool with no plan to act, earning zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A beekeeper treated half her hives with a new mite control and saw those hives survive winter at 90% versus 65% for untreated hives, with no visible harm to the bees. She plans next season's protocol. Which approach best fits the evidence?",
    mcOptions: [
      {
        text: "Hive outcomes vary too much to credit the treatment, so stick with the old method until many winters confirm it.",
        credit: 0,
      },
      {
        text: "Treat all hives with the new control next season, given the survival gap, but stop using it if treated-hive mortality climbs to match untreated levels or if brood counts drop after application.",
        credit: 1.0,
      },
      {
        text: "Use the new treatment next season because survival was higher, and watch the hives.",
        credit: 0.6,
      },
      {
        text: "The treatment seems to help bees survive, so use it.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Treat all hives with the new control next season, given the survival gap, but stop using it if treated-hive mortality climbs to match untreated levels or if brood counts drop after application.",
    explanation:
      "Top credit acts on a large survival difference while naming mortality and brood triggers to abandon it; 'too variable, keep waiting' refuses a clear, life-saving signal and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "An airline's test of back-to-front boarding at four gates cut average boarding time by six minutes with steady passenger-satisfaction scores. Operations decides on a fleet-wide policy. Which approach best fits acting while staying ready to drop it?",
    mcOptions: [
      {
        text: "Adopt back-to-front boarding fleet-wide now, given the time saving with stable satisfaction, but revert if boarding times creep back to the old average over a month or if gate-agent-reported conflicts rise.",
        credit: 1.0,
      },
      {
        text: "Lock in the new boarding method permanently and stop timing boardings, since it clearly won the test.",
        credit: 0,
      },
      {
        text: "Switch to back-to-front because it was faster, and we can look at it again later on.",
        credit: 0.6,
      },
      {
        text: "Back-to-front seems quicker, so use it.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Adopt back-to-front boarding fleet-wide now, given the time saving with stable satisfaction, but revert if boarding times creep back to the old average over a month or if gate-agent-reported conflicts rise.",
    explanation:
      "The strongest choice adopts the faster method while naming a timing-and-conflict trigger to revert; locking it in and ceasing to measure removes any way to catch failure and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A teacher's new spaced-review homework format lifted unit-test scores by nine points over one term compared with her previous classes, with no rise in time spent. She plans next term. Which approach best fits the evidence?",
    mcOptions: [
      {
        text: "The new format seems better, so keep using it.",
        credit: 0.3,
      },
      {
        text: "Keep the spaced-review format next term, given the score gain at equal workload, but drop it if the next cohort's test scores fall back to the old average or if homework-completion rates decline.",
        credit: 1.0,
      },
      {
        text: "One term is too little to judge teaching, so go back to the old homework until several years confirm the gain.",
        credit: 0,
      },
      {
        text: "Use the spaced-review format again because scores rose, and review it down the line.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Keep the spaced-review format next term, given the score gain at equal workload, but drop it if the next cohort's test scores fall back to the old average or if homework-completion rates decline.",
    explanation:
      "Top credit retains the format on a real, workload-neutral gain while naming score and completion triggers to drop it; 'one term is too little, revert and wait' abandons a clear improvement and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A mobile app raised its annual subscription price 20% for new users and saw revenue per signup climb 15% with only a small dip in conversion over a month. The team weighs making it the standard price. Which approach best fits acting while staying ready to drop it?",
    mcOptions: [
      {
        text: "Make the higher price the standard now, given the revenue-per-signup gain, but roll it back if conversion falls more than 12% from baseline or if 90-day refund and churn rates rise above the old price's.",
        credit: 1.0,
      },
      {
        text: "Set the new price permanently and stop watching conversion, since revenue is up.",
        credit: 0,
      },
      {
        text: "Adopt the higher price because revenue went up, and we can reconsider eventually.",
        credit: 0.6,
      },
      {
        text: "The price increase seems to be paying off, so keep it.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Make the higher price the standard now, given the revenue-per-signup gain, but roll it back if conversion falls more than 12% from baseline or if 90-day refund and churn rates rise above the old price's.",
    explanation:
      "The winning move adopts the price while naming conversion and churn triggers to reverse; setting it 'permanently' and ceasing to watch conversion eliminates the early-warning signal and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A delivery company tested a new dispatch algorithm in one city and saw on-time rates rise from 84% to 91% over three weeks with stable driver pay. It plans to expand the algorithm. Which approach best fits the evidence?",
    mcOptions: [
      {
        text: "Routing is too chaotic to trust a three-week test, so keep the old algorithm until a year of data settles it.",
        credit: 0,
      },
      {
        text: "Expand the new algorithm to more cities now, given the on-time gain at steady pay, but pull it from any city where on-time rates fall back below 86% for two weeks or where driver complaints spike.",
        credit: 1.0,
      },
      {
        text: "Roll out the new algorithm because on-time rates improved, and audit it sometime.",
        credit: 0.6,
      },
      {
        text: "The algorithm seems to deliver faster, so expand it.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Expand the new algorithm to more cities now, given the on-time gain at steady pay, but pull it from any city where on-time rates fall back below 86% for two weeks or where driver complaints spike.",
    explanation:
      "Top credit scales the win while naming per-city on-time and complaint triggers to reverse; 'too chaotic, wait a year' forgoes a clear gain by refusing to act, earning zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A craft brewery's batches with a new yeast strain scored higher in blind taste panels and fermented two days faster across five batches, with no off-flavors noted. The brewmaster sets the recipe. Which approach best fits acting while staying ready to drop it?",
    mcOptions: [
      {
        text: "Switch the flagship recipe to the new yeast now, given the better scores and faster fermentation, but revert to the old strain if a future batch develops off-flavors or if taste-panel scores drop below the old recipe's average.",
        credit: 1.0,
      },
      {
        text: "Adopt the new yeast for good and stop running taste panels, since it clearly won.",
        credit: 0,
      },
      {
        text: "Use the new yeast because the beer scored better, and we can revisit it later.",
        credit: 0.6,
      },
      {
        text: "The new yeast seems to make better beer, so switch.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Switch the flagship recipe to the new yeast now, given the better scores and faster fermentation, but revert to the old strain if a future batch develops off-flavors or if taste-panel scores drop below the old recipe's average.",
    explanation:
      "The strongest move adopts the yeast while naming off-flavor and score triggers to revert; abandoning taste panels removes the very check that would catch a bad batch and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A gym moved its popular spin class from 6 a.m. to 5:30 p.m. and saw attendance rise 35% over a month with no drop in other classes. The manager plans the standing schedule. Which approach best fits the evidence?",
    mcOptions: [
      {
        text: "The evening slot seems more popular, so keep it there.",
        credit: 0.3,
      },
      {
        text: "Make the 5:30 p.m. slot the standing time now, given the attendance jump with no cannibalization, but move it back if attendance falls to within 10% of the morning slot's for a month or if evening classes start overcrowding the studio.",
        credit: 1.0,
      },
      {
        text: "Attendance can swing for many reasons, so don't change the schedule until a year confirms it.",
        credit: 0,
      },
      {
        text: "Keep the evening slot because more people came, and reassess at some point.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Make the 5:30 p.m. slot the standing time now, given the attendance jump with no cannibalization, but move it back if attendance falls to within 10% of the morning slot's for a month or if evening classes start overcrowding the studio.",
    explanation:
      "Top credit adopts the better time while naming attendance and crowding triggers to reverse; 'wait a year' freezes on a clear attendance gain and earns zero.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A bookstore café added a $3 loyalty stamp card and saw repeat visits among cardholders rise sharply over six weeks, with average spend per visit holding steady. The owner must decide whether to keep funding the program. Which approach best fits acting while staying ready to drop it?",
    mcOptions: [
      {
        text: "Keep funding the loyalty card now, since repeat visits rose without lowering spend, but commit to ending it if the cost of redeemed stamps exceeds the extra margin from repeat visits or if cardholder visit frequency falls back to non-cardholder levels.",
        credit: 1.0,
      },
      {
        text: "The loyalty card seems to bring people back, so keep it going.",
        credit: 0.3,
      },
      {
        text: "Loyalty effects are too tangled with other factors to act on, so wait until a year of data is in.",
        credit: 0,
      },
      {
        text: "Keep the card because repeat visits went up, and look at the costs eventually.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest signal you would watch that would trigger ending the loyalty program, and say what reading of it would make you pull the plug.",
      modelAnswer:
        "Cheapest signal: track the monthly cost of redeemed stamps against the extra margin from the added repeat visits, since both numbers are already in the register data. I would end the program the first month redemption cost exceeds the extra margin it generated, because at that point the card is paying out more than it brings in.",
      yieldAnchors: [
        "Repeat visits among cardholders rose sharply",
        "Average spend per visit held steady",
        "The card costs $3 to issue",
      ],
      riskAnchors: [
        "Redemption cost stays below the extra margin from repeat visits",
        "Cardholder visit frequency stays above non-cardholder levels",
        "Spend per visit does not fall after stamps are redeemed",
      ],
      defeatedBy: [
        "The program should run forever regardless of its cost",
        "Nothing can be decided until a full year passes",
      ],
    },
    correctAnswer:
      "Keep funding the loyalty card now, since repeat visits rose without lowering spend, but commit to ending it if the cost of redeemed stamps exceeds the extra margin from repeat visits or if cardholder visit frequency falls back to non-cardholder levels.",
    explanation:
      "Full credit acts on the repeat-visit gain and names a cost-versus-margin trigger to end the program; 'too tangled, wait a year' refuses to act on a clear signal and earns zero.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A remote software team switched to a four-day workweek and saw shipped story points hold steady while voluntary turnover fell over two months. Leadership weighs keeping the policy. Which approach best fits acting while staying ready to drop it?",
    mcOptions: [
      {
        text: "Productivity is too noisy to credit the schedule, so return to five days until a year of data settles it.",
        credit: 0,
      },
      {
        text: "Keep the four-day week now, since output held while turnover fell, but commit to reverting if shipped points drop more than 15% below the five-day baseline for two sprints or if customer response times slip past their SLA.",
        credit: 1.0,
      },
      {
        text: "Keep the four-day week because the early results look good, and check the numbers later.",
        credit: 0.6,
      },
      {
        text: "The shorter week seems to be working, so stick with it.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest signal you would watch that would trigger reverting to a five-day week, and say what reading of it would make you reverse.",
      modelAnswer:
        "Cheapest signal: shipped story points per sprint, which the team already tracks on its board, compared against the five-day baseline. I would revert if shipped points fall more than 15% below that baseline for two consecutive sprints, because that would show the schedule, not just normal variation, is costing output.",
      yieldAnchors: [
        "Shipped story points held steady",
        "Voluntary turnover fell",
        "The change spanned two months",
      ],
      riskAnchors: [
        "Shipped points stay within 15% of the five-day baseline",
        "Customer response times stay within SLA",
        "Turnover stays below the five-day rate",
      ],
      defeatedBy: [
        "The four-day week should be permanent no matter what output does",
        "No decision is possible until a year of data accrues",
      ],
    },
    correctAnswer:
      "Keep the four-day week now, since output held while turnover fell, but commit to reverting if shipped points drop more than 15% below the five-day baseline for two sprints or if customer response times slip past their SLA.",
    explanation:
      "Top credit acts on a clean result and names an output-and-SLA trigger to revert; 'too noisy, wait a year' forfeits the gain by refusing to act, earning zero.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A vineyard tested netting on half its rows and those rows lost far fewer grapes to birds over one harvest, with no change in ripening. The owner plans next year. Which approach best fits acting while staying ready to drop it?",
    mcOptions: [
      {
        text: "Net all the rows next year, given the sharp drop in bird losses with no ripening cost, but stop netting if losses on netted rows climb to match unnetted rows or if netting begins trapping pollinators or raising mildew.",
        credit: 1.0,
      },
      {
        text: "Netting seems to protect the grapes, so use it everywhere.",
        credit: 0.3,
      },
      {
        text: "Net the rows next year because losses dropped, and watch how it goes.",
        credit: 0.6,
      },
      {
        text: "Bird pressure varies year to year, so don't net until several harvests prove it works.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest signal you would watch that would trigger dropping the netting, and say what reading of it would make you stop.",
      modelAnswer:
        "Cheapest signal: weigh the grapes lost per netted row against the unnetted control rows kept for comparison, a count already taken at harvest. I would stop netting if losses on netted rows rise to match the unnetted rows, since that would mean the netting is no longer earning its cost.",
      yieldAnchors: [
        "Netted rows lost far fewer grapes to birds",
        "Netting did not change ripening",
        "The test covered one harvest",
      ],
      riskAnchors: [
        "Netted rows keep losing fewer grapes than control rows",
        "Netting does not trap pollinators",
        "Netting does not raise mildew",
      ],
      defeatedBy: [
        "Net every row forever regardless of what losses do",
        "Nothing can be acted on until several harvests pass",
      ],
    },
    correctAnswer:
      "Net all the rows next year, given the sharp drop in bird losses with no ripening cost, but stop netting if losses on netted rows climb to match unnetted rows or if netting begins trapping pollinators or raising mildew.",
    explanation:
      "Full credit acts on the loss reduction while keeping controls and naming a loss-and-side-effect trigger; 'varies year to year, keep waiting' refuses a clear protective gain and earns zero.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A call center introduced a new troubleshooting script and saw first-call resolution rise from 71% to 82% over a month, with call length unchanged. Management weighs making the script standard. Which approach best fits acting while staying ready to drop it?",
    mcOptions: [
      {
        text: "Make the new script the standard now, given the resolution gain at equal call length, but retire it if first-call resolution falls back below 75% for two weeks or if customer-satisfaction scores drop after calls.",
        credit: 1.0,
      },
      {
        text: "Adopt the script permanently and stop tracking resolution, since it plainly improved things.",
        credit: 0,
      },
      {
        text: "Use the new script because resolution went up, and revisit it eventually.",
        credit: 0.6,
      },
      {
        text: "The script seems to resolve more calls, so make it standard.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest signal you would watch that would trigger retiring the script, and say what reading of it would make you drop it.",
      modelAnswer:
        "Cheapest signal: the weekly first-call resolution rate, which the phone system logs automatically. I would retire the script if that rate falls back below 75% for two straight weeks, because that would show the gain did not hold and the script is no longer earning its place.",
      yieldAnchors: [
        "First-call resolution rose from 71% to 82%",
        "Call length stayed unchanged",
        "The change spanned one month",
      ],
      riskAnchors: [
        "First-call resolution stays above 75%",
        "Customer-satisfaction scores hold or rise",
        "Call length does not increase",
      ],
      defeatedBy: [
        "Keep the script forever and stop measuring resolution",
        "No conclusion is possible from a single month",
      ],
    },
    correctAnswer:
      "Make the new script the standard now, given the resolution gain at equal call length, but retire it if first-call resolution falls back below 75% for two weeks or if customer-satisfaction scores drop after calls.",
    explanation:
      "Top credit adopts the script and names a resolution-and-satisfaction trigger to retire it; adopting it 'permanently' and ceasing to track resolution removes the warning signal and earns zero.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A bakery began proofing its sourdough an extra hour and the loaves rose higher with better crumb across two weeks of bakes, using the same flour. The head baker plans the standing process. Which approach best fits acting while staying ready to drop it?",
    mcOptions: [
      {
        text: "Proofing time is finicky, so don't change the recipe until months of bakes confirm it.",
        credit: 0,
      },
      {
        text: "Adopt the longer proof now, given the better rise and crumb on the same flour, but revert to the old time if loaves start over-proofing and collapsing or if crumb quality drops below the old standard on graded bakes.",
        credit: 1.0,
      },
      {
        text: "Use the longer proof because the loaves came out better, and keep an eye on it.",
        credit: 0.6,
      },
      {
        text: "The longer proof seems to make better bread, so do it.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest signal you would watch that would trigger going back to the old proofing time, and say what reading of it would make you revert.",
      modelAnswer:
        "Cheapest signal: a daily grade of each batch's rise and crumb against the old standard, a quick visual check the baker already does. I would revert if graded crumb quality drops below the old standard or loaves begin collapsing from over-proofing, since that would mean the extra hour has turned from help to harm.",
      yieldAnchors: [
        "Loaves rose higher with the longer proof",
        "Crumb quality improved",
        "The same flour was used throughout",
      ],
      riskAnchors: [
        "Graded crumb quality stays above the old standard",
        "Loaves do not over-proof and collapse",
        "Rise stays higher than the old process",
      ],
      defeatedBy: [
        "Lock in the longer proof regardless of how loaves turn out",
        "Two weeks tells us nothing, so wait months",
      ],
    },
    correctAnswer:
      "Adopt the longer proof now, given the better rise and crumb on the same flour, but revert to the old time if loaves start over-proofing and collapsing or if crumb quality drops below the old standard on graded bakes.",
    explanation:
      "Full credit acts on the better bread while naming an over-proofing and crumb trigger to revert; 'finicky, keep waiting' refuses a clear improvement and earns zero.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A city tried a protected bike lane on one corridor and saw cyclist counts double and reported crashes fall over three months, with car travel times barely affected. Transport planners weigh expanding the design. Which approach best fits acting while staying ready to drop it?",
    mcOptions: [
      {
        text: "Expand the protected-lane design to similar corridors now, given more cyclists and fewer crashes at little car cost, but pause expansion on any corridor where car travel times rise sharply or where crash rates climb above the prior level.",
        credit: 1.0,
      },
      {
        text: "Build the lanes everywhere permanently and stop monitoring crashes, since the trial clearly worked.",
        credit: 0,
      },
      {
        text: "Expand the lanes because the trial looked good, and study them again later.",
        credit: 0.6,
      },
      {
        text: "The protected lane seems safer, so build more.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest signal you would watch that would trigger pausing the expansion, and say what reading of it would make you stop.",
      modelAnswer:
        "Cheapest signal: per-corridor crash counts and car travel times, both already collected by traffic sensors. I would pause expansion on any corridor where crash rates climb above the pre-lane level or car travel times rise sharply, since either would show the design is not transferring the benefit it showed on the first corridor.",
      yieldAnchors: [
        "Cyclist counts doubled on the corridor",
        "Reported crashes fell",
        "Car travel times were barely affected",
      ],
      riskAnchors: [
        "Crash rates stay below the prior level on new corridors",
        "Car travel times stay roughly unchanged",
        "Cyclist counts rise on the new corridors too",
      ],
      defeatedBy: [
        "Build the lanes everywhere forever and stop monitoring crashes",
        "Three months proves nothing, so do not expand",
      ],
    },
    correctAnswer:
      "Expand the protected-lane design to similar corridors now, given more cyclists and fewer crashes at little car cost, but pause expansion on any corridor where car travel times rise sharply or where crash rates climb above the prior level.",
    explanation:
      "Top credit scales the safety win while naming per-corridor crash and travel-time triggers; building 'everywhere permanently' and ceasing to monitor crashes removes any way to catch a failure and earns zero.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An e-commerce site added a 'frequently bought together' widget and saw average order value rise 11% over a month with no change in return rates. The team weighs keeping it on every product page. Which approach best fits acting while staying ready to drop it?",
    mcOptions: [
      {
        text: "The widget seems to lift order value, so keep it on.",
        credit: 0.3,
      },
      {
        text: "Keep the widget on all product pages now, given the order-value lift with steady returns, but remove it if average order value falls back to baseline for two weeks or if returns of bundled items rise above single-item returns.",
        credit: 1.0,
      },
      {
        text: "Order value can move for many reasons, so don't trust a month and leave the site unchanged.",
        credit: 0,
      },
      {
        text: "Keep the widget because order value went up, and review it at some point.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest signal you would watch that would trigger removing the widget, and say what reading of it would make you take it down.",
      modelAnswer:
        "Cheapest signal: average order value tracked weekly against the pre-widget baseline, a figure the analytics dashboard already reports. I would remove the widget if average order value falls back to baseline for two straight weeks, because that would mean it is no longer adding the value that justified keeping it.",
      yieldAnchors: [
        "Average order value rose 11%",
        "Return rates were unchanged",
        "The lift held over a month",
      ],
      riskAnchors: [
        "Average order value stays above baseline",
        "Returns of bundled items stay near single-item returns",
        "The lift persists beyond the first month",
      ],
      defeatedBy: [
        "Keep the widget regardless of whether order value holds",
        "A month of data licenses no decision at all",
      ],
    },
    correctAnswer:
      "Keep the widget on all product pages now, given the order-value lift with steady returns, but remove it if average order value falls back to baseline for two weeks or if returns of bundled items rise above single-item returns.",
    explanation:
      "Full credit acts on the order-value lift and names an order-value and return-rate trigger to remove it; 'don't trust a month, leave it unchanged' refuses to act on a clear gain and earns zero.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A youth swim coach moved morning practices later by an hour and saw race times improve and missed practices drop over a season, with no change in training volume. He plans next season's schedule. Which approach best fits acting while staying ready to drop it?",
    mcOptions: [
      {
        text: "Keep the later start permanently and stop comparing race times, since the season clearly favored it.",
        credit: 0,
      },
      {
        text: "Set the later start for next season, given faster times and better attendance at the same volume, but move practice back earlier if race times slip below last season's marks or if attendance falls to the old level.",
        credit: 1.0,
      },
      {
        text: "Use the later start because times improved, and check in on it later.",
        credit: 0.6,
      },
      {
        text: "The later practice seems to help, so keep it.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest signal you would watch that would trigger moving practice back to the earlier time, and say what reading of it would make you reverse.",
      modelAnswer:
        "Cheapest signal: swimmers' meet race times compared against last season's marks, already recorded at every meet. I would move practice back earlier if race times slip below last season's marks across the team, because that would show the later start is no longer delivering the performance gain that justified it.",
      yieldAnchors: [
        "Race times improved with the later start",
        "Missed practices dropped",
        "Training volume was unchanged",
      ],
      riskAnchors: [
        "Race times stay at or above last season's marks",
        "Attendance stays above the old level",
        "The gain holds without adding volume",
      ],
      defeatedBy: [
        "Keep the later start forever and stop comparing race times",
        "One season is too little to act on, so wait",
      ],
    },
    correctAnswer:
      "Set the later start for next season, given faster times and better attendance at the same volume, but move practice back earlier if race times slip below last season's marks or if attendance falls to the old level.",
    explanation:
      "Top credit adopts the later start while naming a race-time and attendance trigger to reverse; locking it in and ceasing to compare times removes the signal that would catch a decline and earns zero.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A boutique hotel replaced its front-desk check-in with a tablet kiosk and saw guest wait times fall and satisfaction scores hold steady over two months, while freeing a staffer for concierge work. Management weighs rolling kiosks to all properties. Which approach best fits acting while staying ready to drop it?",
    mcOptions: [
      {
        text: "Kiosks are trendy but unproven, so keep human check-in until years of data confirm them.",
        credit: 0,
      },
      {
        text: "Roll kiosks out to the other properties now, given shorter waits and steady satisfaction with freed staff, but pull them from any property where satisfaction scores drop below the staffed baseline or where guests routinely abandon the kiosk for the desk.",
        credit: 1.0,
      },
      {
        text: "Install kiosks everywhere because waits dropped, and revisit it eventually.",
        credit: 0.6,
      },
      {
        text: "The kiosk seems to speed check-in, so use it everywhere.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest signal you would watch that would trigger pulling the kiosks, and say what reading of it would make you remove them.",
      modelAnswer:
        "Cheapest signal: each property's guest-satisfaction score compared against its staffed-check-in baseline, already collected in post-stay surveys. I would pull the kiosks from any property where that score drops below the staffed baseline, because that would show the speed gain is costing the guest experience the change was meant to protect.",
      yieldAnchors: [
        "Guest wait times fell with the kiosk",
        "Satisfaction scores held steady",
        "A staffer was freed for concierge work",
      ],
      riskAnchors: [
        "Satisfaction stays at or above the staffed baseline",
        "Guests do not routinely abandon the kiosk for the desk",
        "Wait times stay shorter at the new properties",
      ],
      defeatedBy: [
        "Install kiosks everywhere no matter what satisfaction does",
        "Nothing can be decided until years of data confirm kiosks",
      ],
    },
    correctAnswer:
      "Roll kiosks out to the other properties now, given shorter waits and steady satisfaction with freed staff, but pull them from any property where satisfaction scores drop below the staffed baseline or where guests routinely abandon the kiosk for the desk.",
    explanation:
      "Full credit scales the win while naming a satisfaction-and-abandonment trigger to reverse per property; 'trendy but unproven, wait years' refuses to act on clear, staff-freeing gains and earns zero.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A small accounting firm let staff work from home three days a week as a trial. Over three months, billable hours stayed flat, client-satisfaction scores held, and two employees who had been about to quit chose to stay. The managing partner must decide whether to make remote work the firm's standing policy. In one paragraph, propose how to act on this evidence now and the explicit trigger that would make the firm reverse the policy, and describe how you would monitor it.",
    writtenRubric: {
      modelAnswer:
        "The firm should adopt the three-day remote policy now, because the trial shows the thing it most needed to protect — billable hours and client satisfaction — held steady while retention improved, so the evidence supports acting rather than waiting. But acceptance should be provisional: I would write down the trigger in advance, namely that the firm reverts to mostly in-office work if billable hours per staffer fall more than 10% below the in-office baseline for two consecutive months, or if client-satisfaction scores drop below their pre-trial level. I would monitor it with the firm's existing time-tracking and quarterly client surveys, reviewing both monthly so the policy is held firmly enough to act on but loosely enough to drop the moment a named threshold is crossed; I would also keep a small in-office comparison group so a downturn can be checked against firm-wide conditions rather than blamed on remote work alone.",
      yieldAnchors: [
        "Billable hours stayed flat under the trial",
        "Client-satisfaction scores held",
        "Two employees who were about to quit chose to stay",
      ],
      riskAnchors: [
        "Billable hours stay within 10% of the in-office baseline",
        "Client-satisfaction scores stay at or above pre-trial levels",
        "Retention stays better than before the trial",
      ],
      defeatedBy: [
        "Make remote work permanent and stop tracking billable hours",
        "Three months is too little, so keep waiting before any change",
        "Remote work obviously must be best, so commit with no exit",
      ],
    },
    correctAnswer:
      "The firm should adopt the three-day remote policy now, because the trial shows the thing it most needed to protect — billable hours and client satisfaction — held steady while retention improved, so the evidence supports acting rather than waiting. But acceptance should be provisional: I would write down the trigger in advance, namely that the firm reverts to mostly in-office work if billable hours per staffer fall more than 10% below the in-office baseline for two consecutive months, or if client-satisfaction scores drop below their pre-trial level. I would monitor it with the firm's existing time-tracking and quarterly client surveys, reviewing both monthly so the policy is held firmly enough to act on but loosely enough to drop the moment a named threshold is crossed; I would also keep a small in-office comparison group so a downturn can be checked against firm-wide conditions rather than blamed on remote work alone.",
    explanation:
      "Under CCR, the cautious 'three months is too little, keep waiting' earns near-zero because it forfeits a clear gain, and committing 'permanently' with no exit is the opposite failure; top credit goes to acting on the evidence while pre-naming a specific, monitorable trigger that would reverse the policy.",
  },
  {
    itemType: "written",
    prompt:
      "A community clinic switched from paper intake forms to a tablet system for new patients. Over two months, average check-in time dropped from eleven minutes to six, data-entry errors fell, and staff reported less duplicate work, though a handful of older patients struggled with the screens. The director must decide whether to keep the tablets. In one paragraph, propose how to act on this evidence now and the explicit trigger that would make the clinic abandon the tablets, and describe how you would monitor it.",
    writtenRubric: {
      modelAnswer:
        "The clinic should keep the tablet intake system now, because the evidence shows it cut check-in time nearly in half and reduced data-entry errors and duplicate work, which is a real and measured improvement worth acting on rather than reversing out of caution. Acceptance should be provisional, with a trigger fixed in advance: the clinic abandons the tablets, or reverts to offering paper as the default, if intake error rates climb back to the paper-era level, if average check-in time creeps back toward eleven minutes, or if the share of patients needing staff help to finish the form rises high enough to erase the time saved. I would monitor this with the system's own timestamp and error logs plus a simple weekly tally of assisted check-ins, reviewing monthly; meanwhile I would keep paper forms on hand specifically for the older patients who struggle, so the system is held firmly enough to run but loosely enough to drop the instant a named threshold is crossed.",
      yieldAnchors: [
        "Average check-in time dropped from eleven to six minutes",
        "Data-entry errors fell",
        "Staff reported less duplicate work",
      ],
      riskAnchors: [
        "Intake error rates stay below the paper-era level",
        "Average check-in time stays near six minutes",
        "Assisted check-ins stay low enough to preserve the time saved",
      ],
      defeatedBy: [
        "Keep the tablets permanently and stop logging errors or times",
        "Two months proves nothing, so go back to paper and wait",
        "Tablets are clearly modern, so commit with no way to reverse",
      ],
    },
    correctAnswer:
      "The clinic should keep the tablet intake system now, because the evidence shows it cut check-in time nearly in half and reduced data-entry errors and duplicate work, which is a real and measured improvement worth acting on rather than reversing out of caution. Acceptance should be provisional, with a trigger fixed in advance: the clinic abandons the tablets, or reverts to offering paper as the default, if intake error rates climb back to the paper-era level, if average check-in time creeps back toward eleven minutes, or if the share of patients needing staff help to finish the form rises high enough to erase the time saved. I would monitor this with the system's own timestamp and error logs plus a simple weekly tally of assisted check-ins, reviewing monthly; meanwhile I would keep paper forms on hand specifically for the older patients who struggle, so the system is held firmly enough to run but loosely enough to drop the instant a named threshold is crossed.",
    explanation:
      "The reflexive 'two months proves nothing, go back to paper and wait' earns near-zero by discarding a measured gain, and locking the tablets in with no monitoring is the overreach failure; credit goes to acting on the evidence while naming error, time, and assistance triggers that would reverse the call.",
  },
  {
    itemType: "written",
    prompt:
      "A mid-size online retailer began offering free two-day shipping on orders over $35. In the first quarter, average order value rose, repeat-purchase rates climbed, and overall revenue grew faster than shipping costs, though margins on the smallest qualifying orders thinned. The head of operations must decide whether to keep the threshold. In one paragraph, propose how to act on this evidence now and the explicit trigger that would make the company drop or change the free-shipping offer, and describe how you would monitor it.",
    writtenRubric: {
      modelAnswer:
        "The retailer should keep the free two-day shipping offer now, because the quarter shows revenue and repeat purchases rising faster than shipping costs and order values climbing, so the policy is paying for itself and the evidence supports committing rather than stalling. Acceptance should be provisional, with the trigger set in advance: the company drops the offer or raises the $35 threshold if total shipping cost growth outpaces the margin from the extra orders for two consecutive months, or if the margin on sub-threshold-edge orders turns net-negative across the catalog. I would monitor it by tracking shipping cost as a share of incremental revenue and the contribution margin on orders near the threshold, both available from the order and fulfillment data, reviewing monthly; I would also keep a small holdout region on the old shipping terms so any downturn can be checked against the policy rather than seasonal swings, holding the offer firmly enough to run but loosely enough to pull the moment a named threshold is crossed.",
      yieldAnchors: [
        "Average order value rose after the offer",
        "Repeat-purchase rates climbed",
        "Revenue grew faster than shipping costs",
      ],
      riskAnchors: [
        "Shipping cost growth stays below the margin from extra orders",
        "Contribution margin near the threshold stays positive",
        "Repeat-purchase rates stay above the pre-offer level",
      ],
      defeatedBy: [
        "Keep free shipping forever regardless of what shipping costs do",
        "One quarter is too little, so cancel the offer and wait",
        "Free shipping is obviously a winner, so commit with no exit",
      ],
    },
    correctAnswer:
      "The retailer should keep the free two-day shipping offer now, because the quarter shows revenue and repeat purchases rising faster than shipping costs and order values climbing, so the policy is paying for itself and the evidence supports committing rather than stalling. Acceptance should be provisional, with the trigger set in advance: the company drops the offer or raises the $35 threshold if total shipping cost growth outpaces the margin from the extra orders for two consecutive months, or if the margin on sub-threshold-edge orders turns net-negative across the catalog. I would monitor it by tracking shipping cost as a share of incremental revenue and the contribution margin on orders near the threshold, both available from the order and fulfillment data, reviewing monthly; I would also keep a small holdout region on the old shipping terms so any downturn can be checked against the policy rather than seasonal swings, holding the offer firmly enough to run but loosely enough to pull the moment a named threshold is crossed.",
    explanation:
      "CCR gives near-zero to 'one quarter is too little, cancel and wait' because it abandons a self-funding gain, and to permanent commitment with no cost monitoring; top credit goes to acting now while naming a cost-versus-margin trigger and a holdout to catch failure.",
  },
  {
    itemType: "written",
    prompt:
      "A regional bus agency added real-time arrival displays at its busiest stops. Over three months, ridership at those stops rose, complaints about waiting fell, and riders surveyed said they trusted the service more, though the displays cost money to maintain. The planning director must decide whether to install displays system-wide. In one paragraph, propose how to act on this evidence now and the explicit trigger that would make the agency halt or remove the displays, and describe how you would monitor it.",
    writtenRubric: {
      modelAnswer:
        "The agency should begin installing real-time displays at its next tier of busy stops now, because the trial shows ridership up, wait complaints down, and rider trust higher, which is exactly the outcome the displays were meant to produce and enough to justify acting rather than waiting. Acceptance should be provisional, with the trigger named in advance: the agency halts further rollout, and reconsiders the installed ones, if ridership gains at newly equipped stops fail to materialize, if the maintenance cost per stop exceeds the value of the added ridership, or if display downtime climbs high enough that riders stop trusting the information. I would monitor it with automated ridership counts, maintenance logs, and a short periodic rider survey at equipped versus unequipped stops, reviewing quarterly; expanding stop by stop with a comparison set keeps the program held firmly enough to act on but loosely enough to stop the moment a named cost or ridership threshold is crossed.",
      yieldAnchors: [
        "Ridership rose at stops with displays",
        "Complaints about waiting fell",
        "Surveyed riders trusted the service more",
      ],
      riskAnchors: [
        "Ridership gains appear at newly equipped stops too",
        "Maintenance cost per stop stays below the value of added ridership",
        "Display downtime stays low enough to keep rider trust",
      ],
      defeatedBy: [
        "Install displays everywhere regardless of cost or ridership",
        "Three months is too little, so install nothing more and wait",
        "Real-time data is obviously good, so commit with no exit",
      ],
    },
    correctAnswer:
      "The agency should begin installing real-time displays at its next tier of busy stops now, because the trial shows ridership up, wait complaints down, and rider trust higher, which is exactly the outcome the displays were meant to produce and enough to justify acting rather than waiting. Acceptance should be provisional, with the trigger named in advance: the agency halts further rollout, and reconsiders the installed ones, if ridership gains at newly equipped stops fail to materialize, if the maintenance cost per stop exceeds the value of the added ridership, or if display downtime climbs high enough that riders stop trusting the information. I would monitor it with automated ridership counts, maintenance logs, and a short periodic rider survey at equipped versus unequipped stops, reviewing quarterly; expanding stop by stop with a comparison set keeps the program held firmly enough to act on but loosely enough to stop the moment a named cost or ridership threshold is crossed.",
    explanation:
      "The cautious 'install nothing more and wait' earns near-zero by forfeiting a demonstrated gain, and blanket permanent installation ignores cost; credit goes to acting now while naming ridership, cost, and downtime triggers that would halt the rollout.",
  },
  {
    itemType: "written",
    prompt:
      "A specialty coffee roaster switched one of its house blends to beans from a new cooperative at a lower price. Over six weeks, blind cupping scores matched or slightly beat the old beans, wholesale clients reordered at the usual rate, and the savings improved margin, though the cooperative is newer and less proven on consistency. The owner must decide whether to commit to the new source for that blend. In one paragraph, propose how to act on this evidence now and the explicit trigger that would make the roaster switch back, and describe how you would monitor it.",
    writtenRubric: {
      modelAnswer:
        "The roaster should commit the house blend to the new cooperative's beans now, because the evidence that matters most — blind cupping scores and client reorders — held or improved while margin rose, so acting on it beats clinging to the pricier source out of caution. Acceptance should be provisional, with the trigger written in advance: the roaster switches back to the old beans if cupping scores for any incoming lot fall below the old beans' established range, if a lot arrives with inconsistent moisture or defect counts beyond spec, or if wholesale reorders for that blend drop after the change. I would monitor it by cupping and grading every incoming lot against the old beans' benchmark and tracking reorder rates by blend, reviewing each shipment and monthly overall; keeping a reserve of the old beans and a couple of clients on the prior recipe as a check holds the new source firmly enough to use but loosely enough to drop the instant a named quality or demand threshold is crossed.",
      yieldAnchors: [
        "Blind cupping scores matched or beat the old beans",
        "Wholesale clients reordered at the usual rate",
        "The lower price improved margin",
      ],
      riskAnchors: [
        "Each incoming lot cups within the old beans' range",
        "Lots arrive within moisture and defect spec",
        "Wholesale reorders for the blend hold after the switch",
      ],
      defeatedBy: [
        "Commit to the new cooperative forever and stop cupping incoming lots",
        "Six weeks proves nothing, so keep the pricier beans and wait",
        "Cheaper beans that cupped well must be safe, so commit with no exit",
      ],
    },
    correctAnswer:
      "The roaster should commit the house blend to the new cooperative's beans now, because the evidence that matters most — blind cupping scores and client reorders — held or improved while margin rose, so acting on it beats clinging to the pricier source out of caution. Acceptance should be provisional, with the trigger written in advance: the roaster switches back to the old beans if cupping scores for any incoming lot fall below the old beans' established range, if a lot arrives with inconsistent moisture or defect counts beyond spec, or if wholesale reorders for that blend drop after the change. I would monitor it by cupping and grading every incoming lot against the old beans' benchmark and tracking reorder rates by blend, reviewing each shipment and monthly overall; keeping a reserve of the old beans and a couple of clients on the prior recipe as a check holds the new source firmly enough to use but loosely enough to drop the instant a named quality or demand threshold is crossed.",
    explanation:
      "Under CCR, 'six weeks proves nothing, keep the pricier beans and wait' earns near-zero by spurning a real margin gain, and committing forever without cupping incoming lots is the overreach failure; top credit goes to acting on the evidence while naming per-lot quality and reorder triggers that would reverse the switch.",
  },
];

export const section: SectionContent = {
  slug: "provisional-acceptance",
  title: "Provisional Acceptance",
  weekNumber: 4,
  blurb:
    "Act decisively on the best model you have, but write down in advance the specific signal that would make you drop it — hold a conclusion firmly enough to act, loosely enough to abandon.",
  lectureTitle:
    "4.2 Provisional Acceptance: holding a model firmly enough to act, loosely enough to drop",
  body: `# Provisional Acceptance

Once the evidence points to a best model, you face a hinge moment. Reflexive caution says "don't commit yet — keep gathering data until we're sure." The opposite failure says "we've decided, lock it in, stop looking." Constructive Critical Reasoning rejects both. The strong move is **provisional acceptance**: act on the best current model as if it were true, while keeping explicit the trigger that would make you drop it. You hold it firmly enough to act, loosely enough to abandon.

## Why you must act before you are certain

Certainty almost never arrives in time to be useful. A bakery whose new loaf is outselling the old one, a clinic whose checklist is treating sepsis faster — waiting for years of data means forfeiting a real, measured gain in the meantime. Refusing to act on a clear signal is not prudence; it is a decision to do nothing, and doing nothing has costs too. The constructive reasoner commits to the best supported model now and lets the world keep voting.

## The drop trigger is the price of acting

What makes acting-before-certainty responsible rather than reckless is the **trigger**: a specific, observable condition, fixed in advance, that would tell you the model has failed and you should reverse. "Keep the new supplier, but switch back if any monthly batch's defect rate exceeds the old baseline" is provisional acceptance. The trigger is what you buy with your commitment — it converts a guess into a controlled bet you can lose cleanly.

## How to write a good trigger

A usable trigger is concrete, measurable, and tied to a threshold and a timeframe — "revert if abandonment climbs above 34% for three straight days," not "revert if things seem worse." It watches the cheapest signal that would actually reveal failure, usually a number you already collect. And it is written down *before* you act, so that when the data turn against your favorite you can't quietly move the goalposts. Keeping a small control or holdout group lets you tell a real failure from ordinary noise.

## Why "wait until we're sure" loses

The freeze feels safe because inaction is invisible, but under CCR it scores zero. "Sales swing for many reasons, so wait a full year" names no commitment and captures no gain; it converts a clear signal into paralysis. You do not need certainty to act — you need a best model and a trigger. The reasoner who waits for proof that never comes has simply chosen the worst-evidenced option, the status quo, by default.

## Overreach still loses

The opposite error is just as wrong: committing permanently with no exit. "Ship it forever and turn off the dashboard" locks in a choice and destroys the very signal that would catch its failure. Acceptance without a trigger is not confidence, it is blindness. The winning stance never abandons the instrument that could disconfirm it.

## In the real world

A startup's ads on a new channel halved its cost per signup over a $20k test. The dodge: "channels are noisy, move nothing until a year confirms it" — and the gain evaporates. The overreach: "move the whole budget there permanently and stop comparing channels" — and a silent decline goes uncaught. The provisional move: shift a large share of next month's budget now, *and* pre-name the trigger — cut it back the moment cost-per-acquisition rises above the old channels' or the new users churn faster in their first month. That is provisional acceptance: act hard on the best model, watch the one signal that would refute it, and stand ready to drop it without flinching.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
