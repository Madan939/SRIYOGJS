import React from "react";
const experienceTeamImage = "/consulting/assets/team.svg";
const buildingImage = "/consulting/assets/building.svg";
const flagImage = "/consulting/assets/flag.svg";
const skillsImage = "/consulting/assets/skills.svg";
const pracasSign = "/consulting/assets/prakash_sig.png";
const pracasPhoto = "/consulting/assets/pracas_large.png";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Meta from "../components/Meta.jsx";
import { useLocation } from "react-router-dom";
// import { Helmet } from "react-helmet";

const About = () => {
  const name = useLocation();

  return (
    <>
      <Meta title={name} />
      {/* <Helmet>
        <title>About</title>
        <meta name="description" />
      </Helmet> */}
      <section className="pb-[90px] lgMax:w-full lgMax:pt-[60px] mdMax:pt-[52px]">
        <div>
          {/* About Page Header */}
          <div className="bg-[#8B181B] h-full lgMax:h-auto">
            <div className="max-w-[1180px] mx-auto my-0 lgMax:max-w-[920px] lgMax:mx-auto lgMax:my-0 mdMax:max-w-[720px] mdMax:mx-auto mdMax:my-0 py-9 lgMax:px-12">
              <h1 className="!text-[2.5rem] !text-white mb-2 !font-semibold !leading-5 !md:leading-[2rem]">
                About
              </h1>
              {/* <br />
              <h4 className="inline-block text-white text-[19px] ">
                SRIYOG has been functioning under a start-up model, is the most
                recent example of leveraging digital technology to address
                social problems like unemployment through digital connectivity.
              </h4> */}
            </div>
          </div>

          {/* About Page Content */}
          <div>
            {/* Who We Are Content */}
            <div className="flex flex-col gap-12">
              <div className="max-w-[1180px] mx-auto my-0 lgMax:max-w-[920px] lgMax:mx-auto lgMax:my-0 mdMax:max-w-[720px] mdMax:mx-auto mdMax:my-0 py-14 lgMax:px-12 smMax:px-0">
                <div className="flex gap-7 lgMax:flex-col lgMax:flex-wrap smMax:p-6">
                  <div className="flex flex-col gap-4 basis-[60%]">
                    <small className="flex w-[13%] pb-2 text-[16px] border-b-2 border-[#8b181b] mdMax:w-[84px] font-semibold ">
                      who we are
                    </small>
                    <h1 className="text-[32px] text-[#862124] capitalize ">
                      Digital Transformation
                    </h1>
                    <p>
                      Established on June 14, 2018, SRIYOG Consulting Pvt. Ltd.,
                      based in Kamalpokhari, Kathmandu, Nepal, is a leading
                      provider of digital solutions focused on driving digital
                      transformation in the sectors of agriculture, employment,
                      and tourism. Our mission is to empower organizations in
                      these vital industries with innovative, scalable, and
                      technology-driven services that enhance operational
                      efficiency and enable long-term growth.
                      <br />{" "}
                      <span className="pt-4 pb-4 inline-block">
                        At SRIYOG Consulting, we believe that smart technology
                        is key to solving sector-specific challenges. Our
                        diverse IT services include data processing, software
                        and web application development, digital marketing,
                        database management, business process automation, and
                        expert IT consultancy—each tailored to the unique needs
                        of agriculture, employment platforms, and tourism
                        operations. By optimizing digital infrastructure, we
                        help our clients streamline their services, engage users
                        effectively, and scale sustainably.
                      </span>{" "}
                      <br />{" "}
                      <span className="pb-4 inline-block">
                        {" "}
                        We specialize in crafting robust and user-friendly web
                        solutions with a focus on modern UI/UX design,
                        full-stack development, and industry-specific
                        platforms—be it for agritech, job-matching portals, or
                        tourism management systems. Our offerings include
                        e-commerce platforms, CMS, SaaS-based solutions, and
                        Progressive Web Applications (PWA) for mobile-first
                        experiences with offline functionality.
                      </span>{" "}
                      <br />{" "}
                      <span className="pb-4 inline-block">
                        For Hosting, Security & Deployment, SRIYOG Consulting
                        provides reliable cloud hosting, domain management, and
                        SSL certification. Our security audits and performance
                        optimization ensure your digital platforms remain fast,
                        secure, and always accessible.SRIYOG Consulting Pvt.
                        Ltd., established on June 14, 2018, in Kamalpokhari,
                        Kathmandu, Nepal, is a premier digital solutions
                        provider committed to driving digital transformation
                        within the agriculture, employment, and tourism sectors.
                        Our mission is to empower organizations in these key
                        industries through innovative, scalable, and
                        technology-driven services that improve operational
                        efficiency and foster sustainable growth.
                      </span>
                      <br />{" "}
                      <span className="pb-4 inline-block">
                        SRIYOG Consulting believes that intelligent technology
                        is crucial for addressing sector-specific challenges.
                        Our comprehensive IT services are tailored to the unique
                        demands of agriculture, employment platforms, and
                        tourism operations. These services include data
                        processing, software and web application development,
                        digital marketing, database management, business process
                        automation, and expert IT consultancy. By optimizing
                        digital infrastructure, we enable our clients to
                        streamline services, effectively engage users, and
                        achieve sustainable scaling.
                      </span>
                      <br />{" "}
                      <span className="pb-4 inline-block">
                        We specialize in developing robust and user-friendly web
                        solutions, emphasizing modern UI/UX design, full-stack
                        development, and industry-specific platforms for
                        agritech, job-matching portals, and tourism management
                        systems. Our offerings encompass e-commerce platforms,
                        content management systems (CMS), Software as a Service
                        (SaaS) solutions, and Progressive Web Applications (PWA)
                        for mobile-first experiences with offline access.
                      </span>
                      <br />{" "}
                      <span className="pb-4 inline-block">
                        For Hosting, Security & Deployment, SRIYOG Consulting
                        delivers dependable cloud hosting, domain management,
                        and SSL certification. Our security audits and
                        performance optimization ensure that your digital
                        platforms remain fast, secure, and consistently
                        accessible.
                      </span>
                    </p>
                    {/* <p>
                      Analyzing the Global Service market, we found unbelievable
                      facts:
                    </p>
                    <ul className="list-[circle] flex flex-col gap-4">
                      <li>
                        {" "}
                        Local experts have a tremendous market; as a result,
                        they drop the small works whereas starters never get an
                        opportunity to prove themselves.
                      </li>
                      <li> Time management and scheduling are never done</li>
                      <li>
                        {" "}
                        The experts and veterans never work to build their team
                        and gain trust. To grab this opportunity, various
                        agencies filled in the space by creating the market and
                        are performing much smoothly
                      </li>
                      <li>
                        {" "}
                        But agencies are creating a hectic schedule, paying low
                        to their employees and charging much higher to the
                        service seekers.
                      </li>
                    </ul> */}
                  </div>

                  <div className="basis-[40%]">
                    <div className="flex w-full h-full bg-mayorImage bg-cover bg-right bg-no-repeat relative max-w-full max-h-full lgMax:h-[300px] lgMax:inline-block ">
                      <div className="absolute bottom-0 bg-[hsla(152,32.66%,95.55%,0.58)]">
                        <p className="text=[#4b4b4b] p-3">
                          Mr. Nagesh Koirala ( Mayor Biratnagar Metropolitan )
                          expressing his views at “Karmashil Award” program held
                          at Morang Byapar Sangh on 12 September 2022.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* About Features */}
              <div className="max-w-[1180px] mx-auto my-0 lgMax:max-w-[920px] lgMax:mx-auto lgMax:my-0 mdMax:max-w-[720px] mdMax:mx-auto mdMax:my-0 py-14 lgMax:px-12 smMax:px-0">
                <div className="flex flex-wrap p-10 bg-[#d4c3c3] rounded-lg mdMax:flex-col smMax:justify-center smMax:p-8 lgMax:gap-0 mdMax:gap-5">
                  <div className=" flex basis-1/2 items-center my-6 pr-8 lgMax:m-0 lgMax:p-0 lgMax:gap-6 lgMax:pr-8 lgMax:pb-8 ">
                    <div className="inline basis-[17%]">
                      <img src={experienceTeamImage} alt="experienced_team" />
                    </div>
                    <div className="inline basis-[80%] ">
                      <h2 className="!inline-block !text-[#862124] !text-[18px] !pb-1">
                        Experienced Team
                      </h2>
                      <p>
                        Deliver high-quality and reliable IT services that help
                        businesses thrive in a digital-first world.
                      </p>
                    </div>
                  </div>

                  <div className=" flex basis-1/2 items-center my-6 pr-8 lgMax:m-0 lgMax:p-0 lgMax:gap-6 lgMax:pr-8 lgMax:pb-8">
                    <div className="inline basis-[17%]">
                      <img src={buildingImage} alt="experienced_team" />
                    </div>
                    <div className="inline basis-[80%] ">
                      <h2 className="!inline-block !text-[#862124] !text-[18px] !pb-1">
                        Enhancing Business Performance
                      </h2>
                      <p>
                        Enable organizations to harness the power of technology
                        for improved decision-making and business performance.
                      </p>
                    </div>
                  </div>

                  <div className=" flex basis-1/2 items-center my-6 pr-8 lgMax:m-0 lgMax:p-0 lgMax:gap-6 lgMax:pr-8 lgMax:pb-8">
                    <div className="inline basis-[17%]">
                      <img src={flagImage} alt="experienced_team" />
                    </div>
                    <div className="inline basis-[80%] ">
                      <h2 className="!inline-block !text-[#862124] !text-[18px] !pb-1">
                        Multiple Opportunities
                      </h2>
                      <p>
                        Foster a culture of innovation and excellence by
                        continuously upgrading our skills and adopting emerging
                        technologies.
                      </p>
                    </div>
                  </div>

                  <div className=" flex basis-1/2 items-center my-6 pr-8 lgMax:m-0 lgMax:p-0 lgMax:gap-6 lgMax:pr-8 lgMax:pb-8">
                    <div className="inline basis-[17%]">
                      <img src={skillsImage} alt="experienced_team" />
                    </div>
                    <div className="inline basis-[80%] ">
                      <h2 className="!inline-block !text-[#862124] !text-[18px] !pb-1">
                        Long-Term Sustainability.
                      </h2>
                      <p>
                        Provide customized and scalable solutions that cater to
                        businesses across various industries, ensuring long-term
                        sustainability and growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* History Of SRIYOG */}

              {/* <div className="bg-[#efefef] ">
           <div className="flex gap-[30px] lgMax:flex-col overflow-x-hidden p-11 items-end h-[550px]">
             <div className="basis-1/2 flex bg-white p-12 flex-col gap-4 rounded-md translate-y-[-65px]">
               <h2>A Brief History of SRIYOG</h2>
               <p>
                 Analyzing the global trend of migration, we can find the
                 only reason for skyrocketing foreign employment is that
                 people choose the easy way of grabbing the readymade market
                 rather than creating something new by themselves.{" "}
               </p>
               <p>
                 This hampers the distribution of the skilled manpower in the
                 underdeveloped countries and brings imbalance over the
                 global community. Analyzing the Global Service market, we
                 found unbelievable facts.
               </p>
             </div>

             <div className="w-[2000px] overflow-x-scroll pb-[50px]">
               <div className="w-[130%] ">
                 <ul className="flex gap-[60px] relative z-10 ">
                   <li className="bg-white p-5 relative before:absolute before:w-[14px] before:h-[14px] before:transform before:rotate-45 before:left-[10px] before:bottom-[-8px] before:bg-[#E0E0E0] before:z-[-1]">
                     <div className="flex flex-col gap-[30px] before:absolute before:w-[25px] before:h-[25px] before:border-[3px] before:border-white before:transform before:rotate-45 before:left-[6px] before:bottom-[-40px] before:bg-[#1f9eba] before:rounded-full">
                       <div className="w-[60%]">
                         <img
                           src={registration}
                           alt="company-registration"
                         />
                       </div>
                       <p>Company Registration</p>
                       <p className="text-[1.25rem]">
                         `` 12 <sup>th</sup> June, 2018
                       </p>
                     </div>
                   </li>

                   <li className="bg-white p-5 relative before:absolute before:w-[14px] before:h-[14px] before:transform before:rotate-45 before:left-[10px] before:bottom-[-8px] before:bg-[#E0E0E0] before:z-[-1]">
                     <div className="flex flex-col gap-[30px] before:absolute before:w-[25px] before:h-[25px] before:border-[3px] before:border-white before:transform before:rotate-45 before:left-[6px] before:bottom-[-40px] before:bg-[#59ba1f] before:rounded-full">
                       <div className="w-[60%]">
                         <img
                           src={registration}
                           alt="company-registration"
                         />
                       </div>
                       <p>Company Registration</p>
                       <p className="text-[1.25rem]">
                         12 <sup>th</sup> June, 2018
                       </p>
                     </div>
                   </li>

                   <li className="bg-white p-5 relative before:absolute before:w-[14px] before:h-[14px] before:transform before:rotate-45 before:left-[10px] before:bottom-[-8px] before:bg-[#E0E0E0] before:z-[-1]">
                     <div className="flex flex-col gap-[30px] before:absolute before:w-[25px] before:h-[25px] before:border-[3px] before:border-white before:transform before:rotate-45 before:left-[6px] before:bottom-[-40px] before:bg-[#ba1f1f] before:rounded-full">
                       <div className="w-[60%]">
                         <img
                           src={registration}
                           alt="company-registration"
                         />
                       </div>
                       <p>Company Registration</p>
                       <p className="text-[1.25rem]">
                         12 <sup>th</sup> June, 2018
                       </p>
                     </div>
                   </li>

                   <li className="bg-white p-5 relative before:absolute before:w-[14px] before:h-[14px] before:transform before:rotate-45 before:left-[10px] before:bottom-[-8px] before:bg-[#E0E0E0] before:z-[-1]">
                     <div className="flex flex-col gap-[30px] before:absolute before:w-[25px] before:h-[25px] before:border-[3px] before:border-white before:transform before:rotate-45 before:left-[6px] before:bottom-[-40px] before:bg-[#d1bd10] before:rounded-full">
                       <div className="w-[60%]">
                         <img
                           src={registration}
                           alt="company-registration"
                         />
                       </div>
                       <p>Company Registration</p>
                       <p className="text-[1.25rem]">
                         12 <sup>th</sup> June, 2018
                       </p>
                     </div>
                   </li>

                   <li className="bg-white p-5 relative before:absolute before:w-[14px] before:h-[14px] before:transform before:rotate-45 before:left-[10px] before:bottom-[-8px] before:bg-[#E0E0E0] before:z-[-1]">
                     <div className="flex flex-col gap-[30px] before:absolute before:w-[25px] before:h-[25px] before:border-[3px] before:border-white before:transform before:rotate-45 before:left-[6px] before:bottom-[-40px] before:bg-[#d1bd10] before:rounded-full">
                       <div className="w-[60%]">
                         <img
                           src={registration}
                           alt="company-registration"
                         />
                       </div>
                       <p>Company Registration</p>
                       <p className="text-[1.25rem]">
                         12 <sup>th</sup> June, 2018
                       </p>
                     </div>
                   </li>

                   <li className="bg-white p-5 relative before:absolute before:w-[14px] before:h-[14px] before:transform before:rotate-45 before:left-[10px] before:bottom-[-8px] before:bg-[#E0E0E0] before:z-[-1]">
                     <div className="flex flex-col gap-[30px] before:absolute before:w-[25px] before:h-[25px] before:border-[3px] before:border-white before:transform before:rotate-45 before:left-[6px] before:bottom-[-40px] before:bg-[#333] before:rounded-full">
                       <div className="w-[60%]">
                         <img
                           src={registration}
                           alt="company-registration"
                         />
                       </div>
                       <p>Company Registration</p>
                       <p className="text-[1.25rem]">
                         12 <sup>th</sup> June, 2018
                       </p>
                     </div>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
         </div> */}

              {/* Man Behind Sriyyog */}
              <div className="max-w-[1180px] mx-auto my-0 lgMax:max-w-[920px] lgMax:mx-auto lgMax:my-0 mdMax:max-w-[720px] mdMax:mx-auto mdMax:my-0 py-14 lgMax:px-12 smMax:px-0">
                <div className="flex gap-6 lgMax:flex-wrap lgMax:fex-col ">
                  <div className="basis-[60%] flex flex-col gap-[16px] p-5 lgMax:basis-full pl-0">
                    <span className="inline-block w-[133px] border-top-4 h-1 bg-[#8b181b] "></span>
                    <h2 className="text-[32px] text-[#862124]">
                      The Man Behind SRIYOG
                    </h2>
                    <p>
                      Pracas Upreti's journey from a startup founder to a
                      technology-driven change-maker in Biratnagar, Nepal,
                      exemplifies the profound impact that individuals can have
                      when they combine innovation with a commitment to social
                      responsibility.{" "}
                    </p>
                    <p>
                      {" "}
                      Through his endeavors, Upreti has not only transformed his
                      community but has also set a precedent for how technology
                      can be harnessed to drive positive change and create a
                      better future for all.
                    </p>
                    <p>
                      {" "}
                      Upreti's journey into the realm of technology began over a
                      decade ago when he founded his first IT startup in 2007
                      A.D. as PRACAS Infosys in Biratnagar. Recognizing the
                      potential of technology to bridge gaps and catalyze
                      progress, he embarked on a mission to leverage digital
                      solutions to address local challenges and foster economic
                      development. His vision was not merely to create
                      successful businesses but to effect meaningful change in
                      his community.
                    </p>

                    <div className="pt-12 flex flex-col gap-1">
                      <div className="w-[115px]">
                        <img src={pracasSign} alt="about_sign" />
                      </div>
                      <p className="font-bold">PRACAS Upreti</p>
                      <ul className="flex gap-2">
                        <li>
                          <Link to="">
                            <FaTelegram className="text-[1.3rem]" />
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <FaXTwitter className="text-[1.3rem]" />
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <FaLinkedin className="text-[1.3rem]" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="basis-[40%] lgMax:basis-full lgMax:flex justify-center">
                    <img src={pracasPhoto} alt="about_photo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
