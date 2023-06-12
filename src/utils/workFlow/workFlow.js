import React from "react";
import "./style.scss";

export default ({ workflowSettingTitle, workflowSettingImg }) => {
  return (
    <div className="work-flow">
      <div className="work-flow-dtail">
        <h2 className="work-flow-dtail-title">{workflowSettingTitle}</h2>
        <img src={workflowSettingImg} alt="Setting icon's image" />
      </div>
    </div>
  );
};
