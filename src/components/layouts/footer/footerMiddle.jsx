import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../common/button";
const FooterMiddle = () => {
  return (
    <div className=" py-20 px-14">
      <div className="grid grid-cols-3 lg:grid-cols-1 gap-x-20 gap-y-14   justify-between">
        <div className="w-full">
          <h2 className="font-bold text-sm text-gray-600">ABOUT THE COMPANY</h2>
          <p className="text-sm leading-6 my-6 text-gray-500">
            Inaya Derma is one of the leading Beauty websites in Kuwait and Gulf
            Countries. We are specialized in selling Authentic Skin Care, Hair
            Care, Body Care, and other dedicated para-pharmaceutical products
            from leading Brands & get it delivered to your doorsteps within 24
            hours.
          </p>
          <div className="flex  gap-5">
            <div>
              <a href="#">
                <FaFacebookF className="text-gray-600" />
              </a>
            </div>
            <div>
              <a href="#">
                <FaInstagram className="text-gray-600" />
              </a>
            </div>
            <div>
              <a href="#">
                <FaTwitter className="text-gray-600" />
              </a>
            </div>
            <div>
              <a href="#">
                <FaPinterest className="text-gray-600" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h2 className="font-bold text-sm text-gray-600 mb-6">
            FOR ALL PRODUCTS
          </h2>
          <ul>
            <li className="mb-1">
              <Link to="/search" className="text-gray-500 text-sm ">
                Search
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/privacy-policy" className="text-gray-500 text-sm ">
                Privacy Policy
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/return-and-refund" className="text-gray-500 text-sm ">
                Return & Refund
              </Link>
            </li>
            <li className="mb-1">
              <Link
                to="/term-and-conditions"
                className="text-gray-500 text-sm "
              >
                Terms & Conditions
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/contact-us" className="text-gray-500 text-sm ">
                Contact us
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/term-of-services" className="text-gray-500 text-sm ">
                Terms of Service
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/refund-policy" className="text-gray-500 text-sm ">
                Refund policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full">
          <h2 className="font-bold text-sm text-gray-600 mb-6">NEWSLETTER</h2>
          <p className="text-gray-500 text-sm ">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <input
            type="text"
            placeholder="Enter your email"
            className="my-6 p-3  focus:outline-none focus:ring-0 focus:border-black w-full "
          />
          <Button link="#" text="Subscribe" />
        </div>
      </div>
    </div>
  );
};

export default FooterMiddle;
