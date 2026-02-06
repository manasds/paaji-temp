"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Container } from "./container";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { PanelLeft, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
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
    <div className="flex md:hidden px-4 py-2 justify-between relative">
      <Logo />
      <button onClick={() => setopen(!open)}>
        <PanelLeft className="size-4" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 h-screen w-screen bg-white px-4 py-2 flex flex-col justify-between"
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
            <div className="flex w-full items-center justify-between">
              <Logo />
              <button onClick={() => setopen(false)}>
                <X className="size-4" />
              </button>
            </div>
            <div className="flex flex-col gap-6 my-10">
              {navlinks.map((link, idx) => (
                <motion.div
                initial={{
                  opacity : 0 
                }}
                animate={{
                  opacity : 1 
                }}
                transition={{
                  duration : 0.2 ,
                  delay : idx * 0.1 , 
                }}
                >

                <Link
                  key={idx}   
                  className="text-sm text-neutral-600 dark:text-neutral-400 font-medium tracking-wide"
                  href={link.href}
                >
                  {link.title}
                </Link>
                </motion.div>
              ))}
            </div>
            </div>
            <div className="flex justify-end gap-6">
              <Button variant="outline" className="border border-neutral-300">Login</Button>
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
      </div>
    </Container>
  );
};
