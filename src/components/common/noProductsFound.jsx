import React from "react";

const NoProductsFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <svg
        className="w-16 h-16 text-gray-400 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 3l18 18M21 3L3 21"
        />
      </svg>
      <p className="text-gray-500 text-lg">No products found.</p>
    </div>
  );
};

export default NoProductsFound;
