"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "For Individuals", href: "/individuals" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Contact", href: "/contact" },
    { name: "Alliances", href: "/alliances", secondary: true },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/brand/soundbridge_logo_transparent_2048.png"
                alt="SoundBridge"
                width={520}
                height={170}
                priority
                sizes="(min-width: 1024px) 320px, (min-width: 768px) 260px, 220px"
                className="h-[76px] w-auto md:h-[82px] lg:h-[88px]"
              />

              {/* Wordmark extension */}
              <span className="hidden sm:flex items-center gap-4 pl-2">
                <span className="h-8 w-px bg-slate-200" aria-hidden="true" />
                <span className="flex flex-col leading-none">
                  <span className="text-sm md:text-base font-semibold tracking-tight text-slate-900">
                    Financial
                  </span>
                  <span className="mt-1 text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Strategies
                  </span>
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={
                  "relative text-base font-semibold tracking-[0.01em] transition-colors " +
                  (item.secondary ? "text-slate-500 " : "text-slate-700 ") +
                  "hover:text-slate-950 " +
                  "after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-emerald-600 after:to-lime-500 after:transition-transform after:duration-200 hover:after:scale-x-100 " +
                  (pathname === item.href ? "text-slate-950 after:scale-x-100" : "")
                }
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/contact"
              className="rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-slate-800"
            >
              Schedule a Conversation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
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
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-lg px-3 py-2 text-base font-semibold tracking-tight ${
                  item.secondary
                    ? "text-slate-500 hover:bg-slate-50"
                    : "text-slate-900 hover:bg-slate-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block rounded-lg bg-slate-900 px-3 py-3 text-center text-base font-semibold text-white hover:bg-slate-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Schedule a Conversation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
