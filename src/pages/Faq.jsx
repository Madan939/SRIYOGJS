import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

const FaqItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(()=>{
    document.title="SRIYOG FAQs | Professional Marketplace"
  },[]);
  return (
    <>
      <div className="text-[#333] border-b">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left px-4 py-5 bg-[#f8f6f6]  font-semibold focus:outline-none flex justify-between items-center"
        >
          <div className={`text-[1.2rem] max-md:font-bold font-semibold hover:text-[#8b181b] ${isOpen ? 'text-[#8b181b]' : 'text-[#333]'}`}>
            {title}
          </div>
          <div className="text-[2rem]">
            {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
          </div>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out px-4 text-gray-700 text-[1rem] ${isOpen ? 'max-h-96 py-6' : 'max-h-0 py-0'
            }`}
        >
          {content}
        </div>
      </div>
    </>

  );
};

const Accordion = () => {
  const name = "Frequently Asked Questions";
  const des = "";

  return (
    <>
      <Breadcrumb name={name} des={des} />
      <section className=" max-w-[1140px] mx-auto max-lg:w-[88%] max-md:w-[88%] border mb-[56px]">
        <FaqItem
          title="How much is the profile verification or membership fee?"
          content="To verify the profile, it costs Rs 1,999 including discount for one year at the rate of 200 per month."
        />
        <FaqItem
          title="What are the benefits of paying a membership fee?"
          content="By paying the membership fee, an email and your profile will be created on our app within the city you work in, and your profile will be posted on our Facebook page from time to time and you will become a member on our app."
        />
        <FaqItem
          title="Where is the office?"
          content="Our office is in Kamalpokhari, Kathmandu, Nepal"
        />
        <FaqItem
          title="How to pay the membership fee?"
          content="Yearly membership fee is NPR 1,999. IME Pay is our Payment Partner. You need to pay from it. You have to search SRIYOG Membership and pay the amount for yourself or for others. Consumer ID is the person who needs membership."
        />
        <FaqItem
          title="Where is the office?"
          content="Our office is in Kamalpokhari, Kathmandu, Nepal"
        />
        <FaqItem
          title="How to register details in SRIYOG?"
          content="One has to download the app from the mobile phone and register the details by spending SRIYOG on Google Play Store .To do this on a computer or laptop, using Chrome, Firefox, Opera, Edge, Brave or any other web browser, go to www.sriyog.com website and click on the join button on the top right side or go to www.sriyog.com join and fill in the details."
        />
        <FaqItem
          title="How to get a membership in SRIYOG?"
          content="The system is very easy, professional can join from website as well as mobile app by submitting full name, phone, city, profession etc."
        />
        <FaqItem
          title="I already registered in SRIYOG but still not getting job, why?"
          content="Unverified professionals have lesser chances to get opportunity. Professionals need to get their profile verification to get listed in our platform."
        />
        <FaqItem
          title="How can I get a job through SRIYOG?"
          content="SRIYOG is gig economy based professional marketplace. We make digital profile of professionals based in their location and their professions to showcase their skills."
        />
        <FaqItem
          title="What to do with SRIYOG?"
          content="SRIYOG allows you to search for verified experts and services, connect directly with certified professionals, and create a digital profile that highlights your talents and experience. Collaborate with professionals and join us as members using IME Pay to have access to unique services."
        />
      </section>
    </>
  );
};

export default Accordion;
