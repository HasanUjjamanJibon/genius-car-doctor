import React from "react";

const SectionHeader = ({ title, subtitle, description }) => {
  return (
    <div className="space-y-1">
      <h2 className="text-center-capitalize text-[#ff3811] text-lg font-bold">
        {title}
      </h2>
      <h2 className="text-center-capitalize text-2xl font-bold">{subtitle}</h2>
      <p className="max-w-xl mx-auto  text-center-capitalize text-sm">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
