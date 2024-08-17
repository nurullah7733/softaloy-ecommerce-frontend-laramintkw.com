import React from "react";

const FooterBottom = () => {
  return (
    <div className=" py-10 px-14">
      <div className="flex md:flex-col md:gap-4   justify-between">
        <div className="flex flex-col">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} LARAMINT
          </p>
          <p className="text-sm mt-1 text-gray-600">
            Powered by{" "}
            <a
              href="https://laramintkw.com"
              className="text-green-600 font-semibold"
            >
              laramintkw.com
            </a>
          </p>
        </div>
        <div className="flex gap-5">
          <div>
            <img src="/cod.svg" className="w-10 h-10 border" />
          </div>
          <div>
            <img src="/visa.svg" className="w-10 h-10 border" />
          </div>
          <div>
            <img src="/mastercard.svg" className="w-10 h-10 border" />
          </div>
          <div>
            <img src="/paypal.svg" className="w-10 h-10 border" />
          </div>
          <div>
            <img src="/american-express.svg" className="w-10 h-10 border" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
