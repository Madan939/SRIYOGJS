import React from "react";
import { Card, Image } from "antd";
const image = "/consulting/assets/images/teamImages/pracas.png";
const image1 = "/consulting/assets/images/teamImages/sameer.png";
const image2 = "/consulting/assets/images/teamImages/achut.png";
const image3 = "/consulting/assets/images/teamImages/kishor.png";
const image4 = "/consulting/assets/images/teamImages/pankaj.png";
const image5 = "/consulting/assets/images/teamImages/sudhir.png";
const image6 = "/consulting/assets/images/teamImages/aavash.png";
const image7 = "/consulting/assets/images/teamImages/sobit.png";
const image8 = "/consulting/assets/images/teamImages/isha.png";
const image9 = "/consulting/assets/images/teamImages/suraj.png";
const image10 = "/consulting/assets/images/teamImages/nischal.png";
const image11 = "/consulting/assets/images/teamImages/falguni.png";
const image12 = "/consulting/assets/images/teamImages/dipak.png";
import { Link } from "react-router-dom";
import Meta from "../components/Meta.jsx";
import { useLocation } from "react-router-dom";

import {
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
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
  "Niranjan Sharma",
  "Rahul Chaudhary",
  "Salina Baskota",
  "Lalita Ghimire",
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
  "Project Manager",
  "Team leader",
  "Front-end Developer",
  "Web Developer",
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
  // Meta Head
  const name = useLocation();
  return (
    <>
      <Meta title={name} />
      <section className="pb-[90px] lgMax:pt-[60px] mdMax:pt-[52px] ">
        <div>
          <div className="bg-[#8B181B] h-auto lgMax:h-auto">
            <div className="max-w-[1180px] mx-auto my-0 lgMax:max-w-[920px] lgMax:mx-auto lgMax:my-0 mdMax:max-w-[720px] mdMax:mx-auto mdMax:my-0 py-9 lgMax:px-12">
              <h1 className="!text-4xl !text-white !font-semibold">
                Meet Our Team
              </h1>
              {/* <h4 className="inline-block text-white text-[19px] mt-2 ">
                At SRIYOG, we believe that the strength of our solutions lies in
                the expertise and dedication of our people.
              </h4> */}
              <p></p>
            </div>
          </div>

          <div className="flex justify-center items-center max-w-[1180px] mx-auto my-0 lgMax:max-w-[920px] lgMax:mx-auto lgMax:my-0 mdMax:max-w-[720px] mdMax:mx-auto mdMax:my-0 mdMax:py-10 mdMax:px-3 py-14 lgMax:px-12">
            <Card className="bg-custom-gray text-black max-w-[1300px] w-full border border-gray-300 mdMax:p-0">
              <div className="flex flex-row smMax:flex-col mdMax:text-center mdMax:items-center">
                <div className="w-[260px] h-[390px] flex flex-col items-center pl-6 mdMax:p-0">
                  <Image
                    src={image}
                    alt="Pracas Upreti"
                    style={{ width: "100%", height: 300, objectFit: "cover" }}
                    preview={false}
                  />
                  <div className="mt-4 text-2xl text-center font-roboto font-bold">
                    PRACAS Upreti
                  </div>
                  <p className="text-xl  font-roboto text-center">Founder</p>
                </div>
                <div className="flex-1 flex flex-col  justify-start  px-6 pl-10 mdMax:px-0">
                  <h1 className="text-3xl font-roboto font-semibold">
                    About PRACAS
                  </h1>
                  <br />
                  <p className=" text-gray-800 font-roboto">
                    Pracas Upreti's journey from a startup founder to a
                    technology-driven change-maker in Biratnagar, Nepal,
                    exemplifies the profound impact that individuals can have
                    when they combine innovation with a commitment to social
                    responsibility.
                    <br />
                    <br />
                    Through his endeavors, Upreti has not only transformed his
                    community but has also set a precedent for how technology
                    can be harnessed to drive positive change and create a
                    better future for all.
                    <br />
                    <br />
                    Upreti's journey into the realm of technology began over a
                    decade ago when he founded his first IT startup in 2007 A.D.
                    as PRACAS Infosys in Biratnagar. Recognizing the potential
                    of technology to bridge gaps and catalyze progress, he
                    embarked on a mission to leverage digital solutions to
                    address local challenges and foster economic development.
                    His vision was not merely to create successful businesses
                    but to effect meaningful change in his community.
                    <br /> <br />
                    <p> Follow Pracas on social media</p>
                    <br />
                    <Link>
                      <InstagramOutlined className="[&_svg]:mr-[12px] [&_svg]:text-[24px] [&_svg]:inline-block" />
                    </Link>
                    <Link>
                      <TwitterOutlined className="[&_svg]:mr-[12px] [&_svg]:text-[24px] [&_svg]:inline-block" />
                    </Link>
                    <Link>
                      <LinkedinOutlined className="[&_svg]:mr-[12px] [&_svg]:text-[24px] [&_svg]:inline-block" />
                    </Link>
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="max-w-[1180px] mx-auto my-0 lgMax:max-w-[920px] lgMax:mx-auto lgMax:my-0 mdMax:max-w-[720px] mdMax:mx-auto mdMax:my-0 mdMax:px-3 py-14 lgMax:px-12">
            <div
              className="grid gap-6 justify-center"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1rem",
              }}
            >
              {[...Array(12)].map((_, index) => (
                <Card
                  key={index}
                  className="bg-custom-gray max-w-[300px] w-full text-black border border-gray-300 flex flex-col items-center justify-center mdMax:max-w-full"
                >
                  <Image
                    src={images[index]}
                    alt={`Team Member ${index + 1}`}
                    style={{ width: "100%", height: 200, objectFit: "cover" }}
                    preview={false}
                  />
                  <div className="mt-4 text-xl font-roboto font-bold text-center">
                    {names[index]}
                  </div>
                  <p className="text-xl text-center font-roboto">
                    {roles[index]}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
