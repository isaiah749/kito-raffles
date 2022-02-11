import { useState } from 'react';
import Image from 'next/image'
import Navbar from '../components/Navbar';
import HamburgerDropdown from '../components/HamburgerDropdown';
import raeHoodie from './styles/RAE/RAE-hoodie.png'
import Link from 'next/link'

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
                <Image src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/IMG_0701.jpg?v=1638823550' width={450} height={300} objectFit='contain' />
                <div className='text-center font-title tracking-wider mt-5 font-bold text-2xl'>
                    <h1 className='text-black'>Submission Recieved</h1>
                </div>
                <div className='p-3 bg-white rounded-md space-y-4'>
                 <p className='text-center text-sm'>Thank you for entering the Root of All Evil Raffle! The Root of All Evil sneakers are Made-to-Order, therefore please allow at least 14-16 weeks from the official realease (March 25th, 2022) for orders to ship</p>
                    <p className='text-center text-sm'>If you believe the information entered is incorrect, please reach out to <span className='font-bold'>info@kito.online</span> and let us know about the error. Sending a screenshot of this message will best help our customer service team.</p>
                </div>
            </div>

            <div className='border-2 flex flex-col items-center mx-auto border-black rounded-md p-2 max-w-[400px] xl:max-w-xl pt-16'>
                <Image src={raeHoodie} width={450} height={300} objectFit='contain' />
                <div className='text-center font-title tracking-wider mt-5 font-bold text-2xl'>
                    <h1 className='text-black'>Root of All Evil Hoodie</h1>
                </div>
                <div className='p-3 bg-white rounded-md space-y-4'>
                 <p className='text-center text-sm'>Secure the Root of All Evil Hoodie! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus dicta accusantium inventore asperiores delectus omnis amet nemo nihil, doloremque architecto deserunt dolorum perferendis, libero </p>
                <Link href='https://kito.online'>
                    <div className='h-12 w-32 border-black border mx-auto flex items-center justify-center text-center font-bold cursor-pointer hover:bg-black hover:text-white duration-500'>Buy Now</div>
                </Link>
                </div>
            </div>

        </div>
    </section>
  ) 

}

export default entrySuccess;
