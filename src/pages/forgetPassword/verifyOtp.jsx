import React, { useState } from "react";
import Button from "../../components/common/button";

import { useNavigate } from "react-router-dom";
import { setEmail } from "../../../utils/sessionHelper/sessionHelper";
import {
  successAlert,
  errorAlert,
} from "../../../utils/notificationAlert/notificationAlert";
import { verifyOtpRequest } from "../../APIRequest/userApi";
import ReactCodeInput from "react-code-input";
import { getEmail, setOtp } from "../../../utils/sessionHelper/sessionHelper";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [otpCode, setOtpCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otpCode == "") {
      errorAlert("Please enter OTP");
    } else if (otpCode.length != 6) {
      errorAlert("Please enter 6 digit OTP");
    } else {
      setLoading(true);
      const reuslt = await verifyOtpRequest(getEmail(), otpCode);
      if (reuslt) {
        setOtp(otpCode);
        navigate("/create-new-password");
      }
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md md:w-full px-4 py-10 mx-auto">
      <center>
        <h1 className="text-2xl">Verify OTP </h1>
        <p className="pt-1">Please enter your OTP from email</p>
        <div className="pt-5">
          <form className="flex gap-3 flex-col" onSubmit={handleSubmit}>
            <div>
              <ReactCodeInput
                fields={6}
                onChange={(value) => setOtpCode(value)}
              />
            </div>

            <div>
              <Button type="submit" text="Verify OTP" disabled={loading} />
            </div>
          </form>
        </div>
      </center>
    </div>
  );
};

export default VerifyOtp;
