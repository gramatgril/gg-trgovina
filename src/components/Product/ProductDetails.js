import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import PropTypes from "prop-types";

import { styles } from "../../utils";
// import { Divider } from "./../../utils";

const propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.shape({
      json: PropTypes.object.isRequired,
    }).isRequired,
    category: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.object.isRequired,
    promo: PropTypes.bool.isRequired,
  }).isRequired,
  categorySlug: PropTypes.string.isRequired,
};

const ProductDetails = ({ product, categorySlug }) => {
  const { title, price, image, description } = product;

  return (
    <Wrapper>
      <div className="center">
        <div className="title">
          <h2>{title}</h2>
        </div>
        {/* <Divider /> */}
        <div className="img-container">
          <Img fluid={image.fluid} alt="product" className="image" />
        </div>
        <div className="desc">
          {documentToReactComponents(description.json)}
        </div>
        {/* <Divider /> */}
        <h2 className="price">Cena: {price} €</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem 0;

  .center {
    padding: 1rem 1rem;
    margin: 0 auto;
  }

  .title {
    color: ${styles.colors.black};

    h2 {
      font-size: 2rem;
      padding: 1rem 0;
      margin: 2rem 0;
      text-transform: uppercase;
      letter-spacing: ${styles.letterSpacing};
      margin-bottom: 1rem;
    }
  }

  .price {
    color: ${styles.colors.green};
    text-align: right;
    padding: 2rem 0;
  }

  .divider {
    background: ${styles.colors.green};
  }

  .img-container {
    box-shadow: ${styles.lightShadow};
    max-width: 400px;
  }

  h4 {
    text-transform: capitalize;
  }
  .desc {
    padding: 1rem 0;
    line-height: 2;
  }

  @media (min-width: 576px) {
    .center {
      width: 60vw;
    }
  }

  @media (min-width: 1200px) {
    .center {
      width: 60vw;
    }
  }
`;

ProductDetails.propTypes = propTypes;

export default ProductDetails;
