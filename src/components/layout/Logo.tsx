import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  tone?: "ink" | "paper";
  size?: "sm" | "md" | "lg";
};

// Logo asset is 2016×531 (~3.79:1). It ships white-on-transparent, so we
// invert it for light backgrounds and use it native on dark surfaces.
const NATIVE_ASPECT = 2016 / 531;

const sizeMap = {
  sm: 36, // header on mobile
  md: 46, // header on desktop
  lg: 58, // footer / large moments
};

export function Logo({ className, tone = "ink", size = "md" }: Props) {
  const heightPx = sizeMap[size];
  const widthPx = Math.round(heightPx * NATIVE_ASPECT);

  return (
    <Link
      href="/"
      aria-label="BlackOak Global — home"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src="/brand/blackoak-logo-white.png"
        alt="BlackOak Global"
        width={widthPx}
        height={heightPx}
        priority
        className={cn(
          "block h-auto w-auto object-contain",
          // Invert white → near-black for use on paper. On ink surfaces the
          // asset already reads correctly (white on dark), no filter needed.
          tone === "ink" && "[filter:invert(1)_brightness(0.05)]",
        )}
        style={{ height: heightPx, width: widthPx }}
      />
    </Link>
  );
}
