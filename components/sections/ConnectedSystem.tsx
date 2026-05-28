"use client";

import { useRef } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TimelineAnimation } from "@/components/ui/TimelineAnimation";
import { connectedSystemCopy } from "@/lib/data";

export function ConnectedSystem() {
  const sectionRef = useRef<HTMLElement>(null);

  const col1 = connectedSystemCopy.items.slice(0, 5);
  const col2 = connectedSystemCopy.items.slice(5);

  return (
    <section
      ref={sectionRef}
      id="connected-system"
      aria-label="Connected core banking system"
      className="relative isolate overflow-hidden bg-bg py-32"
    >
      <Container
        as="div"
        className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_590px] lg:gap-x-21"
      >
        <TimelineAnimation
          animationNum={0}
          timelineRef={sectionRef}
          className="relative w-full translate-x-[-15%] md:translate-x-[-20%] lg:translate-x-[-35%]"
        >
          <div className="relative mr-auto w-full max-w-163">
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
                  src={connectedSystemCopy.image.src}
                  alt={connectedSystemCopy.image.alt}
                  width={connectedSystemCopy.image.width}
                  height={connectedSystemCopy.image.height}
                  className="h-full w-full object-cover object-top-left rounded-t-xl"
                  sizes="(min-width: 1024px) 652px, 90vw"
                />
              </div>
            </div>

            <div
              aria-hidden
              className="absolute left-[-9%] right-[-9%] top-full -mt-px h-7.5 rounded-t-[5px] rounded-b-[15px]"
              style={{
                background:
                  "linear-gradient(var(--color-bg), var(--color-bg)) padding-box, linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%) border-box",
                border: "1.05px solid transparent",
              }}
            />
          </div>
        </TimelineAnimation>

        <div className="flex flex-col gap-8.5">
          <TimelineAnimation
            as="h2"
            animationNum={1}
            timelineRef={sectionRef}
            className="font-display font-normal text-h3 leading-[1.3] tracking-normal text-light max-w-123.75"
          >
            {connectedSystemCopy.heading}
          </TimelineAnimation>

          <TimelineAnimation
            animationNum={2}
            timelineRef={sectionRef}
            className="flex flex-col gap-3.5"
          >
            <p className="font-display text-body font-semibold leading-[1.3] text-light">
              {connectedSystemCopy.whatYouGetTitle}
            </p>

            <div className="grid grid-cols-1 gap-x-7.25 gap-y-1 sm:grid-cols-2">
              <ChecklistColumn items={col1} />
              <ChecklistColumn items={col2} />
            </div>
          </TimelineAnimation>
        </div>
      </Container>
    </section>
  );
}

function ChecklistColumn({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-1">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-1.25"
        >
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
          <span className="max-w-65.25 pt-1 font-display text-body font-normal leading-[1.3] tracking-normal text-light opacity-80">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
