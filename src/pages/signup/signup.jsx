import React, { useState } from "react";
import Button from "../../components/common/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  successAlert,
  warningAlert,
} from "../../../utils/notificationAlert/notificationAlert";
import { IsEmail, IsEmpty } from "../../../utils/formValidation/formValidation";
import { registerUserRequest } from "../../APIRequest/userApi";

const SignupPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!IsEmpty(inputData.firstName)) {
      warningAlert("Please enter first name");
    } else if (!IsEmpty(inputData.lastName)) {
      warningAlert("Please enter last name");
    } else if (!IsEmpty(inputData.email)) {
      warningAlert("Please enter  email");
    } else if (!IsEmail(inputData.email)) {
      warningAlert("Please enter valid email");
    } else if (!IsEmpty(inputData.password)) {
      warningAlert("Please enter password");
    } else if (inputData.password.length < 6) {
      warningAlert("Password must be at least 6 characters");
    } else if (!IsEmpty(inputData.confirmPassword)) {
      warningAlert("Please enter confirm password");
    } else if (inputData.password !== inputData.confirmPassword) {
      warningAlert("Password and confirm password not match");
    } else {
      setLoading(true);
      let result = await registerUserRequest(inputData);
      setLoading(false);
      if (result) {
        setInputData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        successAlert("Registration Successfully");
        navigate("/login");
      }
    }
  };

  return (
    <div className="max-w-md md:w-full px-4 py-10 mx-auto">
      <center>
        <h1 className="text-2xl">REGISTER </h1>
        <p className="pt-1">Please fill in the information below:</p>
        <div className="pt-5">
          <form className="flex gap-3 flex-col" onSubmit={handleSubmit}>
            <div className="flex sm:flex-col gap-3">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="focus:border-black focus:ring-0 w-full"
                  value={inputData.firstName}
                  onChange={(e) =>
                    setInputData({ ...inputData, firstName: e.target.value })
                  }
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="focus:border-black focus:ring-0 w-full"
                  value={inputData.lastName}
                  onChange={(e) =>
                    setInputData({ ...inputData, lastName: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Email"
                className="focus:border-black focus:ring-0 w-full"
                value={inputData.email}
                onChange={(e) =>
                  setInputData({ ...inputData, email: e.target.value })
                }
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="focus:border-black focus:ring-0 w-full"
                value={inputData.password}
                onChange={(e) =>
                  setInputData({ ...inputData, password: e.target.value })
                }
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm password"
                className="focus:border-black focus:ring-0 w-full"
                value={inputData.confirmPassword}
                onChange={(e) =>
                  setInputData({
                    ...inputData,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <Button
                type="submit"
                text="Create My account"
                link={"#"}
                disabled={loading}
              />
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
