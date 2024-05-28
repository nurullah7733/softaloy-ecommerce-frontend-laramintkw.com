import { createSlice } from "@reduxjs/toolkit";
import {
  getToken,
  getUserData,
} from "../../../utils/sessionHelper/sessionHelper";

const UserData = getUserData();

const initialState = {
  formValue: {
    email: UserData?.email || "",
    country: "kuwait",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    postalCode: "",
    phone: "",
    shippingMethod: "",
    paymentMethod: "myFatoorah",
    billingMethod: "sameAsShippingAddress",
    billingAddress: {
      country: "kuwait",
      firstName: "",
      lastName: "",
      address: "",
      apartment: "",
      city: "",
      postalCode: "",
      phone: "",
    },
  },
};

const shippingAddressFormSlice = createSlice({
  name: "shippingAddressForm",
  initialState,
  reducers: {
    setShippingAddressFormValue(state, actions) {
      state.formValue[`${actions.payload.Name}`] = actions.payload.Value;
    },
    setShippingAddressFormValueDiffentBillingAddress(state, actions) {
      state.formValue.billingAddress[`${actions.payload.Name}`] =
        actions.payload.Value;
    },
  },
});

export const {
  setShippingAddressFormValue,
  setShippingAddressFormValueDiffentBillingAddress,
} = shippingAddressFormSlice.actions;

export default shippingAddressFormSlice.reducer;
