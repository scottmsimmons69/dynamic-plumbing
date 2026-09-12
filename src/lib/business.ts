/**
 * EVERY business fact lives here. Nothing hardcoded in the pages.
 * Populated Sep 9, 2026 from Jason's questionnaire answers.
 *
 * TODO = still unconfirmed. Nothing marked TODO ships.
 */

export const biz = {
  // ---- Identity -----------------------------------------------------------
  name: "Dynamic Plumbing & Mechanical",
  legalName: "Dynamic Plumbing & Mechanical LLC",
  short: "DPM",
  tagline: "Built on Quality, Integrity, and Trust",

  // ---- Contact ------------------------------------------------------------
  // NAP must match the Google Business Profile character for character.
  phone: "(304) 989-0953",
  phoneHref: "+13049890953",
  email: "dpmplumbingllc@gmail.com", // switches to the domain address once it exists
  address: {
    street: "1027 Hidden Farms Road",
    city: "TODO", // TODO Jason gave street only — need city + zip for the NAP
    state: "WV",
    zip: "TODO",
  },

  // ---- Hours --------------------------------------------------------------
  hours: "Monday–Friday, 8:00am – 4:30pm",
  emergency:
    "After hours, weekends and holidays: call the office and we answer. After-hours rates apply, two-hour minimum.",

  // ---- Credentials --------------------------------------------------------
  masterLicense: "PL05971",
  liabilityLimit: "$1,000,000",
  bonded: "$100,000",
  carrier: "Erie Insurance", // internal reference; not published
  crewSize: "4",
  // Union affiliation IS published — stated as a credential alongside the
  // license number, never as a headline. Confirmed with Jason Sep 10, 2026.
  labor: "Union shop",
  certifications: [
    "Backflow certified",
    "Medical gas certified",
    "OSHA 10 / 30",
    "Prevailing wage / Davis-Bacon",
    "Drug testing program",
  ] as string[],

  // ---- Coverage -----------------------------------------------------------
  serviceArea: [
    "Hurricane",
    "Culloden",
    "Teays Valley",
    "Scott Depot",
    "Winfield",
    "St. Albans",
    "Nitro",
    "Poca",
    "Red House",
    "Eleanor",
    "South Charleston",
    "Charleston",
    "Kanawha City",
  ],
  counties: "Putnam and Kanawha counties",

  // ---- Proof --------------------------------------------------------------
  googleReviewCount: 26,
  googleReviewUrl: "TODO", // TODO pull the "write a review" / profile link from GBP
  // Individual reference contacts are NOT published. They live in the client file.
  projects: [
    {
      name: "Travelers Center",
      scope: "Full plumbing package, built for G&G.",
    },
    {
      name: "Charleston Surgical Hospital",
      scope:
        "Second-floor restroom build-out in an operating medical facility, worked around active patient care.",
    },
    {
      name: "Shumaker residence",
      scope: "Complete plumbing for RidgeLine.",
    },
  ] as { name: string; scope: string; year?: string }[],

  // ---- Commercial ---------------------------------------------------------
  commercialResponse: "Usually on site within the hour",
  commercialServices: [
    {
      title: "Service & repair",
      body:
        "Leaks, backups, failed water heaters and boilers. Call the office and you get a licensed plumber moving, not a message taken.",
    },
    {
      title: "New construction",
      body:
        "Underground through trim-out, coordinated to your schedule and inspected the first time.",
    },
    {
      title: "Tenant fit-out",
      body:
        "Restaurant, retail, medical and office build-outs. We work around the other trades instead of holding them up.",
    },
    {
      title: "Design-build",
      body:
        "Bring us in early and we will help you get the plumbing right before it is in the ground.",
    },
    {
      title: "Medical gas",
      body:
        "Certified medical gas installation and service. Very few shops in the valley are certified for this work.",
    },
    {
      title: "Backflow testing",
      body:
        "Certified testing, repair and annual certification, with the paperwork filed so you are not chasing it.",
    },
    {
      title: "Sewer & drain",
      body: "Cabling and jetting for lines that back up when the building is full.",
    },
    {
      title: "Water heaters & boilers",
      body: "Commercial repair and replacement, sized right for the building.",
    },
    {
      title: "Gas piping",
      body: "New runs, repairs and appliance connections by a licensed plumber.",
    },
    {
      title: "Preventive maintenance",
      body:
        "Scheduled service on the systems that shut a building down when they fail.",
    },
  ],

  // ---- Residential --------------------------------------------------------
  // Jason does NOT do well pumps or septic tanks. Keep them off the site.
  residentialTop3: ["Sewer lines", "Gas lines", "Water line repair & installation"],
  residentialServices: [
    {
      title: "Sewer lines",
      body: "Repair and full replacement, from a spot fix to the whole run.",
    },
    {
      title: "Gas lines",
      body: "New runs, repairs and appliance hookups by a licensed plumber.",
    },
    {
      title: "Water lines",
      body: "Repair and installation, inside the house or out to the meter.",
    },
    {
      title: "Water heaters",
      body: "Repair and replacement, tank and tankless.",
    },
    {
      title: "Drain cleaning",
      body: "Kitchen, bath, main line — cabled or jetted depending on what is in there.",
    },
    {
      title: "Leak detection & repair",
      body: "Found and fixed with the smallest hole we can get away with.",
    },
    {
      title: "Repipes",
      body: "Whole-house repiping when patching has stopped being worth it.",
    },
    {
      title: "Fixtures & remodels",
      body: "Sinks, tubs, toilets, and the rough-in behind a full bath or kitchen remodel.",
    },
    {
      title: "Sump pumps",
      body: "Installed and serviced so the basement stays dry.",
    },
    {
      title: "Water treatment",
      body: "Softeners and filtration for water that needs help.",
    },
  ],
  quotePolicy: "Free quotes",
  notOffered: ["Well pumps", "Septic tanks"],

  // ---- What actually separates them ---------------------------------------
  // Every one of these is something a typical one-truck shop cannot say.
  differentiators: [
    {
      title: "Certified for medical gas",
      body:
        "Very few plumbing shops in the valley carry it. We have built restrooms on the second floor of an operating surgical hospital, working around active patient care. If your building has an oxygen line, most plumbers cannot touch it.",
    },
    {
      title: "Cleared for the jobs that screen you",
      body:
        "OSHA 10 and 30, a drug testing program, prevailing-wage and Davis-Bacon experience, $1,000,000 general liability and $100,000 bonding. Certificate of insurance the same day you ask. This is the paperwork that decides whether you get on the site at all.",
    },
    {
      title: "Usually on site within the hour",
      body:
        "Not a four-hour window. When a line lets go in an occupied building, the number that matters is how fast somebody with a license is standing in front of it.",
    },
    {
      title: "Somebody answers the phone",
      body:
        "After hours, weekends and holidays, the call still comes to the office and we take it. After-hours rates apply with a two-hour minimum, and we will tell you that before we roll.",
    },
    {
      title: "Same plumbers on both sides",
      body:
        "There is no separate residential crew and no subcontractor. The people who run hospital and restaurant work are the ones who show up at your house.",
    },
    {
      title: "Free quotes, no pressure",
      body:
        "We will tell you what it takes and what it costs. If the answer is that you do not need us yet, that is the answer.",
    },
  ],

  // ---- Story --------------------------------------------------------------
  story: [
    "Dynamic Plumbing & Mechanical started the way most good shops do — with a plumber who was already doing the work.",
    "Years of running jobs for other companies: pricing the material, scheduling the crews, standing in front of the customer explaining how long it would take. At a certain point it stops making sense to do all of that under somebody else's name.",
    "So the shop opened, built around one idea — that the plumber who shows up should be the one accountable for the job. Four licensed plumbers. Certified for medical gas and backflow. Prevailing-wage work, hospital corridors, restaurant build-outs, and the house whose sewer line finally gave out on a Tuesday. Usually on site within the hour.",
    "Quality, integrity and trust are on the truck because they are the whole business. We are straightforward to deal with and we do not take advantage of people. In this trade that should not be worth advertising. It is.",
  ] as string[],
} as const;

export const addressLine = `${biz.address.street}, ${biz.address.city}, ${biz.address.state} ${biz.address.zip}`;
