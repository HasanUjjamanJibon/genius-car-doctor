import React from "react";
import BannerHeader from "../../comopnents/BannerHeader";


const Checkout = () => {
  return (
    <div>
      <BannerHeader details="Check Out" pathname="Checkout"></BannerHeader>
      <div className="p-10 bg-gray-300 rounded my-20">
        <form className="space-y-5">
          {/* name input field */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First name"
              required
              className="w-full  text-gray-500 placeholder:text-sm  border-0 outline-0 rounded focus:border-0 focus:outline-0"
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last name"
              required
              className="w-full  text-gray-500 placeholder:text-sm  border-0 outline-0 rounded focus:border-0 focus:outline-0"
            />
          </div>
          {/* contact input field */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone number"
              required
              className="w-full text-gray-500 placeholder:text-sm  border-0 outline-0 rounded focus:border-0 focus:outline-0"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              required
              className="w-full text-gray-500 placeholder:text-sm  border-0 outline-0 rounded focus:border-0 focus:outline-0"
            />
          </div>
          <div>
            <textarea
              name="message"
              className="w-full h-48 px-4 py-2 text-gray-500 placeholder:text-sm  border-0 outline-0 rounded focus:border-0 focus:outline-0"
              id="message"
              placeholder="Your message"
            ></textarea>
          </div>
          <button className="w-full text-white transition-colors duration-500 bg-[#FF3811] py-2 hover:bg-[#c02d00] focus:outline-0 rounded-md font-semibold text-lg">
            Order Confirm
          </button>
          {/* <button
            type="submit"
            className="btn capitalize w-full font-medium block  bg-[#FF3811] border-0 "
          >
            Order Confirm
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default Checkout;
