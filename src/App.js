import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import ExperienceInfo from "./components/ExperienceInfo/ExperienceInfo";
import EducationInfo from "./components/EducationInfo/EducationInfo";
import Output from "./components/Output/Output";

const getLocalStorage = () => {
  if (localStorage.getItem("info")) {
    return JSON.parse(localStorage.getItem("info"));
  } else {
    return [];
  }
};

function App() {
  let [info, setInfo] = useState(getLocalStorage());
  console.log(info);

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
            element={<PersonalInfo info={info} setInfo={setInfo} />}
          />
          <Route
            path="/ExperienceInfo"
            element={<ExperienceInfo info={info} setInfo={setInfo} />}
          />
          <Route
            path="/EducationInfo"
            element={<EducationInfo info={info} setInfo={setInfo} />}
          />
        </Routes>
      </Router>

      {/* output component */}
      <Output info={info} />
    </div>
  );
}

export default App;
