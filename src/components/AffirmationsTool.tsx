import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AFFIRMATIONS } from '../data';
import { Sparkles, Copy, Check, RefreshCw } from 'lucide-react';

export default function AffirmationsTool() {
  const [activeCategory, setActiveCategory] = useState<string>('Self-Acceptance');
  const [copied, setCopied] = useState(false);

  const categories = Array.from(new Set(AFFIRMATIONS.map((a) => a.category)));
  
  const currentAffirmation = AFFIRMATIONS.find(
    (a) => a.category === activeCategory
  ) || AFFIRMATIONS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(`"${currentAffirmation.text}" — ${currentAffirmation.quoteBy}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRandom = () => {
    const remaining = AFFIRMATIONS.filter((a) => a.category !== activeCategory);
    if (remaining.length > 0) {
      const randomItem = remaining[Math.floor(Math.random() * remaining.length)];
      setActiveCategory(randomItem.category);
    }
  };

  return (
    <div
      id="affirmations-tool"
      className="p-8 sm:p-10 rounded-3xl bg-white border border-portuguese-yellow-200/40 shadow-xs max-w-2xl mx-auto space-y-6"
    >
      <div className="text-center space-y-2">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-portuguese-yellow-100 text-portuguese-yellow-800 text-[10px] font-bold uppercase tracking-wider border border-portuguese-yellow-200/30">
          <Sparkles className="w-3.5 h-3.5 text-portuguese-yellow-600" />
          <span>Daily Empowerment Companion</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">
          Pick Your Daily Affirmation
        </h3>
        <p className="text-sm text-slate-500 font-light max-w-md mx-auto">
          Need a spark of courage today? Select a theme below to receive an empowering reminder curated directly by Gaybriel.
        </p>
      </div>

      {/* Category selector pills */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            id={`affirmation-tab-${cat.toLowerCase().replace(' ', '-')}`}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-sand-100 text-slate-600 hover:bg-sand-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Affirmation Card Box */}
      <div className="relative min-h-[160px] bg-sand-50 rounded-2xl p-6 sm:p-8 border border-portuguese-yellow-200/20 shadow-xs flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Quote watermark background */}
        <span className="absolute top-2 left-6 text-7xl font-serif text-sand-200 select-none pointer-events-none opacity-50">
          “
        </span>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentAffirmation.id}
            initial={{ opacity: 0, scale: 0.98, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -5 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 z-10"
          >
            <p className="font-serif italic text-base sm:text-lg text-slate-700 leading-relaxed max-w-lg">
              "{currentAffirmation.text}"
            </p>
            <p className="font-handwritten text-2xl text-portuguese-yellow-600 tracking-wider">
              — {currentAffirmation.quoteBy}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Interactive Actions */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
        <button
          id="btn-random-affirmation"
          onClick={handleRandom}
          className="flex items-center space-x-2 text-xs font-bold text-ocean-blue-600 hover:text-ocean-blue-700 hover:underline cursor-pointer focus:outline-none"
        >
          <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
          <span>Surprise Me</span>
        </button>

        <button
          id="btn-copy-affirmation"
          onClick={handleCopy}
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border transition-all text-xs font-semibold cursor-pointer ${
            copied
              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Quote</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
