import axios from "axios";
import {
  getToken,
  sessionDestroy,
  setToken,
  setUserData,
} from "../../utils/sessionHelper/sessionHelper";
import {
  errorAlert,
  successAlert,
} from "../../utils/notificationAlert/notificationAlert";

let baseUrl = import.meta.env.VITE_API_URL;
let AxiosHeader = {
  headers: {
    "Content-Type": "application/json",
  },
};

export let loginUserRequest = async (data) => {
  try {
    let URL = baseUrl + `/login`;
    let res = await axios.post(URL, data, AxiosHeader);

    if (res.data.status === "success") {
      setToken(res.data.token);
      setUserData(res.data.data);
      successAlert("Login Successfully");
      return true;
    } else if (res.data.status === "Invalid Credentials") {
      errorAlert("Invalid Credentials");
      return false;
    } else {
      return false;
      console.log("something went wrong");
    }
  } catch (e) {
    return false;
  }
};

export let verifyEmailRequest = async (email) => {
  try {
    let URL = baseUrl + `/verify-email/${email}`;
    let res = await axios.get(URL, AxiosHeader);
    if (res.data.status === "success" && res?.data?.data?.accepted.length > 0) {
      successAlert("Please check your email send 6 digit code");
      return true;
    } else if (res.data.status === "fail") {
      errorAlert(res.data.data);
      return false;
    } else {
      console.log("something went wrong");
      return false;
    }
  } catch (e) {
    return false;
  }
};

export let verifyOtpRequest = async (email, otp) => {
  try {
    let URL = baseUrl + `/verify-otp/${email}/${otp}`;
    let res = await axios.get(URL, AxiosHeader);

    if (res.data.status === "success" && res?.data?.data?.modifiedCount == 1) {
      successAlert("OTP Verified Successfully");
      return true;
    } else if (res.data.status === "fail") {
      errorAlert(res.data.data);
      return false;
    } else {
      console.log("something went wrong");
      return false;
    }
  } catch (e) {
    return false;
  }
};

export let createNewPasswordRequest = async (email, otp, password) => {
  let data = {
    email: email,
    otpCode: otp,
    password: password,
  };
  try {
    let URL = baseUrl + `/reset-password`;
    let res = await axios.post(URL, data, AxiosHeader);
    if (res.data.status === "success") {
      successAlert("New password set successfully");
      return true;
    } else if (res.data.status === "fail") {
      errorAlert(res.data.data);
      return false;
    } else {
      console.log("something went wrong");
      return false;
    }
  } catch (e) {
    return false;
  }
};

export let logoutRequest = async () => {
  try {
    let URL = baseUrl + `/logout`;
    let res = await axios.get(URL, {
      headers: {
        "Content-Type": "application/json",
        token: getToken(),
      },
    });
    if (res.data.status === "success") {
      successAlert("Logout Successfully");
      sessionDestroy();
      return true;
    } else if (res.data.status === "fail") {
      errorAlert(res.data.data);
      return false;
    } else {
      console.log("something went wrong");
      return false;
    }
  } catch (e) {
    return false;
  }
};
