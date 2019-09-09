import React from "react";
import { Link } from "gatsby";
import { FaPercent } from "react-icons/fa";
import styled from "styled-components";
import Img from "gatsby-image";

import { styles } from "../../utils";

const ProductCard = ({ product }) => {
  const { price, slug, title, image, category, promo } = product;

  return (
    <ProductCardWrapper>
      <Link className="link" to={`/${category.slug}/${slug}`}>
        <div className="header">
          <h4>{title}</h4>
        </div>
        <div className="img-container">
          <Img fluid={image.fluid} className="img" />
          <h4 className="discount">{price} €</h4>
          {promo && (
            <h4 className="promo">
              <FaPercent />
            </h4>
          )}
        </div>
        {/* <div className="footer"> */}
        {/* <h4></h4> */}
        {/* <h4>{price} €</h4> */}
        {/* </div> */}
      </Link>
    </ProductCardWrapper>
  );
};

const ProductCardWrapper = styled.article`
  background: ${styles.colors.offWhite};
  transition: ${styles.linearTransition};
  /* border: 1px solid ${styles.colors.green}; */

  :hover {
    /* border: 1px solid ${styles.colors.green}; */

    .header {
      /* background: ${styles.colors.green}; */
      h4 {
        /* color: ${styles.colors.white}; */
      }
    }
    .img-container {
      opacity: 0.5;
    }
  }

  .header {
    transition: ${styles.linearTransition};
    padding: 0.8rem;
    text-align: left;
    background: ${styles.colors.white};
    h4 {
      color: ${styles.colors.grey};
      font-size: 1.5rem;
      font-weight: 300;
      text-transform: capitalize;
      margin-bottom: 0;
    }
  }

  .img-container {
    position: relative;
    background: ${styles.colors.white};
    transition: ${styles.linearTransition};
  }

  .img {
    height: 300px;
  }

  .discount {
    font-size: 1.5rem;
    color: ${styles.colors.white};
    position: absolute;
    left: 0%;
    top: 75%;
    background: ${styles.colors.green};
    padding: 0.3rem 1rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  .promo {
    font-size: 20px;
    color: ${styles.colors.white};
    /* transform: rotate(45deg); */
    position: absolute;
    left: 90%;
    top: 5%;
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
      color: ${styles.colors.green};
      font-size: 1.5rem;
      font-weight: 500;
      text-transform: capitalize;
      margin-bottom: 0;
    }
  }
`;

export default ProductCard;
