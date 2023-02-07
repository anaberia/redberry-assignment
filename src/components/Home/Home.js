import "./Home.css";

function Home({ setPage }) {
  return (
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
      <button onClick={() => setPage("personal")} className="App-addBtn">
        ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ
      </button>
      {/* </Link> */}
    </div>
  );
}

export default Home;
