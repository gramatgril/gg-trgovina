import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import logo from "../../images/gg-logo.png";

const propTypes = {
  toggleOpen: PropTypes.func.isRequired,
};

const NavbarHeader = ({ toggleOpen }) => (
  <Wrapper>
    <StyledLogo to="/">
      <img src={logo} alt="logo" className="img" />
    </StyledLogo>
    <FaBars className="toggle-icon" onClick={() => toggleOpen()} />
  </Wrapper>
);

NavbarHeader.propTypes = propTypes;

export default NavbarHeader;

const StyledLogo = styled(Link)`
  margin-top: 1rem;
  width: 220px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0.5rem 0 0;

  .link {
    display: flex;
    justify-content: space-between;
  }

  .toggle-icon {
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.green};
  }

  /* Menu icon hidden on mobile screen size */
  @media (min-width: 900px) {
    box-shadow: none;
    .toggle-icon {
      display: none;
    }
  }
`;
