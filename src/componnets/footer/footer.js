import React from "react";
import "./style.scss";

import Raegan from "../../assets/images/Raegan.svg";
import Call from "../../assets/images/call.svg";
import Inbox from "../../assets/images/inbox.svg";
import Address from "../../assets/images/address.svg";
import Arrow from "../../assets/images/rightArrow.svg";
import Required from "../../assets/images/required.svg";

const Footer = () => {
  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.elements.email.value;
    alert(value);
  };
  return (
    <div className="footer">
      <div className="sub-footer">
        <div className="sub-footer-dtail-1">
          <img src={Raegan} alt="Raegan's Logo" className="Raegen" />
          <div className="footer-sec1">
            <img src={Call} alt="Call's Logo" />
            <div className="text">
              <h2 className="text-title">Call Anytime</h2>
              <p className="text-description">+ 88 ( 9800 ) 6802</p>
            </div>
          </div>
          <div className="footer-sec1">
            <img src={Inbox} alt="Inbox's Logo" />
            <div className="text">
              <h2 className="text-title">Send Email</h2>
              <p className="text-description">needhelp@company.com</p>
            </div>
          </div>
          <div className="footer-sec1">
            <img src={Address} alt="Call's Logo" />
            <div className="text">
              <h2 className="text-title">Visit now</h2>
              <p className="text-description">
                88 Broklyn Golden Street. New york USA
              </p>
            </div>
          </div>
        </div>
        <div className="sub-footer-dtail-2">
          <h2 className="title">Company</h2>
          <div className="title-dtail">
            <span className="text">
              <img src={Arrow} alt="arrow" />
              <span>
                <a href="">Home</a>
              </span>
            </span>
            <span className="text">
              <img src={Arrow} alt="arrow" />
              <span>
                <a href="">About Us</a>
              </span>
            </span>
            <span className="text">
              <img src={Arrow} alt="arrow" />
              <span>
                <a href="">Services</a>
              </span>
            </span>
            <span className="text">
              <img src={Arrow} alt="arrow" />
              <span>
                <a href="">Portfolio</a>
              </span>
            </span>
            <span className="text">
              <img src={Arrow} alt="arrow" />
              <span>
                <a href="">Team</a>
              </span>
            </span>
          </div>
        </div>
        {/* 3rd */}
        <div className="sub-footer-dtail-3">
          <h2 className="title">UseFull Links</h2>
          <div className="title-dtail">
            <span className="text">
              <img src={Arrow} alt="arrow" />
              <span>
                <a href="">Terms of Services</a>
              </span>
            </span>
            <span className="text">
              <img src={Arrow} alt="arrow" />
              <span>
                <a href="">Privacy Policy</a>
              </span>
            </span>
          </div>
        </div>
        {/* 4th */}
        <div className="sub-footer-dtail-4">
          <h2 className="title">News Letter</h2>
          <div className="title-dtail-1">
            <span className="text">
              <p>SignUp and Recieve the latest Tips via Email</p>
            </span>
            <span className="text">
              <p>Write your Email :</p>
              <img src={Required} alt="Required's img!" />
            </span>
            <form onSubmit={handleChange}>
              <input
                type="text"
                placeholder="Email"
                className="email"
                name="email"
              />
              <button type="submit" className="btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
