import React, { useState } from 'react'
import Image from 'next/image'
import HamburgerDropdown from '../components/HamburgerDropdown'
import Navbar from '../components/Navbar'
import bg from './styles/Glasses/1.png'
import bg2 from './styles/Glasses/3.jpeg'
import bg3 from './styles/Glasses/4.jpeg'
import bg4 from './styles/Glasses/5.jpeg'
import bg5 from './styles/Glasses/6.jpeg'
import PasswordFourForm from '../components/PasswordForms/PasswordFourForm'

const PasswordFour = () => {
    const [open, setOpen] = useState();

    const toggle = () => {
      setOpen(!open);
    };
  return (
    <div className="overflow-hidden">
      <nav className="xl:hidden fixed top-0 z-50  ">
        <Navbar toggle={toggle} />
        <div className="transition-all duration-300 ease-in-out ">
          <HamburgerDropdown isOpen={open} toggle={toggle} />
        </div>
      </nav>
      <nav className="hidden xl:block">
        <Navbar />
      </nav>
        <main className="pt-24 md:pt-28 bg-black h-screen text-white relative ">
            <div className="boxNeon2 mb-5">
                <h2 className='text-center font-semibold text-2xl animate-pulse md:text-5xl'>From the Fossil-X Collection</h2>
            </div>
            <div className="xl:flex items-center justify-center">
              <div className="hidden xl:block relative h-[25rem] w-[22rem] md:h-[40rem] md:w-[45rem] mx-auto xl:mt-10 ">
                  <Image src={bg2} layout='fill' objectFit='cover' />
              </div>
              <div className="relative h-[25rem] w-[22rem] md:h-[40rem] md:w-[45rem] mx-auto xl:mt-10 ">
                  <Image src={bg5} layout='fill' objectFit='cover' />
              </div>
              <div className="hidden xl:block relative h-[25rem] w-[22rem] md:h-[40rem] md:w-[45rem] mx-auto xl:mt-10 ">
                  <Image src={bg4} layout='fill' objectFit='cover' />
              </div>
            </div>
            <section className="absolute bottom-10 px-2 md:px-5 left-0 right-0 mx-auto md:bottom-[10%] xl:bottom-[30%] ">
                <PasswordFourForm />
            </section>
        </main>
    </div>
  )
}

export default PasswordFour
