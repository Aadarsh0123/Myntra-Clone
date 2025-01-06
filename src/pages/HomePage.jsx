import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import ShopByCategory from "../components/ShopByCategory";
import { fetchProducts } from "../redux/products/productSlice";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          method: "GET",
        });
        const data = await response.json();
        console.log(data);
        dispatch(fetchProducts(data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchItems();
  }, []); 

  return (
    <div>
      <HeroSection />
      <ShopByCategory />
    </div>
  );
};

export default HomePage;
