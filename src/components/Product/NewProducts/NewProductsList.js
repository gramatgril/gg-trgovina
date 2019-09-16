import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import ProductCard from "../ProductCard";
import Title from "../../Title";

import { styles } from "../../../utils";

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

const NewProductsList = ({ products }) => {
  return (
    <Wrapper>
      <Title title="novi" subtitle="izdelki" />
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

NewProductsList.propTypes = propTypes;

export default NewProductsList;
