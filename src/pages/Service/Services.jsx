import React from "react";
import BannerHeader from "../../comopnents/BannerHeader";
import { BsArrowRight } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import logo from "/logo.svg";
import service from "/images/banner/3.jpg";
import service2 from "/images/banner/2.jpg";
import media from "/icons/media.png";
import ServiceDetailsCard from "../../comopnents/ServiceDetailsCard";
import StepsCard from "../../comopnents/StepsCard";

const Services = () => {
  return (
    <div className="px-4 lg:px-0">
      <BannerHeader
        details="Service Details"
        pathname="Service Details"
      ></BannerHeader>
      <div className="grid grid-cols-1 my-20 lg:grid-cols-3 gap-5 ">
        {/* left sectioon */}
        <div className="lg:col-span-2">
          <div className="md:h-96 w-full ">
            <img src={service} className="h-full rounded-md w-full" alt="" />
          </div>
          <div className="my-8">
            <h2 className="font-bold text-3xl mb-3 text-[#151515]">
              Unique Car Engine Service
            </h2>
            <p className="text-[#737373] text-base">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.{" "}
            </p>
          </div>
          <div className="grid-container-2-1 gap-6 ">
            <ServiceDetailsCard></ServiceDetailsCard>
            <ServiceDetailsCard></ServiceDetailsCard>
            <ServiceDetailsCard></ServiceDetailsCard>
            <ServiceDetailsCard></ServiceDetailsCard>
          </div>
          <div className="my-8">
            <p className="text-[#737373] text-base">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
            <h2 className="font-bold text-3xl my-5 text-[#151515]">
              3 Simple Steps to Process
            </h2>
            <p className="text-[#737373] text-base">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
          </div>
          <div className="grid-container-3-2-1 gap-6 ">
            <StepsCard></StepsCard>
            <StepsCard></StepsCard>
            <StepsCard></StepsCard>
          </div>
          <div className="md:h-96 mt-10 w-full relative flex items-center justify-center">
            <img src={service2} className="h-full rounded-md w-full" alt="" />
            <img src={media} className="absolute rounded-md h-20 w-20" alt="" />
          </div>
        </div>

        {/* right section */}
        <div className="space-y-3 ">
          {/* services div */}
          <div className="bg-gray-300 px-6 pt-6 pb-10 overflow-hidden  rounded-md">
            <h2 className="font-bold text-lg  mb-2  text-[#151515]">
              Services
            </h2>
            <div className="space-y-5 min-h-fit ">
              {/* services 01 */}
              <div className="bg-white text-[#151515] rounded-sm hover:bg-[#fc5b11]  cursor-pointer transition-colors duration-300 hover:text-white  px-3 py-2 flex items-center justify-between text-base font-semibold">
                <h5>Full Car Repair</h5>
                <BsArrowRight />
                {/* className="text-[#fc5b11] hover:text-gray-50" */}
              </div>
              {/* services 02 */}
              <div className="bg-white text-[#151515] rounded-sm hover:bg-[#fc5b11]  cursor-pointer transition-colors duration-300 hover:text-white  px-3 py-2 flex items-center justify-between text-base font-semibold">
                <h5>Engine Repair</h5>
                <BsArrowRight />
              </div>
              {/* services 03 */}
              <div className="bg-white text-[#151515] rounded-sm hover:bg-[#fc5b11]  cursor-pointer transition-colors duration-300 hover:text-white  px-3 py-2 flex items-center justify-between text-base font-semibold">
                <h5>Automatic Services</h5>
                <BsArrowRight />
              </div>
              {/* services 04 */}
              <div className="bg-white text-[#151515] rounded-sm hover:bg-[#fc5b11]  cursor-pointer transition-colors duration-300 hover:text-white  px-3 py-2 flex items-center justify-between text-base font-semibold">
                <h5>Engine Oil Change</h5>
                <BsArrowRight />
              </div>
              {/* services 05 */}
              <div className="bg-white text-[#151515] rounded-sm hover:bg-[#fc5b11]  cursor-pointer transition-colors duration-300 hover:text-white  px-3 py-2 flex items-center justify-between text-base font-semibold">
                <h5>Battery Charge</h5>
                <BsArrowRight />
              </div>
            </div>
          </div>
          {/* Download */}
          <div className="bg-gray-950 px-6 py-4 rounded-md">
            <h2 className="font-bold text-lg  mb-2 text-white">Download</h2>
            <div className="space-y-3">
              {/* download 01 */}
              <div className="text-white  rounded-sm  cursor-pointer  px-3 py-1 flex items-center justify-between text-base font-semibold">
                <div className="flex items-center gap-2">
                  <FaRegFileAlt className="text-2xl" />
                  <div>
                    <h4 className="text-xl ">Our Brochure</h4>
                    <span className="font-normal text-[#A2A2A2] text-sm">
                      Download
                    </span>
                  </div>
                </div>
                <BsArrowRight className="bg-[#f33b03] rounded-md p-2 block text-5xl" />
              </div>
              <div className="text-white  rounded-sm  cursor-pointer  px-3 py-1 flex items-center justify-between text-base font-semibold">
                <div className="flex items-center gap-2">
                  <FaRegFileAlt className="text-2xl" />
                  <div>
                    <h4 className="text-xl ">Our Brochure</h4>
                    <span className="font-normal text-[#A2A2A2] text-sm">
                      Download
                    </span>
                  </div>
                </div>
                <BsArrowRight className="bg-[#f33b03] rounded-md p-2 block text-5xl" />
              </div>
            </div>
          </div>
          {/* speicial offer */}
          <div className="bg-gray-950 px-6  rounded-md">
            <div className="flex  flex-col justify-center pt-6 pb-14 items-center space-y-3">
              <img src={logo} alt="logo" />
              <span className="max-w-[200px] inline-block text-center text-white">
                Need Help? We Are Here To Help You
              </span>
              {/* offer */}
              <div className="bg-gray-100 capitalize px-6 pt-6 pb-10  font-bold rounded-md">
                <div className="relative flex flex-col items-center  w-full text-center">
                  <div>
                    <h5 className="text-black">
                      <span className="text-[#FF3811] ">car doctor</span>{" "}
                      special
                    </h5>
                    <h5>
                      Save up to{" "}
                      <span className="text-[#FF3811] ">60% off</span>{" "}
                    </h5>
                  </div>

                  <h6 className="absolute -bottom-16 rounded-md px-4 py-4 text-white bg-[#FF3811] inline-block min-w-max mx-auto  ">
                    {" "}
                    Get A Quote
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* price */}
          <h5 className="font-bold text-3xl mt-5">Price $250.00</h5>
          <button className="w-full text-white transition-colors duration-500 bg-[#FF3811] py-2 hover:bg-[#c02d00] focus:outline-0 rounded-md font-semibold text-lg">
            Proceed Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
