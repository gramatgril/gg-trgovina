import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import ProductCard from "../Product/ProductCard";
import Title from "../Title";

import { styles } from "../../utils";

const propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        slug: PropTypes.string.isRequired,
        promo: PropTypes.bool.isRequired,
        category: PropTypes.shape({
          slug: PropTypes.string.isRequired,
        }).isRequired,
        image: PropTypes.shape({
          fluid: PropTypes.object.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

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

PromotedProductsList.propTypes = propTypes;

export default PromotedProductsList;
