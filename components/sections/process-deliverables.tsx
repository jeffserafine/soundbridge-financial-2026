import { FileText, PieChart, Shield } from "lucide-react";

const items = [
  {
    title: "The Efficiency Audit",
    desc: "We analyze your existing contracts—specifically Annuities and Life Insurance—to find inefficiencies. Often, we can refinance into modern structures with lower fees or better caps.",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "The Strategy Map",
    desc: "A conceptual architectural diagram of your financial life. We map how cash flow moves from earnings to accumulation to protection, giving you a 'birds-eye' view of your leverage.",
    icon: <FileText className="h-6 w-6" />
  },
  {
    title: "The Wealth Illustration",
    desc: "Detailed ledger projections showing how specific instruments perform over time. We model the impact of tax-free accumulation and distribution strategies on your long-term liquidity.",
    icon: <PieChart className="h-6 w-6" />
  }
];

export function ProcessDeliverables() {
  return (
    <section className="py-24 px-6 bg-stone-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif text-forest-900 font-medium">
            Tangible Deliverables
          </h2>
          <p className="mt-4 text-stone-600">
            We don&apos;t just give advice; we build assets. You walk away with clear documentation and a system you can verify.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.title} className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm hover:border-forest-200 transition-colors">
              <div className="h-12 w-12 bg-forest-50 rounded-lg flex items-center justify-center text-forest-900 mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif text-forest-900 mb-3">{item.title}</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
