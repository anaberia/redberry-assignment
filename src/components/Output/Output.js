import React from "react";
import "./Output.css";

function Output({ info }) {
  return (
    <div className="Output">
      {/* personal */}
      <div className="Output-personalInfo">
        <div className="Output-left">
          <div className="Output-nameGroup">
            <div className="Output-name">{info.name}</div>
            <div className="Output-lastName">{info.lastName}</div>
          </div>
          <div className="Output-email">{info.email}</div>
          <div className="Output-phone">{info.phone}</div>
          <div className="Output-aboutMeTitle">
            {info.aboutMe && "ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ"}
          </div>
          <div className="Output-aboutMe">{info.aboutMe}</div>
        </div>
        {info.photo && <div className="Output-photo"></div>}
      </div>
      {/* Experience */}
      <div className="Output-experienceInfo">
        {(info.position ||
          info.employer ||
          info.startDate ||
          info.endDate ||
          info.description) && (
          <div className="Output-experience">{"ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ"}</div>
        )}
        <div className="Output-occupation">
          {info.position && (
            <div className="Output-position">{info.position},</div>
          )}
          <div className="Output-employer">{info.employer}</div>
        </div>
        <div className="Output-dateGroup">
          {info.startDate && (
            <div className="Output-startDate">{info.startDate}-</div>
          )}
          <div className="Output-endDate">{info.endDate}</div>
        </div>
        <div className="Output-description">{info.description}</div>
      </div>
      {/* Experience */}
      {/* Education */}
      {(info.eduDescription ||
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
      )}
      {/* Education */}
      <div className="Output-logo">
        <img src="./images/logo3.png" alt="outputLogo" />
      </div>
    </div>
  );
}

export default Output;
