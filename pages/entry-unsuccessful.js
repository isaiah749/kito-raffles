import { useState } from 'react';
import Image from 'next/image'
import Navbar from '../components/Navbar';
import HamburgerDropdown from '../components/HamburgerDropdown';
import raeHoodie from './styles/RAE/RAE-hoodie.png'
import Link from 'next/link'

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
                <Image src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/IMG_0701.jpg?v=1638823550' width={450} height={300} objectFit='contain' />
                <div className='text-center font-title tracking-wider mt-5 font-bold text-2xl'>
                    <h1 className='text-black'>Submission Failed</h1>
                </div>
                <div className='p-3 bg-white rounded-md space-y-4'>
                    <p className='text-center text-sm md:text-lg'>There was an error with your submission! Please try entering again!</p>
                    <p className='text-center text-sm md:text-lg'>If you believe that this is a website error, please reach out to <span className='font-bold'>info@kito.online</span> and let us know about the error.</p>
                </div>
            </div>
        </div>
    </section>
  ) 
}

export default entryUnsuccessful;
