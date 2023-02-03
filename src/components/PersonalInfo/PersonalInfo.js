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
          <div className="Name-lastName">
            <div className="Name">სახელი</div>
            <div className="LastName">გვარი</div>
          </div>
          <div className="Input-containerHeader">
            <input type="text" className="NameInput" placeholder="ანზორ" />
            <input
              type="text"
              className="LastNameInput"
              placeholder="მუმლაძე"
            />
          </div>
          <div className="Name-lastName ">
            <div className="Name">მინიმუმ 2 ასო, ქართული ასოები</div>
            <div className="LastName">მინიმუმ 2 ასო, ქართული ასოები</div>
          </div>
        </div>
      </div>
      {/* input */}

      <div className="PersonalInfo-right">Right side</div>
    </div>
  );
}

export default PersonalInfo;
