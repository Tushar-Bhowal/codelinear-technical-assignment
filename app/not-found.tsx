import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 text-center">
      <span
        aria-hidden
        className="select-none bg-clip-text font-display font-medium leading-none text-transparent"
        style={{
          backgroundImage: "var(--grad-brand)",
          fontSize: "clamp(80px, 18vw, 200px)",
          letterSpacing: "-0.04em",
        }}
      >
        404
      </span>

      <div className="flex flex-col gap-3">
        <h1 className="font-display text-h2 font-normal text-light">
          Page not found
        </h1>
        <p className="font-display text-body text-light opacity-60">
          The page you are looking for does not exist.
        </p>
      </div>

      <Link
        href="/"
        className="inline-flex h-12.25 items-center justify-center rounded-[10px] border border-light bg-transparent px-10 font-mono text-[15px] font-normal uppercase leading-[1.3] tracking-normal text-light transition-colors hover:bg-light hover:text-bg"
      >
        Back to home
      </Link>
    </main>
  );
}
