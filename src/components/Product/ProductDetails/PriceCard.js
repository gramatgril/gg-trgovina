import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { stylePrice, calculateDiscount } from './../../../styles/helpers';

const propTypes = {
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.number,
  priceUnit: PropTypes.string.isRequired
};

const PriceCard = ({ price, oldPrice, priceUnit }) => {
  const { discount, saved } = calculateDiscount(price, oldPrice) || 0;

  return (
    <Wrapper>
      <PriceContainer>
        <Price>
          {stylePrice(price)} {priceUnit}
        </Price>
      </PriceContainer>
      {oldPrice > price && (
        <DiscountContainer>
          <OldPrice>
            <p>
              <span className="label">Stara cena</span>{' '}
              <span className="oldPrice">
                {stylePrice(oldPrice)} {priceUnit}
              </span>
            </p>
          </OldPrice>
          <Saved>
            <p>
              <span className="label">Vaš prihranek</span> {stylePrice(saved)} €
            </p>
          </Saved>
          <Discount>
            <p>
              <span className="label">Popust</span> {discount}%
            </p>
          </Discount>
        </DiscountContainer>
      )}
    </Wrapper>
  );
};

PriceCard.propTypes = propTypes;

export default PriceCard;

const Price = styled.div``;
const OldPrice = styled.div``;
const Discount = styled.div``;
const PriceContainer = styled.div``;
const DiscountContainer = styled.div``;
const Saved = styled.div``;

const Wrapper = styled.div`
  text-align: center;
  width: 90%;
  margin: 2rem 0;
  white-space: nowrap;
  display:flex;
  flex-direction: column;
  align-items: flex-end;


  ${Price} {
    font-size: 2rem;
    color: ${({ theme }) => theme.primary[500]};
    font-weight: 600;
  }

  ${DiscountContainer} {
   width: 100%;
  }

  ${OldPrice}, ${Discount}, ${Saved} {
    align-items: baseline;
    font-weight: 500;
    color: ${({ theme }) => theme.grey[300]};


    p {
      display: flex;
      justify-content: space-between;
    }

    .label {
      font-weight: 400;
      color: ${({ theme }) => theme.grey[300]};
    }

    .oldPrice {
      text-decoration: line-through;
    }

  }

   @media (min-width: 768px) {
    ${DiscountContainer} {
       width: 70%;
    }
  }

`;
