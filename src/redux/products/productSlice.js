import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  categorySelected: null,
  sortOption: "Recommended",
  searchTerm: "",
  totalQuantity: 0,
};

const productSlice = createSlice({
  name: "products",
  initialState, 
  reducers: {
    fetchProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    selectCategory: (state, action) => {
      state.categorySelected = action.payload;
      const category = action.payload;
      state.filteredProducts = state.products.filter(
        (product) => product.category === category
      );
    },
    selectSortBy: (state, action) => {
      state.sortOption = action.payload;
      if (state.sortOption === "Price : High to Low") {
        state.filteredProducts = state.filteredProducts.sort(
          (a, b) => b.price - a.price
        );
      } else if (state.sortOption === "Price : Low to High") {
        state.filteredProducts = state.filteredProducts.sort(
          (a, b) => a.price - b.price
        );
      } else if (state.sortOption === "Customer Rating") {
        state.filteredProducts = state.filteredProducts.sort(
          (a, b) => b.rating.rate - a.rating.rate
        );
      }
    },
    selectClearAll: (state) => {
      state.filteredProducts = state.products;
      state.categorySelected = null;
    },
    setSearchTerm: (state, action) => {
      const searchInput = action.payload || "";
      state.searchTerm = searchInput;

      if (searchInput.trim() === "") {
        state.filteredProducts = state.categorySelected
          ? (state.filteredProducts = state.products.filter(
              (product) => product.category === state.categorySelected
            ))
          : state.products;
      } else {
        const searchLower = searchInput.toLowerCase();
        state.filteredProducts = state.filteredProducts.filter((product) =>
          product.title.toLowerCase().includes(searchLower)
        );
      }
    },
    setTotalQuantity: (state, action) => {
      state.totalQuantity = action.payload;
    },
  },
});

export const {
  fetchProducts,
  selectCategory,
  selectSortBy,
  selectClearAll,
  setSearchTerm,
  setTotalQuantity,
} = productSlice.actions;
export default productSlice.reducer;
