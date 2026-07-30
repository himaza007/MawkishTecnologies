import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { PageWatermark } from "@/components/PageWatermark";
import { SiteLoader } from "@/components/SiteLoader";

// Playfair Display — main/heading text.
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// Libre Baskerville — sub text / small text (body copy, labels, captions).
// Self-hosted so the whole type system has no runtime dependency on
// fonts.googleapis.com.
const libreBaskerville = localFont({
  variable: "--font-libre-baskerville",
  src: [
    { path: "../public/fonts/LibreBaskerville-Variable.ttf", style: "normal" },
    { path: "../public/fonts/LibreBaskerville-Italic-Variable.ttf", style: "italic" },
  ],
  display: "swap",
});

const jetbrainsMono = localFont({
  variable: "--font-jetbrains-mono",
  src: [{ path: "../public/fonts/JetBrainsMono-Variable.ttf", style: "normal" }],
  display: "swap",
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

// Runs before hydration so the correct theme class is present on first
// paint — no flash of the wrong theme. Kept inline (not a separate file)
// so it's part of the initial HTML and executes synchronously.
const themeInitScript = `(function(){try{var stored=localStorage.getItem('mw-theme');var isDark=stored?stored==='dark':true;if(isDark){document.documentElement.classList.add('dark');}document.documentElement.style.colorScheme=isDark?'dark':'light';}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${libreBaskerville.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>
          {/* Splash sits above absolutely everything, including the navbar,
              and fades out once the page is ready — the navbar is already
              rendered underneath it the whole time, so the fade genuinely
              reveals it rather than the navbar popping in afterwards. */}
          <SiteLoader />
          <div aria-hidden="true" className="mw-scanline" />
          <PageWatermark />
          <div className="relative z-10 flex min-h-full flex-1 flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}