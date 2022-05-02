import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import HamburgerDropdown from '../components/HamburgerDropdown';
import Head from 'next/head';
import rightArrow from './styles/Icons/right-arrow.svg';
import Image from 'next/image';
import { selectItems } from '../slices/basketSlice';
import { useSelector } from 'react-redux';
import CheckoutProduct from '../components/CheckoutProduct';
import { useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';
import axios, { AxiosResponse } from 'axios';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// export async function getServerSideProps(context) {

// }

const Checkout = () => {
	const items = useSelector(selectItems);
	const router = useRouter();
	const [ open, setOpen ] = useState(false);

	const [ buy, setBuy ] = useState(false);

	const createCheckoutSession = async () => {
		const stripe = await stripePromise;
		setBuy(true);

		// Call the backend to create a checkout session.. this is our own backend that we will create

		// Make request to the "create-checkout-session.js" thats in the api folder
		// Make a request to certain endpoint then after the comma specifying the body (data) we want
		const checkoutSession = await axios.post('/api/create-checkout-session', {
			items: items
		});

		axios.interceptors.response.use(undefined, (error) => {
			const { status, data, config } = error.response;
			if (status === 404) {
				router.push('/');
			}
			if (status === 400) {
				router.push('/');
			}
			if (status === 500) {
				router.push('/');
			}
			if (status === 502) {
				router.push('/');
			}
		});

		// Redirect the user to Stripe Checkout
		const result = await stripe.redirectToCheckout({
			sessionId: checkoutSession.data.id
		});

		if (result.error) {
			router.push('/');
		}
	};

	// WHAT HAPPENS - make a request to the backend to create the checkout session, comes back to the frontend, then redirects them to the checkout page. At that point it is up to Stripe and the fall back urls (success and cancel)

	const toggle = () => {
		setOpen(!open);
	};

	return (
		<div className='relative h-[max-content] w-full pb-[5rem] '>
			<Head>
				<title>Kito - Checkout</title>
			</Head>

			<header className=' relative '>
				<Navbar toggle={toggle} />
				<div className=''>
					<HamburgerDropdown isOpen={open} toggle={toggle} />
				</div>
			</header>

			<main className='pt-24 px-5 '>
				<h2 className='font-title text-[2.15rem] font-bold tracking-wide lg:text-[2.3rem] xl:px-10 '>
					Your Bag
				</h2>

				{items.length === 0 ? (
					<div className=''>
						<div className='pb-7 flex items-center justify-between '>
							<div className='flex-col items-center xl:px-10 justify-center -space-y-1'>
								<h3 className='font-title text-xl text-gray-500 tracking-wide '>Your bag is empty</h3>
							</div>

							<button
								onClick={() => {
									router.push('/jag');
								}}
								className='bg-black font-title min-w-[175px] xl:mr-10 h-12 text-[1.4rem] max-w-[400px] text-white tracking-wider flex items-center justify-between px-3 '>
								<p className=''>Enter Raffle</p>
								<Image src={rightArrow} height={25} width={25} />
							</button>
						</div>

						<p className='text-gray-500 mt-8 text-sm ml-10  '>
							<span className='font-bold text-lg block mb-3'>PLEASE ADVISE:</span> You will be charged
							full price upon enter the raffle, however if your entry is not a selected winner the you
							will be refunded the full amount. The money will be refunded to the card that was used to
							enter the raffle.
						</p>
						<p className='text-gray-500 mt-3 text-sm ml-10 '>
							For any assistance at all please reach out to our customer service team,{' '}
							<span className='font-semibold text-black '>info@kito.online.</span>
						</p>

						{/* IMAGE GALLERY */}
						<button
							onClick={() => {
								router.push('/jag');
							}}
							className='bg-black font-title w-[90%] lg:w-[70%] xl:w-[50%] mx-auto left-0 right-0 rounded-sm h-12 text-[1.4rem] text-white tracking-wider flex items-center justify-between px-3 fixed bottom-2 '>
							<p className=''>Enter Raffle</p>
							<Image src={rightArrow} height={25} width={25} />
						</button>
					</div>
				) : (
					<div className='relative'>
						<div className='pb-7 flex items-center justify-between xl:px-10 '>
							<div className='flex-col items-center justify-center -space-y-1'>
								<h3 className='font-title text-xl text-gray-500 tracking-wide lg:text-[1.4rem] '>
									TOTAL: (<span className=''>{items.length}</span> item)
								</h3>
								<div className='text-lg  font-title tracking-wider lg:text-xl '>
									<span>$</span>
									{items.length * 98}
								</div>
							</div>

							<button
								role='link'
								onClick={createCheckoutSession}
								className='bg-black rounded-sm font-title mb-2 shadow-lg w-[250px] h-12 text-[1.4rem] text-white tracking-widest active:scale-90 transition duration-300 flex items-center justify-between px-3 '>
								<p className=''>{buy ? 'Loading...' : 'Checkout'}</p>
								<Image src={rightArrow} height={25} width={25} />
							</button>
						</div>

						<section className='hidden xl:block mt-5 border-2 fixed right-5 w-[400px] bg-white rounded-md p-5'>
							<h2 className='font-title text-2xl'>Order Summary</h2>

							<div className='flex-col'>
								<div className='flex items-center justify-between text-gray-500 '>
									<p className='font-title mt-3 text-lg '>Total Items: {items.length} x $98</p>
									<p className=' font-title tracking-wider text-lg pt-3'>
										<span>$</span>
										{items.length * 98}
									</p>
								</div>
								<div className='flex items-center justify-between'>
									<p className='font-title mt-3 text-lg '>Total:</p>
									<p className=' font-title tracking-wider text-lg pt-3'>
										<span>$</span>
										{items.length * 98}
									</p>
								</div>

								<div className='' />
							</div>
						</section>

						<p className='text-gray-500 xl:px-10'>
							Items in your bag are not reserved. Checkout out now to enter the raffle.
						</p>

						<p className='text-gray-500 font-semibold mt-5 xl:px-10'>
							Shipping is included for domestic customers. International customers will be invoiced
							separatley.
						</p>

						<div className='w-full bg-gray-500 h-[1.5px] mt-8 ' />

						<section className='mt-12 flex-col space-y-5 relative '>
							{items.map((item, index) => (
								<CheckoutProduct
									key={index}
									id={item.id}
									title={item.title}
									image={item.image}
									price={item.price}
									size={item.sizeSelected}
									description={item.description}
								/>
							))}
						</section>

						<div className='w-full bg-gray-500 h-[1.5px] mt-11 ' />

						<section className='mt-5 border-2 rounded-md p-5 xl:hidden'>
							<h2 className='font-title text-2xl'>Order Summary</h2>

							<div className='flex-col'>
								<div className='flex items-center justify-between'>
									<p className='font-title mt-3 text-lg pl-2'>Total Items: {items.length} x $98</p>
									<p className=' font-title tracking-wider text-lg pt-3'>
										<span>$</span>
										{items.length * 98}
									</p>
								</div>

								<div className='' />
							</div>
						</section>

						<p className='text-gray-500 relative h-[max-content] mt-8 text-sm'>
							<span className='font-bold text-lg block mb-3'>PLEASE ADVISE:</span> You will be charged
							full price upon enter the raffle, however if your entry is not a selected winner the you
							will be refunded the full amount. The money will be refunded to the card that was used to
							enter the raffle.
						</p>
						{/* IMAGE GALLERY */}
						<button
							role='link'
							onClick={createCheckoutSession}
							className='bg-black font-title w-[90%] lg:w-[70%] xl:w-[30%] mx-auto left-0 right-0 rounded-sm h-12 active:scale-90 transition ease-in-out duration-300 text-[1.4rem] shadow-lg text-white tracking-wider flex items-center justify-between px-3 fixed bottom-2 '>
							<p className=''>{buy ? 'Loading...' : 'Checkout'}</p>
							<Image src={rightArrow} height={25} width={25} />
						</button>
					</div>
				)}
			</main>
		</div>
	);
};

export default Checkout;
