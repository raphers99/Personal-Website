import type { Metadata } from 'next';
import './globals.css';
import { ScrollProgress } from '@/components/ScrollProgress';

export const metadata: Metadata = {
  metadataBase: new URL('https://josephajax.com'),
  title: 'Joseph Raphael — Tulane / Economics & AI',
  description: 'Finance focused. UK & US citizen. Student at Tulane University.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Joseph Raphael',
    description: 'Finance focused. UK & US citizen.',
    type: 'website',
    url: 'https://josephajax.com',
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
