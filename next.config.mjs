/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for Docker multi-stage build (copies only what's needed)
  output: 'standalone',
  // Transpile @react-three packages for Next.js compatibility
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
};

export default nextConfig;
