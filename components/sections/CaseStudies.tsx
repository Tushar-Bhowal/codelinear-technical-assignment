"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Zap } from "lucide-react";
import { LearnMoreLink } from "@/components/ui/LearnMoreLink";
import { Container } from "@/components/ui/Container";
import { TimelineAnimation } from "@/components/ui/TimelineAnimation";
import { caseStudiesCopy, type CaseStudyCard } from "@/lib/data";

const STACK_POSITIONS: Record<
  number,
  { x: number; scale: number; opacity: number; zIndex: number }
> = {
  0: { x: 0, scale: 1, opacity: 1, zIndex: 30 },
  1: { x: 100, scale: 0.92, opacity: 0.5, zIndex: 20 },
  2: { x: -100, scale: 0.92, opacity: 0.5, zIndex: 20 },
};

export function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const cards = caseStudiesCopy.cards;
  const total = cards.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      aria-label="Case Studies"
      className="relative isolate overflow-hidden bg-bg py-20 lg:py-28"
    >
      <Container as="div" className="flex flex-col items-center gap-14">
        <TimelineAnimation
          as="h2"
          animationNum={0}
          timelineRef={sectionRef}
          className="text-center font-display font-normal text-h1 leading-[1.2] tracking-[-0.01em] text-light sm:text-display"
        >
          {caseStudiesCopy.heading}
        </TimelineAnimation>

        <TimelineAnimation
          animationNum={1}
          timelineRef={sectionRef}
          className="relative w-full"
          role="region"
          aria-roledescription="carousel"
          aria-label="Case studies"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
          }}
        >
          <div className="relative lg:hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={cards[active].slug}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -24, scale: 0.97 }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <CaseStudyCardView card={cards[active]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative mx-auto hidden w-full max-w-253.75 lg:block">
            <div className="aspect-1015/438 w-full" />

            {cards.map((card, i) => {
              const offset = ((i - active) % total + total) % total;
              const pos = STACK_POSITIONS[offset] ?? STACK_POSITIONS[0];

              return (
                <motion.div
                  key={card.slug}
                  className="absolute inset-0"
                  animate={{
                    x: `${pos.x}px`,
                    scale: pos.scale,
                    opacity: pos.opacity,
                  }}
                  style={{ zIndex: pos.zIndex }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  aria-hidden={i !== active}
                >
                  <CaseStudyCardView card={card} />
                </motion.div>
              );
            })}
          </div>
        </TimelineAnimation>

        <TimelineAnimation
          animationNum={2}
          timelineRef={sectionRef}
          className="flex w-full flex-col items-center gap-6 sm:grid sm:grid-cols-[1fr_auto_1fr]"
        >
          <div className="hidden sm:block" />

          <div className="flex items-center gap-6 sm:gap-8">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous case study"
              className="inline-flex h-10.5 w-10.5 shrink-0 items-center justify-center rounded-full border border-brand text-brand transition-colors hover:bg-brand hover:text-bg"
            >
              <ArrowLeft size={16} strokeWidth={1.5} />
            </button>

            <Dots count={total} active={active} onSelect={setActive} />

            <button
              type="button"
              onClick={next}
              aria-label="Next case study"
              className="inline-flex h-10.5 w-10.5 shrink-0 items-center justify-center rounded-full border border-brand text-brand transition-colors hover:bg-brand hover:text-bg"
            >
              <ArrowRight size={16} strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex justify-center sm:justify-end">
            <LearnMoreLink
              href={caseStudiesCopy.viewAll.href}
              label={caseStudiesCopy.viewAll.label}
            />
          </div>
        </TimelineAnimation>
      </Container>
    </section>
  );
}

function Dots({
  count,
  active,
  onSelect,
}: {
  count: number;
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex items-center gap-2" role="tablist">
      {Array.from({ length: count }, (_, i) => {
        const isActive = i === active;
        return (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={`Go to case study ${i + 1}`}
            onClick={() => onSelect(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: isActive ? "38px" : "12px",
              height: "12px",
              background: isActive ? "#0B4B63" : "transparent",
              border: isActive ? "none" : "1px solid #0B4B63",
            }}
          />
        );
      })}
    </div>
  );
}

function CaseStudyCardView({ card }: { card: CaseStudyCard }) {
  return (
    <article
      className="grid w-full grid-rows-[auto_1fr] gap-6 rounded-[18px] p-6 sm:p-8 lg:h-full lg:grid-cols-[422px_minmax(0,1fr)] lg:grid-rows-1 lg:items-center lg:gap-x-14 lg:p-10"
      style={{
        background:
          "linear-gradient(var(--color-bg-2), var(--color-bg-2)) padding-box, linear-gradient(106.53deg, rgba(0,180,253,0.3) 0%, rgba(0,58,206,0.3) 100%) border-box",
        border: "1px solid transparent",
      }}
    >
      <div
        className="relative aspect-square w-full max-h-72 overflow-hidden rounded-[11.43px] lg:max-h-none"
        style={{ background: "#07193C" }}
      >
        <Image
          src={card.illustration}
          alt=""
          fill
          className="object-contain p-8 sm:p-10 lg:p-12"
          sizes="(min-width: 1024px) 422px, (min-width: 640px) 60vw, 80vw"
        />
      </div>

      <div className="flex min-w-0 flex-col gap-4 sm:gap-6">
        <p className="font-mono text-[15px] font-normal uppercase leading-[1.3] tracking-normal text-brand">
          {card.category}
        </p>
        <h3 className="font-display font-normal text-h3 leading-[1.2] tracking-[-0.01em] text-light sm:text-h2 lg:text-h1">
          {card.title}
        </h3>
        {card.brand ? (
          <div className="flex items-center gap-3 text-muted-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted-2/20">
              <Zap size={16} strokeWidth={2} fill="currentColor" />
            </span>
            <span className="font-display text-title leading-[1.2]">
              {card.brand}
            </span>
          </div>
        ) : (
          <p className="max-w-90 font-display text-body font-normal leading-[1.4] text-light opacity-70">
            {card.blurb}
          </p>
        )}
        <Link
          href={card.href}
          className="mt-2 inline-flex h-12.25 w-full items-center justify-center rounded-[10px] border border-light bg-transparent px-9 font-mono text-[15px] font-normal uppercase leading-[1.3] tracking-normal text-light transition-colors hover:bg-light hover:text-bg sm:w-auto"
        >
          read more
        </Link>
      </div>
    </article>
  );
}
