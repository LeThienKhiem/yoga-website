import Link from 'next/link';
import { Facebook, Instagram, Youtube, Music2 } from 'lucide-react';

const teachingLinks = ['Classical Yoga', 'Ancient Yoga', 'Yoga Anatomy', 'Breathwork'];
const vacationLinks = ['Registration', 'Accommodation', 'Dining', 'Daily Schedule'];
const infoLinks = ['FAQs', 'Terms', 'Donation'];

export default function MainFooter() {
  return (
    <footer
      className="relative z-20 flex min-h-[70vh] w-full flex-col justify-end bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=2600&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      <div className="relative z-10">
        <div className="container mx-auto px-4 pb-20 sm:pb-24">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <p className="font-playfair text-2xl font-semibold">
                Sivananda Yoga
              </p>
              <p className="text-sm text-white/80">
                123 Pine Forest Road
                <br />
                Da Lat, Vietnam
              </p>
              <p className="text-sm text-white/80">
                hello@sivanandayoga.vn
                <br />
                +84 28 1234 5678
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Yoga Teaching
              </p>
              <div className="flex flex-col gap-2 text-sm text-white/80">
                {teachingLinks.map((link) => (
                  <Link key={link} href="#" className="transition hover:text-white">
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Yoga Vacation
              </p>
              <div className="flex flex-col gap-2 text-sm text-white/80">
                {vacationLinks.map((link) => (
                  <Link key={link} href="#" className="transition hover:text-white">
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="space-y-2 text-sm text-white/80">
                {infoLinks.map((link) => (
                  <Link key={link} href="#" className="block transition hover:text-white">
                    {link}
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Link href="#" aria-label="Facebook" className="hover:text-white">
                  <Facebook size={18} />
                </Link>
                <Link href="#" aria-label="Instagram" className="hover:text-white">
                  <Instagram size={18} />
                </Link>
                <Link href="#" aria-label="YouTube" className="hover:text-white">
                  <Youtube size={18} />
                </Link>
                <Link href="#" aria-label="Spotify" className="hover:text-white">
                  <Music2 size={18} />
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-12 text-center text-xs uppercase tracking-[0.2em] text-white/60">
            © 2026 Sivananda Yoga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
