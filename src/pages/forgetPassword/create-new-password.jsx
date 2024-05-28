import React, { useState } from "react";
import Button from "../../components/common/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  successAlert,
  errorAlert,
} from "../../../utils/notificationAlert/notificationAlert";
import { IsEmail } from "../../../utils/formValidation/formValidation";
import { createNewPasswordRequest } from "../../APIRequest/userApi";
import { getEmail, getOtp } from "../../../utils/sessionHelper/sessionHelper";

const CreateNewPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.password == "") {
      errorAlert("Please enter password");
    } else if (userData.password.length < 6) {
      errorAlert("Password should be at least 6 characters long");
    } else if (userData.confirmPassword == "") {
      errorAlert("Please enter confirm password");
    } else if (userData.password != userData.confirmPassword) {
      errorAlert("Password and confirm password should be same");
    } else {
      setLoading(true);
      const reuslt = await createNewPasswordRequest(
        getEmail(),
        getOtp(),
        userData.password
      );
      setLoading(false);
      if (reuslt) {
        navigate("/login");
      }
    }
  };

  return (
    <div className="max-w-md md:w-full px-4 py-10 mx-auto">
      <center>
        <h1 className="text-2xl">Create New Password </h1>
        <p className="pt-1">Please enter your new password:</p>
        <div className="pt-5">
          <form className="flex gap-3 flex-col" onSubmit={handleSubmit}>
            <div>
              <input
                value={getEmail()}
                disabled
                type="text"
                placeholder="Email"
                className="focus:border-black focus:ring-0 w-full disabled:bg-gray-100"
              />
            </div>
            <div>
              <input
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    password: e.target.value,
                  })
                }
                value={userData.password}
                type="password"
                placeholder="Password"
                className="focus:border-black focus:ring-0 w-full"
              />
            </div>
            <div>
              <input
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    confirmPassword: e.target.value,
                  })
                }
                value={userData.confirmPassword}
                type="password"
                placeholder="Confirm Password"
                className="focus:border-black focus:ring-0 w-full"
              />
            </div>
            <div>
              <Button
                type="submit"
                text="Create new password"
                disabled={loading}
              />
            </div>
          </form>
        </div>
      </center>
    </div>
  );
};

export default CreateNewPassword;
