import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="App">
        <div className="App-header">
          <div className="App-logo1">
            <img src="./images/logo1.png" alt="logo1" />
          </div>
        </div>

        <div className="App-logo2">
          <img src="./images/logo2.png" alt="logo2" />
        </div>
        {/* <Link to="/PersonalInfo"> */}
        <Link style={{ textDecoration: "none" }} to="/PersonalInfo">
          <button className="App-addBtn">ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</button>
        </Link>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Home;
