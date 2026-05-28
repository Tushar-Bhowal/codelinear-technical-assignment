import { marqueeItems } from "@/lib/data";

function Asterisk({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 58 58"
      className={className}
      fill="currentColor"
    >
      <path d="M29 0 L31 27 L58 25 L58 33 L31 31 L29 58 L27 31 L0 33 L0 25 L27 27 Z" />
      <path
        d="M29 0 L31 27 L58 25 L58 33 L31 31 L29 58 L27 31 L0 33 L0 25 L27 27 Z"
        transform="rotate(45 29 29)"
      />
    </svg>
  );
}

export function Marquee() {
  // Render twice for seamless infinite loop.
  const loop = [...marqueeItems, ...marqueeItems];

  return (
    <section
      aria-label="Banking marquee"
      className="relative overflow-hidden bg-surface py-7"
    >
      <div
        className="flex w-max items-center motion-safe:animate-marquee motion-reduce:translate-x-0"
        style={{ animation: "marquee 28s linear infinite" }}
      >
        {loop.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center gap-10 pr-10">
            <Asterisk className="h-12 w-12 text-muted-2" />
            {item.kind === "brand" ? (
              <span className="font-display text-h1 font-medium text-brand">
                {item.text}
              </span>
            ) : (
              <span className="font-display text-h1 font-semibold text-fg-dark">
                {item.text}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
