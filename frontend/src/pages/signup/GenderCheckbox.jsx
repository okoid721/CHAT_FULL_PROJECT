// eslint-disable-next-line no-unused-vars
import React from "react";

const GenderCheckBox = () => {
  return (
    <div className=" flex gap-2">
      <div className=" form-control flex flex-row gap-1 items-center">
        <label
          htmlFor=""
          className={`label gap-2 cursor-pointer`}
        >
          <span className=" text-white label-text">Male</span>
        <input
          type="checkbox"
          className=" checkbox border-slate-900"
        />
        </label>
      </div>
      <div className=" form-control">
        <label
          htmlFor=""
          className={`label gap-2 cursor-pointer`}
        >
          <span className=" text-white label-text">Female</span>
        <input
          type="checkbox"
          className=" checkbox border-slate-900"
        />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;