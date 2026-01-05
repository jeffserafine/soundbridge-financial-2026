import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Users, Briefcase, Music, Stethoscope } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Physicians",
    description: "Protection strategies designed for medical professionals navigating complex income structures and liability concerns.",
  },
  {
    icon: Music,
    title: "Entertainers",
    description: "Financial planning that adapts to variable income streams, touring schedules, and unique asset protection needs.",
  },
  {
    icon: Briefcase,
    title: "Entrepreneurs",
    description: "Strategic planning for business owners managing company and personal finances with maximum efficiency.",
  },
  {
    icon: Users,
    title: "High-Performing Individuals",
    description: "Comprehensive protection and planning solutions tailored to your unique financial landscape and goals.",
  },
];

export function WhoWeServe() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Who We Serve"
          subtitle="Specialized financial protection and planning for those who need more than standard solutions"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="relative rounded-2xl bg-gray-50 p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-forest-600 text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

