// src/app/layout.js
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={mainStyle}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

const mainStyle = {
  paddingTop: '60px', // Ensure content doesn't overlap with the fixed header
  paddingBottom: '60px', // Ensure content doesn't overlap with the fixed footer
};
