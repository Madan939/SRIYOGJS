import React from "react";

const ImageReact = (props) => {
  const { data, onClick } = props;

  const handleClick = (index) => {
    onClick(index);
  };

  return (
    <>
      <div className="max-w-[1140px] max-lg:w-[88%] max-md:w-[87%] mx-auto mb-[56px] grid max-md:grid-cols-1 max-lg:grid-cols-3 lg:grid-cols-4 gap-10">
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
