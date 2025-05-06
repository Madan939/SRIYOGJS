import React from "react";
import { FaAddressCard } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import Countrycodeinput from "../components/inputFields/Countrycodeinput.jsx";
import { IoMailOpenSharp } from "react-icons/io5";

import { useLocation } from "react-router-dom";
import Meta from "../components/Meta.jsx";
const Contactus = () => {
  const name = useLocation();

  const image1 = "/consulting/assets/images/teamImages/niranjan.jpg";
  const image2 = "/consulting/assets/images/teamImages/aashis.png";
  const image3 = "/consulting/assets/images/teamImages/suraj.png";
  return (
    <>
      <Meta title={name} />
      <section className="pb-[90px] lgMax:w-full lgMax:pt-[60px] mdMax:pt-[52px]">
        <div>
          {/* contact us page header */}
          <div className="bg-[#8B181B] h-auto lgMax:h-auto">
            <div className="max-w-[1180px] mx-auto my-0 lgMax:max-w-[920px] lgMax:mx-auto lgMax:my-0 mdMax:max-w-[720px] mdMax:mx-auto mdMax:my-0 py-9 lgMax:px-12">
              <h1 className="!text-[2.5rem] !text-white !mb-2 !font-semibold !leading-5 !mdMax:leading-[2rem]">
                Contact
              </h1>
              {/* <h4 className="inline-block text-white text-[19px] mt-2">
                We’d love to hear from you! Whether you have a question, need
                expert IT advice, or want to discuss how we can help transform
                your business with innovative technology solutions, our team at
                <strong> SRIYOG</strong> is here to assist you.
              </h4> */}
            </div>
          </div>

          {/* CONTACT US PAGE CONTENT */}

          <div className="max-w-[1180px] mx-auto my-0 lgMax:max-w-[920px] lgMax:mx-auto lgMax:my-0 mdMax:max-w-[720px] mdMax:mx-auto mdMax:my-0 py-14 lgMax:px-20 mdMax:p-0">
            <div className="flex flex-nowrap gap-10 lgMax:flex-wrap lgMax:flex-col">
              {/* CONTACT CONTENT */}
              <div className="flex flex-col basis-1/2 gap-4 py-4 flex-wrap mdMax:px-14 smMax:px-4">
                <h2 className="text-[2rem]">Welcome to SRIYOG Support</h2>
                <p>
                  Welcome to SRIYOG! We're located at Rem.Work, Kamalpokhari,
                  Kathmandu, Nepal.
                </p>

                <div className="pb-8 m ">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1026.803855706821!2d85.32312560042115!3d27.711029075695325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef740a066ed089%3A0xaf7934e44a7b1e17!2sSRIYOG!5e0!3m2!1sen!2snp!4v1741983312014!5m2!1sen!2snp"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      border: 0,
                      width: "100%",
                      height: "300px",
                    }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="flex flex-wrap basis-auto smMax:flex-col smMax:gap-4 ">
                  <div className="flex flex-col basis-1/2  px-[15px] mb-8 gap-2 smMax:mb-0">
                    <div className="flex gap-1">
                      <FaAddressCard className="text-2xl text-[#862124]" />
                      <h4> Registration</h4>
                    </div>
                    <p>Easy Registration system to join as professional.</p>
                  </div>
                  <div className="flex basis-1/2 flex-col px-[15px] gap-2">
                    <div className="flex gap-1">
                      <FaUser className="text-2xl text-[#862124]" />
                      <h4> Membership</h4>
                    </div>
                    <p>Reasonable verification fee for yearly membership.</p>
                  </div>
                  <div className="flex basis-1/2 flex-col px-[15px] gap-2">
                    <div className="flex gap-1">
                      <FaBullhorn className="text-2xl text-[#862124]" />
                      <h4> Promotion</h4>
                    </div>
                    <p>Various ways to promote your skills and profile.</p>
                  </div>
                  <div className="flex basis-1/2 flex-col px-[15px] gap-2">
                    <div className="flex gap-1">
                      <FaShieldAlt className="text-2xl text-[#862124]" />
                      <h4> Security</h4>
                    </div>

                    <p>
                      Verified and secured platform to showcase your skills.
                    </p>
                  </div>
                </div>
              </div>

              {/* CONTACT FORM CONTENT */}
              <div className="flex basis-1/2 bg-[#efefef] flex-wrap px-12 py-10 lgMax:basis-full smMax:px-3 smMax:p-0 rounded-[15px]">
                {/* CONTECT FORM PART*/}

                <form
                  action=""
                  className="flex basis-full flex-col flex-wrap gap-6 smMax:py-6 smMax:px-4"
                >
                  <div className="flex items-center mb-4 gap-1">
                    <IoMailOpenSharp className="!font-black !text-[1.9rem] " />
                    <h3 className="font-black text-[1.75rem]">
                      Send Your Queries
                    </h3>
                  </div>
                  <div className="flex justify-between lgMax:flex-col lgMax:justify-normal lgMax:gap-4">
                    <div className="flex flex-col gap-1 ">
                      <label htmlFor="first_Name">First Name</label>
                      <input
                        for="first_Name"
                        type="text"
                        id="first_name"
                        placeHolder="First Name"
                        name="first_name"
                        className="!px-1 !py-2 !transition-all !duration-150 !ease-in-out !border-1 !border-gray-300 !focus:border-[#80bdff] !focus:ring-[3px] !focus:ring-[#80bdff]"
                      />
                    </div>

                    <div className="flex">
                      <div className="flex flex-col gap-1 lgMax:basis-full">
                        <label htmlFor="last_Name">Last Name</label>
                        <input
                          for="last_Name"
                          type="text"
                          id="last_Name"
                          placeHolder="Last Name"
                          name="last_Name"
                          className="!px-1 !py-2 !transition-all !duration-150 !ease-in-out !border-1 !border-gray-300 !focus:border-[#80bdff] !focus:ring-[3px] !focus:ring-[#80bdff]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="email_Address">Email address</label>
                    <input
                      for="email_Address"
                      type="email"
                      id="email_Address"
                      placeHolder="Enter Email"
                      value=""
                      className="!px-1 !py-2 !transition-all !duration-150 !ease-in-out !border-1 !border-gray-300 !focus:border-[#80bdff] !focus:ring-[3px] !focus:ring-[#80bdff]"
                    />
                  </div>

                  <div className="flex flex-wrap  gap-[28px] lgMax:flex-col lgMax:justify-center ">
                    <div className="flex flex-col w-1/4 gap-1 lgMax:w-full">
                      <label htmlFor="country_Code">Country Code</label>
                      {<Countrycodeinput />}
                    </div>

                    <div className="flex flex-col w-1/3 gap-1 lgMax:w-full">
                      <label htmlFor="phone_Number">Phone Number</label>
                      <input
                        for="phone_number"
                        type="text"
                        id="phone_number"
                        placeHolder="Enter Phone Number lgMax:w-full"
                        name="phone_number"
                        className="!px-1 !py-2 !transition-all !duration-150 !ease-in-out !border-1 !border-gray-300 !focus:border-[#80bdff] !focus:ring-[3px] !focus:ring-[#80bdff]"
                      />
                    </div>

                    <div className="flex flex-col w-1/4 gap-1 lgMax:w-full">
                      <label htmlFor="extension">Extension</label>
                      <input
                        for="extension"
                        type="text"
                        id="extension"
                        placeHolder="Extension"
                        name="extension"
                        className="!px-1 !py-2 !transition-all !duration-150 !ease-in-out !border-1 !border-gray-300 !focus:border-[#80bdff] !focus:ring-[3px] !focus:ring-[#80bdff]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col  ">
                    <label htmlFor="service_Option">
                      What do you need help with?
                    </label>
                    <select
                      for="service_Option"
                      type="text"
                      id="service_Option"
                      name="service_Option"
                      className="!px-1 !py-2 !transition-all !duration-150 !ease-in-out !border-1 !border-gray-300 !focus:border-[#80bdff] !focus:ring-[3px] !focus:ring-[#80bdff] !appearance-auto "
                    >
                      <option value="">Registration</option>
                      <option value="">Membership</option>
                      <option value="">Dropzone</option>
                      <option value="">Community Manager</option>
                      <option value="">Promotion</option>
                      <option value="">Advertising</option>
                      <option value="">Complain</option>
                      <option value="">Suggestion</option>
                      <option value="">Others</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <textarea
                      for="message"
                      type="text"
                      id="message"
                      placeHolder="Message"
                      name="message"
                      className="p-4 transition-all duration-150 ease-in-out border-1 border-gray-300 focus:border-[#80bdff] focus:ring-[3px] focus:ring-[#80bdff]"
                    ></textarea>
                  </div>

                  <div className="bg-[#8b181b] w-20 py-1 text-center rounded-md text-white hover:bg-[#dc3545] 150 duration-200 ease-in">
                    <input type="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* QUICK CONTACT SECTION */}
          <div className="max-w-[1140px] mx-auto text-center mb-16 mt-16  ">
            <h2 className="text-[2rem] font-bold text-[#8B181B]">
              Quick Contact
            </h2>
            <p className="text-gray-600 mb-12 pt-3">
              Quick contact the relevant people.
            </p>
            <div className="flex justify-center gap-32 flex-wrap ">
              {/* Team Member 1 */}
              <div className="text-center max-w-[250px] mb-8">
                <img
                  src={image1}
                  alt="Niranjan Sharma"
                  className="rounded-full w-50 h-50 object-cover border-4 border-white shadow-lg mx-auto"
                />
                <h3 className="block text-lg font-semibold text-gray-800 mt-5">
                  Project Manager
                </h3>
                <p className="text-gray-700 mt-2">Niranjan Sharma</p>
                <button className="border-2 border-[#8b181b] bg-white text-[#8b181b] hover:bg-[#8b181b] hover:text-white px-4 py-2 mt-4 rounded duration-200 ease-in">
                  WhatsApp
                </button>
              </div>

              {/* Team Member 2 */}
              <div className="text-center max-w-[250px] mb-8">
                <img
                  src={image2}
                  alt="Aashis Sunar"
                  className="rounded-full w-50 h-50 object-cover border-4 border-white shadow-lg mx-auto gap-5"
                />
                <h3 className="block text-lg font-semibold text-gray-800 mt-5">
                  Business Development Officer
                </h3>
                <p className="text-gray-700 mt-2">Aashis Sunar</p>
                <button className="border-2 border-[#8b181b] bg-white text-[#8b181b] hover:bg-[#8b181b] hover:text-white px-4 py-2 mt-4 rounded duration-200 ease-in">
                  WhatsApp
                </button>
              </div>

              {/* Team Member 3 */}
              <div className="text-center max-w-[250px] mb-8">
                <img
                  src={image3}
                  alt="Suraj Majhi"
                  className="rounded-full w-50 h-50 object-cover border-4 border-white shadow-lg mx-auto gap-5"
                />
                <h3 className="block text-lg font-semibold text-gray-800 mt-5">
                  Business Manager
                </h3>
                <p className="text-gray-700 mt-2">Suraj Majhi</p>
                <button className="border-2 border-[#8b181b] bg-white text-[#8b181b] hover:bg-[#8b181b] hover:text-white px-4 py-2 mt-4 rounded duration-200 ease-in">
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
