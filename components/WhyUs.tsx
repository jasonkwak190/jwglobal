"use client";

import { useTranslations } from "next-intl";
import { ShieldCheck, Wrench, Network } from "lucide-react";
import { Section } from "./Section";

const ITEMS = [
  { key: "trust", Icon: ShieldCheck },
  { key: "expertise", Icon: Wrench },
  { key: "network", Icon: Network },
] as const;

export function WhyUs() {
  const t = useTranslations("why");

  return (
    <Section id="why" eyebrow={t("eyebrow")} title={t("title")}>
      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {ITEMS.map(({ key, Icon }) => (
          <div key={key} className="flex flex-col">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-signal-500)] text-[color:var(--color-signal-500)]">
              <Icon size={20} strokeWidth={1.75} />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-[color:var(--color-navy-900)]">
              {t(`items.${key}.title`)}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[color:var(--color-ink-700)]">
              {t(`items.${key}.desc`)}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
