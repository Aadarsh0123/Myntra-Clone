import React from "react";
import { Link } from "react-router-dom";
import men_category from "../assets/men_category.avif";
import women_category from "../assets/women_category.jpg";
import tech_category from "../assets/tech_category.avif";
import jewelery_category from "../assets/jewellery_category.jpg";
import { selectCategory } from "../redux/products/productSlice";
import { useDispatch } from "react-redux";

const ShopByCategory = () => {
  const dispatch = useDispatch(); 

  const categories = [
    {
      name: "Men's Wear",
      image: men_category,
      category: "men's clothing",
    },
    {
      name: "Women's Wear",
      image: women_category,
      category: "women's clothing",
    },
    {
      name: "Electronics",
      image: tech_category,
      category: "electronics",
    },
    {
      name: "Jewelery",
      image: jewelery_category,
      category: "jewelery",
    },
  ];

  const CategoryCard = ({ name, image }) => {
    return (
      <div className="flex items-center justify-center shadow-md">
        <div className="relative rounded-lg overflow-hidden group">
          <img
            className="object-cover w-36 h-24 md:h-44 md:w-48 transition duration-300 transform group-hover:scale-105"
            src={image}
            alt={name}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-white text-sm md:text-lg font-semibold">
              {name}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const navigateToProducts = (category) => {
    dispatch(selectCategory(category));
  };

  return (
    <section>
      <div className="p-8">
        <h1 className="text-3xl mt-6 p-4 font-bold tracking-wider">
          SHOP BY CATEGORY
        </h1>

        <div className="flex flex-wrap gap-8 w-full justify-center md:justify-start md:pl-12 pt-6">
          {categories.map((cat, idx) => (
            <Link
              to="/products"
              key={idx}
              onClick={() => navigateToProducts(cat.category)}
            >
              <CategoryCard key={idx} name={cat.name} image={cat.image} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
