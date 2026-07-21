import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Shield, CheckCircle, Heart, X, Sparkles } from 'lucide-react';

interface NewsletterProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export default function Newsletter({ isOpenModal = false, onCloseModal }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API registration
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      // Save locally to simulate lead generation
      const leads = JSON.parse(localStorage.getItem('gaybriel_leads') || '[]');
      leads.push({ name, email, date: new Date().toISOString() });
      localStorage.setItem('gaybriel_leads', JSON.stringify(leads));
    }, 1200);
  };

  const formContent = (
    <div className="space-y-6">
      <div className="space-y-2 text-center md:text-left">
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
          Join My Weekly{' '}
          <span className="block mt-1 font-serif italic font-normal text-ocean-blue-500 underline decoration-portuguese-yellow-400 decoration-2 underline-offset-4">
            Acceptance Letter Circle.
          </span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
          Over 50,000 members receive my free weekly notes on self-acceptance, overcoming shame, navigating families, and finding quiet joy. Completely free. No spam. Unsubscribe anytime.
        </p>
      </div>

      <form id="newsletter-form" onSubmit={handleSubmit} className="space-y-3.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="newsletter-name" className="sr-only">First Name</label>
            <input
              id="newsletter-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your First Name"
              className="w-full px-4 py-3 rounded-xl border border-portuguese-yellow-200/40 focus:border-ocean-blue-500 focus:ring-1 focus:ring-ocean-blue-500 bg-white text-slate-800 text-sm font-medium outline-hidden transition-all placeholder:text-slate-400"
            />
          </div>
          <div>
            <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address"
              className="w-full px-4 py-3 rounded-xl border border-portuguese-yellow-200/40 focus:border-ocean-blue-500 focus:ring-1 focus:ring-ocean-blue-500 bg-white text-slate-800 text-sm font-medium outline-hidden transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        <button
          id="btn-newsletter-submit"
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-950 disabled:bg-slate-400 text-white font-bold text-sm tracking-wider uppercase shadow-xs transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center space-x-2 cursor-pointer"
        >
          {isLoading ? (
            <span>Sending Warmth...</span>
          ) : (
            <>
              <Mail className="w-4 h-4 text-portuguese-yellow-400" />
              <span>Subscribe & Claim My Free Affirmation Guide</span>
            </>
          )}
        </button>
      </form>

      {/* Safety info */}
      <div className="flex items-center justify-center md:justify-start space-x-2 text-[10px] text-slate-400 font-light pt-2 border-t border-slate-100">
        <Shield className="w-3.5 h-3.5 text-emerald-500" />
        <span>100% Secure. Your email is encrypted and never shared.</span>
      </div>
    </div>
  );

  const successContent = (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center p-6 space-y-6"
    >
      <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-200 animate-bounce">
        <CheckCircle className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          Welcome to the Chosen Family!
        </h3>
        <p className="text-sm text-slate-600 font-light max-w-sm mx-auto leading-relaxed">
          Obrigado, <span className="font-semibold text-slate-800">{name}</span>! 
          Check your inbox shortly. I just sent you a warm welcome letter and your free copy of my <span className="font-semibold text-ocean-blue-600">Daily Affirmation Handbook</span>.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-portuguese-yellow-50/50 border border-portuguese-yellow-200/30 flex items-start space-x-2 text-left max-w-sm mx-auto">
        <Heart className="w-5 h-5 text-rose-500 fill-rose-500/20 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-slate-600 leading-normal font-light italic">
          "I am so proud of you for choosing self-love today. Every Sunday, we breathe, reflect, and stand proud together." — Gaybriel
        </p>
      </div>

      {onCloseModal && (
        <button
          id="btn-success-close-modal"
          onClick={onCloseModal}
          className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-950 text-white font-bold text-xs tracking-wider uppercase transition-all"
        >
          Explore Website
        </button>
      )}
    </motion.div>
  );

  // If used as a floating popup modal
  if (isOpenModal) {
    return (
      <div
        id="newsletter-modal"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
        onClick={onCloseModal}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-lg border border-portuguese-yellow-200/20 p-8 sm:p-10"
          onClick={(e) => e.stopPropagation()}
        >
          {onCloseModal && (
            <button
              id="btn-close-newsletter-modal"
              onClick={onCloseModal}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div key="form" exit={{ opacity: 0 }}>
                <div className="flex justify-center mb-4 text-portuguese-yellow-500">
                  <Sparkles className="w-8 h-8 animate-pulse" />
                </div>
                {formContent}
              </motion.div>
            ) : (
              <motion.div key="success">
                {successContent}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    );
  }

  // If used as a static section
  return (
    <section id="newsletter-section" className="py-20 bg-sand-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-portuguese-yellow-200/30 shadow-xs p-8 sm:p-12">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative w-40 h-40 rounded-3xl bg-gradient-to-tr from-portuguese-yellow-400 to-ocean-blue-500 flex items-center justify-center text-white shadow-xs border-4 border-white rotate-3">
                    <Mail className="w-16 h-16 text-white" />
                    <span className="absolute -bottom-2 -right-2 bg-rose-500 text-white font-extrabold text-[9px] tracking-widest px-2.5 py-1 rounded-full border-2 border-white animate-pulse">
                      FREE GUIDE
                    </span>
                  </div>
                </div>
                <div className="md:col-span-7">
                  {formContent}
                </div>
              </div>
            ) : (
              successContent
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
