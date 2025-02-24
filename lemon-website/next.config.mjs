/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
	    unoptimized: true, // Disable default image optimization
	},
	// do this to output static exports!!
	output: "export",
};

export default nextConfig;