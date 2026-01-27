'use client';

import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Savasana: Proper Relaxation',
    excerpt:
      'Learn the subtle art of stillness and how deep rest resets the nervous system.',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
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
      'https://images.unsplash.com/photo-1489659639091-8b687bc4386e?q=80&w=1200&auto=format&fit=crop',
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
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
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
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
    viewers: 903,
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

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex h-full flex-col gap-4 p-6">
                <p className="font-playfair text-2xl font-semibold text-gray-900">
                  {post.title}
                </p>
                <p className="text-sm leading-relaxed text-gray-600">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      {post.avatars.map((avatar, index) => (
                        <img
                          key={avatar}
                          src={avatar}
                          alt={`Viewer ${index + 1}`}
                          className="h-8 w-8 rounded-full border-2 border-white object-cover"
                        />
                      ))}
                    </div>
                    <p className="ml-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                      +{post.viewers}
                    </p>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FF7043] text-white shadow-md">
                    <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </article>
          ))}
          <div className="hidden items-center justify-center lg:flex">
            <button className="inline-flex items-center justify-center rounded-full border border-[#FF7043] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#FF7043] transition-colors hover:bg-[#FF7043] hover:text-white">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
