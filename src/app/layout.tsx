import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "PointOfDev Private Clinic | World-Class Medical Care",
  description: "The pinnacle of private healthcare. Merging advanced diagnostics with unparalleled patient experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning className="font-sans bg-zinc-50 text-zinc-900 antialiased selection:bg-blue-200">
        {children}
      </body>
    </html>
  );
}
