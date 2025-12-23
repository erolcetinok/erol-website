import "./globals.css";

// Import fonts from Google Fonts via Next.js
import { Inter } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* Configure Inter (used for UI / navigation / headings) */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // exposes CSS variable
});

/* Configure Libre Baskerville (used for body text) */
const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre", // exposes CSS variable
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 
        Apply both font variables to <body>.
        Actual usage is controlled in globals.css.
      */}
      <body className={`${inter.variable} ${libreBaskerville.variable}`}>
        <Header />
        <main className="page">{children}</main>
        <Footer />
      </body>
    </html>
  );
}