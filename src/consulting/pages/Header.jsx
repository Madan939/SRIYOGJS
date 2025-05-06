import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import RequestSupport from "../components/RequestSupport.jsx"; // Import the RequestSupport component
import { IoMdClose } from "react-icons/io";

const Header = () => {
  // const [navcolor, setNavcolor] = useState(false);
  const [toogleSubnav, setTooglesubnav] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [toogleNav, settoggleNav] = useState(false);
  const [showRequestSupport, setShowRequestSupport] = useState(false);

  // Function to handle closing the navbar
  const closeNavbar = () => {
    settoggleNav(false);
  };

  const hidden_navbarimage = "/consulting/assets/hidden-navbarimage.png";

  // No Scroll while navbar is ON

  // useEffect(() => {
  //   // Disable scroll when modal is open
  //   if (toogleNav || showRequestSupport) {
  //     document.body.style.overflow = "auto";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }

  //   // Clean up when modal is closed or component unmounts
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [toogleNav, showRequestSupport]);

  // const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Adjust body styles when the popup is shown or hidden
  useEffect(() => {
    if (toogleNav || showRequestSupport) {
      // Calculate the scrollbar width
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      // Apply styles to body to hide scrollbar and add padding for the scrollbar
      document.body.style.overflowY = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      // Reset the styles when the popup is closed
      document.body.style.overflowY = "scroll";
      document.body.style.paddingRight = "0";
    }

    // Cleanup when component unmounts or popup state changes
    return () => {
      document.body.style.overflowY = "scroll";
      document.body.style.paddingRight = "0";
    };
  }, [toogleNav, showRequestSupport]);

  // changing nav color

  // useEffect(() => {
  //   const ChangeNavcolor = () => {
  //     if (window.scrollY >= 67) {
  //       setNavcolor(true);
  //     } else {
  //       setNavcolor(false);
  //     }
  //   };
  //   window.addEventListener("scroll", ChangeNavcolor);

  //   return () => {
  //     window.removeEventListener("scroll", ChangeNavcolor);
  //   };
  // }, []);

  return (
    <>
      {isHomePage && (
        <div
          className={`bg-[#4B4B4B] ${
            toogleSubnav ? "inline-block w-full" : "hidden"
          }`}
        >
          <div className="flex justify-between py-4 text-white  mx-auto my-0 max-w-[1180px] items-center lgMax:my-0 lgMax:max-w-[960px] mdMax:px-1 mdMax:py-0 lgMax:px-[6px] lgMax:py-[13px]">
            <div className="flex gap-2">
              <p className="text-white text-[14px] font-semibold pl-4">
                Toll Free Helpline Number
              </p>
              <Link
                to="tel:1660-215-2020"
                className="underline text-[14px] font-semibold"
              >
                1660-215-2020
              </Link>
            </div>
            <div>
              <div className="flex gap-[10px]">
                <Link to="tel:+977-9852024365">
                  <button className="border-2 border-white rounded-md w-20 h-[30px] text-[14px] font-normal outline-none">
                    Call Now
                  </button>
                </Link>
                <button
                  type="button"
                  className="border-2 border-white rounded-md w-[30px] h-[30px] text-[14px] font-normal outline-none"
                  onClick={() => setTooglesubnav(false)}
                >
                  <IoClose />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <header className="sticky top-0 z-[999]">
        <div className="w-[100%] bg-[#d3d3d3] shadow-[0_.5rem_1rem_rgba(0,0,0,.15)]">
          <div className="mx-auto my-0 max-w-[1180px] lgMax:px-8 lgMax:my-0 lgMax:max-w-[960px] mdMax:px-1 mdMax:py-0  z-40 relative">
            <Navbar
              toogleNav={toogleNav}
              setShowRequestSupport={setShowRequestSupport}
              isHomePage={isHomePage}
              settoggleNav={settoggleNav}
            />
          </div>
        </div>

        {/* Render RequestSupport Modal Conditionally */}
        <div
          className={` ${
            showRequestSupport
              ? "bg-[rgba(20,20,20,0.75)] w-[100%] h-[100vh] absolute top-0 z-50 left-0 lgMax:overflow-y-auto opacity-100  transition-all duration-1000 ease-in-out"
              : "absolute opacity-0 top-0 left-0 invisible w-[100%] h-full"
          }`}
        >
          {/* Render the RequestSupport Form */}
          <RequestSupport
            showRequestSupport={showRequestSupport}
            setShowRequestSupport={setShowRequestSupport}
            isHomePage={isHomePage}
          />
        </div>

        {/* HIDDEN NAVBAR POPUP */}
        <div
          className={` ${
            toogleNav
              ? "bg-[rgba(20,20,20,0.75)] w-[100%] h-[100vh] absolute top-0 z-50 left-0 lgMax:overflow-y-auto opacity-100  transition-all duration-1000 ease-in-out"
              : "absolute opacity-0 top-0 left-0 invisible w-[100%]  h-full"
          }`}
        >
          <div className="max-w-[1180px] mx-auto my-0 w-full bg-white rounded-[25px] shadow-lg px-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lgMax:transform-none lgMax:left-0 lgMax:rounded-none  lgMax:top-0 lgMax:overflow-y-scroll ">
            <span
              className="inline-block w-full text-end text-[#000] p-4 "
              onClick={closeNavbar}
            >
              {toogleNav && (
                <IoMdClose className="text-red-700 border-[1px] text-2xl cursor-pointer hover:scale-125 transition-all duration-100 ease-linear" />
              )}
            </span>

            {/* hidden hidden  navbar */}
            <div className=" basis-full lgMax:basis-full pb-[30px] flex flex-wrap lgMax:gap-4">
              <ul
                className={` text-xl flex-col gap-5 w-full hidden  lgMax:text-center ${
                  toogleNav ? "lgMax:flex" : "invisible"
                }`}
              >
                <li className="text-[#4B4B4B] hover:text-[#862124]">
                  <Link to="/consulting" onClick={closeNavbar}>
                    Home
                  </Link>
                </li>
                <li className="text-[#4B4B4B] hover:text-[#862124]">
                  <Link to="consulting/about" onClick={closeNavbar}>
                    About
                  </Link>
                </li>
                <li className="text-[#4B4B4B] hover:text-[#862124]">
                  <Link to="consulting/team" onClick={closeNavbar}>
                    Team
                  </Link>
                </li>
                <li className="text-[#4B4B4B] hover:text-[#862124]">
                  <Link to="consulting/consulting" onClick={closeNavbar}>
                    Consulting
                  </Link>
                </li>
                <li className="text-[#4B4B4B] hover:text-[#862124]">
                  <Link to="consulting/contact" onClick={closeNavbar}>
                    Contact
                  </Link>
                </li>
              </ul>

              {/* hidden navbar content */}
              <div className="flex flex-wrap  lgMax:gap-8 lgMax:text-center">
                <div className=" basis-[60%] flex-wrap lgMax:basis-full">
                  <div className="flex gap-[50px] mdMax:flex-col mdMax:flex-wrap gap-x-0 ">
                    <div className="basis-full">
                      <Link className="pb-2 inline-block text-[#141414] text-xl leading-7 hover:underline">
                        Transportation services
                      </Link>
                      <ul
                        className="flex flex-col gap-1 text-[#141414] text-[15px]
"
                      >
                        <li className="hover:underline">
                          <Link>Ocean Transport</Link>
                        </li>
                        <li className="hover:underline">
                          <Link>Inland Transport</Link>
                        </li>
                        <li className="hover:underline">
                          <Link>Maersk Ground Freight</Link>
                        </li>
                        <li className="hover:underline">
                          <Link>Less-than-Container Load (LCL)</Link>
                        </li>
                        <li className="hover:underline">
                          <Link>Air Freight</Link>
                        </li>
                        <li className="hover:underline">
                          <Link>Cross Border Rail Transportation</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="basis-full lgMax:text-center">
                      <Link className="pb-2 inline-block text-[#141414] text-xl leading-7 hover:underline">
                        Digital solutions
                      </Link>
                      <ul className="flex flex-col gap-1 text-[#141414] text-[15px]">
                        <li className="hover:underline">
                          <Link>Data Integrations</Link>
                        </li>
                        <li className="hover:underline">
                          <Link>Captain Peter</Link>
                        </li>
                        <li className="hover:underline">
                          <Link>Emissions Dashboard</Link>
                        </li>
                        <li className="hover:underline">
                          <Link>Maersk App</Link>
                        </li>
                        <li className="hover:underline">
                          <Link>MyFinance</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex basis-[40%] lgMax:basis-full gap-6bg-[#f7f7f7] rounded-lg flex-col-reverse">
                  <div className="flex flex-col  bg-[#D9D9D9] gap-2 p-4 rounded-b-[25px]">
                    <h4 className="text-xl leading-7">Highlighted Story</h4>
                    <p className="pb-4">
                      How Rahul upgraded himself to Information Technology from
                      a Business Management student.
                    </p>
                    <div>
                      <Link
                        to="consulting/book"
                        className="px-3 py-1 border-[1px] border-[#333] hover:bg-[#cfcfcf] transition-all duration-8000 ease-linear rounded-md"
                      >
                        Book a Consultant
                      </Link>
                    </div>
                  </div>

                  <div>
                    <img
                      className="rounded-t-[25px] lgMax:w-full"
                      src={hidden_navbarimage}
                      alt="hidden-navbarimage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
