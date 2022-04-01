import React from "react";
import HomeImg from "../assets/homeBg.png";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container py-3 mx-3">
        <div className="title-container">
          <h2>
            <Typewriter
              options={{
                strings: [
                  `<span>Welcome To SuperiorOS Project</span>`,
                  `<span>Stable</span>`,
                  `<span>Customizable</span>`,
                  `<span>Secure</span>`,
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <div className="buttons-container">
            <div className="buttons">
              <a href="https://sourceforge.net/projects/superioros/">
                DownLoad
              </a>
            </div>
            <div className="buttons">
              <a href="https://github.com/SuperiorOS-Devices">
                Official Devices
              </a>
            </div>
          </div>
          <p>
            Superior OS is a Custom ROM based on AOSP, with a bunch of special
            features. The main aim of this ROM is to deliver lightning fast
            experience with stability, security and good battery backup
          </p>
        </div>
        <div className="extra-image" data-aos="flip-left">
          <img src={HomeImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
