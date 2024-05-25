import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import {
  successAlert,
  errorAlert,
} from "../../../../utils/notificationAlert/notificationAlert";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../common/button";
import {
  getAboutUsRequest,
  getSocialLinksRequest,
  getSubcriptionEmailRequest,
} from "../../../APIRequest/settingsApi";
import { useSelector } from "react-redux";

const FooterMiddle = () => {
  const [SubscribeEmail, setSubscribeEmail] = useState("");
  const [SubscribeEmailLoading, setSubscribeEmailLoading] = useState(false);
  const aboutUs = useSelector((state) => state.settings.aboutUs);
  const socialLinks = useSelector((state) => state.settings.socialLinks);

  const handleSubcriptionEmail = async () => {
    if (SubscribeEmail === "") {
      errorAlert("Please Enter Email");
    } else {
      setSubscribeEmailLoading(true);
      const result = await getSubcriptionEmailRequest(SubscribeEmail);
      setSubscribeEmailLoading(false);
      if (result) {
        successAlert("Successfully Subscribed!");
        setSubscribeEmail("");
      }
    }
  };

  useEffect(() => {
    (async () => {
      await getAboutUsRequest();
    })();
  }, []);
  useEffect(() => {
    (async () => {
      await getSocialLinksRequest();
    })();
  }, []);

  const facebook = socialLinks?.find(
    (item) => item.name?.toLowerCase() === "facebook"
  );
  const instagram = socialLinks?.find(
    (item) => item.name?.toLowerCase() === "instagram"
  );
  const twitter = socialLinks?.find(
    (item) => item.name?.toLowerCase() === "twitter" || "x"
  );
  const pinterest = socialLinks?.find(
    (item) => item.name?.toLowerCase() === "pinterest"
  );

  return (
    <div className=" py-20 px-14">
      <div className="grid grid-cols-3 lg:grid-cols-1 gap-x-20 gap-y-14   justify-between">
        <div className="w-full">
          <h2 className="font-bold text-sm text-gray-600">ABOUT THE COMPANY</h2>
          <div className="py-6 text-gray-500 text-sm  leading-6">
            {aboutUs && parse(aboutUs.aboutUs)}
          </div>
          <div className="flex gap-5">
            {facebook && (
              <div>
                <a href={facebook?.socialLink} target="_blank">
                  <FaFacebookF className="text-gray-600" />
                </a>
              </div>
            )}
            {instagram && (
              <div>
                <a href={instagram?.socialLink} target="_blank">
                  <FaInstagram className="text-gray-600" />
                </a>
              </div>
            )}
            {twitter && (
              <div>
                <a href={twitter?.socialLink} target="_blank">
                  <FaTwitter className="text-gray-600" />
                </a>
              </div>
            )}
            {pinterest && (
              <div>
                <a href={pinterest?.socialLink} target="_blank">
                  <FaPinterest className="text-gray-600" />
                </a>
              </div>
            )}
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
            onChange={(e) => setSubscribeEmail(e.target.value)}
            value={SubscribeEmail}
            className="my-6 p-3  focus:outline-none focus:ring-0 focus:border-black w-full "
          />

          <div onClick={handleSubcriptionEmail}>
            <Button
              link="#"
              text={SubscribeEmailLoading ? "Loading..." : "Subscribe"}
              disabled={SubscribeEmailLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMiddle;
