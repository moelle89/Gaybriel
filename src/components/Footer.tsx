import React from 'react';
import { Heart, Mail, Compass, MessageSquare, Shield, Smile, Anchor } from 'lucide-react';

interface FooterProps {
  onOpenCheckout: () => void;
  onOpenNewsletter: () => void;
}

export default function Footer({ onOpenCheckout, onOpenNewsletter }: FooterProps) {
  return (
    <footer id="site-footer" className="relative bg-slate-950 text-white overflow-hidden">
      
      {/* 1. FINAL EMOTIONAL CALL TO ACTION (The Crown Jewel) */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ocean-blue-900/40 via-slate-950 to-slate-950 text-center space-y-8 z-10">
        
        {/* Glowing sun badge */}
        <div className="inline-flex p-4 rounded-full bg-portuguese-yellow-500/10 text-portuguese-yellow-400 border border-portuguese-yellow-500/20 animate-pulse">
          <Smile className="w-8 h-8" />
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
            Your authentic life is waiting.{' '}
            <span className="block mt-2 font-serif italic font-normal text-ocean-blue-400 underline decoration-portuguese-yellow-400 decoration-2 underline-offset-4">
              Don’t hide your light for another day.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto">
            You have spent enough time editing who you are to make others comfortable. Step into a world of acceptance, peace, and vibrant pride.
          </p>
        </div>

        {/* Big Conversion Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
          <button
            id="footer-btn-claim"
            onClick={onOpenCheckout}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-portuguese-yellow-500 hover:bg-portuguese-yellow-600 text-slate-950 font-black text-base tracking-wide transition-all duration-300 hover:scale-[1.01] hover:shadow-lg cursor-pointer"
          >
            Join the Community Now
          </button>
          <button
            id="footer-btn-newsletter"
            onClick={onOpenNewsletter}
            className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-white/20 hover:border-white/50 text-white font-bold text-sm tracking-wide transition-all duration-300 hover:bg-white/5 cursor-pointer"
          >
            Join Free Newsletter Circle
          </button>
        </div>

        {/* Small trust reassurances */}
        <p className="text-[10px] text-slate-500 font-light max-w-sm mx-auto flex items-center justify-center space-x-1">
          <Shield className="w-3.5 h-3.5 text-emerald-400" />
          <span>Entirely safe space • Discreet billing statement • 100% Confidential</span>
        </p>

      </div>

      {/* 2. DIRECTORY & SAFE SPACE DISCLOSURE FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Logo & Philosophy Column */}
          <div className="md:col-span-5 space-y-6">
            <a href="#hero" className="flex items-center space-x-2 group">
              <span className="w-10 h-10 rounded-full bg-linear-to-r from-portuguese-yellow-500 to-ocean-blue-500 flex items-center justify-center text-white shadow-md">
                <Heart className="w-5 h-5 fill-white" />
              </span>
              <div className="flex flex-col text-left">
                <span className="text-xl font-display font-black tracking-wider text-slate-100 leading-none">
                  GAYBRIEL
                </span>
                <span className="text-[9px] font-sans font-bold tracking-widest text-portuguese-yellow-500 uppercase mt-1">
                  Acceptance & Mentorship
                </span>
              </div>
            </a>

            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm text-left">
              An international LGBTQ+ empowerment brand rooted in the sun-drenched coastal vibes of Lisbon, Cascais, and Porto. We dedicated our platform to helping you dismantle shame, find chosen family, and live with radical pride.
            </p>

            <div className="flex items-center space-x-4">
              <Compass className="w-5 h-5 text-portuguese-yellow-500" />
              <Anchor className="w-5 h-5 text-ocean-400" />
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest border-b border-white/10 pb-1.5">
              Explore Safe Haven
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-light">
              <li>
                <a href="#story" className="hover:text-portuguese-yellow-400 transition-colors">
                  My Story (Growing up in Portugal)
                </a>
              </li>
              <li>
                <a href="#myths" className="hover:text-portuguese-yellow-400 transition-colors">
                  Myths vs Truths
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-portuguese-yellow-400 transition-colors">
                  Joy Gallery (Visual snaps)
                </a>
              </li>
              <li>
                <a href="#guide" className="hover:text-portuguese-yellow-400 transition-colors">
                  "The Authentic You" Guidebook
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-portuguese-yellow-400 transition-colors">
                  FAQs & Support Q&A
                </a>
              </li>
            </ul>
          </div>

          {/* Safe Space disclosure and Helpline */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest border-b border-white/10 pb-1.5">
              Unconditional Support
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed font-light">
              If you are currently experiencing a psychological crisis or feel unsafe in your environment, please know you are not alone. Consider reaching out to local, safe, confidential mental health resources:
            </p>
            <div className="bg-white/5 border border-white/5 p-4 rounded-xl space-y-2 text-[10px] text-slate-400 leading-normal">
              <p>
                <span className="font-bold text-slate-200">The Trevor Project (US):</span> Call 1-866-488-7386 or text START to 678-678.
              </p>
              <p>
                <span className="font-bold text-slate-200">Switchboard (UK):</span> Call 0300 330 0630.
              </p>
              <p>
                <span className="font-bold text-slate-200">Portugal Helpline (MAP):</span> Association MAP / ILGA Portugal.
              </p>
            </div>
          </div>

        </div>

        {/* 3. Bottom Credits */}
        <div className="pt-12 mt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-500 font-light gap-4">
          <p>© {new Date().getFullYear()} Gaybriel Brand. Created with deep love, Acceptance & Ocean Waves.</p>
          <div className="flex items-center space-x-4">
            <a href="mailto:manuel.moellmann@gmail.com" className="hover:text-slate-300 transition-colors flex items-center space-x-1">
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Gaybriel</span>
            </a>
          </div>
        </div>

      </div>

    </footer>
  );
}
