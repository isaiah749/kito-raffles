import Head from 'next/head';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import HamburgerDropdown from '../components/HamburgerDropdown';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '../components/Hero';
import afterlifeRaffle from './afterlife-raffle';
import heroImg from './styles/Jag/Jag.jpg';
import Subscribe from '../components/Subscribe';
import { useRouter } from 'next/router';
import Slideshow from '../components/Slideshow';
import jagPlane from './styles/Jag/jag-plane.jpg';
import Typed from 'react-typed';

export default function Home() {
	const router = useRouter();
	const [ isOpen, setIsOpen ] = useState(false);

	const images = [
		{
			link: 'https://cdn.shopify.com/s/files/1/0274/1351/2301/files/Image_20220318_125641.jpg?v=1648052080',
			name: 'Roots'
		},
		{
			link: 'https://cdn.shopify.com/s/files/1/0274/1351/2301/files/IMG_0701.jpg?v=1638823550',
			name: 'Afterlife'
		},
		{
			link: 'https://cdn.shopify.com/s/files/1/0274/1351/2301/files/MM-Shoe.jpg?v=1632757060',
			name: 'Mary'
		},
		{
			link:
				'https://cdn.shopify.com/s/files/1/0274/1351/2301/files/catadunkprodshot2_9220204c-d6cc-489e-bb1c-9e63cb5c5566.jpg?v=1637766112',
			name: 'Catacombs'
		}
	];

	//   const reload = () => {
	//     window.location.reload()
	// }

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='flex flex-col min-h-screen'>
			<Head>
				<title>Kito Raffles ~ Home</title>
			</Head>

			<Navbar toggle={toggle} />
			<div className='transition-all duration-300 ease-in-out'>
				<HamburgerDropdown isOpen={isOpen} toggle={toggle} />
			</div>

			<main className='mt-[5rem] min-h-screen w-full'>
				<section className='w-full '>
					<Slideshow />
				</section>

				<h2 className='font-title text-3xl text-center mt-10 mb-3 lg:text-[2.6rem] '>Don't Miss Out</h2>

				<p className='text-center px-5 lg:w-[600px] lg:mx-auto text-lg  '>
					Just because the Jag Foam isn't for you doesn't mean you have to say goodbye forever! Sign up below
					to receive release announcements, updates, and more from Kito.
				</p>

				<section className='my-10 px-2 py-2 lg:px-0 lg:w-[700px] lg:mx-auto '>
					<div className='border-2 border-black '>
						<Subscribe />
					</div>
				</section>

				<section className='mt-5 py-5 px-2 lg:px-0 h-[max-content] mx-auto lg:w-[700px] '>
					<div className='border-2 border-black flex-col items-center'>
						<h2 className='font-title text-3xl p-2 text-center lg:text-4xl lg:pt-4 '>
							What's Happening Now
						</h2>
						<p className='font-title text-lg text-center p-2 text-gray-500 mb-10 lg:text-2xl tracking-wide '>
							The Jag Foam raffle is live now! Click below to enter. This shoe features premium eva foam,
							sizes range from 6-14. Please note that there are no half sizes for this product.{' '}
						</p>
						<div className='flex items-center justify-center relative h-[300px] w-full lg:h-[475px] '>
							<Image src={jagPlane} loading='lazy' alt='jag' layout='fill' objectFit='cover' />
							<button
								onClick={() => router.push('/jag')}
								className='absolute top-1/3 bottom-1/2 flex items-center justify-center border-[1px] border-gray-100 shadow-lg rounded-lg bg-blur-background backdrop-blur-sm w-[250px] px-4 py-2 h-[50px] lg:border-2 lg:shadow-xl lg:w-[350px] lg:py-8 '>
								<p className='font-title text-[1.5rem] flex items-center justify-center font-semibold tracking-wide lg:text-[2rem] '>
									{' '}
									<Typed
										strings={[ 'Jag Foam Raffle', 'Enter Now' ]}
										typeSpeed={100}
										backSpeed={50}
										loop
									/>
								</p>
							</button>
						</div>
					</div>
				</section>
				<section className='mt-10 py-5 px-2 lg:px-0 max-w-[700px] h-[max-content] mx-auto '>
					<div className='border-2 border-black flex-col items-center'>
						<h2 className='font-title text-3xl p-2 text-center lg:p-4 lg:text-4xl '>Gallery</h2>
					</div>
					<div className='grid grid-cols-1 gap-y-5 mt-5 lg:grid-cols-2 lg:gap-y-0 lg:gap-5 '>
						{images.map((image, index) => (
							<div
								key={index}
								className='h-[400px] border-b-2 md:border-b-0 border-black w-[full] relative '>
								<Image src={image.link} alt={image.name} layout='fill' objectFit='contain' />
							</div>
						))}
					</div>
				</section>
			</main>
		</div>
	);
}
