import { Inter } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';
import FireFilesBackgroud from '@/components/FireFilesBackgroud';
import Sound from '@/components/Sound';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Whatsab',
  description: 'Portofolio in Sabda Setiawan',
  icons: {
    icon: '/logo.png', // Untuk favicon default
    apple: '/apple-touch-icon.png' // Untuk Apple devices
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          'bg-backgroud text-foreground font-inter'
        )}
      >
        {children}
        <FireFilesBackgroud />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
