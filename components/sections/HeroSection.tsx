'use client';

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  celebrantName: string;
}

export default function HeroSection({ celebrantName }: HeroSectionProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [canPlay, setCanPlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setCanPlay(true);

    // Try to autoplay on mount. If browser blocks autoplay, keep it muted/paused and let user control.
    const tryAutoplay = async () => {
      if (!audioRef.current) return;

      try {
        audioRef.current.muted = false;
        // attempt to play; some browsers will reject if not interacted with
        await audioRef.current.play();
        setIsMuted(false);
      } catch (err) {
        // Autoplay blocked: mute the audio so it can autoplay silently if desired, or keep paused.
        try {
          audioRef.current.muted = true;
          // attempt silent autoplay
          await audioRef.current.play();
          // keep muted true to indicate user needs to unmute to hear
          setIsMuted(true);
        } catch (silentErr) {
          // Could not autoplay even muted; leave paused and show control
          setIsMuted(true);
          audioRef.current.pause();
        }
      }
    };

    tryAutoplay();
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isMuted) {
      // try to unmute and play
      audioRef.current.muted = false;
      try {
        await audioRef.current.play();
        setIsMuted(false);
      } catch (err) {
        // If play fails, keep it paused and show the control (user must interact)
        console.error('Playback failed:', err);
        setIsMuted(true);
      }
    } else {
      audioRef.current.pause();
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <audio ref={audioRef} loop>
        <source src="/birthday-song.mp3" type="audio/mpeg" />
      </audio>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fadeIn">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-2xl leading-tight">
            Celebrating <span className="text-yellow-300">70 Glorious Years</span>
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white/90 mb-8 font-light">
            of Love, Grace, and Wisdom
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-auto mb-8" />
          <p className="text-2xl md:text-3xl text-yellow-100 font-serif italic mb-12">
            Honoring {celebrantName}
          </p>

          {canPlay && (
            <Button
              onClick={toggleMusic}
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-6 text-lg rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {isMuted ? (
                <>
                  <Volume2 className="mr-2 w-6 h-6" />
                  Play Birthday Music
                </>
              ) : (
                <>
                  <VolumeX className="mr-2 w-6 h-6" />
                  Pause Music
                </>
              )}
            </Button>
          )}
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce hover:text-yellow-300 transition-colors"
      >
        <ChevronDown className="w-10 h-10" />
      </button>
    </section>
  );
}
