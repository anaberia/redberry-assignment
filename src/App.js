import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import ExperienceInfo from "./components/ExperienceInfo/ExperienceInfo";
import EducationInfo from "./components/EducationInfo/EducationInfo";
import Output from "./components/Output/Output";

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

      {/* output component */}
      <Output info={info} />
    </div>
  );
}

export default App;
