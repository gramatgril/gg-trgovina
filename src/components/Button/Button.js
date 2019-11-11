import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

const PrimaryButton = ({ text, className, type, ...rest }) => (
  <StyledButton className={className} type={type || "button"} {...rest}>
    {text}
  </StyledButton>
);

PrimaryButton.propTypes = propTypes;

export default PrimaryButton;

const StyledButton = styled.button`
  max-width: 90vw;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  border-radius: 7px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  transition: ${({ theme }) => theme.linear};
  cursor: pointer;

  border: 2px solid ${({ theme }) => theme.primary[500]};
  color: ${({ theme }) => theme.primary[500]};
  background: ${({ theme }) => theme.grey[100]};

  :hover {
    border: 2px solid ${({ theme }) => theme.primary[500]};
    background: ${({ theme }) => theme.primary[500]};
    color: ${({ theme }) => theme.grey[100]};
  }

  @media (min-width: 576px) {
    /* font-size: 1rem; */
  }
`;
