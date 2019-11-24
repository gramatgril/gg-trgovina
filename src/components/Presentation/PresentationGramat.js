import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Title from '../Title';

const query = graphql`
  query {
    imageGramat: file(relativePath: { eq: "gg_photo_close.jpg" }) {
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
      {/*//? Gramat  Presentation */}
      <StyledRow top>
        <StyledImage>
          <Img fluid={imageGramat.image.fluid} className="img" />
        </StyledImage>
        <StyledText top>
          <h2>Trgovina z gradbenim materialom</h2>
          <p>
            Podjetje Gramat Gril že z dolgoletno tradicijo in predanostjo zagotavlja pestro ponudbo{' '}
            <strong>
              gradbenega materiala, orodja, železnine, kopalniške opreme, vodovodnega in elektromateriala, keramike,
              talnih oblog, stavbnega pohištva, izdelkov za vrt
            </strong>{' '}
            ter ostalega. Od samega začetka se v podjetju zavedamo, da ste za naš razvoj zelo pomemben dejavnik prav vi,
            končni kupci, ki svoje izdelke vključujete v svoj bivalni prostor. V želji, da bi vam bili naši izdelki bolj
            dostopni, so vam na voljo dve trgovini , in sicer v <strong>Grosuplju</strong> ter v{' '}
            <strong>Dolenjskih toplicah</strong>. Na obeh lokacijah se ponašamo tako s kakovostno ponudbo, kot
            prijaznostjo in strokovnostjo prodajnih svetovalcev.
          </p>
        </StyledText>
      </StyledRow>
      {/*//? Stil Presentation */}
      <StyledRow>
        <StyledText>
          <h2>Salon keramičnih ploščic STIL by Gramat Gril</h2>
          <p>
            Širina prodajnega programa se razteza vse od gradbenega materiala do talnih oblog ter vse za kopalnico kar
            najdete v salonu <strong>Stil by Gramat Gril</strong>. Pri nas si lahko ogledate pestro ponudbo{' '}
            <strong>keramičnih ploščic</strong>. Poleg tega lahko izbirate med različnimi dizajni{' '}
            <strong>
              sanitarne keramike, kopalniških ali kuhinjskih armatur, tuš kabin, kopalniškega pohištva in ostale
              kopalniške opreme.{' '}
            </strong>
            S predstavitvijo ambientov kopalnic, panojev, vzorcev, katalogov in profesionalnih prikazov se lahko
            seznanite s številnimi priznanimi italijanskimi proizvajalci keramičnih ploščic srednjega in višjega
            cenovnega razreda ter preostalo raznolikostjo naše ponudbe. Poseben poudarek pa dajemo osebnemu pristopu,
            saj so vam strokovni nasveti naših prodajalcev vedno na voljo.
          </p>
          <p>
            Obiščite salon na naslovu{' '}
            <a className="link" href="https://gramat-gril.si/">
              gramat-gril.si
            </a>{' '}
          </p>
        </StyledText>
        <StyledImage>
          <Img fluid={imageStil.image.fluid} className="img" />
        </StyledImage>
      </StyledRow>
    </Wrapper>
  );
};

export default PresentationGramat;

const StyledImage = styled.div``;
const StyledRow = styled.div`
  flex-flow: ${({ top }) => (top ? `column-reverse` : `column`)};

  @media (min-width: 768px) {
    grid-template-columns: ${({ top }) => (top ? `2fr 3fr` : `3fr 2fr`)};
  }
`;

const StyledText = styled.article`
  @media (min-width: 768px) {
    padding: ${({ top }) => (top ? `0 0 0 3rem` : `0 3rem 0 0`)};
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 3rem 0;
  background: ${({ theme }) => theme.grey[100]};

  .link {
    color: ${({ theme }) => theme.green};

    &:hover {
      opacity: 0.7;
    }
  }

  ${StyledRow} {
    display: flex;
    margin: 0 auto;
    padding: 3rem 0;
    width: 90vw;
  }

  ${StyledImage} {
    height: 400px;
    width: auto;
    box-shadow: ${({ theme }) => theme.deepBoxShadow};
  }

  ${StyledText} {
    text-align: left;

    h2 {
      padding: 0 0 1rem 0;
      text-align: left;
    }

    p {
      padding: 0 0 2rem 0;
    }
  }

  @media (min-width: 768px) {
    ${StyledRow} {
      display: grid;
      width: 90vw;
      padding: 3rem 0 5rem;
    }
  }

  @media (min-width: 1200px) {
    ${StyledRow} {
      width: 60vw;
    }
  }
`;
