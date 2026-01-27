'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const slides = [
  {
    title: 'The Perfect Place to Learn and Relax',
    description:
      'Breathe in the cool mountain air and let the pine forests and still lakes restore your spirit.',
    image:
      'https://cdn.pixabay.com/photo/2017/04/08/22/26/buddhism-2214532_1280.jpg',
    cta: 'Discover Nature',
    note: '*subject to weather condition',
  },
  {
    title: 'Organic Vegetarian Meals',
    description:
      'Wholesome, plant-based cuisine prepared with local ingredients to nourish body and mind.',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2000&auto=format&fit=crop',
    cta: 'View Menu',
    note: '*subject to seasonal harvest',
  },
  {
    title: 'Comfortable Accommodation',
    description:
      'Rest in serene wooden cabins designed for quiet reflection and deep, restorative sleep.',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000&auto=format&fit=crop',
    cta: 'See Rooms',
    note: '*subject to availability',
  },
];

export default function ResortCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeSlide = slides[currentIndex];

  return (
    <section className="relative bg-[#F9F7F2] py-16 sm:py-20">
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="relative h-[520px] overflow-hidden rounded-[32px] shadow-[0_30px_80px_rgba(15,23,42,0.18)] sm:h-[560px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.title}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute inset-0"
            >
              <img
                src={activeSlide.image}
                alt={activeSlide.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

              <div className="absolute inset-y-0 left-0 flex w-full items-center sm:w-[50%]">
                <div className="w-full px-8 py-12 text-white sm:px-12">
                  <p className="font-playfair text-3xl font-semibold sm:text-4xl">
                    {activeSlide.title}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base">
                    {activeSlide.description}
                  </p>
                  <button className="mt-6 inline-flex items-center justify-center border border-[#D4AF37] px-6 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] transition-colors duration-300 hover:bg-white/10">
                    {activeSlide.cta}
                  </button>
                  <p className="mt-6 text-xs uppercase tracking-[0.15em] text-white/70">
                    {activeSlide.note}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === currentIndex
                  ? 'bg-[#1f3b2c]'
                  : 'bg-[#b7c0b2] hover:bg-[#8ea481]'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
