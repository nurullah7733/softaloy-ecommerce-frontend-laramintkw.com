import React from "react";
import { PiPhoneThin } from "react-icons/pi";
import { PiWhatsappLogoThin } from "react-icons/pi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { useSelector } from "react-redux";
const FooterTop = () => {
  const socialLinks = useSelector((state) => state.settings.socialLinks);

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
    <div className="border-t-[10px] py-10 px-32 lg:px-4 border-b">
      <div className="grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-8 items-center ">
        <div className="text-center">
          <h2 className="font-bold  ">Need help?</h2>
          <p className="text-sm mt-2">We'd love to help you out!</p>
        </div>

        <div className="sm:flex-col flex items-center justify-center gap-2">
          <PiPhoneThin size={40} />
          <div>
            <h2 className="text-sm text-gray-400">Phone Support</h2>
            <p className="mt-2">+965 50073108</p>
          </div>
        </div>

        <div className="sm:flex-col flex items-center justify-center gap-2">
          <PiWhatsappLogoThin size={40} />
          <div>
            <h2 className="text-sm text-gray-400">Whatsapp Support</h2>
            <p className="mt-2">Chat with us</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          {facebook && (
            <div className="border p-2 rounded-full">
              <a href={facebook?.socialLink} target="_blank">
                <FaFacebookF className="text-gray-600" />
              </a>
            </div>
          )}
          {instagram && (
            <div className="border p-2 rounded-full">
              <a href={instagram?.socialLink} target="_blank">
                <FaInstagram className="text-gray-600" />
              </a>
            </div>
          )}
          {twitter && (
            <div className="border p-2 rounded-full">
              <a href={twitter?.socialLink} target="_blank">
                <FaTwitter className="text-gray-600" />
              </a>
            </div>
          )}
          {pinterest && (
            <div className="border p-2 rounded-full">
              <a href={pinterest?.socialLink} target="_blank">
                <FaPinterest className="text-gray-600" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
