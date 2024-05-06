import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderBottom = () => {
  return (
    <div className="sticky bottom-0 w-full bg-gray-200 py-4">
      <div className="container mx-auto px-10">
        <div className="flex justify-between items-center">
          <a href="#">
            <FaFacebookF className="text-gray-400" />
          </a>
          <a href="#">
            <FaTwitter className="text-gray-400" />
          </a>
          <a href="#">
            <FaInstagram className="text-gray-400" />
          </a>
          <a href="#">
            <FaPinterest className="text-gray-400" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
