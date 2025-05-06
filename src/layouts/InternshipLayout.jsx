import React from "react";
import Header from "../internship/components/Header";
import Footer from "../internship/components/Footer";
import { Outlet } from "react-router-dom";
import "../consulting/index.css";

function InternshipLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default InternshipLayout;
