import React from "react";

const ImageReact = (props) => {
  const { data, onClick } = props;

  const handleClick = (index) => {
    onClick(index);
  };

  return (
    <>
      <div className="lg:w-[1140px] md:w-[88%] w-[89%] mx-auto mb-[56px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data.map((slide, index) => (
          <div onClick={() => handleClick(index)} key={index}>
            <p className="text-[#333] mb-4 mx-2 font-medium">{slide.title}</p>
            <img src={slide.image} alt={slide.title} className="border rounded-md cursor-pointer grayscale hover:grayscale-0 transition duration-500" />
          </div>
        ))}
      </div>

    </>
  );
};

export default ImageReact;
