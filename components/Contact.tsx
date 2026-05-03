"use client";

import { useTranslations } from "next-intl";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { Section } from "./Section";

export function Contact() {
  const t = useTranslations("contact");

  return (
    <Section
      id="contact"
      eyebrow={t("eyebrow")}
      title={t("title")}
      subtitle={t("subtitle")}
      className="bg-[color:var(--color-mist-50)]"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
        <div className="space-y-8">
          <div className="flex gap-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-navy-900)] text-white">
              <MapPin size={20} strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-muted-500)]">
                {t("addressLabel")}
              </p>
              <p className="mt-1 text-base md:text-lg leading-relaxed text-[color:var(--color-ink-900)]">
                {t("address")}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-navy-900)] text-white">
              <Mail size={20} strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-muted-500)]">
                {t("emailLabel")}
              </p>
              <a
                href={`mailto:${t("email")}`}
                className="mt-1 inline-block text-base md:text-lg text-[color:var(--color-navy-900)] underline-offset-4 hover:underline"
              >
                {t("email")}
              </a>
            </div>
          </div>

          <a
            href={`mailto:${t("email")}`}
            className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--color-navy-900)] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[color:var(--color-navy-800)]"
          >
            {t("ctaEmail")}
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-[0_1px_2px_rgba(11,35,64,0.04),0_8px_24px_-8px_rgba(11,35,64,0.12)]">
          <iframe
            title="JW GLOBAL Office Location"
            src="https://www.google.com/maps?q=172+Jungang-daero,+Dong-gu,+Busan&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 380 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </Section>
  );
}
