import React, { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
const Services = () => {
  useEffect(()=>{
    document.title="SRIYOG Services | Professional Marketplace"
  });
  const name="SRIYOG Professions";
  return (
    <>
    <Breadcrumb  name={name}/>
        <section className="max-md:w-[89%] max-lg:w-[88%] pt-3 w-[100%] pr-[15px] pl-[15px]  max-w-[1140px] mb-16">
      <h3 className="mb-[0.5rem] font-medium text-[1.75rem] text-left text-[#333]">All Professions</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 p-4 mx-auto max-md:grid-cols-3 max-md:mx-auto max-md:gap-10 ">
        <div className=" group mt-5 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer text-center transition duration-200 hover:bg-gray-100 transform hover:scale-105">
          <img src="src/assets/images/services/electrician.png" alt="Electrican"  className="h-[40px] w-[40px]"/>
          <span className="group-hover:text-[rgb(139,24,27)] group-hover:text-[17px] group-hover:font-medium">Electrican</span>
        </div>
        <div className=" group mt-5 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer text-center transition duration-200 hover:bg-gray-100 transform hover:scale-105">
          <img src="src/assets/images/services/plumber.png" alt="Plumber" className="h-[40px] w-[40px]" />
          <span className="group-hover:text-[rgb(139,24,27)] group-hover:text-[17px] group-hover:font-medium">Plumber</span>
        </div>
        <div  className=" group mt-5 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer text-center transition duration-200 hover:bg-gray-100 transform hover:scale-105">
          <img src="src/assets/images/services/motorcycle-repair.png" alt="motorcycle Repair" className="h-[40px] w-[40px]" />
          <span className="group-hover:text-[rgb(139,24,27)] group-hover:text-[17px] group-hover:font-medium">Bike Repair</span>
        </div>
        <div  className=" group mt-5 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer text-center transition duration-200 hover:bg-gray-100 transform hover:scale-105">
          <img src="src/assets/images/services/pandit.png" alt="Pandit" className="h-[40px] w-[40px]" />
          <span className="group-hover:text-[rgb(139,24,27)] group-hover:text-[17px] group-hover:font-medium">Pandit</span>
        </div>
        <div  className=" group mt-5 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer text-center transition duration-200 hover:bg-gray-100 transform hover:scale-105">
          <img src="src/assets/images/services/carpenter.png" alt="Carpenter" className="h-[40px] w-[40px]" />
          <span className="group-hover:text-[rgb(139,24,27)] group-hover:text-[17px] group-hover:font-medium">Carpenter</span>
        </div>
        <div  className=" group mt-5 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer text-center transition duration-200 hover:bg-gray-100 transform hover:scale-105">
          <img src="src/assets/images/services/event-planner.png" alt="event" className="h-[40px] w-[40px]"/>
          <span className="group-hover:text-[rgb(139,24,27)] group-hover:text-[17px] group-hover:font-medium">Event Planner</span>
        </div>
        <div  className=" group mt-5 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer text-center transition duration-200 hover:bg-gray-100 transform hover:scale-105">
          <img src="src/assets/images/services/painter.png" alt="painter" className="h-[40px] w-[40px]" />
          <span className="group-hover:text-[rgb(139,24,27)] group-hover:text-[17px] group-hover:font-medium">Painter</span>
        </div>
        <div  className=" group mt-5 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer text-center transition duration-200 hover:bg-gray-100 transform hover:scale-105">
          <img src="src/assets/images/services/false-ceiling.png" alt="false-ceiling" className="h-[40px] w-[40px]" />
          <span className="group-hover:text-[rgb(139,24,27)] group-hover:text-[17px] group-hover:font-medium">False Ceiling</span>
        </div>
        <div  className=" group mt-5 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer text-center transition duration-200 hover:bg-gray-100 transform hover:scale-105">
          <img src="src/assets/images/services/handpump.png" alt="handpump" className="h-[40px] w-[40px]" />
          <span className="group-hover:text-[rgb(139,24,27)] group-hover:text-[17px] group-hover:font-medium">Tubewell Repair</span>
        </div>
        <div  className=" group mt-5 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer text-center transition duration-200 hover:bg-gray-100 transform hover:scale-105">
          <img src="src/assets/images/services/business-consultant.png" alt="BusinessConsultant" className="h-[40px] w-[40px]" />
          <span className="group-hover:text-[rgb(139,24,27)] group-hover:text-[17px] group-hover:font-medium">Business Consultant</span>
        </div>
        <div  className=" group mt-5 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer text-center transition duration-200 hover:bg-gray-100 transform hover:scale-105">
          <img src="src/assets/images/services/carpenter (1).png" alt="carpenter1" className="h-[40px] w-[40px]" />
          <span className="group-hover:text-[rgb(139,24,27)] group-hover:text-[17px] group-hover:font-medium">Carpenter</span>
        </div>
        <div  className=" group mt-5 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer text-center transition duration-200 hover:bg-gray-100 transform hover:scale-105">
          <img src="src/assets/images/services/catering.png" alt="cartening" className="h-[40px] w-[40px]" />
          <span className="group-hover:text-[rgb(139,24,27)] group-hover:text-[17px] group-hover:font-medium">Catering</span>
        </div>
        <div  className=" group mt-5 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer text-center transition duration-200 hover:bg-gray-100 transform hover:scale-105">
          <img src="src/assets/images/services/civil-contractor.png" alt="civil contractor" className="h-[40px] w-[40px]" />
          <span className="group-hover:text-[rgb(139,24,27)] group-hover:text-[17px] group-hover:font-medium">Civil Contractor</span>
        </div>
        <div  className=" group mt-5 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer text-center transition duration-200 hover:bg-gray-100 transform hover:scale-105">
          <img src="src/assets/images/services/fancy-store.png" alt="fancy store" className="h-[40px] w-[40px]"/>
          <span className="group-hover:text-[rgb(139,24,27)] group-hover:text-[17px] group-hover:font-medium">Fancy Store</span>
        </div>
        <div  className=" group mt-5 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer text-center transition duration-200 hover:bg-gray-100 transform hover:scale-105">
          <img src="src/assets/images/services/grill-shutter.png" alt="grill" className="h-[40px] w-[40px]"/>
          <span className="group-hover:text-[rgb(139,24,27)] group-hover:text-[17px] group-hover:font-medium">Grill/Shutter</span>
        </div>
        <div  className=" group mt-5 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer text-center transition duration-200 hover:bg-gray-100 transform hover:scale-105">
          <img src="src/assets/images/services/grocery.png" alt="grocery" className="h-[40px] w-[40px]"/>
          <span className="group-hover:text-[rgb(139,24,27)] group-hover:text-[17px] group-hover:font-medium">Grocery</span>
        </div>
        <div  className=" group mt-5 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer text-center transition duration-200 hover:bg-gray-100 transform hover:scale-105">
          <img src="src/assets/images/services/hardware-suppliers.png" alt="hardware-supplier" className="h-[40px] w-[40px]" />
          <span className="group-hover:text-[rgb(139,24,27)] group-hover:text-[17px] group-hover:font-medium">Hardware Supplier</span>
        </div>
        <div  className=" group mt-5 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer text-center transition duration-200 hover:bg-gray-100 transform hover:scale-105">
          <img src="src/assets/images/services/marketing.png" alt="marketing" className="h-[40px] w-[40px]" />
          <span className="group-hover:text-[rgb(139,24,27)] group-hover:text-[17px] group-hover:font-medium">Marketing</span>
        </div>
        <div  className=" group mt-5 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer text-center transition duration-200 hover:bg-gray-100 transform hover:scale-105">
          <img src="src/assets/images/services/optician.png" alt="optician" className="h-[40px] w-[40px]" />
          <span className="group-hover:text-[rgb(139,24,27)] group-hover:text-[17px] group-hover:font-medium">Optician</span>
        </div>
        <div  className=" group mt-5 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer text-center transition duration-200 hover:bg-gray-100 transform hover:scale-105">
          <img src="src/assets/images/services/painter.png " alt="Painter" className="h-[40px] w-[40px]" />
          <span className="group-hover:text-[rgb(139,24,27)] group-hover:text-[17px] group-hover:font-medium">Painter</span>
        </div>
        <div  className=" group mt-5 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer text-center transition duration-200 hover:bg-gray-100 transform hover:scale-105">
          <img src="src/assets/images/services/tailoring.png" alt="tailoring" className="h-[40px] w-[40px]" />
          <span className="group-hover:text-[rgb(139,24,27)] group-hover:text-[17px] group-hover:font-medium">Tailoring</span>
        </div>
        <div  className=" group mt-5 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer text-center transition duration-200 hover:bg-gray-100 transform hover:scale-105">
          <img src="src/assets/images/services/thekedar.png" alt="thekedar" className="h-[40px] w-[40px]" />
          <span className="group-hover:text-[rgb(139,24,27)] group-hover:text-[17px] group-hover:font-medium">Thekedar</span>
        </div>
        <div  className=" group mt-5 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer text-center transition duration-200 hover:bg-gray-100 transform hover:scale-105">
          <img src="src/assets/images/services/aluminium.png" alt="aluminium" className="h-[40px] w-[40px]" />
          <span className="group-hover:text-[rgb(139,24,27)] group-hover:text-[17px] group-hover:font-medium">Aluminium Fabricator</span>
        </div>
        <div  className=" group mt-5 w-[100px] h-[100px] flex flex-col justify-center items-center cursor-pointer text-center transition duration-200 hover:bg-gray-100 transform hover:scale-105">
          <img src="src/assets/images/services/interior-decorator.png" alt="interior" className="h-[40px] w-[40px]" />
          <span className="group-hover:text-[rgb(139,24,27)] group-hover:text-[17px] group-hover:font-medium">Interior Decorator</span>
        </div>

      </div>

    </section>
    </>

  )
}

export default Services