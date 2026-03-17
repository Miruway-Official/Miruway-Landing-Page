const nextConfig = {
  // Enable standalone output for Docker
  output: "standalone",

  // ⚠️ Ignore errors during build (สำหรับ CI/CD)
  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  experimental: {
    // Turbopack is automatically used in Next.js 15+ for dev mode
    // No additional configuration needed for filesystem caching
  },

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // Disable image optimization if using external CDN
    // unoptimized: true,
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_APP_NAME: "Miru Way Landing Page",
    NEXT_PUBLIC_APP_PORT: "6095",
  },

  // Headers for security
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Redirects (optional)
  async redirects() {
    return [];
  },

  // Rewrites (optional)
  async rewrites() {
    return [];
  },

  // Disable powered by header
  poweredByHeader: false,

  // Enable React strict mode
  reactStrictMode: true,

  // Compiler options
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;