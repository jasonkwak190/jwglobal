"use client";

import { useTranslations } from "next-intl";
import { Logo } from "./Logo";

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[color:var(--color-navy-950)] text-white/80">
      <div className="container-jw py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">
              {t("contact.addressLabel")}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/85">
              {t("contact.address")}
            </p>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">
              {t("contact.emailLabel")}
            </p>
            <a
              href={`mailto:${t("contact.email")}`}
              className="mt-3 inline-block text-sm text-white/85 underline-offset-4 hover:text-[color:var(--color-signal-400)] hover:underline"
            >
              {t("contact.email")}
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/55">
          <p>
            © {year} {t("footer.companyName")}. {t("footer.rights")}
          </p>
          <p className="font-mono tracking-wide">JW GLOBAL · BUSAN, KOREA</p>
        </div>
      </div>
    </footer>
  );
}
