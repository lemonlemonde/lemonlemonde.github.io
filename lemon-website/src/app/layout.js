import { Geist, Geist_Mono, Tilt_Neon } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tiltNeon = Tilt_Neon({
  variable: "--font-neon",
  subsets: ["latin"],
});

export const metadata = {
  title: "Miru Jun!",
  description: "Personal website to show pretty pics and vids of my progress",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tiltNeon.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
