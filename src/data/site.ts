import type { NavLink } from "@/types";

export const siteConfig = {
  name: "Kenya Generators & Compressors Solutions Ltd.",
  shortName: "KGCS",
  tagline: "Dealers in Power Generators and Air Compressors",
  description:
    "Kenya Generators & Compressors Solutions Ltd specialises in the supply, installation and maintenance of diesel generators, air compressors and genuine spare parts across Kenya. Reliable power solutions for every industry.",
  url: "https://kenyagenerators.co.ke",
  locale: "en_KE",
  keywords: [
    "generators Kenya",
    "diesel generators Nairobi",
    "air compressors Kenya",
    "Perkins generators",
    "Cummins generators",
    "Atlas Copco compressors",
    "Ingersoll Rand",
    "generator maintenance Nairobi",
    "spare parts generators Kenya",
    "power solutions Kenya",
  ],
  contact: {
    phones: ["+254728399145", "+254731043285"],
    phonesDisplay: ["+254 728 399 145", "+254 731 043 285"],
    whatsapp: "254728399145",
    emails: [
      "kenyasolutions23@gmail.com",
      "kenyagenerators.compressors@gmail.com",
    ],
    director: "Laban Kunga Mutie",
    directorTitle: "Technical Director",
  },
  address: {
    line1: "Loipi Building — Room 20",
    line2: "Lunga Lunga Road",
    city: "Nairobi",
    country: "Kenya",
    full: "Loipi Building — Room 20, Lunga Lunga Road, Nairobi, Kenya",
    mapQuery: "Lunga+Lunga+Road+Nairobi+Kenya",
    lat: -1.3082,
    lng: 36.8541,
  },
  hours: {
    weekdays: "Mon – Fri: 8:00 AM – 5:30 PM",
    saturday: "Sat: 8:00 AM – 1:00 PM",
    sunday: "Sun: Emergency service only",
  },
  social: {
    facebook: "#",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
} as const;

export const navigation: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "Diesel Generators",
        href: "/products/generators",
        description: "Perkins, Cummins & Lovol power generators.",
      },
      {
        label: "Air Compressors",
        href: "/products/compressors",
        description: "Ingersoll Rand, Chicago Pneumatic & Atlas Copco.",
      },
      {
        label: "Spare Parts",
        href: "/products/spare-parts",
        description: "Genuine parts for generators & compressors.",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Electrical Services",
        href: "/services#electrical",
        description: "Design, installation, testing & maintenance.",
      },
      {
        label: "Maintenance & Repair",
        href: "/services#maintenance",
        description: "Planned, preventive & emergency support.",
      },
      {
        label: "Supply & Installation",
        href: "/services#installation",
        description: "Turnkey generator & compressor setup.",
      },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Clients", href: "/clients" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const whatsappLink = (message?: string) =>
  `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    message ??
      "Hello KGCS, I'd like to make an enquiry about your generators / compressors."
  )}`;
