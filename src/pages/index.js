import React from "react";
import "./style.scss";

import Hero from "../assets/images/heroImg.png";
import AboutImg from "../assets/images/about.svg";
import Circle from "../assets/images/circle.svg";

const About = () => {
  return (
    <>
      <div className="home">
        <div className="hero">
          <div className="hero-sec1">
            <h2 className="title">
              We Make Your <span className="business">Business</span> Easier
            </h2>
            <p className="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <button className="buttton">Learn more</button>
          </div>
          <div className="hero-sec2">
            <img src={Hero} alt="Hero image" />
          </div>
        </div>
      </div>
      <div className="about">
        <div className="about-us">
          <img src={AboutImg} />
          <div className="about-us-dtail">
            <h2 className="main-title">ABOUT US</h2>
            <h2 className="sub-title">
              We Can Take Your Business To Next Level.
            </h2>
            <p className="description">
              We do much more than simply deliver technology or provide managed
              services. At QA, we offer clients the unique skill we’ve gained
              from our one-of-a-kind experience with our partners and clients
              Our solutions come from a process of perception, leading edge, and
              profound knowledge of various technologies.
            </p>
            <p className="description">
              Since our inception in 2021, we are growing into an organization
              that rivals any modern day software company. Our credo is to keep
              our communication with clients at an exceptional level, increasing
              our productivity and fulfilling the needs of our clients.
            </p>
            <div className="list">
              <span className="list-dtail">
                <img src={Circle} />
                <p>100% satisfaction guarantee.</p>
              </span>
              <span className="list-dtail">
                <img src={Circle} />
                <p>100's of successful projects.</p>
              </span>
              <span className="list-dtail">
                <img src={Circle} />
                <p>24/7 support</p>
              </span>
              <span className="list-dtail">
                <img src={Circle} />
                <p>modifications after project completion.</p>
              </span>
            </div>
            <div className="button">
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
