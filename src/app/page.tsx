import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Course from '@/components/Course';
import LineageSection from '@/components/LineageSection';
import ResortCarousel from '@/components/ResortCarousel';
import UpcomingEvents from '@/components/UpcomingEvents';
import BlogSection from '@/components/BlogSection';
import DonationSection from '@/components/DonationSection';
import MainFooter from '@/components/MainFooter';
import VietnamCentres from '@/components/VietnamCentres';

export default function Home() {
  return (
    <main className="relative bg-white">
      <div className="relative z-10 mb-[400px] bg-white shadow-2xl">
        <Header />
        <Hero />
        <Course />
        <LineageSection />
        <ResortCarousel />
        <UpcomingEvents />
        <BlogSection />
        <DonationSection />
        <MainFooter />
      </div>
      <VietnamCentres />
    </main>
  );
}
