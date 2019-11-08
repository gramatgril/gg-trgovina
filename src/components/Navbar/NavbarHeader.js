import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import logo from "../../images/gg-logo.png";

const propTypes = {
  toggleOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

const NavbarHeader = ({ toggleOpen, isOpen }) => (
  <Wrapper>
    <StyledLogo to="/">
      <img src={logo} alt="logo" className="img" />
    </StyledLogo>
    <StyledIcon className={isOpen ? "open" : ""} onClick={() => toggleOpen()}>
      <span></span>
      <span></span>
      <span></span>
    </StyledIcon>
  </Wrapper>
);

NavbarHeader.propTypes = propTypes;

export default NavbarHeader;

const StyledLogo = styled(Link)`
  margin: 1rem 1rem 0;
  width: 220px;
`;

const StyledIcon = styled.div`
  width: 60px;
  height: 45px;
  position: relative;
  transform: rotate(0deg) scale(0.5);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background: ${({ theme }) => theme.green};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  span:nth-child(1) {
    top: 0px;
    transform-origin: left center;
  }

  span:nth-child(2) {
    top: 18px;
    transform-origin: left center;
  }

  span:nth-child(3) {
    top: 36px;
    transform-origin: left center;
  }

  &.open span:nth-child(1) {
    transform: rotate(45deg);
    top: -3px;
    left: 8px;
  }

  &.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 39px;
    left: 8px;
  }
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

  /* Menu icon hidden on mobile screen size */
  @media (min-width: 900px) {
    box-shadow: none;
    ${StyledIcon} {
      display: none;
    }
  }
`;
