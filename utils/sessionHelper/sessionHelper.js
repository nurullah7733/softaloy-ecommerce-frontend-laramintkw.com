class SessionHelper {
  setAddToCartInLocalStorage(value) {
    window.localStorage.setItem("AddToCartItems", JSON.stringify(value));
  }

  getAddToCartInLocalStorage() {
    return JSON.parse(window.localStorage.getItem("AddToCartItems"));
  }

  setTotalProductsPriceInLocalStorage(value) {
    window.localStorage.setItem("totalProductsPrice", JSON.stringify(value));
  }

  getTotalProductsPriceInLocalStorage() {
    return JSON.parse(window.localStorage.getItem("totalProductsPrice"));
  }

  setUserTotalProductsPriceWithoutDiscountInLocalStorage(value) {
    window.localStorage.setItem(
      "totalProductsPriceWithoutDiscount",
      JSON.stringify(value)
    );
  }

  getUserTotalProductsPriceWithoutDiscountInLocalStorage() {
    return JSON.parse(
      window.localStorage.getItem("totalProductsPriceWithoutDiscount")
    );
  }

  setUserData(value) {
    typeof window !== "undefined"
      ? window.localStorage.setItem("userData", JSON.stringify(value))
      : false;
  }
  getUserData() {
    if (typeof window !== "undefined") {
      return JSON.parse(window.localStorage.getItem("userData"));
    }
  }
  setToken(value) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("token", JSON.stringify(value));
    }
  }
  getToken() {
    if (typeof window !== "undefined") {
      return JSON.parse(window.localStorage.getItem("token"));
    }
  }
  setEmail(value) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("email", value);
    }
  }
  getEmail() {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("email");
    }
  }
  setOtp(value) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("otp", value);
    }
  }
  getOtp() {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("otp");
    }
  }
  sessionDestroy() {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("userData2");
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("email");
      window.localStorage.removeItem("otp");
      window.location.href = "/";
      window.localStorage.clear();
    }
  }
}
export const {
  getUserData,
  setUserData,
  getToken,
  setToken,
  getEmail,
  setEmail,
  getOtp,
  setOtp,
  sessionDestroy,

  setAddToCartInLocalStorage,
  getAddToCartInLocalStorage,
  getTotalProductsPriceInLocalStorage,
  setTotalProductsPriceInLocalStorage,

  getUserTotalProductsPriceWithoutDiscountInLocalStorage,
  setUserTotalProductsPriceWithoutDiscountInLocalStorage,
} = new SessionHelper();
