import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const bounceTransition = {
  y: {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeOut"
  }
}

const NavBottom = () => {
  return (
    <div className='bottom-3 fixed w-full text-center cursor-pointer '>
        <Link href='https://www.kito.online'>
            <motion.h2 transition={bounceTransition} animate={{y: ["150%", "-150%"]}} className="font-semibold text-[1.2rem] text-black ml-[4rem] hover:scale-110 hover:text-gray-500 transition duration-300 ">KITO.online</motion.h2>
        </Link>
    </div>
  )
}

export default NavBottom