import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

import { styles } from "../../utils";

const propTypes = {
  toggleOpen: PropTypes.func.isRequired,
};

const NavbarHeader = ({ toggleOpen }) => {
  return (
    <Wrapper>
      <Link to="/" className="link">
        <h1>GramatGril</h1>
      </Link>
      <FaBars className="toggle-icon" onClick={() => toggleOpen()} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;

  .logo {
    width: 2rem;
    height: 2rem;
  }

  .link {
    display: flex;
    justify-content: space-between;
    text-decoration: none;
  }

  .toggle-icon {
    font-size: 1.5rem;
    cursor: pointer;
    color: ${styles.colors.green};
  }

  h1 {
    color: ${styles.colors.green};
  }

  /* Menu icon hidden on mobile screen size */
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`;

NavbarHeader.propTypes = propTypes;

export default NavbarHeader;
