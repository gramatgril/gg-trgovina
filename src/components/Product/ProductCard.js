import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import styled from "styled-components";

import { styles } from "../../styles";

const propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    priceUnit: PropTypes.string.isRequired,
    promo: PropTypes.bool.isRequired,
    slug: PropTypes.string.isRequired,
    category: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

const ProductCard = ({ product }) => {
  const { price, priceUnit, slug, title, images, category, promo } = product;

  // Replaces dots with commas
  const stylePrice = price => `${price.toFixed(2)}`.replace(/\./g, ",");

  return (
    <Wrapper>
      <Link className="link" to={`/${category.slug}/${slug}`}>
        <StyledImage>
          <Img
            fluid={images[0].fluid}
            className="img"
            imgStyle={{ objectFit: "contain", objectPosition: "50% 50%" }}
          />
          <StyledPrice>
            {stylePrice(price)} <span>{priceUnit}</span>
          </StyledPrice>
          {/* Promo tag that says "Akcija" */}
          {promo && (
            <StyledPromo>
              <span>Posebna cena</span>
            </StyledPromo>
          )}
        </StyledImage>
        <StyledTitle>
          <h4>{title}</h4>
        </StyledTitle>
      </Link>
    </Wrapper>
  );
};

ProductCard.propTypes = propTypes;

export default ProductCard;

const StyledTitle = styled.div`
  height: 5rem;
  transition: ${styles.linear};
  text-align: left;
  padding: 0.5rem 0;

  h4 {
    transition: ${styles.linear};
    color: ${styles.colors.black};
    font-size: 1.1rem;
    font-weight: 500;
    text-transform: uppercase;
  }
`;

const Wrapper = styled.article`
  transition: ${styles.linear};
  border: none;

  :hover {
    ${StyledTitle} {
      h4 {
        transition: ${styles.linear};
        color: ${styles.colors.green};
      }
    }
    .img {
      transition: ${styles.linear};
      opacity: 0.8;
    }
  }
`;
const StyledImage = styled.div`
  height: 280px;
  position: relative;
  transition: ${styles.linear};

  .img {
    transition: ${styles.linear};
  }
`;

const StyledPrice = styled.p`
  box-shadow: ${styles.boxShadow};
  font-size: 1.1rem;
  font-weight: 500;
  color: ${styles.colors.white};
  position: absolute;
  right: 0%;
  top: 75%;
  background: ${styles.colors.green};
  padding: 0.2rem 1rem;
  border-radius: 0.3rem;
`;

const StyledPromo = styled.p`
  box-shadow: ${styles.boxShadow};
  font-size: 1.1rem;
  position: absolute;
  color: ${styles.colors.white};
  background: ${styles.colors.red};
  padding: 0.2rem 0.5rem;
  text-align: center;
  text-transform: uppercase;
  top: 0%;
  left: 0%;
  border-radius: 0.3rem;
`;
