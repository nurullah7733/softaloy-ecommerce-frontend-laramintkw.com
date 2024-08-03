import React, { useEffect } from "react";
import { setAddToCartInLocalStorage } from "../../../utils/sessionHelper/sessionHelper";

const SuccessPayment = () => {
  useEffect(() => {
    setAddToCartInLocalStorage([]);
  }, []);

  return (
    <div className="w-full flex justify-center my-10 ">
      <div className="flex flex-col gap-4 items-center">
        <img className="w-24 h-24 block" src="/checked.png" />

        <div className="block">
          <h2 className="text-center text-xl font-bold"> Payment Successful</h2>
        </div>
      </div>
    </div>
  );
};

export default SuccessPayment;
