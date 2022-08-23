import React from 'react'
import image from '../pages/styles/Jag/product-shot.PNG'
import Image from 'next/image'

const BigHero = () => {
  return (
    <div className="relative h-[100vh] font-title ">
    <Image src={image} layout='fill' objectFit='contain' />
    <div onClick={() => router.push('https://kitoraffle.online/products/jaguar-runner-black')} className="absolute top-32 w-full text-center ">
    <div className="absolute top-28 px-36 ">
          <h2 onClick={() => router.push('https://kitoraffle.online/products/jaguar-runner-black')} className="font-title cursor-pointer text-3xl font-semibold tracking-wide italic border-2 border-gray-700 p-3 rounded-md shadow-lg hover:text-white hover:bg-black transition duration-300 hover:scale-105 backdrop-blur-sm ">Jaguar Runner Raffle - Live Now</h2>
        </div>
    </div>
    <div onClick={() => router.push('https://kitoraffle.online/products/jaguar-runner-black')} className="absolute bottom-32 w-full text-center ">
    <div className="absolute bottom-28 right-0 px-36 ">
          <h2 onClick={() => router.push('https://kitoraffle.online/products/jaguar-runner-black')} className="font-title text-3xl cursor-pointer font-semibold tracking-wide italic border-2 border-gray-700 p-3 rounded-md shadow-lg hover:text-white hover:bg-black transition duration-300 hover:scale-105 backdrop-blur-sm ">Enter Jag Raffle</h2>
        </div>
    </div>

</div>
  )
}

export default BigHero