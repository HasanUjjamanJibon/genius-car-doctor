import React from "react";

import group from "/icons/group.svg";
import time from "/icons/Group 38729.svg";
import support from "/icons/person.svg";
import Equipment from "/icons/Wrench.svg";
import gurantee from "/icons/check.svg";
import delivary from "/icons/deliveryt.svg";
import SectionHeader from "../../../comopnents/SectionHeader";

const Choose = () => {
  return (
    <div className="my-20">
      <SectionHeader
        title="Core Features"
        bg-gray-100
        subtitle="Why Choose Us"
        description="the majority have suffered alteration in some form, by injected humour,
    or randomised words which don't look even slightly believable."
      ></SectionHeader>
      <div className="flex flex-wrap justify-center items-center py-2 gap-4">
        {/* choose item 01 */}
        <div className="space-y-1 shadow-md rounded-md p-4 transition-all duration-500 bg-gray-100 hover:bg-[#d62906] text-gray-950 hover:text-white cursor-pointer ">
          <img src={group} className="h-10 w-auto mx-auto block" alt="" />
          <span className=" font-bold inline-block text-sm">Expert Team</span>
        </div>
        {/* choose item 01 */}
        <div className="space-y-1 shadow-md rounded-md p-4 transition-all duration-500 bg-gray-100 hover:bg-[#d62906] text-gray-950 hover:text-white cursor-pointer ">
          <img src={time} className="h-10 w-auto mx-auto block" alt="" />
          <span className=" font-bold inline-block text-sm">
            Timely Delivery
          </span>
        </div>
        {/* choose item 01 */}
        <div className="space-y-1 shadow-md rounded-md p-4 transition-all duration-500 bg-gray-100 hover:bg-[#d62906] text-gray-950 hover:text-white cursor-pointer ">
          <img src={support} className="h-10 w-auto mx-auto block" alt="" />
          <span className=" font-bold inline-block text-sm">24/7 Support</span>
        </div>
        {/* choose item 01 */}
        <div className="space-y-1 shadow-md rounded-md p-4 transition-all duration-500 bg-gray-100 hover:bg-[#d62906] text-gray-950 hover:text-white cursor-pointer ">
          <img src={Equipment} className="h-10 w-auto mx-auto block" alt="" />
          <span className=" font-bold inline-block text-sm">
            Best Equipment
          </span>
        </div>
        {/* choose item 01 */}
        <div className="space-y-1 shadow-md rounded-md p-4 transition-all duration-500 bg-gray-100 hover:bg-[#d62906] text-gray-950 hover:text-white cursor-pointer ">
          <img src={gurantee} className="h-10 w-auto mx-auto block" alt="" />
          <span className=" font-bold inline-block text-sm">100% Guranty</span>
        </div>
        {/* choose item 01 */}
        <div className="space-y-1 shadow-md rounded-md p-4 transition-all duration-500 bg-gray-100 hover:bg-[#d62906] text-gray-950 hover:text-white cursor-pointer ">
          <img src={delivary} className="h-10 w-auto mx-auto block" alt="" />
          <span className=" font-bold inline-block text-sm">
            Timely Delivery
          </span>
        </div>
      </div>
    </div>
  );
};

export default Choose;
