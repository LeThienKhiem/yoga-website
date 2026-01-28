'use client';

import { useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const events = [
  {
    title: 'Teacher Training Course',
    date: 'AUGUST 2 - SEPTEMBER 4, 2025',
    image:
      'https://bzzqbhmrbuqtlxsthfze.supabase.co/storage/v1/object/public/Mediating/DSCF2242.jpg',
  },
  {
    title: 'Positive Thinking',
    date: 'OCTOBER 10 - OCTOBER 13, 2025',
    image:
      'https://bzzqbhmrbuqtlxsthfze.supabase.co/storage/v1/object/public/Mediating/DSC01826.jpg',
  },
  {
    title: 'Vedanta Meditation',
    date: 'NOVEMBER 5 - NOVEMBER 9, 2025',
    image:
      'https://bzzqbhmrbuqtlxsthfze.supabase.co/storage/v1/object/public/Mediating/DSC01748.jpg',
  },
  {
    title: 'Sadhana Intensive',
    date: 'DECEMBER 1 - DECEMBER 7, 2025',
    image:
      'https://bzzqbhmrbuqtlxsthfze.supabase.co/storage/v1/object/public/Mediating/ANN_8210.jpg',
  }
];

export default function UpcomingEvents() {
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

  return (
    <section className="w-full overflow-hidden bg-[#F9F7F2] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <p className="font-playfair text-3xl font-semibold text-[#1f3b2c] sm:text-4xl">
              Upcoming Events
            </p>
            <button className="rounded-full border border-gray-300 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-700 transition-colors hover:bg-gray-100">
              View All
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-green-800/20 bg-primary text-[#FEFCE8] shadow-md transition-colors hover:bg-primary-dark"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-green-800/20 bg-primary text-[#FEFCE8] shadow-md transition-colors hover:bg-primary-dark"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-10">
        <div
          ref={emblaRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing"
        >
          <div className="flex gap-6 px-4 md:px-[max(1rem,calc((100vw-1200px)/2))]">
            {events.map((event) => (
              <article
                key={event.title}
                className="group flex-[0_0_100%] min-w-0 overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gray-700 shadow-md">
                    {event.date}
                  </span>
                </div>
                <div className="flex flex-col gap-4 p-6">
                  <p className="font-playfair text-2xl font-semibold text-gray-900">
                    {event.title}
                  </p>
                  <div className="flex items-center justify-end">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-[#FEFCE8] shadow-md">
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
