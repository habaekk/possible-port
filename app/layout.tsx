import './globals.css';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Habaek Bak',
  description: 'Habaek Bak Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="kr">
      <body>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
