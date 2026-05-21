export const site = {
  name: "Northstone",
  tagline: "Plans built on solid ground.",
  description:
    "Permit-ready residential plans with dependable guidance from concept to approval.",
  phone: "(209) 555-0148",
  email: "studio@northstone.build",
  address: ["1140 Granite Court, Suite 3", "Mariposa, California 95338"],
  hours: "Mon–Fri · 8:00–5:00 PT",
  established: 2007,
  coordinates: "37.4849° N, 119.9663° W",
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export type IconKey =
  | "plans"
  | "drafting"
  | "permit"
  | "remodel"
  | "approval"
  | "discover"
  | "draft"
  | "approve"
  | "build"
  | "shield"
  | "chart";

export type Service = {
  code: string;
  title: string;
  icon: IconKey;
  short: string;
  detail: string;
  scope: string[];
};

export const services: Service[] = [
  {
    code: "S-01",
    title: "Residential Plans",
    icon: "plans",
    short:
      "Permit-ready blueprints drawn to your lot, your local code, and the way you actually live.",
    detail:
      "A complete drawing set — site plan, floor plans, elevations, and sections — coordinated so a plan reviewer has nothing to question. Every sheet is dimensioned, labeled, and built around the constraints of your parcel.",
    scope: [
      "Site & floor plans",
      "Exterior elevations",
      "Building sections",
      "Code-compliance review",
    ],
  },
  {
    code: "S-02",
    title: "Drafting",
    icon: "drafting",
    short:
      "Precise technical drawings — plans, elevations, sections — built to survive plan review.",
    detail:
      "Clean, legible drafting that turns a rough sketch or an architect's intent into a buildable document. We draw to scale, annotate to standard, and keep every sheet internally consistent.",
    scope: [
      "Construction-ready linework",
      "Dimensioning & annotation",
      "Detail callouts",
      "Sheet-set coordination",
    ],
  },
  {
    code: "S-03",
    title: "Permit Assistance",
    icon: "permit",
    short:
      "We assemble, submit, and shepherd your application through the jurisdiction.",
    detail:
      "Permitting is where most projects stall. We prepare the full submittal package, file with the building department, and track the application so it never sits quietly in a queue.",
    scope: [
      "Submittal package prep",
      "Jurisdiction filing",
      "Application tracking",
      "Fee & timeline guidance",
    ],
  },
  {
    code: "S-04",
    title: "Remodel & Additions",
    icon: "remodel",
    short:
      "Plans that tie new work cleanly into existing structure — a bump-out to a second story.",
    detail:
      "Additions live or die on how honestly they account for what's already there. We document the existing structure, then draw the new work so it connects without surprises in the field.",
    scope: [
      "Existing-conditions survey",
      "Addition & remodel plans",
      "Structural coordination",
      "Phasing notes",
    ],
  },
  {
    code: "S-05",
    title: "Approval Support",
    icon: "approval",
    short:
      "We answer the reviewer's corrections so your project keeps moving toward a permit.",
    detail:
      "When a plan check comes back with comments, we respond directly — revising drawings, clarifying details, and resubmitting until the building department signs off.",
    scope: [
      "Plan-check responses",
      "Drawing revisions",
      "Reviewer coordination",
      "Resubmittal management",
    ],
  },
];

export type FinancialService = {
  code: string;
  title: string;
  icon: IconKey;
  short: string;
};

export const financialServices: FinancialService[] = [
  {
    code: "F-01",
    title: "Insurance Guidance",
    icon: "shield",
    short:
      "Life and health coverage reviewed alongside the long-term plans for your property and family.",
  },
  {
    code: "F-02",
    title: "Investment Guidance",
    icon: "chart",
    short:
      "Measured, plain-spoken direction for putting the equity in your home and projects to work.",
  },
];

export type ProcessStep = {
  code: string;
  title: string;
  icon: IconKey;
  body: string;
};

export const process: ProcessStep[] = [
  {
    code: "01",
    title: "Discover",
    icon: "discover",
    body: "We review your goals, your lot, and the requirements of your jurisdiction.",
  },
  {
    code: "02",
    title: "Draft",
    icon: "draft",
    body: "Your plans are drawn, dimensioned, and detailed for review.",
  },
  {
    code: "03",
    title: "Approve",
    icon: "approve",
    body: "We submit, track, and resolve corrections until the permit is issued.",
  },
  {
    code: "04",
    title: "Build",
    icon: "build",
    body: "You break ground with a complete, approved set in hand.",
  },
];

export const stats = [
  { value: "430+", label: "Permits secured" },
  { value: "14", label: "Jurisdictions" },
  { value: "3 wk", label: "Median approval" },
  { value: "18 yrs", label: "Drafting practice" },
];

export type Project = {
  code: string;
  title: string;
  type: string;
  scope: string;
  area: string;
  jurisdiction: string;
  year: string;
  status: "Permit Approved" | "In Review";
  plan: 1 | 2 | 3 | 4 | 5 | 6;
  note: string;
};

export const projects: Project[] = [
  {
    code: "A-01",
    title: "Cedar Ridge Residence",
    type: "New Construction",
    scope: "3 bed · 2.5 bath",
    area: "2,440 sq ft",
    jurisdiction: "Mariposa County",
    year: "2024",
    status: "Permit Approved",
    plan: 1,
    note: "Single-story residence sited along a sloped granite shelf, planned around the existing grade.",
  },
  {
    code: "A-02",
    title: "Half Dome View Addition",
    type: "Second-Story Addition",
    scope: "+680 sq ft",
    area: "Existing + new",
    jurisdiction: "Tuolumne County",
    year: "2024",
    status: "Permit Approved",
    plan: 2,
    note: "A second-story addition tied into an existing 1970s footprint without relocating the original stair.",
  },
  {
    code: "A-03",
    title: "Granite Flat ADU",
    type: "Detached ADU",
    scope: "1 bed · 1 bath",
    area: "720 sq ft",
    jurisdiction: "Madera County",
    year: "2023",
    status: "Permit Approved",
    plan: 3,
    note: "Compact accessory dwelling drawn to the state ADU standard for a fast over-the-counter review.",
  },
  {
    code: "A-04",
    title: "El Portal Remodel",
    type: "Kitchen & Living Remodel",
    scope: "Interior reconfiguration",
    area: "1,100 sq ft",
    jurisdiction: "Mariposa County",
    year: "2023",
    status: "Permit Approved",
    plan: 4,
    note: "Load-bearing wall removed to open the kitchen to the living room, with new structure detailed.",
  },
  {
    code: "A-05",
    title: "Sentinel Dome Cabin",
    type: "New Construction",
    scope: "2 bed · 1 bath",
    area: "1,180 sq ft",
    jurisdiction: "Tuolumne County",
    year: "2025",
    status: "In Review",
    plan: 5,
    note: "A small cabin on a forested parcel, planned for minimal site disturbance and a tight envelope.",
  },
  {
    code: "A-06",
    title: "Bridalveil Garage Conversion",
    type: "ADU Conversion",
    scope: "Garage to dwelling",
    area: "480 sq ft",
    jurisdiction: "Madera County",
    year: "2024",
    status: "Permit Approved",
    plan: 6,
    note: "An attached garage converted to a permitted studio dwelling, reusing the existing slab and walls.",
  },
];

export const values = [
  {
    code: "V-01",
    title: "Precision",
    body: "Every sheet is drawn to scale and checked against code before it leaves the studio. A clean set is the fastest path to a permit.",
  },
  {
    code: "V-02",
    title: "Permanence",
    body: "We plan for the building that outlasts the trend — proportioned, grounded, and built to be lived in for decades.",
  },
  {
    code: "V-03",
    title: "Plain Communication",
    body: "Permitting is confusing by default. We translate jurisdiction language into clear next steps and tell you exactly where things stand.",
  },
  {
    code: "V-04",
    title: "Dependability",
    body: "We track every application ourselves. Nothing sits forgotten in a building-department queue on our watch.",
  },
];

export const trustPoints = [
  {
    title: "Permit experience",
    body: "Eighteen years of submittals across fourteen California jurisdictions — we know how each building department reads a set.",
  },
  {
    title: "One point of contact",
    body: "You work with the person drawing your plans. No handoffs, no account managers, no telephone game.",
  },
  {
    title: "A calm process",
    body: "Discover, draft, approve, build. You always know which stage you're in and what happens next.",
  },
];
