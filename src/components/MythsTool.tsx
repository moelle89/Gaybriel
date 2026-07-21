import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MYTHS } from '../data';
import { HelpCircle, CheckCircle, ShieldAlert, AlertTriangle, ArrowRight } from 'lucide-react';

export default function MythsTool() {
  const [revealedIds, setRevealedIds] = useState<string[]>([]);

  const toggleReveal = (id: string) => {
    if (revealedIds.includes(id)) {
      setRevealedIds(revealedIds.filter((item) => item !== id));
    } else {
      setRevealedIds([...revealedIds, id]);
    }
  };

  const revealAll = () => {
    if (revealedIds.length === MYTHS.length) {
      setRevealedIds([]);
    } else {
      setRevealedIds(MYTHS.map((m) => m.id));
    }
  };

  return (
    <section id="myths" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background sun rays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-portuguese-yellow-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-portuguese-yellow-600 uppercase italic">
            DEBUNKING THE NOISE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Myths About Coming Out{' '}
            <span className="block mt-2 font-serif italic font-normal text-ocean-blue-500 underline decoration-portuguese-yellow-400 decoration-2 underline-offset-4">
              vs. The Real Truth.
            </span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-light max-w-2xl mx-auto">
            Society and culture often feed us fears that aren't based in reality. Click on each card to dissolve the myth and unlock Gaybriel’s empowering truth.
          </p>

          <button
            id="btn-reveal-all-myths"
            onClick={revealAll}
            className="inline-flex items-center space-x-2 text-xs font-bold text-ocean-blue-600 hover:text-ocean-blue-700 bg-ocean-blue-50 hover:bg-ocean-blue-100 px-5 py-2.5 rounded-full cursor-pointer focus:outline-none transition-colors border border-ocean-blue-100/50"
          >
            <span>{revealedIds.length === MYTHS.length ? 'Reset All Cards' : 'Reveal All Truths'}</span>
            <ArrowRight className="w-3 h-3 text-portuguese-yellow-500" />
          </button>
        </div>

        {/* Myths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {MYTHS.map((item, idx) => {
            const isRevealed = revealedIds.includes(item.id);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => toggleReveal(item.id)}
                className={`relative p-8 rounded-3xl border cursor-pointer select-none min-h-[220px] flex flex-col justify-between transition-all duration-300 ${
                  isRevealed
                    ? 'bg-sand-100 border-portuguese-yellow-300 shadow-sm ring-1 ring-portuguese-yellow-400/10'
                    : 'bg-white border-portuguese-yellow-200/20 hover:bg-sand-50 hover:border-portuguese-yellow-300/40 hover:shadow-xs'
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Card Header Tag */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full ${
                        isRevealed
                          ? 'bg-portuguese-yellow-100 text-portuguese-yellow-800'
                          : 'bg-rose-50 text-rose-600'
                      }`}
                    >
                      {isRevealed ? 'THE TRUTH UNLOCKED' : 'COMMON MYTH'}
                    </span>
                    <div>
                      {isRevealed ? (
                        <CheckCircle className="w-5 h-5 text-emerald-500 fill-emerald-50" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-rose-400" />
                      )}
                    </div>
                  </div>

                  {/* Card Body - Alternating Content */}
                  <AnimatePresence mode="wait">
                    {!isRevealed ? (
                      <motion.div
                        key="myth"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-2"
                      >
                        <h4 className="text-lg font-bold text-slate-800 tracking-tight leading-snug">
                          "{item.myth}"
                        </h4>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                          <span>Click card to flip</span>
                          <ArrowRight className="w-3 h-3 animate-pulse" />
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="truth"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-2"
                      >
                        <h4 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
                          {item.truth}
                        </h4>
                        <p className="text-sm text-slate-600 font-light leading-relaxed">
                          {item.explanation}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
