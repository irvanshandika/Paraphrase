// src/MainPage.js
import React from "react";
import Hero from "../components/Hero";
import SecondHero from "../components/Second";
import Contact from "../components/Contact";
import Pricing from "../components/Pricing";
import Navbar from "../components/navbar";
import SlideLogo from "../components/SlideLogo";

const MainPages = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SecondHero />
      <Pricing />
      <Contact />
      <SlideLogo />
    </>
  );
};

export default MainPages;
