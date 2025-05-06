import React from "react";
import { Link } from "react-router-dom";
const RequestQuote = () => {
  return (
    <div>
      <p className="text-[15px] font-normal pb-[10px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy <br />{" "}
        <span className="pt-4 inline-block pr-[6px]">
          the 1500s, when an unknown printer took a galley of type and scrambled
          it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic{" "}
        </span>
      </p>
      <Link
        to="/consulting/request"
        className="border-[1px] border-black px-[6px] py-[3px] rounded-md"
      >
        <button className="text-[#505051] font-bold mb-1 text-[16px]">
          Request Quote
        </button>
      </Link>
    </div>
  );
};

export default RequestQuote;
