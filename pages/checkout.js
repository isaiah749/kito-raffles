import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import HamburgerDropdown from '../components/HamburgerDropdown';
import Head from 'next/head';
import rightArrow from './styles/Icons/right-arrow.svg';
import Image from 'next/image';
import { selectItems } from '../slices/basketSlice';
import { useSelector } from 'react-redux/es/exports';
import CheckoutProduct from '../components/CheckoutProduct';

const Checkout = () => {
	const items = useSelector(selectItems);

	const [ open, setOpen ] = useState(false);

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
				<h2 className='font-title text-[2.15rem] font-bold tracking-wide '>Your Bag</h2>

				{items.length === 0 ? (
					<div className=''>
						<div className='pb-7 flex items-center justify-between '>
							<div className='flex-col items-center justify-center -space-y-1'>
								<h3 className='font-title text-xl text-gray-500 tracking-wide '>Your bag is empty</h3>
							</div>

							<button className='bg-black font-title min-w-[175px] h-12 text-[1.4rem] max-w-[400px] text-white tracking-wider flex items-center justify-between px-3 '>
								<p className=''>Enter Raffle</p>
								<Image src={rightArrow} height={25} width={25} />
							</button>
						</div>

						<p className='text-gray-500 mt-8 text-sm'>
							<span className='font-bold text-lg block mb-3'>PLEASE ADVISE:</span> You will be charged
							full price upon enter the raffle, however if your entry is not a selected winner the you
							will be refunded the full amount. The money will be refunded to the card that was used to
							enter the raffle.
						</p>
						<p className='text-gray-500 mt-3 text-sm'>
							For any assistance at all please reach out to our customer service team,{' '}
							<span className='font-semibold text-black '>info@kito.online.</span>
						</p>

						{/* IMAGE GALLERY */}
					</div>
				) : (
					<div className=''>
						<div className='pb-7 flex items-center justify-between '>
							<div className='flex-col items-center justify-center -space-y-1'>
								<h3 className='font-title text-xl text-gray-500 tracking-wide '>
									TOTAL: (<span className=''>{items.length}</span> item)
								</h3>
								<div className='text-lg font-semibold font-title tracking-wider '>
									<span>$</span>
									{items.length * 120}
								</div>
							</div>

							<button className='bg-black rounded-sm font-title min-w-[175px] h-12 text-[1.4rem] max-w-[400px] text-white tracking-wider flex items-center justify-between px-3 '>
								<p className=''>Checkout</p>
								<Image src={rightArrow} height={25} width={25} />
							</button>
						</div>

						<p className='text-gray-500'>
							Items in your bag are not reserved. Checkout out now to enter the raffle.
						</p>

						<div className='w-full bg-gray-500 h-[1.5px] mt-11 ' />

						<section className='mt-12 flex-col space-y-5 justify-between relative '>
							{items.map((item, index) => (
								<CheckoutProduct
									key={index}
									id={item.id}
									title={item.title}
									price={item.price}
									size={item.sizeSelected}
									description={item.description}
								/>
							))}
						</section>

						<div className='w-full bg-gray-500 h-[1.5px] mt-11 ' />

						<section className='mt-5 border-2 rounded-md p-5'>
							<h2 className='font-title text-2xl'>Order Summary</h2>

							<div className='flex-col'>
								<div className='flex items-center justify-between'>
									<p className='font-title mt-3 text-lg pl-2'>Total Items: {items.length} x $120</p>
									<p className='font-bold font-title tracking-wider text-lg pt-3'>
										<span>$</span>
										{items.length * 120}
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
					</div>
				)}
			</main>
			<button className='bg-black font-title w-[90%] mx-auto left-0 right-0 rounded-sm h-12 text-[1.4rem] text-white tracking-wider flex items-center justify-between px-3 fixed bottom-2 '>
				<p className=''>Checkout</p>
				<Image src={rightArrow} height={25} width={25} />
			</button>
		</div>
	);
};

export default Checkout;
