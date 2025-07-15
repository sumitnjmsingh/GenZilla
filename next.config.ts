import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['res.cloudinary.com', 'randomuser.me', 'img.clerk.com'],
  },
};

export default nextConfig;
