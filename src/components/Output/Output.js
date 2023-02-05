import React from "react";
import "./Output.css";

function Output({ info }) {
  return (
    <div className="Output">
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
        {/* <div className="Output-photo"></div> */}
      </div>
    </div>
  );
}

export default Output;
