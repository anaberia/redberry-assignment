import { useForm } from "react-hook-form";
import "./Employment.css";

function Employment({ experience, setExperience, item, id }) {
  const { register, handleSubmit } = useForm();

  let addHandler = (data) => {
    let newArr = experience.map((item, index) => {
      if (index === id) {
        return (experience[id] = data);
      }
      return item;
    });

    setExperience(newArr);
  };

  return (
    <form onChange={handleSubmit(addHandler)}>
      {/* position */}
      <div className="Email-container">
        <div className="Email-title">თანამდებობა</div>
        <input
          value={item.position}
          placeholder="დეველოპერი, დიზაინერი, ა.შ."
          className="Email-input"
          {...register("position")}
        />
        <div className="Email-valid">მინიმუმ 2 სიმბოლო</div>
      </div>
      {/* Position */}

      {/* Empoyer */}
      <div className="Email-container">
        <div className="Email-title">დამსაქმებელი</div>

        <input
          value={item.employer}
          className="Email-input"
          placeholder="დეველოპერი, დიზაინერი, ა.შ."
          {...register("employer")}
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
              value={item.startDate}
              className="NameInput"
              placeholder="1111111"
              {...register("startDate")}
            />
          </div>
          <div className="LastName-container">
            <div className="Name">დამთავრების რიცხვი</div>
            <input
              value={item.endDate}
              className="NameInput"
              placeholder="111111"
              {...register("endDate")}
            />
          </div>
        </div>
      </div>
      {/* input */}

      {/* about me */}
      <div>
        <div className="AboutMe-title">აღწერა</div>
        <textarea
          value={experience[id].description}
          className="AboutMe-input"
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
          {...register("description")}
        />
      </div>
      <div className="Bottom-border"></div>
    </form>
  );
}

export default Employment;
