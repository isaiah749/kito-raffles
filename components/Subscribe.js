import { useState } from 'react'
import { db, subscriptionCol, addDoc } from '../firebase/firebase'
import Head from 'next/head'
import { Listbox} from '@headlessui/react'

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


function Subscribe() {
    const [subFirstName, setSubFirstName] = useState("")
    const [subLastName, setSubLastName] = useState("")
    const [subEmail, setSubEmail] = useState("")
    const [subPhone, setSubPhone] = useState("")
    const [subCountry, setSubCountry] = useState(countries[0])

    const subSubmit = (e) => {
        e.preventDefault();
        const form = document.querySelector('#subForm');
        const subSuccess = document.querySelector('#subSuccess')
        const subFail = document.querySelector('#subFail')

        if (subEmail != '' || subPhone != "" || subCountry != '') {
            console.log('success');
            addDoc(subscriptionCol, {
                FirstName: subFirstName,
                LastName: subLastName,
                Email: subEmail,
                Phone: subPhone,
                Country: subCountry
            })
            .then(() => {
                form.style.display = 'none';
                subSuccess.classList.remove('hide')
            })
            .catch((error) => {
                form.style.display = 'none';
                subFail.classList.remove('hide')
            })
        } else {
            console.log('error')
            form.style.display = 'none';
            subFail.classList.remove('hide')
        }
    }
    
    return (
        <div className='w-full h-full'>


            <form onSubmit={subSubmit} id='subForm' className="p-2 py-5 max-h-[55rem] flex flex-wrap items-center justify-center border-2 border-black border-l-0 border-r-0 border-b-0 max-w-xl mx-auto">
                <div className="mb-4 sm:m-2 md:m-4">
                    <label htmlFor="subFirstName" className='text-xs block mb-1 font-bold'>First Name:</label>
                    <input type="text" value={subFirstName} onChange={(e) => setSubFirstName(e.target.value)} id='subFirstName' name='subFirstName' className='w-56 ml-1 focus:outline-none p-1 border border-black rounded-sm text-sm' placeholder='First Name' />
                </div>
                <div className="mb-4 sm:m-2 md:m-4">
                    <label htmlFor="subLastName" className='text-xs block mb-1 font-bold'>Last Name:</label>
                    <input type="text" value={subLastName} onChange={(e) => setSubLastName(e.target.value)} id='subLastName' name='subLastName' className='w-56 ml-1 focus:outline-none p-1 border border-black rounded-sm text-sm' placeholder='Last Name' />
                </div>
                <div className="mb-4 sm:m-2 md:m-4">
                    <label htmlFor="subEmail" className='text-xs block mb-1 font-bold'>Email:</label>
                    <input type="email" value={subEmail} onChange={(e) => setSubEmail(e.target.value)} id='subEmail' name='subEmail' className='w-56 ml-1 focus:outline-none p-1 border border-black rounded-sm text-sm' placeholder='Email' />
                </div>
                <div className="mb-4  sm:m-2 md:m-4 flex-wrap justify-center flex">
                    <div className="sub-country-container">
                        <label htmlFor="subCountry" className='text-xs block mb-1 font-bold'>Country:</label>
                        <Listbox id='subCountry' name='subCountry' as='div' className='border-black border rounded-sm focus:outline-none w-24 mb-4' value={subCountry} onChange={setSubCountry}>
                            <Listbox.Button className=''>
                                <div className="text-sm font-bold">{subCountry.country}</div>
                            </Listbox.Button>
                            <Listbox.Options className='border-black border border-l-0 border-r-0 border-b-0 text-sm max-h-16 w-full overflow-scroll'>
                                {countries.map((country) => (
                                    <Listbox.Option className='border border-black border-t-0 border-l-0 border-r-0' key={countries.id} value={country}>
                                        {country.country}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Listbox>
                        
                    </div>
                    <div className="sub-phone-container">
                        <label htmlFor="subPhoneNumber" className='text-xs block mb-1 font-bold'>Phone Number:</label>
                        <input type="number" value={subPhone} onChange={(e) => setSubPhone(e.target.value)} id='subPhone' name='subPhone' className='w-56 ml-1 focus:outline-none p-1 border border-black rounded-sm text-sm' placeholder='5555555555' />
                    </div>
                </div>

                <div className='mt-5 flex items-center justify-center h-14'>
                        <button type='submit' form='subForm' className='bg-black w-64 h-full text-white border border-black text-lg md:text-[1.2rem] hover:bg-white hover:text-black duration-500 p-2 md:text-base rounded-md font-title tracking-widest'>Subscribe</button>
                    </div>
            </form>

            <div id="subSuccess" className='font-title hide text-[1.15rem] tracking-wide'>
                <p className='text-green-500'>Submission Recieved!</p>
                <p>Thank you for subscribing to KITO!</p>
            </div>

            <div id="subFail" className='font-title hide text-[1.15rem] tracking-wide'>
                <p className='text-red-500'>Submission Failed!</p>
                <p>There seems to be an error with your submission!</p>
                <p>Please try again or contact support for assistance.</p>
            </div>

        </div>
    )
}

export default Subscribe
