import React from "react";
import Hero from "../../components/Hero/Hero";
import CardSection from "../../components/CardSection/CardSection";
import OurServices from "../../components/Services/OurServices";
import FaqSection from "../../components/FaqSection/FaqSection";
import OurPackages from "../../components/Packages/OurPackages";
import AboutSection from "../../components/AboutSection/AboutSection";
import BlogSection from "../../components/BlogSection/BlogSection";
import { useEffect } from "react";

const Home = () => {
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }
  return (
    <>
      <ScrollToTopOnMount />
      <Hero />
      <CardSection />
      <OurServices />
      <FaqSection />
      <OurPackages />
      <AboutSection />
      <BlogSection />
    </>
  );
};

export default Home;
