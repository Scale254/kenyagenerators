import type { Product, ProductCategory } from "@/types";

export const productCategories: ProductCategory[] = [
  {
    slug: "generators",
    title: "Diesel Generators",
    short: "Reliable, fuel-efficient standby & prime power.",
    description:
      "Compact, fuel-efficient and low-noise diesel generators engineered to solve all of your power needs — from small commercial standby sets to large industrial prime-power installations.",
    image: "/images/industrial_generator.png",
    icon: "Zap",
    highlights: [
      "Perkins, Cummins & Lovol engines",
      "Low fuel consumption",
      "Low-noise canopy enclosures",
      "8 kVA – 2000 kVA range",
    ],
  },
  {
    slug: "compressors",
    title: "Air Compressors",
    short: "Belt-driven electric & diesel compressors.",
    description:
      "As leading compressor service providers, we supply belt-driven compressors — both electric and diesel driven — for industrial and commercial applications, backed by full installation and maintenance support.",
    image: "/images/compressor.jpeg",
    icon: "Wind",
    highlights: [
      "Ingersoll Rand & Atlas Copco",
      "Chicago Pneumatic range",
      "Electric & diesel driven",
      "Industrial & commercial duty",
    ],
  },
  {
    slug: "spare-parts",
    title: "Spare Parts",
    short: "Genuine parts, competitively priced.",
    description:
      "We supply genuine spare parts for generators and air compressors to clients countrywide at competitive prices — filters, alternators, control panels, belts, hoses and more.",
    image: "/images/spareparts.png",
    icon: "Cog",
    highlights: [
      "Genuine OEM parts",
      "Filters, belts & alternators",
      "Control & ATS panels",
      "Countrywide delivery",
    ],
  },
];

