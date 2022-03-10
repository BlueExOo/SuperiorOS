import React from "react";
import HomeImg from "../assets/homeBg.png";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container py-3 mx-3">
        <div className="title-container">
          <h2>
            Welcome <br /> To SuperiorOS Project
          </h2>
          <div className="buttons-container">
            <div className="buttons">
              <a href="">DownLoad</a>
            </div>
            <div className="buttons">
              <a href="">Official Devices</a>
            </div>
          </div>
          <p>
            Superior OS is a Custom ROM based on AOSP, with a bunch of special
            features. The main aim of this ROM is to deliver lightning fast
            experience with stability, security and good battery backup
          </p>
        </div>
        <div className="extra-image">
          <img src={HomeImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
