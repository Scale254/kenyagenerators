import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/Button";
import {
  productCategories,
  getCategoryBySlug,
  getProductsByCategory,
} from "@/data/products";
import type { Product } from "@/types";

type Params = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return productCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return { title: "Products" };
  return {
    title: cat.title,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: Params) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const items = getProductsByCategory(category as Product["category"]);

  return (
    <>
      <PageHero
        title={cat.title}
        description={cat.description}
        crumbs={[{ label: "Products", href: "/products" }, { label: cat.title }]}
      />

      <section className="py-20 lg:py-28">
        <div className="container-kgcs">
          <SectionHeading
            eyebrow={cat.short}
            title={`Our ${cat.title.toLowerCase()}`}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="container-kgcs flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Need help choosing the right {cat.title.toLowerCase()}?
            </h2>
            <p className="mt-2 text-white/80">
              Our technicians will assess your needs and recommend the perfect
              solution.
            </p>
          </div>
          <Button href="/contact" variant="white" size="lg">
            Request a Quote
          </Button>
        </div>
      </section>
    </>
  );
}
