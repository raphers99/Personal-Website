import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Joseph Raphael',
  description:
    'Economics & AI @ Tulane University. Building at the intersection of markets, data, and software.',
  openGraph: {
    title: 'Joseph Raphael',
    description:
      'Economics & AI @ Tulane University. Building at the intersection of markets, data, and software.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
