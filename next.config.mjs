/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "staging.flyvaluejet.com",
      },
    ],
  },
};

export default nextConfig;
