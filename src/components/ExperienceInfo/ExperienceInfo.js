import React from "react";
import { Link } from "react-router-dom";
import "./ExperienceInfo.css";

function ExperienceInfo() {
  return (
    <div className="ExprienceInfo">
      <div className="ExperienceInfo-left">
        <div className="Experience-header"></div>
        <div className="Position-container"></div>
        <div className="Employer-container"></div>
        <div className="Number-container">
          <div className="StartNum-container"></div>
          <div className="EndNum-container"></div>
        </div>
        <div className="Description-container"></div>
        <button className="Experience-btn">მეტი გამოცდილების დამატება</button>
        <button className="BackBtn">უკან</button>
        <button className="NextBtn">წინ</button>
      </div>
    </div>
  );
}

export default ExperienceInfo;
