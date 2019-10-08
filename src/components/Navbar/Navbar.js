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
          stilUrl
        }
      }
    }
  }
`;

const Navbar = () => {
  const { site } = useStaticQuery(getInfo);
  const { phone, mail, stilUrl } = site.siteMetadata.contactInfo;

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <StyledTopBar>
        <p>{mail}</p>
        <p>{phone}</p>
      </StyledTopBar>
      {/* Breakpoint is 900px. Header shows menu icon, Links go from flex to block and Icon is hidden */}
      <StyledMainBar>
        <NavbarHeader toggleOpen={toggleOpen} />
        <NavbarLinks isOpen={isOpen} stilUrl={stilUrl} />
        <NavbarIcons />
      </StyledMainBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: ${styles.boxShadow};
`;

const StyledMainBar = styled.div`
  padding: 0;
  @media (min-width: 900px) {
    padding: 0.2rem 1rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${styles.colors.green};
  color: ${styles.colors.white};

  p {
    letter-spacing: 2px;
    font-size: 0.9rem;
    padding: 0.5rem 0;
  }

  @media (min-width: 768px) {
    justify-content: flex-end;

    p {
      align-items: center;
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
      letter-spacing: 1px;
    }
  }
`;

export default Navbar;
