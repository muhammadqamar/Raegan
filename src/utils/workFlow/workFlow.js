import React from "react";
import "./style.scss";
import Settings from "../../assets/images/settings.svg";

export default () => {
  return (
    <div className="work-flow">
      <div className="work-flow-dtail">
        <h2 className="work-flow-dtail-title">Flexiable Pricing Plan To Start</h2>
        <img src={Settings} alt="Setting icon's image" />
      </div>
    </div>
  );
};
