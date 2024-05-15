import React from "react";
import { Link } from "react-router-dom";

const Button = ({ link, text }) => {
  return (
    <div>
      <Link to={link}>
        <button className="button_slider_animate w-full">
          <span className="content">{text}</span>
        </button>
      </Link>
    </div>
  );
};

export default Button;
