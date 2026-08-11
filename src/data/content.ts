import type {
  Service,
  Project,
  Testimonial,
  FAQ,
  Stat,
  Industry,
  BlogPost,
  ClientLogo,
} from "@/types";

export const services: Service[] = [
  {
    slug: "electrical",
    title: "Electrical Services",
    summary:
      "Design, installation, testing and maintenance of electrical systems for commercial & industrial clients.",
    description:
      "Kenya Generators & Compressors Solutions provides electrical services for commercial and industrial clients throughout the country. Our services include design, installation, testing and maintenance of complete electrical systems.",
    icon: "Zap",
    items: [
      "Cable supply, installation & termination",
      "Complete electrical system installation",
      "Electrical machines installation",
      "Power distribution boards installation",
      "Testing & commissioning",
    ],
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "maintenance",
    title: "Maintenance & Repair",
    summary:
      "Emergency, planned and preventive maintenance for generators, compressors & power panels.",
    description:
      "Kenya Generators & Compressors Solutions Ltd has been providing emergency, planned and preventive maintenance and repair services for power generators, air compressors and electrical power panels. Our maintenance includes mechanical engine overhaul and full servicing.",
    icon: "Wrench",
    items: [
      "Mechanical engines overhaul",
      "Generators service",
      "Air compressors service",
      "Electrical power panels service",
      "Emergency & preventive maintenance",
    ],
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "installation",
    title: "Supply & Installation",
    summary:
      "Turnkey supply and professional installation of generators & compressors.",
    description:
      "From technical specification and site assessment to delivery, installation and commissioning, we provide complete turnkey supply and installation for generators and air compressors — ensuring safety, durability and optimal performance.",
    icon: "Settings",
    items: [
      "Generators installation",
      "Air compressors installation",
      "System integration",
      "Training & technical support",
      "Commissioning & handover",
    ],
    image: "/images/installation.jpeg",
  },
];

export const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Years of Experience", icon: "CalendarClock" },
  { value: 100, suffix: "+", label: "Projects Completed", icon: "CheckCircle2" },
  { value: 50, suffix: "+", label: "Trusted Clients", icon: "Users" },
  { value: 47, suffix: "", label: "Counties Served", icon: "MapPin" },
];

export const industries: Industry[] = [
  { name: "Manufacturing", icon: "Factory" },
  { name: "Construction", icon: "HardHat" },
  { name: "Hospitals & Healthcare", icon: "HeartPulse" },
  { name: "Hospitality & Hotels", icon: "Hotel" },
  { name: "Banking & Finance", icon: "Landmark" },
  { name: "Telecommunications", icon: "RadioTower" },
  { name: "Agriculture", icon: "Wheat" },
  { name: "Water & Utilities", icon: "Droplets" },
  { name: "Real Estate", icon: "Building2" },
  { name: "Education", icon: "GraduationCap" },
  { name: "Logistics & Transport", icon: "Truck" },
  { name: "Retail & Malls", icon: "ShoppingBag" },
];

export const whyChooseUs = [
  {
    icon: "ShieldCheck",
    title: "Quality Products & Services",
    description:
      "We supply only trusted, genuine equipment and deliver quality that nobody else offers.",
  },
  {
    icon: "Wrench",
    title: "Expert Technicians",
    description:
      "A skilled technical team studies specifications and performs precise preventive measures.",
  },
  {
    icon: "Headset",
    title: "Reliable After-Sales Support",
    description:
      "Emergency, planned and preventive maintenance keeps your equipment running.",
  },
  {
    icon: "MapPinned",
    title: "Nationwide Coverage",
    description:
      "We serve clients countrywide with fast delivery and on-site service.",
  },
  {
    icon: "BadgeCheck",
    title: "Genuine Spare Parts",
    description:
      "Genuine parts for generators and compressors at competitive prices.",
  },
  {
    icon: "Handshake",
    title: "Total Solutions",
    description:
      "We go the extra mile — a system isn't a solution until it meets every client need.",
  },
];

