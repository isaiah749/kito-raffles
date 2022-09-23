import NavBottom from '../components/Nav/NavBottom'
import NavLeft from '../components/Nav/NavLeft'
import NavRight from '../components/Nav/NavRight'
import NavTop from '../components/Nav/NavTop'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Typed from 'react-typed';
import Image from 'next/image'
import HamburgerDropdown from '../components/HamburgerDropdown'
import image from './styles/Jag/product-shot.PNG'
import Hero from '../components/Hero'

const Home = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
	setIsOpen(!isOpen)
  }


  return (
    <div className='min-h-screen w-full'>


      <div className='min-h-screen w-full hidden xl:block '>
        <Head>Kito Raffles ~ Home</Head>
        <header className="w-full relative h-screen ">
          <nav className='hidden xl:block'>
            <NavTop />
            <NavBottom />
            <NavRight />
            <NavLeft />
          </nav>

        </header>

		<div className="h-[100vh]  fixed top-0 w-full ">
			<Image src={image} layout='fill' objectFit='cover' />
			<div className="absolute top-28 px-36 ">
          <h2 onClick={() => router.push('https://kito.online')} className="font-title cursor-pointer text-3xl font-semibold tracking-wide italic border-2 border-gray-700 p-3 rounded-md shadow-lg hover:text-white hover:bg-black transition duration-300 hover:scale-105 backdrop-blur-sm ">Jaguar Runner Raffle - Live Now</h2>
        </div>

        <div className="absolute bottom-28 right-0 px-36 ">
          <h2 onClick={() => router.push('https://kito.online')} className="font-title text-3xl cursor-pointer font-semibold tracking-wide italic border-2 border-gray-700 p-3 rounded-md shadow-lg hover:text-white hover:bg-black transition duration-300 hover:scale-105 backdrop-blur-sm ">Enter Jag Raffle</h2>
        </div>
		</div>


        {/* <div className="absolute top-28 px-36 ">
          <h2 onClick={() => router.push('/jag')} className="font-title cursor-pointer text-3xl font-semibold tracking-wide italic border-2 border-gray-700 p-3 rounded-md shadow-lg hover:text-white hover:bg-black transition duration-300 hover:scale-105 backdrop-blur-sm ">Jaguar Runner Raffle - Live Now</h2>
        </div>

        <div className="absolute bottom-28 right-0 px-36 ">
          <h2 onClick={() => router.push('/jag')} className="font-title text-3xl cursor-pointer font-semibold tracking-wide italic border-2 border-gray-700 p-3 rounded-md shadow-lg hover:text-white hover:bg-black transition duration-300 hover:scale-105 backdrop-blur-sm ">Enter Jag Raffle</h2>
        </div> */}

      {/* <main className="border-2 absolute top-28 px-36 border-red-400 w-full h-[80%] ">
        <div className="">hello</div>
      </main> */}
      </div>
	  <div className="min-h-screen w-full  xl:hidden ">
	  <nav className="xl:hidden fixed top-0 z-50  ">
			<Navbar toggle={toggle} />
			<div className="transition-all duration-300 ease-in-out ">
				<HamburgerDropdown isOpen={isOpen} toggle={toggle} />
			</div>
		  </nav>
		  <div className=" ">
	  		<Hero />
		  </div>
	  </div>

    </div>
  )
}

export default Home
