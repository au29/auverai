"use client";

// Adapted from the Tailark Quartz hero header: floating navigation and mobile menu.
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

const links = [
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Services", href: "/services/" },
  { label: "Our approach", href: "/#approach" },
  { label: "Company", href: "/about/" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/5 bg-background/85 backdrop-blur-xl">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="mx-auto flex h-21 max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label="AUVERAI home">
          <Brand />
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 rounded-xl border border-transparent bg-card/75 p-1.5 shadow-sm shadow-black/5 ring-1 ring-border lg:flex"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className="rounded-md px-4 py-2 text-[13px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground aria-[current=page]:bg-muted aria-[current=page]:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button
          className="hidden h-9 gap-3 px-4 shadow-sm sm:ml-auto sm:inline-flex lg:ml-0"
          render={
            <Link href="/contact/">
              Let’s talk <ArrowUpRight className="size-3.5" />
            </Link>
          }
          nativeButton={false}
        />
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                className="ml-3 size-10 lg:hidden"
                aria-label="Open menu"
              />
            }
          >
            <Menu />
          </DialogTrigger>
          <DialogContent className="max-w-[calc(100vw-2rem)] p-7 sm:max-w-sm">
            <DialogTitle>
              <Brand />
            </DialogTitle>
            <DialogDescription className="sr-only">
              Explore AUVERAI
            </DialogDescription>
            <nav aria-label="Mobile navigation" className="mt-4 flex flex-col">
              {links.map((link) => (
                <DialogClose
                  key={link.label}
                  render={<Link href={link.href} />}
                  className="border-b py-4 text-lg"
                >
                  {link.label}
                </DialogClose>
              ))}
              <DialogClose
                render={<Link href="/contact/" />}
                className="mt-6 flex items-center justify-between rounded-lg bg-primary px-4 py-3 text-primary-foreground"
              >
                Let’s talk <ArrowUpRight className="size-4" />
              </DialogClose>
            </nav>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
