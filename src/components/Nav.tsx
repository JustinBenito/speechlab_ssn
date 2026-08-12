"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { nav, contactUrl } from "@/lib/data";
import { Button } from "./Button";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
    <header className="fixed top-0 inset-x-0 z-50 border-b border-neutral-200/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 md:h-24">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Speech Lab SSN"
            width={1672}
            height={941}
            priority
            className="h-14 w-auto bg-none md:h-20"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-600 transition-colors hover:text-accent-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          href={contactUrl}
          variant="ghost"
          size="sm"
          external
          className="hidden md:inline-flex"
        >
          Contact
        </Button>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="flex items-center justify-center rounded-full border border-black/15 bg-white/60 p-2.5 text-neutral-900 transition-colors hover:bg-neutral-100 md:hidden"
        >
          <HamburgerMenuIcon className="h-5 w-5" />
        </button>
      </div>
    </header>

    {mounted &&
      createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 bg-black/40 md:hidden"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                key="sidebar"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.25, ease: "easeInOut" }}
                className="fixed inset-y-0 right-0 z-50 flex w-72 max-w-[80vw] flex-col bg-white shadow-xl md:hidden"
              >
                <div className="flex items-center justify-between border-b border-neutral-200/70 px-6 py-5">
                  <span className="text-sm font-medium text-neutral-900">Menu</span>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="flex items-center justify-center rounded-full border border-black/15 bg-white/60 p-2 text-neutral-900 transition-colors hover:bg-neutral-100"
                  >
                    <Cross1Icon className="h-4 w-4" />
                  </button>
                </div>

                <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
                  {nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="rounded-lg px-3 py-2.5 text-sm text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-accent-700"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="border-t border-neutral-200/70 px-6 py-5">
                  <Button
                    href={contactUrl}
                    variant="ghost"
                    size="sm"
                    external
                    className="w-full justify-center"
                  >
                    Contact
                  </Button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
