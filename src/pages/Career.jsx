import React, { useEffect, useRef, useState } from "react";
import { FaCamera, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdOutlinePhoneCallback } from "react-icons/md";
import btn1 from "/assets/images/career/CV.svg";
import btn2 from "/assets/images/career/Details.png";
import btn3 from "/assets/images/career/Apply.png";
import tp1 from "/assets/images/career/tp-1.svg";
import tp2 from "/assets/images/career/tp-2.svg";
import tp3 from "/assets/images/career/tp-3.svg";
import tp4 from "/assets/images/career/tp-4.svg";
import tp5 from "/assets/images/career/tp-5.svg";
import tp6 from "/assets/images/career/tp-6.svg";
import tp7 from "/assets/images/career/tp-7.svg";
import tp8 from "/assets/images/career/tp-8.svg";
import sl1 from "/assets/images/career/sl-1.png";
import sl2 from "/assets/images/career/sl-2.svg";
import sl3 from "/assets/images/career/sl-3.svg";
import sl4 from "/assets/images/career/bizshala.png";
import sl5 from "/assets/images/career/sl-5.svg";
import sl6 from "/assets/images/career/sl-6.svg";
import sl7 from "/assets/images/career/sl-7.svg";
import sl8 from "/assets/images/career/sl-8.png";
import sl9 from "/assets/images/career/sl-9.svg";
import sl10 from "/assets/images/career/sl-10.svg";
import sl11 from "/assets/images/career/ratopati.png";
import sl12 from "/assets/images/career/setopati.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Grid, Mousewheel } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/grid';
import { GrNext, GrPrevious } from "react-icons/gr";

