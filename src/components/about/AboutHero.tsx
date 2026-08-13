"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-secondary">
      {/* Background image */}
      <div className="relative w-full">
        <Image
          src="/images/about_hero.png"
          alt="KGCS diesel generator and air compressor"
          width={963}
          height={230}
          priority
          sizes="100vw"
          className="h-auto w-full object-contain"
        />

        {/* Text overlaid on the left blue panel — desktop only */}
        <div className="absolute inset-0 z-10 hidden items-center lg:flex">
          <div className="container-kgcs">
            <div className="max-w-md pr-4">
              <motion.nav
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-1.5 text-xs text-white/60 sm:text-sm"
              >
                <Link href="/" className="transition-colors hover:text-accent">
                  Home
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-accent">About Us</span>
              </motion.nav>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                About Us
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-3 h-1 w-16 origin-left rounded-full bg-gradient-to-r from-accent to-white/60"
              />

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-3 max-w-xs text-sm leading-relaxed text-white/75"
              >
                Powering industries. Building trust. Delivering solutions that last.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile content — stacked below image */}
      <div className="container-kgcs px-4 py-6 lg:hidden">
        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-1.5 text-xs text-ink/50"
        >
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-primary">About Us</span>
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 text-2xl font-extrabold uppercase tracking-tight text-secondary"
        >
          About Us
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-3 h-1 w-12 origin-left rounded-full bg-gradient-to-r from-primary to-primary/40"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-3 text-sm leading-relaxed text-ink/70"
        >
          Powering industries. Building trust. Delivering solutions that last.
        </motion.p>
      </div>
    </section>
  );
}
