import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';

interface StickyCTAProps {
  onOpenCheckout: () => void;
}

export default function StickyCTA({ onOpenCheckout }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after user has scrolled 600px down (past the hero)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="sticky-cta-bar"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-[0_-8px_30px_rgb(0,0,0,0.08)] py-4 px-4 sm:px-6 md:px-8"
        >
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Promo Left */}
            <div className="flex items-center space-x-3 text-left">
              <span className="w-9 h-9 rounded-full bg-portuguese-yellow-100 flex items-center justify-center text-portuguese-yellow-600 border border-portuguese-yellow-200/40 shadow-xs flex-shrink-0">
                <Heart className="w-4.5 h-4.5 fill-portuguese-yellow-500 text-portuguese-yellow-500" />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-bold text-slate-800 flex items-center space-x-1.5">
                  <span>Start Your Acceptance Journey</span>
                  <span className="text-[10px] text-ocean-blue-600 bg-ocean-blue-50 border border-ocean-blue-100/50 px-1.5 py-0.5 rounded-sm uppercase font-extrabold tracking-wider">70% OFF</span>
                </p>
                <p className="text-[10px] text-slate-500 font-light">
                  "The Authentic You" Guidebook + Mentorship Support for just <span className="font-bold text-slate-700">$29</span>.
                </p>
              </div>
            </div>

            {/* CTA Button Right */}
            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button
                id="btn-sticky-claim"
                onClick={onOpenCheckout}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-950 text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 shadow-sm flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <span>Unlock Your True Self</span>
                <ArrowRight className="w-3.5 h-3.5 text-portuguese-yellow-400" />
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
