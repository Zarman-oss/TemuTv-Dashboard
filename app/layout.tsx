import Nav from '@/components/Nav';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TemuTv Dashboard',
  description: 'This is for admin people at TemuTv.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />{' '}
      </head>
      <body className={inter.className}>
        <Nav />

        {children}
      </body>
    </html>
  );
}
