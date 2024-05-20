const LoadingCollectionPageProducts = () => {
  let products = Array.from(Array(8).keys());
  return (
    <div className="py-[14px]  ">
      <div className="animate-pulse ">
        {/* start products*/}
        <div className="grid w-full md:grid-cols-2  lg:grid-cols-3 grid-cols-4 gap-x-5 gap-y-10    ">
          {products.map((item, index) => (
            <div key={index} className="max-h-[340px]">
              <div className=" rounded-md ">
                {/* img */}
                <div className="w-full h-[250px] bg-gray-300 "></div>
                <div className="pt-5">
                  {/* title */}
                  <div className="mx-auto w-full h-[15px] mt-[5px] bg-gray-300 rounded-md "></div>
                  <div className="mx-auto w-[80%] h-[15px] mt-[7px] bg-gray-300 rounded-md "></div>

                  {/* price */}
                  <div className="max-w-[50%] mx-auto h-[12px] mt-[10px] bg-gray-300 rounded-md "></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingCollectionPageProducts;
