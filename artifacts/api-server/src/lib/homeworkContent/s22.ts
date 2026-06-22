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
      "A gym finds members who buy its protein shakes lose more weight than non-buyers. But every shake-buyer is also enrolled in the structured 6 a.m. class, and among class members, shake-buyers and non-buyers lose weight at exactly the same rate. Which lead best follows?",
    mcOptions: [
      {
        text: "Shake-buyers lose more, so the shakes are working; stock more flavors and push them at checkout.",
        credit: 0,
      },
      {
        text: "The class, not the shake, drives the loss — once you're in the class the shake adds nothing. Test whether class members who never buy shakes lose just as much, whether shake-buyers who drop the class stop losing, and whether non-class members who only buy shakes show no loss at all.",
        credit: 1.0,
      },
      {
        text: "The class probably matters more than the shakes; we could compare a couple of class and non-class members.",
        credit: 0.6,
      },
      {
        text: "The class seems to count for more than the shakes here.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The class, not the shake, drives the loss — once you're in the class the shake adds nothing. Test whether class members who never buy shakes lose just as much, whether shake-buyers who drop the class stop losing, and whether non-class members who only buy shakes show no loss at all.",
    explanation:
      "Within the class the shake's edge vanishes, so the class screens off the shake; top credit names that and lists three checks. Crediting the shake is the fallacy the data already defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A retailer notices customers who use coupon codes spend far more per year than those who don't. Almost every coupon-user is also a loyalty-program member, and among loyalty members, coupon-users and non-users spend the same. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Coupons and spending seem connected somehow.",
        credit: 0.3,
      },
      {
        text: "Loyalty membership is the real driver and screens off the coupons; test whether loyalty members who never use coupons spend just as much, whether coupon-users outside the program spend no more than average, and whether new loyalty sign-ups raise spending without any coupon use.",
        credit: 1.0,
      },
      {
        text: "Coupon-users spend more, so coupons grow the basket; mail coupons to everyone to lift revenue.",
        credit: 0,
      },
      {
        text: "Loyalty membership is probably what matters; we could glance at a few members' totals.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Loyalty membership is the real driver and screens off the coupons; test whether loyalty members who never use coupons spend just as much, whether coupon-users outside the program spend no more than average, and whether new loyalty sign-ups raise spending without any coupon use.",
    explanation:
      "Because spending is equal among members regardless of coupons, membership screens coupons off; the winning lead says so and tests it. 'Coupons grow the basket' is the defeated overreach.",
  },
  {
    itemType: "mc",
    prompt:
      "A teacher sees that students who visit the tutoring center score higher on the unit test. But every center visitor also completed the assigned practice sets, and among students who did the practice sets, visitors and non-visitors score the same. Which lead is strongest?",
    mcOptions: [
      {
        text: "Doing the practice sets is what lifts scores, which makes tutoring-center visits inferentially idle; test whether practice-doers who never visit score just as high, whether visitors who skipped the sets show no gain, and whether assigning the sets to a non-visiting class raises its scores.",
        credit: 1.0,
      },
      {
        text: "The practice sets seem to matter more than the visits.",
        credit: 0.3,
      },
      {
        text: "The practice sets are probably the key; we could ask a few students what they did.",
        credit: 0.6,
      },
      {
        text: "Center visitors score higher, so expand center hours to boost everyone's grades.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Doing the practice sets is what lifts scores, which makes tutoring-center visits inferentially idle; test whether practice-doers who never visit score just as high, whether visitors who skipped the sets show no gain, and whether assigning the sets to a non-visiting class raises its scores.",
    explanation:
      "Once you condition on doing the practice sets, the visit adds nothing, so practice screens off the visit; top credit names the screening variable and three probes. 'Expand center hours' chases the screened-off correlate.",
  },
  {
    itemType: "mc",
    prompt:
      "A SaaS company finds accounts that attended its onboarding webinar renew at a much higher rate. But nearly all webinar attendees also invited teammates in week one, and among teammate-inviters, attendees and non-attendees renew identically. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Webinars and renewal are linked in some way.",
        credit: 0.3,
      },
      {
        text: "Inviting teammates probably matters most; we could spot-check a few accounts.",
        credit: 0.6,
      },
      {
        text: "Inviting teammates is the live driver and screens off webinar attendance; test whether inviters who skipped the webinar renew just as well, whether attendees who invited no one renew at baseline, and whether nudging non-attendees to invite teammates lifts their renewal.",
        credit: 1.0,
      },
      {
        text: "Attendees renew more, so the webinar causes retention; require it of every new account.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Inviting teammates is the live driver and screens off webinar attendance; test whether inviters who skipped the webinar renew just as well, whether attendees who invited no one renew at baseline, and whether nudging non-attendees to invite teammates lifts their renewal.",
    explanation:
      "Renewal is equal among inviters whether or not they saw the webinar, so invitation screens the webinar off; the best lead commits to that and names tests. Mandating the webinar is the defeated move.",
  },
  {
    itemType: "mc",
    prompt:
      "A farm reports that fields treated with a pricey new fertilizer brand yielded more corn. But every treated field was also on the farm's irrigated parcels, and among irrigated fields, the new brand and the old one yielded the same. Which lead is strongest?",
    mcOptions: [
      {
        text: "Treated fields yielded more, so the new fertilizer works; buy it for the whole farm.",
        credit: 0,
      },
      {
        text: "Irrigation seems more important than the fertilizer brand.",
        credit: 0.3,
      },
      {
        text: "Irrigation is the real driver and renders the fertilizer brand idle; test whether irrigated fields on the old fertilizer match the yield, whether the new brand on dry fields shows no gain, and whether irrigating a control parcel raises yield with no fertilizer change.",
        credit: 1.0,
      },
      {
        text: "Irrigation is probably the key factor; we could look at one or two more fields.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Irrigation is the real driver and renders the fertilizer brand idle; test whether irrigated fields on the old fertilizer match the yield, whether the new brand on dry fields shows no gain, and whether irrigating a control parcel raises yield with no fertilizer change.",
    explanation:
      "Within irrigated fields the brand makes no difference, so irrigation screens the brand off; full credit names that and the checks. 'The new fertilizer works' is exactly the correlate the data defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A hospital finds that patients in private rooms recover faster after hip surgery than those in shared rooms. But private-room patients were almost all in the early-mobilization program, and among early-mobilizers, room type makes no difference to recovery. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Early mobilization is the active cause and screens off room type; test whether early-mobilizers in shared rooms recover just as fast, whether private-room patients kept on bed rest recover no faster, and whether enrolling shared-room patients in mobilization speeds them up.",
        credit: 1.0,
      },
      {
        text: "Early walking seems to matter more than the room.",
        credit: 0.3,
      },
      {
        text: "Private-room patients recover faster, so build more private rooms to improve outcomes.",
        credit: 0,
      },
      {
        text: "Early mobilization is probably the driver; we could review a handful of charts.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Early mobilization is the active cause and screens off room type; test whether early-mobilizers in shared rooms recover just as fast, whether private-room patients kept on bed rest recover no faster, and whether enrolling shared-room patients in mobilization speeds them up.",
    explanation:
      "Conditioning on mobilization erases the room-type gap, so mobilization screens it off; the strongest lead says so and tests it. Building private rooms chases the screened-off correlate.",
  },
  {
    itemType: "mc",
    prompt:
      "A basketball team wins more often in games where it wears its new shoe model. But those games are almost all ones where the star guard was healthy, and in healthy-star games the team wins at the same rate whatever shoes it wears. Which lead is strongest?",
    mcOptions: [
      {
        text: "The shoes seem to help the team win.",
        credit: 0.3,
      },
      {
        text: "The healthy star is probably what matters; we could check a couple more games.",
        credit: 0.6,
      },
      {
        text: "The star's health drives the wins and makes the shoe model inferentially idle; test whether healthy-star games in the old shoes win just as much, whether new-shoe games without the star win no more than baseline, and whether the star's return alone predicts the win streak.",
        credit: 1.0,
      },
      {
        text: "Win rate is too tied up with crowd, travel, and matchups to credit any one thing.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The star's health drives the wins and makes the shoe model inferentially idle; test whether healthy-star games in the old shoes win just as much, whether new-shoe games without the star win no more than baseline, and whether the star's return alone predicts the win streak.",
    explanation:
      "Among healthy-star games the shoe makes no difference, so health screens the shoes off; top credit names it and three checks. 'Too tied up to credit anything' is the barren refusal even though the data clearly point to the star.",
  },
  {
    itemType: "mc",
    prompt:
      "A factory finds batches made with a new supplier's resin have fewer defects. But those batches were nearly all run on the freshly calibrated press, and among batches on that press, the new resin and the old resin defect at the same rate. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The calibrated press is the real cause and screens off the resin supplier; test whether old-resin batches on the calibrated press defect just as little, whether new-resin batches on the uncalibrated press show no improvement, and whether recalibrating a second press cuts defects with the old resin.",
        credit: 1.0,
      },
      {
        text: "New-resin batches have fewer defects, so switch all lines to the new supplier.",
        credit: 0,
      },
      {
        text: "The press calibration seems to matter more than the resin.",
        credit: 0.3,
      },
      {
        text: "The calibrated press is probably the factor; we could watch one more run.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The calibrated press is the real cause and screens off the resin supplier; test whether old-resin batches on the calibrated press defect just as little, whether new-resin batches on the uncalibrated press show no improvement, and whether recalibrating a second press cuts defects with the old resin.",
    explanation:
      "On the calibrated press resin choice makes no difference, so calibration screens off the supplier; the best lead commits to that and tests it. Switching suppliers acts on the screened-off correlate.",
  },
  {
    itemType: "mc",
    prompt:
      "A restaurant finds servers who push the dessert special earn higher tips. But the upselling servers are almost all assigned the scenic patio, and among patio servers, those who upsell and those who don't earn the same tips. Which lead is strongest?",
    mcOptions: [
      {
        text: "Upselling servers tip out higher, so make every server push dessert to lift tips.",
        credit: 0,
      },
      {
        text: "The patio assignment seems to matter more than the upsell.",
        credit: 0.3,
      },
      {
        text: "The patio is probably the real driver; we could ask a few servers about their sections.",
        credit: 0.6,
      },
      {
        text: "The patio assignment drives the tips and makes upselling idle; test whether patio servers who never upsell earn the same, whether upsellers stuck indoors earn no more than average, and whether rotating an indoor server to the patio raises their tips with no change in pitch.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The patio assignment drives the tips and makes upselling idle; test whether patio servers who never upsell earn the same, whether upsellers stuck indoors earn no more than average, and whether rotating an indoor server to the patio raises their tips with no change in pitch.",
    explanation:
      "Within patio servers the upsell adds nothing, so the section screens it off; top credit names the screening variable and three checks. 'Make everyone upsell' chases the defeated correlate.",
  },
  {
    itemType: "mc",
    prompt:
      "A nonprofit finds donors who received its glossy printed newsletter renew at higher rates. But nearly every newsletter recipient also attended the annual gala, and among gala attendees, newsletter recipients and non-recipients renew the same. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The newsletter and renewal are connected in some fashion.",
        credit: 0.3,
      },
      {
        text: "Gala attendance is the live cause and screens off the newsletter; test whether gala-goers who never got the newsletter renew just as well, whether newsletter recipients who skipped the gala renew at baseline, and whether inviting non-attendees to the gala lifts their renewal with no mailing.",
        credit: 1.0,
      },
      {
        text: "The gala is probably what matters; we could review a few donor records.",
        credit: 0.6,
      },
      {
        text: "Recipients renew more, so print and mail the newsletter to the whole donor list.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Gala attendance is the live cause and screens off the newsletter; test whether gala-goers who never got the newsletter renew just as well, whether newsletter recipients who skipped the gala renew at baseline, and whether inviting non-attendees to the gala lifts their renewal with no mailing.",
    explanation:
      "Among gala attendees the newsletter makes no difference, so the gala screens it off; the strongest lead says so and names tests. Mailing everyone the newsletter is the overreach the data defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A podcast finds episodes featuring a guest interview get listened to all the way through more often. But the guest episodes are almost all the ones under 30 minutes, and among short episodes, guest and solo formats finish at the same rate. Which lead is strongest?",
    mcOptions: [
      {
        text: "Short length is the real driver and renders the guest format idle; test whether short solo episodes finish just as often, whether long guest episodes finish no better than long solo ones, and whether trimming a long solo episode raises its completion with no guest added.",
        credit: 1.0,
      },
      {
        text: "Episode length seems to matter more than having a guest.",
        credit: 0.3,
      },
      {
        text: "Length is probably the factor; we could compare a couple of episodes.",
        credit: 0.6,
      },
      {
        text: "Guest episodes finish more, so book a guest for every show to boost completion.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Short length is the real driver and renders the guest format idle; test whether short solo episodes finish just as often, whether long guest episodes finish no better than long solo ones, and whether trimming a long solo episode raises its completion with no guest added.",
    explanation:
      "Within short episodes the guest format makes no difference, so length screens it off; full credit names that and three checks. 'Book a guest every show' targets the screened-off correlate.",
  },
  {
    itemType: "mc",
    prompt:
      "An airline finds flights that used its new gate-side bag-check procedure arrived on time more often. But those flights were nearly all morning departures, and among morning flights, the new procedure and the old one arrive on time at the same rate. Which conclusion best follows?",
    mcOptions: [
      {
        text: "On-time arrival depends on so many things — weather, crews, air traffic — that the procedure can't be judged.",
        credit: 0,
      },
      {
        text: "Morning departure is the real driver and screens off the bag-check procedure; test whether morning flights on the old procedure arrive on time just as often, whether the new procedure on afternoon flights shows no gain, and whether shifting an afternoon flight to the morning improves its punctuality unchanged.",
        credit: 1.0,
      },
      {
        text: "The morning slot seems to matter more than the procedure.",
        credit: 0.3,
      },
      {
        text: "Morning departures are probably the key; we could look at a couple of routes.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Morning departure is the real driver and screens off the bag-check procedure; test whether morning flights on the old procedure arrive on time just as often, whether the new procedure on afternoon flights shows no gain, and whether shifting an afternoon flight to the morning improves its punctuality unchanged.",
    explanation:
      "Among morning flights the procedure makes no difference, so departure time screens it off; the best lead names it and tests it. 'Too many things to judge' is the dodge even though the data point clearly to the morning slot.",
  },
  {
    itemType: "mc",
    prompt:
      "A library finds patrons who joined its book club finish more books per month. But nearly all club members also set a reading goal in the library app, and among goal-setters, club members and non-members finish the same number. Which lead is strongest?",
    mcOptions: [
      {
        text: "Setting a reading goal seems to matter more than the club.",
        credit: 0.3,
      },
      {
        text: "Setting a reading goal is the real driver and makes club membership idle; test whether goal-setters outside the club finish just as many, whether club members who set no goal finish at baseline, and whether prompting non-members to set a goal raises their count with no club.",
        credit: 1.0,
      },
      {
        text: "Club members finish more, so push every patron to join the book club.",
        credit: 0,
      },
      {
        text: "The reading goal is probably the factor; we could ask a few patrons.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Setting a reading goal is the real driver and makes club membership idle; test whether goal-setters outside the club finish just as many, whether club members who set no goal finish at baseline, and whether prompting non-members to set a goal raises their count with no club.",
    explanation:
      "Within goal-setters the club makes no difference, so the goal screens it off; top credit names the screening variable and three probes. 'Push everyone to join the club' chases the defeated correlate.",
  },
  {
    itemType: "mc",
    prompt:
      "A real-estate agent finds professionally staged homes sell within two weeks far more often. But nearly all staged listings were also priced below the market estimate, and among under-priced homes, staged and unstaged listings sell just as fast. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Staged homes sell fast, so stage every listing to speed up sales.",
        credit: 0,
      },
      {
        text: "Below-market pricing is the live driver and screens off staging; test whether under-priced unstaged homes sell just as fast, whether staged homes priced at or above estimate sell no faster, and whether cutting an over-priced listing's price speeds it up with no staging.",
        credit: 1.0,
      },
      {
        text: "The pricing seems to matter more than the staging.",
        credit: 0.3,
      },
      {
        text: "Below-market pricing is probably the key; we could look at a couple of recent sales.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Below-market pricing is the live driver and screens off staging; test whether under-priced unstaged homes sell just as fast, whether staged homes priced at or above estimate sell no faster, and whether cutting an over-priced listing's price speeds it up with no staging.",
    explanation:
      "Among under-priced homes staging makes no difference, so price screens it off; full credit names that and the checks. 'Stage every listing' acts on the screened-off correlate the data defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A call center finds agents who use the new sales script earn higher satisfaction scores. But those agents almost all resolve the issue on the first contact, and among first-contact-resolved calls, scripted and unscripted agents score the same. Which lead is strongest?",
    mcOptions: [
      {
        text: "First-contact resolution seems more important than the script.",
        credit: 0.3,
      },
      {
        text: "First-contact resolution is probably the driver; we could sample a few calls.",
        credit: 0.6,
      },
      {
        text: "First-contact resolution is the real driver and renders the script idle; test whether first-contact calls without the script score just as high, whether scripted agents who need callbacks score at baseline, and whether tooling that boosts first-contact resolution lifts scores with no script change.",
        credit: 1.0,
      },
      {
        text: "Scripted agents score higher, so mandate the script for the whole floor.",
        credit: 0,
      },
    ],
    correctAnswer:
      "First-contact resolution is the real driver and renders the script idle; test whether first-contact calls without the script score just as high, whether scripted agents who need callbacks score at baseline, and whether tooling that boosts first-contact resolution lifts scores with no script change.",
    explanation:
      "Within first-contact resolutions the script adds nothing, so resolution screens it off; top credit names it and three checks. Mandating the script chases the correlate the data defeats.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A coffee roaster finds customers who get beans in its premium tin packaging come back to reorder more often than those who get plain bags. But nearly all tin orders ship within three days of roasting, while bag orders often sit a week; among beans shipped within three days, tin and bag customers reorder at the same rate. Which lead best follows?",
    mcOptions: [
      {
        text: "Freshness — shipping within three days — is the real driver and screens off the packaging; test whether bag customers who get three-day-fresh beans reorder just as much, whether tin customers sent week-old beans reorder at baseline, and whether tightening every order's roast-to-ship time lifts reorders with no packaging change.",
        credit: 1.0,
      },
      {
        text: "The freshness seems to matter more than the tin.",
        credit: 0.3,
      },
      {
        text: "Tin customers reorder more, so put all beans in premium tins to grow repeat business.",
        credit: 0,
      },
      {
        text: "Freshness is probably the factor; we could check a few orders' ship dates.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'freshness screens off packaging' lead from the rival 'the premium tin itself drives reorders,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: ship a batch of plain-bag orders within three days of roasting and compare their reorder rate to tin orders — my lead predicts the fresh bags reorder just as often. It is refuted if fresh plain-bag customers still reorder less than tin customers, which would point to the packaging after all.",
      yieldAnchors: [
        "Tin customers reorder more often than bag customers",
        "Tin orders ship within three days; bag orders often sit a week",
        "Among three-day-fresh beans, tin and bag reorder the same",
      ],
      riskAnchors: [
        "Fresh-shipped bag customers reorder just as much as tin customers",
        "Tin customers sent week-old beans reorder only at baseline",
        "Tightening roast-to-ship time alone lifts reorders",
      ],
      defeatedBy: [
        "The premium tin itself drives reorders",
        "Packaging and reorder rate are unrelated",
      ],
    },
    correctAnswer:
      "Freshness — shipping within three days — is the real driver and screens off the packaging; test whether bag customers who get three-day-fresh beans reorder just as much, whether tin customers sent week-old beans reorder at baseline, and whether tightening every order's roast-to-ship time lifts reorders with no packaging change.",
    explanation:
      "Within fresh shipments packaging makes no difference, so freshness screens off the tin; full credit names the screening variable, three checks, and a cheap test that states its own refutation. 'Tins drive reorders' is the defeated correlate.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A cycling club finds riders on carbon race wheels finish group rides faster than those on stock wheels. But nearly every carbon-wheel rider also does structured interval training twice a week; among interval-trainers, carbon and stock wheels finish at the same time. Which lead is strongest?",
    mcOptions: [
      {
        text: "Carbon-wheel riders finish faster, so the wheels are the upgrade; tell everyone to buy them.",
        credit: 0,
      },
      {
        text: "Interval training is the real driver and makes the wheels idle; test whether interval-trainers on stock wheels finish just as fast, whether carbon-wheel riders who skip intervals finish at baseline, and whether adding intervals to a stock-wheel rider's week speeds them up with no new wheels.",
        credit: 1.0,
      },
      {
        text: "The interval training seems to matter more than the wheels.",
        credit: 0.3,
      },
      {
        text: "Interval training is probably the key; we could ask a couple of riders about their week.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'interval training screens off wheels' lead from the rival 'the carbon wheels make riders faster,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare finish times of interval-trainers on stock wheels with interval-trainers on carbon wheels — my lead predicts no gap. It is refuted if carbon wheels still finish faster even among riders doing identical interval training, which would credit the wheels.",
      yieldAnchors: [
        "Carbon-wheel riders finish faster than stock-wheel riders",
        "Nearly all carbon-wheel riders do twice-weekly intervals",
        "Among interval-trainers, wheel type makes no time difference",
      ],
      riskAnchors: [
        "Interval-trainers on stock wheels finish just as fast",
        "Carbon-wheel riders who skip intervals finish only at baseline",
        "Adding intervals speeds up a stock-wheel rider",
      ],
      defeatedBy: [
        "The carbon wheels make riders faster",
        "Training and finish time are unrelated",
      ],
    },
    correctAnswer:
      "Interval training is the real driver and makes the wheels idle; test whether interval-trainers on stock wheels finish just as fast, whether carbon-wheel riders who skip intervals finish at baseline, and whether adding intervals to a stock-wheel rider's week speeds them up with no new wheels.",
    explanation:
      "Among interval-trainers the wheels make no difference, so training screens them off; top credit names that, three checks, and a cheap head-to-head test that names its refutation. 'Buy the wheels' chases the defeated correlate.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A beekeeper finds hives painted a new bright color produce more honey than plain hives. But nearly all the painted hives sit beside the clover field, while the plain ones are by the woods; among hives next to the clover, painted and plain produce the same. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Being next to the clover field is the real driver and screens off the paint color; test whether plain hives beside the clover produce just as much, whether painted hives by the woods produce at baseline, and whether moving a plain hive to the clover raises its yield with no repaint.",
        credit: 1.0,
      },
      {
        text: "The clover location seems to matter more than the paint.",
        credit: 0.3,
      },
      {
        text: "The clover field is probably the factor; we could check one or two hives.",
        credit: 0.6,
      },
      {
        text: "Painted hives make more honey, so repaint the whole apiary to lift production.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'clover proximity screens off paint' lead from the rival 'the bright color helps bees navigate and boosts honey,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare a plain hive placed beside the clover with the painted hives already there — my lead predicts equal honey. It is refuted if the painted hives still out-produce the plain one at the same clover spot, which would credit the color.",
      yieldAnchors: [
        "Painted hives produce more honey than plain ones",
        "Painted hives sit by the clover; plain ones by the woods",
        "Beside the clover, paint color makes no yield difference",
      ],
      riskAnchors: [
        "Plain hives beside the clover produce just as much",
        "Painted hives by the woods produce only at baseline",
        "Moving a plain hive to the clover raises its yield",
      ],
      defeatedBy: [
        "The bright paint helps bees and boosts honey",
        "Hive location and yield are unrelated",
      ],
    },
    correctAnswer:
      "Being next to the clover field is the real driver and screens off the paint color; test whether plain hives beside the clover produce just as much, whether painted hives by the woods produce at baseline, and whether moving a plain hive to the clover raises its yield with no repaint.",
    explanation:
      "Within clover-adjacent hives the paint makes no difference, so location screens it off; full credit names the screening variable, three checks, and a cheap placement test that states its refutation. 'Repaint the apiary' is the defeated overreach.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An online store finds shoppers who use the new one-click checkout button complete purchases more often than those who use the standard form. But nearly all one-click users already have saved payment info; among shoppers with saved payment info, one-click and standard-form users complete at the same rate. Which lead is strongest?",
    mcOptions: [
      {
        text: "One-click checkout seems to convert better.",
        credit: 0.3,
      },
      {
        text: "Having saved payment info is the real driver and screens off the one-click button; test whether saved-info shoppers on the standard form complete just as often, whether one-click users without saved info complete at baseline, and whether prompting shoppers to save a card lifts completion with no button change.",
        credit: 1.0,
      },
      {
        text: "Saved payment info is probably the factor; we could look at a few sessions.",
        credit: 0.6,
      },
      {
        text: "One-click users complete more, so make one-click the only checkout to raise conversion.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'saved payment info screens off one-click' lead from the rival 'the one-click button itself lifts completion,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare completion rates of saved-info shoppers who use the standard form with saved-info shoppers who use one-click — my lead predicts no gap. It is refuted if one-click still completes more even among shoppers who all have saved cards, which would credit the button.",
      yieldAnchors: [
        "One-click users complete purchases more often",
        "Nearly all one-click users have saved payment info",
        "Among saved-info shoppers, checkout type makes no difference",
      ],
      riskAnchors: [
        "Saved-info shoppers on the standard form complete just as often",
        "One-click users without saved info complete only at baseline",
        "Prompting card-saving lifts completion with no button change",
      ],
      defeatedBy: [
        "The one-click button itself lifts completion",
        "Saved payment info and completion are unrelated",
      ],
    },
    correctAnswer:
      "Having saved payment info is the real driver and screens off the one-click button; test whether saved-info shoppers on the standard form complete just as often, whether one-click users without saved info complete at baseline, and whether prompting shoppers to save a card lifts completion with no button change.",
    explanation:
      "Among saved-info shoppers the button makes no difference, so saved info screens it off; top credit names that, three checks, and a cheap matched comparison that names its refutation. 'Make one-click the only checkout' chases the defeated correlate.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A dental practice finds patients who switched to a new toothpaste brand had fewer cavities at their next checkup. But nearly all the switchers also took up daily flossing at the same visit; among daily flossers, the new brand and the old brand show the same cavity counts. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Switchers had fewer cavities, so recommend the new toothpaste to every patient.",
        credit: 0,
      },
      {
        text: "Daily flossing is the real driver and makes the toothpaste brand idle; test whether daily flossers on the old toothpaste have just as few cavities, whether new-brand users who don't floss show no improvement, and whether coaching non-flossers to floss cuts cavities with no brand change.",
        credit: 1.0,
      },
      {
        text: "The flossing seems to matter more than the toothpaste.",
        credit: 0.3,
      },
      {
        text: "Daily flossing is probably the factor; we could review a few patients' records.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'flossing screens off toothpaste' lead from the rival 'the new toothpaste prevents cavities,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare cavity counts of daily flossers on the old toothpaste with daily flossers on the new one — my lead predicts no difference. It is refuted if new-toothpaste flossers still have fewer cavities than old-toothpaste flossers, which would credit the paste.",
      yieldAnchors: [
        "Switchers had fewer cavities at the next checkup",
        "Nearly all switchers took up daily flossing",
        "Among daily flossers, brand makes no difference",
      ],
      riskAnchors: [
        "Daily flossers on the old toothpaste have just as few cavities",
        "New-brand users who don't floss show no improvement",
        "Coaching non-flossers to floss cuts cavities",
      ],
      defeatedBy: [
        "The new toothpaste prevents cavities",
        "Flossing and cavity counts are unrelated",
      ],
    },
    correctAnswer:
      "Daily flossing is the real driver and makes the toothpaste brand idle; test whether daily flossers on the old toothpaste have just as few cavities, whether new-brand users who don't floss show no improvement, and whether coaching non-flossers to floss cuts cavities with no brand change.",
    explanation:
      "Within daily flossers the brand makes no difference, so flossing screens it off; full credit names the screening variable, three checks, and a cheap matched test that states its refutation. 'Recommend the toothpaste' is the defeated correlate.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A music label finds tracks that got a redesigned album cover get saved to playlists far more. But nearly every redesigned track was also added to a big editorial playlist that week; among editorial-featured tracks, redesigned and old covers get saved at the same rate. Which lead is strongest?",
    mcOptions: [
      {
        text: "Editorial-playlist placement is the real driver and screens off the cover redesign; test whether editorial-featured tracks with old covers get saved just as much, whether redesigned tracks with no editorial placement get saved at baseline, and whether pitching a track for an editorial playlist lifts saves with no new art.",
        credit: 1.0,
      },
      {
        text: "The editorial placement seems to matter more than the cover.",
        credit: 0.3,
      },
      {
        text: "Editorial placement is probably the factor; we could check a couple of tracks.",
        credit: 0.6,
      },
      {
        text: "Redesigned tracks get saved more, so redesign every cover to grow playlist saves.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'editorial placement screens off cover art' lead from the rival 'the new cover art drives saves,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare saves of editorial-featured tracks that kept their old cover with editorial-featured tracks that were redesigned — my lead predicts no gap. It is refuted if redesigned covers still get saved more even among editorially featured tracks, which would credit the art.",
      yieldAnchors: [
        "Redesigned-cover tracks get saved to playlists far more",
        "Nearly every redesigned track joined a big editorial playlist",
        "Among editorial-featured tracks, cover makes no difference",
      ],
      riskAnchors: [
        "Editorial-featured old-cover tracks get saved just as much",
        "Redesigned tracks without editorial placement get saved at baseline",
        "Winning editorial placement lifts saves with no new art",
      ],
      defeatedBy: [
        "The new cover art drives the saves",
        "Cover art and playlist saves are unrelated",
      ],
    },
    correctAnswer:
      "Editorial-playlist placement is the real driver and screens off the cover redesign; test whether editorial-featured tracks with old covers get saved just as much, whether redesigned tracks with no editorial placement get saved at baseline, and whether pitching a track for an editorial playlist lifts saves with no new art.",
    explanation:
      "Within editorial-featured tracks the cover makes no difference, so placement screens it off; top credit names that, three checks, and a cheap matched test that states its refutation. 'Redesign every cover' chases the defeated correlate.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A warehouse finds shifts using the new handheld scanner have higher pick accuracy than shifts using paper lists. But the scanner shifts nearly all had a supervisor on the floor, while paper shifts often didn't; among shifts with a supervisor, scanner and paper accuracy are the same. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Scanner shifts are more accurate, so roll out scanners to every shift.",
        credit: 0,
      },
      {
        text: "Having a supervisor on the floor seems to matter more than the scanner.",
        credit: 0.3,
      },
      {
        text: "A floor supervisor is probably the driver; we could watch a couple of shifts.",
        credit: 0.6,
      },
      {
        text: "A floor supervisor is the real driver and renders the scanner idle; test whether supervised paper shifts are just as accurate, whether unsupervised scanner shifts drop to baseline, and whether adding a supervisor to a paper shift lifts accuracy with no scanner.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'supervisor screens off scanner' lead from the rival 'the scanner improves pick accuracy,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare pick accuracy of supervised paper shifts with supervised scanner shifts — my lead predicts no difference. It is refuted if scanner shifts stay more accurate even when both have a supervisor, which would credit the scanner.",
      yieldAnchors: [
        "Scanner shifts have higher pick accuracy than paper shifts",
        "Scanner shifts nearly all had a floor supervisor",
        "Among supervised shifts, scanner vs paper makes no difference",
      ],
      riskAnchors: [
        "Supervised paper shifts are just as accurate",
        "Unsupervised scanner shifts drop to baseline accuracy",
        "Adding a supervisor to a paper shift lifts accuracy",
      ],
      defeatedBy: [
        "The scanner improves pick accuracy",
        "Supervision and accuracy are unrelated",
      ],
    },
    correctAnswer:
      "A floor supervisor is the real driver and renders the scanner idle; test whether supervised paper shifts are just as accurate, whether unsupervised scanner shifts drop to baseline, and whether adding a supervisor to a paper shift lifts accuracy with no scanner.",
    explanation:
      "Among supervised shifts the scanner makes no difference, so supervision screens it off; full credit names the screening variable, three checks, and a cheap matched test that states its refutation. 'Roll out scanners' chases the defeated correlate.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A tennis player wins more matches when she uses a new string type. But nearly all those matches were on her home clay courts, while the old strings were used on away hard courts; among home clay matches, new and old strings win at the same rate. Which lead is strongest?",
    mcOptions: [
      {
        text: "The home clay court is the real driver and makes the string type idle; test whether home clay matches with the old strings win just as often, whether new strings on away hard courts win at baseline, and whether playing more matches at home raises her win rate with no string change.",
        credit: 1.0,
      },
      {
        text: "The home court seems to matter more than the strings.",
        credit: 0.3,
      },
      {
        text: "The home clay court is probably the factor; we could look at a couple of matches.",
        credit: 0.6,
      },
      {
        text: "She wins more with the new strings, so switch to them for every match.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'home clay court screens off strings' lead from the rival 'the new strings win matches,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare her win rate on home clay with the old strings to her win rate on home clay with the new strings — my lead predicts no gap. It is refuted if the new strings still win more even on the same home clay courts, which would credit the strings.",
      yieldAnchors: [
        "She wins more matches with the new string type",
        "Nearly all those matches were on home clay courts",
        "Among home clay matches, string type makes no difference",
      ],
      riskAnchors: [
        "Home clay matches with old strings win just as often",
        "New strings on away hard courts win only at baseline",
        "Playing more matches at home raises her win rate",
      ],
      defeatedBy: [
        "The new strings win matches",
        "String type and match outcome are unrelated",
      ],
    },
    correctAnswer:
      "The home clay court is the real driver and makes the string type idle; test whether home clay matches with the old strings win just as often, whether new strings on away hard courts win at baseline, and whether playing more matches at home raises her win rate with no string change.",
    explanation:
      "Within home clay matches the strings make no difference, so the court screens them off; top credit names that, three checks, and a cheap matched test that states its refutation. 'Switch to the new strings' chases the defeated correlate.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A mobile app finds users who watched its intro video have higher day-7 retention than those who skipped it. But nearly all video-watchers also connected a data source during setup; among users who connected a data source, watchers and skippers retain identically. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The intro video and retention are tied together somehow.",
        credit: 0.3,
      },
      {
        text: "Connecting a data source is the real driver and screens off the intro video; test whether data-connectors who skipped the video retain just as well, whether video-watchers who connected nothing retain at baseline, and whether nudging users to connect a source lifts retention with no video.",
        credit: 1.0,
      },
      {
        text: "Connecting a data source is probably the factor; we could check a few setups.",
        credit: 0.6,
      },
      {
        text: "Watchers retain better, so force the intro video on every new user.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'data-source connection screens off the video' lead from the rival 'the intro video drives retention,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare day-7 retention of data-connectors who skipped the video with data-connectors who watched it — my lead predicts no gap. It is refuted if video-watchers still retain better even among users who all connected a source, which would credit the video.",
      yieldAnchors: [
        "Video-watchers have higher day-7 retention",
        "Nearly all video-watchers connected a data source",
        "Among data-connectors, watching vs skipping makes no difference",
      ],
      riskAnchors: [
        "Data-connectors who skipped the video retain just as well",
        "Video-watchers who connected nothing retain at baseline",
        "Nudging users to connect a source lifts retention",
      ],
      defeatedBy: [
        "The intro video drives retention",
        "Watching the video and retention are unrelated",
      ],
    },
    correctAnswer:
      "Connecting a data source is the real driver and screens off the intro video; test whether data-connectors who skipped the video retain just as well, whether video-watchers who connected nothing retain at baseline, and whether nudging users to connect a source lifts retention with no video.",
    explanation:
      "Among data-connectors the video makes no difference, so the connection screens it off; full credit names the screening variable, three checks, and a cheap matched test that states its refutation. 'Force the intro video' chases the defeated correlate.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A wholesale bakery notices that cafés given a branded countertop display stand reorder its pastries far more often than cafés without one. Digging in, the owner sees that almost every café with a stand also sits within a block of a busy transit stop, while the no-stand cafés are on quiet side streets. Among the high-foot-traffic transit-stop cafés, those with and without a stand reorder at the same rate, and the few side-street cafés that did get a stand reorder no more than their neighbors. In one paragraph, propose the strongest lead for the reorder pattern and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that foot traffic from the nearby transit stop drives pastry sell-through and therefore reorders, and once you know a café is high-traffic the display stand is inferentially idle — it adds nothing. This lead is fecund because it predicts checkable consequences: transit-stop cafés without a stand should reorder just as often as those with one; side-street cafés should reorder at the low baseline whether or not they have a stand; and a café's reorder volume should track its measured daily foot traffic far more tightly than its stand status. I would test it by comparing reorder rates of stand and no-stand cafés within the transit-stop group, by placing a stand in several quiet side-street cafés and confirming their reorders don't rise, and by regressing reorder volume on a pedestrian count to see whether traffic, not the stand, carries the signal.",
      yieldAnchors: [
        "Cafés with a display stand reorder far more often",
        "Almost every stand café is within a block of a busy transit stop",
        "Among transit-stop cafés, stand vs no-stand reorder the same; side-street stand cafés reorder no more",
      ],
      riskAnchors: [
        "Transit-stop cafés without a stand reorder just as often",
        "Side-street cafés with a stand reorder at the low baseline",
        "Reorder volume tracks measured foot traffic, not stand status",
      ],
      defeatedBy: [
        "The branded display stand itself drives reorders",
        "Both the stand and the location matter equally and can't be separated",
        "Nothing can be concluded without surveying every café first",
      ],
    },
    correctAnswer:
      "The strongest lead is that foot traffic from the nearby transit stop drives pastry sell-through and therefore reorders, and once you know a café is high-traffic the display stand is inferentially idle — it adds nothing. This lead is fecund because it predicts checkable consequences: transit-stop cafés without a stand should reorder just as often as those with one; side-street cafés should reorder at the low baseline whether or not they have a stand; and a café's reorder volume should track its measured daily foot traffic far more tightly than its stand status. I would test it by comparing reorder rates of stand and no-stand cafés within the transit-stop group, by placing a stand in several quiet side-street cafés and confirming their reorders don't rise, and by regressing reorder volume on a pedestrian count to see whether traffic, not the stand, carries the signal.",
    explanation:
      "Conditioning on transit-stop location erases the stand's apparent effect, so location screens the stand off; top credit commits to that and names tests. 'The stand drives reorders' is the defeated correlate, and 'can't be separated' or 'survey everyone first' are the dodges CCR penalizes.",
  },
  {
    itemType: "written",
    prompt:
      "A school district reports that elementary schools that adopted a new reading app posted bigger year-over-year reading gains than schools that didn't. A closer look shows that nearly every app-adopting school also added a daily 20-minute silent-reading block to its schedule that same year, while non-adopters kept their old schedule. Among the schools that added the silent-reading block, app adopters and non-adopters posted the same gains, and the one school that bought the app but never added the block gained nothing. In one paragraph, propose the strongest lead and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the daily 20-minute silent-reading block — more time spent actually reading — drives the gains, and once a school has the block the reading app is inferentially idle. This lead is fecund because it predicts checkable consequences: schools with the block but no app should gain just as much; the lone app-without-block school should sit at baseline, as it did; and gains should scale with measured minutes of reading time rather than app usage. I would test it by comparing gains of block schools with and without the app, by having several non-app schools add only the silent-reading block and checking that their gains rise, and by correlating each school's gain with logged reading minutes versus app logins to see which variable carries the effect.",
      yieldAnchors: [
        "App-adopting schools posted bigger reading gains",
        "Nearly every app school also added a daily silent-reading block",
        "Among block schools, app vs no-app gains are equal; the app-only school gained nothing",
      ],
      riskAnchors: [
        "Block schools without the app gain just as much",
        "Schools that add only the block see gains rise",
        "Gains scale with reading minutes, not app logins",
      ],
      defeatedBy: [
        "The reading app drives the gains",
        "App and reading block both matter and can't be told apart",
        "We can't say anything until every school is tested for years",
      ],
    },
    correctAnswer:
      "The strongest lead is that the daily 20-minute silent-reading block — more time spent actually reading — drives the gains, and once a school has the block the reading app is inferentially idle. This lead is fecund because it predicts checkable consequences: schools with the block but no app should gain just as much; the lone app-without-block school should sit at baseline, as it did; and gains should scale with measured minutes of reading time rather than app usage. I would test it by comparing gains of block schools with and without the app, by having several non-app schools add only the silent-reading block and checking that their gains rise, and by correlating each school's gain with logged reading minutes versus app logins to see which variable carries the effect.",
    explanation:
      "Within block schools the app makes no difference, so the silent-reading block screens it off; credit rewards committing to that and naming a clean test. 'The app drives gains' is the defeated correlate; 'can't be told apart' and 'can't say anything yet' are the dodges.",
  },
  {
    itemType: "written",
    prompt:
      "A manufacturer finds its plants that installed new LED lighting cut their energy bills more than plants that didn't. On review, nearly every LED plant also retrofitted its HVAC system in the same capital project, while the non-LED plants did neither. Among the plants that retrofitted HVAC, LED and non-LED plants show the same bill reductions, and the one plant that installed LEDs but kept its old HVAC saw almost no savings. In one paragraph, propose the strongest lead and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that the HVAC retrofit drives the energy savings, and once a plant has retrofitted HVAC the LED lighting is inferentially idle — its added savings are negligible. This lead is fecund because it predicts checkable consequences: HVAC-retrofit plants without LEDs should save just as much; the lone LED-only plant should show almost no savings, as it did; and the dollar reduction should track HVAC runtime and load rather than lighting wattage. I would test it by comparing bills of HVAC-retrofit plants with and without LEDs, by retrofitting HVAC at a control plant while leaving its lighting alone and confirming its bill falls, and by sub-metering lighting versus HVAC circuits to see which load actually dropped.",
      yieldAnchors: [
        "LED plants cut energy bills more than non-LED plants",
        "Nearly every LED plant also retrofitted HVAC",
        "Among HVAC-retrofit plants, LED vs non-LED save the same; the LED-only plant barely saved",
      ],
      riskAnchors: [
        "HVAC-retrofit plants without LEDs save just as much",
        "Retrofitting HVAC alone lowers a control plant's bill",
        "Sub-metering shows the HVAC load, not lighting, dropped",
      ],
      defeatedBy: [
        "The LED lighting drives the savings",
        "LEDs and HVAC both matter equally and can't be separated",
        "No conclusion is possible until many billing cycles pass",
      ],
    },
    correctAnswer:
      "The strongest lead is that the HVAC retrofit drives the energy savings, and once a plant has retrofitted HVAC the LED lighting is inferentially idle — its added savings are negligible. This lead is fecund because it predicts checkable consequences: HVAC-retrofit plants without LEDs should save just as much; the lone LED-only plant should show almost no savings, as it did; and the dollar reduction should track HVAC runtime and load rather than lighting wattage. I would test it by comparing bills of HVAC-retrofit plants with and without LEDs, by retrofitting HVAC at a control plant while leaving its lighting alone and confirming its bill falls, and by sub-metering lighting versus HVAC circuits to see which load actually dropped.",
    explanation:
      "Among HVAC-retrofit plants the LEDs add nothing, so the HVAC retrofit screens them off; top credit commits to that and names tests, including sub-metering. 'LEDs drive savings' is the defeated correlate; 'can't be separated' and 'no conclusion possible' are the penalized dodges.",
  },
  {
    itemType: "written",
    prompt:
      "A fitness app finds that users who upgraded to premium maintain longer workout streaks than free users. Looking closer, nearly all premium users had also scheduled their workouts into their phone calendar, while most free users hadn't. Among users who scheduled workouts in their calendar, premium and free users hold the same streak lengths, and the handful of premium users who never scheduled anything have streaks no better than free users. In one paragraph, propose the strongest lead and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that scheduling workouts into the calendar — a commitment-and-reminder habit — drives the longer streaks, and once a user schedules, the premium upgrade is inferentially idle for streak length. This lead is fecund because it predicts checkable consequences: free users who schedule should hold streaks as long as premium schedulers; premium users who never schedule should sit at the free-user baseline, as they do; and streak length should track scheduled-workout count rather than subscription tier. I would test it by comparing streaks of schedulers across both tiers, by prompting a random set of free users to schedule their workouts and watching their streaks lengthen, and by correlating streak length with number of calendar entries versus premium status to see which variable carries the effect.",
      yieldAnchors: [
        "Premium users hold longer workout streaks than free users",
        "Nearly all premium users scheduled workouts in their calendar",
        "Among schedulers, premium and free streaks are equal; non-scheduling premium users match free users",
      ],
      riskAnchors: [
        "Free users who schedule hold streaks as long as premium schedulers",
        "Prompting free users to schedule lengthens their streaks",
        "Streak length tracks scheduled-workout count, not tier",
      ],
      defeatedBy: [
        "The premium upgrade itself drives longer streaks",
        "Premium and scheduling both matter and can't be separated",
        "Nothing can be concluded without tracking users for a full year",
      ],
    },
    correctAnswer:
      "The strongest lead is that scheduling workouts into the calendar — a commitment-and-reminder habit — drives the longer streaks, and once a user schedules, the premium upgrade is inferentially idle for streak length. This lead is fecund because it predicts checkable consequences: free users who schedule should hold streaks as long as premium schedulers; premium users who never schedule should sit at the free-user baseline, as they do; and streak length should track scheduled-workout count rather than subscription tier. I would test it by comparing streaks of schedulers across both tiers, by prompting a random set of free users to schedule their workouts and watching their streaks lengthen, and by correlating streak length with number of calendar entries versus premium status to see which variable carries the effect.",
    explanation:
      "Within schedulers the premium tier makes no difference, so scheduling screens it off; credit rewards committing to that and naming a randomized prompt test. 'Premium drives streaks' is the defeated correlate; 'can't be separated' and 'need a full year' are the dodges CCR penalizes.",
  },
  {
    itemType: "written",
    prompt:
      "A SaaS company finds that accounts assigned a dedicated customer-success manager churn far less than self-serve accounts. Investigating, the team sees that nearly every account with a success manager had also completed the API integration, while most self-serve accounts never did. Among accounts that completed the API integration, those with and without a success manager churn at the same low rate, and the few success-manager accounts that never integrated churned as much as self-serve accounts. In one paragraph, propose the strongest lead and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that completing the API integration — which embeds the product in the customer's daily workflow — drives the low churn, and once an account has integrated, the dedicated success manager is inferentially idle for retention. This lead is fecund because it predicts checkable consequences: integrated accounts without a success manager should churn just as little; success-manager accounts that never integrated should churn at the self-serve rate, as they did; and churn should track integration depth (calls per day, endpoints used) rather than whether a manager was assigned. I would test it by comparing churn of integrated accounts with and without a manager, by helping a random set of self-serve accounts complete the integration and confirming their churn drops, and by correlating churn with API usage versus manager assignment to see which variable carries the signal.",
      yieldAnchors: [
        "Accounts with a success manager churn far less",
        "Nearly every success-manager account completed the API integration",
        "Among integrated accounts, manager vs no-manager churn is equal; non-integrated manager accounts churned like self-serve",
      ],
      riskAnchors: [
        "Integrated accounts without a manager churn just as little",
        "Helping self-serve accounts integrate drops their churn",
        "Churn tracks API usage depth, not manager assignment",
      ],
      defeatedBy: [
        "The dedicated success manager drives the low churn",
        "The manager and the integration both matter and can't be separated",
        "No conclusion is possible until more accounts are observed",
      ],
    },
    correctAnswer:
      "The strongest lead is that completing the API integration — which embeds the product in the customer's daily workflow — drives the low churn, and once an account has integrated, the dedicated success manager is inferentially idle for retention. This lead is fecund because it predicts checkable consequences: integrated accounts without a success manager should churn just as little; success-manager accounts that never integrated should churn at the self-serve rate, as they did; and churn should track integration depth (calls per day, endpoints used) rather than whether a manager was assigned. I would test it by comparing churn of integrated accounts with and without a manager, by helping a random set of self-serve accounts complete the integration and confirming their churn drops, and by correlating churn with API usage versus manager assignment to see which variable carries the signal.",
    explanation:
      "Among integrated accounts the success manager makes no difference, so integration screens it off; top credit commits to that and names a clean test. 'The manager drives retention' is the defeated correlate; 'can't be separated' and 'no conclusion possible' are the dodges CCR penalizes.",
  },
];

export const section: SectionContent = {
  slug: "screening-off",
  title: "Screening Off",
  weekNumber: 3,
  blurb:
    "When one cause fully accounts for the data, a correlated rival is screened off — it adds nothing once you know the real driver. The constructive move is to name that driver and show the rival goes idle when you condition on it.",
  lectureTitle:
    "3.6 Screening Off: recognizing when one explanation renders a rival inferentially idle",
  body: `# Screening Off

Two factors often rise and fall together, and both seem to explain an outcome. Reflexive caution shrugs: "both probably matter, you can't really separate them." Constructive Critical Reasoning does something sharper — it asks whether one factor, once known, makes the other *inferentially idle*. When a true cause fully accounts for the data, a correlated tag-along is **screened off**: it carries no extra information, and crediting it is a mistake the evidence can expose.

## When one cause swallows the other

Screening off is about conditional independence. If high scorers all drank a sports drink *and* all did the warm-up, the drink looks powerful — until you notice that among warm-up doers, drinkers and non-drinkers score the same. The warm-up "swallows" the drink: hold the warm-up fixed and the drink's signal disappears. The strong reasoner names the variable that, once held fixed, leaves the rival doing no explanatory work.

## Condition and look again — the defining test

The whole skill reduces to one move: *condition on the candidate driver and re-check the rival.* Look within the group that shares the real cause. If the supposed second factor still makes no difference there, it is screened off. So the winning answer always carries the same shape of tests: the rival's presence makes no difference among those who have the real driver; the rival alone (without the driver) produces only baseline; and intervening on the driver alone reproduces the effect.

## Don't credit the passenger

A screened-off factor is a passenger, not the engine. The classic error is to act on the passenger — stock more sports drinks, mail more coupons, buy more carbon wheels — because it correlated with success. The data have already shown that holding the real driver fixed, the passenger does nothing. Spending effort on it is waste, and predicting it will help is a claim the evidence defeats.

## Why the "both matter, can't separate" dodge loses

"They're too entangled to tell apart" *sounds* careful, but when the within-group comparison is right there — equal outcomes among those who share one factor — the entanglement has already been cut. Refusing to name the driver throws away a clean result you were handed. The dodge earns zero precisely because the discriminating evidence exists and points one way.

## Overreach still loses

Screening off is not a license to declare the passenger causally inert in *all* settings. If the within-group samples are tiny, or you never checked the driver-absent cell, you haven't earned the conclusion yet. The strong claim is bounded: "given this evidence, the rival adds nothing here, and here is the cell I'd check to be sure." Declaring it useless everywhere, on thin data, is its own overreach.

## In the real world

A marketing team sees that customers who opened the new email campaign bought more. But almost every opener was already a repeat buyer, and among repeat buyers, openers and non-openers bought the same. The dodge: "email and loyalty both matter." The screening-off move: repeat-buyer status screens off the email — test whether repeat buyers who never opened buy just as much, whether openers who aren't repeat buyers buy only at baseline, and whether a loyalty push lifts sales with no campaign. That tells the team to stop crediting the open and start cultivating repeat buyers.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
