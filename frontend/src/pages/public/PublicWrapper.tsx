import Footer from "../../components/Footer";
import Header from "./Header";
// import React from "react";

import {
  Skills,
  Projects,
  Educations,
  Services,
  Contact,
  About,
  Home,
} from "../index";


import ScrollToTop from "../../utils/ScrollToTop";

const PublicWrapper = () => {
  return (
    <div className="flex flex-col">
      <ScrollToTop />
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Educations />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default PublicWrapper;
