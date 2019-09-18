import React from "react";
import styled from "styled-components";

import { styles } from "../../utils";

import { navIcons } from "../../utils";

const NavbarIcons = () => {
  return (
    <StyledIcons>
      {navIcons.map(({ id, path, icon }) => (
        <a key={id} href={path} target="_blank" rel="noopener noreferrer">
          {icon}
        </a>
      ))}
    </StyledIcons>
  );
};

export default NavbarIcons;

const StyledIcons = styled.div`
  .icon {
    font-size: 1.6rem;
    cursor: pointer;
    transition: ${styles.linearTransition};

    :hover {
      color: ${styles.colors.white};
    }
  }

  .facebook-icon {
    /* color: #3b579d; */
    color: ${styles.colors.green};
  }

  .stil-icon {
    height: 20px;
    color: #38b7f0;
  }

  .instagram-icon {
    color: ${styles.colors.green};
    /* color: #da5f53; */
  }

  display: none;

  @media (min-width: 768px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
`;
