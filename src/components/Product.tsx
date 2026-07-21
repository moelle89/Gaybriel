import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GAYBRIEL_IMAGES } from '../data';
import { CheckCircle, ShieldCheck, CreditCard, ChevronDown, ChevronUp, Star, Users, Flame, Eye } from 'lucide-react';

interface ProductProps {
  onOpenCheckout: () => void;
}

export default function Product({ onOpenCheckout }: ProductProps) {
  const [activeChapter, setActiveChapter] = useState<number | null>(0);

  const chapters = [
    {
      num: 1,
      title: 'Healing the Shame Anchor',
      desc: 'How to dismantle the deep-seated guilt and cultural expectations holding you back. This chapter has 5 guided journaling exercises to establish your secure core.'
    },
    {
      num: 2,
      title: 'The Blueprint for Safe Self-Acceptance',
      desc: 'A complete mental health checklist to measure your emotional readiness. Learn the difference between self-sharing and seeking validation.'
    },
    {
      num: 3,
      title: 'Navigating Family & Cultural Conversations',
      desc: 'Word-for-word scripts and empathetic strategies for sharing your truth with parents, siblings, and friends, even in highly traditional environments.'
    },
    {
      num: 4,
      title: 'Architecting Your Chosen Tribe',
      desc: 'How to find, build, and sustain a safe community of people who love you unconditionally. Includes our private global network guide.'
    }
  ];

  const highlights = [
    '240-Page Interactive Digital PDF Guide',
    '8 Self-Discovery Workbook Sheets',
    '3 Guided Coastal Meditation Audios',
    'Immediate Access to Private Discord Circle',
    'Monthly Live Video Mentoring with Gaybriel'
  ];

  return (
    <section id="guide" className="py-24 bg-sand-50 relative overflow-hidden">
      
      {/* Decorative sun element */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-portuguese-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-ocean-blue-600 uppercase italic">
            THE DIGITAL MASTERCLASS & COMMUNITY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Your Blueprint to{' '}
            <span className="font-serif italic font-normal text-ocean-blue-500 underline decoration-portuguese-yellow-400 decoration-2 underline-offset-4">
              Unshakable Pride.
            </span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-light max-w-2xl mx-auto">
            Skip the years of isolation, self-doubt, and fear. Access the exact steps, scripts, and mental frameworks to accept yourself and live a life of vibrant freedom.
          </p>
        </div>

        {/* Main Product Presentation Card */}
        <div className="bg-white rounded-3xl border border-portuguese-yellow-200/40 shadow-xs overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Side: Mockup and Highlights */}
            <div className="lg:col-span-5 bg-sand-100 p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-portuguese-yellow-200/20">
              <div className="space-y-8">
                {/* Book Cover Image Mockup */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xs border-4 border-white group">
                  <img
                    src={GAYBRIEL_IMAGES.guideCover}
                    alt="The Authentic You: Guide Cover Mockup on table"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-ocean-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md">
                    DIGITAL + COMMUNITY
                  </div>
                </div>

                {/* Bullet Highlights */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest">
                    What is included inside:
                  </h4>
                  <ul className="space-y-3">
                    {highlights.map((h, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm text-slate-600 font-light text-left">
                        <CheckCircle className="w-5 h-5 text-emerald-500 fill-emerald-50 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Secure guarantee badge */}
              <div className="pt-8 border-t border-portuguese-yellow-200/30 mt-8 flex items-center space-x-3 text-slate-500">
                <ShieldCheck className="w-8 h-8 text-emerald-500 flex-shrink-0" />
                <div className="leading-tight text-left">
                  <p className="text-xs font-bold text-slate-700">14-Day Guarantee</p>
                  <p className="text-[10px] font-light">Love it or full refund, no questions asked.</p>
                </div>
              </div>
            </div>

            {/* Right Side: Chapter Explorer & High-Converting Buy Box */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8">
              
              {/* Product Info & Chapters Accordion */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <div className="flex text-portuguese-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-portuguese-yellow-500 text-portuguese-yellow-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    (429+ Verified 5-Star Reviews)
                  </span>
                </div>

                <div className="space-y-2 text-left">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-none">
                    The Authentic You
                  </h3>
                  <p className="text-sm text-slate-500 font-light italic">
                    A Practical Guide to Overcoming Judgment, Loving Who You Are, and Building Chosen Family.
                  </p>
                </div>

                {/* Dynamic Chapter Accordion */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider text-left">
                    Explore the Chapter Map:
                  </h4>
                  <div className="space-y-2">
                    {chapters.map((ch, idx) => {
                      const isOpen = activeChapter === idx;
                      return (
                        <div
                          key={ch.num}
                          className={`rounded-xl border transition-all duration-300 ${
                            isOpen
                              ? 'bg-ocean-blue-50/50 border-ocean-blue-200'
                              : 'bg-white border-slate-100 hover:border-slate-200'
                          }`}
                        >
                          <button
                            id={`chapter-toggle-${ch.num}`}
                            onClick={() => setActiveChapter(isOpen ? null : idx)}
                            className="w-full text-left p-4 flex items-center justify-between focus:outline-none cursor-pointer"
                          >
                            <span className="text-sm font-bold text-slate-800">
                              Chapter {ch.num}: {ch.title}
                            </span>
                            {isOpen ? (
                              <ChevronUp className="w-4 h-4 text-ocean-blue-600" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-slate-400" />
                            )}
                          </button>
                          {isOpen && (
                            <div className="px-4 pb-4 text-xs text-slate-600 font-light leading-relaxed border-t border-ocean-blue-100/50 pt-2 text-left">
                              {ch.desc}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* High-Converting Checkout Box */}
              <div className="p-6 sm:p-8 rounded-2xl bg-sand-100 border border-portuguese-yellow-200/40 space-y-6">
                
                {/* Pricing Block with urgent pill */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1 text-left">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest line-through">
                      Regular Value: $99.00
                    </span>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#00A8CC]">$29</span>
                      <span className="text-sm font-bold text-slate-500">.00 USD</span>
                      <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100 uppercase ml-2">
                        Save 70%
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 text-xs font-semibold text-portuguese-yellow-700 bg-portuguese-yellow-100 border border-portuguese-yellow-200/50 px-3 py-1.5 rounded-lg animate-pulse self-start sm:self-center">
                    <Flame className="w-3.5 h-3.5 text-portuguese-yellow-600" />
                    <span>Special Price Today Only</span>
                  </div>
                </div>

                {/* Main CTA */}
                <div className="space-y-3">
                  <button
                    id="btn-buy-product"
                    onClick={onOpenCheckout}
                    className="w-full py-4 rounded-xl bg-slate-900 hover:bg-slate-950 text-white font-bold text-base transition-all duration-300 hover:scale-[1.01] hover:shadow-lg focus:outline-none cursor-pointer text-center shadow-xs"
                  >
                    Unlock Your True Self Now
                  </button>
                  <p className="text-[10px] text-center text-slate-400 font-light flex items-center justify-center space-x-1">
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Discreet billing: Displays generic "EMPOWERMENT MEDIA" on statements.</span>
                  </p>
                </div>

                {/* Dynamic Counter / Social Proof element */}
                <div className="pt-4 border-t border-portuguese-yellow-200/30 flex items-center justify-between text-xs text-slate-500 font-light">
                  <div className="flex items-center space-x-1.5">
                    <Users className="w-4 h-4 text-ocean-blue-500" />
                    <span>18 others viewing this page</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 font-semibold">9 spots left in mentoring</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
