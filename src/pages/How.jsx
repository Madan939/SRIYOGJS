import React from "react";
import Breadcrumb from "../components/Breadcrumb.jsx";
import { useEffect } from 'react';

const How = () => {
  useEffect(()=>{
    document.title="SRIYOG How it Works | Professional Marketplace"
  },[]);
  
  const name = "How SRIYOG Works";
  const des = "We're making work easier for everyone. Join our team and help change the way people work.";
  return (
    <>
      <Breadcrumb name={name} des={des} />
      <section className="max-w-[1140px] mx-auto max-md:w-[89%] max-lg:w-[88%]">
        <h3 className="text-center text-[1.75rem] font-semibold text-[#333] max-md:mb-[30px]">
          This is how SRIYOG Works
        </h3>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center  gap-8 ">
          <div className="md:w-[40%] w-full">
            <img src="src/assets/images/how/first.png" alt="Search" className="w-full max-md:w-[60%] max-md:mx-auto " />
          </div>
          <div className="md:w-[59%] w-full">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Search</h3>
            <p className="text-justify text-gray-700 ">
              Begin your journey by searching for the perfect job opportunity or professional service on SRIYOG.
              Our platform offers a wide range of options tailored to your preferences. Utilize our advanced
              search filters to narrow down your choices based on factors such as location, industry, or specific skills.
            </p>
          </div>
        </div>


        <div className="flex flex-col-reverse md:flex-row-reverse justify-between items-center gap-8">
          <div className="md:w-[40%] w-full">
            <img src="src/assets/images/how/second.png" alt="Hire" className="w-full max-md:w-[60%] max-md:mx-auto" />
          </div>
          <div className="md:w-[58%] w-full">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Hire</h3>
            <p className="text-justify text-gray-700">
              Once you've found the right match, it's time to hire. Users can connect with professionals directly
              through our platform, facilitating a direct and efficient hiring process without any intermediaries.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center  gap-8">
          <div className="md:w-[40%] w-full">
            <img src="src/assets/images/how/third.png" alt="Instruct" className="w-full max-md:w-[60%] max-md:mx-auto" />
          </div>
          <div className="md:w-[59%] w-full">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Instruct</h3>
            <p className="text-justify text-gray-700">
              With the hiring process complete, it's time to provide instructions or guidance for the task at hand.
              Whether you're a business delegating responsibilities or a professional receiving instructions,
              SRIYOG facilitates transparent communication, ensuring everyone is on the same page.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row-reverse justify-between items-center gap-8">
          <div className="md:w-[40%] w-full">
            <img src="src/assets/images/how/fourth.png" alt="Pay" className="w-full max-md:w-[60%] max-md:mx-auto" />
          </div>
          <div className="md:w-[59%] w-full">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Pay</h3>
            <p className="text-justify text-gray-700">
              Finally, it's time to complete the transaction. Businesses can securely pay for services rendered
              through any platform, providing peace of mind for both parties involved.
            </p>
          </div>
        </div>
      </section>

    </>



  );
};

export default How;