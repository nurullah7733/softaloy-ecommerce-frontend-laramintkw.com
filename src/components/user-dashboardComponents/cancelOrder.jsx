import { useEffect, useState } from "react";
import { RiDashboardFill } from "react-icons/ri";
import moment from "moment";
import { GiReturnArrow } from "react-icons/gi";
import { MdCancelScheduleSend } from "react-icons/md";
import { BsFillCartCheckFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { getUserData } from "../../../utils/sessionHelper/sessionHelper";
import { Link } from "react-router-dom";
import { useWindowSize } from "../../../utils/windowSize/useWindowSize";
import { cancelOrdersRequest } from "../../APIRequest/orderApi";
import PriceConverterByCountry from "../../../utils/priceConverterByCountry/priceConverterByCountry";
import { randomSweetAlert } from "../../../utils/sweetAlert/sweetAlert";

const CancelOrder = () => {
  const [open, setOpen] = useState(true);
  const windowSize = useWindowSize();
  useEffect(() => {
    windowSize.width < 768 ? setOpen(false) : setOpen(true);
  }, [windowSize.width]);
  const pathname = window.location.pathname;

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      setLoading(true);
      var allData = await cancelOrdersRequest();
      setLoading(false);
      setData(allData);
    })();
  }, []);
  console.log(loading, "loading");
  let finalData;
  if (data?.total?.length < 1) {
    finalData = <h1 className="px-5 text-2xl">No Cancel orders</h1>;
  } else {
    finalData = (
      <div className=" w-full grid grid-cols-3 gap-2 lg:grid-cols-2 md:grid-cols-1">
        {data?.rows?.map((indivitualOrder, index) => (
          <div key={index} className="border p-2 shadow-md">
            <h3 className="text-2xl font-bold">
              Total item ({indivitualOrder?.allProducts?.length})
            </h3>
            <p>
              Your Order ID:{" "}
              <span className="text-green-500">{indivitualOrder?.orderId}</span>
            </p>
            {indivitualOrder?.tran_id && (
              <p>
                Your Transaction ID:{" "}
                <span className="text-green-500">
                  {indivitualOrder?.tran_id}
                </span>
              </p>
            )}

            <p>
              Order status:{" "}
              <span className="text-green-500">
                {indivitualOrder?.orderStatus}
              </span>{" "}
            </p>
            <p>
              Order Times:{" "}
              <span className="text-green-500">
                {moment(indivitualOrder?.createdAt).format(
                  "MMMM Do YYYY, h:mm:ss a"
                )}
              </span>
            </p>
            <div className="max-w-sm py-1">
              <p>
                <span className="inline-block w-48">Sub total:</span>

                <PriceConverterByCountry
                  price={indivitualOrder?.productsSubTotal}
                />
              </p>
              {indivitualOrder?.voucherDiscount > 0 && (
                <p>
                  <span className="inline-block w-48">Discount: </span>
                  {indivitualOrder?.voucherDiscount}%
                </p>
              )}
              {indivitualOrder?.saveAmount > 0 && (
                <p>
                  <span className="inline-block w-48">Discount: </span>
                  <PriceConverterByCountry
                    price={indivitualOrder?.saveAmount}
                  />
                </p>
              )}
              <p>
                <span className="inline-block w-48">Total:</span>

                <PriceConverterByCountry price={indivitualOrder?.subTotal} />
              </p>

              <p>
                <span className="inline-block w-48">Shipping charge:</span>

                <PriceConverterByCountry
                  price={indivitualOrder?.shippingCost}
                />
              </p>
              {indivitualOrder?.otherCost > 0 && (
                <p>
                  <span className="inline-block w-48">Other charge:</span>
                  <PriceConverterByCountry price={indivitualOrder?.otherCost} />
                </p>
              )}

              <hr className="mt-1" />
              <p>
                <span className="inline-block w-48">Grand Total:</span>
                <PriceConverterByCountry price={indivitualOrder?.grandTotal} />
              </p>
            </div>
            <h5 className=" font-semibold">
              Shipping Method: {indivitualOrder?.shippingMethod}{" "}
            </h5>
            <h5 className="pb-3.5 font-semibold">
              Shipping Address:{" "}
              <p className="text-green-500">
                Name: {indivitualOrder?.shippingAddress?.firstName}{" "}
                {indivitualOrder?.shippingAddress?.lastName}
              </p>
              <p className="text-green-500">
                email: {indivitualOrder?.shippingAddress?.email}
              </p>
              {indivitualOrder?.shippingAddress?.phone && (
                <p className="text-green-500">
                  phone: {indivitualOrder?.shippingAddress?.phone}
                </p>
              )}
              {indivitualOrder?.shippingAddress?.apartment && (
                <p className="text-green-500">
                  apartment: {indivitualOrder?.shippingAddress?.apartment}
                </p>
              )}
              {indivitualOrder?.shippingAddress?.postalCode && (
                <p className="text-green-500">
                  Postal Code: {indivitualOrder?.shippingAddress?.postalCode}
                </p>
              )}
              {indivitualOrder?.shippingAddress?.alternativeMobile && (
                <p className="text-green-500">
                  alternativeMobile:{" "}
                  {indivitualOrder?.shippingAddress?.alternativeMobile}
                </p>
              )}
              <p className="text-green-500">
                country: {indivitualOrder?.shippingAddress?.country}
              </p>
              <p className="text-green-500">
                city: {indivitualOrder?.shippingAddress?.city}
              </p>
              <p className="text-green-500">
                address: {indivitualOrder?.shippingAddress?.address}
              </p>
            </h5>

            {/* billing address */}

            <h5 className="pb-3.5 font-semibold">
              Billing Address:{" "}
              {indivitualOrder?.billingAddress?.lastName ? (
                ""
              ) : (
                <>Same as Shipping Address</>
              )}
              {indivitualOrder?.billingAddress?.lastName && (
                <p className="text-green-500">
                  Name: {indivitualOrder?.billingAddress?.firstName}{" "}
                  {indivitualOrder?.billingAddress?.lastName}
                </p>
              )}
              {indivitualOrder?.billingAddress?.phone && (
                <p className="text-green-500">
                  phone: {indivitualOrder?.billingAddress?.phone}
                </p>
              )}
              {indivitualOrder?.billingAddress?.apartment && (
                <p className="text-green-500">
                  apartment: {indivitualOrder?.billingAddress?.apartment}
                </p>
              )}
              {indivitualOrder?.billingAddress?.postalCode && (
                <p className="text-green-500">
                  Postal Code: {indivitualOrder?.billingAddress?.postalCode}
                </p>
              )}
              {indivitualOrder?.billingAddress?.alternativeMobile && (
                <p className="text-green-500">
                  alternativeMobile:{" "}
                  {indivitualOrder?.billingAddress?.alternativeMobile}
                </p>
              )}
              {indivitualOrder?.billingAddress?.country && (
                <p className="text-green-500">
                  country: {indivitualOrder?.billingAddress?.country}
                </p>
              )}
              {indivitualOrder?.billingAddress?.city && (
                <p className="text-green-500">
                  city: {indivitualOrder?.billingAddress?.city}
                </p>
              )}
              {indivitualOrder?.billingAddress?.address && (
                <p className="text-green-500">
                  address: {indivitualOrder?.billingAddress?.address}
                </p>
              )}
            </h5>

            <div className="grid grid-cols-2 md:grid-cols-1 mb-3.5 gap-2  ">
              {indivitualOrder?.allProducts
                ?.filter((allProduct, index) =>
                  indivitualOrder?.productsDetails?.some(
                    (productDetail) =>
                      allProduct?.productId === productDetail?._id
                  )
                )
                .map((filterProduct, index) => {
                  const matchingProductDetail =
                    indivitualOrder?.productsDetails?.find(
                      (productDetail) =>
                        filterProduct?.productId === productDetail?._id
                    );

                  return (
                    <Link
                      to={`/product-details/${matchingProductDetail?._id}`}
                      key={index}
                    >
                      <div className="bg-white   border-gray-200 !rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700  ">
                        <img
                          alt={matchingProductDetail?.name}
                          src={matchingProductDetail?.img?.[0]?.secure_url}
                          width={300}
                          height={300}
                        />
                        <div className="p-1">
                          <p className="sm:h-24 h-16">
                            {matchingProductDetail?.name?.length > 20
                              ? `${matchingProductDetail?.name.slice(0, 20)}...`
                              : matchingProductDetail?.name}
                          </p>

                          <p className="mb-1 text-[12px] font-normal text-gray-700 dark:text-gray-400 ">
                            <PriceConverterByCountry
                              price={matchingProductDetail?.finalPrice}
                            />
                            <span className="mx-2 text-gray-400 line-through dark:text-gray-500 text-[11px]">
                              <PriceConverterByCountry
                                price={matchingProductDetail?.price}
                              />
                            </span>
                          </p>
                          <div className="h-16">
                            <p>
                              quantity:{" "}
                              {filterProduct?.customerChoiceProductQuantity}
                            </p>
                            {filterProduct?.customerChoiceProductSize && (
                              <p>
                                Size: {filterProduct?.customerChoiceProductSize}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex">
      <div
        className={` ${open ? "w-64" : "w-20"} ${
          open ? "pt-[9px]" : "pt-2.5"
        }  p-5 min-h-[500px]  relative duration-300 border-r`}
      >
        <img
          src="/control.png"
          className={`absolute   cursor-pointer -right-3 top-5 w-7  ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex items-center gap-x-2">
          {open ? (
            <div>
              <img
                src={getUserData()?.photo[0]?.secure_url}
                alt="user"
                className={`cursor-pointer duration-500  rounded-[50%] w-14 h-14 ${
                  !open && "hidden"
                }`}
              />
            </div>
          ) : (
            <img
              alt="user"
              src={getUserData()?.photo[0]?.secure_url}
              width={56}
              height={56}
              className={`cursor-pointer duration-500  rounded-[50%] w-14 h-14 `}
            />
          )}

          <h1
            className={`text-black origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            {getUserData()?.firstName + " " + getUserData()?.lastName}
          </h1>
        </div>
        <ul className="pt-6 ">
          <li
            className={`flex rounded-md p-2 cursor-pointer  hover:bg-gray-100  text-md items-center gap-x-4 ${
              pathname === "/user-dashboard" && "bg-gray-100"
            }`}
          >
            <Link to="/user-dashboard">
              <RiDashboardFill size={20} />
            </Link>
            <Link
              to="/user-dashboard"
              className={`${!open && "hidden"} origin-left duration-200`}
            >
              Dashobard
            </Link>
          </li>

          <li
            className={`flex rounded-md p-2 cursor-pointer  hover:bg-gray-100  text-md items-center gap-x-4 ${
              pathname === "/user-dashboard/orders/running-orders" &&
              "bg-gray-100"
            }`}
          >
            <Link to="/user-dashboard/orders/running-orders">
              <TbTruckDelivery size={20} />
            </Link>
            <Link
              to="/user-dashboard/orders/running-orders"
              exact
              className={`${!open && "hidden"} origin-left duration-200`}
            >
              Running orders
            </Link>
          </li>

          <li
            className={`flex rounded-md p-2 cursor-pointer  hover:bg-gray-100  text-md items-center gap-x-4 ${
              pathname === "/user-dashboard/orders/delivery-orders" &&
              "bg-gray-100"
            }`}
          >
            <Link to="/user-dashboard/orders/delivery-orders">
              <BsFillCartCheckFill size={20} />
            </Link>
            <Link
              to="/user-dashboard/orders/delivery-orders"
              exact
              className={`${!open && "hidden"} origin-left duration-200`}
            >
              Delivery orders
            </Link>
          </li>

          <li
            className={`flex rounded-md p-2 cursor-pointer  hover:bg-gray-100  text-md items-center gap-x-4 ${
              pathname === "/user-dashboard/orders/return-orders" &&
              "bg-gray-100"
            }`}
          >
            <Link to="/user-dashboard/orders/return-orders">
              <GiReturnArrow size={20} />
            </Link>
            <Link
              to="/user-dashboard/orders/return-orders"
              exact
              className={`${!open && "hidden"} origin-left duration-200`}
            >
              Return Orders
            </Link>
          </li>
          <li
            className={`flex rounded-md p-2 cursor-pointer  hover:bg-gray-100  text-md items-center gap-x-4 ${
              pathname === "/user-dashboard/orders/cancel-orders" &&
              "bg-gray-100"
            }`}
          >
            <Link to="/user-dashboard/orders/cancel-orders">
              <MdCancelScheduleSend size={20} />
            </Link>
            <Link
              to="/user-dashboard/orders/cancel-orders"
              exact
              className={`${!open && "hidden"} origin-left duration-200`}
            >
              Cancelled Orders
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full ">
        <div>
          <div>
            <h1 className="w-full md:text-xl dark:bg-gray-700 px-5 py-3.5 text-3xl border-b text-black  ">
              {data?.rows?.length > 0 && ` (${data?.rows?.length})`} Cancel{" "}
              {data?.rows?.length > 1 ? "Orders" : "Order"}
            </h1>
          </div>
          <div className="p-5">
            {/* content here */}
            <div className="bg-white dark:bg-gray-800">
              {loading ? (
                <h1 className="text-center text-black">Loading...</h1>
              ) : (
                finalData
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelOrder;
