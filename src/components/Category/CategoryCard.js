import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import styled from "styled-components";

const propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.shape({
    fluid: PropTypes.object.isRequired,
  }).isRequired,
};

const CategoryCard = ({ title, slug, image }) => (
  <Wrapper>
    <Link to={`/${slug}`}>
      <StyledImage>
        <Img fluid={image.fluid} alt="category" className="img" />
        <StyledTitleBox>{title}</StyledTitleBox>
      </StyledImage>
    </Link>
  </Wrapper>
);

CategoryCard.propTypes = propTypes;

export default CategoryCard;

const StyledImage = styled.div`
  position: relative;
  background: ${({ theme }) => theme.white};
  height: 280px;

  .img {
    transition: ${({ theme }) => theme.linear};
  }
`;

const StyledTitleBox = styled.div`
  border-radius: 5px;
  font-weight: 500;
  width: 80%;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  letter-spacing: 1.8px;
  color: ${({ theme }) => theme.green};
  background: ${({ theme }) => theme.white};
  padding: 0.5rem;
  display: inline-block;
  transition: ${({ theme }) => theme.linear};
`;

const Wrapper = styled.div`
  &:hover {
    ${StyledTitleBox} {
      color: ${({ theme }) => theme.white};
      background: ${({ theme }) => theme.green};
    }

    .img {
      opacity: 0.8;
    }
  }
`;
