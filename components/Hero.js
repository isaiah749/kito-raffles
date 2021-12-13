import React from 'react'
import Image from 'next/image'


function Hero() {
    return (
        <div className='flex flex-wrap mt-5 items-center justify-center'>
            <div className='m-3'>
                <Image src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/IMG_0700.jpg?v=1638823550' height={300} width={300} />
            </div>
            {/* <div className='m-3'>
                <Image src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/IMG_0701.jpg?v=1638823550' height={300} width={300} />
            </div>
            <div className='m-3'>
                <Image src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/IMG_0702.jpg?v=1638823550' height={300} width={300} />
            </div> */}
        </div>
    )
}

export default Hero
