import React, { useState } from "react";
import blogData from "../../data/newsData.js";
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
      className={`absolute right-8 bottom-[-60px]  z-10 border-[1px] border-[#ddd] text-black px-2 py-[6px] rounded-[50%] hover:shadow-[0_.5rem_1rem_rgba(0,0,0,.15)] hover:transform hover:duration-500 hover:ease-in-out mdMax:bottom-[-35px] mdMax:right-6`}
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
      className={`absolute right-20 bottom-[-60px] z-10 border-[1px] border-[#ddd] text-black px-2 py-[6px] rounded-[50%] hover:shadow-[0_.5rem_1rem_rgba(0,0,0,.15)] hover:transform hover:duration-500 hover:ease-in-out mdMax:left-[20px] mdMax:bottom-[-35px] mdMax:w-[40px]`}
      onClick={onClick}
    >
      <GoArrowLeft />
    </div>
  );
};

const Newsslider = () => {
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
          slidesToShow: 2,
        },
      },
    ],
  };
  // TO TOGGLE NEWS SECTION TITLE INDEX
  const [titleIndex, setTitleindex] = useState(null);

  // Function to handle card click and toggle the visibility of the title
  const handleCardClick = (id) => {
    setTitleindex((prev) => (prev === id ? null : id)); // Update the state with the id of the clicked card
  };

  return (
    <section className="inline-block w-full">
      <div className="reletive">
        <Slider {...settings}>
          {blogData.map((bloggItem, blogIndex) => {
            const { bgImage, title, date, category } = bloggItem;
            return (
              <div className="px-2">
                <div className="basis-1/3 border-[1px] border-[#dbdbdb] rounded-lg hover:shadow-[0_.5rem_1rem_rgba(0,0,0,.15)] hover:transform hover:duration-500 hover:ease-in-out">
                  <Link>
                    <img
                      className="rounded-t-lg"
                      src={bgImage}
                      alt="news-image"
                    />
                  </Link>
                  <div className="px-4 py-4 ">
                    <p
                      className="inline-block mb-2 text-[#141414] text-[20px] leading-6"
                      onClick={() => handleCardClick(blogIndex)} // Set the clicked card id
                    >
                      {titleIndex === blogIndex
                        ? `${title}`
                        : `${title.slice(0, 22)}...`}
                    </p>
                    <p className="text-[#545454] leading-6 pb-2">{category}</p>
                    <span>{date}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Newsslider;
