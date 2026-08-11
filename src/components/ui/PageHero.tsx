import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  description?: string;
  crumbs?: Crumb[];
  image?: string;
  className?: string;
}

export function PageHero({
  title,
  description,
  crumbs = [],
  image = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-secondary pt-[calc(var(--header-height)+3rem)] pb-16 sm:pb-20",
        className
      )}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/70" />
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      {/* Accent glow */}
      <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/30 blur-3xl" />

      <div className="container-kgcs relative">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
            <li>
              <Link href="/" className="transition-colors hover:text-accent">
                Home
              </Link>
            </li>
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <ChevronRight className="h-4 w-4 text-white/30" />
                {c.href && i < crumbs.length - 1 ? (
                  <Link
                    href={c.href}
                    className="transition-colors hover:text-accent"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-accent">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="max-w-3xl text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {description}
          </p>
        )}
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-white [clip-path:ellipse(75%_100%_at_50%_100%)]" />
    </section>
  );
}
