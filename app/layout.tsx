import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minara Labs — Precision Light for Living Well",
  description:
    "Advanced red light therapy panels engineered with scientific precision to optimize your wellness. Discover the future of therapeutic light technology.",
  keywords:
    "red light therapy, wellness technology, therapeutic light, health optimization, light therapy panel, wellness innovation",
  authors: [{ name: "Minara Labs", url: "https://minaralabs.shop" }],
  creator: "Minara Labs",
  publisher: "Minara Labs",
  robots: "index, follow, max-image-preview:large",
  openGraph: {
    type: "website",
    url: "https://minaralabs.shop",
    title: "Minara Labs — Precision Light for Living Well",
    description:
      "Experience advanced red light therapy engineered with scientific precision.",
    siteName: "Minara Labs",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minara Labs",
    description: "Precision light technology for advanced wellness",
    creator: "@minaralabs",
  },
  metadataBase: new URL("https://minaralabs.shop"),
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
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
