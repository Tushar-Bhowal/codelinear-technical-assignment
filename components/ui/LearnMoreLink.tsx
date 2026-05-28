import Link from "next/link";
import { ArrowRight } from "./ArrowRight";

export function LearnMoreLink({
  href,
  label,
  className = "",
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 font-mono text-small uppercase text-brand no-underline transition-opacity hover:opacity-70 ${className}`}
    >
      <span className="relative">
        <span>{label}</span>
        <span
          aria-hidden
          className="absolute left-0 top-full mt-0.5 block h-px w-[4ch] bg-current"
        />
      </span>
      <ArrowRight size={12} strokeWidth={1} />
    </Link>
  );
}
