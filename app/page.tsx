'use client';

import AnimatedBackground from '@/components/AnimatedBackground';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import GallerySection from '@/components/sections/GallerySection';
import VideoSection from '@/components/sections/VideoSection';
import WishesSection from '@/components/sections/WishesSection';
import FooterSection from '@/components/sections/FooterSection';

export default function Home() {
  const celebrantName = 'Margaret Rose Johnson';
  const aboutDescription = `For seven decades, Margaret has been a shining light in the lives of everyone who knows her.
    A devoted mother, loving grandmother, and cherished friend, her warmth and wisdom have touched countless hearts.
    Her journey through life has been marked by grace, resilience, and an unwavering commitment to family and community.
    From her early days filled with dreams to the remarkable woman she is today, Margaret has built a legacy of love that will endure for generations.
    Today, we celebrate not just 70 years, but 70 years of beautiful moments, precious memories, and endless blessings.`;

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />

      <div className="relative z-10">
        <HeroSection celebrantName={celebrantName} />
        <AboutSection celebrantName={celebrantName} description={aboutDescription} />
        <GallerySection />
        <VideoSection />
        <WishesSection />
        <FooterSection celebrantName={celebrantName} />
      </div>
    </main>
  );
}
