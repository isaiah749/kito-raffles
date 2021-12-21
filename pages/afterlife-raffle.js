import { useState, useEffect } from 'react'
import Image  from 'next/image'
import { Listbox} from '@headlessui/react'
import { db, afterlifeData, afterlifeCol, addDoc } from '../firebase/firebase'
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


function afterlifeRaffle() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [selectedSize, setSelectedSize] = useState(sizes[0])

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
        
        addDoc(afterlifeCol, {
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Phone: phone,
            ShoeSize: selectedSize
        })
        .then(() => {
            // Old function
            // form.classList.add('hide')
            form.style.display = 'none';
            productInfo.style.display = 'none'
            successSection.classList.remove('hide')


        })
        .catch((error) => {
            // Old Function
            // form.classList.classList.add('hide')
            form.style.display = 'none';
            productInfo.style.display = 'none'
            unsuccessfulSection.classList.remove('hide')
            console.log(error.message)

        })
    } else {
        // Old Function
        // form.classList.add('hide');
        form.style.display = 'none';
        productInfo.style.display = 'none'
        unsuccessfulSection.classList.remove('hide')
        console.log('Error')
    }

        

    }

    return (
        <div className='min-h-screen flex flex-col'>
            <header className='mb-5'>
                <Navbar toggle={toggle} />
                <div className="">
                    <HamburgerDropdown isOpen={open} toggle={toggle} />
                </div>
            </header>
            <main className='px-2 mt-16'>
                <form id='entryForm' onSubmit={handleSubmit} className='p-2 py-5 max-h-[55rem] rounded-lg grid border-2 border-black max-w-xl mx-auto'>
                    {/* Form Title */}
                    <div className='mb-4'>
                        <h1 className='text-left text-2xl mb-1 font-bold font-title tracking-wider'>Afterlife Sneaker Raffle</h1>
                        <h2 className='text-md pl-2  font-bold'>Sign Up For Entry</h2>
                    </div>
                    {/* Form Content */}
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

                        <div className='mb-4'>
                            <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs mb-1  font-bold" htmlFor="phone">Phone Number</label>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} type='phone' id="phone" name="phone" className='w-64 ml-1 p-1 border border-black rounded-sm focus:outline-none text-sm' placeholder='+1 (555)-555-5555' />

                        </div>

                        <div className='md:col-start-1 md:justify-self-center md:col-end-3'>
                            <label htmlFor="size" className="after:content-['*'] after:ml-0.5 after:text-red-500  text-xs block mb-1  font-bold ">Shoe Size</label>
                            <Listbox  id="size" name="size" as='div' className='border-black border-2 rounded-sm focus:outline-none w-64 mb-16 p-1 ml-1 bg-white ' value={selectedSize} onChange={setSelectedSize}>
                                <Listbox.Button><div className='w-64 font-bold pr-3'>Selected: {selectedSize.shoeSize}</div></Listbox.Button>
                                <Listbox.Options className='border-black border-t-2 border-r-2 border-l-2 border-b-0 max-h-16 md:max-h-12 w-full overflow-scroll'>
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



                <section id='productInfo' className='mt-12 p-2 '>
                    {/* Product Details */}
                    <div className="text-[1.45rem] relative lg:left-40 mb-6 max-w-3xl font-bold tracking-widest font-title">Product Information</div>
                    <div className=''>

                        <div className='border-2 border-black h-auto mx-auto max-w-2xl py-2 px-3 rounded-md'>
                            <p className='text-[1.1rem] tracking-widest font-bold lg:text-[1.3rem] font-title'>Description</p>
                            <p className='text-[.9rem] tracking-wider font-title pl-3 mb-3 lg:text-[1.1rem]'>These are the "Afterlife IV" sneakers by Kito Wares. This existential edition of a classic streetwear silhouette disguises its hellish inner workings beneath a shell of heaven-printed textile. Removing the shoe’s heavenly outer canvas, a landscape of dark imagery of premium canvas is brought to light. The shoes' religious packaging also includes a virtual reality headset to view a digital rendering of the pair. The shoe is coupled with a wing lace structure, mesh side panel, and extended heel tab. (Talk more about sole and structure)</p>
                            <p className='text-[.9rem] tracking-wider font-title pl-3 lg:text-[1.1rem]'>"Afterlife" sneakers by Kito Wares. The classic silhouette features a printed image of the Heavens on a tearaway canvas upper hiding a Hellish printed canvas underneath. The shoe is coupled with a wing lace structure, mesh side panel, and extended heel tab.</p>
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

                    </div>




                </section>





                {/* Form Success */}
                
            <section id='submitSuccess' className='hide min-h-screen p-2'>
                <div>
                    <div className='border-2 flex flex-col items-center mx-auto border-black rounded-md p-2 max-w-xl mb-2'>
                        <Image src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/IMG_0701.jpg?v=1638823550' width={450} height={300} objectFit='contain' />
                        <div className='text-center font-title tracking-wider mt-5 font-bold text-2xl'>
                            <h1 className='text-black'>Submission Recieved</h1>
                        </div>
                        <div className='p-3 bg-white rounded-md space-y-4'>
                            <p className='text-center text-sm'>Thank you for entering the Afterlife Sneaker Raffle! The sneakers are Made-to-Order, therefore please allow at least 14-16 weeks for orders to ship</p>
                            <p className='text-center text-sm'>If you believe the information entered is incorrect, please reach out to <span className='font-bold'>info@kito.online</span> and let us know about the error. Sending a screenshot of this message will best help our customer service team.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Unsuccessful */}
            <section id='unsuccessful' className='hide min-h-screen p-2'>
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
                </div>
            </section>



            </main>
        </div>
    )
}

export default afterlifeRaffle
