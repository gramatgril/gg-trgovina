import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import logo from '../../images/stil_logo.png';

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
      <a href={url.siteMetadata.contactInfo.stilUrl} target="_blank" rel="noopener noreferrer">
        <img src={logo} alt="logo" className="img" />
      </a>
    </Wrapper>
  );
};

export default NavbarIcons;

const Wrapper = styled.div`
  display: none;
  width: 7rem;
  height: 4rem;

  @media (min-width: 1200px) {
    display: block;
  }
`;
