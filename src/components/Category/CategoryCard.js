import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Link } from "gatsby";

import { styles } from "../../utils";

const CategoryCard = ({ title, slug, image }) => {
  return (
    <Wrapper>
      <Link to={`/${slug}`}>
        <div className="img-container">
          <Img fluid={image.fluid} alt="category" className="img" />
          <div className="title-box">{title}</div>
        </div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  transition: ${styles.transition({ time: "0.1s", type: "linear" })};

  .img {
    height: 280px;
    /* transition: ${styles.linearTransition}; */
  }

  :hover {
      .title-box {
        border: 2px solid ${styles.colors.green};
        transition: ${styles.linearTransition};
        color: ${styles.colors.white};
        background: ${styles.colors.green};
      }
  }

  .title-box {
    width: 80%;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    letter-spacing: 1.8px;
    color: ${styles.colors.green};
    border: 2px solid ${styles.colors.green};
    background: ${styles.colors.white};
    padding: 0.5rem;
    display: inline-block;
    transition: ${styles.linearTransition};
  }

  .img-container {
    position: relative;
    background: ${styles.colors.white};
    transition: ${styles.linearTransition};
  }
`;

export default CategoryCard;
