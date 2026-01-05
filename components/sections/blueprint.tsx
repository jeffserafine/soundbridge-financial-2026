import { SectionHeading } from "@/components/ui/section-heading";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start with a comprehensive understanding of your financial landscape, goals, and unique circumstances.",
  },
  {
    number: "02",
    title: "Strategy Design",
    description: "Custom protection and planning strategies are designed specifically for your situation and objectives.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "We guide you through the implementation process, ensuring every detail is handled with precision.",
  },
  {
    number: "04",
    title: "Ongoing Partnership",
    description: "Regular reviews and adjustments keep your strategy aligned with your evolving needs and goals.",
  },
];

export function Blueprint() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Our Blueprint"
          subtitle="A structured approach to financial protection and planning that adapts to your unique needs"
        />
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest-600 text-white text-sm font-bold">
                    {step.number}
                  </span>
                  {step.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

