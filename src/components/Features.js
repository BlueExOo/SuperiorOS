import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import Feature1 from "../assets/Features/Features-1.png";
import Feature2 from "../assets/Features/Features-2.png";
import Feature3 from "../assets/Features/Features-3.png";

const Features = () => {
  return (
    <section className="features-container py-3 mx-3" id="features">
      <h1 className="heading-title">Features</h1>

      <div className="container">
        <div className="features one">
          <h4>Stable</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam, maxime.
          </p>

          <div className="image">
            <img src={Feature1} alt="" />
          </div>
          <a href="">
            Learn More <HiArrowSmRight />
          </a>
        </div>
        <div className="features two">
          <div className="content">
            <h4>Highly Customizable</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, maxime.
            </p>
          </div>
          <div className="image">
            <img src={Feature2} alt="" />
          </div>
          <a href="">
            Learn More <HiArrowSmRight />
          </a>
        </div>

        <div className="features three">
          <div className="content">
            <h4>Secure</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, maxime.
            </p>
          </div>
          <div className="image">
            <img src={Feature3} alt="" />
          </div>
          <a href="">
            Learn More <HiArrowSmRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
