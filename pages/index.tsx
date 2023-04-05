import React from "react";

import { useState } from "react";
import { Sidebar } from "./component/Sidebar";
import About from "./component/About";
import WhatIdo from "./component/WhatIdo";
import Skills from "./component/Skills";
import ContactUs from "./component/ContactUs";
import Footer from "./component/Footer";
import BackTopButton from "./component/BackTopButton";
import Header from "./component/Header";
import HomeSection from "./component/HomeSection";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Header toggleSidebar={toggleSidebar} />
      <HomeSection />
      <About />
      <WhatIdo />
      <Skills />
      <ContactUs />
      <Footer />
      <BackTopButton />
    </>
  );
}
