import React from "react";
import banner from "/images/checkout/checkout.png";

const BannerHeader = ({ details, pathname }) => {
  return (
    <div className="my-12 relative ">
      <div className="background-gradient px-16 flex items-center">
        <h4 className="text-white font-bold text-4xl">{details}</h4>
      </div>
      <div className="absolute h-fit px-6 py-1 clip-path-section text-white font-semibold  bottom-0 bg-[#fc5b11] left-0 right-0 mx-auto text-lg w-fit  ">
        <span>Home/{pathname}</span>
      </div>
    </div>
  );
};

export default BannerHeader;
