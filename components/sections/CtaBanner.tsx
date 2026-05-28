"use client";

import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { TimelineAnimation } from "@/components/ui/TimelineAnimation";
import { ctaBannerCopy } from "@/lib/data";

// Reused 3× on the page — props allow per-instance customisation without duplication.
type CtaBannerProps = {
  variant?: "card" | "plain";
  watermark?: string;
  // Must be unique per instance — namespaces SVG gradient IDs to prevent DOM collisions.
  id?: string;
  /** Render as a `<div>` instead of a `<section>` — for nesting inside another section. */
  embedded?: boolean;
};

export function CtaBanner({
  variant = "card",
  watermark = "CB7",
  id,
  embedded = false,
}: CtaBannerProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isCard = variant === "card";

  const content = (
    <div
      className={
        isCard
          ? "relative flex flex-col items-stretch gap-10 px-8 py-16 sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-28"
          : "relative flex flex-col items-stretch gap-10 lg:flex-row lg:items-center lg:justify-between"
      }
    >
      <div className="flex max-w-152 flex-col gap-8">
        <TimelineAnimation
          as="h2"
          animationNum={0}
          timelineRef={sectionRef}
          className="font-display font-normal text-display leading-[1.2] tracking-[-0.01em] text-light"
        >
          {ctaBannerCopy.heading}
        </TimelineAnimation>

        <TimelineAnimation
          as="p"
          animationNum={1}
          timelineRef={sectionRef}
          className="max-w-115.75 font-display font-normal text-body leading-[1.3] tracking-normal text-light"
        >
          {ctaBannerCopy.body}
        </TimelineAnimation>
      </div>

      <TimelineAnimation
        animationNum={2}
        timelineRef={sectionRef}
        className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-10"
      >
        <Button
          variant="outline"
          render={<Link href={ctaBannerCopy.secondaryCta.href} />}
          nativeButton={false}
          className="inline-flex h-12.25 w-52 items-center justify-center gap-2 rounded-[10px] border border-light bg-transparent px-14.75 py-3.75 font-mono text-[15px] font-normal uppercase leading-[1.3] tracking-normal text-light transition-colors hover:bg-light hover:text-bg"
        >
          {ctaBannerCopy.secondaryCta.label}
        </Button>
        <Button
          variant="brand"
          render={<Link href={ctaBannerCopy.primaryCta.href} />}
          nativeButton={false}
          className="inline-flex h-12.25 w-52.5 items-center justify-center gap-2 rounded-[10px] px-12.75 py-3.75 font-mono text-[15px] font-normal uppercase leading-[1.3] tracking-normal text-fg"
        >
          {ctaBannerCopy.primaryCta.label}
        </Button>
      </TimelineAnimation>
    </div>
  );

  const Wrapper = embedded ? "div" : "section";
  const wrapperClass = embedded
    ? "relative isolate overflow-hidden"
    : "relative isolate overflow-hidden bg-bg py-24 lg:py-28";

  return (
    <Wrapper
      ref={sectionRef as React.RefObject<HTMLDivElement & HTMLElement>}
      id={id}
      aria-label="Call to action"
      className={wrapperClass}
    >
      <Container as="div" className="relative">
        {isCard ? (
          <div
            className="relative isolate overflow-hidden rounded-[27px]"
            style={{
              background:
                "linear-gradient(143deg, #021E2A 0%, #001F22 63.08%)",
              minHeight: "427px",
            }}
          >
            <svg
              aria-hidden
              className="pointer-events-none absolute opacity-50"
              style={{
                top: "-161px",
                left: "224px",
                width: "1141px",
                height: "687px",
              }}
              viewBox="0 0 1141 687"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id={`cta-brand-${id ?? "default"}`}
                  gradientUnits="objectBoundingBox"
                  x1="-0.0959"
                  y1="0.3231"
                  x2="1.0959"
                  y2="0.6769"
                >
                  <stop offset="0%" stopColor="rgba(0, 180, 253, 0.5)" />
                  <stop offset="100%" stopColor="rgba(0, 58, 206, 0.5)" />
                </linearGradient>
                <linearGradient
                  id={`cta-fade-${id ?? "default"}`}
                  gradientUnits="objectBoundingBox"
                  x1="0.1276"
                  y1="1.0815"
                  x2="0.8724"
                  y2="-0.0815"
                >
                  <stop offset="30.8%" stopColor="#02171F" />
                  <stop offset="77.46%" stopColor="rgba(0, 0, 0, 0)" />
                </linearGradient>
              </defs>
              <text
                x="0"
                y="503"
                fontWeight="500"
                fontSize="572.63"
                letterSpacing="0"
                fill="none"
                strokeWidth="1.59"
                stroke={`url(#cta-brand-${id ?? "default"})`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {watermark}
              </text>
              <text
                x="0"
                y="503"
                fontWeight="500"
                fontSize="572.63"
                letterSpacing="0"
                fill="none"
                strokeWidth="1.59"
                stroke={`url(#cta-fade-${id ?? "default"})`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {watermark}
              </text>
            </svg>

            {content}
          </div>
        ) : (
          content
        )}
      </Container>
    </Wrapper>
  );
}
