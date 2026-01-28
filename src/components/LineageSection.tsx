import Link from 'next/link';

const lineageImages = [
  {
    alt: 'Vintage Indian Swami black and white',
    url: 'https://bzzqbhmrbuqtlxsthfze.supabase.co/storage/v1/object/public/Mediating/ORG_DSC01488.JPG',
  },
  {
    alt: 'Old yoga guru portrait',
    url: 'https://bzzqbhmrbuqtlxsthfze.supabase.co/storage/v1/object/public/Mediating/_77a9676.jpg',
  },
  {
    alt: 'Historical ashram',
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function LineageSection() {
  return (
    <section className="relative overflow-hidden bg-[#F9F7F2] py-24">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://www.baltana.com/files/wallpapers-33/Himalayas-Mountain-Desktop-Wallpaper-114270.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="relative z-10 overflow-hidden rounded-3xl bg-white p-3 shadow-2xl">
              <div
                className="h-[360px] w-full rounded-2xl bg-cover bg-center grayscale sm:h-[420px]"
                style={{ backgroundImage: `url('${lineageImages[0].url}')` }}
                role="img"
                aria-label={lineageImages[0].alt}
              />
            </div>
          </div>

          <div className="relative lg:col-start-5 lg:col-span-6 lg:z-10 lg:-ml-10">
            <div className="rounded-2xl bg-white p-8 shadow-2xl sm:p-12">
              <p className="font-playfair text-4xl font-semibold text-[#2C3E26] sm:text-5xl">
                Our Lineage
              </p>
              <p className="mt-4 text-lg font-semibold text-gray-600">
                From Himalayas to Vietnam
              </p>
              <p className="mt-6 text-base leading-relaxed text-gray-600">
                Our lineage flows through generations of dedicated teachers who
                preserved the practices of breath, movement, and stillness with
                reverence. Each master carried the tradition across mountains
                and oceans, cultivating a path that honors both discipline and
                compassion.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Today, we continue that heritage with mindful instruction rooted
                in ancient wisdom and lived experience. The teachings remain
                organic, evolving gently while staying true to the spirit of
                devotion, service, and inner clarity.
              </p>
              <Link
                href="#"
                className="mt-8 inline-flex items-center justify-center border border-[#4A6741] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2C3E26] transition-colors duration-300 hover:bg-[#FAFAF0]"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="hidden gap-6 sm:grid-cols-2 lg:col-start-9 lg:col-span-4 lg:-mt-16 lg:grid lg:gap-6">
            <div className="relative lg:z-20 lg:translate-x-6">
              <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-xl">
                <div
                  className="h-[160px] w-full rounded-xl bg-cover bg-center grayscale sm:h-[200px]"
                  style={{ backgroundImage: `url('${lineageImages[1].url}')` }}
                  role="img"
                  aria-label={lineageImages[1].alt}
                />
              </div>
            </div>
            <div className="relative lg:-ml-10 lg:mt-12">
              <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-xl">
                <div
                  className="h-[160px] w-full rounded-xl bg-cover bg-center grayscale sm:h-[200px]"
                  style={{ backgroundImage: `url('${lineageImages[2].url}')` }}
                  role="img"
                  aria-label={lineageImages[2].alt}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:hidden">
          {lineageImages.slice(1).map((image) => (
            <div key={image.alt} className="overflow-hidden rounded-2xl bg-white p-3 shadow-xl">
              <div
                className="h-[160px] w-full rounded-xl bg-cover bg-center grayscale"
                style={{ backgroundImage: `url('${image.url}')` }}
                role="img"
                aria-label={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
