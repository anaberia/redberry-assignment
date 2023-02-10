import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Employment from "../Reusables/Employment/Employment";
import "./ExperienceInfo.css";

function ExperienceInfo({ experience, setExperience }) {
  return (
    <div className="ExperienceInfo">
      <div className="ExperienceInfo-left">
        {/* header with old styles is ok */}
        <div className="PersonalInfo-headerContainer">
          <Link style={{ textDecoration: "none" }} to="/">
            <div className="PersonalInfo-backBtn" onClick={() => localStorage}>
              <div className="vector">{"<"}</div>
            </div>
          </Link>
          <div className="PersonalInfo-header">
            <div className="Header-txt">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</div>
            <div className="Header-pg">2/3</div>
          </div>
        </div>
        {/* header with old styles is ok */}

        {experience.map((item, index) => {
          return (
            <Employment
              experience={experience}
              setExperience={setExperience}
              id={index}
              item={item}
            />
          );
        })}

        {/* experience button */}
        <button
          className="Experience-btn"
          onClick={() => setExperience([...experience, ""])}
        >
          მეტი გამოცდილების დამატება
        </button>
        {/* experience button */}
        <div className="Experience-btnGroup">
          <Link style={{ textDecoration: "none" }} to="/PersonalInfo">
            <button className="Experience-backBtn">ᲣᲙᲐᲜ</button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/EducationInfo">
            <button className="Experience-nextBtn">ᲨᲔᲛᲓᲔᲒᲘ</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ExperienceInfo;
