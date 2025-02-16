/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    images: {
        unoptimized: true, // Disable default image optimization
    },
    output: "export",
    transpilePackages: ['three'],
};

export default nextConfig;
