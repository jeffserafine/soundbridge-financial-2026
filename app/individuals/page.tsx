import { IndividualsHero } from "@/components/sections/individuals-hero";
import { PersonaBreakdown } from "@/components/sections/persona-breakdown";
import { CTASection } from "@/components/sections/cta-section";

export default function IndividualsPage() {
  return (
    <main>
      <IndividualsHero />
      <PersonaBreakdown />
      <CTASection />
    </main>
  );
}
