import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-aura-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-semibold mb-4">
              SoundBridge Financial
            </h3>
            <p className="text-sm text-gray-400 max-w-md">
              Strategy-first protection and planning for physicians, entertainers, 
              entrepreneurs, and high-performing individuals. Alliance programs for 
              trusted advisors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/individuals" className="hover:text-lime-400 transition-colors">
                  For Individuals
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-lime-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/alliances" className="hover:text-lime-400 transition-colors">
                  Alliance Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-lime-400 transition-colors">
                  Schedule a Conversation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} SoundBridge Financial. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 max-w-2xl text-center md:text-right">
              This material is for informational purposes only and is not intended as tax or legal advice. 
              Insurance and planning strategies vary by individual circumstances. Consult your own tax and legal advisors.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
