import WhoWeServe from "@/components/sections/who-we-serve";
import HnwClient from "@/components/sections/hnw-client";

export default function IndividualsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="space-y-16">
        <WhoWeServe />
        <HnwClient />
      </div>
    </main>
  );
}