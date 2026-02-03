import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative isolate overflow-hidden bg-forest-900 px-6 py-24 sm:py-32 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-20">
         <svg
          className="absolute left-1/2 top-0 -translate-x-1/2 stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="cta-grid"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-serif font-medium tracking-tight text-white sm:text-4xl">
          Ready to amplify clarity?
        </h2>
        <p className="mx-auto mt-6 text-lg leading-relaxed text-forest-100">
          Schedule a short introductory call to understand your goals, constraints, and where SoundBridge can add leverage to your financial life.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="bg-lime-400 text-forest-950 hover:bg-lime-500 font-medium px-8 h-12">
            <Link href="/contact">Schedule a Conversation</Link>
          </Button>
          <Link href="/how-it-works" className="text-sm font-semibold leading-6 text-white hover:text-lime-300 transition-colors">
            Read about our process <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
