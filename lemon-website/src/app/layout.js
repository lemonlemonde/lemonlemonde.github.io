import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { pageMetadata } from "./page_metadata";
// page-to-page splash (only for links marked data-transition)
import PageTransition from "./redesign/page_transition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  ...pageMetadata("Miru Jun · Software Engineer"),
  metadataBase: new URL("https://miru.sh"),
  // project pages render as "<Project> · Miru Jun"
  title: { default: "Miru Jun · Software Engineer", template: "%s · Miru Jun" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <PageTransition />
      </body>
    </html>
  );
}
