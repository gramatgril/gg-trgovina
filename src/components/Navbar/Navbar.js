import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import NavbarHeader from './NavbarHeader';
import NavbarIcons from './NavbarIcons';
import NavbarLinks from './NavbarLinks';

const getInfo = graphql`
  query {
    site {
      siteMetadata {
        contactInfo {
          phone
          phoneSecondary
          mail
          stilUrl
        }
      }
    }
  }
`;

const Navbar = () => {
  const { site } = useStaticQuery(getInfo);
  const { phone, mail, stilUrl, phoneSecondary } = site.siteMetadata.contactInfo;
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <TopRow>
        <p>{mail}</p>
        <div>
          <p>Grosuplje: {phone} </p>
          <p> Dolenjske Toplice: {phoneSecondary}</p>
        </div>
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
  box-shadow: 0 0.5px 0 0 #ffffff inset, 0 1px 2px 0 #b3b3b3;

  ${TopRow} {
    height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1.5rem;
    align-items: flex-end;
    background: ${({ theme }) => theme.primary[500]};
    color: ${({ theme }) => theme.primary[100]};

    p {
      text-align: right;
      font-size: 0.75rem;
      white-space: nowrap;
    }
  }

  ${BottomRow} {
    min-height: 6rem;
    background: ${({ theme }) => theme.grey[100]};
  }

  /* === DESKTOP === */
  @media (min-width: 1200px) {
    ${TopRow} {
       flex-direction: row;
      justify-content: flex-end;
      align-items:  flex-end;

      p {
        text-align: right;
        font-size: 1.25rem;
        margin: 0 1rem;
        white-space: nowrap;
      }
    }

    ${BottomRow} {
      padding: 0 2rem;
      width: 100%;
      display: flex;
      justify-content: space-center;
      align-items: center;
    }
  }
`;
