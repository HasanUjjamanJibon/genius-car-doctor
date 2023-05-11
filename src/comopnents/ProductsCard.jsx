import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

const ProductsCard = () => {
  return (
    <div className="card w-full bg-base-100 shadow-sm px-4">
      <figure className="rounded-md relative">
        <img
          className="h-44 w-full "
          src="https://images.unsplash.com/photo-1514723432099-9f0d4906e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Shoes"
        />
        <button className=" absolute text-white right-3 top-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
      </figure>
      <div className="card-body  py-3 px-0">
        <div className="card-actions items-center flex-col ">
          <div className="flex items-center text-warning">
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
          </div>
          <h2 className="card-title">Engine Diagnostics</h2>
          <h4 className="text-error font-semibold">Price : $20.00</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