export const products: Product[] = [
  {
    slug: "perkins-diesel-generator",
    category: "generators",
    name: "Perkins Diesel Generator",
    tagline: "Trusted British engineering",
    description:
      "Powered by genuine Perkins engines, these generator sets deliver dependable prime and standby power with excellent fuel economy and long service intervals.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    brands: ["Perkins"],
    specs: [
      { label: "Power Range", value: "9 – 2000 kVA" },
      { label: "Frequency", value: "50 Hz" },
      { label: "Voltage", value: "415/240 V" },
      { label: "Enclosure", value: "Soundproof canopy" },
    ],
    features: [
      "Genuine Perkins engine",
      "Low fuel consumption",
      "Automatic transfer switch ready",
      "Weatherproof canopy",
    ],
    featured: true,
  },
  {
    slug: "cummins-diesel-generator",
    category: "generators",
    name: "Cummins Diesel Generator",
    tagline: "Heavy-duty industrial power",
    description:
      "Cummins-powered sets built for continuous industrial operation, offering rugged reliability, strong load acceptance and global parts support.",
    image:
      "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=1200&q=80",
    brands: ["Cummins"],
    specs: [
      { label: "Power Range", value: "20 – 1500 kVA" },
      { label: "Frequency", value: "50 Hz" },
      { label: "Cooling", value: "Water cooled" },
      { label: "Control", value: "Digital controller" },
    ],
    features: [
      "Cummins power output",
      "Excellent load acceptance",
      "Digital control panel",
      "Remote monitoring ready",
    ],
    featured: true,
  },
  {
    slug: "lovol-diesel-generator",
    category: "generators",
    name: "Lovol Diesel Generator",
    tagline: "Cost-effective dependable power",
    description:
      "Affordable, fuel-efficient Lovol generator sets ideal for small businesses, retail and residential standby power without compromising reliability.",
    image:
      "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&w=1200&q=80",
    brands: ["Lovol"],
    specs: [
      { label: "Power Range", value: "8 – 150 kVA" },
      { label: "Frequency", value: "50 Hz" },
      { label: "Noise", value: "Low-noise canopy" },
      { label: "Starting", value: "Electric start" },
    ],
    features: [
      "Budget-friendly",
      "Compact footprint",
      "Low noise operation",
      "Easy maintenance",
    ],
  },
  {
    slug: "ingersoll-rand-compressor",
    category: "compressors",
    name: "Ingersoll Rand Compressor",
    tagline: "Industrial-grade reliability",
    description:
      "Belt-driven Ingersoll Rand compressors delivering consistent air supply for workshops, manufacturing and industrial processes.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
    brands: ["Ingersoll Rand"],
    specs: [
      { label: "Type", value: "Belt driven" },
      { label: "Drive", value: "Electric / Diesel" },
      { label: "Pressure", value: "Up to 12 bar" },
      { label: "Duty", value: "Industrial" },
    ],
    features: [
      "Robust build quality",
      "High air delivery",
      "Electric or diesel drive",
      "Low maintenance",
    ],
    featured: true,
  },
  {
    slug: "atlas-copco-compressor",
    category: "compressors",
    name: "Atlas Copco Compressor",
    tagline: "Energy-efficient air power",
    description:
      "Atlas Copco compressors known for energy efficiency and durability, suited for demanding commercial and industrial air applications.",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80",
    brands: ["Atlas Copco"],
    specs: [
      { label: "Type", value: "Belt driven" },
      { label: "Efficiency", value: "High" },
      { label: "Pressure", value: "Up to 13 bar" },
      { label: "Cooling", value: "Air cooled" },
    ],
    features: [
      "Energy efficient",
      "Durable components",
      "Consistent pressure",
      "Global support",
    ],
  },
  {
    slug: "chicago-pneumatic-compressor",
    category: "compressors",
    name: "Chicago Pneumatic Compressor",
    tagline: "Versatile & dependable",
    description:
      "Chicago Pneumatic belt-driven compressors offering a versatile solution for commercial workshops and light industrial use.",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=80",
    brands: ["Chicago Pneumatic"],
    specs: [
      { label: "Type", value: "Belt driven" },
      { label: "Drive", value: "Electric / Diesel" },
      { label: "Pressure", value: "Up to 10 bar" },
      { label: "Duty", value: "Commercial" },
    ],
    features: [
      "Versatile use",
      "Reliable output",
      "Easy servicing",
      "Compact design",
    ],
  },
  {
    slug: "generator-spare-parts",
    category: "spare-parts",
    name: "Generator Spare Parts",
    tagline: "Genuine components",
    description:
      "Genuine filters, alternators, AVRs, control panels, belts and batteries for all major generator brands, kept in stock for fast turnaround.",
    image:
      "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1200&q=80",
    brands: ["Perkins", "Cummins", "Lovol"],
    specs: [
      { label: "Filters", value: "Oil, fuel & air" },
      { label: "Electrical", value: "AVR, alternators" },
      { label: "Control", value: "ATS & panels" },
      { label: "Availability", value: "In stock" },
    ],
    features: [
      "Genuine OEM parts",
      "Fast countrywide delivery",
      "Competitive pricing",
      "Expert fitment advice",
    ],
  },
  {
    slug: "compressor-spare-parts",
    category: "spare-parts",
    name: "Compressor Spare Parts",
    tagline: "Keep your air flowing",
    description:
      "Air filters, oil separators, valves, belts and service kits for Ingersoll Rand, Atlas Copco and Chicago Pneumatic compressors.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    brands: ["Ingersoll Rand", "Atlas Copco", "Chicago Pneumatic"],
    specs: [
      { label: "Filters", value: "Air & oil" },
      { label: "Separators", value: "Oil separators" },
      { label: "Service Kits", value: "Available" },
      { label: "Availability", value: "In stock" },
    ],
    features: [
      "Genuine service kits",
      "Valves & separators",
      "Competitive pricing",
      "Technical support",
    ],
  },
];

export const brands = [
  "Perkins",
  "Cummins",
  "Lovol",
  "Ingersoll Rand",
  "Atlas Copco",
  "Chicago Pneumatic",
];

export const getProductsByCategory = (category: Product["category"]) =>
  products.filter((p) => p.category === category);

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getCategoryBySlug = (slug: string) =>
  productCategories.find((c) => c.slug === slug);
