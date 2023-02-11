import React from "react";

export default function OutputEducation({ item }) {
  return (
    <div>
      {(item.eduDescription ||
        item.university ||
        item.degree ||
        item.eduEndDate ||
        item.eduDescription) && (
        <div className="Output-educationInfo">
          <div className="Output-education">
            <div className="Output-educationDegree">
              {item.university && (
                <div className="Output-university">{item.university},</div>
              )}
              <div className="Output-degree">{item.degree}</div>
            </div>
            <div className="Output-dateGroup">{item.eduEndDate}</div>
            <div className="Output-description">{item.eduDescription}</div>
          </div>
        </div>
      )}{" "}
    </div>
  );
}
