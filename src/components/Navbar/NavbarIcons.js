import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

// import { styles } from "../../styles";

const getData = graphql`
  query {
    logo: file(relativePath: { eq: "stil_logo.png" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    url: site {
      siteMetadata {
        contactInfo {
          stilUrl
        }
      }
    }
  }
`;

const NavbarIcons = () => {
  const { logo, url } = useStaticQuery(getData);

  return (
    <Wrapper>
      <a
        href={url.siteMetadata.contactInfo.stilUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          fluid={logo.image.fluid}
          alt="Logo"
          className="img"
          imgStyle={{ objectFit: "contain" }}
        />
      </a>
    </Wrapper>
  );
};

export default NavbarIcons;

const Wrapper = styled.div`
  display: none;
  height: 60px;

  @media (min-width: 768px) {
    /* width: 10rem; */
    display: block;
  }
`;
