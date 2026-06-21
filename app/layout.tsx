import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alibanger Technical Services — The Light Masters | Electrical Engineering",
  description:
    "Alibanger Technical Services — rural electrification, transformer installation & maintenance, HT/LT stringing, panel installation and electrical engineering works in Rivers State, Nigeria.",
  keywords: [
    "electrical engineering Nigeria",
    "transformer installation Rivers State",
    "rural electrification",
    "HT LT stringing",
    "panel installation",
    "Alibanger Technical Services",
  ],
  openGraph: {
    title: "Alibanger Technical Services — The Light Masters",
    description:
      "Reliable electrical engineering, rural electrification and transformer services across Rivers State, Nigeria.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
