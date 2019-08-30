import React from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

import { styles } from "../../utils";

const NavbarHeader = ({ toggleOpen }) => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <h1>GramatGril</h1>
      </Link>
      <FaAlignRight className="toggle-icon" onClick={() => toggleOpen()} />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .toggle-icon {
    font-size: 1.5rem;
    cursor: pointer;
    color: ${styles.colors.mainWhite};
  }

  h1 {
    color: ${styles.colors.mainWhite};
  }

  /* Menu icon hidden on mobile screen size */
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`;

NavbarHeader.propTypes = {
  toggleOpen: PropTypes.func.isRequired,
};

export default NavbarHeader;
