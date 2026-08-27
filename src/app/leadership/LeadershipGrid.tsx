"use client";

import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Linkedin, X } from "lucide-react";
import type { TeamGroup, TeamMember } from "@/content/team";

function excerpt(bio: string[], max = 140) {
  const text = bio.join(" ").replace(/\s+/g, " ").trim();
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

export function LeadershipGrid({ groups }: { groups: TeamGroup[] }) {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  useEffect(() => {
    if (!selected) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <section className="py-24 md:py-32 bg-[var(--color-paper)]">
      <div className="container mx-auto px-6">
        <div className="space-y-24 md:space-y-28">
          {groups.map((group) => (
            <div key={group.title}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 flex items-center gap-4"
              >
                <span className="block h-px w-6 bg-[var(--color-accent)]" />
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  {group.title}
                </span>
                <span className="block h-px flex-1 bg-[var(--color-hairline)]" />
              </motion.div>

              <div className="flex flex-wrap justify-center gap-5">
                {group.members.map((m, i) => (
                  <Fragment key={m.slug}>
                    <MemberCard
                      member={m}
                      delay={i * 0.06}
                      onOpen={() => setSelected(m)}
                    />
                    {group.title === "Advisory Board" && i === 3 && (
                      <div aria-hidden className="hidden md:block basis-full w-0" />
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <MemberModal member={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function MemberCard({
  member,
  delay,
  onOpen,
}: {
  member: TeamMember;
  delay: number;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col text-left bg-[var(--color-paper)] border border-[var(--color-hairline)] hover:border-[var(--color-ink)] transition-all duration-300 hover:shadow-xl overflow-hidden w-[calc(50%-0.625rem)] sm:w-[calc(33.333%-0.834rem)] md:w-[calc(25%-0.938rem)]"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[var(--color-paper-soft)]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover grayscale-[10%] transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--color-ink)]/75 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-3">
          <div className="flex items-center gap-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-paper)] leading-tight">
              {member.name}
            </h3>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on LinkedIn`}
                className="text-[var(--color-paper)]/70 hover:text-[var(--color-paper)] transition-colors shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                <Linkedin size={12} strokeWidth={1.75} />
              </a>
            )}
          </div>
          {member.title && (
            <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-[var(--color-paper)]/85 leading-snug">
              {member.title}
            </p>
          )}
          <p className="mt-0.5 text-[9px] uppercase tracking-[0.2em] text-[var(--color-paper)]/60">
            {member.region}
          </p>
        </div>
      </div>
      <div className="h-[2px] bg-[var(--color-accent)] w-0 group-hover:w-full transition-all duration-500" />
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-xs leading-relaxed font-light text-[var(--color-muted)] flex-grow">
          {excerpt(member.bio)}
        </p>
        <span className="mt-3 inline-flex items-center text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
          Read full profile
        </span>
      </div>
    </motion.button>
  );
}

function MemberModal({
  member,
  onClose,
}: {
  member: TeamMember;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-8 md:px-8"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-[var(--color-ink)]/60 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-5xl bg-[var(--color-paper)] shadow-2xl"
      >
        <div className="h-1 bg-[var(--color-accent)]" />
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr]">
          <div className="relative h-[38vh] md:h-auto md:aspect-auto md:h-full bg-[var(--color-paper-soft)]">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(min-width: 768px) 320px, 100vw"
              className="object-cover object-top md:object-center"
            />
          </div>
          <div className="p-6 md:p-12 max-h-[52vh] md:max-h-[70vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="font-editorial text-3xl md:text-4xl leading-tight text-[var(--color-ink)]">
                  {member.name}
                </h3>
                {member.title && (
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-ink)]">
                    {member.title}
                  </p>
                )}
                <p className="mt-2 text-[10.5px] uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  {member.region}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close profile"
                className="text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors p-1"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
            <div className="h-px w-12 bg-[var(--color-accent)] mb-8" />
            <div className="space-y-5 text-[var(--color-ink)]/85 leading-relaxed">
              {member.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {member.linkedin && (
              <Link
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 border-b border-[var(--color-accent)] pb-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)] hover:text-[var(--color-ink)] hover:border-[var(--color-ink)] transition-colors"
              >
                View on LinkedIn <Linkedin size={13} strokeWidth={1.75} />
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
