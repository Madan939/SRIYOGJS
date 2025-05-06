import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const crossIcon = "/internship/assets/icons/cross.svg";
const hamburgerIcon = "/internship/assets/icons/hamburger-menu.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <section
        className={`w-full z-40 fixed top-0 left-0 right-0 transition-all duration-300 ${
          scrolled ? "bg-[#fff] shadow-md" : "bg-transparent"
        }`}
      >
        <header className="container px-1 relative py-[14px] bg-transparent mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <Link className="flex gap-2 items-center" to={"/internship"}>
                <img
                  className="w-[200px]"
                  src="/internship/assets/logo/logo.svg"
                  alt="SRIYOG_logo"
                />
                <div className="h-[35px] w-[2px] bg-[#113785]"></div>
                <span className="text-[20px] text-[#113785]">Internship</span>
              </Link>
            </div>
            <ul className=" hidden lg:flex gap-6 text-[#113785] text-[20px]">
              <li>
                <Link to={"/internship"}>Home</Link>
              </li>
              <li>
                <Link to={"/internship/about"}>About</Link>
              </li>
              <li>
                <Link to={"/internship/faqs"}>FAQs</Link>
              </li>
              <li>
                <Link to={"/internship/eligibility"}>Eligibility</Link>
              </li>
              <li>
                <Link to={"/internship/testimonials"}>Testimonials</Link>
              </li>
              <li>
                <Link to={"/internship/contact"}>Contact</Link>
              </li>
            </ul>
            <div className="lg:flex gap-2 items-center hidden">
              <div className="font-[700] p-1 px-2 bg-[#11294D] rounded-[10px] text-white">
                <Link to={"/internship/apply"}>Apply Now</Link>
              </div>
              <div className="h-[35px] w-[2px] bg-[#11294D]"></div>
              <a href="mailto:info@sriyog.com">
                <img
                  className="w-[35px]"
                  src="/internship/assets/icons/email.svg"
                  alt="envelope"
                />
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden z-50 ">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="transition-transform duration-300 ease-in-out"
              >
                <img
                  src={isMenuOpen ? crossIcon : hamburgerIcon}
                  alt="menu-toggle"
                  className={`w-[30px] transition-transform duration-300 ${
                    isMenuOpen ? "rotate-90" : "rotate-0"
                  }`}
                />
              </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
              className={`absolute top-[100%] left-0 w-full bg-white shadow-md z-40 transition-all duration-300 overflow-hidden ${
                isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              } lg:hidden`}
            >
              <ul className="flex flex-col gap-4 p-4 text-[#113785] text-[18px]">
                <li>
                  <Link to="/internship" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/internship/about"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/internship/faqs"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/internship/eligibility"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Eligibility
                  </Link>
                </li>
                <li>
                  <Link
                    to="/internship/testimonials"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    to="/internship/contact"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/internship/apply"
                    onClick={() => setIsMenuOpen(false)}
                    className="font-semibold text-white bg-[#11294D] rounded-md px-3 py-1 text-center"
                  >
                    Apply Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </section>
    </>
  );
}

export default Header;
