/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images:{
    unoptimized: true
  },
  sassOptions: {
    includePaths: [require("path").join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
