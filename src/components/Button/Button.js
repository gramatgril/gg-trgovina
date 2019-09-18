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
    <StyledButton className={className} type={type || "button"}>
      {text}
    </StyledButton>
  );
};

PrimaryButton.propTypes = propTypes;

export default PrimaryButton;

const StyledButton = styled.button`
  max-width: 90vw;
  font-weight: 400;
  background: ${styles.colors.green};
  text-transform: uppercase;
  letter-spacing: ${styles.letterSpacing};
  color: ${styles.colors.white};
  border: 2px solid ${styles.colors.green};
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  display: inline-block;
  transition: ${styles.linearTransition};
  cursor: pointer;

  :hover {
    background: transparent;
    background: ${styles.colors.white};
    color: ${styles.colors.green};
  }

  @media (min-width: 576px) {
    font-size: 1.2rem;
    font-weight: 400;
    padding: 0.8rem 2.5rem;
  }
`;
