import React from "react";
import { FaGithub, FaTelegram } from "react-icons/fa";

import Img from "../assets/Team/Founder.jpeg";
import Img2 from "../assets/Team/LeaderDev.jpeg";
import Img3 from "../assets/Team/FrontEndDev.png";
import Img4 from "../assets/Team/Dev.jpeg";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <section className="team-container py-3 mx-3" id="team">
      <div className="container">
        <h1 className="heading-title">Team</h1>

        <div className="row">
          <div className="team-items">
            <div className="item">
              <img src={Img} alt="" />
              <div className="inner">
                <div className="info">
                  <h3>Sipun Ku Mahanta</h3>
                  <p>Founder/Developer</p>
                  <div className="social-icons">
                    <a href="">
                      <span>
                        <FaGithub />
                      </span>
                    </a>
                    <a href="">
                      <span>
                        <FaTelegram />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <img src={Img2} alt="" />
              <div className="inner">
                <div className="info">
                  <h3>Jayant Deshmukh</h3>
                  <p>Lead Developer</p>
                  <div className="social-icons">
                    <a href="">
                      <span>
                        <FaGithub />
                      </span>
                    </a>
                    <a href="">
                      <span>
                        <FaTelegram />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <img src={Img3} alt="" />
              <div className="inner">
                <div className="info">
                  <h3>Ahmed Hassan</h3>
                  <p>FrontEnd Developer</p>
                  <div className="social-icons">
                    <a href="">
                      <span>
                        <FaGithub />
                      </span>
                    </a>
                    <a href="">
                      <span>
                        <FaTelegram />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <img src={Img4} alt="" />
              <div className="inner">
                <div className="info">
                  <h3>Nipin NA</h3>
                  <p>Developer</p>
                  <div className="social-icons">
                    <a href="">
                      <span>
                        <FaGithub />
                      </span>
                    </a>
                    <a href="">
                      <span>
                        <FaTelegram />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="button">
          <Link to="/Maintainers" className="btn">
            Maintainers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
