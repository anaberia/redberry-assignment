import React from "react";
import "./PersonalInfo.css";

function PersonalInfo() {
  return (
    <div className="PersonalInfo">
      <div className="PersonalInfo-left">
        {/* header */}
        <div className="PersonalInfo-headerContainer">
          <div className="PersonalInfo-backBtn">
            <div className="vector">{"<"}</div>
          </div>
          <div className="PersonalInfo-header">
            <div className="Header-txt">პირადი ინფო</div>
            <div className="Header-pg">1/3</div>
          </div>
        </div>
        {/* header */}

        {/* input */}
        <div className="Input-container">
          <div className="Name-container">
            <div className="Name">სახელი</div>
            <input type="text" className="NameInput" placeholder="ანზორ" />
            <div className="Name-valid">მინიმუმ 2 ასო, ქართული ასოები</div>
          </div>
          <div className="LastName-container">
            <div className="Name">გვარი</div>
            <input type="text" className="NameInput" placeholder="მუმლაძე" />
            <div className="Name-valid">მინიმუმ 2 ასო, ქართული ასოები</div>
          </div>
        </div>
      </div>
      <div className="PersonalInfo-right">Right side</div>
    </div>
  );
}

export default PersonalInfo;
