import React from 'react'
import { Link } from 'react-router-dom'

function Eligibility() {
  return (
    <>
      <section className='w-full mx-auto mt-[120px] bg-[#8D8D8D] mb-6'>
        <div className="container mx-auto py-[40px]">
          <h4 className='text-[36px] font-semibold text-white'><Link to={'/internship'}>Internship</Link> / <span className='text-[20px] font-[400] text-[#eeee]'>Eligibility</span></h4>
        </div>
      </section>

      <section className='bg-[#F2F7FA] max-w-[1400px] my-6 mx-auto'>
        <div className="container mx-auto py-8">
          <p className='text-[28px] text-[#281743]'>Studying psychology courses online</p>
          <div className='grid gap-5 lg:grid-cols-2 my-4'>
            <div>
              <img className='w-full h-full' src="/internship/assets/eligibility/eligibility_1.png" alt="eligibility_1" />
            </div>
            <div className='text-[18px] text-wrap text-justify  flex flex-col gap-2 mt-[20px]'>
              <p>At CDU, you have the flexibility to study your psychology degree as it suits you, whether that be full-time, part-time, online or on campus.</p>
              <p>Learn remotely or take part in a hybrid study model where you learn online as well as in-person. CDU can facilitate your learning in a way that suits you best. Your lectures are recorded for convenience, with livestreamed</p>
              <p>We've been delivering online education for a long time. Our top-notch online learning platform, Learnline, is your one-stop shop for everything related to your psychology course, from lecture recordings and learning materials to communication tools for engaging with your lecturers and fellow students.</p>
              <p className='text-[#418092] underline'>Learn more about CDU’S online study experience.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[1400px] mx-auto my-6'>
        <div className="container mx-auto py-4">
          <p className='text-center text-[18px]'>First Nations Leadership is an Aboriginal lead Portfolio. We are uniquely dedicated to Indigenous cappacity building, includeing First Nations research and community engagement.</p>
          <div className='grid lg:grid-cols-2 gap-6 my-6'>
            <div className='mt-[20px]'>
              <p className='text-[26px] font-medium text-wrap'>First Nations Student and Engagement</p>
              <div>
                <div className='flex gap-6 items-center py-2 border-b'>
                  <p className='text-[#979196] text-[18px] text-nowrap'>First Nations student support</p>
                  <div className='h-[20px] w-full bg-[#979196]'></div>
                </div>

                <div className='flex gap-6 items-center py-2 border-b'>
                  <p className='text-[#979196] text-[18px] text-nowrap'>First Nations Tutorial Support (TS)</p>
                  <div className='h-[20px] w-full bg-[#979196]'></div>
                </div>

                <div className='flex gap-6 items-center py-2 border-b'>
                  <p className='text-[#979196] text-[18px] text-nowrap'>Away from Base (AFB) program</p>
                  <div className='h-[20px] w-full bg-[#979196]'></div>
                </div>

                <div className='flex gap-6 items-center py-2 border-b'>
                  <p className='text-[#979196] text-[18px] text-nowrap'>First Nations student guide</p>
                  <div className='h-[20px] w-full bg-[#979196]'></div>
                </div>
              </div>
            </div>

            <div>
              <img className='w-full' src="/internship/assets/eligibility/eligibility_2.png" alt="eligibility_2" />
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[1400px] mx-auto bg-white my-6'>
        <div className="container mx-auto px-2 py-4">
          <h4 className='text-[#605878] text-[26px]'>Lunch into your new world of study with confidence</h4>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 py-6 gap-y-8'>
            <div className='border border-[#333]'>
              <img className='w-full' src="/internship/assets/eligibility/eligibility_3.png" alt="eligibility_3" />
              <div className='px-4 mt-1 mb-3'>
                <p className='text-[#11294D] text-[18px]'>Your career: How to be a great therapist</p>
                <p className='text-[#5A5965] text-[14px] my-1 text-justify'>If you're finishing your studies in psychology at CDU, now's the time to be thinking about how you'll apply what you've learned to propel your career forward. Here, Dr Simon Moss from CDU. shares his advice on how to be a great therapist.</p>
                <Link className='text-[#007A87] font-bold underline flex gap-2 items-center'>Read More <div className='w-4 h-4 bg-[#007A87]'></div></Link>
              </div>
            </div>

            <div className='border border-[#333]'>
              <img className='w-full' src="/internship/assets/eligibility/eligibility_4.png" alt="eligibility_4" />
              <div className='px-4 mt-1 mb-3'>
                <p className='text-[#11294D] text-[18px]'>How to choose between a certificate, diploma and other qualifications</p>
                <p className='text-[#5A5965] text-[14px] my-1 text-justify'>Certificate, Diploma, Bachelor, Honours, Master... If you know you'd like to study a certain subject. but aren't sure about the different courses, qualification levels and what they all mean, then read on!</p>
                <Link className='text-[#007A87] font-bold underline flex gap-2 items-center'>Read More <div className='w-4 h-4 bg-[#007A87]'></div></Link>
              </div>
            </div>

            <div className='border border-[#333]'>
              <img className='w-full' src="/internship/assets/eligibility/eligibility_5.png" alt="eligibility_5" />
              <div className='px-4 mt-1 mb-3'>
                <p className='text-[#11294D] text-[18px]'>How to have the confidence to study something new</p>
                <p className='text-[#5A5965] text-[14px] my-1 text-justify'>Deciding to finally start that degree you've always desired, or one day realising that you want a change of career is undoubtedly a little daunting. Here are five tips to help you grow confidence in your decisions.</p>
                <Link className='text-[#007A87] font-bold underline flex gap-2 items-center'>Read More <div className='w-4 h-4 bg-[#007A87]'></div></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[1400px] mx-auto bg-white'>
        <div className="container mx-auto px-2 py-4">
          <div className='grid gap-8 lg:grid-cols-2'>
            <div>
              <img className='w-full' src="/internship/assets/eligibility/eligibility_6.png" alt="eligibility_6" />
            </div>
            <div className='flex flex-col gap-6 px-10 self-center'>
              <h2 className='text-[26px] font-bold text-black'>Accommodation</h2>
              <p className='text-[16px]'>Launceston offers a vibrant blend of culture, nature, and industry. The University offers a range of convenient and comfortable accommodation options. You can stay in the heart of the city, or right on campus</p>
              <p className='text-[16px]'>Cet involved in <strong>Student Living </strong> and join a vibrant community living near or on-campus where you'll make friends and share the best lifestyle and uni experience.</p>
              <div className='mx-auto text-center text-[18px] font-bold my-2 py-1 px-10 bg-[#EE3A23] text-white rounded-md'>LEARN MORE ABOUT OUR <br /> ACCOMMODATION OPTIONS</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Eligibility
