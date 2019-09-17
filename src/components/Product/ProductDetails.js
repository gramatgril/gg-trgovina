import React, { useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import styled from "styled-components";

import { styles } from "../../utils";

import { PrimaryButton } from "../Button/Button";

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
    promo: PropTypes.bool.isRequired,
    images: PropTypes.arrayOf(PropTypes.object.isRequired),
  }).isRequired,
  categorySlug: PropTypes.string.isRequired,
};

const ProductDetails = ({ product, categorySlug }) => {
  const { title, price, description, images, promo } = product;

  const [galleryImages] = useState(images);
  const [mainImage, setMainImage] = useState(images[0]);

  // Changes main image to the one that is selected in the gallery
  const changeImage = id => {
    setMainImage(galleryImages.find(el => el.id === id));
  };

  return (
    <Wrapper>
      <div className="center">
        {/* Title bar */}
        <StyledTitle>
          <div className="title-bar">
            <h2>{title}</h2>
            <h2 className="price">{price}</h2>
          </div>
          <hr />
        </StyledTitle>
        <div className="panels">
          {/* Main image and gallery */}
          <StyledGallery>
            <div className="main-img-container">
              {/* imgStyle is used so image fits the parent container */}
              <Img
                fluid={mainImage.fluid}
                className="main-img"
                imgStyle={{ objectFit: "contain" }}
              />
              {/* Promo tag */}
              {promo && (
                <p className="promo">
                  <span>Izdelek v akciji</span>
                </p>
              )}
            </div>
            {/* Gallery images render only if there is more than one image */}
            <div className="gallery">
              {galleryImages.length > 1 &&
                galleryImages
                  .filter((_, i) => i < 4)
                  .map(({ id, fluid }) => (
                    <div
                      key={id}
                      className="gallery-img-container"
                      onClick={() => changeImage(id)}
                    >
                      <Img fluid={fluid} className="gallery-img" />
                    </div>
                  ))}
            </div>
          </StyledGallery>
          {/* Rich Text, contains H4 and p tags */}
          <StyledText>{documentToReactComponents(description.json)}</StyledText>
        </div>
        <Link to={`/${categorySlug}`}>
          <PrimaryButton text="nazaj na kategorijo" />
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .center {
    padding: 4rem 0;
    width: 90vw;
    margin: 0 auto;
    text-align: center;
  }

  .panels {
    padding: 1rem 0;
    margin-bottom: 1rem;
  }

  @media (min-width: 576px) {
    .center {
      width: 80vw;
    }

    .panels {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 1rem;
      margin-bottom: 3rem;
    }

    .img-container {
      padding: 2rem 0;
    }
  }

  @media (min-width: 1200px) {
    .center {
      width: 50vw;
    }
  }
`;

// Title bar
const StyledTitle = styled.div`
  text-align: left;

  .title-bar {
    h2 {
      font-size: 1.8rem;
      font-weight: 500;
    }

    .price {
      color: ${styles.colors.green};
      font-weight: 600;
    }
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid ${styles.colors.green};
    margin: 0.5em 0;
    padding: 0;
  }

  @media (min-width: 576px) {
    .title-bar {
      display: flex;
      justify-content: space-between;
    }
  }
`;

// Main image and gallery
const StyledGallery = styled.div`
  position: relative;

  .main-img-container {
    height: 400px;
  }

  .main-img {
    height: 100%;
  }

  .gallery {
    padding: 1rem 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;

    .gallery-img {
      transition: ${styles.linearTransition};
      width: 100%;
      height: 100%;

      :hover {
        opacity: 0.5;
      }
    }
  }

  .promo {
    font-size: 0.9rem;
    position: absolute;
    color: ${styles.colors.white};
    background: ${styles.colors.red};
    padding: 0.5rem 0.8rem;
    text-align: center;
    text-transform: uppercase;
    top: 0%;
    left: 0%;
  }

  @media (min-width: 576px) {
    .promo {
      font-size: 1.2rem;
    }
  }
`;

// Description rich text field.
const StyledText = styled.div`
  padding: 2rem 0;
  text-align: left;

  p {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }

  h4 {
    padding: 0.2rem 1rem;
    font-weight: 600;
  }

  li {
    list-style-type: none;
  }

  @media (min-width: 576px) {
    padding: 0;
  }
`;

ProductDetails.propTypes = propTypes;

export default ProductDetails;
