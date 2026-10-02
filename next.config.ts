import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "newtondev.vercel.app",
          },
        ],
        destination: "https://newtondev.me/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;