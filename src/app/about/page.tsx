import type { Metadata } from "next";
import {
  ShieldCheck,
  BadgeCheck,
  Users,
  Headset,
  Wrench,
  Handshake,
} from "lucide-react";
import { AboutHero } from "@/components/about/AboutHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { companyValues, stats } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Kenya Generators & Compressors Solutions Ltd is a registered company specializing in the supply, installation and maintenance of diesel generators and air compressors across Kenya.",
};

const whoFeatures = [
  {
    icon: ShieldCheck,
    title: "Registered & Compliant",
    text: "Fully registered company under the Companies Act, Cap 486 of Kenya.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    text: "Skilled, certified and dedicated engineers with hands-on industry experience.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Products",
    text: "We supply industry-leading brands and genuine spare parts you can trust.",
  },
  {
    icon: Headset,
    title: "Reliable Support",
    text: "Nationwide support with 24/7 availability for your peace of mind.",
  },
  {
    icon: Wrench,
    title: "Comprehensive Solutions",
    text: "From consultation and installation to maintenance and repair — we've got you covered.",
  },
  {
    icon: Handshake,
    title: "Customer Commitment",
    text: "We go the extra mile to ensure total customer satisfaction in every project.",
  },
];

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      {/* Who we are */}
      <section className="py-20 lg:py-28">
        <div className="container-kgcs grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Who We Are
              </span>
              <h2 className="mt-3 max-w-lg text-3xl font-extrabold leading-tight text-secondary sm:text-4xl">
                Your Trusted Partner in Power and Compressed Air Solutions
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink/70 sm:text-base">
                <p>
                  Kenya Generators &amp; Compressors Solutions Ltd is a fully
                  registered company under the Companies Act, Cap 486 of Kenya.
                  We specialize in the supply, installation, servicing and
                  maintenance of diesel power generators, air compressors and
                  associated spare parts.
                </p>
                <p>
                  We are committed to delivering high-quality products,
                  professional services and sustainable solutions that keep your
                  operations running smoothly. With a team of skilled technicians
                  and a customer-first approach, we have become one of Kenya&apos;s
                  fast-growing technical service companies.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <Button href="/contact" className="mt-7">
                Get to Know Us
              </Button>
            </Reveal>
          </div>

          {/* Feature grid */}
          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {whoFeatures.map((f) => (
              <StaggerItem key={f.title}>
                <div className="card-lift group h-full rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-secondary">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink/60">
                    {f.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section className="bg-light py-20 lg:py-24">
        <div className="container-kgcs">
          <SectionHeading
            eyebrow="Our Values"
            title="The Principles That Drive Us"
          />
          <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-3 lg:grid-cols-3">
            {companyValues.map((v) => (
              <StaggerItem key={v.title}>
                <div className="card-lift h-full rounded-3xl border border-black/5 bg-white p-8 text-center shadow-sm">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon name={v.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-secondary">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {v.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-secondary py-16">
        <div className="container-kgcs grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label} className="flex flex-col items-center text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <p className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm text-white/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container-kgcs flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Ready to work with a team that delivers?
            </h2>
            <p className="mt-2 text-white/80">
              Let&apos;s discuss your power and air compressor needs today.
            </p>
          </div>
          <Button href="/contact" variant="white" size="lg">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
}
