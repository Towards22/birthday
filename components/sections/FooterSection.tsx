'use client';

import { Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FooterSectionProps {
  celebrantName: string;
}

export default function FooterSection({ celebrantName }: FooterSectionProps) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Join me in celebrating ${celebrantName}'s 70th Birthday! 🎂`;

  const shareOnWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
      '_blank'
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      '_blank'
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      '_blank'
    );
  };

  return (
    <footer className="relative py-16 px-4 bg-gradient-to-b from-cream-50 to-blue-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Share2 className="w-10 h-10 text-white" />
          </div>
          <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Share the Celebration
          </h3>
          <p className="text-blue-100 mb-8">
            Help us spread the joy by sharing this special page
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={shareOnWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full"
            >
              Share on WhatsApp
            </Button>
            <Button
              onClick={shareOnFacebook}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full"
            >
              Share on Facebook
            </Button>
            <Button
              onClick={shareOnTwitter}
              className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full"
            >
              Share on Twitter
            </Button>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-8">
          <div className="text-center">
            <p className="text-blue-100 mb-4 font-serif text-xl">
              Celebrating {celebrantName}
            </p>
            <p className="text-blue-200 flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> by the Family
            </p>
            <p className="text-blue-300 text-sm mt-4">
              {new Date().getFullYear()} - A 70th Birthday Celebration
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
