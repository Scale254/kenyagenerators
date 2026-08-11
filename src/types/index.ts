import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
  description?: string;
}

export interface Product {
  slug: string;
  category: "generators" | "compressors" | "spare-parts";
  name: string;
  tagline: string;
  description: string;
  image: string;
  brands: string[];
  specs: { label: string; value: string }[];
  features: string[];
  featured?: boolean;
}

export interface ProductCategory {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  icon: string;
  highlights: string[];
}

export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: string;
  items: string[];
  image?: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  industry: string;
  location: string;
  year: string;
  summary: string;
  scope: string[];
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface Industry {
  name: string;
  icon: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export interface ClientLogo {
  name: string;
  abbr: string;
}

export type IconName = string;
export type { LucideIcon };
