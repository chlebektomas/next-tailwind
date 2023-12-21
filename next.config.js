/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["lh3.googleusercontent.com", "i.pinimg.com", "tailwindui.com"],
	},
	webpack: (config, { isServer }) => {
		// Fixes npm packages that depend on `net` module
		if (!isServer) {
			config.resolve.fallback = {
				...config.resolve.fallback,
				net: false,
				tls: false,
				ls: false,
				fs: false,
				child_process: false,
			};
		}

		return config;
	},
};

module.exports = nextConfig;
