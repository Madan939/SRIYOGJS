import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const FloatingWhatsApp = () => {
    return (
        <>
            <Link to="https://wa.me/9779852024365?text=Hi%2C%20I%27m%20contacting%20you%20through%20www.sriyog.com.%20" target='_blank' style={{borderRadius:"50%"}} className=' bg-[#008000] items-center hover:scale-110 hover:shadow-xl flex justify-center z-10 fixed bottom-[20%] transition duration-300 ease-in-out right-1'>
                <FaWhatsapp className='text-white h-[65px] w-[65px] p-[15px] max-md:h-[45px] max-md:w-[45px] max-md:p-[10px]'/>
            </Link>
        </>
    )
}

export default FloatingWhatsApp