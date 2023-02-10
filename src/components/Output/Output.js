import React from "react";
import "./Output.css";

function Output({ experience }) {
  return (
    <div className="Output">
      {/* personal */}
      {/* <div className="Output-personalInfo">
        <div className="Output-left">
          <div className="Output-nameGroup">
            <div className="Output-name">{info.name}</div>
            <div className="Output-lastName">{info.lastName}</div>
          </div>
          {info.email && (
            <div className="Output-email">
              <img src="./images/email.png" alt="email" />
              <div className="Email-txt">{info.email}</div>
            </div>
          )}
          {info.phone && (
            <div className="Output-phone">
              <img src="./images/phone.png" alt="phone" />
              <div className="Phone-txt">{info.phone}</div>
            </div>
          )}
          <div className="Output-aboutMeTitle">
            {info.aboutMe && "ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ"}
          </div>
          <div className="Output-aboutMe">{info.aboutMe}</div>
        </div>
        {info.photo && <img className="Output-photo" src={info.photo} alt="" />}
      </div> */}
      {/* Experience */}
      <div className="Output-experienceInfo">
        {(experience.position ||
          experience.employer ||
          experience.startDate ||
          experience.endDate ||
          experience.description) && (
          <div className="Output-experience">{"ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ"}</div>
        )}
        <div className="Output-occupation">
          {experience.position && (
            <div className="Output-position">{experience.position},</div>
          )}
          <div className="Output-employer">{experience.employer}</div>
        </div>
        <div className="Output-dateGroup">
          {experience.startDate && (
            <div className="Output-startDate">{experience.startDate}-</div>
          )}
          <div className="Output-endDate">{experience.endDate}</div>
        </div>
        <div className="Output-description">{experience.description}</div>
      </div>
      {/* Experience */}
      {/* Education */}
      {/* {(info.eduDescription ||
        info.university ||
        info.degree ||
        info.eduEndDate ||
        info.eduDescription) && (
        <div className="Output-educationInfo">
          <div className="Output-education">
            <div className="Output-educationTitle">{"ᲒᲐᲜᲐᲗᲚᲔᲑᲐ"}</div>
            <div className="Output-educationDegree">
              {info.university && (
                <div className="Output-university">{info.university},</div>
              )}
              <div className="Output-degree">{info.degree}</div>
            </div>
            <div className="Output-dateGroup">{info.eduEndDate}</div>
            <div className="Output-description">{info.eduDescription}</div>
          </div>
        </div>
      )} */}
      {/* Education */}
      <div className="Output-logo">
        <img src="./images/logo3.png" alt="outputLogo" />
      </div>
    </div>
  );
}

export default Output;
