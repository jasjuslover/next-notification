/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    FIREBASE_VAPID_KEY: process.env.FIREBASE_VAPID_KEY,
  },
};

export default nextConfig;
