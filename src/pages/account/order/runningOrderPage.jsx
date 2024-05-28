import { useEffect, useState } from "react";
import moment from "moment";
import { runningOrdersRequest } from "../../../APIRequest/orderApi";
import { Link } from "react-router-dom";

export default function RunningOrders() {
  const handleClick = async () => {};
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      var allData = await runningOrdersRequest();
      setData(allData);
    })();
  }, []);

  let finalData;
  if (data?.total?.length < 1) {
    finalData = <h1 className="px-5 text-2xl">No Running orders</h1>;
  } else {
    finalData = (
      <div className="px-8 py-3.5 w-full grid grid-cols-3 gap-2 lg:grid-cols-2 md:grid-cols-1">
        {data?.rows?.map((indivitualOrder, index) => (
          <div key={index}>
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
              <button
                className="px-2 text-white dark:bg-gray-700 bg-primary"
                onClick={() => handleClick(indivitualOrder?._id)}
              >
                Cancel order
              </button>
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
                {indivitualOrder?.productsSubTotal}
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
                  {indivitualOrder?.saveAmount}
                </p>
              )}
              <p>
                <span className="inline-block w-48">Total:</span>
                {indivitualOrder?.subTotal}
              </p>

              <p>
                <span className="inline-block w-48">Shipping charge:</span>
                {indivitualOrder?.shippingCost}
              </p>
              {indivitualOrder?.otherCost > 0 && (
                <p>
                  <span className="inline-block w-48">Other charge:</span>
                  {indivitualOrder?.otherCost}
                </p>
              )}

              <hr className="mt-1" />
              <p>
                <span className="inline-block w-48">Grand Total:</span>
                {indivitualOrder?.grandTotal}
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
                          <p className="sm:h-24 h-14">
                            {matchingProductDetail?.name?.length > 30
                              ? `${matchingProductDetail?.name.slice(0, 30)}...`
                              : matchingProductDetail?.name}
                          </p>

                          <p className="mb-1 text-base font-normal text-gray-700 dark:text-gray-400 ">
                            ৳{matchingProductDetail?.finalPrice}
                            <span className="mx-2 text-gray-400 line-through dark:text-gray-500 text-[14px]">
                              ৳{matchingProductDetail?.price}
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
    <div className="mx-auto px-8 pt-10 pb-20">
      <h1 className="w-full md:text-xl dark:bg-gray-700 px-5 py-3.5 text-3xl border-l text-white bg-primary">
        Running orders
      </h1>
      <div className="bg-white dark:bg-gray-800">{finalData}</div>
    </div>
  );
}
