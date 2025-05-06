import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BookaConsult from "../components/Banner/BookaConsult";
import RequestQuote from "../components/Banner/RequestQuote";

import ConsultingSlider from "../components/Banner/ConsultingSlider.jsx";
import Newsslider from "../components/Banner/Newsslider.jsx";
import { MdKeyboardArrowDown } from "react-icons/md";
import BlogData from "../data/blogData.js";
import { FaWpforms } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import Meta from "../components/Meta.jsx";

const Homepage = () => {
  const [toogleOption, setToogleOption] = useState("Book a Consult");
  const [toogleBlog, setToogleBlog] = useState(null);
  // const [toogleContact, setToggleContact] = useState(false);

  const name = useLocation();

  // importing banner images
  const Solution1 = "/consulting/assets/solution-1.avif";
  const Solution2 = "/consulting/assets/solution-2.webp";
  const Solution3 = "/consulting/assets/solution-3.avif";
  const update_img = "/consulting/assets/banner/update-img.svg";

  return (
    <>
      <Meta title={name} />
      <section className="mdMax:flex mdMax:flex-col mdMax:gap-16">
        {/* HomePage Banner */}
        <div className="flex w-full relative max-w-full max-h-full lgMax:inline-block flex-wrap">
          <div className="bg-banner before:absolute before:bg-gradient-to-r from-red-500 to-yellow-500 bg-cover bg-center bg-no-repeat w-[100%] h-[100%] absolute transform scale-x-[-1] "></div>
          <div className="max-w-[1180px] mx-auto my-0 lgMax:max-w-[920px] h-[649px] lgMax:mx-auto lgMax:my-0 mdMax:max-w-[720px] mdMax:mx-auto mdMax:h-[690px] mdMax:my-0 py-40 lgMax:px-12 lgMax:h-[700px] mdMax:p-20 before:absolute before:bg-[linear-gradient(231deg,_transparent,_rgb(0,_0,_0,_30%)_30%,_rgb(0,_0,_0,_57%))] before:w-[100%] before:h-[100%] before:z-10 before:top-0 before:right-0 before:left-0 before:bottom-0 mdMax:px-0 mdMax:py-0">
            <div className="z-30 relative">
              <div className="flex justify-between items-center flex-wrap lgMax:flex-col ">
                <div className="basis-[55%] flex flex-col gap-5 !text-white self-start lgMax:basis-full mdMax:pb-[60px] mdMax:px-5 mdMax:py-28">
                  <h1 className="!text-5xl !leading-[56px] !text-white">
                    Dedicated IT Consulting
                  </h1>
                  <p className=" text-justify !text-white">
                    An innovative consulting service driven by streamlined
                    strategies, cutting-edge technology solutions, and
                    industry-leading expertise across a wide range of sectors.
                    <br />
                    <span className="inline-block pt-2">
                      Information Technology can grow the business faster, gives
                      a great digital presence, saves expensive man hours,
                      optimize workforce, manages data, its privacy and also
                      saves the reputation of any organisation for any
                      forthcoming digital disasters like data loss, hacking,
                      identity theft, ransomware attacks and other various
                      issues which we may face anytime, anywhere.
                    </span>
                  </p>
                  <div>
                    <Link
                      to="/consulting/book"
                      className="px-3 py-[6px] border-[1px] border-[#cfcfcf] hover:bg-[#cfcfcf] transition-all duration-8000 ease-linear rounded-md hover:text-black"
                    >
                      Free IT Audit
                    </Link>
                  </div>
                  {/* <div className="flex gap-10 mdMax:gap-2 mdMax:flex-wrap">
                    <div className="flex gap-1 items-center">
                      <FaWpforms />
                      Free IT Survey
                    </div>
                    <div className="flex gap-1 items-center">
                      <FaRegHandshake />
                      View Clients
                    </div>
                    <div className="flex gap-1 items-center">
                      <TfiReload />
                      Latest Updates
                    </div>
                  </div> */}
                </div>

                {/* banner second container */}

                <div className="flex flex-col bg-white lgMax:w-full self-start rounded-lg basis-[33%] py-7 px-6">
                  <ul className="flex gap-4 bg-white text-[#545454] pb-2">
                    <li>
                      <button
                        className={` text-[#505051] font-bold  text-[17px] ${
                          toogleOption === "Book a Consult"
                            ? "border-b-2 border-[#E9E9E9]"
                            : "border-none"
                        }`}
                        onClick={() => setToogleOption("Book a Consult")}
                      >
                        Book a Consultant
                      </button>
                    </li>
                    {/* <li>
                      <button
                        className={` text-[#505051] font-bold text-[17px] ${
                          toogleOption === "Request Quote"
                            ? "border-b-2 border-[#E9E9E9]"
                            : "border-none"
                        }`}
                        onClick={() => setToogleOption("Request Quote")}
                      >
                        Request Quote
                      </button>
                    </li> */}
                  </ul>

                  {toogleOption === "Book a Consult" && <BookaConsult />}
                  {/* {toogleOption === "Request Quote" && <RequestQuote />} */}
                </div>
              </div>
            </div>
          </div>

          {/* fixed icons */}
          <div className="fixed z-[9999] bottom-[20px] right-[20px] text-center  ">
            <div className="border-b-2 pb-2 border-[#DDD9DA] flex gap-2 ">
              <Link className="flex gap-2 text-[#525252c7] flex-col items-center max-h-[30px] overflow-hidden hover:max-h-[1000px] hover:transition-all hover:duration-[3000ms] hover:ease-in">
                <span>
                  <FaWhatsapp className="!text-[28px] " />
                </span>
                <p className="text-[14px]">SRIYOG</p>
              </Link>
            </div>
            <div className="pt-2">
              <Link className="flex gap-2 text-[#525252c7] flex-col items-center max-h-[30px] overflow-hidden hover:max-h-[1000px] hover:transition-all hover:duration-[3000ms] hover:ease-in">
                <span>
                  <FaTelegram className="!text-[28px]" />
                </span>
                <p className="text-[14px]">SRIYOG</p>
              </Link>
            </div>
          </div>
        </div>

        {/* HomePage Section-2 */}
        <div className="max-w-[1180px] mx-auto my-0 lgMax:max-w-[920px] h-[auto] lgMax:mx-auto lgMax:my-0 mdMax:max-w-[720px] mdMax:mx-auto mdMax:my-0 py-14 lgMax:px-12 mdMax:px-4">
          <div className="flex justify-between flex-wrap lgMax:justify-center lgMax:gap-6 pb-8 items-start">
            <div className="flex flex-col gap-5 basis-[75%] lgMax:basis-full lgMax:items-center">
              <div className="flex w-[100%] flex-col gap-5">
                <h2 className="text-[40px] leading-10 lgMax:text-center">
                  Consulting Solutions
                </h2>
                <p className="text-[#545454] w-full text-justify lgMax:text-center">
                  At SRIYOG Consulting, we are a technology-focused firm
                  dedicated to driving digital transformation in agriculture,
                  employment, and tourism. Our team of innovative thinkers and
                  IT experts works closely with clients to modernize systems,
                  streamline processes, and unlock new opportunities. Together,
                  we’re building a smarter, more connected future where
                  technology empowers sustainable growth across key sectors.
                </p>
              </div>
            </div>
            <div className="lgMax:basis-full">
              <Link
                to="/consulting/request"
                className="w-full text-center py-2 px-[8px] bg-[#f7f7f7] hover:bg-[#cfcfcf] hover:transform hover:duration-500 hover:ease-in-out border-[1px] border-[#cfcfcf] rounded-md "
              >
                See all solutions
              </Link>
            </div>
          </div>

          <div>
            <div className="flex gap-5 flex-wrap lgMax:ustify-center lgMax:flex-col">
              <div className="basis-[32%] lgMax:basis-[45%] mdMax:basis-full">
                <img
                  className="rounded-t-lg"
                  src={Solution1}
                  alt="solution-1"
                />
                <div className="p-4 border-[1px] border-[#dbdbdb] rounded-b-lg hover:shadow-[0_.5rem_1rem_rgba(0,0,0,.15)] hover:transform hover:duration-500 hover:ease-in-out">
                  <h3 className="inline-block mb-3 text-[#141414] text-[20px] leading-6">
                    Agritech
                  </h3>
                  <p className="text-[#545454] leading-6 pb-2">
                    Our IT consulting services provide innovative solutions
                    tailored to your business needs. We specialize in helping
                    organizations navigate the complexities of technology...
                  </p>
                </div>
              </div>
              <div className="basis-[32%] lgMax:basis-[45%] mdMax:basis-full">
                <img
                  className="rounded-t-lg"
                  src={Solution2}
                  alt="solution-3"
                />
                <div className="p-4 border-[1px] border-[#dbdbdb] rounded-b-lg hover:shadow-[0_.5rem_1rem_rgba(0,0,0,.15)] hover:transform hover:duration-500 hover:ease-in-out">
                  <h3 className="inline-block mb-3 text-[#141414] text-[20px] leading-6">
                    Employment
                  </h3>
                  <p className="text-[#545454] leading-6 pb-2 ">
                    Our experienced consultants collaborate with you to develop
                    tailored strategies that solve your unique challenges and
                    maximize your growth potential. Whether it’s optimizing
                    IT...
                  </p>
                </div>
              </div>
              <div className="basis-[32%] lgMax:basis-[45%] mdMax:basis-full">
                <img
                  className="rounded-t-lg "
                  src={Solution3}
                  alt="solution-3"
                />
                <div className="p-4 border-[1px] border-[#dbdbdb] rounded-b-lg hover:shadow-[0_.5rem_1rem_rgba(0,0,0,.15)] hover:transform hover:duration-500 hover:ease-in-out">
                  <h3 className="inline-block mb-3 text-[#141414] text-[20px] leading-6">
                    Tourism
                  </h3>
                  <p className="text-[#545454] leading-6 pb-2">
                    mbrace the future of business with IT consulting solutions
                    designed for tomorrow. We combine deep industry knowledge
                    with the..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Consulting Section */}

        <div className="max-w-[1180px] mx-auto my-0 lgMax:max-w-[920px] h-[auto] lgMax:mx-auto lgMax:my-0 mdMax:max-w-[720px] mdMax:mx-auto mdMax:my-0 py-14 lgMax:px-12 mdMax:p-0 mdMax:w-full mdMax:px-1">
          <div className="flex flex-col gap-4 lgMax:items-center mdMax:text-center">
            <h2 className="text-[40px] leading-10">IT Solutions</h2>
            <p className="text-[#545454] w-full pb-10 lgMax:text-center">
              We have a proven track record of delivering high-quality data
              analysis and reporting solutions that meet the needs of our
              clients.
            </p>
          </div>
          <div className="slider-container">
            {/* ../components/Homepage/ConsultingSlider.jsx */}
            <ConsultingSlider />
          </div>
        </div>

        {/* Blog Section */}

        <div className="max-w-[1180px] mx-auto my-0 lgMax:max-w-[920px] h-[auto] lgMax:mx-auto lgMax:my-0 mdMax:max-w-[720px] mdMax:mx-auto mdMax:my-0 py-14 lgMax:px-12 mdMax:px-4">
          <div>
            {/* Blog Header */}

            <div className="w-full flex  justify-between lgMax:flex-col lgMax:pb-10 items-start">
              <div className="flex basis-[75%] flex-col gap-4 lgMax:items-center">
                <h2 className="text-[40px] leading-10">Latest Insights </h2>
                <p className="text-[#545454] w-full pb-10 text-justify mdMax:text-center">
                  Stay up to date with the latest trends, innovations, and
                  insights in the world of IT consulting with SRIYOG Consulting.
                  Through our in-person and virtual events, we bring you the
                  latest developments, success stories, and emerging
                  technologies that are shaping the future of agriculture,
                  employment, tourism, and beyond.
                </p>
              </div>
              <div className="relative basis-[25%]-[20%] mdMax:w-full">
                <select
                  className="border-[1px] border-[#878787] text-[#353535] w-[100%] px-2 py-[10px] z-10 relative bg-transparent focus:outline-none focus:ring-4 focus:shadow-[#B5E0F5]"
                  name="blog-category"
                  id="blog-category"
                >
                  <option value="all-categories">All categories</option>
                  <option value="Digitalisation">Digitalisation</option>
                  <option value="growth">Growth</option>
                  <option value="integrated-logistics">
                    Integrated logistics
                  </option>
                  <option value="resilience">Resilience</option>
                  <option value="sustainability">Sustainability</option>
                </select>
                <MdKeyboardArrowDown className="absolute right-[10px] bottom-[12px] z-0 mdMax:right-[0px] " />
              </div>
            </div>

            {/* Blog Content */}

            <div>
              <div className="grid grid-rows-[300px_300px] lgMax:grid-rows-[200px_200px] grid-cols-4 gap-6 gap-y-0 overflow-hidden pb-[30px] lgMax:gap-5">
                {BlogData.map((blogItem, blogIndex) => {
                  const {
                    date,
                    category,
                    name,
                    description,
                    username,
                    uesrdetails,
                    bgImage,
                  } = blogItem;
                  return (
                    <div
                      key={blogIndex}
                      className={`grid rounded-xl overflow-hidden relative lgMax:col-span-2 lgMax:row-span-2  mdMax:lgMax:col-span-4  ${
                        blogIndex === 0 &&
                        "col-span-2 row-span-3 lgMax:col-span-4 lgMax:row-span-2"
                      } ${
                        blogIndex === 1 &&
                        "col-span-2 mb-6 lgMax:col-span-2 lgMax:row-span-2 lgMax:mb-0"
                      } ${
                        blogIndex === 3 && "lgMax:col-span-4 lgMax:row-span-1"
                      } `}
                    >
                      <div
                        className="text-[#fff]"
                        onMouseEnter={() => setToogleBlog(blogIndex)}
                        onMouseLeave={() => setToogleBlog(null)}
                      >
                        <div
                          // style={{ backgroundImage: `url(${bgImage})` }}
                          className={`grid rounded-xl h-full bg-cover bg-no-repeat bg-center transform  transition-all duration-300 `}
                        >
                          <img
                            className={`w-[100%] h-[100%] object-cover ${
                              toogleBlog === blogIndex
                                ? "transition-all duration-700  ease-in-out scale-110"
                                : " transition-all duration-700  ease-in-out"
                            } `}
                            src={bgImage}
                            alt="blog-img"
                          />
                        </div>
                        <div className="absolute bottom-0">
                          <div>
                            <div className="bg-[linear-gradient(180deg,_transparent,_rgba(0,_0,_0,_0.85)_30%,_rgba(0,_0,_0,_0.85))] px-4 py-5 flex flex-col gap-1">
                              <div className="text-[14px] flex gap-5">
                                <Link className="underline decoration-1 hover:no-underline ">
                                  {category}
                                </Link>
                                <span>{date}</span>
                              </div>
                              <Link className="text-[22px] leading-[30px] hover:underline hover:decoration-1">
                                {name}
                              </Link>
                              <div
                                className={`${
                                  toogleBlog === blogIndex
                                    ? "max-h-[500px] transition-all duration-700  ease-in-out"
                                    : "max-h-[0px]  overflow-hidden transition-all duration-700  ease-in-out "
                                }`}
                              >
                                <div>
                                  <Link className="text-[16px] hover:underline hover:decoration-1 inline-block mb-3">
                                    {description}
                                  </Link>
                                  <div className="text-[14px] leading-[18px] flex flex-col gap-1 ">
                                    <p className="text-white">{username}</p>
                                    <p className="text-white">{uesrdetails}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center pt-[30px]">
                <Link
                  to="/blog"
                  className="px-4 py-2 border-[1px] border-[#cfcfcf] hover:bg-[#cfcfcf] transition-all duration-8000 ease-linear rounded-md"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* News Section */}

        <div className="max-w-[1180px] mx-auto my-0 lgMax:max-w-[920px] h-[auto] lgMax:mx-auto lgMax:my-0 mdMax:max-w-[720px] mdMax:mx-auto mdMax:my-0 py-14 lgMax:px-12 mdMax:px-4 mdMax:w-full">
          {/* News Header */}

          <div className="flex flex-col gap-4">
            {/* events prev header */}
            {/* <div className="pb-10">
              <div className="flex flex-col gap-2 lgMax:items-center">
                <h2 className="text-[40px] leading-10">Events</h2>
                <p className="text-[#545454] w-full pb-10 lgMax:text-center">
                  Stay up to date with the latest trends, innovations, and
                  insights in the world of IT consulting with SRIYOG Consulting.
                  Through our in-person and virtual events, we bring you the
                  latest developments, success stories, and emerging
                  technologies that are shaping the future of agriculture,
                  employment, tourism, and beyond.
                </p>
                <div className="flex items-center justify-between lgMax:w-full mdMax:flex-col mdMax:gap-6">
                  <div className="flex justify-center mdMax:w-full">
                    <Link className="px-4 py-2 border-[1px] border-[#cfcfcf] hover:bg-[#cfcfcf] transition-all duration-8000 ease-linear rounded-md mdMax:w-full">
                      See all news
                    </Link>
                  </div>
                  <div className="relative w-[20%] mdMax:w-full">
                    <select
                      className="border-b-2 rounded-none border-[#a2949436]  text-[#353535] w-[100%] px-2 py-[10px] z-10 relative bg-transparent focus:outline-none focus:ring-4 focus:shadow-[#B5E0F5] mdMax:w-full"
                      name="blog-category"
                      id="blog-category"
                    >
                      <option value="all-categories">View All Events</option>
                      <option value="Digitalisation">Digitalisation</option>
                      <option value="growth">Growth</option>
                      <option value="integrated-logistics">
                        Integrated logistics
                      </option>
                      <option value="resilience">Resilience</option>
                      <option value="sustainability">Sustainability</option>
                    </select>
                    <MdKeyboardArrowDown className="absolute right-[10px] bottom-[12px] mdMax:right-0 z-0" />
                  </div>
                </div>
              </div>
            </div> */}
            <div className="w-full flex  justify-between lgMax:flex-col lgMax:pb-10 items-start">
              <div className="flex basis-[75%] flex-col gap-4 lgMax:items-center">
                <h2 className="text-[40px] leading-10">Events </h2>
                <p className="text-[#545454] w-full pb-10 text-justify mdMax:text-center">
                  Stay up to date with the latest trends, innovations, and
                  insights in the world of IT consulting with SRIYOG Consulting.
                  Through our in-person and virtual events, we bring you the
                  latest developments, success stories, and emerging
                  technologies that are shaping the future of agriculture,
                  employment, tourism, and beyond.
                </p>
              </div>
              {/* <div className="relative basis-[25%]-[20%] mdMax:w-full">
                <select
                  className="border-[1px] border-[#878787] text-[#353535] w-[100%] px-2 py-[10px] z-10 relative bg-transparent focus:outline-none focus:ring-4 focus:shadow-[#B5E0F5]"
                  name="blog-category"
                  id="blog-category"
                >
                  <option value="all-categories">All categories</option>
                  <option value="Digitalisation">Digitalisation</option>
                  <option value="growth">Growth</option>
                  <option value="integrated-logistics">
                    Integrated logistics
                  </option>
                  <option value="resilience">Resilience</option>
                  <option value="sustainability">Sustainability</option>
                </select>
                <MdKeyboardArrowDown className="absolute right-[10px] bottom-[12px] z-0 mdMax:right-[0px] " />
              </div> */}
              <div className="lgMax:basis-full">
                <Link
                  to="/consulting/events"
                  className="w-full text-center py-2 px-[8px] bg-[#f7f7f7] hover:bg-[#cfcfcf] hover:transform hover:duration-500 hover:ease-in-out border-[1px] border-[#cfcfcf] rounded-md "
                >
                  View All Event
                </Link>
              </div>
            </div>
            <div className="slider-container">
              {/* ../components/Homepage/Newsslider.jsx */}
              <Newsslider />
            </div>
          </div>
        </div>

        {/* Update Card Section */}
        <div className="max-w-[1180px] mx-auto my-0 lgMax:max-w-[920px] h-[auto] lgMax:mx-auto lgMax:my-0 mdMax:max-w-[720px] mdMax:mx-auto mdMax:my-0 py-14 lgMax:px-12 mdMax:px-4">
          <div className="flex justify-between flex-wrap lgMax:gap-5 lgMax:justify-center items-start">
            <div className="flex gap-4">
              <img
                className="w-[60px] self-start"
                src={update_img}
                alt="update-img"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-[#141410] text-[20px] leading-6">
                  Offering an internship opportunity
                </h3>
                <p className="text-[#545454]">
                  Stay up to date with our latest information, vessel
                  contingency and updates here. Get an opportunity to contribute
                  in real time projects to enhance your expertise and knowledge.
                  <br />
                  <span className="inline-block pt-2">
                    To accelerate digital transformation, we offer a skilled
                    pool of professionals specializing in frontend development,
                    programming, QA, and UI/UX design. Whether you need
                    freelance experts, short-term support, or a dedicated
                    offshore team, our flexible models are designed to meet your
                    project goals efficiently and cost-effectively.
                  </span>
                </p>
                <div>
                  <Link
                    to="https://sriyog.com/internship "
                    className="px-4 py-2 border-[1px] border-[#cfcfcf] hover:bg-[#cfcfcf] transition-all duration-8000 ease-linear rounded-md"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
