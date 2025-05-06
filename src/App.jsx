import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import Main from "./layouts/Main";
import InternshipLayout from "./layouts/InternshipLayout";

// Main Pages
import Home from "./pages/Career";
import About from "./pages/About";
import Career from "./pages/Career";
import Team from "./pages/Team";
import How from "./pages/How";
import Press from "./pages/Press";
import Faq from "./pages/Faq";
import Vmgo from "./pages/Vmgo";
import Welcome from "./pages/Welcome";
import Certificate from "./pages/Certificate";
import Fonts from "./pages/Fonts";
import Tos from "./pages/Tos";
import Privacy from "./pages/Privacy";
import Services from "./pages/Services";
import Features from "./pages/Features";
import Timeline from "./pages/Timeline";
import Feedback from "./pages/Feedback";
import Media from "./pages/Media";
import Video from "./pages/Video";
import Cities from "./pages/Cities";
import Contact from "./pages/Contact";
import Pagenotfound from "./pages/Pagenotfound";

// Internship Site
import InternshipHome from "./internship/components/Home";
import InternshipAbout from "./internship/pages/About";
import InternshipTestimonials from "./internship/pages/Testimonials";
import InternshipCertificates from "./internship/pages/Certificates";
import InternshipContact from "./internship/pages/Contact";
import InternshipTos from "./internship/pages/Tos";
import InternshipFAQs from "./internship/pages/FAQs";
import InternshipPrivacy from "./internship/pages/Privacy";
import InternshipDisclaimer from "./internship/pages/Disclaimer";
import InternshipApply from "./internship/pages/Apply";
import InternshipEligibility from "./internship/pages/Eligibility";
import InternshipScrollToTop from "./internship/components/ScrollToTop";

//Blog Site

import BlogLayout from "./layouts/BlogLayout";
import BlogHome from "./blog/Pages/Blog";
import BlogContent1 from "./blog/Details/Content1";
import BlogContent2 from "./blog/Details/Content2";
import BlogContent3 from "./blog/Details/Content3";
import BlogContent4 from "./blog/Details/Content4";
import BlogContent5 from "./blog/Details/Content5";
import BlogContent6 from "./blog/Details/Content6";
import BlogContent7 from "./blog/Details/Content7";
import BlogContent8 from "./blog/Details/Content8";
import BlogContent9 from "./blog/Details/Content9";
import BlogContent10 from "./blog/Details/Content10";
import BlogContent11 from "./blog/Details/Content11";
import BlogContent12 from "./blog/Details/Content12";
import BlogContent13 from "./blog/Details/Content13";
import BlogContent14 from "./blog/Details/Content14";
import BlogContent15 from "./blog/Details/Content15";

// consultin site
import ConsultingLayout from "./layouts/ConsultingLayout.jsx";
import ConsultingHome from "./consulting/pages/Homepage";
import ConsultingAbout from "./consulting/pages/About";
import ConsultingContactus from "./consulting/pages/Contactus.jsx";
import ConsultingServices from "./consulting/components/Services.jsx";
import ConsultingTeam from "./consulting/pages/Team.jsx";
import ConsultingClient from "./consulting/pages/Client.jsx";
import ConsultingSingleConsultingPage from "./consulting/pages/SingleConsultingPage";
import ConsultingBookaconsultant from "./consulting/pages/BookingPage.jsx";
import ConsultingRequestquote from "./consulting/pages/RequestQuotePage.jsx";

function App() {
  return (
    <>
      <InternshipScrollToTop />
      <Routes>
        {/* Main - Career */}
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/how" element={<How />} />
          <Route path="/press" element={<Press />} />
          <Route path="/vmgo" element={<Vmgo />} />
          <Route path="/video" element={<Video />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/media" element={<Media />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/features" element={<Features />} />
          <Route path="/services" element={<Services />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/tos" element={<Tos />} />
          <Route path="/fonts" element={<Fonts />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/city" element={<Cities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/app" />} />
          <Route path="/app" element={<Pagenotfound />} />
        </Route>

        {/* Internship Site */}
        <Route path="/internship" element={<InternshipLayout />}>
          <Route index element={<InternshipHome />} />
          <Route path="/internship/about" element={<InternshipAbout />} />
          <Route path="/internship/faqs" element={<InternshipFAQs />} />
          <Route
            path="/internship/eligibility"
            element={<InternshipEligibility />}
          />
          <Route
            path="/internship/testimonials"
            element={<InternshipTestimonials />}
          />
          <Route
            path="/internship/certificates"
            element={<InternshipCertificates />}
          />
          <Route path="/internship/contact" element={<InternshipContact />} />
          <Route path="/internship/tos" element={<InternshipTos />} />
          <Route path="/internship/apply" element={<InternshipApply />} />
          <Route path="/internship/privacy" element={<InternshipPrivacy />} />
          <Route
            path="/internship/disclaimer"
            element={<InternshipDisclaimer />}
          />
        </Route>

        {/* Blog Site */}
        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<BlogHome />} />
          <Route
            path="/blog/website-development-cost-nepal"
            element={<BlogContent1 />}
          />
          <Route path="/blog/what-is-corporate-business-email"
           element={<BlogContent2 />}
            />

          <Route path="/blog/what-is-it-audit-nepal" element={<BlogContent3 />} />
          <Route path="/blog/protect-data-from-ransomware-attacks" element={<BlogContent4 />} />
          <Route path="/blog/what-is-databanking" element={<BlogContent5 />} />
          <Route path="/blog/rise-of-ecommerce-in-nepal" element={<BlogContent6 />} />
          <Route path="/blog/digital-transformation-economic-growth" element={<BlogContent7 />} />
          <Route path="/blog/IT-Consulting-&-Solutions" element={<BlogContent8 />} />
          <Route path="/blog/why-nepal-businesses-need-it-consulting-2025" element={<BlogContent9 />} />
          <Route path="/blog/it-consulting-for-nepal-smes-cost-efficiency" element={<BlogContent10 />} />
          <Route path="/blog/custom-vs-off-the-shelf-software-nepal" element={<BlogContent11 />} />
          <Route path="/blog/choose-it-consultant-kathmandu-guide" element={<BlogContent12 />} />
          <Route path="/blog/digital-transformation-nepal-trends-challenges" element={<BlogContent13 />} />
          <Route path="/blog/cloud-computing-for-nepali-businesses" element={<BlogContent14 />} />
          <Route path="/blog/top-technologies-changing-business-nepal" element={<BlogContent15 />} />
        </Route>

        {/* Consulting Site */}
        <Route path="/consulting" element={<ConsultingLayout />}>
          <Route index element={<ConsultingHome />} />
          <Route path="/consulting/about" element={<ConsultingAbout />}></Route>
          <Route
            path="/consulting/contact"
            element={<ConsultingContactus />}
          ></Route>
          <Route
            path="/consulting/solution"
            element={<ConsultingServices />}
          ></Route>
          <Route path="/consulting/team" element={<ConsultingTeam />}></Route>
          <Route
            path="/consulting/client"
            element={<ConsultingClient />}
          ></Route>
          <Route
            path="/consulting/service/:name"
            element={<ConsultingSingleConsultingPage />}
          ></Route>
          <Route
            path="/consulting/book"
            element={<ConsultingBookaconsultant />}
          ></Route>
          <Route
            path="/consulting/request"
            element={<ConsultingRequestquote />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
