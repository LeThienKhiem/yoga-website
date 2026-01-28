'use client';

import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const slides = [
  {
    title: 'The Perfect Place to Learn and Relax',
    description:
      'Breathe in the cool mountain air and let the pine forests and still lakes restore your spirit.',
    image:
      'https://bzzqbhmrbuqtlxsthfze.supabase.co/storage/v1/object/public/Mediating/DSC06058.jpg',
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: false,
    containScroll: 'trimSnaps',
  });

  const handlePrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const handleNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const updateIndex = () => setActiveIndex(emblaApi.selectedScrollSnap());
    updateIndex();
    emblaApi.on('select', updateIndex);
    emblaApi.on('reInit', updateIndex);
  }, [emblaApi]);

  return (
    <section className="w-full bg-[#F9F7F2]">
      <div className="relative w-full">
        <div
          ref={emblaRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing"
        >
          <div className="flex">
            {slides.map((slide) => (
              <article
                key={slide.title}
                className="relative h-[50vh] flex-[0_0_100%] min-w-0 overflow-hidden sm:h-[75vh]"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="pointer-events-none absolute bottom-0 left-0 p-8 text-white md:p-16">
                  <p className="font-playfair text-3xl font-semibold md:text-5xl">
                    {slide.title}
                  </p>
                  <p className="mt-3 text-base text-white/90 md:text-lg">
                    {slide.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/40 text-white backdrop-blur transition hover:bg-black/60 sm:left-4 sm:h-11 sm:w-11"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/40 text-white backdrop-blur transition hover:bg-black/60 sm:right-4 sm:h-11 sm:w-11"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3 pb-6">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              index === activeIndex
                ? 'bg-[#1f3b2c]'
                : 'bg-[#b7c0b2] hover:bg-[#8ea481]'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
