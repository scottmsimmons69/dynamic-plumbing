/**
 * EVERY business fact lives here. Nothing hardcoded in the pages.
 * When the questionnaire comes back, edit this file only.
 *
 * TODO = not yet confirmed by the client. Search "TODO" before launch.
 * Anything still marked TODO must not go live.
 */

export const biz = {
  // ---- Identity -----------------------------------------------------------
  name: "Dynamic Plumbing & Mechanical",
  legalName: "Dynamic Plumbing & Mechanical LLC",
  short: "DPM",

  // ---- Contact ------------------------------------------------------------
  // NAP must match the Google Business Profile character for character.
  phone: "(304) 989-0953", // TODO confirm this is the main business line
  phoneHref: "+13049890953",
  email: "TODO@example.com", // TODO where do form submissions go?
  address: {
    street: "TODO",
    city: "Poca",
    state: "WV",
    zip: "TODO",
  },

  // ---- Hours --------------------------------------------------------------
  hours: "TODO", // e.g. "Mon–Fri 7:00am – 5:00pm"
  emergency: "TODO", // TODO is 24/7 emergency actually true? Do not claim it otherwise.

  // ---- Credentials — what commercial buyers screen on ---------------------
  yearsInBusiness: "TODO",
  masterLicense: "TODO", // WV master plumber license number
  liabilityLimit: "TODO", // e.g. "$2,000,000"
  bonded: "TODO",
  certifications: [] as string[], // backflow, medical gas, OSHA 30, Davis-Bacon...

  // ---- Coverage -----------------------------------------------------------
  serviceArea: [
    "Poca",
    "Charleston",
    "Nitro",
    "Dunbar",
    "Cross Lanes",
    "St. Albans",
    "South Charleston",
    "Institute",
    "Hurricane",
    "Winfield",
    "Teays Valley",
  ],
  counties: "Kanawha and Putnam counties",

  // ---- Commercial ---------------------------------------------------------
  commercialResponse: "TODO", // the thing property managers care about most
  commercialServices: [
    {
      title: "Service & repair",
      body:
        "Leaks, backups, failed water heaters and boilers. One call, and a licensed plumber is on site — not a dispatcher taking a message.",
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
      title: "Backflow testing",
      body:
        "Certified testing, repair and annual certification, with the paperwork filed so you are not chasing it.",
    },
    {
      title: "Grease interceptors",
      body:
        "Sizing, installation and service that passes health-department inspection.",
    },
    {
      title: "Preventive maintenance",
      body:
        "Scheduled service on the systems that shut a building down when they fail.",
    },
  ],

  // ---- Residential --------------------------------------------------------
  residentialServices: [
    {
      title: "Water heaters",
      body: "Repair and replacement, tank and tankless. Usually same day.",
    },
    {
      title: "Drain cleaning",
      body: "Kitchen, bath, main line. Cabled or jetted depending on what's in there.",
    },
    {
      title: "Leak detection & repair",
      body: "Found and fixed with the smallest hole we can get away with.",
    },
    {
      title: "Sewer lines",
      body: "Camera inspection, spot repair, full replacement.",
    },
    {
      title: "Fixtures & remodels",
      body: "Sinks, tubs, toilets, and the rough-in behind a full bath remodel.",
    },
    {
      title: "Gas lines",
      body: "New runs, repairs, and appliance hookups by a licensed plumber.",
    },
  ],

  // ---- Proof --------------------------------------------------------------
  // TODO real projects from the questionnaire. Nothing invented ships.
  projects: [] as { name: string; scope: string; year?: string }[],
  // TODO real reviews only. Never placeholder testimonials on a live site.
  reviews: [] as { quote: string; author: string }[],
} as const;

export const addressLine = `${biz.address.street}, ${biz.address.city}, ${biz.address.state} ${biz.address.zip}`;
