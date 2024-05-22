import React from "react";
import { Link } from "react-router-dom";

export const AddTocartButton = ({ text }) => {
  return (
    <div>
      <button className="button_slider_animate w-full">
        <span className="content">{text}</span>
      </button>
    </div>
  );
};

export const AddedTocartButton = ({ text }) => {
  return (
    <div>
      <button
        className="bg-gray-100 opacity-75 px-[25px] py-[14px] border w-full "
        disabled
      >
        <span className="content">{text}</span>
      </button>
    </div>
  );
};
