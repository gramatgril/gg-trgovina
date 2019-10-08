import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { styles } from "../../styles";

const propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

const Title = ({ title, subtitle }) => {
  return (
    <Wrapper>
      <StyledText>
        <span>{title}</span>
        <span>{subtitle}</span>
      </StyledText>
    </Wrapper>
  );
};

Title.propTypes = propTypes;

export default Title;

const Wrapper = styled.div`
  text-transform: uppercase;
  font-size: 2rem;
  padding: 1rem 0;
  margin-bottom: 1rem;
`;

const StyledText = styled.h4`
  font-weight: 800;
  text-align: center;
  letter-spacing: 3px;
  color: ${styles.colors.green};

  span {
    text-shadow: 1px 1px 1px ${styles.colors.grey};
    display: block;
  }

  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`;
