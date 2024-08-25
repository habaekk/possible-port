import './globals.css';
import Footer from '../components/Footer';
import { ReactNode } from 'react';
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: '박하백 포트폴리오',
  description: '박하백 포트폴리오',
  icons: {
    icon: "/images/logo.webp",
  },
};

interface RootLayoutProps {
  children: ReactNode;  // children의 타입을 명시적으로 ReactNode로 지정
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
