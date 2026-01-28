import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'bzzqbhmrbuqtlxsthfze.supabase.co',
      },
    ],
  },
  // Allow unsafe-eval in development for HMR (Hot Module Replacement)
  async headers() {
    // Only apply CSP in development to allow HMR
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: [
                "default-src 'self'",
                "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live",
                "style-src 'self' 'unsafe-inline'",
                "img-src 'self' data: https: blob:",
                "font-src 'self' data: https:",
                "connect-src 'self' https: ws: wss:",
                "frame-src 'self'",
              ].join('; '),
            },
          ],
        },
      ];
    }
    return [];
  },
};

export default nextConfig;
