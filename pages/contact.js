import { useState } from 'react'
import HamburgerDropdown from '../components/HamburgerDropdown'
import Navbar from '../components/Navbar'

function contact() {

    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }




    return (
        <div className='min-h-screen flex flex-col'>
            
            <Navbar toggle={toggle} />
            <HamburgerDropdown isOpen={open} toggle={toggle} />
              



        </div>
    )
}

export default contact
