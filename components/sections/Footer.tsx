import Link from "next/link";
import { ArrowRight } from "@/components/ui/ArrowRight";
import { Container } from "@/components/ui/Container";
import { footerContent } from "@/lib/data";

export function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-labelledby="footer-heading"
      className="relative isolate overflow-hidden bg-bg pt-20 pb-10 lg:pt-28"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <Container as="div">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start lg:gap-x-16">
          <span
            aria-hidden
            className="select-none bg-clip-text font-display font-medium leading-none text-transparent"
            style={{
              backgroundImage: "var(--grad-brand)",
              fontSize: "clamp(140px, 22vw, 338px)",
              letterSpacing: "-0.04em",
            }}
          >
            N7
          </span>

          <div className="flex flex-col gap-16 lg:gap-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-3 lg:gap-y-32">
              <div className="flex flex-col gap-16 lg:gap-32">
                <AddressBlock address={footerContent.addresses[0]} />
                <LinkColumn column={footerContent.linkColumns[0]} />
              </div>

              <div className="flex flex-col gap-16 lg:gap-32">
                <AddressBlock address={footerContent.addresses[1]} />
                <LinkColumn column={footerContent.linkColumns[1]} />
              </div>

              <div className="flex flex-col gap-16 lg:gap-32">
                <AddressBlock address={footerContent.addresses[2]} />
                <LinkColumn column={footerContent.linkColumns[2]} />
              </div>
            </div>

            <p className="font-display text-small font-normal leading-normal tracking-normal text-light opacity-50">
              {footerContent.copyright}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function AddressBlock({
  address,
}: {
  address: (typeof footerContent.addresses)[number];
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-display text-body font-medium leading-[1.3] tracking-normal text-light">
        {address.city}
      </p>
      <p className="whitespace-pre-line font-display text-body font-normal leading-[1.3] tracking-normal text-light opacity-70">
        {address.lines}
      </p>
    </div>
  );
}

function LinkColumn({
  column,
}: {
  column: (typeof footerContent.linkColumns)[number];
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-display text-body font-medium leading-[1.3] tracking-normal text-light">
        {column.heading}
      </p>
      <ul className="flex flex-col gap-2.5">
        {column.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group flex items-center justify-between gap-3 font-display text-body font-normal leading-[1.3] tracking-normal text-light opacity-70 transition-opacity hover:opacity-100"
            >
              <span>{link.label}</span>
              <ArrowRight
                size={12}
                strokeWidth={1}
                className="shrink-0 text-brand transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
