import { AllianceHero } from "@/components/sections/alliance-hero";
import { PartnershipMatrix } from "@/components/sections/partnership-matrix";
import { AllianceInquiry } from "@/components/sections/alliance-inquiry";

export default function AlliancesPage() {
  return (
    <main>
      <AllianceHero />
      <PartnershipMatrix />
      <AllianceInquiry />
    </main>
  );
}
