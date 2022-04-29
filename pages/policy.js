import Head from 'next/head';
import { useState } from 'react';
import HamburgerDropdown from '../components/HamburgerDropdown';
import Navbar from '../components/Navbar';

function policy() {
	const [ open, setOpen ] = useState(false);

	const toggle = () => {
		setOpen(!open);
	};

	return (
		<div className='min-h-screen flex flex-col'>
			<Head>
				<title>Policy</title>
			</Head>

			<Navbar toggle={toggle} />
			<HamburgerDropdown isOpen={open} toggle={toggle} />

			<main className='mt-20 flex items-center p-2 justify-center'>
				<div className='border-2 mt-12 w-[45rem]
                text-center font-title tracking-wide p-2 rounded-md border-black'>
					{/* Title */}
					<div className='text-2xl mt-2 mb-3 md:text-[1.7rem] font-bold tracking-wider'>Raffle Policy</div>
					{/* Content */}
					<div>
						<p className='px-3 text-[.9rem] md:text-[1.1rem]'>
							Raffles are free to enter. We will inform you if you are required to pay to enter the
							raffle.
						</p>
						<div className='text-xl mt-5 md:text-[1.7rem] font-bold tracking-wider'>
							Refunds & Cancellations
						</div>
						<p className='px-3 mt-2 text-[.9rem] md:text-[1.1rem]'>
							Refunds are handled on a case-by-case basis. Refund request must be made within 24 hours of
							purchasing. Refund request will not be accepted in the time from purchase to contact exceeds
							24 hours. Please reach out to our customer service team and they will assist you if you have
							any further questions. You can reach our customer service team by emailing, info@kito.online
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}

export default policy;
