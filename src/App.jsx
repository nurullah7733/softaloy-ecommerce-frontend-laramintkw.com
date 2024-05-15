import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";

import ProductDetailsPage from "./pages/product-details/productDetails";
import Layout from "./components/layouts/layout";
import HomePage from "./pages/home/home";
import CheckoutPage from "./pages/checkout/checkout";
import CollectionsPage from "./pages/collections/collections";
import ContactPage from "./pages/contact/contact";
import PrivacyPolicyPage from "./pages/privacyPolicy/privacyPolicy";
import TermAndConditionsPage from "./pages/termAndConditions/termAndConditions";
import TermOfServicesPage from "./pages/termOfServices/termOfServices";
import ReturnAndRefundPage from "./pages/returnAndRefund/returnAndRefund";
import ReturnPage from "./pages/return/return";
import SearchPage from "./pages/search/search";
import SigninPage from "./pages/signin/signin";
import SignupPage from "./pages/signup/signup";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/products" element={<ProductDetailsPage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />

            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route
              path="/term-and-conditions"
              element={<TermAndConditionsPage />}
            />
            <Route path="/term-of-services" element={<TermOfServicesPage />} />
            <Route
              path="/return-and-refund"
              element={<ReturnAndRefundPage />}
            />
            <Route path="/return" element={<ReturnPage />} />
            <Route path="/search" element={<SearchPage />} />

            <Route path="/login" element={<SigninPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
