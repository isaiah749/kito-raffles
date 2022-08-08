import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import menuIcon from '../pages/styles/Icons/menu-icon.svg';
import bagIcon from '../pages/styles/Icons/bag-icon-nav.svg';
import { useRouter } from 'next/router';
import { selectItems } from '../slices/basketSlice';
import { useSelector } from 'react-redux';
import Head from 'next/head'

function Navbar({ toggle, reload }) {
	const router = useRouter();
	const items = useSelector(selectItems);

	return (
		<div className='bg-white grid grid-cols-3 h-20 w-full z-[1000] fixed shadow-lg xl:px-8 xl:py-2'>

			<Head>

				{/* <script>
				!function(f,b,e,v,n,t,s)
				{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
				n.callMethod.apply(n,arguments):n.queue.push(arguments)};
				if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
				n.queue=[];t=b.createElement(e);t.async=!0;
				t.src=v;s=b.getElementsByTagName(e)[0];
				s.parentNode.insertBefore(t,s)}(window, document,'script',
				'https://connect.facebook.net/en_US/fbevents.js');
				fbq('init', '4957337474386732');
				fbq('track', 'PageView');
				</script>
				<noscript><img height="1" width="1" style="display:none"
				src="https://www.facebook.com/tr?id=4957337474386732&ev=PageView&noscript=1"
				/></noscript> */}

			</Head>

			<div className=' flex items-center text-black cursor-pointer font-title tracking-widest text-[1.7rem] col-span-2 xl:col-span-1 md:text-4xl '>
				{/* <Image
					onClick={() => router.push('/')}
					src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/SkullGraphicSpinningsmall.gif?v=1627671973'
					height={55}
					width={75}
				/> */}

				<div className='h-[75px] w-[100px] flex items-center justify-center'>
					<img
						src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/SkullGraphicSpinningsmall.gif?v=1627671973'
						className='w-full'
						alt=''
					/>
				</div>

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
				<div className='xl:hidden relative cursor-pointer'>
					<span className='absolute top-[.65rem] right-[1rem] text-[.8rem] text-black font-semibold'>
						{items.length}
					</span>
					<Image onClick={() => router.push('/checkout')} src={bagIcon} height={35} width={35} />
				</div>
				<div className='hidden xl:block relative cursor-pointer'>
					<span className='absolute top-[1rem] right-[1.21rem] text-[.8rem] text-black font-semibold'>
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
