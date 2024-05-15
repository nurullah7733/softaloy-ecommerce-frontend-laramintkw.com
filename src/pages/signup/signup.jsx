import React from "react";
import Button from "../../components/common/button";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="max-w-md md:w-full px-4 py-10 mx-auto">
      <center>
        <h1 className="text-2xl">REGISTER </h1>
        <p className="pt-1">Please fill in the information below:</p>
        <div className="pt-5">
          <form className="flex gap-3 flex-col">
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="focus:border-black focus:ring-0 w-full"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                className="focus:border-black focus:ring-0 w-full"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Email"
                className="focus:border-black focus:ring-0 w-full"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="focus:border-black focus:ring-0 w-full"
              />
            </div>
            <div>
              <Button text="Create My account" link={"#"} />
            </div>
          </form>
          <div className="pt-5">
            <p>
              Have an account?{" "}
              <Link to="/login" className="underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </center>
    </div>
  );
};

export default SignupPage;
