"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";
import { routing } from "@/i18n/routing";

type Props = {
  variant?: "light" | "dark";
};

export function LanguageToggle({ variant = "dark" }: Props) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const baseColor =
    variant === "light" ? "text-white/70" : "text-[color:var(--color-muted-500)]";
  const activeColor =
    variant === "light" ? "text-white" : "text-[color:var(--color-navy-900)]";

  return (
    <div
      className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.14em]"
      aria-label="Language"
    >
      {routing.locales.map((l, i) => (
        <span key={l} className="inline-flex items-center gap-1">
          {i > 0 && <span className={baseColor}>/</span>}
          <button
            type="button"
            disabled={isPending || l === locale}
            onClick={() => {
              startTransition(() => {
                router.replace(pathname, { locale: l });
              });
            }}
            className={`transition ${
              l === locale ? activeColor : `${baseColor} hover:${activeColor}`
            }`}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
