import React from "react";
import BannerHeader from "../../comopnents/BannerHeader";

const AddNewService = () => {
  return (
    <div>
      <BannerHeader details="Add New Service" pathname="Service"></BannerHeader>
      <div className="p-10 bg-gray-300 rounded my-20">
        <form className="space-y-5">
          {/* name input field */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <input
              type="text"
              name="serviceName"
              id="serviceName"
              placeholder="Service Name"
              required
              className="w-full  text-gray-500 placeholder:text-sm  border-0 outline-0 rounded focus:border-0 focus:outline-0"
            />
            <input
              type="text"
              name="servicePrice"
              id="servicePrice"
              placeholder="Service Price"
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
              type="text"
              name="serviceType"
              id="serviceType"
              placeholder="Service Type"
              required
              className="w-full text-gray-500 placeholder:text-sm  border-0 outline-0 rounded focus:border-0 focus:outline-0"
            />
          </div>
          <div>
            <textarea
              name="description"
              className="w-full h-48 px-4 py-2 text-gray-500 placeholder:text-sm  border-0 outline-0 rounded focus:border-0 focus:outline-0"
              id="description"
              placeholder="Product Description"
            ></textarea>
          </div>
          <button className="w-full text-white transition-colors duration-500 bg-[#FF3811] py-2 hover:bg-[#c02d00] focus:outline-0 rounded-md font-semibold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewService;
