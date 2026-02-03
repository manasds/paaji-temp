import Link from "next/link";
import React from "react";
import { Container } from "./container";
import { Logo } from "./logo";
import { Button } from "./ui/button";

export const Navbar = () => {
  const navlinks = [
    { title: "Features", href: "/features" },
    { title: "Products", href: "/products" },
    { title: "Socials", href: "/socials" },
    { title: "Pricing", href: "/pricing" },
  ];
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      {
        <Container className="py-4 flex items-center justify-between">
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
      }
    </div>
  );
};
