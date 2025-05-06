import Header from "../consulting/pages/Header";
import Footer from "../consulting/pages/Footer";
import { Outlet } from "react-router-dom";
// import { Helmet } from "react-helmet";

function ConsultingLayout() {
  return (
    <>
      {/* <Helmet> */}
      <Header />

      <div className="internship-scope">
        <Outlet />
      </div>
      <Footer />
      {/* </Helmet> */}
    </>
  );
}

export default ConsultingLayout;
