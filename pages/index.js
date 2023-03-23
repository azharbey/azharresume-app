import React from "react";

import { useState } from "react";
import { About } from "./component/About";
import { ContactUs } from "./component/ContactUs";
import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
import { HomeSection } from "./component/HomeSection";
import { Sidebar } from "./component/Sidebar";
import { Skills } from "./component/Skills";
import { WhatIdo } from "./component/WhatIdo";

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
    </>
  );
}
