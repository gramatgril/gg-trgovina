import React from "react";
import styled from "styled-components";

import ProductCard from "../Product/ProductCard";
import Title from "../Title";

import { styles } from "../../utils";

const PromotedProductsList = ({ products }) => {
  return (
    <Wrapper>
      <Title title="posebna" subtitle="ponudba" />
      <div className="center">
        {products.map(({ node }) => (
          <ProductCard key={node.id} product={node} />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem 0;
  text-align: center;
  background: ${styles.colors.white};

  .center {
    width: 80vw;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-column-gap: 1rem;
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

export default PromotedProductsList;
