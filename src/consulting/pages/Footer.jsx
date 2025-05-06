import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const Callicon = "/consulting/assets/missed-call.svg";
  const FooterBanner = "/consulting/assets/footer.png";
  const playstoreIcon = "/consulting/assets/play-store.png";
  const appstoreIcon = "/consulting/assets/app-store.png";
  const navLogo = "/consulting/assets/logo.svg";
  const Joinnow = "/consulting/assets/join-now.png";
  const Maillink = "/consulting/assets/pracas-maily.png";

  return (
    <footer className="lgMax:text-center mdMax:text-start border-t-[1px] border-[#dee2e6]">
      <div className="max-w-[1180px] mx-auto my-0 lgMax:max-w-[920px] lgMax:mx-auto lgMax:my-0 lgMax:px-10 lgMax:py-14 lgMax:pb-0 mdMax:max-w-[720px] mdMax:mx-auto mdMax:my-0 smMax:p-0">
        <div className="main-fooer">
          <div className="flex justify-between text-[#4c4c4c] text-[0.9rem] pt-[25px] items-end mdMax:justify-around lgMax:flex-wrap lgMax:justify-normal lgMax:items-center lgMax:gap-[30px] ">
            <ul className="flex flex-col gap-3 lgMax:w-[30%] mdMax:w-[40%]">
              <li>
                <Link to="">About Us</Link>
              </li>
              <li>
                <Link to="">How It Works</Link>
              </li>
              <li>
                <Link to="">Team</Link>
              </li>
              <li>
                <Link to="#">Press</Link>
              </li>
              <li>
                <Link to="#">
                  Career{" "}
                  <span className="bg-[#862125] px-[5px] py-[2px] text-[11px] text-white rounded-[3px]">
                    We're Hiring
                  </span>{" "}
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-3 lgMax:w-[30%] mdMax:w-[40%]">
              <li>
                <Link to="">Mission / Vision</Link>
              </li>
              <li>
                <Link to="">Video</Link>
              </li>
              <li>
                <Link to="">FAQ/ KnowBase</Link>
              </li>
              <li>
                <Link to="">Welcome</Link>
              </li>
              <li>
                <Link to="">Media Coverage</Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-3 lgMax:w-[30%] mdMax:w-[40%]">
              <li>
                <Link to="">Feedback</Link>
              </li>
              <li>
                <Link to="">Timeline</Link>
              </li>
              <li>
                <Link to="">Feature</Link>
              </li>
              <li>
                <Link to="">Services</Link>
              </li>
              <li>
                <Link to="">Cities</Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-3 lgMax:w-[30%] mdMax:w-[40%]">
              <Link to="" className="inline-block w-[50%] lgMax:w-[63px]">
                <img src={Joinnow} alt="nav-joinnow-page" />
              </Link>
              <Link to="" className="inline-block w-[40%] lgMax:w-[63px]">
                <img src={Maillink} alt="nav-mail-link" />
              </Link>
              <li>
                <Link to="">Privacy Policy</Link>
              </li>
              <li>
                <Link to="">Terms of Services</Link>
              </li>
              <li>
                <Link to="">Sitemap</Link>
              </li>
            </ul>
            <div className="flex flex-col basis-[25%] bg-[#fff] px-8 py-5  gap-3 shadow-[0_.5rem_1rem_rgba(0,0,0,.15)] border-t-[5px] border-[#862124] lgMax:basis-[60%] lgMax:items-center mdMax:basis-[100%] smMax:basis-[100%] mdMax:items-center mdMax:text-center ">
              <div className="max-w-[200px]">
                <img src={navLogo} alt="nav-logo" />
              </div>
              <ul className="footer-info flex flex-col gap-3 mdMax:items-center">
                <li className="text-[16px] text-[#333] font-normal leading-[1.5]">
                  <FaLocationDot className="pr-1" />
                  Rem.Work, Kamalpokhari, Kathmandu, Nepal
                </li>
                <li className="text-[16px] text-[#333] font-normal leading-[1.5]">
                  <FaPhoneAlt />
                  +977-9852025735
                  <br />
                  <small className="text-[#8b181b] font-normal">
                    Calling Time : 10 AM to 5 PM NPT
                  </small>
                </li>
                <li className="text-[16px] text-[#333] font-normal leading-[1.5]">
                  <Link
                    to=""
                    className="flex gap-1 items-center text-[16px] text-[#4c4c4c]  font-normal leading-[1.5] lgMax:justify-center mdMax:items-start mdMax:justify-start hover:text-[#8b181b]"
                  >
                    <IoMailOpenOutline className="text-[#4c4c4c] hover:text-[#8b181b]" />
                    info@sriyog.com
                  </Link>
                </li>
                <li className="flex gap-1 lgMax:justify-center lgMax:items-center mdMax:items-start mdMax:justify-start text-[16px] text-[#333] font-normal leading-[1.5] items-end">
                  <FaTelegram className="text-[20px]" />
                  <FaViber className="text-[20px]" />
                  <FaWhatsapp className="text-[24px]" />
                  +977-9852024365
                </li>
                <li>
                  <b
                    className="flex lgMax:justify-center items-start text-[16px] lgMax:tracking-[.06em] mdMax:justify-start mdMax:items-end
 "
                  >
                    <span>
                      <img
                        className="w-[40px]"
                        src={Callicon}
                        alt="call-icon-footer"
                      />
                    </span>
                    +977-98520{" "}
                    <span className="text-2xl leading-[1.2]">24-365</span>
                  </b>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-banner translate-y-2 mdMax:translate-y-0">
            {" "}
            <img src={FooterBanner} alt="footer-banner" />
          </div>
        </div>
      </div>

      <div className="bg-black w-[100%] h-[50px] mdMax:h-[30%]"></div>

      <div className="border-b-[5px] border-[#862124]">
        <div className="sub-footer mx-auto my-0 max-w-[1140px] flex py-3 lgMax:flex-col lgMax:gap-[12px] lgMax:max-w-[920px] lgMax:mx-auto lgMax:my-0 lgMax:px-10 lgMax:pb-0 lgMax:items-center mdMax:w-[100%] mdMax:inline smMax:flex smMax:px-3 smMax:py-4 smMax:items-center smMax:m-0 smMax:bg-[#F5F5F5]  ">
          <div className="flex justify-between basis-[70%] lgMax:basis-[100%] items-center lgMax:items-center flex-wrap lgMax:gap-[12px] lgMax:justify-center mdMax:items-end smMax:text-center">
            <small>
              All Rights Reserved. © 2018-2025 SRIYOG Consulting Pvt.Ltd.
            </small>

            <div className="flex gap-[14px] w-[26%] smMax:w-1/2">
              <Link to="">
                <img src={playstoreIcon} alt="footer_playstore" />
              </Link>
              <Link to="">
                <img src={appstoreIcon} alt="footer_appstore" />
              </Link>
            </div>
          </div>

          <div className="sub-footer-icons flex justify-end basis-[30%] gap-[18px] text-black lgMax:basis-[100%] lgMax:justify-start mdMax:justify-center mdMax:pt-4">
            <Link to="https://t.me/SRIYOG">
              <FaTelegram className="text-[20px] lgMax:text-[24px]" />
              {/* <img
                className="text-[20px] lgMax:text-[24px]"
                src={footerIcont_1}
                alt="footerIcont-1"
              /> */}
            </Link>
            <Link to="https://fb.me/SRIYOGConsulting ">
              <FaFacebook className="text-[20px] lgMax:text-[24px]" />
            </Link>
            <Link to="https://x.com/TheSRIYOG">
              <FaSquareXTwitter className="text-[20px] lgMax:text-[24px]" />
            </Link>
            <Link to="https://np.linkedin.com/company/sriyogdotcom">
              <FaLinkedin className="text-[20px] lgMax:text-[24px]" />
            </Link>
            <Link to="https://youtube.com/">
              <FaYoutube className="text-[20px] lgMax:text-[24px]" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
