"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Container } from "./container";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { PanelLeft, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import ModeToggle from "./mode-toggle";
const navlinks = [
  { title: "Features", href: "/features" },
  { title: "Products", href: "/products" },
  { title: "Socials", href: "/socials" },
  { title: "Pricing", href: "/pricing" },
];

export const Navbar = () => {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
};

export const MobileNavbar = () => {
  const [open, setopen] = useState(false);
  return (
    <div className="flex md:hidden py-2 px-4 justify-between relative items-center">
      <Logo />
      <div className="flex gap-2">
        <ModeToggle />
        <button onClick={() => setopen(!open)}>
          <PanelLeft className="size-5" />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-60 h-dvh w-screen bg-white/40 dark:bg-black/40 flex flex-col justify-between overscroll-contain overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(15px)",
            }}
            exit={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <div>
              <div className="flex w-full py-2 items-center justify-between px-4">
              {/* this classname is applied to logo svg and not whole logo with title  */}
                <Logo className="text-black dark:text-white" />
                <button onClick={() => setopen(false)}>
                  <X className="h-8 dark:text-white " />
                </button>
              </div>
              <div className="flex flex-col gap-6 my-10 px-4">
                {navlinks.map((link, idx) => (
                  <motion.div
                    key={idx}
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.2,
                      delay: idx * 0.1,
                    }}
                  >
                    <Link
                      className="text-sm text-neutral-600 dark:text-neutral-400 font-medium tracking-wide"
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-6 px-4 pb-4">
              <Button
                variant="outline"
                className="border border-neutral-300 dark:text-neutral-200  dark:border-neutral-700"
              >
                Login
              </Button>
              <Button>Signup</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const DesktopNavbar = () => {
  return (
    <Container className="py-4 items-center justify-between hidden lg:flex">
      <Logo />
      <div className="flex items-center gap-4">
        {navlinks.map((link) => (
          <Link
            className="text-sm text-neutral-600 dark:text-neutral-400 font-medium"
            href={link.href}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Link
          className="text-sm px-4 py-2  text-neutral-600 dark:text-neutral-400 font-medium rounded-md"
          href="/login"
        >
          Login
        </Link>
        <Button>Signup</Button>
        <ModeToggle />
      </div>
    </Container>
  );
};
