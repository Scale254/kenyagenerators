import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary backdrop-blur">
          {product.brands[0]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-accent-dark">
          {product.tagline}
        </p>
        <h3 className="mt-1.5 text-lg font-bold text-secondary">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-ink/65">
          {product.description}
        </p>

        <dl className="mt-4 grid grid-cols-2 gap-2 border-t border-black/5 pt-4 text-xs">
          {product.specs.slice(0, 2).map((s) => (
            <div key={s.label}>
              <dt className="text-ink/50">{s.label}</dt>
              <dd className="font-semibold text-secondary">{s.value}</dd>
            </div>
          ))}
        </dl>

        <Link
          href={`/products/${product.category}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-primary-dark"
        >
          View details
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
