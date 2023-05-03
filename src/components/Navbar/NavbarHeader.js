import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from '../../images/logo-gg-new.jpg';

const propTypes = {
  toggleOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

const NavbarHeader = ({ toggleOpen, isOpen }) => (
  <Wrapper>
    <Logo to="/">
      <img src={logo} alt="logo" className="img" />
    </Logo>
    <MenuIcon className={isOpen ? 'open' : ''} onClick={() => toggleOpen()}>
      <span></span>
      <span></span>
      <span></span>
    </MenuIcon>
  </Wrapper>
);

NavbarHeader.propTypes = propTypes;

export default NavbarHeader;

const Logo = styled(Link)``;
const MenuIcon = styled.div``;

const Wrapper = styled.div`
  /* === MOBILE === */
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 6rem;

  ${Logo} {
    margin-left: 5%;
    height: 4rem;
    width: 210px;
  }

  ${MenuIcon} {
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
      background: ${({ theme }) => theme.primary[500]};
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
  }

  /* === DESKTOP === */
  @media (min-width: 1200px) {
    box-shadow: none; /* Menu icon hidden on mobile screen size */

    ${MenuIcon} {
      display: none;
    }
  }
`;
