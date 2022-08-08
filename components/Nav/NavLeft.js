import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'


const bounceTransition = {
  y: {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeInOut"
  }
}

const NavLeft = () => {
  return (
    <div className='fixed left-2 top-1/2 cursor-pointer z-50 -rotate-90 '>
        <Link href='contact'>
            <motion.h2 transition={bounceTransition} animate={{y: ["150%", "-150%"]}} className="font-semibold text-[1.2rem] text-black hover:scale-110 transition duration-300 hover:text-gray-500 ">Contact</motion.h2>
        </Link>
    </div>
  )
}

export default NavLeft