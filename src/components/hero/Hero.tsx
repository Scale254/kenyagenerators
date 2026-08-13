"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wrench,
  Headset,
  MapPin,
  Package,
  Settings,
  Cog,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const trustBadges = [
  { icon: ShieldCheck, title: "Quality", sub: "Products & Services" },
  { icon: Wrench, title: "Expert", sub: "Technicians" },
  { icon: Headset, title: "Reliable", sub: "After-Sales Support" },
  { icon: MapPin, title: "Nationwide", sub: "Service Coverage" },
];

const stats = [
  { icon: Cog, big: "10+", small: "Years of Experience" },
  { icon: Settings, big: "100+", small: "Projects Completed" },
  { icon: ShieldCheck, big: "Trusted By", small: "Leading Companies Across Kenya" },
];

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-[var(--header-height)]">
      {/* Hero image sized to its natural aspect ratio (no empty gap) */}
      <div className="relative w-full">
        <Image
          src="/images/home_hero.png"
          alt="Diesel generator and Atlas Copco air compressor supplied by KGCS"
          width={1908}
          height={846}
          priority
          sizes="100vw"
          className="h-auto w-full object-contain"
        />

        {/* Text overlaid on top of the image (left side) */}
        <div className="container-kgcs absolute inset-0 z-10 flex flex-col justify-center py-8 lg:justify-start lg:pt-[6%]">
          <div className="max-w-lg lg:-ml-4 lg:max-w-[46%] xl:-ml-6 xl:max-w-[46%]">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-extrabold uppercase leading-[1.08] tracking-tight text-secondary sm:text-3xl xl:text-4xl"
            >
              <span className="block whitespace-nowrap">Powering Businesses</span>
              <span className="block whitespace-nowrap text-primary">
                Fuelling Progress
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 max-w-[19rem] text-sm leading-relaxed text-ink/75"
            >
              Reliable Power Generators, Air Compressors and expert solutions
              for every industry.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-nowrap gap-3"
            >
              <Button href="/products" size="md" className="glow-primary">
                <Package className="h-5 w-5" />
                Our Products
              </Button>
              <Button href="/services" variant="outline" size="md">
                <Settings className="h-5 w-5" />
                Our Services
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 grid w-full max-w-md grid-cols-2 gap-2 sm:grid-cols-4"
            >
              {trustBadges.map((b) => (
                <div key={b.title} className="flex flex-col items-center gap-2 text-center">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary backdrop-blur">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-xs font-bold text-secondary">
                      {b.title}
                    </span>
                    <span className="text-[10px] leading-tight text-ink/60">
                      {b.sub}
                    </span>
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 bg-secondary">
        <div className="container-kgcs grid grid-cols-1 divide-white/10 py-5 text-white sm:grid-cols-3 sm:divide-x">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-3 py-2"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-accent">
                <s.icon className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-lg font-extrabold">{s.big}</span>
                <span className="text-[11px] text-white/60">
                  {s.small}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
