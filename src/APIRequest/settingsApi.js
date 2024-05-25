import axios from "axios";
import store from "../../redux/store";
import {
  setAboutUs,
  setSocialLinks,
} from "../../redux/features/settingsSlice/settingsSlice";

let baseUrl = import.meta.env.VITE_API_URL;
let AxiosHeader = {
  headers: {
    "Content-Type": "application/json",
  },
};

export let getAboutUsRequest = async () => {
  try {
    let URL = baseUrl + `/list-about-us`;
    let res = await axios.get(URL, AxiosHeader);

    if (res.data.status === "success" && res?.data?.data?.length > 0) {
      let lastData = res?.data?.data?.slice(-1)[0];
      store.dispatch(setAboutUs(lastData));
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};

export let getSocialLinksRequest = async () => {
  try {
    let URL = baseUrl + `/get-social-link`;
    let res = await axios.get(URL, AxiosHeader);
    if (res.data.status === "success" && res?.data?.data?.length > 0) {
      store.dispatch(setSocialLinks(res?.data?.data));
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};
export let getSubcriptionEmailRequest = async (email) => {
  try {
    let URL = baseUrl + `/subcription-email`;
    let res = await axios.post(URL, { email }, AxiosHeader);
    if (res?.data?.accepted?.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};
