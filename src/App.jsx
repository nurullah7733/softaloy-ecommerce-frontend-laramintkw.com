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
import SearchPage from "./pages/search/search";
import SigninPage from "./pages/signin/signin";
import SignupPage from "./pages/signup/signup";
import RefundPage from "./pages/refundPolicy/refundPolicy";
import ScrollToTop from "../utils/scrollToTop/scrollToTop";
import BestSalesPage from "./pages/bestSales/bestSales";
import RunningOrders from "./pages/account/order/runningOrderPage";
import DeliveryOrders from "./pages/account/order/devliveryOrderPage";
import ReturnOrders from "./pages/account/order/returnOrderPage";
import CancelOrders from "./pages/account/order/cancelOrderPage";
import { getToken } from "../utils/sessionHelper/sessionHelper";
import EmailPage from "./pages/forgetPassword/email";
import VerifyOtp from "./pages/forgetPassword/verifyOtp";
import CreateNewPassword from "./pages/forgetPassword/create-new-password";
import UserDashboardPage from "./pages/user-dashboard/userDashboardPage";
import RunningOrderPage from "./pages/user-dashboard/runningOrderPage";
import DeliveryOrderPage from "./pages/user-dashboard/deliveryOrderPage";
import ReturnOrderPage from "./pages/user-dashboard/returnOrderPage";
import CancelOrderPage from "./pages/user-dashboard/cancelOrderPage";
import FailPayment from "./pages/payment/failPayment";
import SuccessPayment from "./pages/payment/successPayment";
import WhatsappChat from "./components/common/whatsappChat/whatsappChat";
import OffersPage from "./pages/offers/offers";

const ProtectedRoute = ({ children }) => {
  const token = getToken();
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/product-details/:id"
              element={<ProductDetailsPage />}
            />
            <Route path="/best-sales-products" element={<BestSalesPage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/offers" element={<OffersPage />} />
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
            <Route path="/refund-policy" element={<RefundPage />} />
            <Route path="/search" element={<SearchPage />} />

            <Route path="/login" element={<SigninPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            <Route path="/forget-password" element={<EmailPage />} />
            <Route path="/verify-otp" element={<VerifyOtp />} />
            <Route
              path="/create-new-password"
              element={<CreateNewPassword />}
            />

            <Route path="/payment-success" element={<SuccessPayment />} />
            <Route path="/payment-fail" element={<FailPayment />} />

            <Route
              path="/running-orders"
              element={
                <ProtectedRoute>
                  <RunningOrders />
                </ProtectedRoute>
              }
            />
            <Route
              path="/delivery-orders"
              element={
                <ProtectedRoute>
                  <DeliveryOrders />
                </ProtectedRoute>
              }
            />
            <Route
              path="/return-orders"
              element={
                <ProtectedRoute>
                  <ReturnOrders />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cancel-orders"
              element={
                <ProtectedRoute>
                  <CancelOrders />
                </ProtectedRoute>
              }
            />
            {/* start user dashboard route */}
            <Route
              path="/user-dashboard"
              element={
                <ProtectedRoute>
                  <UserDashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user-dashboard/orders/running-orders"
              element={
                <ProtectedRoute>
                  <RunningOrderPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user-dashboard/orders/delivery-orders"
              element={
                <ProtectedRoute>
                  <DeliveryOrderPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user-dashboard/orders/return-orders"
              element={
                <ProtectedRoute>
                  <ReturnOrderPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user-dashboard/orders/cancel-orders"
              element={
                <ProtectedRoute>
                  <CancelOrderPage />
                </ProtectedRoute>
              }
            />

            {/* start user dashboard route */}
          </Route>
        </Routes>
      </BrowserRouter>
      <WhatsappChat />
    </Provider>
  );
}

export default App;
