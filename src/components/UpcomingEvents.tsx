'use client';

import { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const events = [
  {
    title: 'Teacher Training Course',
    date: 'AUGUST 2 - SEPTEMBER 4, 2025',
    image:
      'https://cdn.pixabay.com/photo/2016/11/23/18/34/woman-1854265_1280.jpg',
  },
  {
    title: 'Positive Thinking',
    date: 'OCTOBER 10 - OCTOBER 13, 2025',
    image:
      'https://cdn.pixabay.com/photo/2020/06/29/17/41/meditate-5353620_1280.jpg',
  },
  {
    title: 'Vedanta Meditation',
    date: 'NOVEMBER 5 - NOVEMBER 9, 2025',
    image:
      'https://www.ananda.org/wp-content/uploads/2011/05/vedanta-meaning-meditation-1500x1000.jpg',
  },
  {
    title: 'Sadhana Intensive',
    date: 'DECEMBER 1 - DECEMBER 7, 2025',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function UpcomingEvents() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild?.clientWidth ?? 320;
    const gap = 24;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -(cardWidth + gap) : cardWidth + gap,
      behavior: 'smooth',
    });
  };

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
          <div className="hidden items-center gap-3 sm:flex">
            <button
              onClick={() => scrollByCard('left')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition-colors hover:bg-gray-100"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollByCard('right')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition-colors hover:bg-gray-100"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-10">
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pt-2 px-4 md:px-[max(1rem,calc((100vw-1200px)/2))] [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none' }}
        >
          {events.map((event) => (
            <article
              key={event.title}
              className="group min-w-[280px] snap-start overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl sm:min-w-[320px]"
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
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FF7043] text-white shadow-md">
                    <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
