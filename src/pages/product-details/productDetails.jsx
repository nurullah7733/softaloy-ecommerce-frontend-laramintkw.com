import React, { useEffect } from "react";
import ProductDetails from "../../components/productDetailsPageComponents/productDetails";
import YouMayAlsoLike from "../../components/productDetailsPageComponents/youMayAlsoLike";
import { useParams } from "react-router-dom";
import { getProductDetailsRequest } from "../../APIRequest/productsApi";
import LoadingPrductDetailsPage from "../../components/common/loading/LoadingProductDetailsPage";
import RecentlyViewedProducts from "../../components/productDetailsPageComponents/recentlyViewedProducts";

const ProductDetailsPage = () => {
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await getProductDetailsRequest(id);
    })();
  });
  return (
    <div>
      <ProductDetails />
      <YouMayAlsoLike relatedProductsFilterWithoutMainProductById={id} />
      <RecentlyViewedProducts />
    </div>
  );
};

export default ProductDetailsPage;
