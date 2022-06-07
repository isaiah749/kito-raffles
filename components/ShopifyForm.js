import React from 'react'
import { useState } from 'react'
import { db, JagPhoneCol, addDoc } from '../firebase/firebase'

const ShopifyForm = () => {

    const [phone, setPhone] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = document.querySelector('#form')
        const success = document.querySelector('#success')
        const title = document.querySelector('#title')
        const fail = document.querySelector('#fail')
        if (phone != '') {
            console.log('success')
            addDoc(JagPhoneCol, {
                PhoneNumber: phone
            })
            .then(() => {
                form.style.display = 'none'
                title.style.display = 'none'
                success.classList.remove('hide')
            })
            .catch((error) => {
                form.style.display = 'none'
                title.style.display = 'none'
                fail.classList.remove('hide')
            })
        } else {
            console.log('error')
            form.style.display = 'none'
            fail.classList.remove('hide')
        }
    }

  return (
    <div className=''>
        <h1 id='title' className='text-center text-xl text-gray-600 font-bold pb-5 md:text-2xl '>Subscribe For Notifications</h1>
        <form onSubmit={handleSubmit} id='form' className='w-full'>
            <div className='flex items-center px-2 '>
                <label className='text-md pr-3 font-semibold text-gray-600 md:text-lg '>Phone Number:</label>
                <input type='number' className='border-2 flex-1 w-full h-8 outline-none pl-2 text-black  md:text-lg md:h-10 ' value={phone} onChange={(e) => setPhone(e.target.value)} id='phone' placeholder='5555555555' />
            </div>
            <div className='flex items-center justify-center mt-5'>
                <button type='submit' form='form' className='border-2 py-1 rounded-sm w-[200px] border-black text-center font-semibold hover:text-white hover:bg-black transition duration-300'>Submit</button>
            </div>
        </form>
        <div id='success' className='font-semibold text-center hide text-[1.15rem] tracking-wide'>
		    <p className='text-green-500'>Submission Recieved!</p>
			<p>Thank you for subscribing to KITO!</p>
		</div>
        <div id='fail' className='font-semibold text-center hide text-[1.15rem] tracking-wide'>
		    <p className='text-red-500'>Submission Failed!</p>
			<p>There seems to be an error with your submission!</p>
            <p>Please try again later or contact support for assistance.</p>
		</div>
    </div>
  )
}

export default ShopifyForm