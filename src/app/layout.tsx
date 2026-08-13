import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { siteConfig } from "@/data/site";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Power Generators & Air Compressors Kenya`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    ...siteConfig.keywords,
    "generator suppliers Kenya",
    "air compressor suppliers Nairobi",
    "diesel generator installation Kenya",
    "generator repair services Kenya",
    "industrial air compressors Kenya",
    "generator spare parts Kenya",
    "power backup solutions Kenya",
    "KGCS Kenya",
    "Kenya Generators Compressors Solutions",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: `${siteConfig.name} | Power Generators & Air Compressors Kenya`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/og-image.svg`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og-image.svg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: siteConfig.url },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.description,
    telephone: siteConfig.contact.phones,
    email: siteConfig.contact.emails[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: siteConfig.address.city,
      addressRegion: "Nairobi",
      postalCode: "00507",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.lat,
      longitude: siteConfig.address.lng,
    },
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
    knowsAbout: [
      "Diesel Generators",
      "Air Compressors",
      "Generator Maintenance",
      "Generator Repair",
      "Spare Parts",
      "Electrical Services",
      "Power Solutions",
    ],
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.instagram,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phones[0],
      contactType: "sales",
      areaServed: "KE",
      availableLanguage: ["English", "Swahili"],
    },
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${siteConfig.url}/images/logo.png`,
    url: siteConfig.url,
    telephone: siteConfig.contact.phones[0],
    email: siteConfig.contact.emails[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: siteConfig.address.city,
      addressRegion: "Nairobi",
      postalCode: "00507",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.lat,
      longitude: siteConfig.address.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
    priceRange: "$$",
    areaServed: "Kenya",
    hasMap: `https://www.google.com/maps/search/?api=1&query=${siteConfig.address.mapQuery}`,
  };

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
        </SmoothScroll>
      </body>
    </html>
  );
}
