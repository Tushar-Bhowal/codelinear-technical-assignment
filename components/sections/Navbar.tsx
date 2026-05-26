"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavbarMobile } from "./NavbarMobile";

export type NavLink = { label: string; href: string; hasMenu?: boolean };

const links: NavLink[] = [
  { label: "Solutions", href: "#solutions", hasMenu: true },
  { label: "Resources", href: "#resources", hasMenu: true },
  { label: "About Us", href: "#about" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="pointer-events-none fixed inset-x-0 top-7.75 z-50 flex justify-center px-4"
    >
      <nav
        aria-label="Primary"
        className="pointer-events-auto flex h-11.75 w-full max-w-[716.46px] items-center justify-between rounded-[12px] border border-white/5 bg-[#2F2F2F]/70 px-[10px] py-[9px] shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-[15px]"
      >
        <Link
          href="/"
          aria-label="N7 home"
          className="inline-flex h-7.25 w-8 items-center text-[24px] font-medium leading-[1.2] tracking-normal text-fg"
        >
          N7
        </Link>

        <ul className="hidden items-center gap-5 md:flex">
          {links.map((l) => (
            <li key={l.href} className="flex items-center">
              <Link
                href={l.href}
                className="group inline-flex items-center gap-1 whitespace-nowrap font-mono text-[12px] font-normal leading-[1.3] uppercase tracking-normal text-light transition-colors hover:text-light/70"
              >
                {l.label}
                {l.hasMenu && (
                  <ChevronDown
                    size={12}
                    strokeWidth={2}
                    className="shrink-0 transition-transform duration-300 group-hover:rotate-180"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <Button
          variant="outline"
          render={<Link href="#contact" />}
          className="hidden h-6.5 w-40.25 gap-2 rounded-[6px] border border-light bg-transparent px-9.25 py-1.25 font-mono text-[12px] font-normal uppercase leading-[1.3] tracking-normal text-light transition-colors hover:border-light hover:bg-light hover:text-bg md:inline-flex"
        >
          Request Demo
        </Button>

        <NavbarMobile links={links} />
      </nav>
    </motion.header>
  );
}
