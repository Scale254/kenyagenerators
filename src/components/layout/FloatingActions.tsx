"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, ArrowUp, X, Phone } from "lucide-react";
import { siteConfig, whatsappLink } from "@/data/site";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {/* Scroll to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-white shadow-lg transition-colors hover:bg-primary"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Contact quick-actions */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="flex flex-col gap-2"
          >
            <a
              href={`tel:${siteConfig.contact.phones[0]}`}
              className="flex items-center gap-3 rounded-full bg-white py-2.5 pl-4 pr-5 text-sm font-semibold text-secondary shadow-lg"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                <Phone className="h-4 w-4" />
              </span>
              Call us
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full bg-white py-2.5 pl-4 pr-5 text-sm font-semibold text-secondary shadow-lg"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white">
                <MessageCircle className="h-4 w-4" />
              </span>
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Contact options"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl animate-pulse-ring"
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-7 w-7" />
        )}
      </button>
    </div>
  );
}
