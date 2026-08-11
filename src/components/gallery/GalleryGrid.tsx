"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type GalleryImage = { src: string; alt: string; category: string };

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const categories = ["All", ...Array.from(new Set(images.map((i) => i.category)))];
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<GalleryImage | null>(null);

  const filtered =
    filter === "All" ? images : images.filter((i) => i.category === filter);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-semibold transition-colors",
              filter === c
                ? "bg-primary text-white"
                : "bg-light text-secondary hover:bg-primary/10"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((img) => (
            <motion.button
              key={img.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActive(img)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-secondary/70 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-sm font-semibold text-white">
                  {img.alt}
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-secondary/90 p-4 backdrop-blur-sm"
          >
            <button
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl"
            >
              <Image
                src={active.src.replace("w=900", "w=1400")}
                alt={active.alt}
                width={1400}
                height={1050}
                className="h-auto w-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
