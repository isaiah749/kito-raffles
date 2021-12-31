import { useState } from 'react'
import { db, subscriptionCol, addDoc } from '../firebase/firebase'


function Subscribe() {
    const [subFirstName, setSubFirstName] = useState("")
    const [subLastName, setSubLastName] = useState("")
    const [subEmail, setSubEmail] = useState("")
    const [subPhone, setSubPhone] = useState("")

    const subSubmit = (e) => {
        e.preventDefault();
        const form = document.querySelector('#subForm');
        const subSuccess = document.querySelector('#subSuccess')
        const subFail = document.querySelector('#subFail')

        if (subEmail != '' || subPhone != "") {
            console.log('success');
            addDoc(subscriptionCol, {
                FirstName: subFirstName,
                LastName: subLastName,
                Email: subEmail,
                Phone: subPhone,
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
                <div className="mb-4 sm:m-2 md:m-4">
                    <label htmlFor="subPhoneNumber" className='text-xs block mb-1 font-bold'>Phone Number:</label>
                    <input type="phone" value={subPhone} onChange={(e) => setSubPhone(e.target.value)} id='subPhone' name='subPhone' className='w-56 ml-1 focus:outline-none p-1 border border-black rounded-sm text-sm' placeholder='Phone Number' />
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
