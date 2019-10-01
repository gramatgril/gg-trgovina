import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import styled from "styled-components";

import { styles } from "../../styles";

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
        <StyledCard>
          <StyledImage>
            <Img
              fluid={image.fluid}
              alt="advice"
              className="img"
              imgStyle={{ objectFit: "cover" }}
            />
            <StyledDate>{date}</StyledDate>
          </StyledImage>
          <StyledDescription>
            <h2>{title}</h2>
            <h4>{shortDesc}</h4>
          </StyledDescription>
        </StyledCard>
      </Link>
    </Wrapper>
  );
};

AdviceCard.propTypes = propTypes;

export default AdviceCard;

const Wrapper = styled.div`
  padding: 2rem 0;
`;

const StyledImage = styled.div`
  transition: ${styles.linear};
  margin: 0 auto;
  align-self: left;
  position: relative;
  height: 200px;
  width: 300px;
`;

const StyledDate = styled.p`
  font-size: 1.2rem;
  color: ${styles.colors.white};
  position: absolute;
  left: 0%;
  top: 0%;
  background: ${styles.colors.green};
  padding: 0.3rem 1rem;
`;

const StyledDescription = styled.div`
  text-align: center;
  width: 100%;
  padding: 2rem 0;

  h2 {
    transition: ${styles.linear};
    color: ${styles.colors.black};
    text-transform: capitalize;
    letter-spacing: 2px;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  h4 {
    color: ${styles.colors.black};
    font-weight: 400;
  }
`;

const StyledCard = styled.div`
  display: block;

  :hover {
    h2 {
      transition: ${styles.linear};
      color: ${styles.colors.green};
    }

    ${StyledImage} {
      transition: ${styles.linear};
      opacity: 0.8;
    }
  }

  @media (min-width: 576px) {
    display: flex;
    justify-content: flex-start;

    ${StyledDescription} {
      text-align: left;
      padding: 0 2rem;
    }
  }

  @media (min-width: 1200px) {
    width: 100%;
  }
`;
