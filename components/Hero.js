import React from 'react'
import Image from 'next/image'
import image from '../pages/styles/Jag/product-shot.png'
import { useRouter } from 'next/router'

function Hero() {
    const router = useRouter();
    return (
        <div className="relative h-[100vh] font-title ">
            <Image src={image} layout='fill' objectFit='contain' />
            <div onClick={() => router.push('/jag')} className="absolute top-32 w-full text-center ">
                <div className="text-black h-[90px] ml-5 w-[max-content] px-2 border-2 border-black rounded-lg backdrop-blur-lg flex items-center justify-center "> 
                    <h2 className="text-black text-3xl ">Fossil-X Jaguar Runner</h2>
                </div>
            </div>
            <div onClick={() => router.push('/jag')} className="absolute bottom-32 w-full text-center ">
                <div className="text-black h-[75px] ml-24 w-[max-content] px-2 border-2 border-black rounded-lg backdrop-blur-lg flex items-center justify-center "> 
                    <h2 className="font-semibold text-2xl ">
                        Raffle Live - Click to enter
                    </h2>
                </div>
            </div>

        </div>
    )
}

export default Hero
