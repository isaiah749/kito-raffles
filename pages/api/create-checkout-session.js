// creating this api allows us to make a call to the api. "../api/create-checkout-sessions"
// anything in the "api" folder is backend code, anything inside of pages is frontend code

//for some error

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
	if (req.method === 'POST') {
		try {
			const { items } = req.body;
			// implicit return, what stripe expects
			const transformedItems = items.map((item) => ({
				description: item.description,
				quantity: 1,
				price_data: {
					currency: 'usd',
					unit_amount: item.price * 100,
					product_data: {
						name: item.title + ' ' + item.sizeSelected,
						images: [ item.image ],
						description: item.title + ' ' + item.sizeSelected
					}
				}
			}));

			// 58 min is adding the shipping rates and creating the shipping rates

			const session = await stripe.checkout.sessions.create({
				payment_method_types: [ 'card' ],
				shipping_address_collection: {
					allowed_countries: [
						'US',
						'AE',
						'AR',
						'AT',
						'AU',
						'BE',
						'BG',
						'BO',
						'CA',
						'CH',
						'CL',
						'CO',
						'CR',
						'CY',
						'CZ',
						'DE',
						'DK',
						'DO',
						'EE',
						'EG',
						'ES',
						'FI',
						'FR',
						'GB',
						'GM',
						'GR',
						'HK',
						'HR',
						'HU',
						'ID',
						'IE',
						'IL',
						'IS',
						'IT',
						'KE',
						'KR',
						'LI',
						'LT',
						'LU',
						'LV',
						'MT',
						'MX',
						'NL',
						'NO',
						'NZ',
						'PE',
						'PH',
						'PL',
						'PT',
						'PY',
						'RO',
						'SA',
						'SE',
						'SG',
						'SI',
						'SK',
						'TH',
						'TR',
						'TT',
						'UY',
						'ZA'
					]
				},
				line_items: transformedItems,
				mode: 'payment',
				success_url: `${req.headers.origin}/entry-success`,
				cancel_url: `${req.headers.origin}/entry-failed`,
				metadata: {
					images: JSON.stringify(items.map((item) => item.image)),
					itemData: JSON.stringify(items.map((item) => item.title)),
					sizeData: JSON.stringify(items.map((item) => item.sizeSelected)),
				}
			});

			res.status(200).json({ id: session.id });
			// res.redirect(303, session.url);
		} catch (err) {
			res.status(err.statusCode || 500).json(err.message);
		}
	} else {
		res.setHeader('Allow', 'POST');
		res.status(405).end('Method Not Allowed');
	}
};
