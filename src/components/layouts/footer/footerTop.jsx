import React from "react";
import { PiPhoneThin } from "react-icons/pi";
import { PiWhatsappLogoThin } from "react-icons/pi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
const FooterTop = () => {
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
            <p className="mt-2">+965 60010797</p>
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
          <div className="border p-2 rounded-full">
            <a href="#">
              <FaFacebookF className="text-gray-800" />
            </a>
          </div>
          <div className="border p-2 rounded-full">
            <a href="#">
              <FaInstagram className="text-gray-800" />
            </a>
          </div>
          <div className="border p-2 rounded-full">
            <a href="#">
              <FaTwitter className="text-gray-800" />
            </a>
          </div>
          <div className="border p-2 rounded-full">
            <a href="#">
              <FaPinterest className="text-gray-800" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
