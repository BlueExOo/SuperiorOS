import React from "react";
import BgImg from "../assets/Maintainers/logo-bg.png";
import None from "../assets/Maintainers/none.png";
import { BsGithub, BsTelegram } from "react-icons/bs";

export const Maintainers = () => {
  return (
    <section className="maintainers-container py-3 mx-3">
      <h1 className="heading-title"> Official Maintainers</h1>

      <div className="container">
        <div className="card">
          <div className="bg-image">
            <img src={BgImg} alt="" />
          </div>
          <div className="pic">
            <img src={None} alt="" />
          </div>
          <div className="info">
            <h3>Eduardo Zeas</h3>
            <span>alioth</span>
            <div className="icons">
              <a href="">
                <BsGithub />
              </a>
              <a href="">
                <BsTelegram />
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="bg-image">
            <img src={BgImg} alt="" />
          </div>
          <div className="pic">
            <img src={None} alt="" />
          </div>
          <div className="info">
            <h3>Ankan Ghosh</h3>
            <span>Phoenix (poco X2)</span>
            <div className="icons">
              <a href="">
                <BsGithub />
              </a>
              <a href="">
                <BsTelegram />
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="bg-image">
            <img src={BgImg} alt="" />
          </div>
          <div className="pic">
            <img src={None} alt="" />
          </div>
          <div className="info">
            <h3>Abhay K Sanjay</h3>
            <span>Redmi 7</span>
            <div className="icons">
              <a href="">
                <BsGithub />
              </a>
              <a href="">
                <BsTelegram />
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="bg-image">
            <img src={BgImg} alt="" />
          </div>
          <div className="pic">
            <img src={None} alt="" />
          </div>
          <div className="info">
            <h3>Hassan</h3>
            <span>miatoll</span>
            <p></p>
            <div className="icons">
              <a href="">
                <BsGithub />
              </a>
              <a href="">
                <BsTelegram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maintainers;
