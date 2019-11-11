import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

const Title = ({ title, subtitle }) => {
  return (
    <Wrapper>
      <Text>
        <span>{title}</span>
        <span>{subtitle}</span>
      </Text>
    </Wrapper>
  );
};

Title.propTypes = propTypes;

export default Title;

const Text = styled.h1``;

const Wrapper = styled.div`
  text-transform: uppercase;
  font-size: 2rem;
  padding: 1rem 0;

  ${Text} {
    font-weight: 800;
    text-align: center;
    letter-spacing: 3px;
    color: ${({ theme }) => theme.primary[700]};

    span {
      display: block;
    }

    @media (min-width: 576px) {
      span {
        display: inline-block;
        margin: 0 0.35rem;
      }
    }
  }
`;
