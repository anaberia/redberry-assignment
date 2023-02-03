import React from "react";
import "./PersonalInfo.css";

function PersonalInfo() {
  return (
    <div className="PersonalInfo">
      {/* leftside */}
      <div className="PersonalInfo-left">
        <div className="PersonalInfo-backBtn">
          <div className="vector">{"<"}</div>
        </div>
        <div className="PersonalInfo-header">
          <div className="Header-txt">პირადი ინფო</div>
          <div className="Header-pg">1/3</div>
        </div>
      </div>
      {/* leftside */}
      <div className="PersonalInfo-right">Right side</div>
    </div>
  );
}

export default PersonalInfo;
