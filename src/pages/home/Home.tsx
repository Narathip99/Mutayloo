import React from "react";
import HeroBanner from "./components/HeroBanner";
import AboutUs from "./components/AboutUs";
import ShopByPower from "./components/ShopByPower";
import HoroscopeBanner from "./components/HoroscopeBanner";
import Hastag from "./components/Hastag";

const Home: React.FC = () => {
  return (
    <>
      <HeroBanner />
      <AboutUs />
      <ShopByPower />
      <HoroscopeBanner />
      <Hastag />
    </>
  );
};

export default Home;
