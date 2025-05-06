// NAVBAR COMPONENT

import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = ({
  toogleNav,
  setShowRequestSupport,
  isHomePage,
  settoggleNav,
}) => {
  const navLogo = "/consulting/assets/logo.svg";

  return (
    <>
      <nav>
        <div
          className={`flex py-3 justify-between  smMax:justify-normal   ${
            toogleNav && "lgMax:hidden"
          }`}
        >
          <div className="nav-image flex basis-[40%] lgMax:basis-[60%] items-center mdMax:basis-[50%] smMax:basis-[100%] ">
            <Link to="/consulting" className="basis-[50%] lgMax:basis-[100%]max-smMax:h-[30%] ">
              <img src={navLogo} alt="nav-logo" />
            </Link>
            <span className="basis-[40%] lgMax:basis-full mdMax:basis-[80%] ">
              | Consulting
            </span>
          </div>
          <div className="flex basis-[50%] mdMax:hidden">
            <ul
              className={`flex items-center gap-[28px] justify-end font-semibold ${
                toogleNav ? "" : "lgMax:hidden"
              }`}
            >
              <li className="text-[#4B4B4B] hover:text-[#862124]">
                <Link to="/consulting">Home</Link>
              </li>
              <li className="text-[#4B4B4B] hover:text-[#862124]">
                <Link to="/consulting/about">About</Link>
              </li>
              <li className="text-[#4B4B4B] hover:text-[#862124]">
                <Link to="/consulting/team">Team</Link>
              </li>
              <li className="text-[#4B4B4B] hover:text-[#862124]">
                <Link to="/consulting/solution">Solutions </Link>
              </li>
              <li className="text-[#4B4B4B] hover:text-[#862124]">
                <Link to="/consulting/client">Client</Link>
              </li>
              <li className="text-[#4B4B4B] hover:text-[#862124]">
                <Link to="/consulting/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="nav-icon flex basis-[20%] gap-5 justify-end items-center">
            <span
              className={` font-bold ${
                isHomePage
                  ? "text-[#4B4B4B] text-[28px] hover:text-[#862124]"
                  : "hover:text-[#862124]"
              }`}
            >
              <IoMdNotificationsOutline />
            </span>
            <span
              className={` font-bold ${
                isHomePage
                  ? "text-[#4B4B4B] text-[28px] hover:text-[#862124]"
                  : "hover:text-[#862124]"
              }`}
              onClick={() => setShowRequestSupport(true)}
            >
              <MdOutlineContactSupport />
            </span>
            <span
              className="text-[#4B4B4B] hover:text-[#862124] font-bold"
              onClick={() => settoggleNav(true)}
            >
              <IoMenuSharp />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
