import { Blueprint } from "@/components/sections/blueprint";
import { ProcessPhilosophy } from "@/components/sections/process-philosophy";
import { ProcessDeliverables } from "@/components/sections/process-deliverables";
import { CTASection } from "@/components/sections/cta-section";

export default function HowItWorksPage() {
  return (
    <main>
      <Blueprint />
      <ProcessPhilosophy />
      <ProcessDeliverables />
      <CTASection />
    </main>
  );
}
