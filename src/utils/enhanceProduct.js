// Adds new fields to fetched products. Atm it returns products with calculated discount.

export const enhanceProduct = products => {
  const enhancedProducts = products.map(product => {
    const { price, oldPrice } = product.node;

    // Adds discount field
    if (oldPrice) {
      const discount = Math.floor((1 - price / oldPrice) * 100);

      return { ...product, node: { ...product.node, discount } };
    } else {
      return { ...product, node: { ...product.node, discount: 0 } };
    }
  });

  return enhancedProducts;
};
