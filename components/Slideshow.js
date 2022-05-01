import React from 'react';
import Image from 'next/image';
import { Fade } from 'react-slideshow-image';
import { useRouter } from 'next/router';

const Slideshow = () => {
	const images = [ '/images/jag-2.png', '/images/jag-nyc.png', '/images/jag-wood.png' ];

	const router = useRouter();

	const zoomInProperties = {
		indicators: false,
		scale: 1.2,
		duration: 3750,
		transitionDuration: 500
	};

	return (
		<div className=''>
			<Fade {...zoomInProperties}>
				{images.map((each, index) => (
					<div
						key={index}
						className='flex justify-center relative mx-auto items-center w-full xl:max-w-[1100px] lg:h-[700px] xl:h-[720px] h-[400px] '>
						<Image
							className='cursor-pointer'
							src={each}
							onClick={() => router.push('/jag')}
							layout='fill'
							alt='image'
							objectFit='cover'
						/>
						<div
							onClick={() => router.push('/jag')}
							className='absolute cursor-pointer top-5 left-5 border-[1px] border-gray-100 shadow-lg rounded-lg bg-blur-background backdrop-blur-sm w-[max-content] px-4 py-2 h-[max-content] '>
							<h1 className='font-title italic tracking-wide text-[1.75rem] lg:text-[2.5rem] '>
								Jaguar Runner Raffle
							</h1>
							<h2 className='font-title -mt-4 text-center font-semibold text-[1.5rem] lg:text-[2rem] '>
								Live Now
							</h2>
						</div>
						<button
							onClick={() => router.push('/jag')}
							className='absolute bottom-5 right-5 flex items-center justify-center border-[1px] border-gray-100 shadow-lg rounded-lg bg-blur-background backdrop-blur-sm w-[max-content] px-4 py-2 h-[50px] lg:h-[65px] lg:px-8 lg:py-4 '>
							<p className='font-title text-[1.5rem] italic font-semibold tracking-wide lg:text-[2rem] '>
								Enter Now
							</p>
						</button>
					</div>
				))}
			</Fade>
		</div>
	);
};

export default Slideshow;
