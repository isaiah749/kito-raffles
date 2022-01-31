import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Image from 'next/image'

function entrySuccess() {
    return (
        <div>
            <Head>
                <title>Entry Submitted</title>
            </Head>
            <Navbar />
            <section id='submitSuccess' className='bg-sky-500 min-h-screen p-2'>
                <div>
                    <div className='border-2 flex flex-col items-center mx-auto border-black rounded-md p-2 max-w-xl mb-2'>
                        <Image src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/IMG_0701.jpg?v=1638823550' width={450} height={300} objectFit='contain' />
                        <div className='text-center font-title tracking-wider mt-5 font-bold text-2xl'>
                            <h1 className='text-white'>Submission Recieved</h1>
                        </div>
                        <div className='p-3 bg-white rounded-md space-y-4'>
                            <p className='text-center text-sm'>Thank you for entering the Afterlife Sneaker Raffle</p>
                            <p className='text-center text-sm'>If the information entered is incorrect, please reach out to <span className='font-bold'>info@kito.online</span> and let us know about the error. Sending a screenshot of this message will best help our customer service team.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default entrySuccess
