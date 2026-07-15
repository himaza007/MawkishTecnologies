export const siteConfig = {
  name: "Mawkish Technologies",
  tagline: "Technology that Creates Real Business Outcomes",
  description:
    "Mawkish Technologies is a business transformation partner helping organizations modernize operations through SAP, Salesforce, Odoo, AI, and enterprise technology.",
  primaryCta: { label: "Schedule a Consultation", href: "/contact" },
  secondaryCtas: [
    { label: "Request a Demo", href: "/contact?intent=demo" },
    { label: "Request a Proposal", href: "/contact?intent=proposal" },
  ],
};

export const navLinks = [
  { label: "About Us", href: "/about" },
  {
    label: "Our Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "SAP Solutions", href: "/services/sap-solutions" },
      { label: "Salesforce Solutions", href: "/services/salesforce-solutions" },
      { label: "Odoo Implementation", href: "/services/odoo-implementation" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Insights & Perspectives", href: "/insights" },
];

export const stats = [
  { value: "3", label: "Enterprise Platforms", detail: "SAP, Salesforce & Odoo" },
  { value: "8", label: "Industries Served" },
  { value: "7", label: "Active & Target Markets" },
  { value: "6", label: "Core Operating Principles" },
];

export const methodology = [
  {
    step: "01",
    title: "Discover",
    description:
      "We start by understanding business objectives, current challenges, and operational processes — before any technology is recommended.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We design practical, platform-agnostic solutions aligned to how the business actually operates and where it's headed.",
  },
  {
    step: "03",
    title: "Implement",
    description:
      "We execute transformation initiatives with disciplined project delivery, keeping outcomes — not just deployment — as the measure of success.",
  },
  {
    step: "04",
    title: "Optimize",
    description:
      "We stay engaged after go-live to improve visibility, refine processes, and compound the value of the investment over time.",
  },
];

export const coreValues = [
  {
    title: "Ownership & Accountability",
    description: "We take responsibility for outcomes, not just deliverables.",
  },
  {
    title: "Execution Excellence",
    description: "We focus on disciplined execution and measurable results.",
  },
  {
    title: "Business-First Thinking",
    description: "Technology decisions should support business goals.",
  },
  {
    title: "Innovation with Purpose",
    description: "We embrace innovation when it creates tangible value.",
  },
  {
    title: "Long-Term Partnerships",
    description: "We build relationships, not transactions.",
  },
  {
    title: "Continuous Evolution",
    description: "We continuously learn, adapt, and improve.",
  },
];

export const painPoints = [
  "Multiple disconnected systems",
  "Heavy reliance on spreadsheets",
  "Lack of operational visibility",
  "Manual processes slowing growth",
  "Poor reporting and decision-making",
  "Difficulty scaling existing systems",
  "Limited integration between departments",
];

export type Service = {
  slug: string;
  name: string;
  category: "core" | "future";
  summary: string;
  description: string;
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "sap-solutions",
    name: "SAP Solutions",
    category: "core",
    summary: "Enterprise-grade operational excellence for organizations that need scale and control.",
    description:
      "SAP provides the operational backbone for organizations managing complex processes across finance, supply chain, manufacturing, and operations. We help clients plan, implement, and optimize SAP so that the platform reflects how the business actually runs — not the other way around.",
    outcomes: [
      "Unified financial and operational reporting",
      "Standardized processes across business units",
      "A platform built to scale with the organization",
    ],
  },
  {
    slug: "salesforce-solutions",
    name: "Salesforce Solutions",
    category: "core",
    summary: "Customer-centric growth and engagement built on the world's leading CRM platform.",
    description:
      "Salesforce helps organizations put the customer at the center of every decision. We design and implement Salesforce solutions that improve visibility into the customer journey, align sales and service teams, and turn customer data into growth.",
    outcomes: [
      "A single view of the customer across teams",
      "Improved sales pipeline visibility and forecasting",
      "Faster, more consistent customer service",
    ],
  },
  {
    slug: "odoo-implementation",
    name: "Odoo Implementation",
    category: "core",
    summary: "An integrated, flexible platform built for growing businesses.",
    description:
      "For organizations that need enterprise capability without enterprise complexity, Odoo offers an integrated suite that grows with the business. We implement Odoo to replace disconnected spreadsheets and point solutions with one connected system.",
    outcomes: [
      "Consolidated operations on a single platform",
      "Lower total cost of ownership than legacy ERP",
      "A foundation that scales as the business grows",
    ],
  },
  {
    slug: "ai-powered-business-applications",
    name: "AI-Powered Business Applications",
    category: "future",
    summary: "Practical AI embedded into everyday business processes.",
    description:
      "We help organizations move beyond AI experimentation into applications that deliver measurable value — embedded directly into the enterprise platforms teams already use.",
    outcomes: [
      "Faster, more informed decision-making",
      "AI embedded into existing workflows, not bolted on",
      "Measurable productivity gains",
    ],
  },
  {
    slug: "intelligent-automation",
    name: "Intelligent Automation",
    category: "future",
    summary: "Removing manual, repetitive work from core business processes.",
    description:
      "Manual processes slow growth and introduce risk. We identify high-impact automation opportunities across finance, operations, and customer service, and implement them in a way that's sustainable and well governed.",
    outcomes: [
      "Reduced manual, repetitive workload",
      "Fewer errors in high-volume processes",
      "Faster process cycle times",
    ],
  },
  {
    slug: "data-analytics",
    name: "Data & Analytics",
    category: "future",
    summary: "Turning operational data into decision-ready insight.",
    description:
      "Poor reporting and limited visibility are among the most common barriers to growth. We help organizations structure, connect, and visualize their data so leadership can make decisions with confidence.",
    outcomes: [
      "Consolidated, reliable reporting",
      "Real-time operational visibility",
      "Data structured to support future AI initiatives",
    ],
  },
  {
    slug: "managed-services",
    name: "Managed Services",
    category: "future",
    summary: "Ongoing support so platforms keep delivering value after go-live.",
    description:
      "Transformation doesn't end at go-live. Our managed services keep enterprise platforms running smoothly, secure, and aligned to evolving business needs.",
    outcomes: [
      "Predictable, responsive platform support",
      "Continuous improvement, not just maintenance",
      "Lower risk of platform drift over time",
    ],
  },
  {
    slug: "cloud-transformation",
    name: "Cloud Transformation",
    category: "future",
    summary: "Modernizing infrastructure to support the pace of the business.",
    description:
      "We help organizations move core systems to the cloud in a way that improves resilience, performance, and cost predictability — without disrupting day-to-day operations.",
    outcomes: [
      "Improved system resilience and uptime",
      "More predictable infrastructure costs",
      "A foundation ready for future scale",
    ],
  },
  {
    slug: "enterprise-integrations",
    name: "Enterprise Integrations",
    category: "future",
    summary: "Connecting the systems that were never designed to talk to each other.",
    description:
      "Disconnected systems are one of the most common causes of lost visibility and duplicated effort. We design integrations across ERP, CRM, and third-party platforms so information flows the way the business needs it to.",
    outcomes: [
      "Elimination of duplicate data entry",
      "Consistent information across departments",
      "Systems that work together instead of in isolation",
    ],
  },
];

export type Industry = {
  slug: string;
  name: string;
  description: string;
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    description:
      "Connecting shop-floor operations with planning, finance, and supply chain for full production visibility.",
  },
  {
    slug: "distribution",
    name: "Distribution",
    description:
      "Streamlining inventory, order management, and logistics across multi-location distribution networks.",
  },
  {
    slug: "consumer-goods",
    name: "Consumer Goods",
    description:
      "Aligning demand planning, trade promotions, and route-to-market execution with real-time data.",
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    description:
      "Modernizing operations and customer engagement while meeting the sector's compliance demands.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    description:
      "Improving operational visibility and patient-related workflows across complex care organizations.",
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    description:
      "Unifying guest experience, operations, and back-office finance across properties and brands.",
  },
  {
    slug: "logistics-supply-chain",
    name: "Logistics & Supply Chain",
    description:
      "Improving end-to-end visibility from procurement through fulfillment across complex supply networks.",
  },
  {
    slug: "diversified-conglomerates",
    name: "Diversified Conglomerates",
    description:
      "Standardizing processes and reporting across multiple business units and subsidiaries.",
  },
];

