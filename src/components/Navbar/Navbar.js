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
      <div className="top-bar">
        <p>info@gramat-gril.si</p>
        <p>01 786 33 64</p>
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
  background: ${styles.colors.white};
  box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.2);

  .top-bar {
    display: flex;
    justify-content: flex-end;
    background: ${styles.colors.green};
    color: ${styles.colors.white};

    p {
      align-items: center;
      padding: 0.1rem 1rem;
    }

    .icon {
      padding-top: 2px;
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
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
    .center {
      padding: 0.2rem 0;
      width: 100vw;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  @media (min-width: 1200px) {
    .center {
      width: 80vw;
    }
  }
`;

export default Navbar;
