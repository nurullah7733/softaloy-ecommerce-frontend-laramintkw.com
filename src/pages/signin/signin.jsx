import React, { useState } from "react";
import Button from "../../components/common/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  successAlert,
  errorAlert,
} from "../../../utils/notificationAlert/notificationAlert";
import { IsEmail } from "../../../utils/formValidation/formValidation";
import { loginUserRequest } from "../../APIRequest/userApi";

const SigninPage = () => {
  const [loading, setLoading] = useState(false);
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userLoginData.email == "") {
      errorAlert("Please enter email");
    } else if (IsEmail(userLoginData.email) == false) {
      errorAlert("Please enter valid email");
    } else if (userLoginData.password == "") {
      errorAlert("Please enter password");
    } else {
      setLoading(true);
      const reuslt = await loginUserRequest(userLoginData);
      setLoading(false);
      if (reuslt) {
        window.location.href = "/";
      }
    }
  };

  return (
    <div className="max-w-md md:w-full px-4 py-10 mx-auto">
      <center>
        <h1 className="text-2xl">LOGIN </h1>
        <p className="pt-1">Please enter your e-mail and password:</p>
        <div className="pt-5">
          <form className="flex gap-3 flex-col" onSubmit={handleSubmit}>
            <div>
              <input
                onChange={(e) =>
                  setUserLoginData({ ...userLoginData, email: e.target.value })
                }
                value={userLoginData.email}
                type="text"
                placeholder="Email"
                className="focus:border-black focus:ring-0 w-full"
              />
            </div>
            <div>
              <input
                onChange={(e) =>
                  setUserLoginData({
                    ...userLoginData,
                    password: e.target.value,
                  })
                }
                value={userLoginData.password}
                type="password"
                placeholder="Password"
                className="focus:border-black focus:ring-0 w-full"
              />
            </div>
            <div>
              <Button type="submit" text="Login" disabled={loading} />
            </div>
          </form>
          <div className="pt-5">
            <Link to="/forget-password" className="">
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
