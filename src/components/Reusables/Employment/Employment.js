function Employment({ info, setInfo }) {
  return (
    <div>
      <div className="Email-container">
        <div className="Email-title">თანამდებობა</div>
        <input
          value={info.position}
          type="text"
          className="Email-input"
          placeholder="დეველოპერი, დიზაინერი, ა.შ."
          onChange={(e) => setInfo({ ...info, position: e.target.value })}
        />
        <div className="Email-valid">მინიმუმ 2 სიმბოლო</div>
      </div>
      {/* Position */}
      {/* Empoyer */}
      <div className="Email-container">
        <div className="Email-title">დამსაქმებელი</div>
        <input
          value={info.employer}
          type="text"
          className="Email-input"
          placeholder="დამსაქმებელი"
          onChange={(e) => setInfo({ ...info, employer: e.target.value })}
        />
        <div className="Email-valid">მინიმუმ 2 სიმბოლო</div>
      </div>
      {/* Empoyer */}
      {/* input */}
      <div className="Input-containerWrapper">
        <div className="Input-container">
          <div className="Name-container">
            <div className="Name">დაწყების რიცხვი</div>
            <input
              type="text"
              className="NameInput"
              placeholder="1111111"
              onChange={(e) => setInfo({ ...info, startDate: e.target.value })}
            />
          </div>
          <div className="LastName-container">
            <div className="Name">დამთავრების რიცხვი</div>
            <input
              type="text"
              className="NameInput"
              placeholder="111111"
              onChange={(e) => setInfo({ ...info, endDate: e.target.value })}
            />
          </div>
        </div>
      </div>
      {/* input */}
      {/* about me */}
      <div>
        <div className="AboutMe-title">აღწერა</div>
        <textarea
          value={info.description}
          type="text"
          className="AboutMe-input"
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
          onChange={(e) => setInfo({ ...info, description: e.target.value })}
        />
      </div>
    </div>
  );
}

export default Employment;
