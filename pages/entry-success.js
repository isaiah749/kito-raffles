import { useState } from 'react';
import Image from 'next/image'
import Navbar from '../components/Navbar';
import HamburgerDropdown from '../components/HamburgerDropdown';
import Link from 'next/link'
import whiteBg from './styles/Pompeii/white-bg.jpg'

function entrySuccess() {

    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

  return (
    <section id='submitSuccess' className='min-h-screen flex flex-col'>
        <header className="mb-20">
            <Navbar toggle={toggle} />
            <div className="">
                <HamburgerDropdown isOpen={open} toggle={toggle} />
            </div>
        </header>

        <div className='flex flex-wrap px-5 items-center justify-around'>
            <div className='border-2 flex flex-col items-center mx-auto border-black rounded-md mb-5 lg:mb-0 p-2 max-w-[400px] xl:max-w-xl pt-16'>
                <Image src={whiteBg} width={550} height={400} objectFit='contain' />
                <div className='text-center font-title tracking-wider mt-5 font-bold text-2xl'>
                    <h1 className='text-green-500'>Submission Recieved</h1>
                </div>
                <div className='p-3 bg-white rounded-md space-y-4'>
                 <p className='text-center text-sm'>Thank you for entering the <span className="font-semibold">Pompeii Custom NB 550</span> raffle! The shoes are custom made therefore please allow 14-16 weeks for your order to be processed and shipped.</p>
                    <p className='text-center text-sm'>If you believe the information entered is incorrect, please reach out to <span className='font-bold'>info@kito.online</span> and let us know about the error. Sending a screenshot of this message will best help our customer service team.</p>
                </div>
            </div>

        </div>
    </section>
  ) 

}

export default entrySuccess;
