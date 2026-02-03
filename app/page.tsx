import { Hero } from "@/components/sections/hero";
import { WhoWeServe } from "@/components/sections/who-we-serve";
import { Blueprint } from "@/components/sections/blueprint";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <WhoWeServe />
      <Blueprint />
      <CTASection />
    </main>
  );
}
