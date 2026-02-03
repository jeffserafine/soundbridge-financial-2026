import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 bg-forest-950 text-stone-300 border-t border-forest-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
               <span className="text-2xl font-serif font-bold text-white tracking-tight">SoundBridge Financial</span>
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed max-w-sm mb-8">
              Strategy-first protection and planning for physicians, entertainers,
              entrepreneurs, and high-performing individuals.
            </p>
            <div className="flex gap-4">
                {/* Placeholder for potential social icons or certifications */}
                <div className="h-8 w-8 rounded-full bg-forest-900 border border-forest-800" />
                <div className="h-8 w-8 rounded-full bg-forest-900 border border-forest-800" />
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-6 font-mono">Private Client</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="/individuals" className="hover:text-lime-400 transition-colors">
                    Physicians & Medical
                  </Link>
                </li>
                <li>
                  <Link href="/individuals" className="hover:text-lime-400 transition-colors">
                    Entrepreneurs
                  </Link>
                </li>
                <li>
                  <Link href="/individuals" className="hover:text-lime-400 transition-colors">
                    Entertainers
                  </Link>
                </li>
                <li>
                  <Link href="/individuals" className="hover:text-lime-400 transition-colors">
                    High Net Worth
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-6 font-mono">Advisors</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="/alliances" className="hover:text-lime-400 transition-colors">
                    Partnership Model
                  </Link>
                </li>
                <li>
                  <Link href="/alliances" className="hover:text-lime-400 transition-colors">
                    Case Design
                  </Link>
                </li>
                <li>
                  <Link href="/alliances" className="hover:text-lime-400 transition-colors">
                    Implementation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-6 font-mono">Company</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="/how-it-works" className="hover:text-lime-400 transition-colors">
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-lime-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-forest-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-xs text-stone-500">
            © {currentYear} SoundBridge Financial. All rights reserved.
          </p>
          <div className="flex gap-6">
             <Link href="#" className="text-xs text-stone-500 hover:text-stone-300">Privacy Policy</Link>
             <Link href="#" className="text-xs text-stone-500 hover:text-stone-300">Terms of Service</Link>
          </div>
        </div>

        <div className="mt-8">
            <p className="text-[10px] text-stone-600 leading-relaxed text-justify">
              This material is for informational purposes only and is not intended as tax or legal advice.
              Insurance and financial strategies vary by individual circumstances. Consult your own tax and legal advisors.
              SoundBridge Financial is an independent agency.
            </p>
        </div>
      </div>
    </footer>
  );
}
