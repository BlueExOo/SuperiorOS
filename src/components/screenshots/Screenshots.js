import React from "react";
import { screenShotdata } from "./ScreenShotsdata";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Screenshots = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section className="screenshots-container py-3 mx-3" id="screenshots">
      <h1 className="heading-title">ScreenShots</h1>

      <div className="parent">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          customTransition={"transform 300ms ease-in-out"}
          swipeable={true}
          draggable={true}
          showDots={true}
          arrows={false}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {screenShotdata.map((imageData, index) => {
            return (
              <div className="slider" key={index}>
                <img src={imageData} alt="movie" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default Screenshots;
