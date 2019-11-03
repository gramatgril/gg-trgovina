import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import logo from "../../images/stil_logo.png";

const getData = graphql`
  query {
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
  const { url } = useStaticQuery(getData);

  return (
    <Wrapper>
      <a
        href={url.siteMetadata.contactInfo.stilUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logo} alt="logo" className="img" />
      </a>
    </Wrapper>
  );
};

export default NavbarIcons;

const Wrapper = styled.div`
  margin-left: 3rem;
  display: none;
  width: 106.2px;
  height: 60px;

  @media (min-width: 900px) {
    display: block;
  }
`;
