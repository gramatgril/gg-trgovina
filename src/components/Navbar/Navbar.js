import React, { useState } from "react";
import styled from "styled-components";
import { FaPhone, FaRegEnvelope } from "react-icons/fa";

import { styles } from "../../utils";

import NavbarHeader from "./NavbarHeader";
import NavbarIcons from "./NavbarIcons";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <div className="top-bar">
        <p>
          <FaRegEnvelope className="icon" /> info@gramat-gril.si
        </p>
        <p>
          <FaPhone className="icon" /> 01 786 33 64
        </p>
      </div>
      <div className="center">
        <NavbarHeader toggleOpen={toggleOpen} />
        <NavbarLinks isOpen={isOpen} />
        <NavbarIcons />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${styles.colors.black};
  box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.2);

  .top-bar {
    display: flex;
    justify-content: flex-end;
    background: ${styles.colors.green};

    p {
      align-items: center;
      padding: 0.1rem 1rem;
    }

    .icon {
      padding-top: 2px;
      font-size: 14px;
    }
  }

  @media (max-width: 600px) {
    .top-bar {
      justify-content: space-between;
    }
    .top-bar p {
      font-size: 0.8rem;
    }
    .top-bar .icon {
      padding-top: 3px;
    }
  }

  @media (min-width: 768px) {
    display: block;

    .center {
      width: 1300px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export default Navbar;
