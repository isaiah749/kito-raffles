import Head from 'next/head'
import Entry from '../components/Entry'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import HamburgerDropdown from '../components/HamburgerDropdown'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '../components/Hero'
import afterlifeRaffle from './afterlife-raffle'
import gif from './styles/TEARAWAY_WIDE.gif'
import Subscribe from '../components/Subscribe'

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
      <div className=''>
        <HamburgerDropdown isOpen={isOpen} toggle={toggle} />
      </div>

      <main className="px-5 pb-5 mt-16 ">

        <div className="font-title text-[1.6rem] lg:pl-5 mt-3">Happening Now</div>
        <section className='h-auto'>
          <div className="hero-image-container h-60 sm:h-auto border-2 border-black flex items-center justify-center relative">
            <Image src={gif} width={1000} height={600} />
            <div className="font-title absolute md:top-2 top-1 lg:text-3xl text-2xl">Afterlife Sneaker - <span className='font-bold'>Raffle Live</span></div>
            <div className="font-title cursor-pointer absolute hover:bg-white hover:text-black duration-500 bottom-1 lg:text-3xl text-white border border-black bg-black p-2 md:bottom-2 rounded-md text-2xl"><Link href='/afterlife-raffle'><a>Best of luck!</a></Link></div>
          </div>
        </section>

        <div className="text-[1.6rem] font-title lg:pl-5 mt-12 sm:mt-12">Don't Miss Out</div>
        <section className='max-w-7xl mt-5 mx-auto'>
          <div className="w-full h-auto border-2 border-black p-2 text-center px-2 flex flex-col items-center text-lg justify-center">
            <p className='px-3 max-w-3xl font-title text-[1.4rem] lg:text-[1.75rem] my-2 sm:text-[1.5rem]'>Subscribe To Be Notified About The Next Release</p>
            {/* <Subscribe /> */}
          </div>
        </section>

        <div className="text-[1.6rem] font-title lg:pl-5 mt-12 sm:mt-12">About Kito-Raffles</div>
        <section className='max-w-7xl mt-5 mx-auto'>
          <div className="w-full h-auto border-2 border-black p-2 text-center px-2 flex flex-col items-center text-lg justify-center">
            <p className='px-3 max-w-3xl font-title text-[1.4rem] lg:text-[1.75rem] my-2 sm:text-[1.5rem]'>Welcome to Kito-Raffles!</p>
            <p className="px-3 max-w-3xl font-title text-[1rem] lg:text-[1.3rem] sm:text-[1.2rem]">All Kito Raffles will be held on this website. It does not cost anything to enter the raffle and you will receive an invoice if you entry was selected! If you believe that there was an error with your submission or if you would like to delete your entry, please reach out to <span className='font-bold tracking-widest'>info@kito.online</span> and let them know your request.</p>
          </div>
        </section>

        

        <div className="text-[1.6rem] font-title lg:pl-5 mt-8 sm:mt-12">Gallery</div>

        <section className='max-w-7xl mt-5 mx-auto h-auto max-w-96 border-2 border-black grid gap-2 md:grid-cols-2 md:w-[80%] lg:grid-cols-4 grid-rows-md-mason p-3'>

          <img className='w-full h-[150px] sm:h-[100%] object-cover' src="https://cdn.shopify.com/s/files/1/0274/1351/2301/files/catadunkprodshot2.jpg?v=1630549242" alt="" />
          
          <video className='w-full h-[150px] sm:h-[100%] object-cover lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-3' src="https://cdn.shopify.com/s/files/1/0274/1351/2301/files/KitoTextFlickerOnlione.mp4?v=1626217097" autoPlay loop muted alt="" />
          
          <img className='w-full h-[150px] sm:h-[100%] object-cover lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-4' src="https://cdn.shopify.com/s/files/1/0274/1351/2301/files/IMG_0295.jpg?v=1628176585" alt="" />
          
          <img className='w-full h-[150px] sm:h-[100%] object-cover md:row-start-2 md:row-end-4 md:col-start-2 md:col-end-2 lg:col-start-1 lg:col-end-1 lg:row-start-2 lg:row-end-6' src="https://cdn.shopify.com/s/files/1/0274/1351/2301/files/IMG_0294.jpg?v=1628104438" alt="" />
          
          <img className='w-full h-[150px] sm:h-[100%] object-cover lg:row-start-3 lg:row-end-5 lg:col-start-2 lg:col-end-4' src="https://cdn.shopify.com/s/files/1/0274/1351/2301/files/A7_9778.jpg?v=1613550854" alt="" />
          
          {/* <img className='w-full h-[150px] sm:h-[100%] object-cover lg:row-start-3 lg:row-end-5 lg:col-start-3 lg:col-end-4' src="https://cdn.shopify.com/s/files/1/0274/1351/2301/files/Catacomb_AF1_Green_Story.jpg?v=1613550854" alt="" /> */}
          
          <img className='w-full h-[150px] sm:h-[100%] object-cover lg:' src="https://cdn.shopify.com/s/files/1/0274/1351/2301/files/A7_0978-Edit_1.jpg?v=1637769033" alt="" />

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
