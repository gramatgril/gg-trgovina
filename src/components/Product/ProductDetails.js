import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { styles } from "../../utils";
import Advice from "./../Advice";
import Title from "./../Title";

const ProductDetails = ({ product, categorySlug }) => {
  const { title, price, image, description, images } = product;

  return (
    <>
      <ProductDetailsWrapper>
        <div className="center">
          <div className="title">
            <h2>{title}</h2>
          </div>
          <hr />
          <div className="images">
            {images &&
              images.map((image, i) => (
                <Img
                  key={i}
                  fluid={image.fluid}
                  alt="single tour"
                  className="image"
                />
              ))}
          </div>
          {/* </div> */}
          <div className="info">
            <div className="desc">
              {documentToReactComponents(description.json)}
            </div>
            <h2 className="price">Cena: {price} €</h2>
          </div>

          <hr />
        </div>
      </ProductDetailsWrapper>
    </>
  );
};

const ProductDetailsWrapper = styled.div`
  padding: 1rem 0;

  .center {
    padding: 1rem 1rem;
    margin: 0 auto;
  }

  .title {
    color: ${styles.colors.black};

    h2 {
      font-size: 2rem;
      padding: 1rem 0;
      margin: 2rem 0;
      text-transform: uppercase;
      letter-spacing: ${styles.letterSpacing};
      margin-bottom: 1rem;
    }
  }

  .price {
    text-align: right;
    padding: 2rem 0;
  }

  .images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    margin-bottom: 2rem;
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid ${styles.colors.green};
    margin: 1em 0;
    padding: 0;
  }

  .info {
  }

  .divider {
    background: ${styles.colors.green};
  }

  .image {
    max-height: 100%;
  }

  h4 {
    text-transform: capitalize;
  }
  .desc {
    padding: 1rem 0;
    line-height: 2;
  }

  @media (min-width: 576px) {
    .center {
      width: 80vw;
    }
  }

  @media (min-width: 1200px) {
    .center {
      width: 70vw;
    }
  }
`;

export default ProductDetails;
