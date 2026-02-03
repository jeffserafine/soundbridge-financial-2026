"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "For Individuals", href: "/individuals" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Contact", href: "/contact" },
    { name: "Alliances", href: "/alliances", secondary: true },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-stone-200 bg-white/90 backdrop-blur-md transition-all">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                sizes="(min-width: 1024px) 320px, (min-width: 768px) 260px, 220px"
                className="h-[52px] w-auto md:h-[60px]"
              />

              <span className="hidden lg:flex items-center gap-4 pl-4 ml-4 border-l border-stone-200 h-10">
                 <span className="flex flex-col leading-none">
                  <span className="text-sm font-serif font-bold tracking-tight text-forest-900">
                    Financial Strategies
                  </span>
                  <span className="mt-1 text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">
                    Est. 2025
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
                className={`text-sm font-medium tracking-wide transition-colors ${
                  item.secondary
                    ? "text-stone-500 hover:text-forest-700"
                    : "text-forest-900 hover:text-forest-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/contact"
              className="rounded-sm bg-forest-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-forest-800 hover:shadow-md"
            >
              Schedule Conversation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-forest-900"
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
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-stone-200 shadow-xl">
          <div className="space-y-1 px-6 pb-6 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-lg px-3 py-4 text-base font-serif font-medium ${
                  item.secondary
                    ? "text-stone-500 hover:bg-stone-50"
                    : "text-forest-900 hover:bg-forest-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-6 pt-6 border-t border-stone-100">
                <Link
                href="/contact"
                className="block w-full rounded-sm bg-forest-900 px-3 py-4 text-center text-base font-semibold text-white hover:bg-forest-800"
                onClick={() => setMobileMenuOpen(false)}
                >
                Schedule Conversation
                </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
