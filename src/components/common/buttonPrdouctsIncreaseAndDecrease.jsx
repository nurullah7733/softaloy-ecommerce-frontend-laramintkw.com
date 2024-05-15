import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const ButtonProductsIncreaseAndDecrease = ({ link, text }) => {
  return (
    <div>
      <Link href={link}>
        <button className=" border flex items-center justify-between p-4  w-[140px] h-[45px]">
          <span className="text-lg font-light text-gray-600">
            <FiPlus />
          </span>
          <span className="text-lg font-light text-gray-600">{12}</span>
          <span className="text-lg font-light text-gray-600">
            <FiMinus />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default ButtonProductsIncreaseAndDecrease;
