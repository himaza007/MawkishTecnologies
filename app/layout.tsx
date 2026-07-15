import type { Metadata } from "next";
import { Inter, Bebas_Neue, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Mawkish Technologies | Business Transformation Partner",
    template: "%s | Mawkish Technologies",
  },
  description:
    "Mawkish Technologies helps organizations modernize operations and accelerate growth through SAP, Salesforce, Odoo, AI, and enterprise technology.",
  keywords: [
    "Mawkish Technologies",
    "SAP implementation",
    "Salesforce partner",
    "Odoo implementation",
    "business transformation",
    "digital transformation consulting",
  ],
  openGraph: {
    title: "Mawkish Technologies | Business Transformation Partner",
    description:
      "Technology that creates real business outcomes — SAP, Salesforce, Odoo, and enterprise transformation.",
    siteName: "Mawkish Technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-mw-ink">
        <div aria-hidden="true" className="mw-scanline" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
