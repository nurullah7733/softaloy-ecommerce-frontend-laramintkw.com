import axios from "axios";
let baseUrl = import.meta.env.VITE_API_URL;
let AxiosHeader = {
  headers: {
    "Content-Type": "application/json",
  },
};

export let getPopupNotificationRequest = async () => {
  try {
    let URL = baseUrl + "/get-popup-notifications/1/100/0";
    let res = await axios.get(URL, AxiosHeader);
    if (res.data.status === "success" && res?.data?.data[0]?.rows?.length > 0) {
      return res?.data?.data[0]?.rows;
    } else {
      return [];
    }
  } catch (e) {
    return false;
  }
};
