import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: false,
  },
  headers: async () => [
    {
      /*
        Apple fetches this file to verify we control the domain before it
        will let Apple Pay run here. It has no extension, so without this
        rule it is served as a download rather than as text. Must stay a
        200 with text/plain: no redirect, no HTML wrapper.
      */
      source: "/.well-known/apple-developer-merchantid-domain-association",
      headers: [
        { key: "Content-Type", value: "text/plain; charset=utf-8" },
        { key: "Cache-Control", value: "public, max-age=3600" },
      ],
    },
    {
      source: "/:path*",
      headers: [
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-Frame-Options",
          value: "DENY",
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
      ],
    },
  ],
};

export default nextConfig;
