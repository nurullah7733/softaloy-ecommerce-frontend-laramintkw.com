import React from "react";

const FailPayment = () => {
  return (
    <div className="w-full flex justify-center my-10 ">
      <div className="flex flex-col gap-4 items-center">
        <img className="w-24 h-24" src="/failed.png" />

        <div className="block">
          <h2 className="text-center text-xl font-bold"> Payment Fail</h2>
        </div>
      </div>
    </div>
  );
};

export default FailPayment;