const Career = () => {
  const swiperRef = useRef(null);
  const recentJoined = [
    { name: "Prakash", image: "/assets/images/career/prakash.svg", field: "React Js " },
    { name: "Anubhav", image: "/assets/images/career/anubhav.svg", field: "UI/UX Designer" },
    { name: "Niranjan", image: "/assets/images/career/niranjan.svg", field: "UI/UX Designer" },
    { name: "Lazuna", image: "/assets/images/career/lanjana.svg", field: "UI/UX Designer" },
    { name: "Kriti", image: "/assets/images/career/kriti.svg", field: "UI/UX Designer" },
    { name: "Suman", image: "/assets/images/career/suman.svg", field: "UI/UX Designer" },
    { name: "Prakrit", image: "/assets/images/career/prakrit.svg", field: "UI/UX Designer" },
    { name: "Sajjad", image: "/assets/images/career/sajjad.svg", field: "UI/UX Designer" },
  ];
  const topProfiles = [
    { name: "Prakash Upreti ", image: `${tp1}`, field: "Social Media Manager", experience: "9+ Years", salary: "350K Expected" },
    { name: "Achut Chalise", image: `${tp2}`, field: "Chief Operating Officer", experience: "4+ Years", salary: "35K Expected" },
    { name: "Pankaj Ghimire", image: `${tp3}`, field: "Chief Branding Officer", experience: "7+ Years", salary: "55K Expected" },
    { name: "Aavash Adhikari", image: `${tp4}`, field: "Sr. Community Manager", experience: "12+ Years", salary: "250K Expected" },
    { name: "Sameer Sharma", image: `${tp5}`, field: "Chief Investment Officer", experience: "6+ Years", salary: "75K Expected" },
    { name: "Kishor Baskota", image: `${tp6}`, field: "Chief Financial Officer", experience: "5+ Years ", salary: "35K Expected" },
    { name: "Sudhir Nepal", image: `${tp7}`, field: "Chief Branding Officer", experience: "3+ Years", salary: " 85K Expected" },
    { name: "Sobitmaan Shrestha", image: `${tp8}`, field: "Chief Digital Strategist", experience: "2+ Years", salary: "35K Expected" }
  ]
  const recentGraduate = [
    { name: "Prakash", image: "/assets/images/career/prakash.svg", field: "React Js " },
    { name: "Anubhav", image: "/assets/images/career/anubhav.svg", field: "UI/UX Designer" },
    { name: "Niranjan", image: "/assets/images/career/niranjan.svg", field: "UI/UX Designer" },
    { name: "Lazuna", image: "/assets/images/career/lanjana.svg", field: "UI/UX Designer" },
    { name: "Kriti", image: "/assets/images/career/kriti.svg", field: "UI/UX Designer" },
    { name: "Suman", image: "/assets/images/career/suman.svg", field: "UI/UX Designer" },
    { name: "Prakrit", image: "/assets/images/career/prakrit.svg", field: "UI/UX Designer" },
    { name: "Sajjad", image: "/assets/images/career/sajjad.svg", field: "UI/UX Designer" },
    { name: "Prakash", image: "/assets/images/career/prakash.svg", field: "React Js " },
    { name: "Anubhav", image: "/assets/images/career/anubhav.svg", field: "UI/UX Designer" },
    { name: "Niranjan", image: "/assets/images/career/niranjan.svg", field: "UI/UX Designer" },
    { name: "Lazuna", image: "/assets/images/career/lanjana.svg", field: "UI/UX Designer" },
    { name: "Kriti", image: "/assets/images/career/kriti.svg", field: "UI/UX Designer" },
    { name: "Suman", image: "/assets/images/career/suman.svg", field: "UI/UX Designer" },
    { name: "Prakrit", image: "/assets/images/career/prakrit.svg", field: "UI/UX Designer" },
    { name: "Sajjad", image: "/assets/images/career/sajjad.svg", field: "UI/UX Designer" },
  ];
  const sliderImage = [
    { id: 1, image: `${sl1}`, name: "AP1 HD" },
    { id: 2, image: `${sl2}`, name: "Artha Sarokar" },
    { id: 3, image: `${sl3}`, name: "BaarahKhari" },
    { id: 4, image: `${sl4}`, name: "Bizshala" },
    { id: 5, image: `${sl5}`, name: "Desh Sanchar" },
    { id: 6, image: `${sl6}`, name: "Kendra Bindu" },
    { id: 7, image: `${sl7}`, name: "Nagarik" },
    { id: 8, image: `${sl8}`, name: "Naya Patrika" },
    { id: 9, image: `${sl9}`, name: "Nepal Television" },
    { id: 10, image: `${sl10}`, name: "Online Khabar" },
    { id: 11, image: `${sl11}`, name: "Ratopati" },
    { id: 12, image: `${sl12}`, name: "Setopati" },
  ]
  useEffect(() => {
    document.title = "SRIYOG Career | Professional Marketplace"
  });
  const [countryCode, setCountryCode] = useState("+977");
  const flags = {
    "+977": "/assets/images/career/Nepal.svg",
    "+1": "/assets/images/career/USA.svg",
    "+91": "/assets/images/career/India.svg",
    "+44": "/assets/images/career/UK.svg",
    "+61": "/assets/images/career/Australia.svg",
    "+971": "/assets/images/career/UAE.svg",
  };

  return (
    <div className="max-w-[full] m-auto">
   
      <section className="relative w-full mb-[56px]">
        <div className="absolute inset-0 bg-[url('/assets/images/career/hero-banner.jpg')] bg-cover bg-center bg-no-repeat brightness-50 z-0"></div>
        <div className="relative z-2 text-white font-semibold max-md:w-full max-md:text-center max-w-[1120px] mx-auto max-md:pt-[100px] pt-[50px]">
          <p className="text-[14px]">Welcome to SRIYOG Career</p>
          <p className="text-[65px] max-md:text-[35px]">Hire the</p>
          <p className="text-[65px] max-md:text-[35px]">Professionals</p>
        </div>
        <form action="" className="mt-[100px] max-md:mt-[20px]">
          <div className="relative z-2 max-md:w-[75%] w-[950px] mx-auto  flex flex-wrap justify-between">
            <div className="w-[43%] max-md:w-[45%]">
              <select name="" id="" className="px-2 max-md:px-0 h-[50px] max-md:h-[30px] max-md:mb-4 max-md:border-b-2 max-md:rounded-none rounded-md w-full mb-1 max-md:bg-transparent focus:outline-none max-md:text-white">
                <option value=""className="max-md:text-black">All Cities</option>
                <option value="kathmandu" className="max-md:text-black">Kathmandu</option>
                <option value="Bhaktapur" className="max-md:text-black">Bhaktapur</option>
                <option value="Lalitpur" className="max-md:text-black">Lalitpur</option>
                <option value="Biratnagar" className="max-md:text-black">Biratnagar</option>
                <option value="Pokhara" className="max-md:text-black">Pokhara</option>
                <option value="Bharatpur"className="max-md:text-black">Bharatpur</option>
                <option value="Birgunj" className="max-md:text-black">Birgunj</option>
                <option value="Damak" className="max-md:text-black">Damak</option>
                <option value="Ithari" className="max-md:text-black">Ithari</option>
                <option value="Dharan"className="max-md:text-black">Dharan</option>
              </select>
              <p className="text-white mb-5 hidden lg:block">Example : Biratnagar , kathmandu ...more</p>
              <div className="flex justify-end ">
                <Link to="/city" className="p-2 hidden lg:block rounded-md bg-[#8b181b] font-bold text-white cursor-pointer hover:bg-[#b02b2f] transition duration-300 ease-in-out">Browse All Cities</Link>
                <Link to="/city" className="p-2 hidden max-md:block text-xs rounded-md bg-[#8b181b] font-bold text-white cursor-pointer hover:bg-[#b02b2f] transition duration-300 ease-in-out">Browse Cities</Link>
              </div>
            </div>
            <div className="w-[43%] max-md:w-[50%]">
              <select name="" id="" className="px-2 max-md:px-0 h-[50px] max-md:h-[30px] max-md:mb-4 max-md:border-b-2 max-md:rounded-none rounded-md w-full mb-1 max-md:bg-transparent focus:outline-none max-md:text-white">
                <option value="" className="max-md:text-black">All Professions</option>
                <option value="UI/UX Designer" className="max-md:text-black">UI/UX Designer</option>
                <option value="Web Developer" className="max-md:text-black">Web Developer</option>
                <option value="Mern Stack Developer" className="max-md:text-black">Mern Stack</option>
                <option value="Flutter Developer" className="max-md:text-black">Flutter Developer</option>
                <option value="React Native" className="max-md:text-black">React Native</option>
              </select>
              <p className="text-white mb-5 hidden lg:block">Example : UI/UX Designer , Mern Stack ...more</p>
              <div className="flex justify-start">
                <Link to="/services" className="p-2 hidden lg:block rounded-md bg-[#8b181b] font-bold text-white hover:bg-[#b02b2f] transition duration-300 ease-in-out">Browse All Professions</Link>
                <Link to="/services" className="p-2 hidden max-md:block rounded-md bg-[#8b181b] text-xs font-bold text-white hover:bg-[#b02b2f] transition duration-300 ease-in-out">Browse  Professions</Link>
              </div>
            </div>
            <div className="w-[10%] hidden lg:block">
              <input type="submit" name="" value="Search" id="" className="bg-[#8b181b] px-2 w-full h-[50px] rounded-md font-bold text-white hover:bg-[#b02b2f] transition duration-300 ease-in-out" />
            </div>
          </div>
        </form>
        <div className="relative z-2 max-md:w-[88%]  w-[1120px] mx-auto text-white mt-[56px]">
          <div className="flex items-center font-medium gap-3 mb-3">
            <FaLocationDot className="text-lg" /><p className="max-md:text-sm">Kanyam | Illam</p>
          </div>
          <div className="flex items-center font-medium gap-3">
            <FaCamera className="text-lg" /><p className="max-md:text-sm">Photo Source: @ Sashi Shrestha</p>
          </div>
          <br /><br className="hidden lg:block"/>
        </div>
      </section>

      <form className="mb-[56px] flex flex-wrap gap-6 max-w-[1120px] mx-auto max-md:w-[89%] max-md:gap-2">
        <input type="text" name="" id="" placeholder="First Name" className="focus:outline-none rounded-md border border-[#C5C5C5] p-3 w-56 max-md:w-full" />
        <input type="text" name="" id="" placeholder="Last Name" className="focus:outline-none rounded-md border border-[#C5C5C5] p-3 w-56 max-md:w-full" />
        <div className="flex gap-2 border border-[#C5C5C5] items-center px-2 py-3 w-96 rounded-md max-md:w-full">
          <img src={flags[countryCode]} alt="Country Flag" className="h-[30px] w-[30px]" />
          <select name="" id="" value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="focus:outline-none bg-transparent">
            <option value="+977">+977</option>
            <option value="+1">+1</option>
            <option value="+91">+91</option>
            <option value="+44">+44</option>
            <option value="+61">+61</option>
            <option value="+971">+971</option>
          </select>
          <input type="text" name="" id="" placeholder="Phone Number" className="focus:outline-none px-2" />
        </div>
        <button type="submit" className="flex gap-2 px-4 py-3 bg-[#8b181b] hover:bg-[#b02b2f] transition duration-300 ease-in-out text-white font-bold max-md:justify-center items-center rounded-md max-md:w-full"><MdOutlinePhoneCallback className="text-[24px]"/>Request Callback</button>
      </form>
     
      <section className="max-md:w-[89%] max-lg:w-[88%] mb-[56px] max-w-[1140px] px-4 max-md:p-0 mx-auto">
        <p className="text-[24px] text-center font-bold">Recently Joined</p>
        <div className=" mt-[3rem] max-lg:mt[1.5rem]  grid lg:grid-cols-8 gap-4 max-lg:grid-cols-4 max-md:grid-cols-4">
          {recentJoined.map((item) => (
            <div key={item.name} className=" w-[91px] h-[149px] text-center max-lg:py-2 max-lg:w-auto max-lg:h-auto">
              <img src={item.image} alt={item.name} className="w-[91px] h-[91px] mx-auto max-md:w-[85%] max-md:h-auto" />
              <p className="text-[17px] font-bold max-lg:text-[16px] max-md:text-[13px]">{item.name}</p>
              <p className="text-[12px] text-[#2A68CA] font-bold max-lg:text-[11px] max-md:text-[9px]">{item.field}</p>
            </div>
          ))}
        </div>
      </section>

     
      <section className="max-md:w-[89%] max-lg:w-[88%] max-w-[1140px] mx-auto mb-[56px]">
        <p className="text-[24px] font-bold text-center">Top Profiles</p>
        <div className=" grid lg:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 mt-[3rem] max-lg:mt-[1.5rem] gap-4">
          {topProfiles.map((item) => (
            <div className="flex max-lg:block items-center gap-0 w-auto   rounded-md max-lg:w-auto h-auto  max-lg:py-2" key={item.name}>
              <div className="">
                <img src={item.image} alt={item.name} className=" max-lg:w-auto max-lg:h-auto mx-auto" />
              </div>
              <div className="w-[175px]  text-center  max-lg:w-[100%]">
                <p className="text-[16px] font-bold max-lg:text-[16px] max-md:text-[13px]">{item.name}</p>
                <p className="text-[13px] font-bold text-[#821F24] max-lg:text-[11px] max-md:text-[9px]">{item.field}</p>
                <p className="text-[13px] font-bold max-lg:text-[11px] max-md:text-[9px]">
                  {item.experience},{item.salary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="max-md:w-[88%] max-lg:w-[88%] max-w-[1140px] mx-auto mb-[56px] py-3 flex flex-wrap justify-between ">
        <div className="w-[369px] h-[183px] max-lg:w-[30.5%] max-md:h-[60px] max-lg:h-[90px] flex border-[#5B2429] border-[2px] justify-center items-center rounded-md cursor-pointer ">
          <div className="flex justify-between items-center w-[90%] ">
            <img src={btn1} alt="cv-details" className="mr-3  max-lg:w-[30.5%]" />
            <p className="text-[22px] font-bold  max-lg:w-[68%] max-md:text-[8px] max-lg:text-[16px]">Generate Cv Online</p>
          </div>
        </div>
        <div className="w-[364px] h-[183px]  max-lg:w-[30.5%] max-md:h-[60px] max-lg:h-[90px] border-[#5B2429] border-[2px] flex justify-center items-center rounded-md cursor-pointer ">
          <div className="flex justify-between items-center w-[90%]">
            <img src={btn2} alt="your-details" className="mr-3 max-lg:w-[30.5%]" />
            <p className="text-[22px] font-bold max-lg:w-[68%] max-md:text-[8px] max-lg:text-[16px]">Submit Your Details</p>
          </div>
        </div>
        <div className="w-[365px] h-[183px] max-lg:w-[30.5%] max-md:h-[60px] max-lg:h-[90px] border-[#5B2429] border-[2px] flex justify-center items-center rounded-md cursor-pointer ">
          <div className="flex justify-between items-center w-[90%]">
            <img src={btn3} alt="apply" className="mr-3 max-lg:w-[30.5%] " />
            <p className="text-[22px] font-bold max-lg:w-[68%] max-md:text-[8px] max-lg:text-[16px]">Apply for an Internship</p>
          </div>
        </div>
      </section>

      {/* Recent Graduate Section */}
      <section className="max-md:w-[89%] max-lg:w-[88%] mb-[56px] max-w-[1140px] mx-auto">
        <p className="text-[24px] font-bold text-center">Recent Graduate Interns</p>
        <div className=" grid lg:grid-cols-9 max-lg:grid-cols-4 max-md:grid-cols-4  mt-[3rem] gap-4 max-lg:gap-4 rounded-md">
          {recentGraduate.map((item, idx) => (
            <div key={idx + 1} className="w-[88px] h-[148px] max-lg:w-auto max-lg:h-auto text-center  max-lg:py-3">
              <img src={item.image} alt={item.name} className=" mx-auto max-lg:w-auto max-lg:h-auto " />
              <p className="text-[17px] font-bold max-lg:text-[16px] max-md:text-[13px]">{item.name}</p>
              <p className="text-[11px] text-[#4C6F07] font-normal max-lg:text-[11px] max-md:text-[9px]">{item.field}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Swiper Section */}

      <section className="max-md:w-[90%] max-lg:w-[88%] mb-[56px] max-w-[1140px] mx-auto py-3 flex justify-between items-center">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="text-[#A52629] text-[55px] font-bold max-md:text-[35px] max-lg:text-[40px]"
        >
          <GrPrevious className="hover:text-[#4b4b4b] text-[#A52629]" />
        </button>
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          grid={{ rows: 2 }}
          direction={'horizontal'}
          mousewheel={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: {
              slidesPerView: 3,
              grid: {
                rows: 1,
              },
            },
            640: {
              slidesPerView: 3,
              grid: {
                rows: 1,
              },
            },
            768: {
              slidesPerView: 4,
              grid: {
                rows: 2,
              },
            },
            1024: {
              slidesPerView: 5,
              grid: {
                rows: 2,
              },
            },
          }}
          modules={[Navigation, A11y, Grid, Mousewheel]}
          className=" h-[351px] max-md:h-auto max-lg:h-[300px]"
        >
          {sliderImage.map((item) => (
            <SwiperSlide key={item.id} >
              <div className="h-full my-3  max-md:h-[100px]">
                <Link
                  to=""
                  className="relative group flex justify-center items-center h-full w-full"
                >
                  <span className="absolute top-0 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 z-9 before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-t-black">
                    {item.name}
                  </span>

                  <img
                    src={item.image}
                    alt={item.id}
                    className="w-[80%] max-md:w-full h-auto transition duration-300"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="text-[#A52629] text-[55px] font-bold  max-md:text-[35px] max-lg:text-[40px]"
        >
          <GrNext className="hover:text-[#4b4b4b]" />
        </button>
      </section>
    </div>
  );
};

export default Career;
