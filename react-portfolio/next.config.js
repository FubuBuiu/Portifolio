/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [require("path").join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
};

module.exports = nextConfig;
