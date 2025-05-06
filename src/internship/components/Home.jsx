import React, { useRef } from "react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

function Home() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <section className="w-full mx-auto h-[700px]">
        <img
          className="w-full h-[716px] object-cover scale-x-[-1]"
          src="/internship/assets/banner/banner.png"
          alt="banner"
        />
        <div className="container mx-auto">
          <div className="h-[816px] relative top-[-560px]">
            <p className="text-[24px] text-[#113785] h-[73px]">
              Build Your Own Career
            </p>
            <p className="text-[35px] tracking-normal h-[149px] text-[#1E3A5D] font-[700]">
              DEDICATION,
              <br /> DISCIPLINE & <br /> DETERMINATION
            </p>
          </div>
        </div>
      </section>

      {/* <section className='w-[full]  bg-[#11294D] relative h-auto py-4 overflow-hidden'>
                <section className='container mx-auto relative'>
                    <h4 className='text-[18px] sm:text-[18px] font-[700] text-white'>
                        Knowledge PARTNERS
                    </h4>

                    
                    <button
                        ref={prevRef}
                        className="p-4 absolute left-[-50px]  top-[65%] z-10 bg-white rounded-full hover:bg-gray-100 transform -translate-y-1/2"
                    >
                        <img className='w-[20px] sm:w-[25px] mx-auto' src="/internship/assets/icons/left-arrow.svg" alt="Previous" />
                    </button>

                    <button
                        ref={nextRef}
                        className=" absolute right-[-50px] top-[65%] z-10 bg-white p-4 rounded-full hover:bg-gray-100 transform -translate-y-1/2"
                    >
                        <img className='w-[20px] sm:w-[25px] mx-auto' src="/internship/assets/icons/right-arrow.svg" alt="Next" />
                    </button>

                    <Swiper
                        modules={[Navigation, A11y, Autoplay]}
                        spaceBetween={20}
                        breakpoints={{
                            320: { slidesPerView: 2 },
                            480: { slidesPerView: 3 },
                            640: { slidesPerView: 4 },
                            768: { slidesPerView: 5 },
                            1024: { slidesPerView: 6 },
                        }}
                        loop={true}
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        className='w-full max-w-[1400px] mx-auto mt-4'
                    >
                        <SwiperSlide><img className='h-[60px] sm:h-[70px] w-full ms-0' src="/internship/assets/partners/1.png" alt="1" /></SwiperSlide>
                        <SwiperSlide><img className='h-[60px] sm:h-[70px] w-full ms-0' src="/internship/assets/partners/2.png" alt="2" /></SwiperSlide>
                        <SwiperSlide><img className='h-[60px] sm:h-[70px] w-full ms-0' src="/internship/assets/partners/3.png" alt="3" /></SwiperSlide>
                        <SwiperSlide><img className='h-[60px] sm:h-[70px] w-full ms-0' src="/internship/assets/partners/4.png" alt="4" /></SwiperSlide>
                        <SwiperSlide><img className='h-[60px] sm:h-[70px] w-full ms-0' src="/internship/assets/partners/5.png" alt="5" /></SwiperSlide>
                        <SwiperSlide><img className='h-[60px] sm:h-[70px] w-full ms-0' src="/internship/assets/partners/6.png" alt="6" /></SwiperSlide>
                        <SwiperSlide><img className='h-[60px] sm:h-[70px] w-full ms-0' src="/internship/assets/partners/1.png" alt="1" /></SwiperSlide>
                        <SwiperSlide><img className='h-[60px] sm:h-[70px] w-full ms-0' src="/internship/assets/partners/2.png" alt="2" /></SwiperSlide>
                        <SwiperSlide><img className='h-[60px] sm:h-[70px] w-full ms-0' src="/internship/assets/partners/3.png" alt="3" /></SwiperSlide>
                        <SwiperSlide><img className='h-[60px] sm:h-[70px] w-full ms-0' src="/internship/assets/partners/4.png" alt="4" /></SwiperSlide>
                        <SwiperSlide><img className='h-[60px] sm:h-[70px] w-full ms-0' src="/internship/assets/partners/5.png" alt="5" /></SwiperSlide>
                        <SwiperSlide><img className='h-[60px] sm:h-[70px] w-full ms-0' src="/internship/assets/partners/6.png" alt="6" /></SwiperSlide>
                    </Swiper>
                </section>
            </section> */}

      <section className="max-w-[1400px] bg-white mx-auto my-6">
        <div className="lg:flex justify-between container mx-auto gap-8">
          <div className="lg:w-[46%] self-center">
            <h4 className="text-[32px] font-[500] mb-3 inline-block">
              Internship Programs
            </h4>
            <p className="text-[18px] mb-6 text-justify">
              SRIYOG Consulting accepts internship students from all major
              universities anywhere from the world those who can speak and
              communicate in English. Our Internship program is 100 days
              Hybrid/Online program where interns contributes their valu-able
              time to build their own career woking in real time projects which
              they can keep in their portfolio / CVs/Resume. <br /> <br />
              Online program where interns contributes their valuable time to
              build their own career woking in real time projects which they can
              keep in their Portfolio/CVs/Resume.
            </p>
            <span className="bg-[#11294D] px-2 py-2 text-white text-[20px] rounded-[15px] font-[500]">
              Become a Partner
            </span>
          </div>
          <div className="lg:w-[48%] lg:mt-[8px] mt-8">
            <img
              className="w-full"
              src="/internship/assets/home/internship_program.png"
              alt="internship program"
            />
            <p className="text-[16px] font-[500] mt-2 ">
              Online program where interns contributes their valuable time to
              build their own
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto bg-white bg-no-repeat relative bg-[url('/internship//assets/home/online&campus.png')] overflow-hidden min-h-[700px] lg:min-h-[895px]">
        <div className="container mx-auto">
          {/* Decorative elements */}
          <div className="w-[20%] h-[23px] bg-[#1ECAD4] absolute lg:top-[85px] left-0 top-[90px] rotate-[-5deg]"></div>
          <div className="absolute top-14 w-[1500px] -left-10 h-[780px] z-0 bg-[linear-gradient(to_right,_#52229880_8%,_#CABDD880_39%,_#F2F1ED80_71%)] rotate-[-5deg]"></div>
          <div className="w-[33%] h-[23px] hidden lg:block bg-[#1ECAD4] absolute bottom-[73px] right-0 rotate-[-5deg]"></div>

          {/* Main content */}
          <div className="z-10 absolute py-10 top-0 transform translate-y-1/2">
            <h4 className="text-[18px] sm:text-[18px] text-[#FFED01] mt-20 lg:mt-[298px] font-medium">
              Online and On Campus
            </h4>
            <p className="text-[24px] sm:text-[30px] text-white mt-4 font-medium leading-snug">
              Get a Quality Education <br className="hidden sm:block" />
              that’s accessible no matter <br className="hidden sm:block" />
              where you are
            </p>
            <p className="text-[14px] sm:text-[16px] text-white mt-4 max-w-md text-justify">
              Backend by the legacy of our traditional campus, GCU is an
              institutionally accredited university. Whether you choose to study
              online or at our vibrant Phoenix campus, GCU wants to make your
              education.
            </p>

            {/* Stats Section */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-16 mt-10 sm:mt-[58px]">
              <div className="ps-3 border-s-[3px] border-[#FFED01]">
                <h4 className="text-[#FFED01] font-semibold text-[22px] sm:text-[27px]">
                  Top 25 in USA
                </h4>
                <p className="text-[12px] text-white mt-1">
                  GCU ranked #21 best college <br /> campus in America for 2025+
                </p>
              </div>

              <div className="ps-3 border-s-[3px] border-[#FFED01]">
                <h4 className="text-[#FFED01] font-semibold text-[22px] sm:text-[27px]">
                  $1.7 billion
                </h4>
                <p className="text-[12px] text-white mt-1">
                  $1.7 billion invested in new <br /> infrastructure and
                  technology
                </p>
              </div>

              <div className="ps-3 border-s-[3px] border-[#FFED01]">
                <h4 className="text-[#FFED01] font-semibold text-[22px] sm:text-[27px]">
                  $330+ Million
                </h4>
                <p className="text-[12px] text-white mt-1">
                  Students received over $330+ <br /> Million in scholarships in
                  2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto bg-white mt-[41px]">
        <div className="container mx-auto">
          <h2 className="text-[26px] text-black font-bold">Testimonials</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-6 mx-auto">
            <div className="text-[16px] mt-[35px] w-full lg:mx-0">
              <div className="h-[225px]">
                <img
                  className="w-full h-full object-cover"
                  src="/internship/assets/home/image_1.png"
                  alt="image_image_1"
                />
              </div>
              <p className="text-[#183053] text-justify pt-3">
                I enhanced my skills as a web developer... Lalita Ghimire,
                Butwal Multiple Campus
              </p>
              <h4 className="text-[#102A4F] font-bold text-[16px] mt-2">
                React Js Developer
              </h4>
            </div>

            <div className="text-[16px] mt-[35px] w-full lg:mx-0">
              <div className="h-[228px]">
                <img
                  className="w-full h-full object-cover"
                  src="/internship/assets/home/image_2.png"
                  alt="image_image_2"
                />
              </div>
              <p className="text-[#183053] pt-3">
                I enhanced my skills as a web developer... Anil Magar, Pokhara
                Multiple Campus
              </p>
              <h4 className="text-[#102A4F] font-bold text-[16px] mt-2">
                React Native Developer
              </h4>
            </div>

            <div className="text-[16px] mt-[35px] w-full lg:mx-0">
              <div className="h-[225px]">
                <img
                  className="w-full h-full object-cover"
                  src="/internship/assets/home/image_3.png"
                  alt="image_image_3"
                />
              </div>
              <p className="text-[#183053] pt-3">
                I enhanced my skills as a web developer... Kritika Sharma,
                Padmakanya Multiple Campus
              </p>
              <h4 className="text-[#102A4F] font-bold text-[16px] mt-2">
                UI/UX designer
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto bg-white mt-[38px]">
        <div className="container mx-auto">
          <h4 className="text-[24px] font-bold text-black">
            Recent Intern Graduates
          </h4>
          <div className="flex justify-between mx-auto flex-wrap gap-y-4 text-center mt-[52px] mb-7">
            <div className="w-[120px]">
              <img
                className="w-full"
                src="/internship/assets/home/graduates/image_1.png"
                alt="Shriya"
              />
              <p className="text-[18px] font-semibold text-[#4B4B4B] mt-1">
                Shriya
              </p>
            </div>

            <div className="w-[120px]">
              <img
                className="w-full"
                src="/internship/assets/home/graduates/image_2.png"
                alt="Diya"
              />
              <p className="text-[18px] font-semibold text-[#4B4B4B] mt-1">
                Diya
              </p>
            </div>

            <div className="w-[120px]">
              <img
                className="w-full"
                src="/internship/assets/home/graduates/image_3.png"
                alt="Supriya"
              />
              <p className="text-[18px] font-semibold text-[#4B4B4B] mt-1">
                Supriya
              </p>
            </div>

            <div className="w-[120px]">
              <img
                className="w-full"
                src="/internship/assets/home/graduates/image_4.png"
                alt="Priyanka"
              />
              <p className="text-[18px] font-semibold text-[#4B4B4B] mt-1">
                Priyanka
              </p>
            </div>

            <div className="w-[120px]">
              <img
                className="w-full"
                src="/internship/assets/home/graduates/image_5.png"
                alt="Sanjay"
              />
              <p className="text-[18px] font-semibold text-[#4B4B4B] mt-1">
                Sanjay
              </p>
            </div>

            <div className="w-[120px]">
              <img
                className="w-full"
                src="/internship/assets/home/graduates/image_6.png"
                alt="Prince"
              />
              <p className="text-[18px] font-semibold text-[#4B4B4B] mt-1">
                Prince
              </p>
            </div>

            <div className="w-[120px]">
              <img
                className="w-full"
                src="/internship/assets/home/graduates/image_7.png"
                alt="John"
              />
              <p className="text-[18px] font-semibold text-[#4B4B4B] mt-1">
                John
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto bg-white mb-6">
        <div className="bg-[#F2F0F1] py-2 rounded-[5px] container mx-auto">
          <div className="flex justify-evenly flex-wrap items-center gap-y-6">
            <div className="flex gap-2 lg:w-[85%]">
              <img src="/internship/assets/icons/plant.svg" alt="plant" />
              <div>
                <h4 className="text-[18px] font-semibold text-[#11294D]">
                  Top 10 tips to know before you face any interview remotely.
                </h4>
                <p className="text-[15px] font-semibold text-[#11294D]">
                  Top 10 tips to know before you face any interview remotely.
                  Top 10 tips to know before you face <br /> any interview
                  remotely. Top 10 tips to know before you face any interview
                  remotely.
                </p>
              </div>
            </div>
            <div className="rounded-[15px] bg-[#11294D] text-white px-3 py-1 text-[18px] font-semibold lg:w-[12%] mx-auto text-center">
              Explore Now
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
