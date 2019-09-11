import React from "react";
import { FaPercent } from "react-icons/fa";
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
          {/* {promo && (
            <h4 className="promo">
              <FaPercent />
            </h4>
          )} */}
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
    transition: ${styles.linearTransition};
    padding: 0.8rem;
    text-align: left;
    background: ${styles.colors.white};
    h4 {
      transition: ${styles.linearTransition};
      color: ${styles.colors.black};
      font-size: 1.5rem;
      font-weight: 300;
      text-transform: capitalize;
      margin-bottom: 0;
    }
  }

  .img-container {
    height: 368px;
    /* width: 368px; */
    position: relative;
    background: ${styles.colors.white};
    transition: ${styles.linearTransition};
  }

  .img {
    width: 100%;
    height: 100%;
    transition: ${styles.linearTransition};
  }

  .price {
    font-size: 1.5rem;
    color: ${styles.colors.white};
    position: absolute;
    left: 0%;
    top: 75%;
    background: ${styles.colors.green};
    padding: 0.3rem 1rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  .promo {
    font-size: 1.8rem;
    color: ${styles.colors.white};
    /* transform: rotate(45deg); */
    position: absolute;
    left: 82%;
    top: 10%;
    background: red;
    padding: 0.3rem 0.7rem;
    border-radius: 5rem;
  }

  .link {
    text-decoration: none;
  }
`;

ProductCard.propTypes = propTypes;

export default ProductCard;
