import React from 'react';
import { motion } from 'motion/react';
import { GAYBRIEL_IMAGES } from '../data';
import { ShieldCheck, Heart, Sparkles, Users } from 'lucide-react';

interface HeroProps {
  onOpenCheckout: () => void;
}

export default function Hero({ onOpenCheckout }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center bg-sand-50 overflow-hidden"
    >
      {/* Absolute Decorative Portuguese Sun & Ocean Blobs */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-portuguese-yellow-500/10 to-transparent pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-portuguese-yellow-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-ocean-blue-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
            
            {/* Small Pill Accent */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center self-start px-3.5 py-1.5 rounded-full bg-portuguese-yellow-100 text-portuguese-yellow-800 border border-portuguese-yellow-200/50 text-xs font-bold tracking-widest uppercase shadow-xs space-x-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-portuguese-yellow-600 animate-pulse" />
              <span>Gaybriel • Acceptance & Pride Mentor</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900"
            >
              Embrace Your Truth:{' '}
              <span className="block mt-2 font-serif italic font-normal text-ocean-blue-500 underline decoration-portuguese-yellow-400 decoration-3 underline-offset-6">
                It’s Beautiful to Be Exactly Who You Are.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed font-sans font-light"
            >
              Join my journey from hiding in the shadows to living out loud, and learn how you can finally find the courage to accept yourself, heal from fear of judgment, and thrive.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                id="hero-btn-start"
                onClick={onOpenCheckout}
                className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-950 text-white font-bold text-base shadow-lg shadow-slate-200 hover:scale-[1.02] transition-all duration-200 focus:outline-none cursor-pointer text-center"
              >
                Start Your Journey
              </button>
              <a
                id="hero-btn-story"
                href="#story"
                className="px-8 py-4 rounded-xl border border-slate-300 hover:border-ocean-blue-500 hover:text-ocean-blue-600 text-slate-700 font-bold text-base transition-all duration-200 hover:scale-[1.02] focus:outline-none text-center"
              >
                Read My Story
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-6 border-t border-sand-200 flex flex-wrap gap-y-4 gap-x-8 items-center"
            >
              <div className="flex items-center space-x-2 text-slate-500 text-sm">
                <Users className="w-5 h-5 text-ocean-blue-500" />
                <span className="font-semibold text-slate-700">50,000+</span>
                <span>Community allies</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-500 text-sm">
                <Heart className="w-5 h-5 text-rose-500" />
                <span>Radical Self-Love Focus</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-500 text-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span>100% Secure Space</span>
              </div>
            </motion.div>

          </div>

          {/* Hero Right Image - Card Mockup Layout with Sleek Interface style rotation */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] p-3 bg-gradient-to-tr from-ocean-blue-500 via-pink-400 to-portuguese-yellow-500 rounded-3xl rotate-3 shadow-xl group"
            >
              <div className="w-full h-full bg-white rounded-2xl overflow-hidden -rotate-3 border-4 border-white relative shadow-sm">
                {/* Image Asset */}
                <img
                  src={GAYBRIEL_IMAGES.portrait}
                  alt="Gaybriel, smiling confidently on a sunny balcony in Lisbon, Portugal"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Personal quote overlaid beautifully in handwritten accent font */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5 pointer-events-none">
                  <p className="font-handwritten text-4xl text-portuguese-yellow-300 tracking-wide leading-none">
                    "It’s okay to be gay. It’s actually beautiful."
                  </p>
                  <p className="text-xs font-sans font-semibold uppercase tracking-widest text-slate-300">
                    — GAYBRIEL, Lisbon, Portugal
                  </p>
                </div>
              </div>

              {/* Small Sunshine Floating Element */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-lg flex items-center space-x-2 animate-bounce pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                <span className="text-[11px] font-bold text-slate-800 tracking-wider">LISBON VIBES</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
