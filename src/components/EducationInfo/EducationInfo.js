import React, { useState } from "react";
import { Link } from "react-router-dom";
import University from "../Reusables/University/University";

import "./EducationInfo.css";

function EducationInfo({ education, setEducation, resetter }) {
  return (
    <div className="ExperienceInfo">
      <div className="ExperienceInfo-left">
        {/* header with old styles is ok */}
        <div className="PersonalInfo-headerContainer">
          <Link style={{ textDecoration: "none" }} to="/">
            <div className="PersonalInfo-backBtn" onClick={() => resetter()}>
              <div className="vector">{"<"}</div>
            </div>
          </Link>
          <div className="PersonalInfo-header">
            <div className="Header-txt">ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</div>
            <div className="Header-pg">3/3</div>
          </div>
        </div>
        {/* header with old styles is ok */}

        {education.map((item, index) => {
          return (
            <University
              education={education}
              setEducation={setEducation}
              id={index}
              item={item}
            />
          );
        })}
        {/* experience button */}
        <button
          className="Education-btn"
          onClick={() => setEducation([...education, ""])}
        >
          სხვა სასწავლებლის დამატება
        </button>
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
