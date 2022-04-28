import React from 'react'
import Link from 'next/link'

function HamburgerDropdown({isOpen, toggle, reload}) {
    return (
        <div className={isOpen ? 'grid grid-flow-rows z-30 text-center w-full font-title tracking-widest text-lg items-center mt-20 fixed bg-black text-white' : 'hidden'} onClick={toggle}>
            <Link href="/"><div onClick={reload} className='font-bold p-3 border-white border-b-2 border-t-2 border-l-0 border-r-0'><a>Home</a></div></Link>
            <Link href="/contact"><div onClick={reload} className='font-bold p-3 border-white border-b-2 border-t-0 border-l-0 border-r-0'><a>Contact</a></div></Link>
            <Link href="/policy"><div onClick={reload} className='font-bold p-3 border-white border-b-2 border-t-0 border-l-0 border-r-0'><a>Policy</a></div></Link>
            <Link href="https://www.kito.online"><div onClick={reload} className='font-bold p-3 border-white border-b-2 border-t-0 border-l-0 border-r-0'><a>Kito.online</a></div></Link>
        </div>
    )
}

export default HamburgerDropdown
