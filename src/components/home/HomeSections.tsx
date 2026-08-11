import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, CheckCircle2, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { Icon } from "@/components/ui/Icon";
import { ProductCard } from "@/components/products/ProductCard";
import { productCategories, products, brands } from "@/data/products";
import {
  services,
  stats,
  whyChooseUs,
  industries,
  testimonials,
  projects,
} from "@/data/content";

/* ---------------------------------------------------------------- Products */
export function ProductsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-kgcs">
        <SectionHeading
          eyebrow="Our Products & Services"
          title="Complete power & air solutions"
          description="From diesel generators to industrial air compressors and genuine spare parts — everything your operation needs to stay running."
        />
        <StaggerContainer className="mt-14 grid gap-6 md:grid-cols-3">
          {productCategories.map((cat) => (
            <StaggerItem key={cat.slug}>
              <Link
                href={`/products/${cat.slug}`}
                className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                  {cat.icon !== "Zap" && (
                    <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-primary shadow-lg">
                      <Icon name={cat.icon} className="h-6 w-6" />
                    </span>
                  )}
                  <h3 className="absolute bottom-4 left-5 rounded-full bg-white/90 px-3 py-2 text-xl font-bold text-secondary shadow-[0_10px_20px_rgba(0,0,0,0.12)]">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-relaxed text-ink/65">
                    {cat.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {cat.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-sm text-secondary"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                    View more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Why Choose */
export function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-light py-20 lg:py-28">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="container-kgcs relative">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The KGCS difference"
          description="A system is not a solution until it has met all the client's needs. That belief drives everything we do."
        />
        <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <StaggerItem key={item.title}>
              <div className="card-lift group h-full rounded-3xl border border-black/5 bg-white p-7 shadow-sm">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon name={item.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-secondary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Stats */
export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-16">
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      <div className="container-kgcs relative grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((s) => (
          <Reveal key={s.label} className="text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
              <Icon name={s.icon} className="h-7 w-7" />
            </span>
            <p className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-sm font-medium leading-tight whitespace-nowrap text-white/70">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Services */
export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-kgcs">
        <SectionHeading
          eyebrow="Our Services"
          title="Engineering services you can rely on"
          description="Design, installation, testing and maintenance for commercial and industrial clients countrywide."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((svc, i) => (
            <Reveal key={svc.slug} delay={i * 0.1}>
              <div className="card-lift group relative h-full overflow-hidden rounded-3xl bg-secondary p-8 text-white">
                <div className="absolute inset-0 bg-grid-dark opacity-30" />
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/30 blur-2xl transition-all duration-500 group-hover:bg-primary/50" />
                <div className="relative">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
                    <Icon name={svc.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{svc.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {svc.summary}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {svc.items.slice(0, 4).map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span className="text-white/85">{it}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services#${svc.slug}`}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-accent"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- Brands */
export function BrandsSection() {
  const row = [...brands, ...brands];
  return (
    <section className="border-y border-black/5 bg-white py-14">
      <div className="container-kgcs">
        <p className="text-center text-sm font-bold uppercase tracking-wider text-ink/50">
          Trusted brands we supply
        </p>
      </div>
      <div className="relative mt-8 overflow-hidden">
        <div className="flex w-max animate-marquee gap-14 px-7">
          {row.map((b, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-2xl font-extrabold tracking-tight text-secondary/30 transition-colors hover:text-primary"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- Featured work */
export function FeaturedProductsSection() {
  const featured = products.filter((p) => p.featured);
  return (
    <section className="bg-light py-20 lg:py-28">
      <div className="container-kgcs">
        <SectionHeading
          eyebrow="Featured Equipment"
          title="Popular generators & compressors"
          description="A selection of the trusted equipment we supply and service across Kenya."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/products" size="lg">
            View all products
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Projects */
export function ProjectsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-kgcs">
        <SectionHeading
          eyebrow="Completed Projects"
          title="Power delivered across industries"
          description="From hospitals to manufacturing plants, we deliver dependable power where it matters most."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <Reveal key={p.slug}>
              <Link
                href="/projects"
                className="card-lift group block overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                    {p.industry}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold text-ink/50">
                    {p.location} • {p.year}
                  </p>
                  <h3 className="mt-1.5 text-lg font-bold text-secondary">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-ink/65">
                    {p.summary}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/projects" variant="outline" size="lg">
            View all projects
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Industries */
export function IndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 lg:py-28">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="container-kgcs relative">
        <SectionHeading
          light
          eyebrow="Industries We Serve"
          title="Powering every sector"
          description="Our solutions keep critical operations running across a wide range of Kenyan industries."
        />
        <StaggerContainer className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((ind) => (
            <StaggerItem key={ind.name}>
              <div className="card-lift group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-accent transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon name={ind.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-white">
                  {ind.name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- Testimonials */
export function TestimonialsSection() {
  return (
    <section className="bg-light py-20 lg:py-28">
      <div className="container-kgcs">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients say"
          description="Trusted by leading companies and service providers across Kenya."
        />
        <StaggerContainer className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <figure className="card-lift h-full rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
                <Quote className="h-9 w-9 text-primary/20" />
                <div className="mt-3 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mt-4 text-base leading-relaxed text-secondary">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-black/5 pt-4">
                  <p className="font-bold text-secondary">{t.role}</p>
                  <p className="text-sm text-ink/60">{t.company}</p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- CTA strip */
export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-20">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="absolute -left-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />
      <div className="container-kgcs relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Need reliable power for your business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Get a free consultation and quotation from our expert team today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="white" size="lg">
              Request a Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              href="/products"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Browse Products
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
