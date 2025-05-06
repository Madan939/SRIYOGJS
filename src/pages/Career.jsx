import React, { useEffect, useRef, useState } from "react";
import { FaCamera, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { IoConstructOutline } from "react-icons/io5";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Grid, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import { GrNext, GrPrevious } from "react-icons/gr";

const Career = () => {
  const swiperRef = useRef(null);
  const recentJoined = [
    {
      name: "Prakash",
      image: "/assets/images/career/prakash.svg",
      field: "React Js ",
    },
    {
      name: "Anubhav",
      image: "/assets/images/career/anubhav.svg",
      field: "UI/UX Designer",
    },
    {
      name: "Niranjan",
      image: "/assets/images/career/niranjan.svg",
      field: "UI/UX Designer",
    },
    {
      name: "Lazuna",
      image: "/assets/images/career/lanjana.svg",
      field: "UI/UX Designer",
    },
    {
      name: "Kriti",
      image: "/assets/images/career/kriti.svg",
      field: "UI/UX Designer",
    },
    {
      name: "Suman",
      image: "/assets/images/career/suman.svg",
      field: "UI/UX Designer",
    },
    {
      name: "Prakrit",
      image: "/assets/images/career/prakrit.svg",
      field: "UI/UX Designer",
    },
    {
      name: "Sajjad",
      image: "/assets/images/career/sajjad.svg",
      field: "UI/UX Designer",
    },
  ];
  const topProfiles = [
    {
      name: "Prakash  ",
      image: "/assets/images/career/tp-1.svg",
      field: "React JS",
      experience: "9+ Years",
      salary: "350K Expected",
    },
    {
      name: "Achut ",
      image: "/assets/images/career/tp-2.svg",
      field: "React JS",
      experience: "4+ Years",
      salary: "35K Expected",
    },
    {
      name: "Pankaj",
      image:"/assets/images/career/tp-3.svg",
      field: "React JS",
      experience: "7+ Years",
      salary: "55K Expected",
    },
    {
      name: "Aavash",
      image: "/assets/images/career/tp-4.svg",
      field: "React JS",
      experience: "12+ Years",
      salary: "250K Expected",
    },
    {
      name: "Sameer",
      image: "/assets/images/career/tp-5.svg",
      field: "React JS",
      experience: "6+ Years",
      salary: "75K Expected",
    },
    {
      name: "Kishor",
      image: "/assets/images/career/tp-6.svg",
      field: "React JS",
      experience: "5+ Years ",
      salary: "35K Expected",
    },
    {
      name: "Sudhir ",
      image: "/assets/images/career/tp-7.svg",
      field: "React JS",
      experience: "3+ Years",
      salary: " 85K Expected",
    },
    {
      name: "Sobitmaan",
      image: "/assets/images/career/tp-8.svg",
      field: "React JS",
      experience: "2+ Years",
      salary: "35K Expected",
    },
  ];
  const recentGraduate = [
    {
      name: "Prakash",
      image: "/assets/images/career/prakash.svg",
      field: "React Js ",
    },
    {
      name: "Anubhav",
      image: "/assets/images/career/anubhav.svg",
      field: "UI/UX Designer",
    },
    {
      name: "Niranjan",
      image: "/assets/images/career/niranjan.svg",
      field: "UI/UX Designer",
    },
    {
      name: "Lazuna",
      image: "/assets/images/career/lanjana.svg",
      field: "UI/UX Designer",
    },
    {
      name: "Kriti",
      image: "/assets/images/career/kriti.svg",
      field: "UI/UX Designer",
    },
    {
      name: "Suman",
      image: "/assets/images/career/suman.svg",
      field: "UI/UX Designer",
    },
    {
      name: "Prakrit",
      image: "/assets/images/career/prakrit.svg",
      field: "UI/UX Designer",
    },
    {
      name: "Sajjad",
      image: "/assets/images/career/sajjad.svg",
      field: "UI/UX Designer",
    },
    {
      name: "Prakash",
      image: "/assets/images/career/prakash.svg",
      field: "React Js ",
    },
  ];
  const sliderImage = [
    { id: 1, image: "/assets/images/career/sl-1.png", name: "AP1 HD" },
    { id: 2, image: "/assets/images/career/sl-2.svg", name: "Artha Sarokar" },
    { id: 3, image: "/assets/images/career/sl-3.svg", name: "BaarahKhari" },
    { id: 4, image: "/assets/images/career/bizshala.png", name: "Bizshala" },
    { id: 5, image: "/assets/images/career/sl-5.svg", name: "Desh Sanchar" },
    { id: 6, image: "/assets/images/career/sl-6.svg", name: "Kendra Bindu" },
    { id: 7, image: "/assets/images/career/sl-7.svg", name: "Nagarik" },
    { id: 8, image: "/assets/images/career/sl-8.png", name: "Naya Patrika" },
    { id: 9, image: "/assets/images/career/sl-9.svg", name: "Nepal Television" },
    { id: 10, image: "/assets/images/career/sl-10.svg", name: "Online Khabar" },
    { id: 11, image: "/assets/images/career/ratopati.png", name: "Ratopati" },
    { id: 12, image: "/assets/images/career/setopati.png", name: "Setopati" },
  ];
  useEffect(() => {
    document.title = "SRIYOG Career | Professional Marketplace";
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
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [cityselected, setCitySelected] = useState("All Cities");
  const [isProffOpen, setIsProffOpen] = useState(false);
  const [proffselected, setProffSelected] = useState("All Professions");

  const cities = [
    "Kathmandu",
    "Lalitpur",
    "Biratnagar",
    "Bhartpur",
    "Damak",
    "Pokhara"
  ];

  const professions = [
    "UI/UX Designer",
    "Web Developer",
    "Mern Stack",
    "Flutter Developer",
    "React Native",
  ];

  return (
    <div className="max-w-[full] m-auto">
      {/* hero-section */}
      <section className="relative w-full mb-[56px]">
        <div className="absolute inset-0 bg-[url('/assets/images/career/hero-banner.jpg')] bg-cover bg-center bg-no-repeat brightness-50 z-0"></div>
        <div className="relative z-2 text-white font-bold max-md:w-full max-md:text-center max-w-[1120px] max-lg:w-[88%] mx-auto max-md:pt-[100px] pt-[50px]">
          <p className="text-[14px]">Welcome to SRIYOG Career</p>
          <p className="text-[65px] max-md:text-[35px]">Hire the BEST</p>
          <p className="text-[65px] max-md:text-[35px]">Professionals</p>
        </div>
        <form
          action=""
          className="mt-[60px] max-lg:mt-[30px] max-md:mt-[20px]"
        >
          <div className="relative z-2 max-md:w-[75%] w-[950px] max-lg:w-[80%] mx-auto  flex flex-wrap justify-between">
            <div className="w-[43%] max-md:w-[45%]">
              <div
                className="w-full lg:bg-white lg:h-[50px] flex items-center rounded-md mb-3 max-lg:rounded-none max-lg:border-b-2 h-[30px] max-lg:text-white relative"
                onClick={() => setIsCityOpen(!isCityOpen)}
              >
                <img src="/assets/icons/location.svg" alt="" className="h-auto w-8"/>
                <div className="w-[90%] bg-transparent focus:outline-none cursor-pointer flex justify-between items-center">
                  {cityselected}
                  {isCityOpen ? (
                    <RiArrowDropUpLine className="text-[1.5rem]" />
                  ) : (
                    <RiArrowDropDownLine className="text-[1.5rem]" />
                  )}
                </div>

                {isCityOpen && (
                  <ul className="absolute top-full left-0 w-full bg-white text-black shadow-md z-2 transition-all duration-500 rounded-md max-lg:text-black">
                    {cities.map((option, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setCitySelected(option);
                          setIsCityOpen(false);
                        }}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <p className="text-[#c3c2c2] text-sm mb-5 hidden lg:block">
                Example : Biratnagar , kathmandu ...more
              </p>
              <div className="flex justify-end ">
                <Link
                  to="/city"
                  className="px-3 py-2 hidden lg:block rounded-md bg-[#8b181b] font-bold text-white cursor-pointer hover:bg-[#b02b2f] transition duration-300 ease-in-out"
                >
                  Browse All Cities
                </Link>
                <Link
                  to="/city"
                  className="p-2 hidden max-lg:block text-xs rounded-md bg-[#8b181b] font-bold text-white cursor-pointer hover:bg-[#b02b2f] transition duration-300 ease-in-out"
                >
                  Browse Cities
                </Link>
              </div>
            </div>

            <div className="w-[43%] max-md:w-[50%]">
              <div
                className="w-full lg:bg-white lg:h-[50px] flex items-center rounded-md mb-3 max-lg:rounded-none max-lg:border-b-2 h-[30px] max-lg:text-white relative"
                onClick={() => setIsProffOpen(!isProffOpen)}
              >
                <IoConstructOutline className="mx-2 text-lg" />
                <div className="w-[90%] bg-transparent focus:outline-none cursor-pointer flex justify-between items-center">
                  {proffselected}
                  {isProffOpen ? (
                    <RiArrowDropUpLine className="text-[1.5rem]" />
                  ) : (
                    <RiArrowDropDownLine className="text-[1.5rem]" />
                  )}
                </div>

                {isProffOpen && (
                  <ul className="absolute top-full left-0 w-full bg-white text-black shadow-md z-2 transition-all duration-500 rounded-md max-lg:text-black">
                    {professions.map((option, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setProffSelected(option);
                          setIsProffOpen(false);
                        }}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <p className="text-[#c3c2c2] text-sm mb-5 hidden lg:block">
                Example : UI/UX Designer , Mern Stack ...more
              </p>
              <div className="flex justify-start">
                <Link
                  to="/services"
                  className="px-3 py-2 hidden lg:block rounded-md bg-[#8b181b] font-bold text-white hover:bg-[#b02b2f] transition duration-300 ease-in-out"
                >
                  Browse All Professions
                </Link>
                <Link
                  to="/services"
                  className="p-2 hidden max-lg:block rounded-md bg-[#8b181b] text-xs font-bold text-white hover:bg-[#b02b2f] transition duration-300 ease-in-out"
                >
                  Browse Professions
                </Link>
              </div>
            </div>
            <div className="w-[10%] hidden lg:block">
              <input
                type="submit"
                name=""
                value="Search"
                id=""
                className="bg-[#8b181b] px-2 w-full h-[50px] rounded-md font-bold text-white hover:bg-[#b02b2f] transition duration-300 ease-in-out"
              />
            </div>
          </div>
        </form>
        <div className="relative z-2 max-lg:w-[88%]  w-[1120px] mx-auto text-white mt-[56px]">
          <div className="flex items-center font-medium gap-3 mb-3">
            <FaLocationDot className="text-lg" />
            <p className="max-md:text-sm">Kanyam | Illam</p>
          </div>
          <div className="flex items-center font-medium gap-3">
            <FaCamera className="text-lg" />
            <p className="max-md:text-sm">Photo Source: @ Sashi Shrestha</p>
          </div>
          <br />
          <br className="hidden lg:block" />
        </div>
      </section>

      {/* form-section */}
      <form className="mb-[56px] flex flex-wrap gap-6 max-w-[1120px] mx-auto max-md:w-[89%] max-lg:w-[88%] max-md:gap-2">
        <input
          type="text"
          name=""
          id=""
          placeholder="First Name"
          className="mdMax:basis-[100%] focus:outline-none rounded-md border border-[#C5C5C5] p-3 w-56 max-md:w-full max-lg:w-[48%]"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Last Name"
          className="mdMax:basis-[100%] focus:outline-none rounded-md border border-[#C5C5C5] p-3 w-56 max-md:w-full max-lg:w-[48%]"
        />
        <div className="mdMax:basis-[100%]  flex gap-2 border border-[#C5C5C5] items-center px-2 py-3 w-96 max-lg:w-[25rem] rounded-md max-md:w-full">
          <img
            src={flags[countryCode]}
            alt="Country Flag"
            className="h-[30px] w-[30px]"
          />
          <select
            name=""
            id=""
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="focus:outline-none bg-transparent"
          >
            <option value="+977">+977</option>
            <option value="+1">+1</option>
            <option value="+91">+91</option>
            <option value="+44">+44</option>
            <option value="+61">+61</option>
            <option value="+971">+971</option>
          </select>
          <input
            type="text"
            name=""
            id=""
            placeholder="Phone Number"
            className="focus:outline-none px-2"
          />
        </div>
        <button
          type="submit"
          className="flex gap-2 px-4 py-3 bg-[#8b181b] hover:bg-[#b02b2f] transition duration-300 ease-in-out text-white font-bold max-md:justify-center items-center rounded-md max-md:w-full max-lg:w-[15rem] mdMax:basis-full"
        >
          <MdOutlinePhoneCallback className="text-[24px]" />
          Request Callback
        </button>
      </form>

      {/* Top-Stack-section */}
      <section className="max-md:w-[89%] max-lg:w-[88%] mb-[56px] max-w-[1140px] px-4 max-md:p-0 mx-auto">
        <p className="text-[24px] text-center font-bold">Top Stacks</p>
        <div className=" mt-[3rem] max-lg:mt[1.5rem]  grid lg:grid-cols-8 gap-4 max-lg:grid-cols-4 max-md:grid-cols-4">
          {recentJoined.map((item) => (
            <div
              key={item.name}
              className=" w-[91px] h-[149px] text-center max-lg:py-2 max-lg:w-auto max-lg:h-auto"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-[91px] h-[91px] mx-auto max-md:w-[85%] max-md:h-auto mb-2"
              />
              <p className="text-[18px] font-semibold max-lg:text-[16px] max-md:text-[13px]">
                {item.name}
              </p>
              <p className="text-[11px] text-[#8b181b] font-bold max-lg:text-[11px] max-md:text-[9px]">
                {item.field}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* top-profile-section */}
      <section className="max-md:w-[89%] max-lg:w-[88%] max-w-[1140px] mx-auto mb-[56px]">
        <p className="text-[24px] font-bold text-center">Top Profiles</p>
        <div className=" grid lg:grid-cols-8 max-lg:grid-cols-3 max-md:grid-cols-2 mt-[3rem] max-lg:mt-[1.5rem] gap-4">
          {topProfiles.map((item) => (
            <div
              className="max-lg:block  items-center gap-4 w-auto rounded-md max-lg:w-auto h-auto text-center max-lg:py-2 "
              key={item.name}
            >
              <div className="">
                <img
                  src={item.image}
                  alt={item.name}
                  className=" h-[92px] w-[92px] mb-3  mx-auto "
                />
              </div>
              <div className="">
                <p className="text-[18px] font-semibold max-lg:text-[16px] max-md:text-[13px]">
                  {item.name}
                </p>
                <p className="text-[11px] font-bold text-[#821F24] max-lg:text-[11px] max-md:text-[9px]">
                  {item.field}
                </p>
                {/* <p className="text-[13px] font-bold max-lg:text-[11px] max-md:text-[9px]">
                  {item.experience},{item.salary}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* button-section */}
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 max-w-[1140px] w-[88%] mx-auto mb-[56px] py-3 gap-4">
        <div className="w-[369px] max-md:w-full h-[150px] max-lg:w-auto max-md:h-[60px] max-lg:h-[90px] flex border-[#5B2429] border-[2px] justify-center items-center rounded-md cursor-pointer ">
          <div className="flex justify-between items-center w-[90%]  ">
        
            <img src="/assets/icons/cv.svg" alt="" className="h-auto lg:w-32 w-20"/>
            <p className="text-[22px] font-bold  max-lg:w-[68%] max-md:text-[8px] max-lg:text-[16px]">
              Generate Cv Online
            </p>
          </div>
        </div>
        <div className="w-[364px] h-[150px]  max-md:w-full max-lg:w-auto max-md:h-[60px] max-lg:h-[90px] border-[#5B2429] border-[2px] flex justify-center items-center rounded-md cursor-pointer ">
          <div className="flex justify-between items-center w-[90%]">
              <img src="/assets/icons/submit.svg" alt="" className="h-auto lg:w-32 w-20"/>
            <p className="text-[22px] font-bold max-lg:w-[68%] max-md:text-[8px] max-lg:text-[16px]">
              Submit Your Details
            </p>
          </div>
        </div>
        <div className="w-[365px] h-[150px]  max-md:w-full  max-lg:w-auto max-md:h-[60px] max-lg:h-[90px] border-[#5B2429] border-[2px] flex justify-center items-center rounded-md cursor-pointer ">
          <div className="flex justify-between items-center w-[90%]">
            <img src="/assets/icons/apply.svg" alt="" className="h-auto lg:w-32 w-20"/>
            <p className="text-[22px] font-bold max-lg:w-[68%] max-md:text-[8px] max-lg:text-[16px]">
              Apply for an Internship
            </p>
          </div>
        </div>
      </section>

      {/* recent-graduate-section */}
      <section className="max-md:w-[89%] max-lg:w-[88%] mb-[56px] max-w-[1140px] mx-auto">
        <p className="text-[24px] font-bold text-center">Recent Graduates</p>
        <div className=" grid lg:grid-cols-9 max-lg:grid-cols-4 max-md:grid-cols-4  mt-[3rem] gap-4 max-lg:gap-4 rounded-md">
          {recentGraduate.map((item, idx) => (
            <div
              key={idx + 1}
              className="w-[88px] h-[148px] max-lg:w-auto max-lg:h-auto text-center  max-lg:py-3"
            >
              <img
                src={item.image}
                alt={item.name}
                className=" mx-auto max-lg:w-auto max-lg:h-auto mb-3"
              />
              <p className="text-[18px] font-semibold ">
                {item.name}
              </p>
              <p className="text-[11px] text-[#8b181b]   font-bold ">
                {item.field}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* slider-section */}
      <section className="max-md:w-[90%] max-lg:w-[88%] mb-[56px] max-w-[1140px] mx-auto py-3 flex justify-between items-center">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="text-[#A52629] lg:text-[55px] font-bold max-md:text-[35px] max-lg:text-[35px]"
        >
          <GrPrevious className="sm:left-0 sm:relative z-2  hover:text-[#4b4b4b] text-[#A52629]" />
        </button>
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          grid={{ rows: 2 }}
          direction={"horizontal"}
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
          className=" md:h-[351px]  lg:h-[300px]  sm:h-[100%]"
        >
          {sliderImage.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="h-full  max-md:h-[100px]">
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
                    className="w-[80%] max-md:w-full h-auto transition duration-300 sm:w-[100%]:"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="sm:right-0 sm:relative z-2 text-[#A52629] lg:text-[55px] font-bold   max-lg:text-[35px]"
        >
          <GrNext className="hover:text-[#4b4b4b]" />
        </button>
      </section>
    </div>
  );
};

export default Career;
