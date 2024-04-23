/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: "export",
  //distDir: "build",
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
