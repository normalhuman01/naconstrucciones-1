/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "darwinv24.sg-host.com",
      },
      {
        hostname: "naconstrucciones.com",
      },
    ],
  },
};

module.exports = nextConfig;
