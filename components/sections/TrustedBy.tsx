import Image from "next/image";
import { trustedByLogos } from "@/lib/data";

const loop = [...trustedByLogos, ...trustedByLogos];

export function TrustedBy() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-body font-display font-medium capitalize tracking-normal text-light opacity-70">
        Trusted By:
      </p>
      <div className="group relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul className="flex w-max items-center animate-marquee group-hover:paused motion-reduce:animate-none">
          {loop.map((logo, i) => (
            <li
              key={`${logo.name}-${i}`}
              className="flex shrink-0 items-center pr-8"
              aria-hidden={i >= trustedByLogos.length || undefined}
            >
              {logo.src ? (
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-4 w-auto opacity-80"
                />
              ) : (
                <span className="text-small font-display font-medium uppercase tracking-wide text-light opacity-60">
                  {logo.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
