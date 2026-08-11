"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { navigation, siteConfig } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b-2 border-accent bg-white transition-all duration-300",
        scrolled ? "shadow-lg" : "shadow-sm"
      )}
      style={{ height: "var(--header-height)" }}
    >
      <div className="container-kgcs flex h-full items-center justify-between gap-4">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((link) => (
            <NavItem
              key={link.href}
              link={link}
              active={isActive(link.href)}
              open={openMenu === link.label}
              onEnter={() => setOpenMenu(link.label)}
              onLeave={() => setOpenMenu(null)}
            />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/contact" variant="primary" size="sm">
            <Phone className="h-4 w-4" />
            Get in Touch
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-xl text-secondary transition-colors hover:bg-light lg:hidden"
          )}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <MobileDrawer
            onClose={() => setMobileOpen(false)}
            isActive={isActive}
          />
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({
  link,
  active,
  open,
  onEnter,
  onLeave,
}: {
  link: NavLink;
  active: boolean;
  open: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const hasChildren = !!link.children?.length;

  return (
    <div
      className="relative"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <Link
        href={link.href}
        className={cn(
          "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-secondary transition-colors hover:text-primary",
          active && "text-primary"
        )}
      >
        {link.label}
        {hasChildren && (
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform",
              open && "rotate-180"
            )}
          />
        )}
      </Link>

      {/* Mega dropdown */}
      {hasChildren && (
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.18 }}
              className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3"
            >
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white p-2 shadow-2xl">
                {link.children!.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block rounded-xl p-3 transition-colors hover:bg-light"
                  >
                    <span className="block text-sm font-bold text-secondary">
                      {child.label}
                    </span>
                    {child.description && (
                      <span className="mt-0.5 block text-xs text-ink/60">
                        {child.description}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

function MobileDrawer({
  onClose,
  isActive,
}: {
  onClose: () => void;
  isActive: (href: string) => boolean;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 top-[var(--header-height)] z-40 lg:hidden"
    >
      <div
        className="absolute inset-0 bg-secondary/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.nav
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 26, stiffness: 240 }}
        className="absolute right-0 top-0 h-[calc(100vh-var(--header-height))] w-[86%] max-w-sm overflow-y-auto bg-white p-5 shadow-2xl"
      >
        <ul className="flex flex-col gap-1">
          {navigation.map((link) => (
            <li key={link.href} className="border-b border-black/5">
              {link.children?.length ? (
                <>
                  <button
                    onClick={() =>
                      setExpanded((v) => (v === link.label ? null : link.label))
                    }
                    className="flex w-full items-center justify-between py-3.5 text-left text-base font-semibold text-secondary"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        expanded === link.label && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {expanded === link.label && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-3"
                      >
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={onClose}
                              className="block py-2.5 text-sm text-ink/70 hover:text-primary"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "block py-3.5 text-base font-semibold",
                    isActive(link.href) ? "text-primary" : "text-secondary"
                  )}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-6 space-y-3">
          <Button href="/contact" className="w-full" onClick={onClose}>
            <Phone className="h-4 w-4" />
            Get in Touch
          </Button>
          <a
            href={`tel:${siteConfig.contact.phones[0]}`}
            className="block text-center text-sm font-semibold text-primary"
          >
            {siteConfig.contact.phonesDisplay[0]}
          </a>
        </div>
      </motion.nav>
    </motion.div>
  );
}
