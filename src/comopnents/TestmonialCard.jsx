import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import quotes from "/icons/quote.svg";
import person from "/images/person.svg";

const TestmonialCard = () => {
  return (
    <div className="shadow-md px-6 py-8">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-5">
          <img src={person} alt="" />
          <div>
            <h4 className="font-bold text-xl">Awlad Hossain</h4>
            <h5 className="font-semibold text-lg">Businessman</h5>
          </div>
        </div>
        <img src={quotes} className="h-14 " alt="" />
      </div>
      <div>
        <p className="max-w-xl">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="flex items-center text-orange-500">
        <AiTwotoneStar />
        <AiTwotoneStar />
        <AiTwotoneStar />
        <AiTwotoneStar />
        <AiTwotoneStar />
      </div>
    </div>
  );
};

export default TestmonialCard;
