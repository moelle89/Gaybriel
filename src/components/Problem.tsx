import React from 'react';
import { motion } from 'motion/react';
import { EyeOff, UserX, Smile, HelpCircle, HeartHandshake } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      id: 1,
      icon: <EyeOff className="w-5 h-5 text-portuguese-yellow-600" />,
      text: "You hide your true self out of fear of judgment from family, childhood friends, or traditional communities.",
      subtext: "Wearing a mask every day is exhausting. You filter your voice, your gestures, and your dreams just to feel safe."
    },
    {
      id: 2,
      icon: <UserX className="w-5 h-5 text-portuguese-yellow-600" />,
      text: "You feel isolated, lonely, and separated from the world, even when you are surrounded by a crowd.",
      subtext: "Believing that nobody truly knows the real you creates a painful wall between you and the people you love."
    },
    {
      id: 3,
      icon: <Smile className="w-5 h-5 text-portuguese-yellow-600" />,
      text: "You struggle to find the confidence to just breathe and exist as who you were truly meant to be.",
      subtext: "Constant self-doubt and internalised shame keep you frozen, delaying the beautiful life waiting for you."
    }
  ];

  return (
    <section
      id="problem"
      className="py-20 bg-sand-100 text-slate-800 relative overflow-hidden"
    >
      {/* Decorative portuguese abstract rays */}
      <div className="absolute inset-0 bg-gradient-to-b from-portuguese-yellow-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-portuguese-yellow-600 uppercase italic"
          >
            THE REALITY
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight"
          >
            Do you ever feel like you are{' '}
            <span className="font-serif italic font-normal text-ocean-blue-500 underline decoration-portuguese-yellow-400 decoration-2 underline-offset-4">
              living a double life?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base md:text-lg font-light max-w-2xl mx-auto"
          >
            I know that feeling all too well. It’s like living under water—you can see the sun above, but you can’t fully draw breath. Here is what is quietly draining your energy every single day:
          </motion.p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problems.map((prob, index) => (
            <motion.div
              key={prob.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-portuguese-yellow-200/30 hover:border-portuguese-yellow-300/60 shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4 text-left">
                <div className="w-10 h-10 rounded-full bg-portuguese-yellow-100 flex items-center justify-center text-sm border border-portuguese-yellow-200/40 group-hover:bg-portuguese-yellow-200/50 transition-all">
                  {prob.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {prob.text}
                </h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  {prob.subtext}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empathy Quote Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-white border border-portuguese-yellow-200/30 max-w-3xl mx-auto text-center space-y-4 shadow-xs"
        >
          <div className="inline-flex p-3 rounded-full bg-ocean-blue-50 text-ocean-blue-500 border border-ocean-blue-100">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <p className="font-serif italic text-lg md:text-xl text-slate-700 leading-relaxed font-light">
            "I spent my entire teenage years in a beautiful beach town in Portugal, yet I was trapped in a cold dark closet of my own making. I promise you: there is a way to bridge your heritage and your heart without losing either."
          </p>
          <p className="font-handwritten text-3xl text-portuguese-yellow-600 tracking-wide">
            — Gaybriel
          </p>
        </motion.div>

      </div>
    </section>
  );
}
