import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import styled from "styled-components";

import { styles } from "../../utils";

const propTypes = {
  advice: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    shortDesc: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.shape({
      fluid: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};

const AdviceCard = ({ advice }) => {
  const { title, slug, shortDesc, image, date } = advice;

  return (
    <Wrapper>
      <Link to={`/nasveti-in-ideje/${slug}`} className="link">
        <div className="center">
          <div className="img-container">
            <Img
              fluid={image.fluid}
              alt="advice"
              className="img"
              imgStyle={{ objectFit: "contain" }}
            />
            <p className="date">{date}</p>
          </div>
          <div className="desc">
            <h2>{title}</h2>
            <h4>{shortDesc}</h4>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .link {
    text-decoration: none;
  }

  h2 {
    transition: ${styles.linearTransition};
  }

  .center {
    transition: ${styles.linearTransition};
    display: inline-block;

    :hover {
      h2 {
        transition: ${styles.linearTransition};
        color: ${styles.colors.green};
      }
      .img-container {
        transition: ${styles.linearTransition};
        opacity: 0.9;
      }
    }
  }

  .img-container {
    align-self: left;
    position: relative;
  }

  .img {
    height: 200px;
    width: 300px;
  }

  .date {
    font-size: 1.2rem;
    color: ${styles.colors.white};
    position: absolute;
    left: 0%;
    top: 0%;
    background: ${styles.colors.green};
    padding: 0.3rem 1rem;
  }

  .desc {
    text-align: center;
    width: 100%;
    padding: 2rem 0;
  }

  h2 {
    color: ${styles.colors.black};
    text-transform: capitalize;
    letter-spacing: 2px;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  h4 {
    color: ${styles.colors.black};
    font-size: 1rem;
    font-weight: 400;
  }

  .link {
    text-decoration: none;
  }

  @media (min-width: 576px) {
    .center {
      width: 80vw;
      display: flex;
      justify-content: start;
    }

    .desc {
      text-align: left;
      width: 100%;
      padding: 0 2rem;
    }
  }

  @media (min-width: 1200px) {
    .center {
      width: 70vw;
    }
  }
`;

AdviceCard.propTypes = propTypes;

export default AdviceCard;
