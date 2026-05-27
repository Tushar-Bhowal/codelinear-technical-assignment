"use client";

import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { TimelineAnimation } from "@/components/ui/TimelineAnimation";
import { heroCopy } from "@/lib/data";
import { HeroVisual } from "./HeroVisual";
import { TrustedBy } from "./TrustedBy";

export function Hero() {
  const timelineRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={timelineRef}
      id="hero"
      aria-label="The new foundation of modern banking"
      className="relative isolate overflow-hidden pt-[clamp(96px,15vw,212px)] pb-[clamp(48px,8vw,96px)]"
    >
      <Container
        as="div"
        className="grid items-start gap-[clamp(2.5rem,6vw,4rem)] md:grid-cols-2"
      >
        <div className="flex min-w-0 w-full flex-col gap-[clamp(2.5rem,6vw,5rem)]">
          <div className="flex flex-col gap-[clamp(2rem,5vw,3.25rem)]">
            <div className="flex flex-col gap-4">
              <TimelineAnimation
                as="h1"
                animationNum={0}
                timelineRef={timelineRef}
                className="font-display font-medium leading-[1.15] tracking-[-0.01em] text-light text-[clamp(2.3125rem,5vw,4.1875rem)]"
              >
                {heroCopy.heading}
              </TimelineAnimation>

              <TimelineAnimation
                as="p"
                animationNum={1}
                timelineRef={timelineRef}
                className="max-w-89 font-display font-normal tracking-normal text-light opacity-80 text-[clamp(0.9375rem,1.5vw,1rem)] leading-[1.4]"
              >
                {heroCopy.body}
              </TimelineAnimation>
            </div>

            <TimelineAnimation
              animationNum={2}
              timelineRef={timelineRef}
              className="flex flex-wrap items-center gap-3"
            >
              <Button
                variant="brand"
                render={<Link href={heroCopy.primaryCta.href} />}
                nativeButton={false}
                className="inline-flex h-12.25 w-full items-center justify-center gap-2 rounded-[10px] px-12.75 py-3.75 font-mono text-[15px] font-normal uppercase leading-[1.3] tracking-normal text-fg sm:w-52.5"
              >
                {heroCopy.primaryCta.label}
              </Button>
              <Button
                variant="outline"
                render={<Link href={heroCopy.secondaryCta.href} />}
                nativeButton={false}
                className="inline-flex h-12.25 w-full items-center justify-center gap-2 rounded-[10px] border border-light bg-transparent px-12.75 py-3.75 font-mono text-[15px] font-normal uppercase leading-[1.3] tracking-normal text-light transition-colors hover:border-light hover:bg-light hover:text-bg sm:w-52.5"
              >
                {heroCopy.secondaryCta.label}
              </Button>
            </TimelineAnimation>
          </div>

          <TimelineAnimation animationNum={3} timelineRef={timelineRef}>
            <TrustedBy />
          </TimelineAnimation>
        </div>

        <TimelineAnimation
          animationNum={1}
          timelineRef={timelineRef}
          className="min-w-0 w-full"
        >
          <HeroVisual />
        </TimelineAnimation>
      </Container>
    </section>
  );
}
