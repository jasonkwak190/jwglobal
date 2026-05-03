"use client";

import { useTranslations } from "next-intl";
import { Ship, FileCheck2, Truck, Boxes } from "lucide-react";
import { Section } from "./Section";

const ITEMS = [
  { key: "forwarding", Icon: Ship },
  { key: "customs", Icon: FileCheck2 },
  { key: "inland", Icon: Truck },
  { key: "special", Icon: Boxes },
] as const;

export function Services() {
  const t = useTranslations("services");

  return (
    <Section
      id="services"
      eyebrow={t("eyebrow")}
      title={t("title")}
      subtitle={t("subtitle")}
      className="bg-[color:var(--color-mist-50)]"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map(({ key, Icon }) => (
          <article
            key={key}
            className="group relative overflow-hidden rounded-2xl bg-white p-7 shadow-[0_1px_2px_rgba(11,35,64,0.04),0_8px_24px_-8px_rgba(11,35,64,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_8px_rgba(11,35,64,0.08),0_24px_40px_-12px_rgba(11,35,64,0.18)]"
          >
            <span
              aria-hidden
              className="absolute left-0 top-0 h-full w-1 bg-[color:var(--color-signal-500)] scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"
            />
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-navy-900)] text-white">
              <Icon size={22} strokeWidth={1.75} />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[color:var(--color-navy-900)]">
              {t(`items.${key}.title`)}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted-500)]">
              {t(`items.${key}.desc`)}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
