"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";

const NAV = [
  { id: "about", key: "about" },
  { id: "services", key: "services" },
  { id: "why", key: "whyUs" },
  { id: "contact", key: "contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const variant = scrolled ? "dark" : "light";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur shadow-[0_1px_0_rgba(11,35,64,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-jw flex h-16 md:h-20 items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="JW GLOBAL home">
          <Logo variant={variant} />
        </a>

        <nav
          className={`hidden md:flex items-center gap-8 text-sm font-medium ${
            scrolled
              ? "text-[color:var(--color-ink-700)]"
              : "text-white/85"
          }`}
        >
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="transition hover:text-[color:var(--color-signal-500)]"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageToggle variant={variant} />
          <button
            type="button"
            className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md ${
              scrolled ? "text-[color:var(--color-navy-900)]" : "text-white"
            }`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? t("menuClose") : t("menuOpen")}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[color:var(--color-line)] bg-white">
          <nav className="container-jw flex flex-col py-4 text-base font-medium text-[color:var(--color-ink-900)]">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="py-3 border-b border-[color:var(--color-line)] last:border-0"
                onClick={() => setMobileOpen(false)}
              >
                {t(item.key)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
