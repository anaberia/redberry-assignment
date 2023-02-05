import React from "react";
import { Link } from "react-router-dom";
import "./EducationInfo.css";

function EducationInfo() {
  return (
    <div className="ExperienceInfo">
      <div className="ExperienceInfo-left">
        {/* header with old styles is ok */}
        <div className="PersonalInfo-headerContainer">
          <Link style={{ textDecoration: "none" }} to="/">
            <div className="PersonalInfo-backBtn">
              <div className="vector">{"<"}</div>
            </div>
          </Link>
          <div className="PersonalInfo-header">
            <div className="Header-txt">ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</div>
            <div className="Header-pg">3/3</div>
          </div>
        </div>
        {/* header with old styles is ok */}
        {/* Position */}
        <div className="Email-container">
          <div className="Email-title">სასწავლებელი</div>
          <input
            type="text"
            className="Email-input"
            placeholder="სასწავლებელი"
          />
          <div className="Email-valid">მინიმუმ 2 სიმბოლო</div>
        </div>
        {/* Position */}

        {/* input */}
        <div className="Input-containerWrapper">
          <div className="Input-container">
            <div className="Name-container">
              <div className="Name">ხარისხი</div>
              <input
                type="text"
                className="NameInput"
                placeholder="აირჩიეთ ხარისხი"
              />
            </div>
            <div className="LastName-container">
              <div className="Name">დამთავრების რიცხვი</div>
              <input type="text" className="NameInput" placeholder="111111" />
            </div>
          </div>
        </div>
        {/* input */}
        {/* about me */}
        <div>
          <div className="AboutMe-title">აღწერა</div>
          <textarea
            type="text"
            className="Description-input"
            placeholder="განათლების აღწერა"
          />
        </div>
        {/* about me */}
        {/* experience button */}
        <button className="Education-btn">სხვა სასწავლებლის დამატება</button>
        {/* experience button */}
        <div className="Experience-lastBtnGroup">
          <Link to="/ExperienceInfo">
            <button className="Experience-backBtn">ᲣᲙᲐᲜ</button>
          </Link>
          <button className="Finish-btn">ᲓᲐᲡᲠᲣᲚᲔᲑᲐ</button>
        </div>
      </div>
      {/* <div className="ExperienceInfo-right"></div> */}
    </div>
  );
}

export default EducationInfo;