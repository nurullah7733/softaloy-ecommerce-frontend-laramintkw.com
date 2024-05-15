import React from "react";

const ShippingMethod = () => {
  const [selected, setSelected] = React.useState(true);
  return (
    <div>
      <h2 className="font-semibold text-xl pt-10 pb-2">Shipping Method</h2>
      {selected ? (
        <div className="p-4 border bg-gray-100 rounded-md">
          <p className="text-sm">
            Enter your shipping address to view available shipping methods.
          </p>
        </div>
      ) : (
        <div className="p-4 border flex items-center justify-between rounded-md">
          <div>
            <input
              type="radio"
              className="mr-2   w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />

            <label>Standard Shipping</label>
          </div>

          <div>
            <p className="uppercase">10 wkd</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShippingMethod;
