import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/services";
import { Reveal } from "@/components/ui/Reveal";

export function ServiceTiles() {
  return (
    <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-6 md:mx-0 md:grid md:grid-cols-2 md:gap-px md:overflow-visible md:border md:border-[var(--color-hairline)] md:bg-[var(--color-hairline)] md:px-0 md:pb-0 md:snap-none lg:grid-cols-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {services.map((service, i) => (
        <Reveal
          key={service.slug}
          delay={i * 0.05}
          className="group shrink-0 w-[82vw] max-w-[420px] snap-start border border-[var(--color-hairline)] bg-[var(--color-paper)] md:w-auto md:shrink md:max-w-none md:snap-align-none md:border-0"
        >
          <Link
            href={`/what-we-do/${service.slug}`}
            className="flex h-full flex-col"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover grayscale-[15%] transition-all duration-[900ms] ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-[var(--color-ink)]/10 transition-opacity duration-500 group-hover:bg-[var(--color-ink)]/0" />
            </div>
            <div className="flex flex-1 flex-col justify-between p-8 md:p-10 lg:p-12">
              <div>
                <div className="font-editorial text-xs uppercase tracking-[0.28em] text-[var(--color-muted)] mb-6 tabular">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-editorial text-2xl md:text-3xl leading-[1.1] text-[var(--color-ink)]">
                  {service.title}
                </h3>
              </div>
              <div className="mt-10 flex items-center gap-3 text-[var(--color-ink)] transition-transform duration-300 group-hover:translate-x-1">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em]">
                  Explore
                </span>
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </div>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
