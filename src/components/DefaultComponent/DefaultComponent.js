import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const DefaultComponent = ({ children }) => {
  return (
    <div className="w-[1200px] m-auto ">
      <Header />
      <div className="mt-20">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultComponent;
