import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Completed generator, air compressor and electrical projects delivered by KGCS across Kenyan industries.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Completed Projects"
        description="A track record of reliable power and air solutions delivered across Kenyan industries."
        crumbs={[{ label: "Projects" }]}
      />

      <section className="py-20 lg:py-28">
        <div className="container-kgcs">
          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {projects.map((p) => (
              <StaggerItem key={p.slug}>
                <article className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width:768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                      {p.industry}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-bold text-secondary">
                      {p.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-ink/50">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" /> {p.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" /> {p.year}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-ink/65">{p.summary}</p>
                    <ul className="mt-4 grid gap-1.5">
                      {p.scope.map((s) => (
                        <li
                          key={s}
                          className="flex items-center gap-2 text-sm text-secondary"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="container-kgcs flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Have a project in mind?
            </h2>
            <p className="mt-2 text-white/80">
              Tell us about your power or air compressor requirements.
            </p>
          </div>
          <Button href="/contact" variant="white" size="lg">
            Start a Project
          </Button>
        </div>
      </section>
    </>
  );
}
