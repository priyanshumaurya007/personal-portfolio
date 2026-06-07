import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Priyanshu | Backend Engineer — FinTech & Blockchain',
  description:
    'Backend Engineer specializing in high-performance financial systems, real-time trading engines, distributed architectures, and multi-chain blockchain infrastructure. Building systems at scale — 100K+ users, 6000+ trades/min.',
  keywords: [
    'Backend Engineer', 'Distributed Systems', 'FinTech', 'Blockchain',
    'Microservices', 'Node.js', 'NestJS', 'Kafka', 'Redis', 'Trading Engine',
    'Crypto Exchange', 'Real-Time Systems', 'Cloud Architecture'
  ],
  authors: [{ name: 'Priyanshu' }],
  creator: 'Priyanshu',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: 'Priyanshu | Backend Engineer — FinTech & Blockchain',
    description:
      'Building high-performance financial systems, real-time trading platforms, and blockchain infrastructure at scale.',
    siteName: 'Priyanshu Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priyanshu | Backend Engineer',
    description: 'Building scalable financial infrastructure at 6000+ trades/min.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
