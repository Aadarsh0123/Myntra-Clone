import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCategory,
  selectSortBy,
  selectClearAll,
  setSearchTerm,
} from "../redux/products/productSlice";

const Filters = () => {
  const { categorySelected } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState(categorySelected);

  useEffect(() => {
    setSelectedCategory(categorySelected);
  }, [categorySelected]);

  const categories = [
    "men's clothing",
    "women's clothing",
    "electronics",
    "jewelery",
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    dispatch(selectSortBy("Recommended")); 
    dispatch(selectCategory(category)); 
  };

  const handleClearAll = () => {
    dispatch(selectClearAll()); 
    dispatch(setSearchTerm("")); 
    dispatch(selectSortBy("Recommended")); 
  };

  return (
    <div className="p-2">
      <div className="flex py-4 mb-2 flex-col lg:flex-row items-center justify-between">
        <h2 className="font-bold tracking-wide text-lg">FILTERS</h2>
        <h5
          onClick={handleClearAll}
          className="cursor-pointer text-red-600 font-semibold tracking-wide text-sm"
        >
          CLEAR ALL
        </h5>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col gap-2 border-2 p-2 rounded-lg shadow-sm sm:p-4">
          {categories.map((category, index) => (
            <div key={index} className="flex gap-3">
              <input
                type="radio"
                id={category}
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => handleCategoryChange(category)}
              />
              <label
                htmlFor={category}
                className="font-semibold text-sm sm:text-md"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
