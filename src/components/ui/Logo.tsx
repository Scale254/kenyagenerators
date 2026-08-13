import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

interface LogoProps {
  light?: boolean;
  className?: string;
  compact?: boolean;
}

/** KGCS brand logo image. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt={`${siteConfig.shortName} logo`}
      width={220}
      height={80}
      priority
      className={cn("h-8 w-auto object-contain sm:h-10", className)}
    />
  );
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label={`${siteConfig.shortName} — Home`}
    >
      <LogoMark className="shrink-0 transition-transform duration-300 group-hover:rotate-[8deg]" />
    </Link>
  );
}
