import './globals.css';
import Footer from '../components/Footer';

export const metadata = {
  title: '박하백 포트폴리오',
  description: '박하백 포트폴리오',
  icons: {
    icon: "/images/logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
