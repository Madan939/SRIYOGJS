import React, { useEffect } from 'react';
import Mayor from '../assets/images/about/mayor.jpg';
import { FaRegCircleDot } from 'react-icons/fa6';
import team from "../assets/images/about/team.svg";
import skills from "../assets/images/about/skills.svg";
import building from "../assets/images/about/building.svg";
import flag from "../assets/images/about/flag.svg";
import Breadcrumb from '../components/Breadcrumb';
import cs1 from "../assets/images/about/registration.jpg";
import cs2 from "../assets/images/about/12-sep-2019.jpg";
import cs3 from "../assets/images/about/maw.jpg";
import cs4 from "../assets/images/about/karmashil-award.jpg";
import cs5 from "../assets/images/about/ime-pay-mou.jpg";
import cs6 from "../assets/images/about/sriyog-may-app.jpg";
import pracas from "../assets/images/about/pracas_large.png";
import pracasSignature from "../assets/images/about/prakash_sig.png";
import telegram from "../assets/images/about/telegram.svg";
import tweeter from "../assets/images/about/tweeter.svg";
import linkedIn from "../assets/images/about/linkedin.svg"
import { A11y, FreeMode, Mousewheel, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';


const About = () => {
  const card = [
    { name: "Experienced Team", des: "Founded by a group of second-generation entrepreneurs for providing something valuable for society and people who enjoy digital connectivity.", icon: `${team}` },
    { name: "Global Reach", des: "Started from Biratnagar, Nepal, we are gradually growing to cover few major cities of Nepal. As a part of our global expansion, we are opening membership for skilled professionals in New Delhi& Dubai.", icon: `${building}` },
    { name: "Multiple Opportunities", des: " Starting from 24 services, we have upgraded now to 18 categories and 158 sub-categories. We have been continuously upgrading and modifying your service categories as per the user requirements and specification.", icon: `${flag}` },
    { name: "AI and ML Integration", des: " By adopting the latest technology and innovation, we are automating our system. Once we are equipped with sufficient database, Artificial Intelligence (AI) and Machine language (ML) can be used to make the user experience much easier.", icon: `${skills}` }
  ];


  const cardSlider = [
    { name: "Company Registration", image: `${cs1}`, date: "14", sup: "th", date2: "June, 2018" },
    { name: "Inaugurated at Kathmandu", image: `${cs2}`, date: "12", sup: "th", date2: "September, 2019" },
    { name: "MoU With MAW Skills", image: `${cs3}`, date: "31", sup: "st", date2: "December, 2019" },
    { name: "Karmashil Award Ceremony", image: `${cs4}`, date: "12", sup: "th", date2: "September, 2022" },
    { name: "MoU with IME Pay", image: `${cs5}`, date: "8", sup: "th", date2: "February, 2023" },
    { name: "New App Launched", image: `${cs6}`, date: "17", sup: "th", date2: "May, 2024" },
  ]
  const des = "SRIYOG has been functioning under a start-up model, is the most recent example of leveraging digital technology to address social problems like unemployment through digital connectivity.";
  const name = "About SRIYOG";
  useEffect(() => {
    document.title = "SRIYOG About | Professional Marketplace"
  }, []);
  return (
    <>
      <Breadcrumb name={name} des={des} />
      {/* First Section */}
      <section className="max-w-[1140px] mx-auto mb-[56px] max-lg:w-[88%] max-md:w-[89%]">
        <div className="flex flex-col lg:flex-row gap-8 ">
          <div className="lg:w-7/12">
            <hr className="h-[5px] w-[140px] bg-[#8b181b] mb-4" />
            <small className="text-lg font-semibold">Who We Are</small>
            <h1 className="text-3xl max-md:text-2xl font-semibold text-[#8b181b] mt-3">
              Creating Opportunities for everyone
            </h1>
            <p className="text-justify mt-4">
              SRIYOG, which was registered under the Office of the Company Registrar in 2018
              to establish direct contact between the people who work and hire skilled manpower by
              profiling them, and formally started from Kathmandu on 12 September 2019 for digital branding of
              professionals within the country, has provided thousands of users with easy and It has been
              providing opportunities to work through different means.
            </p>
            <p className="mt-4">Analyzing the Global Service market, we found unbelievable facts:</p>
            <ul className="mt-4 space-y-3">
              {[
                "Local experts have a tremendous market; as a result, they drop the small works whereas starters never get an opportunity to prove themselves.",
                "Time management and scheduling are never done.",
                "The experts and veterans never work to build their team and gain trust. To grab this opportunity, various agencies filled in the space by creating the market and are performing much smoothly.",
                "But agencies are creating a hectic schedule, paying low to their employees and charging much higher to the service seekers."
              ].map((text, index) => (
                <li key={index} className="flex items-start">
                  <span className="mt-1 mr-2 text-primary">
                    <FaRegCircleDot />
                  </span>
                  <span className="text-justify">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-5/12 max-md:h-[400px] max-lg:h-[500px]" style={{ backgroundImage: `url(${Mayor})`, backgroundSize: " cover", backgroundPositionX: "83%" }}>
            <div className="h-full flex items-end  ">
              <p className="text-justify  bg-gray-100 p-4 my-3 opacity-[75%]">
                Mr. Nagesh Koirala (Mayor, Biratnagar Metropolitan) expressing his views at the “Karmashil Award”
                program held at Morang Byapar Sangh on 12 September 2022.
              </p>
            </div>
          </div>

        </div>
      </section>
      {/* Second Section */}
      <section className="max-w-[1140px] mb-[56px] max-lg:w-full max-lg:rounded-none shadow-lg h-auto bg-[#d4c3c3] flex justify-center items-center  mx-auto rounded-md">
        <div className="my-[56px] w-[85%] flex gap-3 flex-wrap">
          {card.map((item) => (
            <div key={item.name} className='flex flex-grow justify-between items-center lg:w-4/12 p-3'>
              <div className='w-[15%] h-[60px]'>
                <img src={item.icon} alt={item.name} className=' w-full h-full ' />
              </div>
              <div className='w-[83%]'>
                <p className='text-[18px] font-semibold text-[#862124] mb-[8px]'>{item.name}</p>
                <p className='text-justify text-[16px]'>{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Third Section */}
      <section className="w-full bg-[#e2e2e2] mb-[56px] flex flex-wrap justify-center items-center">
        <div className=' my-[56px] w-[1140px] max-md:w-[87%] max-lg:w-[88%] mx-auto flex flex-wrap justify-between '>
          <div className='w-[32%]  max-md:p-0 max-lg:mb-[40px]  max-lg:w-[100%]  px-5 py-5 border flex flex-wrap justify-center items-center bg-[#fff] rounded-md shadow-md'>
            <div className='m-4 max-md:mx-7'>
              <p className='text-[#862124] mb-[0.75rem] text-[2rem] max-md:text-[1.5rem] font-semibold'>A Brief History of SRIYOG</p>
              <p className='mb-[0.75rem] text-justify'>Analyzing the global trend of migration, we can find the only reason for skyrocketing foreign employment is that people choose the easy way of grabbing the readymade market rather than creating something new by themselves.</p>
              <p className='text-justify' >This hampers the distribution of the skilled manpower in the underdeveloped countries and brings imbalance over the global community. Analyzing the Global Service market, we found unbelievable facts.</p>
            </div>
          </div>
          <div className='w-[64%] max-lg:w-[100%] px-2 max-md:pt-[30px] flex items-end justify-end'>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              scrollbar
              freeMode={true}
              direction={'horizontal'}
              mousewheel={true}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
                1200: { slidesPerView: 2 }
              }}
              modules={[Mousewheel, A11y, Scrollbar, FreeMode]}
              className="myswiper ">

              {cardSlider.map((item) => (
                <SwiperSlide key={item.name} className=''>
                  <div className='relative h-[320px] max-md:h-[350px] max-md:w-[95%] bg-[#f9f9f9] shadow-md  mb-[5.5rem] max-md:mb-7 max-lg:mb-7 rounded-xl p-4  max-md:p-6 max-w-md mx-auto'>
                    {/* Comment tail (optional) */}
                    <div className="absolute top-full left-10 w-0  border-t-[10px] border-t-[#f9f9f9] border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent"></div>
                    <div className='text-center h-[90%] max-md:h-[100%] '>
                      <img src={item.image} alt={item.name} className='h-[75%] max-md:h-[78%] w-auto mx-auto pb-3 ' />
                      <p className='text-[16px] mb-5 font-semibold max-md:text-[16px]'>{item.name}</p>
                      <p className='text-[1.3rem] font-semibold max-md:text-[17px]'>
                        <span>{item.date}</span><sup>{item.sup}</sup>&nbsp;{item.date2}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section className="max-w-[1140px] mb-[56px] max-md:w-[87%] max-lg:w-[88%] mx-auto flex flex-wrap justify-between items-center">
        <div className='w-[38%] max-md:w-full hidden max-md:block max-md:mb-[20px]'>
          <img src={pracas} alt="pracas" className='w-full h-auto' />
        </div>
        <div className='w-[59%] max-md:w-full max-lg:w-[65%]'>
          <hr className="h-[5px] w-[140px] bg-[#8b181b] mb-3" />
          <p className="text-3xl font-semibold text-[#8b181b] mb-3">The Man Behind SRIYOG</p>
          <p className='mb-3 text-justify'>Pracas Upreti's journey from a startup founder to a technology-driven change-maker in Biratnagar, Nepal, exemplifies the profound impact that individuals can have when they combine innovation with a commitment to social responsibility.</p>
          <p className='mb-3 text-justify'>Through his endeavors, Upreti has not only transformed his community but has also set a precedent for how technology can be harnessed to drive positive change and create a better future for all.</p>
          <p className='mb-3 text-justify'>Upreti's journey into the realm of technology began over a decade ago when he founded his first IT startup in 2007 A.D. as PRACAS Infosys in Biratnagar. Recognizing the potential of technology to bridge gaps and catalyze progress, he embarked on a mission to leverage digital solutions to address local challenges and foster economic development. His vision was not merely to create successful businesses but to effect meaningful change in his community.</p>
          <img src={pracasSignature} alt="pracas-signature" className='h-auto w-[15%]' />
          <p className='font-bold text-[1rem]'>Pracas Upreti</p>
          <div className='flex gap-2'>
            <Link to="https://t.me/pracasupreti" target="_blank"> <img src={telegram} alt="telegram" className='h-[24px] w-24px]' /></Link>
            <Link to="https://x.com/pracas" target="_blank"><img src={tweeter} alt="tweeter" className='h-[24px] w-24px]' /></Link>
            <Link to="https://linkedin.com/in/pracasupreti" target="_blank"><img src={linkedIn} alt="linkedIn" className='h-[24px] w-24px]' /></Link>

          </div>
        </div>
        <div className='w-[38%] max-lg:w-[33%] hidden md:block'>
          <img src={pracas} alt="pracas" className='w-full h-auto' />
        </div>
      </section>

    </>
  )
}

export default About