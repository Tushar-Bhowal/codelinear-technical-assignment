"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { NavLink } from "./Navbar";

export function NavbarMobile({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  // Guards createPortal: false on server, true on client — no setState-in-effect.
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
        className="relative z-50 inline-flex h-7.25 w-7.25 items-center justify-center rounded-[6px] border border-light text-light transition-colors hover:bg-light hover:text-bg md:hidden"
      >
        <motion.span
          key={open ? "x" : "menu"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.18 }}
          className="inline-flex"
        >
          {open ? <X size={16} strokeWidth={2} /> : <Menu size={16} strokeWidth={2} />}
        </motion.span>
      </button>

      {mounted && createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 bottom-0 top-23.5 z-40 bg-bg backdrop-blur-[15px] md:hidden"
            >
              <motion.ul
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
                  show: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
                }}
                className="flex flex-col gap-1 px-6 pt-10"
              >
                {links.map((l) => (
                  <motion.li
                    key={l.href}
                    variants={{
                      hidden: { x: -16, opacity: 0 },
                      show: { x: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="group inline-flex items-center gap-2 py-4 font-mono text-[20px] font-normal uppercase leading-[1.3] tracking-normal text-light transition-colors hover:text-light/70"
                    >
                      {l.label}
                      {l.hasMenu && (
                        <ChevronDown
                          size={18}
                          strokeWidth={2}
                          className="shrink-0 transition-transform duration-300 group-hover:rotate-180"
                        />
                      )}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  variants={{
                    hidden: { y: 12, opacity: 0 },
                    show: { y: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="pt-8"
                >
                  <Button
                    variant="outline"
                    render={<Link href="#contact" onClick={() => setOpen(false)} />}
                    nativeButton={false}
                    className="inline-flex h-6.5 w-40.25 gap-2 rounded-[6px] border border-light bg-transparent px-9.25 py-1.25 font-mono text-[12px] font-normal uppercase leading-[1.3] tracking-normal text-light transition-colors hover:border-light hover:bg-light hover:text-bg"
                  >
                    Request Demo
                  </Button>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
