import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import PropTypes from "prop-types";

import { styles } from "../../utils";
import { PrimaryButton } from "../Button/Button";
import { Link } from "gatsby";

const propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
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
        <h2 className="title">{title}</h2>

        <div className="panels">
          <div className="img-container">
            <Img fluid={image.fluid} alt="product" className="img" />
          </div>

          <div className="desc">
            <p>{documentToReactComponents(description.json)}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .center {
    padding: 4rem 0;
    width: 90vw;
    margin: 0 auto;
  }

  h2 {
    padding-bottom: 0.2rem;
    font-size: 1.8rem;
    font-weight: 500;
    border-bottom: 1px solid ${styles.colors.green};
  }

  p {
    font-size: 0.9rem;
  }

  .img-container,
  .desc {
    padding: 1rem 0;
  }

  .img-container {
    max-width: 400px;
    max-height: 300px;
  }

  .img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 576px) {
    .center {
      width: 80vw;
    }

    .panels {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 1rem;
    }

    .img-container,
    .desc {
      padding: 2rem 0;
    }
  }

  @media (min-width: 1200px) {
    .center {
      width: 50vw;
    }
  }
`;

ProductDetails.propTypes = propTypes;

export default ProductDetails;
