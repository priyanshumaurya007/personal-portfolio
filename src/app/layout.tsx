import type { Metadata } from 'next';
import { Inter, Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });


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
    url: 'https://iampriyanshu.in',
    title: 'Priyanshu | Backend Engineer & Web Consultant',
    description:
      'Full-Stack Developer and Backend Engineer specializing in high-performance web applications, B2B SaaS platforms, and enterprise-grade distributed architectures.',
    siteName: 'Priyanshu | Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Recommend user adds this image later
        width: 1200,
        height: 630,
        alt: 'Priyanshu Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priyanshu | Backend Engineer & Web Consultant',
    description: 'Specializing in high-performance web applications and scalable enterprise architecture.',
    creator: '@priyanshumaurya007',
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
