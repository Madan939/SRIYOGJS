import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Card, Image } from "antd";
// import image from "/assets/images/team/pracas.png";
import { Link } from "react-router-dom";

// import image1 from "/assets/images/team/yogendr.png";
import image1 from "/assets/images/contact/1.png";
import image2 from "/assets/images/team/rahul.png";
import image3 from "/assets/images/team/madan.jpg";
import image4 from "/assets/images/team/kritika.png";
import image5 from "/assets/images/team/abhay.png";
import image6 from "/assets/images/team/bitisha.jpg";
import image7 from "/assets/images/team/priyanka.jpg";
import image8 from "/assets/images/team/lalita.png";

import { FaLinkedin, } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];

const names = [
  "Niranjan Sharma",
  "Rahul Chaudhary",
  "Madan Golay Tamang",
  "Kritika Ghimire",
  "Abhay Kumar Gupta",
  "Bitisha Thapa",
  "Priyanka Pandey",
  "Lalita Ghimire",
];

const roles = [
  "Project Manager",
  "Stack Coordinator",
  "Project Coordinator",
  "UI/UX Designer",
  "Web Developer",
  "Front-end Developer",
  "React Js Developer",
  "Web Developer",
];

const Team = () => {
  useEffect(() => {
    document.title = "SRIYOG Team | Professional Marketplace"
  }, []);

  const name = "Team";

  return (
    <>
      <Breadcrumb name={name} />

      {/* PRACAS CARD SECTION */}
      <div className="">
        <Card className=" max-lg:w-[88%] max-w-[1140px]   max-md:w-[89%] mx-auto px-0   py-0 text-black w-full   ">
          <div className="flex flex-col md:flex-row items-center max-lg:items-start max-md:items-center gap-6 max-lg:gap-3   ">
            {/* <div className="w-[260px] max-md:h-auto  flex  flex-col items-center">
              <Image
                src={image}
                preview={false}
                alt="Pracas Upreti"
                style={{ width: "100%", height:300, objectFit: "cover" }}
                
              />
              <div className="-mt-8 text-2xl text-center font-bold ">
                PRACAS Upreti
              </div>
              <p className="text-lg max-md:mt-0  text-center text-[#4b4b4b]">Founder</p>
            </div> */}
            <div className="flex-1">
              <h1 className="text-[24px]  px-0 font-bold mb-4">Our Team</h1>
              <p className="text-gray-800 text-[16px] text-justify leading-relaxed">
                Pracas Upreti's journey from a startup founder to a technology-driven
                change-maker in Biratnagar, Nepal, exemplifies the profound impact that
                individuals can have when they combine innovation with a commitment to
                social responsibility.
                <br /><br />
                Through his endeavors, Upreti has not only transformed his community but
                has also set a precedent for how technology can be harnessed to drive
                positive change and create a better future for all.
                <br /><br />
                Upreti's journey into the realm of technology began over a decade ago
                when he founded his first IT startup in 2007 A.D. as PRACAS Infosys in
                Biratnagar. Recognizing the potential of technology to bridge gaps and
                catalyze progress, he embarked on a mission to leverage digital solutions
                to address local challenges and foster economic development.
                <br /><br />
                <p className="text-sm font-roboto mb-2">Follow us :</p>
                <div className="flex gap-2 ">
                  <Link to="https://t.me/sriyog">
                    <RiTelegramLine className="text-[20px]  text-black hover:text-black inline-block" />
                  </Link>
                  <Link to="https://x.com/pracas" target="_blank">
                    <FaSquareXTwitter className="text-[20px]  text-black hover:text-black inline-block" />
                  </Link>
                  <Link to="https://www.linkedin.com/in/pracasupreti/">
                    <FaLinkedin className="text-[20px]  text-black hover:text-black inline-block" />
                  </Link>
                </div>
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* TEAM GRID SECTION */}
      <div className="lg:max-w-[1140px] my-[56px] mx-auto  md:w-[87%] w-[89%]   ">
        <div
          className="grid gap-6  md:gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 "
       
        >
          {images.map((img, index) => (
            <Card
              key={index}
              className="bg-[#efefef] lg:py-4 md:py-2 text-black border rounded-md border-gray-300 flex flex-col items-center justify-center"
            >
              <img
                preview={false}
                src={img}
                alt={`Team Member ${index + 1}`}
                className="lg:h-[150px] lg:w-[150px] h-[300px] w-[300px]   mx-auto  rounded-[50%] object-cover"
              />
              <div className="text-[20px] mt-2  font-semibold text-center">
                {names[index]}
              </div>
              <p className="text-[17px]  text-center mb-2 ">{roles[index]}</p>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
