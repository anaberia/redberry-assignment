import React, { useState } from "react";
import { Link } from "react-router-dom";
import Employment from "../Reusables/Employment/Employment";
import "./ExperienceInfo.css";

function ExperienceInfo({ info, setInfo, resetter }) {
  let [expArray, setExpArray] = useState([1]);

  return (
    <div className="ExperienceInfo">
      <div className="ExperienceInfo-left">
        {/* header with old styles is ok */}
        <div className="PersonalInfo-headerContainer">
          <Link style={{ textDecoration: "none" }} to="/">
            <div className="PersonalInfo-backBtn" onClick={resetter}>
              <div className="vector">{"<"}</div>
            </div>
          </Link>
          <div className="PersonalInfo-header">
            <div className="Header-txt">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</div>
            <div className="Header-pg">2/3</div>
          </div>
        </div>
        {/* header with old styles is ok */}

        {expArray.map((item) => {
          return <Employment info={info} setInfo={setInfo} id={item} />;
        })}

        {/* experience button */}
        <button
          className="Experience-btn"
          onClick={() => setExpArray([...expArray, expArray.length + 1])}
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
