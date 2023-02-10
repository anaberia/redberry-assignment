import { Link } from "react-router-dom";
import "./PersonalInfo.css";

function PersonalInfo({ experience, setExperience, resetter }) {
  let imgHandler = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setExperience({ ...experience, photo: reader.result });
    };
  };

  return (
    <div className="PersonalInfo">
      <div className="PersonalInfo-left">
        {/* header */}
        <div className="PersonalInfo-headerContainer">
          <Link style={{ textDecoration: "none" }} to="/">
            <div onClick={resetter} className="PersonalInfo-backBtn">
              <div className="vector">{"<"}</div>
            </div>
          </Link>
          <div className="PersonalInfo-header">
            <div className="Header-txt">ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ</div>
            <div className="Header-pg">1/3</div>
          </div>
        </div>
        {/* header */}
        {/* input */}
        <div className="Input-container">
          <div className="Name-container">
            <div className="Name">სახელი</div>
            <input
              value={experience.name}
              type="text"
              className="NameInput"
              placeholder="ანზორ"
              onChange={(e) =>
                setExperience({ ...experience, name: e.target.value })
              }
            />
            <div className="Name-valid">მინიმუმ 2 ასო, ქართული ასოები</div>
          </div>
          <div className="LastName-container">
            <div className="Name">გვარი</div>
            <input
              value={experience.lastName}
              type="text"
              className="NameInput"
              placeholder="მუმლაძე"
              onChange={(e) =>
                setExperience({ ...experience, lastName: e.target.value })
              }
            />
            <div className="Name-valid">მინიმუმ 2 ასო, ქართული ასოები</div>
          </div>
        </div>
        {/* input */}
        {/* photo */}
        <div className="Photo-container">
          <div className="Personal-photoUp">პირადი ფოტოს ატვირთვა</div>

          <label className="Photo-upload" htmlFor="imgs">
            ატვირთვა
          </label>
          <input
            id="imgs"
            style={{ display: "none" }}
            type="file"
            onChange={imgHandler}
          />
        </div>
        {/* photo */}
        {/* about me */}
        <div className="AboutMe-container">
          <div className="AboutMe-title">ჩემ შესახებ (არასავალდებულო)</div>
          <textarea
            value={experience.aboutMe}
            type="text"
            className="AboutMe-input"
            placeholder="ზოგადი ინფო შენს შესახებ"
            onChange={(e) =>
              setExperience({ ...experience, aboutMe: e.target.value })
            }
          />
        </div>
        {/* about me */}
        {/* email */}
        <div className="Email-container">
          <div className="Email-title">ელ.ფოსტა</div>
          <input
            value={experience.email}
            type="text"
            className="Email-input"
            placeholder="anzor666@redberry.ge"
            onChange={(e) =>
              setExperience({ ...experience, email: e.target.value })
            }
          />
          <div className="Email-valid">უნდა მთავრდებოდეს @redberry.ge-ით</div>
        </div>
        {/* email */}
        {/* phone */}
        <div className="Email-container">
          <div className="Email-title">მობილურის ნომერი</div>
          <input
            value={experience.phone}
            type="text"
            className="Email-input"
            placeholder="+995 551 12 34 56"
            onChange={(e) =>
              setExperience({ ...experience, phone: e.target.value })
            }
          />
          <div className="Email-valid">
            უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს
          </div>
        </div>
        {/* phone */}
        {/* button */}
        <Link style={{ textDecoration: "none" }} to="/ExperienceInfo">
          <button className="Next-btn">ᲨᲔᲛᲓᲔᲒᲘ</button>
        </Link>
        {/* button */}
      </div>
    </div>
  );
}

export default PersonalInfo;
