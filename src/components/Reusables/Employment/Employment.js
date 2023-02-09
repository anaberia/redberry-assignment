import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./Employment.css";

function Employment({ info, setInfo, id }) {
  const { register, handleSubmit } = useForm();

  let onSubmit = (data) => {
    let x = info.map((item, index) => {
      if (index === id) {
        return (info[id] = data);
      }
      return item;
    });
    setInfo(x);
  };

  console.log(info);
  return (
    <form onChange={handleSubmit(onSubmit)}>
      <div className="Email-container">
        <div className="Email-title">თანამდებობა</div>
        <input
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
              className="NameInput"
              placeholder="1111111"
              {...register("startDate")}
            />
          </div>
          <div className="LastName-container">
            <div className="Name">დამთავრების რიცხვი</div>
            <input
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
