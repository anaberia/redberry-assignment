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
  let [info, setInfo] = useState(["", "", "", "", ""]);

  let resetter = () => {
    localStorage.removeItem("info");
    setInfo([]);
  };

  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(info));
  }, [info]);

  return (
    <div className="App-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/PersonalInfo"
            element={
              <PersonalInfo info={info} setInfo={setInfo} resetter={resetter} />
            }
          />
          <Route
            path="/ExperienceInfo"
            element={
              <ExperienceInfo
                info={info}
                setInfo={setInfo}
                resetter={resetter}
              />
            }
          />
          <Route
            path="/EducationInfo"
            element={
              <EducationInfo
                info={info}
                setInfo={setInfo}
                resetter={resetter}
              />
            }
          />
        </Routes>
      </Router>

      {/* output component */}
      {!Array.isArray(info) && <Output info={info} />}
    </div>
  );
}

export default App;
