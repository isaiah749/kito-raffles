import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import HamburgerDropdown from '../components/HamburgerDropdown';
import Link from 'next/link';
import jag from './styles/Jag/jag-2.png';
import * as fbq from '../lib/fpixel';
import { useRouter } from 'next/router';

function entrySuccess() {
	const [ open, setOpen ] = useState(false);

	const router = useRouter();

	const toggle = () => {
		setOpen(!open);
	};

	useEffect(() => {
		fbq.event('Purchase', { currency: 'USD', value: 98.0 });
	}, []);

	return (
		<section id='submitSuccess' className='min-h-screen flex flex-col'>
			<header className='mb-20'>
				<Navbar toggle={toggle} />
				<div className=''>
					<HamburgerDropdown isOpen={open} toggle={toggle} />
				</div>
			</header>

			<div className='flex flex-wrap px-5 pt-10 items-center justify-around'>
				<div className='border-2 flex flex-col items-center mx-auto border-black rounded-md mb-5 lg:mb-0 p-2 max-w-[400px] xl:max-w-xl pt-16'>
					<Image src={jag} width={550} height={400} objectFit='contain' />
					<div className='text-center font-title tracking-wider mt-5 font-bold text-2xl'>
						<h1 className='text-green-500'>Submission Recieved</h1>
					</div>
					<div className='p-3 bg-white rounded-md space-y-4'>
						<p className='text-center text-sm'>
							Thank you for entering the <span className='font-semibold'>
								Fossil-X Jaguar Runner
							</span>{' '}
							raffle!
						</p>
						<p className='text-center text-sm'>
							If you believe the information entered is incorrect, please reach out to{' '}
							<span className='font-bold'>info@kito.online</span> and let us know about the error. Sending
							a screenshot of this message will best help our customer service team.
						</p>
						<div className='flex items-center justify-center '>
							<button
								onClick={() => router.push('/')}
								className='border-2 border-black text-white shadow-lg w-[200px] hover:bg-white hover:text-black transition ease-in-out duration-500 h-[50px] text-md tracking-wide bg-black '>
								Return home
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default entrySuccess;
