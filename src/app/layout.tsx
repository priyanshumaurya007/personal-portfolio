import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Priyanshu | Backend Engineer & Web Consultant',
  description:
    'Full-Stack Developer and Backend Engineer specializing in high-performance web applications, B2B SaaS platforms, and enterprise-grade distributed architectures.',
  keywords: [
    'Backend Engineer', 'Full-Stack Developer', 'Web Consultant', 'React', 'Next.js',
    'Microservices', 'Node.js', 'NestJS', 'Architecture', 'SaaS',
    'B2B Solutions', 'Web Development', 'Cloud Architecture'
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
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
