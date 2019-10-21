import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Container } from "../../styles";

import PrimaryButton from "../Button";
import ProductCard from "./ProductCard";

const propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        oldPrice: PropTypes.number,
        priceUnit: PropTypes.string.isRequired,
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
  path: PropTypes.string,
  text: PropTypes.string,
};

const defaultProps = {
  path: "/",
  text: "nazaj na kategorije",
};

const ProductList = ({ products, path, text }) => (
  <Wrapper>
    <Container align="center">
      <StyledProductGallery>
        {products.map(({ node }) => (
          <ProductCard key={node.id} product={node} />
        ))}
      </StyledProductGallery>
      {/* Button link gets path and text from parent component*/}
      <Link to={path} className="link">
        <PrimaryButton text={text} />
      </Link>
    </Container>
  </Wrapper>
);

ProductList.propTypes = propTypes;
ProductList.defaultProps = defaultProps;

export default ProductList;

const Wrapper = styled.div`
  padding: 3rem 0;
`;

const StyledProductGallery = styled.div`
  width: 90vw;
  grid-column-gap: 0.5rem;
  grid-row-gap: 2rem;
  padding: 0 0 3rem;

  @media (min-width: 576px) {
    display: grid;
    width: 80vw;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    width: 100%;
  }
`;
