import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Target, Lock } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Comprehensive Protection",
    description: "Multi-layered strategies designed to protect your assets, income, and legacy.",
  },
  {
    icon: Zap,
    title: "Strategic Efficiency",
    description: "Solutions optimized for high-performing individuals with complex financial situations.",
  },
  {
    icon: Target,
    title: "Goal-Oriented Planning",
    description: "Every strategy is aligned with your specific objectives and long-term vision.",
  },
  {
    icon: Lock,
    title: "Privacy & Confidentiality",
    description: "Discrete service for high-net-worth individuals who value discretion.",
  },
];

export function HnwClient() {
  return (
    <section className="py-24 sm:py-32 bg-aura-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built for High-Net-Worth Clients
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Sophisticated protection and planning strategies designed for individuals and families with complex financial needs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400 text-gray-900">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    {benefit.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{benefit.description}</p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900">
            <Link href="/contact">Start the Conversation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

