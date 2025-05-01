import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade, FreeMode, Navigation, Pagination } from 'swiper/modules';
import first from "/assets/images/vmgo/1.jpg";
import second from "/assets/images/vmgo/2.jpg";
import vision from "/assets/images/vmgo/vision.png";
import mission from "/assets/images/vmgo/mission.png";
import goal from "/assets/images/vmgo/goal.png";
import objective from "/assets/images/vmgo/objective.png";
const Vmgo = () => {
   useEffect(()=>{
      document.title="SRIYOG VMGO | Professional Marketplace"
    },[]);
  return (
    <>
      <section className='mb-[56px]'>
        <Swiper
          loop={true}
          navigation={true}
          freeMode={true}
          effect={'fade'}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            reverseDirection: true,
            pauseOnMouseEnter: true,
          }}
          speed={1000}
          modules={[Navigation, Pagination, FreeMode, Autoplay, EffectFade]} className="mySwiper h-[80vh] max-lg:h-auto w-full object-fill">
          <SwiperSlide>
            <img src={first} alt="first" className='w-full h-auto' />
          </SwiperSlide>
          <SwiperSlide><img src={second} alt="second" className='w-full h-auto' /></SwiperSlide>
        </Swiper>
      </section>
      <p className='text-center text-[1.6rem] font-bold leading-tight mb-[56px] max-md:w-[89%] mx-auto'>Vision, Mission, Goals and Objectives</p>
      
      <section className='mb-[56px] max-w-[1140px] mx-auto max-lg:w-[88%] max-md:w-[89%]'>
        <div className='flex flex-wrap justify-around mb-[56px]'>
          <img src={vision} alt="vision" className='max-md:w-[35%] max-md:p-4'/>
          <img src={mission} alt="mission" className='max-md:w-[35%] max-md:p-4' />
          <img src={goal} alt="gola" className='max-md:w-[35%] max-md:p-4' />
          <img src={objective} alt="objective" className='max-md:w-[35%] max-md:p-4'/>
        </div>
        <div className='flex flex-wrap justify-between mb-[56px] items-center mx-auto'>
          <div className='hidden md:block max-lg:w-[40%]'>
            <div className='lg:w-[43%] md:w-[43%] mx-auto flex justify-center items-center'>
            <img src={vision} alt="vision" />
            </div>          
          </div>
          <div className='bg-[#efefef] flex justify-center items-center lg:w-[57%] md:w-[57%] max-md:w-full max-lg:w-[60%] rounded-md'>
            <div className=' m-[70px] max-lg:m-8 max-md:my-8 max-md:mx-9'>
              <p className='text-[1.6rem] font-bold leading-tight mb-[8px]'>Vision</p>
              <p className='text-justify mb-[8px] '>Our vision at SRIYOG is to create a future where every individual has access to opportunities that match their skills and aspirations.     </p>
              <p className='text-justify '>We envision a world where people searching for any service can easily connect with skilled professionals rather than hiring hefty commission from any service marketplace, and where an individual can have his/her digital profile showcasing their expertise.</p>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap justify-between mb-[56px] items-center'>
          <div className='bg-[#8b181b] flex justify-center items-center lg:w-[57%] md:w-[57%] rounded-md '>
            <div className=' m-[70px] max-lg:m-8 max-md:my-8 max-md:mx-9'>
              <p className='text-[1.6rem] font-bold leading-tight mb-[8px] text-white'>Mission</p>
              <p className='text-justify text-white '>At SRIYOG, our mission is to revolutionize the way work is connected with
                workers. We strive to provide a seamless platform that empowers individuals and businesses to find
                the perfect match for their needs, fostering opportunities for growth, collaboration, and success.
              </p>
            </div>
          </div>
          <div className='hidden md:block  max-lg:w-[40%]'>
            <div className='lg:w-[43%] mx-auto md:w-[43%] flex justify-center items-center'>
            <img src={mission} alt="mission" />
            </div>          
          </div>
        </div>
        <div className='flex flex-wrap justify-between mb-[56px] items-center'>
        <div className='hidden md:block max-lg:w-[35%]'>
            <div className='lg:w-[43%] md:w-[43%] mx-auto flex justify-center items-center'>
            <img src={goal} alt="goal" />
            </div>          
          </div>
          <div className='bg-[#efefef] flex justify-center items-center lg:w-[57%] max-lg:w-[65%] max-md:w-full rounded-md'>
            <div className=' m-[70px] max-lg:m-6 max-md:my-8 max-md:mx-10'>
              <p className='text-[1.6rem] font-bold leading-tight mb-[8px]'>Goals</p>
              <ul className="list-disc space-y-[8px]">
                <li>
                  <p className='font-bold'>Facilitate Connections</p>
                  <p className='text-justify'>We believe in the power of direct communication and collaboration with businesses and professionals. Our platform provides tools and features that enable transparent and efficient interactions, fostering strong connections and mutual understanding.</p>
                </li>
                <li>
                  <p className='font-bold'>Promote Transparency</p>
                  <p className='text-justify'>Transparency is at the core of our operations at SRIYOG. We are dedicated to promoting transparency in all interactions and transactions on our platform. Through robust verification processes, we authenticate user profiles and ensure the accuracy of job listings, building trust among our users.</p>
                </li>
                <li>
                  <p className='font-bold'> Empower Individuals</p>
                  <p className='text-justify'>
                    We are committed to providing equal access to opportunities for businesses and professionals from diverse backgrounds. Our platform offers resources and support to help underserved communities access and utilize our services effectively, promoting inclusivity and diversity.
                  </p>
                </li>
                <li>
                  <p className='font-bold'>Drive Innovation</p>
                  <p className='text-justify'>
                    Innovation drives our efforts at SRIYOG as we continuously explore new technologies and trends to enhance our platform's capabilities. By staying ahead of the curve, we ensure that our users have access to cutting-edge solutions and the best possible experience.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap justify-between  items-center'>
          <div className='bg-[#8b181b] flex justify-center items-center lg:w-[57%] max-lg:w-[65%] max-md:w-full rounded-md '>
            <div className=' m-[70px] max-lg:m-6 max-md:my-8 max-md:mx-10'>
              <p className='text-[1.6rem] font-bold leading-tight mb-[8px] text-white'>Objectives</p>
              <ul className="list-disc space-y-[8px]">
                <li className='text-white'>
                  <p className='font-bold text-white'>Expand Reach</p>
                  <p className='text-justify text-white'>Expand our reach to new markets and demographics, ensuring that
                    individuals and businesses from all backgrounds have access to our platform.</p>
                </li>
                <li className='text-white'>
                  <p className='font-bold text-white'>Enhance User Experience</p>
                  <p className='text-justify text-white'>Continuously improve the user experience on our platform, making it
                    easier and more intuitive for users to find what they're looking for.</p>
                </li>
                <li className='text-white'>
                  <p className='font-bold text-white'>Build Partnerships</p>
                  <p className='text-justify text-white'>Forge strategic partnerships with businesses, organizations, and
                    educational institutions to create new opportunities for our users.</p>
                </li>
                <li className='text-white'>
                  <p className='font-bold text-white'>Promote Diversity and Inclusion</p>
                  <p className='text-justify text-white'>Promote diversity and inclusion within our community, ensuring that
                    everyone has an equal opportunity to succeed.</p>
                </li>
                <li className='text-white'>
                  <p className='font-bold text-white'>Drive Customer Satisfaction</p>
                  <p className='text-justify text-white'>Prioritize customer satisfaction by actively listening to feedback and
                    addressing the needs and concerns of our users.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='hidden md:block max-lg:w-[35%] '>
            <div className='lg:w-[43%] md:w-[43%]  mx-auto flex justify-center items-center'>
            <img src={objective} alt="objective" />
            </div>          
          </div>

        </div>
      </section>
    </>
  )
}

export default Vmgo