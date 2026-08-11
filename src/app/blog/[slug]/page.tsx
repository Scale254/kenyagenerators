import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { blogPosts } from "@/data/content";
import { formatDate } from "@/lib/utils";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Blog" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article>
      {/* Header */}
      <header className="relative overflow-hidden bg-secondary pt-32 pb-16">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={post.image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-secondary/40" />
        <div className="container-kgcs relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
          <span className="mt-6 inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
            {post.category}
          </span>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/70">
            <span className="inline-flex items-center gap-1.5">
              <User className="h-4 w-4" /> {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {post.readTime}
            </span>
          </div>
        </div>
      </header>

      {/* Feature image */}
      <div className="container-kgcs -mt-8">
        <div className="relative aspect-[21/9] overflow-hidden rounded-3xl shadow-xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width:1200px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Body */}
      <div className="container-kgcs py-16">
        <div className="mx-auto max-w-3xl space-y-6">
          {post.content.map((para, i) => (
            <Reveal key={i}>
              <p className="text-lg leading-relaxed text-ink/75">{para}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Related */}
      <section className="bg-light py-16">
        <div className="container-kgcs">
          <h2 className="text-2xl font-extrabold text-secondary">
            Keep reading
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="card-lift group flex gap-4 overflow-hidden rounded-2xl border border-black/5 bg-white p-4 shadow-sm"
              >
                <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-bold leading-snug text-secondary transition-colors group-hover:text-primary">
                    {p.title}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
