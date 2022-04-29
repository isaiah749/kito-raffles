import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import HamburgerDropdown from '../components/HamburgerDropdown';
import Image from 'next/image';
import jag from './styles/Jag/jag-1.jpg';
import sizeData from './context/shoeSizeData.json';
import { RadioGroup } from '@headlessui/react';
import bagIcon from './styles/Icons/bag-icon.svg';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
import jagTwo from './styles/Jag/jag-2.png';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
export default function Jag() {
	const dispatch = useDispatch();

	const [ open, setOpen ] = useState(false);
	const [ sizeSelected, setSizeSelected ] = useState('');

	const toggle = () => {
		setOpen(!open);
	};

	const addToBag = () => {
		const title = 'Kito Jag Foam Shoes';
		const price = 98;
		const image = 'https://cdn.shopify.com/s/files/1/0274/1351/2301/files/Jag.jpg?v=1651160948';
		const description =
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium natus facilis architecto quos, laudantium hic voluptatibus vitae vel quidem asperiores cum inventore ea molestiae fugit sit deserunt omnis quae dicta?';
		if (sizeSelected == '') {
			alert('nothing selected');
		} else {
			const product = {
				title,
				sizeSelected,
				price,
				description,
				image
			};

			dispatch(addToBasket(product));
		}
	};

	useEffect(() => {
		// Check to see if this is a redirect back from Checkout
		const query = new URLSearchParams(window.location.search);
		if (query.get('success')) {
			console.log('Order placed! You will receive an email confirmation.');
		}

		if (query.get('canceled')) {
			console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
		}
	}, []);

	return (
		<div className='h-[100vh] relative pb-5 w-full flex flex-col '>
			<Head>
				<title>KITO Jag Raffle</title>
			</Head>

			<header className=' relative '>
				<Navbar toggle={toggle} />
				<div className=''>
					<HamburgerDropdown isOpen={open} toggle={toggle} />
				</div>
			</header>
			{/* MOBILE AND TABLET LAYOUT */}
			<main className='pt-24 w-full h-[200vh] relative xl:hidden'>
				<section className='w-full'>
					<div className='px-5'>
						<h2 className='font-title text-[2.15rem] tracking-wide lg:text-[2.4rem] '>
							Kito Jag Foam Shoe
						</h2>
						<h3 className='font-title text-xl tracking-wide -mt-1 pl-2 lg:text-2xl '>Men's Foam Shoes</h3>
						<p className='font-title text-xl mt-4 pl-2 lg:text-2xl '>$98</p>
					</div>

					<div className='relative mt-10 h-full md:hidden '>
						<Image src={jag} loading='lazy' height={450} width={450} objectFit='cover' />
					</div>

					<div className='hidden relative mt-10 h-full md:flex md:items-center md:justify-center md:mb-16 '>
						<Image src={jag} loading='lazy' height={620} width={620} objectFit='cover' />
					</div>
				</section>

				<section className='flex items-center justify-around space-x-20 mt-8 lg:justify-between lg:space-x-0 lg:px-10 mb-2 '>
					<h3 className='font-semibold lg:text-lg '>Select Size</h3>
					<h3 className='font-semibold text-gray-500 lg:text-lg'>US Men's Size</h3>
				</section>

				<section className='w-full'>
					<form className='grid grid-cols-2 lg:grid-cols-4 items-center justify-items-center gap-1 py-2 px-4 w-full'>
						{sizeData.map(({ id, size }) => (
							<RadioGroup key={id} value={sizeSelected} onChange={setSizeSelected}>
								<RadioGroup.Option className='h-12 w-40 flex items-center justify-center' value={size}>
									{({ checked }) => (
										<span
											className={
												checked ? (
													'border-2 border-black rounded-md flex items-center justify-center h-full w-full'
												) : (
													'flex rounded-md items-center h-full border-2 w-full justify-center'
												)
											}>
											{size}
										</span>
									)}
								</RadioGroup.Option>
							</RadioGroup>
						))}
					</form>

					<section className='px-4 mt-5 mb-[5rem] w-full h-[400px]'>
						<h2 className='font-title text-2xl lg:px-7 lg:text-3xl '>Product Description</h2>
						<p className='text-md w-[300px] lg:w-[500px] lg:mt-2 mx-auto pl-1 text-gray-400 '>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequatur et veritatis,
							quos non, optio, perspiciatis iste dolorum accusantium reiciendis aperiam. Ab natus
							voluptatum repellendus! Similique rerum dignissimos quam eum.
						</p>
						<p className='text-md w-[300px] lg:w-[500px] mt-3 mx-auto pl-1 text-gray-400 '>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequatur et veritatis,
							quos non, optio, perspiciatis iste dolorum accusantium reiciendis aperiam. Ab natus
							voluptatum repellendus! Similique rerum dignissimos quam eum.
						</p>
					</section>
				</section>
			</main>
			<div className='w-full fixed bottom-0 flex items-center justify-center px-4 pb-5 mt-5 xl:hidden '>
				<button
					className='w-full h-14 bg-black shadow-lg text-white rounded-lg '
					onClick={(e) => {
						e.preventDefault();
						addToBag();
						console.log({ sizeSelected });
					}}>
					<div className='flex items-center justify-center'>
						<p className='mr-1 font-title text-2xl py-2 lg:text-3xl '>Add to bag</p>
						<div className='lg:hidden'>
							<Image src={bagIcon} height={25} width={25} />
						</div>
						<div className='hidden lg:block'>
							<Image src={bagIcon} height={35} width={35} />
						</div>
					</div>
				</button>
			</div>

			{/* DESKTOP LAYOUT */}
			<div className='hidden xl:block text-black xl:pb-5 xl:relative xl:mt-[5rem] '>
				<main className='grid grid-cols-12 relative w-full h-[100vh] '>
					{/* LEFT SECTION */}
					<section className='col-span-8 2xl:col-span-9 w-full h-[200vh] main-background border-2 border-r-black border-t-0 border-l-0 border-b-0 '>
						<div className='relative h-[750px] w-full'>
							<Image
								src={jag}
								loading='lazy'
								layout='fill'
								objectFit='cover'
								objectPosition='center center'
							/>
						</div>

						<h2 className='font-title my-10 text-center bg-white w-[max-content] px-4 py-2 mx-auto rounded-md border-[1px] border-black text-3xl '>
							Product Description
						</h2>

						<div className='w-full flex mx-auto px-10 justify-center h-[max-content] main-background py-5 space-x-6 2xl:space-x-16'>
							<div className='mt-10 bg-white p-2 border-2 border-black'>
								<h1 className='font-title text-4xl tracking-wide font-semibold '>KITO Jag Foam Shoe</h1>
								<h3 className='font-title text-2xl tracking-wide text-black mt-3 italic '>
									Each shoe features premium eva foam + jaguar skull mold
								</h3>
								<p className='font-title text-lg max-w-[500px] 2xl:max-w-[600px] tracking-wide mt-5 '>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium qui ducimus
									similique et aspernatur, officia ullam dolorum modi alias amet consectetur non!
									Numquam illo corporis expedita doloremque velit, magni impedit. Lorem ipsum dolor
									sit, amet consectetur adipisicing elit. Voluptate ratione neque autem maiores porro?
									Ex ea harum voluptas eos eum ratione blanditiis voluptate, repellat labore atque
									deserunt natus itaque dolorum.
								</p>
							</div>
							<div className='2xl:h-[400px] 2xl:w-[400px] h-[350px] w-[350px] relative '>
								<Image src={jagTwo} layout='fill' loading='lazy' objectFit='cover' />
							</div>
						</div>

						<h2 className='font-title my-10 text-center bg-white w-[max-content] px-2 py-2 mx-auto rounded-md border-[1px] border-black text-3xl '>
							Gallery
						</h2>

						<div className='w-full relative flex flex-wrap items-center justify-center space-x-5 mx-auto px-[4.4rem] h-[max-content] '>
							<div className=''>
								<div className='2xl:h-[400px] h-[350px] w-[350px] 2xl:w-[400px] relative '>
									<Image src={jag} layout='fill' loading='lazy' objectFit='cover' />
								</div>
							</div>
							<div className='2xl:h-[400px] h-[350px] w-[350px] 2xl:w-[400px] relative '>
								<Image src={jagTwo} layout='fill' loading='lazy' className='' objectFit='cover' />
							</div>
						</div>
					</section>
					{/* RIGHT SECTION */}
					<section className='col-span-4 2xl:col-span-3 w-full z-20 h-full relative px-8 py-5 '>
						<div className='fixed'>
							<div className=''>
								<h3 className='font-title italic text-[1.75rem] '>US Men's Shoe</h3>
								<h1 className='font-title text-[2.35rem] -mt-2 font-bold '>Kito Jag Foam Shoe</h1>
								<h3 className='font-title text-[1.65rem] mt-3 '>$98</h3>
							</div>

							<div className=''>
								<p className='text-gray-500 w-[400px] text-[.95rem] mt-3 '>
									Purchase of this product enters you into the{' '}
									<span className='font-semibold'>Kito Jag Foam Shoe raffle.</span> If your order is
									not selected as a winner then you will recieve a refund to the card that was charged
									at purchase.
								</p>
							</div>

							<div className='mt-6 flex items-center justify-between px-5 '>
								<p className='font-semibold text-md'>Select Size</p>
								<p className='font-semibold text-gray-500 text-md'>US Men's Size</p>
							</div>

							<form className='grid grid-cols-2 items-center justify-items-center gap-1 py-2 px-4 w-full'>
								{sizeData.map(({ id, size }) => (
									<RadioGroup key={id} value={sizeSelected} onChange={setSizeSelected}>
										<RadioGroup.Option
											className='h-12 w-[10.7rem] cursor-pointer flex items-center justify-center'
											value={size}>
											{({ checked }) => (
												<span
													className={
														checked ? (
															'border-2 border-black rounded-md flex items-center justify-center h-full w-full hover:border-black'
														) : (
															'flex rounded-md items-center h-full border-2 w-full justify-center hover:border-black'
														)
													}>
													{size}
												</span>
											)}
										</RadioGroup.Option>
									</RadioGroup>
								))}
							</form>
							<button
								onClick={(e) => {
									e.preventDefault();
									addToBag();
									console.log({ sizeSelected });
								}}
								className='py-2 h-14 border-2 border-black rounded-xl flex items-center active:scale-90 transition duration-300 justify-center shadow-xl mt-5 bg-black text-white w-full font-title text-[1.6rem] '>
								<p className='mr-2'>Add to bag</p>
								<div className='pt-1'>
									<Image src={bagIcon} height={35} width={35} />
								</div>
							</button>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}
