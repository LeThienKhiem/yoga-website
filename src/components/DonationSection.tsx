import Link from 'next/link';

export default function DonationSection() {
  return (
    <section className="bg-[#F9F7F2] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-3xl px-6 text-center">
        <p className="font-playfair text-3xl font-semibold text-gray-900 sm:text-4xl">
          Your Support Makes a Difference
        </p>
        <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
          Your donation helps preserve authentic yoga teachings, support our
          teachers, and extend wellness programs to communities in need. Every
          contribution sustains the mission of service, education, and mindful
          living.
        </p>
        <Link
          href="#"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#E6EE9C] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-800 shadow-md transition-transform duration-300 hover:scale-105"
        >
          Donate
        </Link>
      </div>
    </section>
  );
}
