import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import styled from "styled-components";

import { styles } from "../../utils";

const propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    promo: PropTypes.bool.isRequired,
    slug: PropTypes.string.isRequired,
    category: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.shape({
      fluid: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};

const ProductCard = ({ product }) => {
  /* eslint-disable no-unused-vars */
  const { price, slug, title, image, category, promo } = product;

  return (
    <Wrapper>
      <Link className="link" to={`/${category.slug}/${slug}`}>
        <div className="header">
          <h4>{title}</h4>
        </div>
        <div className="img-container">
          <Img fluid={image.fluid} className="img" />
          <h4 className="price">{price}</h4>
          {promo && (
            <p className="promo">
              <span>Akcija</span>
            </p>
          )}
        </div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  transition: ${styles.linearTransition};

  :hover {
    .img {
      transition: ${styles.linearTransition};
      opacity: 0.9;
    }
    .header {
      h4 {
        transition: ${styles.linearTransition};
        color: ${styles.colors.green};
      }
    }
  }

  .header {
    height: 80px;
    transition: ${styles.linearTransition};
    padding: 1.5rem 0;
    text-align: left;
    background: ${styles.colors.white};
    h4 {
      vertical-align: bottom;
      transition: ${styles.linearTransition};
      color: ${styles.colors.black};
      font-size: 1rem;
      font-weight: 500;
      text-transform: capitalize;
      margin-bottom: 0;
    }
  }

  .img-container {
    height: 300px;
    position: relative;
    background: ${styles.colors.white};
    transition: ${styles.linearTransition};
  }

  .img {
    height: 100%;
    transition: ${styles.linearTransition};
  }

  .price {
    box-shadow: ${styles.boxShadow};
    font-size: 1.4rem;
    font-weight: 500;
    color: ${styles.colors.white};
    position: absolute;
    left: 0%;
    top: 75%;
    background: ${styles.colors.green};
    padding: 0.2rem 1rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  .promo {
    font-size: 1rem;
    position: absolute;
    color: ${styles.colors.white};
    background: ${styles.colors.red};
    padding: 0.5rem 0.8rem;
    box-shadow: ${styles.boxShadow};
    text-align: center;
    text-transform: uppercase;
    top: 0%;
    right: 0%;
  }

  .link {
    text-decoration: none;
  }
`;

const promoBadge = styled.div``;

ProductCard.propTypes = propTypes;

export default ProductCard;
