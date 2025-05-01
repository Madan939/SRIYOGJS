import React, { useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb';
import c1 from "../assets/images/feature/1.svg";
import c2 from "../assets/images/feature/2.svg";
import c3 from "../assets/images/feature/3.svg";
import c4 from "../assets/images/feature/4.svg";
import c5 from "../assets/images/feature/5.svg";
import c6 from "../assets/images/feature/6.svg";
import c7 from "../assets/images/feature/7.svg";
import c8 from "../assets/images/feature/8.svg";
import c9 from "../assets/images/feature/9.svg";

const Features = () => {
  const name="Features";
  const des="";
  const card=[
    {name:"Lightweight App",image:`${c1}`,des:"Our app is designed to be lightweight and fast, ensuring smooth performance even on devices with limited storage and processing power. Enjoy a seamless experience without any lag."},
    {name:"Open Platform",image:`${c2}`,des:"SRIYOG is an open platform that welcomes businesses and professionals from various industries. Easily connect with a diverse range of opportunities and services without any barriers."},
    {name:"Digital Profiling",image:`${c3}`,des:"Create a comprehensive digital profile that showcases your skills, experiences, and qualifications. Stand out to potential employers or clients with a professional and detailed profile."},
    {name:"Verified Professionals",image:`${c4}`,des:"We prioritize trust and quality. All professionals on SRIYOG are verified to ensure they meet our standards, giving you peace of mind when hiring or collaborating."},
    {name:"WhatsApp Integrated",image:`${c5}`,des:"Communicate effortlessly with professionals or businesses through our WhatsApp integration. Enjoy fast and convenient messaging directly from the app."},
    {name:"Secured Payment",image:`${c6}`,des:"Pay your membership fee securely through IME Pay. Enjoy peace of mind with safe and convenient transactions, ensuring your membership is activated without any hassle."},
    {name:"Easy Registration",image:`${c7}`,des:"Join SRIYOG with ease. Our simple registration process allows businesses and professionals to sign up and start connecting with opportunities in no time."},
    {name:"Wide Network",image:`${c8}`,des:"Tap into a wide network of businesses and professionals. Whether you're looking for a specific service or offering one, SRIYOG connects you with the right people."},
    {name:"Fast Access",image:`${c9}`,des:"Experience fast access to job opportunities and professional services. Our platform is designed for quick and efficient navigation, saving you time and effort."},
  ];
  useEffect(()=>{
    document.title="SRIYOG Features | Professional Marketplace"
  });
  return (
    <>
    <Breadcrumb name={name} des={des}/>
    <section className='max-w-[1140px] max-md:w-[89%] max-lg:w-[88%] mx-auto mb-[56px] grid lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10  h-auto'>
      {card.map((item)=>(
        <div key={item.name} className=' flex justify-center items-center  border-[1.25px] rounded-md '>
          <div className='p-[30px]'>
            <img src={item.image} alt={item.name}  className='mb-[8px] w-[30%] h-auto m-auto'/>
            <p className='font-semibold mb-[8px] text-center text-[1.1rem]'>{item.name}</p>
            <p className='text-justify'>{item.des}</p>
          </div>
        </div>
      ))}
    </section>
    </>
  )
}

export default Features