import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Card } from "antd";

import image1 from "/assets/images/cities/biratnagar.png";
import image2 from "/assets/images/cities/kathmandu.png";
import image3 from "/assets/images/cities/pokhara.png";
import image4 from "/assets/images/cities/bharatpur.png";
import image5 from "/assets/images/cities/birgunj.png";
import image6 from "/assets/images/cities/janakpur.png";
import image7 from "/assets/images/cities/dharan.png";
import image8 from "/assets/images/cities/itahari.png";
import image9 from "/assets/images/cities/damak.png";

const Cities = () => {
  useEffect(()=>{
        document.title="SRIYOG City | Professional Marketplace"
      },[]);
  const name = " Major Cities";

  const cities = [
    { name: "Biratnagar", image: image1 },
    { name: "Kathmandu", image: image2 },
    { name: "Pokhara", image: image3 },
    { name: "Bharatpur", image: image4 },
    { name: "Birgunj", image: image5 },
    { name: "Janakpur", image: image6 },
    { name: "Dharan", image: image7 },
    { name: "Itahari", image: image8 },
    { name: "Damak", image: image9 },
  ];

  return (
    <>
      <Breadcrumb name={name} />

      <div className="w-full flex justify-center  mb-[56px] px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1140px]   max-md:w-[90%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10">
            {cities.map((city, index) => (
              <Card
                key={index}
                className="overflow-hidden rounded-md  shadow-lg w-full"
                bodyStyle={{ padding: 0 }}
                cover={
                  <div className="relative  lg:h-48 max-lg:h-auto xl:h-52">
                    <img
                      alt={city.name}
                      src={city.image}
                      className="w-full h-full object-cover brightness-75"
                    />
                    <div className="absolute bottom-2 left-0 w-full text-white text-xl sm:text-2xl md:text-3xl font-bold px-4 py-2">
                      <div className="inline-block relative hover:after:w-full after:block after:h-[3px] after:bg-[#8b181b] after:w-0 transition-all duration-300 cursor-pointer">
                        {city.name}
                      </div>
                    </div>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cities;
