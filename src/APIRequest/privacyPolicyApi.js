import axios from "axios";

let baseUrl = import.meta.env.VITE_API_URL;
let AxiosHeader = {
  headers: {
    "Content-Type": "application/json",
  },
};

export let getPrivacyPolicyRequest = async () => {
  try {
    let URL = baseUrl + `/list-privacy-policy`;
    let res = await axios.get(URL, AxiosHeader);

    if (res.data.status === "success") {
      return res.data?.data?.slice(-1);
    } else {
      return res.data.data;
    }
  } catch (e) {
    return false;
  }
};

export let getreturnAndRefundRequest = async () => {
  try {
    let URL = baseUrl + `/list-return-and-refund-policy`;
    let res = await axios.get(URL, AxiosHeader);

    if (res.data.status === "success") {
      return res.data?.data?.slice(-1);
    } else {
      return res.data.data;
    }
  } catch (e) {
    return false;
  }
};
export let getTermAndConditionRequest = async () => {
  try {
    let URL = baseUrl + `/list-term-of-condition`;
    let res = await axios.get(URL, AxiosHeader);

    if (res.data.status === "success") {
      return res.data?.data?.slice(-1);
    } else {
      return res.data.data;
    }
  } catch (e) {
    return false;
  }
};
export let getTermAndServiceRequest = async () => {
  try {
    let URL = baseUrl + `/list-term-of-service`;
    let res = await axios.get(URL, AxiosHeader);

    if (res.data.status === "success") {
      return res.data?.data?.slice(-1);
    } else {
      return res.data.data;
    }
  } catch (e) {
    return false;
  }
};
export let getRefundPolicyRequest = async () => {
  try {
    let URL = baseUrl + `/list-refund-policy`;
    let res = await axios.get(URL, AxiosHeader);

    if (res.data.status === "success") {
      return res.data?.data?.slice(-1);
    } else {
      return res.data.data;
    }
  } catch (e) {
    return false;
  }
};
