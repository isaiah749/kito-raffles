import { useState, useEffect } from 'react'
import Image  from 'next/image'
import { useRouter } from 'next/router'
import { Listbox} from '@headlessui/react'
import { db, afterlifeCol, addDoc } from '../firebase/firebase'


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


function Entry() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [selectedSize, setSelectedSize] = useState(sizes[0])

    const router = useRouter();


    const handleSubmit = (e) => {
        e.preventDefault();
        // const form = document.querySelector('#entryForm')
        // const successSection = document.querySelector('#submitSuccess')
        // const unsuccessfulSection = document.querySelector('#unsuccessful')

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
            // successSection.classList.remove('hide')
            router.push('/entry-success')


        })
        .catch((error) => {
            // Old Function
            // form.classList.classList.add('hide')
            // unsuccessfulSection.classList.remove('hide')
            console.log(error.message)
            router.push('/entry-failed')

        })
    } else {
        // Old Function
        // form.classList.add('hide');
        // unsuccessfulSection.classList.remove('hide')
        console.log('Error')
    }

        

    }

    return (
        <div>
            <form id='entryForm' onSubmit={handleSubmit} className='bg-testing bg-center bg-contain bg-no-repeat p-2 py-5 max-h-[55rem] rounded-lg grid border-2 border-black max-w-xl mx-auto'>
                {/* Form Title */}
                <div className='mb-4'>
                    <h1 className='text-left text-2xl mb-1 text-white  font-title tracking-wider'>Afterlife Sneaker Raffle</h1>
                    <h2 className='text-md pl-2  font-bold'>Sign Up For Entry</h2>
                </div>
                {/* Form Content */}
                <div className='grid md:grid-cols-2'>

                    <div className='mb-4'>
                        <label htmlFor="firstName" className='text-xs block mb-1 text-white font-bold'>First Name</label>
                        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" id="firstName" name="firstName" className='w-64 ml-1 focus:outline-none p-1 border border-black rounded-sm text-sm' placeholder='First Name' />

                    </div>

                    <div className='mb-4'>
                        <label htmlFor="lastName" className='text-xs block mb-1 text-white font-bold'>Last Name</label>
                        <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" id="lastName" name="lastName" className='w-64 ml-1 p-1 focus:outline-none border border-black rounded-sm text-sm' placeholder=' Last Name' />

                    </div>

                    <div className='mb-4'>
                        <label htmlFor="email" className="after:content-['*'] after:ml-0.5 after:text-red-500  block text-xs mb-1 text-white font-bold ">Email</label>
                        <input value={email}  onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" className='w-64 ml-1 p-1 border border-black focus:outline-none rounded-sm text-sm' placeholder='Email' />

                    </div>

                    <div className='mb-4'>
                        <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs mb-1 text-white font-bold" htmlFor="phone">Phone Number</label>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type='phone' id="phone" name="phone" className='w-64 ml-1 p-1 border border-black rounded-sm focus:outline-none text-sm' placeholder='+1 (555)-555-5555' />

                    </div>

                    <div className='md:col-start-1 md:justify-self-center md:col-end-3'>
                        <label htmlFor="size" className="after:content-['*'] after:ml-0.5 after:text-red-500  text-xs block mb-1 text-white font-bold ">Shoe Size</label>
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

                <div className='mt-5 flex items-center justify-end'>
                    <button type='submit' form='entryForm' className='bg-black text-white text-sm hover:bg-gray-300 p-2 md:text-base rounded-md font-title tracking-widest'>Submit Entry</button>
                </div>
                            
            </form>
        </div>
    )
}

export default Entry