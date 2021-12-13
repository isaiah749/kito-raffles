import Head from 'next/head'
import Entry from '../components/Entry'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import HamburgerDropdown from '../components/HamburgerDropdown'
import Link from 'next/link'
import Hero from '../components/Hero'

export default function Home() {

  const [isOpen, setIsOpen] = useState(false)

//   const reload = () => {
//     window.location.reload()
// }

  const toggle = () => {
    setIsOpen(!isOpen)
  }

//   useEffect(() => {
//     const hideMenu = () => {
//       if(window.innerWidth > 768 && isOpen) {
//         setIsOpen(false)
//       }
//     }
//     window.addEventListener('resize', hideMenu)
//   })

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Kito Raffles ~ Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar toggle={toggle}  />
      <HamburgerDropdown isOpen={isOpen} toggle={toggle} />

      <section className='flex-col items-center justify-center bg-sky-500 min-h-screen p-2'>

        <main className='mt-2 font-sans'>
          <Entry />
          <Hero />
        </main>


        </section>
    </div>
  )
}
