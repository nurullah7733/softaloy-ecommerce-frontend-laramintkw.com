const baseUrl = import.meta.env.VITE_API_URL;

const updateRecentlyViewedProducts = async () => {
  // Retrieve the list of recently viewed products from localStorage
  let viewedProducts = JSON.parse(localStorage.getItem("recentlyViewed")) || [];

  if (viewedProducts.length > 0) {
    try {
      // Loop through each product and fetch updated data from the database
      const updatedProductsPromises = viewedProducts.map(async (product) => {
        const response = await fetch(
          `${baseUrl}/product-details/${product._id}`
        );
        const responseData = await response.json();

        // Assuming `responseData.data` is an array, get the first item
        if (responseData.status === "success" && responseData.data.length > 0) {
          return responseData.data[0]; // Return the first product from the array
        } else {
          throw new Error("No product data found");
        }
      });

      // Wait for all product data to be fetched
      const updatedProducts = await Promise.all(updatedProductsPromises);

      // Save the updated products array back to localStorage
      localStorage.setItem("recentlyViewed", JSON.stringify(updatedProducts));
    } catch (error) {
      console.error("Error updating recently viewed products:", error);
    }
  }
};

// Call this function to update localStorage with the latest data from the database
updateRecentlyViewedProducts();

export default updateRecentlyViewedProducts;
