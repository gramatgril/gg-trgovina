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
      name: "domov",
    },
    {
      id: 1,
      path: "/kategorije",
      name: "kategorije",
    },
    // {
    //   id: 2,
    //   path: "/katalog",
    //   name: "katalog",
    // },
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
    color: ${styles.colors.mainGreen};
    font-weight: 700;
    font-size: 1.2rem;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transition({ time: "0.5s" })};
    &:hover {
      background: ${styles.colors.mainGreen};
      color: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }

  height: ${({ isOpen }) => (isOpen ? "170px" : "0px")};
  overflow: hidden;
  ${styles.transition({ time: "0.2s" })};

  @media (min-width: 768px) {
    height: auto;
    display: flex;
    color: ${styles.colors.mainWhite};
    margin: 0 auto;
    .nav-link:hover {
      color: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`;

NavbarLinks.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default NavbarLinks;
