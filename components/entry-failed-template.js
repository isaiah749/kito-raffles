import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

function entryFailed() {
    return (
        <div>
            <Head>
                <title>Entry Failed</title>
            </Head>
            <Navbar />
            <section id='submitSuccess' className='bg-sky-500 min-h-screen p-2'>
                <div>
                    <div className='border-2 flex flex-col items-center mx-auto border-black rounded-md p-2 max-w-xl mb-2'>
                        <Image src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/IMG_0701.jpg?v=1638823550' width={450} height={300} objectFit='contain' />
                        <div className='text-center font-title tracking-wider mt-5 font-bold text-2xl'>
                            <h1 className='text-white'>Submission Failed</h1>
                        </div>
                        <div className='p-3 bg-white rounded-md space-y-4'>
                            <p className='text-center text-sm'>There was an error with your submission! Please <Link href='/'><a className='underline-offset-2 underline font-bold'>Click Here</a></Link> to return to the raffle page.</p>
                            <p className='text-center text-sm'>If you believe that this is a website error, please reach out to <span className='font-bold'>info@kito.online</span> and let us know about the error.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default entryFailed
