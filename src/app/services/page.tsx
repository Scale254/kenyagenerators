import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { services, faqs } from "@/data/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Electrical services, maintenance & repair, and supply & installation of generators and air compressors across Kenya.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Design, installation, testing and maintenance for commercial and industrial clients countrywide."
        crumbs={[{ label: "Services" }]}
      />

      <section className="py-20 lg:py-28">
        <div className="container-kgcs space-y-20">
          {services.map((svc, i) => (
            <div
              key={svc.slug}
              id={svc.slug}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal
                direction={i % 2 === 0 ? "right" : "left"}
                className={i % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src={svc.image ?? "/images/service-placeholder.jpg"}
                    alt={svc.title}
                    width={900}
                    height={650}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>

              <Reveal direction={i % 2 === 0 ? "left" : "right"}>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon name={svc.icon} className="h-7 w-7" />
                </span>
                <h2 className="mt-5 text-3xl font-extrabold text-secondary sm:text-4xl">
                  {svc.title}
                </h2>
                <p className="mt-4 text-ink/70">{svc.description}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {svc.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-2 text-sm font-medium text-secondary"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      {it}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" className="mt-8">
                  Request this service
                </Button>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-light py-20 lg:py-28">
        <div className="container-kgcs">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Answers to the questions we hear most from our clients."
          />
          <div className="mt-14">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
