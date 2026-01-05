import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Tune out the noise. <span className="text-forest-600">Amplify clarity.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Strategy-first protection and planning for physicians, entertainers, entrepreneurs, and high-performing individuals. Built for modern income, modern risk, modern life.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/contact">Schedule a Conversation</Link>
            </Button>
            <Button asChild variant="link" size="lg">
              <Link href="/how-it-works">Learn more</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

