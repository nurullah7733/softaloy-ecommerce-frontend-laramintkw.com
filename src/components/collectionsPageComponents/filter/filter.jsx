import React from "react";
import Brand from "./brands";
import Category from "./category";
import Concern from "./concern";
import Ingredients from "./ingredients";

const Filter = () => {
  return (
    <div className="flex gap-5 flex-col">
      <Brand />
      <Category />
      <Concern />
      <Ingredients />
    </div>
  );
};

export default Filter;
