import React, { useState } from "react";
import clientData from "../data/clientData.js";
import { useLocation, Link } from "react-router-dom";
import Meta from "../components/Meta.jsx";
const Client = () => {
  const name = useLocation();
  const [toggleDesc, setToggleDesc] = useState(false);
  return (
    <>
      <Meta title={name} />
      <section className="pb-[90px] lgMax:w-full lgMax:pt-[60px] mdMax:pt-[52px]">
        <div>
          <div className="bg-[#8B181B] h-auto lgMax:h-auto">
            <div className="max-w-[1180px] mx-auto my-0 lgMax:max-w-[920px] mdMax:max-w-[720px] py-9 lgMax:px-12">
              <div className="flex flex-col">
                <h1 className="!text-4xl !text-white !mb-2 !font-semibold !leading-5 !mdMax:leading-[2rem]">
                  Our Clients
                </h1>
                {/* <h4 className="inline-block text-white text-[19px] mt-2">
                  we pride ourselves on working with a diverse range of clients
                  across various industries.
                </h4> */}
              </div>
            </div>
          </div>

          <div className="max-w-[1180px] mx-auto my-0 lgMax:max-w-[920px] h-[auto] lgMax:mx-auto lgMax:my-0 mdMax:max-w-[720px] mdMax:mx-auto mdMax:my-0 py-14 lgMax:px-12 mdMax:px-4">
            {/* Client Header */}
            <div className="flex flex-col gap-5 basis-[60%] mx-auto text-center pb-[60px]">
              <h1 className="text-[32px] text-[#862124]">
                Drive your own revolution with SRIYOG
              </h1>
              <p className="max-w-[800px] mx-auto">
                Our open source experts work with your organization to implement
                a cloud strategy to evolve at a pace that works for you. We
                believethat sharing ideas and building a strategy together is a
                better approach for your long-term success than following a
                prescribed plan.
              </p>
            </div>

            {/* Clients Content */}
            <div className="flex flex-wrap gap-8 gap-y-[80px] lgMax:justify-center">
              {clientData.map((clientItem, clientIndex) => {
                const { name, image, title, category, description, date } =
                  clientItem;
                return (
                  <div className="basis-[30%] h-full flex flex-col bg-[#f4f0f0] rounded-[20px] lgMax:basis-[45%] mdMax:basis-[100%] lgMax:gap-2 inset-shadow-sm">
                    <div className="">
                      <img
                        className="rounded-t-[0.55rem]"
                        src={image}
                        alt="client-image"
                      />
                    </div>
                    <div className="flex flex-col gap-3  px-5 py-5 text-justify">
                      <Link className="text-[15px]  font-bold">{title}</Link>
                      <p
                        className="text-[13px] "
                        onClick={() => setToggleDesc(!toggleDesc)}
                      >
                        {clientData.id === clientIndex && toggleDesc
                          ? description
                          : `${description.slice(0, 200)}...`}
                      </p>
                      <p className="text-[14px] font-bold text-[#000] ">
                        Services Offered
                      </p>
                      <div className="flex gap-4 ">
                        {category.map((categoryItem, categoryIndex) => {
                          return (
                            <div className="border-[1px] border-[#cfcfcf] capitalize px-1 rounded-lg text-[14px] place-content-center">
                              <Link key={categoryIndex}>{categoryItem}</Link>
                            </div>
                          );
                        })}
                      </div>

                      <p className="text-[14px] pb-[10px] font-normal  border-b-[1px] border-[#000] ">
                        Service Started Date : <span>{date}</span>
                      </p>
                      <div className="pt-2">
                        <Link
                          to=""
                          className="px-[6px] bg-transparent text-[15px] border-[1px] border-[#cfcfcf] hover:bg-[#cfcfcf] transition-all duration-8000 ease-linear rounded-[8px]"
                        >
                          Browse More
                        </Link>
                      </div>
                    </div>
                  </div>

                  // <div className="basis-[30%] text-center lgMax:basis-[45%] mdMax:basis-full shadow-[0_.5rem_1rem_rgba(0,0,0,.15)] transform transition-transform duration-200 ease-in-out border-[1px] border-gray-300 rounded-lg">
                  //   <div className=" px-5  h-[100%] flex items-center justify-center mb-5">
                  //     <img className="object-cover" src={image} alt="1" />
                  //   </div>
                  //   <h3>
                  //     <p>{name}</p>
                  //   </h3>
                  // </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Client;
