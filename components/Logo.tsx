import Image from "next/image";

type Props = {
  variant?: "light" | "dark";
  className?: string;
};

/**
 * Brand mark + wordmark.
 * - dark variant: light backgrounds (scrolled header, footer dark wraps it
 *   in a white card via `light` variant)
 * - light variant: dark backgrounds (transparent hero header, footer)
 *   wraps the symbol in a white tile so the JPG's background blends in.
 */
export function Logo({ variant = "dark", className }: Props) {
  const onDark = variant === "light";
  const wordColor = onDark
    ? "text-white"
    : "text-[color:var(--color-navy-900)]";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <span
        className={`inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-md ${
          onDark ? "bg-white" : ""
        }`}
      >
        <Image
          src="/brand/logo.jpg"
          alt="JW GLOBAL"
          width={36}
          height={36}
          priority
          className="h-7 w-auto object-contain"
        />
      </span>
      <span
        className={`font-semibold tracking-tight text-lg sm:text-xl ${wordColor}`}
      >
        JW <span className="font-light">GLOBAL</span>
      </span>
    </span>
  );
}
