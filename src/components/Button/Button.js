import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { styles } from "../../utils";

const propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

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
  padding: 0.6rem 2.5rem;
  font-size: 1rem;
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

PrimaryButton.propTypes = propTypes;
SecondaryButton.propTypes = propTypes;

export { PrimaryButton, SecondaryButton };
