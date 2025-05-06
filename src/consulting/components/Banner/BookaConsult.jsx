import React from "react";
import { Link } from "react-router-dom";

const BookaConsult = () => {
  return (
    <div>
      <p className="text-[15px] font-normal pb-[10px] text-justify">
        Engaging an IT consultant adds valuable insight and professional
        guidance to your technological initiatives. <br />{" "}
        <span className="pt-4 inline-block pr-[6px]">
          IT consultants turn complex tech issues into practical solutions.
          Their expertise helps businesses boost efficiency and stay competitive
          in a fast-changing digital world.
        </span>
      </p>
      <Link
        to="/consulting/book"
        className="border-[1px] border-black px-[6px] py-[3px] align-middle text-center rounded-md"
      >
        <button className="text-[#505051] font-bold mb-1 text-[16px]">
          Book a Consultant{" "}
        </button>
      </Link>
    </div>
  );
};

export default BookaConsult;
