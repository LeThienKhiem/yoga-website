'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const courses = [
  {
    title: 'Yoga Vacation',
    description: 'Find your inner peace in Da Lat',
    image:
      'https://bzzqbhmrbuqtlxsthfze.supabase.co/storage/v1/object/public/Walking/ANN_7698.jpg',
    href: '#',
  },
  {
    title: 'Teacher Training',
    description: 'Gain professional education and certification',
    image:
      'https://bzzqbhmrbuqtlxsthfze.supabase.co/storage/v1/object/public/Mediating/_77a7991.jpg',
    href: '#',
  },
  {
    title: 'Ayurveda',
    description: 'Discover your natural state of health',
    image:
      'https://admin.acceleratingscience.com/behindthebench/wp-content/uploads/sites/9/2016/01/Ayurveda-making.jpg',
    href: '#',
  },
  {
    title: 'Yoga for Holistic Health',
    description: 'Learn healing practices for addressing disease',
    image:
      'https://bzzqbhmrbuqtlxsthfze.supabase.co/storage/v1/object/public/Mediating/DSC02643.jpg',
    href: '#',
  },
  {
    title: 'Short Course',
    description: 'Enjoy a focused learning experience',
    image:
      'https://bzzqbhmrbuqtlxsthfze.supabase.co/storage/v1/object/public/Walking/ANN_7718.jpg',
    href: '#',
  },
  {
    title: 'Corporate Training',
    description: 'Improve the way you work',
    image:
      'https://bzzqbhmrbuqtlxsthfze.supabase.co/storage/v1/object/public/Mediating/DSCF2249.jpg',
    href: '#',
  },
];

const cardVariants = {
  rest: {
    y: 0,
    boxShadow: '0 18px 45px rgba(32, 58, 44, 0.12)',
  },
  hover: {
    y: -12,
    boxShadow: '0 28px 70px rgba(32, 58, 44, 0.22)',
  },
};

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
};

const subtitleVariants = {
  rest: { opacity: 0.7, y: 10 },
  hover: { opacity: 1, y: 0 },
};

const overlayVariants = {
  rest: { opacity: 0.7 },
  hover: { opacity: 0.9 },
};

const accentVariants = {
  rest: { x: -8, opacity: 0 },
  hover: { x: 0, opacity: 1 },
};

const lineVariants = {
  rest: { scaleX: 0, opacity: 0 },
  hover: { scaleX: 1, opacity: 1 },
};

export default function Course() {
  return (
    <section className="relative overflow-hidden bg-[#f6f1e8] py-24 sm:py-32">
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')",
        }}
      />
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="relative z-10 lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:-mr-20">
            <div className="rounded-[2.5rem] bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] sm:p-12">
              <p className="font-playfair text-4xl font-semibold text-gray-900 sm:text-5xl">
                Sivananda Yoga Teacher Training Course MM YYYY
              </p>
              <div className="mt-6 inline-flex rounded-full border border-green-800/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-green-900/70">
                Have a powerful, personal experience and learn to transmit the
                knowledge of Yoga to others.
              </div>
              <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                28-day immersion and graduate with internationally recognized
                certification.
              </p>
              <Link
                href="#"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#FF7043] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-orange-500/40 transition-transform duration-300 hover:-translate-y-1"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 lg:row-start-1">
            <div className="relative h-full overflow-hidden rounded-[2.5rem] shadow-2xl">
              <div className="relative min-h-[340px] w-full sm:min-h-[460px]">
                <Image
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2000&auto=format&fit=crop"
                  alt="Mountain retreat"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 sm:mt-28">
          <p className="font-playfair text-2xl text-[#1f3b2c] sm:text-3xl">
            There are many ways to learn, train, and experience yoga and health
            with us.
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <motion.article
              key={course.title}
              variants={cardVariants}
              initial="rest"
              animate="rest"
              whileHover="hover"
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/20 shadow-[0_22px_60px_rgba(32,58,44,0.18)]"
            >
              <motion.div
                variants={imageVariants}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('${course.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'saturate(0.9) contrast(1.05)',
                }}
              />
              <motion.div
                variants={overlayVariants}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
              />

              <div className="relative z-10 flex h-[360px] flex-col justify-end p-7 text-white sm:h-[380px]">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Program
                </p>
                <h3 className="mt-3 font-playfair text-2xl font-semibold sm:text-3xl">
                  {course.title}
                </h3>
                <motion.div
                  variants={lineVariants}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="mt-4 h-px w-16 origin-left bg-[#d6a86a]"
                />
                <motion.p
                  variants={subtitleVariants}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="mt-4 text-sm leading-relaxed text-white/90"
                >
                  {course.description}
                </motion.p>
                <motion.span
                  variants={accentVariants}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#f1c27d]"
                >
                  <ArrowRight size={16} />
                  Explore
                </motion.span>
              </div>

              <Link
                href={course.href}
                className="absolute inset-0 z-20"
                aria-label={`Learn more about ${course.title}`}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
