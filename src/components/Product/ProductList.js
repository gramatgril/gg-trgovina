import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

import { styles, Container } from "../../utils";

import PrimaryButton from "../Button/Button";
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
        images: PropTypes.arrayOf(
          PropTypes.shape({
            fluid: PropTypes.object.isRequired,
          }).isRequired
        ).isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

const ProductList = ({ products }) => {
  return (
    <StyledList align="center">
      <div className="gallery">
        {products.map(({ node }) => (
          <ProductCard key={node.id} product={node} />
        ))}
      </div>
      <Link to="/">
        <PrimaryButton text="nazaj na kategorije" />
      </Link>
    </StyledList>
  );
};

ProductList.propTypes = propTypes;

export default ProductList;

const StyledList = styled(Container)`
  padding: 1rem 0 4rem;

  .gallery {
    width: 90vw;
    margin: 3rem auto;
    grid-column-gap: 0.5rem;
    grid-row-gap: 2rem;
  }

  @media (min-width: 576px) {
    .gallery {
      display: grid;
      width: 80vw;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1200px) {
    .gallery {
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));

      width: 100%;
    }
  }
`;
