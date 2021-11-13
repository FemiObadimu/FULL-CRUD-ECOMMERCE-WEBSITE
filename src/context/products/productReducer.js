import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FILTER_PRODUCT,
  GET_PRODUCT,
  SET_LOADING,
  CLEAR_FILTER,
} from "../types";

const productReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case ADD_PRODUCT:
      if (
        state.cart.find(
          (product) => product.product.title === action.payload.product.title
        )
      ) {
        return {
          ...state,
          cart: [...state.cart],
        };
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case DELETE_PRODUCT:
      if (state.cart.length)
        return {
          ...state,
          cart: state.cart.filter((product) => product.id !== action.payload),
        };
      return { ...state };
    case FILTER_PRODUCT:
      return {
        ...state,
        filtered: state.cart.filter((product) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return product.name.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: [],
      };

    default:
      return state;
  }
};

export default productReducer;
