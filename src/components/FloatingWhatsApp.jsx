import React from 'react'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const FloatingWhatsApp = () => {
    return (
        <>
            {/* <Link to="https://wa.me/9779852024365?text=Hi%2C%20I%27m%20contacting%20you%20through%20www.sriyog.com.%20" target='_blank' style={{ borderRadius: "50%" }} className=' bg-[#008000] items-center hover:scale-110 hover:shadow-xl flex justify-center z-10 fixed bottom-[20%] transition duration-300 ease-in-out right-1 '>
                <FaWhatsapp className='text-white h-[65px] w-[65px] p-[15px] max-md:h-[45px] max-md:w-[45px] max-md:p-[10px]' />
            </Link> */}
            <div className="fixed z-[9999] bottom-[20px] right-[10px] text-center  ">
                <div className="border-b-2 pb-2 border-[#4b4b4b] flex gap-2 ">
                    <Link to="https://wa.me/9779852024365?text=Hi%2C%20I%27m%20contacting%20you%20through%20www.sriyog.com.%20" target='_blank' className="flex gap-2 text-[#008000] flex-col items-center max-h-[30px] overflow-hidden hover:max-h-[1000px] hover:transition-all hover:duration-[3000ms] hover:ease-in">
                        <span>
                            <FaWhatsapp className="text-[28px] " />
                        </span>
                        <p className="text-[14px] ">SRIYOG</p>
                    </Link>
                </div>
                <div className="pt-2">
                    <Link to="https://t.me/sriyog" target='_blank' className="flex gap-2 text-[#24A1DE] flex-col items-center max-h-[30px] overflow-hidden hover:max-h-[1000px] hover:transition-all hover:duration-[3000ms] hover:ease-in">
                        <span>
                            <FaTelegram className="text-[28px]" />
                        </span>
                        <p className="text-[14px]">SRIYOG</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default FloatingWhatsApp