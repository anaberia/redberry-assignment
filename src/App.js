import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import ExperienceInfo from "./components/ExperienceInfo/ExperienceInfo";
import EducationInfo from "./components/EducationInfo/EducationInfo";

function App() {
  let [name, setName] = useState("");
  let [lastName, setLastName] = useState("");
  let [photo, setPhoto] = useState("");
  let [aboutMe, setAboutMe] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");

  return (
    <div className="App-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/PersonalInfo"
            element={
              <PersonalInfo
                setName={setName}
                setLastName={setLastName}
                setAboutMe={setAboutMe}
                setEmail={setEmail}
                setPhone={setPhone}
              />
            }
          />
          <Route path="/ExperienceInfo" element={<ExperienceInfo />} />
          <Route path="/EducationInfo" element={<EducationInfo />} />
        </Routes>
      </Router>

      {/* right component */}
      <div className="Output">
        <div className="Output-personalInfo">
          <div className="Output-left">
            <div className="Output-nameGroup">
              <div className="Output-name">{name}</div>
              <div className="Output-lastName">{lastName}</div>
            </div>
            <div className="Output-email">{email}</div>
            <div className="Output-phone">{phone}</div>
            <div className="Output-aboutMeTitle">
              {aboutMe && "ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ"}
            </div>
            <div className="Output-aboutMe">{aboutMe}</div>
          </div>
          {/* <div className="Output-photo"></div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
