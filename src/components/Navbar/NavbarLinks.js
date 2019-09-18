import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

import { styles } from "../../utils";
import { navLinks } from "./../../utils";

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

const NavbarLinks = ({ isOpen }) => {
  return (
    <StyledLinks isOpen={isOpen}>
      {navLinks.map(({ id, path, name }) => (
        <li key={id}>
          <Link to={path} className="nav-link">
            {name}
          </Link>
        </li>
      ))}
    </StyledLinks>
  );
};

NavbarLinks.propTypes = propTypes;

export default NavbarLinks;

const StyledLinks = styled.ul`
  height: ${({ isOpen }) => (isOpen ? "220px" : "0px")};
  overflow: hidden;
  transition: ${styles.transition({ time: "0.3s" })};

  /* Colors last link as red "Akcija" */
  li {
    list-style-type: none;

    :last-child .nav-link {
      font-weight: 700;
      color: ${styles.colors.red};

      :hover {
        color: ${styles.colors.green};
      }
    }
  }

  .nav-link {
    color: ${styles.colors.black};
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    font-weight: 500;
    letter-spacing: 1px;
    font-size: 1.2rem;
    text-transform: capitalize;

    cursor: pointer;
    transition: ${styles.transition({ time: "0.3s" })};

    :hover {
      color: ${styles.colors.green};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }

  @media (min-width: 768px) {
    color: ${styles.colors.white};
    height: auto;
    display: flex;
    margin: 0 auto;

    .nav-link {
      font-size: 0.8rem;

      :hover {
        color: ${styles.colors.green};
        padding: 0.5rem 1rem 0.5rem 1rem;
      }
    }
  }

  @media (min-width: 1300px) {
    .nav-link {
      font-size: 1rem;
    }

    :hover {
      color: ${styles.colors.green};
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`;
