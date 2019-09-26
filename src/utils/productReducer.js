import * as types from "./constants";

/* State schema:
    {
      inputValue: "",
      sortBy: types.DATE_UP,
      products: []
    }
*/

const productReducer = (state, action) => {
  switch (action.type) {
    case types.UPDATE_PRODUCTS:
      return { ...state, products: [...action.payload] };

    case types.SHOW_PROMOTED:
      return {
        ...state,
        products: [...state.products.filter(({ node }) => node.promo)],
      };

    case types.SHOW_ALL:
      const { products } = action;

      return { ...state, products };

    case types.INPUT_CHANGE:
      const { inputValue } = action;

      return { ...state, inputValue };

    case types.SET_SORT_DATE_UP:
      return { ...state, sortBy: types.DATE_UP };

    case types.SET_SORT_DATE_DOWN:
      return { ...state, sortBy: types.DATE_DOWN };

    case types.SET_SORT_PRICE_UP:
      return { ...state, sortBy: types.PRICE_UP };

    case types.SET_SORT_PRICE_DOWN:
      return { ...state, sortBy: types.PRICE_DOWN };

    default:
      return state;
  }
};

export default productReducer;
