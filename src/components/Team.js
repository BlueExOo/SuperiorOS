import React, { useState } from "react";
import { Maintainers } from "../components/Maintainers";
import { FaGithub, FaTelegram } from "react-icons/fa";

import Img from "../assets/Team/Founder.jpeg";
import Img2 from "../assets/Team/LeaderDev.jpeg";
import Img3 from "../assets/Team/FrontEndDev.png";
import Img4 from "../assets/Team/Dev.jpeg";

const Team = () => {
  const [show, setShow] = useState(false);
  return (
    <section className="team-container py-3 mx-3" id="team" data-aos="zoom-in">
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
                  <p>Redmi Note 5 Pro(whyred)</p>
                  <div className="social-icons">
                    <a
                      href="https://github.com/Darkstar085"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <span>
                        <FaGithub />
                      </span>
                    </a>
                    <a
                      href="https://t.me/Darkstar085"
                      target={"_blank"}
                      rel="noreferrer"
                    >
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
                  <p>Poco X3 Pro (Vayu)</p>
                  <div className="social-icons">
                    <a
                      href="https://github.com/BlueExOo"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <span>
                        <FaGithub />
                      </span>
                    </a>
                    <a
                      href="https://t.me/BlueExOo"
                      target={"_blank"}
                      rel="noreferrer"
                    >
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
                  <p>Redmi Note 7 Pro (violet)</p>
                  <div className="social-icons">
                    <a
                      href="https://github.com/Joker-V2"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <span>
                        <FaGithub />
                      </span>
                    </a>
                    <a
                      href="http://t.me/Joker_V2_0"
                      target={"_blank"}
                      rel="noreferrer"
                    >
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

        <div>
          {show ? <Maintainers /> : null}

          <div className="button">
            <button className="btn" onClick={() => setShow(!show)}>
              Maintainers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
