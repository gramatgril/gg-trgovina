import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"

import { styles } from "../../utils"

const NavbarLinks = ({ isOpen }) => {
  const [links] = useState([
    {
      id: 0,
      path: "/",
      name: "domov",
    },
    {
      id: 1,
      path: "/info",
      name: "o nas",
    },
    {
      id: 2,
      path: "/katalog",
      name: "katalog",
    },
    {
      id: 3,
      path: "/kontakt",
      name: "kontakt",
    },
  ])

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
  )
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transition({ time: "0.2s" })};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }

  height: ${({ isOpen }) => (isOpen ? "152px" : "0px")};
  overflow: hidden;
  ${styles.transition({})};

  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`

NavbarLinks.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

export default NavbarLinks