export const projects: Project[] = [
  {
    slug: "industrial-standby-power",
    title: "500 kVA Industrial Standby Power",
    client: "Leading Manufacturer",
    industry: "Manufacturing",
    location: "Industrial Area, Nairobi",
    year: "2024",
    summary:
      "Supply, installation and commissioning of a soundproof standby generator with automatic transfer switch for uninterrupted production.",
    scope: [
      "Site assessment & load analysis",
      "500 kVA generator supply",
      "ATS panel installation",
      "Testing & commissioning",
    ],
    image: "/images/power.png",
  },
  {
    slug: "hospital-backup-power",
    title: "Hospital Critical Backup Power",
    client: "Regional Hospital",
    industry: "Healthcare",
    location: "Nairobi",
    year: "2024",
    summary:
      "Redundant generator installation ensuring critical care units never lose power, with preventive maintenance contract.",
    scope: [
      "Redundant generator setup",
      "Synchronisation panel",
      "Preventive maintenance plan",
      "24/7 emergency support",
    ],
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "workshop-air-compressor",
    title: "Industrial Air Compressor Plant",
    client: "Automotive Workshop Group",
    industry: "Automotive",
    location: "Mombasa Road, Nairobi",
    year: "2023",
    summary:
      "Complete belt-driven compressor installation with air distribution piping across a large service workshop.",
    scope: [
      "Compressor supply & install",
      "Air distribution piping",
      "Pressure regulation",
      "Operator training",
    ],
    image: "/images/compressor.jpeg",
  },
  {
    slug: "hotel-power-solution",
    title: "Hotel Power Continuity Solution",
    client: "Hospitality Group",
    industry: "Hospitality",
    location: "Nairobi",
    year: "2023",
    summary:
      "Low-noise canopy generator supplying seamless standby power to a busy hotel, with electrical distribution upgrade.",
    scope: [
      "Low-noise generator",
      "Distribution board upgrade",
      "Cable installation",
      "Commissioning",
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "telecom-site-power",
    title: "Telecom Site Power Deployment",
    client: "Telecommunications Provider",
    industry: "Telecommunications",
    location: "Multiple Counties",
    year: "2022",
    summary:
      "Rollout of prime-power generators across remote telecom sites with remote monitoring and scheduled servicing.",
    scope: [
      "Prime-power generators",
      "Remote monitoring",
      "Fuel management",
      "Scheduled servicing",
    ],
    image: "/images/genset.jpeg",
  },
  {
    slug: "water-pumping-station",
    title: "Water Pumping Station Backup",
    client: "County Water Utility",
    industry: "Water & Utilities",
    location: "Central Kenya",
    year: "2022",
    summary:
      "Standby generator and electrical panel installation ensuring continuous water supply during grid outages.",
    scope: [
      "Standby generator",
      "Motor control panel",
      "Cable & termination",
      "Testing & handover",
    ],
    image:
      "https://images.unsplash.com/photo-1509390144018-eeaf65052242?auto=format&fit=crop&w=1200&q=80",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "KGCS supplied and installed our standby generator on time and within budget. Their technicians are professional and the after-sales support is excellent.",
    name: "Operations Manager",
    role: "Operations Manager",
    company: "Manufacturing Company",
    rating: 5,
  },
  {
    quote:
      "We rely on KGCS for our preventive maintenance. Our generators have never let us down thanks to their planned service schedule.",
    name: "Facilities Lead",
    role: "Facilities Lead",
    company: "Regional Hospital",
    rating: 5,
  },
  {
    quote:
      "From the site survey to commissioning, the team was knowledgeable and responsive. Genuine spare parts always in stock.",
    name: "Procurement Officer",
    role: "Procurement Officer",
    company: "Hospitality Group",
    rating: 5,
  },
  {
    quote:
      "Their air compressor installation transformed our workshop efficiency. Highly recommend KGCS for industrial air solutions.",
    name: "Workshop Manager",
    role: "Workshop Manager",
    company: "Automotive Group",
    rating: 5,
  },
];

export const faqs: FAQ[] = [
  {
    question: "What size generator do I need for my business?",
    answer:
      "The right size depends on your total load and the equipment you need to run. Our technicians perform a load analysis at your site to recommend the correct kVA rating — from small 8 kVA sets to large 2000 kVA industrial units.",
  },
  {
    question: "Do you offer installation and commissioning?",
    answer:
      "Yes. We provide complete turnkey supply, installation, testing and commissioning for both generators and air compressors, including electrical distribution and automatic transfer switches.",
  },
  {
    question: "Which generator and compressor brands do you supply?",
    answer:
      "For generators we supply Perkins, Cummins and Lovol. For air compressors we supply Ingersoll Rand, Atlas Copco and Chicago Pneumatic, among others.",
  },
  {
    question: "Do you provide maintenance contracts?",
    answer:
      "Absolutely. We offer emergency, planned and preventive maintenance contracts covering generators, air compressors and electrical power panels to maximise uptime and equipment life.",
  },
  {
    question: "Do you sell genuine spare parts?",
    answer:
      "Yes. We stock genuine spare parts for generators and compressors — filters, alternators, AVRs, belts, control panels and more — delivered countrywide at competitive prices.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We are based in Nairobi and serve clients across Kenya, offering nationwide delivery, installation and on-site service.",
  },
];

export const clientLogos: ClientLogo[] = [
  { name: "KenGen", abbr: "KenGen" },
  { name: "Kenya Power", abbr: "KP" },
  { name: "Equity Bank", abbr: "Equity" },
  { name: "Nairobi Water", abbr: "NW" },
  { name: "Bolloré Transport & Logistics", abbr: "Bolloré" },
  { name: "Safaricom", abbr: "Safaricom" },
  { name: "Bidco Africa", abbr: "Bidco" },
  { name: "Davis & Shirtliff", abbr: "D&S" },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-the-right-diesel-generator",
    title: "How to Choose the Right Diesel Generator for Your Business",
    excerpt:
      "Sizing, fuel efficiency, noise and standby vs prime power — a practical guide to selecting the perfect generator.",
    content: [
      "Choosing the right diesel generator starts with understanding your load. List every appliance and machine you need to power, note their starting and running wattage, and add a safety margin of around 20–25% for future growth.",
      "Next, decide between standby and prime power. Standby generators kick in during outages, while prime-power sets are built to run continuously. This choice affects the engine rating and warranty.",
      "Fuel efficiency and noise matter too. Modern Perkins and Cummins engines offer excellent fuel economy, and soundproof canopies keep noise low — essential for hospitals, hotels and offices.",
      "Finally, factor in installation, automatic transfer switches and a preventive maintenance plan. Our team performs a full site load analysis to recommend the ideal unit for your needs.",
    ],
    category: "Guides",
    author: "KGCS Technical Team",
    date: "2025-01-15",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "generator-preventive-maintenance-checklist",
    title: "Generator Preventive Maintenance Checklist",
    excerpt:
      "Keep your generator reliable with this essential preventive maintenance routine.",
    content: [
      "Preventive maintenance is the single best way to guarantee your generator starts when you need it. A neglected set is the most common cause of outage failures.",
      "Weekly: inspect for leaks, check coolant and oil levels, and run a no-load test. Monthly: test under load, inspect the battery and clean air filters.",
      "Quarterly and annually: change oil and filters, inspect the alternator and control panel, test the automatic transfer switch, and overhaul as required.",
      "A maintenance contract with KGCS takes this off your plate — our technicians follow a documented schedule and keep genuine spare parts on hand.",
    ],
    category: "Maintenance",
    author: "KGCS Technical Team",
    date: "2025-02-02",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "electric-vs-diesel-air-compressors",
    title: "Electric vs Diesel Air Compressors: Which Is Right for You?",
    excerpt:
      "Understand the trade-offs between electric and diesel-driven compressors for your application.",
    content: [
      "Air compressors come in electric and diesel-driven variants, each suited to different environments. Electric compressors are ideal where mains power is reliable and indoor operation is required.",
      "Diesel-driven compressors shine on remote sites and construction projects where grid power is unavailable, offering mobility and independence.",
      "Consider duty cycle, air demand (CFM), pressure (bar) and ambient conditions. Ingersoll Rand, Atlas Copco and Chicago Pneumatic all offer strong options.",
      "Our team helps you match the right compressor to your workflow and provides full installation, piping and after-sales support.",
    ],
    category: "Guides",
    author: "KGCS Technical Team",
    date: "2025-02-20",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80",
  },
];

