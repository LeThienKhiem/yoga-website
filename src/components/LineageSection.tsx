import Link from 'next/link';

const lineageImages = [
  {
    alt: 'Vintage Indian Swami black and white',
    url: 'https://cdn.pixabay.com/photo/2022/06/27/08/37/monk-7287041_1280.jpg',
  },
  {
    alt: 'Old yoga guru portrait',
    url: 'https://cdn.pixabay.com/photo/2016/11/22/23/29/meditate-1851165_1280.jpg',
  },
  {
    alt: 'Historical ashram',
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function LineageSection() {
  return (
    <section className="bg-[#F9F7F2] py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-playfair text-4xl font-semibold text-gray-900 sm:text-5xl">
            Our Lineage
          </p>
          <p className="mt-4 text-lg font-semibold text-gray-600">
            From Himalayas to Vietnam
          </p>
          <p className="mt-6 text-base leading-relaxed text-gray-600">
            Our lineage flows through generations of dedicated teachers who
            preserved the practices of breath, movement, and stillness with
            reverence. Each master carried the tradition across mountains and
            oceans, cultivating a path that honors both discipline and
            compassion.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Today, we continue that heritage with mindful instruction rooted in
            ancient wisdom and lived experience. The teachings remain organic,
            evolving gently while staying true to the spirit of devotion,
            service, and inner clarity.
          </p>
          <Link
            href="#"
            className="mt-8 inline-flex items-center justify-center border border-gray-800 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-800 transition-colors duration-300 hover:bg-gray-100"
          >
            Learn More
          </Link>
        </div>

        <div className="relative">
          <div className="grid gap-6 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="relative z-10">
              <div className="overflow-hidden rounded-3xl bg-white p-3 shadow-2xl">
                <div
                  className="h-[380px] w-full rounded-2xl bg-cover bg-center grayscale"
                  style={{ backgroundImage: `url('${lineageImages[0].url}')` }}
                  role="img"
                  aria-label={lineageImages[0].alt}
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="relative -ml-6 mt-6 z-20">
                <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-xl">
                  <div
                    className="h-[180px] w-full rounded-xl bg-cover bg-center grayscale"
                    style={{ backgroundImage: `url('${lineageImages[1].url}')` }}
                    role="img"
                    aria-label={lineageImages[1].alt}
                  />
                </div>
              </div>
              <div className="relative -ml-10 -mt-2 z-0">
                <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-xl">
                  <div
                    className="h-[180px] w-full rounded-xl bg-cover bg-center grayscale"
                    style={{ backgroundImage: `url('${lineageImages[2].url}')` }}
                    role="img"
                    aria-label={lineageImages[2].alt}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
