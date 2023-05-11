import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const SingleBanner = ({ parentId, src, previousId, nextId }) => {
  return (
    <>
      {/* parentId, src, previousId, nextId */}
      <div id={parentId} className="hero carousel-item relative w-full">
        <img src={src} className="w-full rounded-xl " />
        <div className="hero-overlay rounded-xl"></div>
        <div className="hero-content max-w-xl me-auto ml-5  text-neutral-content">
          <div className=" ">
            <h1 className="mb-5 max-w-sm text-5xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="mb-5">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex items-center gap-6">
              <button className="btn border-0 capitalize bg-[#FF3811]">
                discover more
              </button>
              <button className="btn bg-transparent border-2 border-gray-100 ">
                latest project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex gap-6 justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 lg:bottom-28">
          <a
            href={previousId}
            className="btn btn-circle bg-transparent border-2 border-gray-500  "
          >
            <BsArrowLeft />
          </a>
          <a href={nextId} className="btn btn-circle  bg-[#FF3811]">
            <BsArrowRight />
          </a>
        </div>
      </div>
    </>
  );
};

export default SingleBanner;
