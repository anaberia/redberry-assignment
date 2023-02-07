import React from "react";

import "./EducationInfo.css";

function EducationInfo({ info, setInfo, setPage }) {
  return (
    <div className="ExperienceInfo">
      <div className="ExperienceInfo-left">
        {/* header with old styles is ok */}
        <div className="PersonalInfo-headerContainer">
          <div className="PersonalInfo-backBtn" onClick={() => setPage("home")}>
            <div className="vector">{"<"}</div>
          </div>

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
            value={info.university}
            type="text"
            className="Email-input"
            placeholder="სასწავლებელი"
            onChange={(e) => setInfo({ ...info, university: e.target.value })}
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
                value={info.degree}
                type="text"
                className="NameInput"
                placeholder="აირჩიეთ ხარისხი"
                onChange={(e) => setInfo({ ...info, degree: e.target.value })}
              />
            </div>
            <div className="LastName-container">
              <div className="Name">დამთავრების რიცხვი</div>
              <input
                type="text"
                className="NameInput"
                placeholder="111111"
                onChange={(e) =>
                  setInfo({ ...info, eduEndDate: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        {/* input */}
        {/* about me */}
        <div>
          <div className="AboutMe-title">აღწერა</div>
          <textarea
            value={info.eduDescription}
            type="text"
            className="Description-input"
            placeholder="განათლების აღწერა"
            onChange={(e) =>
              setInfo({ ...info, eduDescription: e.target.value })
            }
          />
        </div>
        {/* about me */}
        {/* experience button */}
        <button className="Education-btn">სხვა სასწავლებლის დამატება</button>
        {/* experience button */}
        <div className="Experience-lastBtnGroup">
          <button
            className="Experience-backBtn"
            onClick={() => setPage("experience")}
          >
            ᲣᲙᲐᲜ
          </button>

          <button className="Finish-btn">ᲓᲐᲡᲠᲣᲚᲔᲑᲐ</button>
        </div>
      </div>
      {/* <div className="ExperienceInfo-right"></div> */}
    </div>
  );
}

export default EducationInfo;
