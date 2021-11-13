import React, { useReducer, useEffect } from "react";
import { v4 as uuid } from "uuid";
import productContext from "./productContext";
import productReducer from "./productReducer";

import {
  GET_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SET_LOADING,
  FILTER_PRODUCT,
  CLEAR_FILTER,
} from "../types";

const ProductState = (props) => {
  const initialState = {
    products: [],
    cart: [],
    filtered: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  // Set loading

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  //  Get All Products
  useEffect(() => {
    setLoading();
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => dispatch({ type: GET_PRODUCT, payload: json }));
    setLoading(false);
  }, []);

  const addProduct = (product) => {
    product.id = uuid();
    dispatch({ type: ADD_PRODUCT, payload: product });
  };

  // DELETE_PRODUCT

  const deleteProduct = (id) => {
    dispatch({ type: DELETE_PRODUCT, payload: id });
  };
  // FILTER_PRODUCT

  const filterProduct = (text) => {
    dispatch({ type: FILTER_PRODUCT, payload: text });
  };

  // CLEAR_FILTER
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <productContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        filtered: state.filtered,
        loading: state.loading,
        setLoading,
        addProduct,
        deleteProduct,
        filterProduct,
        clearFilter,
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;
