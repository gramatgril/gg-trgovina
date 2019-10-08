import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

import { styles } from "../../styles";
import { navLinks } from "./../../styles/links";

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  stilUrl: PropTypes.string.isRequired,
};

const NavbarLinks = ({ isOpen, stilUrl }) => {
  return (
    <Wrapper isOpen={isOpen}>
      {navLinks.map(({ id, path, name, color }) => (
        <li key={id}>
          <StyledLink to={path} activeClassName="active" color={color}>
            {name}
            <StyledActiveBar />
          </StyledLink>
        </li>
      ))}
      {/* Shows anchor only when display is mobile. */}
      <StyledAnchor href={stilUrl} target="_blank" rel="noopener noreferrer">
        STIL by gramat gril
      </StyledAnchor>
    </Wrapper>
  );
};

NavbarLinks.propTypes = propTypes;

export default NavbarLinks;

const StyledActiveBar = styled.div`
  height: 3px;
`;

const StyledLink = styled(Link)`
  /* Mobile style */
  display: block;
  text-decoration: none;
  font-family: "Montserrat";
  font-weight: 700;
  padding: 0.3rem 0;
  letter-spacing: 1px;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;

  color: ${({ color }) =>
    color === "red" ? `${styles.colors.red}` : `${styles.colors.black}`};

  /* Desktop style */
  @media (min-width: 900px) {
    padding: 0.8rem 0.5rem 0.5rem 1rem;
    letter-spacing: 1.5px;

    :hover {
      padding: 0.8rem 0.5rem 0.5rem 1rem;

      ${StyledActiveBar} {
        background: ${styles.colors.green};
      }
    }
  }

  @media (min-width: 1300px) {
    font-size: 1.4rem;
  }
`;

const StyledAnchor = styled.a`
  display: block;
  text-decoration: none;
  font-family: "Montserrat";
  font-weight: 700;
  padding: 0.3rem 0;
  letter-spacing: 1px;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;

  :visited,
  :active {
    color: inherit;
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

const Wrapper = styled.ul`
  /* Mobile */
  text-align: center;
  height: ${({ isOpen }) => (isOpen ? "180px" : "0px")};
  overflow: hidden;
  transition: ${styles.easeInOut};

  /* Desktop */
  @media (min-width: 900px) {
    height: auto;
    display: flex;
    margin: 0 auto;

    /* Styling applied when link is active */
    .active {
      ${StyledActiveBar} {
        background: ${styles.colors.green};
      }
    }
  }
`;
