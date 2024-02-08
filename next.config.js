/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  async redirects() {
    return [
      {
        source: "/lowding",
        destination: "/lowding/about", // Matched parameters can be used in the destination
        permanent: true,
      },
    ];
  },
};
