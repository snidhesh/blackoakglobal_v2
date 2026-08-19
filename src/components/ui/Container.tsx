import { cn } from "@/lib/cn";
import type { ReactNode, HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  size?: "default" | "narrow" | "wide";
};

export function Container({ children, className, size = "default", ...rest }: ContainerProps) {
  const max =
    size === "narrow" ? "max-w-[64rem]" : size === "wide" ? "max-w-[96rem]" : "max-w-[88rem]";
  return (
    <div
      {...rest}
      className={cn(
        "mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20",
        max,
        className,
      )}
    >
      {children}
    </div>
  );
}
