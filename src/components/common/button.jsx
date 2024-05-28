import React from "react";
import { Link } from "react-router-dom";

const Button = ({ link, text, disabled = false, type = "button" }) => {
  return (
    <div>
      {type === "submit" ? (
        <button
          type="submit"
          className="button_slider_animate w-full disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={disabled}
        >
          <span className="content">{disabled ? "Loading..." : text}</span>
        </button>
      ) : (
        <Link to={link}>
          <button
            className="button_slider_animate w-full disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={disabled}
          >
            <span className="content">{disabled ? "Loading..." : text}</span>
          </button>
        </Link>
      )}
    </div>
  );
};

export default Button;
