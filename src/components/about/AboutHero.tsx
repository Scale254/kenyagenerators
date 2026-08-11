"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-secondary">
      {/* Background image (blue panel + equipment) */}
      <div className="relative aspect-[963/230] min-h-[220px] w-full">
        <Image
          src="/images/about_hero.png"
          alt="KGCS diesel generator and air compressor"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Text overlaid on the left blue panel */}
        <div className="absolute inset-0 z-10 flex items-center">
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
                className="mt-3 hidden max-w-xs text-sm leading-relaxed text-white/75 sm:block"
              >
                Powering industries. Building trust. Delivering solutions that last.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
