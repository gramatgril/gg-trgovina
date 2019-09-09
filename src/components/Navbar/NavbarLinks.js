import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";

import { styles } from "../../utils";

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
      name: "kontakt",
    },
  ]);

  return (
    <LinkWrapper isOpen={isOpen}>
      {links.map(({ id, path, name }) => (
        <li key={id}>
          <Link to={path} className="nav-link">
            {name}
          </Link>
        </li>
      ))}
    </LinkWrapper>
  );
};

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${styles.colors.white};
    font-weight: 400;
    font-size: 1.2rem;
    text-transform: capitalize;
    cursor: pointer;
    transition: ${styles.transition({ time: "0.3s" })};
    &:hover {
      background: ${styles.colors.green};
      color: ${styles.colors.white};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }

  height: ${({ isOpen }) => (isOpen ? "170px" : "0px")};
  overflow: hidden;
  transition: ${styles.transition({ time: "0.3s" })};

  @media (min-width: 768px) {
    height: auto;
    display: flex;
    color: ${styles.colors.white};
    margin: 0 auto;
    .nav-link:hover {
      color: ${styles.colors.white};
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`;

NavbarLinks.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default NavbarLinks;
