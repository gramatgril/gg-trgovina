import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

import { styles } from "../../utils";

import { PrimaryButton } from "../Button/Button";
import ProductCard from "./ProductCard";

const propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
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

const ProductList = ({ products }) => {
  return (
    <Wrapper>
      <div className="center">
        {products.map(({ node }) => (
          <ProductCard key={node.id} product={node} />
        ))}
      </div>

      <Link to="/">
        <PrimaryButton text="nazaj" />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${styles.colors.white};
  padding: 1rem 0 4rem;
  text-align: center;

  .center {
    width: 90vw;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-column-gap: 0.2rem;
    grid-row-gap: 0.2rem;
  }

  @media (min-width: 576px) {
    .center {
      /* grid-template-columns: repeat(auto-fill, minmax(368.66px, 1fr)); */
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    }
  }
  @media (min-width: 1200px) {
    .center {
      width: 100%;
      max-width: 1170px;
    }
  }
`;

ProductList.propTypes = propTypes;

export default ProductList;
