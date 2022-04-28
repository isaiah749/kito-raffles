import React from 'react';
import Image from 'next/image';
import jag from '../pages/styles/Jag/jag-2.png';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../slices/basketSlice';

const CheckoutProduct = ({ id, title, price, size, description }) => {
	const dispatch = useDispatch();
	const removeItem = () => {
		dispatch(removeFromBasket({ size }));
	};

	return (
		<div className=''>
			<div id={id} className='flex justify-center space-x-2 '>
				<div className='h-[175px] w-[175px] relative text-sm flex items-center justify-center '>
					<Image loading='lazy' src={jag} layout='fill' objectFit='cover' />
				</div>

				<div className=' flex-col space-y-2 pt-2 items-center '>
					<h3 className='font-title text-[1.45rem] text-gray-500 '>{title}</h3>
					<h3 className='font-title text-[1.45rem] text-gray-500 '>
						Size: <span className=''>{size}</span> (US Men)
					</h3>
					<p className='font-title text-xl font-semibold'>{price}</p>
					<button onClick={removeItem} className='text-sm text-gray-400 cursor-pointer border-2 px-2 py-1'>
						Remove from bag
					</button>
				</div>
			</div>

			<h3 className='font-title text-[1.3rem] mt-5 '>Product Description</h3>
			<p className='text-[.8rem]'>{description}</p>
		</div>
	);
};

export default CheckoutProduct;
