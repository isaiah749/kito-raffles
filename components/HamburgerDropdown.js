import React from 'react'
import Link from 'next/link'

function HamburgerDropdown({isOpen, toggle, reload}) {
    return (
        <div className={isOpen ? 'grid grid-flow-rows z-30 text-center w-full items-center mt-16 fixed bg-gray-100' : 'hidden'} onClick={toggle}>
            <div onClick={reload} className='font-bold p-3 border-black border-b-2 border-t-0 border-l-0 border-r-0'><Link href="/"><a>Home</a></Link></div>
            <div className='font-bold p-3 border-black border-b-2 border-t-0 border-l-0 border-r-0'><Link href="/contact"><a>Contact</a></Link></div>
            <div className='font-bold p-3 border-black border-b-2 border-t-0 border-l-0 border-r-0'><Link href="https://kito.online"><a>KITO.online</a></Link></div>
        </div>
    )
}

export default HamburgerDropdown
