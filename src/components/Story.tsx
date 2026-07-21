import React from 'react';
import { motion } from 'motion/react';
import { Compass, Anchor, Sunset, Award, ShieldAlert } from 'lucide-react';

export default function Story() {
  const points = [
    {
      id: 1,
      icon: <Compass className="w-5 h-5 text-ocean-blue-600" />,
      title: 'The Cultural Struggle',
      description: 'Born and raised in the breathtaking seaside cliffs of Portugal, I was surrounded by a rich culture, traditional values, and a close-knit community. Yet, I believed that my authentic feelings would shatter my relationships.'
    },
    {
      id: 2,
      icon: <Sunset className="w-5 h-5 text-ocean-blue-600" />,
      title: 'The Atlantic Turning Point',
      description: 'One evening, standing on a windy cliff at Boca do Inferno in Cascais, looking out at the boundless Atlantic Ocean, it hit me: Nature does not make mistakes. The vast ocean is diverse, and so are we. Being gay is not a curse; it is a gift of empathy.'
    },
    {
      id: 3,
      icon: <Anchor className="w-5 h-5 text-ocean-blue-600" />,
      title: 'Finding My Chosen Family',
      description: 'When I chose to speak my truth, some doors closed. But the universe opened doors I never knew existed. I found deep, life-saving friendships that became my anchor. They became my chosen family.'
    },
    {
      id: 4,
      icon: <Award className="w-5 h-5 text-ocean-blue-600" />,
      title: 'Radical Self-Acceptance',
      description: 'Self-love is the ultimate form of rebellion against judgment. I decided to stop seeking permission to exist. Today, I mentor thousands around the globe to step into their light and live boldly.'
    }
  ];

  return (
    <section
      id="story"
      className="py-24 bg-sand-50 relative overflow-hidden"
    >
      {/* Decorative portuguese sun top bar */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-portuguese-yellow-400 via-pink-400 to-ocean-blue-500 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Story Content Left */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest text-ocean-blue-600 uppercase italic">
                THE ADVOCATE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                From Hiding in the Shadows to{' '}
                <span className="block mt-2 font-serif italic font-normal text-ocean-blue-500 underline decoration-portuguese-yellow-400 decoration-2 underline-offset-4">
                  Living Out Loud.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 font-sans font-light text-base sm:text-lg leading-relaxed">
              <p>
                Olá, I’m Gabriel—known to my community as <span className="font-semibold text-slate-800">Gaybriel</span>. 
                Growing up in a traditional Portuguese coastal town, my biggest fear was that who I loved would disappoint everyone who loved me. 
                I spent years editing my words, monitoring my laugh, and keeping a safe distance from my own reflection.
              </p>
              <p>
                But a life half-lived is not a life at all. 
                I realized that my identity was never a defect. 
                It was my superpower—a pathway to profound empathy, creativity, and connection. 
                My mission today is to help you bypass years of silent struggle and leap straight into the joy of radical self-love.
              </p>
            </div>

            {/* Handwritten / Elegant Serif Quote Block */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white shadow-xs border border-portuguese-yellow-200/40 space-y-3">
              <p className="font-serif italic text-xl sm:text-2xl text-ocean-blue-600 leading-relaxed font-light">
                "Being gay is not something you merely survive. It is an invitation to live with exceptional depth, color, and bravery."
              </p>
              <div className="flex items-center space-x-3">
                <span className="w-10 h-[1px] bg-slate-300" />
                <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">
                  Gaybriel’s Manifesto
                </span>
              </div>
            </div>
          </div>

          {/* Story Points Right */}
          <div className="lg:col-span-6">
            <div className="space-y-6">
              {points.map((point, idx) => (
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-portuguese-yellow-200/20 hover:border-portuguese-yellow-300/50 hover:shadow-xs transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-ocean-blue-50 flex items-center justify-center border border-ocean-blue-100/50">
                    {point.icon}
                  </div>
                  <div className="space-y-1 text-left">
                    <h4 className="text-base font-bold text-slate-800">
                      {point.title}
                    </h4>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
