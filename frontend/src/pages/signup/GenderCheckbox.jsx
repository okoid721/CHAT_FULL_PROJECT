import React from "react";


const GenderCheckBox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className=" flex gap-2">
      <div className=" form-control flex flex-row gap-1 items-center">
        <label
          htmlFor=""
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
          
        >
          <span className=" text-white label-text">Male</span>
        <input
          type="checkbox"
          className=" checkbox border-slate-900"
          checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
        />
        </label>
      </div>
      <div className=" form-control">
        <label
          htmlFor=""
          className={`label gap-2 cursor-pointer  ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className=" text-white label-text">Female</span>
        <input
          type="checkbox"
          className=" checkbox border-slate-900"
          checked={selectedGender === "female"}
          onChange={() => onCheckboxChange("female")}
        />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;