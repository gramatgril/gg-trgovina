import React, { useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import styled from "styled-components";

import PrimaryButton from "../Button";
import { Container } from "./../../styles";
import { stylePrice, calculateDiscount } from "./../../styles";

const propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    priceUnit: PropTypes.string.isRequired,
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
  const {
    title,
    price,
    oldPrice,
    priceUnit,
    description,
    images,
    promo,
  } = product;

  const [galleryImages] = useState(images);
  const [mainImage, setMainImage] = useState(images[0]);

  // Changes main image to the one that is selected in the gallery
  const changeImage = id =>
    setMainImage(galleryImages.find(el => el.id === id));

  return (
    <Wrapper>
      <Container align="center">
        {/* Title bar */}
        <StyledTitle>
          <div className="title-bar">
            <h2>{title}</h2>
          </div>
          <hr />
        </StyledTitle>
        <div className="panels">
          {/* Main image and gallery */}
          <StyledImages>
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
          </StyledImages>
          <StyledDetails>
            <StyledPrice>
              {/* Rich Text, contains h4 and p tags */}
              {oldPrice && (
                <>
                  <p className="old-price">
                    Stara cena: {stylePrice(oldPrice)} {priceUnit}
                  </p>
                  <p className="discount">
                    Popust: -{calculateDiscount(price, oldPrice)}%
                  </p>
                </>
              )}

              <p className="price">
                Cena: {stylePrice(price)} {priceUnit}
              </p>
            </StyledPrice>
            <StyledRichText>
              <h3 className="description-title">Opis:</h3>
              {documentToReactComponents(description.json)}
            </StyledRichText>
          </StyledDetails>
        </div>

        <Link to={`/${categorySlug}`}>
          <PrimaryButton text="nazaj na kategorijo" />
        </Link>
      </Container>
    </Wrapper>
  );
};

ProductDetails.propTypes = propTypes;

export default ProductDetails;

const Wrapper = styled.div`
  padding: 2rem 0;

  .panels {
    padding: 1rem 0;
  }

  @media (min-width: 576px) {
    .panels {
      display: grid;
      padding: 3rem 0;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 1rem;
    }
  }
`;

const StyledTitle = styled.div`
  /* Mobile */
  text-align: left;

  .title-bar {
    h2 {
      padding-top: 0.5rem;
      margin-bottom: 0.2rem;
      font-size: 1.4rem;
      font-weight: 500;
      text-transform: uppercase;
    }
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid ${({ theme }) => theme.green};
    margin: 0.5em 0;
    padding: 0;
  }

  /* Desktop */
  @media (min-width: 576px) {
    .title-bar {
      display: flex;
      justify-content: space-between;

      h2 {
        letter-spacing: 1px;
        font-size: 1.4rem;
        text-transform: uppercase;
        font-weight: 500;
      }

      .price {
        padding: 0.2rem 1rem;
        border-radius: 5px;
        letter-spacing: 1px;
        font-size: 1.4rem;
        font-weight: 500;
      }
    }
  }
`;

// Main image and gallery
const StyledImages = styled.div`
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
      transition: ${({ theme }) => theme.linear};
      width: 100%;
      height: 100%;

      :hover {
        opacity: 0.5;
      }
    }
  }

  .promo {
    font-size: 1.1rem;
    position: absolute;
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.red};
    padding: 0.4rem 0.8rem;
    text-align: center;
    text-transform: uppercase;
    top: 0%;
    left: 0%;
    border-radius: 0.3rem;
  }

  @media (min-width: 576px) {
    .promo {
      font-size: 1.2rem;
    }
  }
`;

const StyledPrice = styled.div`
  text-align: right;
  font-weight: 600;

  .old-price {
    text-decoration: line-through;
    text-decoration-color: ${({ theme }) => theme.grey};
  }

  .price {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.red};
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }

  :after {
    content: "";
    display: block;
    background: ${({ theme }) => theme.grey};
    height: 1px;
    width: 100%;
  }
`;

const StyledDetails = styled.div``;

// Description rich text field.
const StyledRichText = styled.article`
  text-align: left;
  margin-top: 0.5rem;

  .description-title {
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 0 0 1rem 1rem;
  }

  p {
    padding: 0.5rem 1rem;
  }

  h4 {
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    font-weight: 500;
    margin: 0;
  }

  ul,
  ol {
    margin: 0 2.5rem;
    li {
      list-style-type: circle;
    }

    p {
      margin: 0;
      padding: 0;
    }
  }

  @media (min-width: 576px) {
    /* Desktop tweaks */
  }
`;
