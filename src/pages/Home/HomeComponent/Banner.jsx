import React from "react";
import banner1 from "/images/banner/1.jpg";
import banner2 from "/images/banner/2.jpg";
import banner3 from "/images/banner/3.jpg";
import banner4 from "/images/banner/4.jpg";
import banner5 from "/images/banner/5.jpg";
import banner6 from "/images/banner/6.jpg";
import SingleBanner from "../../../comopnents/SingleBanner";

const Banner = () => {
  return (
    <div>
      {/* parentId, src, previousId, nextId */}
      <div className="carousel w-full">
        {/* slider item 01 */}
        <SingleBanner
          parentId="slide1"
          src={banner1}
          previousId="#slide6"
          nextId="#slide2"
        ></SingleBanner>

        {/* slider item 02 */}
        <SingleBanner
          parentId="slide2"
          src={banner2}
          previousId="#slide1"
          nextId="#slide3"
        ></SingleBanner>

        {/* slider item 03 */}
        <SingleBanner
          parentId="slide3"
          src={banner3}
          previousId="#slide2"
          nextId="#slide4"
        ></SingleBanner>

        {/* slider item 04 */}
        <SingleBanner
          parentId="slide4"
          src={banner4}
          previousId="#slide3"
          nextId="#slide5"
        ></SingleBanner>

        {/* slider item 05 */}
        <SingleBanner
          parentId="slide5"
          src={banner5}
          previousId="#slide4"
          nextId="#slide6"
        ></SingleBanner>

        {/* slider item 06 */}
        <SingleBanner
          parentId="slide6"
          src={banner6}
          previousId="#slide5"
          nextId="#slide1"
        ></SingleBanner>
      </div>
    </div>
  );
};

export default Banner;
