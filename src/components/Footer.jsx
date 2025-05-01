import React from "react";
import { Link } from "react-router-dom";
import join from "/assets/images/footer/join.svg";
import mail from "/assets/images/footer/mail.svg";
import footerLogo from "/assets/images/footer/logo.svg";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import telegram from "/assets/images/footer/telegram.svg";
import viber from "/assets/images/footer/viber.svg";
import whatsApp from "/assets/images/footer/whatsapp.svg";
import missedCall from "/assets/images/footer/missed-call.svg";
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
        <section className="max-md:w-[88%] max-lg:w-[80%] py-5 flex flex-wrap  w-[1130px] m-auto justify-between items-end">
          <div className="w-[694px] max-lg:w-full h-[160px] max-lg:h-auto flex flex-wrap justify-between mb-[56px] max-lg:mb-0 max-lg:justify-start max-lg:items-center">
            <div className="max-md:w-[48%] max-lg:w-[33%] max-lg:pb-5">
              <ul className="space-y-2 list-none text-[15px] font-normal max-md:text-[17px]">
                <li><Link to="/about" className="hover:text-[#8b181b]">About Us</Link></li>
                <li><Link to="/how" className="hover:text-[#8b181b]">How It Works</Link></li>
                <li><Link to="/team" className="hover:text-[#8b181b]">Team</Link></li>
                <li><Link to="/press" className="hover:text-[#8b181b]">Press</Link></li>
                <li>
                  <Link to="/career" className="hover:text-[#8b181b]">
                    Career{" "}
                    <span className="bg-[#821F24] text-white py-1 px-1 rounded-md hover:bg-[#97252a] transition text-[11px]">
                      We're Hiring
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="max-md:w-[48%] max-lg:w-[33%] max-lg:pb-5">
              <ul className="space-y-2 list-none text-[15px] font-normal max-md:text-[17px]">
                <li><Link to="/vmgo" className="hover:text-[#8b181b]">Mission / Vision</Link></li>
                <li><Link to="/video" className="hover:text-[#8b181b]">Video</Link></li>
                <li><Link to="/faq" className="hover:text-[#8b181b]">FAQ / KnowBase</Link></li>
                <li><Link to="/welcome" className="hover:text-[#8b181b]">Welcome</Link></li>
                <li><Link to="/media" className="hover:text-[#8b181b]">Media Coverage</Link></li>
              </ul>
            </div>
            <div className="max-md:w-[48%] max-lg:w-[33%] max-lg:pb-5">
              <ul className="space-y-2 list-none text-[15px] font-normal max-md:text-[17px]">
                <li><Link to="/feedback" className="hover:text-[#8b181b]">Feedback</Link></li>
                <li><Link to="/timeline" className="hover:text-[#8b181b]">Timeline</Link></li>
                <li><Link to="/features" className="hover:text-[#8b181b]">Features</Link></li>
                <li><Link to="/services" className="hover:text-[#8b181b]">Services</Link></li>
                <li><Link to="/city" className="hover:text-[#8b181b]">Cities</Link></li>
              </ul>
            </div>
            <div className="max-md:w-[48%] max-lg:w-[33%] max-lg:pb-5">
              <ul className="space-y-2 list-none text-[15px] max-md:text-[17px] font-normal">
                <li>
                  <Link to="/">
                    <img src={join} alt="footer-join-now" className="w-[65px] h-[20px] mb-1 max-md:h-[30px] max-md:w-[75px]" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src={mail} alt="footer-mail" className="w-[45px] h-[20px] max-md:h-[30px] max-md:w-[55px]" />
                  </Link>
                </li>
                <li><Link to="/privacy" className="hover:text-[#8b181b]">Privacy Policy</Link></li>
                <li><Link to="/tos" className="hover:text-[#8b181b]">Terms of Services</Link></li>
                <li><Link to="/sitemap" className="hover:text-[#8b181b]">Sitemap</Link></li>
              </ul>
            </div>

            {/* Mobile Footer Card */}
            <div className="hidden max-lg:block w-[288px] h-[369px] max-md:h-auto max-md:w-full max-lg:w-[66%] border-t-[5px] border-t-[#821F23] shadow-[0px_0px_4px_0px_#00000045]">
              <ul className="list-none w-[230px]  max-lg:w-[270px] mx-auto font-medium space-y-5 my-2">
                <li><img src={footerLogo} alt="footer-logo" className="w-[213px]  max-lg:w-full  max-lg:h-auto h-[55.05px]" /></li>
                <li className="text-[16px] max-md:text-[17px]">
                  <div className="flex items-center gap-1"><FaLocationDot /><span>Rem.Work, Kamalpokhari,</span></div>
                  <div>Kathmandu, Nepal</div>
                </li>
                <li>
                  <div className="flex items-center gap-1">
                    <FaPhone className="text-[16px] relative top-[1px]" />
                    <span className="text-[15px] max-md:text-[17px]">+977-9852025735</span>
                  </div>
                  <div className="text-[13px] text-[#88181D] max-md:text-[17px]">Calling Time : 10 AM to 5 PM NPT</div>
                </li>
                <li>
                  <Link to="mailto:info@sriyog.com" className="flex items-center hover:text-[#88181D] gap-1">
                    <IoMdMail className="text-[19px]" />
                    <span className="text-[15px] max-md:text-[17px]">info@sriyog.com</span>
                  </Link>
                </li>
                <li className="flex items-center gap-1">
                  <img src={telegram} alt="telegram" className="w-[22px] h-[22px]" />
                  <img src={viber} alt="viber" className="w-[19.83px] h-[20.19px]" />
                  <img src={whatsApp} alt="whatsApp" className="w-[19.83px] h-[20.19px]" />
                  <span className="text-[16px] max-md:text-[17px]">+977-9852024365</span>
                </li>
                <li className="flex items-center">
                  <img src={missedCall} alt="missed-call" className="w-[45px] h-[45px]" />
                  <span className="text-[15px] max-md:text-[17px]">+977-98520 24-365</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Desktop Footer Card */}
          <div className="w-[288px] hidden lg:block h-[369px] max-md:w-full border-t-[5px] border-t-[#821F23] shadow-[0px_0px_4px_0px_#00000045]">
            <ul className="list-none w-[230px] m-auto font-medium space-y-5 my-2">
              <li><img src={footerLogo} alt="footer-logo" className="w-[213px] h-[55.05px]" /></li>
              <li className="text-[16px]">
                <div className="flex items-center gap-1"><FaLocationDot /><span>Rem.Work, Kamalpokhari,</span></div>
                <div>Kathmandu, Nepal</div>
              </li>
              <li>
                <div className="flex items-center gap-1">
                  <FaPhone className="text-[16px] relative top-[1px]" />
                  <span className="text-[15px]">+977-9852025735</span>
                </div>
                <div className="text-[13px] text-[#88181D]">Calling Time : 10 AM to 5 PM NPT</div>
              </li>
              <li>
                <Link to="mailto:info@sriyog.com" className="flex items-center hover:text-[#88181D] gap-1">
                  <IoMdMail className="text-[19px]" />
                  <span className="text-[15px]">info@sriyog.com</span>
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <img src={telegram} alt="telegram" className="w-[22px] h-[22px]" />
                <img src={viber} alt="viber" className="w-[19.83px] h-[20.19px]" />
                <img src={whatsApp} alt="whatsApp" className="w-[19.83px] h-[20.19px]" />
                <span className="text-[16px]">+977-9852024365</span>
              </li>
              <li className="flex items-center">
                <img src={missedCall} alt="missed-call" className="w-[45px] h-[45px]" />
                <span className="text-[15px]">+977-98520 24-365</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="w-full h-auto">
          <img src="/src/assets/images/footer/footer.svg" className=" w-[1140px] h-auto mx-auto" alt="" />
          <div className="h-[50px] bg-black w-full"></div>
        </section>

        <section className="py-3 border-b-[5px] border-[#88181D]">
          <section className="max-w-[1140px] max-md:w-[88%] max-lg:w-[80%] mx-auto flex flex-wrap justify-around items-center my-2">
            <div className="max-lg:w-full max-lg:mb-4">
              <p className="text-[12px] max-md:text-[12px] lg:flex max-lg:text-center max-lg:text-[17px] w-[519px] max-lg:w-full">
                All Rights Reserved. &copy;2025 Sriyog Consulting Pvt. Ltd.&nbsp;<span className="hidden lg:block">| Powered By Microsoft For Startups</span>
              </p>
              <span className="hidden max-lg:block max-lg:text-center max-md:text-[12px]">Powered By Microsoft For Startups</span>
            </div>
            <div className="max-lg:w-full flex gap-3 justify-center items-center max-lg:mb-2">
              <Link to="https://bit.ly/sriyog" target="_blank">
                <img src={googlePlay} alt="google-play" className="w-[85.24px] h-[34.71px]" />
              </Link>
              <Link to="https://bit.ly/sriyogios" target="_blank">
                <img src={playStore} alt="play-store" className="w-[85.24px] h-[34.71]" />
              </Link>
            </div>
            <div className="flex gap-2">
              <Link to="https://www.facebook.com/sriyogdotcom" target="_blank"><img src={facebook} alt="facebook" className="w-[21.06px] h-[21px]" /></Link>
              <Link to="https://t.me/sriyog" target="_blank"><img src={telegram} alt="telegram" className="w-[21.06px] h-[21.06px]" /></Link>
              <Link to="https://twitter.com/thesriyog" target="_blank"><img src={tweeter} alt="tweeter" className="w-[21.93px] h-[23.93px]" /></Link>
              <Link to="https://www.linkedin.com/company/sriyog-consulting/" target="_blank"><img src={linkedIn} alt="linkedIn" className="w-[22.01px] h-[24px]" /></Link>
              <Link to="https://www.youtube.com/@sriyogdotcom8535" target="_blank"><img src={youtube} alt="youtube" className="w-[24.01px] h-[22.01px]" /></Link>
            </div>
          </section>
        </section>
      </footer>
    </>
  );
};

export default Footer;
