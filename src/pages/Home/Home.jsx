import React from "react";
import Banner from "./HomeComponent/Banner";
import AboutUs from "./HomeComponent/AboutUs";
import ServiceSection from "./HomeComponent/ServiceSection";
import Contact from "./HomeComponent/Contact";
import ProductsSection from "./HomeComponent/ProductsSection";
import Choose from "./HomeComponent/Choose";
import Team from "./HomeComponent/Team";
import Testmonials from "./HomeComponent/Testmonials";

const Home = () => {
  return (
    <div className="px-4">
      <Banner></Banner>
      <AboutUs></AboutUs>
      <ServiceSection></ServiceSection>
      <Contact></Contact>
      <ProductsSection></ProductsSection>
      <Team></Team>
      <Choose></Choose>
      <Testmonials></Testmonials>
    </div>
  );
};

export default Home;