export type Region = {
  region: string;
  activeMarket: boolean;
  targetMarket: boolean;
  presence: string;
  focus: string;
};

export const regions: Region[] = [
  { region: "Sri Lanka", activeMarket: true, targetMarket: true, presence: "Headquarters", focus: "SAP, Salesforce, Odoo, Digital Transformation" },
  { region: "India", activeMarket: true, targetMarket: true, presence: "Delivery & Partner Ecosystem", focus: "SAP & Enterprise Applications" },
  { region: "UAE", activeMarket: true, targetMarket: true, presence: "Partner Network", focus: "Digital Transformation & CRM" },
  { region: "KSA", activeMarket: false, targetMarket: true, presence: "Expansion Market", focus: "SAP, Cloud & Transformation Projects" },
  { region: "Oman", activeMarket: false, targetMarket: true, presence: "Expansion Market", focus: "ERP & Business Process Transformation" },
  { region: "Switzerland", activeMarket: false, targetMarket: true, presence: "Strategic Growth Market", focus: "Consulting & Enterprise Technology" },
  { region: "USA", activeMarket: true, targetMarket: true, presence: "Business Development Activities", focus: "Technology Consulting & Strategic Partnerships" },
];

export const clients = [
  { name: "CIC Holdings", logo: "/images/clients/cic-holdings.png" },
  { name: "Eshwaran Brothers", logo: "/images/clients/eshwaran-brothers.png" },
  { name: "Link Natural Products", logo: "/images/clients/link-naturals.png" },
  { name: "Lanka Tiles", logo: "/images/clients/lanka-tiles.png" },
  { name: "Ceylon Beverage Can", logo: "/images/clients/ceylon-beverage-can.png" },
  { name: "Royal Ceramics", logo: "/images/clients/royal-ceramics.png" },
  { name: "Suwanda Industries", logo: "/images/clients/suwanda-industries.png" },
  { name: "Capital Maharajah", logo: "/images/clients/capital-maharajah.png" },
];

