import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

import { styles, Container } from "../../styles";
import Title from "../Title";
import GoogleMap from "./../GoogleMap/GoogleMap";

const query = graphql`
  query {
    imageGramat: file(relativePath: { eq: "PresentationGramat.jpg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    imageStil: file(relativePath: { eq: "PresentationStil.jpg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    site {
      siteMetadata {
        presentation {
          gramatText
          gramatTitle
          stilText
          stilTitle
        }
      }
    }
  }
`;

const PresentationGramat = () => {
  const { imageGramat, imageStil, site } = useStaticQuery(query);

  const {
    gramatTitle,
    stilTitle,
    gramatText,
    stilText,
  } = site.siteMetadata.presentation;

  return (
    <Wrapper>
      <Title title="obiščite" subtitle="nas" />
      {/*//? Gramat  Presentation */}
      <StyledRow top>
        <StyledImage>
          <Img fluid={imageGramat.image.fluid} className="img" />
        </StyledImage>
        <StyledText top>
          <h2>{gramatTitle}</h2>
          <p>{gramatText}</p>
        </StyledText>
      </StyledRow>
      {/*//? Stil Presentation */}
      <StyledRow>
        <StyledText>
          <h2>{stilTitle}</h2>
          <p>{stilText}</p>
        </StyledText>
        <StyledImage>
          <Img fluid={imageStil.image.fluid} className="img" />
        </StyledImage>
      </StyledRow>
      <StyledMap>
        <GoogleMap />
      </StyledMap>
    </Wrapper>
  );
};

const StyledText = styled.div`
  text-align: justify;

  h2 {
    font-size: 1.3rem;
    padding: 0 0 1rem 0;
    text-align: left;
  }

  p {
    padding: 0 0 2rem 0;
  }

  /* Desktop */
  @media (min-width: 768px) {
    padding: ${({ top }) => (top ? `0 0 0 2rem` : `0 2rem 0 0`)};

    h2 {
      font-size: 1.5rem;
    }
  }
`;

const Wrapper = styled.div`
  padding: 2rem 0;
  background: ${styles.colors.offWhite};
`;

const StyledImage = styled.div`
  height: 300px;
  width: auto;
  box-shadow: ${styles.deepBoxShadow};
`;

const StyledRow = styled.div`
  /* Mobile */
  display: flex;
  flex-flow: ${({ top }) => (top ? `column-reverse` : `column`)};
  margin: 0 auto;
  padding: 2rem 0;
  width: 90vw;

  /* Desktop */
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: ${({ top }) => (top ? `1fr 2fr` : `2fr 1fr`)};
    padding: 2rem 0 5rem;
  }

  @media (min-width: 1200px) {
    width: 70vw;
  }
`;

const StyledMap = styled(Container)`
  @media (min-width: 1200px) {
    width: 70vw;
  }
`;

export default PresentationGramat;
