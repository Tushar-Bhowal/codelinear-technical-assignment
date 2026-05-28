"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { LearnMoreLink } from "@/components/ui/LearnMoreLink";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { TimelineAnimation } from "@/components/ui/TimelineAnimation";
import { cloudBankingCopy, heroCopy } from "@/lib/data";

export function CloudBanking() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="cloud-banking"
      aria-label="Cloud-based core banking"
      className="relative isolate overflow-hidden bg-bg py-20"
    >
      <svg
        aria-hidden
        className="pointer-events-none absolute opacity-50"
        style={{
          top: "-2.25px",
          left: "-163.31px",
          width: "1141px",
          height: "687px",
        }}
        viewBox="0 0 1141 687"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="cb7-brand"
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
            id="cb7-fade"
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
          stroke="url(#cb7-brand)"
          style={{ fontFamily: "var(--font-display)" }}
        >
          CB7
        </text>
        <text
          x="0"
          y="503"
          fontWeight="500"
          fontSize="572.63"
          letterSpacing="0"
          fill="none"
          strokeWidth="1.59"
          stroke="url(#cb7-fade)"
          style={{ fontFamily: "var(--font-display)" }}
        >
          CB7
        </text>
      </svg>

      <Container
        as="div"
        className="relative grid items-center gap-12 lg:grid-cols-[608px_minmax(0,1fr)] lg:gap-x-21"
      >
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-4">
            <TimelineAnimation
              as="h2"
              animationNum={0}
              timelineRef={sectionRef}
              className="font-display font-normal text-display leading-[1.2] tracking-[-0.01em] text-light"
            >
              {cloudBankingCopy.heading}
            </TimelineAnimation>

            <TimelineAnimation
              as="p"
              animationNum={1}
              timelineRef={sectionRef}
              className="max-w-81.75 font-display font-normal text-body leading-[1.3] text-light opacity-80"
            >
              {cloudBankingCopy.body}
            </TimelineAnimation>
          </div>

          <TimelineAnimation
            animationNum={2}
            timelineRef={sectionRef}
            className="flex flex-col items-start gap-7"
          >
            <Button
              variant="brand"
              render={<Link href={heroCopy.primaryCta.href} />}
              nativeButton={false}
              className="inline-flex h-12.25 w-full items-center justify-center gap-2 rounded-[10px] px-12.75 py-3.75 font-mono text-[15px] font-normal uppercase leading-[1.3] tracking-normal text-fg sm:w-52.5"
            >
              {heroCopy.primaryCta.label}
            </Button>

            <LearnMoreLink
              href={cloudBankingCopy.learnMore.href}
              label="learn more"
            />
          </TimelineAnimation>
        </div>

        <TimelineAnimation
          animationNum={2}
          timelineRef={sectionRef}
          className="relative w-full translate-x-[15%]  md:translate-x-[20%] lg:translate-x-[35%]"
        >
          <div className="relative ml-auto w-full max-w-163">
            <div
              className="relative overflow-hidden p-1"
              style={{
                borderTopLeftRadius: "15.77px",
                borderTopRightRadius: "15.77px",
                background:
                  "linear-gradient(var(--color-bg-2), var(--color-bg-2)) padding-box, linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%) border-box",
                border: "1.05px solid transparent",
              }}
            >
              <div className="aspect-652/432 w-full overflow-hidden rounded-t-[5px] bg-bg-2">
                <Image
                  src={cloudBankingCopy.image.src}
                  alt={cloudBankingCopy.image.alt}
                  width={cloudBankingCopy.image.width}
                  height={cloudBankingCopy.image.height}
                  className="h-full w-full object-cover object-top rounded-t-xl"
                  sizes="(min-width: 1024px) 652px, 90vw"
                />
              </div>
            </div>

            <div
              aria-hidden
              className="absolute left-[-9%] right-0 top-full -mt-px h-7.5 rounded-t-[5px] rounded-b-[15px]"
              style={{
                background:
                  "linear-gradient(var(--color-bg), var(--color-bg)) padding-box, var(--grad-brand) border-box",
                border: "1.5px solid transparent",
              }}
            />
          </div>
        </TimelineAnimation>
      </Container>
    </section>
  );
}
