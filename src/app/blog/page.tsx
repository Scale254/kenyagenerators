import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { blogPosts } from "@/data/content";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog - Generator & Compressor Guides Kenya | KGCS",
  description:
    "Expert guides, tips and insights on diesel generators, air compressors, maintenance and power solutions from KGCS technical team in Kenya.",
  keywords: [
    "generator maintenance tips Kenya",
    "diesel generator guide Kenya",
    "air compressor maintenance Kenya",
    "generator installation guide Kenya",
    "power solutions blog Kenya",
    "KGCS blog",
  ],
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Insights & Guides"
        description="Practical advice on generators, air compressors and maintenance from our technical team."
        crumbs={[{ label: "Blog" }]}
      />

      <section className="py-20 lg:py-28">
        <div className="container-kgcs">
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <article>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width:768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                        {post.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-ink/50">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {formatDate(post.date)}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="mt-3 text-lg font-bold leading-snug text-secondary transition-colors group-hover:text-primary">
                        {post.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-ink/65">
                        {post.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                        Read article
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
