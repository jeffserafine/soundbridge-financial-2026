"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const SCHEDULING_URL = "https://calendar.app.google/4hWgcNAGEZ6qp9nJA";

type NavItem = {
  name: string;
  href: string;
  accent?: "gold";
};

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Who We Serve", href: "/individuals" },
    { name: "Alliances", href: "/alliances", accent: "gold" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/brand/soundbridge_logo_transparent_2048.png"
                alt="SoundBridge"
                width={400}
                height={130}
                priority
                sizes="(min-width: 1024px) 200px, (min-width: 768px) 180px, 160px"
                className="h-14 w-auto md:h-16 lg:h-[68px]"
              />

              {/* Wordmark extension */}
              <span className="hidden sm:flex items-center ml-4">
                <span className="h-10 w-px bg-slate-300/60" aria-hidden="true" />
                <span className="flex flex-col leading-none ml-4">
                  <span className="text-base md:text-lg font-semibold tracking-tight text-slate-800">
                    Financial
                  </span>
                  <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Strategies
                  </span>
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const isGold = item.accent === "gold";

              const baseText = isGold ? "text-amber-700" : "text-slate-700";
              const hoverText = isGold ? "hover:text-amber-800" : "hover:text-slate-950";
              const underlineGradient = isGold
                ? "after:bg-gradient-to-r after:from-amber-500 after:to-yellow-400"
                : "after:bg-gradient-to-r after:from-emerald-600 after:to-lime-500";

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    "relative text-base font-semibold tracking-[0.01em] transition-colors " +
                    baseText +
                    " " +
                    hoverText +
                    " after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 " +
                    underlineGradient +
                    " after:transition-transform after:duration-200 hover:after:scale-x-100 " +
                    (isActive ? " after:scale-x-100 " + (isGold ? "text-amber-900" : "text-slate-950") : "")
                  }
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href={SCHEDULING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-slate-800"
            >
              Schedule a Conversation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-6 pb-3 pt-2">
            {navigation.map((item) => {
              const isGold = item.accent === "gold";
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={
                    "block rounded-lg px-3 py-2 text-base font-semibold tracking-tight hover:bg-slate-50 " +
                    (isGold ? "text-amber-800" : "text-slate-900")
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}

            <a
              href={SCHEDULING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg bg-slate-900 px-3 py-3 text-center text-base font-semibold text-white hover:bg-slate-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Schedule a Conversation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;