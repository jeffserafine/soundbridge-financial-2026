"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

// You can use a specific Formspree ID for alliances here if you have one, 
// otherwise reuse the general one or a placeholder.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mblnyoaq"; 

export function AllianceInquiry() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Add a hidden field to identify the source
    formData.append("source", "Alliance Page Inquiry");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-forest-900 py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-forest-800/20 -skew-x-12 transform translate-x-1/4 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: The Pitch */}
          <div>
            <h2 className="text-sm font-mono text-lime-400 uppercase tracking-widest mb-6">
              Partnership Inquiry
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif text-white font-medium mb-6 leading-tight">
              Ready to build your <br />
              <span className="text-forest-200 italic">protection department?</span>
            </h3>
            <p className="text-forest-100 text-lg leading-relaxed mb-8">
              We vet our partners carefully to ensure a philosophical fit. If you are looking for a high-touch, planning-first partner to handle your risk management cases, let&apos;s talk.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-forest-800 flex items-center justify-center flex-shrink-0 border border-forest-700">
                  <span className="text-lime-400 font-serif font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">Initial Discovery</h4>
                  <p className="text-sm text-forest-200 mt-1">We discuss your current book of business and identify immediate opportunities.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-forest-800 flex items-center justify-center flex-shrink-0 border border-forest-700">
                  <span className="text-lime-400 font-serif font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">Process Integration</h4>
                  <p className="text-sm text-forest-200 mt-1">We set up the workflow so referring clients feels seamless to your staff.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="bg-white rounded-xl p-8 shadow-2xl border border-forest-800">
            <h4 className="text-xl font-serif text-forest-900 mb-6">Firm Introduction</h4>
            
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="alliance-name" className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Name</label>
                  <input required id="alliance-name" name="name" type="text" placeholder="Your Name" className="w-full h-11 px-4 rounded-lg bg-stone-50 border border-stone-200 focus:border-forest-500 focus:ring-1 focus:ring-forest-500 outline-none transition-all text-forest-900 placeholder:text-stone-400" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="alliance-firm" className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Firm Name</label>
                  <input required id="alliance-firm" name="firm" type="text" placeholder="Practice / Agency" className="w-full h-11 px-4 rounded-lg bg-stone-50 border border-stone-200 focus:border-forest-500 focus:ring-1 focus:ring-forest-500 outline-none transition-all text-forest-900 placeholder:text-stone-400" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="alliance-email" className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Work Email</label>
                <input required id="alliance-email" name="email" type="email" placeholder="you@firm.com" className="w-full h-11 px-4 rounded-lg bg-stone-50 border border-stone-200 focus:border-forest-500 focus:ring-1 focus:ring-forest-500 outline-none transition-all text-forest-900 placeholder:text-stone-400" />
              </div>

              <div className="space-y-2">
                <label htmlFor="alliance-type" className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Primary Business</label>
                <select id="alliance-type" name="type" className="w-full h-11 px-4 rounded-lg bg-stone-50 border border-stone-200 focus:border-forest-500 focus:ring-1 focus:ring-forest-500 outline-none transition-all text-forest-900">
                  <option>Wealth Management / RIA</option>
                  <option>CPA / Tax Professional</option>
                  <option>P&C Insurance Agency</option>
                  <option>Estate Attorney</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="alliance-message" className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Context (Optional)</label>
                <textarea id="alliance-message" name="message" rows={3} placeholder="How can we help your firm?" className="w-full p-4 rounded-lg bg-stone-50 border border-stone-200 focus:border-forest-500 focus:ring-1 focus:ring-forest-500 outline-none transition-all text-forest-900 placeholder:text-stone-400 resize-none" />
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending' || status === 'success'}
                className="w-full h-12 bg-forest-900 text-white font-medium rounded-lg hover:bg-forest-800 transition-colors flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Request Sent' : 'Request Partnership Info'}
                {status === 'idle' && <ArrowRight className="h-4 w-4" />}
                {status === 'success' && <CheckCircle2 className="h-4 w-4" />}
              </button>

              {status === 'success' && (
                <p className="text-sm text-center text-forest-600 mt-2 bg-forest-50 p-2 rounded">
                  Thank you. We will be in touch with your team shortly.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
