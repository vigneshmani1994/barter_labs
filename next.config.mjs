/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    // This tells Next.js to serve files from /barter_labs instead of the root /
    basePath: '/barter_labs', 
  };
  
  export default nextConfig;