import Head from 'next/head'
import Entry from '../components/Entry'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import HamburgerDropdown from '../components/HamburgerDropdown'
import Link from 'next/link'
import Hero from '../components/Hero'
import afterlifeRaffle from './afterlife-raffle'

export default function Home() {

  const [isOpen, setIsOpen] = useState(false)

//   const reload = () => {
//     window.location.reload()
// }

  const toggle = () => {
    setIsOpen(!isOpen)
  }

//   useEffect(() => {
//     const hideMenu = () => {
//       if(window.innerWidth > 768 && isOpen) {
//         setIsOpen(false)
//       }
//     }
//     window.addEventListener('resize', hideMenu)
//   })

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Kito Raffles ~ Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar toggle={toggle}  />
      <div className='mt-16'>
        <HamburgerDropdown isOpen={isOpen} toggle={toggle} />
      </div>

      <main className="px-5 ">

        <div className="font-title text-[1.6rem] sm:pl-9 mt-3">Happening Now</div>
        <section className="border-black flex flex-col justify-between relative border bg-center max-w-7xl mx-auto bg-blue-afterlife h-96 bg-no-repeat bg-contain w-full">
          <div className='text-center pt-2 font-title text-[1.4rem] tracking-wider sm:my-2 sm:py-2 md:text-[1.7rem]'>Afterlife Sneaker - <span className='font-bold'>LIVE NOW</span></div>
          <div className='text-center font-title text-[1.4rem] flex items-center sm:my-2 sm:py-2 justify-center bg-white h-14'>
              <h2 className='border border-black py-1 px-3 cursor-pointer md:text-[1.7rem] hover:text-white duration-500 hover:bg-black'><Link href='/afterlife-raffle'><a>Enter Raffle</a></Link></h2>
            </div>
        </section>

        <div className="text-[1.6rem] font-title sm:pl-9 mt-8 sm:mt-12">About Kito-Raffles</div>
        <section className='max-w-7xl mx-auto'>
        <div className="h-64 w-full bg-gray-400 text-center px-2 flex flex-col items-center text-lg justify-center">
            <p className='px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorem facere voluptatum ea. Molestiae non temporibus officiis excepturi dolor ex modi rerum quia rem labore!</p>
          </div>
        </section>



      </main>


      {/* <section className='flex-col items-center justify-center min-h-screen p-2'>

        <main className='mt-2 font-sans'>
          <div className="text-[1.6rem]  font-title sm:pl-9 sm:mb-3">Happening Now</div>
          <section className='border-black flex flex-col justify-between relative border bg-center max-w-7xl mx-auto bg-blue-afterlife h-96 bg-no-repeat bg-contain w-full'>
            <div className='text-center pt-2 font-title text-[1.4rem] tracking-wider sm:my-2 sm:py-2 md:text-[1.7rem]'>Afterlife Sneaker - <span className='font-bold'>LIVE NOW</span></div>
            <Hero />
            <div className='text-center font-title text-[1.4rem] flex items-center sm:my-2 sm:py-2 justify-center bg-white h-14'>
              <h2 className='border border-black py-1 px-3 cursor-pointer md:text-[1.7rem] hover:text-white duration-500 hover:bg-black'><Link href='/afterlife-raffle'><a>Enter Raffle</a></Link></h2>
            </div>
          </section>
          <div className="text-[1.6rem] font-title sm:pl-9 mt-8 sm:mt-12">About Kito-Raffles</div>
          <section className="h-64 w-full bg-gray-400 text-center px-2 flex flex-col items-center text-lg justify-center">
            <p className='px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorem facere voluptatum ea. Molestiae non temporibus officiis excepturi dolor ex modi rerum quia rem labore!</p>
          </section>
        </main>


        </section> */}
    </div>
  )
}
