import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Card, Image } from "antd";
import image from "/assets/images/team/pracas.png";
import { Link } from "react-router-dom";

import image1 from "/assets/images/team/yogendr.png";
import image2 from "/assets/images/team/achut.png";
import image3 from "/assets/images/team/kishor.png";
import image4 from "/assets/images/team/pankaj.png";
import image5 from "/assets/images/team/sudhir.png";
import image6 from "/assets/images/team/aavash.png";
import image7 from "/assets/images/team/sobit.png";
import image8 from "/assets/images/team/isha.png";
import image9 from "/assets/images/team/suraj.png";
import image10 from "/assets/images/team/nischal.png";
import image11 from "/assets/images/team/falguni.png";
import image12 from "/assets/images/team/dipak.png";
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
  image9,
  image10,
  image11,
  image12,
];

const names = [
  "Sameer Sharma",
  "Achut Chalise",
  "Kishor Baskota",
  "Pankaj Ghmimire",
  "Sudhir Nepal",
  "Aavash Adhikari",
  "Sobhitmaan Shrestha",
  "Isha Sunam",
  "Suraj Majhi",
  "Nischal Bhagat",
  "Falguni Dahal",
  "Dipak Bohora",
];

const roles = [
  "Cheif Executive Officer",
  "Cheif Operating Officer",
  "Cheif Finanacial Officer",
  "Cheif Branding Officer",
  "Cheif Media Officer",
  "Sr.Community Manager",
  "Cheif Digital Strategist",
  "Data Manager",
  "Business Manager",
  "UAE Team Leader",
  "Community Manager",
  "Community Manager",
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
      <div className="max-w-[1140px]  max-lg:[88%] max-md:w-full  mx-auto px-0   py-0">
        <Card className="bg-[#efefef]  text-black w-full rounded-md max-md:rounded-none border border-gray-300 ">
          <div className="flex flex-col md:flex-row items-center gap-6 max-md:px-4">
            <div className="w-[260px] max-md:h-auto  flex  flex-col items-center">
              <Image
                src={image}
                preview={false}
                alt="Pracas Upreti"
                style={{ width: "100%", height:300, objectFit: "cover" }}
                
              />
              <div className="-mt-8 text-2xl text-center font-bold ">
                PRACAS Upreti
              </div>
              <p className="text-lg max-md:mt-0  text-center">Founder</p>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl  px-0 font-semibold mb-4">About PRACAS</h1>
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
                <p className="text-sm font-roboto mb-2">Follow Pracas on social media</p>
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
      <div className="max-w-[1140px] my-[56px] mx-auto  max-md:w-[87%] lg:px-8">
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          {images.map((img, index) => (
            <Card
              key={index}
              className="bg-[#efefef] py-4 text-black border rounded-md border-gray-300 flex flex-col items-center justify-center"
            >
              <img
                preview={false}
                src={img}
                alt={`Team Member ${index + 1}`}
                className="lg:h-[150px] max-md:h-[300px] object-contain mx-auto "
              />
              <div className="text-[20px] mt-2  font-semibold text-center">
                {names[index]}
              </div>
              <p className="text-[18px] text-center mb-2 ">{roles[index]}</p>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
