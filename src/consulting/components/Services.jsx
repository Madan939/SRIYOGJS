// CONSULTING PAGE

import React from "react";
import ConsultingData from "../data/consulting.js";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Meta from "../components/Meta.jsx";

const Services = () => {
  const name = useLocation();
  return (
    <>
      <Meta title={name} />
      <section className="pb-[90px] lgMax:pt-[60px] mdMax:pt-[52px] ">
        <div>
          {/* consulting page header */}
          <div className="bg-[#8B181B] h-auto lgMax:h-auto">
            <div className="max-w-[1180px] mx-auto my-0 lgMax:max-w-[920px] lgMax:mx-auto lgMax:my-0 mdMax:max-w-[720px] mdMax:mx-auto mdMax:my-0 py-9 lgMax:px-12">
              <h1 className="!text-4xl !text-white !mb-2 !font-semibold !leading-5 !mdMax:leading-[2rem]">
                IT Consulting Services
              </h1>
              {/* <h4 className="inline-block text-white text-[19px] mt-2">
                We help businesses align their IT strategy with their business
                goals, providing a roadmap for long-term success.
              </h4> */}
            </div>
          </div>

          {/* consulting page items */}
          <div className="bg-[#efefef]">
            <div className="mx-auto my-0 max-w-[1180px] lgMax:max-w-[920px] lgMax:mx-auto lgMax:my-0 lgMax:px-10 lgMax:py-14 lgMax:pb-0 mdMax:max-w-[720px] mdMax:mx-auto mdMax:my-0 mdMax:10">
              <div className="flex flex-wrap gap-8 pt-14 pb-16 justify-between lgMax:justify-around mdMax:flex-col">
                {ConsultingData.map((consultingItem, consultingIndex) => {
                  const { name, image, description } = consultingItem;
                  return (
                    <div
                      key={consultingIndex}
                      className="flex flex-col basis-[30%] lgMax:basis-[40%] bg-white px-6 items-center gap-4 py-6 shadow-[0_.5rem_1rem_rgba(0,0,0,.15)] transform transition-transform duration-200 ease-in-out rounded-[15px]"
                    >
                      <div className="flex flex-col items-center gap-4 pb-4">
                        <div className="w-24 text-center">
                          <img src={image} alt="consulting-image" />
                        </div>
                        <h5 className="text-center">{name}</h5>
                        {/* <p className="break-words text-center">
                          {description.slice(0, 90)}...
                        </p> */}
                      </div>
                      {/* <div>
                        <Link
                          to={`/consulting/service/${name
                            .split(` `)
                            .join(`-`)
                            .toLowerCase()}`}
                          className="px-4 py-2 border-[1px] border-[#cfcfcf] hover:bg-[#cfcfcf] transition-all duration-8000 ease-linear rounded-md"
                        >
                          Read More
                        </Link>
                      </div> */}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
