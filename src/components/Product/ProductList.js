import React from "react";

import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  console.log("products:", products);
  return (
    <div>
      {products.map(({ node }) => (
        <ProductCard key={node.id} product={node} />
      ))}
    </div>
  );
};

export default ProductList;
