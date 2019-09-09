import React from "react";
import styled from "styled-components";

import { styles } from "../../utils";

const PrimaryButton = ({ text, className, type }) => {
  return (
    <Button className={className} type={type || "button"}>
      {text}
    </Button>
  );
};

const Button = styled.button`
  background: ${styles.colors.green};
  text-transform: uppercase;
  letter-spacing: ${styles.letterSpacing};
  color: ${styles.colors.white};
  border: 2px solid ${styles.colors.green};
  padding: 0.9rem 1.6rem;
  font-size: 32px;
  display: inline-block;
  transition: ${styles.linearTransition};
  cursor: pointer;

  :hover {
    background: transparent;
    background: ${styles.colors.white};
    color: ${styles.colors.green};
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  border: 2px solid ${styles.colors.green};
  background: ${styles.colors.white};
  color: ${styles.colors.green};

  :hover {
    background: ${styles.colors.green};
    border: 2px solid ${styles.colors.green};
    color: ${styles.colors.white};
  }
`;

export { PrimaryButton, SecondaryButton };
