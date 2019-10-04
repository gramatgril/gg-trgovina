import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

import { styles } from "../../styles";
import { navLinks } from "./../../styles/links";

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

const NavbarLinks = ({ isOpen }) => {
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
  font-family: "Nunito";
  font-weight: 500;
  padding: 0.5rem 1rem 0.5rem 1rem;
  letter-spacing: 1px;
  font-size: 1rem;
  text-transform: capitalize;
  cursor: pointer;
  transition: ${styles.easeInOut};

  color: ${({ color }) =>
    color === "red" ? `${styles.colors.red}` : `${styles.colors.black}`};

  :hover {
    color: ${styles.colors.white};
    background: ${styles.colors.green};
    padding: 0.5rem 1rem 0.5rem 1.3rem;
  }

  /* Desktop style */
  @media (min-width: 768px) {
    padding: 0.8rem 1rem 0.5rem 1rem;
    font-family: "Nunito";
    font-weight: 500;
    letter-spacing: 2px;
    color: ${({ color }) =>
      color === "red" ? `${styles.colors.red}` : `${styles.colors.black}`};

    :hover {
      background: ${styles.colors.white};
      color: ${({ color }) =>
        color === "red" ? `${styles.colors.red}` : `${styles.colors.black}`};

      ${StyledActiveBar} {
        background: ${styles.colors.green};
      }

      padding: 0.8rem 1rem 0.5rem 1rem;
    }
  }

  @media (min-width: 1300px) {
    font-size: 1.4rem;
  }
`;

const Wrapper = styled.ul`
  /* border: 1px solid green; */
  height: ${({ isOpen }) => (isOpen ? "170px" : "0px")};
  overflow: hidden;
  transition: ${styles.easeInOut};

  @media (min-width: 768px) {
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
