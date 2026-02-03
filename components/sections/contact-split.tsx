import { Mail, MapPin, ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function ContactSplit() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen relative" key="contact-final-v8">
      
      {/* Left Panel: The Atmosphere (Forest) */}
      {/* FIXED: Removed 'sticky', 'top-0', 'h-screen'. Changed to 'relative min-h-screen'. 
          This ensures it scrolls WITH the page and does not cover the footer. */}
      <div className="w-full lg:w-5/12 bg-forest-900 text-white p-12 lg:p-20 flex flex-col justify-between relative min-h-screen">
        {/* Abstract Pattern */}
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/noise.png')] opacity-10 pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 pt-20 lg:pt-32">
          <Link href="/" className="inline-block mb-12 lg:hidden">
            <span className="text-2xl font-serif font-bold tracking-tight text-white">
              SoundBridge
            </span>
          </Link>
          
          <h1 className="font-serif text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-6">
            Start the <br /> conversation.
          </h1>
          <p className="text-forest-200 text-lg leading-relaxed max-w-sm">
            Whether you are a physician planning for exit, or an advisor looking to partner, clarity starts with a brief introduction.
          </p>
        </div>

        <div className="relative z-10 space-y-8 mt-12 mb-12 lg:mb-0">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              <Mail className="h-5 w-5 text-lime-400" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-white uppercase tracking-wider mb-1">Email Us</h3>
              <a href="mailto:info@soundbridgefinancial.com" className="text-forest-100 hover:text-white transition-colors text-lg">
                info@soundbridgefinancial.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              <MapPin className="h-5 w-5 text-lime-400" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-white uppercase tracking-wider mb-1">Office</h3>
              <p className="text-forest-100 text-lg">
                Los Angeles, CA <br />
                <span className="text-sm text-forest-300">Serving clients nationwide.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: The Interface (Stone) */}
      <div className="w-full lg:w-7/12 bg-stone-50 p-6 lg:p-24 flex flex-col justify-center min-h-screen">
        <div className="max-w-xl mx-auto w-full pt-10 lg:pt-32 pb-10">
          <h2 className="text-sm font-mono text-stone-500 uppercase tracking-widest mb-8">
            Select your path
          </h2>

          <div className="grid gap-6">
            {/* Client Option */}
            <a 
              href="https://calendly.com/" 
              target="_blank" 
              rel="noreferrer"
              className="group relative flex items-start gap-6 p-8 rounded-xl bg-white border border-stone-200 shadow-sm hover:border-forest-200 hover:shadow-md transition-all"
            >
              <div className="p-3 rounded-full bg-forest-50 text-forest-700 group-hover:bg-forest-900 group-hover:text-lime-400 transition-colors">
                <Calendar className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-serif text-forest-900 font-medium">Private Client Inquiry</h3>
                  <ArrowRight className="h-5 w-5 text-stone-300 group-hover:text-forest-900 transition-colors" />
                </div>
                <p className="mt-2 text-stone-600 text-sm leading-relaxed">
                  Schedule a 15-minute intro call to discuss your income protection or wealth accumulation goals.
                </p>
              </div>
            </a>

            {/* Advisor Option */}
            <Link 
              href="/alliances" 
              className="group relative flex items-start gap-6 p-8 rounded-xl bg-white border border-stone-200 shadow-sm hover:border-forest-200 hover:shadow-md transition-all"
            >
              <div className="p-3 rounded-full bg-stone-100 text-stone-600 group-hover:bg-forest-900 group-hover:text-lime-400 transition-colors">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-serif text-forest-900 font-medium">Advisor Partnership</h3>
                  <ArrowRight className="h-5 w-5 text-stone-300 group-hover:text-forest-900 transition-colors" />
                </div>
                <p className="mt-2 text-stone-600 text-sm leading-relaxed">
                  For CPAs, P&C Agents, and Wealth Managers looking to implement a protection department.
                </p>
              </div>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-stone-200">
            <p className="text-stone-500 text-sm">
              Not ready to book? <Link href="/how-it-works" className="text-forest-800 font-medium underline underline-offset-4 hover:text-forest-600">Read about our process</Link> first.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
