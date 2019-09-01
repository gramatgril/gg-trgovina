import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Link } from "gatsby";

import { styles } from "../../utils";

const CategoryCard = ({ title, slug, image }) => {
  return (
    <CardWrapper>
      <Link to={`/${slug}`}>
        <div className="img-container">
          <Img fluid={image.fluid} alt="category" className="img" />
          <div className="title-box">{title}</div>
        </div>
      </Link>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
  transition: all 0.1s linear;

  :hover {
    box-shadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);

    .title-box {
      opacity: 1;
    }
  }

  .img {
    height: 300px;
    transition: all 0.3s linear;
  }

  .title-box {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 150%);
    opacity: 0.8;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: ${styles.colors.mainGreen};
    border: 2px solid ${styles.colors.mainGreen};
    background: ${styles.colors.mainWhite};
    padding: 0.5rem 0.7rem;
    display: inline-block;
    transition: all 0.3s linear;
    cursor: pointer;
  }

  .img-container {
    position: relative;
    background: ${styles.colors.mainWhite};
    transition: all 0.3s linear;

    :hover .img {
      opacity: 0.5;
    }

    :hover .link {
      opacity: 1;
    }
  }
`;

export default CategoryCard;
