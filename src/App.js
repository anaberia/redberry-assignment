import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import ExperienceInfo from "./components/ExperienceInfo/ExperienceInfo";
import EducationInfo from "./components/EducationInfo/EducationInfo";

function App() {
  let [info, setInfo] = useState({
    name: "",
    lastName: "",
    photo: "",
    aboutMe: "",
    email: "",
    phone: "",
  });

  return (
    <div className="App-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/PersonalInfo"
            element={<PersonalInfo info={info} setInfo={setInfo} />}
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
    </div>
  );
}

export default App;
