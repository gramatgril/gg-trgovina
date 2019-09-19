import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { styles } from "../../styles";

const propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string,
  children: PropTypes.node,
};

const Banner = ({ title, info, children }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </Wrapper>
  );
};

Banner.propTypes = propTypes;

export default Banner;

const Wrapper = styled.div`
  margin: 0 auto;
  padding-top: 2rem;
  text-align: center;
  color: ${styles.colors.black};

  h1 {
    opacity: 1;
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    padding: 0 1rem;
    letter-spacing: 8px;
  }

  p {
    letter-spacing: 1.2px;
    width: 85%;
    margin: 0 auto;
    margin-bottom: 2rem;
    color: ${styles.colors.black};
  }

  @media (min-width: 768px) {
    width: 80vw;
  }
`;
