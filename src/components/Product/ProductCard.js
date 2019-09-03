import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

import { styles } from "../../utils";

const ProductCard = ({ product }) => {
  const { price, slug, title, discount, image, category } = product;

  return (
    <ProductCardWrapper>
      <div className="img-container">
        <Img fluid={image.fluid} className="img" />
        <Link className="link" to={`/${category.slug}/${slug}`}>
          Več
        </Link>
        <h4 className="price">Popust {discount}%</h4>
      </div>
      <div className="footer">
        <h4>{title}</h4>
        <h4>{price} €</h4>
      </div>
    </ProductCardWrapper>
  );
};

const ProductCardWrapper = styled.article`
  /* box-shadow: ${styles.lightShadow}; */
  transition: ${styles.linearTransition};
  border: 1px solid black;


  :hover {
    /* box-shadow: ${styles.darkShadow}; */
  }

  .img-container {
    position: relative;
    background: ${styles.colors.mainWhite};
    transition: ${styles.linearTransition}

    :hover .link {
      opacity: 1;
    }
  }

  .img {
    max-height: 300px;
    transition: ${styles.linearTransition}

    :hover {
      opacity: 0.3;
    }
  }

  .price {
    color: ${styles.colors.mainWhite};
    position: absolute;
    left: 0%;
    top: 75%;
    background: red;
    padding: 0.3rem 0.5rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  .link {
    text-decoration: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: ${styles.colors.mainWhite};
    border: 2px solid ${styles.colors.mainWhite};
    padding: 0.5rem 0.7rem;
    display: inline-block;
    transition: ${styles.linearTransition}
    cursor: pointer;

    :hover {
      background: ${styles.colors.mainWhite};
      color: ${styles.colors.mainGrey};
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    text-align: left;

    h4 {
      font-size: 1.5rem;
      font-weight: 500;
      text-transform: capitalize;
      margin-bottom: 0;
    }
  }
`;

export default ProductCard;
