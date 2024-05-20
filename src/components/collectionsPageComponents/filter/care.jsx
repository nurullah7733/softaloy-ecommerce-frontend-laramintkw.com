import { useEffect, useState } from "react";
import Accordion from "../../common/acordian";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { getAllSubSubCategoryRequest } from "../../../APIRequest/getSubSubCategoryApi";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

// care compoents actually is subsubcategory
const Care = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const [checkboxIndex, setCheckboxIndex] = useState("");
  const { loading, subSubCategories } = useSelector(
    (state) => state.subSubCategories
  );

  const handleCheckbox = (e, index) => {
    const newQuery = new URLSearchParams();
    setCheckboxIndex(index);

    if (query.has("pageNo")) {
      newQuery.set("pageNo", "1");
    }
    if (query.has("perPage")) {
      newQuery.set("perPage", query.get("perPage"));
    }
    if (query.has("searchKeyword")) {
      newQuery.set("searchKeyword", "0");
    }

    newQuery.set("subsubcategory", e.target.value);
    navigate({ search: newQuery.toString() });
  };

  useEffect(() => {
    (async () => {
      await getAllSubSubCategoryRequest();
    })();
  }, []);

  let content = (
    <>
      {subSubCategories?.map((subSubCategory, index) => (
        <div
          key={subSubCategory?._id}
          className="flex items-center gap-x-2 border-b py-3 mx-5"
        >
          <label className="dark:text-white sm:text-[14px]   flex items-center capitalize">
            <input
              onChange={(e) => handleCheckbox(e, index + 1)}
              className=" bg-gray-50 focus:ring-0  w-4 h-4 text-gray-400   mr-2 border-gray-300 rounded"
              name={subSubCategory?.name}
              type="checkbox"
              value={subSubCategory?.name}
              checked={checkboxIndex == index + 1}
            />
            {subSubCategory?.name}
          </label>
        </div>
      ))}
    </>
  );

  return (
    <div className=" w-[275px]  ">
      <Accordion loading={loading} title={"Filter Care"} content={content} />
    </div>
  );
};

export default Care;
