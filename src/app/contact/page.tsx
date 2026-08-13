import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Kenya Generators & Compressors Solutions Ltd for generators, air compressors, spare parts, and expert maintenance services.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        description="Have a project or need a quote? Our team is ready to help you find the right power and air solution."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="py-20 lg:py-28">
        <div className="container-kgcs grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact info */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Contact Details
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-secondary sm:text-4xl">
              Let&apos;s power your project
            </h2>
            <p className="mt-4 text-ink/70">
              Reach out to {siteConfig.contact.director}, our Technical
              Director, or send us a message and we&apos;ll respond promptly.
            </p>

            <ul className="mt-8 space-y-5">
              <ContactRow icon={<MapPin className="h-5 w-5" />} label="Visit us">
                {siteConfig.address.full}
              </ContactRow>
              <ContactRow icon={<Phone className="h-5 w-5" />} label="Call us">
                {siteConfig.contact.phonesDisplay.map((p, i) => (
                  <a
                    key={p}
                    href={`tel:${siteConfig.contact.phones[i]}`}
                    className="block hover:text-primary"
                  >
                    {p}
                  </a>
                ))}
              </ContactRow>
              <ContactRow icon={<Mail className="h-5 w-5" />} label="Email us">
                {siteConfig.contact.emails.map((e) => (
                  <a
                    key={e}
                    href={`mailto:${e}`}
                    className="block break-all hover:text-primary"
                  >
                    {e}
                  </a>
                ))}
              </ContactRow>
              <ContactRow icon={<Clock className="h-5 w-5" />} label="Working hours">
                {siteConfig.hours.weekdays}
                <br />
                {siteConfig.hours.saturday}
              </ContactRow>
            </ul>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-xl sm:p-8">
            <h3 className="text-xl font-bold text-secondary">
              Send us a message
            </h3>
            <p className="mt-1 text-sm text-ink/60">
              Fill in the form and we&apos;ll get back to you within one business
              day.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container-kgcs">
          <div className="overflow-hidden rounded-3xl border border-black/5 shadow-lg">
            <iframe
              title="KGCS location map"
              src="https://www.google.com/maps?q=Makadara+Road,+Athi+River,+Kenya&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        {icon}
      </span>
      <div>
        <p className="text-sm font-bold text-secondary">{label}</p>
        <div className="mt-0.5 text-sm text-ink/70">{children}</div>
      </div>
    </li>
  );
}
