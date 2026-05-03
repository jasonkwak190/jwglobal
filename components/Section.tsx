"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  className,
  align = "left",
  children,
}: Props) {
  const reduce = useReducedMotion();
  const fade = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6, ease: "easeOut" as const },
      };

  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 md:py-28 ${className ?? ""}`}
    >
      <div className="container-jw">
        {(eyebrow || title || subtitle) && (
          <motion.div
            {...fade}
            className={`mb-12 md:mb-16 max-w-3xl ${
              align === "center" ? "mx-auto text-center" : ""
            }`}
          >
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-steel-700)] mb-4">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[color:var(--color-navy-900)] leading-[1.15]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base md:text-lg text-[color:var(--color-muted-500)] leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        <motion.div {...fade}>{children}</motion.div>
      </div>
    </section>
  );
}
