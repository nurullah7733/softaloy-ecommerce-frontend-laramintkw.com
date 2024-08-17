import React, { useEffect } from "react";
import Contact from "../../components/checkoutPageComponents/contact";
import Delivery from "../../components/checkoutPageComponents/delivery";
import ShippingMethod from "../../components/checkoutPageComponents/shippingMethod";
import Payment from "../../components/checkoutPageComponents/payment";
import BillingAddress from "../../components/checkoutPageComponents/billingAddress";
import Summary from "../../components/checkoutPageComponents/summary";
import { getShippingCostRequest } from "../../APIRequest/settingsApi";
import { useSelector } from "react-redux";
import { IsEmail } from "../../../utils/formValidation/formValidation";
import { useNavigate } from "react-router-dom";
import {
  errorAlert,
  successAlert,
} from "../../../utils/notificationAlert/notificationAlert";
import {
  createOrderByMyFatoorahRequest,
  createOrderRequest,
} from "../../APIRequest/orderApi";
import { setAddToCartInLocalStorage } from "../../../utils/sessionHelper/sessionHelper";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [loadingCreateOrder, setLoadingCreateOrder] = React.useState(false);
  const formValue = useSelector((state) => state.shippingAddressForm.formValue);
  const {
    products,
    couponDiscount,
    saveAmount,
    shippingCost,
    otherCost,
    allProductsSubTotal,
    totalPrice,
  } = useSelector((state) => state.addToCarts);

  const orderSubmit = async () => {
    if (products === undefined || products.length === 0) {
      return errorAlert("Your cart is empty");
    }
    if (formValue.email === "") {
      return errorAlert("Please enter your email");
    }

    // Check if email format is valid
    if (IsEmail(formValue.email) === false) {
      return errorAlert("Please enter a valid email");
    }
    const requiredFields = [
      {
        field: "country",
        message: "Please select your country",
      },
      {
        field: "lastName",
        message: "Please enter your last name",
      },
      {
        field: "address",
        message: "Please enter your address",
      },
      {
        field: "city",
        message: "Please enter your city",
      },
      {
        field: "postalCode",
        message: "Please enter your postal code",
      },
      {
        field: "phone",
        message: "Please enter your phone number",
      },
      {
        field: "shippingMethod",
        message: "Please select your shipping method",
      },
      { field: "paymentMethod", message: "Please select your payment method" },
      {
        field: "bilingAddress",
        message: "Please select your billing address",
      },
    ];

    for (const { field, message } of requiredFields) {
      if (formValue[field] === "") {
        return errorAlert(message);
      }
    }

    if (IsEmail(formValue.email) === false) {
      return errorAlert("Please enter valid email");
    }

    if (formValue.billingMethod === "differentBillingAddress") {
      const requiredFields = [
        { field: "country", message: "Please select your billing country" },
        { field: "lastName", message: "Please enter your billing last name" },
        { field: "address", message: "Please enter your billing address" },
        { field: "city", message: "Please enter your billing city" },
        {
          field: "postalCode",
          message: "Please enter your billing postal code",
        },
        { field: "phone", message: "Please enter your billing phone number" },
      ];

      for (const { field, message } of requiredFields) {
        if (formValue.billingAddress[field] === "") {
          return errorAlert(message);
        }
      }
    }

    // sort product from addTocarts
    let simplifiedProducts = products.map(
      ({
        _id,
        finalPrice,
        customerChoiceProductQuantity,
        customerChoiceProductSize,
      }) => ({
        productId: _id,
        finalPrice,
        total: finalPrice * customerChoiceProductQuantity,
        customerChoiceProductQuantity,
        customerChoiceProductSize,
      })
    );
    const orderDataWithShippingAddress = {
      allProducts: simplifiedProducts,
      "paymentIntent.paymentMethod": formValue.paymentMethod,
      "paymentIntent.amount": totalPrice,
      "paymentIntent.paymentStatus": "cashOnDelivery",
      voucherDiscount: couponDiscount,
      saveAmount: saveAmount,
      otherCost: otherCost,
      subTotal: allProductsSubTotal,
      shippingCost: shippingCost,
      productsSubTotal: allProductsSubTotal,
      grandTotal: totalPrice,
      shippingMethod: formValue.shippingMethod,
      shippingAddress: {
        firstName: formValue.firstName,
        lastName: formValue.lastName,
        email: formValue.email,
        phone: formValue.phone,
        country: formValue.country,
        city: formValue.city,
        apartment: formValue.apartment,
        postalCode: formValue.postalCode,
        address: formValue.address,
      },
    };
    const orderDataWithShippingAddressAndBillingAddress = {
      allProducts: simplifiedProducts,
      "paymentIntent.paymentMethod": formValue.paymentMethod,
      "paymentIntent.amount": totalPrice,
      "paymentIntent.paymentStatus": "cashOnDelivery",
      voucherDiscount: couponDiscount,
      saveAmount: saveAmount,
      otherCost: otherCost,
      subTotal: allProductsSubTotal,
      shippingCost: shippingCost,
      productsSubTotal: allProductsSubTotal,
      grandTotal: totalPrice,
      shippingMethod: formValue.shippingMethod,
      shippingAddress: {
        firstName: formValue.firstName,
        lastName: formValue.lastName,
        email: formValue.email,
        phone: formValue.phone,
        country: formValue.country,
        city: formValue.city,
        apartment: formValue.apartment,
        postalCode: formValue.postalCode,
        address: formValue.address,
      },
      billingAddress: {
        firstName: formValue.billingAddress.firstName,
        lastName: formValue.billingAddress.lastName,
        phone: formValue.billingAddress.phone,
        country: formValue.billingAddress.country,
        city: formValue.billingAddress.city,
        apartment: formValue.billingAddress.apartment,
        postalCode: formValue.billingAddress.postalCode,
        address: formValue.billingAddress.address,
      },
    };

    if (formValue.billingMethod === "sameAsShippingAddress") {
      setLoadingCreateOrder(true);

      if (formValue.paymentMethod === "myFatoorah") {
        const result = await createOrderByMyFatoorahRequest(
          orderDataWithShippingAddress
        );

        if (Object.keys(result || {}).length > 0) {
          window.location.href = result?.PaymentURL;
        } else {
          setLoadingCreateOrder(false);
          errorAlert("Something went wrong. Please try again later");
          navigate("/");
        }
      } else {
        const result = await createOrderRequest(orderDataWithShippingAddress);
        if (result) {
          successAlert(
            "Order Placed Successfully! Please check your email. Thank you"
          );
          setAddToCartInLocalStorage([]);
          navigate("/");
        }
      }
    } else {
      setLoadingCreateOrder(true);

      if (formValue.paymentMethod === "myFatoorah") {
        const result = await createOrderByMyFatoorahRequest(
          orderDataWithShippingAddressAndBillingAddress
        );

        //  ///////////////
      } else {
        const result = await createOrderRequest(
          orderDataWithShippingAddressAndBillingAddress
        );
        if (result) {
          successAlert(
            "Order Placed Successfully! Please check your email. Thank you"
          );
          setAddToCartInLocalStorage([]);
          navigate("/");
        }
      }
    }
  };

  useEffect(() => {
    (async () => {
      await getShippingCostRequest();
    })();
  }, []);

  return (
    <div className="mb-10">
      <div className="grid grid-cols-2 md:grid-cols-1 ">
        <div className="border-r pt-10 px-8">
          <Contact />
          <Delivery />
          <ShippingMethod />
          <Payment />
          <BillingAddress />
          <div className="mt-4 md:hidden block" onClick={orderSubmit}>
            <button
              disabled={loadingCreateOrder}
              className="bg-[#454545] text-white w-full py-3 rounded-md font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loadingCreateOrder ? "Loading..." : "Pay Now"}
            </button>
          </div>
        </div>

        <div className="md:mt-5">
          <Summary />
        </div>
      </div>
      <div className="mt-4 hidden md:block px-6" onClick={orderSubmit}>
        <button
          disabled={loadingCreateOrder}
          className="bg-[#454545] text-white w-full py-3 rounded-md font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loadingCreateOrder ? "Loading..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
