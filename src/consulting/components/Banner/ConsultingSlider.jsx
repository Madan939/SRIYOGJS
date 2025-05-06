import React from "react";
import serviceData from "../../data/servicesData.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import "./CustomSlick.css";

const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`absolute right-8 bottom-[-60px]   z-10 border-[1px] border-[#ddd] text-black px-2 py-[6px] rounded-[50%] hover:shadow-[0_.5rem_1rem_rgba(0,0,0,.15)] hover:transform hover:duration-500 hover:ease-in-out mdMax::bottom-[-35px] mdMax::right-6`}
      onClick={onClick}
    >
      <GoArrowRight />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute bottom-[-60px] right-20 z-10 border-[1px] border-[#ddd] text-black px-2 py-[6px] rounded-[50%] hover:shadow-[0_.5rem_1rem_rgba(0,0,0,.15)] hover:transform hover:duration-500 hover:ease-in-out mdMax::left-[20px] mdMax::bottom-[-35px] mdMax::w-[40px]`}
      onClick={onClick}
    >
      <div>
        <GoArrowLeft />
      </div>
    </div>
  );
};

const ConsultingSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="w-full ">
      <div>
        <Slider {...settings}>
          {serviceData.map((consultingItem, consultingIndex) => {
            const { image, name } = consultingItem;
            return (
              <article className="text-center  px-[20px] mdMax::w-[50%]">
                <Link to= "">
                  <img
                    className="rounded-lg"
                    src={image}
                    alt="consultingImg "
                  />
                  <h3 className="text-[16px] inline-block pt-4">{name}</h3>
                </Link>
              </article>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default ConsultingSlider;
