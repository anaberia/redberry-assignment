import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import ExperienceInfo from "./components/ExperienceInfo/ExperienceInfo";
import EducationInfo from "./components/EducationInfo/EducationInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PersonalInfo" element={<PersonalInfo />} />
        <Route path="/ExperienceInfo" element={<ExperienceInfo />} />
        <Route path="/EducationInfo" element={<EducationInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
