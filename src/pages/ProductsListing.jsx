import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Filters from "../components/Filters";
import Products from "../components/Products";

const ProductsListing = () => {
  const { products, categorySelected } = useSelector((state) => state.products);

  const [filteredProducts, setFilteredProducts] = useState([]);

  console.log("filtered products", filteredProducts);

  useEffect(() => {
    const filteredItems = products.filter(
      (product, idx) => product.category === categorySelected
    );

    console.log("items", filteredItems);

    setFilteredProducts(filteredItems);
  }, [categorySelected]);

  return (
    <section className="min-h-screen">
      <div className="flex">
        <div className="w-1/3 md:w-1/5">
          <Filters /> 
        </div>
        <div className="w-2/3 md:w-4/5">
          <Products /> 
        </div>
      </div>
    </section>
  );
};

export default ProductsListing;
