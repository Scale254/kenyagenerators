import type { Metadata } from "next";
import { Quote, Star } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { clientLogos, testimonials, industries } from "@/data/content";

export const metadata: Metadata = {
  title: "Our Clients",
  description:
    "International companies and leading service providers trust KGCS for their machines and services solutions across Kenya.",
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        title="Our Clients"
        description="International companies and leading service providers have entrusted KGCS for their machines & service solutions."
        crumbs={[{ label: "Clients" }]}
      />

      {/* Logos */}
      <section className="py-20 lg:py-28">
        <div className="container-kgcs">
          <SectionHeading
            eyebrow="Trusted By"
            title="Companies we've worked with"
          />
          <StaggerContainer className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {clientLogos.map((c) => (
              <StaggerItem key={c.name}>
                <div className="card-lift flex h-28 items-center justify-center rounded-2xl border border-black/5 bg-white p-6 text-center shadow-sm">
                  <span className="text-lg font-extrabold text-secondary">
                    {c.abbr}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="container-kgcs">
          <SectionHeading
            eyebrow="Testimonials"
            title="What our clients say"
            light
          />
          <StaggerContainer className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <StaggerItem key={t.company}>
                <figure className="h-full rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
                  <Quote className="h-9 w-9 text-accent" />
                  <blockquote className="mt-4 text-white/85">
                    “{t.quote}”
                  </blockquote>
                  <div className="mt-5 flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <figcaption className="mt-3 text-sm">
                    <span className="font-bold text-white">{t.role}</span>
                    <span className="text-white/50"> — {t.company}</span>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 lg:py-28">
        <div className="container-kgcs">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Powering every sector"
            description="From manufacturing to healthcare, we deliver reliable solutions across Kenyan industries."
          />
          <StaggerContainer className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((ind) => (
              <StaggerItem key={ind.name}>
                <div className="card-lift flex items-center gap-3 rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon name={ind.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-secondary">
                    {ind.name}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="container-kgcs flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Join the companies that trust KGCS
          </h2>
          <Button href="/contact" variant="white" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}
