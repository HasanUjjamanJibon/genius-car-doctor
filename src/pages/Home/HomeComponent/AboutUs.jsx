import React from "react";
import parts from "/images/about_us/parts.jpg";
import person from "/images/about_us/person.jpg";

const AboutUs = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 my-20 ">
      <div className="relative">
        <img
          src={person}
          className="max-w-screen md:w-[50rem] rounded-xl  lg:w-96 "
          alt="person"
        />
        <img
          src={parts}
          className="absolute -bottom-20 lg:bottom-6 w-56 md:w-80 inline-block lg:w-60 rounded-xl border-white border-8 right-0"
          alt="parts"
        />
      </div>
      <div>
        <h1 className="text-[#ff3811] font-bold">About Us</h1>
        <p className="max-w-[200px] text-2xl  my-2 font-bold">
          We are qualified & of experience in this field
        </p>
        <div className="space-y-2 my-2 capitalize">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <button className="btn border-0 bg-[#ff3811]">Get More Info</button>
      </div>
    </div>
  );
};

export default AboutUs;
