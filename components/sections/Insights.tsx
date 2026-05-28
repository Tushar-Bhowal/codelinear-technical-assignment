"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { LearnMoreLink } from "@/components/ui/LearnMoreLink";
import { Container } from "@/components/ui/Container";
import { TimelineAnimation } from "@/components/ui/TimelineAnimation";
import { insightsCopy, type InsightCard } from "@/lib/data";

export function Insights() {
  const sectionRef = useRef<HTMLElement>(null);

  const [featured, ...rest] = insightsCopy.cards;

  return (
    <section
      ref={sectionRef}
      id="insights"
      aria-label="Insights"
      className="relative isolate overflow-hidden bg-bg py-20 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[10%] left-[15%] h-139.25 w-139.25 rounded-full opacity-20 blur-[100px]"
        style={{
          background: "linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)",
        }}
      />

      <Container
        as="div"
        className="relative grid items-start gap-12 lg:grid-cols-[2fr_3fr] lg:gap-x-21"
      >
        <div className="flex flex-col gap-9">
          <TimelineAnimation
            as="h2"
            animationNum={0}
            timelineRef={sectionRef}
            className="font-display font-normal text-h2 leading-[1.2] tracking-[-0.01em] text-light max-w-115.75"
          >
            {insightsCopy.heading}
          </TimelineAnimation>

          <TimelineAnimation
            animationNum={1}
            timelineRef={sectionRef}
            className="inline-flex"
          >
            <Link
              href="#insights"
              className="inline-flex h-12.25 items-center justify-center rounded-[10px] border border-light bg-transparent px-9 font-mono text-[15px] font-normal uppercase leading-[1.3] tracking-normal text-light transition-colors hover:bg-light hover:text-bg"
            >
              {insightsCopy.eyebrow}
            </Link>
          </TimelineAnimation>
        </div>

        <TimelineAnimation
          animationNum={2}
          timelineRef={sectionRef}
          className="flex flex-col gap-8"
        >
          <FeaturedInsightCard card={featured} />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {rest.map((card) => (
              <TextInsightCard key={card.slug} card={card} />
            ))}
          </div>

          <div className="flex justify-end pt-2">
            <LearnMoreLink
              href={insightsCopy.viewAll.href}
              label={insightsCopy.viewAll.label}
            />
          </div>
        </TimelineAnimation>
      </Container>
    </section>
  );
}

function FeaturedInsightCard({ card }: { card: InsightCard }) {
  return (
    <article className="grid grid-cols-1 gap-0 overflow-hidden rounded-md bg-bg-2 sm:grid-cols-2">
      {card.illustration ? (
        <div className="relative aspect-square w-full bg-brand-navy/40 p-8 sm:aspect-auto sm:min-h-56">
          <Image
            src={card.illustration}
            alt=""
            fill
            className="object-contain p-10"
            sizes="(min-width: 640px) 300px, 90vw"
          />
        </div>
      ) : null}
      <CardBody card={card} className="p-8" />
    </article>
  );
}

function TextInsightCard({ card }: { card: InsightCard }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-md bg-bg-2">
      <CardBody card={card} className="p-7" />
    </article>
  );
}

function CardBody({ card, className = "" }: { card: InsightCard; className?: string }) {
  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      <p className="font-mono text-label uppercase text-brand">{card.category}</p>
      <h3 className="font-display text-h3 leading-[1.2] text-light max-w-72.5">
        {card.title}
      </h3>
      <div className="flex items-center gap-4 font-display text-small text-light opacity-70">
        <span>{card.author}</span>
        <span>{card.date}</span>
      </div>
      <Link
        href={card.href}
        className="mt-2 inline-flex h-12.25 items-center justify-center rounded-[10px] border border-light bg-transparent px-6 font-mono text-[15px] font-normal uppercase leading-[1.3] tracking-normal text-light transition-colors hover:bg-light hover:text-bg"
      >
        read more
      </Link>
    </div>
  );
}
