import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import { Container } from "../../styles";
import Title from "./../Title";

const query = graphql`
  query {
    caparol: file(relativePath: { eq: "caparol.jpg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    site {
      siteMetadata {
        presentation {
          colorMix
        }
      }
    }
  }
`;

const ColorMix = () => {
  const { caparol, site } = useStaticQuery(query);
  const { colorMix } = site.siteMetadata.presentation;

  return (
    <Wrapper>
      <Title title="mešalnica" subtitle="barv" />
      <StyledContainer>
        <StyledDescription>
          <p>{colorMix}</p>
        </StyledDescription>
        <StyledImage>
          <Img
            fluid={caparol.image.fluid}
            className="img"
            imgStyle={{ objectFit: "contain" }}
          />
        </StyledImage>
      </StyledContainer>
    </Wrapper>
  );
};

export default ColorMix;

const Wrapper = styled.article`
  background: ${({ theme }) => theme.white};
  padding: 3rem 0;
`;

const StyledContainer = styled(Container)`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const StyledDescription = styled.div`
  @media (min-width: 768px) {
    p {
      margin-top: 5rem;
    }
  }
`;

const StyledImage = styled.div`
  height: auto;
  width: 200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 600px;
  }
`;
