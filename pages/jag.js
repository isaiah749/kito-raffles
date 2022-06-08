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
import checkmark from './styles/Icons/check-icon.svg';
import { useRouter } from 'next/router';
import Script from 'next/script'
import newJag from './styles/Jag/new-jag.png'
import ShopifyForm from '../components/ShopifyForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
export default function Jag() {
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);
	const [sizeSelected, setSizeSelected] = useState('6');

	const router = useRouter();

	const toggle = () => {
		setOpen(!open);
	};

	const addToBag = () => {
		const title = 'Fossil-X Jaguar Runner';
		const price = 98;
		const image = 'https://cdn.shopify.com/s/files/1/0274/1351/2301/files/new-jag.png?v=1653062876';
		const description =
			"Eye-catching footwear with a natural touch. Inspired by 850,000 years of evolution, the Fossil-X Jaguar Runner encapsulates the sleek nature of the Jaguar's natural bonearchitecture.";
		if (sizeSelected == '') {
			console.log('nothing selected');
		} else {
			const header = document.querySelector('#header');
			let html = `<div id='modal' class='flex items-center mt-28 fixed justify-center z-[100] w-full '>
			<div class='border-2 h-10 w-[max-content] px-4 font-semibold lg:text-lg text-green-600 rounded-full bg-white flex items-center justify-center absolute '>
				Added to bag
			</div>
		</div>`;
			let redirectModal = `<div id='modal' class='flex items-center mt-28 fixed justify-center z-[110] w-full '>
			<div class='border-2 h-10 w-[max-content] px-4 lg:text-lg font-semibold text-green-600 rounded-full bg-white flex items-center justify-center absolute '>
				Redirecting to checkout
			</div>
		</div>`;

			header.insertAdjacentHTML('afterend', html);

			const removeModal = () => {
				let modal = document.querySelector('#modal');
				modal.classList.add('hide');
			};

			setTimeout(removeModal, 2000);

			const redirect = () => {
				header.insertAdjacentHTML('afterend', redirectModal);
				function toCheckout() {
					router.push('/checkout');
				}
				setTimeout(toCheckout, 3000);
			};

			setTimeout(redirect, 2200);

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
		<div className='h-[max-content] pb-[8rem] relative w-full flex flex-col '>
			<Head>
				<title>KITO Jag Raffle</title>
			</Head>

			<header id='header' className=' relative '>
				<Navbar toggle={toggle} />
				<div className=''>
					<HamburgerDropdown isOpen={open} toggle={toggle} />
				</div>
			</header>
			{/* <div className='flex items-center mt-28 absolute justify-center z-[100] w-full '>
				<div className='border-2 text-green-600 font-semibold h-10 w-36 rounded-full bg-white flex items-center justify-center absolute '>
					Added to bag
				</div>
			</div> */}

			{/* MOBILE AND TABLET LAYOUT */}
			<main className='pt-24 w-full h-[max-content] relative xl:hidden'>
				<section className='w-full'>
					<div className='px-5'>
						<h2 className='font-title text-[2.15rem] tracking-wide lg:text-[2.4rem] '>
							Fossil-X Jaguar Runner
						</h2>
						<h3 className='font-title italic text-xl tracking-wide -mt-1 pl-2 lg:text-2xl '>
							Men's Foam Shoes
						</h3>
						<p className='font-title text-xl mt-4 pl-2 lg:text-2xl '>$98</p>
					</div>

					<div className='relative mt-10 h-[max-content] w-[full] md:hidden '>
						{/* <Image
							src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/new-jag.png?v=1653062876'
							loading='lazy'
							height={450}
							width={450}
							objectFit='cover'
						/> */}
						<img
							src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/new-jag.png?v=1653062876'
							className='w-full'
							alt=''
						/>
					</div>

					<div className='hidden relative h-[500px] mt-10 md:flex md:items-center md:justify-center md:mb-16 '>
						<Image
							src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/new-jag.png?v=1653062876'
							loading='lazy'
							layout='fill'
							objectFit='cover'
							objectPosition='center center'
						/>
					</div>

					<div className='border-2 w-[400px] mx-auto h-[max-content] py-5 my-5 md:w-[600px] shadow-md '>
						<ShopifyForm />
					</div>

				</section>

				<section className='flex items-center justify-around space-x-20 mt-8 lg:justify-between lg:space-x-0 lg:px-10 mb-2 '>
					<h3 className='font-semibold lg:text-lg '>Select Size</h3>
					<h3 className='font-semibold text-gray-500 lg:text-lg'>US Men's Size</h3>
				</section>

				<section className='w-full'>
					{/* <form className='grid grid-cols-2 lg:grid-cols-4 items-center justify-items-center gap-1 py-2 px-4 w-full'>
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
					</form> */}

					<section className='px-4 py-2 my-2 w-full h-[max-content]'>
						<h2 className='font-title text-2xl lg:px-7 lg:text-3xl lg:mb-8 '>Product Description</h2>
						<h3 className='font-title text-[1.3rem] pl-3 mt-5 lg:text-[1.65rem] lg:text-center '>
							Overview
						</h3>
						<p className='text-md w-[320px] lg:w-[500px] lg:mt-2 mx-auto pl-1 text-gray-400 '>
							Eye-catching footwear with a natural touch. Inspired by 850,000 years of evolution, the
							Fossil-X Jaguar Runner encapsulates the sleek nature of the Jaguar's natural bone
							architecture.
						</p>
					</section>

					<section className='px-4 py-2 my-2 w-full h-[max-content]'>
						<h3 className='font-title text-[1.3rem] pl-3 mt-5 lg:text-[1.65rem] lg:text-center '>
							Benefits
						</h3>
						<p className='text-md w-[320px] lg:w-[500px] lg:mt-2 mx-auto pl-1 text-gray-400 '>
							Very lightweight. Created from a luxurious plastic foam in Los Angeles, this model has been
							made for comfort and utility.
						</p>
					</section>

					<section className='px-4 py-2 my-2 w-full h-[max-content]'>
						<h3 className='font-title text-[1.3rem] pl-3 mt-5 lg:text-[1.65rem] lg:text-center '>
							Structured
						</h3>
						<p className='text-md w-[320px] lg:w-[500px] lg:mt-2 mx-auto pl-1 text-gray-400 '>
							A beast-like upper and a unique tread (referencing bone fissures) allows for a simple and
							functional wear.
						</p>
					</section>

					<section className='px-4 py-2 my-2 w-full h-[max-content]'>
						<h3 className='font-title text-[1.3rem] pl-3 mt-5 lg:text-[1.65rem] lg:text-center '>
							Eye-catching
						</h3>
						<p className='text-md w-[320px] lg:w-[500px] lg:mt-2 mx-auto pl-1 text-gray-400 '>
							Designed using the skull of a jaguar, these pairs are hard to miss.
						</p>
					</section>

					<section className='px-4 py-2 my-2 w-full h-[max-content]'>
						<h3 className='font-title text-[1.3rem] pl-3 mt-5 lg:text-[1.65rem] lg:text-center '>
							Features
						</h3>
						<p className='text-md w-[320px] lg:w-[500px] lg:mt-2 mx-auto pl-1 text-gray-400 '>
							Foam jaguar skull design. Comfortable and breathable materials allow for not only a unique
							design with precise detail, but a one of a kind experience as well.
						</p>
					</section>

					<section className='px-4 py-2 my-2 w-full h-[max-content]'>
						<h3 className='font-title text-[1.3rem] pl-3 mt-5 lg:text-[1.65rem] lg:text-center '>
							Kitowares Stamp
						</h3>
						<p className='text-md w-[320px] lg:w-[500px] lg:mt-2 mx-auto pl-1 text-gray-400 '>
							First of many in the Fossil-X series, this pair feature a debossed logo on both the insole
							and tread of the shoe.
						</p>
					</section>

					<section className='px-4 py-2 my-2 w-full h-[max-content]'>
						<h3 className='font-title text-[1.3rem] pl-3 mt-5 lg:text-[1.65rem] lg:text-center '>
							Cracked Tread
						</h3>
						<p className='text-md w-[320px] lg:w-[500px] lg:mt-2 mx-auto pl-1 text-gray-400 '>
							Create for both functionality and a unique look, the tread of the Jaguar Runners evoke the
							age and detail of a real jaguar skull.
						</p>
					</section>

					<section className='px-4 py-2 my-2 w-full h-[max-content] max-w-[650px] mx-auto '>
						<h2 className='font-title text-[1.3rem] pl-3 mt-5 lg:text-[1.65rem] lg:text-center '>
							Details
						</h2>
						<ul className='mx-auto mt-2 flex-col space-y-4 px-2 '>
							<li className='flex items-center justify-between border-b-[1px] border-black '>
								<p className='text-gray-400 '>Colorway</p>
								<p className='text-gray-400 font-semibold '>Aged Bone</p>
							</li>
							<li className='flex items-center justify-between border-b-[1px] border-black '>
								<p className='text-gray-400 '>Waterproof</p>
								<p className='text-gray-400 font-semibold '>Yes</p>
							</li>
							<li className='flex items-center justify-between border-b-[1px] border-black '>
								<p className='text-gray-400 '>Collection</p>
								<p className='text-gray-400 font-semibold '>Fossil-X</p>
							</li>
							<li className='flex items-center justify-between border-b-[1px] border-black '>
								<p className='text-gray-400 '>Lining</p>
								<p className='text-gray-400 font-semibold '>N/A</p>
							</li>
						</ul>
					</section>
				</section>
			</main>
			<div className='w-full fixed bottom-0 flex items-center justify-center px-4 pb-5 mt-5 xl:hidden '>
				{/* <button
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
				</button> */}
			</div>

			{/* DESKTOP LAYOUT */}
			<div className='hidden xl:block text-black xl:pb-5 xl:relative xl:mt-[5rem] '>
				<main className='grid grid-cols-12 relative w-full h-[100vh] '>
					{/* LEFT SECTION */}
					<section className='col-span-8 2xl:col-span-9 w-full h-[max-content] pb-[5rem]  border-2 border-r-black border-t-0 border-l-0 border-b-0 '>
						<div className='relative h-[750px] w-full'>
							{/* <Image
								src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/new-jag.png?v=1653062876'
								loading='lazy'
								layout='fill'
								objectFit='cover'
								objectPosition='center center'
							/> */}
							<img
								src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/new-jag.png?v=1653062876'
								className='w-full h-full object-cover'
								alt=''
							/>
						</div>

						<div className='border-2 w-[400px] mx-auto h-[max-content] py-5 my-8 md:w-[600px] shadow-md '>
								<ShopifyForm />
							</div>

						<h2 className='font-title my-10 text-center bg-white w-[max-content] px-4 py-2 mx-auto rounded-md border-[1px] border-black text-3xl '>
							Product Description
						</h2>

						<div className='w-full flex mx-auto px-10 justify-center h-[max-content]  py-5 space-x-6 2xl:space-x-16'>
							<div className='mt-10 bg-white p-2 border-2 border-black'>
								<h1 className='font-title text-4xl tracking-wide font-semibold '>
									Fossil-X Jaguar Runner
								</h1>
								<h3 className='font-title text-2xl tracking-wide text-black mt-3 italic '>
									Each shoe features premium eva foam + jaguar skull mold
								</h3>
								<p className='font-title text-lg max-w-[500px] 2xl:max-w-[600px] tracking-wide mt-5 '>
									Eye-catching footwear with a natural touch. Inspired by 850,000 years of evolution,
									the Fossil-X Jaguar Runner encapsulates the sleek nature of the Jaguar's natural
									bone architecture.
								</p>
								<p className='font-title text-lg max-w-[500px] 2xl:max-w-[600px] tracking-wide mt-3 '>
									Very lightweight, created from a luxurious plastic foam in Los Angeles, this model
									has been made for comfort and utility.
								</p>
								<p className='font-title text-lg max-w-[500px] 2xl:max-w-[600px] tracking-wide mt-5 '>
									A beast-like upper and a unique tread (referencing bone fissures) allows for a
									simple and functional wear. Designed with the skull of a Jaguar, these pairs are
									hard to miss.
								</p>
							</div>
							<div className='2xl:h-[400px] 2xl:w-[400px] h-[350px] w-[350px] relative '>
								<Image
									src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/jag-2.png?v=1651515528'
									layout='fill'
									loading='lazy'
									objectFit='cover'
								/>
							</div>
						</div>

						<h2 className='font-title mt-10 mb-3 text-center bg-white w-[max-content] px-4 py-2 mx-auto rounded-md border-[1px] border-black text-3xl '>
							Product Features
						</h2>

						<div className='w-full flex mx-auto px-10 justify-center h-[max-content] py-5 space-x-6 2xl:space-x-16'>
							<div className='2xl:h-[500px] 2xl:w-[500px] h-[350px] w-[350px] relative pt-[5rem] '>
								<img
									src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/new-jag.png?v=1653062876'
									className='w-full'
									alt=''
								/>
							</div>
							<div className='mt-10 bg-white h-[max-content] py-10 px-2 border-2 border-black'>
								<h1 className='font-title text-4xl tracking-wide font-semibold '>Custom Foam Design</h1>
								<h3 className='font-title text-2xl tracking-wide text-black mt-3 italic '>
									Extremely Comfortable and breathable
								</h3>
								<p className='font-title text-lg max-w-[500px] 2xl:max-w-[600px] tracking-wide mt-5 '>
									The materials allow for not only a unique design with precise detail, but a one of a
									kind experience as well.
								</p>
								<p className='font-title text-lg max-w-[500px] 2xl:max-w-[600px] tracking-wide mt-3 '>
									<span className='font-semibold text-xl'>Kitowares stamp</span> - First of many in
									the Fossil-X series, this pair feature a debossed logo on both the insole and tread
									of the shoe.
								</p>
								<p className='font-title text-lg max-w-[500px] 2xl:max-w-[600px] tracking-wide mt-5 '>
									<span className='font-semibold text-xl'>Cracked Tread</span> - Created for both
									functionality and a unique look, the tread of the of the Jaguar Runners evoke the
									age and detail of a real Jaguar skull
								</p>
							</div>
						</div>

						<h2 className='font-title my-10 text-center bg-white w-[max-content] px-2 py-2 mx-auto rounded-md border-[1px] border-black text-3xl '>
							Details
						</h2>

						<section className='px-4 w-full h-[max-content] max-w-[650px] bg-white border-2 border-black py-5 mx-auto '>
							<ul className='mx-auto mt-2 flex-col space-y-4 px-2 '>
								<li className='flex items-center justify-between border-b-[1px] border-black '>
									<p className='text-gray-400 '>Colorway</p>
									<p className='text-gray-400 font-semibold '>Aged Bone</p>
								</li>
								<li className='flex items-center justify-between border-b-[1px] border-black '>
									<p className='text-gray-400 '>Waterproof</p>
									<p className='text-gray-400 font-semibold '>Yes</p>
								</li>
								<li className='flex items-center justify-between border-b-[1px] border-black '>
									<p className='text-gray-400 '>Collection</p>
									<p className='text-gray-400 font-semibold '>Fossil-X</p>
								</li>
								<li className='flex items-center justify-between border-b-[1px] border-black '>
									<p className='text-gray-400 '>Lining</p>
									<p className='text-gray-400 font-semibold '>N/A</p>
								</li>
							</ul>
						</section>

						<h2 className='font-title my-10 text-center bg-white w-[max-content] px-2 py-2 mx-auto rounded-md border-[1px] border-black text-3xl '>
							Gallery
						</h2>

						<div className='w-full relative flex flex-wrap items-center justify-center space-x-5 mx-auto px-[4.4rem] h-[max-content] '>
							<div className=''>
								<div className='2xl:h-[400px] h-[350px] w-[350px] 2xl:w-[400px] relative '>
									<img
										src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/Jag.jpg?v=1651160948'
										className='w-full'
										alt=''
									/>
								</div>
							</div>
							<div className='2xl:h-[400px] h-[350px] w-[350px] 2xl:w-[400px] relative '>
								<Image
									src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/jag-2.png?v=1651515528'
									layout='fill'
									loading='lazy'
									className=''
									objectFit='cover'
								/>
							</div>
						</div>
					</section>
					{/* RIGHT SECTION */}
					<section className='col-span-4 2xl:col-span-3 w-full z-20 h-full relative px-8 py-5 '>
						<div className='fixed'>
							<div className=''>
								<h3 className='font-title italic text-[1.75rem] '>US Men's Shoe</h3>
								<h1 className='font-title text-[2.35rem] -mt-2 font-bold '>Fossil-X Jaguar Runner</h1>
								<h3 className='font-title text-[1.65rem] mt-3 '>$98</h3>
							</div>

							<div className=''>
								<p className='text-gray-500 w-[400px] text-[.95rem] mt-3 '>
									Purchase of this product enters you into the{' '}
									<span className='font-semibold'>Fossil-X Jaguar Runner raffle.</span> If your order
									is not selected as a winner then you will recieve a refund to the card that was
									charged at purchase.
								</p>
							</div>

							{/* <div className='border-2 w-[400px] mx-auto h-[max-content] py-5 my-2 md:w-[600px] shadow-md '>
								<ShopifyForm />
							</div> */}


							<div className='mt-6 flex items-center justify-between px-5 '>
								<p className='font-semibold text-md'>Select Size</p>
								<p className='font-semibold text-gray-500 text-md'>US Men's Size</p>
							</div>

							{/* <form className='grid grid-cols-2 items-center justify-items-center gap-1 py-2 px-4 w-full'>
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
							</form> */}
							{/* <button
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
							</button> */}
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}
