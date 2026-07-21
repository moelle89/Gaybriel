import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Star, MessageSquare, ShieldCheck, Quote } from 'lucide-react';

export default function SocialProof() {
  return (
    <section id="testimonials" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-ocean-blue-900/40 via-slate-950 to-slate-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-portuguese-yellow-400 uppercase italic">
            HEARTFELT ECHOES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
            Loved By Our{' '}
            <span className="block mt-2 font-serif italic font-normal text-ocean-blue-400 underline decoration-portuguese-yellow-400 decoration-2 underline-offset-4">
              Global Chosen Family.
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-light max-w-2xl mx-auto">
            These are real letters, stories, and expressions of gratitude sent to Gaybriel by members who found the confidence to open up, stand tall, and breathe freely.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 relative flex flex-col justify-between group shadow-xs"
            >
              {/* Card Quote Icon Decoration */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 group-hover:text-white/10 transition-colors pointer-events-none" />

              <div className="space-y-6">
                {/* Rating */}
                <div className="flex text-portuguese-yellow-500 space-x-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-portuguese-yellow-500" />
                  ))}
                </div>

                {/* Letter Text */}
                <p className="text-sm text-slate-300 font-light leading-relaxed italic text-left">
                  "{t.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-white/10 mt-6 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-portuguese-yellow-500 to-ocean-blue-500 flex items-center justify-center text-white font-extrabold text-xs shadow-xs">
                  {t.name.split(' ')[0][0]}
                  {t.name.split(' ')[1] ? t.name.split(' ')[1][0] : ''}
                </div>
                <div className="leading-tight text-left">
                  <h4 className="text-sm font-bold text-slate-100">{t.name}</h4>
                  <div className="flex items-center space-x-1">
                    <span className="text-[10px] text-slate-400">{t.location}</span>
                    <span className="text-[8px] text-slate-500">•</span>
                    <span className="text-[10px] text-portuguese-yellow-400 font-semibold">{t.role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust indicator */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-center text-xs text-slate-400 font-light max-w-2xl mx-auto p-6 rounded-2xl bg-white/5 border border-white/5">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold text-slate-200">Moderated Safe Space</span>
          </div>
          <span className="hidden sm:inline text-white/10">|</span>
          <p>
            Every testimonial is shared with absolute consent, utilizing real names or verified aliases to safeguard their personal safety.
          </p>
        </div>

      </div>
    </section>
  );
}
