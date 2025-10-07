'use client';

import { useState, useEffect } from 'react';
import { Send, Heart, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import WishCard from '@/components/WishCard';
import Confetti from '@/components/Confetti';

export interface BirthdayWish {
  _id: string;
  name: string;
  email?: string;
  message: string;
  isApproved: boolean;
  createdAt: string;
}

export default function WishesSection() {
  const [wishes, setWishes] = useState<BirthdayWish[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchWishes = async () => {
    try {
      const response = await fetch('/api/wishes');
      const data = await response.json();

      if (response.ok && data.wishes) {
        setWishes(data.wishes);
      }
    } catch (error) {
      console.error('Error fetching wishes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/wishes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim() || undefined,
          message: message.trim(),
        }),
      });

      if (response.ok) {
        setName('');
        setEmail('');
        setMessage('');
        setShowConfetti(true);
        await fetchWishes();
      }
    } catch (error) {
      console.error('Error submitting wish:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-12 px-4 bg-gradient-to-b from-pink-50 to-cream-50">
      <Confetti trigger={showConfetti} onComplete={() => setShowConfetti(false)} />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-12 h-12 text-red-500 fill-red-500" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-6">
            Share Your <span className="text-red-500">Birthday Wishes</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-brand to-transparent mx-auto mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leave a heartfelt message to celebrate this special milestone
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-3xl shadow-2xl p-6">
            <h3 className="font-serif text-2xl text-gray-800 mb-6">Send Your Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email (Optional)
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Birthday Wish <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your heartfelt birthday wishes..."
                  required
                  rows={5}
                  className="w-full resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-3 text-md rounded-lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 w-5 h-5" />
                    Send Birthday Wish
                  </>
                )}
              </Button>
            </form>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-gray-800 mb-6">
              Recent Wishes ({wishes.length})
            </h3>
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                </div>
              ) : wishes.length === 0 ? (
                <div className="bg-white rounded-xl p-8 text-center">
                  <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Be the first to share a birthday wish!</p>
                </div>
              ) : (
                wishes.map((wish, index) => (
                  <WishCard key={wish._id} wish={wish} index={index} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
