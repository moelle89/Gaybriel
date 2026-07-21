import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BONUS_ITEMS } from '../data';
import { Gift, Clock, Sparkles, AlertCircle, ShieldAlert } from 'lucide-react';

interface BonusProps {
  onOpenCheckout: () => void;
}

export default function Bonus({ onOpenCheckout }: BonusProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 14, seconds: 55 });

  // Simple countdown simulator
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset to 2 hours to avoid showing expired to future testers
          return { hours: 2, minutes: 14, seconds: 55 };
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNum = (num: number) => num.toString().padStart(2, '0');

  return (
    <section id="bonuses" className="py-24 bg-sand-50 relative overflow-hidden">
      {/* Decorative wave element */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-portuguese-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Urgency Announcement Card */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 text-white mb-16 max-w-4xl mx-auto shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Urgency Info */}
            <div className="md:col-span-7 space-y-4 text-left">
              <span className="inline-flex items-center space-x-1 bg-white/10 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 text-portuguese-yellow-400" />
                <span>Limited Time Inclusion</span>
              </span>
              <h3 className="text-3xl font-serif italic font-normal text-slate-100 tracking-tight leading-tight">
                Unlock Over $93 in <span className="font-sans font-extrabold text-portuguese-yellow-400">Exclusive Bonuses</span> Added Free—Today Only!
              </h3>
              <p className="text-slate-300 font-light text-xs sm:text-sm leading-relaxed">
                To celebrate our global community expansion, when you secure "The Authentic You" guide before the timer hits zero, you get three transformative bonus assets, 100% free of charge.
              </p>
            </div>

            {/* Countdown Clock */}
            <div className="md:col-span-5 flex flex-col items-center justify-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-3 text-portuguese-yellow-200 flex items-center space-x-1">
                <span>Offer Expires In:</span>
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-center">
                  <span className="font-mono font-bold text-3xl sm:text-4xl tracking-tight bg-slate-950/40 px-3 py-2 rounded-xl min-w-[55px] text-center">
                    {formatNum(timeLeft.hours)}
                  </span>
                  <span className="text-[9px] font-bold uppercase mt-1 text-slate-400">Hours</span>
                </div>
                <span className="font-bold text-2xl mb-5 text-slate-500">:</span>
                <div className="flex flex-col items-center">
                  <span className="font-mono font-bold text-3xl sm:text-4xl tracking-tight bg-slate-950/40 px-3 py-2 rounded-xl min-w-[55px] text-center">
                    {formatNum(timeLeft.minutes)}
                  </span>
                  <span className="text-[9px] font-bold uppercase mt-1 text-slate-400">Mins</span>
                </div>
                <span className="font-bold text-2xl mb-5 text-slate-500">:</span>
                <div className="flex flex-col items-center">
                  <span className="font-mono font-bold text-3xl sm:text-4xl tracking-tight bg-slate-950/40 px-3 py-2 rounded-xl min-w-[55px] text-center text-portuguese-yellow-400">
                    {formatNum(timeLeft.seconds)}
                  </span>
                  <span className="text-[9px] font-bold uppercase mt-1 text-slate-400">Secs</span>
                </div>
              </div>

              <span className="text-[10px] font-light mt-4 text-slate-400 flex items-center space-x-1">
                <AlertCircle className="w-3 h-3 text-portuguese-yellow-400" />
                <span>Mentoring spots fill fast each month.</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bonus Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {BONUS_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-portuguese-yellow-200/30 shadow-xs relative flex flex-col justify-between hover:border-portuguese-yellow-300/60 hover:shadow-xs transition-all duration-300"
            >
              <div className="space-y-4 text-left">
                {/* Badge */}
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-extrabold tracking-widest text-portuguese-yellow-600 bg-portuguese-yellow-50 border border-portuguese-yellow-200/50 px-2.5 py-1 rounded-full uppercase">
                    {item.badge}
                  </span>
                  <Gift className="w-5 h-5 text-portuguese-yellow-500" />
                </div>

                {/* Info */}
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-slate-800 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider flex items-center space-x-1">
                    <span>{item.subtitle}</span>
                    <span className="text-slate-300 line-through">• Included Free</span>
                  </p>
                </div>

                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom micro-CTA */}
        <div className="text-center">
          <button
            id="btn-claim-bonuses"
            onClick={onOpenCheckout}
            className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-950 text-white font-bold text-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-lg cursor-pointer shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-portuguese-yellow-400" />
            <span>Secure My PDF + Three Bonuses For $29</span>
          </button>
        </div>

      </div>
    </section>
  );
}
