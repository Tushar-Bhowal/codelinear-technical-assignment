"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { LearnMoreLink } from "@/components/ui/LearnMoreLink";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { TimelineAnimation } from "@/components/ui/TimelineAnimation";
import { solutionCards } from "@/lib/data";

export function Solutions() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="solutions"
      aria-label="Solutions"
      className="relative isolate overflow-hidden bg-bg py-12"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-[67%] top-[38%] h-[557px] w-[557px] rounded-full opacity-30 blur-[100px]"
        style={{
          background: "linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)",
        }}
      />

      <Container
        as="div"
        className="grid items-start gap-12 lg:grid-cols-[2fr_3fr] lg:gap-x-[clamp(3rem,11vw,13.5rem)]"
      >
        <div className="flex flex-col gap-12">
          <TimelineAnimation
            as="h2"
            animationNum={0}
            timelineRef={sectionRef}
            className="font-display font-normal text-h2 leading-[1.2] tracking-[-0.01em] text-light"
          >
            All of our solutions are tailor-made to your needs
          </TimelineAnimation>

          <TimelineAnimation animationNum={1} timelineRef={sectionRef}>
            <Button
              variant="brand"
              render={<Link href="#contact" />}
              nativeButton={false}
              className="inline-flex h-12.25 w-full items-center justify-center gap-2 rounded-[10px] px-12.75 py-3.75 font-mono text-[15px] font-normal uppercase leading-[1.3] tracking-normal text-fg sm:w-52.5"
            >
              Request Demo
            </Button>
          </TimelineAnimation>
        </div>

        <TimelineAnimation
          animationNum={2}
          timelineRef={sectionRef}
          className="grid grid-cols-1 gap-x-19 gap-y-13 sm:grid-cols-2"
        >
          {solutionCards.map((card) => (
            <article key={card.slug} className="flex flex-col gap-6.5">
              <div className="flex items-center justify-between gap-4 pr-10">
                <Image
                  src={card.icon}
                  alt=""
                  width={card.iconWidth}
                  height={49}
                  unoptimized
                  className="shrink-0"
                  style={{ height: "49px", width: "auto" }}
                />
                {card.nbfc ? (
                  <span className="font-mono text-small font-normal uppercase tracking-normal leading-[1.3] text-light opacity-60">
                    NBFC
                  </span>
                ) : null}
              </div>

              <div className="flex flex-col gap-8">
                <h3 className="font-display font-normal text-title leading-[1.2] text-light">
                  {card.title}
                </h3>
                <p className="font-display font-normal text-body leading-[1.3] text-light opacity-70">
                  {card.body}
                </p>
              </div>

              <LearnMoreLink href="#" label="learn more" />
            </article>
          ))}
        </TimelineAnimation>
      </Container>
    </section>
  );
}
