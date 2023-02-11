import React, { useEffect } from "react";
import OutputEducation from "../Reusables/OutputEducation/OutputEducation";
import OutputExperience from "../Reusables/OutputExperience/OutputExperience";
import "./Output.css";

function Output({ personal, experience, education }) {
  return (
    <div className="Output">
      {/* personal */}
      <div className="Output-personalInfo">
        <div className="Output-left">
          <div className="Output-nameGroup">
            <div className="Output-name">{personal.name}</div>
            <div className="Output-lastName">{personal.lastName}</div>
          </div>
          {personal.email && (
            <div className="Output-email">
              <img src="./images/email.png" alt="email" />
              <div className="Email-txt">{personal.email}</div>
            </div>
          )}
          {personal.phone && (
            <div className="Output-phone">
              <img src="./images/phone.png" alt="phone" />
              <div className="Phone-txt">{personal.phone}</div>
            </div>
          )}
          <div className="Output-aboutMeTitle">
            {personal.aboutMe && "ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ"}
          </div>
          <div className="Output-aboutMe">{personal.aboutMe}</div>
        </div>
        {personal.photo && (
          <img className="Output-photo" src={personal.photo} alt="" />
        )}
      </div>
      {/* Experience */}

      <div className="Output-experience">{"ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ"}</div>
      {experience.map((item) => {
        return <OutputExperience item={item} />;
      })}
      {/* Experience */}

      {/* Education */}
      <div className="Output-educationTitle">{"ᲒᲐᲜᲐᲗᲚᲔᲑᲐ"}</div>
      {education.map((item) => {
        return <OutputEducation item={item} />;
      })}

      {/* Education */}
      <div className="Output-logo">
        <img src="./images/logo3.png" alt="outputLogo" />
      </div>
    </div>
  );
}

export default Output;
