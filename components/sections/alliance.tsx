import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Handshake, Shield, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Handshake,
    title: "Partnership Approach",
    description: "We work alongside trusted advisors to enhance your service offerings with specialized protection strategies.",
  },
  {
    icon: Shield,
    title: "Expert Resources",
    description: "Access to advanced planning tools, case studies, and white-label solutions for your clients.",
  },
  {
    icon: Users,
    title: "Client Retention",
    description: "Comprehensive solutions that deepen client relationships and provide ongoing value.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    description: "Expand your service offerings and create additional revenue streams through strategic partnerships.",
  },
];

export function Alliance() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <Badge variant="accent" className="mb-4">For Advisors</Badge>
          <SectionHeading
            title="Alliance Partner Program"
            subtitle="Partner with SoundBridge to offer your clients comprehensive protection and planning solutions"
            align="center"
          />
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="relative rounded-2xl bg-white p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-forest-600 text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/alliances">Learn About Our Alliance Program</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

