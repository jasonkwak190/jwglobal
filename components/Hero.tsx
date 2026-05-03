"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight, ArrowDown } from "lucide-react";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] flex items-end overflow-hidden bg-[color:var(--color-navy-950)] text-white"
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2400&q=80"
        alt="Container ship at port"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-navy-950)] via-[color:var(--color-navy-950)]/85 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-navy-950)] via-transparent to-[color:var(--color-navy-950)]/40" />
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-backdrop opacity-60" />

      <div className="container-jw relative z-10 pb-20 md:pb-28 pt-32 w-full">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xs sm:text-sm uppercase tracking-[0.24em] text-[color:var(--color-signal-400)] mb-6"
        >
          {t("eyebrow")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="max-w-3xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight"
        >
          {t("title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-white/75"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--color-signal-500)] px-7 py-3.5 text-sm font-semibold text-[color:var(--color-navy-950)] transition hover:bg-[color:var(--color-signal-400)]"
          >
            {t("ctaPrimary")}
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {t("ctaSecondary")}
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/60"
      >
        {t("scrollHint")}
        <ArrowDown size={14} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
