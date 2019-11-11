import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

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
      <TopRow>
        <p>{mail}</p>
        <p>{phone}</p>
      </TopRow>
      {/* Breakpoint is 900px. Header shows menu icon, Links go from flex to block and Icon is hidden */}
      <BottomRow>
        <NavbarHeader toggleOpen={toggleOpen} isOpen={isOpen} />
        <NavbarLinks isOpen={isOpen} stilUrl={stilUrl} />
        <NavbarIcons />
      </BottomRow>
    </Wrapper>
  );
};

export default Navbar;

const BottomRow = styled.div``;
const TopRow = styled.div``;

const Wrapper = styled.header`
  /* === MOBILE === */
  box-shadow: ${({ theme }) => theme.boxShadow};

  ${TopRow} {
    height: 3rem;
    display: flex;
    justify-content: space-between;
    padding: 0 1.5rem;
    align-items: center;
    background: ${({ theme }) => theme.primary[500]};
    color: ${({ theme }) => theme.primary[100]};

    p {
      white-space: nowrap;
    }
  }

  ${BottomRow} {
    min-height: 6rem;
  }

  /* === DESKTOP === */
  @media (min-width: 900px) {
    ${TopRow} {
      justify-content: flex-end;

      p {
        align-items: center;
        font-size: 1.5rem;
        margin: 0 1rem;
        white-space: nowrap;
      }
    }

    ${BottomRow} {
      padding: 0 2rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
