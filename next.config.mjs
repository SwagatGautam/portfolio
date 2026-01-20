/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // 🔴 REQUIRED for static site

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true, // ✅ required for next export
  },
}

export default nextConfig
