import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
  
        <>
          <Header />
          <FloatingWhatsApp />
          <Outlet />
          <Footer />
        </>
    </>
  );
}

export default App;
