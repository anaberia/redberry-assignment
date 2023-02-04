import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PersonalInfo" element={<PersonalInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
