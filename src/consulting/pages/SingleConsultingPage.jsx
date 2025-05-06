import React, { useState } from "react";
import consultingData from "../data/consulting.js";
import { useParams, Link, useLocation } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
// import UpdateImg_1 from "consulting/assets/banner/news-1.webp";
import singlepageupdate from "../data/singlepageupdate.js";
import Meta from "../components/Meta.jsx";

const SingleConsultingPage = () => {
  const { name } = useParams();
  const singleName = useLocation();

  const Team_1 = "consulting/assets/singlepageteam/team-1.png";
  const Team_2 = "consulting/assets/singlepageteam/team-2.png";
  const Team_3 = "consulting/assets/singlepageteam/team-3.png";
  const Team_4 = "consulting/assets/singlepageteam/team-4.png";
  const Team_5 = "consulting/assets/singlepageteam/team-5.png";
  const Team_6 = "consulting/assets/singlepageteam/team-6.png";

  // const pathname = singleName.pathname.endsWith("/")
  //   ? singleName.pathname.slice(0, -1)
  //   : singleName.pathname;

  const filterItem = consultingData.find(
    (consultingItem) =>
      consultingItem.name
        .replace(/\//g, "-")
        .replace(/\s+/g, "-")
        .toLowerCase() ===
      decodeURIComponent(
        name.replace(/\//g, "-").replace(/\s+/g, "-").toLowerCase()
      )
  );
  const paraDesc = filterItem.description.split("");

  const firstPart = paraDesc.slice(0, 254); // First 100 words
  const secondPart = paraDesc.slice(254); // Remaining words

  // removing url slug space

  if (!filterItem) {
    <h1>Services Not Available</h1>;
  }

  // accordion

  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the open/close of a section
  const toggleSection = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the section if it's already open
    } else {
      setOpenIndex(index); // Open the clicked section
    }
  };

  return (
    <>
      <Meta title={singleName} />
      <section className="lgMax:pt-[60px] mdMax:pt-[52px] ">
        {/* single page for services iitems */}

        <div className="bg-[#8B181B] h-[140px] lgMax:h-auto">
          <div className="max-w-[1180px] mx-auto my-0 lgMax:max-w-[920px] lgMax:mx-auto lgMax:my-0 mdMax:max-w-[720px] mdMax:mx-auto mdMax:my-0 py-9 lgMax:px-12 h-[100%]">
            <h1 className="text-4xl text-white font-semibold flex h-[100%] items-center">
              {filterItem.name}
            </h1>
            <p></p>
          </div>
        </div>

        {/* Title Section */}
        <div className="bg-[#F0F0F0]">
          <div className="max-w-[1180px] mx-auto my-0 lgMax:max-w-[920px] lgMax:mx-auto lgMax:my-0 mdMax:max-w-[720px] mdMax:mx-auto mdMax:my-0 py-14 ">
            <h1 className="text-[40px] font-bold font-[Inter, sans-serif] pb-7 inline-block">
              {filterItem.name}
            </h1>
            <p className="text-[#4B4B4B] text-justify">
              {firstPart} <br />{" "}
              <span className="pt-4 inline-block break-word">{secondPart}</span>
            </p>
          </div>
        </div>

        <div>
          <div className="max-w-[1180px] mx-auto my-0 lgMax:max-w-[920px] lgMax:mx-auto lgMax:my-0 mdMax:max-w-[720px] py-14">
            {/* Why it is necessary section */}
            <div className="flex items-center gap-2 py-9 justify-between">
              <div className="basis-[70%] items-start">
                <h1 className="text-[40px] font-bold font-[Inter, sans-serif] pb-7 inline-block">
                  Why it is necessary for business ?
                </h1>
                <p className="text-[#4B4B4B] text-justify">
                  {firstPart} <br />{" "}
                  <span className="pt-4 inline-block break-word">
                    {secondPart}
                  </span>
                </p>
              </div>
              <div className="basis-[20%]">
                <img src={filterItem.image} alt="" />
                <p className="text-center pt-1">{filterItem.name}</p>
              </div>
            </div>
            {/* Team Section */}
            <div className="py-14">
              <h1 className="text-[40px] font-semibold font-[Inter, sans-serif] pb-[28px] inline-block">{`${filterItem.name} Team`}</h1>
              <p className="font-[Inter, sans-serif] font-normal pb-7 text-justify">
                {filterItem.description.slice(0, 640)}
              </p>
              <div className="flex justify-between flex-wrap gap-y-10">
                <div className="flex basis-[32%] items-center gap-5 px-5 py-5 rounded-[15px] border-2 border-[#D9D9D9]">
                  <div className="w-[25%]">
                    <img src={Team_1} alt="Team-1" />
                  </div>
                  <div>
                    <p className="text-[20px] font-[Inter, sans-serif] font-normal">
                      Rahul Chaudhary
                    </p>
                    <span className="font-[Inter, sans-serif] font-semibold">
                      Team Leader
                    </span>
                  </div>
                </div>
                <div className="flex basis-[32%] items-center gap-5 px-5 py-5 rounded-[15px] border-2 border-[#D9D9D9]">
                  <div className="w-[25%]">
                    <img src={Team_2} alt="Team-2" />
                  </div>
                  <div>
                    <p className="text-[20px] font-[Inter, sans-serif] font-normal">
                      Rahul Chaudhary
                    </p>
                    <span className="font-[Inter, sans-serif] font-semibold">
                      Team Leader
                    </span>
                  </div>
                </div>
                <div className="flex basis-[32%] items-center gap-5 px-5 py-5 rounded-[15px] border-2 border-[#D9D9D9]">
                  <div className="w-[25%]">
                    <img src={Team_3} alt="Team-3" />
                  </div>
                  <div>
                    <p className="text-[20px] font-[Inter, sans-serif] font-normal">
                      Rahul Chaudhary
                    </p>
                    <span className="font-[Inter, sans-serif] font-semibold">
                      Team Leader
                    </span>
                  </div>
                </div>
                <div className="flex basis-[32%] items-center gap-5 px-5 py-5 rounded-[15px] border-2 border-[#D9D9D9]">
                  <div className="w-[25%]">
                    <img src={Team_4} alt="Team-4" />
                  </div>
                  <div>
                    <p className="text-[20px] font-[Inter, sans-serif] font-normal">
                      Rahul Chaudhary
                    </p>
                    <span className="font-[Inter, sans-serif] font-semibold">
                      Team Leader
                    </span>
                  </div>
                </div>
                <div className="flex basis-[32%] items-center gap-5 px-5 py-5 rounded-[15px] border-2 border-[#D9D9D9]">
                  <div className="w-[25%]">
                    <img src={Team_5} alt="Team-5" />
                  </div>
                  <div>
                    <p className="text-[20px] font-[Inter, sans-serif] font-normal">
                      Rahul Chaudhary
                    </p>
                    <span className=" font-[Inter, sans-serif] font-semibold">
                      Team Leader
                    </span>
                  </div>
                </div>
                <div className="flex basis-[32%] items-center gap-5 px-5 py-5 rounded-[15px] border-2 border-[#D9D9D9]">
                  <div className="w-[25%]">
                    <img src={Team_6} alt="Team-6" />
                  </div>
                  <div>
                    <p className="text-[20px] font-[Inter, sans-serif] font-normal">
                      Rahul Chaudhary
                    </p>
                    <span className="font-[Inter, sans-serif] font-semibold">
                      Team Leader
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}

            <div className="py-14">
              <div className="flex justify-between  items-center ">
                <h1 className="text-[36px] font-[Inter, sans-serif] font-semibold text-[#333]">
                  FAQs
                </h1>
                <button className="text-[23px] font-[Inter, sans-serif] font-normal leading-[70px]">
                  Expand All
                </button>
              </div>
              <div>
                <div className="flex flex-col border-b-2 gap-1 border-[#D9D9D9]">
                  <div
                    className="flex gap-1 items-center"
                    onClick={() => toggleSection(0)}
                  >
                    <FiPlus className="text-[18px] font-normal" />
                    <h3 className="text-[18px] font-[Inter, sans-serif] font-normal leading-[70px]">
                      What is Data Processing and Why is it Important?
                    </h3>
                  </div>
                  {openIndex === 0 && (
                    <p className="pl-5 pb-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col border-b-2 gap-1 border-[#D9D9D9]">
                <div
                  className="flex gap-1 items-center"
                  onClick={() => toggleSection(1)}
                >
                  <FiPlus className="text-[18px] font-normal" />
                  <h3 className="text-[18px] font-[Inter, sans-serif] font-normal leading-[70px]">
                    What are the Different Stages of Data Processing?
                  </h3>
                </div>
                {openIndex === 1 && (
                  <p className="pl-5 pb-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                )}
              </div>

              <div className="flex flex-col border-b-2 gap-1 border-[#D9D9D9]">
                <div
                  className="flex gap-1 items-center"
                  onClick={() => toggleSection(2)}
                >
                  <FiPlus className="text-[18px] font-normal" />
                  <h3 className="text-[18px] font-[Inter, sans-serif] font-normal leading-[70px]">
                    What Methods are Used for Data Tabulation?
                  </h3>
                </div>
                {openIndex === 2 && (
                  <p className="pl-5 pb-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                )}
              </div>

              <div className="flex flex-col border-b-2 gap-1 border-[#D9D9D9]">
                <div
                  className="flex gap-1 items-center"
                  onClick={() => toggleSection(3)}
                >
                  <FiPlus className="text-[18px] font-normal" />
                  <h3 className="text-[18px] font-[Inter, sans-serif] font-normal leading-[70px]">
                    How Can Data Processing Improve Decision-Making?
                  </h3>
                </div>
                {openIndex === 3 && (
                  <p className="pl-5 pb-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                )}
              </div>

              <div className="flex flex-col border-b-2 gap-1 border-[#D9D9D9]">
                <div
                  className="flex gap-1 items-center"
                  onClick={() => toggleSection(4)}
                >
                  <FiPlus className="text-[18px] font-normal" />
                  <h3 className="text-[18px] font-[Inter, sans-serif] font-normal leading-[70px]">
                    What Are the Common Challenges in Data Processing and
                    Tabulation?
                  </h3>
                </div>
                {openIndex === 4 && (
                  <p className="pl-5 pb-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                )}
              </div>
            </div>

            {/* Latest Update Section */}
            <section className="inline-block w-full py-14">
              <div className="flex justify-between items-center gap-4 pb-7">
                <h2 className="text-[40px] font-bold">Latest Updates</h2>
                <div className="flex items-center justify-between lgMax:w-full mdMax:flex-col mdMax:gap-6">
                  <Link className="px-4 py-2  ">
                    Tags : Data Tabulation , Database Management
                  </Link>
                </div>
              </div>
              <div className="flex gap-6">
                {singlepageupdate.map((updateItem) => {
                  const { bgImage, date, description } = updateItem;
                  return (
                    <div className="basis-1/3">
                      <div className="w-full border-[1px] border-[#dbdbdb] rounded-lg hover:shadow-[0_.5rem_1rem_rgba(0,0,0,.15)] hover:transform hover:duration-500 hover:ease-in-out">
                        <Link className="w-[100%] h-[205px]">
                          <img
                            className="rounded-t-lg w-[100%] h-[100%] object-cover"
                            src={bgImage}
                            alt="news-image"
                          />
                        </Link>
                        <div className=" flex flex-col gap-1 px-4 py-4 ">
                          <p className="inline-block mb-2 text-[#141414] text-[20px] capitalize leading-6">
                            {name}
                          </p>
                          <p className="text-[#545454] leading-6 pb-2">
                            {description}
                          </p>
                          <span>{date}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleConsultingPage;
