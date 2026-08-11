import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ProductCard } from "@/components/products/ProductCard";
import { productCategories, products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our range of diesel generators, air compressors and genuine spare parts from Perkins, Cummins, Ingersoll Rand, Atlas Copco and more.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Our Products"
        description="Diesel generators, air compressors and genuine spare parts from the brands you trust."
        crumbs={[{ label: "Products" }]}
      />

      {/* Categories */}
      <section className="py-20 lg:py-28">
        <div className="container-kgcs">
          <SectionHeading
            eyebrow="Browse by Category"
            title="What we supply"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                    {cat.icon !== "Zap" && (
                      <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-primary shadow-lg">
                        <Icon name={cat.icon} className="h-6 w-6" />
                      </span>
                    )}
                    <h3 className="absolute bottom-4 left-5 text-xl font-bold text-white">
                      {cat.title}
                    </h3>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm text-ink/65">{cat.description}</p>
                    <ul className="mt-4 space-y-2">
                      {cat.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-secondary">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                      View category
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* All products */}
      <section className="bg-light py-20 lg:py-28">
        <div className="container-kgcs">
          <SectionHeading
            eyebrow="Full Catalogue"
            title="All equipment & parts"
            description="Everything we supply — request a quote on any product."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
