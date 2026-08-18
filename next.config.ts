/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zql0rfjwszzixew9.public.blob.vercel-storage.com',
      },
      // Or to allow all Vercel Storage blobs:
      // {
      //   protocol: 'https',
      //   hostname: '*.public.blob.vercel-storage.com',
      // },
    ],
  },
};

module.exports = nextConfig; // Use `export default nextConfig;` if using ES modules (.mjs)