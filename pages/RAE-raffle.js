import { useState, useEffect } from 'react'
import Image  from 'next/image'
import { Listbox} from '@headlessui/react'
import { db, raeCol, addDoc } from '../firebase/firebase'
import Navbar from '../components/Navbar'
import HamburgerDropdown from '../components/HamburgerDropdown'


const sizes = [
    { id: 1, shoeSize: '6', unavailable: false },
    { id: 2, shoeSize: '7', unavailable: false },
    { id: 3, shoeSize: '7.5', unavailable: false },
    { id: 4, shoeSize: '8', unavailable: false },
    { id: 6, shoeSize: '8.5', unavailable: false },
    { id: 7, shoeSize: '9', unavailable: false },
    { id: 8, shoeSize: '9.5', unavailable: false },
    { id: 9, shoeSize: '10', unavailable: false },
    { id: 10, shoeSize: '10.5', unavailable: false },
    { id: 11, shoeSize: '11', unavailable: false },
    { id: 12, shoeSize: '11.5', unavailable: false },
    { id: 13, shoeSize: '12', unavailable: false },
    { id: 14, shoeSize: '12.5', unavailable: false },
    { id: 15, shoeSize: '13', unavailable: false },
    { id: 16, shoeSize: '14', unavailable: false },
]

const countries = [
    {id: 1, country: 'USA'},
    {id: 2, country: 'GBR'},
    {id: 3, country: 'CAN'},
    {id: 4, country: 'GER'},
    {id: 5, country: 'FRA'},
    {id: 6, country: 'PRI'},
    {id: 7, country: 'NLD'},
    {id: 8, country: 'JPN'},
    {id: 9, country: 'ITA'},
    {id: 10, country: 'AUS'},
    {id: 11, country: 'PRK'},
    {id: 12, country: 'CHE'},
    {id: 13, country: 'AUT'},
    {id: 14, country: 'MEX'},
    {id: 15, country: 'CHL'},
    {id: 16, country: 'BEL'},
    {id: 17, country: 'IRL'},
    {id: 18, country: 'FIN'},
    {id: 19, country: 'DNK'},
    {id: 20, country: 'CZE'},
    {id: 21, country: 'RUS'},
    {id: 22, country: 'ISR'},
    {id: 23, country: 'SWE'},
    {id: 24, country: 'POL'},
    {id: 25, country: 'ROU'},
    {id: 26, country: 'IND'},
    {id: 27, country: 'TUR'},
    {id: 28, country: 'HGK'},
    {id: 29, country: 'NOR'},
    {id: 30, country: 'BRA'},
    {id: 31, country: 'ZAF'},
    {id: 32, country: 'MYS'},
    {id: 33, country: 'PHL'},
    {id: 34, country: 'ARE'},
    {id: 35, country: 'CHN'},
    {id: 36, country: 'PRT'},
    {id: 37, country: 'TWN'},
    {id: 38, country: 'SVK'},
    {id: 39, country: 'HUN'},
    {id: 40, country: 'LUX'},
    {id: 41, country: 'GRC'},
    {id: 42, country: 'COL'},
    {id: 43, country: 'ECU'},
    {id: 44, country: 'ARG'},
    {id: 45, country: 'IDN'},
    {id: 46, country: 'CRI'},
    {id: 47, country: 'PAK'},
    {id: 48, country: 'THA'},
    {id: 49, country: 'GTM'},
    {id: 50, country: 'SAU'},
    {id: 51, country: 'UKR'},
    {id: 52, country: 'VNM'},
    {id: 53, country: 'SVN'},
    {id: 54, country: 'GHA'},
    {id: 55, country: 'HRV'},
    {id: 56, country: 'NGA'}
]


