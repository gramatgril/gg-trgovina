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
    <Wrapper>
      <div className="nav-center">
        <NavbarHeader toggleOpen={toggleOpen} />
        <NavbarLinks isOpen={isOpen} />
        <NavbarIcons />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${styles.colors.white};
  box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.2);

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
