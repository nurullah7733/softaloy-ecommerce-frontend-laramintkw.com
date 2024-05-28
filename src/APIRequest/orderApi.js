import axios from "axios";
import store from "../../redux/store";
import { getToken } from "../../utils/sessionHelper/sessionHelper";

let baseUrl = import.meta.env.VITE_API_URL;
let AxiosHeader = {
  headers: {
    "Content-Type": "application/json",
  },
};

export let createOrderRequest = async (data) => {
  try {
    let URL = baseUrl + `/create-order`;
    let res = await axios.post(URL, data, AxiosHeader);
    if (res.data.status === "success") {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};

export let runningOrdersRequest = async (data) => {
  try {
    let URL = baseUrl + `/get-running-order/1/100/0`;
    let res = await axios.get(URL, {
      headers: {
        token: getToken(),
        "Content-Type": "application/json",
      },
    });
    if (res.data.status === "success") {
      return res.data?.data[0];
    } else {
      return res.data.data;
    }
  } catch (e) {
    return false;
  }
};

export let deliveryOrdersRequest = async (data) => {
  try {
    let URL = baseUrl + `/get-delivered-order/1/100/0`;
    let res = await axios.get(URL, {
      headers: {
        token: getToken(),
        "Content-Type": "application/json",
      },
    });
    if (res.data.status === "success") {
      return res.data?.data[0];
    } else {
      return res.data.data;
    }
  } catch (e) {
    return false;
  }
};
export let returnOrdersRequest = async (data) => {
  try {
    let URL = baseUrl + `/get-returned-order/1/100/0`;
    let res = await axios.get(URL, {
      headers: {
        token: getToken(),
        "Content-Type": "application/json",
      },
    });
    if (res.data.status === "success") {
      return res.data?.data[0];
    } else {
      return res.data.data;
    }
  } catch (e) {
    return false;
  }
};
export let cancelOrdersRequest = async (data) => {
  try {
    let URL = baseUrl + `/get-cancelled-order/1/100/0`;
    let res = await axios.get(URL, {
      headers: {
        token: getToken(),
        "Content-Type": "application/json",
      },
    });
    if (res.data.status === "success") {
      return res.data?.data[0];
    } else {
      return res.data.data;
    }
  } catch (e) {
    return false;
  }
};
