'use client';

import { Sparkles, Heart, Award, Users } from 'lucide-react';

interface AboutSectionProps {
  celebrantName: string;
  description: string;
}

export default function AboutSection({ celebrantName, description }: AboutSectionProps) {
  const highlights = [
    {
      icon: Heart,
      title: 'Loving Family',
      description: 'A devoted parent, grandparent, and friend'
    },
    {
      icon: Award,
      title: 'Life Achievements',
      description: '70 years of remarkable accomplishments'
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Touched countless lives with kindness'
    },
    {
      icon: Sparkles,
      title: 'Timeless Wisdom',
      description: 'A beacon of guidance and inspiration'
    }
  ];

  return (
    <section className="relative py-12 px-4 bg-gradient-to-b from-cream-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-6">
            A Life <span className="text-blue-900">Well Lived</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-brand to-transparent mx-auto mb-8" />
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand to-cream-200 flex items-center justify-center shadow-xl">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </div>
          <h3 className="font-serif text-3xl text-center text-gray-800 mb-6">About {celebrantName}</h3>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-8 h-8 text-blue-900" />
                </div>
                <h4 className="font-semibold text-xl text-gray-800 text-center mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-center text-sm">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
