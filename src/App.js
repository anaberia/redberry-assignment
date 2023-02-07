import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import ExperienceInfo from "./components/ExperienceInfo/ExperienceInfo";
import EducationInfo from "./components/EducationInfo/EducationInfo";
import Output from "./components/Output/Output";

const getLocalInfo = () => {
  if (localStorage.getItem("info")) {
    return JSON.parse(localStorage.getItem("info"));
  } else {
    return [];
  }
};

const getLocalPage = () => {
  if (localStorage.getItem("page")) {
    return JSON.parse(localStorage.getItem("page"));
  } else {
    return "home";
  }
};
// App component
function App() {
  let [info, setInfo] = useState(getLocalInfo());
  let [page, setPage] = useState(getLocalPage());

  useEffect(() => {
    if (page === "home") {
      setInfo([]);
    }
    localStorage.setItem("info", JSON.stringify(info));
    localStorage.setItem("page", JSON.stringify(page));
  }, [info, page]);

  return (
    <div className="App-container">
      {/* leftContainer */}
      {page === "home" && <Home setPage={setPage} />}

      {page === "personal" && (
        <PersonalInfo info={info} setInfo={setInfo} setPage={setPage} />
      )}

      {page === "experience" && (
        <ExperienceInfo info={info} setInfo={setInfo} setPage={setPage} />
      )}
      {page === "education" && (
        <EducationInfo info={info} setInfo={setInfo} setPage={setPage} />
      )}
      {/* leftContainer */}

      {/* output */}
      {page !== "home" && <Output info={info} />}
    </div>
  );
}

export default App;
