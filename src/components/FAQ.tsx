import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data';
import { HelpCircle, ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('f1');

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative ocean gradient blob */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-ocean-blue-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-ocean-blue-600 uppercase italic">
            SAFE SPACE Q&A
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Frequently Asked{' '}
            <span className="block mt-2 font-serif italic font-normal text-ocean-blue-500 underline decoration-portuguese-yellow-400 decoration-2 underline-offset-4">
              Questions.
            </span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-light">
            Your journey is personal, and it’s completely natural to have questions or concerns. Explore our transparent, safe, and supportive answers.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'bg-ocean-blue-50/50 border-ocean-blue-200 shadow-xs'
                    : 'bg-white border-portuguese-yellow-200/20 hover:bg-sand-50/50 hover:border-portuguese-yellow-300/40'
                }`}
              >
                <button
                  id={`faq-btn-toggle-${item.id}`}
                  onClick={() => toggleOpen(item.id)}
                  className="w-full text-left p-6 flex items-center justify-between focus:outline-none cursor-pointer"
                >
                  <span className="font-semibold text-slate-800 text-sm sm:text-base pr-4">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-500 shadow-xs">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-ocean-blue-600" />
                    ) : (
                      <Plus className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-ocean-blue-100/50"
                    >
                      <div className="p-6 text-slate-600 font-light text-xs sm:text-sm leading-relaxed space-y-3 text-left">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-sand-100 border border-portuguese-yellow-200/40 mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-3xl mx-auto">
          <div className="flex items-start space-x-3 text-left">
            <HelpCircle className="w-6 h-6 text-ocean-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-slate-800">Have a deeper or custom question?</h4>
              <p className="text-xs text-slate-500 font-light">My team and I are here to hold space for you. Your inquiry is entirely confidential.</p>
            </div>
          </div>
          <a
            id="faq-btn-contact"
            href="mailto:manuel.moellmann@gmail.com"
            className="px-5 py-2.5 rounded-xl border border-slate-200 hover:border-ocean-blue-500 hover:text-ocean-blue-600 bg-white text-slate-600 font-bold text-xs tracking-wider uppercase transition-colors"
          >
            Ask Confidential
          </a>
        </div>

      </div>
    </section>
  );
}
