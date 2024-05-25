import React from "react";
import { Link } from "react-router-dom";

const Button = ({ link, text, disabled = false }) => {
  return (
    <div>
      <Link to={link}>
        <button
          className="button_slider_animate w-full disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={disabled}
        >
          <span className="content">{text}</span>
        </button>
      </Link>
    </div>
  );
};

export default Button;
