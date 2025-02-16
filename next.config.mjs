/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true, // Disable default image optimization
    },
    output: "export",
    transpilePackages: ['three'],
};

export default nextConfig;
