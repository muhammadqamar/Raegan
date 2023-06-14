import React from "react";
import "./style.scss";

import Raegan from "../../assets/images/Raegan.svg";

const Header = () => {
  return (
    <nav className="nav">
      <a href="" className="nav-logo">
        <img src={Raegan} alt="Raegan's Logo" />
      </a>
      <div className="nav-items">
        <ul className="nav-list">
          <li className="nav-list-item">
            <a href="">Home</a>
          </li>
          <li className="nav-list-item">
            <a href="">About Us</a>
          </li>
          <li className="nav-list-item">
            <a href="">Services</a>
          </li>
          <li className="nav-list-item">
            <a href="">Portfolio</a>
          </li>
          <li className="nav-list-item">
            <a href="">Team</a>
          </li>
        </ul>

        <button className="nav-btn">Contact Us</button>
        {/* </div> */}
      </div>
    </nav>
  );
};

export default Header;
