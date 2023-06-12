import React, { useState } from "react";
import "./style.scss";
import Cross from "../../assets/images/cross.svg";
import Plus from "../../assets/images/plus.svg";
import Facebook from "../../assets/images/facebook.svg";
import LinkedIn from "../../assets/images/linkedIn.svg";
import Instagram from "../../assets/images/instagram.svg";

export default ({
  teamCardImage,
  teamCardTitle,
  teamCardText,
  teamCardFbIcon,
  teamCardLinkedInIcon,
  teamCardInstaIcon,
}) => {
  const [showIcons, setShowIcons] = useState(false);
  const [crossImage, setCrossImage] = useState(Plus);

  const handleIconChange = () => {
    if (showIcons) {
      setCrossImage(Plus);
      setShowIcons(false);
    } else {
      setShowIcons(true);
      setCrossImage(Cross);
    }
  };

  return (
    <div className="team">
      <div className="team-dtail">
        <img src={teamCardImage} alt="Jerpome's Image" />
        <h2 className="team-dtail-title">{teamCardTitle}</h2>
        <p className="team-dtail-text">{teamCardText}</p>
        <img
          src={crossImage}
          className="contct-btn"
          onClick={handleIconChange}
        />
        {showIcons && (
          <div className="icons">
            <a href={teamCardFbIcon} className="icons-link">
              <img src={Facebook} alt="Facebook Icon" />
            </a>
            <a href={teamCardLinkedInIcon} className="icons-link">
              <img src={LinkedIn} alt="LinkedIn Icon" />
            </a>
            <a href={teamCardInstaIcon} className="icons-link">
              <img src={Instagram} alt="Insta Icon" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
