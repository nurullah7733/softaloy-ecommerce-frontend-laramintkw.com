import { useEffect, useState } from "react";
import { useWindowSize } from "../../../../utils/windowSize/useWindowSize";

const LoadingPrductDetailsPage = () => {
  const windowSize = useWindowSize();

  return (
    <div className="px-8   !mx-auto   lg:px-3 ">
      <div className="animate-pulse ">
        <div>
          <div className="lg:block grid grid-cols-3 lg:w-full xl:max-w-5xl max-w-7xl gap-5  ">
            <div className="lg:w-full col-span-2  h-[600px] bg-gray-300  "></div>

            <div className="col-span-1   lg:mt-5">
              <div className="w-[40%]    h-[20px] bg-gray-300 "></div>
              <div className="py-6">
                <div className="w-[100%]  mt- h-[25px] bg-gray-300 "></div>
                <div className="w-[75%]  mt-2 h-[25px] bg-gray-300 "></div>
                <div className="w-[50%]  mt-2 h-[25px] bg-gray-300 "></div>
              </div>
              <div>
                <div className="w-[33%]  mt-2 h-[18px] bg-gray-300 "></div>
              </div>
              <div className="py-5">
                <div>
                  <div className="flex gap-5 justify-between">
                    <div className="w-full  mt-2 h-[40px] bg-gray-300 "></div>
                    <div className="w-full  mt-2 h-[40px] bg-gray-300 "></div>
                    <div className="w-full  mt-2 h-[40px] bg-gray-300 "></div>
                  </div>
                  <div className="w-full   mt-1 h-[150px] bg-gray-300 "></div>
                </div>
              </div>
              <div className="py-5 flex gap-5">
                <div className="w-[15%]  mt-2 h-[10px] bg-gray-300"></div>
                <div className="w-[10px]  mt-2 h-[10px] bg-gray-300 rounded-full"></div>
                <div className="w-[10px]  mt-2 h-[10px] bg-gray-300 rounded-full"></div>
                <div className="w-[10px]  mt-2 h-[10px] bg-gray-300 rounded-full"></div>
              </div>
              <div className="py- ">
                <div className="w-[30%]  mt-2 h-[40px] bg-gray-300 "></div>
              </div>
              <div className="py-5">
                <div className="w-full  mt-2 h-[40px] bg-gray-300 "></div>
              </div>
            </div>

            {/* end start */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPrductDetailsPage;
