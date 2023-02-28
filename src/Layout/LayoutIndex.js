import React from "react";
import Headers from "../Component/Headers";
import Hero from "../Component/Hero";
import About from "../Component/About";
import Contact from "../Component/Contact";
import Footer from "../Component/Footer";

export default function LayoutIndex() {
  return (
    <>
      <Headers />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
