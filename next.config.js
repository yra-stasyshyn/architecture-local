/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
	dest: 'public',
	disable: !isProd
})

module.exports = withPWA({
	reactStrictMode: true,
	experimental: {
		forceSwcTransforms: true
	},
	images: {
		domains: ['scontent.cdninstagram.com', 'graph.instagram.com'],
		minimumCacheTTL: 600,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'scontent.cdninstagram.com'
			},
			{
				protocol: 'https',
				hostname: 'graph.instagram.com'
			}
		]
	}
})
