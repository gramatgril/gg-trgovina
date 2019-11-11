import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import PropTypes from "prop-types";

const propTypes = {
  mainImage: PropTypes.object.isRequired,
  galleryImages: PropTypes.arrayOf(PropTypes.object.isRequired),
  changeImage: PropTypes.func.isRequired,
  promo: PropTypes.bool,
};

const ImageGallery = ({ mainImage, galleryImages, changeImage, promo }) => {
  return (
    <Wrapper>
      <MainImage>
        {/* imgStyle is used so image fits the parent container */}
        <Img
          fluid={mainImage.fluid}
          className="img"
          imgStyle={{ objectFit: "contain" }}
        />
        {/* Promo tag */}
        {promo && (
          <Promo>
            <span>Izdelek v akciji</span>
          </Promo>
        )}
      </MainImage>
      {/* Gallery images render only if there is more than one image */}
      <GalleryImages>
        {galleryImages.length > 1 &&
          galleryImages
            .filter((_, i) => i < 4)
            .map(({ id, fluid }) => (
              <div key={id} onClick={() => changeImage(id)}>
                <Img fluid={fluid} className="img" />
              </div>
            ))}
      </GalleryImages>
    </Wrapper>
  );
};

ImageGallery.propTypes = propTypes;

export default ImageGallery;

const MainImage = styled.div``;
const Promo = styled.p``;
const GalleryImages = styled.div``;

const Wrapper = styled.div`
  position: relative;

  ${MainImage} {
    height: 400px;

    .img {
      /* Image blur effect */
      animation: image-focus-in 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;

      @keyframes image-focus-in {
        0% {
          filter: blur(12px);
          opacity: 0;
        }
        100% {
          filter: blur(0px);
          opacity: 1;
        }
      }
    }
  }

  ${GalleryImages} {
    padding: 1rem 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;

    .img {
      transition: ${({ theme }) => theme.linear};
      width: 100%;
      height: 100%;

      :hover {
        opacity: 0.5;
      }
    }
  }

  ${Promo} {
    font-size: 1.1rem;
    position: absolute;
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.darkRed};
    padding: 0.4rem 0.8rem;
    text-align: center;
    text-transform: uppercase;
    top: 0%;
    left: 0%;
    border-radius: 0.3rem;
  }

  @media (min-width: 576px) {
    ${Promo} {
      font-size: 1.2rem;
    }
  }
`;
