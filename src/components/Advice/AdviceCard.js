import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Img from "gatsby-image";

import { styles } from "../../utils";

const AdviceCard = ({ advice }) => {
  const { title, slug, shortDesc, image, publishDate } = advice;
  return (
    <AdviceWrapper>
      <Link to={`/nasveti/${slug}`} className="link">
        <div className="center">
          <div className="img-container">
            <Img fluid={image.fluid} alt="advice" className="img" />
            <p className="date">{publishDate}</p>
          </div>
          <div className="desc">
            <h2>{title}</h2>
            <h4>{shortDesc}</h4>
          </div>
        </div>
      </Link>
    </AdviceWrapper>
  );
};

const AdviceWrapper = styled.div`
  margin: 1rem 0;
  background: ${styles.colors.offWhite};
  /* border: 1px solid ${styles.colors.green}; */

  .link {
    text-decoration: none;
  }

  .center {
    display: inline-block;


    :hover {
      h2 {
        color: ${styles.colors.green};
      }
    }
  }
  .img-container {
    align-self: left;
    position: relative;
  }

  .date {
    font-size: 1.5rem;
    color: ${styles.colors.white};
    position: absolute;
    left: 0%;
    top: 0%;
    background: ${styles.colors.green};
    padding: 0.3rem 1rem;
    /* border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem; */
  }

  .desc {
    width: 100%;
    padding: 2rem 2rem;
  }

  h2 {
    color: ${styles.colors.black};
    padding: 1rem 0;
    margin: 1rem 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }
  h4 {
    color: ${styles.colors.black};
    font-size: 0.8rem;
    font-weight:400;
    letter-spacing: ${styles.letterSpacing};
  }

  .link {
    text-decoration: none;
  }

  .img {
    height: 200px;
    width: 300px;
  }

  @media (min-width: 576px) {
    .center {
      width: 80vw;
      display: flex;
      justify-content: start;
    }
  }

  @media (min-width: 1200px) {
    .center {
      width: 80vw;
    }
  }
`;

export default AdviceCard;
