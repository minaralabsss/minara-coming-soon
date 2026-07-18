import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minara Labs — Premium Wellness Technology",
  description:
    "Thoughtfully engineered wellness devices designed to elevate everyday rituals.",
  keywords: "wellness, technology, beauty, health, devices, red light therapy",
  authors: [{ name: "Minara Labs" }],
  creator: "Minara Labs",
  publisher: "Minara Labs",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://minaralabs.shop",
    title: "Minara Labs — Premium Wellness Technology",
    description:
      "Thoughtfully engineered wellness devices designed to elevate everyday rituals.",
    siteName: "Minara Labs",
    images: [
      {
        url: "https://minaralabs.shop/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Minara Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Minara Labs — Premium Wellness Technology",
    description:
      "Thoughtfully engineered wellness devices designed to elevate everyday rituals.",
    images: ["https://minaralabs.shop/og-image.jpg"],
  },
  metadataBase: new URL("https://minaralabs.shop"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
      </head>
      <body className="bg-white text-text antialiased">{children}</body>
    </html>
  );
}
