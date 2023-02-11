import React from "react";

function OutputExperience({ item }) {
  return (
    <div>
      <div className="Output-experienceInfo">
        <div className="Output-occupation">
          {item.position && (
            <div className="Output-position">{item.position},</div>
          )}
          <div className="Output-employer">{item.employer}</div>
        </div>
        <div className="Output-dateGroup">
          {item.startDate && (
            <div className="Output-startDate">{item.startDate}-</div>
          )}
          <div className="Output-endDate">{item.endDate}</div>
        </div>
        <div className="Output-description">{item.description}</div>
      </div>
    </div>
  );
}

export default OutputExperience;
