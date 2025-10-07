'use client';

import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-blue-50 to-pink-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Play className="w-12 h-12 text-pink-600" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-6">
            A Special <span className="text-pink-600">Tribute</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-brand to-transparent mx-auto mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch this heartfelt video celebration of an extraordinary life
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-4">
          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <Play className="w-20 h-20 mx-auto mb-4 text-gray-400" />
                <p className="text-lg">Video placeholder</p>
                <p className="text-sm mt-2">Replace with actual video embed or upload</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 italic">
            &ldquo;A life filled with love, laughter, and countless blessings&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
