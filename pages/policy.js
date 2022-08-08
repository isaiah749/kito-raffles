import NavBottom from '../components/Nav/NavBottom';
import NavLeft from '../components/Nav/NavLeft';
import NavRight from '../components/Nav/NavRight';
import NavTop from '../components/Nav/NavTop';
import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import {motion} from 'framer-motion'
import HamburgerDropdown from '../components/HamburgerDropdown';

function Policy() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='min-h-screen flex flex-col'>
			<Head>
				<title>Policy</title>
			</Head>

			<div className="hidden xl:block">
			<NavTop />
			
      <NavRight />
      <NavLeft />

			</div>
			<nav className="xl:hidden fixed top-0 z-50  ">
			<Navbar toggle={toggle} />
			<div className="transition-all duration-300 ease-in-out ">
				<HamburgerDropdown isOpen={isOpen} toggle={toggle} />
			</div>
		  </nav>

			<motion.main initial='hidden' animate='visible' variants={{
        hidden: {
          scale: 0.8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .4
          }
        }
      }} className='mt-20 flex items-center p-2 justify-center'>
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
				<div className="hidden xl:block">
     		 <NavBottom />

			</div>
			</motion.main>
		</div>
	);
}

export default Policy;
