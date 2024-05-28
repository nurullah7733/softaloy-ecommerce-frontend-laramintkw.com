import React from "react";
import { useSelector } from "react-redux";
import store from "../../../redux/store";
import { setShippingAddressFormValue } from "../../../redux/features/shippingAddressFormSlice/shippingAddressFormSlice";
import { Link } from "react-router-dom";
import {
  getToken,
  getUserData,
} from "../../../utils/sessionHelper/sessionHelper";

const Contact = () => {
  const { formValue } = useSelector((state) => state.shippingAddressForm);
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="font-semibold text-xl">Contact</h2>
        {getToken() ? null : (
          <Link to="/login" className="underline">
            Login
          </Link>
        )}
      </div>
      <div>
        <input
          onChange={(e) =>
            store.dispatch(
              setShippingAddressFormValue({
                Name: "email",
                Value: e.target.value,
              })
            )
          }
          value={formValue.email}
          disabled={getToken() ? true : false}
          type="text"
          placeholder="Email"
          className="disabled:bg-gray-100 border w-full rounded focus:ring-0 focus:outline-none focus:border-black my-2 text-sm py-3"
        />
      </div>
    </div>
  );
};

export default Contact;
