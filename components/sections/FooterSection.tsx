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
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center justify-center md:justify-start">
            <Share2 className="w-10 h-10 text-foreground" />
          </div>

          <div className="text-center">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-1">Share the Celebration</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">Help us spread the joy by sharing this special page</p>

            <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
              <Button onClick={shareOnWhatsApp} className="bg-brand text-[#111827] px-4 py-2 rounded-full shadow-sm">
                WhatsApp
              </Button>
              <Button onClick={shareOnFacebook} className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-sm">
                Facebook
              </Button>
              <Button onClick={shareOnTwitter} className="bg-sky-500 text-white px-4 py-2 rounded-full shadow-sm">
                Twitter
              </Button>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="font-serif text-lg text-foreground mb-1">Celebrating {celebrantName}</p>
            <p className="text-muted-foreground flex items-center justify-center md:justify-end gap-2">
              Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> by the Family
            </p>
            <p className="text-muted-foreground text-sm mt-2">{new Date().getFullYear()} - A 70th Birthday Celebration</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
