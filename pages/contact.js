import Head from 'next/head'
import { useState } from 'react'
import HamburgerDropdown from '../components/HamburgerDropdown'
import Navbar from '../components/Navbar'

function contact() {

    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }




    return (
        <div className='min-h-screen flex flex-col'>
            
            <Head>
                <title>Contact</title>
            </Head>

            <Navbar toggle={toggle} />
            <HamburgerDropdown isOpen={open} toggle={toggle} />
              
            <main className='mt-4 flex items-center p-2 justify-center'>
                <div className='border-2 mt-12 w-[45rem]
                text-center font-title tracking-wide p-2 rounded-md border-black'>
                    {/* Title */}
                    <div className="text-2xl md:text-[1.7rem] font-bold tracking-wider">Contact</div>
                    {/* Content */}
                    <div>
                        <p className='px-3 text-[.9rem] md:text-[1.1rem]'>
                            You can reach out to <span className="font-bold tracking-wider">info@kito.online</span> about any questions and concerns. Our customer success team will respond as soon as possible.
                        </p>
                    </div>

                    <div className="text-2xl mt-5 md:text-[1.7rem] font-bold tracking-wider">Raffle Information</div>
                    {/* Content */}
                    <div>
                        <p className='px-3 text-[.9rem] md:text-[1.1rem]'>
                            Raffles are free to enter. We will inform you if you are required to pay to enter the raffle. This information will be visible on our the raffle page, our store (info@kito.online), and on our Instagram page.
                        </p>
                        <p className='px-3 mt-2 text-[.9rem] md:text-[1.1rem]'>
                            We will be reaching out to the winners the following week based on the information that you entered on the raffle page. Winners will receive an invoice for them to claim their pair of shoes.
                        </p>
                        <p className="px-3 mt-2 text-[.9rem] md:text-[1.1rem]">
                        To clarify, customers are not entering the raffles to receive a <span className="font-bold tracking-wider">free</span> pair, customers are entering the raffle to <span className="font-bold tracking-wider">purchase</span> their shoes before the offical release.
                        </p>
                    </div>

                </div>
            </main>



        </div>
    )
}

export default contact
