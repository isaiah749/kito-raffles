import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import HamburgerDropdown from '../components/HamburgerDropdown'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '../components/Hero'
import afterlifeRaffle from './afterlife-raffle'
import heroImg from './styles/RAE/15.png'
import Subscribe from '../components/Subscribe'

export default function Home() {

  const [isOpen, setIsOpen] = useState(false)

//   const reload = () => {
//     window.location.reload()
// }

  const toggle = () => {
    setIsOpen(!isOpen)
  }



  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Kito Raffles ~ Home</title>
      </Head>

      <Navbar toggle={toggle}  />
      <div className=''>
        <HamburgerDropdown isOpen={isOpen} toggle={toggle} />
      </div>

      <main className="px-5 pb-5 mt-16 ">

        <div className="font-title text-[1.6rem] lg:pl-5 mt-3">Happening Now</div>
        <section className='h-auto border-black border-2 max-w-full lg:p-2'>

          <div className="hero-img-container flex items-center justify-center relative mx-auto max-w-[650px]">
            <Link  href='/RAE-raffle'>
              <Image className='cursor-pointer' src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/IMG_1890.png?v=1644856720' height={550} width={500} alt='Root of All Evil Raffle' />
            </Link>
            <div className="text-white font-title absolute top-0 left-0 right-0 text-center pt-2 text-[1.4rem] md:text-[1.8rem] xl:text-[2rem]">
              Root of All Evil - <span className="font-bold tracking-wide">Live Now</span>
            </div>
            <div className="text-white font-title absolute pt-2 text-[1.5rem] sm:text-[2rem] md:text-[1.8rem] h-[50px] w-[150px] sm:h-[75px] flex items-center justify-center sm:w-[200px] mb-2 border border-white cursor-pointer">
              <Link href='/RAE-raffle'><a className=''>Enter Now</a></Link>
            </div>
          </div>



        </section>

        <div className="text-[1.6rem] font-title lg:pl-5 mt-12 sm:mt-12">Don't Miss Out</div>
        <section className='max-w-7xl mt-5 mx-auto'>
          <div className="w-full h-auto border-2 border-black p-2 text-center px-2 flex flex-col items-center text-lg justify-center">
            <p className='px-3 max-w-3xl font-title text-[1.4rem] lg:text-[1.75rem] my-2 sm:text-[1.5rem]'>Subscribe To Be Notified About The Next Release</p>
            <p className='px-3 max-w-3xl font-title text-[1.05rem] lg:text-[1.4rem] sm:text-[1.2rem]'>Stay up to date on upcoming releases and news</p>
            <Subscribe />
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
          
          <img className='w-full h-[150px] sm:h-[100%] object-cover lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-3' src="https://cdn.shopify.com/s/files/1/0274/1351/2301/files/TEARAWAY_SQUARE.gif?v=1639504220" alt="" />
          
          <img className='w-full h-[150px] sm:h-[100%] object-cover lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-4' src="https://cdn.shopify.com/s/files/1/0274/1351/2301/files/IMG_0295.jpg?v=1628176585" alt="" />
          
          <img className='w-full h-[150px] sm:h-[100%] object-cover md:row-start-2 md:row-end-4 md:col-start-2 md:col-end-2 lg:col-start-1 lg:col-end-1 lg:row-start-2 lg:row-end-6' src="https://cdn.shopify.com/s/files/1/0274/1351/2301/files/IMG_0294.jpg?v=1628104438" alt="" />
          
          <img className='w-full h-[150px] sm:h-[100%] object-cover lg:row-start-3 lg:row-end-5 lg:col-start-2 lg:col-end-4' src="https://cdn.shopify.com/s/files/1/0274/1351/2301/files/A7_9778.jpg?v=1613550854" alt="" />
          

          
          <img className='w-full h-[150px] sm:h-[100%] object-cover' src="https://cdn.shopify.com/s/files/1/0274/1351/2301/files/A7_0978-Edit_1.jpg?v=1637769033" alt="" />

        </section>


      </main>


    
    </div>
  )
}
