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

const StyledImage = styled.div``;

const StyledTitleBox = styled.div``;

const Wrapper = styled.div`
  ${StyledImage} {
    position: relative;
    background: ${({ theme }) => theme.white};
    height: 280px;

    .img {
      transition: ${({ theme }) => theme.linear};
    }
  }

  ${StyledTitleBox} {
    border-radius: 5px;
    font-weight: 500;
    width: 80%;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    letter-spacing: 1.8px;
    color: ${({ theme }) => theme.primary[500]};
    background: ${({ theme }) => theme.grey[100]};
    padding: 0.5rem;
    display: inline-block;
    transition: ${({ theme }) => theme.linear};
  }

  &:hover {
    ${StyledTitleBox} {
      color: ${({ theme }) => theme.grey[100]};
      background: ${({ theme }) => theme.primary[500]};
    }

    .img {
      opacity: 0.8;
    }
  }
`;
