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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            quibusdam mollitia delectus fuga perspiciatis aliquam beatae,
            placeat minus, assumenda officiis, sunt id consequatur. Fuga
            suscipit nemo veritatis esse adipisci inventore!
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
