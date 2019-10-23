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
  font-weight: 400;
  background: ${({ theme }) => theme.green};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.green};
  border-radius: 10px;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  display: inline-block;
  transition: ${({ theme }) => theme.linear};
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.green};
  }

  @media (min-width: 576px) {
    font-size: 1rem;
    font-weight: 400;
    padding: 0.6rem 1.2rem;
  }
`;
