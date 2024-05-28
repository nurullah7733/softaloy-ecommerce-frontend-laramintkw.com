import React, { useState } from "react";
import Button from "../../components/common/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setEmail } from "../../../utils/sessionHelper/sessionHelper";
import {
  successAlert,
  errorAlert,
} from "../../../utils/notificationAlert/notificationAlert";
import { IsEmail } from "../../../utils/formValidation/formValidation";
import { verifyEmailRequest } from "../../APIRequest/userApi";

const EmailPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userLoginData, setUserLoginData] = useState({
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userLoginData.email == "") {
      errorAlert("Please enter email");
    } else if (IsEmail(userLoginData.email) == false) {
      errorAlert("Please enter valid email");
    } else {
      setLoading(true);
      const reuslt = await verifyEmailRequest(userLoginData.email);
      if (reuslt) {
        setEmail(userLoginData.email);
        navigate("/verify-otp");
      }
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md md:w-full px-4 py-10 mx-auto">
      <center>
        <h1 className="text-2xl">Recover Password </h1>
        <p className="pt-1">Please enter your email</p>
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
              <Button type="submit" text="Recover" disabled={loading} />
            </div>
          </form>
        </div>
      </center>
    </div>
  );
};

export default EmailPage;