export const galleryImages = [
  {
    src: "/images/industrial_generator.png",
    alt: "Diesel generator installation",
    category: "Generators",
  },
  {
    src: "/images/compressor.jpeg",
    alt: "Air compressor unit",
    category: "Compressors",
  },
  {
    src: "/images/installation.jpeg",
    alt: "Electrical panel work",
    category: "Electrical",
  },
  {
    src: "/images/power.png",
    alt: "Industrial machinery",
    category: "Installation",
  },
  {
    src: "/images/spareparts.png",
    alt: "Spare parts inventory",
    category: "Spare Parts",
  },
  {
    src: "/images/genset.jpeg",
    alt: "Generator control panel",
    category: "Generators",
  },
  {
    src: "/images/about_hero.png",
    alt: "Technician at work",
    category: "Maintenance",
  },
  {
    src: "/images/Ingnesool_Rand_compressor.png",
    alt: "Workshop maintenance",
    category: "Maintenance",
  },
];

export const beforeAfter = [
  {
    title: "Generator Overhaul",
    before:
      "https://images.unsplash.com/photo-1580983218765-f663bec07b37?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
    description:
      "Complete mechanical engine overhaul restoring a failing generator to full reliable output.",
  },
  {
    title: "Electrical Panel Upgrade",
    before:
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80",
    description:
      "Old distribution board replaced with a safe, modern power distribution panel.",
  },
];

export const companyValues = [
  {
    icon: "Target",
    title: "Our Mission",
    description:
      "To offer quality total solutions in power generators, air compressors and technical services that nobody else offers — meeting every client need.",
  },
  {
    icon: "Eye",
    title: "Our Vision",
    description:
      "To be the leading technical services company across Kenyan industries, spurring growth through reliable power solutions.",
  },
  {
    icon: "Gem",
    title: "Our Values",
    description:
      "Quality, integrity and determination — guided by strategic principles that deliver an unbroken trend of success in every project.",
  },
];
