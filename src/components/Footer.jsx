import React from "react";
import { Link } from "react-router-dom";
// import join from "/assets/images/footer/join.svg";
// import mail from "/assets/images/footer/mail.svg";
import footerLogo from "/assets/images/footer/logo.svg";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import telegram from "/assets/images/footer/telegram.svg";
// import viber from "/assets/images/footer/viber.svg";
// import whatsApp from "/assets/images/footer/whatsapp.svg";
// import missedCall from "/assets/images/footer/missed-call.svg";
import googlePlay from "/assets/images/footer/google-play.svg";
import playStore from "/assets/images/footer/play-store.svg";
import facebook from "/assets/images/footer/facebook.svg";
import tweeter from "/assets/images/footer/tweeter.svg";
import linkedIn from "/assets/images/footer/linkedIn.svg";
import youtube from "/assets/images/footer/youtube.svg";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer className="w-full mx-auto border-t-[2px] border-[#00000080] bg-[#ffff] text-[#333]">
        <section className="w-[88%] md:w-[80%] py-5 flex flex-wrap  lg:w-[1130px] m-auto justify-between items-end">
          <div className="lg:w-[694px] max-lg:w-full  lg:h-[160px] md:h-auto flex flex-wrap lg:justify-between  md:mb-0 md:justify-start md:items-center">
            <div className="lg:w-auto w-[48%] md:w-[33%] max-sm:basis-[50%] pb-5 lg:pb-0">
              <ul className="space-y-2 list-none text-[15px] font-normal max-md:text-[17px]">
                {
                  [
                    { label: "About Us", path: "/about" },
                    { label: "How It Works", path: "/how" },
                    { label: "Team", path: "/team" },
                    { label: "Press", path: "/press" },
                    { label: "Certificate", path: "/certificate" },
                  ].map(({ label, path }) => (
                    <li key={label}>
                      <Link to={path} className="hover:text-[#8b181b]">
                        {label}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="lg:w-auto w-[48%] md:w-[33%] max-sm:basis-[50%] pb-5 lg:pb-0">
              <ul className="space-y-2 list-none text-[15px] font-normal max-md:text-[17px]">
                {
                  [
                    { label: " Mission / Vision", path: "/vmgo" },
                    { label: "Video", path: "/video" },
                    { label: "FAQ / KnowBase", path: "/faq" },
                    { label: "Welcome", path: "/welcome" },
                    { label: "Media Coverage", path: "/media" },
                  ].map(({ label, path }) => (
                    <li key={label}>
                      <Link to={path} className="hover:text-[#8b181b]">
                        {label}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="lg:w-auto w-[48%] md:w-[33%] max-sm:basis-[50%] pb-5 lg:pb-0">
              <ul className="space-y-2 list-none text-[15px] font-normal max-md:text-[17px]">
                {
                  [
                    { label: "  Feedback", path: "/feedback" },
                    { label: "Timeline", path: "/timeline" },
                    { label: "Features", path: "/features" },
                    { label: "Services", path: "/services" },
                    { label: "Cities", path: "/city" },
                  ].map(({ label, path }) => (
                    <li key={label}>
                      <Link to={path} className="hover:text-[#8b181b]">
                        {label}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="lg:w-auto w-[48%] md:w-[33%] max-sm:basis-[50%] pb-5 lg:pb-0">
              <ul className="space-y-2 list-none text-[15px] max-md:text-[17px] font-normal">
                {
                  [
                    { label: "Privacy Policy", path: "/privacy" },
                    { label: "App", path: "/app" },
                    { label: "Fonts", path: "/fonts" },
                    { label: "Terms of Services", path: "/tos" },
                    { label: "Sitemap", path: "https://www.xml-sitemaps.com/download/sriyog.com-2289d4ed/sitemap.xml?view=1" },
                  ].map(({ label, path }) => (
                    <li key={label}>
                      <Link to={path} className="hover:text-[#8b181b]">
                        {label}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>

            {/* Mobile Footer Card */}
            <div className="hidden max-lg:block  w-[288px] h-auto max-md:h-auto max-sm:basis-full max-md:w-full max-lg:w-[66%] border-t-[5px] border-t-[#821F23] shadow-[0px_0px_4px_0px_#00000045]">
              <ul className="list-none w-[230px] py-3 max-lg:w-[270px] mx-auto font-medium space-y-5 my-2">
                <li>
                  <img
                    src={footerLogo}
                    alt="footer-logo"
                    className="w-[213px]  max-lg:w-full  max-lg:h-auto h-[55.05px]"
                  />
                </li>
                <li className="text-[16px] max-md:text-[17px]">
                  <div className="flex items-center gap-1">
                    <FaLocationDot />
                    <span>Rem.Work, Kamalpokhari,</span>
                  </div>
                  <div>Kathmandu, Nepal</div>
                </li>
                <li>
                  <div className="flex items-center gap-1">
                    <FaPhone className="text-[16px] relative top-[1px]" />
                    <span className="text-[15px] max-md:text-[17px]">
                      +977-9852025735
                    </span>
                  </div>
                  <div className="text-[13px] text-[#88181D] max-md:text-[17px]">
                    Calling Time : 10 AM to 5 PM NPT
                  </div>
                </li>
                <li>
                  <Link
                    to="mailto:info@sriyog.com"
                    className="flex items-center hover:text-[#88181D] gap-1"
                  >
                    <IoMdMail className="text-[19px]" />
                    <span className="text-[15px] max-md:text-[17px]">
                      info@sriyog.com
                    </span>
                  </Link>
                </li>
                <li className="text-center bg-[#8b181b] py-2 rounded-md hover:bg-[#b02b2f] transition">
                  <Link className="w-full text-white font-semibold">Book an Appointment</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Desktop Footer Card */}
          <div className="w-[288px] hidden lg:block  max-md:w-full border-t-[5px] border-t-[#821F23] shadow-[0px_0px_4px_0px_#00000045]">
            <ul className="list-none w-[230px] m-auto font-medium space-y-5 my-3 py-2">
              <li>
                <img
                  src={footerLogo}
                  alt="footer-logo"
                  className="w-[213px] h-[55.05px]"
                />
              </li>
              <li className="text-[16px]">
                <div className="flex items-center gap-1">
                  <FaLocationDot />
                  <span>Rem.Work, Kamalpokhari,</span>
                </div>
                <div>Kathmandu, Nepal</div>
              </li>
              <li>
                <div className="flex items-center gap-1">
                  <FaPhone className="text-[16px] relative top-[1px]" />
                  <span className="text-[15px]">+977-9852025735</span>
                </div>
                <div className="text-[13px] text-[#88181D]">
                  Calling Time : 10 AM to 5 PM NPT
                </div>
              </li>
              <li>
                <Link
                  to="mailto:info@sriyog.com"
                  className="flex items-center hover:text-[#88181D] gap-1"
                >
                  <IoMdMail className="text-[19px]" />
                  <span className="text-[15px]">info@sriyog.com</span>
                </Link>
              </li>
              <li className="text-center bg-[#8b181b] py-2 rounded-md hover:bg-[#b02b2f] transition">
                <Link className="w-full text-white font-semibold">Book an Appointment</Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="w-full h-auto">
          <img
            src="/assets/images/footer/footer.svg"
            className=" lg:w-[1140px] w-[88%] h-auto mx-auto"
            alt=""
          />
          <div className="h-[50px] bg-black w-full"></div>
        </section>

        <section className="py-3 border-b-[5px] border-[#88181D]">
          <section className="max-w-[1140px] max-md:w-[88%] max-lg:w-[80%] mx-auto flex flex-wrap justify-around items-center my-2">
            <div className="max-lg:w-full max-lg:mb-4">
              <p className="text-[12px] max-md:text-[12px] lg:flex max-lg:text-center max-lg:text-[17px] w-[519px] max-lg:w-full">
                All Rights Reserved. &copy;2025 Sriyog Consulting Pvt.
                Ltd.&nbsp;
                <span className="hidden lg:block">
                  | Powered By Microsoft For Startups
                </span>
              </p>
              <span className="hidden max-lg:block max-lg:text-center max-md:text-[12px]">
                Powered By Microsoft For Startups
              </span>
            </div>
            <div className="max-lg:w-full flex gap-3 justify-center items-center max-lg:mb-2">
              <Link to="https://bit.ly/sriyog" target="_blank">
                <img
                  src={googlePlay}
                  alt="google-play"
                  className="w-[85.24px] h-[34.71px]"
                />
              </Link>
              <Link to="https://bit.ly/sriyogios" target="_blank">
                <img
                  src={playStore}
                  alt="play-store"
                  className="w-[85.24px] h-[34.71]"
                />
              </Link>
            </div>
            <div className="flex gap-2">
              <Link to="https://www.facebook.com/sriyogdotcom" target="_blank">
                <img
                  src={facebook}
                  alt="facebook"
                  className="w-[21.06px] h-[21px]"
                />
              </Link>
              <Link to="https://t.me/sriyog" target="_blank">
                <img
                  src={telegram}
                  alt="telegram"
                  className="w-[21.06px] h-[21.06px]"
                />
              </Link>
              <Link to="https://twitter.com/thesriyog" target="_blank">
                <img
                  src={tweeter}
                  alt="tweeter"
                  className="w-[21.93px] h-[23.93px]"
                />
              </Link>
              <Link
                to="https://www.linkedin.com/company/sriyog-consulting/"
                target="_blank"
              >
                <img
                  src={linkedIn}
                  alt="linkedIn"
                  className="w-[22.01px] h-[24px]"
                />
              </Link>
              <Link
                to="https://www.youtube.com/@sriyogdotcom8535"
                target="_blank"
              >
                <img
                  src={youtube}
                  alt="youtube"
                  className="w-[24.01px] h-[22.01px]"
                />
              </Link>
            </div>
          </section>
        </section>
      </footer>
    </>
  );
};

export default Footer;
