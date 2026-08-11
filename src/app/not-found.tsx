import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-32">
      <div className="text-center">
        <p className="bg-gradient-to-r from-primary to-accent bg-clip-text text-8xl font-extrabold text-transparent sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-extrabold text-secondary sm:text-3xl">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-ink/65">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/">
            <Home className="h-4 w-4" /> Back to Home
          </Button>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-secondary"
          >
            <ArrowLeft className="h-4 w-4" /> Contact us instead
          </Link>
        </div>
      </div>
    </section>
  );
}