function afterlifeRaffle() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [selectedSize, setSelectedSize] = useState(sizes[0])
    const [country, setCountry] = useState(countries[0])

    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = document.querySelector('#entryForm')
        const successSection = document.querySelector('#submitSuccess')
        const unsuccessfulSection = document.querySelector('#unsuccessful')
        const productInfo = document.querySelector('#productInfo');

        console.log(email, phone, selectedSize.shoeSize)

        if (email != '' || phone != '') {
            console.log('success')
        
        addDoc(raeCol, {
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Phone: phone,
            ShoeSize: selectedSize
        })
        .then(() => {
            window.location.href = '/entry-success'


        })
        .catch((error) => {
            window.location.href = '/entry-unsuccessful'

        })
    } else {
        window.location.href = '/entry-unsuccessful'
    }

        

    }
    // Line 105 begins form title
    // Line 110 begins form content

    return (
        <div className='min-h-screen flex flex-col'>
            <header className='mb-5'>
                <Navbar toggle={toggle} />
                <div className="">
                    <HamburgerDropdown isOpen={open} toggle={toggle} />
                </div>
            </header>
            <main className='px-2 mt-16'>
            <div className="text-[1.45rem] relative lg:left-40 mb-6 max-w-3xl font-bold tracking-wide font-title">Enter The Raffle</div>
                {/* <section className="p-2 py-5 max-h-[55rem] rounded-lg flex items-center justify-center flex-col border-2 border-black max-w-xl mx-auto">
                    <div className="font-title text-xl">The Afterlife Raffle Is Now Over</div>
                    <div className="font-title text-xl">Thank you to all who entered and best luck!</div>

                </section> */}
                <form id='entryForm' onSubmit={handleSubmit} className='p-2 py-5 max-h-[55rem] rounded-lg grid border-2 border-black max-w-xl mx-auto'>
                    
                    <div className='mb-4'>
                        <h1 className='text-left text-2xl mb-1 font-bold font-title tracking-wide'>Root of All Evil Raffle</h1>
                        <h2 className='text-md pl-2 font-bold'>Sign Up For Entry</h2>
                    </div>
                    
                    <div className='grid place-items-center md:grid-cols-2'>

                        <div className='mb-4'>
                            <label htmlFor="firstName" className='text-xs block mb-1 font-bold'>First Name</label>
                            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" id="firstName" name="firstName" className='w-64 ml-1 focus:outline-none p-1 border border-black rounded-sm text-sm' placeholder='First Name' />

                        </div>

                        <div className='mb-4'>
                            <label htmlFor="lastName" className='text-xs block mb-1  font-bold'>Last Name</label>
                            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" id="lastName" name="lastName" className='w-64 ml-1 p-1 focus:outline-none border border-black rounded-sm text-sm' placeholder=' Last Name' />

                        </div>

                        <div className='mb-4'>
                            <label htmlFor="email" className="after:content-['*'] after:ml-0.5 after:text-red-500  block text-xs mb-1  font-bold ">Email</label>
                            <input value={email}  onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" className='w-64 ml-1 p-1 border border-black focus:outline-none rounded-sm text-sm' placeholder='Email' />

                        </div>

                        <div className="my-4' ml-[-1.5rem] md:ml-[-1.45rem] col-start-1 col-end-1 mb-5 flex flex-wrap">
                            <div className="country-container">
                            <label htmlFor="country" className='text-xs block mb-1 font-bold after:content-["*"] after:ml-0.5 after:text-red-500'>Country:</label>
                            <Listbox id='country' name='country' as='div' className='border-black border text-center rounded-sm focus:outline-none w-24 mb-4' value={country} onChange={setCountry}>
                                <Listbox.Button className=''>
                                    <div className="text-sm text-center font-bold">{country.country}</div>
                                </Listbox.Button>
                                <Listbox.Options className='border-black border border-l-0 border-r-0 border-b-0 text-sm max-h-16 w-full overflow-scroll'>
                                    {countries.map((country) => (
                                        <Listbox.Option className='border border-black border-t-0 border-l-0 border-r-0' key={countries.id} value={country}>
                                            {country.country}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Listbox>

                            <div className="phone-container">
                                <label htmlFor="phone" className='text-xs block mb-1 font-bold after:content-["*"] after:ml-0.5 after:text-red-500'>Phone Number:</label>
                                <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} id='phone' name='phone' className='w-56 ml-1 focus:outline-none p-1 border border-black rounded-sm text-sm' placeholder='Phone Number' />
                            </div>
                        </div>
                </div>

                        <div className='md:col-start-1 md:justify-self-center md:col-end-3'>
                            <label htmlFor="size" className="after:content-['*'] after:ml-0.5 after:text-red-500  text-xs block mb-1  font-bold ">Shoe Size</label>
                            <Listbox  id="size" name="size" as='div' className='border-black border-2 rounded-sm focus:outline-none w-64 mb-16 p-1 ml-1 bg-white ' value={selectedSize} onChange={setSelectedSize}>
                                <Listbox.Button><div className='w-64 font-bold pr-3'>Selected: {selectedSize.shoeSize}</div></Listbox.Button>
                                <Listbox.Options className='border-black border-t-2 border-r-2 border-l-2 border-b-0 max-h-32 md:max-h-52 w-full overflow-scroll'>
                                    {sizes.map((size) => (
                                        <Listbox.Option className='border border-black border-t-0 border-l-0 border-r-0 text-center border-b-2 cursor-pointer hover:bg-gray-400'
                                        key={size.id}
                                        value={size}
                                        disabled={size.unavailable}
                                        >
                                            {size.shoeSize}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Listbox>


                        </div>

                    </div>

                    <div className='mt-5 flex items-center justify-center h-14'>
                        <button type='submit' form='entryForm' className='bg-black w-64 h-full text-white border border-black text-lg md:text-[1.2rem] hover:bg-white hover:text-black duration-500 p-2 md:text-base rounded-md font-title tracking-widest'>Submit Entry</button>
                    </div>
                </form>

                 {/* Product Image Display */}
                    <div className='flex flex-wrap items-center max-w-6xl mx-auto border-2 border-black rounded-md mt-12'>
                        <div className='mx-auto'>
                            <Image src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/IMG_0700.jpg?v=1638823550' height={250} width={250} />
                        </div>
                        <div className='mx-auto'>
                            <Image src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/IMG_0701.jpg?v=1638823550' height={250} width={250} />
                        </div>
                        <div className='mx-auto'>
                            <Image src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/IMG_0702.jpg?v=1638823550' height={250} width={250} />
                        </div>
                    </div>                        

                <section id='productInfo' className='mt-12 p-2 '>
                    {/* Product Details */}
                    <div className="text-[1.45rem] relative lg:left-40 mb-6 max-w-3xl font-bold tracking-widest font-title">Product Information</div>
                    <div className=''>

                        <div className='border-2 border-black h-auto mx-auto max-w-2xl py-2 px-3 rounded-md'>
                            <p className='text-[1.1rem] tracking-widest font-bold lg:text-[1.3rem] font-title'>Description</p>
                            <p className='text-[.9rem] tracking-wider font-title pl-3 mb-3 lg:text-[1.1rem]'>These are the "Afterlife IV" sneakers by Kito Wares. This existential edition of a classic streetwear silhouette disguises its hellish inner workings beneath a shell of heaven-printed textile. Removing the shoe’s heavenly outer canvas, a landscape of dark imagery of premium canvas is brought to light. The shoes' religious packaging also includes a virtual reality headset to view a digital rendering of the pair. The shoe is coupled with a wing lace structure, mesh side panel, and extended heel tab. (Talk more about sole and structure)</p>
                            <p className='text-[.9rem] tracking-wider font-title pl-3 lg:text-[1.1rem]'>"”Afterlife" sneakers by Kito Wares. The classic silhouette features a printed image of the Heavens on a tearaway canvas upper hiding a Hellish printed canvas underneath. The shoe is coupled with a wing lace structure, mesh side panel and extended heel tab.</p>
                            <p className='text-[1.1rem] text-center mt-2 tracking-widest font-bold font-title lg:text-[1.3rem]'>Features</p>
                            <ul className='text-center'>
                                <li className='font-title text-[.9rem] tracking-wider lg:text-[1.1rem]'>Two layers of printed canvas</li>
                                <li className='font-title text-[.9rem] tracking-wider lg:text-[1.1rem]'>Comfortable interior padding</li>
                                <li className='font-title text-[.9rem] tracking-wider lg:text-[1.1rem]'>Includes limited edition virtual reality glasses</li>
                                <li className='font-title text-[.9rem] tracking-wider lg:text-[1.1rem]'>Collectible Afterlife box</li>
                                <li className='font-title text-[.9rem] tracking-wider lg:text-[1.1rem]'>Manufactured by Kito Wares</li>
                                <li className='font-title text-[.9rem] tracking-wider lg:text-[1.1rem]'>14-16 week delivery, product to made to order, no refunds</li>
                            </ul>
                            
                                        
                        </div>
                                        
  

                    </div>




                </section>





                {/* Form Success */}
                
            {/* <section id='submitSuccess' className='hide min-h-screen p-2'>
                <div>
                    <div className='border-2 flex flex-col items-center mx-auto border-black rounded-md p-2 max-w-xl mb-2'>
                        <Image src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/IMG_0701.jpg?v=1638823550' width={450} height={300} objectFit='contain' />
                        <div className='text-center font-title tracking-wider mt-5 font-bold text-2xl'>
                            <h1 className='text-black'>Submission Recieved</h1>
                        </div>
                        <div className='p-3 bg-white rounded-md space-y-4'>
                            <p className='text-center text-sm'>Thank you for entering the Afterlife Sneaker Raffle! The sneakers are Made-to-Order, therefore please allow at least 14-16 weeks from the official realease (December 31st, 2021) for orders to ship</p>
                            <p className='text-center text-sm'>If you believe the information entered is incorrect, please reach out to <span className='font-bold'>info@kito.online</span> and let us know about the error. Sending a screenshot of this message will best help our customer service team.</p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Form Unsuccessful */}
            {/* <section id='unsuccessful' className='hide min-h-screen p-2'>
                <div>
                    <div className='border-2 flex flex-col items-center mx-auto border-black rounded-md p-2 max-w-xl mb-2'>
                        <Image src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/IMG_0701.jpg?v=1638823550' width={450} height={300} objectFit='contain' />
                        <div className='text-center font-title tracking-wider mt-5 font-bold text-2xl'>
                            <h1 className='text-black'>Submission Failed</h1>
                        </div>
                        <div className='p-3 bg-white rounded-md space-y-4'>
                            <p className='text-center text-sm md:text-lg'>There was an error with your submission!</p>
                            <p className='text-center text-sm md:text-lg'>If you believe that this is a website error, please reach out to <span className='font-bold'>info@kito.online</span> and let us know about the error.</p>
                        </div>
                    </div>
                </div> */}
            {/* </section> */}



            </main>
        </div>
    )
}

export default afterlifeRaffle
