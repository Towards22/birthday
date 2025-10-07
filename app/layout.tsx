import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Celebrating 70 Glorious Years - Birthday Celebration',
  description: 'Join us in celebrating 70 years of love, grace, and wisdom. A beautiful tribute to an extraordinary life.',
  keywords: '70th birthday, birthday celebration, milestone birthday',
};

import BlockFullStory from '@/components/BlockFullStory';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BlockFullStory />
        {children}
      </body>
    </html>
  );
}
