import React from "react";
import { RxCross2 } from "react-icons/rx";
import products from "/images/products/3.png";
const ManageOrderList = () => {
  return (
    <div className="flex justify-between items-center py-3">
      {/* delete button */}
      <RxCross2 className="inline-block cursor-pointer p-1 bg-gray-700 rounded-full text-white text-3xl"></RxCross2>
      {/* service images */}
      <img src={products} className="w-20 rounded" alt="" />
      {/* service details */}
      <div>
        <h4 className="font-semibold text-xl text-[#444444]">
          Martha Knit Top
        </h4>
        <h5 className="text-[#A2A2A2] text-sm">Color : Green</h5>
        <h6 className="text-[#A2A2A2] text-sm">Size: S</h6>
      </div>
      {/* service price */}
      <p className="font-semibold text-xl text-[#444444]">info@gmail.com</p>
      {/* service price */}
      <p className="font-semibold text-xl text-[#2D2D2D]">22-10-2022</p>
      {/* service status */}
      <select className="select border-2 border-gray-500  focus:outline-0 max-w-xs">
        <option selected>Approved</option>
        <option>Pending</option>
      </select>
      {/* <button type="submit" className="btn block w-fit bg-[#FF3811] border-0 ">
        Pending
      </button> */}
    </div>
  );
};

export default ManageOrderList;
