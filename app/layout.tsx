import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "minara labs",
    // Sub-pages read "<page> — minara labs"; the home page reads just the brand.
    template: "%s — minara labs",
  },
  description:
    "Advanced red light therapy panels engineered with scientific precision to optimize your wellness. Discover the future of therapeutic light technology.",
  keywords:
    "red light therapy, wellness technology, therapeutic light, health optimization, light therapy panel, wellness innovation",
  authors: [{ name: "minara labs", url: "https://minaralabs.shop" }],
  creator: "minara labs",
  publisher: "minara labs",
  robots: "index, follow, max-image-preview:large",
  openGraph: {
    type: "website",
    url: "https://minaralabs.shop",
    title: "minara labs",
    description:
      "Experience advanced red light therapy engineered with scientific precision.",
    siteName: "minara labs",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "minara labs",
    description: "Precision light technology for advanced wellness",
    creator: "@minaralabs",
  },
  metadataBase: new URL("https://minaralabs.shop"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
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
        <meta name="theme-color" content="#FAF8F6" />
        <link rel="canonical" href="https://minaralabs.shop" />
      </head>
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  );
}
