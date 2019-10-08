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
        <StyledHeader>
          <h4>{title}</h4>
        </StyledHeader>
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
              <span>Akcija</span>
            </StyledPromo>
          )}
        </StyledImage>
      </Link>
    </Wrapper>
  );
};

ProductCard.propTypes = propTypes;

export default ProductCard;

const StyledHeader = styled.div`
  position: relative;
  height: 5rem;
  transition: ${styles.linear};
  text-align: left;
  background: ${styles.colors.white};

  h4 {
    position: absolute;
    bottom: 0;
    padding: 0.5rem 0;
    margin: 0.5rem 0;
    transition: ${styles.linear};
    color: ${styles.colors.black};
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const StyledImage = styled.div`
    height: 280px;
    position: relative;
    box-shadow: ${styles.boxShadow}:
    transition: ${styles.linear};

    .img {
    transition: ${styles.linear};
   }
`;

const Wrapper = styled.article`
  transition: ${styles.linear};

  :hover {
    ${StyledHeader} {
      h4 {
        transition: ${styles.linear};
        color: ${styles.colors.green};
      }
    }
    .img {
      transition: ${styles.linear};
      opacity: 0.9;
    }
  }
`;

const StyledPrice = styled.h4`
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
`;

const StyledPromo = styled.p`
  font-size: 1.2rem;
  position: absolute;
  color: ${styles.colors.white};
  background: ${styles.colors.red};
  padding: 0.5rem 0.8rem;
  text-align: center;
  text-transform: uppercase;
  top: 0%;
  right: 0%;
`;
