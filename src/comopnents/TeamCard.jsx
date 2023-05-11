import React from "react";

import {
  GrLinkedinOption,
  GrInstagram,
  GrFacebookOption,
  GrTwitter,
} from "react-icons/gr";

const TeamCard = () => {
  return (
    <div className="card w-full bg-base-100 shadow-sm px-4">
      <figure className="rounded-md ">
        <img
          className="h-44 w-full "
          src="https://images.unsplash.com/photo-1514723432099-9f0d4906e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Shoes"
        />
      </figure>
      <div className="card-body  py-3 px-0">
        <div className="card-actions items-center flex-col ">
          <h2 className="card-title">Engine Diagnostics</h2>
          <h4 className="text-error font-semibold">Price : $20.00</h4>
          <div className="flex items-center text-white gap-3">
            <GrFacebookOption className="bg-blue-500 p-1 text-xl rounded-full "></GrFacebookOption>
            <GrTwitter className="bg-cyan-500 p-1 text-xl rounded-full "></GrTwitter>
            <GrLinkedinOption className="bg-blue-700 p-1 text-xl rounded-full "></GrLinkedinOption>
            <GrInstagram className="bg-red-500 p-1 text-xl rounded-full "></GrInstagram>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
