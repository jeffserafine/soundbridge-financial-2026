import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative isolate min-h-[90vh] flex flex-col justify-center px-6 lg:px-8 border-b border-stone-200 bg-stone-50/50">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          {/* Eyebrow / Trust Signal */}
          <div className="mb-8 flex justify-center">
            <span className="inline-flex items-center rounded-full border border-forest-200 bg-white/50 px-3 py-1 text-xs font-medium text-forest-800 backdrop-blur-sm">
              Wealth Strategy for the Modern Era
            </span>
          </div>

          {/* Main Headline - Serif for Authority */}
          <h1 className="font-serif text-5xl font-medium tracking-tight text-forest-950 sm:text-7xl lg:text-8xl">
            Tune out the noise. <br />
            <span className="italic text-forest-800">Amplify clarity.</span>
          </h1>

          {/* Subhead - Sans for Readability */}
          <p className="mt-8 text-lg leading-8 text-stone-600 max-w-2xl mx-auto font-sans">
            Strategy-first protection and planning for physicians, entertainers, entrepreneurs, and high-performing individuals. Built for modern income, modern risk, and modern life.
          </p>

          {/* CTA Group */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-forest-900 text-white hover:bg-forest-800 rounded-sm px-8 h-12 text-base font-medium tracking-wide shadow-sm"
            >
              <Link href="/contact">Schedule a Conversation</Link>
            </Button>
            <Button 
              asChild 
              variant="ghost" 
              size="lg"
              className="text-forest-900 hover:bg-forest-50 hover:text-forest-950 rounded-sm h-12 text-base group"
            >
              <Link href="/how-it-works" className="flex items-center gap-2">
                Our Process 
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Footer Line for Hero */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest-200 to-transparent opacity-50" />
    </div>
  );
}
