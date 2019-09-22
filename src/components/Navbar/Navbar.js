import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import { styles } from "../../styles";

import NavbarHeader from "./NavbarHeader";
import NavbarIcons from "./NavbarIcons";
import NavbarLinks from "./NavbarLinks";

const getInfo = graphql`
  query {
    site {
      siteMetadata {
        contactInfo {
          phone
          mail
        }
      }
    }
  }
`;

const Navbar = () => {
  const { site } = useStaticQuery(getInfo);
  const { phone, mail } = site.siteMetadata.contactInfo;

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <StyledTopBar>
        <p>{mail}</p>
        <p>{phone}</p>
      </StyledTopBar>
      <StyledMainBar>
        <NavbarHeader toggleOpen={toggleOpen} />
        <NavbarLinks isOpen={isOpen} />
        <NavbarIcons />
      </StyledMainBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${styles.colors.white};
  box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.2);
`;

const StyledTopBar = styled.div`
  display: flex;
  justify-content: flex-end;
  background: ${styles.colors.green};
  color: ${styles.colors.white};

  p {
    align-items: center;
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    letter-spacing: 1px;
  }

  @media (max-width: 768px) {
    justify-content: space-between;

    p {
      letter-spacing: 2px;
    }
  }
`;

const StyledMainBar = styled.div`
  padding: 0;
  @media (min-width: 768px) {
    padding: 0.2rem 1rem;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 7fr 1fr;
    align-items: center;
  }

  @media (min-width: 1200px) {
    /* width: 90vw; */
  }
`;

export default Navbar;
