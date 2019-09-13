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
    <Wrapper className={className} type={type || "button"}>
      {text}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  background: ${styles.colors.white};
  text-transform: uppercase;
  letter-spacing: ${styles.letterSpacing};
  color: ${styles.colors.green};
  border: 2px solid ${styles.colors.green};
  padding: 0.6rem 2.5rem;
  font-size: 1rem;
  display: inline-block;
  transition: ${styles.linearTransition};
  cursor: pointer;

  :hover {
    background: transparent;
    background: ${styles.colors.green};
    color: ${styles.colors.white};
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  border: 2px solid ${styles.colors.green};
  background: ${styles.colors.green};
  color: ${styles.colors.white};

  :hover {
    background: ${styles.colors.white};
    border: 2px solid ${styles.colors.green};
    color: ${styles.colors.green};
  }
`;

PrimaryButton.propTypes = propTypes;
SecondaryButton.propTypes = propTypes;

export { PrimaryButton, SecondaryButton };
