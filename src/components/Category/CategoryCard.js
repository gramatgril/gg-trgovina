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

  :hover {
    .title-box {
      opacity: 1;
    }
  }

  .img {
    height: 300px;
    transition: ${styles.linearTransition};
  }

  .title-box {
    width: 80%;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    letter-spacing: 4px;
    color: ${styles.colors.green};
    border: 2px solid ${styles.colors.green};
    background: ${styles.colors.white};
    padding: 0.5rem 0.7rem;
    display: inline-block;
    transition: ${styles.linearTransition};
    cursor: pointer;
  }

  .img-container {
    position: relative;
    background: ${styles.colors.white};
    transition: ${styles.linearTransition};

    :hover .img {
      opacity: 0.5;
    }

    :hover .link {
      opacity: 1;
    }
  }
`;

export default CategoryCard;
