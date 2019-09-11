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
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="img-container">
          <Img fluid={image.fluid} alt="product" className="img" />
        </div>
        <div className="desc">
          {documentToReactComponents(description.json)}
        </div>
        <h2 className="price">
          Cena: <span>{price}</span>
        </h2>
        <div className="link">
          <Link to="/">
            <PrimaryButton text="nazaj" />
          </Link>
        </div>
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

  .title h2 {
    color: ${styles.colors.black};
    font-size: 2rem;
    padding: 1rem 0;
    margin: 2rem 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1rem;
    border-bottom: 3px solid ${styles.colors.green};
  }

  .price {
    font-weight: 400;
    color: ${styles.colors.green};
    text-align: right;
    padding: 2rem 0;
    span {
      font-weight: 700;
    }
  }

  .img-container {
    max-width: 400px;
  }

  .img {
    width: 100%;
  }

  .link {
    text-align: center;
  }

  h4 {
    text-transform: capitalize;
  }

  .desc {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 1rem;
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
