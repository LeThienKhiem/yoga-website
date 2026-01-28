'use client';

const posts = [
  {
    title: 'Savasana: Proper Relaxation',
    excerpt:
      'Learn the subtle art of stillness and how deep rest resets the nervous system.',
    image:
      'https://bzzqbhmrbuqtlxsthfze.supabase.co/storage/v1/object/public/Walking/ANN_8111.jpg',
    viewers: 831,
    avatars: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=100&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=100&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop',
    ],
  },
  {
    title: 'The Ritual of Morning Meditation',
    excerpt:
      'Build a calm and consistent dawn practice with simple breathwork and intention.',
    image:
      'https://bzzqbhmrbuqtlxsthfze.supabase.co/storage/v1/object/public/Mediating/DSC02659.jpg',
    viewers: 642,
    avatars: [
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=100&auto=format&fit=crop',
    ],
  },
  {
    title: 'Ayurveda for Seasonal Balance',
    excerpt:
      'Align daily routines with nature to restore harmony during seasonal shifts.',
    image:
      'https://bzzqbhmrbuqtlxsthfze.supabase.co/storage/v1/object/public/Mediating/DSC06058.jpg',
    viewers: 519,
    avatars: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=100&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1546456073-92b9f0a8d7b0?q=80&w=100&auto=format&fit=crop',
    ],
  },
  {
    title: 'Breath as a Healing Practice',
    excerpt:
      'Explore pranayama techniques that cultivate clarity, steadiness, and resilience.',
    image:
      'https://bzzqbhmrbuqtlxsthfze.supabase.co/storage/v1/object/public/Mediating/Screenshot%202026-01-2816472345654.png',
    viewers: 903,
    avatars: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=100&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop',
    ],
  },
  {
    title: 'Forest Breath Ritual',
    excerpt: 'Short morning practice to reset the day.',
    image:
      'https://bzzqbhmrbuqtlxsthfze.supabase.co/storage/v1/object/public/Mediating/ANN_8197.jpg',
    viewers: 477,
    avatars: [
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=100&auto=format&fit=crop',
    ],
  },
  {
    title: 'Sunrise Flow',
    excerpt: 'Soft vinyasa to welcome light.',
    image:
      'https://bzzqbhmrbuqtlxsthfze.supabase.co/storage/v1/object/public/Mediating/IMG_20201206_062414.jpg',
    viewers: 612,
    avatars: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=100&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=100&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop',
    ],
  },
  {
    title: 'Stillness & Sound',
    excerpt: 'A short guide to mindful listening.',
    image:
      'https://bzzqbhmrbuqtlxsthfze.supabase.co/storage/v1/object/public/Mediating/_77a9676.jpg',
    viewers: 388,
    avatars: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=100&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1546456073-92b9f0a8d7b0?q=80&w=100&auto=format&fit=crop',
    ],
  },
  {
    title: 'Mountain Retreat Notes',
    excerpt: 'Reflections from the hillside.',
    image:
      'https://bzzqbhmrbuqtlxsthfze.supabase.co/storage/v1/object/public/Mediating/ANN_8211.jpg',
    viewers: 725,
    avatars: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=100&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop',
    ],
  },
];

export default function BlogSection() {
  return (
    <section className="bg-[#F9F7F2] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-playfair text-3xl font-semibold uppercase tracking-[0.2em] text-[#1f3b2c] sm:text-4xl">
            Blogs
          </p>
          <button className="rounded-full border border-gray-300 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-700 transition-colors hover:bg-gray-100">
            View All
          </button>
        </div>

        <div className="mt-10 columns-1 gap-8 space-y-6 sm:columns-2 lg:columns-3">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className={`group mb-6 break-inside-avoid overflow-hidden rounded-2xl bg-white transition-transform duration-300 hover:-translate-y-2 ${
                index === 0 ? 'lg:[column-span:2]' : ''
              }`}
            >
              <div className="w-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex h-full flex-col gap-3 p-6">
                <p className="font-playfair text-2xl font-semibold text-gray-900">
                  {post.title}
                </p>
                <p className="text-base leading-relaxed text-gray-600">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
