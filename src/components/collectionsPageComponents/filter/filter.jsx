import React from "react";
import Brand from "./brands";
import Category from "./category";
import Concern from "./concern";
import Ingredients from "./ingredients";
import Care from "./care";

const Filter = () => {
  return (
    <div className="flex gap-5 flex-col">
      <Brand />
      <Category />
      <Care />
      {/* <Concern /> */}
      {/* <Ingredients /> */}
    </div>
  );
};

export default Filter;
