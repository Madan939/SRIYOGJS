import React, { useState } from "react";
import { Link } from "react-router-dom";

function FAQs() {
  const [open, setOpen] = useState(null);

  const handleOpen = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqData = [
    {
      question: "1. How much is the profile verification or membership fee?",
      answer:
        "The annual membership fee is NPR 1,999, which includes a discount, effectively making it NPR 200 per month.",
    },
    {
      question: "2. What are the benefits of paying a membership fee?",
      answer:
        "By paying the membership fee, you will receive an email and your profile will be created on our app within the city you work in. Additionally, your profile will be posted on our Facebook page periodically, and you will become a member on our app.",
    },
    {
      question: "3. Where is the office?",
      answer:
        "Our office is located at the PRACAS Infosys Incubation Center above Nepal SBI Bank Limited, Himalayan Road, Biratnagar, on the way to Traffic Chowk and Mahendra Chowk.",
    },
    {
      question: "4. How to pay the membership fee?",
      answer:
        "The yearly membership fee is NPR 1,999. IME Pay is our payment partner. You need to search for 'SRIYOG Membership' in the IME Pay app and pay the amount for yourself or others. The Consumer ID is the person who needs the membership.",
    },
    {
      question:
        "5. How can I give some advice or suggestions for the SRIYOG app?",
      answer:
        "You can review the SRIYOG app on the Google Play Store. Download the app first and express your views there.",
    },
    {
      question: "6. How to register details in SRIYOG?",
      answer:
        "You can download the app on your mobile phone and register your details by searching for 'SRIYOG' on the Google Play Store. Alternatively, on a computer or laptop, use a web browser to go to www.sriyog.com, click on the 'Join' button at the top right, or go directly to www.sriyog.com/join and fill in the details.",
    },
    {
      question: "7. How to get a membership in SRIYOG?",
      answer:
        "The system is very easy. Professionals can join from the website as well as the mobile app by submitting their full name, phone number, city, profession, etc.",
    },
    {
      question:
        "8. I already registered in SRIYOG but still not getting job, why?",
      answer:
        "Unverified professionals have lesser chances to get opportunities. Professionals need to get their profile verified to be listed on our platform.",
    },
    {
      question: "9. How can I get a job through SRIYOG?",
      answer:
        "SRIYOG is a gig economy-based professional marketplace. We create digital profiles of professionals based on their location and profession to showcase their skills.",
    },
    {
      question: "10. What to do with SRIYOG?",
      answer:
        "SRIYOG allows you to search for verified experts and services, connect directly with certified professionals, and create a digital profile that highlights your talents and experience. Collaborate with professionals and join us as members using IME Pay to have access to unique services.",
    },
  ];

  return (
    <>
    <section className='w-full mx-auto mt-[120px] bg-[#8D8D8D] mb-6'>
        <div className="container mx-auto py-[40px]">
          <h4 className='text-[36px] font-semibold text-white'><Link to={'/internship'}>Internship</Link> / <span className='text-[20px] font-[400] text-[#eeee]'>FAQs</span></h4>
        </div>
      </section>
      <section className="max-w-[1400px] bg-[#1AA399] my-6 mx-auto">
        <div className="container mx-auto pt-[150px] pb-[120px] text-center">
          <h2 className="font-[500] text-[36px] text-[#000]">
            Explore education institutions in Perth
          </h2>
          <p className="text-[20px] text-white text-center my-6">
            Besm vässa. Planat. Kron mms:a. Besm vässa. Planat. Kron mms:a. Besm
            vässa. Planat. Kron mms:a. Besm vässa. Planat. Kron mms:a. Besm
            vässa. Planat. Kron mms:a.{" "}
          </p>
          <div className="mx-auto w-[201px] px-4 py-1 text-[20px] bg-[#FCDB2E] text-center rounded-[10px]">
            Explore Now
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mb-6 mt-12 mx-auto">
        <div className="container mx-auto bg-[#F0F0F0] py-2">
          <h4 className="text-[24px] font-[500] py-4 inline-block">
            Frequently Ask Questions
          </h4>
          <div className="my-2">
            <div
              id="accordion-collapse"
              className="flex flex-col gap-6 text-left"
            >
              {faqData.map((a, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg bg-white"
                >
                  <h2>
                    <button
                      type="button"
                      onClick={() => handleOpen(index)}
                      className="flex items-center justify-between w-full p-5 font-medium text-gray-500"
                      aria-expanded={open === index ? "true" : "false"}
                      aria-controls={`accordion-collapse-body-${index}`}
                    >
                      <span className="text-left text-[18px]">
                        {a.question}
                      </span>
                      <img
                        className={`w-8 transform transition-transform ${
                          open === index ? "rotate-180" : ""
                        }`}
                        src="/internship/assets/icons/down-arrow.svg"
                        alt="down"
                      />
                    </button>
                  </h2>

                  {open === index && (
                    <div>
                      <hr className="border-t border-gray-200" />
                      <div className="p-5">
                        <p className="text-gray-400 text-[16px]">{a.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] h-full mx-auto bg-[#522298] mb-6 mt-12">
        <div className="container mx-auto pt-4 pb-10 overflow-hidden">
          <img
            className=""
            src="/internship/assets/faqs/faqs_1.png"
            alt="faqs_1"
          />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            <div className="my-8">
              <p className="text-[#F9E310] text-[20px] font-semibold">
                GCU ONLINE DEGREES
              </p>
              <p className="text-[36px] font-bold text-white">
                Find your purpose with a degree from Grand Canyon University
              </p>
            </div>
            <div className="md:self-center md:row-span-2 transform-translate-y-1/2">
              <img
                className="lg:scale-[1.8] md:scale-[2] object-cover"
                src="/internship/assets/faqs/faqs_2.png"
                alt="faqs_2"
              />
            </div>
            <div className="p-4 bg-white mb-6 flex flex-col gap-6 items-center">
              <p className="text-[32px] font-bold text-[#522298] text-center">
                Find Your Program
              </p>
              <p className="text-[20px] text-center">
                Choose your area of interest
              </p>
              <form
                action="#"
                className="mx-auto flex flex-col gap-10 items-center"
              >
                <select
                  name="program"
                  id="program"
                  className="border-2 px-3 py-1 rounded-[10px] outline-none"
                >
                  <option value="" disabled selected>
                    --Please Select--
                  </option>
                  <option value="ui/ux">UI/UX</option>
                  <option value="web_development">Web Development</option>
                  <option value="app_development">App Development</option>
                  <option value="social_media_management">
                    Social Media Management
                  </option>
                  <option value="data_science">Data Science</option>
                  <option value="java">Java</option>
                </select>
                <button
                  type="submit"
                  className="bg-[#FF6B01] px-6 py-1 mx-auto w-[80%] rounded-[15px] text-white text-[20px]"
                >
                  Next Step
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto bg-white my-6">
        <div className="container mx-auto pt-[60px]">
          <div className="flex flex-wrap lg:gap-8 gap-y-4">
            <div className="lg:w-[35%] w-full">
              <img
                className="h-full w-full"
                src="/internship/assets/faqs/faqs_3.png"
                alt="faqs_3"
              />
            </div>
            <div className="lg:w-[60%]">
              <p className="text-[#5224B2] text-[22px] mb-4">
                THE GCU DIFFERENCE
              </p>
              <p className="text-[30px] leading-none">
                An accredited university committed to helping you achieve your
                goals
              </p>
              <p className="text-[20px] text-[#4b4b4b] my-5">
                Established in 1949, Grand Canyon University has been a premier
                university helping students find their purpose.
              </p>
              <p className="text-[20px] text-[#4b4b4b]">
                Here's what sets GCU apart:
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 mt-1 bg-[#000]"></div>
                  <p>
                    <strong>Academic Excellence </strong>- For more than 70
                    years, GCU has been offering quality academic programs that
                    provide the skills needed for your career.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 mt-1 bg-[#000]"></div>
                  <p>
                    <strong>Affordability </strong>- GCU offers a competitive,
                    affordable online tuition rate and numerous financing
                    options, including scholarships.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 mt-1 bg-[#000]"></div>
                  <p>
                    <strong>Dynamic Learning Environment</strong> - GCU's online
                    classroom helps students stay engaged and learning with each
                    course designed to promote maximum collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQs;
