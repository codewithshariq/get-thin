import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/quiz",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
