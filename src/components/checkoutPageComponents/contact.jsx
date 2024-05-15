import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="font-semibold text-xl">Contact</h2>
        <p className="underline">Login</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Email or Phone number"
          className="border w-full rounded focus:ring-0 focus:outline-none focus:border-black my-2 text-sm py-3"
        />
      </div>
    </div>
  );
};

export default Contact;
