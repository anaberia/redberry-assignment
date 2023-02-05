import React from "react";
import { Link } from "react-router-dom";
import "./ExperienceInfo.css";

function ExperienceInfo({ info, setInfo }) {
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
            <div className="Header-txt">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</div>
            <div className="Header-pg">2/3</div>
          </div>
        </div>
        {/* header with old styles is ok */}
        {/* Position */}
        <div className="Email-container">
          <div className="Email-title">თანამდებობა</div>
          <input
            type="text"
            className="Email-input"
            placeholder="დეველოპერი, დიზაინერი, ა.შ."
            onChange={(e) => setInfo({ ...info, position: e.target.value })}
          />
          <div className="Email-valid">მინიმუმ 2 სიმბოლო</div>
        </div>
        {/* Position */}
        {/* Empoyer */}
        <div className="Email-container">
          <div className="Email-title">დამსაქმებელი</div>
          <input
            type="text"
            className="Email-input"
            placeholder="დამსაქმებელი"
            onChange={(e) => setInfo({ ...info, employer: e.target.value })}
          />
          <div className="Email-valid">მინიმუმ 2 სიმბოლო</div>
        </div>
        {/* Empoyer */}
        {/* input */}
        <div className="Input-containerWrapper">
          <div className="Input-container">
            <div className="Name-container">
              <div className="Name">დაწყების რიცხვი</div>
              <input type="text" className="NameInput" placeholder="1111111" />
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
            className="AboutMe-input"
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            onChange={(e) => setInfo({ ...info, description: e.target.value })}
          />
        </div>
        {/* about me */}
        {/* experience button */}
        <button className="Experience-btn">მეტი გამოცდილების დამატება</button>
        {/* experience button */}
        <div className="Experience-btnGroup">
          <Link to="/PersonalInfo">
            <button className="Experience-backBtn">ᲣᲙᲐᲜ</button>
          </Link>
          <Link to="/EducationInfo">
            <button className="Experience-nextBtn">ᲨᲔᲛᲓᲔᲒᲘ</button>
          </Link>
        </div>
      </div>
      {/* <div className="ExperienceInfo-right"></div> */}
    </div>
  );
}

export default ExperienceInfo;
