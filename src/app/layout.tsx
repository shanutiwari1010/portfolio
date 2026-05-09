import type { Metadata, Viewport } from "next";
import { Inter, Solitreo } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

const PRELOAD_IMAGES = [
  { href: "/assets/selfie.jpg", type: "image/jpeg" },
  { href: "/assets/laptop.jpg", type: "image/jpeg" },
  { href: "/assets/mirrorselfie.jpg", type: "image/jpeg" },
  { href: "/assets/sunkissed.jpeg", type: "image/jpeg" },
  { href: "/assets/citypalace.jpeg", type: "image/jpeg" },
];

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const solitreo = Solitreo({
  variable: "--font-solitreo",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Shanu Tiwari - Software Engineer - Portfolio",
    default: "Shanu Tiwari - Software Engineer - Portfolio",
  },
  description: "Portfolio of Shanu Tiwari - Software Engineer, Designer.",
  keywords: [
    "Shanu Tiwari",
    "Portfolio",
    "Software Engineer",
    "Frontend Developer",
    "React",
    "Next.js",
  ],
  appleWebApp: {
    title: "Portfolio - Shanu Tiwari - Software Engineer",
    capable: true,
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/brand/icon0.svg", type: "image/svg+xml" },
      { url: "/brand/icon1.png", type: "image/png" },
    ],
    apple: [
      { url: "/brand/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/web-app-manifest.json",
  metadataBase: new URL("https://shanutiwari.in"),
  authors: [{ name: "Shanu Tiwari" }],
  creator: "Shanu Tiwari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shanutiwari.in",
    title: "Shanu Tiwari - Software Engineer - Portfolio",
    description: "Portfolio of Shanu Tiwari - Software Engineer, Designer.",
    siteName: "Shanu Tiwari - Portfolio",
    images: [
      {
        url: "/web-app-manifest-192x192.png",
        width: 1200,
        height: 630,
        alt: "Shanu Tiwari - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanu Tiwari - Software Engineer - Portfolio",
    description: "Portfolio of Shanu Tiwari - Software Engineer, Designer.",
    images: ["/web-app-manifest-192x192.png"],
    creator: "@shanutiwari1010",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${solitreo.variable}`}
      suppressHydrationWarning
    >
      <head>
        {PRELOAD_IMAGES.map(({ href, type }) => (
          <link key={href} rel="preload" as="image" href={href} type={type} />
        ))}
      </head>
      <body
        className="antialiased bg-background font-sans text-foreground"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={200}>
            <Header />
            <main className="max-w-screen-xl mx-auto">{children}</main>
            <Footer />
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-K8SDJMZE7P" />
    </html>
  );
}
