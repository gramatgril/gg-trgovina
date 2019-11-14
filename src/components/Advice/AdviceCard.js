import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  advice: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    shortDesc: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.shape({
      fluid: PropTypes.object.isRequired
    }).isRequired
  }).isRequired
};

const AdviceCard = ({ advice }) => {
  const { title, slug, shortDesc, image, date } = advice;

  return (
    <Wrapper>
      <Link to={`/nasveti-in-ideje/${slug}`} className="link">
        <StyledCard>
          <StyledImage>
            <Img fluid={image.fluid} alt="advice" className="img" imgStyle={{ objectFit: 'cover' }} />
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

const StyledCard = styled.div``;
const StyledDate = styled.p``;
const StyledDescription = styled.div``;
const StyledImage = styled.div``;

const Wrapper = styled.div`
  margin: 1rem auto;
  /* padding: 1rem 0; */
  width: 90%;
  overflow: hidden;
  border-radius: 12px;
  background: ${({ theme }) => theme.grey[100]};

  ${StyledCard} {
    display: block;
    transition: ${({ theme }) => theme.linear};

    :hover {
      background: ${({ theme }) => theme.primary[100]};
      h2 {
        color: ${({ theme }) => theme.primary[500]};
      }

      ${StyledImage} {
        opacity: 0.8;
      }
    }
  }

  ${StyledImage} {
    transition: ${({ theme }) => theme.linear};
    margin: 0 auto;
    position: relative;
    height: 200px;
    width: 300px;
  }

  ${StyledDate} {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.white};
    position: absolute;
    left: 0%;
    top: 0%;
    background: ${({ theme }) => theme.primary[500]};
    padding: 0.3rem 1rem;
  }

  ${StyledDescription} {
    text-align: center;
    width: 100%;
    padding: 2rem 0;

    h2 {
      transition: ${({ theme }) => theme.linear};
      color: ${({ theme }) => theme.grey[900]};
      text-transform: capitalize;
      letter-spacing: 2px;
      margin-bottom: 1rem;
      font-weight: 500;
    }

    h4 {
      color: ${({ theme }) => theme.grey[900]};
      font-weight: 400;
    }
  }

  @media (min-width: 576px) {
    padding: 0;
    ${StyledCard} {
      display: flex;
      justify-content: flex-start;

      ${StyledDescription} {
        text-align: left;
        padding: 1rem 2rem;
      }
    }
  }

  @media (min-width: 1200px) {
    ${StyledCard} {
      width: 100%;
    }
  }
`;
