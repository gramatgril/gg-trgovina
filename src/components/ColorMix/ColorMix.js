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
  }
`;

const ColorMix = () => {
  const { caparol } = useStaticQuery(query);

  return (
    <Wrapper>
      <Title title="mešalnica" subtitle="barv" />
      <StyledContainer>
        <StyledDescription>
          <p>
            Sončno rumena, klasično bela ali karibsko modra? Barvni ton stenske
            barve ali barva fasade naj bo točno po vaših željah. To lahko
            dosežemo le z mešanjem različnih barv in nians. V mešalnici barv v
            Gramat Grilu d.o.o. vedno dopolnjujemo ponudbo barv in materialov,
            ter vam tako omogočamo pripravo vašega želenega odtenka.
          </p>
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
