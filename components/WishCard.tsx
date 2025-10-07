'use client';

import { Heart } from 'lucide-react';

interface BirthdayWish {
  _id: string;
  name: string;
  email?: string;
  message: string;
  createdAt: string;
}

interface WishCardProps {
  wish: BirthdayWish;
  index: number;
}

export default function WishCard({ wish, index }: WishCardProps) {
  const gradients = [
    'from-pink-100 to-pink-200',
    'from-blue-100 to-blue-200',
    'from-yellow-100 to-yellow-200',
    'from-purple-100 to-purple-200',
    'from-green-100 to-green-200',
  ];

  const gradient = gradients[index % gradients.length];

  return (
    <div
      className={`bg-gradient-to-br ${gradient} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
    >
      <div className="flex items-start gap-3">
        <div className="bg-white rounded-full p-2 shadow-md">
          <Heart className="w-5 h-5 text-red-500 fill-red-500" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800 text-lg mb-1">{wish.name}</h3>
          <p className="text-gray-700 leading-relaxed mb-3">{wish.message}</p>
          <p className="text-sm text-gray-500">
            {new Date(wish.createdAt).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
