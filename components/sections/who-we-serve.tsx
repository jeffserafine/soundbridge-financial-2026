import { ArrowRight, Stethoscope, Mic2, Briefcase, TrendingUp, Building2 } from "lucide-react";
import Link from "next/link";

export type AudienceCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
};

const audiences: AudienceCard[] = [
  {
    title: "Physicians & Medical Professionals",
    description:
      "Complex income, high liability exposure, and time pressure demand clean, proactive planning.",
    icon: <Stethoscope className="h-5 w-5" />,
    href: "/individuals#physicians",
  },
  {
    title: "Entrepreneurs & Founders",
    description:
      "Protecting the people, cash flow, and equity behind what you've built.",
    icon: <Briefcase className="h-5 w-5" />,
    href: "/individuals#founders",
  },
  {
    title: "Entertainers & Creators",
    description:
      "High variance income and short peak windows require disciplined structure.",
    icon: <Mic2 className="h-5 w-5" />,
    href: "/individuals#entertainers",
  },
  {
    title: "C-Suite & Executives",
    description:
      "Concentrated compensation and time scarcity call for strategy-first execution.",
    icon: <Building2 className="h-5 w-5" />,
    href: "/individuals#executives",
  },
  {
    title: "High Net Worth Families",
    description:
      "When assets grow, complexity grows. We keep the plan coherent and coordinated.",
    icon: <TrendingUp className="h-5 w-5" />,
    href: "/individuals#hnw",
  },
];

export function WhoWeServe() {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono text-stone-500 mb-4 uppercase tracking-widest">
              Client Profiles
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-medium text-forest-900">
              Who we serve
            </h3>
            <p className="mt-4 text-lg text-stone-600 max-w-xl">
              Specialized strategies for individuals with modern income, modern risk, and zero time for messy implementation.
            </p>
          </div>
          
          <div>
             <Link 
                href="/individuals" 
                className="hidden md:flex items-center text-sm font-medium text-forest-800 hover:text-forest-600 transition-colors"
             >
                View all profiles <ArrowRight className="ml-2 h-4 w-4" />
             </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a) => (
            <Link
              key={a.title}
              href={a.href}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-stone-200 bg-stone-50/30 p-8 transition-all hover:shadow-lg hover:border-forest-200 hover:bg-white"
            >
              <div>
                <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-forest-50 text-forest-700 group-hover:bg-forest-100 group-hover:text-forest-900 transition-colors">
                  {a.icon}
                </div>
                <h3 className="text-xl font-serif text-forest-900">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600 group-hover:text-stone-700">
                  {a.description}
                </p>
              </div>
              
              <div className="mt-8 flex items-center text-sm font-medium text-forest-700 opacity-0 transform translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                <span>Learn more</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhoWeServe;
