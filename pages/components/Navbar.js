import React from 'react'
import Link from 'next/link'

function Navbar({toggle, reload}) {


    return (
        <div className='flex items-center justify-between bg-black h-16 px-5'>
            {/* Title */}
            <div onClick={reload} className='text-3xl cursor-pointer text-white font-title tracking-widest'><Link href="/"><a>Kito-Raffles</a></Link></div>
            {/* Nav Menu For Larger Screens */}
            <div className="hidden sm:inline-flex text-lg">
                <ul className="text-white flex space-x-8 font-title tracking-widest">
                    <li onClick={reload} className="hover:underline hover:underline-offset-4"><Link href="/"><a>Home</a></Link></li>
                    <li className="hover:underline hover:underline-offset-4"><Link href="https://kito.online"><a>KITO.online</a></Link></li>
                </ul>
            </div>
            {/* Hamburger Menu For Smaller Screens */}
            <div className='sm:hidden'>
                <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" onClick={toggle} xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
        </div>
    )
}

export default Navbar
