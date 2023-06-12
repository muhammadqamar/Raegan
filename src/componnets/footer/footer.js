import React from "react";
import "./style.scss";

import Raegan from "../../assets/images/Raegan.svg";
import Call from "../../assets/images/call.svg";
import Inbox from "../../assets/images/inbox.svg";
import Address from "../../assets/images/address.svg";
import Arrow from "../../assets/images/rightArrow.svg";
const Footer = () => {
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
              <p>Home</p>
            </span>
            <span className="text">
              <img src={Arrow} alt="arrow" />
              <p>About Us</p>
            </span>
            <span className="text">
              <img src={Arrow} alt="arrow" />
              <p>Services</p>
            </span>
            <span className="text">
              <img src={Arrow} alt="arrow" />
              <p>Portfolio</p>
            </span>
            <span className="text">
              <img src={Arrow} alt="arrow" />
              <p>Team</p>
            </span>
          </div>
        </div>
        {/* 3rd */}
        <div className="sub-footer-dtail-3">
          <h2 className="title">UseFull Links</h2>
          <div className="title-dtail">
            <span className="text">
              <img src={Arrow} alt="arrow" />
              <p>Terms of Services</p>
            </span>
            <span className="text">
              <img src={Arrow} alt="arrow" />
              <p>Privacy Policy</p>
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
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
