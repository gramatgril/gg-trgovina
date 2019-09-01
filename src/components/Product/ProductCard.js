import React from "react";

const ProductCard = ({ product }) => {
  console.log("product:", product);
  return (
    <div>
      <h3>{product.title}</h3>
    </div>
  );
};

export default ProductCard;
