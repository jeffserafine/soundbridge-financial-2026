import { ShieldCheck, Briefcase, Users, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    title: "Client Retention",
    desc: "Clients are asking for protection planning. If you don't provide it, they will find someone who does—risking the entire relationship.",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Revenue Expansion",
    desc: "Create a significant new revenue stream without adding overhead, staff, or licensing complexity to your existing firm.",
    icon: <TrendingUp className="h-6 w-6" />
  },
  {
    title: "Technical Expertise",
    desc: "Access advanced case design for Buy-Sell funding, Key Person leverage, and Estate Equalization without needing to be an expert yourself.",
    icon: <ShieldCheck className="h-6 w-6" />
  },
  {
    title: "Turnkey Implementation",
    desc: "We handle the underwriting, medicals, and policy delivery. You get the credit for solving the problem.",
    icon: <Briefcase className="h-6 w-6" />
  }
];

export function PartnershipMatrix() {
  return (
    <section className="py-24 px-6 bg-stone-50">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: The Pitch */}
          <div>
            <h2 className="text-3xl font-serif text-forest-900 mb-6">
              The &quot;Missing Piece&quot; Problem
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              Your HNW clients have complex risk exposure. Most wealth managers and CPAs identify the risk but lack the infrastructure to execute the solution.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              SoundBridge acts as your white-label insurance division. We respect your role as the primary advisor while ensuring the protection architecture is built correctly.
            </p>
            
            <div className="p-6 bg-white border-l-4 border-lime-500 shadow-sm rounded-r-lg">
              <p className="text-forest-900 font-medium italic">
                &quot;We don&apos;t cross-sell. We deep-solve. Your AUM and tax work stays with you.&quot;
              </p>
            </div>
          </div>

          {/* Right Column: The Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm hover:border-forest-200 transition-colors">
                <div className="h-10 w-10 bg-forest-50 rounded-lg flex items-center justify-center text-forest-700 mb-4">
                  {b.icon}
                </div>
                <h3 className="font-serif text-lg text-forest-900 mb-2">{b.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

        </div>

        <div className="mt-16 text-center">
           <Link 
             href="/contact" 
             className="inline-flex items-center justify-center px-8 py-4 bg-forest-900 text-white rounded-sm font-medium hover:bg-forest-800 transition-colors"
           >
             Discuss a Partnership Model
             <ArrowRight className="ml-2 h-4 w-4" />
           </Link>
        </div>
      </div>
    </section>
  );
}
