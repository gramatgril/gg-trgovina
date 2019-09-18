import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import { styles } from "../../utils";

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
    <StyledNavbar>
      <div className="top-bar">
        <p>{mail}</p>
        <p>{phone}</p>
      </div>
      <div className="main-bar">
        <NavbarHeader toggleOpen={toggleOpen} />
        <NavbarLinks isOpen={isOpen} />
        <NavbarIcons />
      </div>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  background: ${styles.colors.white};
  box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.2);

  .top-bar {
    display: flex;
    justify-content: flex-end;
    background: ${styles.colors.green};
    color: ${styles.colors.white};

    p {
      align-items: center;
      font-size: 1rem;
      padding: 0.1rem 0.5rem;
      letter-spacing: 1px;
    }
  }

  @media (max-width: 768px) {
    .top-bar {
      justify-content: space-between;
    }

    p {
      padding: 0.5rem 2rem;
      letter-spacing: 2px;
    }
  }

  @media (min-width: 768px) {
    .main-bar {
      padding: 0.2rem 0;
      width: 100vw;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  @media (min-width: 1200px) {
    .main-bar {
      width: 80vw;
    }
  }
`;

export default Navbar;
