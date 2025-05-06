import React, { useState } from "react";
import headerLogo from "/assets/images/header/logo.svg";
import headerMail from "/assets/images/header/mail.svg";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [navSection, setNavSection] = useState(false);
  const toggleHamburger = () => {
    setNavSection(!navSection);
  };

  return (
    <>
      <header className="w-full sticky top-0 z-10 bg-[#fff] shadow-2xl">
        <nav className="flex justify-between items-center">
          <div className="lg:w-[1140px]  max-md:w-[90%] max-lg:w-[88%] h-[86px] mx-auto flex justify-between items-center">
            <div>
              <Link to="/" className="flex items-center cursor-pointer">
                <img
                  src={headerLogo}
                  alt="header-logo"
                  className="w-[198.98px] h-[55px] object-contain max-md:w-[160px] max-lg:h-auto"
                />
                <span className="text-[18px]  max-md:text-[17px]">
                  &nbsp;&nbsp;| Career
                </span>
              </Link>
            </div>

            <div>
              <div className="hidden lg:block">
                <ul className="flex list-none space-x-[35px] items-center text-[14px]  text-[#333]">
                  {[
                    { path: "/", label: "Home" },
                    { path: "/about", label: "About" },
                    { path: "/team", label: "Team" },
                    { path: "/faq", label: "FAQ" },
                    { path: "/contact", label: "Contact" },
                  ].map(({ path, label }) => (
                    <li key={path}>
                      <NavLink to={path} className={({ isActive }) =>
                        isActive ? "text-[#A52629] font-bold" : "hover:text-[#A52629] font-semibold"
                      }>
                        {label}
                      </NavLink>
                    </li>
                  ))}
                  <li>
                    <Link
                      to="/"
                      className="bg-[#8b181b] text-white px-4 py-[8px] rounded-md hover:bg-[#b02b2f] transition"
                    >
                      Hire now
                    </Link>
                  </li>
                  <li>
                    <a href="https://mail.yandex.com/" target="_blank" rel="noreferrer">
                      <img src={headerMail} alt="header-mail" className="w-[58px] h-[36px]" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className={`hidden max-lg:block py-1 px-3 rounded-md cursor-pointer border ${navSection ? "border-[2px] border-[#4b4b4b]" : "border"}`} onClick={toggleHamburger}>
                <RxHamburgerMenu className="text-[30px] text-[#333]" />
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`hidden absolute top-[83px] bg-[#fff] max-md:w-[100%] max-lg:w-[100%] transition-all duration-500 ease-in-out max-lg:block overflow-hidden ${navSection ? "opacity-100 translate-y-0 max-h-[500px]" : "opacity-0 -translate-y-5 max-h-0"
            }`}
        >
          <ul className="list-none space-y-4 px-2 pb-4 text-[15px] font-bold text-[#333] mx-auto max-md:w-[89%] max-lg:w-[88%]">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/team", label: "Team" },
              { path: "/faq", label: "FAQ" },
              { path: "/contact", label: "Contact" },
            ].map(({ path, label }) => (
              <li key={path} className="hover:text-[#A52629]">
                <NavLink to={path} onClick={() => setNavSection(false)} className={({ isActive }) =>
                  isActive ? "text-[#A52629] max-md:text-[17px]" : "hover:text-[#A52629] max-md:text-[17px]"}>
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/"
                onClick={() => setNavSection(false)}
                className="bg-[#8b181b] text-white max-md:text-[17px] max-md:py-[4px] max-md:px-2 px-4 py-[8px] rounded-md hover:bg-[#b02b2f] transition"
              >
                Hire now
              </Link>
            </li>
            <li>
              <a href="https://mail.yandex.com/" target="_blank" rel="noreferrer">
                <img src={headerMail} alt="header-mail" className="w-[58px] h-[36px] max-md:w-[55px] max-lg:h-auto" />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
