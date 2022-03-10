import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import Feature1 from "../assets/Features/Features-1.png";
import Feature2 from "../assets/Features/Features-2.png";
import Feature3 from "../assets/Features/Features-3.png";
import Feature4 from "../assets/Features/Features-4.png";

const Features = () => {
  return (
    <section className="features-container py-3 mx-3" id="features">
      <h1 className="heading-title">Features</h1>

      <div className="container">
        <div className="features one">
          <h4>Stable</h4>
          <p>
            With deep, empirically-proven optimizations throughout the system,
            SuperiorOS is faster and smoother than other Android distributions.
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
              We have carefully hand-picked features which helps you in your
              daily chores. Customize your device as you like.
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
              SuperiorOS helps keep your data private with camera and microphone
              indicators, internet & sensor permissions, and microG support.
            </p>
          </div>
          <div className="image">
            <img src={Feature3} alt="" />
          </div>
          <a href="">
            Learn More <HiArrowSmRight />
          </a>
        </div>

        <div className="features four">
          <h4>Updater</h4>
          <p>
            We regularly update all our officially supported devices to make
            sure your device stays upto-date. We have redesigned our updater to
            make sure updating doesnt feel overwhelming.
          </p>

          <div className="image">
            <img src={Feature4} alt="" />
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
