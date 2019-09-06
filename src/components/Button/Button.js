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
  background: ${styles.colors.white};
  text-transform: uppercase;
  letter-spacing: ${styles.letterSpacing};
  color: ${styles.colors.green};
  border: 2px solid ${styles.colors.white};
  padding: 0.9rem 1.6rem;
  display: inline-block;
  transition: ${styles.linearTransition};
  cursor: pointer;

  :hover {
    background: transparent;
    color: ${styles.colors.white};
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  border: 2px solid ${styles.colors.green};
  background: ${styles.colors.green};
  color: ${styles.colors.white};

  :hover {
    border: 2px solid ${styles.colors.white};
    color: ${styles.colors.white};
  }
`;

export { PrimaryButton, SecondaryButton };
