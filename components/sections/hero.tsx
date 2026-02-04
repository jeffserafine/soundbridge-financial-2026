import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative isolate min-h-[90vh] flex flex-col justify-center px-6 lg:px-8 border-b border-stone-200 bg-stone-50 overflow-hidden">
      
      {/* 1. ATMOSPHERE LAYER (The Kinetic Element) */}
      {/* This layer sits behind the content. 
          'mix-blend-multiply' helps the image tint with the background color.
          'opacity-5' ensures it is very subtle (a texture, not a photo).
      */}
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-5 mix-blend-multiply pointer-events-none grayscale contrast-125"
        style={{ backgroundImage: "url('/images/hero-structure.jpg')" }} 
      />
      
      {/* 2. Gradient Fade (Bottom) */}
      {/* Softens the bottom edge so it flows into the next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-stone-50 to-transparent -z-10" />

      <div className="mx-auto max-w-5xl relative z-10">
        <div className="text-center">
          {/* Eyebrow / Trust Signal */}
          <div className="mb-8 flex justify-center">
            <span className="inline-flex items-center rounded-full border border-forest-200 bg-white/80 px-3 py-1 text-xs font-medium text-forest-800 backdrop-blur-md shadow-sm">
              Wealth Strategy for the Modern Era
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-5xl font-medium tracking-tight text-forest-950 sm:text-7xl lg:text-8xl">
            Tune out the noise. <br />
            <span className="italic text-forest-800">Amplify clarity.</span>
          </h1>

          {/* Subhead */}
          <p className="mt-8 text-lg leading-8 text-stone-600 max-w-2xl mx-auto font-sans">
            Strategy-first protection and planning for physicians, entertainers, entrepreneurs, and high-performing individuals. Built for modern income, modern risk, and modern life.
          </p>

          {/* CTA Group */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-forest-900 text-white hover:bg-forest-800 rounded-sm px-8 h-12 text-base font-medium tracking-wide shadow-sm transition-transform active:scale-95"
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
      
      {/* Decorative Footer Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest-200 to-transparent opacity-50" />
    </div>
  );
}
