import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import menuIcon from '../pages/styles/Icons/menu-icon.svg';
import bagIcon from '../pages/styles/Icons/bag-icon.svg';
import { useRouter } from 'next/router';
import { selectItems } from '../slices/basketSlice';
import { useSelector } from 'react-redux';

function Navbar({ toggle, reload }) {
	const router = useRouter();
	const items = useSelector(selectItems);

	return (
		<div className='bg-black grid grid-cols-3 h-20 w-full z-[1000] fixed shadow-lg xl:px-8 xl:py-2'>
			<div className=' flex items-center text-white cursor-pointer font-title tracking-widest text-[1.7rem] col-span-2 xl:col-span-1 md:text-4xl '>
				<Image
					onClick={() => router.push('/')}
					src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/SkullGraphicSpinningsmall.gif?v=1627671973'
					height={55}
					width={75}
				/>

				<Link href='/'>
					<a className='pt-2 -ml-2 md:-ml-1 '>Kito-Raffles</a>
				</Link>
			</div>
			<div className='hidden xl:flex xl:items-center xl:justify-center'>
				<ul className='text-white flex lg:space-x-8 md:space-x-4 font-title tracking-widest'>
					<li className='hover:underline hover:underline-offset-4 text-lg pt-2'>
						<Link href='/'>
							<a>Home</a>
						</Link>
					</li>
					<li className='hover:underline hover:underline-offset-4 text-lg pt-2'>
						<Link href='/contact'>
							<a>Contact</a>
						</Link>
					</li>
					<li className='hover:underline hover:underline-offset-4 text-lg pt-2'>
						<Link href='/policy'>
							<a>Policy</a>
						</Link>
					</li>
					<li className='hover:underline hover:underline-offset-4 text-lg pt-2'>
						<Link href='https://kito.online'>
							<a>KITO.online</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className='flex items-center space-x-3 justify-end pt-2 pr-3 '>
				<div className='lg:hidden relative cursor-pointer'>
					<span className='absolute top-[.65rem] right-[.97rem] text-[.8rem] text-white font-semibold'>
						{items.length}
					</span>
					<Image onClick={() => router.push('/checkout')} src={bagIcon} height={35} width={35} />
				</div>
				<div className='hidden lg:block relative cursor-pointer'>
					<span className='absolute top-[1rem] right-[1.2rem] text-[.8rem] text-white font-semibold'>
						{items.length}
					</span>
					<Image onClick={() => router.push('/checkout')} src={bagIcon} height={45} width={45} />
				</div>

				<div className='xl:hidden cursor-pointer transition-all duration-300 ease-in-out'>
					<Image
						src={menuIcon}
						onClick={toggle}
						className='transition-all duration-300 ease-in-out'
						height={35}
						width={35}
					/>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
