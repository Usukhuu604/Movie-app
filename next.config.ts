import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
    API_TOKEN: process.env.API_TOKEN,
    TMBD_BASE_URL: process.env.TMBD_BASE_URL,
  },
};

export default nextConfig;
