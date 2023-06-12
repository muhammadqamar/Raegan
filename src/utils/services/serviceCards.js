import React from "react";
import "./style.scss";
import Tablet from "../../assets/images/tablet.png";

export default ({
  servicesTitle,
  servicesText,
  servicesButton,
  servicesLink,
}) => {
  return (
    <div className="tabletImage">
      <img src={Tablet} alt="Service Image" />
      <div className="tablet-datil">
        <h2 className="tablet-datil-title">{servicesTitle}</h2>
        <p className="tablet-datil-text">{servicesText}</p>
        <button className="tablet-datil-button">
          <a href={servicesLink}>{servicesButton}</a>
        </button>
      </div>
    </div>
  );
};
