import {
  RESET_PRODUCTS,
  SHOW_PROMOTED,
  SORT_BY_PRICE_UP,
  SORT_BY_PRICE_DOWN,
  INPUT_CHANGE,
  SEARCH_PRODUCTS,
  SORT_BY_DATE_DOWN,
  SORT_BY_DISCOUNT,
  LOAD_PRODUCTS,
} from "./constants";

/* Reducer state:
 {  searchInput: "",
  initialProducts: data.allProducts.edges,
  products: [] }
*/

const productReducer = (state, action) => {
  const { products, initialProducts, searchInput } = state;

  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        products: action.enhancedProducts,
        initialProducts: action.enhancedProducts,
      };

    case RESET_PRODUCTS:
      return { ...state, products: [...initialProducts] };

    case SHOW_PROMOTED:
      const promoted = initialProducts.filter(({ node }) => node.promo);
      return { ...state, products: [...promoted] };

    case SORT_BY_PRICE_UP:
      const priceUp = products.sort((a, b) => a.node.price - b.node.price);
      return { ...state, products: [...priceUp] };

    case SORT_BY_PRICE_DOWN:
      const priceDown = products.sort((a, b) => b.node.price - a.node.price);
      return { ...state, products: [...priceDown] };

    case INPUT_CHANGE:
      return { ...state, searchInput: action.searchInput };

    case SEARCH_PRODUCTS:
      const foundProducts = initialProducts.filter(({ node }) =>
        node.title.toLowerCase().includes(searchInput.toLowerCase())
      );

      return { ...state, searchInput: "", products: [...foundProducts] };

    case SORT_BY_DATE_DOWN:
      const dateUp = products.sort(
        (a, b) => parseInt(b.node.createdAt) - parseInt(a.node.createdAt)
      );

      return { ...state, products: [...dateUp] };

    case SORT_BY_DISCOUNT:
      const discountUp = products.sort(
        (a, b) => b.node.discount - a.node.discount
      );
      return { ...state, products: [...discountUp] };
    default:
      return state;
  }
};

export default productReducer;
