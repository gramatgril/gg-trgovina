import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import styled from "styled-components";

import { styles } from "../../styles";

const propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.shape({
    fluid: PropTypes.object.isRequired,
  }).isRequired,
};

const CategoryCard = ({ title, slug, image }) => {
  return (
    <Wrapper>
      <Link to={`/${slug}`}>
        <StyledImage>
          <Img fluid={image.fluid} alt="category" className="img" />
          <StyledTitleBox>{title}</StyledTitleBox>
        </StyledImage>
      </Link>
    </Wrapper>
  );
};

CategoryCard.propTypes = propTypes;

export default CategoryCard;

const StyledImage = styled.div`
  position: relative;
  background: ${styles.colors.white};
  border: ${styles.colors.white};
  height: 280px;
`;

const StyledTitleBox = styled.div`
  width: 80%;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  letter-spacing: 1.8px;
  color: ${styles.colors.green};
  background: ${styles.colors.white};
  padding: 0.5rem;
  display: inline-block;
  transition: ${styles.linear};
`;

const Wrapper = styled.div`
  transition: ${styles.linear};

  :hover ${StyledTitleBox} {
    color: ${styles.colors.white};
    background: ${styles.colors.green};
  }
`;
