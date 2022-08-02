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

const NavRight = () => {
  return (
    <div className='fixed right-3 top-1/2 rotate-90 cursor-pointer '>
        <Link href='/policy'>
            <motion.h2 transition={bounceTransition} animate={{y: ["150%", "-150%"]}}  className="font-semibold text-[1.2rem] hover:scale-110 hover:text-gray-500 text-black transition duration-300 ">Policy</motion.h2>
        </Link>
    </div>
  )
}

export default NavRight