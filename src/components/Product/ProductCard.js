import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import styled from "styled-components";

import { stylePrice, calculateDiscount } from "./../../styles";

const propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
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
  const {
    price,
    oldPrice,
    priceUnit,
    slug,
    title,
    images,
    category,
    promo,
  } = product;

  return (
    <Wrapper>
      <Link className="link" to={`/${category.slug}/${slug}`}>
        <StyledImage>
          <Img
            fluid={images[0].fluid}
            className="img"
            imgStyle={{ objectFit: "contain", objectPosition: "50% 50%" }}
          />
          {/* Price Tag */}
          <StyledPrice>
            {stylePrice(price)} <span>{priceUnit}</span>
          </StyledPrice>
          {/* Discount tag */}
          {oldPrice && (
            <StyledDiscount>
              <span>-{calculateDiscount(price, oldPrice)}%</span>
            </StyledDiscount>
          )}
          {/* Promo tag */}
          {promo && (
            <StyledPromo>
              <span>Akcija</span>
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

const StyledDiscount = styled.div`
  padding: 0 0.2rem;
  position: absolute;
  top: 0%;
  right: 0%;
  background: ${({ theme }) => theme.grey};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: ${({ theme }) => theme.white};
  display: flex;
  font-size: 1.2rem;
  box-shadow: ${({ theme }) => theme.boxShadow};

  span {
    margin: auto;
  }
`;

const StyledTitle = styled.div`
  height: 5rem;
  transition: ${({ theme }) => theme.linear};
  text-align: left;
  padding: 0.5rem 0;

  h4 {
    transition: ${({ theme }) => theme.linear};
    color: ${({ theme }) => theme.black};
    font-size: 1.1rem;
    font-weight: 500;
    text-transform: uppercase;
  }
`;

const Wrapper = styled.article`
  transition: ${({ theme }) => theme.linear};
  border: none;

  :hover {
    ${StyledTitle} {
      h4 {
        transition: ${({ theme }) => theme.linear};
        color: ${({ theme }) => theme.green};
      }
    }
    .img {
      transition: ${({ theme }) => theme.linear};
      opacity: 0.8;
    }
  }
`;

const StyledImage = styled.div`
  height: 280px;
  position: relative;
  transition: ${({ theme }) => theme.linear};

  .img {
    transition: ${({ theme }) => theme.linear};
  }
`;

const StyledPrice = styled.p`
  box-shadow: ${({ theme }) => theme.boxShadow};
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.white};
  position: absolute;
  right: 0%;
  top: 85%;
  background: ${({ theme }) => theme.green};
  padding: 0.2rem 1rem;
  border-radius: 0.3rem;
`;

const StyledPromo = styled.p`
  box-shadow: ${({ theme }) => theme.boxShadow};
  font-size: 1.1rem;
  position: absolute;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.red};
  padding: 0.2rem 0.5rem;
  text-align: center;
  text-transform: uppercase;
  top: 0%;
  left: 0%;
  border-radius: 0.3rem;
`;
