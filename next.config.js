module.exports = {
	images: {
		domains: [ 'cdn.shopify.com' ]
	},

	env: {
		NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
		STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY
	}
};
