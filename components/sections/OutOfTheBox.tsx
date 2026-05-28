"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { LearnMoreLink } from "@/components/ui/LearnMoreLink";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { TimelineAnimation } from "@/components/ui/TimelineAnimation";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { outOfTheBoxCopy } from "@/lib/data";

export function OutOfTheBox() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="out-of-the-box"
      aria-label="Digital banking out-of-the-box"
      className="relative isolate overflow-hidden bg-light py-20 lg:py-28"
    >
      <Image
        src="/assets/out-of-the-box/Vector.png"
        alt=""
        aria-hidden
        width={480}
        height={1246}
        unoptimized
        className="pointer-events-none absolute left-0 select-none"
        style={{ top: "418px", height: "1246px", width: "480px" }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full opacity-10 blur-[100px]"
        style={{
          bottom: "-200px",
          right: "-200px",
          width: "779px",
          height: "779px",
          background:
            "linear-gradient(106.53deg, #00B4FD 0%, #003ACE 100%)",
        }}
      />

      <svg
        aria-hidden
        className="pointer-events-none absolute opacity-20"
        style={{
          top: "957.28px",
          left: "886.92px",
          width: "861px",
          height: "1829px",
        }}
        viewBox="0 0 861 1829"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="ootb-7-brand"
            gradientUnits="objectBoundingBox"
            x1="-0.0959"
            y1="0.3231"
            x2="1.0959"
            y2="0.6769"
          >
            <stop offset="0%" stopColor="#00B4FD" />
            <stop offset="100%" stopColor="#003ACE" />
          </linearGradient>
        </defs>
        <text
          x="0"
          y="1340"
          fontWeight="500"
          fontSize="1524.1"
          letterSpacing="0"
          fill="none"
          strokeWidth="1"
          stroke="url(#ootb-7-brand)"
          style={{ fontFamily: "var(--font-display)" }}
        >
          7
        </text>
      </svg>

      <svg
        aria-hidden
        className="pointer-events-none absolute opacity-50"
        style={{
          top: "-67px",
          left: "277px",
          width: "744px",
          height: "687px",
        }}
        viewBox="0 0 744 687"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="ootb-brand"
            gradientUnits="objectBoundingBox"
            x1="-0.0959"
            y1="0.3231"
            x2="1.0959"
            y2="0.6769"
          >
            <stop offset="0%" stopColor="rgba(0, 180, 253, 0.5)" />
            <stop offset="100%" stopColor="rgba(0, 58, 206, 0.5)" />
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
          stroke="url(#ootb-brand)"
          style={{ fontFamily: "var(--font-display)" }}
        >
          N7
        </text>
      </svg>

      <Container
        as="div"
        className="relative grid gap-y-20 lg:grid-cols-[439px_minmax(0,652px)] lg:items-start lg:justify-between lg:gap-x-16"
      >
        <div className="flex max-w-110 flex-col gap-9">
          <div className="flex flex-col gap-4">
            <TimelineAnimation
              as="h2"
              animationNum={0}
              timelineRef={sectionRef}
              className="font-display font-normal text-display leading-[1.2] tracking-[-0.01em] text-fg-dark opacity-95"
            >
              {outOfTheBoxCopy.heading}
            </TimelineAnimation>

            <TimelineAnimation
              as="p"
              animationNum={1}
              timelineRef={sectionRef}
              className="max-w-95 font-display font-normal text-body leading-[1.3] tracking-normal text-fg-dark opacity-70"
            >
              {outOfTheBoxCopy.body}
            </TimelineAnimation>
          </div>

          <TimelineAnimation
            animationNum={2}
            timelineRef={sectionRef}
            className="flex flex-col items-start gap-7"
          >
            <Button
              variant="brand"
              render={<Link href={outOfTheBoxCopy.primaryCta.href} />}
              nativeButton={false}
              className="inline-flex h-12.25 w-full items-center justify-center gap-2 rounded-[10px] px-12.75 py-3.75 font-mono text-[15px] font-normal uppercase leading-[1.3] tracking-normal text-fg sm:w-52.5"
            >
              {outOfTheBoxCopy.primaryCta.label}
            </Button>

            <LearnMoreLink
              href={outOfTheBoxCopy.learnMore.href}
              label="learn more"
            />
          </TimelineAnimation>
        </div>

        <div className="flex flex-col gap-20 lg:gap-27.5">
          {outOfTheBoxCopy.features.map((feature, idx) => (
            <FeatureRow
              key={feature.title}
              feature={feature}
              reverse={idx === 1}
              sectionRef={sectionRef}
              animationNum={3 + idx}
            />
          ))}
        </div>
      </Container>

      {/* Embedded CtaBanner — Frame 48 in figma sits inside the OutOfTheBox section */}
      <div className="mt-20 lg:mt-28">
        <CtaBanner id="cta-2" variant="card" embedded />
      </div>
    </section>
  );
}

function FeatureRow({
  feature,
  reverse,
  sectionRef,
  animationNum,
}: {
  feature: (typeof outOfTheBoxCopy.features)[number];
  reverse: boolean;
  sectionRef: React.RefObject<HTMLElement | null>;
  animationNum: number;
}) {
  return (
    <TimelineAnimation
      animationNum={animationNum}
      timelineRef={sectionRef}
      className={`grid items-center gap-12 lg:gap-x-20 ${
        reverse
          ? "lg:grid-cols-[minmax(0,1fr)_268px]"
          : "lg:grid-cols-[268px_minmax(0,1fr)]"
      }`}
    >
      <div
        className={`relative mx-auto w-full max-w-67 ${
          reverse ? "lg:order-2" : ""
        }`}
      >
        <div className="relative aspect-268/543 w-full">
          <Image
            src={feature.image.src}
            alt={feature.image.alt}
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 268px, 60vw"
          />
        </div>
      </div>

      <div
        className={`flex max-w-76 flex-col gap-6 ${reverse ? "lg:order-1" : ""}`}
      >
        <div className="flex flex-col gap-4">
          <h3 className="font-display text-body font-medium leading-[1.3] text-fg-dark">
            {feature.title}
          </h3>
          <p className="font-display text-body font-normal leading-[1.3] tracking-normal text-fg-dark opacity-70">
            {feature.body}
          </p>
        </div>
        <ul className="flex flex-col gap-2.75">
          {feature.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-1.25">
              <span
                aria-hidden
                className="inline-flex h-7.75 w-7.5 shrink-0 items-center justify-center"
              >
                <span
                  className="inline-flex h-4.75 w-4.75 items-center justify-center rounded-full text-fg"
                  style={{
                    background:
                      "linear-gradient(106.53deg, #00B4FD 0%, #003ACE 81.58%)",
                  }}
                >
                  <Check size={13} strokeWidth={2.5} />
                </span>
              </span>
              <span className="pt-1 font-display text-body font-normal leading-[1.3] tracking-normal text-fg-dark">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </TimelineAnimation>
  );
}
