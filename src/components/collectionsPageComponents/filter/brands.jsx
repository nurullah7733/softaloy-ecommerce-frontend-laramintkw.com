import { useEffect, useState } from "react";
import Accordion from "../../common/acordian";
import LoadingFilter from "./loading/loadingFilter";

const arr = ["one", "two", "three", "four", "five"];

const Brand = () => {
  let content = (
    <>
      {arr?.map((item, index) => (
        <div className="flex items-center gap-x-2" key={index}>
          <label className="dark:text-white sm:text-[14px] flex items-center capitalize">
            <input
              className=" bg-gray-50 focus:ring-0  w-4 h-4 text-gray-400   mr-2 border-gray-300 rounded"
              name={item}
              type="checkbox"
              value={item}
              //   checked={checkboxIndex == index + 1}
            />
            {item}
          </label>
        </div>
      ))}
    </>
  );

  return (
    <div className=" max-w-[275px] px-5 border border-gray-200 rounded-lg shadow card w-96 bg-base-100 bg-white dark:bg-gray-700">
      {/* <LoadingFilter /> */}
      <Accordion title={"Brand"} content={content} />
    </div>
  );
};

export default Brand;
