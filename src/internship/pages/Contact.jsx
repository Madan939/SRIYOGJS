import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {

  const coordinator = [
    {
      name: "Shriya",
      field: "React Native",
      image: "/internship//assets/coordinator/shriya.png"
    },

    {
      name: "Diya",
      field: "UI/UX Designer",
      image: "/internship//assets/coordinator/diya.png"
    },

    {
      name: "Supriya",
      field: "React JS",
      image: "/internship//assets/coordinator/supriya.png"
    },

    {
      name: "Priyanka",
      field: "React Native",
      image: "/internship//assets/coordinator/priyanka.png"
    },

    {
      name: "Sanjay",
      field: "Java Script",
      image: "/internship//assets/coordinator/sanjay.png"
    },

    {
      name: "Prince",
      field: "UI/UX Designer",
      image: "/internship//assets/coordinator/shriya.png"
    },

    {
      name: "John",
      field: "React Native",
      image: "/internship//assets/coordinator/john.png"
    },

    {
      name: "Lalita",
      field: "Web Developer",
      image: "/internship//assets/coordinator/lalita.png"
    }
  ]

  return (
    <>
    <section className='w-full mx-auto mt-[120px] bg-[#8D8D8D] mb-6'>
        <div className="container mx-auto py-[40px]">
          <h4 className='text-[36px] font-semibold text-white'><Link to={'/internship'}>Internship</Link> / <span className='text-[20px] font-[400] text-[#eeee]'>Contact</span></h4>
        </div>
      </section>
      <section className='max-w-[1400px] w-full my-6 mx-auto bg-white'>
        <div className="mx-auto h-[700px] max-w-[1380px] w-full px-4 py-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7237.268747271204!2d85.32061524339905!3d27.711079113837975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e3ff83574d%3A0x23e6caecc2eba3c0!2sRem.work%20HQ!5e0!3m2!1sen!2snp!4v1745487637094!5m2!1sen!2snp" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>

      <section className='max-w-[1400px] mx-auto bg-[#F2F7FA]'>
        <div className="container mx-auto py-6">
          <h2 className='text-[26px] font-semibold text-black'>All campuses contacts</h2>
          <div className='grid lg:grid-cols-2 gap-6 gap-y-6'>
            <div>
              <p className='text-[18px] my-2 lg:w-[455px]'>We are you first point of contect for assistance with computer, the internet, telephones, printers and associated information technology equipment and services.</p>
              <img src="/internship/assets/contact/image_1.png" alt="mobile_network" />
            </div>
            <div className='flex flex-col gap-4'>

              <div className='text-[18px]'>
                <p className='font-bold'>Service desk</p>
                <p>T : <a href="tel:08 7943 6600" className='text-[#519095]'>08 7943 6600</a></p>
                <p>E : <a href="mailto:itsupport@cdu.edu.au" className='text-[#519095]'>itsupport@cdu.edu.au</a> ( for faults )</p>
                <p>Internal: Ext 6600 International : <a href="tel:+618 7943 6600" className='text-[#519095]'>+618 7943 6600</a></p>
              </div>

              <div className='text-[18px]'>
                <p className='font-bold'>Opening hours</p>
                <p>Mon - Thu : <span className='text-[#4B4B4B]'>7:30 AM - 6 PM</span></p>
                <p>FRI : <span className='text-[#4B4B4B]'>7:30 AM - 5:30 PM</span></p>
              </div>

              <div className='text-[18px]'>
                <p className='font-bold'>In-person</p>
                <p className='text-[#4b4b4b]'>CDU Library, Red Building 8, Casuarina campus </p>
                <a href='#' className='text-[#519095] underline'>Casuarina campus map (PDF 1MB)</a>
              </div>

              <div className='text-[18px]'>
                <p className='font-bold'>Feedback</p>
                <p className='text-[#4b4b4b]'>Tell us about your experience with DTS. We would love to hear from you. </p>
                <a href='#' className='text-[#519095] underline'>Provide feedback</a>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[1400px] mx-auto bg-white'>
        <div className="container mx-auto py-6 text-center">
          <h2 className='text-[26px] font-[700] text-black '>Internship Coordinators</h2>
          <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 my-6 gap-6 gap-y-7'>
            {coordinator.map((a) => (
              <div className='text-center flex flex-col gap-1'>
                <img className='mx-auto' src={a.image} alt={a.name} />
                <h3 className='text-[20px]'>{a.name}</h3>
                <p className='text-[18px]'>{a.field}</p>
                <a href="#" className='w-[60px] h-[60px] mx-auto'>
                <img className='w-full h-full' src="/internship/assets/icons/telegram.svg" alt="telegram" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
