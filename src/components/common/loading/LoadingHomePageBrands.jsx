import { useEffect, useState } from "react";
import { useWindowSize } from "../../../../utils/windowSize/useWindowSize";

const LoadingHomePageBrands = () => {
  let [brands, setBrands] = useState([]);
  const windowSize = useWindowSize();

  useEffect(() => {
    const updateArray = () => {
      if (windowSize.width > 767) {
        setBrands(Array.from(Array(16).keys()));
      } else {
        setBrands(Array.from(Array(10).keys()));
      }
    };

    updateArray();
  }, [windowSize.width]);

  return (
    <div className="    px-8 lg:w-full max-w-4xl  !mx-auto   lg:px-3 ">
      <div className="animate-pulse ">
        <div>
          {/* start products*/}
          <div className="grid w-full   md:grid-cols-5 grid-cols-6 lg:gap-4  gap-10  ">
            {brands.map((item, index) => (
              <div
                key={index}
                className="lg:w-full w-[100px]  h-[50px] bg-gray-300  "
              ></div>
            ))}

            {/* end start */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingHomePageBrands;
