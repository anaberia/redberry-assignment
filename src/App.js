import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import ExperienceInfo from "./components/ExperienceInfo/ExperienceInfo";
import EducationInfo from "./components/EducationInfo/EducationInfo";
import Output from "./components/Output/Output";
import { getLocalStorage } from "./helpers/helpers";

function App() {
  let [personal, setPersonal] = useState(getLocalStorage("personal"));
  let [experience, setExperience] = useState(getLocalStorage("experience"));
  let [education, setEducation] = useState(getLocalStorage("education"));

  useEffect(() => {
    localStorage.setItem("experience", JSON.stringify(experience));
    localStorage.setItem("personal", JSON.stringify(personal));
    localStorage.setItem("education", JSON.stringify(education));
  }, [experience, personal, education]);

  return (
    <div className="App-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/PersonalInfo"
            element={
              <PersonalInfo personal={personal} setPersonal={setPersonal} />
            }
          />
          <Route
            path="/ExperienceInfo"
            element={
              <ExperienceInfo
                experience={experience}
                setExperience={setExperience}
              />
            }
          />
          <Route
            path="/EducationInfo"
            element={
              <EducationInfo
                education={education}
                setEducation={setEducation}
              />
            }
          />
        </Routes>
      </Router>

      {/* {!Array.isArray(experience[0]) && */}
      <Output />
      {/* } */}
    </div>
  );
}

export default App;
