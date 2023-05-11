import React from "react";

const StepsCard = () => {
  return (
    <div className="w-full h-fit space-y-3 rounded-md border-2 border-gray-50  flex items-center flex-col p-5">
      <div className="rounded-full bg-[#ffa08dc0] p-2 h-16 w-16 text-center">
        <div className="rounded-full text-white bg-[#FF3811] h-full w-full  flex justify-center items-center font-semibold ">
          01
        </div>
      </div>
      <h4 className="font-bold text-xl uppercase">Step One</h4>
      <span className="text-center">It uses a dictionary of over 200 .</span>
    </div>
  );
};

export default StepsCard;
