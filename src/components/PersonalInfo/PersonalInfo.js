import React from "react";
import "./PersonalInfo.css";

function PersonalInfo() {
  return (
    <div className="PersonalInfo">
      <div className="PersonalInfo-left">
        {/* header */}
        <div className="PersonalInfo-headerContainer">
          <div className="PersonalInfo-backBtn">
            <div className="vector">{"<"}</div>
          </div>
          <div className="PersonalInfo-header">
            <div className="Header-txt">პირადი ინფო</div>
            <div className="Header-pg">1/3</div>
          </div>
        </div>
        {/* header */}
        {/* input */}
        <div className="Input-container">
          <div className="Name-container">
            <div className="Name">სახელი</div>
            <input type="text" className="NameInput" placeholder="ანზორ" />
            <div className="Name-valid">მინიმუმ 2 ასო, ქართული ასოები</div>
          </div>
          <div className="LastName-container">
            <div className="Name">გვარი</div>
            <input type="text" className="NameInput" placeholder="მუმლაძე" />
            <div className="Name-valid">მინიმუმ 2 ასო, ქართული ასოები</div>
          </div>
        </div>
        {/* input */}
        {/* photo */}
        <div className="Photo-container">
          <div className="Personal-photoUp">პირადი ფოტოს ატვირთვა</div>
          <button className="Photo-upload">ატვირთვა</button>
        </div>
        {/* photo */}
        {/* about me */}
        <div className="AboutMe-container">
          <div className="AboutMe-title">ჩემ შესახებ (არასავალდებულო)</div>
          <textarea
            type="text"
            className="AboutMe-input"
            placeholder="ზოგადი ინფო შენს შესახებ"
          />
        </div>
        {/* about me */}
        {/* email */}
        <div className="Email-container">
          <div className="Email-title">ელ.ფოსტა</div>
          <input
            type="text"
            className="Email-input"
            placeholder="anzor666@redberry.ge"
          />
          <div className="Email-valid">უნდა მთავრდებოდეს @redberry.ge-ით</div>
        </div>
        {/* email */}
        {/* phone */}
        <div className="Mobile-container">
          <div className="Mobile-title">მობილურის ნომერი</div>
          <input
            type="text"
            className="Mobile-input"
            placeholder="+995 551 12 34 56"
          />
          <div className="Mobile-valid">
            უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს
          </div>
        </div>
        {/* phone */}
      </div>
      <div className="PersonalInfo-right">Right side</div>
    </div>
  );
}

export default PersonalInfo;
