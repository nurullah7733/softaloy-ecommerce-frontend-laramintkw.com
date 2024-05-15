import React from "react";
import Button from "../../components/common/button";
import { Link } from "react-router-dom";

const SigninPage = () => {
  return (
    <div className="max-w-md md:w-full px-4 py-10 mx-auto">
      <center>
        <h1 className="text-2xl">LOGIN </h1>
        <p className="pt-1">Please enter your e-mail and password:</p>
        <div className="pt-5">
          <form className="flex gap-3 flex-col">
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
              <Button text="Login" link={"#"} />
            </div>
          </form>
          <div className="pt-5">
            <Link to="/sign-up" className="">
              Forget Password?
            </Link>

            <p>
              Don't have an account?{" "}
              <Link to="/sign-up" className="underline">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </center>
    </div>
  );
};

export default SigninPage;
