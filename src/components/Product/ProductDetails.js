import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import { FaMoneyBillWave, FaMap } from "react-icons/fa";

import { styles } from "../../utils";

const ProductDetails = ({ product }) => {
  const { title, price, discount, image } = product;
  return (
    <ProductDetailsWrapper>
      <div className="center">
        <div className="images">
          <Img fluid={image.fluid} alt="single tour" className="img" />
        </div>
        <h2>{title}</h2>
        <div className="info">
          <p>
            <FaMoneyBillWave className="icon" />
            starting from ${price}
          </p>
          <p>
            <FaMap className="icon" />
            {discount}
          </p>
        </div>
        <h4>starts on : start</h4>
        <h4>duration : 5 days</h4>
        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
          dignissimos!
        </p>
        <h2>daily schedule</h2>
      </div>
      <Link to="/tours" className="btn-primary">
        Back to Tours
      </Link>
    </ProductDetailsWrapper>
  );
};

const ProductDetailsWrapper = styled.div`
  padding: 4rem 0;

  .center {
    width: 80vw;
    margin: 0 auto;
  }

  .images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    margin-bottom: 2rem;
  }

  .image {
    box-shadow: ${styles.lightShadow};
  }

  h2 {
    text-transform: capitalize;
    letter-spacing: ${styles.letterSpacing};
    margin-bottom: 1rem;
    margin: 2rem 0;
  }

  h4 {
    text-transform: capitalize;
  }

  .info {
    display: flex;
    flex-wrap: wrap;

    p {
      display: flex;
      align-items: center;
      margin-right: 2rem;
      text-transform: capitalize;
    }
  }

  .description {
    line-height: 2;
  }

  @media (min-width: 992px) {
    .description {
      width: 70vw;
    }
  }
  @media (min-width: 1200px) {
    .center {
      width: 95vw;
      max-width: 1170vw;
    }
    .images {
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      grid-column-gap: 50px;
    }
  }
`;

export default ProductDetails;
