import React from "react";
import store from "../../../redux/store";
import { setShippingAddressFormValue } from "../../../redux/features/shippingAddressFormSlice/shippingAddressFormSlice";
import { useSelector } from "react-redux";

const Delivery = () => {
  const { formValue } = useSelector((state) => state.shippingAddressForm);
  return (
    <div className="pt-10">
      <h2 className="font-semibold text-xl">Delivery</h2>

      <div>
        <div>
          <label
            htmlFor="countries"
            className="block text-gray-600 mb-2 text-sm font-medium   dark:text-gray-400"
          >
            Select an country
          </label>
          <select
            onChange={(e) =>
              store.dispatch(
                setShippingAddressFormValue({
                  Name: "country",
                  Value: e.target.value,
                })
              )
            }
            value={formValue.country}
            id="countries"
            className="py-3 border  focus:border-black  text-sm rounded-md focus:ring-0 block w-full"
          >
            <option selected value="kuwait" className="capitalize">
              kuwait
            </option>
            <option value="qatar" className="capitalize">
              qatar
            </option>
            <option value="united_arab_emirates" className="capitalize">
              united arab emirates
            </option>
            <option value="---" className="capitalize">
              ---
            </option>
            <option value="afghanistan" className="capitalize">
              afghanistan
            </option>
            <option value="azerbaijan" className="capitalize">
              azerbaijan
            </option>
            <option value="bahrain" className="capitalize">
              bahrain
            </option>
            <option value="bangladesh" className="capitalize">
              bangladesh
            </option>
            <option value="bhutan" className="capitalize">
              bhutan
            </option>
            <option
              value="british_indian_ocean_territory"
              className="capitalize"
            >
              british indian ocean territory
            </option>
            <option value="brunei" className="capitalize">
              brunei
            </option>
            <option value="combodia" className="capitalize">
              combodia
            </option>
            <option value="china" className="capitalize">
              china
            </option>
            <option value="christmas island" className="capitalize">
              christmas island
            </option>
            <option value="DE" className="capitalize">
              cocos (keeling) island
            </option>
            <option value="cocos_keeling_island" className="capitalize">
              hong kong sar
            </option>
            <option value="india" className="capitalize">
              india
            </option>
            <option value="indonesia" className="capitalize">
              indonesia
            </option>
            <option value="iraq" className="capitalize">
              iraq
            </option>
            <option value="israel" className="capitalize">
              israel
            </option>
            <option value="japan" className="capitalize">
              japan
            </option>
            <option value="jordan" className="capitalize">
              jordan
            </option>
            <option value="kazakhstan" className="capitalize">
              kazakhstan
            </option>
            <option value="kyrgyzstan" className="capitalize">
              kyrgyzstan
            </option>
            <option value="laos" className="capitalize">
              laos
            </option>
            <option value="lebanon" className="capitalize">
              lebanon
            </option>
            <option value="macao_sar" className="capitalize">
              macao sar
            </option>
            <option value="malaysia" className="capitalize">
              malaysia
            </option>
            <option value="maldives" className="capitalize">
              maldives
            </option>
            <option value="mongolia" className="capitalize">
              mongolia
            </option>
            <option value="myanmar_burma" className="capitalize">
              myanmar (burma)
            </option>
            <option value="nepal" className="capitalize">
              nepal
            </option>
            <option value="oman" className="capitalize">
              oman
            </option>
            <option value="pakistan" className="capitalize">
              pakistan
            </option>
            <option value="palestinian_Territories" className="capitalize">
              palestinian Territories
            </option>
            <option value="philippiness" className="capitalize">
              philippiness
            </option>
            <option value="Qatar" className="capitalize">
              Qatar
            </option>
            <option value="russia" className="capitalize">
              russia
            </option>
            <option value="saudi_arabia" className="capitalize">
              saudi arabia
            </option>
            <option value="singapore" className="capitalize">
              singapore
            </option>
            <option value="south_korea" className="capitalize">
              south korea
            </option>
            <option value="sri_lanka" className="capitalize">
              sri lanka
            </option>
            <option value="taiwan" className="capitalize">
              taiwan
            </option>
            <option value="tajikistan" className="capitalize">
              tajikistan
            </option>
            <option value="thailand" className="capitalize">
              thailand
            </option>
            <option value="turkmenistan" className="capitalize">
              turkmenistan
            </option>
            <option value="united_arab_emirates" className="capitalize">
              united arab emirates
            </option>
            <option value="uzbekistan" className="capitalize">
              uzbekistan
            </option>
            <option value="vietnam" className="capitalize">
              vietnam
            </option>
            <option value="yemen" className="capitalize">
              yemen
            </option>
          </select>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-1 lg:gap-0 gap-4 pt-2">
          <input
            type="text"
            placeholder="First Name (optional)"
            className="border w-full rounded focus:ring-0 focus:outline-none focus:border-black my-2 text-sm py-3"
            onChange={(e) =>
              store.dispatch(
                setShippingAddressFormValue({
                  Name: "firstName",
                  Value: e.target.value,
                })
              )
            }
            value={formValue.firstName}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border w-full rounded focus:ring-0 focus:outline-none focus:border-black my-2 text-sm py-3"
            onChange={(e) =>
              store.dispatch(
                setShippingAddressFormValue({
                  Name: "lastName",
                  Value: e.target.value,
                })
              )
            }
            value={formValue.lastName}
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Address"
            className="border w-full rounded focus:ring-0 focus:outline-none focus:border-black my-2 text-sm py-3"
            onChange={(e) =>
              store.dispatch(
                setShippingAddressFormValue({
                  Name: "address",
                  Value: e.target.value,
                })
              )
            }
            value={formValue.address}
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Appartment, suite, etc. (optional)"
            className="border w-full rounded focus:ring-0 focus:outline-none focus:border-black my-2 text-sm py-3"
            onChange={(e) =>
              store.dispatch(
                setShippingAddressFormValue({
                  Name: "apartment",
                  Value: e.target.value,
                })
              )
            }
            value={formValue.apartment}
          />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-0">
          <div className="">
            <input
              type="text"
              placeholder="City"
              className="border w-full rounded focus:ring-0 focus:outline-none focus:border-black my-2 text-sm py-3"
              onChange={(e) =>
                store.dispatch(
                  setShippingAddressFormValue({
                    Name: "city",
                    Value: e.target.value,
                  })
                )
              }
              value={formValue.city}
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Postal code"
              className="border w-full rounded focus:ring-0 focus:outline-none focus:border-black my-2 text-sm py-3"
              onChange={(e) =>
                store.dispatch(
                  setShippingAddressFormValue({
                    Name: "postalCode",
                    Value: e.target.value,
                  })
                )
              }
              value={formValue.postalCode}
            />
          </div>
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Phone"
            className="border w-full rounded focus:ring-0 focus:outline-none focus:border-black my-2 text-sm py-3"
            onChange={(e) =>
              store.dispatch(
                setShippingAddressFormValue({
                  Name: "phone",
                  Value: e.target.value,
                })
              )
            }
            value={formValue.phone}
          />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
