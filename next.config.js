/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: ["i.ibb.co"],
  },
  remotePatterns: [
    {
      protocol: "https",
      hostname: "i.ibb.co",
      port: "",
    },
  ],
};

module.exports = nextConfig;
