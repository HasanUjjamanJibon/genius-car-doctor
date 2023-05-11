import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { service_id, title, img, price } = service;
  return (
    <div className="card w-full bg-base-100 shadow-sm px-4">
      <figure className="rounded-md">
        <img className="h-44 w-full" src={img} alt="Shoes" />
      </figure>
      <div className="card-body py-3 px-0">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-between">
          <h4 className="text-error font-semibold">Price : ${price}</h4>
          <Link to="" className="text-error text-xl ">
            <AiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
