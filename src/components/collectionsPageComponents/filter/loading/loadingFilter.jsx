import React from "react";

const LoadingFilter = () => {
  return (
    <div className="animate-pulse w-full">
      <div className="flex gap-x-2 w-full justify-between">
        <div className="bg-gray-300 h-5 w-[100px]"></div>
        <div className="bg-gray-300 h-5 w-[20px]"></div>
      </div>
    </div>
  );
};

export default LoadingFilter;
