import axios from "axios";
import store from "../../redux/store";
import {
  getToken,
  sessionDestroy,
} from "../../utils/sessionHelper/sessionHelper";
import {
  errorAlert,
  successAlert,
} from "../../utils/notificationAlert/notificationAlert";

let baseUrl = import.meta.env.VITE_API_URL;
let AxiosHeader = {
  headers: {
    token: getToken(),
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
    if (e.response.status === 401) {
      sessionDestroy();
    }
    return false;
  }
};

// create order by myfatoorah payment
export let createOrderByMyFatoorahRequest = async (data) => {
  console.log(data);
  try {
    let URL = baseUrl + `/create-order-by-myfatoorah-executive-payment`;
    let res = await axios.post(URL, data, AxiosHeader);

    if (res.data.status === "success") {
      return res?.data?.paymentData?.Data;
    } else {
      return false;
    }
  } catch (e) {
    if (e.response.status === 401) {
      sessionDestroy();
    }
    return false;
  }
};

export let changeOrderStatusRequest = async (id, data) => {
  try {
    let URL = baseUrl + `/change-order-status/${id}`;
    let res = await axios.post(URL, data, AxiosHeader);
    if (res.data.status === "success" && res.data.data.allProducts.length > 0) {
      successAlert("Order status changed successfully");
      return true;
    } else if (
      res.data.status === "fail" &&
      res.data.data == "You have already Cancelled/Returned this order."
    ) {
      errorAlert("You have already Cancelled/Returned this order.");
      return false;
    } else {
      return false;
    }
  } catch (e) {
    if (e.response.status === 401) {
      sessionDestroy();
    }
    return false;
  }
};

export let runningOrdersRequest = async () => {
  try {
    let URL = baseUrl + `/get-running-order/1/100/0`;
    let res = await axios.get(URL, {
      headers: {
        token: getToken(),
        "Content-Type": "application/json",
      },
    });
    console.log(res, "hi");
    if (res.data.status === "success") {
      return res.data?.data[0];
    } else {
      return res.data.data;
    }
  } catch (e) {
    if (e.response.status === 401) {
      sessionDestroy();
    }
    return false;
  }
};

export let deliveryOrdersRequest = async () => {
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
    if (e.response.status === 401) {
      sessionDestroy();
    }
    return false;
  }
};

export let returnOrdersRequest = async () => {
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
    if (e.response.status === 401) {
      sessionDestroy();
    }
    return false;
  }
};

export let cancelOrdersRequest = async () => {
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
    if (e.response.status === 401) {
      sessionDestroy();
    }
    return false;
  }
};
