"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "For Individuals", href: "/individuals" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Contact", href: "/contact" },
    { name: "Alliances", href: "/alliances", secondary: true },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">SoundBridge Financial</span>
              <Image
                src="/brand/soundbridge_logo_transparent_2048.png"
                alt="SoundBridge Financial"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-forest-600 ${
                  item.secondary
                    ? "text-gray-500"
                    : "text-gray-900"
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
              className="rounded-md bg-forest-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-forest-700 transition-colors"
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
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-6 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-lg px-3 py-2 text-base font-semibold ${
                  item.secondary
                    ? "text-gray-500 hover:bg-gray-50"
                    : "text-gray-900 hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block rounded-lg bg-forest-600 px-3 py-2.5 text-center text-base font-semibold text-white hover:bg-forest-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Schedule a Conversation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
