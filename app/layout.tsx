import type { Metadata } from "next";
import { Inter, K2D } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/shared/navigation";
import Footer from "@/components/shared/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const k2d = K2D({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-k2d",
});

export const metadata: Metadata = {
  title:
    "Satellite Connect - Premium Dish TV Network & Satellite Connection Services",
  description:
    "Expert satellite TV connection services with comprehensive after-sales support. Professional installations, repairs, spare parts, and maintenance for seamless satellite connectivity.",
  keywords: [
    "satellite TV",
    "dish installation",
    "TV connection setup",
    "after-sales support",
    "satellite repairs",
    "spare parts",
    "network maintenance",
    "DTH services",
  ],
  authors: [{ name: "Satellite Connect" }],
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/logos/fav.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    title: "Satellite Connect - Your Trusted Satellite Network Provider",
    description:
      "Professional satellite connection services with end-to-end customer support",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Satellite Connect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Satellite Connect - Premium Satellite Services",
    description: "Expert dish TV installations and maintenance services",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${k2d.variable}`}>
      <head>
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
      </head>
      <body className="font-sans antialiased bg-white">
        {/* Only show Navigation & Footer for the main page */}
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