export const partners = [
  { name: "Samishti Infotec", relationship: "SAP Partner" },
  { name: "Levarus", relationship: "Salesforce Partner" },
];

export const leadership = [
  {
    name: "Michael Gunawardena",
    title: "Chief Executive Officer",
    bio: [
      "Michael Gunawardena is the Chief Executive Officer of Mawkish Technologies, bringing over 13 years of experience across sales, marketing, business operations, client management, and healthcare IT services.",
      "Throughout his career, Michael has worked closely with organizations to drive growth, improve operational performance, strengthen strategic client relationships, and lead high-performing teams. His diverse background has provided him with a deep understanding of business operations, the challenges organizations face as they scale, and the importance of aligning technology investments with measurable business outcomes.",
      "Having led both customer-facing and operational functions, Michael has developed a practical approach to business transformation — one that focuses not only on technology adoption, but on the tangible value and outcomes it delivers.",
      "As CEO of Mawkish Technologies, Michael is responsible for driving the company's growth strategy, expanding strategic partnerships, and helping organizations accelerate their digital transformation journeys through solutions spanning SAP, Salesforce, Odoo, Artificial Intelligence, and other enterprise technology platforms.",
    ],
  },
];

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  content: string[];
};

export const insights: Insight[] = [
  {
    slug: "why-technology-projects-fail-to-deliver-value",
    title: "Why Technology Projects Fail to Deliver Value",
    excerpt:
      "Organizations invest heavily in ERP, CRM, and cloud initiatives — yet many struggle to realize the expected return. Here's why, and what a business-first approach changes.",
    category: "Business Transformation",
    readTime: "5 min read",
    content: [
      "Most technology initiatives don't fail because of the software. They fail because of poor alignment between the technology and the business objectives it was meant to serve.",
      "A platform can be implemented on time and on budget and still fail to move the metrics that matter — because the project was scoped around deploying software, not around the business outcome it was supposed to enable.",
      "A business-first approach starts differently. Before any platform is selected, the questions are: What is the operational challenge? What does success look like in business terms? Only once those are answered does the technology conversation begin.",
      "This is the same discipline behind our Discover → Design → Implement → Optimize methodology — every engagement starts with the business problem, not the product.",
    ],
  },
  {
    slug: "choosing-between-sap-salesforce-and-odoo",
    title: "Choosing Between SAP, Salesforce, and Odoo",
    excerpt:
      "SAP, Salesforce, and Odoo each solve a different stage of growth. Here's a practical framework for deciding which platform — or combination — fits your organization.",
    category: "Enterprise Platforms",
    readTime: "6 min read",
    content: [
      "SAP, Salesforce, and Odoo are often discussed as competitors, but in practice they solve different problems. SAP provides enterprise-grade operational excellence. Salesforce enables customer-centric growth and engagement. Odoo offers an integrated, flexible platform for growing businesses.",
      "The right starting point depends less on company size and more on where the organization's biggest operational gap sits today — in finance and operations, in customer engagement, or in the absence of any connected system at all.",
      "We take a platform-agnostic approach: understand the business challenge first, then recommend the technology that best supports the client's long-term objectives — including, in many cases, a combination of platforms working together.",
    ],
  },
  {
    slug: "signs-your-organization-has-outgrown-spreadsheets",
    title: "Signs Your Organization Has Outgrown Spreadsheets",
    excerpt:
      "Disconnected systems and manual processes are common early-growth workarounds. Here's how to recognize when they've started working against you.",
    category: "Operational Visibility",
    readTime: "4 min read",
    content: [
      "Spreadsheets and point solutions are a reasonable way to run a business in its early stages. The trouble starts when they become permanent infrastructure.",
      "The common warning signs: multiple disconnected systems, heavy reliance on manual reporting, limited integration between departments, and difficulty getting a straight answer to a simple operational question.",
      "None of these problems are solved by simply buying software. They're solved by first mapping how information actually needs to flow across the business, and then implementing a platform that reflects that — which is where a structured discovery process pays for itself.",
    ],
  },
];
