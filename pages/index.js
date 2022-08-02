import NavBottom from '../components/Nav/NavBottom'
import NavLeft from '../components/Nav/NavLeft'
import NavRight from '../components/Nav/NavRight'
import NavTop from '../components/Nav/NavTop'
import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'
import Typed from 'react-typed';

const Home = () => {
  const router = useRouter();


  return (
    <div className='min-h-screen w-full'>


      <div className='min-h-screen w-full relative '>
        <Head>Kito Raffles ~ Home</Head>
        <header className="w-full relative h-screen jag-background ">
          <nav>
            <NavTop />
            <NavBottom />
            <NavRight />
            <NavLeft />
          </nav>
        </header>

        <div className="absolute top-28 px-36 ">
          <h2 onClick={() => router.push('/jag')} className="font-title cursor-pointer text-3xl font-semibold tracking-wide italic border-2 border-gray-700 p-3 rounded-md shadow-lg hover:text-white hover:bg-black transition duration-300 hover:scale-105 backdrop-blur-sm ">Jaguar Runner Raffle - Live Now</h2>
        </div>

        <div className="absolute bottom-28 right-0 px-36 ">
          <h2 onClick={() => router.push('/jag')} className="font-title text-3xl cursor-pointer font-semibold tracking-wide italic border-2 border-gray-700 p-3 rounded-md shadow-lg hover:text-white hover:bg-black transition duration-300 hover:scale-105 backdrop-blur-sm ">Enter Jag Raffle</h2>
        </div>

      {/* <main className="border-2 absolute top-28 px-36 border-red-400 w-full h-[80%] ">
        <div className="">hello</div>
      </main> */}
      </div>

    </div>
  )
}

export default Home
