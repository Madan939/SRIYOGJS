import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <section className='w-full mx-auto mt-[120px] bg-[#8D8D8D] mb-6'>
        <div className="container mx-auto py-[40px]">
          <h4 className='text-[36px] font-semibold text-white'><Link to={'/internship'}>Internship</Link> / <span className='text-[20px] font-[400] text-[#eeee]'>About</span></h4>
        </div>
      </section>
      <section className='w-full mx-auto bg-white my-6'>
        <div className=' bg-[#F4F4F4] my-6 container mx-auto'>
          <div className='grid gap-x-14 lg:grid-cols-2'>
            <div className='w-full mt-[42px]'>
              <h2 className='text-[36px] font-semibold text-black'>Openings and <br /> opportunities</h2>
              <div className='bg-[#E3E5E4] p-1 mt-[79px]'>
                <div className='h-[385px] mb-[28px]'>
                  <img className='w-full h-full object-cover' src="/internship//assets/about/about_1.png" alt="job listing" />
                </div>
                <h4 className='text-[28px] ms-[20px] h-[48px]'>Job listings</h4>
                <p className='text-[18px] ms-[20px] mb-[20px] mt-1'>A wide range of exciting and challenging job opportunities support our world-class academic environment</p>
              </div>
            </div>
            <div className='w-full mt-[42px] p-1'>
              <p className='font-semibold text-[16px]'>SRIYOG, which was registered under the Office of the Company Registrar in 2018 to establish direct contact between the people who work and hire skilled manpower by profiling them</p>

              <div className='flex mt-[20px] items-center gap-4 my-1'>
                <img className='p-2 bg-[#646F77] rounded-full w-[30px] invert' src="/internship//assets/icons/right-arrow.svg" alt="right-arrow" />
                <p className='text-[18px] font-semibold'>Visit Talent Acquisition and Outreach</p>
              </div>
              <div className='mt-10'>
                <div className='bg-[#E3E5E4] p-1 mt-[25px]'>
                  <div className='mb-[28px] h-[385px]'>
                    <img className='w-full h-full object-cover' src="/internship//assets/about/about_2.png" alt="job listing" />
                  </div>
                  <h4 className='text-[28px] ms-[20px] h-[48px]'>Why SRIYOG?</h4>
                  <p className='text-[18px] ms-[20px] mt-1 mb-[10px]'>When you work at SRIYOG, you join a vibrant community that advances our world- changing mission, inspires innovation and collaboration, and builds skills and expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full bg-white mb-6 mt-12 mx-auto'>
        <div className='bg-[#F4F4F4] container mx-auto py-8'>
          <div className='grid lg:grid-cols-2 md:grid-cols-2 flex-wrap gap-8'>
            <div>
              <img className='w-full rounded' src="/internship//assets/about/about_3.png" alt="about_3" />
            </div>
            <div className='flex flex-col gap-1'>
              <h4 className='text-[18px] text-[#000] font-semibold'>MEET HARVARD</h4> <br />
              <h2 className='text-[28px] text-[#000] mt-[-10px]'>Triple threat</h2>
              <p className='text-[18px] text-[#4C4B4B]'>Kate Penner is an undergraduate science research advisor, math tutor, and professional ballet dancer.</p>
              <div className='flex mt-[22px] items-center gap-4 mb-0'>
                <img className='p-2 bg-[#646F77] rounded-full w-[30px] invert' src="/internship//assets/icons/right-arrow.svg" alt="right-arrow" />
                <p className='text-[18px]'>Meet more people from this Harvard community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full bg-white my-[43px] mx-auto'>
        <div className='container mx-auto bg-[#F4F4F4] py-4'>
          <h2 className='text-[24px] font-semibold text-black'>Robot revolution</h2>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 my-4'>
            <div className='relative'>
              <img className='w-full' src="/internship//assets/about/about_4.png" alt="about_4" />
              <div className='w-full h-full z-0 bg-[#33333371] absolute top-0 left-0 right-0'></div>
              <div className='absolute bottom-6 z-10'>
                <h3 className='text-[26px] text-white font-semibold px-4 text-wrap h-auto inline-block '>The first autonomous, entirely soft robot</h3>
                <div className='flex mt-[22px] items-center gap-4 mb-0 px-2'>
                  <img className='p-2 bg-[#646F77] rounded-full w-[40px] invert' src="/internship//assets/icons/right-arrow.svg" alt="right-arrow" />
                  <p className='text-[20px] text-white'>Learn more about soft robotics</p>
                </div>
              </div>
            </div>

            <div className='relative'>
              <img className='w-full' src="/internship//assets/about/about_5.png" alt="about_5" />
              <div className='absolute bottom-6 z-10'>
                <h3 className='text-[26px] text-white font-semibold px-4 text-wrap h-auto inline-block '>Pioneering robots to improve mobility</h3>
                <div className='flex mt-[22px] items-center gap-4 mb-0 px-2'>
                  <img className='p-2 bg-[#646F77] rounded-full w-[40px] invert' src="/internship//assets/icons/right-arrow.svg" alt="right-arrow" />
                  <p className='text-[20px] text-white'>Learn more about soft robotics</p>
                </div>
              </div>
            </div>

            <div className='relative'>
              <img className='w-full' src="/internship//assets/about/about_6.png" alt="about_6" />
              <div className='w-full h-full z-0 bg-[#333333a2] absolute top-0'></div>
              <div className='absolute bottom-6 z-10'>
                <h3 className='text-[26px] text-white font-semibold px-4 text-wrap h-auto inline-block '>The first autonomous, navigated medical robot</h3>
                <div className='flex mt-[22px] items-center gap-4 mb-0 px-2'>
                  <img className='p-2 bg-[#646F77] rounded-full w-[40px] invert' src="/internship//assets/icons/right-arrow.svg" alt="right-arrow" />
                  <p className='text-[20px] text-white'>Learn more about soft robotics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full bg-white mx-auto'>
        <div className='container mx-auto mb-6'>
          <div className='flex flex-wrap gap-6 gap-y-10'>
            <div className='lg:w-[65%]'>
              <h2 className='text-[24px] text-[#5B7FA3] font-bold'>Upcoming Tech Events</h2>
              <div className='flex flex-col gap-4 pt-[36px]'>

                <div className='flex justify-between w-full items-center'>
                  <div className='flex gap-2 items-center'>
                    <div className='px-2 text-center text-[20px]'>
                      <p className='text-[#5B7FA3] leading-none'>MAR</p>
                      <p className='text-[#2B455F] font-bold leading-none'>28</p>
                    </div>
                    <div className='border-s-2 ps-5 border-black text-[20px]'>
                      <p>Fri, Feb 28 - Sun, Mar 30, All Day</p>
                      <p className='text-[#5B7FA3] font-bold'>Ramadan (Islam)</p>
                    </div>
                  </div>
                  <img className='lg:ms-14 w-[40px]' src="/internship/assets/icons/right-direction.svg" alt="right-arrow" />
                </div>

                <hr />

                <div className='flex justify-between w-full items-center'>
                  <div className='flex gap-2 items-center'>
                    <div className='px-2 text-center text-[20px]'>
                      <p className='text-[#5B7FA3] leading-none'>MAR</p>
                      <p className='text-[#2B455F] font-bold leading-none'>28</p>
                    </div>
                    <div className='border-s-2 ps-5 border-black text-[20px]'>
                      <p>Fri, Feb 28 - Sun, Mar 30, All Day</p>
                      <p className='text-[#5B7FA3] font-bold'>Ramadan (Islam)</p>
                    </div>
                  </div>
                  <img className='lg:ms-14 w-[40px]' src="/internship/assets/icons/right-direction.svg" alt="right-arrow" />
                </div>

                <hr />

                <div className='flex justify-between w-full items-center'>
                  <div className='flex gap-2 items-center'>
                    <div className='px-2 text-center text-[20px]'>
                      <p className='text-[#5B7FA3] leading-none'>MAR</p>
                      <p className='text-[#2B455F] font-bold leading-none'>28</p>
                    </div>
                    <div className='border-s-2 ps-5 border-black text-[20px]'>
                      <p>Fri, Feb 28 - Sun, Mar 30, All Day</p>
                      <p className='text-[#5B7FA3] font-bold'>Ramadan (Islam)</p>
                    </div>
                  </div>
                  <img className='lg:ms-14 w-[40px]' src="/internship/assets/icons/right-direction.svg" alt="right-arrow" />
                </div>

                <hr />

                <div className='flex justify-between w-full items-center'>
                  <div className='flex gap-2 items-center'>
                    <div className='px-2 text-center text-[20px]'>
                      <p className='text-[#5B7FA3] leading-none'>MAR</p>
                      <p className='text-[#2B455F] font-bold leading-none'>28</p>
                    </div>
                    <div className='border-s-2 ps-5 border-black text-[20px]'>
                      <p>Fri, Feb 28 - Sun, Mar 30, All Day</p>
                      <p className='text-[#5B7FA3] font-bold'>Ramadan (Islam)</p>
                    </div>
                  </div>
                  <img className='lg:ms-14 w-[40px]' src="/internship/assets/icons/right-direction.svg" alt="right-arrow" />
                </div>

              </div>
            </div>

            <div className='lg:w-[30%]'>
              <h2 className='text-[24px] text-[#5B7FA3] font-bold'>Latest Update</h2>
              <ul className='flex flex-col gap-3 text-[#576B87] text-[16px] mt-[36px]'>
                <li><Link>Campus Belonging</Link></li>
                <li><Link>Request a Training or Workshop</Link></li>
                <li><Link>Request Co-Sponsorship</Link></li>
                <li><Link>Religious, Spiritual, and Secular Inclusion</Link></li>
                <li><Link>Land Acknowledgement for Events</Link></li>
                <li><Link>Communications Protocol with Native Nations</Link></li>
                <li><Link>Submit a Request for a Reasonable</Link></li>
                <li><Link>Accommodation</Link></li>
                <li><Link>Report a Barrier to Access</Link></li>
                <li><Link>Submit a Title VI Misconduct Report</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
