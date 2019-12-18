import React, { useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { Container } from '../../../styles';
import Description from './Description';
import ImageGallery from './ImageGallery';
import PrimaryButton from '../../Button';
import PriceCard from './PriceCard';

const propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    priceUnit: PropTypes.string.isRequired,
    description: PropTypes.shape({
      json: PropTypes.object.isRequired
    }).isRequired,
    category: PropTypes.shape({
      slug: PropTypes.string.isRequired
    }).isRequired,
    promo: PropTypes.bool.isRequired,
    images: PropTypes.arrayOf(PropTypes.object.isRequired),
    icons: PropTypes.object
  }).isRequired,
  categorySlug: PropTypes.string.isRequired
};

const ProductDetails = ({ product, categorySlug }) => {
  const { title, price, oldPrice, priceUnit, description, images, promo, icons } = product;

  const [galleryImages] = useState(images);
  const [mainImage, setMainImage] = useState(images[0]);

  // Changes main image to the one that is selected in the gallery
  const changeImage = id => setMainImage(galleryImages.find(el => el.id === id));

  return (
    <Wrapper>
      <StyledContainer align="center">
        <Panels>
          <ImageGallery mainImage={mainImage} promo={promo} galleryImages={galleryImages} changeImage={changeImage} />
          <StyledDetails>
            <InfoSection>
              <StyledTitle>
                <h1>{title}</h1>
              </StyledTitle>
              <Description description={description} />
            </InfoSection>
            {icons && <Img fluid={icons.fluid} className="img" />}
            <PriceCard price={price} oldPrice={oldPrice} priceUnit={priceUnit} />
          </StyledDetails>
        </Panels>
        <Link to={`/${categorySlug}`}>
          <PrimaryButton text="nazaj na kategorijo" className="link" />
        </Link>
      </StyledContainer>
    </Wrapper>
  );
};

ProductDetails.propTypes = propTypes;

export default ProductDetails;

const Panels = styled.div``;
const StyledDetails = styled.div``;
const StyledTitle = styled.div``;
const InfoSection = styled.div``;

// Makes Product details closer together on ultra wide monitors
const StyledContainer = styled(Container)`
  @media (min-width: 1440px) {
    width: 50vw;
  }
`;

const Wrapper = styled.div`
  padding: 2rem 0;

  ${StyledTitle} {
    text-align: left;
    margin: 0 0 1rem;
    letter-spacing: 1px;
    padding: 0 1rem;

    h1 {
      margin: 1rem 0 0.5rem;
      line-height: 1.2;
    }

    &:after {
      content: '';
      display: block;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      border-radius: 2px;
      background: ${({ theme }) => theme.primary[100]};
    }
  }

  ${StyledDetails} {
    height: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  ${Panels} {
    padding: 1rem 0;
  }

  .link {
    margin: 2rem 0;
  }

  @media (min-width: 576px) {
    ${Panels} {
      display: grid;
      padding: 3rem 0;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 1rem;
    }

    ${StyledTitle} {
      h1 {
        margin: 0 0 0.5rem;
      }
    }
  }
`;
