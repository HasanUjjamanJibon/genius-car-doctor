import React from "react";

const Spinner = () => {
  return (
    <div className="min-h-[calc(100vh-60px)] flex justify-center items-center">
      <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div class="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-4 h-20 w-20"></div>
      </div>
    </div>
  );
};

export default Spinner;
