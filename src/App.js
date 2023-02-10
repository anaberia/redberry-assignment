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
  let [experience, setExperience] = useState(getLocalStorage("experience"));

  let resetter = () => {
    localStorage.removeItem("experience");
    setExperience([]);
  };

  useEffect(() => {
    localStorage.setItem("experience", JSON.stringify(experience));
  }, [experience]);

  return (
    <div className="App-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/PersonalInfo"
            element={
              <PersonalInfo
                experience={experience}
                setExperience={setExperience}
                resetter={resetter}
              />
            }
          />
          <Route
            path="/ExperienceInfo"
            element={
              <ExperienceInfo
                experience={experience}
                setExperience={setExperience}
                resetter={resetter}
              />
            }
          />
          <Route
            path="/EducationInfo"
            element={
              <EducationInfo
                experience={experience}
                setExperience={setExperience}
                resetter={resetter}
              />
            }
          />
        </Routes>
      </Router>

      {/* output component */}
      {!Array.isArray(experience) && <Output experience={experience} />}
    </div>
  );
}

export default App;
