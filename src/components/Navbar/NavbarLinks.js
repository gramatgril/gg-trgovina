import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { navLinks } from './../../styles/links';

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  stilUrl: PropTypes.string.isRequired
};

const NavbarLinks = ({ isOpen, stilUrl }) => (
  <Wrapper isOpen={isOpen}>
    {navLinks.map(({ id, path, name, accent }) => (
      <li key={id}>
        <NavLink to={path} activeClassName="active" accent={accent}>
          <h2>{name}</h2>
        </NavLink>
      </li>
    ))}
    {/* Shows anchor only when display is mobile. */}
    <StilLink href={stilUrl} target="_blank" rel="noopener noreferrer">
      <h2>STIL by gramat gril </h2>
    </StilLink>
  </Wrapper>
);

NavbarLinks.propTypes = propTypes;

export default NavbarLinks;

const NavLink = styled(Link)`
  /* Link is different color if it provides accent prop */
  color: ${({ accent, theme }) => (accent ? theme.red : theme.primary[900])};
`;
const StilLink = styled.a``;

const Wrapper = styled.ul`
  /* === MOBILE === */
  z-index: 1;
  white-space: nowrap;
  text-align: center;
  height: ${({ isOpen }) => (isOpen ? '200px' : '0px')};
  overflow: hidden;
  transition: ${({ theme }) => theme.easeInOut};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  ${NavLink},
  ${StilLink} {
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;

    h2 {
      font-weight: 400;
    }
  }

  ${StilLink} {
    color: ${({ theme }) => theme.grey[900]};
    :visited,
    :active {
      color: inherit;
    }

    @media (min-width: 900px) {
      display: none;
    }
  }

  /*  === DESKTOP === */
  @media (min-width: 900px) {
    box-shadow: none;
    position: inherit;
    height: auto;
    display: flex;
    margin: 0 auto;
    flex-direction: row;

    ${NavLink} {
      padding: 0 1rem;
      letter-spacing: 1.2px;

      h2 {
        font-weight: 600;
      }

      &:after {
        content: '';
        display: block;
        background: ${({ theme }) => theme.grey[100]};
        border-radius: 4px;
        height: 3px;
        width: 100%;
      }

      &:hover {
        padding: 0 1rem;
        color: ${({ theme }) => theme.primary[500]};
      }
    }
    /* Styling applied when link is active */
    .active {
      &:after {
        background: ${({ theme }) => theme.primary[300]};
      }
    }
  }
`;
