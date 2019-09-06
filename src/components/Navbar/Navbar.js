import React, { useState } from "react";
import styled from "styled-components";

import { styles } from "../../utils";

import NavbarHeader from "./NavbarHeader";
import NavbarIcons from "./NavbarIcons";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <NavbarWrapper>
      <div className="nav-center">
        <NavbarHeader toggleOpen={toggleOpen} />
        <NavbarLinks isOpen={isOpen} />
        <NavbarIcons />
      </div>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  background: ${styles.colors.grey};
  box-shadow: ${styles.lightShadow};

  @media (min-width: 768px) {
    display: flex;
    align-items: center;

    .nav-center {
      width: 1300px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export default Navbar;
