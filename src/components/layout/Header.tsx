"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";
import { primaryNav, type NavItem } from "./nav-data";

// -----------------------------------------------------------------------------
// Ardian-style header:
//   • Utility strip on top (locale · investor reports · portal button)
//   • Primary nav below (logo left, menu right, right-aligned)
//   • Transparent-with-scrim over hero; paper-solid when mega-menu is open
//   • Full-width mega menus on hover / focus / click
// -----------------------------------------------------------------------------

// Hover-intent tuning — feels premium, prevents accidental firing on cursor
// grazing. Ardian uses ~150–200ms open intent; we mirror that.
const OPEN_DELAY_MS = 180;
const CLOSE_DELAY_MS = 220;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const pathname = usePathname();
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMega(null);
  }, [pathname]);

  useEffect(() => {
    if (activeMega) {
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setActiveMega(null);
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
  }, [activeMega]);

  // Home has a dark-video hero — nav floats transparent over it and turns
  // solid on scroll / when a mega menu is open / on other pages.
  const onDarkHero = pathname === "/";
  const solid = !onDarkHero || scrolled || mobileOpen || !!activeMega;

  // Hover-intent: the menu only opens after the cursor lingers for a beat,
  // and only closes after a small grace so the cursor can travel between
  // trigger and panel without dropping the menu.
  const cancelTimers = () => {
    if (openTimer.current) window.clearTimeout(openTimer.current);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    openTimer.current = null;
    closeTimer.current = null;
  };
  const scheduleOpen = (label: string | null) => {
    cancelTimers();
    if (label === null) return;
    // If a different menu is already open, swap immediately (feels natural).
    if (activeMega && activeMega !== label) {
      setActiveMega(label);
      return;
    }
    openTimer.current = window.setTimeout(() => {
      setActiveMega(label);
    }, OPEN_DELAY_MS);
  };
  const scheduleClose = () => {
    if (openTimer.current) window.clearTimeout(openTimer.current);
    openTimer.current = null;
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setActiveMega(null), CLOSE_DELAY_MS);
  };
  const openImmediately = (label: string) => {
    cancelTimers();
    setActiveMega(label);
  };
  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "bg-[var(--color-paper)] border-b border-[var(--color-hairline)]"
          : "bg-transparent border-b border-transparent",
      )}
      // Scrim over hero — subtle gradient improves legibility without a bar
      style={
        solid
          ? undefined
          : {
              background:
                "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0) 90%)",
            }
      }
      onMouseLeave={scheduleClose}
    >
      {/* Utility strip — hidden on mobile; all its items are md+ anyway */}
      <div
        className={cn(
          "hidden md:block border-b transition-colors duration-300",
          solid ? "border-[var(--color-hairline)]" : "border-white/10",
        )}
      >
        <Container>
          <div className="flex h-8 items-center justify-end gap-6 md:gap-8 text-[11px] font-medium">
            <a
              href="mailto:enquiries@blackoakglobal.com"
              className={cn(
                "hidden md:inline-flex tracking-[0.02em] normal-case transition-colors",
                solid
                  ? "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                  : "text-white/70 hover:text-white",
              )}
            >
              enquiries@blackoakglobal.com
            </a>
            <span
              aria-hidden
              className={cn("hidden md:block h-3 w-px", solid ? "bg-[var(--color-hairline-strong)]" : "bg-white/25")}
            />
            <Link
              href="/report"
              className={cn(
                "hidden md:inline-flex items-center uppercase tracking-[0.18em] text-[10.5px] transition-colors",
                solid
                  ? "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                  : "text-white/70 hover:text-white",
              )}
            >
              Investor Report
            </Link>
            {/* Investor Portal + EN language switcher hidden for now. Route
              * (/investors) and middleware remain intact — re-enable by
              * restoring the JSX. */}
          </div>
        </Container>
      </div>

      {/* Primary nav row */}
      <Container>
        <div className="flex h-[76px] md:h-[80px] items-center justify-between">
          <Logo tone={solid ? "ink" : "paper"} size="md" />

          {/* Desktop nav — right-aligned */}
          <nav
            className="hidden lg:flex items-center gap-8 xl:gap-12"
            aria-label="Primary"
          >
            {primaryNav.map((item) => (
              <NavTrigger
                key={item.href}
                item={item}
                solid={solid}
                pathname={pathname}
                active={activeMega === item.label}
                onHoverIntent={() => scheduleOpen(item.mega ? item.label : null)}
                onClickOpen={() => item.mega && openImmediately(item.label)}
                onLeave={scheduleClose}
              />
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className={cn(
              "lg:hidden -mr-2 p-2 transition-colors",
              solid ? "text-[var(--color-ink)]" : "text-white",
            )}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {/* Mega menu */}
      <AnimatePresence mode="wait">
        {activeMega && (
          <motion.div
            key={activeMega}
            initial={{ opacity: 0, y: -18, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, y: -12, clipPath: "inset(0 0 100% 0)" }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              clipPath: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            }}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            className="absolute inset-x-0 top-full bg-[var(--color-paper)] border-t border-[var(--color-hairline)] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)] overflow-hidden"
          >
            <MegaMenu
              item={primaryNav.find((n) => n.label === activeMega)!}
              onClose={() => setActiveMega(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-[var(--color-hairline)] bg-[var(--color-paper)]"
          >
            <Container>
              <nav className="flex flex-col py-6" aria-label="Mobile">
                {primaryNav.map((item) => (
                  <MobileNavItem key={item.href} item={item} />
                ))}
                {/* Investor Portal CTA hidden for now — restore the <Link>
                  * to bring it back. */}
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// -----------------------------------------------------------------------------

function NavTrigger({
  item,
  solid,
  pathname,
  active,
  onHoverIntent,
  onClickOpen,
  onLeave,
}: {
  item: NavItem;
  solid: boolean;
  pathname: string;
  active: boolean;
  onHoverIntent: () => void;
  onClickOpen: () => void;
  onLeave: () => void;
}) {
  const isActive =
    pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

  const label = (
    <span className="relative inline-flex items-center gap-1.5 py-2">
      <span>{item.label}</span>
      {item.mega && (
        <ChevronDown
          size={10}
          strokeWidth={1.75}
          className={cn("transition-transform duration-200", active && "rotate-180")}
        />
      )}
      {/* Underline mark */}
      <span
        aria-hidden
        className={cn(
          "absolute left-0 -bottom-0.5 h-[2px] bg-[var(--color-accent)] transition-all duration-300",
          isActive || active ? "w-5" : "w-0",
        )}
      />
    </span>
  );

  const commonClass = cn(
    "font-sans text-[11.5px] font-medium uppercase tracking-[0.2em] transition-colors duration-200",
    solid
      ? "text-[var(--color-ink)]/85 hover:text-[var(--color-ink)]"
      : "text-white/85 hover:text-white",
  );

  if (item.mega) {
    return (
      <button
        type="button"
        onMouseEnter={onHoverIntent}
        onFocus={onClickOpen}
        onBlur={onLeave}
        onClick={onClickOpen}
        aria-haspopup="true"
        aria-expanded={active}
        className={commonClass}
      >
        {label}
      </button>
    );
  }

  return (
    <Link href={item.href} onMouseEnter={onLeave} className={commonClass}>
      {label}
    </Link>
  );
}

// -----------------------------------------------------------------------------

// Staggered fade-up for mega-menu content. Blurb reveals first, then columns
// cascade in with a small delay — same pace Ardian uses on their panel.
const megaItem = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function MegaMenu({ item, onClose }: { item: NavItem; onClose: () => void }) {
  if (!item.mega) return null;
  return (
    <Container>
      <motion.div
        className="py-12 md:py-16"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.06, delayChildren: 0.15 },
          },
        }}
      >
        {/* Top: section blurb + discover CTA */}
        <div className="grid gap-8 lg:grid-cols-12 items-start pb-8 md:pb-10 border-b border-[var(--color-accent)]/40">
          <motion.div variants={megaItem} className="lg:col-span-8">
            <div className="section-mark mb-4">{item.label}</div>
            <p className="font-editorial text-2xl md:text-3xl leading-[1.15] text-[var(--color-ink)] max-w-2xl">
              {item.mega.blurb}
            </p>
          </motion.div>
          <motion.div variants={megaItem} className="lg:col-span-4 lg:text-right">
            <Link
              href={item.mega.discoverHref}
              onClick={onClose}
              className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)] link-underline"
            >
              Discover <ArrowUpRight size={13} strokeWidth={1.75} />
            </Link>
          </motion.div>
        </div>

        {/* Columns + secondary CTA */}
        <div className="grid gap-10 md:gap-12 lg:grid-cols-12 pt-10">
          <div className="lg:col-span-9 grid gap-10 sm:grid-cols-3">
            {item.mega.columns.map((col) => (
              <motion.div key={col.title} variants={megaItem}>
                <div className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.24em] text-[var(--color-ink)] mb-5">
                  {col.title}
                </div>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="group inline-flex items-center gap-2 text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors text-[15px]"
                      >
                        <span className="link-underline">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={megaItem}
            className="lg:col-span-3 lg:pl-8 lg:border-l lg:border-[var(--color-hairline)] lg:text-right"
          >
            <Link
              href={item.mega.ctaHref}
              onClick={onClose}
              className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-ink)] hover:text-[var(--color-accent)] link-underline"
            >
              {item.mega.ctaLabel} <ArrowUpRight size={13} strokeWidth={1.75} />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
}

// -----------------------------------------------------------------------------

function MobileNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  if (!item.mega) {
    return (
      <Link
        href={item.href}
        className="py-4 font-sans text-sm uppercase tracking-[0.2em] text-[var(--color-ink)] border-b border-[var(--color-hairline)]"
      >
        {item.label}
      </Link>
    );
  }
  return (
    <div className="border-b border-[var(--color-hairline)]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 font-sans text-sm uppercase tracking-[0.2em] text-[var(--color-ink)]"
      >
        <span>{item.label}</span>
        <ChevronDown
          size={14}
          className={cn("transition-transform", open && "rotate-180")}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-4 space-y-4">
              {item.mega.columns.map((col) => (
                <div key={col.title}>
                  <div className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)] mb-2">
                    {col.title}
                  </div>
                  <ul className="space-y-1 pl-3">
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="block py-1.5 text-[var(--color-muted)] hover:text-[var(--color-ink)] text-sm"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
