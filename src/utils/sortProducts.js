import { types } from ".";

const sortProducts = (products, sortBy) => {
  switch (sortBy) {
    case types.DATE_UP:
      return products.sort((a, b) => a.node.createdAt > b.node.createdAt);

    case types.DATE_DOWN:
      return products.sort((a, b) => a.node.createdAt < b.node.createdAt);

    case types.PRICE_UP:
      return products.sort((a, b) => a.node.price > b.node.price);

    case types.PRICE_DOWN:
      return products.sort((a, b) => a.node.price < b.node.price);

    default:
      return products;
  }
};

export default sortProducts;
