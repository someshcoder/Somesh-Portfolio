import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://somesh-portfolio.vercel.app'),
  title: 'Somesh Bhatnagar | MERN Stack Developer',
  description:
    'Full-stack developer specializing in MERN stack. Building exceptional digital experiences with React, Node.js, and modern web technologies.',
  keywords: ['MERN', 'React', 'Next.js', 'Node.js', 'Web Developer', 'Full Stack'],
  authors: [{ name: 'Somesh Bhatnagar' }],
  openGraph: {
    type: 'website',
    url: 'https://somesh-portfolio.vercel.app',
    title: 'Somesh Bhatnagar | MERN Stack Developer',
    description:
      'Full-stack developer specializing in MERN stack. Building exceptional digital experiences.',
    siteName: 'Somesh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Somesh Bhatnagar | MERN Stack Developer',
    description: 'Full-stack developer specializing in MERN stack.',
  },
};

// ✅ viewport alag export (IMPORTANT FIX)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${jetbrainsMono.className}`}>
        {children}
      </body>
    </html>
  );
}