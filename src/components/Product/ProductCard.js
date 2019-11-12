import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { stylePrice, calculateDiscount } from './../../styles';

const propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    priceUnit: PropTypes.string.isRequired,
    promo: PropTypes.bool.isRequired,
    slug: PropTypes.string.isRequired,
    category: PropTypes.shape({
      slug: PropTypes.string.isRequired
    }).isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        fluid: PropTypes.object.isRequired
      }).isRequired
    ).isRequired
  }).isRequired
};

const ProductCard = ({ product }) => {
  const { price, oldPrice, priceUnit, slug, title, images, category } = product;

  const { discount } = calculateDiscount(price, oldPrice) || 0;

  return (
    <Wrapper>
      <Link className="link" to={`/${category.slug}/${slug}`}>
        <ImageContainer>
          <Img fluid={images[0].fluid} className="img" imgStyle={{ objectFit: 'contain', objectPosition: '50% 50%' }} />
          <StyledPrice>
            {stylePrice(price)} <span>{priceUnit}</span>
          </StyledPrice>
          {/* Check if oldPrice is not lower than oldPrice because of users mistake */}
          {oldPrice > price && (
            <Discount>
              <span>-{discount}%</span>
            </Discount>
          )}
        </ImageContainer>
        <StyledTitle>
          <h4>{title}</h4>
        </StyledTitle>
      </Link>
    </Wrapper>
  );
};

ProductCard.propTypes = propTypes;

export default ProductCard;

const ImageContainer = styled.div``;
const StyledTitle = styled.div``;
const Discount = styled.div``;
const StyledPrice = styled.p``;

const Wrapper = styled.article`
  border: none;

  ${ImageContainer} {
    height: 280px;
    position: relative;

    .img {
      transition: ${({ theme }) => theme.linear};
    }
  }

  ${StyledTitle} {
    height: 5rem;
    text-align: left;
    padding: 0.5rem 0;

    h4 {
      transition: ${({ theme }) => theme.linear};
      color: ${({ theme }) => theme.grey[700]};
      font-size: 1.1rem;
      font-weight: 500;
      text-transform: uppercase;
    }
  }

  ${StyledPrice} {
    box-shadow: ${({ theme }) => theme.boxShadow};
    font-size: 1.1rem;
    font-weight: 500;
    position: absolute;
    right: 0%;
    top: 85%;
    color: ${({ theme }) => theme.grey[100]};
    background: ${({ theme }) => theme.primary[500]};
    padding: 0.2rem 1rem;
    border-radius: 0.3rem;
  }

  ${Discount} {
    padding: 0 0.2rem;
    position: absolute;
    top: 0%;
    left: 0%;
    background: ${({ theme }) => theme.darkRed};
    width: 55px;
    height: 55px;
    border-radius: 50%;
    color: ${({ theme }) => theme.grey[100]};
    display: flex;
    font-size: 1.2rem;
    box-shadow: ${({ theme }) => theme.boxShadow};

    span {
      margin: auto;
    }
  }

  :hover {
    ${StyledTitle} {
      h4 {
        transition: ${({ theme }) => theme.linear};
        color: ${({ theme }) => theme.primary[300]};
      }
    }
    .img {
      opacity: 0.8;
    }
  }
`;
