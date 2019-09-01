import React from "react";
import styled from "styled-components";

import { styles } from "../../utils";

const PrimaryButton = ({ text, className }) => {
  return (
    <Button className={className} type="button">
      {text}
    </Button>
  );
};

const Button = styled.button`
  background: ${styles.colors.mainWhite};
  text-transform: uppercase;
  letter-spacing: 4px;
  color: ${styles.colors.mainGreen};
  border: 2px solid ${styles.colors.mainWhite};
  padding: 0.9rem 1.6rem;
  display: inline-block;
  transition: all 0.3s linear;
  cursor: pointer;

  :hover {
    background: transparent;
    color: ${styles.colors.mainWhite};
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  border: 2px solid ${styles.colors.mainGreen};
  background: ${styles.colors.mainGreen};
  color: ${styles.colors.mainWhite};

  :hover {
    border: 2px solid ${styles.colors.mainWhite};
    color: ${styles.colors.mainWhite};
  }
`;

export { PrimaryButton, SecondaryButton };
