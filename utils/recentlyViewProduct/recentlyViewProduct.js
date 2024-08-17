const addProductToRecentlyViewed = (product) => {
  let viewedProducts = JSON.parse(localStorage.getItem("recentlyViewed")) || [];

  // Remove product if it's already in the array to avoid duplication
  viewedProducts = viewedProducts.filter((prod) => prod._id !== product._id);

  // Add the product to the beginning of the array
  viewedProducts.unshift(product);

  // Limit the array to the last 8 products
  if (viewedProducts.length > 8) {
    viewedProducts.pop();
  }

  localStorage.setItem("recentlyViewed", JSON.stringify(viewedProducts));
};

export default addProductToRecentlyViewed;
