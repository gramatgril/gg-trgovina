import React, { useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

import { styles } from "../../utils";

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

const NavbarLinks = ({ isOpen }) => {
  const [links] = useState([
    {
      id: 0,
      path: "/",
      name: "Kategorije",
    },
    {
      id: 2,
      path: "/nasveti",
      name: "nasveti",
    },
    {
      id: 1,
      path: "/katalog",
      name: "katalog",
    },
    {
      id: 3,
      path: "/info",
      name: "o nas",
    },
    {
      id: 4,
      path: "/kontakt",
      name: "povpraševanje",
    },
  ]);

  return (
    <Wrapper isOpen={isOpen}>
      {links.map(({ id, path, name }) => (
        <li key={id}>
          <Link to={path} className="nav-link">
            {name}
          </Link>
        </li>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  height: ${({ isOpen }) => (isOpen ? "200px" : "0px")};
  overflow: hidden;
  transition: ${styles.transition({ time: "0.3s" })};

  li {
    list-style-type: none;
  }

  .nav-link {
    color: ${styles.colors.black};
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    font-weight: 500;
    font-size: 1rem;
    text-transform: capitalize;
    cursor: pointer;
    transition: ${styles.transition({ time: "0.3s" })};
    :hover {
      background: ${styles.colors.green};
      color: ${styles.colors.white};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }

  @media (min-width: 768px) {
    color: ${styles.colors.white};
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link :hover {
      background: ${styles.colors.green};
      color: ${styles.colors.white};
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`;

NavbarLinks.propTypes = propTypes;

export default NavbarLinks;
