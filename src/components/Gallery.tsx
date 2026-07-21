import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { Maximize2, X, Sparkles, Heart } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const categories = ['All', 'Advocacy', 'Lifestyle', 'Empowerment'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-sand-50 relative overflow-hidden">
      {/* Absolute background element */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-portuguese-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-ocean-blue-600 uppercase italic">
            VISUAL STORYTELLING
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Empowerment{' '}
            <span className="block mt-2 font-serif italic font-normal text-ocean-blue-500 underline decoration-portuguese-yellow-400 decoration-2 underline-offset-4">
              Gallery of Joy.
            </span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-light max-w-2xl mx-auto">
            Living authentically means radiating freedom. Explore these real, joyful snapshots of a life lived out loud, from stage spotlights to quiet seaside sunset moments.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2 justify-center pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`gallery-filter-${cat.toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-sand-100 border border-portuguese-yellow-200/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-3xl overflow-hidden bg-white border border-portuguese-yellow-200/30 shadow-xs hover:border-portuguese-yellow-300/60 hover:shadow-xs transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                {/* Image Wrap */}
                <div className="aspect-[4/3] overflow-hidden bg-sand-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info Overlay */}
                <div className="p-6 space-y-2 text-left">
                  <span className="text-[10px] font-extrabold tracking-widest text-portuguese-yellow-600 uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-800 tracking-tight leading-tight group-hover:text-ocean-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                {/* Zoom hover indicator */}
                <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-white/95 backdrop-blur-md text-ocean-blue-600 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-portuguese-yellow-100">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <div
              id="gallery-modal"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-lg border border-portuguese-yellow-200/20"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  id="btn-close-gallery-modal"
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/10 hover:bg-slate-900/20 text-slate-700 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Left Side: Large Image */}
                  <div className="aspect-square md:aspect-auto md:h-[480px] bg-slate-950">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Right Side: Narrative description */}
                  <div className="p-8 sm:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4 text-left">
                      <span className="text-xs font-semibold tracking-widest text-portuguese-yellow-600 uppercase">
                        {selectedItem.category} Moment
                      </span>
                      <h3 className="text-2xl font-serif italic text-slate-900 tracking-tight leading-tight">
                        {selectedItem.title}
                      </h3>
                      <p className="text-slate-600 font-light text-sm leading-relaxed">
                        {selectedItem.subtitle}
                      </p>
                      
                      <div className="pt-4 border-t border-portuguese-yellow-200/20 flex items-start space-x-3 text-slate-500 text-sm">
                        <Heart className="w-5 h-5 text-rose-500 fill-rose-500/20 flex-shrink-0" />
                        <span className="font-light italic text-xs leading-relaxed text-slate-500">
                          "Each image captures a piece of the freedom that belongs to you, too. No matter where you start, this joy is your birthright."
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-bold text-slate-400 tracking-widest">
                        — GAYBRIEL INSPIRATIONS
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
