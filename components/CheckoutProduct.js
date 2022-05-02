import React from 'react';
import Image from 'next/image';
import jag from '../pages/styles/Jag/jag-2.png';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../slices/basketSlice';

const CheckoutProduct = ({ id, title, price, size, description, image }) => {
	const dispatch = useDispatch();
	const removeItem = () => {
		dispatch(removeFromBasket({ size }));
	};

	return (
		<div className='lg:border-2 lg:border-gray-500 xl:w-[50%] xl:mx-auto '>
			<div id={id} className='flex justify-center space-x-2 lg:justify-start lg:space-x-4 '>
				<div className='h-[175px] w-[175px] relative text-sm flex items-center justify-center lg:h-[300px] lg:w-[300px] '>
					<img
						src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/Jag.jpg?v=1651160948'
						className='w-full'
						alt=''
					/>
				</div>

				<div className=' flex-col space-y-2 pt-2 items-center lg:pt-8 '>
					<h3 className='font-title text-[1.45rem] text-gray-500 lg:text-[1.65rem] '>{title}</h3>
					<h3 className='font-title text-[1.45rem] text-gray-500 lg:text-[1.5rem] '>
						Size: <span className=''>{size}</span> (US Men)
					</h3>
					<p className='font-title text-xl lg:text-[1.3rem] '>
						{'$'}
						{price}
					</p>
					<button
						onClick={removeItem}
						className='text-sm text-gray-400 cursor-pointer border-2 px-2 py-1 hover:border-black hover:text-black transition duration-300 ease-in-out lg:text-[.97rem] '>
						Remove from bag
					</button>
				</div>
			</div>

			<h3 className='font-title text-[1.3rem] lg:px-4 mt-5 lg:text-[1.6rem] '>Product Description</h3>
			<p className='text-[.8rem] lg:pb-5 lg:px-4 lg:text-[1rem] '>{description}</p>
		</div>
	);
};

export default CheckoutProduct;
