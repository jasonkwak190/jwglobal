"use client";

import { useTranslations } from "next-intl";
import { Section } from "./Section";

const STAT_KEYS = ["founded", "headquarters", "scope"] as const;

export function About() {
  const t = useTranslations("about");

  return (
    <Section
      id="about"
      eyebrow={t("eyebrow")}
      title={t("title")}
      className="bg-white"
    >
      <div className="grid gap-10 md:gap-16 md:grid-cols-[1.5fr_1fr]">
        <p className="text-lg md:text-xl leading-relaxed text-[color:var(--color-ink-700)]">
          {t("body")}
        </p>

        <dl className="grid grid-cols-3 md:grid-cols-1 gap-6 md:gap-8 md:border-l md:border-[color:var(--color-line)] md:pl-10 self-start">
          {STAT_KEYS.map((key) => (
            <div key={key}>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-muted-500)]">
                {t(`stats.${key}.label`)}
              </dt>
              <dd className="mt-2 text-2xl md:text-3xl font-semibold text-[color:var(--color-navy-900)]">
                {t(`stats.${key}.value`)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
