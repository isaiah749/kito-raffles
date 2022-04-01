import { useState } from 'react';
import Image from 'next/image'
import Navbar from '../components/Navbar';
import HamburgerDropdown from '../components/HamburgerDropdown';
import Link from 'next/link'
import whiteBg from './styles/Pompeii/white-bg.jpg'


function entryUnsuccessful() {

    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

  return(
    <section id='unsuccessful' className='min-h-screen flex flex-col'>
        <header className="mb-20">
            <Navbar toggle={toggle} />
            <div className="">
                <HamburgerDropdown isOpen={open} toggle={toggle} />
            </div>
        </header>
        <div>
            <div className='border-2 flex flex-col items-center mx-auto border-black rounded-md p-2 max-w-xl mb-2'>
                <Image src={whiteBg} width={550} height={400} objectFit='contain' />
                <div className='text-center font-title tracking-wider mt-5 font-bold text-2xl'>
                    <h1 className='text-red-500'>Submission Failed</h1>
                </div>
                <div className='p-3 bg-white rounded-md space-y-4'>
                    <p className='text-center text-sm md:text-lg'>There was an error with your submission! Please try entering again!</p>
                    <div className="w-full flex items-cente justify-center">
                        <Link href='/pompeii-raffle'>
                            <button className="border-2 border-black text-white shadow-lg w-[200px] hover:bg-white hover:text-black transition ease-in-out duration-150 h-[50px] text-md font-semibold tracking-wider bg-black ">Back to raffle page</button>
                        </Link>
                    </div>
                        <p className='text-center text-sm md:text-lg'>If you believe that this is a website error, please reach out to <span className='font-bold'>info@kito.online</span> and let us know about the error.</p>
                </div>
            </div>
        </div>
    </section>
  ) 
}

export default entryUnsuccessful;
