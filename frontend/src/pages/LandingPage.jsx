import React from "react";
import { Navbar } from "../components/Layout/Navbar";
import { Hero } from "../components/Landing/Hero";
import Features from "../components/Landing/Features";
import Testimonials from "../components/Landing/Testimonials";
import Footer from "../components/Landing/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
};

export default LandingPage;
