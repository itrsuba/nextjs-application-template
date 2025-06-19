/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  // Ensure we can use face-api.js and TensorFlow.js in Next.js
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false,
    }
    return config
  },
  // Experimental features
  experimental: {
    // Enable server actions
    serverActions: true,
  },
  // Environment variables that will be available at build time
  env: {
    NEXT_PUBLIC_APP_NAME: 'Budi Asta Hospital Attendance',
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:8000',
    NEXT_PUBLIC_HOSPITAL_LOCATION: {
      latitude: -6.2088, // Default to Jakarta coordinates
      longitude: 106.8456,
      radius: 100, // Radius in meters for valid attendance
    },
  },
}

module.exports = nextConfig
