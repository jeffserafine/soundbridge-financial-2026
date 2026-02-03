import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-stone-50 p-12 space-y-12">
      <section>
        <h2 className="text-sm font-mono text-stone-500 mb-6 uppercase tracking-widest">Typography</h2>
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif font-medium text-forest-900 tracking-tight">
              Amplify Clarity.
            </h1>
            <p className="text-xs font-mono text-stone-400 mt-2">Display Serif (Fraunces/Playfair) - H1</p>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-forest-800">
              Wealth Strategy for the Modern Era
            </h2>
            <p className="text-xs font-mono text-stone-400 mt-2">Section Heading - H2</p>
          </div>

          <div>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl">
              We design protection and planning architecture that your other advisors can trust, with clean documentation and a process that respects your time.
            </p>
            <p className="text-xs font-mono text-stone-400 mt-2">Body Large</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-sm font-mono text-stone-500 mb-6 uppercase tracking-widest">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="h-24 w-full bg-forest-900 rounded-lg shadow-sm flex items-end p-3 text-white text-xs">Forest 900</div>
          <div className="h-24 w-full bg-forest-700 rounded-lg shadow-sm flex items-end p-3 text-white text-xs">Forest 700</div>
          <div className="h-24 w-full bg-forest-500 rounded-lg shadow-sm flex items-end p-3 text-white text-xs">Forest 500</div>
          <div className="h-24 w-full bg-lime-400 rounded-lg shadow-sm flex items-end p-3 text-forest-900 text-xs">Lime 400 (Accent)</div>
          <div className="h-24 w-full bg-stone-100 rounded-lg shadow-sm flex items-end p-3 text-stone-600 text-xs">Stone 100 (Bg)</div>
        </div>
      </section>

      <section>
        <h2 className="text-sm font-mono text-stone-500 mb-6 uppercase tracking-widest">Components</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button size="lg" className="bg-forest-900 text-white hover:bg-forest-800 font-sans tracking-wide">
            Schedule Conversation
          </Button>
          <Button variant="outline" size="lg" className="border-forest-200 text-forest-900 hover:bg-forest-50">
            Learn More
          </Button>
          <Button variant="ghost" className="text-forest-700 hover:text-forest-900 hover:bg-forest-50/50">
            Read Case Studies &rarr;
          </Button>
        </div>
        <div className="mt-8 flex gap-4">
           <Badge variant="outline" className="border-forest-200 text-forest-700 bg-forest-50/50 px-3 py-1 rounded-sm">
            Wealth Planning
           </Badge>
           <Badge className="bg-lime-400 text-forest-900 hover:bg-lime-500 rounded-sm">
            New
           </Badge>
        </div>
      </section>

      <section>
        <h2 className="text-sm font-mono text-stone-500 mb-6 uppercase tracking-widest">Card Architecture</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {/* The "Premium" Card */}
            <div className="group relative overflow-hidden rounded-xl border border-stone-200 bg-white p-8 transition-all hover:shadow-lg hover:border-forest-200">
                <div className="absolute top-0 left-0 w-1 h-full bg-forest-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-serif text-forest-900">Physicians & Specialists</h3>
                <p className="mt-3 text-stone-600 leading-relaxed">
                    Complex income structures and high liability exposure demand a defensive planning architecture.
                </p>
                <div className="mt-6 flex items-center text-sm font-medium text-forest-700">
                    Explore Strategy <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
