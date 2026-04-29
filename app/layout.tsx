import type { Metadata } from 'next';
import './globals.css';
import { ScrollProgress } from '@/components/ScrollProgress';

export const metadata: Metadata = {
  metadataBase: new URL('https://josephajax.com'),
  title: 'Joseph Raphael',
  description: 'Finance focused. UK & US citizen. Incoming VC intern at Alumni Ventures.',
  openGraph: {
    title: 'Joseph Raphael',
    description: 'Finance focused. UK & US citizen.',
    type: 'website',
    url: 'https://josephajax.com',
    images: [
      {
        url: '/api/og?title=Joseph%20Raphael&description=Finance%20focused.%20UK%20%26%20US%20citizen.',
        width: 1200,
        height: 630,
        alt: 'Joseph Raphael',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
