import React from "react";
import styled from "styled-components";

import ProductCard from "./ProductCard";

const ProductList = ({ products, categorySlug }) => {
  console.log("products:", products);
  return (
    <ProductWrapper>
      <div className="center">
        {products.map(({ node }) => (
          <ProductCard
            key={node.id}
            product={node}
            categorySlug={categorySlug}
          />
        ))}
      </div>
    </ProductWrapper>
  );
};

const ProductWrapper = styled.div`
  padding: 4rem 0;
  text-align: center;

  .center {
    width: 80vw;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }

  @media (min-width: 576px) {
    .center {
      grid-template-columns: repeat(auto-fill, minmax(368.66px, 1fr));
    }
  }
  @media (min-width: 1200px) {
    .center {
      width: 100%;
      max-width: 1170px;
    }
  }
`;

export default ProductList;
