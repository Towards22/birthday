'use client';

import { useState, useEffect, useRef } from 'react';
import { Camera } from 'lucide-react';
import GalleryModal from '@/components/GalleryModal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef<number | null>(null);

  const galleryImages = [
    'https://asset.cloudinary.com/ddxssowqb/077dbb171f568b529fb2142eedaefc75',
    'https://asset.cloudinary.com/ddxssowqb/426aa9104e948e71f49f8390f17ce65f',
    'https://asset.cloudinary.com/ddxssowqb/ed40d31b5a3bde6657a0b496ca32a1a9',
    'https://asset.cloudinary.com/ddxssowqb/ad0da7c257154312d9d699847f9d025c',
    'https://asset.cloudinary.com/ddxssowqb/0ac0d443b5586f8292a568d709a977d9',
    'https://asset.cloudinary.com/ddxssowqb/0b158bb740278a2c4315ee7cdd526f13',
    'https://asset.cloudinary.com/ddxssowqb/3cb74f3c2affa5c780a53c2f3a645ab0',
  ];

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      );
    }
  };

  // Autoplay + sync current index with embla
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const idx = emblaApi.selectedScrollSnap();
      setCurrentIndex(idx);
    };

    emblaApi.on('select', onSelect);
    onSelect();

    // start autoplay
    if (!autoplayRef.current) {
      autoplayRef.current = window.setInterval(() => {
        emblaApi.scrollNext();
      }, 4000);
    }

    return () => {
      emblaApi.off('select', onSelect);
      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
  }, [emblaApi]);

  return (
    <section className="relative py-12 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-4">
            <Camera className="w-12 h-12 text-blue-900" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-6">
            A Journey Through <span className="text-blue-900">Time</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-brand to-transparent mx-auto mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrating precious memories and cherished moments from seven decades of life
          </p>
        </div>

        {/* Responsive carousel: single slide on mobile, 3-per-view on md+ */}
        <Carousel
          className="relative"
          setApi={(api) => setEmblaApi(api)}
          opts={{ loop: true, align: 'start' }}
          onMouseEnter={() => {
            if (autoplayRef.current) {
              window.clearInterval(autoplayRef.current);
              autoplayRef.current = null;
            }
          }}
          onMouseLeave={() => {
            if (!autoplayRef.current) {
              autoplayRef.current = window.setInterval(() => emblaApi?.scrollNext(), 4000);
            }
          }}
        >
          <CarouselContent className="w-full">
            {galleryImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 basis-full"
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-square">
                  <img
                    src={image}
                    alt={`Memory ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation controls for larger screens */}
          <CarouselPrevious className="hidden md:block" />
          <CarouselNext className="hidden md:block" />

          {/* Mobile nav overlay (visible on mobile) */}
          <div className="absolute left-2 top-1/2 -translate-y-1/2 md:hidden">
            <CarouselPrevious />
          </div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 md:hidden">
            <CarouselNext />
          </div>
        </Carousel>

        {/* Thumbnails / preview row */}
        <div className="mt-4 flex gap-2 justify-center overflow-x-auto px-2">
          {galleryImages.map((thumb, i) => (
            <button
              key={i}
              onClick={() => {
                emblaApi?.scrollTo(i);
              }}
              className={`flex-none w-20 h-20 rounded-md overflow-hidden border-2 ${
                i === currentIndex ? 'border-brand' : 'border-transparent'
              } focus:outline-none focus:ring-2 focus:ring-brand`}
            >
              <img src={thumb} alt={`Preview ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <GalleryModal
          images={galleryImages}
          currentIndex={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
}
