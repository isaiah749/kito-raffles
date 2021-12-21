import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


function Navbar({toggle, reload}) {


    return (
        <div className='flex items-center z-50 w-screen fixed justify-between bg-black h-16'>
            {/* Title */}
            <div onClick={reload} className='text-3xl pl-2 cursor-pointer text-white font-title flex items-center tracking-widest'>
                <Link href='/'><Image src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/SkullGraphicSpinningsmall.gif?v=1627671973' height={50} width={70} /></Link>
                <Link href="/"><a className='pt-2'>Kito-Raffles</a></Link>
            </div>
            {/* Nav Menu For Larger Screens */}
            <div className="hidden pr-8 md:inline-flex pt-2 text-lg">
                <ul className="text-white flex lg:space-x-8 md:space-x-4 font-title tracking-widest">
                    <li onClick={reload} className="hover:underline hover:underline-offset-4"><Link href="/"><a>Home</a></Link></li>
                    <li className="hover:underline hover:underline-offset-4"><Link href="/contact"><a>Contact</a></Link></li>
                    <li className="hover:underline hover:underline-offset-4"><Link href="/policy"><a>Policy</a></Link></li>
                    <li className="hover:underline hover:underline-offset-4"><Link href="https://kito.online"><a>KITO.online</a></Link></li>
                </ul>
            </div>
            {/* Hamburger Menu For Smaller Screens */}
            <div className='pr-2 pt-1 md:hidden'>
                <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" onClick={toggle} xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
        </div>
    )
}

export default Navbar
