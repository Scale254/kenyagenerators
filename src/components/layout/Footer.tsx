import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { siteConfig, navigation } from "@/data/site";
import { productCategories } from "@/data/products";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-secondary text-white/70">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

      <div className="container-kgcs relative">
        {/* Top */}
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:pr-6">
            <Logo light />
            <p className="mt-5 text-sm leading-relaxed">
              {siteConfig.tagline}. Specialists in the supply, installation and
              maintenance of diesel generators, air compressors and genuine
              spare parts across Kenya.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Facebook, href: siteConfig.social.facebook },
                { Icon: Linkedin, href: siteConfig.social.linkedin },
                { Icon: Twitter, href: siteConfig.social.twitter },
                { Icon: Instagram, href: siteConfig.social.instagram },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navigation
                .filter((n) => !["Home"].includes(n.label))
                .map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-primary" />
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Our Products
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {productCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products/${cat.slug}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-primary" />
                    {cat.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <ArrowRight className="h-3.5 w-3.5 text-primary" />
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="flex flex-col">
                  {siteConfig.contact.phones.map((p, i) => (
                    <a
                      key={p}
                      href={`tel:${p}`}
                      className="transition-colors hover:text-accent"
                    >
                      {siteConfig.contact.phonesDisplay[i]}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <a
                  href={`mailto:${siteConfig.contact.emails[0]}`}
                  className="break-all transition-colors hover:text-accent"
                >
                  {siteConfig.contact.emails[0]}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="flex flex-col gap-0.5">
                  <span>{siteConfig.hours.weekdays}</span>
                  <span>{siteConfig.hours.saturday}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs sm:flex-row">
          <p>
            © {year} {siteConfig.name} All rights reserved.
          </p>
          <p className="text-white/50">
            Powering Businesses. Fuelling Progress.
          </p>
        </div>
      </div>
    </footer>
  );
}
