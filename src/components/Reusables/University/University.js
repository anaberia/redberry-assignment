import { useForm } from "react-hook-form";
import "./University.css";

function University({ education, setEducation, id, item }) {
  const { register, handleSubmit } = useForm();
  console.log(education);
  let addHandler = (data) => {
    let newArr = education.map((item, index) => {
      if (index === id) {
        return (education[id] = data);
      }
      return item;
    });
    setEducation(newArr);
  };

  return (
    <form onChange={handleSubmit(addHandler)}>
      {/* Position */}
      <div className="Email-container">
        <div className="Email-title">სასწავლებელი</div>
        <input
          value={education[id].university}
          type="text"
          className="Email-input"
          placeholder="სასწავლებელი"
          {...register("university")}
        />
        <div className="Email-valid">მინიმუმ 2 სიმბოლო</div>
      </div>
      {/* Position */}

      {/* input */}
      <div className="Input-containerWrapper">
        <div className="Input-container">
          <div className="Name-container">
            <div className="Name">ხარისხი</div>
            <input
              value={education[id].degree}
              type="text"
              className="NameInput"
              placeholder="აირჩიეთ ხარისხი"
              {...register("degree")}
            />
          </div>
          <div className="LastName-container">
            <div className="Name">დამთავრების რიცხვი</div>
            <input
              value={education[id].eduEndDate}
              type="text"
              className="NameInput"
              placeholder="111111"
              {...register("eduEndDate")}
            />
          </div>
        </div>
      </div>
      {/* input */}
      {/* about me */}
      <div>
        <div className="AboutMe-title">აღწერა</div>
        <textarea
          value={education[id].eduDescription}
          type="text"
          className="Description-input"
          placeholder="განათლების აღწერა"
          {...register("eduDescription")}
        />
      </div>
      {/* about me */}
      <div className="Bottom-border"></div>
    </form>
  );
}

export default University;
