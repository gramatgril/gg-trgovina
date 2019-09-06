import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

import { styles } from "../../utils";

const ProductCard = ({ product }) => {
  const { price, slug, title, discount, image, category, promo } = product;

  return (
    <ProductCardWrapper>
      <Link className="link" to={`/${category.slug}/${slug}`}>
        <div className="img-container">
          <Img fluid={image.fluid} className="img" />
          <h4 className="discount">{discount}%</h4>
          {promo && <h4 className="promo">Promocija</h4>}
        </div>
        <div className="footer">
          <h4>{title}</h4>
          <h4>{price} €</h4>
        </div>
      </Link>
    </ProductCardWrapper>
  );
};

const ProductCardWrapper = styled.article`
  background: ${styles.colors.white};
  /* box-shadow: ${styles.lightShadow}; */
  transition: ${styles.linearTransition};
  /* border: 1px solid black; */


  :hover {
    /* box-shadow: ${styles.darkShadow}; */
  }

  .img-container {
    position: relative;
    background: ${styles.colors.white};
    transition: ${styles.linearTransition};
    :hover {
      opacity: 0.6;
    }
  }

  .img {
    max-height: 300px;
  }

  .discount {
    color: ${styles.colors.white};
    position: absolute;
    left: 0%;
    top: 80%;
    background: red;
    padding: 0.3rem 0.5rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  .promo{
    color: ${styles.colors.white};
    transform: rotate(45deg);
    position: absolute;
    left: 80%;
    top: 0%;
    background: red;
    padding: 0.3rem 0.5rem;
    border-radius: 3rem;
  }

  .link {
    text-decoration: none;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    text-align: left;

    h4 {
      color: ${styles.colors.black};
      font-size: 1.5rem;
      font-weight: 500;
      text-transform: capitalize;
      margin-bottom: 0;
    }
  }
`;

export default ProductCard;
