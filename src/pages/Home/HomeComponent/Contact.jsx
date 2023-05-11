import React from "react";
import calender from "/icons/Group 32.svg";
import call from "/icons/Group 34.svg";
import location from "/icons/Group 35.svg";

const Contact = () => {
  return (
    <div className="bg-gray-950 rounded-md py-10 px-4 my-20 text-gray-300 gap-6 justify-items-center  grid-container-3-2-1">
      {/* 1st */}
      <div className="flex items-center gap-5">
        <img src={calender} className="h-8 w-auto" alt="calender" />
        <div className="space-y-1">
          <h4 className="text-sm">We are open monday-friday</h4>
          <h5 className="text-lg">7:00 am - 9:00 pm</h5>
        </div>
      </div>
      {/* 2nd */}
      <div className="flex items-center gap-5">
        <img src={call} className="h-8 w-auto" alt="calender" />
        <div className="space-y-1">
          <h4 className="text-sm">Have a question?</h4>
          <h5 className="text-lg">+2546 251 2658</h5>
        </div>
      </div>
      {/* 3rd */}
      <div className="flex items-center gap-5">
        <img src={location} className="h-8 w-auto" alt="calender" />
        <div className="space-y-1">
          <h4 className="text-sm">Need a repair? our address</h4>
          <h5 className="text-lg">Liza Street, New York</h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
