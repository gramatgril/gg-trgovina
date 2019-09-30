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
  }
`;

const PresentationGramat = () => {
  const { imageGramat, imageStil } = useStaticQuery(query);

  return (
    <Wrapper>
      <Title title="obiščite" subtitle="nas" />
      <StyledRow top>
        {/*//? Gramat  Presentation */}

        <StyledImage>
          <Img fluid={imageGramat.image.fluid} className="img" />
        </StyledImage>
        <StyledText top>
          <h2>Trgovina z gradbenim materialom</h2>
          <p>
            Tradicija podjetništva v družini Gril sega v leto 1967. Takrat sta
            Ana in August Gril odprla obrtno delavnico za izdelavo cementnih
            izdelkov. Leta 1989 sta jo reorganizirala v podjetje GRAMAT GRIL
            d.o.o. ter odprla trgovino z gradbenim materialom in keramiko. Leta
            2009 je podjetje prevzel sin Peter Gril. Danes gradbeni oddelek ter
            salon keramike in kopalniške opreme na 700m2 svojim kupcem nudi
            celovito ponudbo materiala za kopalnice.
          </p>
        </StyledText>
      </StyledRow>
      {/*//? Stil Presentation */}

      <StyledRow>
        <StyledText>
          <h2>Salon keramičnih ploščic STIL</h2>
          <p>
            V našem salonu keramike STIL by Gramat Gril nudimo široko izbiro
            keramičnih ploščic, sanitarne keramike, armatur, tuš kabin,
            kopalniškega pohištva in ostale kopalniške opreme. Zastopamo
            številne priznane italijanske proizvajalce keramičnih ploščic
            srednjega in višjega cenovnega razreda, ki si jih lahko v živo
            ogledate v našem salonu. Del vsake kopalnice je tudi sanitarna
            keramika: wc školjka, umivalnik, tuš kad in kopalna kad.
          </p>
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

// TODO: Get text and move it to siteMetaData

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
