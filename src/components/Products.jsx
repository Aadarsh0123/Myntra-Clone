import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { selectSortBy, setSearchTerm } from "../redux/products/productSlice";

const Products = () => {
  const { filteredProducts } = useSelector((state) => state.products);
  const { sortOption } = useSelector((state) => state.products);
  const { searchTerm } = useSelector((state) => state.products);

  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  const sortOptions = [
    "Price : High to Low",
    "Price : Low to High",
    "Customer Rating",
  ];

  const handleSearchInput = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleSortBy = (option) => {
    dispatch(selectSortBy(option));
    setShowMenu(false);
  };

  return (
    <div className="p-6">
      <div className="flex md:flex-row md:gap-0 flex-col justify-between items-center">
        <div className="md:ml-10 mb-3 md:mb-0">
          <input
            type="text"
            className="py-2 px-3 w-52 sm:w-60 outline-none border-2 rounded-md"
            placeholder="🔎 Search for an item..."
            onChange={handleSearchInput}
            value={searchTerm}
          />
        </div>

        <div
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
          className="relative sm:w-64 w-52 text-center border-2 p-2 rounded-lg"
        >
         <h1>
            Sort by : <span className="font-semibold">{sortOption}</span>
          </h1>

          {showMenu && (
            <div className="absolute top-full border-t-2 left-0  w-full bg-white shadow-lg rounded-lg z-10">
              {sortOptions.map((option, idx) => (
                <div
                  key={idx}
                  className="w-full text-center hover:bg-gray-100 p-2 cursor-pointer"
                  onClick={() => handleSortBy(option)}
                >
                  <h1>{option}</h1>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center flex-wrap gap-10 py-4 px-6">
        {filteredProducts.map((product, id) => (
          <ProductCard
            key={id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            category={product.category}
            rating={product.rating}
          />
          
        ))}
      </div>
    </div>
  );
};

export default Products;
