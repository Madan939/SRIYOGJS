import React from 'react'
import { Link } from 'react-router-dom'

function Testimonials() {
  return (
    <>
    <section className='w-full mx-auto mt-[120px] bg-[#8D8D8D] mb-6'>
            <div className="container mx-auto py-[40px]">
              <h4 className='text-[36px] font-semibold text-white'><Link to={'/internship'}>Internship</Link> / <span className='text-[20px] font-[400] text-[#eeee]'>Testimonials</span></h4>
            </div>
          </section>
      <section className='my-6 max-w-[1400px] mx-auto bg-[#9CD4F5]'>
        <div className='container mx-auto py-4'>
          <div className='flex justify-center gap-10 items-center flex-wrap'>
            <div className='flex gap-3 items-center'>
              <p className='text-[18px]'>You are viewing this website as a</p>
              <div className='h-[20px] w-[30px] bg-[#211545]'></div>
              <p className='text-[18px]'>Domestic Student</p>
            </div>
            <div className='underline text-[16px] font-bold'>Switch to International</div>
          </div>
        </div>
      </section>

      <section className='max-w-[1400px] mx-auto bg-white my-6'>
        <div className="container mx-auto py-2">
          <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-14 gap-y-6'>
            <div>
              <img src="/internship/assets/testimonials/testimonials_1.png" alt="" />
            </div>
            <div className='px-6 flex flex-col gap-4 self-center'>
              <h3 className='text-[26px] font-bold'>Career support</h3>
              <p className='text-[#4b4b4b] text-[16px]'>StudyPerth's Careers Connect services are your gateway to a thriving career in Western Australia. With a comprehensive range of resources partnerships, and support programs, we are dedicated to helping you achieve your career goals.</p>
              <div className='flex flex-col gap-3 text-[16px]'>
                <div className='flex items-start gap-3'>
                  <div className='p-2 mt-1 rounded-[100%] bg-[#36D0FF]'></div>
                  <p>Career Advice - one-on-one sessions: Designed to provide you with quick and personalised career guidance, helping you identify your strengths and opportunities for growth.</p>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='p-2 mt-1 rounded-[100%] bg-[#36D0FF]'></div>
                  <p>Professional Development: We offer workshops, seminars, and training programs to equip you with the skills and knowledge necessary to excel in your chosen field.</p>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='p-2 mt-1 rounded-[100%] bg-[#36D0FF]'></div>
                  <p>Careers Connect Portal: To help you achieve your career dreams check out our FREE comprehensive employability portal packed with everything you need to launch your career.</p>
                </div>
              </div>
              <Link className='text-center w-[194px] rounded-[15px] py-[25px] bg-[#FCDB2E]'>Learn more</Link>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[1400px] mx-auto bg-[#F0F0F0] my-6'>
        <div className="container mx-auto">
          <div className='grid lg:grid-cols-2 gap-6 py-4'>
            <div className='mt-12'>
              <h2 className='text-[26px] font-bold pe-6 text-black'>Launceston campuses</h2>
              <p className='text-[18px] my-6 pe-6'>Launceston is a vibrant city in a picturesque
                region with an abundance of tasting, cultural, and outdoor experiences. Our campuses here offer hands-on learning connected to the local strengths and people that make it unique.</p>
            </div>
            <div>
              <img className='w-full' src="/internship/assets/testimonials/testimonials_2.png" alt="testimonials_2" />
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[1400px] mx-auto bg-white my-6'>
        <div className="container mx-auto py-4">
          <div className='flex flex-col lg:flex-row md:flex-row gap-6'>
            <div className='lg:w-[50%]'>
              <img className='h-[365px] w-full' src="/internship/assets/testimonials/testimonials_3.png" alt="testimonials_3" />
              <p className='text-[#B0B0B3] my-2 text-[18px] font-semibold'>ALUMNI</p>
              <p className='text-[24px] font-medium'>Alumni Video series: Meet Steve Wu</p>
              <p className='text-[16px] font-medium text-[#A5A7A9]'>This month we meet Steve Wu who studied Cuisine....</p>
              <Link className='underline text-[#958864] text-[20px] font-medium mb-6'>READ MORE</Link>
            </div>

            <div className='lg:w-[100%]'>
              <img className='h-[365px] w-full' src="/internship/assets/testimonials/testimonials_4.png" alt="testimonials_4" />
              <p className='text-[#B0B0B3] my-2 text-[18px] font-semibold'>NEWSI</p>
              <p className='text-[24px] font-medium'>New short courses coming up across Australia</p>
              <p className='text-[16px] font-medium text-[#A5A7A9]'>Our short courses across Adelaide, Sydney and Melbourne are in full swing and selling out quickly....</p>
              <Link className='underline text-[#958864] text-[24px] font-medium'>READ MORE</Link>
            </div>

            <div className='lg:w-[50%]'>
              <img className='h-[365px] w-full' src="/internship/assets/testimonials/testimonials_5.png" alt="testimonials_5" />
              <p className='text-[#B0B0B3] my-2 text-[18px] font-semibold'>ALUMNI</p>
              <p className='text-[24px] font-medium'>Alumni Video series: Meet Daeun  Kang</p>
              <p className='text-[16px] font-medium text-[#A5A7A9]'>Meet Daeun Kang a proud graduate of Le...</p>
              <Link className='underline text-[#958864] text-[24px] font-medium'>READ MORE</Link>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[1400px] mx-auto bg-white my-6'>
        <div className="container mx-auto bg-[#E9E9E9] pt-3">
          <h3 className='font-[600] text-[26px] my-6 underline'>GRADUATE ADMISSIONS</h3>
          <div className='grid lg:grid-cols-3 gap-4 gap-y-6 md:grid-cols-3 sm:grid-cols-2'>
            <div className='w-full'>
              <img className='w-full' src="/internship/assets/testimonials/testimonials_6.png" alt="testimonials_6" />
              <p className='py-5 bg-white px-6 text-[20px]'>How to apply?</p>
              <div className='flex gap-2 my-2'>
                <p className='text-[#C1CED6] bg-white text-[18px] w-full px-3'>GRADUATE COLLEGE</p>
                <img className='w-[28px] bg-white' src="/internship/assets/icons/share.svg" alt="share" />
              </div>
            </div>

            <div className='w-full'>
              <img className='w-full' src="/internship/assets/testimonials/testimonials_7.png" alt="testimonials_7" />
              <p className='py-5 bg-white px-6 text-[20px]'>Find program  contacts</p>
              <div className='flex gap-2 my-2'>
                <p className='text-[#C1CED6] bg-white text-[18px] w-full px-3'>GRADUATE COLLEGE</p>
                <img className='w-[28px] bg-white' src="/internship/assets/icons/share.svg" alt="share" />
              </div>
            </div>

            <div className='w-full'>
              <img className='w-full' src="/internship/assets/testimonials/testimonials_8.png" alt="testimonials_8" />
              <p className='py-5 bg-white px-6 text-[20px]'>Funding Opportunities</p>
              <div className='flex gap-2 my-2'>
                <p className='text-[#C1CED6] bg-white text-[18px] w-full px-3'>GRADUATE COLLEGE</p>
                <img className='w-[28px] bg-white' src="/internship/assets/icons/share.svg" alt="share" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
